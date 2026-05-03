# Project Roadmap & Issue Tracker

This file serves as the local issue tracker for the project. The `agency-project-manager` agent is responsible for maintaining this file, prioritizing tasks, and dispatching work to the zero-click daemon.

## Pending Tasks (Queue)

### [ ] TASK-001: Example High Priority Bug Fix
**Priority:** High
**Description:** Example description of the task.
**Agent Instructions:** Use `agency-frontend-developer` to fix the layout issue on the main screen.
**Status:** Waiting for human approval or agent pickup.

### [ ] TASK-002: Example Low Priority Task
**Priority:** Low
**Description:** Update a specific string in the UI.
**Agent Instructions:** Mark with `[x] Queue for Builder` for the daemon to pick up.
**Status:** Ready.

---

## Daemon Queue

*Tasks marked with `[x] Queue for Builder` will be automatically picked up by the `watcher.js` daemon running in the background. The daemon will parse this file, build the change, and automatically merge it.*

### [x] Queue for Builder: Update Readme text
**Priority:** Low
**Description:** Minor typo fix in the main README.

---

## Completed Tasks

*Tasks that have been verified and merged.*

- None yet.
