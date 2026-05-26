// ─── TEMPLATES ────────────────────────────────────────────────────────────────
const TEMPLATES = {
  "Software Developer": { desc:"Full-stack engineers with cloud, data and backend services.", sections:[
    {id:"st1",name:"🛠️ Hard Skills – 2026 Profile",color:"tech",skills:[
      {id:"python",    name:"Python",                 cov:"All",       desc:"Write clean Python applying OOP and best practices."},
      {id:"restapi",   name:"REST API Development",   cov:"All",       desc:"Design and implement RESTful APIs with auth and versioning."},
      {id:"cicd",      name:"CI/CD – GitLab CI",      cov:"All",       desc:"Create and evolve pipelines supporting continuous deployment."},
      {id:"kafka",     name:"Kafka 🟡",               cov:"2+ people", desc:"Build producers/consumers. Async-to-Snowflake patterns."},
      {id:"aws",       name:"AWS – EKS, S3, IAM 🟡",  cov:"2+ people", desc:"Work with AWS services applying basic security principles."},
      {id:"terraform", name:"Terraform / IaC 🟡",     cov:"2+ people", desc:"Write Terraform to create and manage infrastructure."},
      {id:"airflow",   name:"Airflow 🟡",             cov:"2+ people", desc:"Write and deploy Airflow DAGs; manage task dependencies."},
      {id:"snowflake", name:"Snowflake / Data WH 🟡", cov:"2+ people", desc:"Query, model, optimise data. Understand data historisation."},
      {id:"dashboard", name:"Dashboarding & Viz 🟡",  cov:"2+ people", desc:"Build programmatic dashboards from schedule data."},
      {id:"frontend",  name:"Frontend Development",   cov:"2 people",  desc:"Build and maintain functional frontend features."},
      {id:"monitoring",name:"Monitoring – GOP",       cov:"Specialist",desc:"Configure alerts and dashboards; contribute to observability."},
    ]},
    {id:"st2",name:"📦 Business & Domain",color:"biz",skills:[
      {id:"domain",       name:"Maritime Schedule Domain",    cov:"All",desc:"Voyage lifecycle, ETA/ETD, cut-offs, rotations. Core domain knowledge."},
      {id:"products",     name:"KN Products (SeaAlloc, SALog, Quote, SeaExplorer)",cov:"All",desc:"How KN products interconnect. Knowing other domains exceeds expectations."},
      {id:"dataflows",    name:"Schedule Data Flows & Integrations",cov:"All",desc:"Map end-to-end data flows; identify integration risks."},
      {id:"dquality",     name:"Data Quality & Consistency",  cov:"All",desc:"Implement validations; communicate downstream impact."},
      {id:"cost",         name:"Cost Awareness",              cov:"All",desc:"Consider cloud costs; flag expensive patterns."},
      {id:"stakeholders", name:"Stakeholder Management",      cov:"All",desc:"Communicate clearly with Ops, Commercial, IT and Product."},
    ]},
    {id:"st3",name:"🤝 Behavioural / Soft Skills",color:"beh",skills:[
      {id:"pairing",  name:"Pair Programming & Knowledge Sharing",cov:"All",desc:"Initiate pairing; share knowledge via demos and docs."},
      {id:"feedback", name:"Constructive Feedback",               cov:"All",desc:"Give and receive technical feedback objectively."},
      {id:"techbl",   name:"Technical Backlog & Improvement",     cov:"All",desc:"Identify improvement opportunities at code and infra level."},
      {id:"proactive",name:"Proactive Improvement Behaviour",     cov:"All",desc:"Spot and act on improvements without being asked."},
      {id:"docs",     name:"Technical Documentation",             cov:"All",desc:"Produce clear docs (C4, FO, ADRs) for different audiences."},
      {id:"comms",    name:"Clear & Adapted Communication",       cov:"All",desc:"Communicate clearly to technical and non-technical audiences."},
      {id:"ownership",name:"Accountability & Ownership",          cov:"All",desc:"Take full ownership, including when things go wrong."},
      {id:"agile",    name:"Agile & Continuous Delivery",          cov:"All",desc:"Apply Agile values; support short cycles and quality."},
    ]},
    {id:"st4",name:"🤖 AI & Automation Skills",color:"ai",skills:[
      {id:"ai-tools",    name:"AI-Assisted Development",     cov:"All",       desc:"Use AI coding assistants (Copilot, Kiro) effectively in daily work."},
      {id:"ai-prompting",name:"Prompt Engineering",           cov:"All",       desc:"Write effective prompts for code generation, analysis and documentation."},
      {id:"ai-review",   name:"AI Output Review & Validation",cov:"All",      desc:"Critically evaluate AI-generated code for correctness and security."},
      {id:"ai-automate", name:"AI-Powered Automation",        cov:"2+ people", desc:"Build automated workflows using AI (testing, docs, data pipelines)."},
      {id:"ai-awareness",name:"AI Trends & Responsible Use",  cov:"All",       desc:"Stay current on AI capabilities; apply ethical and responsible AI practices."},
    ]},
  ]},
  "Business Analyst": { desc:"Analysts bridging business needs with technical delivery.", sections:[
    {id:"ba1",name:"🛠️ Core BA Skills",color:"tech",skills:[
      {id:"req",    name:"Requirements Elicitation",           cov:"All",      desc:"Gather and document business requirements clearly."},
      {id:"userst", name:"User Stories & Acceptance Criteria", cov:"All",      desc:"Write clear user stories and measurable AC."},
      {id:"bpmn",   name:"Process Modelling – BPMN",           cov:"All",      desc:"Model business processes with clarity and precision."},
      {id:"datamod",name:"Data Modelling & Analysis",          cov:"All",      desc:"Understand data structures; model and analyse data flows."},
      {id:"tools",  name:"BA Tools (Jira, Confluence, Figma)", cov:"All",      desc:"Use BA tools effectively for tracking and wireframing."},
      {id:"sql-ba", name:"SQL / Data Querying",                cov:"2+ people",desc:"Write SQL to validate data and support analysis."},
    ]},
    {id:"ba2",name:"📦 Business & Domain",color:"biz",skills:[
      {id:"domain-ba",  name:"Maritime Schedule Domain", cov:"All",desc:"Schedule lifecycle, ETA/ETD, port calls, rotations. Core domain."},
      {id:"products-ba",name:"KN Products",              cov:"All",desc:"SeaAlloc, Quote, SALog, SeaExplorer – customer impact."},
      {id:"bizgoals",   name:"Business Goals Alignment", cov:"All",desc:"Connect requirements to business goals and KN strategy."},
      {id:"cost-ba",    name:"Cost & Value Awareness",   cov:"All",desc:"Assess business value and cost implications of requirements."},
    ]},
    {id:"ba3",name:"🤝 Behavioural Skills",color:"beh",skills:[
      {id:"stakemgmt",name:"Stakeholder Management",          cov:"All",desc:"Build relationships and manage expectations across all levels."},
      {id:"facilit",  name:"Facilitation & Workshop Leading", cov:"All",desc:"Run effective workshops, refinements and discovery sessions."},
      {id:"critth",   name:"Critical & Analytical Thinking",  cov:"All",desc:"Analyse problems systematically; challenge assumptions."},
      {id:"docs-ba",  name:"Documentation & Communication",   cov:"All",desc:"Produce clear, structured documentation for all audiences."},
      {id:"agile-ba", name:"Agile & Backlog Ownership",        cov:"All",desc:"Apply Agile values; co-own the backlog with the team."},
    ]},
    {id:"ba4",name:"🤖 AI & Automation Skills",color:"ai",skills:[
      {id:"ai-ba-tools",  name:"AI-Assisted Analysis",        cov:"All",desc:"Use AI tools for requirements analysis, documentation and research."},
      {id:"ai-ba-prompt",  name:"Prompt Engineering for BA",   cov:"All",desc:"Craft prompts for user story generation, process analysis, data queries."},
      {id:"ai-ba-validate",name:"AI Output Validation",       cov:"All",desc:"Critically review AI-generated requirements and documentation."},
      {id:"ai-ba-automate",name:"Process Automation with AI",  cov:"2+ people",desc:"Automate repetitive BA tasks using AI tools and workflows."},
    ]},
  ]},
  "Solution Architect": { desc:"Architects responsible for technical design and alignment.", sections:[
    {id:"ar1",name:"🛠️ Architecture Skills",color:"tech",skills:[
      {id:"patterns", name:"Architecture Patterns",      cov:"All",desc:"Apply microservices, event-driven and layered patterns."},
      {id:"c4",       name:"C4 Modelling & ADRs",        cov:"All",desc:"Produce clear C4 diagrams and architecture decisions."},
      {id:"cloud-a",  name:"Cloud Architecture – AWS",   cov:"All",desc:"Design scalable, secure, cost-aware cloud architectures."},
      {id:"data-a",   name:"Data Architecture",           cov:"All",desc:"Design data models, integration patterns and contracts."},
      {id:"security", name:"Security by Design",          cov:"All",desc:"Apply security principles from design (OWASP, IAM)."},
      {id:"kafka-a",  name:"Event-Driven Architecture",  cov:"All",desc:"Design resilient event-driven systems with Kafka."},
    ]},
    {id:"ar2",name:"📦 Business Alignment",color:"biz",skills:[
      {id:"domain-a", name:"Maritime Schedule Domain",    cov:"All",desc:"Connect architectural decisions to operational reality."},
      {id:"roadmap",  name:"Technical Roadmap & Strategy",cov:"All",desc:"Define and communicate a technical roadmap for the domain."},
      {id:"cost-a",   name:"Cost Optimisation Strategy",  cov:"All",desc:"Define cost-aware architecture; evaluate build vs buy."},
    ]},
    {id:"ar3",name:"🤝 Leadership & Communication",color:"beh",skills:[
      {id:"lead-a", name:"Technical Leadership",    cov:"All",desc:"Lead by example; influence decisions without authority."},
      {id:"review", name:"Design & Code Review",    cov:"All",desc:"Conduct architecture and code reviews; raise the bar."},
      {id:"mentor-a",name:"Mentoring",              cov:"All",desc:"Develop engineers; share architectural knowledge proactively."},
      {id:"comms-a",name:"Technical Communication", cov:"All",desc:"Present complex architecture to all audiences."},
    ]},
    {id:"ar4",name:"🤖 AI & Automation Skills",color:"ai",skills:[
      {id:"ai-arch-design",name:"AI-Assisted Architecture Design",cov:"All",desc:"Leverage AI for architecture exploration, trade-off analysis, documentation."},
      {id:"ai-arch-eval",  name:"AI Solution Evaluation",         cov:"All",desc:"Evaluate AI/ML solutions for integration into system architecture."},
      {id:"ai-arch-govern",name:"AI Governance & Ethics",         cov:"All",desc:"Define guidelines for responsible AI use in the team and products."},
    ]},
  ]},
};

// ─── ASSESSMENT GUIDANCE (P1: F23) ────────────────────────────────────────────
const SCORE_GUIDANCE = {
  1: { label: "Beginner", desc: "Need to learn and develop from ground up, require comprehensive training and supervision." },
  2: { label: "Developing", desc: "Can perform basic tasks with guidance and support." },
  3: { label: "Competent", desc: "Can work independently on most tasks with good understanding." },
  4: { label: "Proficient", desc: "Can handle complex tasks and guide others effectively." },
  5: { label: "Expert", desc: "Have mastered the skill and can mentor others, solve complex problems, and improve processes." },
};

const SL     = ["","Beginner","Developing","Competent","Proficient","Expert"];
const LEVELS = ["Junior","Mid-Level","Senior","Lead"];
const PROFICIENCY = ["Entry","Established","Master"];
const ICONS  = ["🚢","🌊","⚓","🧭","🗺️","🔬","📦","💡","⚡","🛠️","🏗️","🤝","🎯","🚀","💼","🌍","🔧","📊"];
const COLORS = ["#0D2B4E","#1A5276","#145A32","#6E2F0A","#784212","#5B2C6F","#1B2631","#0E6655","#2E4057","#1A252F"];

// ─── STATE ─────────────────────────────────────────────────────────────────────
let S = { role:null, teamId:null, teamName:null, teamIcon:null, teamColor:null,
          userName:null, data:null, roleId:null, roleName:null, matrix:null, roleLabel:null };
let _vc=null, _ms=null, _editActIdx=null, _actTarget=null;
let _cfgTeam=null, _editingRoleId=null, _matrixDraft=null, _pendingRoles=null;
let _covFilter=null, _covSectionFilter=null, _pickedIcon=null, _pickedColor=null;
let _dashMember=null, _dashData=null, _dashRoles=null, _dashTab='overview';

// ─── API ────────────────────────────────────────────────────────────────────────
async function api(m, u, b) {
  const o = { method:m, headers:{'Content-Type':'application/json'} };
  if (b) o.body = JSON.stringify(b);
  const r = await fetch(u, o);
  const j = await r.json();
  if (!r.ok) throw new Error(j.error || 'Request failed');
  return j;
}
function hexRgb(h) {
  return `rgb(${parseInt(h.slice(1,3),16)}, ${parseInt(h.slice(3,5),16)}, ${parseInt(h.slice(5,7),16)})`;
}

// ─── LOGIN ──────────────────────────────────────────────────────────────────────
function setTab(t) {
  ['team','adm'].forEach(x => {
    document.getElementById('pnl-'+x).style.display = x===t ? '' : 'none';
    document.getElementById('tab-'+x).classList.toggle('on', x===t);
  });
}

function toggleJoinPanel() {
  const pnl = document.getElementById('pnl-join');
  const toggle = document.getElementById('pnl-join-toggle');
  const open = pnl.style.display === 'none';
  pnl.style.display = open ? '' : 'none';
  toggle.style.display = open ? 'none' : '';
}

// Main entry — discover teams by name, skip picker if only one
async function discoverAndLogin() {
  const n = document.getElementById('l-name').value.trim();
  if (!n) return toast('Please enter your name');
  try {
    const r = await api('POST', '/api/login/discover', { userName: n });
    if (!r.profiles || !r.profiles.length) {
      return toast('No teams found for this name. Ask your lead for a team code to join.');
    }
    if (r.profiles.length === 1) {
      await loginWithProfile(r.profiles[0], n, r.profiles);
      return;
    }
    showProfilePicker(r.profiles, n);
  } catch(e) { toast('⚠ ' + e.message); }
}

function showProfilePicker(profiles, userName) {
  document.getElementById('screen-login').style.display = 'none';
  document.getElementById('screen-profiles').style.display = 'block';
  document.getElementById('profile-opts').innerHTML = profiles.map((p, i) => `
    <div class="role-opt" onclick="selectProfile(${i})">
      <h4>${p.teamIcon||'👥'} ${p.teamName}</h4>
      <p style="font-size:.8rem;color:var(--acc);font-weight:600">${p.label}</p>
    </div>`).join('');
  window._discoveredProfiles = profiles;
  window._discoveredUser = userName;
}

async function selectProfile(idx) {
  const p = window._discoveredProfiles[idx];
  document.getElementById('screen-profiles').style.display = 'none';
  await loginWithProfile(p, window._discoveredUser, window._discoveredProfiles);
}

// Core: login into a specific profile and store all profiles for switching
async function loginWithProfile(profile, userName, allProfiles) {
  try {
    const teams = await api('GET', '/api/admin/teams');
    const team = teams.find(t => t.id === profile.teamId);
    if (!team) return toast('Team not found');
    const r = await api('POST', '/api/login', { userName, teamCode: team.code });
    S.role=r.role; S.teamId=r.team.id; S.teamName=r.team.name;
    S.teamIcon=r.team.icon||'👥'; S.teamColor=r.team.color||'#1E2533';
    S.userName=r.userName; S.roleId=r.memberRoleId; S.roleLabel=r.roleLabel||'';
    S._allProfiles = allProfiles;
    if (r.roles.length > 1 || (!S.roleId && r.roles.length > 0 && (r.needsRolePick || r.role==='lead' || r.role==='em'))) {
      _pendingRoles=r.roles; showRolePicker(r.roles, S.roleId); return;
    }
    if (r.roles.length > 0) {
      const myRole = r.roles.find(x => x.id===S.roleId);
      if (myRole) { S.roleName=myRole.name; S.matrix=myRole.sections||[]; }
    }
    S.data = await api('GET', `/api/assessments/${S.teamId}/${encodeURIComponent(S.userName)}`);
    launchApp();
  } catch(e) { toast('⚠ ' + e.message); }
}

function backToLogin() {
  document.getElementById('screen-profiles').style.display = 'none';
  document.getElementById('screen-login').style.display = 'block';
}

// Switch to another team without logging out
async function switchTeam(idx) {
  const p = S._allProfiles[idx];
  if (p.teamId === S.teamId) { toggleTeamSwitcher(); return; }
  toggleTeamSwitcher();
  await loginWithProfile(p, S.userName, S._allProfiles);
}

function toggleTeamSwitcher() {
  const sw = document.getElementById('sb-team-switcher');
  const arrow = document.getElementById('sb-team-arrow');
  if (!sw) return;
  const open = sw.style.display === 'none';
  sw.style.display = open ? '' : 'none';
  if (arrow) arrow.textContent = open ? '▴' : '▾';
}

function toggleUserMenu() {
  const menu = document.getElementById('tb-user-menu');
  if (!menu) return;
  menu.classList.toggle('open');
}
document.addEventListener('click', e => {
  const wrap = document.getElementById('tb-user-wrap');
  if (wrap && !wrap.contains(e.target)) {
    const menu = document.getElementById('tb-user-menu');
    if (menu) menu.classList.remove('open');
  }
});

function renderUserMenu() {
  const profiles = S._allProfiles || [];
  const header = document.getElementById('tb-um-header');
  const teams = document.getElementById('tb-um-teams');
  if (header) {
    header.innerHTML = `<div style="font-weight:700;color:var(--tx);font-size:.85rem">${S.userName||''}</div>
      <div style="font-size:.72rem;color:var(--tx3)">${S.roleLabel||S.roleName||''}</div>`;
  }
  if (teams && profiles.length > 1) {
    teams.innerHTML = `<div style="padding:6px 14px 3px;font-size:.6rem;font-weight:700;color:var(--tx3);letter-spacing:.7px;text-transform:uppercase">Switch Team</div>`
      + profiles.map((p, i) => `
      <div onclick="switchTeam(${i})" style="padding:8px 14px;cursor:pointer;display:flex;align-items:center;gap:8px;
        font-size:.82rem;border-left:3px solid ${p.teamId===S.teamId?'var(--acc)':'transparent'};
        ${p.teamId===S.teamId?'background:var(--acc-lt);font-weight:700;color:var(--acc)':'color:var(--tx2)'}">
        <span>${p.teamIcon||'👥'}</span>
        <span style="flex:1">${p.teamName}</span>
        ${p.teamId===S.teamId?'<span style="font-size:.6rem;color:var(--acc)">current</span>':''}
      </div>`).join('');
  } else if (teams) {
    teams.innerHTML = '';
  }
}

function renderTeamSwitcher() {
  renderUserMenu();
}

