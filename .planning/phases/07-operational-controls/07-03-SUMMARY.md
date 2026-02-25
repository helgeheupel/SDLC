---
phase: 07-operational-controls
plan: 03
subsystem: compliance
tags: [supplier-security, hr-security, vendor-risk, nda, dpa, gdpr, screening, training, iso-27001, iso-42001, tisax]

# Dependency graph
requires:
  - phase: 02-ciso-agent-and-is-ai-policy-foundation
    provides: IS Policy, AI Policy, IS Policy Annex (parent documents for procedures)
  - phase: 03-risk-framework-and-statement-of-applicability
    provides: Risk assessment methodology, SoA with A.5.19-A.5.23 and A.6.1-A.6.8 controls
  - phase: 05-ai-governance-framework
    provides: AI Risk Assessment Procedure (HH-AIMS-RMA-001), AI System Registry
provides:
  - "HH-ISMS-PROC-005 Supplier Security Procedure with tiered vendor risk assessment and GDPR DPA management"
  - "HH-ISMS-PROC-006 HR Security Procedure with jurisdiction-appropriate screening and termination procedures"
affects: [07-04-PLAN, 08-evidence-preparation, 09-grc-integration]

# Tech tracking
tech-stack:
  added: []
  patterns: [decision-tree procedure format, tiered vendor risk assessment, jurisdiction-aware screening]

key-files:
  created:
    - procedures/supplier-security.md
    - procedures/hr-security.md
  modified: []

key-decisions:
  - "Tiered vendor risk assessment (3 tiers) based on data classification, not supplier size"
  - "GDPR DPA requirements embedded in supplier security (Section 6), not standalone"
  - "NorthGRC treated as Tier 1 for access scope but assessed via consultant pathway"
  - "German Fuehrungszeugnis and Dutch VOG gated on Confidential/Secret data access, not all roles"
  - "AI agents explicitly excluded from HR security scope (no NDA, no screening) with Trust Level 2 boundary enforcement"
  - "2-year post-termination NDA period for both employees and consultants"

patterns-established:
  - "Decision-tree procedure format: 3 lifecycle branches (onboarding, ongoing, offboarding) with numbered steps"
  - "Annex A control mapping table as standard procedure section"
  - "Cross-procedure references via document ID (HH-ISMS-PROC-XXX) in Related Procedures table"
  - "Regulatory obligations section per procedure covering ISO 27001, ISO 42001, TISAX, GDPR, NIS2"

requirements-completed: [OPCT-05, OPCT-06]

# Metrics
duration: 6min
completed: 2026-02-25
---

# Phase 07 Plan 03: Supplier Security and HR Security Procedures Summary

**Decision-tree supplier security (HH-ISMS-PROC-005) with 3-tier vendor risk assessment and GDPR DPA, plus HR security (HH-ISMS-PROC-006) with jurisdiction-appropriate screening for Germany and Netherlands**

## Performance

- **Duration:** 6 min
- **Started:** 2026-02-25T12:05:42Z
- **Completed:** 2026-02-25T12:11:42Z
- **Tasks:** 2
- **Files created:** 2

## Accomplishments

- Supplier security procedure with decision-tree lifecycle (onboarding, monitoring, offboarding), 3-tier vendor risk assessment (Confidential/Secret, Internal, Public), contractual security clauses, GDPR DPA management, and ISO 42001 A.10 third-party AI assessment
- HR security procedure with decision-tree lifecycle (pre-employment, during, termination), jurisdiction-appropriate screening (Fuehrungszeugnis for Germany, VOG for Netherlands), security awareness program (initial, annual, role-specific), NDA management framework, and 4-hour access revocation timeline
- Both procedures name specific HH personnel, reference specific suppliers (Azure, Neon, Vercel, Cloudflare, NorthGRC, BearingPoint), and cross-reference related procedures (HH-ISMS-PROC-003, HH-ISMS-PROC-001)

## Task Commits

Each task was committed atomically:

1. **Task 1: Create Supplier Security Procedure (HH-ISMS-PROC-005)** - `89702f4` (feat)
2. **Task 2: Create HR Security Procedure (HH-ISMS-PROC-006)** - `7a3d2ec` (feat)

## Files Created/Modified

- `procedures/supplier-security.md` — HH-ISMS-PROC-005: Supplier Security Procedure with 11 sections covering supplier lifecycle, vendor risk assessment, contractual clauses, GDPR DPA, third-party AI assessment, supplier register, and Annex A control mapping (A.5.19–A.5.23)
- `procedures/hr-security.md` — HH-ISMS-PROC-006: HR Security Procedure with 11 sections covering personnel lifecycle, pre-employment screening, security awareness training, NDA management, termination procedures, and Annex A control mapping (A.6.1–A.6.8)

## Decisions Made

1. **Tiered vendor risk assessment based on data classification:** Tier 1 (Confidential/Secret) requires full security questionnaire, certification, pentest results, and CEO-reviewed DPA. Tier 2 (Internal) uses abbreviated questionnaire. Tier 3 (Public) is minimal. This scales governance with actual risk.
2. **NorthGRC dual treatment:** Treated as Tier 1 for access scope (Confidential data access) but assessed via consultant pathway rather than cloud provider pathway. Reflects the unique External CISO relationship.
3. **Screening gated on data classification, not role level:** Fuehrungszeugnis (Germany) and VOG (Netherlands) are only required for roles with Confidential or Secret data access, not universally. This is proportionate under German BDSG Sec. 26 and Dutch privacy law.
4. **AI agents explicitly out of HR scope:** AI agents do not undergo screening, sign NDAs, or follow termination procedures. Their governance is entirely via AI Policy, Trust Level 2 boundaries, and session scoping. This avoids anthropomorphizing AI governance while maintaining clear accountability.
5. **2-year NDA post-termination:** Consistent for both employees and consultants. Standard industry practice that balances protection with proportionality.

## Deviations from Plan

None — plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None — no external service configuration required.

## Next Phase Readiness

- Supplier security and HR security procedures complete. The full set of 6 operational procedures (OPCT-01 through OPCT-06) now exists in `procedures/`.
- Plan 07-04 (Internal Audit and Management Review) can proceed — it will cross-reference both HH-ISMS-PROC-005 and HH-ISMS-PROC-006 in the audit checklist.
- Supplier register structure defined but empty — to be populated during Phase 8 (evidence preparation) or as actual supplier assessments are conducted.

## Self-Check: PASSED

- [x] procedures/supplier-security.md exists
- [x] procedures/hr-security.md exists
- [x] 07-03-SUMMARY.md exists
- [x] Commit 89702f4 found in git log
- [x] Commit 7a3d2ec found in git log

---
*Phase: 07-operational-controls*
*Completed: 2026-02-25*
