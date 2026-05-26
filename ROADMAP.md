# Career Development Framework — Roadmap

> **Status:** POC / Feedback phase  
> **Owner:** Gisela Neves (SeaMasters Team Lead)  
> **Last updated:** May 2026

---

## Vision

A platform that enables team leads to structure, track, and support the career development of their team members through systematic assessment, goal setting, and progress monitoring — aligned with the company's seniority framework.

---

## Priority Legend

| Priority | Meaning |
|----------|---------|
| **P0** | MVP — Already implemented or in progress |
| **P1** | Next iteration — High value, planned |
| **P2** | Important — Will be addressed after P1 |
| **P3** | Future — Nice to have, lower urgency |

---

## Functional Requirements

### P0 — MVP (✅ Implemented)

| # | Requirement | Status |
|---|-------------|--------|
| F01 | Team-based login (name + team code) | ✅ Done |
| F02 | Role selection on first login | ✅ Done |
| F03 | Configurable skill matrix per role (sections + skills) | ✅ Done |
| F04 | Self-assessment with 1–5 scale + evidence field | ✅ Done |
| F05 | Seniority level selection (Junior / Mid / Senior / Lead) | ✅ Done |
| F06 | Proficiency level selection (Entry / Established / Master) | ✅ Done |
| F07 | Coverage Map — skills as rows, members as columns | ✅ Done |
| F08 | Priority skill detection (≥2 people scoring ≥3) | ✅ Done |
| F09 | SMART Action Plan (goals, actions, success criteria, dates) | ✅ Done |
| F10 | Team Lead dashboard — view member assessments | ✅ Done |
| F11 | Team Lead calibration — score + notes per skill | ✅ Done |
| F12 | AI Skills section in competency matrix | ✅ Done |
| F13 | Admin panel — create/manage teams | ✅ Done |
| F14 | Role templates (Software Developer, BA, Architect) | ✅ Done |
| F15 | Checkpoint snapshots for progress tracking | ✅ Done |

### P1 — Next Iteration (Planned)

| # | Requirement | Description | Status |
|---|-------------|-------------|--------|
| F16 | **Editable matrix entries** | Edit existing skills in a role matrix (name, description, coverage target) without having to delete and recreate | ✅ Done |
| F17 | **Configurable coverage targets** | Define coverage target per skill per role (All, 2+ people, Specialist, or custom number). "All" applies to the role scope, not the whole team | ✅ Done |
| F18 | **Skill reordering** | Drag-and-drop or move up/down to reorder skills within a section | ✅ Done |
| F19 | **Coverage Map — non-applicable skills** | Skills not in a member's role matrix should appear visually distinct (greyed out / N/A) | ✅ Done |
| F20 | **Coverage Map — filter by section** | Filter the coverage map by skill section (Hard Skills, Business, Behavioural, AI) | ✅ Done |
| F21 | **Skill pool / library** | Global pool of competencies that can be reused across teams and roles | ⏳ Planned |
| F22 | **Template suggestions** | When creating a new role, suggest skills from similar roles already in the system | ⏳ Planned |
| F23 | **Assessment guidance** | Tooltip or expandable section explaining what each score level means for that specific skill | ✅ Done |
| F24 | **Export assessment** | Export individual assessment as PDF for 1:1 conversations | ⏳ Planned |

### P2 — Important (After P1)

| # | Requirement | Description | Status |
|---|-------------|-------------|--------|
| F24 | **Multiple team leads / shared access** | Allow more than one person to have team lead permissions (Product Lead, Engineering Manager, Domain Lead) | ✅ Done |
| F25 | **Engineering Manager view** | EM can see all teams under their responsibility — cross-team dashboard | ⏳ Planned |
| F26 | **Team creation — EM assignment** | When creating a team, identify the Engineering Manager responsible | ⏳ Planned |
| F27 | **Progress history visualization** | Chart showing score evolution across checkpoints over time | ✅ Done |
| F28 | **Calibration workflow** | Structured flow: self-assessment → team lead review → calibration session → agreed scores | ⏳ Planned |
| F29 | **Goal suggestions from gaps** | Auto-suggest action plan goals based on lowest-scored skills | ✅ Done |
| F30 | **Notifications / reminders** | Remind members to complete assessment, remind leads to calibrate | ⏳ Planned |
| F31 | **Authentication** | Proper auth (AWS Cognito or similar) replacing team code login | ⏳ Planned |