// Used only for the "join a new team" flow via team code
async function doLogin() {
  const n = document.getElementById('l-name').value.trim();
  const c = document.getElementById('l-code').value.trim();
  if (!n || !c) return toast('Please enter your name and team code');
  try {
    const r = await api('POST', '/api/login', {userName:n, teamCode:c});
    S.role=r.role; S.teamId=r.team.id; S.teamName=r.team.name;
    S.teamIcon=r.team.icon||'👥'; S.teamColor=r.team.color||'#1E2533';
    S.userName=r.userName; S.roleId=r.memberRoleId; S.roleLabel=r.roleLabel||'';
    // Re-discover all profiles now that user may have joined a new team
    const disc = await api('POST', '/api/login/discover', { userName: n });
    S._allProfiles = disc.profiles || [];
    if (r.roles.length > 1 || (!S.roleId && r.roles.length > 0 && (r.needsRolePick || r.role==='lead' || r.role==='em'))) {
      _pendingRoles=r.roles; showRolePicker(r.roles, S.roleId); return;
    }
    if (r.roles.length > 0) {
      const myRole = r.roles.find(x => x.id===S.roleId);
      if (myRole) { S.roleName=myRole.name; S.matrix=myRole.sections||[]; }
    }
    S.data = await api('GET', `/api/assessments/${S.teamId}/${encodeURIComponent(S.userName)}`);
    launchApp();
  } catch(e) { toast('⚠ '+e.message); }
}

async function doAdminLogin() {
  try {
    await api('POST', '/api/admin/login', {code: document.getElementById('l-adm').value.trim()});
    S.role='admin'; S.userName='Admin'; launchApp();
  } catch(e) { toast('⚠ Invalid admin code'); }
}

// ─── ROLE PICKER ────────────────────────────────────────────────────────────────
function showRolePicker(roles) {
  document.getElementById('screen-login').style.display = 'none';
  document.getElementById('screen-role').style.display = 'block';
  document.getElementById('role-opts').innerHTML = roles.map(r =>
    `<div class="role-opt" id="ropt-${r.id}" onclick="selRole('${r.id}')">
      <h4>${r.name}</h4><p>${r.desc||''}</p>
      <div style="font-size:.7rem;color:var(--acc);margin-top:4px">${(r.sections||[]).flatMap(s=>s.skills||[]).length} skills in matrix</div>
    </div>`).join('');
}
let _selRoleId = null;
function selRole(id) {
  _selRoleId = id;
  document.querySelectorAll('.role-opt').forEach(el => el.classList.toggle('sel', el.id===`ropt-${id}`));
}
async function confirmRole() {
  if (!_selRoleId) return toast('Please select a role');
  await api('PUT', `/api/teams/${S.teamId}/members/${encodeURIComponent(S.userName)}/role`, {roleId:_selRoleId});
  S.roleId = _selRoleId;
  const r = (_pendingRoles||[]).find(x => x.id===_selRoleId);
  if (r) { S.roleName=r.name; S.matrix=r.sections||[]; }
  S.data = await api('GET', `/api/assessments/${S.teamId}/${encodeURIComponent(S.userName)}`);
  document.getElementById('screen-role').style.display = 'none';
  launchApp();
}

// ─── LAUNCH / LOGOUT ────────────────────────────────────────────────────────────
function launchApp() {
  document.getElementById('screen-login').style.display = 'none';
  document.getElementById('screen-role').style.display = 'none';
  document.getElementById('screen-profiles').style.display = 'none';
  document.getElementById('app-layout').classList.add('on');

  // Header user avatar
  const avatarEl = document.getElementById('tb-avatar');
  if (avatarEl) {
    const parts = (S.userName||'?').split(' ');
    const initials = parts.length > 1 
      ? (parts[0][0] + parts[parts.length-1][0]).toUpperCase()
      : parts[0][0].toUpperCase();
    avatarEl.textContent = initials;
  }

  const isLead=S.role==='lead', isAdm=S.role==='admin', isEM=S.role==='em';

  // Admin: hide sidebar, full-width layout
  const sidebar = document.getElementById('sidebar');
  const main = document.getElementById('main');
  const footer = document.getElementById('app-footer');
  if (isAdm) {
    if (sidebar) sidebar.style.display = 'none';
    if (main) main.style.marginLeft = '0';
    if (footer) footer.style.left = '0';
  } else {
    if (sidebar) sidebar.style.display = '';
    if (main) main.style.marginLeft = '';
    if (footer) footer.style.left = '';
  }

  // Sidebar role badge
  const badge = document.getElementById('sb-role-badge');
  if (badge) {
    if (S.role==='em') badge.textContent = `🏢 EM · ${S.userName}`;
    else badge.textContent = `${S.teamIcon||'👥'} ${S.teamName||''}\n${S.roleLabel||S.roleName||''}`;
  }

  renderUserMenu();

  const devMenu = document.getElementById('sb-dev-menu');
  const leadMenu = document.getElementById('sb-lead-menu');
  const setupMenu = document.getElementById('sb-setup-menu');
  if (devMenu)   devMenu.style.display   = (!isAdm && !isEM) ? '' : 'none';
  if (leadMenu)  leadMenu.style.display  = (isLead||isEM) ? '' : 'none';
  if (setupMenu) setupMenu.style.display = (isLead||isEM) ? '' : 'none';

  if (isAdm)       go('setup-teams');
  else if (isEM)   go('em');
  else if (isLead) go('coverage');
  else             go('assess');
}

function doLogout() {
  S = {role:null,teamId:null,teamName:null,teamIcon:null,teamColor:null,userName:null,data:null,roleId:null,roleName:null,matrix:null,roleLabel:null,_allProfiles:null};
  document.getElementById('app-layout').classList.remove('on');
  document.getElementById('screen-login').style.display = 'block';
  document.getElementById('pnl-join').style.display = 'none';
  document.getElementById('pnl-join-toggle').style.display = '';
  // Reset layout (in case admin hid sidebar)
  const sidebar = document.getElementById('sidebar');
  const main = document.getElementById('main');
  const footer = document.getElementById('app-footer');
  if (sidebar) sidebar.style.display = '';
  if (main) main.style.marginLeft = '';
  if (footer) footer.style.left = '';
  const nameEl = document.getElementById('l-name');
  const codeEl = document.getElementById('l-code');
  if (nameEl) nameEl.value = '';
  if (codeEl) codeEl.value = '';
}

// ─── NAVIGATION ─────────────────────────────────────────────────────────────────
function go(id) {
  // remap legacy IDs
  if (id==='admin') id='setup-teams';
  const screens = ['assess','progress','plan','coverage','dashboard','config','admin','em',
    'setup-teams','setup-skills','setup-roles','setup-members'];
  screens.forEach(s => {
    const el = document.getElementById('screen-'+s);
    if (el) el.style.display = 'none';
  });
  const el = document.getElementById('screen-'+id);
  if (el) el.style.display = 'block';
  document.querySelectorAll('.sb-item').forEach(b => b.classList.remove('on'));
  const map = {
    assess:'sb-assess', progress:'sb-progress', plan:'sb-plan',
    coverage:'sb-coverage', dashboard:'sb-dashboard',
    'setup-teams':'sb-setup-teams','setup-skills':'sb-setup-skills',
    'setup-roles':'sb-setup-roles','setup-members':'sb-setup-members',
    em:'sb-em-dash'
  };
  if (map[id]) { const btn=document.getElementById(map[id]); if(btn) btn.classList.add('on'); }
  if (id==='assess')        renderAssessment();
  if (id==='progress')      renderProgress();
  if (id==='plan')          { ensurePlanScreen(); renderPlan(S.data, S.userName, true); }
  if (id==='coverage')      renderCoverage();
  if (id==='dashboard')     renderDashboard();
  if (id==='config')        renderConfig();
  if (id==='setup-teams')   renderAdmin();
  if (id==='setup-skills')  renderSetupSkills();
  if (id==='setup-roles')   renderSetupRoles();
  if (id==='setup-members') renderSetupMembers();
  if (id==='em')            renderEMView();
}


// ─── ASSESSMENT (P1: F23 — Assessment Guidance) ─────────────────────────────────
function renderAssessment() {
  if (!S.data) return;
  const w = document.getElementById('screen-assess');
  w.innerHTML = `
    <div class="fb mb16">
      <div>
        <div class="pg-t">My Self-Assessment</div>
        <div class="pg-s">${S.roleName ? `Role: <b>${S.roleName}</b> · ` : ''}Rate each skill 1–5. Add evidence from the last 6–12 months.</div>
      </div>
      <div class="fx" style="gap:6px">
        <button class="btn btn-g btn-sm" onclick="saveCheckpoint()">Save Checkpoint</button>
        <button class="btn btn-save" onclick="saveAssessment()">Save Assessment</button>
      </div>
    </div>
    <div class="card assess-header-card">
      <div class="assess-grid">
        <div class="assess-stat">
          <div class="assess-stat-label">PROGRESS</div>
          <div class="fx">
            <div class="pbar-w"><div class="pbar" id="a-bar" style="width:0%"></div></div>
            <span id="a-pct" style="font-weight:700;color:var(--acc);font-size:.82rem;min-width:32px">0%</span>
          </div>
          <span id="a-pl" style="font-size:.7rem;color:#aaa"></span>
        </div>
        <div class="assess-stat">
          <div class="assess-stat-label">AVERAGE</div>
          <div id="a-avg" class="assess-stat-value">—</div>
        </div>
        <div class="assess-stat">
          <div class="assess-stat-label">RATED</div>
          <div id="a-cnt" class="assess-stat-value">0</div>
        </div>
        <div class="assess-stat">
          <div class="assess-stat-label">SENIORITY LEVEL</div>
          <select class="fi fi-sm" id="a-lv" onchange="saveLevel()">
            <option value="">— select —</option>
            ${LEVELS.map(l=>`<option>${l}</option>`).join('')}
          </select>
        </div>
        <div class="assess-stat">
          <div class="assess-stat-label">PROFICIENCY</div>
          <select class="fi fi-sm" id="a-prof" onchange="saveProf()">
            <option value="">— select —</option>
            ${PROFICIENCY.map(p=>`<option>${p}</option>`).join('')}
          </select>
          <div class="prof-hint" id="prof-hint"></div>
        </div>
        <div class="assess-stat">
          <div class="assess-stat-label">CHECKPOINTS</div>
          <div id="a-checkpoints" class="assess-stat-value" style="font-size:1rem">0</div>
        </div>
      </div>
    </div>
    <div class="card" style="padding:12px 16px;margin-bottom:12px;background:#f0f7ff;border-left:4px solid var(--acc)">
      <div style="font-size:.78rem;font-weight:700;color:var(--kn);margin-bottom:8px">Score Guide</div>
      <div style="display:flex;flex-direction:column;gap:4px;font-size:.72rem">
        ${[1,2,3,4,5].map(n => `<div style="display:flex;align-items:center;gap:6px"><span class="pill p${n}" style="width:18px;height:18px;font-size:.65rem">${n}</span> <b>${SCORE_GUIDANCE[n].label}</b> — ${SCORE_GUIDANCE[n].desc}</div>`).join('')}
      </div>
    </div>
    <div id="skill-list"></div>
    <div style="text-align:right;margin-top:14px">
      <button class="btn btn-save" onclick="saveAssessment()">Save Assessment</button>
    </div>`;

  const list = document.getElementById('skill-list');
  if (!S.matrix || !S.matrix.length) {
    list.innerHTML = '<div class="empty">No skill matrix configured for your role yet.<br>Ask your team lead to go to ⚙ Configure → Roles &amp; Matrices.</div>';
    return;
  }
  document.getElementById('a-lv').value = S.data.level || '';
  document.getElementById('a-prof').value = S.data.proficiency || '';
  document.getElementById('a-checkpoints').textContent = (S.data.history||[]).length;
  updateProfHint();

  const allSkills = [];
  let secIdx = 0;
  (S.matrix || []).forEach(sec => {
    const secId = `assess-sec-${secIdx}`;
    const hdr = document.createElement('div');
    hdr.className = `sh sh-${sec.color||'tech'} sh-collapsible`;
    hdr.onclick = () => toggleAssessSection(secId);
    const cleanSecName = sec.name.replace(/[\u{1F300}-\u{1FAD6}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}\u{1F900}-\u{1F9FF}]/gu, '').trim();
    hdr.innerHTML = `<span class="sh-arrow" id="arrow-${secId}">▾</span><span style="flex:1">${cleanSecName}</span><span class="sh-count">${(sec.skills||[]).length} skills</span>`;
    list.appendChild(hdr);
    const secWrap = document.createElement('div');
    secWrap.id = secId;
    (sec.skills || []).forEach(sk => {
      allSkills.push(sk);
      const score = S.data.scores?.[sk.id] || 0;
      const ev    = S.data.evidence?.[sk.id] || '';
      const calibScore = S.data.calibratedScores?.[sk.id] || 0;
      const covCls = sk.cov==='All' ? 'ct-all' : sk.cov&&sk.cov.includes('2') ? 'ct-2' : 'ct-sp';
      const covLabel = sk.cov==='All' ? 'All' : sk.cov&&sk.cov.includes('2') ? '2+' : 'Spec';
      const d = document.createElement('div');
      d.className = 'sk-row';
      d.innerHTML = `
        <div class="fb" style="gap:8px;flex-wrap:wrap">
          <div style="flex:1;min-width:170px">
            <span class="sk-name">${sk.name}</span>
            ${calibScore ? `<span class="calib-badge" title="Calibrated by team lead">⚖ ${calibScore}</span>` : ''}
            <div class="sk-desc">${sk.desc||''}</div>
          </div>
          <span class="cov-t ${covCls}" style="flex-shrink:0">${covLabel}</span>
          <div class="fx">
            <div class="stars" id="stars-${sk.id}">
              ${[1,2,3,4,5].map(n=>`<div class="star s${n} ${score>=n?'on':''}"
                onclick="setScore('${sk.id}',${n})" title="${SCORE_GUIDANCE[n].label}: ${SCORE_GUIDANCE[n].desc}">${n}</div>`).join('')}
            </div>
            <span class="slbl" id="lbl-${sk.id}">${score ? SL[score] : '—'}</span>
          </div>
        </div>
        <div class="ev-row">
          <textarea class="ev-in" rows="1" id="ev-${sk.id}"
            placeholder="Evidence / examples from last 6-12 months…"
            onfocus="this.rows=3" onblur="if(!this.value)this.rows=1"
            onchange="setEv('${sk.id}',this.value)">${ev}</textarea>
        </div>`;
      secWrap.appendChild(d);
    });
    list.appendChild(secWrap);
    secIdx++;
  });
  updateABar(allSkills);
}

function toggleAssessSection(secId) {
  const el = document.getElementById(secId);
  const arrow = document.getElementById('arrow-' + secId);
  if (!el) return;
  const hidden = el.style.display === 'none';
  el.style.display = hidden ? '' : 'none';
  if (arrow) arrow.textContent = hidden ? '▾' : '▸';
}

function setScore(id, v) {
  if (!S.data.scores) S.data.scores = {};
  if (S.data.scores[id] === v) { v = 0; delete S.data.scores[id]; }
  else { S.data.scores[id] = v; }
  document.getElementById(`stars-${id}`).querySelectorAll('.star').forEach((s,i) =>
    s.className = `star s${i+1} ${i+1<=v?'on':''}`);
  document.getElementById(`lbl-${id}`).textContent = v ? SL[v] : '—';
  updateABar((S.matrix||[]).flatMap(s => s.skills||[]));
}
function setEv(id, v) { if (!S.data.evidence) S.data.evidence={}; S.data.evidence[id]=v; }
function saveLevel() { S.data.level = document.getElementById('a-lv').value; }
function saveProf() { S.data.proficiency = document.getElementById('a-prof').value; updateProfHint(); }

function updateProfHint() {
  const prof = document.getElementById('a-prof')?.value;
  const el = document.getElementById('prof-hint');
  if (!el) return;
  const hints = {
    'Entry': 'Adapting to the seniority level. Fulfilling minimum delivery.',
    'Established': 'Consistent delivery through time on role scope.',
    'Master': 'Nailing current level. Broader skillset. Reference for others.',
  };
  el.textContent = hints[prof] || '';
}

function updateABar(skills) {
  const scored = skills.map(sk => S.data.scores?.[sk.id]||0).filter(s=>s>0);
  const rated=scored.length, total=skills.length;
  const avg = rated ? (scored.reduce((a,b)=>a+b,0)/rated).toFixed(1) : '—';
  const pct = total ? Math.round(rated/total*100) : 0;
  const set = (id,v) => { const el=document.getElementById(id); if(el) el.textContent=v; };
  const bar = document.getElementById('a-bar'); if(bar) bar.style.width=pct+'%';
  set('a-pct', pct+'%'); set('a-avg', avg); set('a-cnt', rated); set('a-pl', `${rated}/${total} skills`);
}

async function saveAssessment() {
  S.data.level = document.getElementById('a-lv')?.value || S.data.level;
  S.data.proficiency = document.getElementById('a-prof')?.value || S.data.proficiency;
  S.data.roleId = S.roleId;
  S.data.lastSaved = new Date().toISOString();
  await api('PUT', `/api/assessments/${S.teamId}/${encodeURIComponent(S.userName)}`, S.data);
  toast('✅ Assessment saved!');
}

async function saveCheckpoint() {
  document.getElementById('m-title').textContent = 'Save Checkpoint';
  document.getElementById('m-body').innerHTML = `
    <div class="fg"><label>Checkpoint Label</label>
      <input class="fi" id="cp-label" value="Checkpoint ${new Date().toLocaleDateString()}" placeholder="e.g. Q1 2026, Sprint 12"></div>`;
  _ms = async () => {
    const label = document.getElementById('cp-label').value.trim();
    if (!label) { toast('Label is required'); return; }
    closeModal();
    await saveAssessment();
    await api('POST', `/api/assessments/${S.teamId}/${encodeURIComponent(S.userName)}/checkpoint`, { label });
    S.data = await api('GET', `/api/assessments/${S.teamId}/${encodeURIComponent(S.userName)}`);
    document.getElementById('a-checkpoints').textContent = (S.data.history||[]).length;
    toast('📸 Checkpoint saved! Your progress has been recorded.');
  };
  openModal();
}


// ─── ACTION PLAN (P2: F29 — Goal suggestions from gaps) ────────────────────────
function ensurePlanScreen() {
  const w = document.getElementById('screen-plan');
  if (!w.querySelector('.fb')) {
    w.innerHTML = `
      <div class="fb mb16">
        <div><div class="pg-t">My Action Plan</div><div class="pg-s">SMART development goals aligned with your assessment gaps.</div></div>
        <div class="fx" style="gap:6px">
          <button class="btn btn-g btn-sm" onclick="suggestGoals()">Suggest Goals</button>
          <button class="btn btn-p" onclick="openActModal(null,null)">+ Add Goal</button>
        </div>
      </div>
      <div id="plan-summary" class="sum-row mb12"></div>
      <div id="plan-list"></div>`;
  }
}

