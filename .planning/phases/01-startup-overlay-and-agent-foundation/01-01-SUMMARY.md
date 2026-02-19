---
phase: 01-startup-overlay-and-agent-foundation
plan: 01
subsystem: compliance
tags: [sdlc, startup-overlay, iso-27001, iso-42001, tisax, risk-management, per-control-mapping]

# Dependency graph
requires:
  - phase: none
    provides: "First plan in first phase -- no dependencies"
provides:
  - "SDLC-Startup-v2.md sections 1-8: per-control mapping of SDLC-Growth-v2 to Startup/Growth/Enterprise phases"
  - "Patent-sensitive artifact handling protocol aligned with TISAX ISA Chapter 7"
  - "6 human + 7 agent role mapping table with trust levels and supervisors"
  - "Simplified IEA component mapping (9 v2 components to Startup equivalents)"
affects: [01-03-PLAN (completes sections 9-18), 01-04-PLAN (RACI matrix references role mapping), phase-02 (CISO agent uses overlay as scope constraint)]

# Tech tracking
tech-stack:
  added: []
  patterns: [per-control-mapping-tables, v2-cross-reference-format, startup-implementation-plus-growth-trigger-pattern]

key-files:
  created: [SDLC-Startup-v2.md]
  modified: []

key-decisions:
  - "All 12 governing principles apply in spirit from day one; 8 fully, 3 simplified, 1 (radical traceability) deferred to Growth"
  - "CEO accepts all High/Critical residual risk at Startup (not CTO/CISO split as in v2)"
  - "7 agents start at Trust Level 2 (Supervised Autonomous); promotion to Level 3 requires 30+ interactions and CEO approval"
  - "IEA maps to PR-based workflow at Startup: agents produce in branches, humans review and merge"
  - "Focus on 4-5 core ISO standards at Startup (27001, 42001, 31000, 23894, 22989); defer 21+ others"
  - "Simplified risk register schema in YAML-in-Git with ~15 fields (not 50+ field full schema)"

patterns-established:
  - "Per-control mapping format: table (Item, v2 Reference, Phase, Justification) + Startup Implementation paragraph + Growth Trigger paragraph"
  - "Cross-reference convention: SDLC Growth Sec. X.Y.Z for all SDLC-Growth-v2 section references"
  - "Phase assignment categories: Startup (apply now), Startup (simplified), Growth, Enterprise"
  - "Patent-sensitive artifact handling: reference-by-ID-only, separate repo, TISAX Chapter 7 alignment"

requirements-completed: []

# Metrics
duration: 8min
completed: 2026-02-19
---

# Phase 1 Plan 01: Startup SDLC Companion Document (Sections 1-8) Summary

**Per-control mapping of SDLC-Growth-v2 sections 1-8 to Startup/Growth/Enterprise phases with 250 cross-references, patent handling protocol, and 6+7 role mapping**

## Performance

- **Duration:** 8 min
- **Started:** 2026-02-19T00:23:26Z
- **Completed:** 2026-02-19T00:31:47Z
- **Tasks:** 2
- **Files modified:** 1

## Accomplishments
- Created SDLC-Startup-v2.md with document header, patent-sensitive handling section, and full TOC for all 18 v2 sections
- Mapped sections 1-4 (Purpose, Strategy, Principles, Adoption Model) at per-control granularity with 115 cross-references
- Mapped sections 5-8 (Risk Management, UCL, Organizational Model, Intent-Execution Architecture) with 135 additional cross-references
- Produced role mapping table: 6 humans (CEO, Strategy Partner, Finance SM, IT Pentester, CTO, CISO) to 7 agents with trust levels and human supervisors
- Produced IEA component mapping: 9 v2 components mapped to Startup equivalents (agents, PR review, CI/CD, Git history)

## Task Commits

Each task was committed atomically:

1. **Task 1: Create companion document header and sections 1-4** - `62dd79b` (feat)
2. **Task 2: Map SDLC-Growth-v2 sections 5-8 to Startup/Growth/Enterprise** - `8c674b5` (feat)

## Files Created/Modified
- `SDLC-Startup-v2.md` - Startup SDLC companion document covering sections 1-8 with per-control mappings (760 lines, 250 cross-references, 269 table rows)

## Decisions Made
- **Governing principles:** All 12 apply in spirit; Principles 1, 2, 4, 7, 8, 10, 11, 12 fully; Principles 3, 5, 6 simplified; Principle 9 (Radical Traceability) deferred to Growth
- **Risk acceptance authority:** CEO accepts High/Critical residual risk (not CTO/CISO dual authority as v2 specifies) because CEO covers CISO responsibilities at Startup
- **Agent trust levels:** All 7 agents start at Trust Level 2 (Supervised Autonomous). This is conservative; v2 allows Level 3 for some roles but the team has no performance data yet
- **IEA at Startup:** The 9-component IEA collapses to PR-based workflow. Trust promotion = PR review cycle. Git history = verification & attestation
- **Standards focus:** 8-9 standards/frameworks for Startup certification scope; 21+ deferred to Growth/Enterprise
- **Risk register schema:** Simplified to ~15 essential fields. Full 50+ field schema deferred to Growth
- **UCL scope:** Tier 1 canonical controls only (~140). Tier 2 (framework-specific) and Tier 3 (entity-specific) deferred

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- SDLC-Startup-v2.md sections 1-8 complete, ready for Plan 01-03 to append sections 9-18
- Role mapping table in Section 7.2 provides input for RACI matrix in Plan 01-04
- All phase assignments and justifications established as the baseline for downstream agents

## Self-Check: PASSED

- SDLC-Startup-v2.md: FOUND
- 01-01-SUMMARY.md: FOUND
- Commit 62dd79b (Task 1): FOUND
- Commit 8c674b5 (Task 2): FOUND

---
*Phase: 01-startup-overlay-and-agent-foundation*
*Completed: 2026-02-19*
