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

## 5. Enterprise Risk Management Framework [v2 S.5]

### 5.1 Risk Management Principles [v2 S.5.1]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| ISO 31000 risk management principles (5 principles) | [v2 S.5.1] | Startup | These are values, not mechanisms. All five principles (value creation, integration, structured/comprehensive, dynamic, best available information) apply from day one. Required for ISO 27001 and ISO 42001 certification. |

**Startup Implementation:** Adopt all five risk management principles. Operationalize them through the simplified risk methodology described below: risk assessment embedded in SDLC phases, risk register as living artifact in Git, and risk activities informing every gate decision.

**Growth Trigger:** No escalation needed; principles are phase-independent.

### 5.2 Risk Appetite Statement [v2 S.5.2]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Risk appetite statement (general) | [v2 S.5.2] | Startup | Must define risk appetite for ISO 27001 certification. Management must approve it. |
| Risk appetite by category (6 categories) | [v2 S.5.2.1] | Startup | All six categories (Strategic, Operational, Compliance, AI, Financial, Reputational) are relevant. The appetite levels defined in v2 are appropriate for Startup. |
| Risk tolerance thresholds (5 levels with EUR values) | [v2 S.5.2.2] | Startup (simplified) | Adopt the threshold structure but adjust EUR values to Startup scale. Full quantitative thresholds assume Growth-stage revenue. |
| Residual risk acceptance authority | [v2 S.5.2.3] | Startup (simplified) | CEO is the ultimate residual risk acceptance authority per user decision. Simplify the authority matrix: CEO accepts all High/Critical residual risk; team leads accept Low/Medium. |

**Startup Implementation:** Produce a risk appetite statement covering all six categories with CEO approval. Simplify tolerance thresholds to Startup scale. Residual risk acceptance: Low/Medium by risk owner, High/Critical by CEO (not CTO/CISO split as in v2, because CEO covers CISO responsibilities at Startup per user decision).

**Growth Trigger:** Dedicated CISO hired (6th person), enabling the dual CTO/CISO acceptance authority described in v2.

### 5.3 Risk Taxonomy [v2 S.5.3]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Level 1 risk categories (6 categories) | [v2 S.5.3.1] | Startup | STR, OPS, CMP, AIR, FIN, REP categories provide comprehensive coverage. Adopt fully. |
| Level 2 subcategories (~20 subcategories) | [v2 S.5.3.2] | Startup (simplified) | Adopt the most relevant subcategories: OPS.SEC (cybersecurity), CMP.CRT (certification), AIR.MDL (AI model risk), AIR.OUT (AI output risk). Full 20 subcategories adopted progressively. |
| Level 3 specific risks (individual register entries) | [v2 S.5.3.3] | Growth | Full Level 3 taxonomy maintained as living catalog. Startup populates Level 3 as risks are identified (top 30 in initial workshop). |

**Startup Implementation:** Adopt all 6 Level 1 categories. Use 10-12 most relevant Level 2 subcategories immediately (OPS.SEC, OPS.BCP, OPS.SUP, CMP.CRT, CMP.REG, CMP.DAT, AIR.DAT, AIR.MDL, AIR.OUT, STR.MKT, FIN.REV, REP.BRD). Populate Level 3 through initial risk workshop (target: top 30 risks). Remaining Level 2 subcategories added as the risk register matures.

**Growth Trigger:** Risk register exceeds 50 entries, requiring full Level 2 subcategory coverage for effective classification.

### 5.4 Risk Assessment Methodology [v2 S.5.4]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| 5x5 qualitative likelihood-impact matrix | [v2 S.5.4.1] | Startup | Required for ISO 27001 certification. Calibrated scales ensure consistent risk scoring. Adopt fully with the defined likelihood and impact scales. |
| FAIR quantitative methodology + Monte Carlo | [v2 S.5.4.2] | Growth | Quantitative analysis requires specialized skills, tooling (RiskLens/SAFE One/Python), and sufficient risk data. Startup lacks the data volume and analyst capacity. |
| IEC 31010 technique selection per SDLC phase | [v2 S.5.4.3] | Startup (simplified) | Use risk matrix for all phases. Add STRIDE/LINDDUN for threat modeling (Phase 1/Requirements). Add change risk scoring for deployments (Phase 4). Defer FMEA, BIA, Bow-Tie, Bayesian analysis, and Markov analysis to Growth. |

**Startup Implementation:** Use the 5x5 qualitative matrix for all risk assessments. Adopt the calibrated likelihood scale (Rare through Almost Certain with annual probability bounds) and impact scale (Negligible through Severe across four dimensions). Risk rating = Likelihood x Impact with the four-level classification (Low 1-6, Medium 7-12, High 13-19, Critical 20-25). Defer FAIR quantitative analysis entirely.

