---
phase: 03-risk-framework-and-statement-of-applicability
verified: 2026-02-20T08:00:00Z
status: human_needed
score: 2/4 success criteria fully verified; 2/4 require human completion
re_verification: false
human_verification:
  - test: "Run the risk assessment workshop with CEO, External CISO (NorthGRC), and Consultant (BearingPoint)"
    expected: "36 pre-seeded risk files updated with workshop-notes, rating changes where applicable, and residual-risk-accepted-by/date fields populated"
    why_human: "ISO 27001 cl. 6.1.2 requires the risk register to be validated through a human process — not purely AI-generated. Success Criterion 2 from ROADMAP.md explicitly requires 'validated through a human workshop.'"
  - test: "CEO signs the risk treatment summary (HH-ISMS-RTP-001)"
    expected: "risks/methodology/risk-treatment-summary.md has [DATE], [PR-REFERENCE], and [Workshop Date] fields populated, and the CEO-SIGNOFF-REQUIRED placeholder resolved via a Git PR"
    why_human: "Success Criterion 3 from ROADMAP.md requires 'explicit residual risk acceptance signed by the CEO'. The signature block in risk-treatment-summary.md (lines 228-235) requires manual completion. This cannot be done by an AI agent."
  - test: "CEO signs the SoA (HH-ISMS-SOA-001)"
    expected: "soa/SoA-Consolidated.md signature row shows CEO Helge Heupel date populated, not [CEO-SIGNOFF-REQUIRED]"
    why_human: "The consolidated SoA contains a CEO sign-off placeholder at line 204. Auditor submission requires CEO approval. This is a manual action."
---

# Phase 3: Risk Framework and Statement of Applicability — Verification Report

**Phase Goal:** The organization has a validated risk posture and every ISO 27001 Annex A control has been assessed for applicability, creating the backbone for all control implementations
**Verified:** 2026-02-20
**Status:** human_needed
**Re-verification:** No — initial verification

---

## Goal Achievement

### Observable Truths (from ROADMAP.md Success Criteria)

| # | Success Criterion | Status | Evidence |
|---|-------------------|--------|----------|
| 1 | A risk assessment methodology exists using a 5x5 likelihood/impact matrix with calibrated scales, aligned with ISO 31000, and any team member can explain the rating criteria | VERIFIED | `risks/methodology/risk-assessment-methodology.md` (HH-ISMS-RMA-001, 541 lines). Section 3: time-based likelihood scale. Section 4: business-survival-calibrated impact scale. Section 2 explicitly states "consistent, valid, and comparable results" per cl. 6.1.2(b). ISO 31000:2018 alignment stated in Section 1. |
| 2 | A risk register exists in YAML-in-Git format that was validated through a human workshop (not purely AI-generated), with every risk having an identifiable human owner who can explain it | PARTIAL — HUMAN NEEDED | 36 YAML risk files exist with role-based owners (CISO/CTO/CEO role). All `workshop-notes` fields are empty strings. `residual-risk-accepted-by` fields are empty. Workshop has not yet occurred. |
| 3 | A risk treatment plan exists with treatment strategy per risk, control mappings to Annex A, and explicit residual risk acceptance signed by the CEO | PARTIAL — HUMAN NEEDED | All 36 risk files have `treatment-strategy` and `treatment-controls` with Annex A control IDs populated. Risk treatment summary template (HH-ISMS-RTP-001) exists with CEO signature block at lines 228-237. Signature date, workshop date, and Git PR reference are `[TO BE COMPLETED]`. CEO has not yet signed. |
| 4 | The Statement of Applicability covers all 93 Annex A controls, each justified as applicable or not applicable with implementation status and evidence references | VERIFIED | 93 per-control YAML files confirmed (37 organizational + 8 people + 14 physical + 34 technological). 86 applicable, 7 not-applicable (all A.7.x physical controls per cloud-only model). Every file has `justification` (substantive 2-4 sentences), `implementation-status`, and `evidence-references`. SoA-Consolidated.md generated. |

**Score:** 2/4 success criteria fully verified. 2/4 require human completion (workshop execution and CEO sign-off).

---

## Required Artifacts

### Plan 03-01: Risk Assessment Methodology

