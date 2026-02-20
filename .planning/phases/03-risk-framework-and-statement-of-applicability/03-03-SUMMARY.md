---
phase: 03-risk-framework-and-statement-of-applicability
plan: 03
subsystem: risk-workshop
tags: [risk-assessment, workshop, risk-treatment, ceo-signoff, iso27001, iso42001]
dependency-graph:
  requires: [03-01, 03-02]
  provides: [workshop-preparation-package, risk-treatment-summary-template]
  affects: [risk-workshop-execution, auditor-package]
tech-stack:
  added: []
  patterns: [structured-workshop-agenda, evidence-capture-template, ceo-signature-block]
key-files:
  created:
    - risks/methodology/workshop-preparation.md
    - risks/methodology/risk-treatment-summary.md
  modified: []
decisions:
  - "Workshop materials approved by CEO for distribution to External CISO (NorthGRC) and Consultant (BearingPoint)"
  - "4-hour remote workshop with 6-block structure: opening, high-risk review, category sweep, new risks, treatment consolidation, residual acceptance"
  - "Dual evidence mechanism: Git PR workflow for working process + formal risk treatment summary (HH-ISMS-RTP-001) for auditor package"
  - "Risk treatment summary includes CEO signature block covering all 3 entities (GmbH, B.V., Inc.)"
metrics:
  duration: 8min
  completed: 2026-02-20
---

# Phase 03 Plan 03: Risk Assessment Workshop Preparation Summary

Workshop preparation package (HH-ISMS-WRK-001) with 4-hour structured agenda, participant roles, pre-workshop checklist, and evidence capture template, plus risk treatment summary template (HH-ISMS-RTP-001) with CEO signature block for formal residual risk acceptance across all 3 entities.

## What Was Done

### Task 1: Create workshop preparation package and risk treatment summary template

Created two documents that together enable the CEO to schedule, run, and formalize the risk assessment workshop:

**Workshop Preparation Package (`risks/methodology/workshop-preparation.md`):**
- Document ID: HH-ISMS-WRK-001, Classification: Confidential
- Workshop overview with ISO 27001 cl. 6.1.2, cl. 6.1.3, ISO 42001 cl. 6.1.2, and ISO 31000:2018 alignment
- 4 participant roles: CEO (driver/risk owner), External CISO/NorthGRC (challenge/validation), Consultant/BearingPoint (domain expertise), CISO Agent (real-time capture)
- 7-item pre-workshop checklist (methodology shared, risk register shared, CISO prepared challenge notes, consultant reviewed regulatory risks, CEO curated pre-seeded list, video conference set up, attendance confirmed)
- 6-block 4-hour agenda with time allocations and expected outputs per block
- During-workshop evidence capture template: attendance record, per-risk decision log, disagreement resolution, new risks, removed risks
- Post-workshop action items: risk treatment summary generation, CEO sign-off, Git PR for formal acceptance, evidence commit, quarterly review date

**Risk Treatment Summary Template (`risks/methodology/risk-treatment-summary.md`):**
- Document ID: HH-ISMS-RTP-001, Classification: Confidential, Status: Template
- `[CEO-SIGNOFF-REQUIRED]` marker for workflow identification
- Risk assessment methodology reference to HH-ISMS-RMA-001
- Template sections for workshop summary, risk treatment table, risk distribution summary, high/critical residual risk detail
- CEO risk acceptance statement naming all 3 entities (Helge Heupel GmbH, Helge Heupel B.V., Helge Heupel Inc.)
- Signature block with Name, Role, Date, Git PR Reference fields
- Related documents cross-references to HH-ISMS-RMA-001, HH-ISMS-POL-001, HH-ISMS-SOA-001, and risks/*.yml

**Commit:** 51a422b

### Post-checkpoint fix

Fixed formatting issues identified after CEO review:
- Replaced double dashes with em dashes for typographic consistency
- Removed NIS2 from Startup scope references (NIS2 is deferred to Growth per locked decisions)

**Commit:** c6a6031

### Task 2: Verify workshop materials are ready for distribution (Checkpoint)

CEO reviewed both documents and approved them for distribution to:
- External CISO (NorthGRC) -- challenge/validation role
- Consultant (BearingPoint) -- domain expertise on regulatory and compliance risk areas

**Status:** Approved

## Decisions Made

1. **Workshop materials approved for external distribution** -- CEO confirmed the preparation package and treatment summary template are suitable for sharing with NorthGRC and BearingPoint participants.

2. **4-hour remote workshop structure** -- 6-block agenda balancing high-risk-first review with comprehensive category sweep, designed for a single intensive session rather than multiple shorter sessions.

3. **Dual evidence mechanism** -- Both Git PR workflow (working process audit trail) and formal risk treatment summary document (HH-ISMS-RTP-001) for the auditor package, per the locked decision from Plan 03-01.

4. **All 3 entities in acceptance statement** -- CEO signature block in risk treatment summary covers GmbH, B.V., and Inc. in a single acceptance statement.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Fixed typographic double dashes and NIS2 scope reference**
- **Found during:** Post-checkpoint review
- **Issue:** Double dashes used instead of em dashes; NIS2 referenced in Startup scope where it should be deferred
- **Fix:** Replaced double dashes with em dashes; removed NIS2 from Startup scope references
- **Files modified:** risks/methodology/workshop-preparation.md, risks/methodology/risk-treatment-summary.md
- **Commit:** c6a6031

## Verification Results

- `risks/methodology/workshop-preparation.md` exists with document-id HH-ISMS-WRK-001
- Contains pre-workshop checklist (7 items), 4-hour agenda (6 blocks), evidence capture template
- Participant roles match locked decisions: CEO drives, External CISO challenges, consultant advises
- `risks/methodology/risk-treatment-summary.md` exists with document-id HH-ISMS-RTP-001
- Contains CEO signature block with acceptance statement naming all 3 entities
- Contains template tables for risk treatment summary (to be filled post-workshop)
- Both documents reference HH-ISMS-RMA-001 (risk methodology)
- CEO approved materials for distribution

## Self-Check

| Check | Status |
|-------|--------|
| workshop-preparation.md exists with HH-ISMS-WRK-001 | VERIFIED |
| risk-treatment-summary.md exists with HH-ISMS-RTP-001 | VERIFIED |
| Task 1 commit 51a422b exists | VERIFIED |
| Fix commit c6a6031 exists | VERIFIED |
| CEO approval received | VERIFIED |
| Both docs reference HH-ISMS-RMA-001 | VERIFIED |

## Self-Check: PASSED
