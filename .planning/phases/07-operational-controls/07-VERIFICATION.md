---
phase: 07-operational-controls
verified: 2026-02-25T14:00:00Z
status: passed
score: 5/5 success criteria verified
re_verification: false
---

# Phase 7: Operational Controls Verification Report

**Phase Goal:** All operational security procedures exist as actionable, HH-specific documents that personnel can follow and auditors can verify against real operational evidence
**Verified:** 2026-02-25T14:00:00Z
**Status:** PASSED
**Re-verification:** No — initial verification

---

## Goal Achievement

### Observable Truths (from ROADMAP.md Success Criteria)

| # | Truth | Status | Evidence |
|---|-------|--------|----------|
| 1 | An incident management procedure exists covering detection, classification, response, NIS2-timeline reporting, and post-incident review, with roles assigned to specific HH personnel | VERIFIED | `procedures/incident-management.md` (684 lines) — SEV1-SEV4 classification table (ll.85-88), ICS-Lite role activation (Sec. 5, ll.165-184), NIS2 BSI portal.bsi.bund.de (l.372-374) and NCSC-NL mijn.ncsc.nl (ll.392-401), GDPR Art. 33-34 breach notification (ll.328-341), post-incident review (Sec. 11) |
| 2 | A BCP/DR plan exists with RPO/RTO targets per service tier, failover procedures, and a testing schedule | VERIFIED | `procedures/bcp-dr.md` (566 lines) — service tier RPO/RTO table Tier 1 (1h/4h), Tier 2 (4h/8h), Tier 3 (24h/24h) (ll.91-94), failover runbooks for Neon, Vercel, Cloudflare, Azure (Sec. 6), quarterly tabletop + semi-annual restore tests + annual simulation schedule (ll.440-442) |
| 3 | An access control policy exists defining RBAC, least privilege, JIT elevation, MFA requirements, and quarterly access review procedures | VERIFIED | `procedures/access-control.md` (515 lines) — RBAC table mapping 6 HH human roles to 9 systems (Sec. 4, l.284), JIT elevation process with 4h admin / 24h contributor maximums (Sec. 5.2, l.333), MFA mandatory table (Sec. 6, ll.353-364), quarterly access review procedure naming IT Pentester as conductor and CTO as reviewer (Sec. 7, l.370-414) |
| 4 | A change management procedure exists with risk-tiered approval (including CAB for High/Critical), rollback requirements, and traceability | VERIFIED | `procedures/change-management.md` (443 lines) — 4-tier risk classification with 6-factor assessment (Sec. 3, ll.94-108), approval matrix: Low/Medium any PR reviewer, High/Critical require CEO+CTO approval (Sec. 4, ll.175-206), rollback requirements per tier (Sec. 6, ll.265-294), Git PR as full traceability chain (Sec. 9), CAB via CEO+CTO at Weekly Technical for Critical (l.200) |
| 5 | Supplier security requirements, HR security procedures, an internal audit program, and a management review template all exist and reference specific HH systems, personnel, and processes | VERIFIED | `procedures/supplier-security.md` (527 lines) — 3-tier vendor risk assessment with named suppliers Azure/Neon/Vercel/Cloudflare/NorthGRC/BearingPoint; `procedures/hr-security.md` (578 lines) — jurisdiction-specific screening (Fuehrungszeugnis/VOG), 4h termination access revocation; `procedures/internal-audit.md` (511 lines) — NorthGRC as lead auditor, evidence source independence flags; `procedures/management-review.md` (523 lines) — combined IMS template covering all 7 ISO 27001 cl. 9.3.2 inputs + 6 AIMS-specific inputs |

**Score:** 5/5 truths verified

---

## Required Artifacts

| Artifact | Document ID | Line Count | Status | Key Evidence |
|----------|-------------|------------|--------|--------------|
| `procedures/incident-management.md` | HH-ISMS-PROC-001 | 684 | VERIFIED | document-id confirmed (l.2), all 15 sections present, BSI + NCSC-NL portal URLs, ICS-Lite roles, GDPR Art. 33-34 |
| `procedures/bcp-dr.md` | HH-ISMS-PROC-002 | 566 | VERIFIED | document-id confirmed (l.2), all 12 sections present, RPO/RTO per tier, 5 DR scenario runbooks, testing schedule |
| `procedures/access-control.md` | HH-ISMS-PROC-003 | 515 | VERIFIED | document-id confirmed (l.2), all 11 sections present, RBAC 9-system table, JIT, MFA, GDPR Art. 12-23 |
| `procedures/change-management.md` | HH-ISMS-PROC-004 | 443 | VERIFIED | document-id confirmed (l.2), all 12 sections present, 4-tier classification, approval matrix, emergency change process |
| `procedures/supplier-security.md` | HH-ISMS-PROC-005 | 527 | VERIFIED | document-id confirmed (l.2), all 11 sections present, 3-tier assessment, DPA checklist, ISO 42001 A.10 assessment |
| `procedures/hr-security.md` | HH-ISMS-PROC-006 | 578 | VERIFIED | document-id confirmed (l.2), all 11 sections present, Fuehrungszeugnis/VOG jurisdiction-specific, 4h revocation |
| `procedures/internal-audit.md` | HH-ISMS-PROC-007 | 511 | VERIFIED | document-id confirmed (l.2), all 13 sections present, NorthGRC independence, CISO-AGENT source flags, scoring 0-3 |
| `procedures/management-review.md` | HH-ISMS-PROC-008 | 523 | VERIFIED | document-id confirmed (l.2), all 11 sections present, 7 ISMS + 6 AIMS mandatory inputs, minutes template |

