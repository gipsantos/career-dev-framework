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

// ── INPUT VALIDATION HELPERS (P1: T09) ─────────────────────────────────────────
function validateString(val, field, min=1, max=200) {
  if (!val || typeof val !== 'string') return `${field} is required`;
  const trimmed = val.trim();
  if (trimmed.length < min) return `${field} must be at least ${min} characters`;
  if (trimmed.length > max) return `${field} must be at most ${max} characters`;
  return null;
}

function validateScore(val) {
  if (val === undefined || val === null) return null;
  const n = Number(val);
  if (!Number.isInteger(n) || n < 0 || n > 5) return 'Score must be 0-5';
  return null;
}

// ── ERROR HANDLING MIDDLEWARE (P1: T10) ────────────────────────────────────────
function asyncHandler(fn) {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(err => {
      console.error(`[ERROR] ${req.method} ${req.path}:`, err.message);
      res.status(500).json({ error: 'Internal server error', detail: err.message });
    });
  };
}

app.use(express.json({ limit: '2mb' }));
app.use(express.static(path.join(__dirname, 'public')));

// ── ADMIN ──────────────────────────────────────────────────────────────────────
app.post('/api/admin/login', (req, res) => {
  if (req.body.code === ADMIN_CODE) return res.json({ ok: true });
  res.status(401).json({ error: 'Invalid admin code' });
});

app.get('/api/admin/teams', asyncHandler(async (req, res) => {
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
}));

app.post('/api/admin/teams', asyncHandler(async (req, res) => {
  const { name, code, leadName, description, icon, color, productLead, engineeringManager } = req.body;
  const errName = validateString(name, 'Team name');
  const errCode = validateString(code, 'Team code', 2, 30);
  const errLead = validateString(leadName, 'Lead name');
  if (errName) return res.status(400).json({ error: errName });
  if (errCode) return res.status(400).json({ error: errCode });
  if (errLead) return res.status(400).json({ error: errLead });
  const existing = await db.getTeamByCode(code.toLowerCase());
  if (existing) return res.status(409).json({ error: 'Team code already exists' });
  const team = {
    id: `team-${uid()}`, name: name.trim(),
    code: code.toLowerCase().replace(/\s+/g, '-'),
    leadName: leadName.trim(), description: (description || '').trim(),
    icon: icon || '👥', color: color || '#0D2B4E',
    productLead: (productLead || '').trim(),
    engineeringManager: (engineeringManager || '').trim(),
    members: [], roles: [], additionalLeads: [],
    createdAt: new Date().toISOString(),
  };
  await db.saveTeam(team);
  res.status(201).json(team);
}));

app.put('/api/admin/teams/:id', asyncHandler(async (req, res) => {
  const team = await db.getTeam(req.params.id);
  if (!team) return res.status(404).json({ error: 'Not found' });
  // Allow updating key fields
  const allowedFields = ['name','description','icon','color','leadName','productLead','engineeringManager'];
  allowedFields.forEach(k => {
    if (req.body[k] !== undefined) team[k] = req.body[k];
  });
  await db.saveTeam(team);
  res.json(team);
}));

app.delete('/api/admin/teams/:id', asyncHandler(async (req, res) => {
  await db.deleteTeam(req.params.id);
  res.json({ ok: true });
}));

