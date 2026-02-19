# Helge Heupel Group -- Startup SDLC Companion Document

| Field | Value |
|---|---|
| Document ID | HH-SDLC-Startup-v1.0 |
| Version | 1.0 |
| Status | Draft |
| Effective Date | TBD |
| Review Cycle | Quarterly |
| Classification | Confidential |

## Purpose

This document maps every control, gate, artifact, and role in SDLC-v2 to Startup/Growth/Enterprise phases. It is the operative guide for Phase A (Startup, <20 people). SDLC-v2 remains the Growth-phase target state.

**Naming convention:** The three maturity phases are referred to as "Startup SDLC", "Growth SDLC", and "Enterprise SDLC" throughout this document and all derivative artifacts.

**Cross-reference convention:** Each entry references SDLC-v2 using `[v2 S.X.Y.Z]` format, where X.Y.Z is the section number. To understand the full context of any entry, consult the corresponding section in SDLC-v2.md (Document ID: HH-SDLC-v2.0).

**Scope:** This document covers SDLC-v2 sections 1 through 8. Sections 9 through 18 are covered in a companion plan (01-03-PLAN).

---

## Patent-Sensitive Artifact Handling

Patent-pending innovations within Verity VE (Value Engineering) and Verity EAM (Enterprise Architecture Management) require special handling throughout the SDLC. This section defines the protocol; the actual patent artifacts are out of scope.

### Reference-by-ID-Only Protocol

All SDLC artifacts, agent outputs, compliance documents, and risk assessments must reference patent-sensitive materials by identifier only (e.g., `PAT-VE-001`, `PAT-EAM-003`). No patent-sensitive content -- including invention descriptions, claims, novel algorithms, or proprietary methodologies -- may appear inline in any SDLC artifact.

### Separate Repository Access Controls

Patent-sensitive artifacts are stored in a dedicated repository with access controls stricter than the main SDLC repository:

- **Access:** Need-to-know basis; CEO approval required for each grant
- **Audit logging:** All access events logged with immutable audit trail
- **Classification:** Strictly Confidential (highest classification tier)
- **Transfer:** Encrypted in transit and at rest; no unencrypted email or messaging

### TISAX ISA Chapter 7 Alignment

