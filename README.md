# Agentic Blueprint

Welcome to your Agentic Blueprint! This repository is a "digital agency in a box" and a scaffolding for building autonomous, AI-driven applications using the 3-Layer Architecture (Directives, Orchestration, Execution).

## What's Included?

- **`.agents/`**: Your AI instruction manual.
  - `AGENTS.md`: The core operating principles for all AI agents working on this codebase.
  - `CODEMAP.md`: The living architectural map of your project.
  - `KNOWN_ISSUES.md`: The self-annealing log where agents record their mistakes.
  - `ROADMAP.md`: The central task queue managed by your PM agent.
  - `skills/`: A full suite of specialized agency personas (Frontend, Backend, PM, Growth, SEO, Competitor Analyst, etc.).
  - `directives/` & `workflows/`: Standard operating procedures for deploying, styling, and building.
- **`execution/`**: Deterministic scripts for interacting with Git, Vercel, and other APIs.
- **`daemon/`**: The Zero-Click Autonomous Builder. A detached background script that continuously polls `ROADMAP.md` for low-priority tasks, builds them autonomously, and pushes the results.

## How to Deploy as a GitHub Template

This blueprint is designed to be pushed to GitHub as a "Template Repository". Once it's a template, you can spawn new projects from it with a single click.

### Step 1: Make this a Template Repository
1. Push this folder to a new GitHub repository (e.g., `your-github/agent-blueprint`).
2. Go to the repository **Settings** on GitHub.
3. Under the "General" tab, check the box that says **Template repository**.

### Step 2: Create a New Project
1. Navigate to your `agent-blueprint` repository on GitHub.
2. Click the green **Use this template** button.
3. Select **Create a new repository**.
4. Name your new app and clone it to your local machine.

### Step 3: Run the Local Setup Script
Once you've cloned your new app locally, run the included `setup.sh` script to configure the environment:
```bash
./setup.sh
```
This script will prompt you for your `GEMINI_API_KEY`, Vercel tokens, and configure the background daemon.

---

## Starting the Zero-Click Daemon

To enable the background agent that automatically completes tasks from your `ROADMAP.md`:
```bash
cd daemon
node watcher.js
```
Leave this running in the background. When your Project Manager agent marks a task as `[x] Queue for Builder` in `ROADMAP.md`, the daemon will pick it up and execute it.
