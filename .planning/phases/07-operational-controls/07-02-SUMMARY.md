---
phase: 07-operational-controls
plan: 02
subsystem: compliance
tags: [access-control, change-management, rbac, mfa, gdpr, iso-27001, annex-a]

# Dependency graph
requires:
  - phase: 02-ciso-agent-and-is-ai-policy-foundation
    provides: IS Policy (HH-ISMS-POL-001), IS Policy Annex, governance model, RACI matrix
  - phase: 03-risk-framework-and-statement-of-applicability
    provides: SoA with Annex A control applicability (A.5.15-A.5.18, A.8.1-A.8.5, A.8.32, A.5.37)
provides:
  - HH-ISMS-PROC-003 Access Control Procedure (RBAC, JIT elevation, MFA, quarterly reviews, GDPR data subject rights)
  - HH-ISMS-PROC-004 Change Management Procedure (risk-tiered classification, approval matrix, rollback, emergency changes)
affects: [07-operational-controls, 08-uat-and-audit-prep]

# Tech tracking
tech-stack:
  added: []
  patterns: [decision-tree procedure format, risk-tiered approval matrix, Git PR as change record]

key-files:
  created:
    - procedures/access-control.md
    - procedures/change-management.md
  modified: []

key-decisions:
  - "RBAC table maps all 6 HH human roles to per-system access levels (GitHub, Vercel, Cloudflare, Neon, Azure, AI Agent Configs, Linear, Float, NorthGRC)"
  - "JIT elevation maximum durations: 4h for admin access, 24h for elevated contributor access, with manual calendar tracking at Startup"
  - "MFA mandatory on all systems with no exceptions; AI agents exempt (session-scoped, no persistent credentials)"
  - "Change classification uses 6-factor assessment with highest-severity factor determining the tier"
  - "Emergency changes: CTO can approve alone for SEV1/SEV2; PR within 24h required; reviewed at next Weekly Technical"
  - "AI agent config changes always require CEO approval per Trust Level 2 regardless of risk tier"

patterns-established:
  - "Decision-tree procedure format: flowchart-style logic with clear branching for different scenarios"
  - "Cross-procedure reference tables in Section 2 (Normative References) for integration between procedures"
  - "Annex A control mapping tables per procedure for auditor traceability"
  - "Regulatory obligations section per procedure covering ISO 27001, TISAX, GDPR, NIS2 (informational)"

requirements-completed: [OPCT-03, OPCT-04]

# Metrics
duration: 4min
completed: 2026-02-25
---

# Phase 7 Plan 02: Access Control and Change Management Summary

**Decision-tree access control procedure with RBAC for 6 HH roles, JIT elevation, MFA, GDPR data subject rights, and quarterly reviews; plus risk-tiered change management procedure with 4-level classification, CEO+CTO approval for High/Critical, rollback requirements, and Git-based traceability**

## Performance

- **Duration:** 4 min
- **Started:** 2026-02-25T12:05:49Z
- **Completed:** 2026-02-25T12:10:00Z
- **Tasks:** 2
- **Files created:** 2

## Accomplishments

- Access control procedure (HH-ISMS-PROC-003) with decision-tree lifecycle covering request, modify, and revoke branches for employees, contractors, and AI agents
- RBAC table mapping all 6 HH human roles (CEO, CTO, CISO, IT Pentester, Strategy Partner, Finance Industry Senior Manager) to specific access levels across 9 systems
- Change management procedure (HH-ISMS-PROC-004) with 4-tier risk classification, approval matrix matching locked decisions exactly, and emergency change process for incident-driven changes
- GDPR data subject rights embedded in access control procedure (Art. 12-23) with 30-day response timeline
- Complete cross-referencing between both procedures and upstream procedures (PROC-001, PROC-002, PROC-006, PROC-008)

## Task Commits

Each task was committed atomically:

1. **Task 1: Create Access Control Procedure (HH-ISMS-PROC-003)** - `70967f9` (feat)
2. **Task 2: Create Change Management Procedure (HH-ISMS-PROC-004)** - `368c58c` (feat)

## Files Created/Modified

- `procedures/access-control.md` - HH-ISMS-PROC-003: Decision-tree access control with RBAC, JIT, MFA, quarterly reviews, GDPR data subject rights (515 lines)
- `procedures/change-management.md` - HH-ISMS-PROC-004: Risk-tiered change management with approval matrix, rollback requirements, emergency process, AI agent change governance (443 lines)

## Decisions Made

- **RBAC table expanded to 9 systems:** Added Linear, Float, and NorthGRC columns beyond the 6 systems specified in the plan to provide complete access mapping
- **MFA recovery process added:** Included MFA reset procedure (IT Pentester for Azure/Entra ID, CTO for GitHub/Vercel/Cloudflare) with identity verification requirement
- **Revocation checklist with 10 systems:** Comprehensive checklist covering all systems including Intune device retirement for complete offboarding coverage
- **6-factor risk assessment table:** Operationalized the governance model's 6 risk factors into a concrete assessment table with Low/Medium/High/Critical criteria per factor
- **AI agent changes always require CEO approval:** Regardless of the risk tier classification, all agent configuration changes need CEO sign-off per Trust Level 2 governance

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- Access control procedure ready for cross-referencing from OPCT-06 (HR Security) for onboarding/offboarding access provisioning
- Change management procedure ready for cross-referencing from OPCT-01 (Incident Management) for emergency change linkage
- Both procedures provide Annex A control coverage that can be verified during internal audit (ISMS-07)
- Remaining Phase 7 plans (03: Supplier Security + HR Security, 04: Internal Audit + Management Review) can proceed

---
*Phase: 07-operational-controls*
*Completed: 2026-02-25*