| Artifact | Expected | Status | Details |
|----------|----------|--------|---------|
| `risks/methodology/risk-assessment-methodology.md` | Complete methodology with 5x5 matrix, YAML schema, 7-category taxonomy, workshop protocol | VERIFIED | File exists. YAML frontmatter: `document-id: HH-ISMS-RMA-001`, `version: v1.0`, `status: Draft`. Contains all 12 sections. ISO 31000:2018 referenced line 23. ISO 42001 cl. 6.1.2(d)(1) addressed (Section 4: AI Risk Impact Dimension). 5x5 matrix at Section 5. All 7 categories (OPS/SEC/AI/REG/PPL/SUP/STR) at Section 6. YAML schema at Section 8. Workshop protocol at Section 11. |

### Plan 03-02: Pre-seeded Risk Register

| Artifact | Expected | Status | Details |
|----------|----------|--------|---------|
| `risks/RISK-OPS-001.yml` | Operational risk example | VERIFIED | Contains `risk-id: RISK-OPS-001`, `treatment-strategy: modify`, 4 `treatment-controls` with Annex A IDs, substantive `rationale` field, `workshop-notes: ""` (correctly empty pre-workshop) |
| `risks/RISK-AI-001.yml` | AI risk with `ai-risk: true` | VERIFIED | Contains `ai-risk: true`, rationale includes individual/society impact sentence ("Impact on individuals: incorrect compliance advice could inadvertently weaken security controls protecting customer data, affecting individuals whose data is processed by Verity VE and EAM") |
| `risks/RISK-SEC-001.yml` | Security risk | VERIFIED | `category: SEC` confirmed |
| All 36 risk files | 7-category coverage, treatment-controls | VERIFIED | Grep confirms: 36 files with `treatment-strategy:` (36/36), `workshop-notes: ""` (36/36), `ai-risk: true` in all 7 AI files (7/7) |

### Plan 03-03: Workshop Preparation

| Artifact | Expected | Status | Details |
|----------|----------|--------|---------|
| `risks/methodology/workshop-preparation.md` | Workshop agenda, checklist, evidence capture template | VERIFIED | Document ID HH-ISMS-WRK-001. Contains 4-hour remote workshop structure, 7-item pre-workshop checklist, 6-block agenda, evidence capture template. References HH-ISMS-RMA-001 at lines 11, 37, 57, 73, 119. |
| `risks/methodology/risk-treatment-summary.md` | CEO signature block and risk treatment template | VERIFIED (INCOMPLETE — human needed) | Document ID HH-ISMS-RTP-001, `status: Template`. `[CEO-SIGNOFF-REQUIRED]` marker at lines 18 and 237. Signature block at lines 228-235. Treatment table template rows for all 36 risks present. Fields `[DATE]`, `[PR-REFERENCE]`, `[Workshop Date]` are unfilled — correctly awaiting post-workshop completion. |

### Plan 03-04: Statement of Applicability

| Artifact | Expected | Status | Details |
|----------|----------|--------|---------|
| `soa/A.5.1.yml` | First organizational control with `control-id: A.5.1` | VERIFIED | `control-id: A.5.1`, `applicable: true`, `implementation-status: fully-implemented`, evidence references to HH-ISMS-POL-001 |
| `soa/A.7.1.yml` | Physical control not-applicable example | VERIFIED | `applicable: false`, `implementation-status: not-started`, justification references Azure shared responsibility model and ISO 27001:2022 certification |
| `soa/A.8.34.yml` | Last technological control | VERIFIED | `control-id: A.8.34`, `applicable: true`, `implementation-status: planned` |
| `soa/scripts/generate-soa.js` | Consolidation script with js-yaml | VERIFIED | Uses `require('js-yaml')`, `fs.readdirSync(SOA_DIR)`, `yaml.loadAll()` (handles front-matter YAML), numeric sorting |
| `soa/SoA-Consolidated.md` | Generated auditor-facing document | VERIFIED | Document ID HH-ISMS-SOA-001. Section 2 shows: Total=93, Applicable=86, Not Applicable=7. CEO sign-off placeholder at line 204. |

---

## Key Link Verification

