---
phase: 07-operational-controls
plan: 04
subsystem: compliance
tags: [iso-27001, iso-42001, internal-audit, management-review, ims, clause-9]

# Dependency graph
requires:
  - phase: 02-ciso-agent-and-is-ai-policy-foundation
    provides: IS Policy (HH-ISMS-POL-001), IMS Context (HH-IMS-CTX-001)
  - phase: 03-risk-framework-and-statement-of-applicability
    provides: SoA ISO 27001 (HH-ISMS-SOA-001), SoA ISO 42001 (HH-AIMS-SOA-001)
  - phase: 05-ai-registry-and-aims-controls
    provides: AI System Registry, AIMS SoA, AI Risk Assessment Procedure
provides:
  - "HH-ISMS-PROC-007 Internal Audit Program covering 124 applicable controls (ISMS + AIMS)"
  - "HH-ISMS-PROC-008 Management Review Procedure with combined IMS minutes template"
affects: [08-testing-and-certification-readiness, 09-integration-and-grc-platform, 10-continuous-improvement]

# Tech tracking
tech-stack:
  added: []
  patterns: [decision-tree-procedure, combined-ims-review, independence-boundary-flagging]

key-files:
  created:
    - procedures/internal-audit.md
    - procedures/management-review.md
  modified: []

key-decisions:
  - "124 applicable controls in audit universe (86 ISMS + 38 AIMS) assessed in single combined IMS audit"
  - "Annual audit cycle with full-scope first audit before Stage 1; focused audits (minimum 50%) in subsequent years"
  - "Evidence Source flags (CISO-AGENT/SYSTEM/HUMAN) in audit checklist for NorthGRC independence boundary"
  - "IMS Composite Index (70% threshold with zero Major NCs) as Stage 1 readiness target"
  - "Quarterly full IMS review (Jan/Apr/Jul/Oct) + monthly action tracking at Monthly Strategic meeting"
  - "Combined IMS minutes template: 7 ISMS inputs (a-g) + 6 AIMS inputs (AI-1 to AI-6) + 3 mandatory outputs"

patterns-established:
  - "Independence boundary pattern: evidence source classification (CISO-AGENT/SYSTEM/HUMAN) marking AI-produced artifacts for independent verification"
  - "Combined IMS review pattern: single meeting covers both ISO 27001 cl. 9.3 and ISO 42001 cl. 9.3 with additive AIMS inputs"
  - "NCR-based corrective action tracking: audits/NCR-{YYYY}-{NNN}.md with YAML frontmatter and structured fields"

requirements-completed: [ISMS-07, ISMS-08]

# Metrics
duration: 6min
completed: 2026-02-25
---

# Phase 7 Plan 4: Internal Audit and Management Review Summary

**Internal audit program (HH-ISMS-PROC-007) with NorthGRC independence and CISO Agent evidence-source flagging, plus management review procedure (HH-ISMS-PROC-008) with combined IMS minutes template covering all ISO 27001 + ISO 42001 cl. 9.3 mandatory inputs**

## Performance

- **Duration:** 6 min
- **Started:** 2026-02-25T12:05:45Z
- **Completed:** 2026-02-25T12:11:45Z
- **Tasks:** 2
- **Files created:** 2

## Accomplishments
- Internal audit program covering 124 applicable controls (86 ISMS + 38 AIMS) with NorthGRC as independent lead auditor
- Evidence Source classification (CISO-AGENT/SYSTEM/HUMAN) ensures independence boundary: AI-produced artifacts flagged for NorthGRC independent verification
- Management review procedure maps Monthly Strategic meeting as review vehicle with quarterly full IMS review and monthly action tracking
- Combined IMS minutes template satisfying both ISO 27001 cl. 9.3 AND ISO 42001 cl. 9.3 in a single document

## Task Commits

Each task was committed atomically:

1. **Task 1: Create Internal Audit Program (HH-ISMS-PROC-007)** - `5571e0d` (feat)
2. **Task 2: Create Management Review Procedure (HH-ISMS-PROC-008)** - `3ff1075` (feat)

## Files Created/Modified
- `procedures/internal-audit.md` - HH-ISMS-PROC-007: Internal audit program with decision-tree structure, NorthGRC independence, audit checklist template with evidence source flags, finding classification (0-3 scoring), NCR-based corrective action tracking
- `procedures/management-review.md` - HH-ISMS-PROC-008: Management review procedure with quarterly full IMS review + monthly action tracking, all 13 mandatory inputs (7 ISMS + 6 AIMS), structured minutes template, mandatory output documentation

## Decisions Made
- Combined audit scope of 124 applicable controls (86 ISMS + 38 AIMS) assessed in single IMS audit engagement
- Three-category evidence source classification (CISO-AGENT/SYSTEM/HUMAN) provides clear independence boundary for NorthGRC
- IMS Composite Index above 70% with zero Major Nonconformities recommended as Stage 1 readiness threshold
- Quarterly depth escalation pattern: full cl. 9.3 review in Jan/Apr/Jul/Oct, action-only tracking in other months
- NCR files stored as YAML-frontmatter Markdown in `audits/NCR-{YYYY}-{NNN}.md` consistent with Git-based document control

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- All 8 operational procedures now complete (PROC-001 through PROC-008)
- Internal audit program references SoA data for full checklist generation before Stage 1
- Management review minutes template ready for first quarterly IMS review
- Cross-references between all 8 procedures establish complete operational procedure framework
- Phase 7 planning may be fully complete; verify with remaining plans if any

## Self-Check: PASSED

All artifacts verified:
- procedures/internal-audit.md: EXISTS, contains document-id: HH-ISMS-PROC-007
- procedures/management-review.md: EXISTS, contains document-id: HH-ISMS-PROC-008
- Commit 5571e0d: EXISTS (Task 1)
- Commit 3ff1075: EXISTS (Task 2)

---
*Phase: 07-operational-controls*
*Completed: 2026-02-25*