// ── SKILLS LIBRARY ────────────────────────────────────────────────────────────
const SKILL_LIBRARY = [
  // Technical
  { name:'Python', desc:'Write clean Python applying OOP and best practices.', category:'Technical' },
  { name:'REST API Development', desc:'Design and implement RESTful APIs with auth and versioning.', category:'Technical' },
  { name:'CI/CD – GitLab CI', desc:'Create and evolve pipelines supporting continuous deployment.', category:'Technical' },
  { name:'Kafka', desc:'Build producers/consumers. Async-to-Snowflake patterns.', category:'Technical' },
  { name:'AWS – EKS, S3, IAM', desc:'Work with AWS services applying basic security principles.', category:'Technical' },
  { name:'Terraform / IaC', desc:'Write Terraform to create and manage infrastructure.', category:'Technical' },
  { name:'Airflow', desc:'Write and deploy Airflow DAGs; manage task dependencies.', category:'Technical' },
  { name:'Snowflake / Data Warehouse', desc:'Query, model, optimise data. Understand data historisation.', category:'Technical' },
  { name:'Frontend Development', desc:'Build and maintain functional frontend features.', category:'Technical' },
  { name:'Monitoring & Observability', desc:'Configure alerts and dashboards; contribute to observability.', category:'Technical' },
  { name:'SQL / Data Querying', desc:'Write SQL to validate data and support analysis.', category:'Technical' },
  { name:'Docker & Kubernetes', desc:'Containerise and orchestrate workloads in Kubernetes.', category:'Technical' },
  { name:'Security by Design', desc:'Apply security principles from design (OWASP, IAM).', category:'Technical' },
  { name:'Event-Driven Architecture', desc:'Design resilient event-driven systems with Kafka.', category:'Technical' },
  { name:'Data Modelling & Analysis', desc:'Understand data structures; model and analyse data flows.', category:'Technical' },
  { name:'Architecture Patterns', desc:'Apply microservices, event-driven and layered patterns.', category:'Technical' },
  { name:'C4 Modelling & ADRs', desc:'Produce clear C4 diagrams and architecture decisions.', category:'Technical' },
  { name:'Dashboarding & Visualisation', desc:'Build programmatic dashboards from data.', category:'Technical' },
  // Business
  { name:'Maritime Schedule Domain', desc:'Voyage lifecycle, ETA/ETD, cut-offs, rotations. Core domain knowledge.', category:'Business' },
  { name:'Stakeholder Management', desc:'Build relationships and manage expectations across all levels.', category:'Business' },
  { name:'Requirements Elicitation', desc:'Gather and document business requirements clearly.', category:'Business' },
  { name:'User Stories & Acceptance Criteria', desc:'Write clear user stories and measurable AC.', category:'Business' },
  { name:'Process Modelling – BPMN', desc:'Model business processes with clarity and precision.', category:'Business' },
  { name:'Cost Awareness', desc:'Consider cloud costs; flag expensive patterns.', category:'Business' },
  { name:'Business Goals Alignment', desc:'Connect requirements to business goals and strategy.', category:'Business' },
  { name:'Data Quality & Consistency', desc:'Implement validations; communicate downstream impact.', category:'Business' },
  // Behavioural
  { name:'Pair Programming & Knowledge Sharing', desc:'Initiate pairing; share knowledge via demos and docs.', category:'Behavioural' },
  { name:'Constructive Feedback', desc:'Give and receive technical feedback objectively.', category:'Behavioural' },
  { name:'Technical Documentation', desc:'Produce clear docs (C4, FO, ADRs) for different audiences.', category:'Behavioural' },
  { name:'Clear & Adapted Communication', desc:'Communicate clearly to technical and non-technical audiences.', category:'Behavioural' },
  { name:'Accountability & Ownership', desc:'Take full ownership, including when things go wrong.', category:'Behavioural' },
  { name:'Agile & Continuous Delivery', desc:'Apply Agile values; support short cycles and quality.', category:'Behavioural' },
  { name:'Facilitation & Workshop Leading', desc:'Run effective workshops, refinements and discovery sessions.', category:'Behavioural' },
  { name:'Critical & Analytical Thinking', desc:'Analyse problems systematically; challenge assumptions.', category:'Behavioural' },
  { name:'Technical Leadership', desc:'Lead by example; influence decisions without authority.', category:'Behavioural' },
  { name:'Mentoring', desc:'Develop team members; share knowledge proactively.', category:'Behavioural' },
  { name:'Proactive Improvement', desc:'Spot and act on improvements without being asked.', category:'Behavioural' },
  // AI
  { name:'AI-Assisted Development', desc:'Use AI coding assistants (Copilot, Kiro) effectively in daily work.', category:'AI & Automation' },
  { name:'Prompt Engineering', desc:'Write effective prompts for code generation, analysis and documentation.', category:'AI & Automation' },
  { name:'AI Output Review & Validation', desc:'Critically evaluate AI-generated code for correctness and security.', category:'AI & Automation' },
  { name:'AI-Powered Automation', desc:'Build automated workflows using AI (testing, docs, data pipelines).', category:'AI & Automation' },
  { name:'AI Trends & Responsible Use', desc:'Stay current on AI capabilities; apply ethical and responsible AI practices.', category:'AI & Automation' },
];

