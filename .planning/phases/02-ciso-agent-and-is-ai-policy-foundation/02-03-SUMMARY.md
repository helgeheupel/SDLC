---
phase: 02-ciso-agent-and-is-ai-policy-foundation
plan: 03
subsystem: compliance
tags: [iso-42001, ai-policy, eu-ai-act, document-control, prohibited-practices, git-based-compliance, information-classification, tisax]

# Dependency graph
requires:
  - phase: 02-ciso-agent-and-is-ai-policy-foundation
    provides: "CISO Agent CLAUDE.md with 5-archetype expertise, domain context reference"
provides:
  - "AI Policy (HH-AIMS-POL-001) -- formal governance document per ISO 42001 cl. 5.2 and Annex A.2"
  - "AI Policy Operational Annex (HH-AIMS-POL-001-ANNEX) -- actionable procedures with prohibited practices checklist"
  - "Document Control Framework (HH-ISMS-DOC-001) -- cl. 7.5 to Git mapping for all management system documents"
  - "Document Register (HH-ISMS-REG-001) -- living index of 16 controlled documents and 22+ external references"
affects: [phase-03-risk-framework, phase-04-cto-appsec-agents, phase-05-aims-core, phase-07-security-architecture, phase-08-audit-readiness, phase-09-toolchain-integration, phase-10-agent-documentation]

# Tech tracking
tech-stack:
  added: []
  patterns: [hybrid-policy-annex, git-based-document-control, dual-axis-ai-classification, prohibited-practices-checklist, yaml-frontmatter-metadata]

key-files:
  created:
    - policies/AI-Policy.md
    - policies/AI-Policy-Annex.md
    - policies/document-control.md
    - policies/document-register.md
  modified: []

key-decisions:
  - "AI Policy review cycle is semi-annual (faster than IS Policy annual) because AI regulation evolves rapidly"
  - "14 prohibited practices: 8 EU AI Act Art. 5 + 6 HH-specific (deterministic verification, Secret data access, risk acceptance, production modification, customer data training, non-approved tools)"
  - "Document register as separate living file (not inline in document-control.md) so the register can be updated without re-versioning the framework"
  - "4 information classification levels (Public, Internal, Confidential, Secret) with TISAX ISA protection need alignment"
  - "AI-generated content follows same approval workflow as human-authored documents with additional factual accuracy checks"
  - "16 controlled documents registered spanning IMS, ISMS policies, AIMS policies, scope statements (6), governance docs, and agent reference"

patterns-established:
  - "Hybrid policy + operational annex: formal policy (auditor-facing) + linked annex (team-facing procedures) with 1:1 section mapping"
  - "Git-based document control: every ISO 27001 cl. 7.5 requirement mapped to a Git mechanism with evidence pointer"
  - "YAML frontmatter metadata standard: 12 required + 5 optional fields for all controlled documents"
  - "Prohibited practices checklist pattern: decision tree with STOP gates for EU AI Act Art. 5 + HH-specific prohibitions"
  - "Document register as living index: separate file updated continuously, formally reviewed semi-annually"
  - "Version numbering: semantic (v1.0, v1.1, v2.0) + date stamp + Git tag (doc/{id}/v{version})"

requirements-completed: [AIMS-01, ISMS-09]

# Metrics
duration: 10min
completed: 2026-02-19
---

# Phase 2 Plan 03: AI Policy and Document Control Framework Summary

**AI Policy with 14 prohibited practices (8 EU AI Act Art. 5 + 6 HH-specific), dual-axis classification framework, and Git-based document control mapping all ISO 27001 cl. 7.5 sub-requirements with 16-document register**

## Performance

- **Duration:** 10 min
- **Started:** 2026-02-19T13:52:50Z
- **Completed:** 2026-02-19T14:03:01Z
- **Tasks:** 2
- **Files modified:** 4

## Accomplishments

- AI Policy (HH-AIMS-POL-001) with all 12 sections per ISO 42001 cl. 5.2 and Annex A.2, including explicit prohibited practices section with 8 EU AI Act Art. 5 practices and 6 HH-specific prohibitions
- AI Policy Operational Annex (HH-AIMS-POL-001-ANNEX) with 1:1 section mapping, prohibited practices decision checklist and decision tree, 6-step AI system registration process, and agent-specific compliance procedures
- Document Control Framework (HH-ISMS-DOC-001) with explicit cl. 7.5 to Git mapping table (7.5.1, 7.5.2, 7.5.3), 12-field metadata standard, 4-level information classification with TISAX alignment, and AI-generated content handling provisions
- Document Register (HH-ISMS-REG-001) as a separate living file listing 16 controlled documents, 13 ISO standards, 6 regulations, 2 industry standards, and 3 vendor certifications
- German (Zusammenfassung) and Dutch (Samenvatting) executive summaries in the AI Policy
- Dual-axis AI system classification: EU AI Act risk level (Unacceptable/High/Limited/Minimal) x SDLC usage tier (Assistant/Collaborator/Decision Support)

