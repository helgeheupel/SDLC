---
phase: 03-risk-framework-and-statement-of-applicability
plan: 01
subsystem: compliance
tags: [risk-assessment, iso-27001, iso-42001, iso-31000, yaml, 5x5-matrix]

# Dependency graph
requires:
  - phase: 02-ciso-agent-and-is-ai-policy-foundation
    provides: "IS Policy (HH-ISMS-POL-001) with risk appetite, governance model (HH-GOV-Startup-v1.0) with risk-tiered escalation"
provides:
  - "Risk assessment methodology document (HH-ISMS-RMA-001) with calibrated 5x5 matrix"
  - "Risk register YAML schema (~15 core fields + lifecycle metadata)"
  - "7-category risk taxonomy (OPS, SEC, AI, REG, PPL, SUP, STR) with ID convention"
  - "Workshop protocol with 4-hour agenda and evidence requirements"
  - "Risk treatment framework (Avoid/Modify/Share/Retain) mapped to Annex A"
affects: [03-02, 03-03, 03-04, 05-aims-core]

# Tech tracking
tech-stack:
  added: [yaml-risk-schema]
  patterns: [per-file-yaml-risk-register, category-prefixed-risk-ids, risk-tiered-escalation]

key-files:
  created:
    - risks/methodology/risk-assessment-methodology.md
  modified: []

key-decisions:
  - "22 total YAML fields (15 core + 15 lifecycle) to balance ~15 target with necessary metadata"
  - "Risk Level 5 (Severe/Existential) calibrated to HH business survival: >EUR 250K, >14d disruption, certification loss"
  - "AI risks get 5th impact dimension (Individual/Society) per ISO 42001 cl. 6.1.2(d)(1)"
  - "Dual residual risk acceptance mechanism: Git PR workflow + formal summary document"

patterns-established:
  - "Per-file YAML risk entries at risks/RISK-{CAT}-{NNN}.yml"
  - "Risk ID convention: RISK-{CATEGORY}-{NNN} with sequential numbering within categories"
  - "Risk methodology as single Markdown document with YAML frontmatter for document control"

requirements-completed: [ISMS-04]

# Metrics
duration: 4min
completed: 2026-02-20
---

# Phase 03 Plan 01: Risk Assessment Methodology Summary

**Calibrated 5x5 risk matrix with time-based likelihood, HH business-survival impact scales, 7-category taxonomy, YAML risk register schema, and ISO 42001 AI risk dimension**

## Performance

- **Duration:** 4 min
- **Started:** 2026-02-20T05:08:30Z
- **Completed:** 2026-02-20T05:12:30Z
- **Tasks:** 1
- **Files modified:** 1

## Accomplishments

- Created comprehensive risk assessment methodology document (HH-ISMS-RMA-001) with all 12 required sections
- Defined calibrated 5x5 likelihood/impact matrix with HH-specific thresholds -- Level 5 = existential threat
- Documented complete YAML risk register schema with ~15 core assessment fields and annotated example
- Established 7-category flat risk taxonomy with category-prefixed IDs and sequential numbering
- Included 4-hour workshop protocol with pre-workshop preparation, 6-block agenda, and evidence requirements
- Addressed ISO 42001 cl. 6.1.2(d)(1) with dedicated Individual/Society impact dimension for AI risks
- Cross-referenced IS Policy (HH-ISMS-POL-001) risk appetite and governance model (HH-GOV-Startup-v1.0) escalation

## Task Commits

Each task was committed atomically:

1. **Task 1: Create risk assessment methodology document with calibrated 5x5 matrix and YAML schema** - `dd86d11` (feat)

## Files Created/Modified

- `risks/methodology/risk-assessment-methodology.md` - Complete risk assessment methodology (541 lines) covering 12 sections: Purpose/Scope, Risk Assessment Process, Likelihood Scale, Impact Scale, Risk Matrix, Category Taxonomy, Risk Appetite, Risk Register Schema, Treatment Framework, Register Lifecycle, Workshop Protocol, Document Control

## Decisions Made

- **Schema field count:** 22 total fields (15 core + 15 lifecycle metadata) slightly above ~15 target. The core assessment fields count is exactly 15; lifecycle metadata fields are empty until workshop and review cycles populate them. This balances the Phase 1 decision with practical auditability needs.
- **AI impact dimension:** Added a 5th impact dimension (Individual/Society) for AI risks, ranging from "No individual impact" (1) to "Widespread discriminatory or harmful impact" (5). This applies only when `ai-risk: true`.
- **Dual risk acceptance mechanism:** Both Git PR workflow (working process) and formal summary document (auditor package) documented per locked decision.

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- Risk assessment methodology is ready for CISO Agent to pre-seed 30-50 risks (Plan 03-02)
- Workshop participants can use this document to understand rating criteria (Plan 03-03)
- YAML schema is defined and ready for risk file creation
- ISO 27001 auditor can verify cl. 6.1.2 compliance from this document
- SoA work (Plan 03-04) can reference the treatment-controls schema for bidirectional traceability

## Self-Check: PASSED

- FOUND: risks/methodology/risk-assessment-methodology.md
- FOUND: commit dd86d11

---
*Phase: 03-risk-framework-and-statement-of-applicability*
*Completed: 2026-02-20*