app.get('/api/skills', asyncHandler(async (req, res) => {
  const q = (req.query.q || '').toLowerCase().trim();
  const limit = parseInt(req.query.limit) || 0;
  // Collect custom skills from all teams' matrices
  const teams = await db.getTeams();
  const teamSkills = [];
  for (const team of teams) {
    for (const role of (team.roles || [])) {
      for (const section of (role.sections || [])) {
        for (const skill of (section.skills || [])) {
          if (skill.name && !SKILL_LIBRARY.some(s => s.name.toLowerCase() === skill.name.toLowerCase())) {
            if (!teamSkills.some(s => s.name.toLowerCase() === skill.name.toLowerCase())) {
              teamSkills.push({ name: skill.name, desc: skill.desc || '', category: 'Custom' });
            }
          }
        }
      }
    }
  }
  const all = [...SKILL_LIBRARY, ...teamSkills];
  const results = q ? all.filter(s => s.name.toLowerCase().includes(q) || s.desc.toLowerCase().includes(q)) : all;
  res.json(limit ? results.slice(0, limit) : results);
}));

app.post('/api/skills', asyncHandler(async (req, res) => {
  const { name, desc, category } = req.body;
  const err = validateString(name, 'Skill name', 1, 100);
  if (err) return res.status(400).json({ error: err });
  // Check for duplicates
  const existing = SKILL_LIBRARY.find(s => s.name.toLowerCase() === name.trim().toLowerCase());
  if (existing) return res.status(400).json({ error: 'A skill with this name already exists.' });
  // Add to library (in-memory for this session; persists via custom skills in team matrices)
  SKILL_LIBRARY.push({ name: name.trim(), desc: (desc || '').trim(), category: category || 'Custom' });
  res.json({ ok: true });
}));

app.put('/api/skills/:name', asyncHandler(async (req, res) => {
  const skillName = decodeURIComponent(req.params.name).trim();
  const { category } = req.body;
  if (!category) return res.status(400).json({ error: 'Category is required' });
  const idx = SKILL_LIBRARY.findIndex(s => s.name.toLowerCase() === skillName.toLowerCase());
  if (idx < 0) return res.status(404).json({ error: 'Skill not found in library' });
  SKILL_LIBRARY[idx].category = category;
  res.json({ ok: true, skill: SKILL_LIBRARY[idx] });
}));

app.delete('/api/skills/:name', asyncHandler(async (req, res) => {
  const skillName = decodeURIComponent(req.params.name).trim();
  // Check if skill is used in any team's role matrix
  const teams = await db.getTeams();
  const usedBy = [];
  for (const team of teams) {
    for (const role of (team.roles || [])) {
      for (const section of (role.sections || [])) {
        for (const skill of (section.skills || [])) {
          if (skill.name.toLowerCase() === skillName.toLowerCase()) {
            usedBy.push({ team: team.name, role: role.name });
          }
        }
      }
    }
  }
  if (usedBy.length > 0) {
    const usage = usedBy.map(u => `${u.team} → ${u.role}`).join(', ');
    return res.status(400).json({ error: `Cannot delete: skill is used in ${usedBy.length} matrix(es): ${usage}` });
  }
  // Remove from library
  const idx = SKILL_LIBRARY.findIndex(s => s.name.toLowerCase() === skillName.toLowerCase());
  if (idx >= 0) SKILL_LIBRARY.splice(idx, 1);
  res.json({ ok: true });
}));