**Growth Trigger:** First risk requiring investment justification >EUR 100K, or auditor feedback requesting quantitative risk analysis.

### 5.5 Risk Register Architecture [v2 S.5.5]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Risk entry schema (full JSON schema) | [v2 S.5.5.1] | Startup (simplified) | The full schema has 50+ fields including quantitative, AI-specific, and multi-framework compliance fields. Startup uses a simplified schema focused on certification-required fields. |
| Risk register operations (GRC platform, automation, KRI feeds) | [v2 S.5.5.2] | Growth | Full GRC platform automation with KRI feeds from Azure Monitor/Sentinel requires infrastructure investment. Startup uses NorthGRC (per constraint) with manual entry. |

**Startup Implementation:** Maintain risk register in YAML-in-Git format with simplified schema: riskId, title, description, category (L1), subcategory (L2), likelihood (1-5), impact (1-5), riskLevel, owner, treatment strategy, treatment actions, residualRiskLevel, status, affectedEntities, reviewDate. Sync with NorthGRC manually for evidence management. AI-specific fields (isAIRisk, iso23894Category, euAIActClassification) included for AI-related risks only.

**Growth Trigger:** Risk register exceeds 50 entries or automated KRI feeds become available from monitoring infrastructure.

### 5.6 Cross-Framework Risk Integration [v2 S.5.6]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Single assessment producing multiple framework outputs | [v2 S.5.6] | Growth | Cross-framework risk integration requires mature GRC tooling and familiarity with all seven framework requirements. Startup focuses on ISO 27001 + ISO 42001 integration only. |
| Framework-specific evidence package generation | [v2 S.5.6.1] | Growth | Automated evidence package generation from a single assessment requires GRC platform automation. |

**Startup Implementation:** Conduct risk assessments that satisfy both ISO 27001 (clause 6.1.2) and ISO 42001 (clause 6.1.2) simultaneously. For each risk, note whether it is an IS risk, AI risk, or both. Defer TISAX-, SOC 2-, NIS2-, FedRAMP-, and EU AI Act-specific evidence generation to Growth. NIS2 overlap with ISO 27001 is handled through shared controls.

**Growth Trigger:** Pursuit of SOC 2 or FedRAMP certification requiring dedicated evidence packages.

### 5.7 Risk Communication and Reporting [v2 S.5.7]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Real-time risk dashboard (role-based) | [v2 S.5.7.1] | Growth | Real-time dashboards require GRC platform integration and automated data feeds. |
| Reporting cadence (KRI alerts, monthly, quarterly, annual) | [v2 S.5.7.2] | Startup (simplified) | Startup uses monthly risk reporting and quarterly full review. No real-time KRI alerts. |
| Risk escalation protocol (KRI breach, score increases) | [v2 S.5.7.3] | Startup (simplified) | Simplified escalation: risk owner notifies CEO directly for High/Critical risks. No tiered escalation through ART-level management. |

**Startup Implementation:** Monthly risk summary presented in the monthly strategic governance meeting. Quarterly full risk register review. Escalation protocol: risk owner raises High/Critical risks to CEO within 24 hours via direct communication. No automated KRI monitoring or real-time dashboards.

**Growth Trigger:** Risk register exceeds 50 entries, or automated monitoring infrastructure enables real-time KRI feeds.

### 5.8 Progressive Adoption of Risk Framework [v2 S.5.8]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Startup stage (months 0-6) requirements | [v2 S.5.8.1] | Startup | This IS the operative section. Describes exactly what to implement now. |
| Growth stage (months 6-18) enhancements | [v2 S.5.8.2] | Growth | Reference only. Describes what to add when transitioning. |
| Enterprise stage (months 18-36) full maturity | [v2 S.5.8.3] | Enterprise | Reference only. |

**Startup Implementation:** Follow [v2 S.5.8.1] as the implementation checklist: (1) CEO-approved risk appetite statement, (2) full 3-level taxonomy adopted with Level 3 populated as risks are identified, (3) NorthGRC configured with simplified schema, (4) initial workshop to populate top 30 risks, (5) qualitative 5x5 matrix only, (6) CEO as enterprise risk owner, (7) quarterly full review + monthly top-10 review, (8) risk activities in Phase 0 (Orient) and Phase 4 (Deployment) gates.

**Growth Trigger:** Growth stage triggers per [v2 S.5.8.2]: FAIR analysis for High/Critical risks, automated KRI feeds, monthly full review, real-time dashboard.

---

## 6. Unified Control Library and Compliance Matrix [v2 S.6]