// P2: F29 — Auto-suggest goals based on lowest-scored skills
function suggestGoals() {
  if (!S.matrix || !S.data) return toast('Complete your assessment first');
  const allSkills = (S.matrix||[]).flatMap(s => s.skills||[]);
  const gaps = allSkills
    .filter(sk => (S.data.scores?.[sk.id]||0) > 0 && (S.data.scores?.[sk.id]||0) <= 2)
    .sort((a,b) => (S.data.scores?.[a.id]||0) - (S.data.scores?.[b.id]||0))
    .slice(0, 3);
  if (!gaps.length) return toast('No significant gaps found (all skills ≥ 3). Great job! 🎉');
  
  document.getElementById('m-title').textContent = '💡 Suggested Development Goals';
  document.getElementById('m-body').innerHTML = `
    <p style="font-size:.82rem;color:#666;margin-bottom:14px">Based on your lowest-scored skills, here are suggested goals. Click to add them to your plan.</p>
    ${gaps.map((sk,i) => `
      <div class="act-item" style="cursor:pointer" onclick="addSuggestedGoal('${sk.id}','${sk.name.replace(/'/g,"\\'")}')">
        <div class="fx" style="gap:10px">
          <span class="pill p${S.data.scores[sk.id]}">${S.data.scores[sk.id]}</span>
          <div>
            <div style="font-weight:700;font-size:.86rem;color:var(--kn)">${sk.name}</div>
            <div style="font-size:.76rem;color:#666;margin-top:2px">Goal: Improve from ${SL[S.data.scores[sk.id]]} to ${SL[Math.min(5, S.data.scores[sk.id]+2)]}</div>
            <div style="font-size:.72rem;color:#888;margin-top:2px">${sk.desc||''}</div>
          </div>
        </div>
      </div>`).join('')}
    <p style="font-size:.72rem;color:#aaa;margin-top:12px">Click a suggestion to add it as a goal, then edit the details.</p>`;
  _ms = null;
  openModal();
}

async function addSuggestedGoal(skillId, skillName) {
  const score = S.data.scores?.[skillId] || 0;
  const targetLevel = SL[Math.min(5, score + 2)];
  const act = {
    skill: skillName,
    goal: `Improve ${skillName} from ${SL[score]} to ${targetLevel}`,
    actions: '',
    success: `Achieve score ${Math.min(5, score+2)} (${targetLevel}) in next assessment`,
    date: '',
    status: 'todo',
  };
  if (!S.data.actions) S.data.actions = [];
  S.data.actions.push(act);
  await api('PUT', `/api/assessments/${S.teamId}/${encodeURIComponent(S.userName)}`, S.data);
  closeModal();
  renderPlan(S.data, S.userName, true);
  toast(`✅ Goal added for ${skillName}`);
}

function renderPlan(data, memberName, isSelf) {
  if (!data) return;
  const acts = data.actions || [];
  const w = document.getElementById('plan-list');
  if (!w) return;

  const sumEl = document.getElementById('plan-summary');
  if (sumEl) {
    const todo = acts.filter(a=>a.status==='todo').length;
    const inprog = acts.filter(a=>a.status==='inprog').length;
    const done = acts.filter(a=>a.status==='done').length;
    sumEl.innerHTML = `
      <div class="sum-card"><div class="sv">${acts.length}</div><div class="sl">Total Goals</div></div>
      <div class="sum-card"><div class="sv" style="color:#666">${todo}</div><div class="sl">Not Started</div></div>
      <div class="sum-card"><div class="sv" style="color:var(--y1)">${inprog}</div><div class="sl">In Progress</div></div>
      <div class="sum-card"><div class="sv" style="color:var(--g1)">${done}</div><div class="sl">Completed</div></div>`;
  }

  if (!acts.length) {
    w.innerHTML = `<div class="empty">No goals yet.${isSelf?' Click <b>+ Add Goal</b> to start or use <b>Suggest Goals</b> for recommendations.':''}</div>`;
    return;
  }
  w.innerHTML = acts.map((a,i) => `
    <div class="act-item ${a.status}">
      <div class="fb">
        <div class="fx" style="flex:1;gap:7px">
          <div class="pill p3" style="width:24px;height:24px;font-size:.72rem;flex-shrink:0">${i+1}</div>
          <div>
            <div style="font-weight:700;font-size:.88rem;color:var(--kn)">${a.goal}</div>
            <div style="font-size:.74rem;color:#888;margin-top:3px">
              ${a.skill||'—'} &nbsp;·&nbsp; ${a.date||'No deadline'}
            </div>
            ${a.actions ? `<div style="font-size:.78rem;color:#555;margin-top:5px;line-height:1.5">${a.actions.replace(/\n/g,'<br>')}</div>` : ''}
            ${a.success ? `<div style="font-size:.76rem;color:var(--g1);margin-top:4px;font-style:italic">Success: ${a.success}</div>` : ''}
          </div>
        </div>
        <div class="fx" style="gap:4px;align-items:flex-start;flex-shrink:0">
          <span class="stb st-${a.status}">${{todo:'Not Started',inprog:'In Progress',done:'Done'}[a.status]}</span>
          ${isSelf ? `
            <div class="fx" style="gap:3px">
              <button class="icon-btn" style="width:26px;height:26px" onclick="openActModal(${i},'${memberName}')" title="Edit">
                <img src="assets/Pencil.svg" alt="Edit" style="width:14px;height:14px">
              </button>
              <button class="icon-btn icon-btn-danger" style="width:26px;height:26px" onclick="delAct(${i},'${memberName}')" title="Delete">
                <img src="assets/Bin.svg" alt="Delete" style="width:14px;height:14px" class="icon-red">
              </button>
            </div>` : ''}
        </div>
      </div>
    </div>`).join('');
}

function openActModal(idx, memberName) {
  _editActIdx  = idx;
  _actTarget   = memberName || S.userName;
  const isSelf = !memberName || memberName === S.userName;
  const src    = isSelf ? S.data : _dashData;
  const a      = idx !== null ? (src.actions||[])[idx] : {};
  document.getElementById('m-title').textContent = idx===null ? 'Add Development Goal' : 'Edit Goal';
  document.getElementById('m-body').innerHTML = `
    <p style="font-size:.78rem;color:#888;margin-bottom:14px">Goals should follow SMART criteria: Specific, Measurable, Attainable, Relevant, Time-bound.</p>
    <div class="fg"><label>Skill / Competency Area</label>
      <input class="fi" id="ma-sk" value="${a.skill||''}" placeholder="e.g. Kafka, Snowflake, AI Tools…"></div>
    <div class="fg"><label>Development Goal <span style="color:var(--r1)">*</span></label>
      <input class="fi" id="ma-gl" value="${a.goal||''}" placeholder="What do you want to achieve? Be specific."></div>
    <div class="fg"><label>Actions to Take</label>
      <textarea class="fi" rows="3" id="ma-ac" style="resize:vertical" placeholder="1. Complete online course on...\n2. Pair with colleague on...\n3. Build a small POC...">${a.actions||''}</textarea></div>
    <div class="fg"><label>Success Criteria</label>
      <input class="fi" id="ma-sc" value="${a.success||''}" placeholder="How will you know it's done? What's the measurable outcome?"></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
      <div class="fg"><label>Target Date</label>
        <input class="fi" id="ma-dt" type="date" value="${a.date||''}"></div>
      <div class="fg"><label>Status</label>
        <select class="fi" id="ma-st">
          <option value="todo"   ${(a.status||'todo')==='todo'  ?'selected':''}>Not Started</option>
          <option value="inprog" ${a.status==='inprog'?'selected':''}>In Progress</option>
          <option value="done"   ${a.status==='done'  ?'selected':''}>Done</option>
        </select></div>
    </div>`;
  _ms = saveAct;
  openModal();
}

async function saveAct() {
  const goal = document.getElementById('ma-gl').value.trim();
  if (!goal) { toast('Please enter a goal'); return; }
  const act = {
    skill:   document.getElementById('ma-sk').value.trim(), goal,
    actions: document.getElementById('ma-ac').value.trim(),
    success: document.getElementById('ma-sc').value.trim(),
    date:    document.getElementById('ma-dt').value,
    status:  document.getElementById('ma-st').value,
  };
  const isSelf = !_actTarget || _actTarget===S.userName;
  const src    = isSelf ? S.data : _dashData;
  if (!src.actions) src.actions = [];
  if (_editActIdx !== null) src.actions[_editActIdx] = act;
  else src.actions.push(act);
  await api('PUT', `/api/assessments/${S.teamId}/${encodeURIComponent(_actTarget)}`, src);
  if (isSelf) { S.data=src; renderPlan(S.data, S.userName, true); }
  else        { _dashData=src; dTab('actions'); }
  closeModal();
  toast('✅ Goal saved!');
}

async function delAct(i, memberName) {
  if (!confirm('Delete this goal?')) return;
  const isSelf = !memberName || memberName===S.userName;
  const src    = isSelf ? S.data : _dashData;
  src.actions.splice(i, 1);
  await api('PUT', `/api/assessments/${S.teamId}/${encodeURIComponent(memberName||S.userName)}`, src);
  if (isSelf) { S.data=src; renderPlan(S.data, S.userName, true); }
  else        { _dashData=src; dTab('actions'); }
}