// ── LOGIN ──────────────────────────────────────────────────────────────────────
// New: discover all profiles for a user across teams
app.post('/api/login/discover', asyncHandler(async (req, res) => {
  const { userName } = req.body;
  const err = validateString(userName, 'Name');
  if (err) return res.status(400).json({ error: err });
  const name = userName.trim().toLowerCase();
  const teams = await db.getTeams();
  const profiles = [];

  for (const team of teams) {
    const isLead = team.leadName?.toLowerCase() === name;
    const isPL = team.productLead?.toLowerCase() === name;
    const isEM = team.engineeringManager?.toLowerCase() === name;
    const isAdditionalLead = (team.additionalLeads || []).some(l => l.name.toLowerCase() === name);
    const isMember = normMembers(team.members).some(m => m.name.toLowerCase() === name);

    if (isLead) profiles.push({ teamId: team.id, teamName: team.name, teamIcon: team.icon, role: 'lead', label: 'Team Lead' });
    if (isPL) profiles.push({ teamId: team.id, teamName: team.name, teamIcon: team.icon, role: 'lead', label: 'Product Lead' });
    if (isEM) profiles.push({ teamId: team.id, teamName: team.name, teamIcon: team.icon, role: 'em', label: 'Engineering Manager' });
    if (isAdditionalLead && !isLead && !isPL) profiles.push({ teamId: team.id, teamName: team.name, teamIcon: team.icon, role: 'lead', label: 'Co-Lead' });
    if (isMember && !isLead && !isPL && !isEM && !isAdditionalLead) profiles.push({ teamId: team.id, teamName: team.name, teamIcon: team.icon, role: 'dev', label: 'Team Member' });
  }

  res.json({ profiles });
}));

app.post('/api/login', asyncHandler(async (req, res) => {
  const { teamCode, userName } = req.body;
  const errCode = validateString(teamCode, 'Team code');
  const errName = validateString(userName, 'Name');
  if (errCode) return res.status(400).json({ error: errCode });
  if (errName) return res.status(400).json({ error: errName });

  const team = await db.getTeamByCode(teamCode.toLowerCase().trim());
  if (!team) return res.status(404).json({ error: 'Team not found. Check your team code.' });

  const isLead = team.leadName?.toLowerCase() === userName.toLowerCase().trim();
  const isPL = team.productLead?.toLowerCase() === userName.toLowerCase().trim();
  const isEM = team.engineeringManager?.toLowerCase() === userName.toLowerCase().trim();
  const isAdditionalLead = (team.additionalLeads || []).some(l => l.name.toLowerCase() === userName.toLowerCase().trim());
  const hasLeadAccess = isLead || isPL || isEM || isAdditionalLead;

  team.members = normMembers(team.members);
  const existing = team.members.find(m => m.name.toLowerCase() === userName.toLowerCase().trim());

  let member = existing || null;
  const isNew = !hasLeadAccess && !member;
  if (isNew) {
    member = { name: userName.trim(), roleId: null };
    team.members.push(member);
    await db.saveTeam(team);
  }

  // Lead can also be in the members list (for self-assessment)
  let leadMember = null;
  if (hasLeadAccess) {
    const leadName = userName.trim();
    leadMember = team.members.find(m => m.name.toLowerCase() === leadName.toLowerCase());
    if (!leadMember) {
      leadMember = { name: leadName, roleId: null };
      team.members.push(leadMember);
      await db.saveTeam(team);
    }
  }

  const resolvedName = hasLeadAccess ? userName.trim() : (member?.name || userName.trim());
  const memberRoleId = hasLeadAccess ? (leadMember?.roleId || null) : (member?.roleId || null);
  const needsRolePick = !hasLeadAccess && (!member?.roleId) && (team.roles||[]).length > 0;

  // Determine specific role label
  let roleLabel = 'Team Member';
  if (isLead) roleLabel = 'Team Lead';
  else if (isPL) roleLabel = 'Product Lead';
  else if (isEM) roleLabel = 'Engineering Manager';
  else if (isAdditionalLead) roleLabel = 'Co-Lead';

  res.json({
    role:          hasLeadAccess ? (isEM ? 'em' : 'lead') : 'dev',
    roleLabel,
    team:          { id: team.id, name: team.name, leadName: team.leadName, icon: team.icon, color: team.color },
    userName:      resolvedName,
    memberRoleId:  memberRoleId,
    needsRolePick,
    roles:         team.roles || [],
  });
}));