### 6.1 UCL Architecture [v2 S.6.1]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| UCL purpose and scope (single source of truth for all frameworks) | [v2 S.6.1.1] | Startup | The concept of a unified control library applies from day one, even if Startup implements only a subset. |
| Three-tier architecture (canonical, framework-specific, entity-specific) | [v2 S.6.1.2] | Growth | Startup needs only Tier 1 canonical controls (~140). Framework-specific extensions (Tier 2) and entity-specific implementations (Tier 3) add complexity without value at <20 people. |
| UCL schema (YAML per control) | [v2 S.6.1.3] | Startup | Machine-readable controls enable automation from day one. Start with ISO 27001 Annex A (93 controls) + ISO 42001 Annex A. Simplified YAML schema. |
| UCL domain taxonomy (20 domains) | [v2 S.6.1.4] | Startup | Adopt the full 20-domain taxonomy as an organizational framework even if not all domains have controls populated yet. Provides structure for future growth. |
| UCL storage and maintenance | [v2 S.6.1.5] | Growth | Quarterly review cycle, SLA-driven maintenance, and formal change process are Growth-appropriate. Startup reviews controls as needed. |

**Startup Implementation:** Create UCL YAML files for ISO 27001 Annex A controls (93) and ISO 42001 Annex A controls. Use the 20-domain taxonomy to organize them. Store in Git under `ucl/` directory. Focus on Tier 1 canonical controls only. Skip framework-specific extensions (Tier 2) and entity-specific variations (Tier 3) until additional certifications are pursued.

**Growth Trigger:** First enterprise customer requires formal certification evidence beyond ISO 27001 + ISO 42001, or first TISAX assessment requires framework-specific control evidence.

### 6.2 Cross-Framework Control Mapping [v2 S.6.2]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| 42-domain cross-framework mapping | [v2 S.6.2.1] | Growth | Full 7-framework mapping across 42 domains requires effort disproportionate to Startup scope (3 active frameworks). |
| Implement-once leverage analysis | [v2 S.6.2.2] | Growth | Leverage analysis becomes valuable when pursuing 3+ certifications simultaneously. |

**Startup Implementation:** Focus on ISO 27001 + ISO 42001 overlap only. Identify the ~45 controls shared across both frameworks as the highest-value implementation targets. Note TISAX overlap with ISO 27001 for maintenance purposes. Defer SOC 2, FedRAMP, NIS2-specific, and EU AI Act-specific control mappings.

**Growth Trigger:** Pursuit of SOC 2 or additional certifications that justify full cross-framework mapping effort.

### 6.3 Entity-Framework Applicability [v2 S.6.3]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Framework applicability by entity (GmbH, B.V., Inc.) | [v2 S.6.3.1] | Startup | Must determine which frameworks apply to which entity from day one. This drives the certification scope statement. |
| UCL domain applicability by entity | [v2 S.6.3.2] | Startup (simplified) | Determine domain applicability for the 3 active frameworks (ISO 27001, ISO 42001, TISAX) only. Defer FedRAMP, SOC 2 domain applicability. |

**Startup Implementation:** Produce an entity-framework applicability matrix for the Startup scope: ISO 27001 (all 3 entities), ISO 42001 (all 3 entities), TISAX (GmbH + B.V.), NIS2 (GmbH + B.V., overlap with ISO 27001), EU AI Act (GmbH + B.V.). Mark SOC 2 (Inc., deferred) and FedRAMP (Inc., deferred).

**Growth Trigger:** Activation of SOC 2 or FedRAMP certification drives full entity-framework applicability analysis.

### 6.4 Evidence Automation Architecture [v2 S.6.4]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Evidence lifecycle (generation, validation, storage, retrieval, presentation) | [v2 S.6.4.1] | Growth | Full automated evidence lifecycle requires GRC platform integration and pipeline maturity. |
| Evidence schema (JSON with attestation and retention) | [v2 S.6.4.2] | Growth | Structured evidence schema with Cosign signatures and retention policies is Growth-appropriate. |
| CI/CD pipeline evidence generation | [v2 S.6.4.3] | Startup (simplified) | Start with basic pipeline evidence: SAST reports, SCA dependency reports, test results. Store as artifacts in Git or CI system. No structured evidence schema or attestation yet. |
| Runtime evidence collection | [v2 S.6.4.4] | Growth | Azure Policy, Defender, Sentinel evidence feeds require infrastructure setup. |
| GRC platform integration | [v2 S.6.4.5] | Growth | NorthGRC is the GRC platform (per constraint). Full API integration deferred. Manual evidence upload at Startup. |

**Startup Implementation:** Collect evidence manually + from CI/CD pipelines (SAST, SCA, test results). Store evidence in Git alongside the artifacts they attest to. Upload relevant evidence to NorthGRC manually for audit readiness. No automated evidence ingestion, schema validation, or Sigstore attestation.