## Task Commits

Each task was committed atomically:

1. **Task 1: Create AI Policy with operational annex** - `2203b38` (feat)
2. **Task 2: Create document control framework and document register** - `5f536be` (feat)

## Files Created/Modified

- `policies/AI-Policy.md` -- AI Policy (HH-AIMS-POL-001). 12 sections: Purpose and Scope, Management Commitment, AI Governance Principles (8 principles), AI System Classification (dual-axis), Prohibited Practices (14 total), Roles and Responsibilities (6 humans + 7 agents named), AI System Lifecycle Requirements, Regulatory Compliance (EU AI Act, ISO 42001, NIS2, US advisory), Policy Communication and Review (semi-annual), German Executive Summary, Dutch Executive Summary, Document Control.
- `policies/AI-Policy-Annex.md` -- AI Policy Operational Annex (HH-AIMS-POL-001-ANNEX). 10 sections with 1:1 mapping to AI Policy. Includes: scope operationalization with current AI systems inventory, management commitment evidence table, human oversight checklist, EU AI Act classification decision tree, prohibited practices screening checklist (14 STOP gates), roles in meetings, 6-step AI system registration process, EU AI Act conformity timeline, AI incident reporting procedures, agent-specific compliance guide (Trust Level, PR review, data handling).
- `policies/document-control.md` -- Document Control Framework (HH-ISMS-DOC-001). 10 sections: Purpose, Scope, ISO 27001 cl. 7.5 Mapping to Git (full table), Document Metadata Standard (12 required + 5 optional fields), Version Numbering Convention, Approval Workflow (standard + emergency + AI-generated), Information Classification and Handling (4 levels with TISAX alignment), Document Review and Retention (with retention periods), External Documents, Document Control for AI-Generated Content.
- `policies/document-register.md` -- Document Register (HH-ISMS-REG-001). 16 controlled documents across 7 categories (IMS, ISMS policies, AIMS policies, ISMS scopes, AIMS scopes, governance, agent reference). External references: 13 ISO standards, 6 regulations, 2 industry standards, 3 vendor certifications.

## Decisions Made

- **Semi-annual AI Policy review:** Faster than IS Policy annual cycle because AI regulation (EU AI Act implementing acts, national transpositions) evolves more rapidly than traditional information security regulation. The semi-annual cadence matches the EU AI Act milestone timeline (Art. 5 Feb 2025, Art. 4 Aug 2025, full conformity Aug 2026).
- **14 prohibited practices (8 EU AI Act + 6 HH-specific):** The 8 EU AI Act Art. 5 practices are enumerated exactly. The 6 HH-specific additions address the unique risk of AI agents operating in the development process: no AI output to customers without verification, no Secret data access without CEO auth, no AI risk acceptance, no production modifications, no customer data training without consent/DPA, no non-approved AI tools.
- **Document register as separate file:** Following the research recommendation, the register is a separate `document-register.md` rather than inline in `document-control.md`. Rationale: the register changes with every new document (Phases 3-10), while the framework (describing the process) remains stable.
- **4 classification levels with TISAX alignment:** Public/Internal/Confidential/Secret mapped to TISAX ISA protection need levels (None/Normal/High/Very High). This dual alignment satisfies both ISO 27001 and TISAX requirements.
- **AI-generated content same approval workflow:** Documents drafted by Claude Code agents follow the identical CISO+CTO review, CEO approve workflow as human-authored documents, with added factual accuracy verification. No separate "AI document" track.
- **16 controlled documents in register:** Includes all documents from Plan 02-02 (IMS Context, IS Policy + Annex, 3 ISMS scopes, 3 AIMS scopes) even though Plan 02-02 has not yet executed. These entries are listed as Draft status and will be validated when 02-02 completes.

## Deviations from Plan

None -- plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None -- no external service configuration required.

## Next Phase Readiness

- AI Policy is ready for formal review and CEO approval via PR
- Document control framework governs all subsequent document creation (Phases 3-10)
- Document register provides the living index for tracking all compliance artifacts
- Phase 3 (Risk Framework) can now reference the AI Policy for AI risk context and the document control framework for artifact governance
- Phase 4 (CTO/AppSec Agents) can reference the AI Policy for AI governance constraints
- Phase 5 (AIMS Core) builds directly on the AI Policy foundation, AI system classification, and prohibited practices

---
*Phase: 02-ciso-agent-and-is-ai-policy-foundation*
*Completed: 2026-02-19*

## Self-Check: PASSED

All 4 created files verified on disk. Task commits (2203b38, 5f536be) verified in git log. SUMMARY.md exists.
