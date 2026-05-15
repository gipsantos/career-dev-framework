# Career Development Framework — Feedback Guide

> **URL:** https://career-dev-framework.fly.dev/  
> **Owner:** Gisela Neves  
> **Status:** POC — collecting feedback  
> **Last updated:** May 2026

---

## What is this?

A platform to help **team leads** structure and track the career development of their team members. It implements a 3-step framework:

1. **Assessment** — Self-assessment of skills (1–5 scale) with evidence
2. **Goal Definition** — SMART action plans aligned with development gaps
3. **Progress Tracking** — Checkpoints to monitor evolution over time

---

## Quick Start Guide

### For Team Leads (Admin setup)

1. Open the app → click **⚙ Admin** tab
2. Enter admin code: `admin2026`
3. Click **+ New Team** → fill in team name, code, and your name as lead
4. Go to **⚙ Configure** → **Roles & Matrices** → create roles with skill matrices
5. Share the **team code** with your team members

### For Team Members

1. Open the app → enter your **name** and **team code** (from your team lead)
2. Select your **role** (first time only)
3. Complete your **self-assessment** — rate each skill 1–5 and add evidence
4. Set your **seniority level** (Junior / Mid / Senior / Lead) and **proficiency** (Entry / Established / Master)
5. Create **action plan goals** for your development areas

### For Team Leads (Day-to-day)

1. Login with your name + team code
2. **Coverage Map** — see team skills at a glance, identify gaps (≥2 people per priority skill)
3. **Dashboard** — click a member to see their assessment, calibrate scores, review action plans
4. **Calibration** — add your own score + notes for each skill during 1:1 conversations

---

## Features Available Now (MVP)

| Feature | Description |
|---------|-------------|
| 🔐 Team-based access | Login with name + team code |
| 📋 Self-assessment | Rate skills 1–5 with evidence field |
| 🗺️ Coverage Map | Skills × Members matrix with gap detection |
| 🎯 Action Plan | SMART goals with status tracking |
| ⚖️ Calibration | Team lead scores + notes per member |
| 📸 Checkpoints | Save progress snapshots over time |
| 🤖 AI Skills | Dedicated section for AI competencies |
| 📊 Proficiency Levels | Entry / Established / Master within each seniority |
| ⚙️ Configurable matrices | Custom skills per role, templates available |
| 👥 Multi-team | Admin can create multiple teams |

---

## Planned Features (Next Versions)

### Priority 1 — Next Iteration

| Feature | Description |
|---------|-------------|
| ✏️ Editable matrix entries | Edit existing skills without delete/recreate |
| 🔀 Skill reordering | Move skills up/down within sections |
| 🔲 N/A skills in Coverage Map | Grey out skills not in a member's role matrix |
| 🔍 Coverage Map filters | Filter by section (Hard Skills, Business, AI, etc.) |
| 📚 Skill pool / library | Reusable competency pool across teams |
| 💡 Template suggestions | Suggest skills from similar roles when creating new ones |
| 📄 Export assessment | PDF export for 1:1 conversations |

### Priority 2 — Important

| Feature | Description |
|---------|-------------|
| 👥 Multiple leads | Share team lead access (Product Lead, EM, Domain Lead) |
| 🏢 Engineering Manager view | Cross-team dashboard for EMs |
| 🏷️ EM assignment | Identify the EM when creating a team |
| 📈 Progress charts | Score evolution across checkpoints over time |
| 🔄 Calibration workflow | Structured flow: self → lead review → agreed scores |
| 💡 Goal suggestions | Auto-suggest goals based on lowest-scored skills |
| 🔔 Reminders | Notify members to complete assessment |
| 🔑 Authentication | Proper login (replacing team code) |

### Priority 3 — Future

| Feature | Description |
|---------|-------------|
| 📊 Management dashboard | Aggregated view across all teams |
| 📉 Gap analysis report | Automated critical gap identification |
| 📖 Learning resources | Link courses/mentors to skills |
| 🤝 Peer feedback | Team members give feedback on each other |
| 🔗 HR integration | Sync with company HR systems |
| 📥 Bulk import | Import members/skills from CSV |
| 🌍 Multi-language | PT/EN interface |

---

## How to Give Feedback

When testing, please consider:

1. **Assessment flow** — Is it intuitive? Would you complete it without guidance?
2. **Skill matrix** — Are the skills relevant for your role? What's missing?
3. **Coverage Map** — Does it give useful insights about team gaps?
4. **Action Plan** — Is the SMART format helpful? What would improve it?
5. **Overall UX** — What feels clunky? What works well?
6. **Missing features** — What would make this useful for YOUR team?

### Feedback format (suggestion)

```
Role: [Team Lead / Developer / BA / Architect]
Team size: [number]

What works well:
- ...

What needs improvement:
- ...

Missing features I'd need:
- ...

Would I use this for my team? [Yes / Maybe / No] — Why?
```

---

## Technical Notes

- Data is stored in PostgreSQL (persistent — your data won't be lost)
- The app may take ~30s to wake up on first access (free tier)
- This is a POC — not production-ready yet (no real authentication)
- Built with Node.js + Express + vanilla JS frontend

---

## Context: Framework Alignment

This platform is based on the **Kuehne+Nagel Seniority Level Framework** and the **3-step Career Development Plan**:

**Seniority Levels:** Junior → Mid-Level → Senior → Lead  
**Proficiency Stages:** Entry → Established → Master  

**Three dimensions evaluated:**
- **Experience** (Knowledge depth) → reflected in skill scores
- **Scope** (Work complexity & independence) → reflected in seniority level
- **Influence** (Indirect leadership) → reflected in behavioural skills + proficiency

The goal is to make career conversations **structured, objective, and actionable** — not a performance review, but a personal development tool.

---

*Thank you for testing! Your feedback helps shape this into something useful for all teams.* 🚀
