---
phase: 02-ciso-agent-and-is-ai-policy-foundation
plan: 02
subsystem: compliance
tags: [iso-27001, iso-42001, isms, aims, is-policy, scope-statements, nis2, annex-sl, ims-context, information-classification]

# Dependency graph
requires:
  - phase: 02-ciso-agent-and-is-ai-policy-foundation
    provides: "CISO Agent CLAUDE.md with domain context, 5-archetype expertise, balanced ISO 27001/42001 focus"
  - phase: 01-startup-overlay-and-agent-foundation
    provides: "Agent definition template, governance model, RACI matrix, SDLC-Startup-v2 companion"
provides:
  - "IMS Context preamble (HH-IMS-CTX-001) -- shared foundation for IS Policy and AI Policy"
  - "Information Security Policy (HH-ISMS-POL-001) -- formal audit-facing policy with NIS2UmsuCG Sec. 38 management body liability"
  - "IS Policy Operational Annex (HH-ISMS-POL-001-ANNEX) -- team-facing procedures with NIS2 incident reporting checklists"
  - "3 ISMS Scope Statements (GmbH full, B.V. full, Inc. skeleton) with inter-entity interfaces"
  - "3 AIMS Scope Statements (GmbH full, B.V. full, Inc. skeleton) with AI system inventory tables"
affects: [phase-02-plan-03-ai-policy-doccontrol, phase-03-risk-framework, phase-04-cto-appsec-agents, phase-05-aims-core, phase-07-security-architecture, phase-08-audit-readiness]

# Tech tracking
tech-stack:
  added: []
  patterns: [hybrid-policy-plus-annex, per-entity-scope-statements, ims-context-preamble, annex-sl-harmonized-structure, eu-first-skeleton-approach]

key-files:
  created:
    - policies/IMS-Context.md
    - policies/IS-Policy.md
    - policies/IS-Policy-Annex.md
    - policies/scope/ISMS-Scope-GmbH.md
    - policies/scope/ISMS-Scope-BV.md
    - policies/scope/ISMS-Scope-Inc.md
    - policies/scope/AIMS-Scope-GmbH.md
    - policies/scope/AIMS-Scope-BV.md
    - policies/scope/AIMS-Scope-Inc.md
  modified: []

key-decisions:
  - "IMS Context structured as 6 sections: Org Overview, IMS Scope, Annex SL Alignment, Document Hierarchy, Management Commitment, Climate Change"
  - "IS Policy uses 12-section structure sourced from EU-CA-sections.md with German and Dutch executive summaries"
  - "IS Policy Annex mirrors IS Policy 1:1 with 11 operational annexes plus interim incident response and tools reference"
  - "ISMS/AIMS scopes follow EU-first approach: GmbH and B.V. fully detailed, Inc. skeleton with TO BE COMPLETED markers"
  - "All AIMS scopes include AI system inventory table with EU AI Act risk classification (Limited-Risk per Art. 52)"
  - "Dual-axis AI risk classification: EU AI Act product risk x SDLC usage tier"
  - "4-level information classification scheme (Public, Internal, Confidential, Secret) aligned with TISAX ISA Chapter 7"

patterns-established:
  - "Hybrid policy + annex pattern: formal 3-6 page policy (auditor-facing) + operational annex (team-facing)"
  - "Per-entity scope statement pattern: separate ISMS and AIMS scopes per legal entity with explicit inter-entity interfaces"
  - "IMS Context preamble pattern: shared foundation document referenced by both IS Policy and AI Policy"
  - "EU-first skeleton approach: full detail for GmbH/B.V., skeleton with completion markers for Inc."
  - "AI system inventory table pattern: system, provider, EU AI Act classification, lifecycle status, ISO 42001 Annex A applicability"

requirements-completed: [ISMS-01, ISMS-02]

# Metrics
duration: 11min
completed: 2026-02-19
---

# Phase 2 Plan 02: IMS Context + IS Policy + ISMS/AIMS Scope Statements Summary