// ── EM CROSS-TEAM VIEW ────────────────────────────────────────────────────────
app.get('/api/em/teams/:emName', asyncHandler(async (req, res) => {
  const emName = decodeURIComponent(req.params.emName).toLowerCase();
  const teams = await db.getTeams();
  const emTeams = teams.filter(t => t.engineeringManager?.toLowerCase() === emName);
  const result = [];
  for (const t of emTeams) {
    const assessments = await db.getTeamAssessments(t.id);
    result.push({
      ...t,
      memberCount: (t.members||[]).length,
      roleCount: (t.roles||[]).length,
      assessedCount: Object.keys(assessments).length,
    });
  }
  res.json(result);
}));

// ── TEAM CONFIG ────────────────────────────────────────────────────────────────
app.get('/api/teams/:teamId/config', asyncHandler(async (req, res) => {
  const team = await db.getTeam(req.params.teamId);
  if (!team) return res.status(404).json({ error: 'Not found' });
  res.json(team);
}));

app.put('/api/teams/:teamId/config', asyncHandler(async (req, res) => {
  const team = await db.getTeam(req.params.teamId);
  if (!team) return res.status(404).json({ error: 'Not found' });
  ['name','description','icon','color'].forEach(k => {
    if (req.body[k] !== undefined) team[k] = req.body[k];
  });
  await db.saveTeam(team);
  res.json(team);
}));

// ── ROLES ──────────────────────────────────────────────────────────────────────
app.get('/api/teams/:teamId/roles', asyncHandler(async (req, res) => {
  const team = await db.getTeam(req.params.teamId);
  if (!team) return res.status(404).json({ error: 'Not found' });
  res.json(team.roles || []);
}));

app.post('/api/teams/:teamId/roles', asyncHandler(async (req, res) => {
  const team = await db.getTeam(req.params.teamId);
  if (!team) return res.status(404).json({ error: 'Not found' });
  if (!team.roles) team.roles = [];
  const err = validateString(req.body.name, 'Role name');
  if (err) return res.status(400).json({ error: err });
  const role = { id: `role-${uid()}`, ...req.body, createdAt: new Date().toISOString() };
  team.roles.push(role);
  await db.saveTeam(team);
  res.status(201).json(role);
}));

app.put('/api/teams/:teamId/roles/:roleId', asyncHandler(async (req, res) => {
  const team = await db.getTeam(req.params.teamId);
  if (!team) return res.status(404).json({ error: 'Not found' });
  const idx = (team.roles || []).findIndex(r => r.id === req.params.roleId);
  if (idx < 0) return res.status(404).json({ error: 'Role not found' });
  team.roles[idx] = { ...team.roles[idx], ...req.body };
  await db.saveTeam(team);
  res.json(team.roles[idx]);
}));

app.delete('/api/teams/:teamId/roles/:roleId', asyncHandler(async (req, res) => {
  const team = await db.getTeam(req.params.teamId);
  if (!team) return res.status(404).json({ error: 'Not found' });
  team.roles = (team.roles || []).filter(r => r.id !== req.params.roleId);
  await db.saveTeam(team);
  res.json({ ok: true });
}));