| ISA Control | Title | Startup Implementation |
|---|---|---|
| 7.1.1 | Prototype Handling | Patent artifacts classified as prototype-equivalent; handling procedures follow TISAX prototype protection requirements. Physical prototypes (if any) require locked storage with access logging. |
| 7.2.1 | Project-Specific Security Requirements | Each patent-sensitive project receives a security requirements addendum defining access scope, transfer restrictions, and disposal procedures. |
| 7.3.1 | Transfer of Prototype Information | Patent-sensitive information transfers require CEO pre-approval, encrypted channels, and recipient NDA verification. Transfer log maintained with sender, recipient, date, content ID, and authorization reference. |

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope-v2-s1)
2. [Strategic Foundation: Strategy as Code](#2-strategic-foundation-strategy-as-code-v2-s2)
3. [Governing Principles](#3-governing-principles-v2-s3)
4. [Progressive Adoption Model](#4-progressive-adoption-model-v2-s4)
5. [Enterprise Risk Management Framework](#5-enterprise-risk-management-framework-v2-s5)
6. [Unified Control Library and Compliance Matrix](#6-unified-control-library-and-compliance-matrix-v2-s6)
7. [Organizational Model](#7-organizational-model-v2-s7)
8. [Intent-Execution Architecture](#8-intent-execution-architecture-v2-v2-s8)
9. SDLC Phases *(covered in Plan 01-03)*
10. AI Integration Policy *(covered in Plan 01-03)*
11. AI Management System -- AIMS *(covered in Plan 01-03)*
12. Security and Privacy by Design *(covered in Plan 01-03)*
13. Quality Gates and Governance *(covered in Plan 01-03)*
14. UX/DX and Accessibility *(covered in Plan 01-03)*
15. Toolchain and Platform *(covered in Plan 01-03)*
16. Operations, Reliability, and Incident Management *(covered in Plan 01-03)*
17. Metrics and Continuous Improvement *(covered in Plan 01-03)*
18. Entity-Specific Addenda *(covered in Plan 01-03)*

---

## 1. Purpose and Scope [v2 S.1]

### 1.1 Strategic Context [v2 S.1.1]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Strategic context statement | [v2 S.1.1] | Startup | The strategic vision -- AI-native architecture outperforming legacy incumbents -- is unchanged by team size. Vision drives hiring, fundraising, and product decisions from day one. |

**Startup Implementation:** Adopt the strategic context as-is. The competitive positioning against incumbents (Microsoft, SAP, Planview, LeanIX) applies immediately and informs all architecture and product decisions.

**Growth Trigger:** No escalation needed; this section remains constant across phases.

### 1.2 Purpose [v2 S.1.2]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Three compounding objectives | [v2 S.1.2] | Startup | All three objectives (compliance, data advantage, AI-native productivity) apply from day one. Priority order is amplified at Startup: compliance first given the 12-week certification timeline. |
| DORA Elite+ metrics targets | [v2 S.1.2] | Growth | Lead time <4h and change failure rate <2% are aspirational targets requiring CI/CD maturity. Startup focuses on establishing the measurement baseline. |

**Startup Implementation:** Adopt the three-objective priority hierarchy (1. Compliance, 2. Data Advantage, 3. AI Productivity). When objectives conflict, compliance wins -- always. Begin measuring DORA metrics from first deployment but do not enforce Elite+ thresholds.

**Growth Trigger:** DORA metrics enforcement activates when CI/CD pipeline produces consistent baseline data (approximately 3 months of deployment history).

### 1.3 Scope [v2 S.1.3]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Verity VE and Verity EAM products | [v2 S.1.3] | Startup | Product development flows through the same SDLC phases as compliance work. Integrated, not parallel tracks per user decision. |
| Internal tooling and shared services | [v2 S.1.3] | Startup | Internal tooling is subject to the same SDLC from day one -- internal shortcuts become audit findings. |
| AI models, prompts, agent configurations | [v2 S.1.3] | Startup | All 7 Claude Code agents are AI systems under ISO 42001. Their configurations and outputs are in scope. |
| Strategy-as-Code artifacts | [v2 S.1.3] | Growth | Machine-readable strategy artifacts (OKRs, investment theses in YAML) are Growth-appropriate. Startup uses lightweight equivalents. |
| Infrastructure-as-Code, Policy-as-Code | [v2 S.1.3] | Startup | IaC and PaC are foundational for automated compliance evidence. Start simple, grow coverage. |
| Cross-entity applicability (GmbH, B.V., Inc.) | [v2 S.1.3] | Startup | All three entities are in scope from day one. Certification scope must cover the organizational boundary. |
| FedRAMP/SOC 2 specific scope | [v2 S.1.3] | Growth | FedRAMP deferred until US federal customer pipeline is active. SOC 2 deferred until US SaaS customers require it. |

**Startup Implementation:** Apply the SDLC to Verity VE, Verity EAM, internal tooling, AI agent configurations, and IaC artifacts across all three entities. Exclude FedRAMP and SOC 2 from certification scope. Patent-sensitive Verity innovations referenced by ID only (see Patent-Sensitive Artifact Handling above).

**Growth Trigger:** First US SaaS customer requiring SOC 2, or first US federal prospect requiring FedRAMP.

### 1.4 Normative References [v2 S.1.4]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| ISO 31000:2018 (risk management) | [v2 S.1.4] | Startup | Foundational for risk methodology; required for ISO 27001 and ISO 42001 certification. |
| IEC 31010:2019 (risk assessment techniques) | [v2 S.1.4] | Startup (simplified) | Use selected techniques (risk matrix, STRIDE/LINDDUN) at Startup; full technique set at Growth. |
| ISO/IEC 23894:2023 (AI risk management) | [v2 S.1.4] | Startup | Required for ISO 42001 alignment. AI risk sources taxonomy applies to all 7 agents. |
| ISO/IEC 42001:2023 (AIMS) | [v2 S.1.4] | Startup | Primary certification target. Fully normative from day one. |
| ISO/IEC 42005:2025 (AI impact assessment) | [v2 S.1.4] | Startup | Required for ISO 42001 Annex A compliance. Apply to all AI systems including agents. |
| ISO/IEC 22989:2022 (AI terminology) | [v2 S.1.4] | Startup | Ensures consistent terminology across all artifacts. Low overhead to adopt. |
| ISO/IEC 5338:2023 (AI lifecycle) | [v2 S.1.4] | Startup (simplified) | Adopt lifecycle stage concepts; full process formalization at Growth. |
| ISO/IEC 5339:2024 (AI lifecycle guidance) | [v2 S.1.4] | Growth | Supplementary guidance; not needed for initial certification. |
| ISO/IEC 5392:2024 (AI reference architecture) | [v2 S.1.4] | Growth | Formal functional decomposition deferred. |
| ISO/IEC 12792:2024 (AI transparency) | [v2 S.1.4] | Startup (simplified) | Transparency information required by EU AI Act Art. 13. Start with model cards for agents. |
| ISO/IEC 38507:2022 (governance of AI) | [v2 S.1.4] | Growth | Formal AI governance board deferred; CEO handles AI governance at Startup. |
| ISO 34504:2024 (scenario testing) | [v2 S.1.4] | Growth | Automotive AI-specific; deferred unless automotive customer requires. |
| ISO/IEC 27001:2022 (ISMS) | [v2 S.1.4] | Startup | Primary certification target. Fully normative from day one. |
| ISO/IEC 27002:2022 (IS controls) | [v2 S.1.4] | Startup | Implementation guidance for Annex A controls. |
| ISO/IEC 27005:2022 (IS risk management) | [v2 S.1.4] | Startup | Supplements 31000 for IS-specific risk. |
| ISO/IEC 27017:2015 (cloud security) | [v2 S.1.4] | Startup (simplified) | Relevant for Azure-hosted services. Apply key cloud controls. |
| ISO/IEC 27018:2019 (PII in cloud) | [v2 S.1.4] | Growth | Cloud PII-specific controls deferred to Growth. GDPR compliance handled via 27001 controls. |
| ISO/IEC 27701:2019 (privacy management) | [v2 S.1.4] | Growth | Full PIMS deferred. GDPR compliance achieved through 27001 + entity-specific addenda. |
| ISO/IEC 12207:2017 (software lifecycle) | [v2 S.1.4] | Growth | Formal lifecycle process assessment deferred. |
| ISO/IEC 15288:2023 (systems lifecycle) | [v2 S.1.4] | Enterprise | Systems engineering formalization deferred. |
| ISO/IEC 25010:2023 (software quality) | [v2 S.1.4] | Growth | Formal software quality model deferred. |
| ISO/IEC 25019:2023 (quality-in-use) | [v2 S.1.4] | Growth | Quality-in-use measurement deferred. |
| ISO/IEC 33001-33004 (process assessment) | [v2 S.1.4] | Growth | Formal process assessment deferred. Startup focuses on capability, not maturity measurement. |
| VDA ISA 6 / TISAX | [v2 S.1.4] | Startup | Existing TISAX certification must be maintained. Prototype protection (Chapter 7) is immediately relevant for patent-sensitive work. |
| SOC 2 Type II | [v2 S.1.4] | Growth | Deferred until US SaaS customer demand. |
| NIS2 Directive | [v2 S.1.4] | Startup | EU cybersecurity directive applies to GmbH and B.V. from day one. Core requirements overlap with ISO 27001. |
| FedRAMP 20x | [v2 S.1.4] | Enterprise | Deferred until US federal customer pipeline is active. Advisory review only. |
| EU AI Act | [v2 S.1.4] | Startup | Applies to GmbH and B.V. AI systems. Classification and basic compliance required. |
| SAFe 6.0 | [v2 S.1.4] | Growth | Scaled Agile framework deferred. Startup uses simple sprint-based delivery. |

**Startup Implementation:** Focus on ISO 27001, ISO 42001, ISO 31000, ISO 23894, ISO 42005, ISO 5338 (conceptual), NIS2 (core), EU AI Act (classification + basic compliance), and TISAX (maintenance). These 8-9 standards/frameworks drive the Startup certification scope. Defer the remaining 17+ standards to Growth/Enterprise.

**Growth Trigger:** Pursuit of additional certifications (SOC 2, FedRAMP) or customer requirement for specific standard compliance.

---

## 2. Strategic Foundation: Strategy as Code [v2 S.2]

### 2.1 Strategy as Code Philosophy [v2 S.2.1]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Strategy as Code as infrastructure concept | [v2 S.2.1] | Startup (simplified) | Adopt the philosophy that strategy should be encoded, versioned, and traceable. The three concrete systems (formulation, execution pipeline, feedback loops) are Growth-appropriate in their full form. |
| Strategy Formulation System | [v2 S.2.1] | Growth | Machine-readable strategic artifacts with schemas and validation rules require tooling investment disproportionate to Startup team size. |
| Strategy-Execution Pipeline | [v2 S.2.1] | Growth | CI/CD-time traceability enforcement requires mature pipeline infrastructure. |
| Feedback Loop Architecture | [v2 S.2.1] | Growth | Codified decision triggers and automated telemetry aggregation require production data maturity. |

**Startup Implementation:** Adopt Strategy-as-Code as a design principle: keep strategy artifacts in Git (even as simple Markdown), link work items to strategic objectives manually, and review strategy monthly. Do not invest in machine-enforcement, schema validation, or automated feedback loops yet.

**Growth Trigger:** Team size exceeds 15, or two independent product teams need coordinated strategic alignment.

### 2.2 Machine-Readable Strategic Artifacts [v2 S.2.2]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| strategy.yaml with full schema | [v2 S.2.2] | Growth | YAML schema with OKRs, investment theses, and value streams requires tooling to validate and enforce. |
| risk-register.yaml schema | [v2 S.2.2] | Startup (simplified) | Risk register is required for certification but can start as simplified YAML-in-Git without the full schema. |
| CI validation of strategy artifacts | [v2 S.2.2] | Growth | Automated schema validation of strategy files is Growth-appropriate. |

**Startup Implementation:** Maintain a risk register in YAML-in-Git format (per ROADMAP decision). Use simplified fields focused on certification requirements (risk ID, description, likelihood, impact, treatment, owner). Defer full schema validation, OKR YAML, and investment thesis YAML.

**Growth Trigger:** Risk register exceeds 50 entries, or strategic decisions require formal OKR tracking across multiple teams.

### 2.3 Automated WSJF Scoring Pipeline [v2 S.2.3]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| WSJF as automated calculated field | [v2 S.2.3] | Growth | Automated scoring with CI enforcement requires work management system integration. |
| Modified Fibonacci scoring scale | [v2 S.2.3] | Startup (simplified) | Use the scoring concept manually for major prioritization decisions. |
| Risk adjustment multiplier | [v2 S.2.3] | Growth | Formal 1.5x multiplier for high-risk items requires systematic risk-to-feature linking. |

**Startup Implementation:** Use WSJF concepts for manual prioritization in Linear. Score major features/epics using the four-factor formula during monthly strategy sync. Do not enforce scoring on every work item or automate the pipeline.

**Growth Trigger:** Backlog exceeds 100 items across multiple product teams, making manual prioritization unreliable.

### 2.4 Strategic Traceability Enforcement [v2 S.2.4]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| strategic_trace field on work items | [v2 S.2.4] | Growth | Full traceability chains linking every PR to an OKR require mature pipeline integration. |
| CI enforcement of strategic trace | [v2 S.2.4] | Growth | Blocking PRs for missing traces adds friction disproportionate to Startup velocity needs. |
| OPERATIONAL reserved ID for non-strategic work | [v2 S.2.4] | Growth | Exemption mechanism only needed when enforcement is active. |

**Startup Implementation:** Trace at the epic/initiative level only. Each epic in Linear should reference the strategic objective it serves. Do not enforce trace on individual stories or PRs. Review strategic alignment monthly.

**Growth Trigger:** First failed audit finding on traceability, or team unable to explain why specific features were prioritized.

### 2.5 Feedback Loop Architecture [v2 S.2.5]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Full feedback loop (telemetry to strategy update) | [v2 S.2.5] | Growth | Requires production telemetry infrastructure, OKR dashboards, and codified decision triggers. |
| Decision trigger rules | [v2 S.2.5] | Growth | Automated monitoring rules triggering pivot/persevere reviews require mature observability. |
| Phase-specific cadence table | [v2 S.2.5] | Startup (simplified) | Use the Startup cadence column as guidance: weekly feature review, bi-weekly OKR review, monthly risk review. |

**Startup Implementation:** Review product metrics manually in the weekly leadership sync. Track key adoption metrics in simple dashboards. Monthly risk register review. Strategy artifact updates as needed. No automated decision triggers.

**Growth Trigger:** Production systems generate sufficient telemetry data to justify automated monitoring and alerting pipelines.

### 2.6 Compounding Data Advantage [v2 S.2.6]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Data flywheel instrumentation | [v2 S.2.6] | Growth | Formal telemetry instrumentation as part of Definition of Done requires pipeline maturity. |
| Network externalities, economies of scale, system lock-in tracking | [v2 S.2.6] | Growth | Strategic data tracking requires production users generating meaningful usage patterns. |

**Startup Implementation:** Instrument basic product analytics (user events, feature adoption) from first release. Collect data with the intent to analyze later. Do not formalize telemetry as part of Definition of Done or enforce compliance dashboard tracking.

**Growth Trigger:** First 10 production customers generating meaningful usage data, or first enterprise customer requiring usage reporting.

---

## 3. Governing Principles [v2 S.3]

### 3.1 Core Principles [v2 S.3.1]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Principle 1: AI-Augmented, Human-Governed | [v2 S.3.1] | Startup | Core value. All 7 agents produce, humans own risk. Non-negotiable from day one. |
| Principle 2: AI Teammates as First-Class Contributors | [v2 S.3.1] | Startup | Agents ARE the team at Startup. Trust levels and review cadences must be defined. |
| Principle 3: Compliance as Code | [v2 S.3.1] | Startup (simplified) | Adopt the principle; target >60% automated compliance checks by end of Startup (not >80%). |
| Principle 4: Security by Design, Privacy by Default | [v2 S.3.1] | Startup | NIS2 Art. 21 and ISO 27001 require this. Non-negotiable. |
| Principle 5: Shift Left Everything | [v2 S.3.1] | Startup (simplified) | Shift left security and compliance testing. Defer performance and accessibility shift-left to Growth. |
| Principle 6: Zero Trust Architecture | [v2 S.3.1] | Startup (simplified) | Adopt Zero Trust for production infrastructure. Internal dev environments may use simplified trust model initially. |
| Principle 7: Trunk-Based Development with Feature Flags | [v2 S.3.1] | Startup | Adopt from day one. Short-lived branches and feature flags are lightweight and high-value. |
| Principle 8: Everything as Code | [v2 S.3.1] | Startup | Core principle. All governance artifacts in Git from day one. |
| Principle 9: Radical Traceability | [v2 S.3.1] | Growth | Full strategic trace (every production artifact to a strategic objective) requires mature pipeline. Startup traces at epic level. |
| Principle 10: Minimum Viable Governance | [v2 S.3.1] | Startup | This IS the operative principle for Startup. Every ceremony and artifact must justify its existence. |
| Principle 11: Risk-Driven Decision Making | [v2 S.3.1] | Startup | Risk-based decisions are required for certification. Apply to all high/critical-impact decisions. |
| Principle 12: Progressive Formalization | [v2 S.3.1] | Startup | This principle defines the Startup phase itself. Fully applicable. |

**Startup Implementation:** All 12 principles apply in spirit from day one. Principles 1, 2, 4, 7, 8, 10, 11, 12 apply fully. Principles 3, 5, 6 apply in simplified form. Principle 9 deferred to Growth in its full enforcement form. Measurement targets adjusted: >60% automated compliance checks (not >80%), threat model coverage best-effort (not 100%).

**Growth Trigger:** Team size, product complexity, or audit findings indicate that simplified principle application is insufficient.

### 3.2 Principle Conflict Resolution [v2 S.3.2]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Priority order (Safety > Compliance > Risk > Governance Simplicity > Productivity) | [v2 S.3.2] | Startup | The priority order applies universally. No phase dependency. |
| Formal conflict resolution process | [v2 S.3.2] | Growth | Formal documented conflict resolution requires governance infrastructure. Startup resolves conflicts through CEO decision in the weekly leadership sync. |

**Startup Implementation:** Adopt the priority order as-is. When principles conflict, apply the ranking: Safety/Security first, then Compliance, then Risk Management, then Governance Simplicity, then Productivity. Document resolution decisions in meeting notes. Formal process documentation at Growth.

**Growth Trigger:** First conflict resolution that affects multiple teams or has audit implications.

---

## 4. Progressive Adoption Model [v2 S.4]

### 4.1 Overview [v2 S.4.1]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Three-phase progressive adoption framework | [v2 S.4.1] | Startup | This framework IS the governing model for scope decisions. The overview establishes that premature governance is as dangerous as absent governance. Fully applicable. |

**Startup Implementation:** Use this section as the conceptual foundation for all "Startup vs. Growth vs. Enterprise" decisions in this companion document. Reference it when justifying deferrals.

**Growth Trigger:** N/A -- this section governs all phases.

### 4.2 Phase A: Startup [v2 S.4.2]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Organizational model (single team) | [v2 S.4.2] | Startup | The operative section. Single cross-functional team with sprint-based delivery. Directly applicable. |
| Team composition | [v2 S.4.2] | Startup | V2 assumes generic roles; user decision maps to 6 humans + 7 agents (see Section 7 for mapping). |
| Governance: Leadership Sync (weekly, 60 min) | [v2 S.4.2] | Startup | User decision modifies to 2 meetings: Weekly Technical (30 min) + Monthly Strategic (60 min) per OVLY-03. |
| Ceremonies (sprint planning, standup, review, retro) | [v2 S.4.2] | Startup | Standard agile ceremonies apply. Adapt cadence to actual team rhythm. |
| Compliance approach (ISO 27001 + ISO 42001 first) | [v2 S.4.2] | Startup | Aligns with certification timeline. ISO 27001 + ISO 42001 certification readiness by mid-May 2026. |
| Quality gates G0-G4 (mostly automated) | [v2 S.4.2] | Startup | Risk-tiered gates with automated pipeline for low/medium risk. CTO approval for high-risk changes only. |

**Startup Implementation:** This is the primary reference for current operations. Key modifications from v2: (1) governance is 2 meetings not 1 (per user decision), (2) team composition is 6 humans + 7 agents not generic roles, (3) TISAX maintenance is in scope alongside ISO 27001 + ISO 42001. See governance-model.md (OVLY-03) for detailed meeting structure.

**Growth Trigger:** Any Phase A to B transition trigger from [v2 S.4.5]: team size >20, two products need independent release cycles, enterprise customer requires formal certification, revenue >EUR 2M.

### 4.3 Phase B: Growth Organization [v2 S.4.3]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Single ART with 3-4 teams | [v2 S.4.3] | Growth | Not applicable now. Reference only for understanding what Growth looks like. |
| PI Planning (10-week cycles) | [v2 S.4.3] | Growth | Heavyweight planning ceremony; not justified at Startup scale. |
| Technical + Portfolio governance (2 forums) | [v2 S.4.3] | Growth | Startup already has 2 meetings per user decision; Growth formalizes them differently. |
| CAB for High/Critical changes | [v2 S.4.3] | Growth | Change Advisory Board not needed when CTO approves all high-risk changes directly. |

**Startup Implementation:** Read for awareness only. Do not implement any Growth-phase governance.

**Growth Trigger:** See [v2 S.4.5] transition triggers.

### 4.4 Phase C: Enterprise Organization [v2 S.4.4]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Dual ART, 6-10 teams | [v2 S.4.4] | Enterprise | Not applicable now. Reference only. |
| Five governance bodies | [v2 S.4.4] | Enterprise | Massive overhead; justified only at 80+ people. |
| All seven frameworks actively maintained | [v2 S.4.4] | Enterprise | Only 3 frameworks active at Startup (ISO 27001, ISO 42001, TISAX). |

**Startup Implementation:** Read for awareness only. This is the long-term target state described in SDLC-v2.

**Growth Trigger:** See [v2 S.4.5] transition triggers.

### 4.5 Transition Triggers [v2 S.4.5]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| A-to-B trigger conditions (team size, products, customer, revenue) | [v2 S.4.5] | Startup | Must document triggers now so the team knows when to escalate. These are the guardrails that prevent both premature and delayed governance growth. |
| B-to-C trigger conditions | [v2 S.4.5] | Growth | Reference only; not actionable at Startup. |
| 2-PI transition implementation window | [v2 S.4.5] | Growth | Transition execution process activates only when a trigger fires. |

**Startup Implementation:** Post the A-to-B transition triggers visibly. Review monthly in the Strategic Governance meeting. Any trigger condition met should initiate a formal transition discussion. Triggers: (1) team >20 people, (2) two products need independent releases, (3) enterprise customer needs formal certification evidence, (4) revenue >EUR 2M.

**Growth Trigger:** Any A-to-B trigger condition is met.

### 4.6 Phase Comparison Matrix [v2 S.4.6]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Phase comparison table (people, teams, products, governance, cadence, etc.) | [v2 S.4.6] | Startup | Useful reference for the entire team. Helps calibrate expectations: what we do now vs. what we will do later. |

**Startup Implementation:** Use the Phase A column as the operative baseline. Print/post the full matrix for team awareness. During onboarding, walk new team members through the three phases to establish shared understanding of the growth path.

**Growth Trigger:** N/A -- reference document, always applicable.

---