**IMS Context preamble with Annex SL alignment, Information Security Policy with NIS2UmsuCG Sec. 38 management body liability and German/Dutch executive summaries, operational annex with NIS2 incident reporting checklists, and 6 per-entity ISMS/AIMS scope statements with AI system inventories**

## Performance

- **Duration:** 11 min
- **Started:** 2026-02-19T13:52:40Z
- **Completed:** 2026-02-19T14:04:08Z
- **Tasks:** 2
- **Files created:** 9

## Accomplishments

- IMS Context preamble (HH-IMS-CTX-001) establishing the integrated ISMS + AIMS relationship with explicit Annex SL clause-by-clause alignment table, CEO management commitment with NIS2UmsuCG Sec. 38 acknowledgment, and ISO 27001:2022/Amd 1:2024 climate change acknowledgment
- Information Security Policy (HH-ISMS-POL-001) with 12 sections satisfying ISO 27001 cl. 5.2: measurable IS objectives, named HH personnel and AI agents, NIS2UmsuCG and Wbni regulatory compliance, 4-level classification scheme, exception process, and German/Dutch executive summaries
- IS Policy Operational Annex (HH-ISMS-POL-001-ANNEX) translating every policy section into actionable procedures: NIS2 incident reporting checklists for both BSI (GmbH) and NCSC-NL (B.V.), classification handling procedures, exception request Git PR template, interim incident response with severity classification
- 3 ISMS scope statements covering all entities: GmbH (10 fully detailed sections, NIS2UmsuCG regulatory context), B.V. (10 fully detailed sections, Wbni regulatory context), Inc. (3 detailed + 7 skeleton sections with TO BE COMPLETED markers)
- 3 AIMS scope statements with AI system inventory tables: 9 AI systems (7 Claude Code agents + ChatGPT + Codex) classified as Limited-Risk per EU AI Act Art. 52, dual-axis risk classification framework, human oversight measures at Trust Level 2

## Task Commits

Each task was committed atomically:

1. **Task 1: Create IMS Context preamble and IS Policy with operational annex** - `2203b38` (feat)
2. **Task 2: Create ISMS and AIMS scope statements for all 3 entities** - `3083561` (feat)

## Files Created/Modified

- `policies/IMS-Context.md` -- IMS Context preamble (HH-IMS-CTX-001). 6 sections: Organization Overview, IMS Scope, Annex SL Alignment, Document Hierarchy, Management Commitment, Climate Change Acknowledgment. ~150 lines.
- `policies/IS-Policy.md` -- Information Security Policy (HH-ISMS-POL-001). 12 sections: Purpose/Scope, Management Commitment (NIS2UmsuCG Sec. 38), IS Objectives (7 measurable), Roles/Responsibilities (6 humans + 7 agents), Risk Management (risk appetite summary), Classification (4 levels), Regulatory Compliance (NIS2/Wbni/GDPR), Communication/Review, Exceptions/Violations, Zusammenfassung, Samenvatting, Document Control. ~350 lines.
- `policies/IS-Policy-Annex.md` -- IS Policy Operational Annex (HH-ISMS-POL-001-ANNEX). 11 operational sections + interim incident response + tools reference. NIS2 incident reporting checklists for BSI and NCSC-NL. Exception request PR template. ~450 lines.
- `policies/scope/ISMS-Scope-GmbH.md` -- ISMS Scope for GmbH. Full 10-section scope: legal entity, organizational scope, services, information assets (7 AI agents), technology (Azure West Europe/Germany West Central), people (5 GmbH personnel), locations (cloud-only), inter-entity interfaces, exclusions, regulatory context (NIS2UmsuCG, BSI, BDSG, TISAX).
- `policies/scope/ISMS-Scope-BV.md` -- ISMS Scope for B.V. Full 10-section scope: legal entity (KVK), organizational scope, services, information assets (7 AI agents), technology (shared Azure), people (2 B.V. + 4 shared), locations (cloud-only NL), inter-entity interfaces, exclusions, regulatory context (Wbni, AVG, NCSC-NL).
- `policies/scope/ISMS-Scope-Inc.md` -- ISMS Scope for Inc. Skeleton: 3 detailed sections (legal entity, organizational scope, services) + 7 sections with [TO BE COMPLETED during Startup phase] markers.
- `policies/scope/AIMS-Scope-GmbH.md` -- AIMS Scope for GmbH. Full 9-section scope: legal entity, AI system scope (7 agents + ChatGPT + Codex + future Verity AI), AI system inventory table (11 systems with EU AI Act classification), AI data scope, AI risk context, human oversight (Trust Level 2), interfaces, exclusions, regulatory context (EU AI Act, ISO 42001).
- `policies/scope/AIMS-Scope-BV.md` -- AIMS Scope for B.V. Full 9-section scope with B.V.-specific EU market provider/deployer obligations under EU AI Act.
- `policies/scope/AIMS-Scope-Inc.md` -- AIMS Scope for Inc. Skeleton: 2 detailed sections (legal entity, AI system scope) + 7 sections with [TO BE COMPLETED during Startup phase] markers.