// ─── COVERAGE (P1: F19 — N/A skills, F20 — Section filter) ─────────────────────
async function renderCoverage() {
  const {team, assessments} = await api('GET', `/api/coverage/${S.teamId}`);
  const roles   = team.roles || [];
  const members = team.members;

  // Role filters
  const ff = document.getElementById('cov-role-filters');
  ff.innerHTML =
    `<button class="btn btn-sm ${!_covFilter?'btn-p':'btn-g'}" onclick="_covFilter=null;_covSectionFilter=null;renderCoverage()">All Roles</button>` +
    roles.map(r =>
      `<button class="btn btn-sm ${_covFilter===r.id?'btn-p':'btn-g'}" onclick="_covFilter='${r.id}';_covSectionFilter=null;renderCoverage()">${r.name}</button>`
    ).join('');

  const filtMembers = _covFilter
    ? members.filter(m => (assessments[m.name]?.roleId||m.roleId) === _covFilter)
    : members;

  let sections = [];
  if (_covFilter) {
    const role = roles.find(r => r.id===_covFilter);
    if (role) sections = role.sections || [];
  } else {
    const seen = new Set();
    roles.forEach(r => (r.sections||[]).forEach(sec => {
      const newSk = (sec.skills||[]).filter(sk => !seen.has(sk.id));
      newSk.forEach(sk => seen.add(sk.id));
      if (newSk.length) {
        const ex = sections.find(s => s.name===sec.name && s.color===sec.color);
        if (ex) ex.skills.push(...newSk);
        else sections.push({...sec, skills: newSk});
      }
    }));
  }

  // P1: F20 — Section filter buttons
  const stripEmoji = (str) => str.replace(/[\u{1F300}-\u{1FAD6}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}\u{1F900}-\u{1F9FF}]/gu, '').trim();
  const secFilterHtml = sections.length > 1 ? `
    <div class="fx" style="flex-wrap:wrap;gap:5px;margin:12px 0 16px;padding:12px 14px;background:var(--bg);border-radius:6px">
      <span style="font-size:.72rem;font-weight:700;color:#888;margin-right:4px">Filter:</span>
      <button class="btn btn-xs ${!_covSectionFilter?'btn-p':'btn-g'}" onclick="_covSectionFilter=null;renderCoverage()">All Sections</button>
      ${sections.map(s => `<button class="btn btn-xs ${_covSectionFilter===s.name?'btn-p':'btn-g'}" onclick="_covSectionFilter='${s.name.replace(/'/g,"\\'")}';renderCoverage()">${stripEmoji(s.name)}</button>`).join('')}
    </div>` : '';

  // Apply section filter
  const displaySections = _covSectionFilter ? sections.filter(s => s.name === _covSectionFilter) : sections;

  const allSkills  = displaySections.flatMap(s => s.skills||[]);
  const priSkills  = allSkills.filter(s => s.cov && s.cov.includes('2'));
  const covered    = priSkills.filter(sk =>
    filtMembers.filter(m => (assessments[m.name]?.scores?.[sk.id]||0) >= 3).length >= 2
  ).length;
  const pct = priSkills.length ? Math.round(covered/priSkills.length*100) : 0;

  document.getElementById('cov-sum').innerHTML = `
    <div class="sum-card"><div class="sv">${covered}/${priSkills.length}</div><div class="sl">Priority Skills Covered (≥2 @ level 3+)</div></div>
    <div class="sum-card"><div class="sv">${filtMembers.length}</div><div class="sl">Team Members</div></div>
    <div class="sum-card"><div class="sv" style="color:${priSkills.length-covered>0?'var(--r1)':'var(--g1)'}">${priSkills.length-covered}</div><div class="sl">Priority Gaps</div></div>
    <div class="sum-card"><div class="sv" style="color:${pct>=80?'var(--g1)':pct>=50?'var(--acc)':'var(--r1)'}">${pct}%</div><div class="sl">Coverage Target</div></div>`;

  if (!filtMembers.length || !allSkills.length) {
    document.getElementById('cov-tbl').innerHTML = secFilterHtml + '<div class="empty">No data yet. Members need to complete their assessment first.</div>';
    return;
  }

  // Build skill-to-role mapping for N/A detection (P1: F19)
  const memberRoleSkills = {};
  filtMembers.forEach(m => {
    const roleId = assessments[m.name]?.roleId || m.roleId;
    const role = roles.find(r => r.id === roleId);
    const skillIds = new Set();
    if (role) (role.sections||[]).forEach(s => (s.skills||[]).forEach(sk => skillIds.add(sk.id)));
    memberRoleSkills[m.name] = skillIds;
  });

  const shortName = n => n.split(' ').map((w,i) => i===0 ? w : w[0]+'.').join(' ');

  let html = secFilterHtml + `<table class="cov-tbl"><thead><tr>
    <th class="sk-hdr" style="position:sticky;left:0;z-index:2;min-width:220px">Skill / Competency</th>
    <th style="min-width:50px">Cov.</th>
    <th style="min-width:50px">Avg</th>
    ${filtMembers.map(m => {
      const d    = assessments[m.name] || {};
      const role = roles.find(r => r.id===(d.roleId||m.roleId));
      return `<th style="min-width:75px">
        <div style="font-size:.78rem">${shortName(m.name)}</div>
        <div style="font-size:.62rem;color:#AED6F1;font-weight:400">${role?.name||'—'}</div>
      </th>`;
    }).join('')}
    <th style="min-width:65px">Coverage</th>
  </tr></thead><tbody>`;

  const secBgColors = { tech: '#edf7fc', biz: '#edf2fa', beh: '#f1f5f9', ai: '#e8f7fc', custom: '#f5f5f5' };
  displaySections.forEach(sec => {
    const secBg = secBgColors[sec.color||'tech'] || '#f8fafc';
    html += `<tr><td colspan="${filtMembers.length+4}" class="sec-row sec-row-${sec.color||'tech'}">${stripEmoji(sec.name)}</td></tr>`;
    (sec.skills||[]).forEach(sk => {
      const scores  = filtMembers.map(m => {
        // P1: F19 — Check if skill is in member's role matrix
        const isInRole = memberRoleSkills[m.name]?.has(sk.id);
        if (!isInRole && !_covFilter) return { score: 0, na: true };
        return { score: assessments[m.name]?.scores?.[sk.id] || 0, na: false };
      });
      const validScores = scores.filter(s => !s.na);
      const reach3  = validScores.filter(s => s.score>=3).length;
      // Coverage target applies only to members who have this skill in their matrix
      const membersWithSkill = validScores.length;
      let need;
      if (sk.cov === 'All') need = membersWithSkill; // all members with this skill
      else if (sk.cov && sk.cov.includes('2')) need = Math.min(2, membersWithSkill); // at least 2 (or all if fewer)
      else need = 1; // specialist: just 1
      const covOk   = reach3 >= need;
      const covCls  = sk.cov==='All' ? 'ct-all' : sk.cov&&sk.cov.includes('2') ? 'ct-2' : 'ct-sp';
      const covLbl  = sk.cov==='All' ? 'All' : sk.cov&&sk.cov.includes('2') ? '2+' : 'Spec';
      html += `<tr class="${!covOk && sk.cov&&sk.cov.includes('2') ? 'gap-row' : ''}" style="background:${secBg}">
        <td class="sk-cell" style="position:sticky;left:0;z-index:1;background:${secBg}">
          ${sk.name}
        </td>
        <td style="text-align:center"><span class="cov-t ${covCls}" style="font-size:.62rem">${covLbl}</span></td>
        <td style="text-align:center;font-weight:700;font-size:.78rem;color:var(--kn)">${validScores.length ? (validScores.reduce((a,s)=>a+s.score,0)/validScores.length).toFixed(1) : '—'}</td>
        ${scores.map(s => {
          if (s.na) return `<td><span class="pill-na" title="Not in this member's role">N/A</span></td>`;
          return `<td><span class="pill p${s.score}">${s.score||'—'}</span></td>`;
        }).join('')}
        <td><span class="gb ${covOk?'gb-ok':'gb-gap'}">${reach3}/${need}</span></td>
      </tr>`;
    });
  });

  html += `<tr class="cov-avg-row">
    <td style="position:sticky;left:0;padding:7px 12px;font-weight:700;font-size:.76rem;color:var(--kn2)">Average Score</td>
    ${filtMembers.map(m => {
      const d  = assessments[m.name] || {};
      const sc = allSkills.map(sk => d.scores?.[sk.id]||0).filter(s=>s>0);
      const avg = sc.length ? (sc.reduce((a,b)=>a+b,0)/sc.length).toFixed(1) : '—';
      return `<td><strong>${avg}</strong></td>`;
    }).join('')}
    <td></td>
  </tr>`;

  html += '</tbody></table>';
  document.getElementById('cov-tbl').innerHTML = html;
}


// ─── DASHBOARD (P2: F27 — Progress history visualization) ───────────────────────
async function renderDashboard() {
  const {team, assessments} = await api('GET', `/api/coverage/${S.teamId}`);
  _dashRoles = team.roles || [];
  const members = team.members;
  const w = document.getElementById('d-cards');
  document.getElementById('d-detail').style.display = 'none';
  if (!members.length) { w.innerHTML = '<div class="empty">No team members yet. Add members in Settings.</div>'; return; }
  // Store assessments in memory for click access
  window._dashAssessments = assessments;
  w.innerHTML = members.map(m => {
    const d    = assessments[m.name] || {};
    const sc   = Object.values(d.scores||{}).filter(s=>s>0);
    const avg  = sc.length ? (sc.reduce((a,b)=>a+b,0)/sc.length).toFixed(1) : '—';
    const role = _dashRoles.find(r => r.id===(d.roleId||m.roleId));
    const cal  = d.calibratedScores && Object.keys(d.calibratedScores).length > 0;
    return `<div class="mc" onclick="showMember('${m.name.replace(/'/g,"\\'")}')">
      <div class="mn">${m.name}${cal?'<span class="badge-calib" style="margin-left:5px">Calibrated</span>':''}</div>
      <div class="ml">${role?.name||'—'} · ${d.level||'—'} ${d.proficiency?`· ${d.proficiency}`:''}</div>
      <div class="ma">${avg}</div>
      <div class="mp">${sc.length} skills rated${d.history?.length?` · ${d.history.length} checkpoints`:''}</div>
    </div>`;
  }).join('');
}

async function showMember(name) {
  document.querySelectorAll('.mc').forEach(c =>
    c.classList.toggle('sel', c.querySelector('.mn').textContent.trim().startsWith(name)));
  // Fetch fresh data from API
  const data = await api('GET', `/api/assessments/${S.teamId}/${encodeURIComponent(name)}`);
  _dashMember = name; _dashData = data;
  document.getElementById('d-detail').style.display = 'block';
  document.querySelectorAll('.dtab').forEach((b,i) => b.classList.toggle('on', i===0));
  ['dt-overview','dt-matrix','dt-actions','dt-history'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });
  document.getElementById('dt-overview').style.display = 'block';
  dTab('overview');
}

function dTab(t) {
  _dashTab = t;
  ['dt-overview','dt-matrix','dt-actions','dt-history'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });
  const el = document.getElementById('dt-'+t);
  if (el) el.style.display = 'block';
  document.querySelectorAll('.dtab').forEach((b,i) =>
    b.classList.toggle('on', ['overview','matrix','actions','history'][i]===t));
  if (t==='overview') renderDashOverview();
  if (t==='matrix')   renderDashMatrix();
  if (t==='actions')  renderDashActions();
  if (t==='history')  renderDashHistory();
}

function renderDashOverview() {
  const data = _dashData, name = _dashMember;
  const role = (_dashRoles||[]).find(r => r.id===data.roleId);
  const dims = {};
  if (role) {
    (role.sections||[]).forEach(sec => {
      dims[sec.name.replace(/[\u{1F300}-\u{1FAD6}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}\u{1F900}-\u{1F9FF}]/gu, '').trim()] = [];
      (sec.skills||[]).forEach(sk => { if (data.scores?.[sk.id]) dims[sec.name.replace(/[\u{1F300}-\u{1FAD6}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}\u{1F900}-\u{1F9FF}]/gu, '').trim()].push(data.scores[sk.id]); });
    });
  }
  const sc  = Object.values(data.scores||{}).filter(s=>s>0);
  const avg = sc.length ? (sc.reduce((a,b)=>a+b,0)/sc.length).toFixed(1) : '—';

  document.getElementById('dt-overview').innerHTML = `
    <div class="card">
      <div class="fb">
        <h2>${name}</h2>
        <div class="fx" style="gap:6px">
          ${data.roleId ? `<span class="tag-b">${role?.name||'—'}</span>` : ''}
          <span class="tag-g">${data.level||'—'}</span>
          ${data.proficiency ? `<span class="tag-prof">${data.proficiency}</span>` : ''}
          <span style="font-size:1.3rem;font-weight:700;color:var(--acc);margin-left:6px">${avg} avg</span>
        </div>
      </div>
      <p class="sub">Dimension averages · last saved ${data.lastSaved ? new Date(data.lastSaved).toLocaleDateString() : '—'}${data.calibratedBy?` · <span class="badge-calib">Calibrated by ${data.calibratedBy}</span>`:''}</p>
      <div class="dg mt8">${Object.entries(dims).map(([d,arr]) => {
        if (!arr.length) return '';
        const a = (arr.reduce((x,y)=>x+y,0)/arr.length).toFixed(1);
        const p = Math.round(parseFloat(a)/5*100);
        const col = p>=70?'var(--g1)':p>=50?'var(--acc)':'var(--r1)';
        return `<div class="dc"><div class="dn">${d}</div>
          <div class="dv">${a}<span style="font-size:.7rem;color:#aaa;font-weight:400">/5</span></div>
          <div class="fx"><div class="pbar-w"><div class="pbar" style="width:${p}%;background:${col}"></div></div></div>
        </div>`;
      }).join('')}</div>
    </div>
    <div class="card">
      <h2>Radar – Skill Dimensions</h2><p class="sub">Score 1–5 across dimensions</p>
      <div class="cw"><canvas id="radar"></canvas></div>
    </div>
    <div class="card">
      <h2>Top Development Areas</h2><p class="sub">Lowest scored skills – focus here first</p>
      <div id="d-gaps"></div>
    </div>`;

  if (_vc) _vc.destroy();
  const dNames = Object.keys(dims).filter(d => dims[d].length > 0);
  const dAvgs  = dNames.map(d => { const a=dims[d]; return a.length?(a.reduce((x,y)=>x+y,0)/a.length):0; });
  _vc = new Chart(document.getElementById('radar').getContext('2d'), {
    type: 'radar',
    data: { labels: dNames, datasets: [{ label: name, data: dAvgs, fill: true,
      backgroundColor: 'rgba(41,128,185,0.18)', borderColor: '#2980B9', pointBackgroundColor: '#2980B9' }] },
    options: { responsive:true, maintainAspectRatio:false,
      scales: { r: { min:0, max:5, ticks:{stepSize:1}, pointLabels:{font:{size:10}} } },
      plugins: { legend: { display:false } } }
  });

  const allSk = [];
  if (role) (role.sections||[]).forEach(s => (s.skills||[]).forEach(sk => {
    if (data.scores?.[sk.id]) allSk.push({...sk, score: data.scores[sk.id]});
  }));
  allSk.sort((a,b) => a.score - b.score);
  document.getElementById('d-gaps').innerHTML = allSk.slice(0,5).map(s => `
    <div class="fx" style="padding:8px 12px;background:var(--grey);border-radius:7px;margin-bottom:6px">
      <span class="pill p${s.score}">${s.score}</span>
      <div>
        <div style="font-weight:600;font-size:.82rem">${s.name}</div>
        <div style="font-size:.72rem;color:#888">${SL[s.score]}</div>
      </div>
    </div>`).join('') || '<div class="empty">No scored skills yet.</div>';
}

// P2: F27 — Progress history chart
function renderDashHistory() {
  const data = _dashData, name = _dashMember;
  const w = document.getElementById('dt-history');
  if (!w) return;
  const history = data.history || [];
  if (!history.length) {
    w.innerHTML = '<div class="card"><div class="empty">No checkpoints saved yet. Progress history will appear here after checkpoints are created.</div></div>';
    return;
  }

  // Current assessment scores
  const currentScoresArr = Object.values(data.scores||{}).filter(s=>s>0);
  const currentAvgVal = currentScoresArr.length ? (currentScoresArr.reduce((a,b)=>a+b,0)/currentScoresArr.length).toFixed(1) : '—';

  w.innerHTML = `
    <div class="card">
      <h2>Progress Over Time · ${name}</h2>
      <p class="sub">${history.length} checkpoint${history.length>1?'s':''} recorded</p>
      <div style="height:300px"><canvas id="history-chart"></canvas></div>
    </div>
    <div class="card">
      <h2>Checkpoint Details</h2>
      <table class="atbl"><thead><tr><th>Date</th><th>Label</th><th>Level</th><th>Proficiency</th><th>Avg Score</th><th>Skills Rated</th></tr></thead>
      <tbody>
      <tr style="background:var(--acc-lt);font-weight:600">
        <td>${new Date().toLocaleDateString()}</td>
        <td>Current Assessment</td>
        <td>${data.level||'—'}</td>
        <td>${data.proficiency||'—'}</td>
        <td>${currentAvgVal}</td>
        <td>${currentScoresArr.length}</td>
      </tr>
      ${history.slice().reverse().map(h => {
        const scores = Object.values(h.scores||{}).filter(s=>s>0);
        const avg = scores.length ? (scores.reduce((a,b)=>a+b,0)/scores.length).toFixed(1) : '—';
        return `<tr>
          <td>${new Date(h.date).toLocaleDateString()}</td>
          <td><strong>${h.label}</strong></td>
          <td>${h.level||'—'}</td>
          <td>${h.proficiency||'—'}</td>
          <td><strong>${avg}</strong></td>
          <td>${scores.length}</td>
        </tr>`;
      }).join('')}</tbody></table>
    </div>`;

  // Draw progress chart
  const labels = history.map(h => h.label || new Date(h.date).toLocaleDateString());
  const avgData = history.map(h => {
    const scores = Object.values(h.scores||{}).filter(s=>s>0);
    return scores.length ? (scores.reduce((a,b)=>a+b,0)/scores.length) : 0;
  });
  // Add current as last point
  const currentScores = Object.values(data.scores||{}).filter(s=>s>0);
  const currentAvg = currentScores.length ? (currentScores.reduce((a,b)=>a+b,0)/currentScores.length) : 0;
  labels.push('Current');
  avgData.push(currentAvg);

  new Chart(document.getElementById('history-chart').getContext('2d'), {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: 'Average Score',
        data: avgData,
        borderColor: '#2980B9',
        backgroundColor: 'rgba(41,128,185,0.1)',
        fill: true,
        tension: 0.3,
        pointRadius: 5,
        pointBackgroundColor: '#2980B9',
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      scales: { y: { min: 0, max: 5, ticks: { stepSize: 1 } } },
      plugins: { legend: { display: false } }
    }
  });
}

function renderDashMatrix() {
  const data = _dashData, name = _dashMember;
  const role = (_dashRoles||[]).find(r => r.id===data.roleId);
  const w = document.getElementById('dt-matrix');
  if (!role || !(role.sections||[]).length) {
    w.innerHTML = '<div class="empty">No skill matrix found for this member\'s role.</div>';
    return;
  }
  let html = `<div class="card">
    <div class="fb mb12">
      <div>
        <h2>Assessment &amp; Calibration · ${name}</h2>
        <p class="sub"><b>Self</b> = member's score · <b>Calibrated</b> = your assessment as team lead · Add notes for context.</p>
      </div>
      <button class="btn btn-save" onclick="saveCalibration('${name}')">Save Calibration</button>
    </div>
    <div class="mv-col-hdr">
      <span>Skill</span><span style="text-align:center">Self</span><span>Calibrated</span><span>Notes</span>
    </div>`;

  (role.sections||[]).forEach(sec => {
    html += `<div class="mv-sec-hdr sh-${sec.color||'tech'} mt8">${sec.name.replace(/[\u{1F300}-\u{1FAD6}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}\u{1F900}-\u{1F9FF}]/gu, '').trim()}</div><div class="matrix-view">`;
    (sec.skills||[]).forEach(sk => {
      const self  = data.scores?.[sk.id] || 0;
      const calib = data.calibratedScores?.[sk.id] || 0;
      const note  = (data.calibrationNotes?.[sk.id] || '').replace(/"/g,'&quot;');
      html += `<div class="mv-row">
        <div><div class="mv-sk-name">${sk.name}</div><div class="mv-sk-desc">${sk.desc||''}</div></div>
        <div style="text-align:center">
          <span class="pill-ro pr${self}" title="${SL[self]||'Not rated'}">${self||'—'}</span>
          <div style="font-size:.62rem;color:#aaa;margin-top:2px">${SL[self]||'—'}</div>
        </div>
        <div>
          <div class="stars" id="cstars-${sk.id}">
            ${[1,2,3,4,5].map(n=>`<div class="star s${n} ${calib>=n?'on':''}"
              onclick="setCalib('${name}','${sk.id}',${n})" title="${SL[n]}">${n}</div>`).join('')}
          </div>
        </div>
        <div>
          <input class="fi" style="padding:5px 8px;font-size:.74rem" id="cnote-${sk.id}"
            value="${note}" placeholder="Note…" onchange="setCalibNote('${sk.id}',this.value)">
        </div>
      </div>`;
    });
    html += '</div>';
  });
  html += `<div style="text-align:right;margin-top:12px">
    <button class="btn btn-save" onclick="saveCalibration('${name}')">Save Calibration</button>
  </div></div>`;
  w.innerHTML = html;
}

function setCalib(memberName, skillId, v) {
  if (!_dashData.calibratedScores) _dashData.calibratedScores = {};
  _dashData.calibratedScores[skillId] = v;
  document.getElementById(`cstars-${skillId}`).querySelectorAll('.star').forEach((s,i) =>
    s.className = `star s${i+1} ${i+1<=v?'on':''}`);
}
function setCalibNote(skillId, val) {
  if (!_dashData.calibrationNotes) _dashData.calibrationNotes = {};
  _dashData.calibrationNotes[skillId] = val;
}
async function saveCalibration(memberName) {
  _dashData.calibratedBy = S.userName;
  _dashData.calibratedAt = new Date().toISOString();
  await api('PUT', `/api/assessments/${S.teamId}/${encodeURIComponent(memberName)}`, _dashData);
  toast(`✅ Calibration saved for ${memberName}`);
}

async function renderDashActions() {
  const name = _dashMember;
  // Always fetch fresh data to ensure we see latest actions
  _dashData = await api('GET', `/api/assessments/${S.teamId}/${encodeURIComponent(name)}`);
  const data = _dashData;
  document.getElementById('dt-actions').innerHTML = `
    <div class="fb mb12"><h2 style="color:var(--kn)">Action Plan · ${name}</h2>
      <button class="btn btn-p btn-sm" onclick="openActModal(null,'${name}')">+ Add Goal</button>
    </div>
    <div id="plan-list"></div>`;
  renderPlan(data, name, true);
}


// ─── CONFIGURE (P1: F16 — Editable skills, F18 — Reordering) ────────────────────
let _cfgTab = 'info';
async function renderConfig() {
  _cfgTeam = await api('GET', `/api/teams/${S.teamId}/config`);
  cfgTab(_cfgTab);
}
function cfgTab(t) {
  _cfgTab = t;
  document.querySelectorAll('.cfg-tab').forEach((b,i) =>
    b.classList.toggle('on', ['info','roles','members','leads'][i]===t));
  ['cfg-info','cfg-roles','cfg-members','cfg-leads'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });
  const el = document.getElementById('cfg-'+t);
  if (el) el.style.display = '';
  if (t==='info')    renderCfgInfo();
  if (t==='roles')   renderCfgRoles();
  if (t==='members') renderCfgMembers();
  if (t==='leads')   renderCfgLeads();
}

function renderCfgInfo() {
  const t = _cfgTeam || {};
  document.getElementById('cfg-info').innerHTML = `<div class="card">
    <h2>Team Identity</h2><p class="sub">Name, description, icon and colour shown in the sidebar.</p>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
      <div class="fg"><label>Team Name</label><input class="fi" id="ti-name" value="${t.name||''}"></div>
      <div class="fg"><label>Description</label><input class="fi" id="ti-desc" value="${t.description||''}"></div>
    </div>
    <div class="fg mt8"><label>Team Icon</label>
      <div class="fx" style="flex-wrap:wrap;gap:6px;margin-top:4px">
        ${ICONS.map(ic=>`<button class="icon-btn ${t.icon===ic?'sel':''}" onclick="pickIcon('${ic}')">${ic}</button>`).join('')}
      </div></div>
    <div class="fg mt8"><label>Brand Colour</label>
      <div class="fx" style="gap:8px;flex-wrap:wrap;margin-top:4px">
        ${COLORS.map(c=>`<div class="color-dot ${t.color===c?'sel':''}" style="background:${c}" onclick="pickColor('${c}')"></div>`).join('')}
      </div></div>
    <div class="mt16"><button class="btn btn-save" onclick="saveTeamInfo()">Save Team Info</button></div>
  </div>`;
  _pickedIcon = t.icon; _pickedColor = t.color;
}
function pickIcon(ic) { _pickedIcon=ic; document.querySelectorAll('#cfg-info .icon-btn').forEach(b=>b.classList.toggle('sel',b.textContent.trim()===ic)); }
function pickColor(col) { _pickedColor=col; document.querySelectorAll('#cfg-info .color-dot').forEach(d=>d.classList.toggle('sel',d.style.background===col||d.style.background===hexRgb(col))); }
async function saveTeamInfo() {
  const body = { name: document.getElementById('ti-name').value.trim()||_cfgTeam.name, description: document.getElementById('ti-desc').value.trim(), icon: _pickedIcon||_cfgTeam.icon, color: _pickedColor||_cfgTeam.color };
  _cfgTeam = await api('PUT', `/api/teams/${S.teamId}/config`, body);
  S.teamName=_cfgTeam.name; S.teamIcon=_cfgTeam.icon; S.teamColor=_cfgTeam.color;
  const badge = document.getElementById('sb-role-badge');
  if (badge && S.role!=='admin' && S.role!=='em') badge.textContent = `${S.teamIcon} ${S.teamName}\n${S.roleLabel||S.roleName||''}`;
  toast('✅ Team info saved!');
}

function renderCfgRoles() {
  const roles = _cfgTeam.roles || [];
  document.getElementById('cfg-roles').innerHTML = `
    <div class="fb mb12">
      <div><strong>Roles & Skill Matrices</strong><div style="font-size:.76rem;color:#888">Each role has its own skill matrix. Click a role to edit its matrix.</div></div>
      <button class="btn btn-p btn-sm" onclick="openNewRoleModal()">+ New Role</button>
    </div>
    <div class="role-grid" id="role-grid-sortable">
      ${roles.length ? roles.map((r, idx) => `
        <div class="rci ${_editingRoleId===r.id?'sel':''}" draggable="true" data-role-idx="${idx}" data-role-id="${r.id}"
          ondragstart="roleCardDragStart(event)" ondragover="roleCardDragOver(event)" ondrop="roleCardDrop(event)" ondragend="roleCardDragEnd(event)"
          onclick="selectRoleEdit('${r.id}')">
          <div class="rci-drag-handle" title="Drag to reorder">⠿</div>
          <div class="rci-name">${r.name}</div><div class="rci-desc">${r.desc||''}</div>
          <div class="fx" style="justify-content:space-between">
            <span class="rci-stats">${(r.sections||[]).flatMap(s=>s.skills||[]).length} skills · ${(r.sections||[]).length} sections</span>
            <div class="kb-wrap" onclick="event.stopPropagation()">
              <button class="kb-btn" onclick="openKebab('kb-rl-${r.id}',event)">⋯</button>
              <div class="kb-menu" id="kb-rl-${r.id}">
                <button class="kb-item" onclick="selectRoleEdit('${r.id}')"><img src="assets/Pencil.svg" alt="" style="width:14px;height:14px;vertical-align:middle;margin-right:6px">Edit Matrix</button>
                <div class="kb-divider"></div>
                <button class="kb-item danger" onclick="deleteRole('${r.id}')"><img src="assets/Bin.svg" alt="" style="width:14px;height:14px;vertical-align:middle;margin-right:6px">Delete</button>
              </div>
            </div>
          </div>
        </div>`).join('')
      : '<div class="empty" style="grid-column:1/-1">No roles yet.</div>'}
    </div>
    <div id="matrix-editor-wrap" style="display:none">
      <div class="fb mb8 mt20">
        <h3 id="me-role-name" style="color:var(--kn);font-size:1rem"></h3>
        <div class="fx">
          <button class="btn btn-g btn-sm" onclick="openLoadTemplateModal()"><img src="assets/Documents.svg" style="width:14px;height:14px;vertical-align:middle;margin-right:4px">Load Template</button>
          <button class="btn btn-g btn-sm" onclick="openImportTplModal()"><img src="assets/Database.svg" style="width:14px;height:14px;vertical-align:middle;margin-right:4px">Import File</button>
          <button class="btn btn-g btn-sm" onclick="exportMatrixCSV()"><img src="assets/Data sharing.svg" style="width:14px;height:14px;vertical-align:middle;margin-right:4px">Export</button>
          <button class="btn btn-g btn-sm" onclick="addSection()">+ Section</button>
          <button class="btn btn-save btn-sm" onclick="saveMatrix()">💾 Save Matrix</button>
        </div>
      </div>
      <div id="matrix-editor"></div>
    </div>`;
  if (_editingRoleId) { const role=roles.find(r=>r.id===_editingRoleId); if(role){renderMatrixEditor(role);document.getElementById('matrix-editor-wrap').style.display='';} }
}

function selectRoleEdit(id) {
  _editingRoleId=id; const role=(_cfgTeam.roles||[]).find(r=>r.id===id);
  if(role){renderMatrixEditor(role);document.getElementById('matrix-editor-wrap').style.display='';}
  document.querySelectorAll('.rci').forEach(c=>c.classList.toggle('sel',c.querySelector('.rci-name')?.textContent===role?.name));
}
function renderMatrixEditor(role) {
  _matrixDraft = JSON.parse(JSON.stringify(role.sections || []));
  // If matrix is empty, create default 4 sections
  if (!_matrixDraft.length) {
    _matrixDraft = [
      { id: 'sec-tech', name: 'Technical Skills', color: 'tech', skills: [] },
      { id: 'sec-biz', name: 'Business & Domain', color: 'biz', skills: [] },
      { id: 'sec-beh', name: 'Behavioural Skills', color: 'beh', skills: [] },
      { id: 'sec-ai', name: 'AI & Automation', color: 'ai', skills: [] }
    ];
  }
  document.getElementById('me-role-name').textContent = `${role.name} – Matrix Editor`;
  refreshME();
}

// P1: F16 + F18 — Matrix editor with edit and reorder
function refreshME() {
  const secColors = ['tech','biz','beh','ai','custom'];
  document.getElementById('matrix-editor').innerHTML = _matrixDraft.map((sec, si) => {
    // Strip emojis from section name
    const cleanName = sec.name.replace(/[\u{1F300}-\u{1FAD6}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}\u{1F900}-\u{1F9FF}]/gu, '').trim();
    return `
    <div class="me-sec">
      <div class="me-sec-hdr sh-${sec.color||'tech'} sh-collapsible" onclick="toggleMatrixSection(${si})">
        <span class="sh-arrow" id="me-arrow-${si}">▾</span>
        <span style="flex:1">${cleanName}</span>
        <span class="sh-count">${(sec.skills||[]).length} skills</span>
        <button onclick="event.stopPropagation();renSec(${si})" style="width:28px;height:28px;background:rgba(255,255,255,.2);border:none;cursor:pointer;border-radius:5px;display:flex;align-items:center;justify-content:center" title="Edit section">
          <img src="assets/Pencil.svg" alt="Edit" style="width:18px;height:18px;filter:brightness(0) invert(1)">
        </button>
        <button onclick="event.stopPropagation();delSec(${si})" style="width:28px;height:28px;background:#cf1322;border:none;cursor:pointer;border-radius:5px;display:flex;align-items:center;justify-content:center" title="Delete section">
          <img src="assets/Bin.svg" alt="Delete" style="width:18px;height:18px;filter:brightness(0) invert(1)">
        </button>
      </div>
      <div class="me-sec-body" id="me-sec-body-${si}">
        ${(sec.skills||[]).map((sk, ki) => `
          <div class="me-sk-item">
            <div class="me-sk-info">
              <div class="me-sk-name">${sk.name}</div>
              <div class="me-sk-desc">${sk.desc||''}</div>
            </div>
            <span class="cov-t ${sk.cov==='All'?'ct-all':sk.cov&&sk.cov.includes('2')?'ct-2':'ct-sp'}" style="flex-shrink:0">${sk.cov==='All'?'All':sk.cov&&sk.cov.includes('2')?'2+':'Spec'}</span>
            <div class="fx" style="gap:4px;flex-shrink:0">
              ${ki > 0 ? `<button class="icon-btn" style="width:28px;height:28px" onclick="moveSkill(${si},${ki},-1)" title="Move up">↑</button>` : `<div style="width:28px"></div>`}
              ${ki < (sec.skills||[]).length-1 ? `<button class="icon-btn" style="width:28px;height:28px" onclick="moveSkill(${si},${ki},1)" title="Move down">↓</button>` : `<div style="width:28px"></div>`}
              <button class="icon-btn" style="width:28px;height:28px" onclick="editSkill(${si},${ki})" title="Edit">
                <img src="assets/Pencil.svg" alt="Edit" style="width:18px;height:18px">
              </button>
              <button class="icon-btn icon-btn-danger" style="width:28px;height:28px" onclick="delSkill(${si},${ki})" title="Delete">
                <img src="assets/Bin.svg" alt="Delete" style="width:18px;height:18px" class="icon-red">
              </button>
            </div>
          </div>`).join('')}
        <div class="add-sk-form">
          <div class="fb" style="margin-bottom:8px">
            <div style="font-size:.76rem;font-weight:700;color:var(--tx2)">Add Skill</div>
            <button class="btn-link" style="font-size:.72rem" onclick="openCreateSkillModal(${si})">+ Create new skill</button>
          </div>
          <div class="sk-ac-wrap">
            <input class="fi" id="as-n-${si}" placeholder="Search available skills..." autocomplete="off"
              style="font-size:.8rem;padding:7px 10px"
              onfocus="showAvailableSkills(${si})"
              oninput="showAvailableSkills(${si})"
              onblur="setTimeout(()=>closeSkillDropdown(${si}),200)">
            <div class="sk-ac-drop" id="as-drop-${si}" style="display:none"></div>
          </div>
        </div>
      </div>
    </div>`;
  }).join('');
}

// P1: F18 — Move skill up/down
function moveSkill(si, ki, dir) {
  const skills = _matrixDraft[si].skills;
  const newIdx = ki + dir;
  if (newIdx < 0 || newIdx >= skills.length) return;
  const [moved] = skills.splice(ki, 1);
  skills.splice(newIdx, 0, moved);
  refreshME();
}

function toggleMatrixSection(si) {
  const body = document.getElementById('me-sec-body-' + si);
  const arrow = document.getElementById('me-arrow-' + si);
  if (!body) return;
  const hidden = body.style.display === 'none';
  body.style.display = hidden ? '' : 'none';
  if (arrow) arrow.textContent = hidden ? '▾' : '▸';
}

// P1: F16 — Edit existing skill
function editSkill(si, ki) {
  const sk = _matrixDraft[si].skills[ki];
  const originalName = sk.name;
  const originalDesc = sk.desc || '';
  document.getElementById('m-title').textContent = 'Edit Skill in Matrix';
  document.getElementById('m-body').innerHTML = `
    <p style="font-size:.76rem;color:var(--tx3);margin-bottom:12px">Changes apply only to this role's matrix. The global skills library is not affected.</p>
    <div class="fg"><label>Skill Name</label><input class="fi" id="esk-name" value="${sk.name}"></div>
    <div class="fg"><label>Description</label><textarea class="fi" rows="2" id="esk-desc" style="resize:vertical">${sk.desc||''}</textarea></div>
    <div class="fg"><label>Coverage Target</label>
      <select class="fi" id="esk-cov">
        <option value="All" ${sk.cov==='All'?'selected':''}>All team</option>
        <option value="2+ people" ${sk.cov==='2+ people'?'selected':''}>2+ people</option>
        <option value="Specialist" ${sk.cov==='Specialist'?'selected':''}>Specialist</option>
      </select>
    </div>`;
  _ms = () => {
    const name = document.getElementById('esk-name').value.trim();
    const desc = document.getElementById('esk-desc').value.trim();
    const cov = document.getElementById('esk-cov').value;
    if (!name) { toast('Name required'); return; }
    // Update in matrix
    _matrixDraft[si].skills[ki].name = name;
    _matrixDraft[si].skills[ki].desc = desc;
    _matrixDraft[si].skills[ki].cov = cov;
    closeModal();
    refreshME();
    // If name or description changed, ask if they want to add to global pool
    if (name !== originalName || desc !== originalDesc) {
      setTimeout(() => {
        showConfirmDialog(
          'Add to Skills Library?',
          `You changed this skill. Do you want to also add "<strong>${name}</strong>" as a new entry in the global Skills & Competencies library?`,
          'Yes, add to library',
          'No, only this matrix',
          () => {
            api('POST', '/api/skills', { name, desc, category: 'Custom' })
              .then(() => toast(`✅ "${name}" added to the skills library`))
              .catch(e => toast('⚠ ' + e.message));
          },
          () => {
            toast('✅ Skill updated in this matrix only');
          }
        );
      }, 200);
    } else {
      toast('✅ Skill updated (save matrix to persist)');
    }
  };
  openModal();
}

function addSection() {
  document.getElementById('m-title').textContent = 'New Section';
  document.getElementById('m-body').innerHTML = `
    <div class="fg"><label>Section Name <span style="color:var(--r1)">*</span></label>
      <input class="fi" id="new-sec-name" placeholder="e.g. Technical Skills"></div>`;
  _ms = () => {
    const n = document.getElementById('new-sec-name').value.trim();
    if (!n) { toast('Section name is required'); return; }
    _matrixDraft.push({id:`sec-${Date.now()}`,name:n,color:['tech','biz','beh','ai','custom'][_matrixDraft.length%5],skills:[]});
    closeModal();
    refreshME();
  };
  openModal();
}

function renSec(si) {
  document.getElementById('m-title').textContent = 'Rename Section';
  document.getElementById('m-body').innerHTML = `
    <div class="fg"><label>Section Name</label>
      <input class="fi" id="ren-sec-name" value="${_matrixDraft[si].name}"></div>`;
  _ms = () => {
    const n = document.getElementById('ren-sec-name').value.trim();
    if (!n) { toast('Section name is required'); return; }
    _matrixDraft[si].name = n;
    closeModal();
    refreshME();
  };
  openModal();
}
function delSec(si) {
  showConfirmDialog('Delete Section', `Are you sure you want to delete this section? All skills in it will be removed from the matrix.`, 'Delete', 'Cancel',
    () => { _matrixDraft.splice(si,1); refreshME(); toast('Section deleted'); },
    null
  );
}
function addSkill(si) {
  const name = document.getElementById(`as-n-${si}`).value.trim();
  if (!name) { toast('Name required'); return; }
  _matrixDraft[si].skills.push({
    id: `sk-${Date.now()}`,
    name,
    desc: document.getElementById(`as-d-${si}`).value.trim(),
    cov:  document.getElementById(`as-c-${si}`).value
  });
  document.getElementById(`as-n-${si}`).value = '';
  document.getElementById(`as-d-${si}`).value = '';
  document.getElementById(`as-c-${si}`).value = 'All';
  closeSkillDropdown(si);
  refreshME();
}
function delSkill(si,ki) { _matrixDraft[si].skills.splice(ki,1); refreshME(); }

// ─── SKILL AUTOCOMPLETE ────────────────────────────────────────────────────────
let _skillAcTimer = null;

function onSkillInput(si) {
  clearTimeout(_skillAcTimer);
  _skillAcTimer = setTimeout(() => showAvailableSkills(si), 180);
}

async function showAvailableSkills(si) {
  const q = (document.getElementById(`as-n-${si}`)?.value || '').trim().toLowerCase();
  const drop = document.getElementById(`as-drop-${si}`);
  if (!drop) return;
  
  try {
    const allSkills = await api('GET', '/api/skills');
    // Get skills already in this role's matrix
    const usedNames = new Set();
    (_matrixDraft || []).forEach(sec => {
      (sec.skills || []).forEach(sk => usedNames.add(sk.name.toLowerCase()));
    });
    // Filter: not already used, and matching search query
    let available = allSkills.filter(s => !usedNames.has(s.name.toLowerCase()));
    if (q) {
      available = available.filter(s => s.name.toLowerCase().includes(q) || (s.desc||'').toLowerCase().includes(q));
    }
    
    if (!available.length) {
      drop.innerHTML = `<div style="padding:12px;font-size:.78rem;color:var(--tx3);text-align:center">No available skills found</div>`;
      drop.style.display = 'block';
      return;
    }
    
    let html = '';
    available.slice(0, 20).forEach(s => {
      const nameHtml = q ? highlight(s.name, q) : s.name;
      html += `<div class="sk-ac-item" onmousedown="pickAvailableSkill(${si},'${s.name.replace(/'/g,"\\'")}')">
        <div class="sk-ac-name">${nameHtml}</div>
        ${s.desc ? `<div class="sk-ac-desc" style="font-size:.72rem;color:var(--tx3);margin-top:1px">${s.desc}</div>` : ''}
      </div>`;
    });
    if (available.length > 20) {
      html += `<div style="padding:8px 12px;font-size:.72rem;color:var(--tx3);text-align:center">Type to filter more results...</div>`;
    }
    drop.innerHTML = html;
    drop.style.display = 'block';
  } catch(e) { drop.style.display = 'none'; }
}

function highlight(text, q) {
  if (!q) return text;
  const idx = text.toLowerCase().indexOf(q.toLowerCase());
  if (idx === -1) return text;
  return text.slice(0, idx) + `<strong>${text.slice(idx, idx + q.length)}</strong>` + text.slice(idx + q.length);
}

function pickAvailableSkill(si, skillName) {
  // Find the skill in the library
  api('GET', '/api/skills').then(allSkills => {
    const skill = allSkills.find(s => s.name === skillName);
    if (!skill) return;
    if (!_matrixDraft[si].skills) _matrixDraft[si].skills = [];
    _matrixDraft[si].skills.push({ id: skill.name.toLowerCase().replace(/[^a-z0-9]/g,'-'), name: skill.name, desc: skill.desc || '', cov: 'All' });
    refreshME();
    toast(`Added "${skill.name}"`);
  });
}

function openCreateSkillModal(si) {
  document.getElementById('m-title').textContent = 'Create New Skill';
  document.getElementById('m-body').innerHTML = `
    <p style="font-size:.76rem;color:var(--tx3);margin-bottom:12px">This skill will be added to the global Skills & Competencies library under "Custom" and to this matrix section.</p>
    <div class="fg"><label>Skill Name <span style="color:var(--r1)">*</span></label>
      <input class="fi" id="csk-name" placeholder="e.g. GraphQL Development"></div>
    <div class="fg"><label>Description</label>
      <input class="fi" id="csk-desc" placeholder="Brief description of the skill"></div>
    <div class="fg"><label>Coverage</label>
      <select class="fi" id="csk-cov">
        <option value="All">All team</option>
        <option value="2+ people">2+ people</option>
        <option value="Specialist">Specialist</option>
      </select></div>`;
  _ms = async function() {
    const name = document.getElementById('csk-name').value.trim();
    const desc = document.getElementById('csk-desc').value.trim();
    const cov = document.getElementById('csk-cov').value;
    if (!name) return toast('Skill name is required');
    try {
      // Add to global skills library under Custom category
      await api('POST', '/api/skills', { name, desc, category: 'Custom' });
      // Add to current section in matrix
      if (!_matrixDraft[si].skills) _matrixDraft[si].skills = [];
      _matrixDraft[si].skills.push({ id: name.toLowerCase().replace(/[^a-z0-9]/g,'-'), name, desc, cov });
      closeModal();
      refreshME();
      toast(`✅ "${name}" created and added!`);
    } catch(e) { toast('⚠ ' + e.message); }
  };
  openModal();
}

function pickSkillSuggestion(si, idx) {
  const drop = document.getElementById(`as-drop-${si}`);
  const skill = drop._results?.[idx];
  if (!skill) return;
  pickAvailableSkill(si, skill.name);
}

function closeSkillDropdown(si) {
  const drop = document.getElementById(`as-drop-${si}`);
  if (drop) drop.style.display = 'none';
}
async function saveMatrix() { await api('PUT',`/api/teams/${S.teamId}/roles/${_editingRoleId}`,{sections:_matrixDraft}); const idx=_cfgTeam.roles.findIndex(r=>r.id===_editingRoleId); if(idx>=0)_cfgTeam.roles[idx].sections=_matrixDraft; toast('✅ Matrix saved!'); }

function openLoadTemplateModal() {
  const keys = Object.keys(TEMPLATES);
  document.getElementById('m-title').textContent = 'Load Template';
  document.getElementById('m-body').innerHTML = `
    <p style="font-size:.82rem;color:var(--tx2);margin-bottom:14px">Load a pre-built skill matrix template for a specific role.</p>
    <div class="fg"><label>Template</label>
      <select class="fi" id="load-tpl-key">
        <option value="">— select template —</option>
        ${keys.map(k => `<option value="${k}">${k} (${TEMPLATES[k].sections.flatMap(s=>s.skills).length} skills)</option>`).join('')}
      </select>
    </div>
    <div class="fg"><label>Mode</label>
      <select class="fi" id="load-tpl-mode">
        <option value="add">Add to existing sections</option>
        <option value="replace">Replace entire matrix</option>
      </select>
    </div>`;
  _ms = async () => {
    const key = document.getElementById('load-tpl-key').value;
    const mode = document.getElementById('load-tpl-mode').value;
    if (!key) { toast('Select a template'); return; }
    const tpl = JSON.parse(JSON.stringify(TEMPLATES[key].sections));
    if (mode === 'replace') {
      _matrixDraft = tpl;
    } else {
      tpl.forEach(ts => {
        const ex = _matrixDraft.find(s => s.name === ts.name && s.color === ts.color);
        if (ex) {
          const ids = new Set(ex.skills.map(s => s.id));
          ts.skills.forEach(sk => { if (!ids.has(sk.id)) ex.skills.push(sk); });
        } else {
          _matrixDraft.push(ts);
        }
      });
    }
    // Update role description if empty
    const roleIdx = _cfgTeam.roles.findIndex(r => r.id === _editingRoleId);
    if (roleIdx >= 0 && !_cfgTeam.roles[roleIdx].desc && TEMPLATES[key].desc) {
      _cfgTeam.roles[roleIdx].desc = TEMPLATES[key].desc;
    }
    closeModal();
    refreshME();
    // Auto-save
    await api('PUT', `/api/teams/${S.teamId}/roles/${_editingRoleId}`, { sections: _matrixDraft, desc: TEMPLATES[key].desc || undefined });
    const idx2 = _cfgTeam.roles.findIndex(r => r.id === _editingRoleId);
    if (idx2 >= 0) _cfgTeam.roles[idx2].sections = _matrixDraft;
    toast('✅ Template loaded and saved!');
  };
  openModal();
}

function exportMatrixCSV() {
  if (!_matrixDraft || !_matrixDraft.length) { toast('No matrix data to export'); return; }
  const role = (_cfgTeam.roles||[]).find(r => r.id === _editingRoleId);
  const roleName = role ? role.name : 'role';
  let csv = 'Section,Skill Name,Description,Coverage\n';
  _matrixDraft.forEach(sec => {
    const secName = sec.name.replace(/[\u{1F300}-\u{1FAD6}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}\u{1F900}-\u{1F9FF}]/gu, '').trim();
    (sec.skills || []).forEach(sk => {
      const name = sk.name.replace(/"/g, '""');
      const desc = (sk.desc || '').replace(/"/g, '""');
      csv += `"${secName}","${name}","${desc}","${sk.cov || 'All'}"\n`;
    });
  });
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${roleName.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}-matrix.csv`;
  a.click();
  URL.revokeObjectURL(url);
  toast('📤 CSV exported!');
}