| From | To | Via | Status | Details |
|------|----|-----|--------|---------|
| `risks/methodology/risk-assessment-methodology.md` | `policies/IS-Policy.md` | Risk appetite alignment — `HH-ISMS-POL-001` | WIRED | Referenced at lines 43, 58, 216, 531 of methodology |
| `risks/methodology/risk-assessment-methodology.md` | `governance-model.md` | Risk-tiered escalation — `HH-GOV-Startup-v1.0` | WIRED | Governance model referenced at Section 5 (risk levels table): "Escalate to Weekly Technical meeting per governance model (HH-GOV-Startup-v1.0)" at line 172 |
| `risks/RISK-*.yml treatment-controls` | Annex A controls | Risk-to-SoA cross-reference — `control-id: A.` | WIRED | All 36 risk files contain `treatment-controls` with `control-id: A.x.x` format |
| `soa/A.*.yml evidence-references` | `policies/*.md` | Evidence pointers — `HH-ISMS-POL-001` | WIRED | HH-ISMS-POL-001 found in multiple SoA files; HH-AIMS-POL-001 found in multiple SoA files |
| `soa/A.*.yml risk-references` | `risks/RISK-*.yml` | Risk-to-control traceability — `RISK-` | PARTIAL | 10 risk IDs mapped across 22 control files (per 03-04-SUMMARY decision); remainder are empty arrays `[]` pending workshop completion — documented deferral, not a defect |
| `soa/scripts/generate-soa.js` | `soa/A.*.yml` | Reads all per-control YAML files | WIRED | `fs.readdirSync(SOA_DIR)` at line 29, `yaml.loadAll()` at line 57 |
| `risks/methodology/workshop-preparation.md` | `risks/methodology/risk-assessment-methodology.md` | Methodology reference — `HH-ISMS-RMA-001` | WIRED | Referenced at lines 11, 37, 57, 73, 119 of workshop-preparation.md |
| `risks/methodology/risk-treatment-summary.md` | `risks/RISK-*.yml` | Aggregates all risk treatment decisions | PARTIAL (template) | Template table rows for all 36 risks present with `[placeholder]` values — correctly unfilled pre-workshop. `[TO BE GENERATED post-workshop]` notation present. Not a defect — this is a template document by design. |

---

## Requirements Coverage

| Requirement | Source Plan | Description | Status | Evidence |
|-------------|-------------|-------------|--------|---------|
| ISMS-03 | 03-04 | Statement of Applicability produced — all 93 Annex A controls assessed, each justified as applicable/not applicable with implementation status | SATISFIED | 93 YAML files in `soa/` confirmed (37+8+14+34). 86 applicable, 7 not-applicable. Every file has `justification`, `implementation-status`, and `evidence-references`. `SoA-Consolidated.md` generated. |
| ISMS-04 | 03-01 | Risk assessment methodology defined — 5x5 likelihood/impact matrix, calibrated scales, aligned with ISO 31000 | SATISFIED | `risks/methodology/risk-assessment-methodology.md` (HH-ISMS-RMA-001). 5x5 matrix at Section 5. ISO 31000:2018 stated at line 23. Time-based likelihood scale (Section 3). Business-survival-calibrated impact scale (Section 4). |
| ISMS-05 | 03-02, 03-03 | Risk register produced in YAML-in-Git format — synced to NorthGRC, covering information security and AI risks | PARTIALLY SATISFIED — HUMAN NEEDED | 36 YAML risk files exist covering all 7 categories including AI risks. NorthGRC sync explicitly deferred to Phase 9 (TOOL-01) per documented decision in 03-RESEARCH.md line 758. Risk register is complete and workshop-ready; human workshop validation is pending. |
| ISMS-06 | 03-03 | Risk treatment plan produced — treatment strategy per risk, control mappings, residual risk acceptance | PARTIALLY SATISFIED — HUMAN NEEDED | All 36 risk files have `treatment-strategy` and `treatment-controls`. Risk treatment summary template (HH-ISMS-RTP-001) exists with CEO signature block. CEO has not yet signed. Residual risk acceptance fields are empty. This completes after the workshop. |

### Orphaned Requirements Check

REQUIREMENTS.md maps ISMS-03, ISMS-04, ISMS-05, ISMS-06 to Phase 3. All four are claimed by plans in this phase. No orphaned requirements.

---

## Anti-Patterns Found

| File | Line | Pattern | Severity | Impact |
|------|------|---------|----------|--------|
| `soa/scripts/node_modules/js-yaml/lib/loader.js` | 665 | `// TODO: rework to inline fn` | Info | External library, not project code. No impact. |
| `risks/methodology/risk-treatment-summary.md` | Multiple | `[TO BE COMPLETED post-workshop]` placeholder sections | Info — BY DESIGN | These are intentional template placeholders for post-workshop population. Document status is correctly `Template`. Not a defect. |
| `soa/SoA-Consolidated.md` | 204 | `[CEO-SIGNOFF-REQUIRED]` | Info — BY DESIGN | Intentional workflow marker. Awaiting human sign-off. |

No blocker anti-patterns found in project artifacts.

---

## Human Verification Required

### 1. Risk Assessment Workshop Execution