### P3 — Future

| # | Requirement | Description |
|---|-------------|-------------|
| F32 | **Management dashboard** | Cross-team view for senior management — aggregated competency landscape |
| F33 | **Skill gap analysis report** | Automated report identifying critical gaps across the organization |
| F34 | **Learning resources** | Link training materials, courses, or mentors to specific skills |
| F35 | **Peer feedback** | Allow team members to give feedback on each other's skills |
| F36 | **Integration with HR systems** | Sync seniority levels and role changes with company HR tools |
| F37 | **Custom assessment scales** | Allow teams to define their own rating scale (not just 1-5) |
| F38 | **Bulk import** | Import team members and skills from CSV/Excel |
| F39 | **Audit trail** | Track who changed what and when |
| F40 | **Multi-language support** | PT/EN interface toggle |

---

## Technical Requirements

### P0 — MVP (✅ Done)

| # | Requirement | Status |
|---|-------------|--------|
| T01 | Node.js + Express backend | ✅ |
| T02 | JSON file persistence | ✅ |
| T03 | Static frontend (vanilla JS) | ✅ |
| T04 | Chart.js for radar charts | ✅ |
| T05 | Responsive layout | ✅ |
| T06 | Deploy-ready (Render.com with persistent disk) | ✅ |

### P1 — Next Iteration

| # | Requirement | Description | Status |
|---|-------------|-------------|--------|
| T07 | **Database migration** | Move from JSON file to PostgreSQL for reliability and concurrent access | ✅ Done (already on PG) |
| T08 | **API versioning** | Version the API (`/api/v1/`) for backward compatibility | ⏳ Planned |
| T09 | **Input validation** | Server-side validation for all endpoints | ✅ Done |
| T10 | **Error handling** | Consistent error responses and client-side error display | ✅ Done |

### P2 — Important

| # | Requirement | Description |
|---|-------------|-------------|
| T11 | **Authentication layer** | JWT-based auth or AWS Cognito integration |
| T12 | **Role-based access control** | Enforce permissions server-side (not just UI hiding) |
| T13 | **Frontend framework** | Migrate to Angular (aligned with team stack) for maintainability |
| T14 | **Automated backups** | Scheduled backup of assessment data |
| T15 | **CI/CD pipeline** | GitLab CI or GitHub Actions for automated deploy |

### P3 — Future

| # | Requirement | Description |
|---|-------------|-------------|
| T16 | **Container orchestration** | Deploy on OpenShift/EKS for enterprise hosting |
| T17 | **Monitoring & observability** | Health checks, logging, metrics |
| T18 | **Performance optimization** | Caching, pagination for large teams |
| T19 | **API documentation** | OpenAPI/Swagger spec |
| T20 | **Automated testing** | Unit + integration tests |

---

## Framework Alignment

This platform implements the **3-step Career Development Plan** framework:

1. **Assessment Phase** → Self-assessment + Calibration
2. **Goal Definition** → Action Plan with SMART goals
3. **Development Planning** → Progress tracking via checkpoints

Seniority dimensions evaluated:
- **Experience** (Knowledge depth) → Skill scores
- **Scope** (Work complexity) → Seniority level
- **Influence** (Indirect leadership) → Proficiency level + behavioural skills

---

## How to Give Feedback

When testing the platform, consider:

1. **Assessment flow** — Is it intuitive? Would you complete it without guidance?
2. **Skill matrix** — Are the skills relevant? What's missing for your role?
3. **Coverage Map** — Does it give useful insights about team gaps?
4. **Action Plan** — Is the SMART format helpful? What would make it better?
5. **Overall UX** — What feels clunky? What works well?

Share feedback directly with Gisela or open an issue in the repository.
