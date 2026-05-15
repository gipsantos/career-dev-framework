const express = require('express');
const path    = require('path');
const db      = require('./db');

const app  = express();
const PORT = process.env.PORT || 3000;
const ADMIN_CODE = process.env.ADMIN_CODE || 'admin2026';

function uid() { return `${Date.now()}-${Math.random().toString(36).slice(2,7)}`; }
function normMembers(members) {
  return (members||[]).map(m => typeof m === 'string' ? { name: m, roleId: null } : m);
}

app.use(express.json({ limit: '2mb' }));
app.use(express.static(path.join(__dirname, 'public')));

// ── ADMIN ──────────────────────────────────────────────────────────────────────
app.post('/api/admin/login', (req, res) => {
  if (req.body.code === ADMIN_CODE) return res.json({ ok: true });
  res.status(401).json({ error: 'Invalid admin code' });
});

app.get('/api/admin/teams', async (req, res) => {
  const teams = await db.getTeams();
  const result = [];
  for (const t of teams) {
    const assessments = await db.getTeamAssessments(t.id);
    result.push({
      ...t,
      memberCount:   (t.members||[]).length,
      roleCount:     (t.roles || []).length,
      assessedCount: Object.keys(assessments).length,
    });
  }
  res.json(result);
});

app.post('/api/admin/teams', async (req, res) => {
  const { name, code, leadName, description, icon, color } = req.body;
  if (!name || !code || !leadName)
    return res.status(400).json({ error: 'name, code and leadName required' });
  const existing = await db.getTeamByCode(code.toLowerCase());
  if (existing) return res.status(409).json({ error: 'Team code already exists' });
  const team = {
    id: `team-${uid()}`, name,
    code: code.toLowerCase().replace(/\s+/g, '-'),
    leadName, description: description || '',
    icon: icon || '👥', color: color || '#0D2B4E',
    members: [], roles: [],
    createdAt: new Date().toISOString(),
  };
  await db.saveTeam(team);
  res.status(201).json(team);
});

app.put('/api/admin/teams/:id', async (req, res) => {
  const team = await db.getTeam(req.params.id);
  if (!team) return res.status(404).json({ error: 'Not found' });
  const updated = { ...team, ...req.body };
  await db.saveTeam(updated);
  res.json(updated);
});

app.delete('/api/admin/teams/:id', async (req, res) => {
  await db.deleteTeam(req.params.id);
  res.json({ ok: true });
});

// ── LOGIN ──────────────────────────────────────────────────────────────────────
app.post('/api/login', async (req, res) => {
  const { teamCode, userName } = req.body;
  const team = await db.getTeamByCode(teamCode.toLowerCase().trim());
  if (!team) return res.status(404).json({ error: 'Team not found. Check your team code.' });

  const isLead = team.leadName.toLowerCase() === userName.toLowerCase().trim();
  team.members = normMembers(team.members);
  const existing = team.members.find(m => m.name.toLowerCase() === userName.toLowerCase().trim());

  let member = existing || null;
  const isNew = !isLead && !member;
  if (isNew) {
    member = { name: userName.trim(), roleId: null };
    team.members.push(member);
    await db.saveTeam(team);
  }

  // Lead can also be in the members list (for self-assessment)
  let leadMember = null;
  if (isLead) {
    leadMember = team.members.find(m => m.name.toLowerCase() === team.leadName.toLowerCase());
    if (!leadMember) {
      leadMember = { name: team.leadName, roleId: null };
      team.members.push(leadMember);
      await db.saveTeam(team);
    }
  }

  const resolvedName = isLead ? team.leadName : (member?.name || userName.trim());
  const memberRoleId = isLead ? (leadMember?.roleId || null) : (member?.roleId || null);
  const needsRolePick = !isLead && (!member?.roleId) && (team.roles||[]).length > 0;

  res.json({
    role:          isLead ? 'lead' : 'dev',
    team:          { id: team.id, name: team.name, leadName: team.leadName, icon: team.icon, color: team.color },
    userName:      resolvedName,
    memberRoleId:  memberRoleId,
    needsRolePick,
    roles:         team.roles || [],
  });
});

// ── TEAM CONFIG ────────────────────────────────────────────────────────────────
app.get('/api/teams/:teamId/config', async (req, res) => {
  const team = await db.getTeam(req.params.teamId);
  if (!team) return res.status(404).json({ error: 'Not found' });
  res.json(team);
});

app.put('/api/teams/:teamId/config', async (req, res) => {
  const team = await db.getTeam(req.params.teamId);
  if (!team) return res.status(404).json({ error: 'Not found' });
  ['name','description','icon','color'].forEach(k => {
    if (req.body[k] !== undefined) team[k] = req.body[k];
  });
  await db.saveTeam(team);
  res.json(team);
});

// ── ROLES ──────────────────────────────────────────────────────────────────────
app.get('/api/teams/:teamId/roles', async (req, res) => {
  const team = await db.getTeam(req.params.teamId);
  if (!team) return res.status(404).json({ error: 'Not found' });
  res.json(team.roles || []);
});

app.post('/api/teams/:teamId/roles', async (req, res) => {
  const team = await db.getTeam(req.params.teamId);
  if (!team) return res.status(404).json({ error: 'Not found' });
  if (!team.roles) team.roles = [];
  const role = { id: `role-${uid()}`, ...req.body, createdAt: new Date().toISOString() };
  team.roles.push(role);
  await db.saveTeam(team);
  res.status(201).json(role);
});