// ── MEMBERS ────────────────────────────────────────────────────────────────────
app.get('/api/teams/:teamId/members', asyncHandler(async (req, res) => {
  const team = await db.getTeam(req.params.teamId);
  if (!team) return res.status(404).json({ error: 'Not found' });
  res.json(normMembers(team.members));
}));

app.post('/api/teams/:teamId/members', asyncHandler(async (req, res) => {
  const { name, roleId } = req.body;
  const err = validateString(name, 'Member name');
  if (err) return res.status(400).json({ error: err });
  const team = await db.getTeam(req.params.teamId);
  if (!team) return res.status(404).json({ error: 'Not found' });
  team.members = normMembers(team.members);
  const exists = team.members.find(m => m.name.toLowerCase() === name.toLowerCase());
  if (!exists) { team.members.push({ name: name.trim(), roleId: roleId || null }); await db.saveTeam(team); }
  res.json({ ok: true });
}));

app.put('/api/teams/:teamId/members/:name/role', asyncHandler(async (req, res) => {
  const team = await db.getTeam(req.params.teamId);
  if (!team) return res.status(404).json({ error: 'Not found' });
  team.members = normMembers(team.members);
  const member = team.members.find(m => m.name === decodeURIComponent(req.params.name));
  if (!member) return res.status(404).json({ error: 'Member not found' });
  member.roleId = req.body.roleId;
  await db.saveTeam(team);
  res.json({ ok: true });
}));

app.delete('/api/teams/:teamId/members/:name', asyncHandler(async (req, res) => {
  const team = await db.getTeam(req.params.teamId);
  if (!team) return res.status(404).json({ error: 'Not found' });
  team.members = normMembers(team.members).filter(m => m.name !== decodeURIComponent(req.params.name));
  await db.saveTeam(team);
  res.json({ ok: true });
}));

// ── ASSESSMENTS ────────────────────────────────────────────────────────────────
app.get('/api/assessments/:teamId/:member', asyncHandler(async (req, res) => {
  const memberName = decodeURIComponent(req.params.member);
  const data = await db.getAssessment(req.params.teamId, memberName);
  res.json(data || {
    scores: {}, evidence: {}, calibratedScores: {}, calibrationNotes: {},
    actions: [], level: '', proficiency: '', calibratedLevel: '', roleId: null,
    history: []
  });
}));

app.put('/api/assessments/:teamId/:member', asyncHandler(async (req, res) => {
  const memberName = decodeURIComponent(req.params.member);
  // Validate scores if present
  if (req.body.scores) {
    for (const [key, val] of Object.entries(req.body.scores)) {
      const err = validateScore(val);
      if (err) return res.status(400).json({ error: `${err} for skill ${key}` });
    }
  }
  await db.saveAssessment(req.params.teamId, memberName, req.body);
  res.json({ ok: true });
}));

// ── CHECKPOINT ─────────────────────────────────────────────────────────────────
app.post('/api/assessments/:teamId/:member/checkpoint', asyncHandler(async (req, res) => {
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
}));

// ── SKILL REORDERING (P1: F18) ─────────────────────────────────────────────────
app.put('/api/teams/:teamId/roles/:roleId/sections/:sectionIdx/reorder', asyncHandler(async (req, res) => {
  const team = await db.getTeam(req.params.teamId);
  if (!team) return res.status(404).json({ error: 'Not found' });
  const role = (team.roles || []).find(r => r.id === req.params.roleId);
  if (!role) return res.status(404).json({ error: 'Role not found' });
  const secIdx = parseInt(req.params.sectionIdx);
  const section = (role.sections || [])[secIdx];
  if (!section) return res.status(404).json({ error: 'Section not found' });
  const { fromIndex, toIndex } = req.body;
  if (fromIndex === undefined || toIndex === undefined)
    return res.status(400).json({ error: 'fromIndex and toIndex required' });
  const skills = section.skills || [];
  if (fromIndex < 0 || fromIndex >= skills.length || toIndex < 0 || toIndex >= skills.length)
    return res.status(400).json({ error: 'Invalid indices' });
  const [moved] = skills.splice(fromIndex, 1);
  skills.splice(toIndex, 0, moved);
  section.skills = skills;
  await db.saveTeam(team);
  res.json({ ok: true, skills });
}));