function openImportTplModal() {
  document.getElementById('m-title').textContent='Import from File';
  document.getElementById('m-body').innerHTML=`
    <p style="font-size:.82rem;color:var(--tx2);margin-bottom:14px">Import skills from a CSV or Excel file into this role's matrix. This only affects this specific role — the global skills library is not updated.</p>
    <div class="fg"><label>File (CSV or Excel)</label>
      <input type="file" class="fi" id="imp-file" accept=".csv,.xlsx,.xls" style="padding:8px">
    </div>
    <div class="fg"><label>Mode</label>
      <select class="fi" id="imp-mode">
        <option value="add">Add to existing sections</option>
        <option value="replace">Replace entire matrix</option>
      </select>
    </div>
    <div style="background:var(--bg);border-radius:6px;padding:12px;margin-top:8px">
      <div style="font-size:.72rem;font-weight:700;color:var(--tx2);margin-bottom:6px">Expected CSV format:</div>
      <code style="font-size:.7rem;color:var(--tx3);display:block;line-height:1.6">Section,Skill Name,Description,Coverage<br>Technical,Python,Write clean Python...,All<br>Business,Domain Knowledge,Core domain...,All</code>
    </div>`;
  _ms = () => {
    const file = document.getElementById('imp-file').files[0];
    const mode = document.getElementById('imp-mode').value;
    if (!file) { toast('Please select a file'); return; }
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target.result;
        const lines = text.split(/\r?\n/).filter(l => l.trim());
        if (lines.length < 2) { toast('File is empty or has no data rows'); return; }
        // Parse header
        const header = lines[0].split(',').map(h => h.trim().toLowerCase());
        const secIdx = header.indexOf('section');
        const nameIdx = header.indexOf('skill name') >= 0 ? header.indexOf('skill name') : header.indexOf('name');
        const descIdx = header.indexOf('description') >= 0 ? header.indexOf('description') : header.indexOf('desc');
        const covIdx = header.indexOf('coverage') >= 0 ? header.indexOf('coverage') : header.indexOf('cov');
        if (nameIdx < 0) { toast('CSV must have a "Skill Name" or "Name" column'); return; }
        // Parse rows into sections
        const sections = {};
        const secColors = ['tech','biz','beh','ai','custom'];
        let colorIdx = 0;
        for (let i = 1; i < lines.length; i++) {
          const cols = lines[i].split(',').map(c => c.trim().replace(/^"|"$/g, ''));
          const secName = secIdx >= 0 ? (cols[secIdx] || 'Imported') : 'Imported';
          const skillName = cols[nameIdx];
          if (!skillName) continue;
          if (!sections[secName]) {
            sections[secName] = { id: 'sec-' + Date.now() + '-' + colorIdx, name: secName, color: secColors[colorIdx % 5], skills: [] };
            colorIdx++;
          }
          sections[secName].skills.push({
            id: skillName.toLowerCase().replace(/[^a-z0-9]/g, '-'),
            name: skillName,
            desc: descIdx >= 0 ? (cols[descIdx] || '') : '',
            cov: covIdx >= 0 ? (cols[covIdx] || 'All') : 'All'
          });
        }
        const imported = Object.values(sections);
        if (!imported.length) { toast('No valid skills found in file'); return; }
        if (mode === 'replace') {
          _matrixDraft = imported;
        } else {
          imported.forEach(ts => {
            const ex = _matrixDraft.find(s => s.name.toLowerCase() === ts.name.toLowerCase());
            if (ex) {
              const existingNames = new Set(ex.skills.map(s => s.name.toLowerCase()));
              ts.skills.forEach(sk => { if (!existingNames.has(sk.name.toLowerCase())) ex.skills.push(sk); });
            } else {
              _matrixDraft.push(ts);
            }
          });
        }
        closeModal();
        refreshME();
        const totalSkills = imported.reduce((sum, s) => sum + s.skills.length, 0);
        toast(`✅ Imported ${totalSkills} skills in ${imported.length} sections`);
      } catch(err) { toast('⚠ Error parsing file: ' + err.message); }
    };
    reader.readAsText(file);
  };
  openModal();
}