---

## Key Link Verification

| From | To | Via | Pattern Found | Status |
|------|----|-----|---------------|--------|
| `procedures/incident-management.md` | `procedures/bcp-dr.md` | Cross-reference when incident triggers DR activation | `HH-ISMS-PROC-002` (ll.56, 672) | WIRED |
| `procedures/incident-management.md` | `policies/IS-Policy-Annex.md` | Supersedes interim incident response in Annex | `HH-ISMS-POL-001-ANNEX` (ll.22, 35, 649, 670) | WIRED |
| `procedures/access-control.md` | `governance-model.md` | Risk-tiered gate model for access approval | `HH-GOV-Startup-v1.0` (ll.37, 66) | WIRED |
| `procedures/change-management.md` | `governance-model.md` | Risk-tiered gate model for change approval | `HH-GOV-Startup-v1.0` (ll.38, 58) | WIRED |
| `procedures/supplier-security.md` | `procedures/access-control.md` | Supplier access provisioning and revocation | `HH-ISMS-PROC-003` (ll.58, 104, 178) | WIRED |
| `procedures/hr-security.md` | `procedures/access-control.md` | Onboarding/offboarding access management | `HH-ISMS-PROC-003` (ll.65, 119, 151, 167, 195) | WIRED |
| `procedures/internal-audit.md` | `soa/SoA-Consolidated.md` | Audit scope derived from SoA applicable controls | `HH-ISMS-SOA-001` (ll.33, 59, 91-94) | WIRED |
| `procedures/management-review.md` | `governance-model.md` | Management review at Monthly Strategic meeting | `Monthly Strategic` (ll.71-81) | WIRED |
| `procedures/management-review.md` | `procedures/internal-audit.md` | Audit results as mandatory cl. 9.3.2(d.3) input | `HH-ISMS-PROC-007` (ll.61, 131, 133) | WIRED |

All 9 key links: WIRED.

---

## Requirements Coverage

| Requirement | Source Plan | Description | Status | Evidence |
|-------------|-------------|-------------|--------|----------|
| OPCT-01 | 07-01-PLAN.md | Incident management procedure — detection, classification, response, NIS2 timelines, post-incident review | SATISFIED | `procedures/incident-management.md` covers all components; SEV1-4 with response SLAs; NIS2 BSI + NCSC-NL with timeline tables; post-incident review template in Sec. 11 |
| OPCT-02 | 07-01-PLAN.md | BCP/DR plan — RPO/RTO per service tier, failover procedures, testing schedule | SATISFIED | `procedures/bcp-dr.md` with tier-based RPO/RTO, 5 DR scenario runbooks, quarterly/semi-annual/annual testing schedule |
| OPCT-03 | 07-02-PLAN.md | Access control — RBAC, least privilege, JIT elevation, MFA, quarterly access reviews | SATISFIED | `procedures/access-control.md` with RBAC for 6 HH roles across 9 systems, JIT elevation process, MFA table, quarterly review process |
| OPCT-04 | 07-02-PLAN.md | Change management — risk-tiered approval, CAB for High/Critical, rollback requirements | SATISFIED | `procedures/change-management.md` with 4-tier classification, CEO+CTO approval for High/Critical (CAB function), per-tier rollback requirements, Git-based traceability |
| OPCT-05 | 07-03-PLAN.md | Supplier security — vendor risk assessment, contractual clauses, third-party AI assessment | SATISFIED | `procedures/supplier-security.md` with 3-tier risk assessment (Confidential/Internal/Public), 10 contractual clauses, DPA checklist per GDPR Art. 28, ISO 42001 A.10 third-party AI assessment |
| OPCT-06 | 07-03-PLAN.md | HR security — screening, awareness training, termination procedures, NDA management | SATISFIED | `procedures/hr-security.md` with jurisdiction-appropriate screening (Germany: Fuehrungszeugnis; Netherlands: VOG), 3-component awareness training, 4h access revocation on termination, NDA management with 2-year post-termination period |
| ISMS-07 | 07-04-PLAN.md | Internal audit program — schedule, scope, methodology, competence requirements | SATISFIED | `procedures/internal-audit.md` with annual audit cycle, full scope (124 applicable ISMS + AIMS controls), finding classification and 0-3 scoring, NorthGRC as qualified lead auditor, independence boundary rule for CISO Agent outputs |
| ISMS-08 | 07-04-PLAN.md | Management review template — mandatory cl. 9.3.2 inputs, mandatory cl. 9.3.3 outputs | SATISFIED | `procedures/management-review.md` with all 7 ISO 27001 cl. 9.3.2 inputs (a-g) plus 6 AIMS-specific inputs (AI-1 to AI-6), 3 mandatory outputs, structured minutes template covering both ISMS and AIMS in a single document |

