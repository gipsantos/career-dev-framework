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

const SL     = ["","Beginner","Developing","Competent","Proficient","Expert"];
const LEVELS = ["Junior","Mid-Level","Senior","Lead"];
const PROFICIENCY = ["Entry","Established","Master"];
const ICONS  = ["🚢","🌊","⚓","🧭","🗺️","🔬","📦","💡","⚡","🛠️","🏗️","🤝","🎯","🚀","💼","🌍","🔧","📊"];
const COLORS = ["#0D2B4E","#1A5276","#145A32","#6E2F0A","#784212","#5B2C6F","#1B2631","#0E6655","#2E4057","#1A252F"];

// ─── STATE ─────────────────────────────────────────────────────────────────────
let S = { role:null, teamId:null, teamName:null, teamIcon:null, teamColor:null,
          userName:null, data:null, roleId:null, roleName:null, matrix:null };
let _vc=null, _ms=null, _editActIdx=null, _actTarget=null;
let _cfgTeam=null, _editingRoleId=null, _matrixDraft=null, _pendingRoles=null;
let _covFilter=null, _pickedIcon=null, _pickedColor=null;
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

async function doLogin() {
  const n = document.getElementById('l-name').value.trim();
  const c = document.getElementById('l-code').value.trim();
  if (!n || !c) return toast('Please enter your name and team code');
  try {
    const r = await api('POST', '/api/login', {userName:n, teamCode:c});
    S.role=r.role; S.teamId=r.team.id; S.teamName=r.team.name;
    S.teamIcon=r.team.icon||'👥'; S.teamColor=r.team.color||'#0D2B4E';
    S.userName=r.userName; S.roleId=r.memberRoleId;
    // Show role picker for devs without a role, or leads without a role who have roles available
    if (!S.roleId && r.roles.length > 0 && (r.needsRolePick || r.role==='lead')) {
      _pendingRoles=r.roles; showRolePicker(r.roles); return;
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
  document.getElementById('app-layout').classList.add('on');
  document.getElementById('sidebar').style.background = S.teamColor||'#0D2B4E';
  document.getElementById('sb-team-name').textContent = `${S.teamIcon||''} ${S.teamName||''}`;
  document.getElementById('sb-user-name').textContent = S.userName;
  const isLead=S.role==='lead', isAdm=S.role==='admin';
  // Lead sees BOTH dev menu (My Assessment, Action Plan) AND lead menu
  document.getElementById('sb-dev-menu').style.display   = (!isAdm) ? '' : 'none';
  document.getElementById('sb-lead-menu').style.display  = isLead  ? '' : 'none';
  document.getElementById('sb-admin-menu').style.display = isAdm   ? '' : 'none';
  if (isAdm)       go('admin');
  else if (isLead) go('coverage');
  else             go('assess');
}

function doLogout() {
  S = {role:null,teamId:null,teamName:null,teamIcon:null,teamColor:null,userName:null,data:null,roleId:null,roleName:null,matrix:null};
  document.getElementById('app-layout').classList.remove('on');
  document.getElementById('screen-login').style.display = 'block';
  ['l-name','l-code'].forEach(id => document.getElementById(id).value = '');
}

// ─── NAVIGATION ─────────────────────────────────────────────────────────────────
function go(id) {
  ['assess','plan','coverage','dashboard','config','admin'].forEach(s =>
    document.getElementById('screen-'+s).style.display = 'none');
  document.getElementById('screen-'+id).style.display = 'block';
  document.querySelectorAll('.sb-item').forEach(b => b.classList.remove('on'));
  const map={assess:'sb-assess',plan:'sb-plan',coverage:'sb-coverage',dashboard:'sb-dashboard',config:'sb-config',admin:'sb-admin'};
  if (map[id]) document.getElementById(map[id]).classList.add('on');
  if (id==='assess')    renderAssessment();
  if (id==='plan')      { ensurePlanScreen(); renderPlan(S.data, S.userName, true); }
  if (id==='coverage')  renderCoverage();
  if (id==='dashboard') renderDashboard();
  if (id==='config')    renderConfig();
  if (id==='admin')     renderAdmin();
}


// ─── ASSESSMENT ─────────────────────────────────────────────────────────────────
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
        <button class="btn btn-g btn-sm" onclick="saveCheckpoint()">📸 Save Checkpoint</button>
        <button class="btn btn-save" onclick="saveAssessment()">💾 Save</button>
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
    <div id="skill-list"></div>
    <div style="text-align:right;margin-top:14px">
      <button class="btn btn-save" onclick="saveAssessment()">💾 Save Assessment</button>
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
  (S.matrix || []).forEach(sec => {
    const hdr = document.createElement('div');
    hdr.className = `sh sh-${sec.color||'tech'}`;
    hdr.innerHTML = `<span style="flex:1">${sec.name}</span><span class="sh-count">${(sec.skills||[]).length} skills</span>`;
    list.appendChild(hdr);
    (sec.skills || []).forEach(sk => {
      allSkills.push(sk);
      const score = S.data.scores?.[sk.id] || 0;
      const ev    = S.data.evidence?.[sk.id] || '';
      const calibScore = S.data.calibratedScores?.[sk.id] || 0;
      const covCls = sk.cov==='All' ? 'ct-all' : sk.cov&&sk.cov.includes('2') ? 'ct-2' : 'ct-sp';
      const d = document.createElement('div');
      d.className = 'sk-row';
      d.innerHTML = `
        <div class="fb" style="gap:8px;flex-wrap:wrap">
          <div style="flex:1;min-width:170px">
            <span class="sk-name">${sk.name}</span>
            <span class="cov-t ${covCls}">${sk.cov||'All'}</span>
            ${calibScore ? `<span class="calib-badge" title="Calibrated by team lead">⚖ ${calibScore}</span>` : ''}
            <div class="sk-desc">${sk.desc||''}</div>
          </div>
          <div class="fx">
            <div class="stars" id="stars-${sk.id}">
              ${[1,2,3,4,5].map(n=>`<div class="star s${n} ${score>=n?'on':''}"
                onclick="setScore('${sk.id}',${n})" title="${SL[n]}">${n}</div>`).join('')}
            </div>
            <span class="slbl" id="lbl-${sk.id}">${score ? SL[score] : '—'}</span>
          </div>
        </div>
        <div class="ev-row">
          <span class="ev-icon">📝</span>
          <textarea class="ev-in" rows="1" id="ev-${sk.id}"
            placeholder="Evidence / examples from last 6-12 months…"
            onfocus="this.rows=3" onblur="if(!this.value)this.rows=1"
            onchange="setEv('${sk.id}',this.value)">${ev}</textarea>
        </div>`;
      list.appendChild(d);
    });
  });
  updateABar(allSkills);
}

function setScore(id, v) {
  if (!S.data.scores) S.data.scores = {};
  // Toggle off if clicking same score
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
  const label = prompt('Checkpoint label (e.g. "Q1 2026", "Sprint 12"):', `Checkpoint ${new Date().toLocaleDateString()}`);
  if (!label) return;
  await saveAssessment();
  await api('POST', `/api/assessments/${S.teamId}/${encodeURIComponent(S.userName)}/checkpoint`, { label });
  S.data = await api('GET', `/api/assessments/${S.teamId}/${encodeURIComponent(S.userName)}`);
  document.getElementById('a-checkpoints').textContent = (S.data.history||[]).length;
  toast('📸 Checkpoint saved! Your progress has been recorded.');
}

// ─── ACTION PLAN ────────────────────────────────────────────────────────────────
function ensurePlanScreen() {
  const w = document.getElementById('screen-plan');
  if (!w.querySelector('.fb')) {
    w.innerHTML = `
      <div class="fb mb16">
        <div><div class="pg-t">My Action Plan</div><div class="pg-s">SMART development goals aligned with your assessment gaps.</div></div>
        <button class="btn btn-p" onclick="openActModal(null,null)">+ Add Goal</button>
      </div>
      <div id="plan-summary" class="sum-row mb12"></div>
      <div id="plan-list"></div>`;
  }
}

function renderPlan(data, memberName, isSelf) {
  if (!data) return;
  const acts = data.actions || [];
  const w = document.getElementById('plan-list');
  if (!w) return;

  // Summary
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
    w.innerHTML = `<div class="empty">No goals yet.${isSelf?' Click <b>+ Add Goal</b> to start.':''}</div>`;
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
              📌 ${a.skill||'—'} &nbsp;·&nbsp; 🗓 ${a.date||'No deadline'}
            </div>
            ${a.actions ? `<div style="font-size:.78rem;color:#555;margin-top:5px;line-height:1.5">${a.actions.replace(/\n/g,'<br>')}</div>` : ''}
            ${a.success ? `<div style="font-size:.76rem;color:var(--g1);margin-top:4px;font-style:italic">✓ Success: ${a.success}</div>` : ''}
          </div>
        </div>
        <div class="fx" style="gap:4px;align-items:flex-start;flex-shrink:0">
          <span class="stb st-${a.status}">${{todo:'Not Started',inprog:'In Progress',done:'✅ Done'}[a.status]}</span>
          ${isSelf ? `
            <button class="btn btn-g btn-xs" onclick="openActModal(${i},'${memberName}')">Edit</button>
            <button class="btn btn-g btn-xs" style="color:var(--r1)" onclick="delAct(${i},'${memberName}')">✕</button>` : ''}
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


// ─── COVERAGE ───────────────────────────────────────────────────────────────────
async function renderCoverage() {
  const {team, assessments} = await api('GET', `/api/coverage/${S.teamId}`);
  const roles   = team.roles || [];
  const members = team.members;

  const ff = document.getElementById('cov-role-filters');
  ff.innerHTML =
    `<button class="btn btn-sm ${!_covFilter?'btn-p':'btn-g'}" onclick="_covFilter=null;renderCoverage()">All Roles</button>` +
    roles.map(r =>
      `<button class="btn btn-sm ${_covFilter===r.id?'btn-p':'btn-g'}" onclick="_covFilter='${r.id}';renderCoverage()">${r.name}</button>`
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
  const allSkills  = sections.flatMap(s => s.skills||[]);
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
    document.getElementById('cov-tbl').innerHTML = '<div class="empty">No data yet. Members need to complete their assessment first.</div>';
    return;
  }

  const shortName = n => n.split(' ').map((w,i) => i===0 ? w : w[0]+'.').join(' ');

  let html = `<table class="cov-tbl"><thead><tr>
    <th class="sk-hdr" style="position:sticky;left:0;z-index:2;min-width:220px">Skill / Competency</th>
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

  sections.forEach(sec => {
    html += `<tr><td colspan="${filtMembers.length+2}" class="sec-row sec-row-${sec.color||'tech'}">${sec.name}</td></tr>`;
    (sec.skills||[]).forEach(sk => {
      const scores  = filtMembers.map(m => assessments[m.name]?.scores?.[sk.id] || 0);
      const reach3  = scores.filter(s => s>=3).length;
      const need    = sk.cov && sk.cov.includes('2') ? 2 : 1;
      const covOk   = reach3 >= need;
      const covCls  = sk.cov==='All' ? 'ct-all' : sk.cov&&sk.cov.includes('2') ? 'ct-2' : 'ct-sp';
      html += `<tr class="${!covOk && sk.cov&&sk.cov.includes('2') ? 'gap-row' : ''}">
        <td class="sk-cell" style="position:sticky;left:0;z-index:1">
          ${sk.name} <span class="cov-t ${covCls}" style="font-size:.62rem">${sk.cov||'All'}</span>
        </td>
        ${scores.map(s => `<td><span class="pill p${s}">${s||'—'}</span></td>`).join('')}
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

// ─── DASHBOARD ───────────────────────────────────────────────────────────────────
async function renderDashboard() {
  const {team, assessments} = await api('GET', `/api/coverage/${S.teamId}`);
  _dashRoles = team.roles || [];
  const members = team.members;
  const w = document.getElementById('d-cards');
  document.getElementById('d-detail').style.display = 'none';
  if (!members.length) { w.innerHTML = '<div class="empty">No team members yet. Add members in ⚙ Configure.</div>'; return; }
  w.innerHTML = members.map(m => {
    const d    = assessments[m.name] || {};
    const sc   = Object.values(d.scores||{}).filter(s=>s>0);
    const avg  = sc.length ? (sc.reduce((a,b)=>a+b,0)/sc.length).toFixed(1) : '—';
    const role = _dashRoles.find(r => r.id===(d.roleId||m.roleId));
    const cal  = d.calibratedScores && Object.keys(d.calibratedScores).length > 0;
    return `<div class="mc" onclick="showMember('${m.name}',${JSON.stringify(d).replace(/'/g,'&#39;')})">
      <div class="mn">${m.name}${cal?'<span class="badge-calib" style="margin-left:5px">Calibrated</span>':''}</div>
      <div class="ml">${role?.name||'—'} · ${d.level||'—'} ${d.proficiency?`· ${d.proficiency}`:''}</div>
      <div class="ma">${avg}</div>
      <div class="mp">${sc.length} skills rated${d.history?.length?` · ${d.history.length} checkpoints`:''}</div>
    </div>`;
  }).join('');
}

function showMember(name, data) {
  document.querySelectorAll('.mc').forEach(c =>
    c.classList.toggle('sel', c.querySelector('.mn').textContent.trim().startsWith(name)));
  _dashMember = name; _dashData = data;
  document.getElementById('d-detail').style.display = 'block';
  document.querySelectorAll('.dtab').forEach((b,i) => b.classList.toggle('on', i===0));
  ['dt-overview','dt-matrix','dt-actions'].forEach(id =>
    document.getElementById(id).style.display = 'none');
  document.getElementById('dt-overview').style.display = 'block';
  dTab('overview');
}

function dTab(t) {
  _dashTab = t;
  ['dt-overview','dt-matrix','dt-actions'].forEach(id =>
    document.getElementById(id).style.display = 'none');
  document.getElementById('dt-'+t).style.display = 'block';
  document.querySelectorAll('.dtab').forEach((b,i) =>
    b.classList.toggle('on', ['overview','matrix','actions'][i]===t));
  if (t==='overview') renderDashOverview();
  if (t==='matrix')   renderDashMatrix();
  if (t==='actions')  renderDashActions();
}

function renderDashOverview() {
  const data = _dashData, name = _dashMember;
  const role = (_dashRoles||[]).find(r => r.id===data.roleId);
  const dims = {};
  if (role) {
    (role.sections||[]).forEach(sec => {
      dims[sec.name] = [];
      (sec.skills||[]).forEach(sk => { if (data.scores?.[sk.id]) dims[sec.name].push(data.scores[sk.id]); });
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
          <div class="fx mt8"><div class="pbar-w"><div class="pbar" style="width:${p}%;background:${col}"></div></div></div>
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
      <button class="btn btn-save" onclick="saveCalibration('${name}')">💾 Save Calibration</button>
    </div>
    <div class="mv-col-hdr">
      <span>Skill</span><span style="text-align:center">Self</span><span>Calibrated</span><span>Notes</span>
    </div>`;

  (role.sections||[]).forEach(sec => {
    html += `<div class="mv-sec-hdr sh-${sec.color||'tech'} mt8">${sec.name}</div><div class="matrix-view">`;
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
    <button class="btn btn-save" onclick="saveCalibration('${name}')">💾 Save Calibration</button>
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

function renderDashActions() {
  const data = _dashData, name = _dashMember;
  document.getElementById('dt-actions').innerHTML = `
    <div class="fb mb12"><h2 style="color:var(--kn)">Action Plan · ${name}</h2>
      <button class="btn btn-p btn-sm" onclick="openActModal(null,'${name}')">+ Add Goal</button>
    </div>
    <div id="plan-list"></div>`;
  renderPlan(data, name, true);
}


// ─── CONFIGURE ───────────────────────────────────────────────────────────────────
let _cfgTab = 'info';
async function renderConfig() {
  _cfgTeam = await api('GET', `/api/teams/${S.teamId}/config`);
  cfgTab(_cfgTab);
}
function cfgTab(t) {
  _cfgTab = t;
  document.querySelectorAll('.cfg-tab').forEach((b,i) =>
    b.classList.toggle('on', ['info','roles','members'][i]===t));
  ['cfg-info','cfg-roles','cfg-members'].forEach(id =>
    document.getElementById(id).style.display = 'none');
  document.getElementById('cfg-'+t).style.display = '';
  if (t==='info')    renderCfgInfo();
  if (t==='roles')   renderCfgRoles();
  if (t==='members') renderCfgMembers();
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
  document.getElementById('sb-team-name').textContent = `${S.teamIcon} ${S.teamName}`;
  document.getElementById('sidebar').style.background = S.teamColor;
  toast('✅ Team info saved!');
}

function renderCfgRoles() {
  const roles = _cfgTeam.roles || [];
  document.getElementById('cfg-roles').innerHTML = `
    <div class="fb mb12">
      <div><strong>Roles & Skill Matrices</strong><div style="font-size:.76rem;color:#888">Each role has its own skill matrix.</div></div>
      <button class="btn btn-p btn-sm" onclick="openNewRoleModal()">+ New Role</button>
    </div>
    <div class="role-grid">
      ${roles.length ? roles.map(r => `
        <div class="rci ${_editingRoleId===r.id?'sel':''}" onclick="selectRoleEdit('${r.id}')">
          <div class="rci-name">${r.name}</div><div class="rci-desc">${r.desc||''}</div>
          <div class="fx" style="justify-content:space-between">
            <span class="rci-stats">${(r.sections||[]).flatMap(s=>s.skills||[]).length} skills · ${(r.sections||[]).length} sections</span>
            <button class="btn btn-d btn-xs" onclick="event.stopPropagation();deleteRole('${r.id}')">Delete</button>
          </div>
        </div>`).join('')
      : '<div class="empty" style="grid-column:1/-1">No roles yet.</div>'}
    </div>
    <div id="matrix-editor-wrap" style="display:none">
      <div class="fb mb8 mt20">
        <h3 id="me-role-name" style="color:var(--kn);font-size:1rem"></h3>
        <div class="fx">
          <button class="btn btn-g btn-sm" onclick="openImportTplModal()">📥 Import Template</button>
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
function renderMatrixEditor(role) { _matrixDraft=JSON.parse(JSON.stringify(role.sections||[])); document.getElementById('me-role-name').textContent=`${role.name} – Matrix Editor`; refreshME(); }
function refreshME() {
  const secColors = ['tech','biz','beh','ai','custom'];
  document.getElementById('matrix-editor').innerHTML = _matrixDraft.map((sec, si) => `
    <div class="me-sec">
      <div class="me-sec-hdr sh-${sec.color||'tech'}">
        <span style="flex:1">${sec.name}</span>
        <button onclick="renSec(${si})" style="background:rgba(255,255,255,.2);color:#fff;border:none;cursor:pointer;padding:2px 7px;border-radius:4px;font-size:.72rem">✏</button>
        <button onclick="delSec(${si})" style="background:rgba(200,50,50,.4);color:#fff;border:none;cursor:pointer;padding:2px 7px;border-radius:4px;font-size:.72rem">✕</button>
      </div>
      <div class="me-sec-body">
        ${(sec.skills||[]).map((sk, ki) => `
          <div class="me-sk-item">
            <div class="me-sk-info">
              <div class="me-sk-name">${sk.name} <span class="cov-t ${sk.cov==='All'?'ct-all':sk.cov&&sk.cov.includes('2')?'ct-2':'ct-sp'}">${sk.cov||'All'}</span></div>
              <div class="me-sk-desc">${sk.desc||''}</div>
            </div>
            <button class="btn btn-d btn-xs" onclick="delSkill(${si},${ki})">✕</button>
          </div>`).join('')}
        <div class="add-sk-form">
          <div style="font-size:.72rem;font-weight:700;color:#555;margin-bottom:7px">+ Add Skill</div>
          <div class="add-sk-row">
            <input class="fi" id="as-n-${si}" placeholder="Skill name" style="font-size:.8rem;padding:6px 9px">
            <select class="fi" id="as-c-${si}" style="font-size:.8rem;padding:6px 9px">
              <option value="All">All team</option><option value="2+ people">2+ people 🟡</option><option value="Specialist">Specialist</option>
            </select>
          </div>
          <input class="fi" id="as-d-${si}" placeholder="Description" style="font-size:.8rem;padding:6px 9px;margin-top:5px;width:100%">
          <button class="btn btn-p btn-sm" style="margin-top:7px" onclick="addSkill(${si})">Add</button>
        </div>
      </div>
    </div>`).join('');
}
function addSection() { const n=prompt('Section name:'); if(!n)return; _matrixDraft.push({id:`sec-${Date.now()}`,name:n,color:['tech','biz','beh','ai','custom'][_matrixDraft.length%5],skills:[]}); refreshME(); }
function renSec(si) { const n=prompt('New name:',_matrixDraft[si].name); if(n){_matrixDraft[si].name=n;refreshME();} }
function delSec(si) { if(!confirm('Delete section?'))return; _matrixDraft.splice(si,1); refreshME(); }
function addSkill(si) { const name=document.getElementById(`as-n-${si}`).value.trim(); if(!name){toast('Name required');return;} _matrixDraft[si].skills.push({id:`sk-${Date.now()}`,name,desc:document.getElementById(`as-d-${si}`).value.trim(),cov:document.getElementById(`as-c-${si}`).value}); refreshME(); }
function delSkill(si,ki) { _matrixDraft[si].skills.splice(ki,1); refreshME(); }
async function saveMatrix() { await api('PUT',`/api/teams/${S.teamId}/roles/${_editingRoleId}`,{sections:_matrixDraft}); const idx=_cfgTeam.roles.findIndex(r=>r.id===_editingRoleId); if(idx>=0)_cfgTeam.roles[idx].sections=_matrixDraft; toast('✅ Matrix saved!'); }

function openImportTplModal() {
  const keys=Object.keys(TEMPLATES);
  document.getElementById('m-title').textContent='Import Template';
  document.getElementById('m-body').innerHTML=`
    <p style="font-size:.82rem;color:#666;margin-bottom:14px">Import a pre-built template into this role's matrix.</p>
    <div class="fg"><label>Template</label><select class="fi" id="imp-tpl"><option value="">— select —</option>${keys.map(k=>`<option value="${k}">${k} (${TEMPLATES[k].sections.flatMap(s=>s.skills).length} skills)</option>`).join('')}</select></div>
    <div class="fg"><label>Mode</label><select class="fi" id="imp-mode"><option value="add">Add to existing</option><option value="replace">Replace entirely</option></select></div>`;
  _ms=()=>{const key=document.getElementById('imp-tpl').value,mode=document.getElementById('imp-mode').value;if(!key){toast('Select a template');return;}const tpl=JSON.parse(JSON.stringify(TEMPLATES[key].sections));if(mode==='replace'){_matrixDraft=tpl;}else{tpl.forEach(ts=>{const ex=_matrixDraft.find(s=>s.name===ts.name&&s.color===ts.color);if(ex){const ids=new Set(ex.skills.map(s=>s.id));ts.skills.forEach(sk=>{if(!ids.has(sk.id))ex.skills.push(sk);});}else _matrixDraft.push(ts);});}closeModal();refreshME();toast('✅ Imported!');};
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
async function deleteRole(id) { if(!confirm('Delete this role?'))return; await api('DELETE',`/api/teams/${S.teamId}/roles/${id}`);_cfgTeam.roles=(_cfgTeam.roles||[]).filter(r=>r.id!==id);if(_editingRoleId===id){_editingRoleId=null;document.getElementById('matrix-editor-wrap').style.display='none';}renderCfgRoles(); }

// ─── MEMBERS CONFIG ───────────────────────────────────────────────────────────────
async function renderCfgMembers() {
  const members=(_cfgTeam.members||[]).map(m=>typeof m==='string'?{name:m,roleId:null}:m);
  const roles=_cfgTeam.roles||[];
  document.getElementById('cfg-members').innerHTML=`<div class="card">
    <div class="fb mb12"><div><h2>Team Members</h2><p class="sub">Manage members and assign roles.</p></div>
      <button class="btn btn-p btn-sm" onclick="openAddMemberModal()">+ Add Member</button></div>
    ${!members.length?'<div class="empty">No members yet.</div>':`
    <table class="atbl"><thead><tr><th>Name</th><th>Role</th><th>Actions</th></tr></thead><tbody>
      ${members.map(m=>`<tr><td style="font-weight:700">${m.name}</td><td>
        <select class="fi" style="padding:5px 8px;font-size:.78rem" onchange="assignRole('${m.name}',this.value)">
          <option value="">— no role —</option>${roles.map(r=>`<option value="${r.id}" ${m.roleId===r.id?'selected':''}>${r.name}</option>`).join('')}
        </select></td><td><button class="btn btn-d btn-xs" onclick="removeMember('${m.name}')">Remove</button></td></tr>`).join('')}
    </tbody></table>`}</div>`;
}
function openAddMemberModal() {
  const roles=_cfgTeam.roles||[];
  document.getElementById('m-title').textContent='Add Team Member';
  document.getElementById('m-body').innerHTML=`<div class="fg"><label>Full Name</label><input class="fi" id="am-name" placeholder="e.g. Ana Silva"></div>
    <div class="fg"><label>Role</label><select class="fi" id="am-role"><option value="">— assign later —</option>${roles.map(r=>`<option value="${r.id}">${r.name}</option>`).join('')}</select></div>`;
  _ms=async()=>{const name=document.getElementById('am-name').value.trim();if(!name){toast('Name required');return;}await api('POST',`/api/teams/${S.teamId}/members`,{name,roleId:document.getElementById('am-role').value||null});_cfgTeam.members=_cfgTeam.members||[];_cfgTeam.members.push({name,roleId:document.getElementById('am-role').value||null});closeModal();renderCfgMembers();toast(`✅ ${name} added!`);};
  openModal();
}
async function assignRole(n,rid) { await api('PUT',`/api/teams/${S.teamId}/members/${encodeURIComponent(n)}/role`,{roleId:rid||null}); const m=(_cfgTeam.members||[]).find(x=>(x.name||x)===n); if(m)m.roleId=rid||null; toast('Role assigned'); }
async function removeMember(n) { if(!confirm(`Remove ${n}?`))return; await api('DELETE',`/api/teams/${S.teamId}/members/${encodeURIComponent(n)}`);_cfgTeam.members=(_cfgTeam.members||[]).filter(m=>(m.name||m)!==n);renderCfgMembers(); }

// ─── ADMIN ────────────────────────────────────────────────────────────────────────
async function renderAdmin() {
  const teams=await api('GET','/api/admin/teams');
  const tb=document.getElementById('adm-tbody');
  if(!teams.length){tb.innerHTML='<tr><td colspan="8" class="empty">No teams yet.</td></tr>';return;}
  tb.innerHTML=teams.map(t=>`<tr>
    <td><span style="font-size:1.1rem">${t.icon||'👥'}</span> <strong>${t.name}</strong><div style="font-size:.7rem;color:#888">${t.description||''}</div></td>
    <td><code style="background:#eee;padding:2px 6px;border-radius:4px;font-size:.76rem">${t.code}</code></td>
    <td>${t.leadName}</td><td>${t.roleCount}</td><td>${t.memberCount}</td><td>${t.assessedCount}</td>
    <td style="font-size:.72rem;color:#888">${t.createdAt?.slice(0,10)||'—'}</td>
    <td><div class="fx" style="gap:4px">
      <button class="btn btn-g btn-xs" onclick="openTeamModal('${t.id}','${t.name}','${t.code}','${t.leadName}','${(t.description||'').replace(/'/g,'&#39;')}','${t.icon||'👥'}','${t.color||'#0D2B4E'}')">Edit</button>
      <button class="btn btn-d btn-xs" onclick="delTeam('${t.id}')">Delete</button>
    </div></td></tr>`).join('');
}

function openTeamModal(id,name='',code='',lead='',desc='',icon='👥',color='#0D2B4E') {
  const isNew=id===null;
  document.getElementById('m-title').textContent=isNew?'Create New Team':'Edit Team';
  document.getElementById('m-body').innerHTML=`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:11px">
      <div class="fg"><label>Team Name</label><input class="fi" id="t-name" value="${name}"></div>
      <div class="fg"><label>Team Code</label><input class="fi" id="t-code" value="${code}" ${!isNew?'readonly style="background:#f5f5f5"':''}></div>
    </div>
    <div class="fg"><label>Team Lead Name</label><input class="fi" id="t-lead" value="${lead}"></div>
    <div class="fg"><label>Description</label><input class="fi" id="t-desc" value="${desc}"></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:11px">
      <div class="fg"><label>Icon</label><div class="fx" style="flex-wrap:wrap;gap:5px;margin-top:4px">${ICONS.map(ic=>`<button class="icon-btn ${icon===ic?'sel':''}" onclick="pickTI('${ic}')">${ic}</button>`).join('')}</div><input type="hidden" id="t-icon" value="${icon}"></div>
      <div class="fg"><label>Colour</label><div class="fx" style="flex-wrap:wrap;gap:6px;margin-top:4px">${COLORS.map(c=>`<div class="color-dot ${color===c?'sel':''}" style="background:${c}" onclick="pickTC('${c}')"></div>`).join('')}</div><input type="hidden" id="t-color" value="${color}"></div>
    </div>
    ${isNew ? `
    <div class="fg mt12" style="border-top:1px solid #eee;padding-top:12px">
      <label>Team Members <span style="color:#aaa;font-weight:400;font-size:.7rem">(optional — can add later)</span></label>
      <div id="t-members-list" style="margin-top:8px"></div>
      <div style="display:grid;grid-template-columns:1fr auto;gap:6px;margin-top:8px">
        <input class="fi" id="t-member-name" placeholder="Member name" style="font-size:.82rem" onkeydown="if(event.key==='Enter'){event.preventDefault();addTeamMember();}">
        <button class="btn btn-g btn-sm" onclick="addTeamMember()">+ Add</button>
      </div>
    </div>` : ''}`;
  if(isNew) window._newTeamMembers = [];
  _ms=isNew?createTeam:()=>updateTeam(id);
  openModal();
}

function addTeamMember() {
  const input = document.getElementById('t-member-name');
  const name = input.value.trim();
  if (!name) return;
  if (window._newTeamMembers.find(m => m.name.toLowerCase() === name.toLowerCase())) { toast('Already added'); return; }
  window._newTeamMembers.push({ name, roleId: null });
  input.value = '';
  renderNewTeamMembers();
}

function removeNewTeamMember(idx) {
  window._newTeamMembers.splice(idx, 1);
  renderNewTeamMembers();
}

function renderNewTeamMembers() {
  const list = document.getElementById('t-members-list');
  if (!list) return;
  list.innerHTML = window._newTeamMembers.map((m, i) => `
    <div class="fx" style="padding:4px 8px;background:var(--grey);border-radius:6px;margin-bottom:4px;justify-content:space-between">
      <span style="font-size:.82rem;font-weight:600">${m.name}</span>
      <button class="btn btn-g btn-xs" style="color:var(--r1)" onclick="removeNewTeamMember(${i})">✕</button>
    </div>`).join('');
}
function pickTI(ic){document.getElementById('t-icon').value=ic;document.querySelectorAll('#m-body .icon-btn').forEach(b=>b.classList.toggle('sel',b.textContent.trim()===ic));}
function pickTC(c){document.getElementById('t-color').value=c;document.querySelectorAll('#m-body .color-dot').forEach(d=>d.classList.toggle('sel',d.style.background===c||d.style.background===hexRgb(c)));}
async function createTeam(){const name=document.getElementById('t-name').value.trim(),code=document.getElementById('t-code').value.trim(),lead=document.getElementById('t-lead').value.trim();if(!name||!code||!lead){toast('Name, code and lead required');return;}const teamData=await api('POST','/api/admin/teams',{name,code,leadName:lead,description:document.getElementById('t-desc').value.trim(),icon:document.getElementById('t-icon').value,color:document.getElementById('t-color').value});
  // Add members if any were specified
  if(window._newTeamMembers&&window._newTeamMembers.length){for(const m of window._newTeamMembers){await api('POST',`/api/teams/${teamData.id}/members`,{name:m.name,roleId:m.roleId});}}
  window._newTeamMembers=[];closeModal();renderAdmin();toast('✅ Team created!');}
async function updateTeam(id){await api('PUT',`/api/admin/teams/${id}`,{name:document.getElementById('t-name').value.trim(),leadName:document.getElementById('t-lead').value.trim(),description:document.getElementById('t-desc').value.trim(),icon:document.getElementById('t-icon').value,color:document.getElementById('t-color').value});closeModal();renderAdmin();toast('✅ Updated!');}
async function delTeam(id){if(!confirm('Delete this team and all data?'))return;await api('DELETE',`/api/admin/teams/${id}`);renderAdmin();}

// ─── MODAL / TOAST ──────────────────────────────────────────────────────────────
function openModal() { document.getElementById('ov').classList.add('on'); }
function closeModal(e) { if(e&&e.target.id!=='ov')return; document.getElementById('ov').classList.remove('on'); _ms=null; }
function toast(msg) { const t=document.getElementById('toast'); t.textContent=msg; t.classList.add('on'); setTimeout(()=>t.classList.remove('on'),3000); }
