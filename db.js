const { Pool } = require('pg');

let pool = null;
let memoryStore = { teams: {}, assessments: {} };
let useMemory = false;

if (process.env.DATABASE_URL) {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_URL?.includes('neon') ? { rejectUnauthorized: false } : false,
  });
} else {
  useMemory = true;
}

// ── INIT ────────────────────────────────────────────────────────────────────────
async function initDB() {
  if (useMemory) {
    console.log('  💾  Using in-memory storage (no DATABASE_URL set)');
    return;
  }
  await pool.query(`
    CREATE TABLE IF NOT EXISTS teams (
      id TEXT PRIMARY KEY,
      data JSONB NOT NULL DEFAULT '{}'::jsonb,
      created_at TIMESTAMPTZ DEFAULT NOW()
    );
    CREATE TABLE IF NOT EXISTS assessments (
      team_id TEXT NOT NULL,
      member_name TEXT NOT NULL,
      data JSONB NOT NULL DEFAULT '{}'::jsonb,
      updated_at TIMESTAMPTZ DEFAULT NOW(),
      PRIMARY KEY (team_id, member_name)
    );
  `);
  console.log('  ✅  Database tables ready');
}

// ── TEAMS ───────────────────────────────────────────────────────────────────────
async function getTeams() {
  if (useMemory) return Object.values(memoryStore.teams);
  const { rows } = await pool.query('SELECT data FROM teams ORDER BY created_at');
  return rows.map(r => r.data);
}

async function getTeam(id) {
  if (useMemory) return memoryStore.teams[id] || null;
  const { rows } = await pool.query('SELECT data FROM teams WHERE id = $1', [id]);
  return rows[0]?.data || null;
}

async function getTeamByCode(code) {
  if (useMemory) {
    return Object.values(memoryStore.teams).find(t => t.code === code) || null;
  }
  const { rows } = await pool.query(
    "SELECT data FROM teams WHERE data->>'code' = $1", [code]
  );
  return rows[0]?.data || null;
}

async function saveTeam(team) {
  if (useMemory) { memoryStore.teams[team.id] = team; return; }
  await pool.query(
    `INSERT INTO teams (id, data) VALUES ($1, $2)
     ON CONFLICT (id) DO UPDATE SET data = $2`,
    [team.id, JSON.stringify(team)]
  );
}

async function deleteTeam(id) {
  if (useMemory) {
    delete memoryStore.teams[id];
    Object.keys(memoryStore.assessments).forEach(k => {
      if (k.startsWith(id + '::')) delete memoryStore.assessments[k];
    });
    return;
  }
  await pool.query('DELETE FROM teams WHERE id = $1', [id]);
  await pool.query('DELETE FROM assessments WHERE team_id = $1', [id]);
}

// ── ASSESSMENTS ─────────────────────────────────────────────────────────────────
async function getAssessment(teamId, memberName) {
  if (useMemory) return memoryStore.assessments[`${teamId}::${memberName}`] || null;
  const { rows } = await pool.query(
    'SELECT data FROM assessments WHERE team_id = $1 AND member_name = $2',
    [teamId, memberName]
  );
  return rows[0]?.data || null;
}

async function saveAssessment(teamId, memberName, data) {
  if (useMemory) { memoryStore.assessments[`${teamId}::${memberName}`] = data; return; }
  await pool.query(
    `INSERT INTO assessments (team_id, member_name, data, updated_at)
     VALUES ($1, $2, $3, NOW())
     ON CONFLICT (team_id, member_name) DO UPDATE SET data = $3, updated_at = NOW()`,
    [teamId, memberName, JSON.stringify(data)]
  );
}

async function getTeamAssessments(teamId) {
  if (useMemory) {
    const result = {};
    Object.entries(memoryStore.assessments).forEach(([k, v]) => {
      if (k.startsWith(teamId + '::')) {
        result[k.split('::')[1]] = v;
      }
    });
    return result;
  }
  const { rows } = await pool.query(
    'SELECT member_name, data FROM assessments WHERE team_id = $1',
    [teamId]
  );
  const result = {};
  rows.forEach(r => { result[r.member_name] = r.data; });
  return result;
}

module.exports = {
  initDB, getTeams, getTeam, getTeamByCode, saveTeam, deleteTeam,
  getAssessment, saveAssessment, getTeamAssessments,
};