function openNewRoleModal() {
  document.getElementById('m-title').textContent='Create New Role';
  document.getElementById('m-body').innerHTML=`
    <div class="fg"><label>Role Name</label><input class="fi" id="nr-name" placeholder="e.g. Business Analyst"></div>
    <div class="fg"><label>Description</label><input class="fi" id="nr-desc" placeholder="Brief description"></div>
    <div class="fg"><label>Start from Template</label><select class="fi" id="nr-tpl"><option value="">— blank —</option>${Object.keys(TEMPLATES).map(k=>`<option value="${k}">${k}</option>`).join('')}</select></div>`;
  _ms=async()=>{const name=document.getElementById('nr-name').value.trim();if(!name){toast('Name required');return;}const tplKey=document.getElementById('nr-tpl').value,tpl=tplKey?TEMPLATES[tplKey]:null;const role=await api('POST',`/api/teams/${S.teamId}/roles`,{name,desc:document.getElementById('nr-desc').value.trim()||tpl?.desc||'',sections:tpl?JSON.parse(JSON.stringify(tpl.sections)):[]});if(!_cfgTeam.roles)_cfgTeam.roles=[];_cfgTeam.roles.push(role);closeModal();_editingRoleId=role.id;renderCfgRoles();toast(`✅ Role "${name}" created!`);};
  openModal();
}
async function deleteRole(id) {
  showConfirmDialog('Delete Role', 'Are you sure you want to delete this role and its skill matrix? This cannot be undone.', 'Delete', 'Cancel',
    async () => {
      await api('DELETE',`/api/teams/${S.teamId}/roles/${id}`);
      _cfgTeam.roles=(_cfgTeam.roles||[]).filter(r=>r.id!==id);
      if(_editingRoleId===id){_editingRoleId=null;document.getElementById('matrix-editor-wrap').style.display='none';}
      renderCfgRoles();
      toast('Role deleted');
    }, null
  );
}

// ─── ROLE CARD DRAG & DROP ────────────────────────────────────────────────────
let _dragRoleIdx = null;

function roleCardDragStart(e) {
  _dragRoleIdx = parseInt(e.currentTarget.dataset.roleIdx);
  e.currentTarget.classList.add('rci-dragging');
  e.dataTransfer.effectAllowed = 'move';
}

function roleCardDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  const card = e.currentTarget;
  card.classList.add('rci-dragover');
}

function roleCardDrop(e) {
  e.preventDefault();
  const toIdx = parseInt(e.currentTarget.dataset.roleIdx);
  e.currentTarget.classList.remove('rci-dragover');
  if (_dragRoleIdx === null || _dragRoleIdx === toIdx) return;
  // Reorder roles array
  const roles = _cfgTeam.roles || [];
  const [moved] = roles.splice(_dragRoleIdx, 1);
  roles.splice(toIdx, 0, moved);
  _cfgTeam.roles = roles;
  // Save to server
  api('PUT', `/api/teams/${S.teamId}/config`, { roles }).then(() => {
    renderCfgRoles();
    toast('Role order updated');
  }).catch(() => toast('⚠ Failed to save order'));
}

function roleCardDragEnd(e) {
  _dragRoleIdx = null;
  document.querySelectorAll('.rci-dragging').forEach(el => el.classList.remove('rci-dragging'));
  document.querySelectorAll('.rci-dragover').forEach(el => el.classList.remove('rci-dragover'));
}

// ─── MEMBERS CONFIG ───────────────────────────────────────────────────────────────
let _memberSort = { col: 'name', dir: 'asc' };

async function renderCfgMembers() {
  const isEM = S.role === 'em';
  const allProfiles = S._allProfiles || [];
  const emTeams = allProfiles.filter(p => p.role === 'em');
  const showTeamCol = isEM && emTeams.length > 1;

  let allMembers = [];
  let allRoles = _cfgTeam.roles || [];

  if (showTeamCol) {
    for (const p of emTeams) {
      try {
        const config = await api('GET', `/api/teams/${p.teamId}/config`);
        const members = (config.members||[]).map(m => typeof m==='string'?{name:m,roleId:null}:m);
        const roles = config.roles || [];
        members.forEach(m => {
          const role = roles.find(r => r.id === m.roleId);
          allMembers.push({ ...m, teamName: p.teamName, teamId: p.teamId, roleName: role?.name || '—' });
        });
      } catch(e) {}
    }
  } else {
    const members = (_cfgTeam.members||[]).map(m=>typeof m==='string'?{name:m,roleId:null}:m);
    members.forEach(m => {
      const role = allRoles.find(r => r.id === m.roleId);
      allMembers.push({ ...m, teamName: S.teamName, teamId: S.teamId, roleName: role?.name || '—' });
    });
  }

  // Sort
  const col = _memberSort.col;
  const dir = _memberSort.dir === 'asc' ? 1 : -1;
  allMembers.sort((a, b) => {
    const va = (col === 'name' ? a.name : col === 'team' ? a.teamName : a.roleName).toLowerCase();
    const vb = (col === 'name' ? b.name : col === 'team' ? b.teamName : b.roleName).toLowerCase();
    return va < vb ? -dir : va > vb ? dir : 0;
  });

  const sortIcon = (c) => {
    if (_memberSort.col === c) return _memberSort.dir === 'asc' ? ' <span style="font-size:.6rem;opacity:1">▲</span>' : ' <span style="font-size:.6rem;opacity:1">▼</span>';
    return ' <span style="font-size:.6rem;opacity:.4">⇅</span>';
  };
  const roles = _cfgTeam.roles || [];

  document.getElementById('cfg-members').innerHTML=`<div class="card">
    <div class="fb mb12"><div><h2>Team Members</h2><p class="sub">Manage members and assign roles.</p></div>
      <button class="btn btn-p btn-sm" onclick="openAddMemberModal()">+ Add Member</button></div>
    ${!allMembers.length?'<div class="empty">No members yet.</div>':`
    <table class="atbl"><thead><tr>
      ${showTeamCol?`<th style="cursor:pointer" onclick="sortMembers('team')">Team${sortIcon('team')}</th>`:''}
      <th style="cursor:pointer" onclick="sortMembers('name')">Name${sortIcon('name')}</th>
      <th style="cursor:pointer" onclick="sortMembers('role')">Role${sortIcon('role')}</th>
      <th>Actions</th>
    </tr></thead><tbody>
      ${allMembers.map(m=>`<tr>${showTeamCol?`<td style="font-size:.78rem;color:var(--tx2)">${m.teamName}</td>`:''}
        <td style="font-weight:700">${m.name}</td><td>
        ${showTeamCol ? `<span style="font-size:.78rem">${m.roleName}</span>` : `<select class="fi" style="padding:5px 8px;font-size:.78rem" onchange="assignRole('${m.name}',this.value)">
          <option value="">— no role —</option>${roles.map(r=>`<option value="${r.id}" ${m.roleId===r.id?'selected':''}>${r.name}</option>`).join('')}
        </select>`}</td><td>
        <button class="icon-btn icon-btn-danger" style="width:28px;height:28px" onclick="removeMember('${m.name}')" title="Remove member">
          <img src="assets/Bin.svg" alt="Remove" style="width:18px;height:18px" class="icon-red">
        </button>
        </td></tr>`).join('')}
    </tbody></table>`}</div>`;
}

function sortMembers(col) {
  if (_memberSort.col === col) {
    _memberSort.dir = _memberSort.dir === 'asc' ? 'desc' : 'asc';
  } else {
    _memberSort.col = col;
    _memberSort.dir = 'asc';
  }
  renderCfgMembers();
}
function openAddMemberModal() {
  const roles=_cfgTeam.roles||[];
  const existingNames = (_cfgTeam.members||[]).map(m => (m.name||m).toLowerCase());
  const isEM = S.role === 'em';
  const allProfiles = S._allProfiles || [];
  const emTeams = allProfiles.filter(p => p.role === 'em');
  const showTeamField = isEM && emTeams.length > 1;

  document.getElementById('m-title').textContent='Add Team Member';
  let teamFieldHtml = '';
  if (showTeamField) {
    teamFieldHtml = `<div class="fg"><label>Team <span style="color:var(--r1)">*</span></label>
      <select class="fi" id="am-team" onchange="updateAddMemberRoles()">
        ${emTeams.map(p => `<option value="${p.teamId}" ${p.teamId===S.teamId?'selected':''}>${p.teamName}</option>`).join('')}
      </select></div>`;
  }
  document.getElementById('m-body').innerHTML=`${teamFieldHtml}
    <div class="fg"><label>Full Name</label><input class="fi" id="am-name" placeholder="e.g. Ana Silva" oninput="checkDuplicateMember()"></div>
    <div id="am-dup-warn" style="display:none;margin-bottom:12px;padding:8px 12px;background:#fff8e1;border:1px solid #fdd767;border-radius:6px;font-size:.78rem;color:#874d00">⚠ This person already exists in the team. A new entry will be created with a different role.</div>
    <div class="fg"><label>Role</label><select class="fi" id="am-role"><option value="">— assign later —</option>${roles.map(r=>`<option value="${r.id}">${r.name}</option>`).join('')}</select></div>`;
  window._amExistingNames = existingNames;
  _ms=async()=>{
    const teamId = showTeamField ? document.getElementById('am-team').value : S.teamId;
    const name=document.getElementById('am-name').value.trim();
    const roleId=document.getElementById('am-role').value||null;
    if(!name){toast('Name required');return;}
    // Check if same person already has this exact role
    const existing = (_cfgTeam.members||[]).find(m => 
      (m.name||m).toLowerCase() === name.toLowerCase() && m.roleId === roleId
    );
    if(existing){toast('⚠ This person already has this role assigned. Choose a different role.');return;}
    await api('POST',`/api/teams/${teamId}/members`,{name,roleId});
    _cfgTeam = await api('GET', `/api/teams/${teamId}/config`);
    closeModal();renderCfgMembers();toast(`✅ ${name} added!`);
  };  openModal();
}

async function updateAddMemberRoles() {
  const teamId = document.getElementById('am-team')?.value;
  if (!teamId) return;
  try {
    const config = await api('GET', `/api/teams/${teamId}/config`);
    _cfgTeam = config;
    const roles = config.roles || [];
    const roleSelect = document.getElementById('am-role');
    if (roleSelect) {
      roleSelect.innerHTML = `<option value="">— assign later —</option>` +
        roles.map(r => `<option value="${r.id}">${r.name}</option>`).join('');
    }
    window._amExistingNames = (config.members||[]).map(m => (m.name||m).toLowerCase());
  } catch(e) {}
}

function checkDuplicateMember() {
  const name = (document.getElementById('am-name').value || '').trim().toLowerCase();
  const warn = document.getElementById('am-dup-warn');
  if (warn) {
    warn.style.display = (name && window._amExistingNames.includes(name)) ? '' : 'none';
  }
}
async function assignRole(n,rid) {
  await api('PUT',`/api/teams/${S.teamId}/members/${encodeURIComponent(n)}/role`,{roleId:rid||null});
  const m=(_cfgTeam.members||[]).find(x=>(x.name||x)===n);
  if(m) m.roleId=rid||null;
  // If changing own role, update matrix immediately
  if (n.toLowerCase() === (S.userName||'').toLowerCase()) {
    S.roleId = rid || null;
    const role = (_cfgTeam.roles||[]).find(r => r.id === rid);
    if (role) {
      S.roleName = role.name;
      S.matrix = role.sections || [];
    } else {
      S.roleName = null;
      S.matrix = [];
    }
  }
  toast('Role assigned');
}
async function removeMember(n) {
  showConfirmDialog('Remove Member', `Are you sure you want to remove <strong>${n}</strong> from the team?`, 'Remove', 'Cancel',
    async () => {
      await api('DELETE',`/api/teams/${S.teamId}/members/${encodeURIComponent(n)}`);
      _cfgTeam.members=(_cfgTeam.members||[]).filter(m=>(m.name||m)!==n);
      renderCfgMembers();
      toast('Member removed');
    }, null
  );
}

// ─── LEADS CONFIG (P2: F24 — Multiple leads) ─────────────────────────────────────
async function renderCfgLeads() {
  const el = document.getElementById('cfg-leads');
  if (!el) return;
  let leads = [];
  try { leads = await api('GET', `/api/teams/${S.teamId}/leads`); } catch(e) { leads = [{name: _cfgTeam.leadName, role: 'Primary Lead'}]; }
  el.innerHTML = `<div class="card">
    <div class="fb mb12"><div><h2>Team Leads</h2><p class="sub">Multiple people can have team lead access (view assessments, calibrate, manage).</p></div>
      <button class="btn btn-p btn-sm" onclick="openAddLeadModal()">+ Add Lead</button></div>
    <table class="atbl"><thead><tr><th>Name</th><th>Role</th><th>Actions</th></tr></thead><tbody>
      ${leads.map((l,i) => `<tr>
        <td style="font-weight:700">${l.name} ${i===0?'<span class="tag-g">Primary</span>':''}</td>
        <td>${l.role||'—'}</td>
        <td>${i===0?'<span style="font-size:.72rem;color:#aaa">Cannot remove primary</span>':`<button class="btn btn-d btn-xs" onclick="removeLead('${l.name}')">Remove</button>`}</td>
      </tr>`).join('')}
    </tbody></table>
  </div>`;
}

function openAddLeadModal() {
  document.getElementById('m-title').textContent = 'Add Team Lead';
  document.getElementById('m-body').innerHTML = `
    <p style="font-size:.78rem;color:#888;margin-bottom:12px">This person will have full team lead access: view assessments, calibrate scores, manage action plans.</p>
    <div class="fg"><label>Name</label><input class="fi" id="al-name" placeholder="e.g. João Santos"></div>
    <div class="fg"><label>Role / Title</label>
      <select class="fi" id="al-role">
        <option value="Co-Lead">Co-Lead</option>
        <option value="Engineering Manager">Engineering Manager</option>
        <option value="Product Lead">Product Lead</option>
        <option value="Domain Lead">Domain Lead</option>
      </select></div>`;
  _ms = async () => {
    const name = document.getElementById('al-name').value.trim();
    if (!name) { toast('Name required'); return; }
    try {
      await api('POST', `/api/teams/${S.teamId}/leads`, { name, role: document.getElementById('al-role').value });
      closeModal();
      renderCfgLeads();
      toast(`✅ ${name} added as lead`);
    } catch(e) { toast('⚠ ' + e.message); }
  };
  openModal();
}

async function removeLead(name) {
  if (!confirm(`Remove ${name} as lead?`)) return;
  await api('DELETE', `/api/teams/${S.teamId}/leads/${encodeURIComponent(name)}`);
  renderCfgLeads();
  toast('Lead removed');
}