**Test:** Schedule and run the 4-hour risk assessment workshop using `risks/methodology/workshop-preparation.md` (HH-ISMS-WRK-001). Participants: CEO Helge Heupel, External CISO from NorthGRC, Consultant from BearingPoint.
**Expected:** After the workshop:
- Each of the 36 risk YAML files in `risks/` has `workshop-notes` populated with session decisions
- Rating changes are reflected in `likelihood`, `impact`, and derived `inherent-risk-score` fields where participants disagreed with pre-seeded values
- `residual-risk-accepted-by: "Helge Heupel"` and `residual-risk-accepted-date: "[date]"` are filled in each file
- A workshop evidence document is committed to `risks/methodology/workshop-evidence.md` with attendance record, date, and per-risk decision log
**Why human:** ISO 27001 cl. 6.1.2 requires the risk assessment process to produce results that include human judgment and validation. ROADMAP.md Success Criterion 2 explicitly requires "validated through a human workshop (not purely AI-generated)." The pre-seeded risks are the AI contribution; the workshop is the human validation that makes them audit-ready.

### 2. CEO Risk Treatment Plan Sign-Off

**Test:** After the workshop, populate `risks/methodology/risk-treatment-summary.md` (HH-ISMS-RTP-001) with actual workshop outcomes, then have CEO Helge Heupel sign via Git PR.
**Expected:**
- Section 3 (Workshop Summary) is populated with date, participants, and outcomes
- Section 4 (Risk Treatment Summary Table) is populated with actual values from the 36 updated risk YAML files
- Section 8 (Signature Block) shows `Date: [actual date]`, `Git PR Reference: [actual PR number]`, `Workshop Date: [actual date]`
- The `[CEO-SIGNOFF-REQUIRED]` markers at lines 18 and 237 are resolved
- A Git PR is created and merged by CEO to formalize acceptance
**Why human:** ROADMAP.md Success Criterion 3 requires "explicit residual risk acceptance signed by the CEO." ISO 27001 cl. 6.1.3(f) requires risk owner approval of the treatment plan. This is a mandatory human authorization action.

### 3. SoA CEO Sign-Off

**Test:** After workshop, re-run `cd soa/scripts && node generate-soa.js` to refresh SoA-Consolidated.md with any updated risk references, then have CEO sign via Git PR.
**Expected:** `soa/SoA-Consolidated.md` signature row (line 204) shows actual date, and `[CEO-SIGNOFF-REQUIRED]` is replaced with CEO initials/date. A Git PR merging the signed SoA is created by CEO.
**Why human:** SoA is the primary document a Stage 1 auditor will request. CEO authorization is required to present it as management-approved (ISO 27001 cl. 5.1 leadership commitment).

---

## Gaps Summary

No automated verification gaps — all artifacts that can be verified programmatically pass all three levels (exists, substantive, wired).

The two items in `human_verification` are not gaps in what was built but rather pending human actions that are architecturally required for the phase goal to be fully achieved:

1. **Risk register human validation:** The 36 risk files are pre-seeded and workshop-ready. The workshop itself is a human event outside this SDLC system. Per the PLAN 03-03 design (Task 2 is `checkpoint:human-verify`), the CEO approved the materials for distribution. The workshop is scheduled as the next step.

2. **CEO sign-offs (risk treatment plan + SoA):** Both signature blocks are correctly templated and awaiting the workshop outputs. These cannot be completed until after the workshop.

**Phase infrastructure assessment:** Everything the AI was asked to build is built, substantive, and wired. The remaining work is human execution.

---

## Summary

Phase 3 has delivered:
- A complete, calibrated risk assessment methodology (HH-ISMS-RMA-001) with 5x5 matrix, ISO 31000 alignment, and ISO 42001 AI risk dimension
- 36 pre-seeded risk YAML files covering all 7 categories, ready for workshop validation
- A complete workshop preparation package (HH-ISMS-WRK-001) with 4-hour agenda, participant roles, and evidence capture template
- A risk treatment summary template (HH-ISMS-RTP-001) with CEO signature block
- 93 per-control SoA YAML files covering all ISO 27001:2022 Annex A controls
- A consolidation script generating the auditor-facing SoA document (HH-ISMS-SOA-001)

What remains is human execution: the risk workshop, CEO sign-off on the risk treatment plan, and CEO sign-off on the SoA. These are by design — they require human judgment and authorization that cannot and should not be delegated to an AI agent.

---

_Verified: 2026-02-20_
_Verifier: Claude (gsd-verifier)_
