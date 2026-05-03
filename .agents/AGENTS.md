# Agent Instructions

## Context Loading Order (Read First)

When starting a new session or parallel agent, read in this order:
1. **`.agents/PRODUCT_VISION.md`** & **`.agents/ARCHITECTURE_DECISIONS.md`** — The golden copy of the original vision.
2. **`.agents/CODEMAP.md`** — architecture, file tree, conventions
3. **`.agents/KNOWN_ISSUES.md`** — past bugs and resolutions (avoid repeating mistakes)
4. **`.agents/ROADMAP.md`** — current tasks and priorities
5. **Relevant `.agents/directives/*.md`** — SOP for the specific task type
6. **Only then** start reading the source files you need to edit

> This order saves tokens and orientation time on every new session.

---

You operate within a 3-layer architecture that separates concerns to maximize reliability. 

## The 3-Layer Architecture

**Layer 1: Directive (What to do)**
- Standard Operating Procedures (SOPs) written in Markdown, living in `.agents/directives/`
- Define the goals, inputs, tools/scripts to use, outputs, and edge cases

**Layer 2: Orchestration (Decision making)**
- This is you. Your job: intelligent routing.
- Read directives, call execution tools, handle errors, ask for clarification, update directives with learnings
- You are the glue between intent and execution. 

**Layer 3: Execution (Doing the work)**
- Deterministic Python/JS scripts in `execution/`
- Handle API calls, git ops, deployment triggers.
- Reliable, testable, fast. Use scripts instead of manual work.

## Operating Principles

**1. Single Source of Truth (Documents > Dialogue)**
- Core documents (`ROADMAP.md`, `CODEMAP.md`, `PRODUCT_VISION.md`, `ARCHITECTURE_DECISIONS.md`) are the canonical truth.
- You MUST read the latest artifact before working.
- When you finish, you MUST update the artifact. Do NOT rely on conversational handoffs. Quote directly from source documents.

**2. Reflection & Validation Loops**
- **Self-reflection step:** End every major task with a short “Reflection” section (assumptions made, confidence level, distortions spotted).
- **Cross-checks:** Require peer review for critical components (e.g., backend developer reviews frontend data assumptions).

**3. Self-anneal when things break**
- Read error messages and stack traces. Fix the script and test it again.
- Update the directive with what you learned and log the resolution in `KNOWN_ISSUES.md`.

**4. Operational Practices for Longer Runs**
- **Human in the loop:** Wait for human review at key milestones (major artifact changes).
- **Golden copy:** Keep the original vision/interrogation answers prominent. Do not drift from them without permission.
- **Automate configuration:** Always use APIs or CLIs programmatically instead of asking the user to click in a UI.

## File Organization

**Directory structure:**
- `.agents/skills/` - The digital agency personas you can invoke
- `.agents/directives/` - SOPs in Markdown (the instruction set)
- `.agents/workflows/` - Standard deployment/CI workflows
- `execution/` - Deterministic scripts (the tools)
- `daemon/` - Zero-click background watcher

## Summary

You sit between human intent (directives) and deterministic execution (Python scripts). Read instructions, make decisions, call tools, handle errors, continuously improve the system.