// ─── ADMIN (Team Configuration) ───────────────────────────────────────────────
async function renderAdmin() {
  const allTeams = await api('GET','/api/admin/teams');
  const tb = document.getElementById('adm-tbody');
  
  // Filter teams: only show teams the logged-in user belongs to
  let teams = allTeams;
  if (S.role !== 'admin') {
    const myProfiles = S._allProfiles || [];
    const myTeamIds = myProfiles.map(p => p.teamId);
    teams = allTeams.filter(t => myTeamIds.includes(t.id));
  }
  
  if(!teams.length){tb.innerHTML='<tr><td colspan="7" class="empty">No teams found for your profile.</td></tr>';return;}
  tb.innerHTML=teams.map(t=>`<tr>
    <td><span style="font-size:1.1rem">${t.icon||'👥'}</span> <strong>${t.name}</strong><div style="font-size:.7rem;color:#888">${t.description||''}</div></td>
    <td><code style="background:#eee;padding:2px 6px;border-radius:4px;font-size:.76rem">${t.code}</code></td>
    <td>${t.leadName||'—'}</td>
    <td>${t.productLead||'—'}</td>
    <td>${t.engineeringManager||'—'}</td>
    <td>${t.memberCount||0}</td>
    <td>
      <div class="fx" style="gap:4px">
        <button class="icon-btn" onclick="openTeamModal('${t.id}')" title="Edit">
          <img src="assets/Pencil.svg" alt="Edit" style="width:16px;height:16px">
        </button>
        <button class="icon-btn icon-btn-danger" onclick="delTeam('${t.id}','${t.name}')" title="Delete">
          <img src="assets/Bin.svg" alt="Delete" style="width:16px;height:16px">
        </button>
      </div>
    </td>
  </tr>`).join('');
}

function openTeamModal(teamId) {
  const isEdit = !!teamId;
  if (isEdit) {
    // Fetch team data for editing
    api('GET', `/api/teams/${teamId}/config`).then(team => {
      renderTeamForm(team, true);
    });
  } else {
    renderTeamForm(null, false);
  }
}