**Growth Trigger:** Evidence collection burden exceeds manual capacity, or auditor requires more rigorous evidence management.

### 6.5 OSCAL Integration [v2 S.6.5]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| OSCAL component architecture (SSP, SAP, SAR, POA&M) | [v2 S.6.5.1] | Enterprise | OSCAL is specifically for FedRAMP. FedRAMP deferred until US federal customer pipeline. |
| OSCAL generation pipeline | [v2 S.6.5.2] | Enterprise | Same rationale. |
| OSCAL-UCL binding | [v2 S.6.5.3] | Enterprise | Same rationale. |
| OSCAL validation in CI | [v2 S.6.5.4] | Enterprise | Same rationale. |

**Startup Implementation:** None. OSCAL is out of scope until FedRAMP is pursued.

**Growth Trigger:** US federal customer pipeline activates FedRAMP requirement.

### 6.6 Audit Readiness Framework [v2 S.6.6]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Integrated audit calendar | [v2 S.6.6.1] | Startup (simplified) | Need audit calendar for ISO 27001 + ISO 42001 only. Defer SOC 2, TISAX assessment, FedRAMP scheduling to Growth. TISAX maintenance is in scope but assessment timing depends on existing certification cycle. |
| Internal audit program | [v2 S.6.6.2] | Startup | Required by ISO 27001 Clause 9.2 and ISO 42001 Clause 9.2. Must establish internal audit capability before Stage 1 audit. |
| Evidence freshness requirements | [v2 S.6.6.3] | Startup (simplified) | Track evidence freshness for ISO 27001 and ISO 42001 only. Both require 12-month maximum evidence age. |
| Pre-audit readiness checklist | [v2 S.6.6.4] | Startup | Checklist needed before Stage 1 audit. Simplified to cover ISO 27001 + ISO 42001 requirements only. |

**Startup Implementation:** Establish audit calendar targeting ISO 27001 Stage 1 + Stage 2 and ISO 42001 Stage 1 + Stage 2 within the 12-week timeline. Internal audit program covering ISMS + AIMS scope. Evidence freshness tracking for the two primary certifications. Pre-audit checklist covering: management review completed, internal audit completed, all major findings closed, SoA current, AI System Registry current.

**Growth Trigger:** Pursuit of additional certifications (SOC 2, TISAX reassessment, FedRAMP) expanding the audit calendar.

### 6.7 Twenty-Nine ISO Standards Integration Map [v2 S.6.7]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Core management system standards (27001, 42001) | [v2 S.6.7.1] | Startup | Primary certification standards. Both normative. |
| AI lifecycle and engineering standards (5338, 5339, 23053, 5392, 42119-2) | [v2 S.6.7.2] | Startup (simplified) | ISO 5338 is normative for ISO 42001. Adopt conceptually. Others are informative -- reference as needed. |
| AI risk, ethics, governance standards (23894, 38507, 24027, 24368, 24372, 12792) | [v2 S.6.7.3] | Startup (simplified) | ISO 23894 is normative for ISO 42001. ISO 12792 required for EU AI Act transparency. Others informative. |
| AI cybersecurity (27090) | [v2 S.6.7.4] | Growth | Informative standard; deferred. |
| Information security foundations (27000, 27032) | [v2 S.6.7.5] | Startup | 27000 provides ISMS vocabulary (normative reference). 27032 informative. |
| AI terminology (22989) | [v2 S.6.7.6] | Startup | Normative for ISO 42001. Ensures consistent terminology. |
| Process assessment standards (33001-33061, 20226) | [v2 S.6.7.7] | Growth | Formal process assessment deferred. |
| Risk management standards (31000, 31010) | [v2 S.6.7.8] | Startup | Both normative references for ISO 27001 and ISO 42001. |
| Sector-specific (34504, 29110) | [v2 S.6.7.9] | Growth | Automotive AI testing conditional on customer need. VSE lifecycle profiles informative. |

**Startup Implementation:** Focus on 4-5 core standards: ISO 27001, ISO 42001, ISO 31000, ISO 23894, and ISO 22989 (terminology). Add ISO 42005 (AI impact assessment) and ISO 12792 (AI transparency) for EU AI Act compliance. Reference ISO 5338 conceptually. Defer the remaining 21 standards to Growth/Enterprise.

**Growth Trigger:** Specific standard becomes normatively required for a pursued certification, or auditor requests evidence of alignment.