// ── EDIT SKILL IN MATRIX (P1: F16) ────────────────────────────────────────────
app.put('/api/teams/:teamId/roles/:roleId/sections/:sectionIdx/skills/:skillIdx', asyncHandler(async (req, res) => {
  const team = await db.getTeam(req.params.teamId);
  if (!team) return res.status(404).json({ error: 'Not found' });
  const role = (team.roles || []).find(r => r.id === req.params.roleId);
  if (!role) return res.status(404).json({ error: 'Role not found' });
  const secIdx = parseInt(req.params.sectionIdx);
  const section = (role.sections || [])[secIdx];
  if (!section) return res.status(404).json({ error: 'Section not found' });
  const skillIdx = parseInt(req.params.skillIdx);
  const skill = (section.skills || [])[skillIdx];
  if (!skill) return res.status(404).json({ error: 'Skill not found' });
  const { name, desc, cov } = req.body;
  if (name !== undefined) {
    const err = validateString(name, 'Skill name', 1, 100);
    if (err) return res.status(400).json({ error: err });
    skill.name = name.trim();
  }
  if (desc !== undefined) skill.desc = desc.trim();
  if (cov !== undefined) skill.cov = cov;
  await db.saveTeam(team);
  res.json({ ok: true, skill });
}));

// ── MULTIPLE LEADS (P2: F24) ──────────────────────────────────────────────────
app.get('/api/teams/:teamId/leads', asyncHandler(async (req, res) => {
  const team = await db.getTeam(req.params.teamId);
  if (!team) return res.status(404).json({ error: 'Not found' });
  const leads = team.additionalLeads || [];
  res.json([{ name: team.leadName, role: 'Primary Lead' }, ...leads]);
}));

app.post('/api/teams/:teamId/leads', asyncHandler(async (req, res) => {
  const team = await db.getTeam(req.params.teamId);
  if (!team) return res.status(404).json({ error: 'Not found' });
  const { name, role } = req.body;
  const err = validateString(name, 'Lead name');
  if (err) return res.status(400).json({ error: err });
  if (!team.additionalLeads) team.additionalLeads = [];
  const exists = team.additionalLeads.find(l => l.name.toLowerCase() === name.toLowerCase().trim());
  if (exists) return res.status(409).json({ error: 'Lead already exists' });
  team.additionalLeads.push({ name: name.trim(), role: role || 'Co-Lead' });
  await db.saveTeam(team);
  res.json({ ok: true, leads: team.additionalLeads });
}));

app.delete('/api/teams/:teamId/leads/:leadName', asyncHandler(async (req, res) => {
  const team = await db.getTeam(req.params.teamId);
  if (!team) return res.status(404).json({ error: 'Not found' });
  const leadName = decodeURIComponent(req.params.leadName);
  team.additionalLeads = (team.additionalLeads || []).filter(l => l.name !== leadName);
  await db.saveTeam(team);
  res.json({ ok: true });
}));

// ── COVERAGE ───────────────────────────────────────────────────────────────────
app.get('/api/coverage/:teamId', asyncHandler(async (req, res) => {
  const team = await db.getTeam(req.params.teamId);
  if (!team) return res.status(404).json({ error: 'Not found' });
  const assessments = await db.getTeamAssessments(req.params.teamId);
  res.json({ team: { ...team, members: normMembers(team.members) }, assessments });
}));

// ── START ──────────────────────────────────────────────────────────────────────
async function start() {
  await db.initDB();
  if (process.env.DATABASE_URL) {
    console.log('  📦  Using PostgreSQL database');
  } else {
    console.log('  💾  Using in-memory storage (data resets on restart)');
    console.log('       Set DATABASE_URL for persistent PostgreSQL storage');
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