function renderTeamForm(team, isEdit) {
  document.getElementById('m-title').textContent = isEdit ? 'Edit Team' : 'Create New Team';
  document.getElementById('m-body').innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
      <div class="fg"><label>Team Name <span style="color:var(--r1)">*</span></label>
        <input class="fi" id="nt-name" value="${team?.name||''}" placeholder="e.g. SeaMasters" oninput="clearFieldErr('nt-name','nt-name-err')">
        <div class="field-err" id="nt-name-err">Team name is required</div></div>
      <div class="fg"><label>Team Code <span style="color:var(--r1)">*</span></label>
        <input class="fi" id="nt-code" value="${team?.code||''}" placeholder="e.g. seamasters" ${isEdit?'disabled':''} oninput="clearFieldErr('nt-code','nt-code-err')">
        <div class="field-err" id="nt-code-err">Team code is required</div></div>
    </div>
    <div class="fg"><label>Description</label>
      <input class="fi" id="nt-desc" value="${team?.description||''}" placeholder="Brief team description"></div>
    <hr style="border:none;border-top:1px solid #eee;margin:14px 0">
    <div style="font-size:.78rem;font-weight:700;color:var(--kn);margin-bottom:10px">👥 Team Leadership</div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px">
      <div class="fg"><label>Team Lead <span style="color:var(--r1)">*</span></label>
        <input class="fi" id="nt-lead" value="${team?.leadName||''}" placeholder="e.g. Gisela Neves" oninput="clearFieldErr('nt-lead','nt-lead-err')">
        <div class="field-err" id="nt-lead-err">Team lead name is required</div></div>
      <div class="fg"><label>Product Lead</label>
        <input class="fi" id="nt-pl" value="${team?.productLead||''}" placeholder="e.g. João Santos"></div>
      <div class="fg"><label>Engineering Manager</label>
        <input class="fi" id="nt-em" value="${team?.engineeringManager||''}" placeholder="e.g. Maria Silva"></div>
    </div>
    <p style="font-size:.7rem;color:#888;margin-top:4px">All three roles get team lead access (view assessments, calibrate, manage). EM also gets cross-team dashboard.</p>`;

  _ms = async () => {
    const name = document.getElementById('nt-name').value.trim();
    const code = isEdit ? team.code : document.getElementById('nt-code').value.trim();
    const leadName = document.getElementById('nt-lead').value.trim();
    const productLead = document.getElementById('nt-pl').value.trim();
    const engineeringManager = document.getElementById('nt-em').value.trim();

    // inline validation
    let valid = true;
    function setErr(id, errId, bad) {
      document.getElementById(id).classList.toggle('invalid', bad);
      document.getElementById(errId).style.display = bad ? 'block' : 'none';
      if (bad) valid = false;
    }
    setErr('nt-name', 'nt-name-err', !name);
    if (!isEdit) setErr('nt-code', 'nt-code-err', !code);
    setErr('nt-lead', 'nt-lead-err', !leadName);
    if (!valid) return;
    try {
      if (isEdit) {
        await api('PUT', `/api/admin/teams/${team.id}`, { name, leadName, productLead, engineeringManager, description: document.getElementById('nt-desc').value.trim() });
      } else {
        await api('POST', '/api/admin/teams', { name, code, leadName, productLead, engineeringManager, description: document.getElementById('nt-desc').value.trim() });
      }
      closeModal(); renderAdmin(); toast(`✅ Team "${name}" ${isEdit?'updated':'created'}!`);
    } catch(e) { toast('⚠ '+e.message); }
  };
  openModal();
}

async function delTeam(id, name) {
  showConfirmDialog('Delete Team', `Delete team "<strong>${name}</strong>"? This cannot be undone.`, 'Delete', 'Cancel',
    async () => {
      await api('DELETE', `/api/admin/teams/${id}`);
      renderAdmin();
      toast('Team deleted');
    }, null
  );
}

// ─── EM VIEW (P2: F25 — Engineering Manager cross-team dashboard) ─────────────
let _emTeams = [], _emFilter = null;

async function renderEMView() {
  const w = document.getElementById('em-teams');
  if (!w) return;
  try {
    _emTeams = await api('GET', `/api/em/teams/${encodeURIComponent(S.userName)}`);
    if (!_emTeams.length) {
      w.innerHTML = '<div class="empty">No teams assigned to you as Engineering Manager yet.</div>';
      return;
    }
    renderEMContent();
  } catch(e) { w.innerHTML = '<div class="empty">Error loading teams.</div>'; }
}

async function renderEMContent() {
  const teams = _emTeams;
  const filteredTeams = _emFilter ? teams.filter(t => t.id === _emFilter) : teams;

  // Team filter buttons
  const ff = document.getElementById('em-team-filters');
  if (ff) {
    ff.innerHTML = `<button class="btn btn-sm ${!_emFilter?'btn-p':'btn-g'}" onclick="_emFilter=null;renderEMContent()">All Teams</button>` +
      teams.map(t => `<button class="btn btn-sm ${_emFilter===t.id?'btn-p':'btn-g'}" onclick="_emFilter='${t.id}';renderEMContent()">${t.name}</button>`).join('');
  }

  // Summary
  const totalMembers = filteredTeams.reduce((s,t) => s + (t.memberCount||0), 0);
  const totalAssessed = filteredTeams.reduce((s,t) => s + (t.assessedCount||0), 0);
  const sumEl = document.getElementById('em-summary');
  if (sumEl) {
    sumEl.innerHTML = `
      <div class="sum-card"><div class="sv">${filteredTeams.length}</div><div class="sl">Teams</div></div>
      <div class="sum-card"><div class="sv">${totalMembers}</div><div class="sl">Total Members</div></div>
      <div class="sum-card"><div class="sv">${totalAssessed}</div><div class="sl">Assessed</div></div>
      <div class="sum-card"><div class="sv">${totalMembers ? Math.round(totalAssessed/totalMembers*100) : 0}%</div><div class="sl">Completion</div></div>`;
  }

  // Team cards
  const w = document.getElementById('em-teams');
  w.innerHTML = filteredTeams.map(t => {
    const pct = t.memberCount ? Math.round((t.assessedCount||0)/t.memberCount*100) : 0;
    return `<div class="mc" style="min-width:180px">
      <div class="mn">${t.name}</div>
      <div class="ml">Lead: ${t.leadName||'—'}${t.productLead?' · PL: '+t.productLead:''}</div>
      <div class="ma">${t.memberCount||0}</div>
      <div class="mp">members · ${t.assessedCount||0} assessed</div>
      <div class="fx mt8">
        <div class="pbar-w"><div class="pbar" style="width:${pct}%;background:${pct>=80?'var(--g1)':pct>=50?'var(--acc)':'var(--r1)'}"></div></div>
        <span style="font-size:.7rem;font-weight:700;color:var(--tx3)">${pct}%</span>
      </div>
    </div>`;
  }).join('');

  // Aggregated coverage table
  await renderEMCoverage(filteredTeams);
}

async function openEMAddMemberModal() {
  // Fetch roles for each team
  const teamRoles = {};
  for (const t of _emTeams) {
    const config = await api('GET', `/api/teams/${t.id}/config`);
    teamRoles[t.id] = config.roles || [];
  }
  document.getElementById('m-title').textContent = 'Add Member to Team';
  document.getElementById('m-body').innerHTML = `
    <div class="fg"><label>Team <span style="color:var(--r1)">*</span></label>
      <select class="fi" id="em-am-team" onchange="updateEMRoleOptions()">
        <option value="">— select team —</option>
        ${_emTeams.map(t => `<option value="${t.id}">${t.name}</option>`).join('')}
      </select></div>
    <div class="fg"><label>Full Name <span style="color:var(--r1)">*</span></label>
      <input class="fi" id="em-am-name" placeholder="e.g. Ana Silva"></div>
    <div class="fg"><label>Role</label>
      <select class="fi" id="em-am-role">
        <option value="">— assign later —</option>
      </select></div>`;
  window._emTeamRoles = teamRoles;
  _ms = async () => {
    const teamId = document.getElementById('em-am-team').value;
    const name = document.getElementById('em-am-name').value.trim();
    const roleId = document.getElementById('em-am-role').value || null;
    if (!teamId) { toast('Please select a team'); return; }
    if (!name) { toast('Name is required'); return; }
    try {
      await api('POST', `/api/teams/${teamId}/members`, { name, roleId });
      closeModal();
      toast(`✅ ${name} added!`);
      // Refresh EM view
      _emTeams = await api('GET', `/api/em/teams/${encodeURIComponent(S.userName)}`);
      renderEMContent();
    } catch(e) { toast('⚠ ' + e.message); }
  };
  openModal();
}

function updateEMRoleOptions() {
  const teamId = document.getElementById('em-am-team').value;
  const roleSelect = document.getElementById('em-am-role');
  const roles = (window._emTeamRoles && window._emTeamRoles[teamId]) || [];
  roleSelect.innerHTML = `<option value="">— assign later —</option>` +
    roles.map(r => `<option value="${r.id}">${r.name}</option>`).join('');
}

async function renderEMCoverage(teams) {
  const covEl = document.getElementById('em-coverage');
  if (!covEl) return;

  const stripEmoji = (str) => str.replace(/[\u{1F300}-\u{1FAD6}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}\u{1F900}-\u{1F9FF}]/gu, '').trim();

  // Gather all members and their assessments across teams
  const allMembers = [];
  const allAssessments = {};
  const allSections = [];
  const seenSections = new Set();

  for (const team of teams) {
    const config = await api('GET', `/api/teams/${team.id}/config`);
    const members = (config.members||[]).map(m => typeof m==='string'?{name:m}:m);
    const roles = config.roles || [];
    
    for (const m of members) {
      const memberKey = `${m.name} (${team.name})`;
      // Build set of skill IDs in this member's role matrix
      const memberSkillIds = new Set();
      const memberRole = roles.find(r => r.id === m.roleId);
      if (memberRole) {
        (memberRole.sections||[]).forEach(sec => (sec.skills||[]).forEach(sk => memberSkillIds.add(sk.id)));
      }
      allMembers.push({ name: m.name, team: team.name, key: memberKey, roleId: m.roleId, skillIds: memberSkillIds });
      try {
        const data = await api('GET', `/api/assessments/${team.id}/${encodeURIComponent(m.name)}`);
        allAssessments[memberKey] = data;
      } catch(e) { allAssessments[memberKey] = {}; }
    }

    // Collect sections from all roles
    for (const role of (config.roles||[])) {
      for (const sec of (role.sections||[])) {
        const cleanName = stripEmoji(sec.name);
        if (!seenSections.has(cleanName)) {
          seenSections.add(cleanName);
          allSections.push({ ...sec, name: cleanName });
        } else {
          // Merge skills into existing section
          const existing = allSections.find(s => s.name === cleanName);
          if (existing) {
            const existingIds = new Set((existing.skills||[]).map(sk => sk.id));
            (sec.skills||[]).forEach(sk => {
              if (!existingIds.has(sk.id)) { existing.skills.push(sk); existingIds.add(sk.id); }
            });
          }
        }
      }
    }
  }

  if (!allMembers.length || !allSections.length) {
    covEl.innerHTML = '<div class="empty" style="padding:20px">No assessment data available yet.</div>';
    return;
  }

  const secBgColors = { tech: '#edf7fc', biz: '#edf2fa', beh: '#f1f5f9', ai: '#e8f7fc', custom: '#f5f5f5' };

  let html = `<table class="cov-tbl"><thead><tr>
    <th class="sk-hdr" style="position:sticky;left:0;z-index:2;min-width:200px">Skill</th>
    <th style="min-width:50px">Cov.</th>
    <th style="min-width:50px">Avg</th>
    ${allMembers.map(m => `<th style="min-width:60px;font-size:.64rem;writing-mode:vertical-lr;transform:rotate(180deg);padding:8px 4px">${m.name}<br><span style="font-size:.56rem;opacity:.7">${m.team}</span></th>`).join('')}
  </tr></thead><tbody>`;

  allSections.forEach(sec => {
    const secBg = secBgColors[sec.color||'tech'] || '#f8fafc';
    html += `<tr><td colspan="${allMembers.length+3}" class="sec-row sec-row-${sec.color||'tech'}">${sec.name}</td></tr>`;
    (sec.skills||[]).forEach(sk => {
      const covCls = sk.cov==='All' ? 'ct-all' : sk.cov&&sk.cov.includes('2') ? 'ct-2' : 'ct-sp';
      const covLbl = sk.cov==='All' ? 'All' : sk.cov&&sk.cov.includes('2') ? '2+' : 'Spec';
      const memberScores = allMembers.map(m => ({ isInRole: m.skillIds.has(sk.id), score: allAssessments[m.key]?.scores?.[sk.id] || 0 }));
      const validScores = memberScores.filter(s => s.isInRole && s.score > 0);
      const avg = validScores.length ? (validScores.reduce((a,s) => a + s.score, 0) / validScores.length).toFixed(1) : '—';
      html += `<tr style="background:${secBg}">
        <td class="sk-cell" style="position:sticky;left:0;z-index:1;background:${secBg}">${sk.name}</td>
        <td style="text-align:center"><span class="cov-t ${covCls}" style="font-size:.62rem">${covLbl}</span></td>
        <td style="text-align:center;font-weight:700;font-size:.78rem;color:var(--kn)">${avg}</td>
        ${allMembers.map((m, i) => {
          if (!memberScores[i].isInRole) return `<td><span class="pill-na">N/A</span></td>`;
          const score = memberScores[i].score;
          return `<td><span class="pill p${score}">${score||'—'}</span></td>`;
        }).join('')}
      </tr>`;
    });
  });

  html += '</tbody></table>';
  covEl.innerHTML = html;
}

// ─── NEW SETUP & PROGRESS SCREENS ─────────────────────────────────────────────────
async function renderProgress() {
  const w = document.getElementById('progress-content');
  if (!w) return;
  const history = (S.data && S.data.history) || [];
  if (!history.length) {
    w.innerHTML = '<div class="empty">No checkpoints saved yet. Progress history will appear here after saving a checkpoint from your assessment.</div>';
    return;
  }

  // Current assessment
  const currentScoresArr = Object.values(S.data.scores||{}).filter(s=>s>0);
  const currentAvgVal = currentScoresArr.length ? (currentScoresArr.reduce((a,b)=>a+b,0)/currentScoresArr.length).toFixed(1) : '—';

  const matrix = S.matrix || [];
  const sectionNames = matrix.map(sec => sec.name.replace(/[\u{1F300}-\u{1FAD6}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}\u{1F900}-\u{1F9FF}]/gu, '').trim());

  w.innerHTML = `
    <div class="card">
      <h2>Progress Over Time</h2>
      <p class="sub">${history.length} checkpoint${history.length>1?'s':''} recorded</p>
      <div style="height:320px"><canvas id="progress-chart"></canvas></div>
      <div style="margin-top:12px;padding:10px 12px;background:var(--bg);border-radius:6px;font-size:.72rem;color:var(--tx3)">
        Click on a label in the legend to show/hide it from the chart.
      </div>
    </div>
    <div class="card">
      <h2>Drill-down by Section</h2>
      <p class="sub">Select a section to see individual skill progress.</p>
      <div class="fx mb12" style="flex-wrap:wrap;gap:6px">
        ${sectionNames.map((name, i) => `<button class="btn btn-sm btn-g" onclick="renderProgressDrilldown(${i})">${name}</button>`).join('')}
      </div>
      <div id="progress-drilldown" style="display:none">
        <div style="height:280px"><canvas id="progress-drill-chart"></canvas></div>
      </div>
    </div>
    <div class="card">
      <h2>Checkpoint Details</h2>
      <table class="atbl"><thead><tr><th>Date</th><th>Label</th><th>Level</th><th>Proficiency</th><th>Avg Score</th><th>Skills Rated</th></tr></thead>
      <tbody>
      <tr style="background:var(--acc-lt);font-weight:600">
        <td>${new Date().toLocaleDateString()}</td>
        <td>Current Assessment</td>
        <td>${S.data.level||'—'}</td>
        <td>${S.data.proficiency||'—'}</td>
        <td>${currentAvgVal}</td>
        <td>${currentScoresArr.length}</td>
      </tr>
      ${history.slice().reverse().map(h => {
        const scores = Object.values(h.scores||{}).filter(s=>s>0);
        const avg = scores.length ? (scores.reduce((a,b)=>a+b,0)/scores.length).toFixed(1) : '—';
        return `<tr>
          <td>${new Date(h.date).toLocaleDateString()}</td>
          <td><strong>${h.label}</strong></td>
          <td>${h.level||'—'}</td>
          <td>${h.proficiency||'—'}</td>
          <td><strong>${avg}</strong></td>
          <td>${scores.length}</td>
        </tr>`;
      }).join('')}</tbody></table>
    </div>`;

  // Build main chart: Overall avg + avg per section
  const labels = history.map(h => h.label || new Date(h.date).toLocaleDateString());
  labels.push('Current');

  const secColors = ['#0099da', '#003369', '#5d6980', '#62b5e8', '#95a2b8'];

  // Overall average dataset
  const overallData = history.map(h => {
    const scores = Object.values(h.scores||{}).filter(s=>s>0);
    return scores.length ? +(scores.reduce((a,b)=>a+b,0)/scores.length).toFixed(2) : 0;
  });
  overallData.push(currentScoresArr.length ? +(currentScoresArr.reduce((a,b)=>a+b,0)/currentScoresArr.length).toFixed(2) : 0);

  const datasets = [{
    label: 'Overall Average',
    data: overallData,
    borderColor: '#003369', backgroundColor: 'rgba(0,51,105,.08)',
    tension: 0.3, pointRadius: 5, fill: true, borderWidth: 3
  }];

  // Per-section average datasets
  matrix.forEach((sec, si) => {
    const skillIds = (sec.skills||[]).map(sk => sk.id);
    const secData = history.map(h => {
      const scores = skillIds.map(id => h.scores?.[id]||0).filter(s=>s>0);
      return scores.length ? +(scores.reduce((a,b)=>a+b,0)/scores.length).toFixed(2) : 0;
    });
    // Current
    const curScores = skillIds.map(id => S.data.scores?.[id]||0).filter(s=>s>0);
    secData.push(curScores.length ? +(curScores.reduce((a,b)=>a+b,0)/curScores.length).toFixed(2) : 0);
    datasets.push({
      label: sectionNames[si],
      data: secData,
      borderColor: secColors[si % secColors.length],
      backgroundColor: 'transparent',
      tension: 0.3, pointRadius: 4, fill: false, borderWidth: 2, borderDash: [4, 2]
    });
  });

  setTimeout(() => {
    const ctx = document.getElementById('progress-chart');
    if (!ctx) return;
    if (ctx._chartInst) ctx._chartInst.destroy();
    ctx._chartInst = new Chart(ctx, {
      type:'line', data:{labels, datasets},
      options:{
        responsive:true,
        maintainAspectRatio:false,
        plugins:{
          legend:{
            position:'bottom',
            labels:{ padding: 16, usePointStyle: true, pointStyle: 'rectRounded', font: { size: 11 } }
          }
        },
        scales:{y:{min:0,max:5,ticks:{stepSize:1}}}
      }
    });
  }, 50);
}

function renderProgressDrilldown(secIdx) {
  const matrix = S.matrix || [];
  const sec = matrix[secIdx];
  if (!sec) return;
  const history = (S.data && S.data.history) || [];
  const container = document.getElementById('progress-drilldown');
  container.style.display = '';

  const labels = history.map(h => h.label || new Date(h.date).toLocaleDateString());
  labels.push('Current');

  const datasets = (sec.skills||[]).map((sk, i) => {
    const hue = (i * 30) % 360;
    const data = history.map(h => h.scores?.[sk.id]||0);
    data.push(S.data.scores?.[sk.id]||0);
    return {
      label: sk.name,
      data,
      borderColor: `hsl(${hue},60%,45%)`,
      backgroundColor: 'transparent',
      tension: 0.3, pointRadius: 4, fill: false, borderWidth: 2
    };
  });

  setTimeout(() => {
    const ctx = document.getElementById('progress-drill-chart');
    if (!ctx) return;
    if (ctx._drillInst) ctx._drillInst.destroy();
    ctx._drillInst = new Chart(ctx, {
      type:'line', data:{labels, datasets},
      options:{
        responsive:true,
        maintainAspectRatio:false,
        plugins:{
          legend:{
            position:'bottom',
            labels:{ padding: 14, usePointStyle: true, pointStyle: 'rectRounded', font: { size: 11 } }
          }
        },
        scales:{y:{min:0,max:5,ticks:{stepSize:1}}}
      }
    });
  }, 50);
}

function exportProgressPDF() {
  const history = (S.data && S.data.history) || [];
  const matrix = S.matrix || [];
  const currentScores = Object.values(S.data.scores||{}).filter(s=>s>0);
  const currentAvg = currentScores.length ? (currentScores.reduce((a,b)=>a+b,0)/currentScores.length).toFixed(1) : '—';
  const stripEmoji = (str) => str.replace(/[\u{1F300}-\u{1FAD6}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}\u{1F900}-\u{1F9FF}]/gu, '').trim();

  // Build section averages
  const sectionAvgs = matrix.map(sec => {
    const skillIds = (sec.skills||[]).map(sk => sk.id);
    const scores = skillIds.map(id => S.data.scores?.[id]||0).filter(s=>s>0);
    return {
      name: stripEmoji(sec.name),
      avg: scores.length ? (scores.reduce((a,b)=>a+b,0)/scores.length).toFixed(1) : '—',
      count: scores.length,
      total: skillIds.length
    };
  });

  // Build skill details
  let skillRows = '';
  matrix.forEach(sec => {
    skillRows += `<tr style="background:#003369;color:#fff;font-weight:700"><td colspan="3" style="padding:6px 10px">${stripEmoji(sec.name)}</td></tr>`;
    (sec.skills||[]).forEach(sk => {
      const score = S.data.scores?.[sk.id] || 0;
      skillRows += `<tr><td style="padding:4px 10px;font-weight:600">${sk.name}</td><td style="padding:4px 10px;text-align:center">${score || '—'}</td><td style="padding:4px 10px">${score ? ['','Beginner','Developing','Competent','Proficient','Expert'][score] : '—'}</td></tr>`;
    });
  });

  // Checkpoint rows
  let cpRows = history.slice().reverse().map(h => {
    const scores = Object.values(h.scores||{}).filter(s=>s>0);
    const avg = scores.length ? (scores.reduce((a,b)=>a+b,0)/scores.length).toFixed(1) : '—';
    return `<tr><td style="padding:4px 10px">${new Date(h.date).toLocaleDateString()}</td><td style="padding:4px 10px">${h.label}</td><td style="padding:4px 10px;text-align:center">${avg}</td><td style="padding:4px 10px;text-align:center">${scores.length}</td></tr>`;
  }).join('');

  const html = `<!DOCTYPE html><html><head><meta charset="UTF-8">
    <title>Progress Report - ${S.userName}</title>
    <style>
      body{font-family:-apple-system,'Segoe UI',sans-serif;padding:40px;color:#232e43;font-size:12px;line-height:1.5}
      h1{color:#003369;font-size:18px;margin-bottom:4px}
      h2{color:#003369;font-size:14px;margin:20px 0 8px;border-bottom:2px solid #0099da;padding-bottom:4px}
      .meta{color:#65738d;font-size:11px;margin-bottom:20px}
      table{width:100%;border-collapse:collapse;margin-bottom:16px;font-size:11px}
      th{background:#003369;color:#fff;padding:6px 10px;text-align:left}
      td{padding:5px 10px;border-bottom:1px solid #e2e8f0}
      .summary{display:flex;gap:20px;margin-bottom:20px}
      .sum-box{background:#f1f5f9;border-radius:6px;padding:12px 16px;flex:1}
      .sum-box .val{font-size:20px;font-weight:700;color:#003369}
      .sum-box .lbl{font-size:10px;color:#65738d;text-transform:uppercase}
      .footer{margin-top:30px;padding-top:10px;border-top:1px solid #e2e8f0;font-size:10px;color:#95a2b8;text-align:center}
      @media print{body{padding:20px}}
    </style></head><body>
    <h1>Career Development Progress Report</h1>
    <div class="meta">${S.userName} · ${S.roleName||'—'} · ${S.teamName||'—'} · Generated ${new Date().toLocaleDateString()}</div>
    <div class="summary">
      <div class="sum-box"><div class="val">${currentAvg}</div><div class="lbl">Current Average</div></div>
      <div class="sum-box"><div class="val">${currentScores.length}</div><div class="lbl">Skills Rated</div></div>
      <div class="sum-box"><div class="val">${history.length}</div><div class="lbl">Checkpoints</div></div>
      <div class="sum-box"><div class="val">${S.data.level||'—'}</div><div class="lbl">Seniority</div></div>
    </div>
    <h2>Section Averages</h2>
    <table><thead><tr><th>Section</th><th>Average</th><th>Rated</th><th>Total Skills</th></tr></thead><tbody>
      ${sectionAvgs.map(s => `<tr><td>${s.name}</td><td style="text-align:center;font-weight:700">${s.avg}</td><td style="text-align:center">${s.count}</td><td style="text-align:center">${s.total}</td></tr>`).join('')}
    </tbody></table>
    <h2>Skill Details</h2>
    <table><thead><tr><th>Skill</th><th>Score</th><th>Level</th></tr></thead><tbody>${skillRows}</tbody></table>
    <h2>Checkpoint History</h2>
    <table><thead><tr><th>Date</th><th>Label</th><th>Avg Score</th><th>Skills Rated</th></tr></thead><tbody>${cpRows}</tbody></table>
    <div class="footer">Career Development Framework · Kuehne+Nagel · ©${new Date().getFullYear()}</div>
  </body></html>`;

  const win = window.open('', '_blank');
  win.document.write(html);
  win.document.close();
  setTimeout(() => { win.print(); }, 500);
}

async function renderSetupSkills() {
  const w = document.getElementById('skills-content');
  if (!w) return;
  const skills = await api('GET', '/api/skills');
  
  if (!skills || !skills.length) {
    w.innerHTML = `<div class="empty" style="padding:60px 20px">
      <img src="assets/Diploma.svg" alt="" style="width:48px;height:48px;opacity:.5;display:block;margin:0 auto 16px">
      <div>No skills or competencies registered yet.</div>
    </div>`;
    return;
  }

  // Group by category
  const groups = {};
  skills.forEach(s => {
    const cat = s.category || 'Other';
    if (!groups[cat]) groups[cat] = [];
    groups[cat].push(s);
  });

  const catColors = {
    'Technical': 'tech',
    'Business': 'biz',
    'Behavioural': 'beh',
    'AI & Automation': 'ai',
    'Custom': 'custom'
  };

  let html = `<div class="fb mb12">
    <div class="fg" style="margin:0;flex:1;max-width:320px">
      <input class="fi" id="sk-search" placeholder="Search skills..." oninput="filterSkills()">
    </div>
    <div class="fx" style="gap:8px">
      <span style="font-size:.76rem;color:var(--tx3)" id="sk-total-count">${skills.length} skills total</span>
      <button class="btn btn-p btn-sm" onclick="openAddSkillModal()">+ Add Skill</button>
    </div>
  </div>`;

  // Store skills globally for filtering
  window._allSkillsGrouped = groups;
  window._allSkillsCatColors = catColors;
  window._allSkillsTotal = skills.length;

  html += `<div id="sk-groups-container">`;
  html += renderSkillGroups(groups, catColors);
  html += `</div>`;

  w.innerHTML = html;
}

function renderSkillGroups(groups, catColors, filter) {
  let html = '';
  let visibleCount = 0;
  for (const [cat, items] of Object.entries(groups)) {
    const color = catColors[cat] || 'tech';
    const catId = cat.replace(/[^a-zA-Z]/g, '');
    const filtered = filter 
      ? items.filter(s => s.name.toLowerCase().includes(filter) || (s.desc||'').toLowerCase().includes(filter))
      : items;
    if (filter && !filtered.length) continue;
    visibleCount += filtered.length;
    html += `<div class="sh sh-${color} sh-collapsible" onclick="toggleSkillGroup('${catId}')">
      <span class="sh-arrow" id="arrow-${catId}">▾</span>
      <span style="flex:1">${cat}</span>
      <span class="sh-count">${filtered.length} skills</span>
    </div>`;
    html += `<div class="sk-group" id="group-${catId}">`;
    filtered.forEach(s => {
      const nameHtml = filter ? s.name.replace(new RegExp(`(${filter})`, 'gi'), '<mark>$1</mark>') : s.name;
      html += `<div class="sk-row sk-row-inline">
        <span class="sk-name">${nameHtml}</span>
        <span class="sk-sep">—</span>
        <span class="sk-desc" style="flex:1">${s.desc || ''}</span>
        <button class="icon-btn" style="width:28px;height:28px;flex-shrink:0" onclick="moveSkillToGroup('${s.name.replace(/'/g,"\\'")}')" title="Move to another group">
          <img src="assets/Data sharing.svg" alt="Move" style="width:18px;height:18px">
        </button>
        <button class="icon-btn icon-btn-danger" style="width:28px;height:28px;flex-shrink:0" onclick="deleteSkillFromLib('${s.name.replace(/'/g,"\\'")}')" title="Delete">
          <img src="assets/Bin.svg" alt="Delete" style="width:18px;height:18px" class="icon-red">
        </button>
      </div>`;
    });
    html += `</div>`;
  }
  if (filter && !visibleCount) {
    html = `<div class="empty" style="padding:40px">No skills matching "${filter}"</div>`;
  }
  return html;
}

function filterSkills() {
  const q = (document.getElementById('sk-search').value || '').toLowerCase().trim();
  const container = document.getElementById('sk-groups-container');
  const countEl = document.getElementById('sk-total-count');
  if (!container) return;
  container.innerHTML = renderSkillGroups(window._allSkillsGrouped, window._allSkillsCatColors, q || null);
  if (countEl) {
    if (q) {
      const total = container.querySelectorAll('.sk-row').length;
      countEl.textContent = `${total} of ${window._allSkillsTotal} skills`;
    } else {
      countEl.textContent = `${window._allSkillsTotal} skills total`;
    }
  }
}

async function deleteSkillFromLib(name) {
  showConfirmDialog('Delete Skill', `Delete "<strong>${name}</strong>" from the skills library?`, 'Delete', 'Cancel',
    async () => {
      try {
        await api('DELETE', `/api/skills/${encodeURIComponent(name)}`);
        toast(`✅ "${name}" deleted`);
        renderSetupSkills();
      } catch(e) {
        toast('⚠ ' + e.message);
      }
    }, null
  );
}

function moveSkillToGroup(name) {
  document.getElementById('m-title').textContent = 'Move Skill to Group';
  document.getElementById('m-body').innerHTML = `
    <p style="font-size:.82rem;color:var(--tx);margin-bottom:12px">Move "<strong>${name}</strong>" to a different category:</p>
    <div class="fg"><label>New Category</label>
      <select class="fi" id="move-sk-cat">
        <option value="Technical">Technical</option>
        <option value="Business">Business</option>
        <option value="Behavioural">Behavioural</option>
        <option value="AI & Automation">AI & Automation</option>
        <option value="Custom">Custom</option>
      </select></div>`;
  _ms = async () => {
    const category = document.getElementById('move-sk-cat').value;
    try {
      await api('PUT', `/api/skills/${encodeURIComponent(name)}`, { category });
      closeModal();
      toast(`✅ "${name}" moved to ${category}`);
      renderSetupSkills();
    } catch(e) { toast('⚠ ' + e.message); }
  };
  openModal();
}

function toggleSkillGroup(catId) {
  const group = document.getElementById('group-' + catId);
  const arrow = document.getElementById('arrow-' + catId);
  if (!group) return;
  const hidden = group.style.display === 'none';
  group.style.display = hidden ? '' : 'none';
  if (arrow) arrow.textContent = hidden ? '▾' : '▸';
}

function openAddSkillModal() {
  document.getElementById('m-title').textContent = 'Add New Skill';
  document.getElementById('m-body').innerHTML = `
    <div class="fg"><label>Skill Name <span style="color:var(--r1)">*</span></label>
      <input class="fi" id="new-sk-name" placeholder="e.g. GraphQL Development"></div>
    <div class="fg"><label>Description</label>
      <input class="fi" id="new-sk-desc" placeholder="Brief description of the skill"></div>
    <div class="fg"><label>Category <span style="color:var(--r1)">*</span></label>
      <select class="fi" id="new-sk-cat">
        <option value="Technical">Technical</option>
        <option value="Business">Business</option>
        <option value="Behavioural">Behavioural</option>
        <option value="AI & Automation">AI & Automation</option>
        <option value="Custom">Custom</option>
      </select></div>`;
  _ms = saveNewSkill;
  openModal();
}

async function saveNewSkill() {
  const name = document.getElementById('new-sk-name').value.trim();
  const desc = document.getElementById('new-sk-desc').value.trim();
  const category = document.getElementById('new-sk-cat').value;
  if (!name) return toast('Skill name is required');
  try {
    await api('POST', '/api/skills', { name, desc, category });
    closeModal();
    toast('✅ Skill added!');
    renderSetupSkills();
  } catch(e) { toast('⚠ ' + e.message); }
}

async function renderSetupRoles() {
  const w = document.getElementById('cfg-roles-content');
  if (!w) return;
  _cfgTeam = await api('GET', `/api/teams/${S.teamId}/config`);
  // Render roles into a shim element that replaces cfg-roles-content,
  // then calls the existing renderCfgRoles which writes into #cfg-roles
  w.innerHTML = `<div id="cfg-roles"></div>`;
  renderCfgRoles();
}

async function renderSetupMembers() {
  const w = document.getElementById('cfg-members-content');
  if (!w) return;
  _cfgTeam = await api('GET', `/api/teams/${S.teamId}/config`);
  w.innerHTML = `<div id="cfg-members"></div>`;
  renderCfgMembers();
}

// ─── MODAL & TOAST ────────────────────────────────────────────────────────────────
function openModal() { document.getElementById('ov').classList.add('on'); }
function closeModal(e) {
  if (e && e.target !== document.getElementById('ov')) return;
  document.getElementById('ov').classList.remove('on');
  _ms = null;
}
function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('on');
  setTimeout(() => t.classList.remove('on'), 3000);
}

function showConfirmDialog(title, message, confirmText, cancelText, onConfirm, onCancel) {
  document.getElementById('m-title').textContent = title;
  document.getElementById('m-body').innerHTML = `
    <p style="font-size:.86rem;color:var(--tx);line-height:1.6;margin-bottom:16px">${message}</p>
    <div class="fx" style="justify-content:flex-end;gap:8px">
      <button class="btn btn-g" onclick="closeConfirmDialog(false)">${cancelText || 'Cancel'}</button>
      <button class="btn btn-p" onclick="closeConfirmDialog(true)">${confirmText || 'Confirm'}</button>
    </div>`;
  window._confirmDialogCallbacks = { onConfirm, onCancel };
  // Hide default modal footer buttons
  const footer = document.querySelector('#ov .modal > .fx:last-child');
  if (footer) footer.style.display = 'none';
  openModal();
}

function closeConfirmDialog(confirmed) {
  const cbs = window._confirmDialogCallbacks;
  closeModal();
  // Restore default modal footer
  const footer = document.querySelector('#ov .modal > .fx:last-child');
  if (footer) footer.style.display = '';
  if (confirmed && cbs?.onConfirm) cbs.onConfirm();
  if (!confirmed && cbs?.onCancel) cbs.onCancel();
  window._confirmDialogCallbacks = null;
}

function clearFieldErr(inputId, errId) {
  const el = document.getElementById(inputId);
  if (el) el.classList.remove('invalid');
  const err = document.getElementById(errId);
  if (err) err.style.display = 'none';
}

function openKebab(id, event) {
  event.stopPropagation();
  document.querySelectorAll('.kb-menu.open').forEach(m => {
    if (m.id !== id) m.classList.remove('open');
  });
  document.getElementById(id).classList.toggle('open');
}
document.addEventListener('click', () => {
  document.querySelectorAll('.kb-menu.open').forEach(m => m.classList.remove('open'));
});