## Decisions Made

- **IMS Context 6-section structure:** Organization Overview, IMS Scope, Annex SL Alignment, Document Hierarchy, Management Commitment, Climate Change. Placed climate change as its own section (not buried in context analysis) to ensure auditor visibility per ISO 27001:2022/Amd 1:2024.
- **IS Policy 12-section structure:** Followed the research code example from phase2/EU-CA-sections.md. Added German and Dutch executive summaries as separate sections (10 and 11) rather than inline translations. Document Control as section 12.
- **Annex section count (11 + 2 extras):** The annex maps 1:1 to IS Policy sections 1-9 (Annexes 1-9), adds Annex 10 for interim incident response (bridging until Phase 7 detailed procedure), and Annex 11 for tools reference table. This exceeds the strict 1:1 mapping but provides completeness.
- **4-level classification (not TISAX 5-level):** Used Public/Internal/Confidential/Secret aligned with user decision. TISAX ISA Chapter 7 uses "Strictly Confidential" instead of "Secret" -- the policy notes TISAX alignment without adopting the TISAX terminology to maintain consistency across non-TISAX contexts.
- **AIMS AI system inventory includes 11 systems:** 7 Claude Code agents + ChatGPT + Codex + 2 future Verity AI systems. All current systems classified as Limited-Risk per EU AI Act Art. 52. Verity AI classified as "To be classified" pending product-level risk assessment.
- **Dual-axis AI risk classification:** EU AI Act product risk (Unacceptable/High/Limited/Minimal) x SDLC usage tier (Internal tool/Decision support/Customer-facing/Autonomous). This framework supports both regulatory compliance and operational risk management.

## Deviations from Plan

None -- plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None -- no external service configuration required.

## Next Phase Readiness

- IMS Context preamble (HH-IMS-CTX-001) is ready for Plan 02-03 (AI Policy) to reference as shared foundation
- IS Policy (HH-ISMS-POL-001) provides the foundation for Phase 3 (Risk Assessment Methodology) risk appetite and risk management approach
- ISMS scope statements define the boundaries for Phase 3 risk assessment scope
- AIMS scope statements with AI system inventory tables provide the foundation for Phase 5 (AIMS Core)
- All 9 documents use consistent document IDs and cross-references, ready for document register inclusion in Plan 02-03
- IS Policy classification scheme (4 levels) is referenced by all downstream security artifacts
- NIS2UmsuCG and Wbni compliance content is ready for Phase 7 (Security Architecture) incident response detail

---
*Phase: 02-ciso-agent-and-is-ai-policy-foundation*
*Completed: 2026-02-19*

## Self-Check: PASSED

All 9 created files verified on disk. Task commits (2203b38, 3083561) verified in git log. SUMMARY.md exists.
