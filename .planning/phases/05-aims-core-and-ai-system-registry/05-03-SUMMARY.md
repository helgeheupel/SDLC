---
phase: 05-aims-core-and-ai-system-registry
plan: 03
subsystem: compliance
tags: [iso-42001, annex-a, soa, aims, yaml, js-yaml, consolidation-script]

# Dependency graph
requires:
  - phase: 02-ciso-agent-and-is-ai-policy-foundation
    provides: "AI Policy (HH-AIMS-POL-001), IMS Context (HH-IMS-CTX-001)"
  - phase: 03-risk-framework-and-statement-of-applicability
    provides: "ISO 27001 SoA pattern (per-control YAML), consolidation script pattern, risk register"
provides:
  - "38 ISO 42001 Annex A per-control YAML files with applicability assessment"
  - "ISO 27001 bidirectional cross-reference mappings (62 references)"
  - "AIMS SoA consolidation script (generate-aims-soa.js)"
  - "Generated AIMS-SoA-Consolidated.md (HH-AIMS-SOA-001)"
affects: [05-aims-core-and-ai-system-registry, 07-operational-controls, 08-audit-evidence]

# Tech tracking
tech-stack:
  added: [js-yaml (aims-soa/scripts)]
  patterns: [per-control-yaml-42001, aims-soa-consolidation, multi-level-control-id-sort]

key-files:
  created:
    - "aims-soa/42001-A.2.2.yml through 42001-A.10.4.yml (38 files)"
    - "aims-soa/scripts/generate-aims-soa.js"
    - "aims-soa/scripts/package.json"
    - "aims-soa/AIMS-SoA-Consolidated.md"
  modified: []

key-decisions:
  - "38 actual Annex A controls (research stated 39 but enumeration yields 38); all controls from all 9 groups present"
  - "100% applicability: all 38 controls applicable at Startup with varying implementation status"
  - "Separate consolidation script in aims-soa/scripts/ (not extending soa/scripts/) to avoid risking ISO 27001 SoA generation"
  - "A.5.2-A.5.5 explicitly documented with 'No direct ISO 27001 equivalent' for impact assessment controls"

patterns-established:
  - "Per-control YAML for ISO 42001 with group/group-name/group-objective fields (extends ISO 27001 SoA pattern)"
  - "iso27001-mapping field with specific relationship descriptions for bidirectional traceability"
  - "ai-system-references field linking controls to AI System Registry entries"
  - "Multi-level numeric sort for control IDs handling A.6.1.2 vs A.6.2.3 subgroup structure"

requirements-completed: [AIMS-05]

# Metrics
duration: 10min
completed: 2026-02-22
---

# Phase 5 Plan 3: ISO 42001 Annex A Control Mapping Summary

**38 per-control YAML files for ISO 42001 Annex A with ISO 27001 cross-references, HH-specific implementation approaches, and a consolidation script generating auditor-facing AIMS SoA document (HH-AIMS-SOA-001)**

## Performance

- **Duration:** 10 min
- **Started:** 2026-02-21T23:50:19Z
- **Completed:** 2026-02-22T00:01:13Z
- **Tasks:** 2
- **Files modified:** 41 (38 control YAMLs + script + package.json + consolidated doc)

## Accomplishments
- Created 38 ISO 42001 Annex A per-control YAML files across 9 groups (A.2 through A.10) with HH-specific applicability assessments, implementation approaches, evidence references, and AI system linkages
- Established 62 bidirectional ISO 27001 cross-reference mappings with specific relationship descriptions enabling integrated audit traceability
- Built a separate AIMS SoA consolidation script that generates a 14-section auditor-facing document with group tables, cross-reference matrix, and risk-to-control traceability
- Verified ISO 27001 SoA generation (soa/scripts/generate-soa.js) remains completely unaffected

## Task Commits

Each task was committed atomically:

1. **Task 1: Create 38 ISO 42001 Annex A per-control YAML files** - `711137d` (feat)
2. **Task 2: Create AIMS SoA consolidation script and generate consolidated document** - `685fb79` (feat)