### 6.8 Normative References [v2 S.6.8]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Reference category summary (40 total references) | [v2 S.6.8.1] | Startup | The reference list is a catalog, not a mandate. Always applicable as a reference. |
| National transposition references (NIS2UmsuCG, Dutch NIS2, CCPA/CPRA, BSI/NCSC-NL templates) | [v2 S.6.8.2] | Startup (simplified) | NIS2 transpositions for Germany (NIS2UmsuCG) and Netherlands apply to GmbH and B.V. CCPA/CPRA deferred with SOC 2. |

**Startup Implementation:** Maintain awareness of the full reference list. Actively track the German NIS2 transposition (NIS2UmsuCG) for GmbH and Dutch NIS2 transposition for B.V. Include BSI and NCSC-NL reporting templates in compliance procedures. Defer CCPA/CPRA-specific references until US privacy requirements activated.

**Growth Trigger:** US privacy regulation (CCPA/CPRA) becomes relevant with US customer base, or new EU regulation transpositions require updated procedures.

---

## 7. Organizational Model [v2 S.7]

### 7.1 Scaling Configuration [v2 S.7.1]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| SAFe-adapted scaling principles | [v2 S.7.1] | Startup | The concept of progressive scaling (organizational model adapts to team size) applies from day one. SAFe itself is Growth/Enterprise. |

**Startup Implementation:** Adopt the scaling principle: governance grows with the organization. Current configuration is a single team with sprint-based delivery. SAFe ceremonies (PI Planning, ART Sync, Inspect & Adapt) are not applicable at Startup.

**Growth Trigger:** Team size exceeds 20 people, triggering consideration of ART structure per [v2 S.4.5].

### 7.2 Phase A: Startup Organization [v2 S.7.2]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Single cross-functional team structure | [v2 S.7.2] | Startup | Directly applicable. The team IS a single cross-functional unit. |
| Role definitions (CTO, PO, Engineers, Security Advisor) | [v2 S.7.2] | Startup | V2 defines generic roles. User decision maps these to 6 specific humans + 7 agents. The mapping is critical and differs from v2's assumptions. |

**Startup Implementation:**

V2 assumes generic startup roles. The actual HH Group team maps as follows:

| v2 Role | HH Human | HH Agent Equivalent | Notes |
|---------|----------|-------------------|-------|
| CTO (strategy + architecture + security) | CEO (Helge Heupel) + CTO | SDLC Lead Agent, CTO Agent, CISO Agent | CEO covers CISO responsibilities + orchestration. CTO covers architecture + AI engineering. |
| Product Owner | CEO + Strategy Partner | Product/Strategy Agent | Dual ownership: CEO drives strategic alignment, Strategy Partner drives product. |
| Engineers (3-8) | IT Pentester/Super Admin | Platform/SRE Agent, AppSec Agent | Azure + infrastructure expertise. |
| Security/Compliance Advisor | CISO (dedicated, 6th person) | CISO Agent | Not fractional -- dedicated per user decision. |
| AI Science Lead | (no dedicated human) | AI Science Agent | Agent fills this role; CEO supervises. |
| Finance Advisory | Finance Industry SM | (no dedicated agent) | Advisory role, not agent-backed. |

The RACI matrix mapping these 6 humans + 7 agents to specific SDLC activities will be produced in Plan 01-04 (OVLY-02).

**Growth Trigger:** Hiring beyond 6 humans requires updating the role mapping and RACI matrix.

### 7.3 Phase B: Growth Organization [v2 S.7.3]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Single ART with 3-4 teams | [v2 S.7.3] | Growth | Not applicable now. Reference only. |
| Platform Team + Feature Teams | [v2 S.7.3] | Growth | Team splitting deferred until workload justifies separate platform and feature teams. |
| Security Champion (full-time) | [v2 S.7.3] | Growth | At Startup, CISO covers security champion responsibilities. |
| AI Ethics Champion (full-time) | [v2 S.7.3] | Growth | At Startup, CEO handles AI governance as part of CISO responsibilities. |

**Startup Implementation:** Read for awareness only. Understand what Growth organization looks like so the team can plan for it.

**Growth Trigger:** Phase A-to-B transition triggers per [v2 S.4.5].

### 7.4 Phase C: Enterprise Organization [v2 S.7.4]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Dual ART (Verity VE + Verity EAM) | [v2 S.7.4] | Enterprise | Not applicable. Reference only. |
| Full SAFe 6.0 with Lean Portfolio Management | [v2 S.7.4] | Enterprise | Not applicable. Reference only. |
| VMO (Value Management Office) | [v2 S.7.4] | Enterprise | Not applicable. Reference only. |
| Dedicated CISO function | [v2 S.7.4] | Startup | User decision places dedicated CISO at Startup (unusual for 6-person team; reflects compliance-intensive nature of the target market). |

