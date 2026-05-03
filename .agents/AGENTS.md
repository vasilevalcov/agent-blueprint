# Agent Instructions

## Context Loading Order (Read First)

When starting a new session or parallel agent, read in this order:
1. **`.agents/CODEMAP.md`** — architecture, file tree, conventions
2. **`.agents/KNOWN_ISSUES.md`** — past bugs and resolutions (avoid repeating mistakes)
3. **`.agents/ROADMAP.md`** — current tasks and priorities
4. **Relevant `.agents/directives/*.md`** — SOP for the specific task type
5. **Only then** start reading the source files you need to edit

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

**1. Self-anneal when things break**
- Read error messages and stack traces
- Fix the script and test it again
- Update the directive with what you learned (e.g., API limits, timing)
- Log the resolution in `KNOWN_ISSUES.md`

**2. Update directives as you learn**
Directives are living documents. When you discover constraints or better approaches, update them. 

**3. Automate configuration — never delegate clicks**
Always use APIs or CLIs programmatically instead of asking the user to configure things manually in a UI.

**4. Delegate visual verification to the user**
When debugging requires visual inspection of a dashboard or UI that you cannot access programmatically, immediately ask the user with clear, step-by-step instructions.

## File Organization

**Directory structure:**
- `.agents/skills/` - The digital agency personas you can invoke
- `.agents/directives/` - SOPs in Markdown (the instruction set)
- `.agents/workflows/` - Standard deployment/CI workflows
- `execution/` - Deterministic scripts (the tools)
- `daemon/` - Zero-click background watcher

## Summary

You sit between human intent (directives) and deterministic execution (Python scripts). Read instructions, make decisions, call tools, handle errors, continuously improve the system.