## Files Created/Modified

### Task 1 (38 files)
- `aims-soa/42001-A.2.2.yml` through `aims-soa/42001-A.2.4.yml` -- AI policy controls
- `aims-soa/42001-A.3.2.yml` through `aims-soa/42001-A.3.3.yml` -- Internal organization controls
- `aims-soa/42001-A.4.2.yml` through `aims-soa/42001-A.4.6.yml` -- Resources for AI systems controls
- `aims-soa/42001-A.5.2.yml` through `aims-soa/42001-A.5.5.yml` -- Impact assessment controls (no ISO 27001 equivalent)
- `aims-soa/42001-A.6.1.2.yml` through `aims-soa/42001-A.6.2.8.yml` -- AI system lifecycle controls (9 controls across 2 subgroups)
- `aims-soa/42001-A.7.2.yml` through `aims-soa/42001-A.7.6.yml` -- Data for AI systems controls
- `aims-soa/42001-A.8.2.yml` through `aims-soa/42001-A.8.5.yml` -- Information for interested parties controls
- `aims-soa/42001-A.9.2.yml` through `aims-soa/42001-A.9.4.yml` -- Use of AI systems controls
- `aims-soa/42001-A.10.2.yml` through `aims-soa/42001-A.10.4.yml` -- Third-party and customer controls

### Task 2 (3 files)
- `aims-soa/scripts/generate-aims-soa.js` -- AIMS SoA consolidation script with multi-level control ID sorting
- `aims-soa/scripts/package.json` -- Node.js package with js-yaml dependency
- `aims-soa/AIMS-SoA-Consolidated.md` -- Generated auditor-facing document (HH-AIMS-SOA-001)

## Decisions Made

1. **38 controls, not 39:** The research stated "39 controls verified from standard PDF" but the actual enumeration from Pattern 3 yields 38 controls across 9 groups. All controls from every group are present. The discrepancy is a counting error in the research text.

2. **100% applicability:** All 38 controls assessed as applicable to the Helge Heupel Group at Startup. Even controls with minimal current implementation (e.g., A.7.6 Data preparation for agents) are marked applicable because they are relevant to the AIMS scope, with implementation status reflecting the Startup reality (planned/partially-implemented).

3. **Separate script, not extension:** Created aims-soa/scripts/generate-aims-soa.js as a standalone script rather than extending soa/scripts/generate-soa.js. This follows the research's recommended Option A to avoid risking the working ISO 27001 script.

4. **Implementation status distribution:** 10 fully-implemented (policy, roles, responsible use), 22 partially-implemented (monitoring, documentation, supplier governance), 6 planned (impact assessment documentation, data quality, customer governance). This reflects honest Startup reality.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Control count: 38 instead of stated 39**
- **Found during:** Task 1 (control enumeration)
- **Issue:** Plan verification said "expect 39" based on research, but the actual enumeration of all control IDs from all 9 groups yields 38
- **Fix:** Created all 38 controls from the complete enumeration; updated script output and summary to reflect accurate count
- **Verification:** All controls from A.2.2 through A.10.4 are present; every group has the correct number of controls per Pattern 3
- **Committed in:** 711137d (Task 1 commit)

---

**Total deviations:** 1 auto-fixed (1 bug)
**Impact on plan:** Minor counting discrepancy. All actual ISO 42001 Annex A controls are present. No scope creep.

## Issues Encountered
None beyond the control count discrepancy noted above.

## User Setup Required
None -- no external service configuration required.

## Next Phase Readiness
- AIMS SoA is ready for integrated audit review alongside ISO 27001 SoA
- ISO 27001 cross-reference matrix (62 mappings) enables bidirectional traceability
- Plan 05-04 (AIMS PDCA) can reference the AIMS SoA for control coverage verification
- Risk-to-control traceability (19 risks, 76 references) connects to Phase 3 risk register
- AI system references in each control connect to AI System Registry (Plan 05-01)

---
*Phase: 05-aims-core-and-ai-system-registry*
*Completed: 2026-02-22*
