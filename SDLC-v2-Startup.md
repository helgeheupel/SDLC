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

**Scope:** This document covers all SDLC-v2 sections (1 through 18) and appendices, providing the complete operative guide for the Startup phase.

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
9. [SDLC Phases](#9-sdlc-phases-v2-s9)
10. [AI Integration Policy](#10-ai-integration-policy-v2-s10)
11. [AI Management System -- AIMS](#11-ai-management-system----aims-v2-s11)
12. [Security and Privacy by Design](#12-security-and-privacy-by-design-v2-s12)
13. [Quality Gates and Governance](#13-quality-gates-and-governance-v2-s13)
14. [UX/DX and Accessibility](#14-uxdx-and-accessibility-v2-s14)
15. [Toolchain and Platform](#15-toolchain-and-platform-v2-s15)
16. [Operations, Reliability, and Incident Management](#16-operations-reliability-and-incident-management-v2-s16)
17. [Metrics and Continuous Improvement](#17-metrics-and-continuous-improvement-v2-s17)
18. [Entity-Specific Addenda](#18-entity-specific-addenda-v2-s18)
19. [Appendices](#appendices)
20. [Summary Statistics](#summary-statistics)

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

## 9. SDLC Phases [v2 S.9]

### 9.0 Phase Model Overview [v2 S.9.0]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Seven-phase lifecycle model (Orient through Feedback/Evolution) | [v2 S.9.0] | Startup | The 7-phase model applies from day one. Every code change flows through Orient, Requirements, Development, Testing, Deployment, Operate, Feedback -- even if ceremonies are lightweight. |
| Phase flow diagram and artifact flow | [v2 S.9.0] | Startup | The G0-G5 gate structure provides the audit trail framework required for ISO 27001 and ISO 42001 certification. |
| AI Teammate Participation Model (Autonomous/Supervised/Advisory) | [v2 S.9.0] | Startup | Directly applicable: all 7 agents participate per this model. Trust levels calibrated at Supervised (Level 2) for all agents initially per user decision. |
| Progressive adoption stages table | [v2 S.9.0] | Startup | The Startup column IS the operative configuration: TR 29110 Basic Profile, lightweight processes, role consolidation, single governance meeting (modified to 2 meetings per user decision). |

**Startup Implementation:** Adopt the full 7-phase lifecycle model. All development work -- product features, compliance artifacts, infrastructure changes -- flows through Orient to Feedback. Gate criteria are risk-tiered: Low/Medium auto-flow through CI/CD pipeline checks; High/Critical require human approval in the Weekly Technical meeting. Ceremony overhead is minimized per TR 29110 Basic Profile.

**Growth Trigger:** Team size or product complexity requires formal phase handoffs between teams (currently single-team, so handoffs are implicit).

### 9.1 Phase 0: Orient [v2 S.9.1]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Strategic alignment review | [v2 S.9.1] | Startup (simplified) | CTO verbal approval sufficient for Low/Medium risk. High/Critical documented in ADR. |
| Market and competitive analysis | [v2 S.9.1] | Startup | AI-assisted analysis with CTO validation. Applicable from day one for Verity positioning. |
| Technical feasibility assessment | [v2 S.9.1] | Startup (simplified) | AI generates feasibility report; CTO reviews. No formal architecture telemetry yet. |
| AI impact pre-screening (ISO 42005) | [v2 S.9.1] | Startup | Required for ISO 42001. CTO determines AI applicability for every new initiative. |
| Formal risk assessment (ISO 31000) | [v2 S.9.1] | Startup (simplified) | Lightweight checklist for Low/Medium; structured PHA for High/Critical. |
| Regulatory impact analysis | [v2 S.9.1] | Startup | AI-assisted regulatory cross-referencing across DE, NL, US jurisdictions. Applicable now given multi-entity scope. |
| Cross-entity architecture impact review | [v2 S.9.1] | Startup (simplified) | AI generates impact report; CTO reviews. Formal Architecture Review Board at Growth. |
| Investment decision | [v2 S.9.1] | Startup | CTO decides for all risk levels at Startup. No VMO or portfolio scoring. |
| Risk activities (PHA, SWOT, Scenario, Checklists) | [v2 S.9.1] | Startup (simplified) | Use checklists and lightweight PHA. SWOT and scenario analysis for strategic initiatives only. |
| AI lifecycle activities (planning, impact initiation, data requirements) | [v2 S.9.1] | Startup | AI applicability determination and ISO 42005 pre-screening for all AI-enabled initiatives. |
| Compliance evidence (strategic alignment, AI risk classification, investment decision) | [v2 S.9.1] | Startup | Evidence generated as byproduct of orient activities; stored in Git. |
| Progressive adoption: 1-2 business day time-box | [v2 S.9.1] | Startup | Adopt the Startup column: 1-2 day time-box, CTO verbal approval, lightweight checklist, fast-track eligible. |

**Startup Implementation:** Phase 0 is a 1-2 day lightweight assessment. For internal tooling and bug fixes: fast-track (CTO verbal approval, risk checklist). For new features: AI-assisted analysis (competitive, feasibility, regulatory) with CTO review. Every initiative gets AI applicability determination and risk classification. Evidence captured in Git (ADR or initiative record).

**Growth Trigger:** Portfolio exceeds 10 concurrent initiatives requiring formal prioritization (WSJF scoring, VMO review).

**Gate Criteria -- G0 (Strategic Alignment) by Risk Tier:**

| Criterion | Low/Medium | High/Critical |
|-----------|-----------|---------------|
| Strategic trace to OKR | Documented in ticket | Documented + scored in ADR |
| Risk classification | Automated checklist | Documented assessment |
| AI risk classification (EU AI Act Art. 6) | CTO determination or N/A | Documented classification |
| ISO 42005 pre-screening | CTO determination or N/A | Documented pre-screening |
| Cross-entity applicability | Automated check | Documented analysis |
| Investment decision | CTO verbal approval | CTO documented approval |

### 9.2 Phase 1: Requirements [v2 S.9.2]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Feature decomposition (WSJF prioritization) | [v2 S.9.2] | Startup (simplified) | Break epics into stories. Defer WSJF automation; use manual prioritization in Linear. |
| Acceptance criteria specification (Given/When/Then) | [v2 S.9.2] | Startup | AI drafts acceptance criteria; PO validates. Applicable from day one. |
| Threat modeling (STRIDE/LINDDUN) | [v2 S.9.2] | Startup (simplified) | Critical features only at Startup. STRIDE for security; LINDDUN for features handling personal data. |
| AI-specific requirements (ISO 42001 Annex A) | [v2 S.9.2] | Startup (simplified) | Lightweight checklist for AI features. Structured specification at Growth. |
| Accessibility requirements (WCAG 2.2) | [v2 S.9.2] | Startup (simplified) | WCAG 2.2 A minimum at Startup. AA target from Growth. |
| UX requirements | [v2 S.9.2] | Startup (simplified) | Informal heuristics. Formal task-based targets at Growth. |
| DPIA assessment | [v2 S.9.2] | Startup | Required by GDPR Art. 35 for processing involving AI and personal data. AI drafts; DPO reviews. |
| API contract design (OpenAPI 3.1) | [v2 S.9.2] | Startup | AI generates from requirements; CTO reviews. |
| ADR creation | [v2 S.9.2] | Startup | AI drafts options analysis; CTO decides. Store in Git. |
| SBOM baseline | [v2 S.9.2] | Startup | Automated dependency scanning. Generated on release (not per PR at Startup). |
| Requirements baseline | [v2 S.9.2] | Startup (simplified) | Informal baseline via ticket status in Linear. Formal baseline with change tracking at Growth. |
| Risk activities (STRIDE, LINDDUN, FMEA, Bow-Tie) | [v2 S.9.2] | Startup (simplified) | STRIDE and LINDDUN for critical features. Defer FMEA and Bow-Tie to Growth. |
| AI lifecycle activities (requirements, data, bias/fairness, explainability) | [v2 S.9.2] | Startup (simplified) | Define basic AI requirements per feature. Defer formal fairness and explainability specifications to Growth. |
| Compliance evidence (threat model, DPIA, AI requirements, SBOM) | [v2 S.9.2] | Startup | Evidence generated during requirements phase; stored in Git. |

**Startup Implementation:** Decompose epics into stories with acceptance criteria. Threat model critical features (STRIDE). DPIA for any feature processing personal data. AI requirements as a lightweight checklist. SBOM baseline on release. No formal requirements baseline or change control board; Linear ticket status serves as the baseline.

**Growth Trigger:** Requirements complexity exceeds single-team capacity; formal baseline needed for multi-team coordination.

**Gate Criteria -- G1 (Requirements Readiness) by Risk Tier:**

| Criterion | Low/Medium | High/Critical |
|-----------|-----------|---------------|
| Stories meet DoR | All stories ready | All stories ready + reviewed |
| Threat model | Automated check or N/A | Security Champion (CISO) review |
| DPIA | Automated check or N/A | DPO review |
| AI requirements (ISO 42001) | Checklist or N/A | Documented specification |
| SBOM baseline | Automated capture | Reviewed for known vulnerabilities |
| ADRs approved | CTO approval | CTO approval |
| Accessibility requirements | WCAG 2.2 A checklist | WCAG 2.2 A specification |
| Requirements baseline | Ticket status tracking | Ticket status tracking |

### 9.3 Phase 2: Development [v2 S.9.3]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Trunk-based development | [v2 S.9.3] | Startup | Core practice. Short-lived branches (<24h), merge to main via PR. |
| Pre-commit hooks (linting, formatting, secret detection) | [v2 S.9.3] | Startup | Low overhead, high value. Adopt from day one. |
| AI-assisted development via IEA | [v2 S.9.3] | Startup | All 7 agents produce code at Supervised trust level. |
| Code review (1 reviewer minimum; 2 for security-sensitive) | [v2 S.9.3] | Startup (simplified) | 1 reviewer for all changes at Startup. 2 reviewers for security-sensitive at Growth. |
| Commit signing (GPG/SSH) | [v2 S.9.3] | Startup | Mandatory for all contributors. Low overhead. |
| AI provenance tracking | [v2 S.9.3] | Startup (simplified) | Optional metadata at Startup. Required >10 lines at Growth. |
| AI-assisted development rules (untrusted until verified, no crypto/auth/PII without human design) | [v2 S.9.3] | Startup | Non-negotiable. AI-generated code is untrusted. Security-critical code requires human design. |
| CI/CD pipeline -- Fast loop (<5 min, every commit) | [v2 S.9.3] | Startup | Pre-commit hooks, build, unit tests, SAST, secret detection. Adopt from day one. |
| CI/CD pipeline -- Extended loop (<30 min, per PR/merge) | [v2 S.9.3] | Startup (simplified) | SCA/SBOM, container scan, DAST on merge to main only (not per PR at Startup). |
| CI/CD pipeline -- Periodic loop (nightly/weekly) | [v2 S.9.3] | Growth | Full DAST, performance tests, penetration testing, AI provenance audit. Deferred to Growth. |
| Artifact signing (Cosign/Sigstore) | [v2 S.9.3] | Growth | Cryptographic artifact signing deferred. Startup uses container registry access controls. |
| Definition of Done (DoD) v2 | [v2 S.9.3] | Startup (simplified) | Adopt core DoD criteria. AI-specific addenda (95% branch coverage, provenance metadata) simplified at Startup. |
| Risk activities (code review, static analysis, dependency analysis, AI provenance) | [v2 S.9.3] | Startup | Code review, SAST, SCA all applicable. AI provenance analysis at Growth. |
| Compliance evidence (SBOM, SAST report, SCA report, code review evidence) | [v2 S.9.3] | Startup | All evidence generated as CI/CD pipeline artifacts. |

**Startup Implementation:** Trunk-based development with short-lived branches. Fast loop CI (pre-commit, build, unit tests, SAST, secret detection) on every commit. Extended loop (SCA/SBOM, container scan, DAST) on merge to main. 1 human reviewer for all changes. AI code is untrusted; security-critical paths require human design. DoD simplified: code compiles, tests pass (>=80% branch), SAST clean, SCA clean, 1 reviewer.

**Growth Trigger:** AI code volume exceeds 50% of codebase; formal provenance tracking and 95% branch coverage needed.

**Gate Criteria -- G2 (Development Completeness) by Risk Tier:**

| Criterion | Low/Medium | High/Critical |
|-----------|-----------|---------------|
| DoD criteria met | All standard criteria | All criteria + AI addenda |
| Fast loop CI | All stages pass | All stages pass |
| Extended loop CI | All stages pass | All stages pass + reviewed |
| SBOM generated | Automated | Automated + reviewed |
| Artifacts signed | N/A at Startup | N/A at Startup |
| AI provenance | Optional metadata | Reviewed for completeness |

### 9.4 Phase 3: Testing [v2 S.9.4]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Testing pyramid -- Unit | [v2 S.9.4] | Startup | 100% automated in CI. AI generates edge cases. Always runs. |
| Testing pyramid -- Integration | [v2 S.9.4] | Startup | 100% automated in CI. AI generates contract tests. Always runs. |
| Testing pyramid -- System (E2E) | [v2 S.9.4] | Startup (simplified) | Automated E2E for critical paths only. Full E2E coverage at Growth. |
| Testing pyramid -- Performance | [v2 S.9.4] | Startup (simplified) | Manual before major releases. Nightly automated at Growth. |
| Testing pyramid -- Security | [v2 S.9.4] | Startup | Automated SAST/DAST + annual pentest. Bi-annual pentest at Growth. |
| Testing pyramid -- Accessibility | [v2 S.9.4] | Startup (simplified) | axe-core automated on key pages. Full automated + semi-automated at Growth. |
| Testing pyramid -- UX | [v2 S.9.4] | Startup (simplified) | Informal heuristic review. Task-based testing at Growth. |
| Testing pyramid -- Compliance | [v2 S.9.4] | Startup (simplified) | Generated on demand for audits. Continuous at Growth. |
| Testing pyramid -- AI/ML | [v2 S.9.4] | Startup (simplified) | Basic accuracy/fairness checks. Full AI test suite at Growth. |
| Testing pyramid -- Acceptance | [v2 S.9.4] | Startup (simplified) | AI-assisted scenario generation for customer-facing features. |
| AI-specific testing (bias, adversarial, explainability, drift, regression, hallucination, correlated failure) | [v2 S.9.4] | Growth | Full AI test suite deferred. Startup performs basic accuracy checks on agent outputs. |
| Accessibility testing (automated, semi-automated, manual audit) | [v2 S.9.4] | Startup (simplified) | axe-core automated. Semi-automated and expert audit at Growth. |
| UX testing (task completion, heuristic, error rate) | [v2 S.9.4] | Growth | Formal UX testing deferred. Informal heuristic review at Startup. |
| Compliance validation testing (OWASP, NIS2, TISAX, SOC 2, FedRAMP, ISO 42001, EU AI Act) | [v2 S.9.4] | Startup (simplified) | OWASP and basic NIS2 cryptography validation. TISAX, SOC 2, FedRAMP evidence deferred. ISO 42001 validation at Startup. |
| Risk activities (FTA, ETA, Monte Carlo, Metamorphic) | [v2 S.9.4] | Growth | Formal risk analysis techniques deferred. |
| Compliance evidence package | [v2 S.9.4] | Startup | Generated on demand for ISO 27001 and ISO 42001 audits. |

**Startup Implementation:** Unit and integration tests in CI (always run). E2E tests for critical paths. SAST/DAST automated. Annual penetration test. axe-core for accessibility on key pages. Basic AI accuracy checks. Compliance evidence generated on demand for audit preparation. No formal performance testing, chaos engineering, or full AI test suite.

**Growth Trigger:** Production AI features require formal bias/fairness/drift testing; customer count requires formal compliance evidence generation.

**Gate Criteria -- G3 (Quality and Compliance) by Risk Tier:**

| Criterion | Low/Medium | High/Critical |
|-----------|-----------|---------------|
| All test layers pass | Automated verification | Automated + QA sign-off |
| Security test results | Zero Critical/High (automated) | Penetration test reviewed |
| AI validation | Automated metrics check or N/A | Report reviewed by CTO |
| Compliance evidence | Automated generation | Reviewed by CISO |
| Performance baselines | Automated threshold check | Manual review |
| Accessibility | axe-core automated pass | Automated + spot check |

### 9.5 Phase 4: Deployment [v2 S.9.5]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Progressive rollout (canary analysis) | [v2 S.9.5] | Startup (simplified) | Blue-green + feature flags. Manual metric observation (not Kayenta automated analysis). |
| Risk-based canary duration | [v2 S.9.5] | Startup (simplified) | Low: 15 min automated. Medium: 1 hour manual. High/Critical: 4+ hours with CTO review. |
| Canary analysis framework (Kayenta) | [v2 S.9.5] | Growth | Automated statistical analysis deferred. Manual metric observation at Startup. |
| Deployment circuit breaker (error budget) | [v2 S.9.5] | Startup (simplified) | Manual deployment freeze. Semi-automated at Growth. |
| Multi-region orchestration | [v2 S.9.5] | Growth | Single region at Startup. EU canary to US canary at Growth. |
| Database migration strategy (expand/contract) | [v2 S.9.5] | Startup | Expand/contract pattern with manual review. Applicable from day one. |
| Feature flag lifecycle | [v2 S.9.5] | Startup | Adopt feature flag types and lifetime rules. Low overhead, high value. |
| Deployment strategies (blue-green, canary, feature flag, GitOps) | [v2 S.9.5] | Startup (simplified) | Blue-green + feature flags. GitOps (Flux CD) at Growth. |
| Risk activities (LOPA, reliability block diagram, what-if) | [v2 S.9.5] | Growth | Formal deployment risk analysis deferred. |
| AI lifecycle activities (deployment, registry update, release) | [v2 S.9.5] | Startup (simplified) | Basic deployment record and model version tracking. Shadow mode validation at Growth. |
| Compliance evidence (deployment record, rollback plan, migration evidence) | [v2 S.9.5] | Startup | Basic deployment record and rollback plan documented. |
| CAB process | [v2 S.9.5] | Startup (simplified) | CTO decides for all risk levels. Weekly async CAB at Growth. |

**Startup Implementation:** Blue-green deployment with feature flags. Manual metric observation during canary window (15 min to 4 hours based on risk). CTO approves High/Critical deployments. Expand/contract database migrations with manual review. Feature flag lifecycle enforced (30-day release toggles, 90-day experiments). No multi-region, no automated circuit breaker, no Kayenta.

**Growth Trigger:** Deployment frequency exceeds daily; automated canary analysis needed to prevent manual bottleneck.

**Gate Criteria -- G4 (Release Readiness) by Risk Tier:**

| Criterion | Low/Medium | High/Critical |
|-----------|-----------|---------------|
| Staging tests pass | Automated | Automated + reviewed |
| Canary metrics | 15-min manual observation | 4+ hour observation + CTO review |
| CAB approval | Not required | CTO approval |
| Error budget check | Manual assessment | Manual assessment + CTO confirmation |
| Rollback plan | Documented | Tested in staging |
| Database migration | Automated test or N/A | Staging test + CTO review |
| Incident runbook | Exists | Updated and reviewed |

### 9.6 Phase 5: Operate and Monitor [v2 S.9.6]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Observability stack (metrics, logs, traces, AI telemetry, security events, cost) | [v2 S.9.6] | Startup (simplified) | Metrics + logs + basic dashboards. Full stack (traces, AI telemetry) at Growth. |
| SLO framework with error budgets | [v2 S.9.6] | Startup (simplified) | Informal availability targets. Formal SLOs per service tier at Growth. |
| NIS2 incident reporting automation | [v2 S.9.6] | Startup (simplified) | Manual process documented. Semi-automated report generation at Growth. Legal timelines (T+24h, T+72h, T+1 month) apply from day one. |
| FedRAMP ConMon | [v2 S.9.6] | Enterprise | Deferred with FedRAMP. |
| Chaos engineering | [v2 S.9.6] | Growth | Formal chaos engineering deferred. Basic manual failure testing acceptable at Startup. |
| Runbook architecture | [v2 S.9.6] | Startup (simplified) | Informal documentation. Structured runbooks per service at Growth. |
| On-call structure | [v2 S.9.6] | Startup (simplified) | CTO + engineer on-call. Full primary/secondary rotation at Growth. |
| Error budget policy (enforcement rules) | [v2 S.9.6] | Growth | Formal error budget enforcement deferred. Manual deployment freeze at Startup. |
| Burn-rate alerting | [v2 S.9.6] | Growth | Automated burn-rate alerting deferred. Basic uptime monitoring at Startup. |
| Risk activities (root cause analysis, reliability maintenance, SPC, Bayesian) | [v2 S.9.6] | Startup (simplified) | Root cause analysis (5 Whys) after incidents. Defer reliability maintenance, SPC, Bayesian analysis. |
| AI lifecycle activities (operation, monitoring, maintenance, incident management) | [v2 S.9.6] | Startup (simplified) | Basic model telemetry and drift alerting. Full AI operations at Growth. |
| Compliance evidence (SLO reports, incident reports, vulnerability scans, chaos results, AI telemetry) | [v2 S.9.6] | Startup (simplified) | Basic incident reports and vulnerability scan results. Full compliance evidence package at Growth. |

**Startup Implementation:** Basic monitoring (metrics, logs, dashboards) from day one. Informal availability targets. NIS2 incident reporting process documented with legal timelines (manual submission). CTO + engineer on-call. Root cause analysis after every significant incident. Basic incident runbooks. No chaos engineering, no automated error budgets, no burn-rate alerting.

**Growth Trigger:** Production services with paying customers require formal SLOs and error budget enforcement.

**Gate Criteria -- G5 (Post-Release Validation) by Risk Tier:**

| Criterion | Low/Medium | High/Critical |
|-----------|-----------|---------------|
| SLO compliance | Automated check (24h) | Automated check (48h) + CTO review |
| Incident review | No Critical/High incidents | PIR for any incident |
| Error budget impact | Manual assessment | Reviewed by CTO |
| AI model stability | Automated metrics check or N/A | 48h observation + report |
| Customer feedback | No blocking issues reported | Feedback reviewed by Product |
| Monitoring confirmation | Automated check | CTO verification |

### 9.7 Phase 6: Feedback and Evolution [v2 S.9.7]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Production telemetry analysis | [v2 S.9.7] | Growth | Formal telemetry analysis deferred. Startup uses manual product metric review. |
| AI model performance monitoring | [v2 S.9.7] | Startup (simplified) | Basic accuracy tracking. Automated drift detection at Growth. |
| Customer feedback aggregation | [v2 S.9.7] | Startup (simplified) | Direct customer conversations. NPS/CSAT surveys at Growth. |
| Security posture trending | [v2 S.9.7] | Startup (simplified) | Manual review in monthly strategic governance meeting. |
| Compliance audit findings | [v2 S.9.7] | Startup | Process audit findings into corrective actions. Applicable from day one. |
| Competitive intelligence | [v2 S.9.7] | Startup | AI-assisted competitive monitoring. CTO reviews. |
| Feature health scoring | [v2 S.9.7] | Growth | Automated scoring deferred. Manual assessment at Startup. |
| SDLC process feedback | [v2 S.9.7] | Startup (simplified) | Informal retrospective. Formal process assessment at Growth. |
| Risk register update from operations | [v2 S.9.7] | Startup | Quarterly manual risk register review (not monthly). |
| Strategy as Code loop closure | [v2 S.9.7] | Growth | Automated feedback loops deferred. Manual strategy review monthly. |
| Decision framework (invest/maintain/review/sunset) | [v2 S.9.7] | Startup (simplified) | CTO informal decision. Structured scoring at Growth. |
| AI model retraining triggers | [v2 S.9.7] | Growth | Automated retraining pipeline deferred. Manual retraining decision at Startup. |
| Feedback cadence | [v2 S.9.7] | Startup (simplified) | Monthly strategic review. Weekly operational review informal. |

**Startup Implementation:** Monthly strategic review covers product metrics, competitive intelligence, risk register update, and compliance status. Customer feedback via direct conversations. AI model basic accuracy tracking. Informal retrospective after each sprint. Compliance audit findings processed immediately. No automated feedback loops, feature health scoring, or retraining pipelines.

**Growth Trigger:** Production telemetry from paying customers enables data-driven feedback loops.

---

## 10. AI Integration Policy [v2 S.10]

### 10.1 AI Usage Classification [v2 S.10.1]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Three-tier usage model (Assistant/Collaborator/Decision Support) | [v2 S.10.1.1] | Startup | Adopt the 3-tier model conceptually from day one. All 7 agents classified per this model. |
| EU AI Act product risk classification (dual axis) | [v2 S.10.1.2] | Startup | Required for EU AI Act compliance. Classify all AI systems per risk taxonomy (Prohibited/High/Limited/Minimal). |
| Runtime classification engine (L1-L4) | [v2 S.10.1.3] | Growth | Requires AI Gateway infrastructure. Static tier assignment sufficient at Startup. |
| Tier enforcement mechanism (blocking, approval queues) | [v2 S.10.1.4] | Growth | Requires AI Gateway. Enforcement via PR review process at Startup. |

**Startup Implementation:** Classify all 7 agents and any product AI features per the 3-tier model and EU AI Act risk taxonomy. Static classification maintained in the AI System Registry. Tier enforcement through PR review process (Tier 2/3 outputs require human review before merge). No runtime classification engine or AI Gateway-based enforcement.

**Growth Trigger:** Production AI features with customer-facing interactions require runtime tier classification and automated enforcement.

### 10.2 AI Lifecycle Management [v2 S.10.2]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Lifecycle stages (data acquisition through retirement) | [v2 S.10.2.1] | Startup (simplified) | Adopt lifecycle stage concepts. Agents go through concept, deployment, operation, retirement. |
| Stage specifications (8 stages with quality gates) | [v2 S.10.2.2] | Startup (simplified) | Apply at conceptual level. No formal stage gate process for agents (they use third-party model). |
| MLOps pipeline architecture | [v2 S.10.2.3] | Growth | No custom ML models at Startup. Deferred. |
| Model registry schema | [v2 S.10.2.4] | Growth | Formal model registry deferred. Agents tracked in AI System Registry. |
| Feature store strategy | [v2 S.10.2.5] | Growth | No ML feature serving at Startup. Deferred. |
| Experiment tracking requirements | [v2 S.10.2.6] | Growth | No ML experiments at Startup. Deferred. |

**Startup Implementation:** Document each agent's lifecycle stage (concept/deployed/operating/retired) in the AI System Registry. No custom ML models, so MLOps pipeline, model registry, feature store, and experiment tracking are all deferred. Third-party model (Claude API) version tracked manually.

**Growth Trigger:** Development of custom AI models for Verity VE/EAM requiring formal MLOps infrastructure.

### 10.3 Prompt Engineering Governance [v2 S.10.3]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Prompt version control (Git-based prompt registry) | [v2 S.10.3.1] | Startup | Keep prompts in Git alongside agent configurations. Version control from day one. Low overhead. |
| Prompt testing framework (unit, regression, adversarial, performance, fairness) | [v2 S.10.3.2] | Growth | Formal prompt testing framework deferred. Manual review of agent prompt changes at Startup. |
| Prompt security review (injection, leakage, PII, output sandboxing) | [v2 S.10.3.3] | Growth | Formal prompt security review deferred. Basic review during PR process. |
| Prompt A/B testing and rollback | [v2 S.10.3.4] | Growth | Requires AI Gateway for canary rollout. Deferred. |

**Startup Implementation:** Agent system prompts (CLAUDE.md files) stored in Git under `agents/`. Changes reviewed via PR process. No formal prompt testing framework, security review process, or A/B testing. Manual validation of prompt changes before deployment.

**Growth Trigger:** Product AI features with customer-facing prompts require formal testing and security review.

### 10.4 AI Observability [v2 S.10.4]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Observability signal inventory (10 signals) | [v2 S.10.4.1] | Growth | Full observability pipeline deferred. Startup logs AI interactions via basic logging. |
| PII redaction in logs | [v2 S.10.4.2] | Growth | Formal PII redaction pipeline deferred. Manual PII review at Startup. |
| Dashboard requirements (AI Operations, AI Governance, Feature AI Performance) | [v2 S.10.4.3] | Growth | Formal AI dashboards deferred. Basic logging at Startup. |

**Startup Implementation:** Log AI interactions (agent sessions, API calls) via basic application logging. Track token usage via API provider dashboards (Claude, Azure OpenAI). No formal PII redaction pipeline, AI observability stack, or governance dashboards. Manual review of agent outputs for PII.

**Growth Trigger:** LLM usage exceeds 10K tokens/day or first production AI feature requires formal observability.

### 10.5 AI Model Supply Chain Security [v2 S.10.5]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Model provenance tracking (first-party, third-party API, open-source) | [v2 S.10.5.1] | Startup (simplified) | Track third-party model provenance (Claude API version, Azure OpenAI model version). ISO 42001 relevant. |
| Third-party model assessment process (security, privacy, bias, license, vendor) | [v2 S.10.5.2] | Startup (simplified) | Basic assessment for approved tools (Claude, Azure OpenAI). Formal 5-area assessment at Growth. |
| Model signing and verification (Cosign) | [v2 S.10.5.3] | Growth | No custom models to sign. Deferred. |
| Azure OpenAI version pinning policy | [v2 S.10.5.4] | Growth | Applicable when using Azure OpenAI in production. Conceptually adopt (no "latest" in production). |
| AI Bill of Materials (AI-BOM) | [v2 S.10.5.5] | Growth | No custom models. Standard SBOM covers software dependencies. Deferred. |

**Startup Implementation:** Maintain provenance records for third-party AI services: vendor name, model identifier, API version, data processing agreement reference. Conduct basic assessment of Claude and Azure OpenAI covering security, privacy, and vendor risk. No model signing, formal version pinning policy, or AI-BOM.

**Growth Trigger:** Custom AI models or production AI features requiring formal supply chain security controls.

### 10.6 Approved AI Toolchain [v2 S.10.6]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Tool inventory (approved tools list) | [v2 S.10.6.1] | Startup | Maintain approved AI tool list from day one. Current: Claude Code, ChatGPT, Codex, Azure OpenAI per PROJECT.md. |
| Tool approval process (6-step workflow) | [v2 S.10.6.2] | Growth | Formal multi-stakeholder approval process deferred. CEO/CTO decides at Startup. |
| AI Gateway architecture (centralized enforcement) | [v2 S.10.6.3] | Growth | AI Gateway infrastructure deferred. Direct API access at Startup. |

**Startup Implementation:** Maintain an approved AI tool list. CEO/CTO approves new tools. Current approved tools: Claude (Code, Cowork), ChatGPT, Codex, Azure OpenAI. Non-approved tools prohibited for processing proprietary or customer data. No centralized AI Gateway.

**Growth Trigger:** AI tool proliferation requires formal approval process and centralized governance.

### 10.7 Prohibited AI Practices [v2 S.10.7]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| EU AI Act Article 5 prohibitions (subliminal manipulation, exploitation, social scoring, biometric ID, emotion inference) | [v2 S.10.7.1] | Startup | Non-negotiable. Legal requirement. Apply from day one. |
| HH Group additional prohibitions (AI in security-critical paths without human design, non-pinned versions, training without DPA/DPIA, deployment without AIA, non-approved tools, autonomous production decisions, unredacted PII logs) | [v2 S.10.7.2] | Startup | All prohibitions apply from day one. Enforced through PR review process and organizational controls. |

**Startup Implementation:** All prohibited practices enforced from day one. EU AI Act Art. 5 prohibitions are absolute. HH Group prohibitions enforced through: (1) PR review catching security-critical AI code, (2) organizational policy on approved tools, (3) DPA/DPIA requirements before AI processing of personal data. No automated enforcement (OPA, AI Gateway) at Startup; relies on human review and organizational controls.

**Growth Trigger:** Automated enforcement via AI Gateway and policy engine when AI interactions volume requires it.

### 10.8 AI Agent Governance [v2 S.10.8]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Agent registry (with capabilities, tier, autonomy, escalation, owner, budgets) | [v2 S.10.8.1] | Startup | THIS is what Phase 1 establishes. All 7 agents registered in AI System Registry. |
| Agent trust levels and autonomy boundaries (Tier 1/2/3) | [v2 S.10.8.2] | Startup | All agents start at Trust Level 2 (Supervised Autonomous). Promotion requires 30+ interactions + CEO approval. |
| Agent-to-agent communication governance (Intent Contracts, no direct calls, logging) | [v2 S.10.8.3] | Startup | Enforce through HANDOFF.md protocol and Git audit trail. Formal Intent Contracts at Growth. |
| Multi-agent workflow patterns (sequential, fan-out, peer review, hierarchical) | [v2 S.10.8.4] | Startup | SDLC Lead orchestrates specialist agents via Task tool. Sequential and hierarchical patterns primary. |
| Human oversight requirements (kill switch, budget enforcement, timeout, rollback, production isolation) | [v2 S.10.8.5] | Startup | All oversight requirements apply. Kill switch = terminate Claude Code session. Budget enforcement via maxTurns config. Production isolation absolute. |

**Startup Implementation:** All 7 agents registered with: agent ID, purpose, capabilities, tier classification, autonomy level, escalation path (CEO), owner, token budget (via maxTurns). Trust Level 2 for all agents. HANDOFF.md protocol for inter-agent communication. CEO can terminate any agent session. No agent modifies production systems directly; all changes flow through PR review. Agent configurations in `agents/` directory (created in Plan 01-02).

**Growth Trigger:** Agent performance data enables evidence-based trust level adjustments; production AI features require formal Intent Contract infrastructure.

---

## 11. AI Management System -- AIMS [v2 S.11]

### 11.1 AIMS Scope and Context [v2 S.11.1]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Context of the organization -- external factors (EU AI Act, ISO 42001, customer expectations, competitive landscape, AI evolution, national AI strategies) | [v2 S.11.1.1] | Startup | Required for ISO 42001 Clause 4.1. External context monitoring applies from day one. |
| Context of the organization -- internal factors (AI maturity, architecture, resource constraints, culture, ISMS integration, multi-entity) | [v2 S.11.1.1] | Startup | Required for ISO 42001 Clause 4.1. Internal context factors directly relevant at Startup. |
| Interested parties and AI-related requirements (customers, end users, regulators, employees, investors, suppliers, industry bodies, civil society) | [v2 S.11.1.2] | Startup | Required for ISO 42001 Clause 4.2. Identify interested parties and their AI requirements. |
| AIMS scope (product AI, development AI, third-party AI) | [v2 S.11.1.3] | Startup | Required for ISO 42001 Clause 4.3. AIMS covers all 7 agents (Development AI) + any Verity product AI + third-party AI services. |
| AIMS-ISMS relationship (shared risk register, coordinated audit, combined management review, unified incident taxonomy, aligned document hierarchy) | [v2 S.11.1.4] | Startup | Critical for integrated ISO 27001 + ISO 42001 certification. Single risk register with AI tags. Combined quarterly management review. |

**Startup Implementation:** Define AIMS scope covering all AI systems: 7 Claude Code agents (Development AI), any Verity VE/EAM AI features (Product AI), and Claude/Azure OpenAI APIs (Third-party AI). Produce context analysis (Clause 4.1), interested party register (Clause 4.2), and scope statement (Clause 4.3). Integrate with ISMS through shared risk register, coordinated audit schedule, and combined management review.

**Growth Trigger:** Scale of AI systems requires separation of AIMS and ISMS management review agendas.

### 11.2 AI Policy [v2 S.11.2]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| AI Policy content (purpose, responsible AI commitment, regulatory conformity, objectives framework, continual improvement, prohibited practices, ethical commitments) | [v2 S.11.2.1] | Startup | Required for ISO 42001 Clause 5.2. Standalone AI Policy document approved by CEO (as Managing Director). Will be produced in Phase 2. |
| AI Policy communication (knowledge base, onboarding, contracts, annual review) | [v2 S.11.2.2] | Startup | Required for ISO 42001 Clause 5.2. Communicate policy to all personnel. |

**Startup Implementation:** Produce a standalone AI Policy document covering all 7 content areas per [v2 S.11.2.1]. CEO approves as Geschaeftsfuehrer. Published internally, summarized in onboarding materials. Referenced in supplier and customer contracts where AI features are delivered. Annual review. Production deferred to Phase 2 (GRC and Policy Framework).

**Growth Trigger:** Policy scope extends to cover customer-deployed AI features with formal deployer obligations.

### 11.3 AI System Registry [v2 S.11.3]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Registry purpose | [v2 S.11.3.1] | Startup | Required for ISO 42001 Annex A.4.2. Authoritative inventory of all AI systems. |
| Registry schema (systemId, name, category, description, intendedUse, euAiActClass, sdlcTier, dataInputs, dataOutputs, responsibleOwner, lifecycleStatus, applicableControls, assessments, conformity, entities) | [v2 S.11.3.2] | Startup | Adopt simplified schema. Include key fields for certification. |
| Registry maintenance (update frequency, triggers, format, review, automation) | [v2 S.11.3.3] | Startup (simplified) | Manual updates per sprint for systems under development. Quarterly review for deployed systems. YAML-in-Git format. |

**Startup Implementation:** Create AI System Registry as YAML-in-Git. Register all 7 agents + any product AI features + third-party AI services. Simplified schema focused on certification-required fields: systemId, name, category, description, intendedUse, euAiActClass, sdlcTier, responsibleOwner, lifecycleStatus, lastRiskAssessment. Update manually per sprint. Quarterly review. Production deferred to Phase 5 (Security and Compliance Artifacts).

**Growth Trigger:** CI/CD automation validates registry completeness against deployed AI components (blocking deployment at Gate 2).

### 11.4 AI Risk Assessment [v2 S.11.4]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Dual-axis risk classification (EU AI Act product risk x SDLC usage tier) | [v2 S.11.4.1] | Startup | Apply dual-axis classification to all AI systems. Required for EU AI Act and ISO 42001. |
| AI risk sources (ISO 23894, ISO 42001 Annex C) -- 5 categories | [v2 S.11.4.2] | Startup (simplified) | Consider all 5 risk source categories but simplify assessment to key sources: data quality, model accuracy, system integration. Full assessment at Growth. |
| Risk appetite statement (quantitative thresholds for availability, accuracy, bias, hallucination, data quality, nonconformities) | [v2 S.11.4.3] | Startup (simplified) | Adopt risk appetite concepts. CEO approves thresholds. Simplified to key dimensions (accuracy degradation, hallucination rate). |
| Risk treatment process (identification, evaluation, treatment selection, owner assignment, residual acceptance, register integration) | [v2 S.11.4.4] | Startup | Apply full treatment process. Risk identification during Phase 0 for new AI features. 5x5 matrix scoring. CEO accepts High/Critical residual risk. |

**Startup Implementation:** Classify all AI systems on dual axes (EU AI Act risk level x SDLC usage tier). Assess key AI risk sources: data quality, model accuracy/hallucination, system integration boundaries. CEO-approved risk appetite for key dimensions. Full treatment process: identify, evaluate (5x5 matrix), treat, assign owner, accept residual. AI risks in shared risk register with AI- prefix tag.

**Growth Trigger:** AI Governance Board formation enables formal risk appetite governance and quantitative thresholds.

### 11.5 AI Impact Assessment (ISO 42005) [v2 S.11.5]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| When required (High-Risk, Limited-Risk, special category data, financial/employment/contractual decisions, Phase 0 flagged) | [v2 S.11.5.1] | Startup | Triggers apply from day one. Mandatory AIA for any High-Risk AI system. |
| Assessment process (6 steps: scope, thresholds, execution, analysis, approval, monitoring) | [v2 S.11.5.2] | Startup (simplified) | Full 6-step process for High-Risk only. Simplified pre-screening for Limited-Risk. |
| Re-assessment triggers (model change, use change, regulatory change, complaint, annual, quarterly) | [v2 S.11.5.3] | Startup | All re-assessment triggers apply. |
| EU AI Act integration (Art. 9 risk management, Art. 27 fundamental rights) | [v2 S.11.5.4] | Startup | Required for EU AI Act compliance. AIA satisfies Art. 9 continuous risk management. |

**Startup Implementation:** Conduct AIA for any AI system classified as High-Risk under EU AI Act. Pre-screening at Phase 0 for all AI features. Full 6-step process for High-Risk; simplified assessment for Limited-Risk. Re-assessment triggers monitored. CEO approval for High-Risk AIAs (as Managing Director). Art. 27 fundamental rights assessment included for High-Risk systems affecting individuals.

**Growth Trigger:** Multiple High-Risk AI systems requiring concurrent AIA management.

### 11.6 ISO 42001 Annex A Controls [v2 S.11.6]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| A.2 -- AI Policies (A.2.2 AI Policy, A.2.3 Roles/responsibilities, A.2.4 Internal directives) | [v2 S.11.6] | Startup | A.2.2: AI Policy published internally (Phase 2). A.2.3: CTO assumes AI governance lead; CEO covers CISO. A.2.4: Single acceptable use document for AI tools. |
| A.3 -- Internal Organization (A.3.2 Resources, A.3.3 Competence, A.3.4 Awareness) | [v2 S.11.6] | Startup | A.3.2: AI governance within engineering capacity. A.3.3: Role-specific AI literacy training (annual). A.3.4: Onboarding briefing + quarterly awareness. |
| A.4 -- Resources for AI Systems (A.4.2 Inventory, A.4.3 Intended use, A.4.4 Documentation, A.4.5 Resources, A.4.6 Logging) | [v2 S.11.6] | Startup | A.4.2: Registry maintained manually. A.4.3: Intended use in registry. A.4.4: ADRs + basic model cards. A.4.5: Approved toolchain list. A.4.6: Basic telemetry + IEA audit trail. |
| A.5 -- Assessing Impacts (A.5.2 Impact process, A.5.3 Individual impacts, A.5.4 Societal impacts) | [v2 S.11.6] | Startup | A.5.2: Pre-screening at Phase 0; full AIA for High-Risk. A.5.3: Combined with DPIA where applicable. A.5.4: Ethical review checklist at Phase 0. |
| A.6 -- AI System Lifecycle (A.6.2 Processes, A.6.3 V&V, A.6.4 Deployment, A.6.5 Monitoring) | [v2 S.11.6] | Startup | A.6.2: SDLC phases with AI gates. A.6.3: AI test suite in CI/CD. A.6.4: Progressive rollout with manual monitoring. A.6.5: Basic model telemetry and drift alerting. |
| A.7 -- Data for AI Systems (A.7.2 Management, A.7.3 Quality, A.7.4 Provenance, A.7.5 Acquisition) | [v2 S.11.6] | Startup (simplified) | A.7.2: Data classification and basic quality checks. A.7.3: Automated schema validation. A.7.4: Manual provenance for training data. A.7.5: DPA review for external data. |
| A.8 -- Transparency (A.8.2 Information, A.8.3 Notification, A.8.4 Communication) | [v2 S.11.6] | Startup (simplified) | A.8.2: Basic transparency notices for product AI. A.8.3: "AI-assisted" labels on AI content. A.8.4: Basic confidence scores shown to users. |
| A.9 -- Use of AI Systems (A.9.2 Responsible use, A.9.3 Human oversight) | [v2 S.11.6] | Startup | A.9.2: Prohibited practices list + annual acknowledgment. A.9.3: HITL for Tier 3 and production deployments (via PR review). |
| A.10 -- Third-Party/Customer (A.10.2 Suppliers, A.10.3 Customers) | [v2 S.11.6] | Startup (simplified) | A.10.2: AI clauses in key supplier contracts (Claude, Azure OpenAI). A.10.3: Basic product AI documentation. |

**Startup Implementation:** Implement all Annex A control groups at the Startup maturity level described in SDLC-v2. Focus on controls required for initial ISO 42001 certification: AI Policy (A.2.2), roles (A.2.3), registry (A.4.2), impact assessment (A.5.2), lifecycle governance (A.6), and responsible use (A.9). Full Annex A Statement of Applicability produced as part of certification preparation.

**Growth Trigger:** Additional AI systems require expanded control implementation; formal AI Governance Board reviews all Annex A control effectiveness.

### 11.7 EU AI Act Conformity [v2 S.11.7]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Risk classification methodology (Art. 6) -- inventory, Annex III screening, exception analysis, Art. 50 screening, documentation, reclassification | [v2 S.11.7.1] | Startup | All steps apply. Classify all product AI features per EU AI Act. |
| High-Risk AI system requirements (Art. 9-15) -- risk management, data governance, documentation, record-keeping, transparency, human oversight, accuracy/robustness | [v2 S.11.7.2] | Startup (simplified) | Apply to any High-Risk AI systems. Annex IV documentation simplified at Startup. |
| Annex IV technical documentation | [v2 S.11.7.3] | Startup (simplified) | Simplified documentation assembled from SDLC artifacts. Full Annex IV format at Growth. |
| GPAI provider obligations (Art. 53) | [v2 S.11.7.4] | Startup | Assess GPAI applicability during Phase 0. Document in AI System Registry. |

**Startup Implementation:** Classify all product AI features per Art. 6 methodology. For any High-Risk systems: implement Art. 9-15 requirements through SDLC gates and AI test suite. Simplified Annex IV documentation assembled from existing SDLC artifacts (ADRs, model cards, test reports). Assess GPAI applicability for any fine-tuned models integrated as product features.

**Growth Trigger:** First High-Risk AI system requiring full conformity assessment and CE marking.

### 11.8 AI Governance Bodies [v2 S.11.8]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Startup stage governance (CTO as AI governance lead, monthly AI Governance Board, AI Ethics Champion 0.5 FTE, external review quarterly, Managing Directors quarterly) | [v2 S.11.8.1] | Startup | THIS is the operative section. CEO assumes AI governance lead (not CTO, per user decision). Monthly governance board = Monthly Strategic meeting. |
| Growth stage governance | [v2 S.11.8.2] | Growth | Deferred. Reference only. |
| Enterprise stage governance | [v2 S.11.8.3] | Enterprise | Deferred. Reference only. |

**Startup Implementation:** CEO as AI governance lead (covers CISO responsibilities per user decision). AI governance topics addressed in Monthly Strategic Governance meeting (CEO + CTO + CISO + Strategy Partner). No dedicated AI Ethics Champion at Startup; CEO handles ethical review. External AI governance advisor engaged quarterly for pre-certification readiness. Managing Directors (CEO as Geschaeftsfuehrer) quarterly EDM cycle review.

**Growth Trigger:** Dedicated AI Governance Lead hired; formal AI Ethics Champion designated per ART.

### 11.9 AIMS PDCA Cycle [v2 S.11.9]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Plan -- objectives, risk assessment, resources, audit program, policy review, SoA | [v2 S.11.9.1] | Startup | All Plan activities apply. Simplified formality. Annual cycle. |
| Do -- classification enforcement, impact assessments, IEA controls, registry maintenance, quality gates, transparency, nonconformities, training | [v2 S.11.9.2] | Startup | All Do activities apply through SDLC integration. Continuous cycle. |
| Check -- management review (quarterly), internal audit (annual), AI governance metrics | [v2 S.11.9.3] | Startup | Quarterly combined ISMS/AIMS management review. Annual internal audit. Basic AI governance metrics. |
| Act -- nonconformity management, continual improvement | [v2 S.11.9.4] | Startup | Full nonconformity process applies (detect, classify, investigate, correct, verify, record, report). Continuous cycle. |

**Startup Implementation:** Full PDCA cycle at reduced formality. Plan: annual objectives, risk assessment, SoA. Do: enforce through SDLC gates and PR review. Check: quarterly management review with AI governance agenda; annual internal audit covering AIMS clauses. Act: nonconformity management per severity classification (Critical: immediate containment; High: 72h corrective action; Medium: 30 days; Low: next planning cycle). Continual improvement logged in sprint backlog.

**Growth Trigger:** AIMS effectiveness trends tracked across PI boundaries for certification auditors; formal improvement backlog management.

### 11.10 Transparency and Explainability [v2 S.11.10]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| AI transparency information requirements (9 categories per ISO 12792) | [v2 S.11.10.1] | Startup (simplified) | Define basic transparency info for each AI system: identity, purpose, capabilities, limitations, human oversight. Full ISO 12792 at Growth. |
| Explainability methods and thresholds (SHAP, LIME, attention, confidence, counterfactual) | [v2 S.11.10.2] | Growth | Formal explainability methods deferred. Basic confidence scores at Startup. |
| User-facing transparency UX (AI indicator, confidence display, explanation on demand, override, feedback) | [v2 S.11.10.3] | Startup (simplified) | "AI-assisted" labels on AI-generated content. Basic confidence indication. Override always available. |
| Transparency documentation lifecycle (design through retirement) | [v2 S.11.10.4] | Growth | Formal transparency documentation lifecycle deferred. Basic documentation at Startup. |

**Startup Implementation:** For each AI system in the registry, document: system identity, intended purpose, capabilities and limitations, human oversight measures, and AI interaction notification approach. Product AI features display "AI-assisted" labels. Users can override any AI recommendation. No formal SHAP/LIME explainability or structured transparency lifecycle.

**Growth Trigger:** Product AI features with customer-facing decisions requiring formal explainability per EU AI Act Art. 13.

---

## 12. Security and Privacy by Design [v2 S.12]

### 12.1 Security Architecture Principles [v2 S.12.1]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Principle 1: Zero Trust | [v2 S.12.1] | Startup (simplified) | Adopt Zero Trust for production infrastructure. mTLS for service-to-service. Simplified trust model for internal dev environments initially. |
| Principle 2: Defense in Depth | [v2 S.12.1] | Startup | Layered security controls apply from day one. WAF, API gateway, application auth, data encryption. |
| Principle 3: Least Privilege | [v2 S.12.1] | Startup | All identities operate with minimum permissions. JIT access via Azure PIM for sensitive operations. Quarterly access reviews. |
| Principle 4: Encryption Everywhere | [v2 S.12.1] | Startup | AES-256 at rest, TLS 1.3 in transit. Azure Key Vault for key management. Confidential Computing at Growth. |
| Principle 5: AI Security | [v2 S.12.1] | Startup (simplified) | Treat AI systems as high-value assets. Basic provenance tracking. Model integrity verification at Growth (Cosign). |
| Principle 6: Climate-Aware Security (ISO 27001 Amd.1) | [v2 S.12.1] | Growth | Annual climate risk assessment deferred to Growth. Startup documents awareness of physical/transition risks. |

**Startup Implementation:** All 6 principles apply in spirit. Principles 1-4 fully implemented for production systems. Principle 5 simplified (basic provenance, no formal AI security monitoring). Principle 6 awareness documented but formal annual climate assessment deferred to Growth.

**Growth Trigger:** Production AI features require formal AI security controls; ISO 27001 surveillance audit requests climate risk evidence.

### 12.2 ISO 27001 ISMS Integration [v2 S.12.2]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| ISMS scope (organizations, processes, assets, technology, people, locations, exclusions) | [v2 S.12.2.1] | Startup | Required for ISO 27001 Clause 4.3. Scope covers all 3 entities, all SDLC phases, all information assets. Multi-site certification per IAF MD 1. |
| Statement of Applicability (93 Annex A controls) | [v2 S.12.2.2] | Startup | Required for ISO 27001 Clause 6.1.3(d). All 93 controls assessed. SoA maintained as controlled document. |
| PDCA cycle for ISMS | [v2 S.12.2.3] | Startup | Full PDCA cycle. Plan annually, Do continuously, Check quarterly (management review) + annually (internal audit), Act continuously. |
| Amendment 1:2024 climate action integration | [v2 S.12.2.4] | Growth | Formal climate change relevance determination deferred. Document awareness in context analysis. |
| Documented information framework | [v2 S.12.2.5] | Startup | Required for ISO 27001 Clause 7.5. Document control regime: Git for policies/procedures, GRC platform for risk/audit/evidence records. |

**Startup Implementation:** Full ISMS scope across all 3 entities. SoA covering all 93 Annex A controls (all organizational A.5, all people A.6, applicable physical A.7, all technological A.8). PDCA cycle with quarterly management review and annual internal audit. Document control: Markdown in Git (policies, procedures), NorthGRC (risk assessments, audit reports, evidence). Amendment 1 climate integration: note in context analysis, defer formal assessment.

**Growth Trigger:** First surveillance audit feedback on climate risk evidence; dedicated CISO enables expanded ISMS governance.

### 12.3 Secure Development Practices [v2 S.12.3]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Threat modeling (STRIDE, LINDDUN, DIS 27090 AI threat taxonomy) | [v2 S.12.3] | Startup (simplified) | STRIDE for critical features. LINDDUN for privacy features. AI threat taxonomy at Growth. |
| Secure coding standards (OWASP, language-specific guides) | [v2 S.12.3] | Startup | Adopt OWASP Secure Coding Practices from day one. Language-specific guides for TypeScript/Python. |
| Secret management (Azure Key Vault, no secrets in code) | [v2 S.12.3] | Startup | Azure Key Vault. Automated secret detection in pre-commit hooks. |
| Dependency management (SCA, license compliance) | [v2 S.12.3] | Startup | Automated PR blocking on Critical/High CVEs. License compliance verification. |
| Container hardening | [v2 S.12.3] | Startup (simplified) | Distroless base images, non-root execution. Full hardening (seccomp, AppArmor) at Growth. |
| API security (OAuth 2.1, rate limiting, input validation) | [v2 S.12.3] | Startup | Core API security from day one. |
| SBOM generation (CycloneDX) | [v2 S.12.3] | Startup | Generated per release. Per-PR at Growth. |
| AI model integrity (signing, checksums, provenance) | [v2 S.12.3] | Growth | No custom models to sign. Deferred. |
| Prompt injection defense | [v2 S.12.3] | Startup (simplified) | Basic input sanitization. Formal guardrail frameworks at Growth. |
| AI output validation | [v2 S.12.3] | Startup | All AI outputs are untrusted until human-reviewed. Applicable from day one. |
| AI supply chain security (AI-BOM) | [v2 S.12.3] | Growth | AI-BOM deferred with custom model development. |
| AI security monitoring | [v2 S.12.3] | Growth | Formal adversarial detection deferred. Basic logging at Startup. |
| Cybersecurity coordination (CERT-Bund, NCSC-NL, US-CERT) | [v2 S.12.3] | Startup (simplified) | Establish relationship with CERT-Bund and NCSC-NL. Formal ISAC membership at Growth. |
| Anti-social engineering (phishing simulations, verification procedures) | [v2 S.12.3] | Startup (simplified) | Annual awareness training. Quarterly phishing simulations at Growth. |
| DLP strategy | [v2 S.12.3] | Startup (simplified) | Basic Azure Information Protection. Full DLP stack at Growth. |

**Startup Implementation:** Core secure development practices from day one: OWASP standards, secret management, dependency scanning, API security, SBOM generation. Threat modeling for critical features (STRIDE). Basic prompt injection defense for AI interactions. All AI outputs untrusted until human review. Establish CERT-Bund and NCSC-NL relationships. Annual security awareness training.

**Growth Trigger:** Custom AI models or production AI endpoints require formal AI security monitoring and supply chain controls.

### 12.4 NIS2 Compliance [v2 S.12.4]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Art. 21(a) Risk analysis and IS policies | [v2 S.12.4.1] | Startup | ISO 27001 ISMS with 5x5 risk assessment. IS policy approved by management. Required. |
| Art. 21(b) Incident handling | [v2 S.12.4.1] | Startup | Incident response procedures documented and tested. Sentinel SIEM with detection playbooks at Growth; manual process at Startup. |
| Art. 21(c) Business continuity and crisis management | [v2 S.12.4.1] | Startup (simplified) | Basic RPO/RTO targets. BCP documented. Full DR testing at Growth. |
| Art. 21(d) Supply chain security | [v2 S.12.4.1] | Startup | Vendor risk assessment for key suppliers. SCA/SBOM for software supply chain. |
| Art. 21(e) Security in acquisition, development, maintenance | [v2 S.12.4.1] | Startup | This SDLC document. DevSecOps pipeline. Vulnerability management with SLAs. |
| Art. 21(f) Cybersecurity risk management effectiveness assessment | [v2 S.12.4.1] | Startup (simplified) | Quarterly security metrics review. Annual penetration test. Full TISAX maturity self-assessment at Growth. |
| Art. 21(g) Cyber hygiene and training | [v2 S.12.4.1] | Startup | Mandatory annual security awareness training. 90% completion rate target. |
| Art. 21(h) Cryptography policies | [v2 S.12.4.1] | Startup | Cryptographic policy defining approved algorithms and key management. PQC roadmap at Growth. |
| Art. 21(i) HR security, access control, asset management | [v2 S.12.4.1] | Startup | Pre-employment screening, RBAC via Azure Entra ID, quarterly access reviews, MFA mandatory. |
| Art. 21(j) MFA and secured communications | [v2 S.12.4.1] | Startup | Azure Entra ID MFA enforced. FIDO2 for privileged accounts. Encrypted communications. |
| NIS2UmsuCG -- German transposition (entity categorization, BSI registration, incident reporting, management liability) | [v2 S.12.4.2] | Startup | Legally mandatory for GmbH. BSI registration maintained. Incident reporting in German via BSI portal. Management liability acknowledged. |
| Dutch Wbni amendments (entity categorization, NCSC-NL registration, incident reporting, AP coordination) | [v2 S.12.4.3] | Startup | Legally mandatory for B.V. NCSC-NL registration maintained. Dual-notification assessment (NIS2 + GDPR). |
| Management body liability (NIS2 Art. 20, NIS2UmsuCG Sec. 38) | [v2 S.12.4.4] | Startup | Non-negotiable. Geschaeftsfuehrer and Bestuurders personally liable. Annual training documented. Signed acknowledgment on file. |
| Supply chain notification cascades | [v2 S.12.4.5] | Startup (simplified) | Basic notification process documented. Full automated cascade at Growth. |
| Incident reporting automation | [v2 S.12.4.6] | Growth | Automated report generation deferred. Manual reporting with pre-built templates at Startup. |

**Startup Implementation:** All NIS2 Art. 21 measures implemented at Startup maturity. Full compliance across Art. 21(a)-(j) through ISO 27001 ISMS, DevSecOps pipeline, vulnerability management, security training, cryptographic policy, access controls, and MFA. NIS2UmsuCG obligations for GmbH (BSI registration, German-language reporting). Wbni obligations for B.V. (NCSC-NL registration, Dutch notifications). Management body liability acknowledged with signed documents and annual training. Manual incident reporting with pre-built templates (BSI format in German, NCSC-NL format in Dutch).

**Growth Trigger:** Incident volume or regulatory expectations require automated reporting pipeline.

### 12.5 TISAX Controls [v2 S.12.5]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| ISA Chapter 1: Information Security Management (1.1-1.7) | [v2 S.12.5.1] | Startup | Existing TISAX certification maintenance. All Chapter 1 controls (IS policy, organization, asset management, classification, handling, risk management, training, incident management, compliance) applicable. |
| ISA Chapter 2: Human Resources Security (2.1) | [v2 S.12.5.1] | Startup | Pre-employment screening, during-employment NDA/training, termination access revocation. |
| ISA Chapter 3: Physical Security (3.1) | [v2 S.12.5.1] | Startup | Office access controls. Azure data center physical security inherited. |
| ISA Chapter 4: Identity and Access Management (4.1) | [v2 S.12.5.1] | Startup | RBAC, user access management, PAM, authentication management. |
| ISA Chapter 5: IT Security (5.1-5.7) | [v2 S.12.5.1] | Startup | Cryptography, vulnerability management, penetration testing, network security, system hardening, logging/monitoring, backup/recovery, mobile device security, development security. |
| ISA Chapter 6: Supplier Management (6.1) | [v2 S.12.5.1] | Startup | Vendor risk assessment. Security requirements in contracts. |
| ISA Chapter 7: Prototype Protection (7.1-7.3) | [v2 S.12.5.1] | Startup | Immediately relevant for patent-sensitive Verity innovations. Classification, handling, and transfer controls per Patent-Sensitive Artifact Handling section above. |
| Level 3 maturity evidence standard (process definition, consistent implementation, measured effectiveness, continuous improvement) | [v2 S.12.5.2] | Startup | Required for TISAX Level 3 maintenance. All controls must demonstrate 4 maturity criteria. |

**Startup Implementation:** Maintain TISAX certification by implementing all ISA 6 control objectives at Level 3 maturity. Chapter 7 (Prototype Protection) immediately relevant for patent-sensitive Verity innovations -- controls defined in Patent-Sensitive Artifact Handling section. All controls must demonstrate: documented process, consistent implementation, measured effectiveness, and continuous improvement evidence.

**Growth Trigger:** TISAX reassessment triggers expanded control evidence requirements; new automotive OEM customer requirements.

### 12.6 Privacy by Design [v2 S.12.6]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| GDPR privacy principles implementation (lawfulness, purpose limitation, data minimization, accuracy, storage limitation, integrity/confidentiality) | [v2 S.12.6.1] | Startup | All 6 GDPR principles applicable from day one. ROPA maintained. Privacy notices provided. |
| DPIA requirements for AI features (GDPR Art. 35) | [v2 S.12.6.2] | Startup | Mandatory for AI features processing personal data. LINDDUN threat model for privacy. |
| Privacy-preserving AI techniques (differential privacy, federated learning, anonymization, synthetic data, output filtering) | [v2 S.12.6.3] | Growth | Formal privacy-preserving AI techniques deferred. Basic anonymization for test data at Startup. |
| European Accessibility Act (EAA) reference | [v2 S.12.6.4] | Growth | EN 301 549 / WCAG 2.2 AA compliance integrated into SDLC testing. Full EAA conformance at Growth. |
| CCPA/CPRA compliance | [v2 S.12.6.5] | Growth | Deferred until US customer pipeline active. Basic US privacy structure maintained. |

**Startup Implementation:** All GDPR principles implemented through ROPA, privacy notices, data minimization rules, and encryption. DPIA mandatory for any AI feature processing personal data. Basic anonymization for staging/test environments. EAA/accessibility integrated into CI pipeline (axe-core). CCPA/CPRA deferred until California customer pipeline active.

**Growth Trigger:** US customer pipeline activates CCPA/CPRA requirements; production AI features require formal privacy-preserving techniques.

---

## 13. Quality Gates and Governance [v2 S.13]

### 13.1 Risk-Tiered Gate Model [v2 S.13.1]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Risk classification criteria (6 factors: user impact, data sensitivity, AI involvement, regulatory scope, architecture impact, reversibility) | [v2 S.13.1] | Startup | All 6 classification factors apply. Highest-severity factor determines tier. |
| 4 risk tiers (Low, Medium, High, Critical) | [v2 S.13.1] | Startup | All 4 tiers preserved. Governance compressed: Low/Medium auto-flow; High/Critical require human approval. |
| Gate mechanism by risk tier (Automated Gate, Review Gate, Approval Gate) | [v2 S.13.1] | Startup (simplified) | Low/Medium: automated pipeline + post-hoc review within 24h. High: async CTO review. Critical: CTO + CISO synchronous approval. No formal CAB at Startup. |

**Startup Implementation:** 4 risk tiers preserved with compressed governance. Risk classification automated from metadata (labels, file paths, change scope) where possible. Low/Medium changes auto-promote through CI/CD; flagged for post-hoc review. High changes require CTO async review before promotion (<4 hours SLA). Critical changes require CTO + CISO synchronous approval in Weekly Technical meeting (<24 hours SLA).

**Growth Trigger:** Change volume requires formal CAB (Change Advisory Board) separate from CTO direct approval.

### 13.2 Gate Definitions [v2 S.13.2]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| G0 -- Strategic Alignment Gate | [v2 S.13.2] | Startup (simplified) | All criteria exist but with simplified approval: CTO decides all risk levels. |
| G1 -- Requirements Readiness Gate | [v2 S.13.2] | Startup (simplified) | Stories meet DoR; threat model for critical features; DPIA where applicable. |
| G2 -- Development Completeness Gate | [v2 S.13.2] | Startup (simplified) | DoD met; CI pipeline passes; SBOM generated. |
| G3 -- Quality and Compliance Gate | [v2 S.13.2] | Startup (simplified) | Test layers pass; security tests clean; compliance evidence generated. |
| G4 -- Release Readiness Gate | [v2 S.13.2] | Startup (simplified) | Staging passes; canary observation; CTO approval for High/Critical. |
| G5 -- Post-Release Validation Gate | [v2 S.13.2] | Startup (simplified) | SLO compliance checked; no Critical/High incidents; monitoring confirmed. |
| ISO 33000 process attribute ratings per gate | [v2 S.13.2] | Growth | Formal process assessment deferred. Gates function as pass/fail at Startup. |

**Startup Implementation:** All 6 gates exist with risk-tiered criteria (see Section 9 gate tables above). Low/Medium auto-flow at each gate. High/Critical gates have mandatory human checkpoints (CTO for most; CISO for security-specific). Process attribute ratings not formally tracked; gates are pass/fail. Detailed per-risk-tier criteria documented in Section 9 above.

**Growth Trigger:** ISO 33002 process assessment requires formal capability level measurement at each gate.

### 13.3 Governance Bodies [v2 S.13.3]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| 5 governance bodies (AI Governance, CAB, Security Review Board, Compliance Steering, Architecture Review Board) | [v2 S.13.3] | Startup (consolidated) | 5 bodies consolidate into 2 meetings per user decision. |
| Weekly Technical Governance (30 min) -- architecture + change review + security | [v2 S.13.3] | Startup | CTO, Senior Engineer (IT Pentester), CISO. Covers architecture decisions, change review for High/Critical, security items. |
| Monthly Strategic Governance (60 min) -- AI governance + compliance + strategy | [v2 S.13.3] | Startup | CEO, CTO, CISO, Strategy Partner. Covers AI governance, compliance posture, strategic review, risk register. |
| Role consolidation (CTO = AI Governance Lead; PO/SM single role; Security/AI Ethics rotating) | [v2 S.13.3] | Startup | CEO as AI Governance Lead (not CTO per user decision). CTO covers architecture. CISO dedicated. |

**Startup Implementation:** 2 governance meetings replace 5 separate boards. Weekly Technical (30 min): CTO + IT Pentester + CISO review architecture decisions, High/Critical change approvals, security items. Monthly Strategic (60 min): CEO + CTO + CISO + Strategy Partner review AI governance, compliance posture, risk register, strategic alignment. All governance decisions documented in meeting notes.

**Growth Trigger:** Team size exceeds 15 or first separate product team requires formal governance body separation.

### 13.4 Process Assessment Integration [v2 S.13.4]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Gate-level assessment (per gate passage) | [v2 S.13.4] | Growth | Formal process attribute ratings deferred. |
| PI-level assessment (per Planning Interval) | [v2 S.13.4] | Growth | No PI cadence at Startup. Sprint-based delivery. |
| Annual formal assessment (ISO 33002) | [v2 S.13.4] | Growth | Formal process assessment deferred. |
| Capability level targets by adoption phase | [v2 S.13.4] | Growth | Startup targets Level 1 (Performed) for most phases; formal measurement at Growth. |

**Startup Implementation:** No formal ISO 33000 process assessment. Informal process review during monthly retrospective. Level 1 (Performed) as implicit target for all phases -- processes are executed but not formally measured or managed.

**Growth Trigger:** ISO 33002 assessment becomes a certification requirement or auditor feedback requests process maturity evidence.

### 13.5 Audit Readiness [v2 S.13.5]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| ISO 27001/42001 audit readiness (internal audit, certification audit) | [v2 S.13.5] | Startup | Primary certification targets. Annual internal audit + triennial certification. Evidence from UCL archive + NorthGRC. |
| TISAX assessment readiness | [v2 S.13.5] | Startup | Maintenance of existing certification. Assessment via ENX-accredited auditor every 3 years. |
| SOC 2 Type II audit readiness | [v2 S.13.5] | Growth | Deferred until US SaaS customer demand. |
| NIS2 supervisory readiness | [v2 S.13.5] | Startup | On-demand readiness via incident reports + compliance monitoring. |
| FedRAMP assessment readiness | [v2 S.13.5] | Enterprise | Deferred with FedRAMP. |
| EU AI Act conformity readiness | [v2 S.13.5] | Startup | Conformity assessment for any High-Risk AI before deployment. |
| ISO 33002 process assessment readiness | [v2 S.13.5] | Growth | Deferred. |

**Startup Implementation:** Continuous audit trail for ISO 27001 + ISO 42001 + TISAX. Evidence generated as byproduct of SDLC phases (not separate documentation effort). Pre-audit checklist: management review completed, internal audit completed, major findings closed, SoA current, AI System Registry current. NIS2 readiness maintained through documented incident processes and compliance monitoring.

**Growth Trigger:** Pursuit of SOC 2 or FedRAMP expanding the audit program scope.

---

## 14. UX/DX and Accessibility [v2 S.14]

### 14.1 UX as First-Class Discipline [v2 S.14.1]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| UX team composition (UX Designer 0.5-1.0 FTE, Accessibility Champion 0.5 FTE per team) | [v2 S.14.1] | Growth | Dedicated UX roles deferred. Startup applies UX principles informally; CEO/Strategy Partner cover product UX decisions. |
| UX activities per SDLC phase (Orient through Feedback) | [v2 S.14.1] | Growth | Formal UX activities per phase deferred. Basic usability review before major releases. |
| Amended Definition of Done (design review, UX acceptance, accessibility, design system) | [v2 S.14.1] | Growth | UX-specific DoD criteria deferred. Basic accessibility check retained (axe-core). |

**Startup Implementation:** UX is informally applied. CEO/Strategy Partner make product UX decisions. No dedicated UX designer. Basic accessibility testing (axe-core) in CI. Design review for major user-facing features during Weekly Technical meeting.

**Growth Trigger:** Product has paying customers requiring formal UX quality; dedicated UX designer hired.

### 14.2 Verity Design System (VDS) [v2 S.14.2]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Design token architecture | [v2 S.14.2] | Growth | Formal design system deferred until product UI is more mature. |
| Component library tiers (Foundation, Core, AI Components) | [v2 S.14.2] | Growth | Full component library deferred. |
| Component documentation (Storybook) | [v2 S.14.2] | Growth | Formal Storybook documentation deferred. |
| Visual regression testing in CI/CD | [v2 S.14.2] | Growth | Visual regression deferred. |

**Startup Implementation:** No formal design system. Use standard UI component libraries (e.g., shadcn/ui, Tailwind). Establish basic design tokens (color, typography, spacing) informally. Formal VDS development begins at Growth when product UI stabilizes.

**Growth Trigger:** Multiple product surfaces require visual consistency; design debt affects user experience.

### 14.3 Accessibility Standards [v2 S.14.3]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| WCAG 2.2 AA compliance target | [v2 S.14.3] | Startup (simplified) | WCAG 2.2 A minimum at Startup. AA target for Growth. EAA deadline (June 2025) makes accessibility non-optional. |
| Testing strategy (automated scanning, component a11y tests, manual screen reader, keyboard, cognitive walkthrough) | [v2 S.14.3] | Startup (simplified) | axe-core automated scanning on key pages. Manual screen reader and keyboard testing at Growth. |
| Assistive technology testing matrix | [v2 S.14.3] | Growth | Formal AT testing matrix deferred. Basic screen reader testing informally. |
| Accessibility in CI/CD (blocking on Critical/Serious) | [v2 S.14.3] | Startup (simplified) | axe-core in CI. Zero Critical blocking. Serious violations tracked as backlog items. |
| VPAT/ACR generation | [v2 S.14.3] | Growth | Formal accessibility conformance reporting deferred. |
| EN 301 549 conformance | [v2 S.14.3] | Startup (simplified) | Basic conformance through WCAG 2.2 A testing. Full EN 301 549 at Growth. |
| Section 508 (US federal) | [v2 S.14.3] | Enterprise | Deferred with FedRAMP. |

**Startup Implementation:** axe-core automated scanning in CI pipeline for key pages. Zero Critical violations blocking. WCAG 2.2 Level A as minimum target. Track Serious/Moderate violations in backlog with SLA. Basic keyboard navigation testing for core workflows. Full WCAG 2.2 AA conformance target at Growth.

**Growth Trigger:** First enterprise customer requires accessibility conformance report; EAA enforcement action.

### 14.4 Human-AI Interaction Patterns [v2 S.14.4]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Tier 1 UX patterns (inline suggestions, subtle attribution) | [v2 S.14.4] | Growth | Formal HAI patterns deferred. Basic UX principles applied informally. |
| Tier 2 UX patterns (side-panel recommendations, structured options) | [v2 S.14.4] | Growth | Deferred. |
| Tier 3 UX patterns (full decision interface, explicit recording) | [v2 S.14.4] | Growth | Deferred. |
| Anti-rubber-stamping design (comprehension check, rationale annotation, batch limits) | [v2 S.14.4] | Growth | Deferred. PR review process provides basic anti-rubber-stamping at Startup. |
| EU AI Act Art. 13 transparency UX (glanceable, inspectable, auditable) | [v2 S.14.4] | Startup (simplified) | Basic "AI-assisted" labels. Inspectable and auditable levels at Growth. |
| AI contestability flow | [v2 S.14.4] | Growth | Formal contestability UX deferred. Users can flag issues through support channels. |

**Startup Implementation:** Basic "AI-assisted" labeling on AI-generated content. Users can always override AI recommendations. No formal HAI pattern library, anti-rubber-stamping mechanisms, or contestability flows. Art. 13 transparency via basic labeling; full 3-level transparency at Growth.

**Growth Trigger:** Customer-facing AI features requiring formal transparency and interaction patterns.

### 14.5 Inclusive Design [v2 S.14.5]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Multi-language support (DE, NL, EN) | [v2 S.14.5] | Startup (simplified) | Externalize strings from day one. Full i18n implementation at Growth. |
| Cultural adaptation (data density, formality, regulatory context) | [v2 S.14.5] | Growth | Formal cultural adaptation deferred. |
| Cognitive accessibility (plain language, consistent navigation, error prevention, progressive disclosure, reduced motion, target size) | [v2 S.14.5] | Growth | Formal cognitive accessibility program deferred. Basic plain language and consistent navigation applied informally. |

**Startup Implementation:** Externalize all user-facing strings for future localization. Primary language: English. German and Dutch translations for regulatory-facing materials. Basic plain language principles. No formal inclusive design program.

**Growth Trigger:** First non-English-speaking customer base requires localized product experience.

### 14.6 Developer Experience (DX) [v2 S.14.6]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Internal Developer Portal (Backstage-based) | [v2 S.14.6] | Growth | Formal IDP deferred. Service catalog maintained informally in docs. |
| Development environment standardization (Dev Containers, <15 min setup) | [v2 S.14.6] | Startup | Critical for small team velocity. Dev Container configs from day one. |
| IEA Intent Contract tooling (CLI, IDE extension, dashboard) | [v2 S.14.6] | Growth | Formal IEA tooling deferred. PR-based workflow at Startup. |
| DX metrics (time to first commit, inner loop time, pre-commit speed, CI speed, developer NPS) | [v2 S.14.6] | Startup (simplified) | Track CI pipeline completion time. Formal DX metrics at Growth. |
| Compliance-for-Developers guide | [v2 S.14.6] | Startup | Actionable playbook translating governance requirements for developers. High value for small team. |

**Startup Implementation:** Dev Container configurations for reproducible development environments (<15 min setup). Track CI pipeline completion time (target: <15 min). Compliance-for-Developers guide maintained alongside SDLC in source control. No formal IDP, IEA tooling, or DX survey.

**Growth Trigger:** Onboarding new developers takes >1 day; CI pipeline exceeds 15 minutes consistently.

### 14.7 UX Metrics [v2 S.14.7]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Full UX metrics suite (task success, time on task, error rate, SUS, accessibility conformance, AI acceptance/override, trust score, NPS, CSAT, design system adoption, Core Web Vitals, developer NPS) | [v2 S.14.7] | Growth | Formal UX metrics deferred. |

**Startup Implementation:** Track Core Web Vitals via Lighthouse (basic performance indicator). No formal UX metrics program, usability testing, or user surveys. Product quality assessed through direct customer conversations.

**Growth Trigger:** First paying customers requiring quantitative UX quality evidence.

### 14.8 Compliance UX [v2 S.14.8]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Three-surface compliance architecture (Primary/Secondary/Tertiary) | [v2 S.14.8] | Growth | Formal compliance UX architecture deferred. |
| AI transparency UX (invisible compliance, calibrated trust) | [v2 S.14.8] | Growth | Deferred. Basic "AI-assisted" labels at Startup. |
| Consent management UX (purpose-specific, granular, revocable) | [v2 S.14.8] | Growth | Basic consent mechanism at Startup. Formal consent management UX at Growth. |
| Data subject rights automation UX (self-service privacy dashboard) | [v2 S.14.8] | Growth | Manual data subject rights fulfillment at Startup. Self-service at Growth. |

**Startup Implementation:** Basic compliance labeling ("AI-assisted" badges). Basic consent mechanism. Manual data subject rights fulfillment. No formal three-surface compliance architecture. Dedicated compliance UX development at Growth.

**Growth Trigger:** Customer volume requires self-service privacy controls and automated consent management.

---

## 15. Toolchain and Platform [v2 S.15]

### 15.1 Platform Architecture [v2 S.15.1]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Azure Landing Zone design (CAF Enterprise-Scale, management group hierarchy) | [v2 S.15.1.1] | Startup (simplified) | Simplified landing zone. Single subscription per environment (dev/staging/prod). Full management group hierarchy at Growth. |
| Azure Policy assignment strategy | [v2 S.15.1.2] | Growth | Comprehensive policy-as-code deferred. Basic policies (allowed locations, TLS, encryption) at Startup. |

**Startup Implementation:** Simplified Azure landing zone: single subscription per environment (dev, staging, prod) in EU. Basic Azure policies for data residency (allowed locations), encryption (TLS 1.3, AES-256), and access control. No formal management group hierarchy, US Gov deployment, or comprehensive policy library. Full CAF Enterprise-Scale at Growth.

**Growth Trigger:** Multi-region deployment or FedRAMP requirement triggers full landing zone architecture.

### 15.2 Network Architecture [v2 S.15.2]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Hub-spoke topology with centralized Azure Firewall | [v2 S.15.2.1] | Startup (simplified) | Basic network segmentation. Hub-spoke if using AKS; simpler topology if using App Service/Container Apps. |
| Network security controls (WAF, DDoS, firewall, bastion, forced tunneling, micro-segmentation) | [v2 S.15.2.2] | Growth | Full network security stack at Growth. Basic NSG rules and WAF at Startup. |
| Cross-jurisdiction connectivity | [v2 S.15.2.3] | Growth | No cross-jurisdiction connectivity at Startup (single EU region). |

**Startup Implementation:** Basic network segmentation with NSGs. Azure Front Door with WAF for public-facing services. No hub-spoke topology, centralized firewall, or multi-region connectivity at Startup. Services deployed to Azure West Europe (Netherlands).

**Growth Trigger:** AKS deployment or multi-region requirements trigger full hub-spoke network architecture.

### 15.3 Kubernetes Strategy [v2 S.15.3]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| AKS as primary container orchestration | [v2 S.15.3.1] | Growth | Full AKS deployment deferred. Startup may use simpler compute (App Service, Container Apps, Vercel). |
| AKS hardening checklist (16 controls) | [v2 S.15.3.2] | Growth | Deferred with AKS. |
| Namespace isolation strategy | [v2 S.15.3.3] | Growth | Deferred with AKS. |

**Startup Implementation:** Use simpler compute options: Vercel for frontend, App Service or Container Apps for backend, managed database services. AKS deployment when workload complexity or compliance requirements justify it. No Kubernetes overhead at Startup.

**Growth Trigger:** Workload complexity, GPU requirements for AI inference, or FedRAMP boundary requirements trigger AKS adoption.

### 15.4 AI Platform Architecture [v2 S.15.4]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Azure OpenAI Service (data-sovereign deployment) | [v2 S.15.4.1] | Startup (simplified) | Use Azure OpenAI or direct Claude API as needed. Data sovereignty through provider configuration. |
| API Management as AI Gateway | [v2 S.15.4.2] | Growth | AI Gateway deferred. Direct API access at Startup. |
| Azure AI Search for RAG patterns | [v2 S.15.4.3] | Growth | Deferred until product features require RAG. |
| Azure ML for model lifecycle | [v2 S.15.4.4] | Growth | No custom ML models at Startup. Deferred. |
| Medallion data pipeline architecture | [v2 S.15.4.5] | Growth | Formal data pipeline deferred. Basic data management at Startup. |

**Startup Implementation:** Direct API access to Claude and Azure OpenAI services. Data processing in EU region. No AI Gateway, RAG infrastructure, ML pipeline, or formal data architecture. AI platform complexity grows with product AI features.

**Growth Trigger:** Product AI features require formal AI platform infrastructure (RAG, model serving, data pipelines).

### 15.5 Development Toolchain [v2 S.15.5]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Full v2 toolchain (source control, CI/CD, artifact registry, IaC, GitOps, feature flags, secrets, monitoring, SIEM, SAST, SCA, SBOM, container security, policy engine, GRC, AI/ML, API gateway, network security, edge security, DDoS, admin access, backup, DR, container orchestration, database, search, collaboration) | [v2 S.15.5] | Startup (simplified) | Adopt core toolchain from day one: Git (GitHub/Azure DevOps), CI/CD (GitHub Actions/Azure Pipelines), secrets (Azure Key Vault), monitoring (Application Insights), SAST (SonarQube/Semgrep), SCA (Trivy), SIEM (Sentinel basic), collaboration (Linear + Teams). Defer advanced tooling. |

**Startup Implementation:** Core toolchain: GitHub for source control, GitHub Actions or Azure Pipelines for CI/CD, Azure Key Vault for secrets, Application Insights for monitoring, SonarQube/Semgrep for SAST, Trivy for SCA/container scanning, Sentinel for security events, Linear for work management, Teams for communication. NorthGRC for GRC. Claude Code for AI-assisted development. Defer: formal artifact signing, GitOps (Flux CD), advanced SIEM playbooks, IDP, AI platform tooling.

**Growth Trigger:** Production workload complexity requires the full v2 toolchain.

### 15.6 Infrastructure as Code [v2 S.15.6]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Terraform as primary IaC | [v2 S.15.6.1] | Startup (simplified) | Terraform basics for infrastructure provisioning. Apply from day one for reproducibility. |
| Workspace structure (modules, platform, landing-zones, environments) | [v2 S.15.6.2] | Growth | Full workspace structure deferred. Simplified structure at Startup. |
| State management (remote state, isolation, sovereignty, protection) | [v2 S.15.6.3] | Startup (simplified) | Remote state in Azure Storage. Basic state isolation per environment. |
| IaC CI/CD pipeline (validate, fmt, checkov, tfsec, plan, apply) | [v2 S.15.6.4] | Startup (simplified) | terraform validate + plan in CI. Full security scanning (checkov, tfsec) at Growth. |
| GitOps with Flux CD | [v2 S.15.6.5] | Growth | Full GitOps deferred. Manual or CI/CD-driven deployment at Startup. |

**Startup Implementation:** Terraform for infrastructure provisioning. Remote state in Azure Storage. Basic CI pipeline (validate, plan, manual apply). Simplified module structure. No formal GitOps, IaC security scanning, or multi-environment workspace hierarchy.

**Growth Trigger:** Infrastructure complexity requires formal IaC governance and GitOps reconciliation.

### 15.7 Azure Region Strategy [v2 S.15.7]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Region assignments (EU primary, EU DR, US Gov) | [v2 S.15.7.1] | Startup (simplified) | Azure West Europe (Netherlands) as primary. Germany West Central as awareness for DR. US Gov deferred. |
| Data residency enforcement (Azure Policy, storage replication, database geo-restriction, AI data boundaries) | [v2 S.15.7.2] | Startup (simplified) | Basic data residency through region selection. Policy enforcement at Growth. |

**Startup Implementation:** Azure West Europe as primary region. Data residency ensured through region selection (no formal Azure Policy enforcement). DR awareness: Germany West Central as secondary (not actively deployed at Startup). US Gov regions deferred with FedRAMP.

**Growth Trigger:** Multi-region deployment or regulatory requirement for formal data residency enforcement.

### 15.8 Cost Optimization [v2 S.15.8]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Reserved instances and savings plans | [v2 S.15.8.1] | Startup (simplified) | Apply when usage patterns are clear (3+ months of consistent usage). |
| Dev/test optimization (auto-shutdown, spot VMs, burstable SKUs, ephemeral environments) | [v2 S.15.8.2] | Startup | Apply immediately. High savings, low effort. |
| Storage lifecycle policies | [v2 S.15.8.3] | Startup (simplified) | Basic hot/cool tiering. Full lifecycle policies at Growth. |
| AI cost optimization (model selection, prompt caching, semantic caching, batch API, PTU sizing, token optimization) | [v2 S.15.8.4] | Startup (simplified) | Route low-complexity tasks to cheaper models. Basic token optimization. Full AI FinOps at Growth. |
| FinOps governance framework (tagging, budgets, anomaly detection, reviews) | [v2 S.15.8.5] | Startup (simplified) | Resource tagging + monthly cost review. Budget alerts. Full FinOps governance at Growth. |

**Startup Implementation:** Cost discipline from day one: resource tagging, budget alerts, dev/test auto-shutdown, burstable SKUs for non-production. Route AI tasks to appropriate model tier (GPT-4o-mini for simple tasks). Monthly cost review in Strategic Governance meeting. Reserved instances after 3 months of stable usage patterns.

**Growth Trigger:** Cloud spend exceeds budget threshold or FinOps optimization potential justifies formal governance.

---

## 16. Operations, Reliability, and Incident Management [v2 S.16]

### 16.1 SLO Framework [v2 S.16.1]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Service tier model (Tier 1 Critical, Tier 1-AI, Tier 2 Important, Tier 3 Standard) | [v2 S.16.1.1] | Startup (simplified) | Basic service tiers. Informal availability targets (not formal SLOs). |
| AI-specific SLIs (inference latency, hallucination rate, factual accuracy, throughput, model freshness, output quality) | [v2 S.16.1.2] | Growth | AI-specific SLIs deferred. Basic accuracy tracking at Startup. |
| Error budget policy (enforcement rules, deployment impact) | [v2 S.16.1.3] | Growth | Formal error budget policy deferred. Manual deployment freeze at Startup. |
| Burn-rate alerting (multi-window analysis) | [v2 S.16.1.4] | Growth | Automated burn-rate alerting deferred. |
| SLO-to-deployment circuit breaker | [v2 S.16.1.5] | Growth | Automated circuit breaker deferred. |

**Startup Implementation:** Define basic service tiers (Critical, Important, Standard) with informal availability targets. Track basic uptime. No formal SLOs, error budgets, burn-rate alerting, or automated circuit breaker. Manual deployment freeze if service instability detected.

**Growth Trigger:** Paying customers require formal SLO commitments; error budget enforcement needed for deployment governance.

### 16.2 Observability Stack [v2 S.16.2]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Four signals plus AI telemetry (metrics, logs, traces, AI telemetry, security events) | [v2 S.16.2.1] | Startup (simplified) | Metrics + logs + basic dashboards. Full stack at Growth. |
| Structured logging standard (mandatory JSON fields) | [v2 S.16.2.2] | Startup (simplified) | Adopt structured JSON logging. Simplified mandatory fields. |
| AI telemetry details (token tracing, prompt logging, performance dashboards, RAG telemetry, cost attribution) | [v2 S.16.2.3] | Growth | AI telemetry deferred. Basic token usage tracking via provider dashboards. |
| Observability-as-code (dashboards, alerts, SLOs in Git) | [v2 S.16.2.4] | Growth | Formal observability-as-code deferred. Manual dashboard creation at Startup. |

**Startup Implementation:** Metrics and logs via Application Insights / Azure Monitor. Structured JSON logging with basic fields (timestamp, service, severity, message). Basic dashboards for key services. No formal traces, AI telemetry, or observability-as-code.

**Growth Trigger:** Service count exceeds 5 or debugging requires distributed tracing.

### 16.3 Incident Management [v2 S.16.3]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| ICS-Lite (IC, CL, TL roles) | [v2 S.16.3.1] | Startup (simplified) | CTO as IC for all incidents. Simplified role assignment. |
| Severity classification (SEV1-SEV4 with AI-specific incident types) | [v2 S.16.3.2] | Startup | All severity levels apply. AI-specific incidents classified using same matrix. |
| On-call design (rotation, timezone, escalation) | [v2 S.16.3.3] | Startup (simplified) | CTO + engineer on-call. No formal rotation. |
| Escalation matrix (by severity and role) | [v2 S.16.3.4] | Startup (simplified) | Simplified: CTO is primary escalation for all severities. CEO for Critical. |
| Blameless postmortem process | [v2 S.16.3.5] | Startup | Postmortem for all SEV1/SEV2 incidents. Blameless culture from day one. |

**Startup Implementation:** CTO as primary incident commander. Severity classification (SEV1-SEV4) with AI-specific types (hallucination, drift, prompt injection, bias, data poisoning). CTO + engineer on-call (informal). Escalation: CTO handles all; CEO for Critical incidents. Blameless postmortem mandatory for SEV1/SEV2 within 3 business days.

**Growth Trigger:** Incident frequency or team size requires formal on-call rotation and dedicated IC role.

### 16.4 NIS2 Incident Reporting [v2 S.16.4]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Detection and classification (T+0h) -- Sentinel analytics, NIS2-reportable tagging | [v2 S.16.4.1] | Startup (simplified) | Manual classification. Sentinel basic analytics at Growth. |
| Early warning (T+24h) -- template auto-population, legal review, CISO approval, submission | [v2 S.16.4.2] | Startup | Mandatory timeline. Pre-built templates (BSI German, NCSC-NL Dutch). Manual population and submission. Legal review within 2 hours. |
| Detailed report (T+72h) -- IoCs, impact, remediation | [v2 S.16.4.3] | Startup | Mandatory timeline. Manual report assembly. Legal and CISO review before submission. |
| Final report (T+1 month) -- root cause, remediation, lessons learned | [v2 S.16.4.4] | Startup | Mandatory timeline. Derived from blameless postmortem. |
| US coordination (FedRAMP/CISA) | [v2 S.16.4.5] | Enterprise | Deferred with FedRAMP. |

**Startup Implementation:** NIS2 reporting timelines are legally mandatory and apply from day one. Pre-built templates for BSI (German) and NCSC-NL (Dutch). Manual process: classify incident, populate template, legal review (2h SLA), CISO approval (1h SLA), submit via portal. Track deadlines in incident management system. No automated report generation at Startup.

**Growth Trigger:** Incident frequency requires automated report generation and Sentinel playbook integration.

### 16.5 FedRAMP ConMon [v2 S.16.5]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Monthly ConMon deliverables | [v2 S.16.5.1] | Enterprise | Deferred with FedRAMP. |
| Vulnerability detection and response (VDR) | [v2 S.16.5.2] | Enterprise | Deferred. |
| Annual activities (pentest, 3PAO, SSP update) | [v2 S.16.5.3] | Enterprise | Deferred. |
| Significant change process | [v2 S.16.5.4] | Enterprise | Deferred. |

**Startup Implementation:** None. FedRAMP ConMon deferred entirely.

**Growth Trigger:** FedRAMP authorization pursuit activates ConMon requirements.

### 16.6 Chaos Engineering [v2 S.16.6]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Principles (5 principles) | [v2 S.16.6.1] | Growth | Formal chaos engineering deferred. |
| Experiment catalog (infrastructure, application, AI-specific, security) | [v2 S.16.6.2] | Growth | Deferred. |
| Game days (quarterly, mandatory for Tier 1) | [v2 S.16.6.3] | Growth | Deferred. |

**Startup Implementation:** No formal chaos engineering. Basic manual failure testing acceptable (e.g., manually testing rollback procedures). Quarterly game days at Growth.

**Growth Trigger:** Production services with SLO commitments require confidence in failure resilience.

### 16.7 Disaster Recovery [v2 S.16.7]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| RPO/RTO targets by service tier | [v2 S.16.7.1] | Startup (simplified) | Basic RPO/RTO targets. Tier 1: RPO 1h/RTO 4h. Tier 2: RPO 4h/RTO 8h. Tier 3: RPO 24h/RTO 24h. |
| Multi-region failover architecture | [v2 S.16.7.2] | Growth | Multi-region failover deferred. Single region with backup at Startup. |
| DR testing cadence (component, region, backup, tabletop) | [v2 S.16.7.3] | Startup (simplified) | Quarterly backup restoration test. Monthly tabletop exercise. Full region failover at Growth. |
| Runbook architecture (standard template, 6 sections) | [v2 S.16.7.4] | Startup (simplified) | Basic runbooks for critical services. Formal runbook standard at Growth. |

**Startup Implementation:** Basic RPO/RTO targets defined per service tier. Database backups configured with Azure managed backup. Quarterly backup restoration test. Monthly tabletop DR exercise. Basic runbooks for critical services. No multi-region failover or automated DR.

**Growth Trigger:** Customer SLAs require guaranteed RPO/RTO; multi-region deployment enables automated failover.

### 16.8 Toil Measurement [v2 S.16.8]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Toil definition and budget (<50% of SRE time) | [v2 S.16.8.1-2] | Growth | Formal toil tracking deferred. |
| Toil categories and tracking (deployment, incident, compliance, on-call, AI operations) | [v2 S.16.8.3] | Growth | Deferred. |
| Toil elimination process (identify, quantify, prioritize, automate, validate) | [v2 S.16.8.4] | Growth | Deferred. |

**Startup Implementation:** Address toil informally during retrospectives. Automate repetitive tasks as encountered. No formal toil budget, tracking, or elimination program.

**Growth Trigger:** Dedicated SRE role hired; operational burden justifies formal toil management.

### 16.9 Operational Readiness Reviews [v2 S.16.9]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| ORR purpose and checklist (14 requirements) | [v2 S.16.9.1-2] | Growth | Formal ORR deferred. Basic deployment checklist at Startup. |
| Progressive adoption (Tier 3 self-service, Tier 2 meeting, Tier 1 full ORR) | [v2 S.16.9.3] | Growth | Deferred. |
| Ongoing readiness (annual, post-incident, tier change, major change) | [v2 S.16.9.4] | Growth | Deferred. |

**Startup Implementation:** Basic deployment checklist covering: monitoring configured, rollback tested, runbook exists, on-call aware. No formal ORR meeting or structured readiness review.

**Growth Trigger:** Service count exceeds 5 or first Tier 1 service deployment requires formal readiness assessment.

### 16.10 Compliance Mapping [v2 S.16.10]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Operations sub-section compliance mapping (ISO 27001, ISO 42001, NIS2, FedRAMP, SOC 2, TISAX) | [v2 S.16.10] | Startup | Compliance mapping for operational controls against ISO 27001, ISO 42001, and NIS2. Defer FedRAMP, SOC 2 specific mapping. |

**Startup Implementation:** Map operational controls to ISO 27001, ISO 42001, and NIS2 requirements. Track control effectiveness in NorthGRC. Defer FedRAMP and SOC 2 operational compliance mapping.

**Growth Trigger:** Pursuit of SOC 2 or FedRAMP requiring expanded operational compliance mapping.

---

## 17. Metrics and Continuous Improvement [v2 S.17]

### 17.1 DORA Elite+ Metrics [v2 S.17.1]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Deployment frequency (continuous, every merged PR) | [v2 S.17.1] | Startup (simplified) | Track basic deployment frequency. Elite+ targets (continuous) aspirational. |
| Lead time for changes (<4 hours commit to production) | [v2 S.17.1] | Startup (simplified) | Track lead time. <4h target aspirational. |
| Change failure rate (<2%) | [v2 S.17.1] | Startup (simplified) | Track rollback/hotfix ratio. <2% target aspirational. |
| Time to restore service (Tier 1: <30 min, Tier 2: <2h) | [v2 S.17.1] | Startup (simplified) | Track MTTR. Targets aspirational. |
| Flow efficiency (>50%) | [v2 S.17.1] | Growth | Formal flow efficiency tracking deferred. |
| Strategic traceability (100%) | [v2 S.17.1] | Growth | Full strategic trace deferred. Epic-level tracing at Startup. |

**Startup Implementation:** Track basic DORA metrics via CI/CD pipeline telemetry: deployment frequency, lead time, change failure rate, MTTR. Establish baseline measurements. Elite+ targets are aspirational; do not enforce thresholds at Startup. Review in Monthly Strategic meeting.

**Growth Trigger:** 3 months of deployment history enables meaningful DORA metric enforcement.

### 17.2 AI Governance Metrics [v2 S.17.2]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| AI risk assessments completed (100% of AI features) | [v2 S.17.2] | Startup | Track for ISO 42001 certification. |
| AI impact assessments current (100% of High/Limited-Risk AI) | [v2 S.17.2] | Startup | Track for ISO 42001 certification. |
| Model drift incidents undetected (0 in production) | [v2 S.17.2] | Growth | Formal drift monitoring deferred. |
| AI-generated code human review rate (100%) | [v2 S.17.2] | Startup | Track via PR metadata. 100% target. |
| Mean time to AI incident resolution (<4 hours) | [v2 S.17.2] | Startup (simplified) | Track for incidents. Target aspirational. |
| AI transparency compliance (100% of AI features documented) | [v2 S.17.2] | Startup (simplified) | Track basic documentation coverage. |

**Startup Implementation:** Track: AI risk assessment completeness, AI impact assessment currency, AI-generated code review rate (target: 100%), basic AI incident resolution time. Basic AI governance KPIs for ISO 42001 management review. Full metric suite at Growth.

**Growth Trigger:** Production AI features require formal drift monitoring and transparency compliance tracking.

### 17.3 AI-Native Productivity Metrics [v2 S.17.3]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| AI code contribution rate, human override rate, intent contract automation, AI-assisted cycle time reduction, autonomous test coverage, AI teammate uptime | [v2 S.17.3] | Growth | Formal AI productivity measurement deferred. Track AI code contribution informally. |

**Startup Implementation:** Informally track AI code contribution rate via PR metadata. No formal productivity measurement program.

**Growth Trigger:** AI-native productivity claims require evidence; team needs data for trust level adjustments.

### 17.4 Compliance Metrics [v2 S.17.4]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Control effectiveness (>=95% operating effectively) | [v2 S.17.4] | Startup | Track for certification. Monitor in NorthGRC. |
| Audit finding closure rate (100% within 90 days) | [v2 S.17.4] | Startup | Track for certification. |
| Vulnerability SLA compliance (>=98%) | [v2 S.17.4] | Startup | Track vulnerability remediation against SLAs. |
| NIS2 reporting compliance (100% within deadlines) | [v2 S.17.4] | Startup | Legally mandatory. Track. |
| TISAX assessment maturity (>=Level 3) | [v2 S.17.4] | Startup | Track for TISAX maintenance. |
| SOC 2 exception rate | [v2 S.17.4] | Growth | Deferred. |
| FedRAMP ConMon compliance | [v2 S.17.4] | Enterprise | Deferred. |
| Cost of compliance | [v2 S.17.4] | Startup (simplified) | Basic cost awareness. Formal tracking at Growth. |

**Startup Implementation:** Track certification progress, audit findings closure, vulnerability SLA compliance, NIS2 reporting compliance, and TISAX maturity. Review in Monthly Strategic meeting. Defer SOC 2 and FedRAMP metrics.

**Growth Trigger:** Additional certifications expand compliance metric scope.

### 17.5 UX Metrics [v2 S.17.5]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Full UX metrics suite (time to value, feature adoption, defect rate, SUS, WCAG conformance, API reliability) | [v2 S.17.5] | Growth | Formal UX metrics deferred. |

**Startup Implementation:** None at Startup. Direct customer feedback serves as UX quality indicator.

**Growth Trigger:** First paying customers requiring quantitative UX quality evidence.

### 17.6 Risk Management KRIs [v2 S.17.6]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Risk assessment coverage (100% of high-impact decisions) | [v2 S.17.6] | Startup (simplified) | Track basic risk assessment coverage. |
| Risk treatment effectiveness (>90% reduce risk as planned) | [v2 S.17.6] | Startup (simplified) | Track at quarterly risk review. |
| Residual risk trend (stable or declining) | [v2 S.17.6] | Startup (simplified) | Review quarterly. |
| Risk prediction accuracy (>70% of materialized risks identified) | [v2 S.17.6] | Growth | Formal prediction accuracy deferred. |
| Time to risk treatment (<30 days for high-risk) | [v2 S.17.6] | Startup | Track treatment timelines. |
| Open critical/high risks | [v2 S.17.6] | Startup | Monitor. Zero critical, <5 high without active treatment. |

**Startup Implementation:** Basic KRIs: risk assessment coverage, treatment effectiveness, residual risk trend, open critical/high risks. Review in quarterly risk register review. Full KRI dashboard at Growth.

**Growth Trigger:** Risk register exceeds 50 entries requiring automated KRI monitoring.

### 17.7 Process Maturity Metrics [v2 S.17.7]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| ISO 33000 process capability assessment (8 process areas, 3 maturity targets by phase) | [v2 S.17.7] | Growth | Formal ISO 33000 process assessment deferred. |

**Startup Implementation:** No formal process maturity assessment. Implicit Level 1 (Performed) target for all processes.

**Growth Trigger:** ISO 33002 assessment becomes a certification requirement or management requests formal maturity measurement.

### 17.8 Leading Indicators [v2 S.17.8]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Technical debt ratio, dependency freshness, security posture score, backlog health, team cognitive load, pipeline reliability | [v2 S.17.8] | Growth | Formal leading indicators deferred. |

**Startup Implementation:** Informally monitor: dependency freshness (via SCA alerts), pipeline reliability (CI success rate), backlog health (in Linear). No formal leading indicator program.

**Growth Trigger:** Velocity decline or quality issues require data-driven root cause analysis.

### 17.9 Decision Triggers [v2 S.17.9]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Threshold-based decision triggers (target/warning/critical per metric) | [v2 S.17.9] | Startup (simplified) | Apply phase transition triggers from day one. Metric-specific triggers at Growth. |
| Automatic process change triggers (CFR >5%, lead time >24h, override rate abnormal, compliance cost overrun, risk coverage gap, adoption rate low) | [v2 S.17.9] | Growth | Automated triggers deferred. Manual escalation at Startup. |

**Startup Implementation:** Phase transition triggers apply from day one (per Section 4.5). Critical metric breaches (e.g., vulnerability SLA miss, NIS2 deadline miss) escalated manually to CTO/CEO. No automated process change triggers.

**Growth Trigger:** Metric volume requires automated threshold monitoring and escalation.

### 17.10 Continuous Improvement Cadence [v2 S.17.10]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Sprint retrospective (every 2 weeks, 30 min) | [v2 S.17.10] | Startup | Adopt from day one. Lightweight but regular. |
| Process improvement review (monthly in Leadership Sync) | [v2 S.17.10] | Startup | Monthly in Strategic Governance meeting. |
| SDLC document review (quarterly) | [v2 S.17.10] | Startup | Quarterly review of this companion document. |
| Metrics dashboard review (weekly in Leadership Sync) | [v2 S.17.10] | Startup (simplified) | Basic review in Weekly Technical meeting. |
| Management review ISO 42001 (quarterly) | [v2 S.17.10] | Startup | Quarterly combined ISMS/AIMS management review. |
| Security posture review (monthly) | [v2 S.17.10] | Startup | Monthly in Strategic Governance meeting. |
| Risk register review (monthly) | [v2 S.17.10] | Startup | Monthly in Strategic Governance meeting. |
| Process maturity assessment (annual) | [v2 S.17.10] | Growth | Formal assessment deferred. |
| Compliance cost review (quarterly) | [v2 S.17.10] | Startup (simplified) | Basic cost review quarterly. |

**Startup Implementation:** Sprint retrospective (bi-weekly, 30 min). Monthly: process improvement + security posture + risk register review in Strategic Governance meeting. Quarterly: SDLC document review + management review (ISMS/AIMS) + compliance cost review. No formal process maturity assessment.

**Growth Trigger:** PI cadence replaces sprint-only delivery; formal process assessment scheduled.

### 17.11 Metrics Implementation [v2 S.17.11]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Startup implementation (minimum viable metrics: DORA via CI/CD, strategic traceability via CI, AI contribution/override via PR, risk/compliance reviewed manually) | [v2 S.17.11] | Startup | Follow the minimum viable metrics approach defined in v2. |
| Growth implementation (expanded metrics) | [v2 S.17.11] | Growth | Deferred. |
| Enterprise implementation (full metrics suite) | [v2 S.17.11] | Enterprise | Deferred. |

**Startup Implementation:** Minimum viable metrics: DORA metrics via CI/CD pipeline telemetry (automated), AI-generated code review rate via PR metadata (automated), risk register and compliance status reviewed manually in governance meetings. Customer-facing metrics deferred until first paying customer.

**Growth Trigger:** GRC platform integration enables automated compliance evidence collection; expanded metrics justified by team size.

---

## 18. Entity-Specific Addenda [v2 S.18]

### 18.1 HH GmbH Addendum (Germany) [v2 S.18.1]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| NIS2UmsuCG-specific obligations (BSI registration, incident reporting, KRITIS determination) | [v2 S.18.1] | Startup | Legally mandatory for GmbH. BSI registration maintained. German-language incident reporting. |
| Management body liability (NIS2UmsuCG Sec. 38) | [v2 S.18.1] | Startup | Non-negotiable. Geschaeftsfuehrer personally liable. Annual training + signed acknowledgment. |
| German language requirements (IS policy, incident reports, employee guidelines in German) | [v2 S.18.1] | Startup | BSI communications in German. Internal training materials in German for Germany-based employees. |
| Works Council (Betriebsrat) consultation (BetrVG Sec. 87/90 for AI tool deployments) | [v2 S.18.1] | Startup | Consultation required before AI tool deployment affecting employees. Initiated before deployment. |
| Data residency (regulatory data in Azure Germany West Central) | [v2 S.18.1] | Startup | German regulatory data stored in EU region. Specific Germany West Central for regulatory submissions. |
| BSI C5 reference for Azure services | [v2 S.18.1] | Startup | Azure BSI C5 attestation as compensating evidence for cloud infrastructure controls. |

**Startup Implementation:** Full NIS2UmsuCG compliance: BSI registration, German-language incident reporting (Sec. 32), management liability acknowledgment (Sec. 38), KRITIS determination documented. Betriebsrat consultation initiated before any AI tool deployment affecting employees. German-language IS policy and training materials. BSI C5 attestation referenced for cloud controls.

**Growth Trigger:** KRITIS classification triggers additional obligations under BSI-KritisV.

### 18.2 HH B.V. Addendum (Netherlands) [v2 S.18.2]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Dutch NIS2 transposition obligations (Wbni amendments, NCSC-NL registration, incident reporting) | [v2 S.18.2] | Startup | Legally mandatory for B.V. NCSC-NL registration maintained. |
| Autoriteit Persoonsgegevens (AP) requirements (GDPR breach notification, dual-notification assessment, DPO registration) | [v2 S.18.2] | Startup | GDPR and NIS2 are separate obligations with distinct triggers and procedures. Dual-notification checklist in incident response. |
| Azure West Europe as primary region | [v2 S.18.2] | Startup | B.V. data processing in Azure West Europe (Netherlands). |
| Dutch language obligations (AP communications in Dutch, NCSC-NL formal notifications in Dutch, privacy notices in Dutch) | [v2 S.18.2] | Startup | Dutch language for regulatory communications. English for technical reports. |
| NCSC-NL sector-specific advisories monitoring | [v2 S.18.2] | Startup | Quarterly advisory review process. |

**Startup Implementation:** Full Dutch NIS2 compliance: NCSC-NL registration, incident reporting (technical in English, formal in Dutch), dual-notification assessment (NIS2 + GDPR triggers). AP requirements: DPO registered, GDPR breach notifications in Dutch. Azure West Europe as primary. Quarterly NCSC-NL advisory review.

**Growth Trigger:** Dutch regulatory landscape changes requiring updated compliance procedures.

### 18.3 HH Inc. Addendum (United States) [v2 S.18.3]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| FedRAMP 20x authorization strategy (security categorization, boundary, AI treatment, NIST 800-53, process, 3PAO, ConMon) | [v2 S.18.3.1] | Enterprise | Deferred until US federal customer pipeline active. Advisory review only at Startup. |
| OSCAL-as-Code pipeline (artifact inventory, source control, CI/CD integration, tooling) | [v2 S.18.3.2] | Enterprise | Deferred with FedRAMP. |
| SOC 2 Type II (TSC scope, CC1-CC9 mapping, evidence automation, annual audit) | [v2 S.18.3.3] | Growth | Deferred until US SaaS customer demand. |
| CCPA/CPRA compliance (consumer rights, ADMT, privacy risk assessments, service provider obligations) | [v2 S.18.3.4] | Growth | Deferred until California customer pipeline active. |
| Azure Government deployment (region strategy, separate Entra ID, network isolation, FedRAMP services, FIPS 140-2 L3 HSM) | [v2 S.18.3.5] | Enterprise | Deferred with FedRAMP. |

**Startup Implementation:** Maintain basic US entity structure. Keep awareness of FedRAMP, SOC 2, and CCPA/CPRA requirements. No active compliance work for US-specific frameworks at Startup. Advisory review of FedRAMP 20x process for future planning.

**Growth Trigger:** First US SaaS customer requiring SOC 2; first US federal prospect requiring FedRAMP; California customer pipeline activating CCPA/CPRA.

### 18.4 Cross-Entity Coordination [v2 S.18.4]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Incident escalation matrix (by severity, detection entity, cross-entity triggers, follow-the-sun handoff, regulatory notification routing) | [v2 S.18.4.1] | Startup | Cross-entity incident escalation applies from day one. All 3 entities in scope. |
| Shared control ownership RACI (93 ISO 27001 controls across 3 entities) | [v2 S.18.4.2] | Startup | Required for multi-site certification. RACI matrix maintained as controlled document. |
| Inter-entity data flow governance (documented, classified, technically enforced, controller/processor determinations) | [v2 S.18.4.3] | Startup | All cross-entity data flows documented with legal basis, classification, and technical controls. |
| Jurisdictional conflict resolution (identification, legal assessment, resolution hierarchy, lawful access, register) | [v2 S.18.4.4] | Startup | Resolution process applies from day one. Stricter standard principle. |
| Single ISMS/AIMS spanning all entities (central functions, local functions, entity-specific SoAs, audit coordination, cost allocation) | [v2 S.18.4.5] | Startup | Required for integrated ISO 27001 + ISO 42001 multi-site certification. |

**Startup Implementation:** Full cross-entity coordination from day one: incident escalation matrix with regulatory notification routing (BSI for GmbH, NCSC-NL for B.V.), shared RACI for 93 Annex A controls, documented inter-entity data flows with legal basis, jurisdictional conflict resolution process, and single ISMS/AIMS spanning all 3 entities per IAF MD 1.

**Growth Trigger:** Additional entity or significant scope change triggers RACI and data flow governance update.

---

## Appendices

### Appendix A: Glossary [v2 Appendix A]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Full glossary (100+ terms) | [v2 App.A] | Startup | Reference document. Always applicable. Ensures consistent terminology across all artifacts. |

**Startup Implementation:** Reference the SDLC-v2 glossary for all terminology. Ensure all agents and humans use consistent terms per ISO 22989 (AI concepts and terminology) and the SDLC-v2 glossary.

### Appendix B: Normative References [v2 Appendix B]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| ISO/IEC standards (41 standards) | [v2 App.B.1] | Startup | Reference catalog. Focus on 8-9 standards at Startup per Section 1.4. |
| Industry frameworks (23 references) | [v2 App.B.2] | Startup | Reference catalog. |
| Regulations and directives (10 references) | [v2 App.B.3] | Startup | Reference catalog. Track applicable regulations. |
| Accessibility standards (2 references) | [v2 App.B.4] | Startup | WCAG 2.2 and EN 301 549 applicable. |
| Other references (6 references) | [v2 App.B.5] | Startup | Reference catalog. |

**Startup Implementation:** Reference the full normative references list. Actively track the standards relevant at Startup: ISO 27001, ISO 42001, ISO 31000, ISO 23894, ISO 22989, ISO 42005, ISO 12792, ISO 5338 (conceptual), NIS2, EU AI Act, TISAX ISA 6.

### Appendix C: Document History [v2 Appendix C]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Document version history | [v2 App.C] | Startup | Maintain document history for this companion document. |

**Startup Implementation:** This companion document (HH-SDLC-Startup-v1.0) tracks its own version history. Changes reviewed quarterly.

### Appendix D: Approval Signatures [v2 Appendix D]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| Approval signatures (CTO, CISO, Head of Engineering, DPO, Quality Manager) | [v2 App.D] | Startup | Required for formal document approval. CEO signs as overall authority; CTO and CISO co-sign. |

**Startup Implementation:** Formal approval required before this companion document becomes operative. Signatories at Startup: CEO (as overall authority and Geschaeftsfuehrer), CTO, CISO.

---

## Summary Statistics

### Entry Count by Section

| Section | Total Entries | Startup | Startup (simplified) | Growth | Enterprise |
|---------|--------------|---------|---------------------|--------|------------|
| 1. Purpose and Scope | 28 | 15 | 5 | 7 | 1 |
| 2. Strategic Foundation | 14 | 1 | 6 | 7 | 0 |
| 3. Governing Principles | 14 | 9 | 3 | 2 | 0 |
| 4. Progressive Adoption | 12 | 7 | 0 | 5 | 0 |
| 5. Risk Management | 18 | 7 | 7 | 4 | 0 |
| 6. Unified Control Library | 20 | 6 | 6 | 8 | 0 |
| 7. Organizational Model | 16 | 8 | 0 | 6 | 2 |
| 8. Intent-Execution Architecture | 18 | 2 | 5 | 11 | 0 |
| 9. SDLC Phases | 52 | 13 | 30 | 9 | 0 |
| 10. AI Integration Policy | 22 | 8 | 5 | 9 | 0 |
| 11. AIMS | 30 | 14 | 9 | 7 | 0 |
| 12. Security and Privacy | 32 | 18 | 7 | 5 | 2 |
| 13. Quality Gates and Governance | 16 | 4 | 4 | 8 | 0 |
| 14. UX/DX and Accessibility | 22 | 2 | 7 | 13 | 0 |
| 15. Toolchain and Platform | 16 | 2 | 9 | 5 | 0 |
| 16. Operations and Reliability | 24 | 4 | 8 | 8 | 4 |
| 17. Metrics and Improvement | 22 | 6 | 10 | 6 | 0 |
| 18. Entity-Specific Addenda | 16 | 10 | 0 | 3 | 3 |
| Appendices | 6 | 6 | 0 | 0 | 0 |
| **TOTALS** | **398** | **142** | **121** | **123** | **12** |

### Phase Distribution Summary

| Phase | Count | Percentage |
|-------|-------|------------|
| Startup (full) | 142 | 36% |
| Startup (simplified) | 121 | 30% |
| Growth | 123 | 31% |
| Enterprise | 12 | 3% |
| **Total** | **398** | **100%** |

### Startup SDLC Scope Summary

**66% of SDLC-v2 is applicable at Startup** (263 of 398 entries are classified as Startup or Startup simplified). This reflects the compliance-intensive nature of the HH Group strategy: ISO 27001, ISO 42001, NIS2, EU AI Act, and TISAX require substantial governance from day one.

**Key Focus Areas at Startup:**
1. **Certification readiness** (ISO 27001 + ISO 42001) -- the 12-week timeline drives the majority of Startup-phase controls
2. **NIS2 compliance** -- legally mandatory for GmbH and B.V.; incident reporting timelines are non-negotiable
3. **AI agent governance** -- 7 agents as first-class team members require registry, classification, trust levels, and human oversight
4. **TISAX maintenance** -- existing certification must be maintained; prototype protection immediately relevant
5. **EU AI Act classification** -- all AI systems classified per risk taxonomy; prohibited practices enforced

**What the Team Should Expect to Grow Into:**
- **Growth (31% of entries):** Formal AI testing suite, AI Gateway, MLOps pipeline, full observability stack, error budgets, chaos engineering, design system, UX metrics, SOC 2, formal process assessment
- **Enterprise (3% of entries):** FedRAMP, OSCAL pipeline, dual ART structure, full SAFe governance, formal AI reference architecture per ISO 5392

**Simplification Principle:** 30% of entries are "Startup (simplified)" -- meaning the control exists but at reduced formality. The team does the work; it just does not produce the full ceremony or documentation that Growth/Enterprise requires. When audit findings or scaling pressures indicate that simplified implementation is insufficient, the team escalates to the full Growth-phase version.
