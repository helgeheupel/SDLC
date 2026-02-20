---
phase: 03-risk-framework-and-statement-of-applicability
plan: 04
subsystem: compliance
tags: [iso-27001, annex-a, soa, statement-of-applicability, yaml, js-yaml, node]

# Dependency graph
requires:
  - phase: 02-ciso-agent-and-is-ai-policy-foundation
    provides: "IS Policy, AI Policy, IMS Context, Document Control Framework, Document Register"
provides:
  - "93 per-control YAML SoA files covering all ISO 27001:2022 Annex A controls"
  - "Consolidation script generating auditor-facing SoA document from per-control files"
  - "Generated SoA-Consolidated.md (HH-ISMS-SOA-001) with summary statistics and risk traceability"
affects: [phase-05-aims-core, phase-07-operational-controls, phase-10-audit-readiness]

# Tech tracking
tech-stack:
  added: [js-yaml]
  patterns: [per-control-yaml-soa, yaml-to-markdown-generation, shared-responsibility-justification]

key-files:
  created:
    - "soa/A.5.1.yml through soa/A.5.37.yml (37 organizational controls)"
    - "soa/A.6.1.yml through soa/A.6.8.yml (8 people controls)"
    - "soa/A.7.1.yml through soa/A.7.14.yml (14 physical controls)"
    - "soa/A.8.1.yml through soa/A.8.34.yml (34 technological controls)"
    - "soa/scripts/generate-soa.js"
    - "soa/scripts/package.json"
    - "soa/SoA-Consolidated.md"
  modified: []

key-decisions:
  - "7 physical controls marked not-applicable (A.7.1-A.7.3, A.7.5-A.7.6, A.7.11-A.7.12) with Azure shared responsibility justification; 7 marked applicable conservatively"
  - "Risk references left as provisional -- populated where obvious (10 risk IDs across 22 control references), remainder to be cross-referenced after risk workshop"
  - "Consolidation script uses yaml.loadAll() to handle front-matter style YAML with trailing document separator"

patterns-established:
  - "Per-control YAML SoA pattern: one file per Annex A control with standardized schema (control-id, control-name, theme, applicable, justification, implementation-status, evidence-references, risk-references, responsible-role, last-assessed)"
  - "Cloud-only physical control justification pattern: 3-4 sentence justification referencing Azure shared responsibility model with SOC 2 and ISO 27001 attestation evidence"
  - "SoA generation pipeline: per-control YAML files -> consolidation script -> single Markdown document with frontmatter, statistics, per-theme tables, and risk traceability"

requirements-completed: [ISMS-03]

# Metrics
duration: 11min
completed: 2026-02-20
---

# Phase 3 Plan 04: Statement of Applicability Summary

**93 per-control YAML SoA files covering all ISO 27001:2022 Annex A controls with consolidation script generating auditor-facing document (HH-ISMS-SOA-001)**

## Performance

- **Duration:** 11 min
- **Started:** 2026-02-20T05:08:24Z
- **Completed:** 2026-02-20T05:19:40Z
- **Tasks:** 2
- **Files created:** 96 (93 YAML + script + package.json + SoA-Consolidated.md)

## Accomplishments

- Created 93 per-control YAML files covering all ISO 27001:2022 Annex A controls (37 organizational, 8 people, 14 physical, 34 technological)
- Assessed 86 controls as applicable and 7 physical controls as not-applicable with substantive Azure shared responsibility justifications
- Mapped implementation status: 12 fully implemented, 43 partially implemented, 31 planned, 7 not started
- Built consolidation script (generate-soa.js) that reads all per-control YAML files and generates a single auditor-facing Markdown document
- Generated SoA-Consolidated.md (HH-ISMS-SOA-001) with 8 sections including introduction, summary statistics, per-theme tables, risk-to-control traceability, and CEO sign-off placeholder

## Task Commits

Each task was committed atomically:

1. **Task 1: Create organizational and people control SoA files (A.5.1-A.5.37, A.6.1-A.6.8)** - `28be97a` (feat)
2. **Task 2: Create physical/technological controls, consolidation script, and generated SoA** - `34755e0` (feat)

## Files Created/Modified