No orphaned requirements. All 8 requirement IDs from REQUIREMENTS.md Phase 7 entries are claimed by plans and satisfied by verified artifacts.

---

## Anti-Patterns Found

| File | Pattern | Severity | Assessment |
|------|---------|----------|------------|
| `incident-management.md` l.117, 161, 430, 434 | References to Microsoft Sentinel | INFO | Correctly marked as "Growth target" — not referenced as current capability. Compliant with plan anti-pattern rules. |
| `bcp-dr.md` ll.140, 154, 214, 349 | References to Terraform/Bicep/canary | INFO | Correctly marked as "Growth target" — not referenced as current capability. Compliant. |

No blocker or warning anti-patterns. All Growth-phase references are properly labelled as future targets, not current capabilities.

---

## Commit Verification

All 8 task commits documented in summaries exist in git:

| Commit | Plan | Artifact |
|--------|------|----------|
| `f2da09f` | 07-01 Task 1 | `procedures/incident-management.md` |
| `4455864` | 07-01 Task 2 | `procedures/bcp-dr.md` |
| `70967f9` | 07-02 Task 1 | `procedures/access-control.md` |
| `368c58c` | 07-02 Task 2 | `procedures/change-management.md` |
| `89702f4` | 07-03 Task 1 | `procedures/supplier-security.md` |
| `7a3d2ec` | 07-03 Task 2 | `procedures/hr-security.md` |
| `5571e0d` | 07-04 Task 1 | `procedures/internal-audit.md` |
| `3ff1075` | 07-04 Task 2 | `procedures/management-review.md` |

---

## Human Verification Required

The following items cannot be fully verified programmatically and warrant human review before the Stage 1 certification audit:

### 1. Procedure Followability Under Pressure

**Test:** Have the CTO simulate executing the incident management procedure (Section 6 runbook) for a hypothetical SEV2 scenario (unauthorized access to Azure resources).
**Expected:** Every step is unambiguous; CTO can complete each step without consulting another document.
**Why human:** Followability under operational stress is a judgment call that cannot be verified by content scanning.

### 2. NIS2 Section Completeness for Growth Activation

**Test:** Review the NIS2 reference sections (Sec. 8 in incident-management.md) to confirm they are ready for copy-paste activation at Growth phase, specifically: are BSI registration prerequisites and NCSC-NL registration steps sufficiently detailed?
**Expected:** Section reads as "complete reference, activate when needed" — not as a stub requiring further research.
**Why human:** Regulatory accuracy requires human judgment; BSI portal registration flow changes occasionally.

### 3. RBAC Table Accuracy

**Test:** Compare the RBAC table in `procedures/access-control.md` (Section 4) against actual current permissions in GitHub, Vercel, Cloudflare, Azure portal, and Neon.
**Expected:** RBAC table reflects actual provisioned access levels for all 6 human roles.
**Why human:** Access provisioning state lives in external systems that cannot be read programmatically here.

### 4. NorthGRC Independence Engagement

**Test:** Confirm with NorthGRC that they accept the lead auditor role as defined in `procedures/internal-audit.md` (Section 4.1) and that the qualification claims (ISO 27001 Lead Auditor certification) are accurate.
**Expected:** NorthGRC acknowledges the internal audit program structure and confirms their role.
**Why human:** Requires direct communication with the external party.

---

## Summary

Phase 7 goal is achieved. All 8 operational security procedures exist as substantive, HH-specific documents (4,347 lines total across 8 files) that are personnel-followable and auditor-verifiable.

**What was verified:**
- All 8 procedure files exist, are substantive (443–684 lines each), and contain the required document IDs
- All 5 ROADMAP.md success criteria are fully satisfied
- All 8 requirement IDs (OPCT-01 through OPCT-06, ISMS-07, ISMS-08) are satisfied with evidence
- All 9 key links between procedures and upstream documents are wired
- No stub implementations, placeholder content, or Growth-only capabilities misrepresented as current
- All 8 task commits confirmed to exist in git history

**Notable strengths:**
- Incident management procedure (PROC-001) contains genuine operational depth — 2-4 page NIS2 sections with portal URLs, step-by-step reporting timelines for both BSI and NCSC-NL, and a Growth Activation Checklist
- BCP/DR plan (PROC-002) is honest about Startup-phase manual recovery limitations while documenting actual platform capabilities (Neon PITR, Vercel immutable deployments)
- Internal audit program (PROC-007) correctly handles the independence boundary for CISO Agent-produced artifacts with evidence source classification (CISO-AGENT/SYSTEM/HUMAN)
- Management review procedure (PROC-008) satisfies both ISO 27001 cl. 9.3 and ISO 42001 cl. 9.3 in a single combined IMS review — a non-trivial integration that is correctly implemented

---

_Verified: 2026-02-25T14:00:00Z_
_Verifier: Claude (gsd-verifier)_
