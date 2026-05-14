const express = require('express');
const fs      = require('fs');
const path    = require('path');

const app  = express();
const PORT = process.env.PORT || 3000;
const DB   = process.env.DB_PATH || path.join(__dirname, 'data', 'db.json');
const ADMIN_CODE = process.env.ADMIN_CODE || 'admin2026';

function readDB() {
  if (!fs.existsSync(DB)) {
    const empty = { teams: [], assessments: {} };
    fs.writeFileSync(DB, JSON.stringify(empty, null, 2));
    return empty;
  }
  return JSON.parse(fs.readFileSync(DB, 'utf8'));
}
function writeDB(data) { fs.writeFileSync(DB, JSON.stringify(data, null, 2)); }
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

app.get('/api/admin/teams', (req, res) => {
  const db = readDB();
  res.json(db.teams.map(t => ({
    ...t,
    memberCount:   t.members.length,
    roleCount:     (t.roles || []).length,
    assessedCount: Object.keys(db.assessments[t.id] || {}).length,
  })));
});

app.post('/api/admin/teams', (req, res) => {
  const { name, code, leadName, description, icon, color } = req.body;
  if (!name || !code || !leadName)
    return res.status(400).json({ error: 'name, code and leadName required' });
  const db = readDB();
  if (db.teams.find(t => t.code === code.toLowerCase()))
    return res.status(409).json({ error: 'Team code already exists' });
  const team = {
    id: `team-${uid()}`, name,
    code: code.toLowerCase().replace(/\s+/g, '-'),
    leadName, description: description || '',
    icon: icon || '👥', color: color || '#0D2B4E',
    members: [], roles: [],
    createdAt: new Date().toISOString(),
  };
  db.teams.push(team);
  db.assessments[team.id] = {};
  writeDB(db);
  res.status(201).json(team);
});

app.put('/api/admin/teams/:id', (req, res) => {
  const db  = readDB();
  const idx = db.teams.findIndex(t => t.id === req.params.id);
  if (idx < 0) return res.status(404).json({ error: 'Not found' });
  db.teams[idx] = { ...db.teams[idx], ...req.body };
  writeDB(db);
  res.json(db.teams[idx]);
});

app.delete('/api/admin/teams/:id', (req, res) => {
  const db = readDB();
  db.teams = db.teams.filter(t => t.id !== req.params.id);
  delete db.assessments[req.params.id];
  writeDB(db);
  res.json({ ok: true });
});

// ── LOGIN ──────────────────────────────────────────────────────────────────────
app.post('/api/login', (req, res) => {
  const { teamCode, userName } = req.body;
  const db   = readDB();
  const team = db.teams.find(t => t.code === teamCode.toLowerCase().trim());
  if (!team) return res.status(404).json({ error: 'Team not found. Check your team code.' });

  const isLead = team.leadName.toLowerCase() === userName.toLowerCase().trim();
  team.members = normMembers(team.members);
  const existing = team.members.find(m => m.name.toLowerCase() === userName.toLowerCase().trim());

  let member = existing || null;
  const isNew = !isLead && !member;
  if (isNew) {
    member = { name: userName.trim(), roleId: null };
    team.members.push(member);
    writeDB(db);
  }

  const resolvedName = isLead ? team.leadName : (member?.name || userName.trim());
  const needsRolePick = !isLead && (!member?.roleId);

  res.json({
    role:          isLead ? 'lead' : 'dev',
    team:          { id: team.id, name: team.name, leadName: team.leadName, icon: team.icon, color: team.color },
    userName:      resolvedName,
    memberRoleId:  member?.roleId || null,
    needsRolePick,
    roles:         team.roles || [],
  });
});

// ── TEAM CONFIG ────────────────────────────────────────────────────────────────
app.get('/api/teams/:teamId/config', (req, res) => {
  const db   = readDB();
  const team = db.teams.find(t => t.id === req.params.teamId);
  if (!team) return res.status(404).json({ error: 'Not found' });
  res.json(team);
});

app.put('/api/teams/:teamId/config', (req, res) => {
  const db  = readDB();
  const idx = db.teams.findIndex(t => t.id === req.params.teamId);
  if (idx < 0) return res.status(404).json({ error: 'Not found' });
  ['name','description','icon','color'].forEach(k => {
    if (req.body[k] !== undefined) db.teams[idx][k] = req.body[k];
  });
  writeDB(db);
  res.json(db.teams[idx]);
});

// ── ROLES ──────────────────────────────────────────────────────────────────────
app.get('/api/teams/:teamId/roles', (req, res) => {
  const db   = readDB();
  const team = db.teams.find(t => t.id === req.params.teamId);
  if (!team) return res.status(404).json({ error: 'Not found' });
  res.json(team.roles || []);
});

app.post('/api/teams/:teamId/roles', (req, res) => {
  const db   = readDB();
  const team = db.teams.find(t => t.id === req.params.teamId);
  if (!team) return res.status(404).json({ error: 'Not found' });
  if (!team.roles) team.roles = [];
  const role = { id: `role-${uid()}`, ...req.body, createdAt: new Date().toISOString() };
  team.roles.push(role);
  writeDB(db);
  res.status(201).json(role);
});