**Startup Implementation:** Read for awareness only. Note that dedicated CISO is already in place at Startup (ahead of v2's Enterprise-phase placement), reflecting the compliance-intensive strategy.

**Growth Trigger:** Phase B-to-C transition triggers per [v2 S.4.5].

### 7.5 AI Teammate Roles [v2 S.7.5]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| AI teammate role definitions (4 roles: Code Partner, Test Partner, Compliance Partner, Documentation Partner) | [v2 S.7.5] | Startup | AI teammates ARE the team at Startup. However, v2 defines 4 generic AI roles; user decision creates 7 specialist agents with broader responsibilities. |
| Trust levels and autonomy boundaries | [v2 S.7.5] | Startup | Trust levels must be defined for all 7 agents. V2's IEA trust model (Section 8) applies. |
| Human supervisor assignment | [v2 S.7.5] | Startup | Every agent must have a designated human supervisor per ISO 42001 human oversight requirements. |
| AI teammate operating principles (6 principles) | [v2 S.7.5] | Startup | All 6 operating principles apply: team roster tracking, same DoD as humans + human review, autonomy adjustment with CEO approval, supervisor representation in ceremonies, uptime tracking, supervisor fallback. |

**Startup Implementation:**

V2 defines 4 generic AI roles. The HH Group implementation creates 7 specialist agents:

| HH Agent | v2 Nearest Equivalent | Trust Level | Human Supervisor |
|----------|----------------------|-------------|-----------------|
| SDLC Lead Agent | (no equivalent -- new role) | Level 2: Supervised Autonomous | CEO |
| CTO Agent | AI Code Partner (expanded) | Level 2: Supervised Autonomous | CTO |
| CISO Agent | AI Compliance Partner (expanded) | Level 2: Supervised Autonomous | CISO |
| AI Science Agent | (no equivalent -- new role) | Level 2: Supervised Autonomous | CEO |
| Platform/SRE Agent | AI Code Partner (subset) | Level 2: Supervised Autonomous | IT Pentester |
| Product/Strategy Agent | (no equivalent -- new role) | Level 2: Supervised Autonomous | CEO + Strategy Partner |
| AppSec Agent | AI Test Partner (subset) | Level 2: Supervised Autonomous | CISO |

All agents start at Trust Level 2 (Supervised Autonomous). Promotion to Level 3 (Conditional Autonomous) requires demonstrated accuracy over 30+ interactions and CEO approval. All agent outputs require human review before becoming official artifacts.

**Growth Trigger:** Agent performance data enables evidence-based trust level adjustments; team expansion changes supervisor assignments.

### 7.6 Human-AI Team Composition [v2 S.7.6]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Phase A composition (5-15 humans + 3 AI roles) | [v2 S.7.6] | Startup | V2 assumes 5-15 humans with 3 AI teammate types. Actual HH Group is 6 humans + 7 agents -- higher AI density than v2 envisions. |
| Effective team capacity description | [v2 S.7.6] | Startup | V2 states "humans focus on architecture, customer interaction, strategic decisions; AI handles code drafting, test generation, documentation." HH Group extends this: AI agents handle compliance artifact drafting, risk assessment support, security review, and architecture decision support. |

**Startup Implementation:** The 6+7 model means AI agents contribute to ~60% of draft artifact production (compliance documents, risk assessments, architecture decisions, security reviews). Humans contribute 100% of sign-off, risk acceptance, customer interaction, and strategic decisions. Every agent output is a draft until human-reviewed. The team operates as a "13-member team with 6 decision-makers."

**Growth Trigger:** Team expansion changes the human-to-agent ratio; agent capabilities evolve with platform improvements.

---

## 8. Intent-Execution Architecture [v2 S.8]

### 8.1 Architecture Overview [v2 S.8.1]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| IEA core principle (LLM untrusted, execution layer trusted, Intent Contract as bridge) | [v2 S.8.1] | Startup | The principle is sound and applicable from day one. All agent outputs are untrusted until validated. |
| Dual-view architecture (Trust-Flow + ISO 5392 Functional Decomposition) | [v2 S.8.1.1] | Growth | The full dual-view architecture with 9 components is Growth-appropriate. Startup uses a simplified trust model focused on human review as the primary validation mechanism. |
| View 1: Trust-Flow Architecture (6 trust levels, 9 components) | [v2 S.8.1.1] | Growth | Full Trust-Flow architecture requires infrastructure (AI Gateway, Policy Gateway, Verification & Attestation engine). |
| View 2: ISO 5392 Functional Decomposition | [v2 S.8.1.1] | Growth | Formal ISO 5392 mapping deferred. The functional components exist conceptually but are not formalized as separate systems at Startup. |

**Startup Implementation:** Adopt the IEA core principle: treat all AI (agent) outputs as untrusted until human-reviewed. The "Intent Contract" at Startup is the PR -- agents produce artifacts in branches, humans review and merge. Git history serves as the trust promotion audit trail. The full component model (AI Gateway, Policy Gateway, HITL Gate, Workflow Orchestrator, Verification & Attestation, Data Pipeline Manager, Model Lifecycle Manager, Feedback Loop Engine) is a Growth target.

**Growth Trigger:** Production AI features in Verity VE/EAM require formal trust boundary enforcement beyond PR-based review.

### 8.2 Graduated Trust Scale [v2 S.8.2]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Seven-level trust model (Level 0-6) | [v2 S.8.2.1] | Startup (simplified) | Adopt the trust levels conceptually. Full enforcement mechanism (automated promotion through levels) at Growth. At Startup, the practical levels are: 0 (raw agent output), 4 (human-approved via PR review), 6 (deployed to production). |
| Trust level to AI classification mapping | [v2 S.8.2.2] | Growth | Formal mapping of AI tiers (Assistant/Collaborator/Decision Support) to minimum trust levels requires IEA infrastructure. |
| Minimum trust level by action type | [v2 S.8.2.3] | Startup (simplified) | Adopt the minimum trust levels for key actions: all code requires human review (Level 4) before merge, deployment requires CTO approval (Level 5+), auth/crypto/PII code requires explicit human design (Level 4). |

**Startup Implementation:** Use the trust level concept to calibrate human oversight. All agent outputs start at Level 0. PR review promotes to Level 4. Deployment promotes to Level 5. Production attestation (signed release) promotes to Level 6. The intermediate levels (1-3) collapse into the PR review process at Startup -- syntax validation, policy checks, and peer review all happen within the code review workflow.

**Growth Trigger:** AI Gateway implementation enables automated trust level promotion through Levels 1-3.

### 8.3 Component Model [v2 S.8.3]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Original 5 components (Intent Capture, Policy Gateway, HITL Gate, Workflow Orchestrator, Verification & Attestation) | [v2 S.8.3.1] | Growth | Full component architecture deferred. Startup uses simplified equivalents: agents (Intent Capture), PR review (Policy Gateway + HITL Gate + Peer Review), CI/CD (Workflow Orchestrator), Git history (Verification & Attestation). |
| New 4 components (AI Gateway, Data Pipeline Manager, Model Lifecycle Manager, Feedback Loop Engine) | [v2 S.8.3.1] | Growth | All four new v2 components are Growth-appropriate. They address ISO 5338, 5392, 23053, and 23894 gaps that become relevant with production AI systems. |

**Startup Implementation:** The 9-component IEA exists conceptually but maps to simpler Startup mechanisms:

| v2 Component | Startup Equivalent |
|---|---|
| Intent Capture Layer | Agent prompt + context assembly |
| AI Gateway / LLM Proxy | Direct API access with basic logging |
| Policy Gateway | CLAUDE.md agent boundaries + human review norms |
| HITL Gate | PR review process |
| Workflow Orchestrator | CI/CD pipeline |
| Verification & Attestation | Git history + signed releases |
| Data Pipeline Manager | Manual data management |
| Model Lifecycle Manager | Not applicable (no custom models at Startup) |
| Feedback Loop Engine | Manual retrospective learnings |

**Growth Trigger:** First production AI feature in Verity VE/EAM requiring formal IEA component deployment.

### 8.4 Intent Contract Specification [v2 S.8.4]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Full v2 Intent Contract JSON schema (50+ fields) | [v2 S.8.4.1] | Growth | The full schema with trust levels, provenance, data lineage, compositional risk, ISO 42001 mapping, bias assessment, and attestation is Growth-appropriate. |
| Schema change summary (v1 to v2) | [v2 S.8.4.2] | Growth | Reference only. Relevant when implementing the full IEA. |

**Startup Implementation:** No formal Intent Contract schema at Startup. The "contract" is implicit in the PR: agent produces artifact, PR description captures provenance (which agent, what context), reviewer validates, merge = approval. Consider adopting a lightweight metadata header for agent-produced artifacts (agent name, date, confidence level, human reviewer).

**Growth Trigger:** Production AI features require formal provenance tracking and audit trail beyond Git history.

### 8.5 AI Gateway / LLM Proxy [v2 S.8.5]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Mandatory AI Gateway for all LLM interactions | [v2 S.8.5.1] | Growth | Centralized gateway requires infrastructure investment. At Startup, LLM interactions happen through Claude Code sessions (agent platform) and direct API calls. |
| Gateway capabilities (routing, rate limiting, PII detection, prompt injection defense, model version pinning, schema validation, observability) | [v2 S.8.5.2] | Growth | Each capability maps to an ISO/regulation requirement but requires engineering effort disproportionate to Startup scale. |
| Request flow through AI Gateway (10-step process) | [v2 S.8.5.3] | Growth | Deferred with the gateway itself. |

**Startup Implementation:** Use direct API access (Claude Code, Azure OpenAI) with basic logging. Ensure: (1) all LLM API keys stored securely (Azure Key Vault or equivalent), (2) basic cost tracking via API provider dashboards, (3) manual PII review of agent inputs/outputs. No centralized gateway, prompt injection defense, or automated PII scanning.

**Growth Trigger:** LLM usage exceeds 10K tokens/day across the organization, or first production AI feature requires PII handling controls.

### 8.6 Trust Boundary Rules [v2 S.8.6]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Trust level authorization matrix (what each level can/cannot do) | [v2 S.8.6.1] | Growth | Full matrix requires automated trust level tracking. |
| Mandatory HITL conditions (8 from v1 + 8 from v2) | [v2 S.8.6.2] | Startup (simplified) | Adopt the human-in-the-loop requirements from v1 (auth/crypto/PII code, production deployment, model changes, compliance rules, High/Critical risk, cross-entity flows, API changes). Defer v2 additions (compositional risk, feedback loop triggers, bias parameters, gateway rules, data pipeline changes, AI retirement, low-confidence + medium-risk combos, adversarial detection). |
| Compositional risk rules (chain depth, aggregate risk, escalation) | [v2 S.8.6.3] | Growth | Compositional risk tracking requires IEA infrastructure to detect and aggregate risk across intent chains. |

**Startup Implementation:** Enforce human-in-the-loop for: (1) all code modifying authentication, authorization, or encryption, (2) all production deployments, (3) all AI model/prompt changes, (4) all compliance policy modifications, (5) any action rated High or Critical risk, (6) cross-entity data flows, (7) customer-facing API contract changes. These are enforced through PR review process and CTO deployment approval, not through automated trust boundary enforcement.

**Growth Trigger:** IEA component deployment enables automated trust boundary enforcement and compositional risk tracking.

### 8.7 ISO 5392 Functional Decomposition [v2 S.8.7]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Functional component mapping (6 ISO 5392 functions to IEA components) | [v2 S.8.7.1] | Growth | Formal ISO 5392 decomposition view is Growth-appropriate when implementing IEA components. |
| Functional interaction diagram | [v2 S.8.7.2] | Growth | Deferred with the functional decomposition. |
| Cross-cutting concerns mapping (trustworthiness, interoperability, performance, scalability, maintainability) | [v2 S.8.7.3] | Growth | Cross-cutting concerns are addressed informally at Startup through architectural decisions and code review. |

**Startup Implementation:** None. Understand the ISO 5392 functional decomposition conceptually for ISO 42001 audit conversations, but do not produce formal mapping artifacts.

**Growth Trigger:** ISO 42001 surveillance auditor requests formal AI reference architecture documentation per ISO 5392.

### 8.8 AI Lifecycle Integration (ISO 5338) [v2 S.8.8]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| ISO 5338 lifecycle stage mapping (7 stages to IEA components) | [v2 S.8.8.1] | Startup (simplified) | Adopt lifecycle stages conceptually. The 7 Claude Code agents are AI systems that go through a lifecycle (concept, deployment, operation, retirement). Document the lifecycle at a high level for ISO 42001 compliance. |
| Data management process (ISO 5338 clause 7.2) | [v2 S.8.8.2] | Growth | Formal data management sub-processes (acquisition planning, quality assessment, annotation, versioning, governance, disposal) require data infrastructure. |
| ML model management process (ISO 5338 clause 7.3) | [v2 S.8.8.3] | Growth | No custom ML models at Startup. Agents use Claude API (third-party model). Model management focuses on API version tracking, not training/evaluation. |
| AI system retirement process | [v2 S.8.8.4] | Growth | Formal 9-step retirement process is Growth-appropriate. At Startup, agent retirement = archiving CLAUDE.md and updating the AI System Registry. |
| Model card requirements | [v2 S.8.8.3] | Startup (simplified) | Produce simplified model cards for the 7 agents: system ID, intended use, risk classification, human supervisor, limitations. Defer full model card with evaluation results, ethical considerations, and computational approach. |

**Startup Implementation:** For each of the 7 Claude Code agents, document: (1) system identity (name, version), (2) intended use and scope, (3) risk classification per EU AI Act, (4) human supervisor, (5) known limitations, (6) oversight measures. This satisfies ISO 42001's AI system documentation requirements at a level appropriate for Startup. Full ISO 5338 lifecycle process formalization at Growth when custom AI models are developed.

**Growth Trigger:** Development of custom AI models for Verity VE/EAM requiring formal data management, model training, and evaluation processes.

---