- `soa/A.5.1.yml` through `soa/A.5.37.yml` - 37 organizational control assessments
- `soa/A.6.1.yml` through `soa/A.6.8.yml` - 8 people control assessments
- `soa/A.7.1.yml` through `soa/A.7.14.yml` - 14 physical control assessments (7 applicable, 7 not-applicable)
- `soa/A.8.1.yml` through `soa/A.8.34.yml` - 34 technological control assessments
- `soa/scripts/generate-soa.js` - Consolidation script generating SoA-Consolidated.md from per-control YAML
- `soa/scripts/package.json` - js-yaml dependency for consolidation script
- `soa/SoA-Consolidated.md` - Generated auditor-facing consolidated SoA document (HH-ISMS-SOA-001)

## Decisions Made

- **Physical control applicability split (7/7):** Marked A.7.1, A.7.2, A.7.3, A.7.5, A.7.6, A.7.11, A.7.12 as not-applicable (cloud-only, no premises). Conservatively kept A.7.4, A.7.7, A.7.8, A.7.9, A.7.10, A.7.13, A.7.14 as applicable (remote worker endpoint and lifecycle controls). This follows the plan guidance and research recommendation for conservative cloud-only assessment.
- **Provisional risk references:** Populated risk-to-control references where the mapping was obvious (RISK-REG-001 for A.5.1/A.5.31, RISK-SEC-001/002 for access controls, RISK-SUP-001 for supplier controls, etc.). Left as empty arrays where the mapping requires risk workshop output. 10 risk IDs mapped across 22 control references.
- **Implementation status calibration:** Used fully-implemented for controls directly satisfied by Phase 2 artifacts (IS Policy, AI Policy, Document Control, Governance Model). Used partially-implemented where Azure-native capabilities exist but formal documentation is pending. Used planned where future SDLC phases (4, 5, 7, 10) will address the control.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Fixed YAML multi-document parsing in consolidation script**
- **Found during:** Task 2 (consolidation script execution)
- **Issue:** YAML files use front-matter pattern with `---` at both start and end, causing `yaml.load()` to throw "expected a single document" error
- **Fix:** Changed to `yaml.loadAll()` with callback to extract the first document
- **Files modified:** soa/scripts/generate-soa.js
- **Verification:** Script runs successfully, generates correct output with 93 controls
- **Committed in:** 34755e0 (Task 2 commit)

**2. [Rule 1 - Bug] Fixed missing shared responsibility reference in A.7.6**
- **Found during:** Task 2 verification
- **Issue:** A.7.6 justification referenced "Microsoft's responsibility" but did not explicitly use "shared responsibility model" phrasing
- **Fix:** Added "under the shared responsibility model, evidenced by Azure ISO 27001 certification and SOC 2 Type II attestation"
- **Files modified:** soa/A.7.6.yml
- **Verification:** All 7 NA controls confirmed to reference shared responsibility model
- **Committed in:** 34755e0 (Task 2 commit)

**3. [Rule 1 - Bug] Fixed section numbering in consolidated SoA**
- **Found during:** Task 2 verification
- **Issue:** Theme sections all numbered "## 3." instead of sequential 3-6
- **Fix:** Added sectionNum counter incrementing per theme
- **Files modified:** soa/scripts/generate-soa.js
- **Verification:** Generated document has correctly numbered sections 1-8
- **Committed in:** 34755e0 (Task 2 commit)

---

**Total deviations:** 3 auto-fixed (3 bugs)
**Impact on plan:** All fixes necessary for correctness. No scope creep.

## Issues Encountered
None beyond the auto-fixed items above.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness

- SoA is ready for auditor review once CEO signs off (CEO-SIGNOFF-REQUIRED placeholder in document)
- Risk-to-control traceability section will be populated after risk workshop (Plan 03-03)
- ISO 42001 SoA (separate from this ISO 27001 SoA) is deferred to Phase 5 per locked decision
- The consolidation script can be re-run at any time to regenerate the document after control updates: `cd soa/scripts && node generate-soa.js`

## Self-Check: PASSED

All files verified present. Both task commits verified in git log.

---
*Phase: 03-risk-framework-and-statement-of-applicability*
*Completed: 2026-02-20*
