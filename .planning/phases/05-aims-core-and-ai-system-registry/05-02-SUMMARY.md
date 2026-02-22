---
phase: 05-aims-core-and-ai-system-registry
plan: 02
subsystem: compliance
tags: [iso-42001, iso-23894, iso-42005, ai-risk-assessment, ai-impact-assessment, aims, eu-ai-act]

# Dependency graph
requires:
  - phase: 03-risk-framework-and-statement-of-applicability
    provides: "Risk assessment methodology (HH-ISMS-RMA-001) with 5x5 matrix, risk register schema, and treatment framework"
  - phase: 02-ciso-agent-and-is-ai-policy-foundation
    provides: "AI Policy (HH-AIMS-POL-001) with dual-axis classification, prohibited practices, and governance principles"
provides:
  - "AI Risk Assessment Procedure (HH-AIMS-RMA-001) extending Phase 3 methodology for AI-specific risk sources, 5th impact dimension, and ISO 42001 Annex A control mapping"
  - "AI Impact Assessment Procedure (HH-AIMS-AIA-001) following ISO 42005 framework with 6 measurable impact dimensions, thresholds, and worked example"
  - "procedures/ directory established for formal procedure documents"
affects: [05-01-ai-system-registry, 05-03-annex-a-controls, 05-04-pdca-documentation, 07-operational-controls]

# Tech tracking
tech-stack:
  added: []
  patterns: [procedure-document-with-yaml-frontmatter, dual-axis-classification-decision-tree, impact-dimension-rating-scales]

key-files:
  created:
    - procedures/ai-risk-assessment-procedure.md
    - procedures/ai-impact-assessment-procedure.md
  modified: []

key-decisions:
  - "AI risk assessment extends (not replaces) Phase 3 methodology; single risk register with ai-risk: true tag"
  - "Individual/Society impact >= 4 always requires explicit CEO acceptance regardless of overall risk level"
  - "6 impact dimensions with specific measurable thresholds: fairness (0.8 disparate impact), safety (HITL gate), privacy (DPIA), transparency (Art. 50), environmental (per-inference documented), individual rights (no profiling without consent)"
  - "Limited-Risk focused assessment vs High-Risk full assessment differentiation documented but High-Risk not yet exercised at Startup"
  - "Worked example using CISO Agent (AI-AGENT-001) demonstrates complete Limited-Risk AIA process"

patterns-established:
  - "Procedure document structure: YAML frontmatter + numbered sections + appendix templates"
  - "Dual-axis classification decision tree: text-based flowchart format for classification process"
  - "Impact dimension rating scale: 1-5 per dimension with specific threshold triggers at each level"
  - "Worked example pattern: real HH system assessment demonstrating the procedure end-to-end"

requirements-completed: [AIMS-03, AIMS-04]

# Metrics
duration: 8min
completed: 2026-02-22
---

# Phase 5 Plan 02: AI Risk and Impact Assessment Procedures Summary

**Formal AI risk assessment procedure (ISO 23894 risk sources, dual-axis classification, 7-step process) and AI impact assessment procedure (ISO 42005-aligned, 6 measurable dimensions, worked CISO Agent example) extending Phase 3 methodology for ISO 42001 certification**

## Performance

- **Duration:** 8 min
- **Started:** 2026-02-21T23:50:16Z
- **Completed:** 2026-02-21T23:58:16Z
- **Tasks:** 2
- **Files created:** 2

## Accomplishments

- AI Risk Assessment Procedure (HH-AIMS-RMA-001) with 9 sections, 7 numbered assessment steps, 5 ISO 23894 risk source categories (25 HH-specific risk examples), dual-axis classification decision tree, RACI table, 3 appendix templates, and explicit Phase 3 methodology integration
- AI Impact Assessment Procedure (HH-AIMS-AIA-001) with 10 sections, 8 numbered ISO 42005-aligned steps, 6 impact dimensions with specific measurable thresholds, full vs. focused assessment differentiation, worked example for CISO Agent (AI-AGENT-001), and Startup simplification section
- Both procedures define event-driven AND annual periodic assessment triggers, link to the AI System Registry and risk register via document IDs, and are executable by CEO with CISO Agent support

## Task Commits

Each task was committed atomically:

1. **Task 1: Create AI Risk Assessment Procedure** - `0dc93b9` (feat)
2. **Task 2: Create AI Impact Assessment Procedure** - `4dba647` (feat)

## Files Created/Modified

- `procedures/ai-risk-assessment-procedure.md` - AI risk assessment procedure (HH-AIMS-RMA-001): 9 sections, 7 assessment steps, 5 ISO 23894 risk source categories, dual-axis classification, RACI table, 3 appendix templates
- `procedures/ai-impact-assessment-procedure.md` - AI impact assessment procedure (HH-AIMS-AIA-001): 10 sections, 8 ISO 42005-aligned steps, 6 impact dimensions with thresholds, worked example, Startup simplification

## Decisions Made

- **AI risk assessment extends Phase 3 methodology:** Single risk register, same 5x5 matrix, same treatment options, same CEO acceptance mechanism. The ai-risk: true tag activates the 5th impact dimension. No separate AI risk register.
- **Individual/Society >= 4 CEO threshold:** AI risks with Individual/Society impact dimension score >= 4 always require explicit CEO acceptance regardless of overall risk level, ensuring executive attention for risks with significant potential harm to individuals or society.
- **6 measurable impact dimensions with specific thresholds:** Fairness (disparate impact ratio >= 0.8), Safety (no autonomous decisions without HITL gate), Privacy (no special category data without DPIA), Transparency (all AI outputs identifiable per Art. 50), Environmental (energy per inference documented), Individual Rights (no profiling without consent).
- **Full vs. focused assessment differentiation:** Limited-Risk systems get focused assessment (transparency + individual impact focus). High-Risk systems get full assessment with all quantitative methods and external consultant review. High-Risk process documented but not yet exercised at Startup.
- **Worked example with real system:** CISO Agent (AI-AGENT-001) impact assessment demonstrates the complete Limited-Risk process with actual ratings and rationale, avoiding the anti-pattern of procedures without practical examples.

## Deviations from Plan

None -- plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None -- no external service configuration required.

## Next Phase Readiness

- Both procedures are ready for use by the AI System Registry (Plan 01) and ISO 42001 Annex A control mapping (Plan 03)
- Risk assessment procedure links to ISO 42001 Annex A controls (Step 6), enabling the AIMS SoA work in Plan 03
- Impact assessment procedure defines the process that the AI System Registry entries reference via `last-impact-assessment` date field
- Assessment triggers and roles are defined, ready for operationalization in Phase 7 (Operational Controls)

---
*Phase: 05-aims-core-and-ai-system-registry*
*Completed: 2026-02-22*
