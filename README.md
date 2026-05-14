# Career Development Framework

A platform for team leads to manage career development plans, skill assessments, and team competency coverage.

Built as part of the SeaMasters team initiative at Kuehne+Nagel to structure career progression using a 3-step framework: **Assessment → Goal Definition → Development Planning**.

## Features (Current - MVP)

- 🔐 Team-based access (team code + name)
- 📋 Self-assessment with 1-5 skill rating + evidence
- 🗺️ Coverage Map (skills × members, priority gap detection)
- 🎯 SMART Action Plans
- ⚖️ Team Lead calibration view
- 📸 Checkpoint snapshots for progress tracking
- 🤖 AI Skills section in competency matrix
- 📊 Proficiency Levels (Entry / Established / Master)
- ⚙️ Configurable roles & skill matrices per team

## Quick Start (Local)

```bash
npm install
npm start
# → http://localhost:3000
```

**Admin code:** `admin2026`

## Deploy to Render.com

1. Push this repo to GitHub
2. Go to [render.com](https://render.com) → New → Web Service
3. Connect your GitHub repo
4. Render will auto-detect `render.yaml` and configure everything
5. Add a **Disk** (1GB) mounted at `/data` for persistent storage

## Tech Stack

- **Backend:** Node.js + Express
- **Frontend:** Vanilla JS (single-page app)
- **Storage:** JSON file (persistent disk in production)
- **Charts:** Chart.js

## Roadmap

See [ROADMAP.md](./ROADMAP.md) for the full feature backlog with priorities.

## Feedback

This is a POC — your feedback is welcome! Focus on:
- Is the assessment flow intuitive?
- Does the coverage map give you useful insights?
- What's missing for your team's reality?