app.put('/api/teams/:teamId/roles/:roleId', (req, res) => {
  const db   = readDB();
  const team = db.teams.find(t => t.id === req.params.teamId);
  if (!team) return res.status(404).json({ error: 'Not found' });
  const idx = (team.roles || []).findIndex(r => r.id === req.params.roleId);
  if (idx < 0) return res.status(404).json({ error: 'Role not found' });
  team.roles[idx] = { ...team.roles[idx], ...req.body };
  writeDB(db);
  res.json(team.roles[idx]);
});

app.delete('/api/teams/:teamId/roles/:roleId', (req, res) => {
  const db   = readDB();
  const team = db.teams.find(t => t.id === req.params.teamId);
  if (!team) return res.status(404).json({ error: 'Not found' });
  team.roles = (team.roles || []).filter(r => r.id !== req.params.roleId);
  writeDB(db);
  res.json({ ok: true });
});

// ── MEMBERS ────────────────────────────────────────────────────────────────────
app.get('/api/teams/:teamId/members', (req, res) => {
  const db   = readDB();
  const team = db.teams.find(t => t.id === req.params.teamId);
  if (!team) return res.status(404).json({ error: 'Not found' });
  res.json(normMembers(team.members));
});

app.post('/api/teams/:teamId/members', (req, res) => {
  const { name, roleId } = req.body;
  if (!name) return res.status(400).json({ error: 'name required' });
  const db   = readDB();
  const team = db.teams.find(t => t.id === req.params.teamId);
  if (!team) return res.status(404).json({ error: 'Not found' });
  team.members = normMembers(team.members);
  const exists = team.members.find(m => m.name.toLowerCase() === name.toLowerCase());
  if (!exists) { team.members.push({ name, roleId: roleId || null }); writeDB(db); }
  res.json({ ok: true });
});

app.put('/api/teams/:teamId/members/:name/role', (req, res) => {
  const db   = readDB();
  const team = db.teams.find(t => t.id === req.params.teamId);
  if (!team) return res.status(404).json({ error: 'Not found' });
  team.members = normMembers(team.members);
  const member = team.members.find(m => m.name === decodeURIComponent(req.params.name));
  if (!member) return res.status(404).json({ error: 'Member not found' });
  member.roleId = req.body.roleId;
  writeDB(db);
  res.json({ ok: true });
});

app.delete('/api/teams/:teamId/members/:name', (req, res) => {
  const db   = readDB();
  const team = db.teams.find(t => t.id === req.params.teamId);
  if (!team) return res.status(404).json({ error: 'Not found' });
  team.members = normMembers(team.members).filter(m => m.name !== decodeURIComponent(req.params.name));
  writeDB(db);
  res.json({ ok: true });
});

// ── ASSESSMENTS ────────────────────────────────────────────────────────────────
app.get('/api/assessments/:teamId/:member', (req, res) => {
  const db = readDB();
  const d  = (db.assessments[req.params.teamId] || {})[decodeURIComponent(req.params.member)];
  res.json(d || {
    scores: {}, evidence: {}, calibratedScores: {}, calibrationNotes: {},
    actions: [], level: '', proficiency: '', calibratedLevel: '', roleId: null,
    history: []
  });
});

app.put('/api/assessments/:teamId/:member', (req, res) => {
  const db = readDB();
  if (!db.assessments[req.params.teamId]) db.assessments[req.params.teamId] = {};
  db.assessments[req.params.teamId][decodeURIComponent(req.params.member)] = req.body;
  writeDB(db);
  res.json({ ok: true });
});

// ── CHECKPOINT (save snapshot) ─────────────────────────────────────────────────
app.post('/api/assessments/:teamId/:member/checkpoint', (req, res) => {
  const db = readDB();
  if (!db.assessments[req.params.teamId]) db.assessments[req.params.teamId] = {};
  const memberKey = decodeURIComponent(req.params.member);
  const data = db.assessments[req.params.teamId][memberKey];
  if (!data) return res.status(404).json({ error: 'No assessment found' });

  if (!data.history) data.history = [];
  data.history.push({
    date: new Date().toISOString(),
    label: req.body.label || `Checkpoint ${data.history.length + 1}`,
    scores: { ...data.scores },
    level: data.level,
    proficiency: data.proficiency,
  });
  writeDB(db);
  res.json({ ok: true, checkpoints: data.history.length });
});

app.get('/api/coverage/:teamId', (req, res) => {
  const db   = readDB();
  const team = db.teams.find(t => t.id === req.params.teamId);
  if (!team) return res.status(404).json({ error: 'Not found' });
  res.json({ team: { ...team, members: normMembers(team.members) }, assessments: db.assessments[req.params.teamId] || {} });
});

app.listen(PORT, () => {
  console.log(`\n  🚢  Career Dev Framework v3  →  http://localhost:${PORT}`);
  console.log(`      Admin code: ${ADMIN_CODE}\n`);
});
