# Career Development Framework — User Guide

## Overview

The Career Development Framework is a tool for teams to manage skill assessments, track professional growth, and identify development opportunities. It supports three types of users: **Team Members**, **Team Leads / Product Leads**, and **Engineering Managers**.

---

## Getting Started

### Login

1. Open the application URL in your browser
2. Enter your **full name** (as registered by your team lead)
3. Click **Enter**

If you belong to multiple teams, you'll be able to switch between them from the avatar menu in the top-right corner.

### First Time?

If you haven't been added to a team yet, ask your Team Lead for the **team code** and use the "Join a new team with a team code" option on the login screen.

---

## For Team Members

### My Assessment

This is where you rate your skills based on the matrix defined for your role.

**How to rate:**

| Score | Level | Meaning |
|-------|-------|---------|
| 1 | Beginner | Need to learn from ground up, require comprehensive training and supervision |
| 2 | Developing | Can perform basic tasks with guidance and support |
| 3 | Competent | Can work independently on most tasks with good understanding |
| 4 | Proficient | Can handle complex tasks and guide others effectively |
| 5 | Expert | Have mastered the skill, can mentor others, solve complex problems, and improve processes |

**Tips:**
- Be honest — this is a development tool, not a performance review
- Add evidence for each skill (examples from the last 6–12 months)
- Click on a score number to rate; click again to clear
- Sections can be collapsed/expanded by clicking the header
- Don't forget to click **Save Assessment** when done

**Coverage tags:**
- `All` — Everyone with this skill in their matrix should aim for level 3+
- `2+` — At least 2 people in the team should reach level 3+
- `Spec` — At least 1 specialist needed at level 3+

### My Progress

Track your skill evolution over time.

- **Save Checkpoint** — Takes a snapshot of your current scores (do this periodically, e.g., every quarter)
- **Progress Chart** — Shows your overall average and per-section averages across checkpoints
- **Drill-down** — Click a section button to see individual skill progress
- **Export PDF** — Generate a progress report to share with your manager

### Action Plan

Create SMART development goals aligned with your assessment gaps.

- Click **+ Add Goal** to create a new development objective
- Use **Suggest Goals** to get recommendations based on your lowest-scored skills
- Each goal includes: skill area, objective, actions, success criteria, target date, and status
- Update status as you progress: Not Started → In Progress → Done

---

## For Team Leads & Product Leads

You have access to everything above, plus:

### Dashboard (Team section)

View your team's assessment status at a glance.

- **Member cards** — Click a member to see their details
- **Overview tab** — Dimension averages and radar chart
- **Assessment & Calibration tab** — Review and calibrate member scores
- **Action Plan tab** — View/add development goals for team members
- **Progress History tab** — Track member evolution over time

**Calibration:** As a team lead, you can add your own assessment of each member's skills alongside their self-assessment. This helps identify perception gaps.

### Coverage Map (Team section)

A matrix view showing all skills vs all team members.

- **Filters** — Filter by role or by section
- **Avg column** — Average score per skill (only counting members who have it in their matrix)
- **Coverage column** — Shows if the team meets the coverage target (e.g., 2/2 means target met)
- **N/A** — Skill is not in that member's role matrix
- **Colour-coded backgrounds** — Different sections have subtle background colours for easy scanning
- Scroll horizontally if there are many team members

### Setup section

#### Teams
View and manage your team(s). Edit team details, leads, and description.

#### Roles & Matrices
Define skill matrices for each role in your team.

- **Create a role** — Click "+ New Role", give it a name and optionally load a template
- **Load Template** — Pre-built matrices for common roles (Software Developer, Business Analyst, Solution Architect)
- **Import File** — Import skills from a CSV file (format: Section, Skill Name, Description, Coverage)
- **Export** — Download the current matrix as CSV
- **Add skills** — Search from the global pool or create new ones
- **Reorder** — Drag role cards to change their order
- **Sections** — Collapse/expand, rename, delete, or add new sections

#### Members
Manage team members and assign roles.

- **Add Member** — Add a person and assign their role
- **Multiple roles** — The same person can appear multiple times with different roles
- **Sort** — Click column headers to sort by name, team, or role
- **Change role** — Use the dropdown to reassign a member's role (their assessment matrix updates accordingly)

#### Skills & Competencies
The global pool of skills available for building role matrices.

- **Search** — Filter skills by name or description
- **Collapse/expand** — Click section headers to show/hide groups
- **Add Skill** — Add new skills to the global library
- **Move** — Move a skill to a different category
- **Delete** — Only possible if the skill is not used in any team's matrix

---

## For Engineering Managers

You see an aggregated view across all your teams.

### EM Dashboard

- **Team filters** — View all teams or filter to a specific one
- **Summary cards** — Total members, assessed count, completion percentage
- **Team cards** — Quick overview of each team's progress
- **Aggregated coverage table** — All skills × all members across teams, with N/A for skills not in a member's matrix

### Setup

Same as Team Lead, but with visibility across all your teams:
- **Members table** shows a Team column
- **Add Member** includes a team selector

---

## Tips & Best Practices

1. **Assess regularly** — Update your self-assessment at least once per quarter
2. **Save checkpoints** — Create a checkpoint before and after major learning periods
3. **Be specific with evidence** — "Implemented Kafka consumer for X project" is better than "I know Kafka"
4. **Use Action Plans** — Turn gaps into concrete goals with deadlines
5. **Calibrate together** — Team leads should discuss calibrations with members in 1:1s
6. **Review Coverage Map** — Identify team gaps and plan cross-training

---

## FAQ

**Q: I can't see my assessment / it says "No skill matrix configured"**
A: Your team lead needs to assign you a role in Setup > Members, and that role needs a matrix configured in Setup > Roles & Matrices.

**Q: I changed my scores but they disappeared**
A: Make sure to click **Save Assessment** after making changes.

**Q: Can I have multiple roles?**
A: Yes. Your team lead can add you multiple times with different roles. Each role has its own matrix.

**Q: Who can see my assessment?**
A: Your Team Lead, Product Lead, and Engineering Manager can view your scores. Other team members cannot.

**Q: What happens when I save a checkpoint?**
A: A snapshot of your current scores is saved with a label and date. This allows you to track your progress over time in the Progress chart.

---

## Support

For questions or issues, contact your Team Lead or the application administrator.

---

*Career Development Framework · Kuehne+Nagel*
