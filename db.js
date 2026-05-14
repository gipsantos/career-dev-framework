const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL?.includes('neon') ? { rejectUnauthorized: false } : false,
});

// ── INIT ────────────────────────────────────────────────────────────────────────
async function initDB() {
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
  const { rows } = await pool.query('SELECT data FROM teams ORDER BY created_at');
  return rows.map(r => r.data);
}

async function getTeam(id) {
  const { rows } = await pool.query('SELECT data FROM teams WHERE id = $1', [id]);
  return rows[0]?.data || null;
}

async function getTeamByCode(code) {
  const { rows } = await pool.query(
    "SELECT data FROM teams WHERE data->>'code' = $1", [code]
  );
  return rows[0]?.data || null;
}

async function saveTeam(team) {
  await pool.query(
    `INSERT INTO teams (id, data) VALUES ($1, $2)
     ON CONFLICT (id) DO UPDATE SET data = $2`,
    [team.id, JSON.stringify(team)]
  );
}

async function deleteTeam(id) {
  await pool.query('DELETE FROM teams WHERE id = $1', [id]);
  await pool.query('DELETE FROM assessments WHERE team_id = $1', [id]);
}

// ── ASSESSMENTS ─────────────────────────────────────────────────────────────────
async function getAssessment(teamId, memberName) {
  const { rows } = await pool.query(
    'SELECT data FROM assessments WHERE team_id = $1 AND member_name = $2',
    [teamId, memberName]
  );
  return rows[0]?.data || null;
}

async function saveAssessment(teamId, memberName, data) {
  await pool.query(
    `INSERT INTO assessments (team_id, member_name, data, updated_at)
     VALUES ($1, $2, $3, NOW())
     ON CONFLICT (team_id, member_name) DO UPDATE SET data = $3, updated_at = NOW()`,
    [teamId, memberName, JSON.stringify(data)]
  );
}

async function getTeamAssessments(teamId) {
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