app.put('/api/teams/:teamId/roles/:roleId', async (req, res) => {
  const team = await db.getTeam(req.params.teamId);
  if (!team) return res.status(404).json({ error: 'Not found' });
  const idx = (team.roles || []).findIndex(r => r.id === req.params.roleId);
  if (idx < 0) return res.status(404).json({ error: 'Role not found' });
  team.roles[idx] = { ...team.roles[idx], ...req.body };
  await db.saveTeam(team);
  res.json(team.roles[idx]);
});

app.delete('/api/teams/:teamId/roles/:roleId', async (req, res) => {
  const team = await db.getTeam(req.params.teamId);
  if (!team) return res.status(404).json({ error: 'Not found' });
  team.roles = (team.roles || []).filter(r => r.id !== req.params.roleId);
  await db.saveTeam(team);
  res.json({ ok: true });
});

// ── MEMBERS ────────────────────────────────────────────────────────────────────
app.get('/api/teams/:teamId/members', async (req, res) => {
  const team = await db.getTeam(req.params.teamId);
  if (!team) return res.status(404).json({ error: 'Not found' });
  res.json(normMembers(team.members));
});

app.post('/api/teams/:teamId/members', async (req, res) => {
  const { name, roleId } = req.body;
  if (!name) return res.status(400).json({ error: 'name required' });
  const team = await db.getTeam(req.params.teamId);
  if (!team) return res.status(404).json({ error: 'Not found' });
  team.members = normMembers(team.members);
  const exists = team.members.find(m => m.name.toLowerCase() === name.toLowerCase());
  if (!exists) { team.members.push({ name, roleId: roleId || null }); await db.saveTeam(team); }
  res.json({ ok: true });
});

app.put('/api/teams/:teamId/members/:name/role', async (req, res) => {
  const team = await db.getTeam(req.params.teamId);
  if (!team) return res.status(404).json({ error: 'Not found' });
  team.members = normMembers(team.members);
  const member = team.members.find(m => m.name === decodeURIComponent(req.params.name));
  if (!member) return res.status(404).json({ error: 'Member not found' });
  member.roleId = req.body.roleId;
  await db.saveTeam(team);
  res.json({ ok: true });
});

app.delete('/api/teams/:teamId/members/:name', async (req, res) => {
  const team = await db.getTeam(req.params.teamId);
  if (!team) return res.status(404).json({ error: 'Not found' });
  team.members = normMembers(team.members).filter(m => m.name !== decodeURIComponent(req.params.name));
  await db.saveTeam(team);
  res.json({ ok: true });
});

// ── ASSESSMENTS ────────────────────────────────────────────────────────────────
app.get('/api/assessments/:teamId/:member', async (req, res) => {
  const memberName = decodeURIComponent(req.params.member);
  const data = await db.getAssessment(req.params.teamId, memberName);
  res.json(data || {
    scores: {}, evidence: {}, calibratedScores: {}, calibrationNotes: {},
    actions: [], level: '', proficiency: '', calibratedLevel: '', roleId: null,
    history: []
  });
});

app.put('/api/assessments/:teamId/:member', async (req, res) => {
  const memberName = decodeURIComponent(req.params.member);
  await db.saveAssessment(req.params.teamId, memberName, req.body);
  res.json({ ok: true });
});

// ── CHECKPOINT ─────────────────────────────────────────────────────────────────
app.post('/api/assessments/:teamId/:member/checkpoint', async (req, res) => {
  const memberName = decodeURIComponent(req.params.member);
  const data = await db.getAssessment(req.params.teamId, memberName);
  if (!data) return res.status(404).json({ error: 'No assessment found' });

  if (!data.history) data.history = [];
  data.history.push({
    date: new Date().toISOString(),
    label: req.body.label || `Checkpoint ${data.history.length + 1}`,
    scores: { ...data.scores },
    level: data.level,
    proficiency: data.proficiency,
  });
  await db.saveAssessment(req.params.teamId, memberName, data);
  res.json({ ok: true, checkpoints: data.history.length });
});

// ── COVERAGE ───────────────────────────────────────────────────────────────────
app.get('/api/coverage/:teamId', async (req, res) => {
  const team = await db.getTeam(req.params.teamId);
  if (!team) return res.status(404).json({ error: 'Not found' });
  const assessments = await db.getTeamAssessments(req.params.teamId);
  res.json({ team: { ...team, members: normMembers(team.members) }, assessments });
});

// ── START ──────────────────────────────────────────────────────────────────────
async function start() {
  if (process.env.DATABASE_URL) {
    await db.initDB();
    console.log('  📦  Using PostgreSQL database');
  } else {
    console.log('  ⚠️   No DATABASE_URL set — database features disabled');
    console.log('       Set DATABASE_URL to connect to PostgreSQL');
  }
  app.listen(PORT, () => {
    console.log(`\n  🚢  Career Dev Framework v3  →  http://localhost:${PORT}`);
    console.log(`      Admin code: ${ADMIN_CODE}\n`);
  });
}

start().catch(err => {
  console.error('Failed to start:', err);
  process.exit(1);
});
