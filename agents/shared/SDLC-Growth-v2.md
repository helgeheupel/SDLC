# Helge Heupel Group — Software Development Life Cycle (SDLC) Version 2

**Helge Heupel Group**

| Field | Value |
|---|---|
| Document ID | HH-SDLC-Growth-v2.0 |
| Version | 2.0 |
| Status | Draft |
| Author | SDLC Team (AI-Assisted) |
| Approver | TBD |
| Effective Date | TBD |
| Review Cycle | Annual |
| Classification | Confidential |

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Strategic Foundation: Strategy as Code](#2-strategic-foundation-strategy-as-code)
3. [Governing Principles](#3-governing-principles)
4. [Progressive Adoption Model](#4-progressive-adoption-model)
5. [Enterprise Risk Management Framework](#5-enterprise-risk-management-framework)
6. [Unified Control Library and Compliance Matrix](#6-unified-control-library-and-compliance-matrix)
7. [Organizational Model: SAFe 6.0 Adapted](#7-organizational-model-safe-60-adapted)
8. [Intent-Execution Architecture v2](#8-intent-execution-architecture-v2)
9. [SDLC Phases](#9-sdlc-phases)
10. [AI Integration Policy](#10-ai-integration-policy)
11. [AI Management System — AIMS](#11-ai-management-system--aims)
12. [Security and Privacy by Design](#12-security-and-privacy-by-design)
13. [Quality Gates and Governance](#13-quality-gates-and-governance)
14. [UX/DX and Accessibility](#14-uxdx-and-accessibility)
15. [Toolchain and Platform: Azure-Native](#15-toolchain-and-platform-azure-native)
16. [Operations, Reliability, and Incident Management](#16-operations-reliability-and-incident-management)
17. [Metrics and Continuous Improvement](#17-metrics-and-continuous-improvement)
18. [Entity-Specific Addenda](#18-entity-specific-addenda)

**Appendices**

- [A. Glossary](#appendix-a-glossary)
- [B. Normative References](#appendix-b-normative-references)
- [C. Document History](#appendix-c-document-history)
- [D. Approval Signatures](#appendix-d-approval-signatures)

---

## 1. Purpose and Scope

### 1.1 Strategic Context

The Helge Heupel Group operates in the enterprise software market for value engineering and enterprise architecture management. The competitive landscape is dominated by incumbents (Microsoft, SAP, Planview, LeanIX) with large installed bases but legacy architectures. The Group's theory of competitive advantage is that an AI-native architecture, built from first principles with compliance embedded from day one, can outperform legacy systems on decision quality, time-to-insight, and total cost of ownership – provided the Group executes faster than incumbents can modernize.

This SDLC provides the governing framework for that execution. It is the machine-readable, progressively formalized system that governs how strategy becomes software, how software becomes intelligence, and how intelligence compounds into sustainable competitive advantage.

### 1.2 Purpose

This document defines the authoritative Software Development Lifecycle for the Helge Heupel Group. It operationalizes Strategy as Code – the discipline of encoding strategy formulation, execution, and feedback as verifiable, executable, and auditable artifacts – into every phase of product development.

The SDLC is designed to achieve three compounding objectives, ranked by priority when they conflict:

1. **Regulatory Compliance and Security (non-negotiable).** A single process framework that satisfies ISO 42001 (including ISO 42005 impact assessment), ISO 27001, TISAX, SOC 2, NIS2, FedRAMP, and the EU AI Act simultaneously through a unified control library, eliminating duplicative controls.

2. **Compounding Data and Network Advantage (strategic moat).** Every development cycle feeds the Verity intelligence layer, strengthening network externalities, economies of scale, and system lock-in. The SDLC instruments this flywheel with concrete telemetry, feedback loops, and data capture requirements.

3. **AI-Native Productivity (enabler).** AI-augmented development at every phase – including AI teammates as first-class team members – governed by graduated trust boundaries, targeting DevOps Research and Assessment (DORA) Elite+ metrics: lead time for changes < 4 hours, deployment frequency continuous, change failure rate < 2%.

### 1.3 Scope

This SDLC governs all software artifacts produced by the Helge Heupel Group, including:

- Verity Value Engineering (VE) – the AI-native value engineering platform
- Verity Enterprise Architecture Management (EAM) – the enterprise architecture intelligence system
- Internal tooling, libraries, and shared services
- Client-facing integrations and APIs
- AI models, prompts, orchestration pipelines, and agent configurations
- AI teammate outputs, decisions, and lifecycle artifacts
- Strategy-as-Code artifacts (OKRs, investment theses, risk registers)
- Infrastructure-as-Code, Policy-as-Code, and Compliance-as-Code artifacts

The SDLC applies across all three entities (HH GmbH, HH B.V., HH Inc.) and scales progressively through three organizational phases (Startup, Growth, Enterprise) as defined in Section 4.

### 1.4 Normative References

| Standard / Framework | Version | Applicability |
|---|---|---|
| **Risk Management** | | |
| ISO 31000:2018 | 2018 | Risk management principles and framework – all entities |
| IEC 31010:2019 | 2019 | Risk assessment techniques – all entities |
| ISO/IEC 23894:2023 | 2023 | AI risk management guidance – all AI systems |
| **AI and Machine Learning** | | |
| ISO/IEC 42001:2023 | 2023 | AI Management System (AIMS) – all entities |
| ISO/IEC 42005:2025 | 2025 | AI system impact assessment – all AI features |
| ISO/IEC 22989:2022 | 2022 | AI concepts and terminology – all entities |
| ISO/IEC 5338:2023 | 2023 | AI system lifecycle processes – all AI systems |
| ISO/IEC 5339:2024 | 2024 | AI system lifecycle guidance – all AI systems |
| ISO/IEC 5392:2024 | 2024 | AI system reference architecture – all AI systems |
| ISO/IEC 12792:2024 | 2024 | AI transparency information for AI systems – all AI features |
| ISO/IEC 38507:2022 | 2022 | Governance implications of AI – all entities |
| ISO 34504:2024 | 2024 | Scenario-based testing methodology (adapted) – AI validation |
| **Information Security** | | |
| ISO/IEC 27001:2022 | 2022 | Information Security Management System – all entities |
| ISO/IEC 27002:2022 | 2022 | Information security controls – all entities |
| ISO/IEC 27005:2022 | 2022 | Information security risk management – all entities |
| ISO/IEC 27017:2015 | 2015 | Cloud security controls – all cloud services |
| ISO/IEC 27018:2019 | 2019 | PII protection in public clouds – all entities |
| ISO/IEC 27701:2019 | 2019 | Privacy information management – all entities |
| **Software and Systems Engineering** | | |
| ISO/IEC 12207:2017 | 2017 | Software lifecycle processes – all software |
| ISO/IEC 15288:2023 | 2023 | Systems lifecycle processes – all systems |
| ISO/IEC 25010:2023 | 2023 | Software quality model – all software |
| ISO/IEC 25019:2023 | 2023 | Quality-in-use model – all user-facing software |
| **Process Assessment** | | |
| ISO/IEC 33001:2015 | 2015 | Process assessment concepts – all entities |
| ISO/IEC 33002:2015 | 2015 | Requirements for process assessment – all entities |
| ISO/IEC 33004:2015 | 2015 | Requirements for process reference models – all entities |
| ISO/IEC 33020:2019 | 2019 | Process measurement framework – all entities |
| **Regulatory Frameworks** | | |
| VDA ISA 6 / TISAX | 2024 | Automotive supply chain security – GmbH, B.V. |
| SOC 2 Type II | Current | Trust Service Criteria – Inc., all SaaS offerings |
| NIS2 Directive (2022/2555) | 2024 | EU cybersecurity – GmbH, B.V. |
| FedRAMP 20x | 2025-2026 | US federal cloud authorization – Inc. |
| EU AI Act (2024/1689) | 2024 | AI risk classification – GmbH, B.V. |
| **Agile and Organizational** | | |
| SAFe 6.0 | 2023 | Scaled Agile operating model – all entities (Growth/Enterprise phases) |

---
## 2. Strategic Foundation: Strategy as Code

### 2.1 Strategy as Code – From Philosophy to Infrastructure

Strategy as Code is not a metaphor. It is infrastructure. It requires three concrete systems:

1. **Strategy Formulation System.** Machine-readable strategic artifacts versioned in source control, with defined schemas, validation rules, and review cadences.

2. **Strategy-Execution Pipeline.** Automated traceability enforcement that connects every work item to a strategic objective, validated at CI/CD time, with broken traces treated as build failures.

3. **Feedback Loop Architecture.** Production telemetry flowing into OKR dashboards with codified decision triggers that automatically initiate strategic reviews when thresholds are crossed.

### 2.2 Machine-Readable Strategic Artifacts

All strategic artifacts are stored in the monorepo under `/.strategy/` and conform to validated YAML schemas.

**`strategy.yaml` – Core Schema:**

```yaml
# /.strategy/strategy.yaml
schema_version: "2.0"
period: "2026-Q1"
last_reviewed: "2026-01-15"
next_review: "2026-04-15"

mission: "Enable enterprises to make better architecture and value engineering decisions through AI-native intelligence."

priority_hierarchy:
  1: "regulatory_compliance_and_security"
  2: "compounding_data_advantage"
  3: "ai_native_productivity"

okrs:
  - id: "OKR-2026-Q1-01"
    objective: "Achieve product-market fit for Verity VE in automotive value engineering"
    owner: "product-lead-ve"
    key_results:
      - id: "KR-01"
        metric: "paying_customers"
        target: 3
        current: 0
        measurement_method: "CRM pipeline stage = Closed Won"
        data_source: "crm.monday.deals"
      - id: "KR-02"
        metric: "monthly_active_users"
        target: 50
        current: 0
        measurement_method: "Distinct authenticated users per 30d rolling window"
        data_source: "telemetry.verity-ve.auth"
      - id: "KR-03"
        metric: "time_to_value_hours"
        target: 4
        current: null
        measurement_method: "Median time from account creation to first published analysis"
        data_source: "telemetry.verity-ve.onboarding"

investment_theses:
  - id: "IT-2026-01"
    hypothesis: "Automotive OEMs will pay for AI-assisted value engineering that reduces BOM cost analysis time by 70%"
    evidence_required:
      - "3 paying customers within 6 months"
      - "User retention > 60% at 90 days"
      - "Measurable BOM cost reduction in at least 1 customer engagement"
    exit_criteria:
      pivot_if: "0 paying customers after 9 months OR user retention < 30% at 90 days"
      persevere_if: "1+ paying customer AND positive NPS"
    risk_assessment: "IT-2026-01-RISK"  # links to risk register

value_streams:
  - id: "VS-VE"
    name: "Verity Value Engineering"
    art: "ART-VE"  # active in Growth/Enterprise phase
    products: ["verity-ve"]
  - id: "VS-EAM"
    name: "Verity Enterprise Architecture Management"
    art: "ART-EAM"  # active in Enterprise phase
    products: ["verity-eam"]
```

**`/.strategy/risk-register.yaml` – Risk Register Schema (versioned, per ISO 31000):**

```yaml
schema_version: "2.0"
last_reviewed: "2026-02-01"

risks:
  - id: "IT-2026-01-RISK"
    category: "strategic"
    description: "Automotive OEMs may not adopt AI value engineering due to data sensitivity concerns"
    likelihood: "medium"     # low | medium | high | very_high
    impact: "high"           # low | medium | high | critical
    risk_level: "high"       # calculated: likelihood x impact matrix
    owner: "product-lead-ve"
    treatment:
      strategy: "mitigate"   # accept | mitigate | transfer | avoid
      actions:
        - "Obtain TISAX certification before first customer pilot"
        - "Implement on-premises deployment option for BOM data"
      status: "in_progress"
    residual_risk: "medium"
    review_cadence: "monthly"
```

**Validation:** All `.strategy/*.yaml` files are validated by a JSON Schema check in the CI pipeline. Invalid strategy artifacts fail the build.

### 2.3 Automated WSJF Scoring Pipeline

Weighted Shortest Job First (WSJF) scoring is the primary prioritization mechanism. It is implemented as a calculated field in the work management system, not a manual exercise.

**Formula:**

```
WSJF = (User-Business Value + Time Criticality + Risk Reduction-Opportunity Enablement) / Job Size
```

**Scoring Scale:** Modified Fibonacci (1, 2, 3, 5, 8, 13, 21). All scores are relative, calibrated against reference stories reviewed at PI Planning.

| Component | Definition | Scoring Guidance |
|---|---|---|
| User-Business Value | Revenue impact, customer satisfaction, strategic alignment | 1 = nice-to-have; 13 = critical revenue driver; 21 = existential |
| Time Criticality | Cost of delay, market window, regulatory deadline | 1 = anytime; 13 = this quarter; 21 = this sprint or miss window |
| Risk Reduction / Opportunity Enablement | Compliance risk mitigated, technical risk reduced, platform capability unlocked | 1 = marginal; 13 = significant; 21 = blocks everything else |
| Job Size | Implementation effort including compliance overhead | 1 = trivial; 8 = full sprint; 21 = multi-sprint epic |

**Risk Adjustment (per IEC 31010):** Features with a linked risk assessment rated "high" or "critical" in the risk register receive a 1.5x multiplier on the Risk Reduction component, ensuring that high-risk items surface for early treatment rather than being deferred.

**Implementation:** WSJF scores are stored as fields on each Epic and Feature in the work management system. The scoring is recalculated at each bi-weekly refinement session. A CI check validates that all Features in the current PI have a WSJF score; unscored Features cannot enter a sprint.

### 2.4 Strategic Traceability Enforcement

Every work item (Epic, Feature, Story) contains a `strategic_trace` field that links to an OKR ID in `strategy.yaml`.

**Enforcement mechanism:**

```
PR opened → CI check: linked work item exists?
           → CI check: work item has strategic_trace field?
           → CI check: strategic_trace resolves to valid OKR ID in strategy.yaml?
           → All pass: PR eligible for review
           → Any fail: PR blocked with error message identifying the broken trace
```

**Exceptions:** Infrastructure maintenance, dependency updates, and security patches may use `strategic_trace: "OPERATIONAL"` -- a reserved ID that does not require OKR linkage but is tracked separately in metrics (Section 17).

### 2.5 Feedback Loop Architecture

The feedback loop closes the Strategy-as-Code circuit by routing production intelligence back to strategic decision-making.

```
                    ┌──────────────────────────────┐
                    │     STRATEGY ARTIFACTS       │
                    │   /.strategy/strategy.yaml   │
                    └──────────┬───────────────────┘
                               │ OKRs, theses,
                               │ risk register
                               ▼
                    ┌──────────────────────────────┐
                    │   EXECUTION LAYER            │
                    │   Work items, sprints,       │
                    │   deployments                │
                    └──────────┬───────────────────┘
                               │ Telemetry,
                               │ usage data,
                               │ incident data
                               ▼
                    ┌──────────────────────────────┐
                    │   TELEMETRY AGGREGATION      │
                    │   OKR dashboards, metrics,   │
                    │   risk KRIs                  │
                    └──────────┬───────────────────┘
                               │ Threshold
                               │ breaches
                               ▼
                    ┌──────────────────────────────┐
                    │   DECISION TRIGGERS          │
                    │   Automated alerts,          │
                    │   review initiations         │
                    └──────────┬───────────────────┘
                               │ Pivot/persevere
                               │ decisions
                               ▼
                    ┌──────────────────────────────┐
                    │   STRATEGY UPDATE            │
                    │   PR to strategy.yaml,       │
                    │   reviewed, merged           │
                    └──────────────────────────────┘
```

**Decision Triggers (codified as monitoring rules):**

| Trigger Condition | Action | Owner |
|---|---|---|
| Feature adoption rate < 10% after 30 days in production | Initiate pivot/persevere review for linked investment thesis | Product Owner |
| OKR key result < 25% of target at period midpoint | Escalate to Leadership Sync for resource reallocation decision | CTO |
| Risk register item remains "high" or "critical" for > 60 days without treatment progress | Escalate to Leadership Sync; block new feature work on affected value stream until treatment advances | Risk Owner |
| Customer-reported defect rate > 2x internal detection rate | Trigger testing strategy review and shift-left retrospective | QA Lead |
| Compliance cost per framework exceeds budget by > 20% | Trigger certification sequencing review | CTO |
| AI model performance degrades > 10% from baseline on any monitored metric | Trigger model retraining pipeline; notify AI governance | AI Lead |

**Cadence by Phase:**

| Signal | Startup | Growth | Enterprise |
|---|---|---|---|
| Feature telemetry review | Weekly (Leadership Sync) | Weekly (Product Owners) | Continuous (dashboards) |
| OKR progress review | Bi-weekly | Monthly | Per PI boundary |
| Risk register review | Monthly | Bi-weekly | Weekly |
| Strategy artifact update | As needed | Per PI boundary | Per PI boundary + quarterly strategic review |

### 2.6 Compounding Data Advantage – Implementation

The data flywheel is not automatic. It requires deliberate instrumentation at every SDLC phase:

| Flywheel Force | SDLC Instrumentation | Data Captured | Decision It Informs |
|---|---|---|---|
| Network Externalities | Usage telemetry per deployment | Feature adoption, integration density, cross-tenant usage patterns | Which features create the most cross-customer value |
| Economies of Scale | Component reuse tracking | Shared model usage, library reuse frequency, platform service adoption | Where to invest in platform vs. product-specific capabilities |
| System Lock-in | Integration depth metrics | API call volume, data format adoption, ecosystem extension count | Which integrations to prioritize for retention |

**Implementation requirement:** Every user-facing feature must include telemetry instrumentation as part of the Definition of Done (Section 9). Telemetry data flows to the OKR dashboards and feeds the decision triggers defined above. Features deployed without telemetry are flagged as non-compliant in the metrics dashboard.

---
## 3. Governing Principles

### 3.1 Core Principles

The following twelve principles govern all SDLC decisions. Each principle includes a measurable indicator to verify adherence.

| # | Principle | Description | Measurement |
|---|---|---|---|
| 1 | **AI-Augmented, Human-Governed** | AI accelerates every phase; humans retain authority over all consequential decisions. No AI output reaches production without deterministic verification. | % of AI-generated production code with completed human review (target: 100%) |
| 2 | **AI Teammates as First-Class Contributors** | AI agents fill defined team roles with explicit trust levels, autonomy boundaries, supervision requirements, and escalation paths. Their contributions are tracked, reviewed, and governed like human contributions. | % of AI teammate outputs reviewed per their defined review cadence (target: 100%) |
| 3 | **Compliance as Code** | Regulatory requirements are encoded as automated checks, policy gates, and audit trails – not as manual checklists or periodic reviews. | % of compliance controls enforced via automated checks (target: > 80%) |
| 4 | **Security by Design, Privacy by Default** | NIS2 Article 21 and ISO 27001 Annex A controls are embedded into architecture decisions, not bolted on after the fact. | % of features with completed threat model before development begins (target: 100%) |
| 5 | **Shift Left Everything** | Security, compliance, accessibility, performance, and observability testing move to the earliest feasible phase, prioritized by risk impact. | % of defects found before deployment gate (target: > 95%) |
| 6 | **Zero Trust Architecture** | No implicit trust between services, environments, or entities. Every request is authenticated, authorized, and encrypted. | Zero trust policy violations in production per month (target: 0) |
| 7 | **Trunk-Based Development with Feature Flags** | Short-lived branches (< 24h), continuous integration, and progressive rollout via feature management. | % of branches merged within 24 hours (target: > 95%) |
| 8 | **Everything as Code** | Infrastructure, policy, compliance controls, monitoring, documentation, strategy, and risk registers – all versioned, reviewed, and deployed through pipelines. | % of governance artifacts stored as code in source control (target: 100%) |
| 9 | **Radical Traceability** | Every production artifact is traceable to a strategic objective, through a feature, story, commit, build, test, and deployment record. | % of production deployments with complete strategic trace (target: 100%) |
| 10 | **Minimum Viable Governance** | Implement the simplest process that satisfies compliance requirements and mitigates documented risk. Every ceremony, board, gate, and artifact must justify its existence. Resist building governance infrastructure ahead of organizational need. | Governance overhead ratio: time in governance activities / total engineering time (target: < 15%) |
| 11 | **Risk-Driven Decision Making** | All significant SDLC decisions – prioritization, architecture, deployment, incident response – are informed by structured risk assessment proportionate to the decision's potential impact, per ISO 31000. | % of high/critical-impact decisions with completed risk assessment (target: 100%) |
| 12 | **Progressive Formalization** | The SDLC grows with the organization. Start with the minimum viable process for the current team size. Add governance only when triggered by defined scaling thresholds (Section 4). The SDLC itself is subject to continuous improvement. | Current phase governance requirements satisfied (target: 100%); next-phase requirements not prematurely adopted |

### 3.2 Principle Conflict Resolution

When principles conflict, resolve using this priority order:

1. **Safety and Security** (Principles 4, 6) – always prevail
2. **Compliance** (Principles 3, 9) – non-negotiable for market access
3. **Risk Management** (Principle 11) – informs all trade-offs
4. **Governance Simplicity** (Principles 10, 12) – prevent process bloat
5. **Productivity** (Principles 1, 2, 5, 7, 8) – the enabler, not the goal

---
## 4. Progressive Adoption Model

### 4.1 Overview

The SDLC is designed to scale with the organization. Premature governance is as dangerous as absent governance – it consumes capacity that should be directed at product-market fit and early customers. This section defines three organizational phases with explicit transition triggers, ensuring that governance grows in proportion to actual risk and organizational complexity.

```
  PHASE A: STARTUP           PHASE B: GROWTH            PHASE C: ENTERPRISE
  ┌─────────────────┐       ┌─────────────────┐        ┌─────────────────┐
  │ < 20 people     │       │ 20-80 people    │        │ 80+ people      │
  │ + AI teammates  │  ──►  │ + AI teammates  │  ──►   │ + AI teammates  │
  │                 │       │                 │        │                 │
  │ 1 team          │       │ 1 ART, 3-4 teams│        │ 2 ARTs, 6-10    │
  │ 1 product focus │       │ 2 products      │        │   teams         │
  │ Minimal         │       │ Expanded        │        │ Full SAFe 6.0   │
  │ governance      │       │ governance      │        │ governance      │
  └─────────────────┘       └─────────────────┘        └─────────────────┘
```

### 4.2 Phase A – Startup (< 20 people including AI teammates)

**Organizational Model:**
- Single cross-functional team (not an ART)
- Sprint-based delivery (2-week sprints)
- No PI Planning – replaced by monthly Strategy Sync

**Team Composition:**
- Founder/CTO: strategy, architecture, technical leadership
- Product Owner (per product focus): customer discovery, backlog prioritization
- 3-8 Engineers (full-stack, platform, AI)
- AI Teammates: AI Code Partner, AI Test Partner, AI Documentation Partner (see Section 7)
- Security/Compliance: fractional or outsourced advisor, engaged monthly

**Governance:**
- **Single governance forum: "Leadership Sync"** (60 minutes, weekly, rotating agenda):
  - Week 1: Portfolio review + strategic alignment
  - Week 2: Architecture + security posture review
  - Week 3: Compliance status + AI governance review
  - Week 4: Retrospective + process improvement
- No separate boards or committees
- All gate decisions made by CTO + Product Owner within the Leadership Sync

**Ceremonies:**

| Ceremony | Cadence | Duration | Participants |
|---|---|---|---|
| Sprint Planning | Bi-weekly | 1 hour | Full team |
| Daily Standup | Daily | 15 min | Full team |
| Sprint Review / Demo | Bi-weekly | 30 min | Full team + stakeholders |
| Sprint Retrospective | Bi-weekly | 30 min | Full team |
| Leadership Sync | Weekly | 60 min | CTO + PO + Tech Lead |
| Strategy Sync | Monthly | 2 hours | CTO + PO + advisors |

**Compliance Approach:**
- Implement controls from the Unified Control Library (Section 6) that satisfy ISO 27001 and ISO 42001 first – these are the foundational certifications
- Automate > 60% of controls via CI/CD pipeline from day one
- Defer TISAX, FedRAMP, and NIS2-specific controls until customer demand requires them
- Use the risk register (`risk-register.yaml`) to document deferral decisions with rationale
- Target: ISO 27001 + ISO 42001 certification readiness by end of Phase A

**Quality Gates:**
- G0 (Strategic Alignment): CTO + PO verbal approval, documented in work item
- G1 (Requirements Readiness): PO confirms Definition of Ready met
- G2 (Quality & Compliance): Automated pipeline gates only (SAST, SCA, tests, compliance checks); no manual gate for low/medium risk
- G3 (Release Readiness): CTO approves for high-risk changes; automated for low/medium risk
- G4 (Post-Release): Automated canary metrics; manual review only if SLO violated

### 4.3 Phase B – Growth (20-80 people including AI teammates)

**Organizational Model:**
- Single Agile Release Train (ART) with 3-4 cross-functional teams
- Shared platform team + product-specific feature teams
- PI Planning introduced (8-week development + 2-week Innovation and Planning (I&P))

**Team Composition (per team):**
- Product Owner
- Scrum Master / Team Coach
- 3-5 Engineers
- AI Teammates: AI Code Partner, AI Test Partner, AI Compliance Partner
- Security Champion (full-time role, embedded across teams)
- AI Ethics Champion (full-time role, embedded across teams)

**Governance:**
- **Two governance forums replace the single Leadership Sync:**
  - **Technical Governance** (bi-weekly, 60 min): architecture decisions, security posture, AI model governance, ADR reviews. Participants: CTO, Tech Leads, Security Champion, AI Ethics Champion.
  - **Portfolio Governance** (monthly, 90 min): strategic alignment, OKR progress, compliance posture, investment decisions. Participants: CTO, Product Owners, Compliance Lead.
- Change Advisory Board (CAB) activated for High/Critical risk production changes only

**Ceremonies (additions to Phase A):**

| Ceremony | Cadence | Duration | Participants |
|---|---|---|---|
| PI Planning | Per PI (10 weeks) | 2 days | Full ART |
| ART Sync | Weekly | 30 min | Scrum Masters + Release Train Engineer (RTE) |
| System Demo | Bi-weekly | 60 min | Full ART + stakeholders |
| Inspect & Adapt | Per PI | Half day | Full ART |
| Compliance Review Gate | Per PI | 60 min | Portfolio Governance forum |

**Compliance Approach:**
- Full Unified Control Library active
- TISAX assessment initiated if automotive customers acquired
- SOC 2 Type II audit initiated if US SaaS customers require it
- NIS2 compliance activated for GmbH and B.V. entities
- FedRAMP assessment initiated only when federal customer pipeline is active
- Automated compliance evidence collection via GRC platform
- Target: First external certifications obtained during Phase B

**Quality Gates:**
- All Phase A gates remain active
- G2 adds: Security Champion sign-off for security-sensitive changes
- G3 adds: CAB approval for High/Critical risk changes
- Gates operate as risk-tiered: Low/Medium risk auto-flow through automated checks; High/Critical require synchronous human approval

### 4.4 Phase C – Enterprise (80+ people including AI teammates)

**Organizational Model:**
- Dual Agile Release Train: ART Verity VE + ART Verity EAM
- 6-10 cross-functional teams total (3-5 per ART)
- Full SAFe 6.0 operating model with Lean Portfolio Management

**Governance:**
- All five governance bodies active:
  - AI Governance Board (monthly)
  - Change Advisory Board (weekly)
  - Security Review Board (bi-weekly)
  - Compliance Steering Committee (monthly)
  - Architecture Review Board (bi-weekly)
- Value Management Office (VMO) established
- Dedicated CISO function

**Compliance Approach:**
- All seven frameworks actively maintained
- Full continuous monitoring (ConMon) for FedRAMP
- Annual external audits for ISO 27001, ISO 42001, SOC 2
- Triennial TISAX re-assessment
- Dedicated compliance team within VMO

**Quality Gates:**
- Full gate model as defined in Section 13 with all governance body approvals active
- Risk-tiered gates: Low auto-flow, Medium requires single reviewer, High requires governance body, Critical requires multi-body approval

### 4.5 Transition Triggers

Transitions between phases are triggered when ANY of the listed conditions is met. Transitions are not automatic -- they are decisions made in the Leadership Sync (A to B) or Portfolio Governance forum (B to C), informed by the trigger conditions.

| Transition | Trigger Conditions | Decision Authority |
|---|---|---|
| **A → B** | (1) Total team size exceeds 20 people (including AI teammates counted at 0.25 FTE each) | CTO |
| | (2) Two products require independent release cycles | CTO |
| | (3) First enterprise customer requires formal certification evidence | CTO |
| | (4) Annual revenue exceeds EUR 2M | CTO |
| **B → C** | (1) Total team size exceeds 80 people | CTO + Portfolio Governance |
| | (2) Third product line added | CTO + Portfolio Governance |
| | (3) FedRAMP authorization required (mandates full governance separation) | CTO + Portfolio Governance |
| | (4) Annual revenue exceeds EUR 20M | CTO + Portfolio Governance |
| | (5) Regulatory audit finding requires governance body separation | CTO + Portfolio Governance |

**Transition Execution:**
- Each transition has a 2-PI implementation window
- During transition, both the current and target phase governance operate simultaneously
- A transition retrospective is conducted at the end of the implementation window to verify the new governance model is operating effectively
- Transition plan is documented in `/.strategy/phase-transition.yaml` and tracked in the portfolio backlog

### 4.6 Phase Comparison Matrix

| Dimension | Phase A: Startup | Phase B: Growth | Phase C: Enterprise |
|---|---|---|---|
| **People** | < 20 | 20-80 | 80+ |
| **Teams** | 1 | 3-4 (1 ART) | 6-10 (2 ARTs) |
| **Products** | 1 primary | 2 | 2+ |
| **Governance forums** | 1 (Leadership Sync) | 2 (Technical + Portfolio) | 5 (full governance bodies) |
| **Cadence** | Sprints (2 weeks) | PIs (10 weeks) + Sprints | PIs + Sprints + Quarterly |
| **Gate model** | Mostly automated | Risk-tiered | Full risk-tiered with multi-body |
| **Certifications** | ISO 27001 + 42001 prep | + TISAX, SOC 2, NIS2 as needed | All 7 frameworks |
| **Risk register** | Reviewed monthly | Reviewed bi-weekly | Reviewed weekly |
| **Strategy review** | Monthly Strategy Sync | Per PI boundary | Per PI + quarterly strategic |
| **Security** | Outsourced advisor | Full-time Security Champion | CISO + Security team |
| **AI governance** | CTO responsibility | AI Ethics Champion | AI Governance Board |
| **Compliance cost tracking** | Estimated quarterly | Measured per PI | Measured continuously |

---
## 5. Enterprise Risk Management Framework

### 5.1 Risk Management Principles (ISO 31000:2018)

The Enterprise Risk Management Framework is the structural foundation of the SDLC. Every quality gate, every compliance control, every AI governance decision, and every deployment authorization traces back to a risk assessment performed under this framework. Risk management is not a checkpoint – it is the connective tissue that binds all seven certification frameworks (ISO 27001, ISO 42001, TISAX, SOC 2, NIS2, FedRAMP, EU AI Act) into a single, coherent governance architecture.

The Helge Heupel Group adopts the following principles from ISO 31000:2018 Clause 4, operationalized for AI-native software development:

1. **Risk management creates and protects value.** Every risk activity must demonstrably protect revenue, customer trust, regulatory standing, or competitive position. Risk activities that produce documentation without informing decisions are eliminated.
2. **Risk management is integrated into all organizational activities.** Risk assessment is embedded into every SDLC phase (Section 9, Phases 0–6), every quality gate (Section 13), every IEA Policy Gateway evaluation (Section 8), and every governance body agenda (Section 13.3). There is no separate "risk management process" – risk management is the process.
3. **Risk management is structured, comprehensive, and customized.** The framework uses calibrated scales (Section 5.4), a three-level taxonomy (Section 5.3), and phase-specific technique selection (Section 5.4) tailored to an AI-native B2B SaaS company operating across EU and US jurisdictions.
4. **Risk management is dynamic and responsive to change.** The risk register (Section 5.5) is a living artifact updated by automated Key Risk Indicator feeds, incident analysis, and regulatory change monitoring – not a static document reviewed annually.
5. **Risk management is based on the best available information.** Quantitative methods (FAIR, Monte Carlo) supplement qualitative judgment for high-impact risks. Operational telemetry from Azure Monitor, Microsoft Sentinel, and AI model monitoring systems feeds directly into risk scoring.

### 5.2 Risk Appetite Statement

The Helge Heupel Group accepts risk commensurate with its strategic objective of achieving a 10X productivity advantage through AI-native product development while maintaining the trust and confidence of enterprise customers, regulators, and stakeholders.

#### 5.2.1 Risk Appetite by Category

| Risk Category | Appetite | Statement |
|---|---|---|
| **Strategic** | Moderate | The Group pursues competitive disruption in Value Engineering and Enterprise Architecture Management, accepting uncertainty in market timing, technology maturity, and customer adoption. Failed experiments and strategic pivots are acceptable costs of innovation leadership. |
| **Operational** | Low | Product reliability is a competitive advantage against incumbents. The Group demands high availability (99.95% Tier 1) and invests disproportionately in resilience. Operational failures that reach customers erode the trust that differentiates Verity from Microsoft and Google offerings. |
| **Compliance** | Very Low | Certification failures are existential for enterprise sales. The Group proactively exceeds regulatory requirements where doing so strengthens customer trust. Near-zero tolerance for non-conformities that could delay ISO 27001, ISO 42001, TISAX, SOC 2, or FedRAMP certifications. |
| **AI** | Low–Moderate | The Group accepts moderate AI risk where controls ensure fairness, transparency, and human oversight per ISO 42001 and EU AI Act. The Group has zero appetite for AI systems that could cause significant harm to individuals or society. Innovation in AI capabilities is balanced with responsible deployment. |
| **Financial** | Moderate | As a growth-stage company, the Group accepts calculated financial risks on product development investment and market expansion. Capital allocation decisions are governed by WSJF scoring with risk weighting. |
| **Reputational** | Very Low | Trust is the product's value proposition. A single high-profile AI failure, data breach, or compliance violation could be existential for a startup competing against incumbent trust. The Group invests in prevention over remediation. |

#### 5.2.2 Risk Tolerance Thresholds

| Level | Quantitative Threshold | Annual Probability Bound | Decision Authority |
|---|---|---|---|
| Very Low | Impact < EUR 50K | < 1% | Automatic controls; exceptions escalate to CISO/CTO |
| Low | Impact < EUR 100K | < 5% | Team-level management with quarterly review |
| Moderate | Impact < EUR 250K | < 15% | ART-level management with monthly review |
| High | Impact < EUR 500K | < 25% | Portfolio-level management with VMO oversight |
| Unacceptable | Impact > EUR 500K or any risk to human safety | > 25% | Immediate escalation to CTO; no proceed without treatment |

#### 5.2.3 Residual Risk Acceptance Authority

| Residual Risk Level | Acceptance Authority | Documentation Required |
|---|---|---|
| Low (1–6) | Risk Owner (team lead) | Risk register entry with justification |
| Medium (7–12) | ART-level management (RTE or Product Manager) | Risk register entry + treatment plan + review date |
| High (13–19) | CTO or CISO | Risk register entry + FAIR analysis + AI Governance Board review (if AI risk) + quarterly reassessment |
| Critical (20–25) | CTO + CISO joint approval | Risk register entry + FAIR analysis + board-level briefing + monthly reassessment + contingency plan |

### 5.3 Risk Taxonomy

The Helge Heupel Group uses a three-level risk taxonomy aligned with ISO 23894 AI risk sources and structured to serve all seven compliance frameworks from a single classification scheme.

#### 5.3.1 Level 1 – Risk Categories (6)

| Code | Category | Primary Framework Alignment |
|---|---|---|
| STR | Strategic Risk | SAFe 6.0 Portfolio, ISO 31000 |
| OPS | Operational Risk | ISO 27001, NIS2, SOC 2, TISAX |
| CMP | Compliance Risk | All seven frameworks |
| AIR | AI Risk | ISO 42001, ISO 23894, EU AI Act |
| FIN | Financial Risk | SOC 2 CC3, ISO 31000 |
| REP | Reputational Risk | ISO 31000, SOC 2 CC1 |

#### 5.3.2 Level 2 – Subcategories (~20)

| L1 | L2 Code | Subcategory |
|---|---|---|
| STR | STR.MKT | Market and competitive risk |
| STR | STR.TEC | Technology maturity and obsolescence risk |
| STR | STR.INV | Investment and capital allocation risk |
| OPS | OPS.SVC | Service delivery and availability risk |
| OPS | OPS.PRC | Process and change management risk |
| OPS | OPS.PPL | People, skills, and capacity risk |
| OPS | OPS.BCP | Business continuity and disaster recovery risk |
| OPS | OPS.SEC | Cybersecurity risk (external and internal threats) |
| OPS | OPS.SUP | Supply chain and vendor risk |
| CMP | CMP.REG | Regulatory change and enforcement risk |
| CMP | CMP.CRT | Certification and audit risk |
| CMP | CMP.DAT | Data protection and privacy risk |
| AIR | AIR.DAT | AI data risk (bias, quality, representativeness, poisoning) |
| AIR | AIR.MDL | AI model risk (opacity, drift, hallucination, adversarial vulnerability) |
| AIR | AIR.OUT | AI output risk (incorrect decisions, discrimination, unexplainability) |
| AIR | AIR.SYS | AI systemic risk (cascading failures, feedback loops, emergent behavior) |
| AIR | AIR.SUP | AI supply chain risk (third-party model dependency, API deprecation) |
| FIN | FIN.REV | Revenue and growth risk |
| FIN | FIN.CST | Cost overrun and resource risk |
| REP | REP.BRD | Brand and trust risk |
| REP | REP.STK | Stakeholder confidence risk |

#### 5.3.3 Level 3 – Specific Risks (Examples)

Level 3 risks are the individual entries in the risk register. Examples under AIR.MDL (AI Model Risk):

- AIR.MDL.001 – LLM hallucination in Verity VE value engineering recommendations
- AIR.MDL.002 – Concept drift in EAM classification models due to evolving enterprise architecture patterns
- AIR.MDL.003 – Adversarial prompt injection bypassing IEA Policy Gateway guardrails
- AIR.MDL.004 – Model opacity preventing compliance with EU AI Act Art. 13 transparency requirements
- AIR.MDL.005 – Azure OpenAI Service model version change degrading output quality

The full Level 3 taxonomy is maintained in the risk register as a living catalog, not in this document.

### 5.4 Risk Assessment Methodology

The framework uses a dual-track methodology: qualitative assessment for all risks, supplemented by quantitative analysis for High and Critical risks.

#### 5.4.1 Qualitative Track – 5x5 Likelihood-Impact Matrix

**Likelihood Scale:**

| Score | Level | Description | Annual Probability |
|---|---|---|---|
| 1 | Rare | Exceptional circumstances only | < 5% |
| 2 | Unlikely | Could occur but not expected | 5–15% |
| 3 | Possible | Might occur at some point | 15–40% |
| 4 | Likely | Will probably occur | 40–75% |
| 5 | Almost Certain | Expected to occur | > 75% |

**Impact Scale (maximum across dimensions):**

| Score | Level | Financial | Operational | Regulatory | Reputational |
|---|---|---|---|---|---|
| 1 | Negligible | < EUR 10K | < 1h downtime | Minor finding | No external visibility |
| 2 | Minor | EUR 10–50K | 1–4h downtime | Minor non-conformity | Limited customer awareness |
| 3 | Moderate | EUR 50–250K | 4–24h downtime | Major non-conformity | Industry press coverage |
| 4 | Major | EUR 250K–1M | 1–7d downtime | Regulatory investigation | National press coverage |
| 5 | Severe | > EUR 1M | > 7d downtime | License/certification revocation | Brand-destroying event |

**Risk Rating = Likelihood x Impact:**

| Score Range | Risk Level | Action Required | Review Frequency |
|---|---|---|---|
| 1–6 | Low | Accept and monitor; document in risk register | Quarterly |
| 7–12 | Medium | Treat within 90 days; assign risk owner | Monthly |
| 13–19 | High | Treat within 30 days; escalate to ART level; FAIR analysis required | Bi-weekly |
| 20–25 | Critical | Immediate treatment; escalate to CTO/CISO; FAIR analysis required; contingency plan mandatory | Weekly or more frequent |

#### 5.4.2 Quantitative Track -- FAIR Methodology + Monte Carlo Simulation

Applied to: all Critical risks, all High risks, top 20 risks by qualitative score, and any risk requiring investment justification exceeding EUR 100K.

**FAIR (Factor Analysis of Information Risk) Model:**

```
Annual Loss Expectancy (ALE) = Loss Event Frequency (LEF) x Loss Magnitude (LM)

LEF = Threat Event Frequency (TEF) x Vulnerability (Vuln)
  TEF = Contact Frequency x Probability of Action
  Vuln = f(Threat Capability, Control Strength)

LM = Primary Loss + Secondary Loss
  Primary Loss = Productivity + Response + Replacement + Fines/Judgments
  Secondary Loss = Reputation + Competitive Advantage + Legal Liability
```

**Monte Carlo Simulation Parameters:**
- Iterations: 10,000 per risk scenario
- Input distributions: PERT (min, most likely, max, confidence) for each FAIR factor
- Outputs: Loss exceedance curve, Value at Risk at 90th/95th/99th percentiles, Annual Loss Expectancy (mean)
- Tooling: RiskLens, SAFE One, or custom Python model (scipy + numpy)

**Quantification Cadence:**
- Top 20 risks: Quantified quarterly, aligned with PI boundaries
- Enterprise risk aggregation: Annual Monte Carlo simulation across correlated risks
- Ad hoc: Any risk requiring investment justification > EUR 100K, or any risk disputed between stakeholders

#### 5.4.3 IEC 31010 Technique Selection per SDLC Phase

Each SDLC phase employs specific risk assessment techniques selected per IEC 31010 guidance:

| SDLC Phase | Primary Techniques | Secondary Techniques | When to Apply |
|---|---|---|---|
| Phase 0: Orient | SWOT, PESTLE, Scenario Analysis (IEC 31010 B.5) | Delphi Technique (B.4), Stakeholder Analysis | Every new initiative; PI Planning risk review |
| Phase 1: Requirements | STRIDE/LINDDUN (threat modeling), FMEA (B.13), SWIFT (B.10) | FTA (B.12), Assumption risk mapping | Every feature; every AI capability requirement |
| Phase 2: Development | Risk-based code review scoring, Dependency risk analysis | Bow-Tie Analysis (B.22) for architectural decisions | Every PR (automated scoring); high-risk architecture changes (manual) |
| Phase 3: Testing | Risk-based test prioritization matrix, BIA (B.6) | HAZOP (B.9) for AI output validation, Attack Tree Analysis | Test planning for each iteration; AI feature validation |
| Phase 4: Deployment | Change risk scoring (composite metric), Impact analysis | ETA (B.11) for cascading failure scenarios | Every deployment; CAB review for High/Critical |
| Phase 5: Operate | Bow-Tie Analysis (B.22), Incident trending, KRI monitoring | Markov Analysis (B.27) for reliability modeling | Continuous monitoring; monthly risk review |
| Phase 6: Feedback | Bayesian Analysis (B.25), Root Cause Analysis (B.15) | Risk model validation (predicted vs. actual) | Every incident post-mortem; quarterly risk review |

### 5.5 Risk Register Architecture

The risk register is the single source of truth for risk across all seven compliance frameworks. It serves as the ISO 27001 risk register (clause 6.1.2), the ISO 42001 AI risk register (clause 6.1.2), and the evidence base for TISAX ISA 1.1, SOC 2 CC3, NIS2 Art. 21(a), FedRAMP RA-3, and EU AI Act Art. 9.

#### 5.5.1 Risk Entry Schema

```json
{
  "riskId": "RISK-{L1Code}-{sequence:4}",
  "version": "semver",
  "metadata": {
    "createdDate": "ISO-8601",
    "lastUpdated": "ISO-8601",
    "createdBy": "user-id",
    "ownedBy": "user-id",
    "status": "identified | assessed | treating | accepted | closed"
  },
  "identification": {
    "title": "string",
    "description": "string",
    "category": "L1 taxonomy code",
    "subcategory": "L2 taxonomy code",
    "specificRisk": "L3 taxonomy code",
    "riskSource": "internal | external | environmental",
    "affectedEntities": ["GmbH", "B.V.", "Inc."],
    "affectedProducts": ["Verity VE", "Verity EAM", "Internal"],
    "sdlcPhase": "orient | requirements | development | testing | deployment | operate | feedback | cross-cutting",
    "identificationMethod": "risk_workshop | incident_analysis | audit_finding | automated_detection | threat_intelligence | regulatory_change"
  },
  "assessment": {
    "qualitative": {
      "likelihood": "1-5",
      "impactFinancial": "1-5",
      "impactOperational": "1-5",
      "impactRegulatory": "1-5",
      "impactReputational": "1-5",
      "overallImpact": "1-5 (max of dimensions)",
      "inherentRiskScore": "1-25",
      "inherentRiskLevel": "low | medium | high | critical"
    },
    "quantitative": {
      "fairAnalysisId": "reference to FAIR workbook",
      "annualLossExpectancy": "EUR",
      "var90": "EUR",
      "var95": "EUR",
      "var99": "EUR",
      "lastQuantifiedDate": "ISO-8601",
      "nextQuantificationDue": "ISO-8601"
    },
    "aiSpecific": {
      "isAIRisk": "boolean",
      "iso23894Category": "data | model | output | systemic | supply_chain",
      "euAIActClassification": "prohibited | high_risk | limited_risk | minimal_risk",
      "trustworthinessDimensions": {
        "reliability": "0-5",
        "safety": "0-5",
        "fairness": "0-5",
        "transparency": "0-5",
        "privacy": "0-5",
        "accountability": "0-5",
        "security": "0-5",
        "humanOversight": "0-5"
      }
    }
  },
  "treatment": {
    "strategy": "avoid | modify | share | retain",
    "controls": [{
      "controlId": "string",
      "description": "string",
      "type": "preventive | detective | corrective | compensating",
      "implementationStatus": "planned | in_progress | implemented | verified",
      "effectiveness": "effective | partially_effective | ineffective | not_tested",
      "frameworkMappings": {
        "iso27001": "Annex A reference",
        "iso42001": "Annex A reference",
        "tisax": "ISA reference",
        "soc2": "TSC reference",
        "nis2": "Article reference",
        "fedramp": "NIST 800-53 reference",
        "euAIAct": "Article reference"
      }
    }],
    "residualLikelihood": "1-5",
    "residualImpact": "1-5",
    "residualRiskScore": "1-25",
    "residualRiskLevel": "low | medium | high | critical",
    "acceptedBy": "user-id",
    "acceptanceDate": "ISO-8601",
    "acceptanceJustification": "string"
  },
  "monitoring": {
    "keyRiskIndicators": [{
      "kriId": "string",
      "metric": "string",
      "threshold": "string",
      "currentValue": "string",
      "dataSource": "Azure Monitor | Sentinel | SonarQube | custom",
      "trend": "improving | stable | deteriorating"
    }],
    "reviewSchedule": "weekly | biweekly | monthly | quarterly",
    "lastReviewDate": "ISO-8601",
    "nextReviewDate": "ISO-8601"
  },
  "compliance": {
    "applicableFrameworks": ["iso27001", "iso42001", "tisax", "soc2", "nis2", "fedramp", "euAIAct"],
    "evidenceLinks": ["URI"],
    "auditFindings": ["finding-id"]
  },
  "history": [{
    "date": "ISO-8601",
    "changeType": "string",
    "changedBy": "user-id",
    "summary": "string"
  }]
}
```

#### 5.5.2 Risk Register Operations

- **Platform:** GRC platform (ServiceNow GRC or Vanta) with API integration to Azure DevOps for work item linking and to Azure Monitor/Sentinel for automated KRI feeds.
- **Access:** Role-based. All team members view risks in their scope. Risk owners update their risks. CISO and CTO have full visibility. External auditors receive read-only framework-filtered views.
- **Automation:** KRIs feed automatically from monitoring systems – error rate trends from Azure Monitor, vulnerability counts from Snyk/SonarQube, security event frequency from Microsoft Sentinel, AI drift metrics from Azure ML.
- **Audit Trail:** All changes to risk register entries are logged with immutable audit trail satisfying ISO 27001 A.8.15, SOC 2 CC4, and FedRAMP AU controls.
- **Review Cadence:** Quarterly full risk register review aligned with PI boundaries. Monthly review of High and Critical risks. Weekly review of any risk with deteriorating KRI trends.

### 5.6 Cross-Framework Risk Integration

The enterprise risk framework is designed to satisfy the risk assessment requirements of all seven compliance frameworks through a single process, eliminating duplicative risk activities while producing framework-specific evidence artifacts.

| Framework | Requirement | How This Framework Satisfies It |
|---|---|---|
| **ISO 27001 §6.1.2** | Define and apply an IS risk assessment process producing consistent, valid, and comparable results | The qualitative 5x5 matrix with calibrated scales (Section 5.4) ensures consistency. The risk register schema (Section 5.5) ensures comparability. The taxonomy (Section 5.3) includes OPS.SEC covering all information security risk domains. The Statement of Applicability is driven by risk assessment results. |
| **ISO 42001 §6.1.2** | Define and apply an AI risk assessment process considering impacts on individuals, groups, and societies | AI-specific risk fields in the register schema (Section 5.5) capture ISO 23894 categories and trustworthiness dimensions. The AIR taxonomy (Section 5.3) covers all five AI risk subcategories. Societal impact assessment integrates with ISO 42005 impact assessment process. |
| **NIS2 Art. 21(a)** | Risk analysis and information security policies; appropriate and proportionate measures | The risk assessment methodology (Section 5.4) demonstrates proportionality – security measure investment is justified by risk score. The OPS.SEC taxonomy covers all NIS2 "all-hazards" requirements. Supply chain risk (OPS.SUP) satisfies Art. 21(d). |
| **TISAX ISA 1.1** | Information security policies based on risk assessment; regular risk assessment | The unified risk register serves as the TISAX risk register. Risk assessment results drive ISA control selection and implementation priority. The quarterly review cadence satisfies "regular" assessment requirements. |
| **SOC 2 CC3** | Entity identifies risks to objectives including vendor risks (CC3.1–CC3.4) | The six-category taxonomy covers all SOC 2 risk domains. FAIR quantification provides the "significance" assessment CC3.2 requires. OPS.SUP (supply chain risk) satisfies vendor risk requirements (CC3.1). Fraud risk is addressed through OPS.SEC.003 (insider threat). |
| **FedRAMP RA family** | RA-1 (policy), RA-2 (categorization), RA-3 (assessment), RA-5 (vulnerability monitoring), RA-7 (response), RA-9 (criticality analysis) | This section serves as RA-1 policy. FIPS 199 categorization is embedded in the risk register for the US production boundary. The dual-track methodology satisfies RA-3. KRI automation from vulnerability scanners satisfies RA-5. Treatment strategies satisfy RA-7. BIA technique in Phase 5 satisfies RA-9. |
| **EU AI Act Art. 9** | Risk management system for high-risk AI – continuous iterative process throughout lifecycle | The AIR taxonomy with ISO 23894 alignment, phase-specific AI risk techniques, trustworthiness dimension scoring, and continuous KRI monitoring from AI telemetry collectively implement the Art. 9 risk management system as a lifecycle process, not a one-time classification. |

#### 5.6.1 Single Assessment, Multiple Outputs

When a risk assessment is completed, the GRC platform generates framework-specific evidence packages automatically:
- **ISO 27001/42001:** Risk assessment report in the format required for management review (clause 9.3)
- **TISAX:** Risk assessment evidence mapped to VDA ISA 6 control requirements
- **SOC 2:** Risk assessment documentation for Type II auditor review (CC3 criteria)
- **FedRAMP:** OSCAL-formatted risk assessment results compatible with NIST 800-53 RA-3
- **EU AI Act:** Art. 9 risk management system documentation linked to conformity assessment

### 5.7 Risk Communication and Reporting

#### 5.7.1 Risk Dashboard

A real-time, role-based risk dashboard provides continuous visibility into the organization's risk posture:

| Audience | Dashboard View | Update Frequency | Key Visualizations |
|---|---|---|---|
| Team level | Risks affecting their scope; open treatment actions; KRI status | Real-time | Risk list with status indicators; KRI trend sparklines |
| ART level | Aggregated risk heat map for the ART; top 10 risks; risk trend | Real-time | 5x5 heat map; risk trend over time; treatment plan progress |
| CTO / CISO | Enterprise risk heat map; cross-entity view; critical risk alerts | Real-time | Enterprise heat map; loss exceedance curves (FAIR); framework compliance status |
| AI Governance Board | AI-specific risk view; trustworthiness dimension radar; EU AI Act compliance | Weekly refresh | Trustworthiness radar charts; AI KRI dashboard; model risk inventory |
| External auditors | Framework-filtered read-only view; evidence links; assessment history | On-demand (access-controlled) | Framework-specific risk register export; control effectiveness summary |

#### 5.7.2 Reporting Cadence

| Report | Frequency | Audience | Content |
|---|---|---|---|
| KRI Alert | Real-time (threshold-triggered) | Risk owner + escalation chain | Specific KRI breach with context and recommended action |
| Monthly Risk Report | Monthly | CTO, CISO, VMO | Top 10 risks, new/closed risks, KRI trends, treatment plan status, emerging risks |
| Quarterly Risk Review | Quarterly (aligned with PI boundary) | AI Governance Board, Compliance Steering Committee, Architecture Review Board | Full risk register review, FAIR analysis updates, risk appetite recalibration assessment, cross-entity risk correlation, regulatory horizon scan |
| Annual Enterprise Risk Assessment | Annually | CTO, CISO, Board-level briefing | Comprehensive enterprise risk assessment, Monte Carlo aggregation, year-over-year trend, risk appetite statement review, framework-specific risk summaries |

#### 5.7.3 Risk Escalation Protocol

1. **KRI threshold breach** – Automated alert to risk owner. If no acknowledgment within 4 hours, escalate to ART-level management.
2. **Risk score increase to High (13–19)** – Risk owner notifies CTO/CISO within 24 hours. FAIR analysis initiated within 5 business days.
3. **Risk score increase to Critical (20–25)** – Immediate notification to CTO and CISO. Emergency risk review within 24 hours. Contingency plan activation if treatment timeline exceeds 72 hours.
4. **New risk category identified** – Presented at next quarterly risk review. If urgent, emergency session of the relevant governance body (AI Governance Board for AI risks, Security Review Board for cybersecurity risks).

### 5.8 Progressive Adoption

The framework is designed for progressive adoption aligned with the Helge Heupel Group's growth trajectory. Not all elements are required from day one -- but the path to full maturity is defined and scheduled.

#### 5.8.1 Startup Stage (Current – Months 0–6)

| Element | Implementation |
|---|---|
| Risk appetite | Approved risk appetite statement (Section 5.2); reviewed by CTO and CISO |
| Risk taxonomy | Full three-level taxonomy adopted (Section 5.3); Level 3 populated as risks are identified |
| Risk register | GRC platform configured with schema (Section 5.5); initial workshop to populate top 30 risks |
| Assessment method | Qualitative 5x5 matrix only; all risks scored on inherent and residual basis |
| Risk ownership | CTO as enterprise risk owner; CISO as cybersecurity/compliance risk owner; individual risk owners assigned per entry |
| Review cadence | Quarterly full review; monthly review of top 10 risks |
| Reporting | Monthly risk summary to CTO/CISO; quarterly risk section in PI review |
| Phase integration | Risk activities embedded in Phase 0 (Orient) and Phase 4 (Deployment) gate criteria; other phases adopt risk activities progressively |
| Techniques | Risk matrix (all phases), STRIDE/LINDDUN (Phase 1), change risk scoring (Phase 4) |

#### 5.8.2 Growth Stage (Months 6–18)

| Element | Enhancement |
|---|---|
| Assessment method | Dual-track: qualitative for all risks + FAIR analysis for High and Critical risks (top 20) |
| Risk register | Automated KRI feeds from Azure Monitor, Sentinel, SonarQube, and Snyk connected to risk entries |
| Review cadence | Monthly full review; bi-weekly review of High and Critical risks |
| Reporting | Real-time risk dashboard deployed; monthly risk report formalized; AI-specific risk view for AI Governance Board |
| Phase integration | All seven SDLC phases have explicit risk activities; risk register update included in Definition of Done |
| Techniques | Full IEC 31010 technique set per phase (Section 5.4 table); FMEA in Phase 1; BIA in Phase 5; Bayesian analysis in Phase 6 |
| AI risk | ISO 23894-aligned AI risk assessment for every AI feature; trustworthiness dimension scoring operational |
| Quantitative | Quarterly FAIR analysis of top 20 risks; first annual Monte Carlo enterprise risk aggregation |

#### 5.8.3 Enterprise Stage (Months 18–36)

| Element | Full Maturity |
|---|---|
| Assessment method | Full FAIR methodology for all Medium+ risks; Monte Carlo simulation for portfolio-level risk aggregation |
| Risk register | Fully automated risk scoring updates from operational data; predictive risk trending using historical data |
| Review cadence | Continuous monitoring with automated escalation; weekly Critical risk review; monthly full review; quarterly strategic risk review |
| Reporting | Board-level risk reporting with loss exceedance curves; risk-adjusted ROI for all security/compliance investments |
| Phase integration | Risk-based resource allocation – test effort, review depth, deployment strategy, and monitoring intensity all dynamically adjusted by risk score |
| Cross-entity | Cross-entity risk correlation analysis; aggregated risk view across GmbH, B.V., and Inc. without double-counting |
| Certification | Risk framework serves as the unified evidence base for all seven certification audits; single assessment, multiple outputs fully operational |
| Maturity target | ISO/IEC 33001 Capability Level 5 (Optimizing) – risk management drives continuous improvement across the entire SDLC |

---
## 6. Unified Control Library and Compliance Matrix

### 6.1 Unified Control Library (UCL) Architecture

#### 6.1.1 Purpose and Scope

The Unified Control Library is the single source of truth for every compliance control obligation across all seven target frameworks. It features a complete, machine-readable control catalog containing approximately 300 unique controls derived from ISO 27001:2022, ISO 42001:2023, TISAX ISA 6, SOC 2 Type II, NIS2 Directive, FedRAMP Moderate (NIST 800-53 Rev. 5), and the EU AI Act.

The UCL serves three audiences simultaneously:

- **Engineers** consume it as policy-as-code rules enforced in CI/CD pipelines.
- **Auditors** consume it as a cross-referenced evidence index mapping each control to its implementation, evidence artifacts, and framework-specific references.
- **Management** consumes it as a compliance posture dashboard showing control effectiveness, evidence freshness, and gap identification across all frameworks and entities.

#### 6.1.2 Three-Tier Architecture

```
Tier 1: Canonical Controls (~140 framework-agnostic controls)
    |
    +-- UCL-RM-001: Risk Assessment Process
    |   Maps to: ISO 27001 6.1.2, ISO 42001 6.1.2, TISAX 1.1, SOC 2 CC3.1-CC3.4,
    |            NIS2 Art.21(a), NIST 800-53 RA-3, EU AI Act Art.9
    |   Evidence: Risk register, assessment reports, treatment plans
    |   Owner: CISO | Cadence: Continuous (trigger-based) + Annual comprehensive
    |
Tier 2: Framework-Specific Extensions (~120 controls)
    |
    +-- UCL-RM-001-FEDRAMP: RA-3 specific parameters (OSCAL format, 3PAO validation)
    +-- UCL-RM-001-TISAX: ISA 1.1 maturity level evidence (VDA template, Level 3 minimum)
    +-- UCL-RM-001-EUAI: AI-specific risk categories (societal, fundamental rights)
    |
Tier 3: Entity-Specific Implementations (~60 variations)
    |
    +-- UCL-RM-001-GMBH: BSI-specific risk methodology, German-language reports
    +-- UCL-RM-001-BV: NCSC-NL reporting, Dutch regulatory context
    +-- UCL-RM-001-INC: FedRAMP boundary-specific risk assessment
```

Tier 1 controls represent the "implement once, certify many" core. Approximately 120-140 Tier 1 controls satisfy obligations in three or more frameworks simultaneously, delivering maximum compliance leverage from a single implementation.

#### 6.1.3 UCL Schema

Each control record in the UCL conforms to the following schema, stored as version-controlled YAML in the `ucl/` directory of the SDLC repository.

```yaml
controlId: UCL-RM-001
domain: Risk Management
title: Risk Assessment Process
objective: >
  Establish and maintain a systematic process for identifying, analyzing,
  evaluating, and treating information security and AI-related risks.
implementation:
  description: >
    Risk assessment conducted using ISO 31000 framework with IEC 31010
    techniques. Risk register maintained in GRC platform. Trigger-based
    reassessment upon material change. Annual comprehensive assessment
    aligned with PI boundaries.
  tools:
    - ServiceNow GRC / Vanta (risk register)
    - Azure Policy (infrastructure risk signals)
    - Microsoft Defender (vulnerability risk feed)
  procedures:
    - PRC-RM-001: Risk Assessment Procedure
    - PRC-RM-002: Risk Treatment Procedure
evidence:
  type: hybrid          # automated | manual | hybrid
  artifacts:
    - name: Risk Register
      format: json
      source: grc-platform
      cadence: continuous
    - name: Annual Risk Assessment Report
      format: pdf
      source: manual
      cadence: annual
    - name: Risk Treatment Plan
      format: json
      source: grc-platform
      cadence: continuous
  retention: 10-years   # Maximum retention across all frameworks (EU AI Act Art. 18)
frameworkMappings:
  iso27001: "Clause 6.1.2, Clause 8.2"
  iso42001: "Clause 6.1.2"
  tisax: "ISA 1.1"
  soc2: "CC3.1, CC3.2, CC3.3, CC3.4"
  nis2: "Art.21(a)"
  fedramp: "RA-3"
  euAiAct: "Art.9"
owner: CISO
reviewCadence: quarterly
lastReview: 2026-01-15
status: active          # active | draft | deprecated | superseded
tier: 1                 # 1 = canonical, 2 = framework-extension, 3 = entity-specific
isoStandardRefs:
  - ISO 31000 (risk management principles)
  - IEC 31010:2019 (risk assessment techniques)
  - ISO/IEC 23894:2023 (AI risk management, for AI-related risks)
```

#### 6.1.4 UCL Domain Taxonomy

Controls are organized into 20 domains, each assigned a two-letter code used in the control identifier.

| Code | Domain | Estimated Controls | Framework Coverage |
|---|---|---|---|
| GM | Governance and Management | 25-30 | All 7 |
| RM | Risk Management | 15-20 | All 7 |
| AC | Access Control and Identity | 20-25 | 6/7 |
| AM | Asset Management | 10-15 | 5/7 |
| CR | Cryptography and Key Management | 8-12 | 6/7 |
| OS | Operations Security | 15-20 | 6/7 |
| CS | Communications and Network Security | 10-15 | 6/7 |
| SD | System Development and Maintenance | 20-25 | All 7 |
| SM | Supplier and Third-Party Management | 10-15 | All 7 |
| IM | Incident Management | 10-15 | All 7 |
| BC | Business Continuity | 8-12 | 6/7 |
| CA | Compliance and Audit | 10-15 | All 7 |
| PS | Personnel Security | 8-10 | 6/7 |
| PH | Physical Security | 10-12 | 5/7 |
| AL | AI Lifecycle and Governance | 25-35 | 3/7 |
| AR | AI Risk and Impact | 15-20 | 3/7 |
| AT | AI Transparency and Explainability | 10-15 | 2/7 |
| AD | AI Data Governance | 10-12 | 3/7 |
| PD | Privacy and Data Protection | 15-20 | 5/7 |
| SC | Secure Coding and SDLC | 10-15 | All 7 |
| **Total** | | **280-320** | |

Control identifiers follow the pattern: `UCL-{Domain}-{Sequence}[-{Framework}][-{Entity}]`

Examples: `UCL-RM-003` (canonical), `UCL-RM-003-FEDRAMP` (FedRAMP extension), `UCL-RM-003-GMBH` (GmbH implementation).

#### 6.1.5 UCL Storage and Maintenance

**Storage.** The UCL is maintained as version-controlled YAML files in the `sdlc/ucl/` directory of the SDLC repository, organized by domain (`ucl/RM/`, `ucl/AC/`, etc.). Each control is a single YAML file. A JSON Schema (`ucl/schema/control.schema.json`) validates all control files in CI.

**Maintenance Process.**

| Trigger | Action | Owner | SLA |
|---|---|---|---|
| Quarterly review cycle | Review all controls for currency, update evidence references | Control Owner per domain | 10 business days |
| New framework requirement | Add or update affected controls, map evidence | CFCI Lead | 15 business days |
| Regulatory change (e.g., NIS2 transposition) | Impact assessment, control update, evidence re-mapping | Legal + CFCI Lead | 30 business days |
| Audit finding | Corrective action on affected control, root cause analysis | Control Owner | Per finding severity |
| Technology change | Update implementation and tool references | Engineering Lead | 15 business days |

All changes to UCL files follow the same pull request, review, and approval process as code changes, ensuring full auditability.

### 6.2 Cross-Framework Control Mapping

#### 6.2.1 Expanded Domain Coverage

SDLC v1 Section 4.1 mapped 13 control domains. The UCL expands to 42 specific control domains organized under the 20 top-level categories defined in Section 6.1.4. The following table provides the complete summary mapping. Individual control-level detail is maintained in the UCL YAML files.

| # | Control Domain | ISO 27001 | ISO 42001 | TISAX ISA 6 | SOC 2 | NIS2 | FedRAMP (800-53) | EU AI Act |
|---|---|---|---|---|---|---|---|---|
| 1 | Information Security Policy | A.5.1 | 5.2 | 1.1 | CC1.1 | Art.21(a) | PL-1 | – |
| 2 | Management Commitment | A.5.1-A.5.4 | 5.1-5.3 | 1.1 | CC1.2 | Art.20 | PL-1 | – |
| 3 | Organizational Roles and Responsibilities | A.5.2-A.5.6 | 5.3 | 1.2 | CC1.3 | Art.20 | PM-2 | – |
| 4 | Risk Assessment | Cl.6.1.2 | Cl.6.1.2 | 1.1 | CC3.1-CC3.4 | Art.21(a) | RA-3 | Art.9 |
| 5 | Risk Treatment | Cl.6.1.3 | Cl.6.1.3 | 1.1 | CC3.4 | Art.21(a) | RA-7 | Art.9(4) |
| 6 | Access Control Policy | A.5.15 | 7.1 | 4.1 | CC6.1 | Art.21(i) | AC-1 | – |
| 7 | User Access Management | A.5.16-A.5.18 | – | 4.1 | CC6.2-CC6.3 | Art.21(i) | AC-2, IA-2 | – |
| 8 | Authentication | A.8.5 | – | 4.1 | CC6.1 | Art.21(i) | IA-2, IA-5 | – |
| 9 | Asset Inventory | A.5.9-A.5.11 | – | 1.3 | CC6.1 | Art.21(h) | CM-8 | – |
| 10 | Media Handling | A.5.10, A.7.10 | – | 2.1 | CC6.5 | – | MP-2, MP-6 | – |
| 11 | Information Classification | A.5.12-A.5.13 | – | 2.1 | C1.1 | – | RA-2 | – |
| 12 | Cryptographic Controls | A.8.24 | – | 5.1 | CC6.1, CC6.7 | Art.21(g) | SC-12, SC-13 | – |
| 13 | Key Management | A.8.24 | – | 5.1 | CC6.1 | Art.21(g) | SC-12 | – |
| 14 | Operations Security | A.8.1-A.8.5 | – | 1.3 | CC7.1 | Art.21(e) | SI-2, SI-5 | – |
| 15 | Change Management | A.8.32 | 8.2 | 1.3 | CC8.1 | Art.21(e) | CM-3 | – |
| 16 | Configuration Management | A.8.9 | – | 5.2 | CC6.1 | Art.21(e) | CM-2, CM-6 | – |
| 17 | Network Security | A.8.20-A.8.23 | – | 5.1 | CC6.6 | Art.21(h) | SC-7 | – |
| 18 | Secure Development Lifecycle | A.8.25-A.8.31 | 8.1 | 5.2 | CC8.1 | Art.21(e) | SA-3, SA-11 | Art.9 |
| 19 | Vulnerability Management | A.8.8 | – | 5.2 | CC7.1 | Art.21(e) | RA-5, SI-2 | Art.15 |
| 20 | SBOM and Dependency Management | A.5.19 | – | – | CC9.2 | Art.21(d) | SA-4(10) | Art.15 |
| 21 | Supplier Risk Assessment | A.5.19-A.5.22 | 7.4 | 6.1 | CC9.1-CC9.2 | Art.21(d) | SA-4, SR-3 | Art.28 |
| 22 | Third-Party Connection Security | A.5.19 | – | 7.1 | CC6.6 | Art.21(d) | CA-3 | – |
| 23 | Cloud Service Provider Management | A.5.23 | – | 8.1 | CC6.1 | Art.21(d) | SA-9 | – |
| 24 | Incident Detection and Response | A.5.24-A.5.28 | 8.4 | 1.6 | CC7.2-CC7.5 | Art.23 | IR-4, IR-6 | – |
| 25 | Incident Reporting | A.5.24 | – | 1.6 | CC7.3 | Art.23 | IR-6 | Art.62 |
| 26 | Business Continuity Planning | A.5.29-A.5.30 | – | 1.4 | A1.1-A1.2 | Art.21(c) | CP-2, CP-4 | – |
| 27 | Backup and Recovery | A.8.13-A.8.14 | – | 1.4 | A1.2 | Art.21(c) | CP-9, CP-10 | – |
| 28 | Logging and Monitoring | A.8.15-A.8.16 | 9.1 | 1.5 | CC7.1-CC7.2 | Art.21(g) | AU-2, AU-6 | Art.12 |
| 29 | Internal Audit | Cl.9.2 | Cl.9.2 | 1.5 | CC4.1 | Art.21(g) | CA-2, CA-7 | Art.61 |
| 30 | Personnel Screening | A.6.1 | 7.2 | 3.1 | CC1.4 | Art.21(f) | PS-3 | – |
| 31 | Security Awareness and Training | A.6.3 | 7.3 | 3.1 | CC1.4 | Art.21(f) | AT-2, AT-3 | Art.4 |
| 32 | Physical Security | A.7.1-A.7.4 | – | 4.2 | CC6.4 | Art.21(h) | PE-2, PE-3 | – |
| 33 | Privacy and Data Protection | A.5.33-A.5.34 | – | 2.1 | P1.1 | Art.21(h) | PT-2, PT-3 | Art.10 |
| 34 | AI Risk Assessment (AI-specific) | – | Cl.6.1.2 | – | – | – | – | Art.9 |
| 35 | AI Impact Assessment | – | ISO 42005 | – | – | – | – | Art.27 |
| 36 | AI System Lifecycle | – | Cl.8.1-8.4 | – | – | – | – | Art.9-15 |
| 37 | AI Data Governance | – | A.4 | – | – | – | – | Art.10 |
| 38 | AI Transparency and Explainability | – | A.6 | – | – | – | – | Art.13 |
| 39 | AI Human Oversight | – | A.8 | – | – | – | – | Art.14 |
| 40 | AI Conformity Assessment | – | Cl.10.2 | – | – | – | – | Art.43 |
| 41 | AI Post-Market Monitoring | – | Cl.9.1 | – | – | – | – | Art.61 |
| 42 | Documentation Control | Cl.7.5 | Cl.7.5 | – | CC2.1 | – | PL-2 | Art.11 |

Domains 1-33 apply broadly across non-AI controls. Domains 34-41 are AI-specific and apply only where AI systems are in scope. Domain 42 (Documentation Control) governs the SDLC document ecosystem itself.

#### 6.2.2 Implement-Once Leverage Analysis

Of the 280-320 controls in the UCL, the following leverage ratios apply:

| Leverage Category | Control Count | Frameworks Satisfied | Evidence Reuse |
|---|---|---|---|
| Shared across 5+ frameworks | ~45 | 5-7 per control | Single evidence artifact serves all |
| Shared across 3-4 frameworks | ~95 | 3-4 per control | Single artifact with framework-specific annotations |
| Shared across 2 frameworks | ~80 | 2 per control | Limited reuse |
| Framework-unique | ~100 | 1 per control | No reuse (framework-specific obligation) |

The 45 controls shared across five or more frameworks represent the highest-value "implement once, certify many" targets. These include risk management, access control, incident management, vulnerability management, logging, internal audit, change management, and security awareness.

### 6.3 Entity-Framework Applicability Matrix

#### 6.3.1 Framework Applicability by Entity

This matrix retains the structure from SDLC v1 Section 4.2 and expands it to include all frameworks and ISO 42005.

| Entity | ISO 27001 | ISO 42001 | ISO 42005 | TISAX ISA 6 | SOC 2 Type II | NIS2 | FedRAMP | EU AI Act |
|---|---|---|---|---|---|---|---|---|
| HH GmbH (DE) | Required | Required | Required | Required | Required | Required | – | Required |
| HH B.V. (NL) | Required | Required | Required | Required | Required | Required | – | Required |
| HH Inc. (US) | Required | Required | Required | – | Required | – | Required | – |

#### 6.3.2 UCL Domain Applicability by Entity

Not all UCL domains apply uniformly. The following matrix defines which top-level domains are in scope for each entity.

| Domain | GmbH | B.V. | Inc. | Rationale |
|---|---|---|---|---|
| GM: Governance and Management | Full | Full | Full | Shared management system |
| RM: Risk Management | Full | Full | Full | Shared risk methodology |
| AC: Access Control | Full | Full | Full + FedRAMP | Inc. adds FedRAMP AC controls |
| AM: Asset Management | Full | Full | Full | – |
| CR: Cryptography | Full | Full | Full + FIPS | Inc. requires FIPS 140-2 validated modules |
| OS: Operations Security | Full | Full | Full | – |
| CS: Communications Security | Full | Full | Full + FedRAMP | Inc. adds FedRAMP boundary controls |
| SD: System Development | Full | Full | Full | – |
| SM: Supplier Management | Full + TISAX | Full + TISAX | Full | GmbH/B.V. add TISAX ISA 6 supplier controls |
| IM: Incident Management | Full + NIS2 | Full + NIS2 | Full + FedRAMP | Jurisdiction-specific reporting obligations |
| BC: Business Continuity | Full | Full | Full | – |
| CA: Compliance and Audit | Full | Full | Full | – |
| PS: Personnel Security | Full | Full | Full + FedRAMP | Inc. adds FedRAMP PS family |
| PH: Physical Security | Full | Full | Full + FedRAMP | Inc. adds FedRAMP PE family |
| AL: AI Lifecycle | Full | Full | Full | Shared AIMS |
| AR: AI Risk | Full + EU AI Act | Full + EU AI Act | Full | GmbH/B.V. add EU AI Act obligations |
| AT: AI Transparency | Full + EU AI Act | Full + EU AI Act | Full | GmbH/B.V. add Art.13 obligations |
| AD: AI Data Governance | Full + EU AI Act | Full + EU AI Act | Full | GmbH/B.V. add Art.10 obligations |
| PD: Privacy | Full (GDPR) | Full (GDPR/AVG) | Full (CCPA/CPRA) | Jurisdiction-specific privacy regimes |
| SC: Secure Coding | Full | Full | Full | – |

### 6.4 Evidence Automation Architecture

#### 6.4.1 Evidence Lifecycle

Every compliance control in the UCL requires evidence that the control is implemented and operating effectively. Evidence follows a five-stage lifecycle:

```
Generation --> Validation --> Storage --> Retrieval --> Presentation
    |              |            |            |              |
  CI/CD,        Schema       Immutable    GRC Query     Audit Pack
  Runtime,      check +      evidence     API +         per framework
  Manual        signature    repository   dashboard     (OSCAL, VDA,
                                                         AICPA, etc.)
```

#### 6.4.2 Evidence Schema

Each evidence artifact conforms to a standard schema, enabling automated binding to UCL controls and framework-specific report generation.

```json
{
  "evidenceId": "EVD-2026-02-17-RM001-001",
  "controlIds": ["UCL-RM-001", "UCL-RM-002"],
  "timestamp": "2026-02-17T14:30:00Z",
  "type": "automated",
  "source": {
    "system": "azure-pipelines",
    "pipeline": "verity-ve-main",
    "stage": "sast",
    "artifact": "sha256:a1b2c3d4...",
    "format": "sarif"
  },
  "frameworkMappings": [
    {"framework": "ISO27001", "control": "A.8.29", "clause": "Secure Development Testing"},
    {"framework": "NIS2", "requirement": "Art.21(e)", "measure": "Security in development"},
    {"framework": "TISAX", "control": "5.2", "maturityLevel": 3},
    {"framework": "FedRAMP", "control": "RA-5", "format": "OSCAL"},
    {"framework": "SOC2", "criteria": "CC7.1"}
  ],
  "attestation": {
    "attestor": "system:azure-pipelines-service-principal",
    "signature": "cosign-signature-ref",
    "timestampAuthority": "rfc3161-tsa-ref",
    "validUntil": "2026-05-17T14:30:00Z"
  },
  "retention": {
    "policy": "10-years",
    "classification": "Confidential",
    "justification": "EU AI Act Art.18 requires 10-year retention for AI system providers"
  }
}
```

#### 6.4.3 CI/CD Pipeline Evidence Generation

Each pipeline stage produces structured evidence artifacts mapped to specific UCL controls and framework requirements.

| Pipeline Stage | Evidence Artifact | Format | UCL Controls | Framework Mapping |
|---|---|---|---|---|
| Pre-commit (secret scan) | Secret scan report | JSON | UCL-CR-005 | ISO 27001 A.8.4 |
| Pre-commit (license check) | License compliance report | JSON | UCL-SM-003 | SOC 2 CC9, NIS2 Art.21(d) |
| Build | Signed build manifest | JSON | UCL-SD-008 | FedRAMP CM-3, SOC 2 CC8 |
| Build | SBOM (CycloneDX) | CycloneDX JSON | UCL-SD-009 | NIS2 Art.21(d), FedRAMP SA-4, EU AI Act Art.15 |
| Unit Tests | Test results + coverage | JUnit XML | UCL-SD-010 | ISO 27001 A.8.29, ISO 42001 8.3 |
| SAST | Static analysis findings | SARIF | UCL-SC-001 | NIS2 Art.21(e), TISAX 5.2, FedRAMP RA-5 |
| SCA | Dependency vulnerability report | JSON | UCL-SD-011 | NIS2 Art.21(d), FedRAMP RA-5, SOC 2 CC7 |
| Container Scan | Container vulnerability report | JSON | UCL-OS-004 | FedRAMP RA-5, CM-7 |
| DAST | Dynamic scan results | SARIF | UCL-SC-002 | NIS2 Art.21(e), TISAX 5.2, FedRAMP RA-5 |
| OPA Compliance Checks | Policy evaluation results | JSON | UCL-CA-003 | All frameworks (configurable per policy) |
| Integration Tests | Integration test results | JUnit XML | UCL-SD-012 | ISO 27001 A.8.29 |
| AI Model Validation | Bias/fairness report | Custom JSON | UCL-AR-002 | ISO 42001 A.6, EU AI Act Art.9, Art.10 |
| AI Model Validation | Drift detection report | Custom JSON | UCL-AL-006 | ISO 42001 9.1 |
| AI Model Validation | Explainability scores | Custom JSON | UCL-AT-001 | EU AI Act Art.13, ISO/IEC 12792 |
| Artifact Signing | Signature verification log | Sigstore bundle | UCL-SD-013 | FedRAMP SI-7, SOC 2 CC8 |
| Deployment | Deployment manifest | JSON | UCL-SD-014 | FedRAMP CM-3, SOC 2 CC8 |
| Deployment | Canary metrics snapshot | JSON | UCL-BC-003 | SOC 2 A1 |
| Deployment | Rollback plan evidence | YAML | UCL-SD-015 | ISO 27001 A.5.29 |

#### 6.4.4 Runtime Evidence Collection

Beyond CI/CD, the following runtime systems generate continuous compliance evidence:

| Source | Evidence Type | UCL Controls | Cadence |
|---|---|---|---|
| Azure Policy | Infrastructure compliance state | UCL-OS-001, UCL-CS-002 | Continuous |
| Microsoft Defender for Cloud | Secure Score, vulnerability findings | UCL-SD-011, UCL-OS-004 | Continuous |
| Microsoft Sentinel | Security event correlation, alert records | UCL-IM-001, UCL-CA-004 | Continuous |
| Azure AD / Entra ID | Access reviews, authentication logs | UCL-AC-002, UCL-AC-003 | Quarterly (reviews), continuous (logs) |
| Azure Monitor | SLO compliance, availability metrics | UCL-BC-001, UCL-OS-002 | Continuous |
| MLflow / Azure ML | Model performance metrics, drift signals | UCL-AL-006, UCL-AR-003 | Continuous |

#### 6.4.5 GRC Platform Integration

```
Evidence Sources                    GRC Platform (Hub)               Audit Outputs

CI/CD Pipeline ------+                                           +--> ISO 27001 SoA Pack
                     |         +-----------------------+         |
IaC State -----------+-------->| Evidence Ingestion    |         +--> ISO 42001 SoA Pack
                     |         | API (schema-validated)|         |
Runtime Telemetry ---+         +---------+-------------+         +--> TISAX ISA 6 Pack
                     |                   |                       |    (VDA maturity format)
HR Systems ----------+         +---------v------------+          |
                     |         | UCL Evidence Binding |          +--> SOC 2 Type II Pack
Policy Documents ----+-------->| Engine (control-to-  |----------+    (AICPA TSC format)
                     |         | evidence mapping)    |          |
Azure Policy --------+         +---------+------------+          +--> FedRAMP Pack (OSCAL)
                     |                   |                       |
Vulnerability Mgmt --+         +---------v------------+          +--> NIS2 Pack
                               | Framework Report     |          |    (BSI/NCSC-NL format)
                               | Generators           |----------+
                               +-----------------------+         +--> EU AI Act Pack
                                                                      (Annex IV format)
```

The GRC platform (ServiceNow GRC or Vanta) serves as the evidence hub. All evidence sources push structured evidence via a standardized Evidence Ingestion API. The UCL Evidence Binding Engine maps each artifact to its applicable controls. Framework Report Generators produce audit-ready packages in the format required by each framework.

### 6.5 OSCAL Integration

#### 6.5.1 OSCAL Component Architecture

FedRAMP 20x is fundamentally OSCAL-native. The Helge Heupel Group implements OSCAL as a first-class CI/CD artifact, not a document conversion exercise.

**OSCAL Document Types Maintained:**

| OSCAL Document | Purpose | Generation | Update Cadence |
|---|---|---|---|
| System Security Plan (SSP) | Complete control implementation narrative | Assembled from UCL + component definitions | On change, minimum quarterly |
| Component Definitions | Per-service control implementation | Generated from UCL per service component | On change |
| Assessment Plan (SAP) | 3PAO assessment scope and methodology | Generated for annual assessment | Annual |
| Assessment Results (SAR) | Assessment findings and observations | Generated from automated + manual evidence | Annual (3PAO) + continuous (automated) |
| Plan of Action and Milestones (POA&M) | Open findings and remediation timeline | Generated from GRC platform findings | Continuous |

#### 6.5.2 OSCAL Generation Pipeline

```
UCL YAML Controls
    |
    v
OSCAL Component Definitions (per microservice / infrastructure component)
    |
    +--> oscal-cli validate (CI step)
    |
    v
OSCAL SSP Assembly (merges component definitions + system context)
    |
    +--> oscal-cli validate (CI step)
    +--> oscal-cli resolve-profile (apply FedRAMP Moderate baseline)
    |
    v
OSCAL SSP (machine-readable, JSON format)
    |
    +--> Human-readable SSP rendering (for 3PAO review)
    +--> FedRAMP PMO submission package
    +--> Continuous monitoring evidence feed
```

#### 6.5.3 OSCAL-UCL Binding

Each UCL control with a FedRAMP mapping includes an OSCAL implementation statement template. The OSCAL SSP is assembled by:

1. Resolving the FedRAMP Moderate profile to produce the baseline control catalog.
2. For each baseline control, looking up the corresponding UCL control(s).
3. Rendering the UCL control's implementation description as an OSCAL `implemented-requirement` with `by-component` entries for each service component.
4. Attaching evidence references as OSCAL `resources` linked to the evidence store.

This ensures the SSP is always current with the UCL and evidence store, eliminating manual SSP maintenance.

#### 6.5.4 OSCAL Validation in CI

Every pull request that modifies UCL controls with FedRAMP mappings triggers OSCAL validation:

- `oscal-cli validate` confirms schema conformance.
- `oscal-cli resolve-profile` confirms all FedRAMP Moderate baseline controls have implementation statements.
- A gap report identifies any baseline controls without corresponding UCL entries.

### 6.6 Audit Readiness Framework

#### 6.6.1 Integrated Audit Calendar

The audit calendar is sequenced to maximize evidence reuse. Each subsequent audit builds on evidence generated for prior audits, reducing duplicative collection by an estimated 40-60%.

**Year 1 (Foundation):**

| Month | Activity | Framework | Evidence Reuse |
|---|---|---|---|
| Jan | Internal audit (ISMS + AIMS scope) | ISO 27001, ISO 42001 | Baseline |
| Feb | Management review (all frameworks) | All | Jan internal audit |
| Mar | SOC 2 Type I readiness review | SOC 2 | Jan-Feb evidence |
| Apr-Jun | SOC 2 Type I audit window | SOC 2 | Internal audit results |
| Jul | TISAX readiness review | TISAX | SOC 2 + ISO evidence |
| Sep | FedRAMP 20x readiness assessment | FedRAMP | All prior OSCAL evidence |
| Oct | ISO 27001 Stage 1 + Stage 2 certification | ISO 27001 | Internal audit + all evidence |
| Nov | ISO 42001 Stage 1 + Stage 2 certification | ISO 42001 | Internal audit + all evidence |
| Dec | EU AI Act conformity self-assessment | EU AI Act | All prior evidence |

**Year 2 (Expansion):**

| Month | Activity | Framework | Evidence Reuse |
|---|---|---|---|
| Jan | Internal audit (expanded scope) | ISO 27001, ISO 42001 | Year 1 baseline |
| Feb | Management review | All | Jan internal audit |
| Mar | SOC 2 Type II audit period begins | SOC 2 | Internal audit results |
| May | TISAX assessment (ENX-accredited) | TISAX | SOC 2 + ISO evidence |
| Jul | FedRAMP 20x authorization submission | FedRAMP | All OSCAL evidence |
| Sep | SOC 2 Type II audit period ends + report | SOC 2 | 12-month evidence |
| Oct | ISO 27001 surveillance audit | ISO 27001 | Internal audit + all evidence |
| Nov | ISO 42001 surveillance audit | ISO 42001 | Internal audit + all evidence |
| Dec | EU AI Act Annex IV documentation update | EU AI Act | All prior evidence |

**Year 3 and Ongoing (Steady State):**

| Activity | Cadence | Notes |
|---|---|---|
| Internal audit (ISMS + AIMS) | Annual (January) | Foundation for all external audits |
| Management review | Annual minimum, quarterly recommended | Mandatory inputs/outputs per Cl.9.3 |
| SOC 2 Type II | Annual | Continuous evidence collection |
| TISAX renewal | Every 3 years | Evidence refreshed continuously |
| FedRAMP annual assessment (3PAO) | Annual | Monthly ConMon between assessments |
| ISO 27001 surveillance | Annual | Recertification every 3 years |
| ISO 42001 surveillance | Annual | Recertification every 3 years |
| NIS2 supervisory readiness | Continuous | Quarterly incident reporting test |
| EU AI Act conformity review | Annual + on material change | Annex IV documentation maintained continuously |

#### 6.6.2 Internal Audit Program

Per ISO 27001 Clause 9.2 and ISO 42001 Clause 9.2, the internal audit program defines:

- **Scope:** All UCL domains applicable to each entity, covering both ISMS and AIMS.
- **Criteria:** UCL control objectives, framework-specific requirements, and organizational policies.
- **Frequency:** Annual comprehensive audit; targeted audits triggered by material changes or incidents.
- **Methodology:** Risk-based audit planning. High-risk domains audited annually; lower-risk domains on a rolling three-year cycle.
- **Auditor Competence:** Internal auditors must hold ISO 27001 Lead Auditor or equivalent certification. AI-related audits require ISO 42001 familiarity. Auditors must be independent of the area being audited.
- **Reporting:** Audit findings classified as Major Nonconformity, Minor Nonconformity, Observation, or Opportunity for Improvement. Findings entered into GRC platform with assigned owners and remediation deadlines.

#### 6.6.3 Evidence Freshness Requirements

Each framework has distinct expectations for evidence currency. The UCL enforces the most stringent applicable requirement per control.

| Framework | Maximum Evidence Age | Automated Alert Threshold |
|---|---|---|
| ISO 27001 | 12 months (annual audit cycle) | 90 days before expiry |
| ISO 42001 | 12 months (annual audit cycle) | 90 days before expiry |
| TISAX | 12 months (continuous refresh expected) | 60 days before expiry |
| SOC 2 Type II | Rolling 12-month period | 30 days (must be within audit window) |
| NIS2 | Current (supervisory audit at any time) | Evidence older than 90 days flagged |
| FedRAMP | Monthly (ConMon), annual (3PAO) | 30 days for ConMon evidence |
| EU AI Act | Current (market surveillance at any time) | Evidence older than 90 days flagged |

#### 6.6.4 Pre-Audit Readiness Checklist

Before each external audit, the following readiness verification is completed:

- All UCL controls in scope have evidence within freshness thresholds.
- Management review completed within past 12 months with all mandatory inputs addressed (ISO 27001 Cl.9.3.2: 9 mandatory inputs) and outputs documented (Cl.9.3.3: 3 mandatory outputs).
- Internal audit completed within past 12 months with all Major findings closed.
- All prior audit findings closed or documented in POA&M with approved remediation timelines.
- Statement of Applicability (ISO 27001) and AI System Registry (ISO 42001) current.
- Key personnel identified and available during audit window.
- Evidence packages assembled in framework-specific format.
- System description and scope documentation reviewed and current.
- Risk register reviewed and updated within past 6 months.

### 6.7 Twenty-Nine ISO Standards Integration Map

The following table maps each of the 29 ISO/IEC documents in the reference library to the seven certification frameworks, classifying each as Normative (N), Informative (I), or Not Applicable (--).

#### 6.7.1 Core Management System Standards

| # | Standard | Title | ISO 27001 | ISO 42001 | TISAX | SOC 2 | NIS2 | FedRAMP | EU AI Act | SDLC Section |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | ISO/IEC 27001:2022 | ISMS Requirements | N (direct) | I | N (basis) | I | I | I | – | 6, 9 |
| 2 | ISO/IEC 27001:2022 Amd 1 | Climate Change | N (direct) | – | – | – | – | – | – | 6.2 |
| 3 | ISO/IEC 42001:2023 | AIMS Requirements | I | N (direct) | – | – | – | – | I | 6, 8 |

#### 6.7.2 AI Lifecycle and Engineering Standards

| # | Standard | Title | ISO 27001 | ISO 42001 | TISAX | SOC 2 | NIS2 | FedRAMP | EU AI Act | SDLC Section |
|---|---|---|---|---|---|---|---|---|---|---|
| 4 | ISO/IEC 5338:2023 | AI Lifecycle Processes | – | N | – | – | – | – | I | 7, 8 |
| 5 | ISO/IEC 5339:2024 | AI Lifecycle Guidelines | - | I | – | – | – | – | I | 7, 8 |
| 6 | ISO/IEC 23053:2022 | AI/ML Framework | – | I | – | – | – | – | I | 8 |
| 7 | ISO/IEC 5392:2024 | AI Reference Architecture | – | I | – | – | – | – | I | 8 |
| 8 | ISO/IEC TS 42119-2:2025 | AIMS Guidance | – | N (companion) | – | – | – | – | – | 6, 8 |

#### 6.7.3 AI Risk, Ethics, and Governance Standards

| # | Standard | Title | ISO 27001 | ISO 42001 | TISAX | SOC 2 | NIS2 | FedRAMP | EU AI Act | SDLC Section |
|---|---|---|---|---|---|---|---|---|---|---|
| 9 | ISO/IEC 23894:2023 | AI Risk Management | – | N | – | – | – | – | I | 6, 8 |
| 10 | ISO/IEC 38507:2022 | Governance of AI | – | I | – | – | – | – | I | 5, 8 |
| 11 | ISO/IEC TR 24027:2021 | AI Bias | – | I | – | – | – | – | I | 7, 8 |
| 12 | ISO/IEC TR 24368:2022 | AI Ethics | – | I | – | – | – | – | I | 8 |
| 13 | ISO/IEC TR 24372:2021 | AI Computation | – | I | – | – | – | – | – | 8 |
| 14 | ISO/IEC 12792:2024 | AI Transparency | – | I | – | – | – | – | N (Art.13) | 6, 8 |

#### 6.7.4 AI Cybersecurity

| # | Standard | Title | ISO 27001 | ISO 42001 | TISAX | SOC 2 | NIS2 | FedRAMP | EU AI Act | SDLC Section |
|---|---|---|---|---|---|---|---|---|---|---|
| 15 | ISO/IEC DIS 27090 | AI Cybersecurity | I | I | – | – | I | I | I (Art.15) | 9 |

#### 6.7.5 Information Security Foundations

| # | Standard | Title | ISO 27001 | ISO 42001 | TISAX | SOC 2 | NIS2 | FedRAMP | EU AI Act | SDLC Section |
|---|---|---|---|---|---|---|---|---|---|---|
| 16 | ISO/IEC 27000:2018 | ISMS Vocabulary | N | I | I | – | – | – | – | Glossary |
| 17 | ISO/IEC 27032:2023 | Cybersecurity Guidelines | I | – | – | – | I | I | – | 9 |

#### 6.7.6 AI Terminology

| # | Standard | Title | ISO 27001 | ISO 42001 | TISAX | SOC 2 | NIS2 | FedRAMP | EU AI Act | SDLC Section |
|---|---|---|---|---|---|---|---|---|---|---|
| 18 | ISO/IEC 22989:2022 | AI Concepts and Terminology | – | N | – | – | – | – | I | Glossary, 8 |

#### 6.7.7 Process Assessment Standards

| # | Standard | Title | ISO 27001 | ISO 42001 | TISAX | SOC 2 | NIS2 | FedRAMP | EU AI Act | SDLC Section |
|---|---|---|---|---|---|---|---|---|---|---|
| 19 | ISO/IEC 33001:2015 | Process Assessment Concepts | I | I | I | I | – | – | – | 10, 12 |
| 20 | ISO/IEC 33002:2015 | Process Assessment Requirements | I | I | I | I | – | – | – | 10 |
| 21 | ISO/IEC TR 33017:2021 | Process Assessment Guide | I | I | – | – | – | – | – | 10 |
| 22 | ISO/IEC TS 33030:2017 | Process Assessment Example | I | I | – | – | – | – | – | 10 |
| 23 | ISO/IEC TS 33060:2020 | Software Lifecycle Assessment | I | I | – | – | – | – | – | 7, 10 |
| 24 | ISO/IEC TS 33061:2021 | Systems Engineering Assessment | I | I | – | – | – | – | – | 7, 10 |
| 25 | ISO/IEC TR 20226:2025 | Assessment Context | I | I | – | – | – | – | – | 10 |

#### 6.7.8 Risk Management Standards

| # | Standard | Title | ISO 27001 | ISO 42001 | TISAX | SOC 2 | NIS2 | FedRAMP | EU AI Act | SDLC Section |
|---|---|---|---|---|---|---|---|---|---|---|
| 26 | ISO 31000 | Risk Management | N (ref) | N (ref) | I | I | I | I | I | 6, 8 |
| 27 | IEC 31010:2019 | Risk Assessment Techniques | N (ref) | N (ref) | – | – | – | – | – | 6, 8 |

#### 6.7.9 Sector-Specific and Small Entity Standards

| # | Standard | Title | ISO 27001 | ISO 42001 | TISAX | SOC 2 | NIS2 | FedRAMP | EU AI Act | SDLC Section |
|---|---|---|---|---|---|---|---|---|---|---|
| 28 | ISO 34504:2024 | Road Vehicles AI Testing | – | – | I (if auto AI) | – | – | – | – | 7 (conditional) |
| 29 | ISO/IEC TR 29110-3-1:2020 | VSE Lifecycle Profiles | I | I | – | – | – | – | – | 7 |

#### 6.7.10 Integration Summary

| Framework | Normative Standards | Informative Standards | Total |
|---|---|---|---|
| ISO 27001 | 27001, 27001 Amd 1, 27000, 31000, 31010 | 27032, 27090, 33001-33061, 29110 | 17 |
| ISO 42001 | 42001, 42119-2, 5338, 23894, 22989, 31000, 31010 | 5339, 23053, 5392, 38507, 24027, 24368, 24372, 12792, 27090, 33001-33061, 29110 | 25 |
| TISAX | 27001 (basis) | 27000, 33001-33002, 34504 | 5 |
| SOC 2 | – | 33001-33002, 31000 | 3 |
| NIS2 | – | 27032, 27090, 31000 | 3 |
| FedRAMP | – | 27032, 27090, 31000 | 3 |
| EU AI Act | 12792 (Art.13 transparency) | 42001, 5338, 5339, 23053, 5392, 23894, 38507, 24027, 24368, 27090, 31000 | 12 |

ISO 42001 draws on 25 of 29 standards (the most standards-intensive framework), confirming AI governance as the most normatively demanding certification target.

### 6.8 Normative References

> **Note:** For the complete normative reference list, see Appendix B. This section provides a summary of reference categories and the national transposition references specific to entity applicability.

#### 6.8.1 Reference Category Summary

| Category | Count | Key Standards |
|---|---|---|
| Primary Certifiable Standards | 8 | ISO 27001, ISO 42001, TISAX ISA 6, SOC 2, NIS2, FedRAMP, EU AI Act |
| AI Lifecycle and Engineering | 5 | ISO 5338, ISO 5339, ISO 23053, ISO 5392, ISO 42119-2 |
| AI Risk, Ethics, Transparency, and Governance | 7 | ISO 23894, ISO 22989, ISO 38507, ISO 12792, ISO 24027, ISO 24368, ISO 24372 |
| Information Security and Cybersecurity | 3 | ISO 27000, ISO 27032, ISO 27090 |
| Risk Management | 2 | ISO 31000, IEC 31010 |
| Process Assessment | 7 | ISO 33001, ISO 33002, ISO 33017, ISO 33030, ISO 33060, ISO 33061, ISO 20226 |
| Sector-Specific and Supplementary | 8 | ISO 34504, ISO 29110, COSO, SAFe 6.0, NIST OSCAL, FedRAMP 20x, OWASP, CycloneDX/SPDX |
| **Total** | **40** | |

#### 6.8.2 National Transposition References

| Reference | Jurisdiction | Applicable Entity |
|---|---|---|
| NIS-2-Umsetzungs- und Cybersicherheitsstärkungsgesetz (NIS2UmsuCG, German NIS2 transposition) | Germany | HH GmbH |
| Wet beveiliging netwerk- en informatiesystemen (Dutch NIS2 transposition) | Netherlands | HH B.V. |
| CCPA / CPRA (California privacy) | United States | HH Inc. |
| BSI reporting templates | Germany | HH GmbH |
| NCSC-NL reporting templates | Netherlands | HH B.V. |

---
## 7. Organizational Model: SAFe 6.0 Adapted

### 7.1 Scaling Configuration

The organizational model adapts to the Progressive Adoption Model (Section 4). SAFe 6.0 is the target operating model for the Enterprise phase. Earlier phases adopt SAFe elements selectively, governed by the Minimum Viable Governance principle.

### 7.2 Phase A: Startup Organization

```
┌─────────────────────────────────────────────────┐
│              SINGLE TEAM                        │
│                                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────────┐   │
│  │ CTO      │  │ Product  │  │ Engineers    │   │
│  │ (Strategy│  │ Owner    │  │ (3-8 humans) │   │
│  │  + Tech) │  │          │  │              │   │
│  └──────────┘  └──────────┘  └──────────────┘   │
│                                                 │
│  ┌──────────────────────────────────────────┐   │
│  │         AI TEAMMATES                     │   │
│  │  AI Code Partner · AI Test Partner ·     │   │
│  │  AI Documentation Partner                │   │
│  └──────────────────────────────────────────┘   │
│                                                 │
│  ┌──────────────────────────────────────────┐   │
│  │  Security/Compliance Advisor (fractional)│   │
│  └──────────────────────────────────────────┘   │
└─────────────────────────────────────────────────┘
```

**Key roles:**
- **CTO:** Single point of accountability for strategy, architecture, security posture, and AI governance. Makes all gate decisions with Product Owner.
- **Product Owner:** Customer discovery, backlog ownership, WSJF scoring, acceptance decisions.
- **Engineers:** Full-stack development, infrastructure, AI/ML. Each engineer is expected to own multiple concerns (no narrow specialization at this phase).
- **Security/Compliance Advisor:** External or fractional role. Reviews threat models monthly, advises on compliance roadmap, validates risk register.

### 7.3 Phase B: Growth Organization – Single ART

```
┌──────────────────────────────────────────────────────────────┐
│                    SINGLE ART                                │
│  RTE: Release Train Engineer                                 │
│                                                              │
│  ┌─────────────────┐  ┌─────────────────┐  ┌──────────────┐  │
│  │ Platform Team   │  │ VE Feature Team │  │ EAM Feature  │  │
│  │                 │  │                 │  │ Team         │  │
│  │ PO              │  │ PO              │  │ PO           │  │
│  │ SM              │  │ SM              │  │ SM           │  │
│  │ 3-5 Engineers   │  │ 3-5 Engineers   │  │ 3-5 Engineers│  │
│  │ AI Teammates    │  │ AI Teammates    │  │ AI Teammates │  │
│  └─────────────────┘  └─────────────────┘  └──────────────┘  │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐  │
│  │ Cross-Cutting Roles                                    │  │
│  │ Security Champion (full-time) · AI Ethics Champion     │  │
│  │ (full-time) · System Architect                         │  │
│  └────────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐  │
│  │ Governance: Technical Governance (bi-weekly) +         │  │
│  │             Portfolio Governance (monthly)             │  │
│  └────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
```

**Platform Team responsibilities:** Authentication, data layer, AI inference infrastructure, CI/CD pipeline, compliance automation, shared component library.

**Security Champion:** Full-time role (not 0.5 FTE). Owns threat modeling process, maintains security backlog, reviews all security-sensitive changes, attends Technical Governance, leads security training. Reports functionally to CTO on security matters.

**AI Ethics Champion:** Full-time role. Owns AI risk assessment process, maintains AI system register, reviews AI feature impact assessments, attends Technical Governance, ensures ISO 42001 compliance. Reports functionally to CTO on AI governance matters.

### 7.4 Phase C: Enterprise Organization – Dual ART

```
┌────────────────────────────────────────────────────────────────────┐
│                  LEAN PORTFOLIO MANAGEMENT                         │
│  CTO · VMO · CISO · AI Governance Board Chair                      │
│  Portfolio Kanban: Funnel → Review → Analyze → Backlog → Implement │
└──────────────┬──────────────────────────────────┬──────────────────┘
               │                                  │
    ┌──────────▼─────────-──┐          ┌──────────▼────────-───┐
    │   ART VERITY VE       │          │   ART VERITY EAM      │
    │   RTE · Sys Architect │          │   RTE · Sys Architect │
    │                       │          │                       │
    │   3-5 Feature Teams   │          │   3-5 Feature Teams   │
    │   (7-8 per team       │          │   (7-8 per team       │
    │    incl. AI teammates)│          │    incl. AI teammates)│
    │                       │          │                       │
    │   Security Champion   │          │   Security Champion   │
    │   AI Ethics Champion  │          │   AI Ethics Champion  │
    └───────────────────────┘          └───────────────────────┘

    ┌────────────────────────────────────────────────────────────┐
    │ SHARED PLATFORM TEAM (reports to both ARTs)                │
    │ Auth · Data Layer · AI Inference · CI/CD · Compliance Auto │
    └────────────────────────────────────────────────────────────┘

    ┌────────────────────────────────────────────────────────────┐
    │ GOVERNANCE BODIES                                          │
    │ AI Governance Board (monthly) · CAB (weekly)               │
    │ Security Review Board (bi-weekly)                          │
    │ Compliance Steering Committee (monthly)                    │
    │ Architecture Review Board (bi-weekly)                      │
    └────────────────────────────────────────────────────────────┘
```

**Team composition (per cross-functional team in Enterprise phase):**
- Product Owner
- Scrum Master / Team Coach
- 3-5 Engineers (full-stack, platform, ML/AI)
- 1 Quality Engineer
- AI Teammates: AI Code Partner, AI Test Partner, AI Compliance Partner, AI Documentation Partner
- Security Champion responsibility overlay (one engineer per team participates in security guild)
- AI Ethics Champion responsibility overlay (one engineer per team participates in AI governance guild)

### 7.5 AI Teammate Roles

AI teammates are AI agents that fill defined organizational roles. They are first-class team members with explicit trust levels, autonomy boundaries, review requirements, and escalation paths. Their operating parameters are governed by the Intent-Execution Architecture (Section 8) and the AI Integration Policy (Section 10).

| AI Teammate Role | Primary Function | Trust Level (IEA) | Autonomy Boundary | Human Supervisor | Review Cadence |
|---|---|---|---|---|---|
| **AI Code Partner** | Code generation, refactoring suggestions, code review assistance | Level 2: Supervised Autonomous | May generate code proposals and review comments. All outputs require human review before merge. Must not generate auth, crypto, or PII-handling code without explicit human design. | Tech Lead | Every PR (real-time) |
| **AI Test Partner** | Test case generation, test execution, coverage analysis, edge case discovery | Level 3: Conditional Autonomous | May generate and execute tests autonomously. Test plans require human review. May flag failing tests and suggest fixes. Must not modify production test configurations without approval. | QA Lead / Tech Lead | Weekly test plan review |
| **AI Compliance Partner** | Compliance check execution, evidence collection, control mapping validation, audit trail generation | Level 2: Supervised Autonomous | May execute automated compliance checks and collect evidence. Compliance gap findings require human triage. Must not modify compliance policies or accept risk on behalf of the organization. | Security Champion / CTO | Bi-weekly compliance review |
| **AI Documentation Partner** | Documentation generation from code and commit history, API docs, runbook drafts | Level 3: Conditional Autonomous | May generate and update documentation autonomously. Architecture documentation and customer-facing content require human review. May publish internal technical docs after automated quality check. | Tech Lead | Monthly quality review |

**AI Teammate Operating Principles:**
1. AI teammates are tracked in the team roster with their role, trust level, and supervisor.
2. AI teammate outputs are subject to the same Definition of Done as human outputs – with the additional requirement of human review at the cadence specified above.
3. AI teammate autonomy levels may be raised or lowered based on performance metrics (Human Override Rate, defect rate of AI-generated outputs). Autonomy changes require CTO approval.
4. AI teammates do not attend ceremonies but their outputs are represented by their human supervisor.
5. AI teammate uptime and availability are tracked as operational metrics (target: 99.9%).
6. When an AI teammate is unavailable, the human supervisor assumes the responsibilities and flags the capacity gap in the daily standup.

### 7.6 Human-AI Team Composition by Phase

| Phase | Typical Human Count | AI Teammate Roles Active | Effective Team Capacity |
|---|---|---|---|
| **A: Startup** | 5-15 humans | AI Code Partner, AI Test Partner, AI Documentation Partner | Humans focus on architecture, customer interaction, strategic decisions. AI handles code drafting, test generation, documentation. |
| **B: Growth** | 20-60 humans | All four AI teammate roles | Each team has 1-2 AI teammates supplementing human capacity. AI Compliance Partner activated to handle growing compliance burden. |
| **C: Enterprise** | 80+ humans | All four AI teammate roles per team | Full human-AI team integration. AI teammates contribute ~30-40% of code review, test generation, compliance evidence, and documentation output. |

---
## 8. Intent-Execution Architecture v2

### 8.1 Architecture Overview

The Intent-Execution Architecture (IEA) is the central governance mechanism for all AI
interactions – both AI-assisted development tooling and AI as a product feature – within
the Helge Heupel Group. It resolves the fundamental tension between AI's probabilistic
nature and enterprise software's requirement for deterministic, auditable behavior.

**Core Principle (retained from v1):** The LLM is untrusted and probabilistic. The
execution layer is trusted and deterministic. The Intent Contract is the bridge – the
typed, versioned, schema-validated unit of governance that carries an AI proposal from
the probabilistic domain into the deterministic domain through a graduated trust
escalation pipeline.

**What changes in v2:** The binary trusted/untrusted model is replaced with a 7-level
graduated trust scale (Section 8.2). The five-layer linear flow is extended with four
new components (AI Gateway, Data Pipeline Manager, Model Lifecycle Manager, Feedback
Loop Engine) and restructured into a dual-view architecture. Feedback loops close the
strategy-as-code loop. The Intent Contract schema gains provenance, lineage, and
compositional risk tracking.

#### 8.1.1 Dual-View Architecture

The IEA v2 is specified through two complementary architectural views. Both views
describe the same system; they are lenses, not layers.

**View 1 – Trust-Flow View:** How data moves from untrusted AI output to attested,
compliant execution. This is the governance view. It answers: "At what trust level is
this artifact, and what must happen before it can advance?"

**View 2 – ISO 5392 Functional Decomposition View:** How the system is decomposed
into functional components per ISO/IEC 5392:2024. This is the engineering view. It
answers: "What functional capability handles this concern, and how do the capabilities
interact?"

#### View 1: Trust-Flow Architecture

```
  TRUST LEVEL 0               TRUST LEVEL 1            TRUST LEVELS 2-3
  (Untrusted)                 (Syntax-Validated)       (Policy-Checked)
 +-----------------------+   +--------------------+   +---------------------+
 |  INTENT CAPTURE LAYER |   |  AI GATEWAY /      |   |  POLICY GATEWAY     |
 |                       +-->|  LLM PROXY         +-->|                     |
 | NL input -> structured|   |                    |   | GRC Engine          |
 | intent -> raw intent  |   | Route, validate,   |   | Auth & RBAC         |
 | object                |   | redact, classify,  |   | Compliance Rules    |
 |                       |   | rate-limit, log    |   | AI Risk Checks      |
 +-----------------------+   +--------------------+   | Confidence Thresh.  |
                                                      +----------+----------+
                                                                 |
                                                                 v
                              TRUST LEVEL 4            TRUST LEVEL 3
                              (Human-Approved)         (Peer-Reviewed)
                             +------------------+      +--------------------+
                             | HUMAN-IN-THE-    |<----+| if risk >= High.   |
                             | LOOP GATE        |      | or HITL mandatory  |                           
                             |                  |      |                    |
                             | Approve / Reject |      |(auto-advance if.   | 
                             | / Modify         |      |risk Low/Medium     |    
                             +--------+---------+      |with post-hoc       |
                                      |                |review within 24h)  |
                                      v                +--------------------+
                             TRUST LEVEL 5
                             (Verified)
 +--------------------------------------------------------------------+
 |              WORKFLOW ORCHESTRATOR                                 |
 |  Deterministic execution of validated intents                      |
 |  +----------------+  +----------------+  +-----------------------+ |
 |  | Code Gen       |  | Test Gen       |  | Deployment            | |
 |  | (verified)     |  | (verified)     |  | Orchestration         | |
 |  +----------------+  +----------------+  +-----------------------+ |
 +-------------------------------+------------------------------------+
                                 |
                                 v
                             TRUST LEVEL 6
                             (Attested)
 +--------------------------------------------------------------------+
 |           VERIFICATION & ATTESTATION                               |
 |  +----------------+  +----------------+  +-----------------------+ |
 |  | Output         |  | Compliance     |  | Audit Trail           | |
 |  | Validation     |  | Attestation    |  | (immutable, signed)   | |
 |  +----------------+  +----------------+  +-----------------------+ |
 +--------------------------------------------------------------------+
         |                                           |
         |              FEEDBACK LOOPS               |
         +---------->  +---------------------+  <----+
                       | FEEDBACK LOOP       |
                       | ENGINE              |
                       | Verification->Model |
                       | Outcomes->Data      |
                       | Overrides->Policy   |
                       +---------------------+
```

#### View 2: ISO 5392 Functional Decomposition

```
 +===================================================================+
 |                    AI GOVERNANCE FUNCTION                          |
 |  Policy enforcement | Audit logging | Compliance | Risk mgmt      |
 +===================================================================+
       |            |             |              |             |
 +----------+ +----------+ +------------+ +-----------+ +----------+
 | DATA     | | MODEL    | | AI ORCH-   | | AI        | | INFRA-   |
 | MGMT     | | MGMT     | | ESTRATION  | | SERVICE   | | STRUCTURE|
 | FUNCTION | | FUNCTION | | FUNCTION   | | FUNCTION  | | FUNCTION |
 |          | |          | |            | |           | |          |
 | Ingest   | | Train    | | Pipeline   | | API       | | Compute  |
 | Store    | | Evaluate | | orchestr.  | | exposure  | | (train)  |
 | Process  | | Serve    | | Workflow   | | Request   | | Compute  |
 | Version  | | Version  | | mgmt       | | handling  | | (infer)  |
 | Govern   | | Monitor  | | Resource   | | Response  | | Storage  |
 | Dispose  | | Retire   | | allocation | | format    | | Network  |
 +----------+ +----------+ +------------+ +-----------+ +----------+
       |            |             |              |             |
 +===================================================================+
 |              CROSS-CUTTING CONCERNS (ISO 5392 Clause 7)           |
 |  Trustworthiness | Interop | Performance | Scalability | Maint.   |
 +===================================================================+
```

#### View Mapping: Trust-Flow to Functional Decomposition

| Trust-Flow Component    | ISO 5392 Function(s) Involved                      |
|-------------------------|----------------------------------------------------|
| Intent Capture Layer    | AI Service, Data Mgmt (prompt assembly, context)   |
| AI Gateway / LLM Proxy  | AI Orchestration, AI Governance, Infrastructure    |
| Policy Gateway          | AI Governance (primary), AI Orchestration          |
| Human-in-the-Loop Gate  | AI Governance (oversight), AI Service (UI)         |
| Workflow Orchestrator   | AI Orchestration (primary), Infrastructure         |
| Verification & Attest.  | AI Governance, Model Mgmt (evaluation hooks)       |
| Feedback Loop Engine    | Data Mgmt, Model Mgmt, AI Governance               |
| Data Pipeline Manager   | Data Mgmt (primary), Infrastructure                |
| Model Lifecycle Manager | Model Mgmt (primary), AI Orchestration, Infra      |

### 8.2 Graduated Trust Scale

#### 8.2.1 Seven-Level Trust Model

The binary trusted/untrusted model of IEA v1 is replaced with a 7-level graduated
trust scale. Each level corresponds to a specific validation state, defines the
allowable actions for artifacts at that level, and maps to the three-tier AI
classification from Section 10.1 of the SDLC (Assistant / Collaborator / Decision Support).

| Level | Name             | Validation State                                      | Audit Depth |
|-------|------------------|-------------------------------------------------------|-------------|
| 0     | Untrusted        | Raw LLM output; no validation applied                 | Full log    |
| 1     | Syntax-Validated | Parseable; conforms to Intent Contract JSON Schema    | Full log    |
| 2     | Policy-Checked   | Passes all GRC, auth, compliance, and AI risk rules   | Full log    |
| 3     | Peer-Reviewed    | Reviewed by AI peer or human peer (low/medium risk)   | Summary     |
| 4     | Human-Approved   | Explicit human sign-off by authorized approver        | Summary     |
| 5     | Verified         | Deterministic test suite passed; output validated     | Hash + sig  |
| 6     | Attested         | Cryptographically signed; evidence archived; immutable| Hash + sig  |

#### 8.2.2 Trust Level to AI Classification Mapping

| AI Classification              | Minimum Trust for Auto-Execute | Minimum Trust for Production | HITL Required? |
|--------------------------------|--------------------------------|------------------------------|----------------|
| Tier 1: AI as Assistant        | Level 2 (Policy-Checked)       | Level 5 (Verified)           | Post-hoc 24h   |
| Tier 2: AI as Collaborator     | Level 3 (Peer-Reviewed)        | Level 5 (Verified)           | Pre-execution  |
| Tier 3: AI as Decision Support | Level 4 (Human-Approved)       | Level 6 (Attested)           | Mandatory       |

#### 8.2.3 Minimum Trust Level by Action Type

| Action                                            | Min Trust | Rationale                              |
|---------------------------------------------------|-----------|----------------------------------------|
| Code autocompletion suggestion displayed          | Level 0   | Display only; no execution             |
| AI-generated documentation merged                 | Level 2   | Low risk; policy checks sufficient     |
| AI-generated unit test committed                  | Level 3   | Peer review catches oracle problems    |
| AI-generated application code committed           | Level 4   | Human approval for production code     |
| AI-modified auth/crypto/PII code committed        | Level 4   | HITL mandatory per Section 8.6.2       |
| Deployment to staging                             | Level 5   | Deterministic verification required    |
| Deployment to production                          | Level 6   | Full attestation with evidence archive |
| AI model weight or prompt template update         | Level 6   | HITL + attestation mandatory           |
| Cross-entity data flow initiated                  | Level 6   | Regulatory + contractual compliance    |

### 8.3 Component Model v2

#### 8.3.1 Component Inventory

IEA v2 retains the five original components from v1 and adds four new components to
address gaps identified against ISO 5338, ISO 5392, ISO 23053, and ISO 23894.

**Retained components:**
1. Intent Capture Layer
2. Policy Gateway
3. Human-in-the-Loop Gate
4. Workflow Orchestrator
5. Verification & Attestation

**New components (v2):**
6. AI Gateway / LLM Proxy (Section 8.5)
7. Data Pipeline Manager (per ISO 5338 data management process)
8. Model Lifecycle Manager (per ISO 5338 ML model engineering process)
9. Feedback Loop Engine (closing the strategy-as-code loop)

#### 8.3.2 Component Diagram with Data Flows

```
                        +------------------+
                        |   EXTERNAL       |
                        |   INPUTS         |
                        | (user NL, API,   |
                        |  system events)  |
                        +--------+---------+
                                 |
                                 v
 +---------------------------------------------------------------+
 | 1. INTENT CAPTURE LAYER                                       |
 |    +---------------+  +----------------+  +----------------+  |
 |    | Prompt        |  | LLM Inference  |  | Output Parser  |  |
 |    | Constructor   |  | (via Gateway)  |  | & Confidence   |  |
 |    |               +->|                +->| Scorer         |  |
 |    | context +     |  | model select,  |  |                |  |
 |    | template +    |  | temperature,   |  | raw -> Intent  |  |
 |    | user input    |  | parameters     |  | Contract (L0)  |  |
 |    +-------+-------+  +-------+--------+  +-------+--------+  |
 |            |                   |                    |         |
 +---------------------------------------------------------------+
              |                   |                    |
              |  +----------------+--------------------+
              |  |
              v  v
 +---------------------------------------------------------------+
 | 6. AI GATEWAY / LLM PROXY  (NEW)                              |
 |                                                               |
 |  +----------+  +--------+  +---------+  +--------+  +-------+ |
 |  | Router & |  | PII    |  | Prompt  |  | Cost & |  | Obs.  | |
 |  | Rate     |  | Detect |  | Inject. |  | Quota  |  | & Log | |
 |  | Limiter  |  | Redact |  | Defense |  | Track  |  |       | |
 |  +----------+  +--------+  +---------+  +--------+  +-------+ |
 |                                                               |
 |  Schema validation -> Intent Contract promoted to Level 1     |
 +------------------------------+--------------------------------+
                                |
                                v
 +---------------------------------------------------------------+
 | 2. POLICY GATEWAY                                             |
 |                                                               |
 |  +-----------+ +----------+ +--------------+ +--------------+ |
 |  | GRC       | | Auth &   | | Compliance   | | AI Risk      | |
 |  | Engine    | | RBAC     | | Rule Engine  | | Assessor     | |
 |  | ISO 42001 | | Zero     | | NIS2, TISAX  | | (NEW)        | |
 |  | SOC 2     | | Trust    | | FedRAMP      | | Data quality | |
 |  | EU AI Act | |          | | as exec.     | | Model health | |
 |  |           | |          | | policy       | | Confidence   | |
 |  |           | |          | |              | | threshold    | |
 |  |           | |          | |              | | Adversarial  | |
 |  |           | |          | |              | | detect       | |
 |  +-----------+ +----------+ +--------------+ +--------------+ |
 |                                                               |
 |  Policy pass -> Intent Contract promoted to Level 2           |
 |  + Peer review (AI or human) -> Level 3                       |
 +------------------------------+--------------------------------+
                                |
               +----------------+----------------+
               |                                 |
               v (risk >= High                   v (risk Low/Med)
 +---------------------------+     +--------------------------+
 | 3. HUMAN-IN-THE-LOOP GATE |     | Auto-advance to Level 3  |
 |                           |     | (post-hoc review 24h)    |
 | Approve / Reject / Modify |     +-----------+--------------+
 | -> Level 4 on approval    |                 |
 +------------+--------------+                 |
              |                                |
              +----------------+---------------+
                               |
                               v
 +----------------------------------------------------------------+
 | 4. WORKFLOW ORCHESTRATOR                                       |
 |                                                                |
 |  +-------------+ +-------------+ +---------------------------+ |
 |  | Code Gen    | | Test Gen    | | Deployment Orchestration  | |
 |  | (verified)  | | (verified)  | | (verified)                | |
 |  +-------------+ +-------------+ +---------------------------+ |
 |                                                                |
 |  Execution + test pass -> Level 5                              |
 +------------------------------+---------------------------------+
                                |
                                v
 +----------------------------------------------------------------+
 | 5. VERIFICATION & ATTESTATION                                  |
 |                                                                |
 |  +--------------+ +----------------+ +-----------------------+ |
 |  | Output       | | Compliance     | | Audit Trail           | |
 |  | Validation   | | Attestation    | | (immutable, signed)   | |
 |  | (determin.)  | | (ISO evidence) | | (Cosign/Sigstore)     | |
 |  +--------------+ +----------------+ +-----------------------+ |
 |                                                                |
 |  Attestation + archive -> Level 6                              |
 +----+---------------------------------+-------------------------+
      |                                 |
      v                                 v
 +--------------------+   +-----------------------------+
 | 7. DATA PIPELINE   |   | 8. MODEL LIFECYCLE MANAGER  |
 |    MANAGER (NEW)   |   |    (NEW)                    |
 |                    |   |                             |
 | Acquisition plan   |   | Model requirements          |
 | Collection         |   | Model design & training     |
 | Annotation/label   |   | Model evaluation            |
 | Quality assessment |   | Model registry & versioning |
 | Preprocessing      |   | Model deployment            |
 | Versioning (DVC)   |   | Model monitoring            |
 | Governance         |   | Model retirement            |
 | Disposal           |   | Model cards (ISO 5338)      |
 +--------+-----------+   +-------------+---------------+
          |                              |
          +----------+-------------------+
                     |
                     v
 +---------------------------------------------------------------+
 | 9. FEEDBACK LOOP ENGINE  (NEW)                                |
 |                                                               |
 |  +---------------------+  +-------------------------------+   |
 |  | Verification ->     |  | Human Override Patterns ->    |   |
 |  | Intent Capture      |  | Policy Gateway Updates        |   |
 |  | (improve prompts)   |  | (update risk classifications) |   |
 |  +---------------------+  +-------------------------------+   |
 |  +---------------------+  +-------------------------------+   |
 |  | Operations ->       |  | System Outcomes ->            |   |
 |  | Model Retraining    |  | Training Data                 |   |
 |  | Triggers            |  | (with contamination guards)   |   |
 |  +---------------------+  +-------------------------------+   |
 |                                                               |
 |  Safeguard: feedback loop risk analysis per ISO 23894 6.3     |
 |  Gate: no auto-feedback without Feedback Loop Impact Review   |
 +---------------------------------------------------------------+
```

### 8.4 Intent Contract Specification v2

#### 8.4.1 Enhanced JSON Schema

The v2 Intent Contract extends the v1 schema with trust level tracking, AI model
provenance, data lineage, compositional risk, ISO 42001 control mapping, and
evidence generation metadata.

```json
{
  "$schema": "https://verity.helgeheupel.com/schemas/intent-contract/v2",
  "intentId": "uuid-v7",
  "timestamp": "ISO-8601",
  "version": "semver",

  "source": {
    "type": "enum: human | ai | hybrid",
    "actor": "user-id or model-id",
    "confidence": 0.0,
    "uncertaintyQuantification": {
      "method": "enum: softmax | calibrated | ensemble-variance | none",
      "distribution": {
        "mean": 0.0,
        "stddev": 0.0,
        "percentile_5": 0.0,
        "percentile_95": 0.0
      }
    }
  },

  "provenance": {
    "modelId": "azure-openai:gpt-4o:2025-11-20",
    "modelVersion": "semver or checkpoint-id",
    "temperature": 0.0,
    "topP": 0.0,
    "maxTokens": 0,
    "promptHash": "sha-256 of the full prompt (system + user + context)",
    "promptTemplateId": "versioned-template-ref",
    "contextWindowUtilization": 0.0,
    "computationalApproach": "enum: transformer-llm | rule-engine | ensemble | neuro-symbolic | other",
    "inferenceLatencyMs": 0
  },

  "dataLineage": {
    "inputSources": [
      {
        "sourceId": "datasource-ref",
        "sourceType": "enum: user-input | database | api | document | model-context",
        "dataQualityScore": 0.0,
        "classification": "enum: public | internal | confidential | strictly-confidential",
        "jurisdiction": "enum: EU | US | cross-border"
      }
    ],
    "piiDetected": false,
    "piiRedacted": false,
    "dataVersion": "dvc-hash or dataset-version"
  },

  "intent": {
    "action": "enum: create | modify | delete | deploy | query | train | evaluate",
    "target": "resource-identifier",
    "parameters": {},
    "constraints": [],
    "compositionChain": [
      {
        "parentIntentId": "uuid-v7",
        "relationship": "enum: depends-on | composed-of | triggers",
        "compositionalRiskEscalation": false
      }
    ]
  },

  "trust": {
    "currentLevel": 0,
    "requiredLevel": 5,
    "levelHistory": [
      {
        "level": 0,
        "timestamp": "ISO-8601",
        "promotedBy": "component-id",
        "evidence": "validation-result-ref"
      }
    ]
  },

  "policy": {
    "riskLevel": "enum: low | medium | high | critical",
    "riskSources": {
      "data": "enum: none | low | medium | high",
      "model": "enum: none | low | medium | high",
      "deployment": "enum: none | low | medium | high",
      "societal": "enum: none | low | medium | high",
      "system": "enum: none | low | medium | high"
    },
    "residualRisk": {
      "level": "enum: low | medium | high | critical",
      "mitigationsApplied": ["mitigation-id"],
      "riskOwnerAck": "user-id or null"
    },
    "requiredApprovals": ["role-id"],
    "complianceChecks": ["ISO-42001-A.6", "NIS2-Art.21"],
    "iso42001ControlMapping": ["A.4.2", "A.6.2.3", "A.8.2"],
    "humanInLoop": true,
    "compositionalRisk": {
      "chainDepth": 0,
      "aggregateRiskLevel": "enum: low | medium | high | critical",
      "escalationTriggered": false,
      "escalationReason": "string or null"
    }
  },

  "evaluation": {
    "biasAssessment": {
      "metricsApplied": ["demographic-parity", "equalized-odds"],
      "protectedAttributes": ["industry", "company-size", "geography"],
      "results": {},
      "intersectionalAnalysis": false
    },
    "iso5339Dimensions": {
      "functionalSuitability": 0.0,
      "performanceEfficiency": 0.0,
      "reliability": 0.0,
      "security": 0.0,
      "trustworthiness": 0.0
    }
  },

  "execution": {
    "status": "enum: pending | approved | executing | completed | failed | rolled-back",
    "verificationHash": "sha-256",
    "attestation": {
      "signedBy": "cosign-key-ref",
      "signatureAlgorithm": "ECDSA-P256-SHA256",
      "timestamp": "RFC 3161 TSA timestamp",
      "evidenceArchiveRef": "immutable-storage-uri",
      "rekorLogEntry": "transparency-log-ref"
    }
  },

  "metadata": {
    "sdlcPhase": "enum: orient | requirements | development | testing | deployment | operate | feedback",
    "aiClassificationTier": "enum: assistant | collaborator | decision-support",
    "createdAt": "ISO-8601",
    "expiresAt": "ISO-8601",
    "retentionPolicy": "retention-policy-ref"
  }
}
```

#### 8.4.2 Schema Change Summary (v1 to v2)

| Field / Section           | v1 Status | v2 Change                                           |
|---------------------------|-----------|-----------------------------------------------------|
| `trust.currentLevel`      | Absent    | Added: 7-level graduated trust (replaces binary)    |
| `trust.levelHistory`      | Absent    | Added: full audit trail of trust promotions         |
| `provenance`              | Absent    | Added: model ID, version, temperature, prompt hash  |
| `dataLineage`             | Absent    | Added: input sources, quality scores, jurisdiction  |
| `policy.riskSources`      | Absent    | Added: 5-category risk decomposition per ISO 23894  |
| `policy.residualRisk`     | Absent    | Added: residual risk after mitigation               |
| `policy.compositionalRisk`| Absent    | Added: chain depth, aggregate risk, escalation      |
| `policy.iso42001ControlMapping` | Absent | Added: Annex A control refs                      |
| `evaluation.biasAssessment` | Absent  | Added: fairness metrics, protected attrs, results   |
| `evaluation.iso5339Dimensions` | Absent | Added: 5 core evaluation dimension scores         |
| `source.uncertaintyQuantification` | Absent | Added: distribution-based uncertainty         |
| `intent.compositionChain` | Absent    | Added: parent-child intent relationships            |
| `execution.attestation`   | Partial   | Extended: Sigstore, RFC 3161, Rekor refs            |
| `metadata`                | Absent    | Added: SDLC phase, tier classification, retention   |

### 8.5 AI Gateway / LLM Proxy Specification

#### 8.5.1 Purpose

The AI Gateway is a mandatory intermediary for ALL LLM interactions across the Helge
Heupel Group. Every request to an LLM – whether from product AI (Verity VE/EAM
features) or development AI (Copilot, code generation, test generation) – routes
through the AI Gateway. There are no exceptions.

This component addresses gaps 5392-G3, 23053-G4, and 23894-G3 from the Phase 1
analysis and provides the centralized observability and control plane required by
ISO 42001 clause 7.1 (support / resources) and EU AI Act Art. 12 (record-keeping).

#### 8.5.2 Capabilities

| Capability             | Description                                                  | ISO / Regulation     |
|------------------------|--------------------------------------------------------------|----------------------|
| Request Routing        | Route to appropriate model/endpoint based on request type,   | ISO 5392 clause 6    |
|                        | classification tier, latency requirements, cost constraints  |                      |
| Rate Limiting          | Per-user, per-team, per-model quotas; burst protection       | ISO 27001 A.8.6      |
| Cost Tracking          | Token-level cost attribution by team, project, and feature   | Internal governance  |
| PII Detection/Redact   | Scan prompts and responses for PII; redact before model      | GDPR Art. 5, NIS2    |
|                        | ingestion; log redaction events                              |                      |
| Prompt Injection Def.  | Pattern-based and semantic prompt injection detection;       | ISO 42001 A.6.2.6    |
|                        | block or quarantine suspicious prompts; alert security       |                      |
| Model Version Pinning  | Pin specific model versions per environment; prevent         | ISO 5338 clause 7.3  |
|                        | uncontrolled model upgrades in production                    |                      |
| A/B Testing            | Route percentage of traffic to candidate models for          | ISO 5339 clause 7    |
|                        | comparative evaluation                                       |                      |
| Schema Validation      | Validate LLM output against Intent Contract schema;          | ISO 22989 clause 3   |
|                        | promote from Level 0 to Level 1 on success                   |                      |
| Observability          | Structured logging of all requests/responses (redacted);     | EU AI Act Art. 12    |
|                        | latency, token count, model, temperature, confidence metrics |                      |
| Tier Enforcement       | Classify incoming requests against AI usage tiers (Sec 8.1); | ISO 42001 A.8        |
|                        | route through appropriate governance path automatically      |                      |
| Circuit Breaking       | Detect model degradation or unavailability; fail-safe to     | ISO 23894 clause 6.5 |
|                        | fallback model or graceful denial                            |                      |

#### 8.5.3 Request Flow Through AI Gateway

```
  Incoming Request (from Intent Capture, product AI, or dev tooling)
          |
          v
  [1] Authenticate & Authorize (Zero Trust: mTLS + Entra ID token)
          |
          v
  [2] Classify Request (Tier 1 / 2 / 3 based on action + target)
          |
          v
  [3] PII Scan & Redact (block or redact PII in prompt payload)
          |
          v
  [4] Prompt Injection Defense (pattern + semantic analysis)
          |
          +-- BLOCKED --> [Alert Security + log + return error]
          |
          v
  [5] Rate Limit & Quota Check (per-user, per-team, per-model)
          |
          +-- THROTTLED --> [Queue or return 429 with retry-after]
          |
          v
  [6] Route to Model Endpoint (version-pinned, region-aware)
          |
          v
  [7] Receive Response
          |
          v
  [8] PII Scan Response (redact any PII in model output)
          |
          v
  [9] Schema Validate (attempt Intent Contract schema parse)
          |
          +-- VALID   --> Promote to Trust Level 1 --> forward
          +-- INVALID --> Log failure, retry with structured prompt, or error
          |
          v
  [10] Log & Meter (tokens, latency, cost, model, confidence)
```

### 8.6 Trust Boundary Rules v2

#### 8.6.1 Trust Level Authorization Matrix

| Trust Level | Allowable Actions                          | Denied Actions                            | Logging                          |
|-------------|--------------------------------------------|-------------------------------------------|----------------------------------|
| 0 Untrusted | Display suggestion to user                 | Commit, deploy, modify system state       | Full prompt + response (redacted)|
| 1 Syntax    | Pass to Policy Gateway for evaluation      | Commit, deploy, modify system state       | Full request + validation result |
| 2 Policy    | Auto-execute Tier 1 low-risk actions;      | Deploy to staging/prod; modify auth/crypto| Policy check results + evidence  |
|             | queue for peer review                      | /PII code                                 |                                  |
| 3 Reviewed  | Commit to feature branch; merge to main    | Deploy to production; modify AI models    | Review decision + reviewer ID    |
|             | (non-security code)                        |                                           |                                  |
| 4 Approved  | Commit security-sensitive code; trigger    | Deploy to production without verification | Approval + approver ID + reason  |
|             | staging deployment                         |                                           |                                  |
| 5 Verified  | Deploy to staging; promote to canary       | Full production rollout without attest.   | Verification hash + test results |
| 6 Attested  | Full production deployment; cross-entity   | None (all actions permitted)              | Signed attestation + evidence    |
|             | data flows; model weight updates           |                                           | archive URI + Rekor entry        |

#### 8.6.2 When Human-in-the-Loop Is Mandatory (Updated)

Human approval (advancement to Trust Level 4) is mandatory for:

**Retained from v1:**
- AI-generated code modifying authentication, authorization, or encryption logic
- Deployment to production environments
- Changes to AI model weights, training data, or prompt templates
- Modifications to compliance rules or policy configurations
- Any action classified as High or Critical risk by the GRC engine
- Cross-entity data flows (GmbH <-> B.V. <-> Inc.)
- Customer-facing API contract changes

**Added in v2 (per ISO 23894, ISO 5338, TR 24027):**
- Any intent whose compositional risk aggregation exceeds "medium"
- AI model retraining triggers generated by the Feedback Loop Engine
- Changes to bias mitigation parameters or fairness thresholds
- Modifications to the AI Gateway routing rules or model version pins
- Data pipeline changes that alter training data composition or sources
- AI system retirement or decommissioning decisions
- Intent Contracts where confidence < 0.7 AND risk level >= "medium"
- Any interaction where the AI Gateway detects adversarial input patterns

#### 8.6.3 Compositional Risk Rules

Individual intents may be low-risk in isolation but compose into high-risk outcomes
when chained. The IEA v2 tracks and escalates compositional risk.

**Compositional Risk Escalation Rules:**

| Condition                                                    | Escalation                        |
|--------------------------------------------------------------|-----------------------------------|
| Chain of 3+ intents targeting the same resource within 1 hour| Aggregate risk += 1 level         |
| Any intent in chain modifies auth AND another modifies data  | Force risk to "critical"          |
| Chain crosses entity boundaries (GmbH -> B.V. -> Inc.)       | Force HITL at each boundary       |
| Chain includes model update AND deployment in same PI        | Require AI Governance Board review|
| Aggregate confidence across chain < 0.5 (geometric mean)     | Force HITL regardless of risk     |

**Example:** Intent A (low risk: modify CSS) + Intent B (low risk: modify API route) +
Intent C (low risk: modify database query) individually pass at Level 2. But the
composition (UI change + routing change + data access change) constitutes a functional
change to a customer-facing data flow – the compositional risk engine escalates to
"high" and routes through HITL.

### 8.7 ISO 5392 Functional Decomposition View

This section maps IEA v2 components to the ISO/IEC 5392:2024 AI reference architecture
functional components, providing the engineering view required by auditors and
implementation teams.

#### 8.7.1 Functional Component Mapping

| ISO 5392 Function        | IEA v2 Component(s)                   | Responsibilities                                    |
|--------------------------|---------------------------------------|-----------------------------------------------------|
| Data Management          | Data Pipeline Manager,                | Data ingestion, storage, preprocessing, annotation, |
|                          | Intent Capture (context retrieval)    | versioning (DVC), quality assessment, governance,   |
|                          |                                       | disposal, data lineage tracking                     |
| Model Management         | Model Lifecycle Manager,              | Model requirements, design, training, evaluation,   |
|                          | AI Gateway (version pinning)          | optimization, deployment, monitoring, retirement,   |
|                          |                                       | model cards, experiment tracking (MLflow)           |
| AI Orchestration         | Workflow Orchestrator,                | Pipeline orchestration (training + inference),      |
|                          | AI Gateway (routing),                 | workflow management, resource allocation,           |
|                          | Feedback Loop Engine                  | scheduling, feedback loop coordination              |
| AI Service               | Intent Capture Layer,                 | API exposure (internal + external), request         |
|                          | AI Gateway (external interface)       | handling, response formatting, SLA enforcement,     |
|                          |                                       | prompt construction, output parsing                 |
| AI Governance            | Policy Gateway,                       | Policy enforcement, GRC checks, audit logging,      |
|                          | Human-in-the-Loop Gate,               | compliance checking, risk assessment, trust level   |
|                          | Verification & Attestation            | management, attestation, evidence archival          |
| Infrastructure           | Azure Landing Zone (Section 15.1.1),  | Training compute (GPU), inference compute,          |
|                          | AI Gateway (circuit breaking)         | storage, networking, security, auto-scaling         |

#### 8.7.2 Functional Interaction Diagram

```
                     +-------------------------------------------+
                     |         AI GOVERNANCE FUNCTION            |
                     |  (Policy Gateway + HITL + V&A)            |
                     +----+--------+--------+--------+-----------+
                          |        |        |        |
            policy        |  audit |  risk  | attest.|  compliance
            enforce       |  log   |  assess|        |  check
                          |        |        |        |
 +-----------+    +-------+--+  +--+------+ | +------+------+
 | DATA MGMT |    | AI       |  | MODEL   | | | AI SERVICE  |
 | FUNCTION  +--->| ORCH.    |<-+ MGMT    | | | FUNCTION    |
 |           |    | FUNCTION |  | FUNCTION| | |             |
 | ingest    |    |          |  |         | | | API expose  |
 | preproc   +<---+ pipeline |  | train   | | | request     |
 | version   |    | schedule |  | eval    +-+ | response    |
 | quality   |    | resource |  | serve   |   | prompt      |
 | govern    |    | allocate |  | monitor |   | parse       |
 +-----------+    +-----+----+  +----+----+   +------+------+
                        |            |               |
                        +-----+------+---------------+
                              |
                     +--------+--------+
                     | INFRASTRUCTURE  |
                     | FUNCTION        |
                     |                 |
                     | GPU/TPU compute |
                     | Object storage  |
                     | Networking      |
                     | Auto-scaling    |
                     +-----------------+
```

#### 8.7.3 Cross-Cutting Concerns Mapping (ISO 5392 Clause 7)

| Cross-Cutting Concern | IEA v2 Implementation                                               |
|------------------------|--------------------------------------------------------------------|
| Trustworthiness        | Graduated trust scale (8.2); bias assessment in Intent Contract;   |
|                        | explainability validation in testing; transparency via model cards |
| Interoperability       | Intent Contract as universal interchange format; OpenAPI for AI    |
|                        | Service Function; CycloneDX for SBOM; OSCAL for compliance         |
| Performance            | AI Gateway latency monitoring; SLO framework (Section 16.1);       |
|                        | inference latency tracked in Intent Contract provenance            |
| Scalability            | Separate training vs. inference compute; auto-scaling policies;    |
|                        | AI Gateway rate limiting and circuit breaking                      |
| Maintainability        | Model Lifecycle Manager handles model updates, retraining,         |
|                        | retirement; Data Pipeline Manager handles data refresh cycles      |

### 8.8 AI Lifecycle Integration (ISO 5338)

#### 8.8.1 ISO 5338 Lifecycle Stage Mapping

ISO/IEC 5338:2023 defines seven AI system lifecycle stages. The following table maps
each stage to the IEA v2 components involved, the SDLC phase where the stage primarily
executes, and the key artifacts produced.

| ISO 5338 Stage                     | IEA v2 Component(s)            | SDLC Phase(s)        | Key Artifacts                          |
|------------------------------------|--------------------------------|----------------------|----------------------------------------|
| 1. Concept / Problem Formulation   | (upstream of IEA)              | Phase 0: Orient      | AI problem statement, success criteria,|
|                                    |                                |                      | failure mode analysis, AI Impact       |
|                                    |                                |                      | Assessment (ISO 42005 pre-screen)      |
| 2. Data Management                 | Data Pipeline Manager          | Phase 0-1 (plan),    | Data acquisition plan, data quality    |
|                                    |                                | Phase 2 (execute),   | report, annotation guidelines, DVC     |
|                                    |                                | Phase 5 (maintain)   | version tags, data governance log      |
| 3. Model Development               | Model Lifecycle Manager,       | Phase 2: Development | Model requirements spec, experiment    |
|                                    | AI Gateway (inference)         |                      | log (MLflow), model card, training     |
|                                    |                                |                      | report, hyperparameter registry        |
| 4. AI System Integration & Testing | Workflow Orchestrator,         | Phase 3: Testing     | Component evaluation report (ISO 5339),|
|                                    | Verification & Attestation     |                      | system evaluation report, bias audit   |
|                                    |                                |                      | report, adversarial test report        |
| 5. AI System Deployment            | Workflow Orchestrator,         | Phase 4: Deployment  | Deployment manifest, canary analysis,  |
|                                    | AI Gateway (version pin),      |                      | rollback plan, model version pin       |
|                                    | Verification & Attestation     |                      | record, attestation bundle             |
| 6. AI System Operation & Monitor   | AI Gateway (observability),    | Phase 5: Operate     | Drift detection reports, SLO dashboard,|
|                                    | Feedback Loop Engine,          |                      | continuous evaluation reports,         |
|                                    | Model Lifecycle Manager        |                      | feedback loop impact assessments       |
| 7. AI System Retirement            | Model Lifecycle Manager,       | Phase 6 (new) or     | Retirement impact assessment, model    |
|                                    | Data Pipeline Manager          | on-demand            | archival record, data disposal log,    |
|                                    |                                |                      | transition plan, regulatory hold check |

#### 8.8.2 Data Management Process (ISO 5338 Clause 7.2)

The Data Pipeline Manager implements the following sub-processes, each with defined
inputs, outputs, quality criteria, and process owners.

```
  Data Acquisition    Data            Data Quality      Data
  Planning        --> Collection  --> Assessment    --> Preprocessing
  |                   |               |                 |
  | Acquisition plan  | Raw dataset   | Quality report  | Clean dataset
  | Sources ident.    | Consent log   | Bias screening  | Feature matrix
  | DPA/DPIA check    | Provenance    | Completeness    | Augmentation log
  |                   | metadata      | check           |
  v                   v               v                 v
  Data              Data            Data               Data
  Annotation    --> Versioning  --> Governance     --> Disposal
  |                 |               |                 |
  | Annotated set   | DVC commit    | Access control  | Disposal cert.
  | Label quality   | Lineage DAG   | Retention       | Regulatory hold
  | IAA score       | Reproducible  | Classification  | check
  |                 | snapshot      | Jurisdictional  |
  |                 |               | compliance      |
```

**Quality Criteria per Sub-Process:**

| Sub-Process          | Quality Metric                              | Threshold              |
|----------------------|---------------------------------------------|------------------------|
| Acquisition Planning | Data source risk assessment completed       | 100% of sources        |
| Collection           | Consent/DPA coverage                        | 100% of personal data  |
| Quality Assessment   | Completeness score                          | >= 95%                 |
| Quality Assessment   | Consistency score                           | >= 98%                 |
| Quality Assessment   | Bias screening (representation balance)     | Deviation < 10% from target |
| Annotation           | Inter-annotator agreement (Cohen's kappa)   | >= 0.80                |
| Preprocessing        | Feature drift from reference distribution   | KS-test p-value > 0.05 |
| Versioning           | Reproducibility verification                | 100% of datasets       |
| Governance           | Data classification coverage                | 100% of datasets       |
| Disposal             | Regulatory hold check                       | 100% before disposal   |

#### 8.8.3 ML Model Management Process (ISO 5338 Clause 7.3)

The Model Lifecycle Manager implements the full model lifecycle from requirements
through retirement.

```
  Model           Model           Model           Model
  Requirements -> Design      --> Training    --> Evaluation
  |               |               |               |
  | Performance   | Architecture  | Training log  | Eval report
  |   targets     |   selection   | Loss curves   |   (ISO 5339
  | Fairness      | Hyperparameter| Checkpoint     |    9 dims)
  |   criteria    |   search space|   registry    | Model card
  | Latency       | Compute plan  | Experiment ID | Bias audit
  |   budget      |               |               |
  v               v               v               v
  Model           Model           Model           Model
  Optimization -> Deployment  --> Monitoring  --> Retirement
  |               |               |               |
  | Optimized     | Deployment    | Drift alerts  | Retirement
  |   weights     |   manifest    | Perf. trends  |   impact
  | Quantization  | A/B config    | Retraining    |   assessment
  |   report      | Canary plan   |   triggers    | Archive ref
  | Benchmark     | Version pin   | Feedback loop | Data disposal
  |   results     |   record      |   analysis    |   plan
```

**Model Card Requirements (per ISO 5338, mandatory at Gate 2):**

Every model deployed to staging or production must have a model card containing:

| Model Card Section         | Required Content                                          |
|----------------------------|-----------------------------------------------------------|
| Model Identity             | Model ID, version, creation date, owner                   |
| Intended Use               | Use cases, users, out-of-scope uses                       |
| Training Data              | Data sources, size, preprocessing, known limitations      |
| Evaluation Results         | ISO 5339 dimension scores, fairness metrics, benchmarks   |
| Ethical Considerations     | Bias assessment results, protected attribute analysis      |
| Performance Characteristics| Latency (p50, p95, p99), throughput, resource requirements |
| Limitations & Risks        | Known failure modes, distribution boundaries, residual risk|
| Computational Approach     | Architecture type per TR 24372, selection rationale        |
| Maintenance Schedule       | Retraining cadence, monitoring SLOs, retirement criteria   |

#### 8.8.4 AI System Retirement Process

AI system retirement is formalized as a sub-process of the Model Lifecycle Manager, triggered when a model, AI feature, or AI data pipeline is decommissioned.

**Retirement Trigger Conditions:**
- Model performance drops below minimum acceptable thresholds for 2+ consecutive PIs
- Regulatory change renders the AI system non-compliant
- Strategic decision to sunset a product feature
- Replacement model validated and deployed
- Security vulnerability with no feasible remediation

**Retirement Process:**

| Step | Activity                              | Responsible              | Artifact                    |
|------|---------------------------------------|--------------------------|-----------------------------|
| R1   | Retirement impact assessment          | AI Governance Board      | Impact assessment document  |
| R2   | Stakeholder notification              | Product Owner            | Communication plan          |
| R3   | Traffic migration to replacement      | SRE + ML Engineer        | Migration runbook           |
| R4   | Model archival (weights + config)     | Model Lifecycle Manager  | Archive record (immutable)  |
| R5   | Training data disposition             | Data Pipeline Manager    | Disposal certificate        |
| R6   | Regulatory hold verification          | Legal / Compliance       | Hold clearance record       |
| R7   | API deprecation and removal           | Engineering              | API sunset notice (90d min) |
| R8   | Audit evidence archival               | Verification & Attestation| Evidence bundle             |
| R9   | Post-retirement review                | AI Governance Board      | Lessons learned document    |

**Data Retention After Retirement:**
- Model cards and evaluation reports: retained indefinitely (audit trail)
- Model weights: archived for 7 years (regulatory minimum) then reviewed
- Training data: disposed per data governance policy unless regulatory hold applies
- Intent Contracts referencing retired models: retained per standard retention policy
- Audit evidence: retained per ISO 42001 clause 7.5 requirements

---
## 9. SDLC Phases

### 9.0 Phase Model Overview

The Helge Heupel SDLC operates a seven-phase lifecycle (Phases 0-6) that maps strategic intent to production value delivery and continuous learning. Each phase is defined as a formal process with a purpose statement, measurable outcomes, and capability targets per ISO/IEC 33001.

**Phase Flow:**

```
Phase 0       Phase 1           Phase 2           Phase 3        Phase 4          Phase 5       Phase 6
Orient   -->  Requirements -->  Development  -->  Testing  -->   Deployment  -->  Operate  -->  Feedback
  |                 |                |               |               |            & Monitor     & Evolution
  |                 |                |               |               |               |
  G0                G1               G2              G3              G4              G5                   
```

**AI Teammate Participation Model:**

AI teammates participate in every phase with trust levels calibrated to risk:

- `[AI]` – AI teammate contributions (autonomous execution)
- `[Human]` – Human execution required
- `[AI+Human]` – AI-generated output with mandatory human review

| Trust Level | Description | Applicable Phases | Review Requirement |
|---|---|---|---|
| Autonomous | AI executes independently; post-hoc review within 24h | 0 (research), 5 (monitoring), 6 (analysis) | Async human review |
| Supervised | AI generates; human reviews before use | 1 (drafting), 2 (coding), 3 (test generation) | Synchronous human review |
| Advisory | AI recommends; human decides and executes | 0 (strategy), 4 (deployment), 5 (incident response) | Human-in-the-loop mandatory |

**Progressive Adoption Stages:**

Throughout all phases, requirements are tiered by organizational maturity:

| Stage | Team Size | Characteristics |
|---|---|---|
| **Startup** | < 20 | TR 29110 Basic Profile. Lightweight processes. Role consolidation. Single governance meeting. |
| **Growth** | 20-80 | TR 29110 Intermediate Profile. Formal process definitions. Separated governance bodies. |
| **Enterprise** | 80+ | Full SDLC with SAFe 6.0. Dual ARTs. Complete governance structure. |

### 9.1 Phase 0: Orient

**Process ID:** SDLC-PH0
**Process Purpose:** To evaluate and align proposed development initiatives with organizational strategy, regulatory requirements, and technical feasibility, producing an investment decision with a risk classification.

**Process Outcomes:**
1. Initiative assessed against strategic objectives with quantified alignment score
2. Risk classification completed (technical, regulatory, AI, market)
3. Compliance impact mapped across applicable jurisdictions
4. Investment decision recorded with rationale and constraints

**Key Activities:**

| Activity | Description | Actor |
|---|---|---|
| Strategic alignment review | Map initiative to portfolio OKRs; calculate strategic fit score | [Human] Product/CTO |
| Market and competitive analysis | Assess competitive landscape, TAM/SAM/SOM, differentiation | [AI+Human] AI generates analysis; CTO validates |
| Technical feasibility assessment | Evaluate architecture impact, dependency mapping, capacity | [AI+Human] AI generates feasibility report from architecture telemetry |
| AI impact pre-screening (ISO 42005) | Determine whether initiative involves AI systems; classify per EU AI Act Art. 6 | [AI+Human] AI pre-screens; AI Governance validates |
| Formal risk assessment (ISO 31000) | Identify, analyze, and evaluate initiative-level risks | [Human] CTO/Product |
| Regulatory impact analysis | Map compliance obligations across DE, NL, US jurisdictions | [AI] Automated regulatory cross-referencing |
| Cross-entity architecture impact review | Assess impact on shared services, data flows, API contracts | [AI+Human] AI generates impact report; Architect reviews |
| Investment decision | Approve, defer, or reject initiative with documented rationale | [Human] Decision authority per adoption stage |

**Risk Activities (IEC 31010):**

| Technique | Application | Output |
|---|---|---|
| Preliminary Hazard Analysis (PHA) | Identify high-level risks of the proposed initiative | Risk register entry with initial severity/likelihood |
| SWOT Analysis | Assess strategic positioning of the initiative | Strategic risk profile |
| Scenario Analysis | Model best/worst/expected outcomes for investment decision | Investment scenarios with risk-adjusted returns |
| Checklists (IEC 31010 B.1) | Verify completeness of orient phase activities | Completed orient checklist |

**AI Lifecycle Activities (ISO 5338):**

| ISO 5338 Process | Activity | Output |
|---|---|---|
| AI System Life Cycle Planning | Determine whether initiative requires AI lifecycle management | AI applicability determination |
| AI Impact Assessment Initiation | Begin ISO 42005 pre-screening for AI-enabled initiatives | Impact pre-screening report |
| Data Requirement Identification | Identify training/inference data needs and availability | Data requirements preliminary assessment |

**Compliance Evidence Generated:**

| Artifact | UCL Reference | Frameworks Served |
|---|---|---|
| Strategic alignment record | UCL-PH0-001 | ISO 42001 6.1, SOC 2 CC1 |
| AI risk classification | UCL-PH0-002 | EU AI Act Art. 6, ISO 42001 6.1.2 |
| ISO 42005 pre-screening | UCL-PH0-003 | ISO 42005, EU AI Act Art. 9 |
| Risk assessment (initiative-level) | UCL-PH0-004 | ISO 27001 A.6, NIS2 Art. 21(a) |
| Investment decision record | UCL-PH0-005 | SOC 2 CC1, ISO 42001 6.1 |

**Progressive Adoption:**

| Aspect | Startup | Growth | Enterprise |
|---|---|---|---|
| Time-box | 1-2 business days | 2-5 business days | 5-10 business days |
| Strategic alignment | CTO verbal approval | Documented OKR mapping | VMO portfolio scoring (WSJF) |
| Risk assessment | Lightweight checklist | Structured PHA | Full ISO 31000 risk assessment |
| AI pre-screening | CTO determination | Documented classification | AI Governance Board review |
| Decision authority | CTO decides | CTO + Product Lead | VMO + CTO + AI Governance |
| Fast-track eligible | Yes (internal tools, bug fixes) | Yes (low-risk only) | Yes (pre-approved change types) |

**Gate Criteria (G0 -- Strategic Alignment):**
- [ ] Strategic trace to portfolio OKR documented
- [ ] Initiative risk classification completed (Low/Medium/High/Critical)
- [ ] AI risk classification completed (EU AI Act Art. 6) -- or N/A determination
- [ ] ISO 42005 impact pre-screening completed -- or N/A determination
- [ ] Cross-entity applicability confirmed
- [ ] Investment decision recorded with rationale

### 9.2 Phase 1: Requirements

**Process ID:** SDLC-PH1
**Process Purpose:** To decompose approved initiatives into specified, testable, and traceable requirements with complete security, compliance, accessibility, and AI-specific quality targets.

**Process Outcomes:**
1. Requirements decomposed, prioritized, and baselined
2. Threat model completed per feature with identified mitigations
3. Non-functional requirements specified with measurable targets
4. Requirements baseline established with change control process

**Key Activities:**

| Activity | Description | Actor |
|---|---|---|
| Feature decomposition | Break epics into features and stories using WSJF prioritization | [AI+Human] AI suggests decomposition; PO validates |
| Acceptance criteria specification | Write Given/When/Then criteria for each story | [AI+Human] AI drafts; PO and QE review |
| Threat modeling (STRIDE/LINDDUN) | Identify threats per feature; define mitigations | [AI+Human] AI generates threat model from architecture; Security Champion reviews |
| AI-specific requirements | Define explainability, fairness, robustness, and drift tolerance targets per ISO 42001 Annex A | [AI+Human] AI suggests targets from benchmarks; AI Governance validates |
| Accessibility requirements (WCAG 2.2) | Specify WCAG 2.2 AA conformance targets per feature | [AI+Human] AI maps WCAG criteria to UI components; UX validates |
| UX requirements | Define user experience targets: task completion rate, error rate, time-on-task | [Human] UX/Product |
| DPIA assessment | Conduct Data Protection Impact Assessment where personal data is processed | [AI+Human] AI drafts DPIA; Legal/DPO reviews |
| API contract design | Define OpenAPI 3.1 specifications for new/modified APIs | [AI+Human] AI generates from requirements; Architect reviews |
| ADR creation | Document Architecture Decision Records for significant design choices | [AI+Human] AI drafts options analysis; Architect decides |
| SBOM baseline | Capture dependency baseline for new components | [AI] Automated dependency scanning |
| Requirements validation | Check for consistency, testability, ambiguity, and completeness | [AI] AI-assisted validation with human escalation |
| Requirements baseline | Establish frozen baseline; subsequent changes require change request | [Human] PO approves baseline |

**Risk Activities (IEC 31010):**

| Technique | Application | Output |
|---|---|---|
| STRIDE Threat Modeling | Identify security threats per feature boundary | Threat model with mitigations |
| LINDDUN Privacy Threat Modeling | Identify privacy threats for features handling personal data | Privacy threat model |
| Failure Mode and Effect Analysis (FMEA) | Assess failure modes of proposed features | FMEA register with RPN scores |
| Bow-Tie Analysis | Map causes-barriers-consequences for high-risk requirements | Bow-tie diagrams for critical features |

**AI Lifecycle Activities (ISO 5338):**

| ISO 5338 Process | Activity | Output |
|---|---|---|
| AI System Requirements Definition | Define functional and non-functional AI requirements | AI requirements specification |
| AI Data Requirements | Specify training/validation/test data requirements | Data requirements document |
| AI Bias and Fairness Requirements | Define fairness metrics and acceptable thresholds | Fairness requirements specification |
| AI Explainability Requirements | Specify explainability level per use case (ISO 42001 Annex A.6) | Explainability requirements |

**Compliance Evidence Generated:**

| Artifact | UCL Reference | Frameworks Served |
|---|---|---|
| Threat model | UCL-PH1-001 | ISO 27001 A.8.25, NIS2 Art. 21(a), TISAX 1.1 |
| DPIA | UCL-PH1-002 | GDPR Art. 35, ISO 42001 A.4 |
| AI requirements specification | UCL-PH1-003 | ISO 42001 Annex A, EU AI Act Art. 9 |
| WCAG 2.2 conformance targets | UCL-PH1-004 | EN 301 549, WCAG 2.2 AA |
| Requirements baseline | UCL-PH1-005 | ISO 27001 A.8.25, SOC 2 CC8 |
| SBOM baseline | UCL-PH1-006 | NIS2 Art. 21(d), FedRAMP SA-4 |

**Progressive Adoption:**

| Aspect | Startup | Growth | Enterprise |
|---|---|---|---|
| Decomposition depth | Epic -> Stories | Epic -> Features -> Stories | Epic -> Capability -> Features -> Stories |
| Threat model scope | Critical features only | All customer-facing features | All features (risk-tiered depth) |
| AI requirements | Lightweight checklist | Structured specification | Full ISO 42001 Annex A mapping |
| Accessibility | WCAG 2.2 A minimum | WCAG 2.2 AA | WCAG 2.2 AA + enhanced for Section 508 |
| UX requirements | Informal heuristics | Task-based targets | Full UX requirements with usability testing plan |
| Requirements baseline | Informal (ticket status) | Formal baseline with change tracking | Formal baseline with impact analysis on change |

**Gate Criteria (G1 -- Requirements Readiness):**
- [ ] All stories meet Definition of Ready (DoR)
- [ ] Threat model reviewed and approved by Security Champion
- [ ] DPIA completed where applicable (GDPR Art. 35)
- [ ] AI requirements tagged with ISO 42001 Annex A controls (or N/A)
- [ ] SBOM baseline captured
- [ ] Architecture Decision Records approved
- [ ] Accessibility requirements specified (WCAG 2.2 AA)
- [ ] Requirements baseline established with change control process
- [ ] UX requirements reviewed by Product/UX

### 9.3 Phase 2: Development

**Process ID:** SDLC-PH2
**Process Purpose:** To build, integrate, and continuously verify software increments with full provenance tracking, security scanning, and compliance evidence generation, producing deployment-ready artifacts.

**Process Outcomes:**
1. Code implemented, reviewed, and integrated to trunk
2. All automated quality checks pass per the CI/CD pipeline
3. AI-generated code carries provenance metadata and meets enhanced review standards
4. SBOM, signed artifacts, and compliance evidence archived

**Key Activities:**

**Coding Standards and Practices:**

| Activity | Description | Actor |
|---|---|---|
| Trunk-based development | All work merged to main via short-lived branches (< 24h) | [Human + AI] |
| Pre-commit hooks | Linting, formatting, secret detection, license compliance | [Automated] |
| AI-assisted development | Code generation, refactoring, documentation via IEA | [AI] Supervised trust level |
| Code review | Minimum 1 human reviewer; 2 for security-sensitive code | [Human] Mandatory |
| Commit signing | GPG/SSH signing mandatory for all contributors | [Human + Automated] |
| AI provenance tracking | Attach model ID, prompt hash, confidence score to AI-generated code | [Automated] |

**AI-Assisted Development Rules:**

When AI teammates generate 50% or more of a code change, additional controls apply:

| Rule | Rationale |
|---|---|
| AI-generated code is classified "untrusted" until verified | Prevents correlated failure from AI hallucinations |
| AI must not generate cryptographic, authentication, or PII-processing code without human design | Security-critical code requires human intent and accountability |
| AI-generated code > 10 lines requires provenance metadata | Enables audit trail and quality analysis |
| AI-generated code requires human-written specification or test describing intended behavior | Breaks correlated failure chain: independent human specification vs. AI implementation |
| AI-generated test cases supplement but never replace human-designed test strategies | Prevents correlated AI failures where the same model generates code and its own tests |
| AI-generated code branch coverage >= 95% (vs. 80% for human code) | Higher coverage compensates for AI's inability to understand implicit requirements |
| Diverse model testing: if AI Model A generates code, tests should include cases from AI Model B or humans | Metamorphic testing countermeasure for correlated AI failures |

**CI/CD Pipeline v2:**

```
Commit --> Pre-commit Hooks --> Build --> Unit Tests --> SAST --> SCA/SBOM -->
Container Scan --> DAST --> AI Model Validation --> Compliance-as-Code -->
Accessibility Tests --> Integration Tests --> Performance Tests -->
Artifact Signing --> Artifact Registry --> Evidence Archive
```

The pipeline is structured into three feedback loops to balance speed with thoroughness:

**Fast Loop (< 5 minutes, every commit):**

| Stage | Tool | Pass Criteria | Compliance Mapping |
|---|---|---|---|
| Pre-commit Hooks | Husky, commitlint, gitleaks | Zero secrets, valid format | ISO 27001 A.8.4, SOC 2 CC8 |
| Build | Azure Pipelines | Clean compilation | -- |
| Unit Tests | Jest, pytest, xUnit | >= 90% line, >= 80% branch; >= 95% branch for AI code | ISO 27001 A.8.29 |
| SAST | SonarQube, Semgrep | Zero Critical, Zero High | NIS2 Art. 21(e), TISAX 5.2 |
| Secret Detection | gitleaks, TruffleHog | Zero findings | ISO 27001 A.8.4 |

**Extended Loop (< 30 minutes, per PR/merge):**

| Stage | Tool | Pass Criteria | Compliance Mapping |
|---|---|---|---|
| SCA / SBOM | Snyk, Trivy, Syft | Zero Critical/High CVEs; SBOM generated (CycloneDX) | NIS2 Art. 21(d), FedRAMP SA |
| Container Scan | Trivy, Defender | Zero Critical/High; distroless, non-root | FedRAMP RA, SOC 2 CC6 |
| DAST | OWASP ZAP | Zero Critical/High against OWASP Top 10 | NIS2 Art. 21(e), TISAX 5.2 |
| AI Model Validation | Custom (fairness, drift, explainability) | Metrics within tolerances; only when model artifacts change | ISO 42001 A.6, EU AI Act Art. 9 |
| Compliance-as-Code | Open Policy Agent (OPA) | All policies pass | All frameworks (policy-as-code) |
| Accessibility Tests | axe-core, Pa11y | Zero Critical; AA conformance | WCAG 2.2, EN 301 549 |
| Integration Tests | Playwright, k6 | All contract tests pass | ISO 27001 A.8.29 |

**Periodic Loop (nightly/weekly):**

| Stage | Tool | Cadence | Compliance Mapping |
|---|---|---|---|
| Full DAST | OWASP ZAP (full scan) | Nightly | NIS2 Art. 21(e) |
| Performance Tests | k6, Locust | Nightly | SOC 2 A1 |
| Penetration Testing | Manual + automated | Quarterly | NIS2 Art. 21(e), FedRAMP CA |
| Comprehensive Compliance Evidence | OPA + custom | Weekly | All frameworks |
| AI Provenance Audit | Custom | Weekly | ISO 42001 9.2, EU AI Act Art. 12 |

**Artifact Signing and Registry:**

| Stage | Tool | Purpose |
|---|---|---|
| Artifact Signing | Cosign (Sigstore) | Cryptographic provenance; supply chain integrity |
| Artifact Registry | Azure Container Registry, Azure Artifacts | Immutable artifact storage |
| Evidence Archive | GRC Platform | Compliance evidence with retention policy |

**Definition of Done (DoD) v2:**

| Criterion | Standard | AI-Generated Code Addendum |
|---|---|---|
| Code compiles without errors | All changes | Same |
| Unit tests pass | >= 90% line, >= 80% branch | >= 95% branch coverage |
| SAST findings | Zero Critical, Zero High | Same |
| SCA findings | Zero Critical, Zero High; SBOM updated | Same |
| Code review completed | 1 reviewer; 2 for security-sensitive | 2 reviewers; 1 must have domain expertise |
| AI provenance metadata | N/A for human code | Required for all blocks > 10 lines |
| Human-written specification or test | N/A | Required: breaks correlated failure chain |
| Intent Contract | If IEA-governed | Required for security-sensitive AI changes |
| API contract tests pass | All API changes | Same |
| Documentation updated | Code comments, ADRs, runbooks | AI-generated docs require human review |
| Accessibility tests pass | axe-core, WCAG 2.2 AA | Same |
| Hallucination scan | N/A | Required: no hallucination markers detected |

**Risk Activities (IEC 31010):**

| Technique | Application | Output |
|---|---|---|
| Code Review (as risk identification) | Identify security and logic risks in code changes | Review findings with risk ratings |
| Static Analysis (automated) | Identify vulnerability patterns in source code | SAST findings report |
| Dependency Analysis | Identify supply chain risks from third-party components | SCA findings report + SBOM |
| AI Provenance Analysis | Assess risk from AI-generated code concentration | AI provenance risk report |

**AI Lifecycle Activities (ISO 5338):**

| ISO 5338 Process | Activity | Output |
|---|---|---|
| AI System Implementation | Implement AI components per requirements | AI component code with provenance |
| AI Data Management | Implement data pipelines for training/inference | Data pipeline artifacts |
| AI Model Development | Train, tune, and validate models | Model artifacts with validation report |
| AI System Integration | Integrate AI components into application architecture | Integration test results |

**Compliance Evidence Generated:**

| Artifact | UCL Reference | Frameworks Served |
|---|---|---|
| SBOM (CycloneDX) | UCL-PH2-001 | NIS2 Art. 21(d), FedRAMP SA-4 |
| SAST report | UCL-PH2-002 | NIS2 Art. 21(e), TISAX 5.2 |
| SCA report | UCL-PH2-003 | NIS2 Art. 21(d), FedRAMP SA-11 |
| Signed artifact attestation | UCL-PH2-004 | FedRAMP SI, SOC 2 CC8 |
| AI provenance records | UCL-PH2-005 | ISO 42001 9.1, EU AI Act Art. 12 |
| Code review evidence | UCL-PH2-006 | ISO 27001 A.8.29, SOC 2 CC8 |
| Accessibility test results | UCL-PH2-007 | WCAG 2.2, EN 301 549 |

**Progressive Adoption:**

| Aspect | Startup | Growth | Enterprise |
|---|---|---|---|
| CI pipeline | Fast loop only; extended loop on merge to main | Fast + extended loops | Fast + extended + periodic loops |
| Code review | 1 reviewer all changes | 1 reviewer; 2 for security-sensitive | 2 reviewers; security review board for critical |
| AI provenance | Optional metadata | Required > 10 lines | Required > 10 lines + weekly audit |
| SBOM | Generated on release | Generated per PR | Generated per PR + dependency review board |
| Container scanning | On release | Per PR | Per PR + runtime scanning |
| Accessibility testing | axe-core on key pages | axe-core on all pages | axe-core + Pa11y + manual audit quarterly |
| Performance testing | Manual before major releases | Nightly automated | Nightly + load testing per PR for critical paths |

**Gate Criteria (G2 -- Development Completeness):**
- [ ] All DoD criteria met (including AI-specific addenda where applicable)
- [ ] Fast loop CI pipeline: all stages pass
- [ ] Extended loop CI pipeline: all stages pass
- [ ] SBOM generated and archived
- [ ] All artifacts signed
- [ ] AI provenance records complete (if applicable)

### 9.4 Phase 3: Testing

**Process ID:** SDLC-PH3
**Process Purpose:** To validate that the integrated system meets functional, non-functional, security, compliance, accessibility, and AI-specific quality criteria through extended verification activities that cannot run on every commit.

**Process Outcomes:**
1. System-level quality validated across all test layers
2. AI-specific quality criteria verified (bias, fairness, drift, adversarial robustness, hallucination rate)
3. Compliance evidence package generated for applicable frameworks
4. Performance baselines verified against SLO targets

**Key Activities:**

**Testing Pyramid:**

| Layer | Scope | Automation | AI Leverage | Risk-Based Selection |
|---|---|---|---|---|
| Unit | Individual functions/methods | 100% automated (in CI) | [AI] Edge case generation | Always runs |
| Integration | Service-to-service contracts | 100% automated (in CI) | [AI] Contract test generation | Always runs |
| System | End-to-end workflows | 95%+ automated | [AI] Exploratory test generation | Risk-proportionate scope |
| Performance | Load, stress, endurance | 100% automated | [AI] Anomaly detection in results | Per SLO tier |
| Security | Penetration, red team | Automated + quarterly manual | [AI] Threat scenario generation | Risk-proportionate depth |
| Accessibility | WCAG 2.2 conformance | Automated + manual audit | [AI] Accessibility issue detection | All user-facing changes |
| UX | Usability, task completion | Semi-automated + user testing | [AI] Heuristic evaluation | Major UX changes |
| Compliance | Regulatory control validation | 100% automated | [AI] Policy-as-code execution | Always runs |
| AI/ML | Fairness, robustness, drift | 100% automated | [Automated] Bias and drift detection | All AI features |
| Acceptance | User acceptance (UAT) | Semi-automated | [AI] Test scenario generation | All customer-facing features |

**AI-Specific Testing (ISO 42001 / EU AI Act):**

| Test Category | Technique | Pass Criteria | Frequency |
|---|---|---|---|
| Bias and fairness | Statistical parity, equalized odds across protected attributes | Within defined tolerance per AI requirements spec | Every AI model change |
| Adversarial robustness | Input perturbation, prompt injection resistance, jailbreak testing | Zero successful critical attacks; robustness score > threshold | Every AI model change |
| Explainability | SHAP/LIME scores against thresholds per use case | Scores within defined ranges per explainability requirements | Every AI model change |
| Data drift | Statistical tests (KS, PSI) on input distributions vs. training data | Drift score below threshold | Continuous (production monitoring feeds back) |
| Model regression | Accuracy, precision, recall, F1 against baselines | No degradation beyond tolerance | Every AI model change |
| Hallucination rate | Factual verification against ground truth datasets | Rate below threshold per use case | Every AI model change |
| Correlated failure | Metamorphic testing: different AI models/humans generate independent test suites | No common failure modes across independent test suites | Every major AI feature |
| Diverse model testing | Code generated by Model A tested by tests from Model B and humans | Cross-model test pass rate >= single-model rate | When AI generates > 50% of code |

**Accessibility Testing:**

| Level | Technique | Tool | Pass Criteria |
|---|---|---|---|
| Automated | Static analysis of rendered DOM | axe-core, Pa11y | Zero Critical/Serious violations |
| Semi-automated | Keyboard navigation, screen reader testing | Manual + NVDA/VoiceOver | All interactive elements keyboard-accessible |
| Manual audit | Expert review against WCAG 2.2 AA | Accessibility specialist | AA conformance across all success criteria |

**UX Testing:**

| Test Type | Method | Metrics | Frequency |
|---|---|---|---|
| Task completion | Moderated/unmoderated user testing | Task success rate, time-on-task | Per major UX change |
| Heuristic evaluation | Expert review against Nielsen heuristics | Issue count by severity | Per sprint (AI-assisted) |
| Error rate measurement | Production telemetry + lab testing | User error rate per task | Continuous |

**Compliance Validation Testing:**

| Framework | Test Suite | Evidence Generated |
|---|---|---|
| OWASP Top 10 | Automated regression suite | Vulnerability assessment report |
| NIS2 | Cryptography validation (TLS 1.3, AES-256) | Cryptographic compliance evidence |
| TISAX (VDA ISA 6) | Control evidence generation | TISAX assessment evidence package |
| SOC 2 | Trust Service Criteria automated evidence | SOC 2 evidence collection |
| FedRAMP | OSCAL-formatted security assessment | SAR generation |
| ISO 42001 | AI governance control validation | AIMS audit evidence |
| EU AI Act | Conformity assessment evidence for high-risk AI | Art. 11 technical documentation |

**Risk Activities (IEC 31010):**

| Technique | Application | Output |
|---|---|---|
| Fault Tree Analysis (FTA) | Identify root causes of system-level failures found in testing | Fault trees for critical defects |
| Event Tree Analysis (ETA) | Model consequence chains from identified vulnerabilities | Event trees for security findings |
| Monte Carlo Simulation | Performance risk assessment under varying load conditions | Statistical confidence intervals for SLO compliance |
| Metamorphic Testing | Verify AI outputs across input transformations that should preserve behavior | Metamorphic test results |

**AI Lifecycle Activities (ISO 5338):**

| ISO 5338 Process | Activity | Output |
|---|---|---|
| AI System Verification | Verify AI components meet specified requirements | AI verification report |
| AI System Validation | Validate AI system meets intended use requirements | AI validation report |
| AI Bias Assessment | Assess bias across protected attributes | Bias assessment report |
| AI Robustness Testing | Test resilience to adversarial inputs and edge cases | Robustness assessment report |

**Compliance Evidence Generated:**

| Artifact | UCL Reference | Frameworks Served |
|---|---|---|
| System test results | UCL-PH3-001 | ISO 27001 A.8.29, SOC 2 CC8 |
| Security penetration test report | UCL-PH3-002 | NIS2 Art. 21(e), TISAX 5.2, FedRAMP CA |
| AI model validation report | UCL-PH3-003 | ISO 42001 A.6, EU AI Act Art. 9 |
| ISO 42005 impact assessment update | UCL-PH3-004 | ISO 42005, EU AI Act Art. 9 |
| Compliance evidence package | UCL-PH3-005 | All applicable frameworks |
| Accessibility conformance report | UCL-PH3-006 | WCAG 2.2, EN 301 549 |
| Performance baseline report | UCL-PH3-007 | SOC 2 A1 |

**Progressive Adoption:**

| Aspect | Startup | Growth | Enterprise |
|---|---|---|---|
| System testing | Automated E2E for critical paths | Automated E2E for all paths | Full system test suite + exploratory |
| Performance testing | Manual before major releases | Nightly automated baseline | Nightly + per-PR for critical paths |
| Security testing | Automated SAST/DAST + annual pentest | Automated + bi-annual pentest | Automated + quarterly pentest + red team |
| Accessibility testing | axe-core automated | Automated + semi-automated | Automated + quarterly expert audit |
| UX testing | Informal heuristic review | Task-based testing per major feature | Formal usability testing program |
| AI testing | Basic accuracy/fairness checks | Full AI test suite | Full suite + adversarial red team |
| Compliance evidence | Generated on demand for audits | Continuous automated generation | Continuous + independent review |

**Gate Criteria (G3 -- Quality and Compliance):**
- [ ] All test layers pass with defined thresholds
- [ ] Security penetration test report: zero Critical, zero High (unmitigated)
- [ ] AI model validation report: all metrics within defined tolerances (or N/A)
- [ ] ISO 42005 impact assessment updated with test evidence (or N/A)
- [ ] Compliance evidence package generated for applicable frameworks
- [ ] Performance baselines met (p50, p95, p99 latency; throughput; error rate)
- [ ] Accessibility conformance: zero Critical/Serious violations; AA compliance
- [ ] Defect escape analysis: no critical defects escaped from earlier phases

### 9.5 Phase 4: Deployment

**Process ID:** SDLC-PH4
**Process Purpose:** To deploy validated artifacts to production environments through progressive rollout with automated rollback, database migration safety, and deployment circuit breaker enforcement tied to error budgets.

**Process Outcomes:**
1. Artifacts deployed to production through progressive rollout
2. Canary analysis confirms no SLO violations
3. Database migrations executed safely with rollback capability
4. Compliance evidence archived for the deployment event

**Key Activities:**

**Progressive Rollout with Canary Analysis:**

```
Artifact Registry --> Staging (automatic) --> Canary (10% traffic) --> Kayenta Analysis --> Progressive Rollout (25% --> 50% --> 100%) --> Full Production
```

| Stage | Duration | Success Criteria | Rollback Trigger |
|---|---|---|---|
| Staging | Automated (E2E pass) | All integration and E2E tests pass | Any test failure |
| Canary (10%) | Risk-based (see below) | Kayenta score >= threshold; no SLO violation | Kayenta fail; SLO breach; error budget burn |
| Progressive (25%) | 15 min minimum | Metrics stable; no anomalies | Error rate spike; latency regression |
| Progressive (50%) | 15 min minimum | Metrics stable; no anomalies | Error rate spike; latency regression |
| Full (100%) | Observation window | All SLOs met | SLO breach within 1h post-deploy |

**Risk-Based Canary Duration:**

| Risk Level | Canary Observation | Approval Required | Rollback Authority |
|---|---|---|---|
| Low | 15 minutes | Automated | Automated |
| Medium | 1 hour | Automated + post-hoc review | Automated or SRE |
| High | 4 hours | Async human review before promotion | SRE + Engineering Lead |
| Critical | 24 hours + CAB | Synchronous CAB approval | CAB + SRE |

**Canary Analysis Framework (Kayenta):**

| Signal | Metric | Threshold |
|---|---|---|
| Error rate | 5xx responses / total responses | Canary <= baseline * 1.1 |
| Latency | p50, p95, p99 response time | Canary <= baseline * 1.2 |
| Throughput | Requests per second | Canary >= baseline * 0.9 |
| Custom metrics | Business-specific KPIs | Per-metric thresholds defined in deploy config |
| AI model metrics | Prediction accuracy, latency | Canary >= baseline accuracy; latency within tolerance |

**Deployment Circuit Breaker:**

The deployment pipeline integrates with the error budget system. When the error budget for a service tier is exhausted:

| Error Budget State | Deployment Policy |
|---|---|
| > 50% remaining | Normal deployment; all risk levels permitted |
| 25-50% remaining | Low/Medium risk only; High/Critical require CAB override |
| < 25% remaining | Reliability-only changes permitted; all feature deployments frozen |
| Exhausted (0%) | Emergency patches only; all deployments require SRE + CTO approval |

**Multi-Region Orchestration:**

```
EU Region (Primary Canary) --> EU Canary Analysis Pass --> US Region (Secondary Canary) --> US Canary Analysis Pass --> Global Promotion
```

EU serves as the primary canary region due to stricter regulatory requirements. If a deployment passes EU canary analysis, it proceeds to US. This ensures GDPR/NIS2 compliance is validated before broader rollout.

**Database Migration Strategy:**

| Step | Activity | Rollback Mechanism |
|---|---|---|
| 1 | Schema migration tested in staging with production-like data | Automated rollback script |
| 2 | Backward-compatible migration applied (expand phase) | Backward compatibility ensures old code works |
| 3 | Application code deployed referencing new schema | Standard application rollback |
| 4 | Cleanup migration scheduled (contract phase, separate deploy) | N/A (only after validation period) |

Migration rules:
- All migrations must be backward-compatible (expand/contract pattern)
- Migrations are separated from application code deployments
- Migration rollback scripts are tested in staging before production execution
- Data migrations on tables > 1M rows require explicit SRE review and off-peak scheduling
- No destructive migrations (DROP TABLE, DROP COLUMN) without 7-day validation period

**Feature Flag Lifecycle:**

| Flag Type | Maximum Lifetime | Cleanup Trigger | Owner |
|---|---|---|---|
| Release toggle | 30 days | Full rollout or rollback | Engineering Lead |
| Experiment toggle | 90 days | Experiment conclusion | Product Owner |
| Ops toggle | Indefinite | Quarterly review | SRE |
| Permission toggle | Indefinite | Quarterly review | Product Owner |

**Deployment Strategies:**

| Strategy | Use Case | Risk Level |
|---|---|---|
| Blue-green | Zero-downtime releases; standard deployments | Low-Medium |
| Canary | Progressive rollout with statistical analysis | Medium-High |
| Feature flag | Decouple deploy from release; gradual enablement | Low-Critical |
| GitOps (Flux CD) | Kubernetes reconciliation; declarative state | All levels |

**Risk Activities (IEC 31010):**

| Technique | Application | Output |
|---|---|---|
| Layer of Protection Analysis (LOPA) | Verify deployment safeguards (canary, circuit breaker, rollback) | LOPA assessment per deployment |
| Reliability Block Diagram | Model system reliability during progressive rollout | Reliability assessment |
| What-If Analysis | Assess deployment failure scenarios and rollback procedures | Deployment risk scenarios |

**AI Lifecycle Activities (ISO 5338):**

| ISO 5338 Process | Activity | Output |
|---|---|---|
| AI System Deployment | Deploy AI models with shadow mode validation | Deployment record |
| AI Model Registry Update | Register deployed model version with metadata | Model registry entry |
| AI System Release | Release AI capabilities through feature flags | Release record |

**Compliance Evidence Generated:**

| Artifact | UCL Reference | Frameworks Served |
|---|---|---|
| Deployment record (environment, version, timestamp) | UCL-PH4-001 | ISO 27001 A.8.31, SOC 2 CC8 |
| Canary analysis report | UCL-PH4-002 | SOC 2 A1, FedRAMP CM |
| CAB approval record (if required) | UCL-PH4-003 | ISO 27001 A.8.32, TISAX 1.3.4 |
| Rollback plan and test evidence | UCL-PH4-004 | SOC 2 A1, NIS2 Art. 21(c) |
| Database migration evidence | UCL-PH4-005 | ISO 27001 A.8.31 |
| Feature flag state record | UCL-PH4-006 | SOC 2 CC8 |

**Progressive Adoption:**

| Aspect | Startup | Growth | Enterprise |
|---|---|---|---|
| Rollout strategy | Blue-green + feature flags | Blue-green + canary (10% -> 100%) | Full progressive with Kayenta analysis |
| Canary analysis | Manual metric observation | Semi-automated thresholds | Kayenta automated statistical analysis |
| Multi-region | Single region | Primary + DR region | EU canary -> US canary -> global |
| Database migrations | Expand/contract with manual review | Automated testing in staging | Full migration pipeline with off-peak scheduling |
| Circuit breaker | Manual deployment freeze | Semi-automated (alert-based) | Fully automated error budget enforcement |
| CAB process | Tech Lead decides | Weekly async CAB for High/Critical | Weekly CAB + ad-hoc for Critical |

**Gate Criteria (G4 -- Release Readiness):**
- [ ] Staging environment: all integration and E2E tests pass
- [ ] Canary metrics: no SLO violations during observation window (duration per risk level)
- [ ] Change Advisory Board approval (High/Critical risk changes only)
- [ ] Error budget check: sufficient budget remaining for deployment risk level
- [ ] Rollback plan tested and verified
- [ ] Database migration tested in staging (if applicable)
- [ ] Incident runbook updated
- [ ] Compliance evidence archived in audit repository

### 9.6 Phase 5: Operate and Monitor

**Process ID:** SDLC-PH5
**Process Purpose:** To ensure production reliability, security, and compliance through continuous observability, error budget enforcement, automated incident response, chaos engineering, and proactive optimization.

**Process Outcomes:**
1. Production services meet SLO targets per service tier
2. Incidents detected, classified, and resolved within SLA
3. NIS2 incident reporting obligations met within statutory deadlines
4. Error budgets tracked and enforced with deployment impact
5. Operational knowledge captured in executable runbooks

**Key Activities:**

**Observability Stack:**

| Signal | Tool | Retention | Compliance Use |
|---|---|---|---|
| Metrics | Azure Monitor, Prometheus | 13 months | SOC 2 CC7, FedRAMP AU |
| Logs | Azure Log Analytics, Fluentd | 13 months (EU), 3 years (FedRAMP) | NIS2 Art. 21(g), FedRAMP AU |
| Traces | Azure Application Insights, Jaeger | 90 days | SOC 2 CC7 |
| AI Model Telemetry | MLflow + Azure ML | 13 months (performance metrics); PII-containing I/O per GDPR retention policy | ISO 42001 9.1, EU AI Act Art. 12 |
| Security Events | Microsoft Sentinel | 13 months (EU), 3 years (FedRAMP) | NIS2 Art. 23, FedRAMP IR/SI |
| Cost Telemetry | Azure Cost Management | 13 months | Internal (operational efficiency) |

**SLO Framework with Error Budgets:**

| Service Tier | Availability | Latency (p99) | Error Rate | Error Budget (30-day) | Incident Response |
|---|---|---|---|---|---|
| Tier 1 (Critical) | 99.95% | < 500ms | < 0.1% | 21.6 minutes downtime | 15 min (24/7) |
| Tier 2 (Important) | 99.9% | < 1s | < 0.5% | 43.2 minutes downtime | 30 min (business hours + on-call) |
| Tier 3 (Standard) | 99.5% | < 3s | < 1% | 3.6 hours downtime | 4 hours (business hours) |

**Error Budget Policy:**

When error budget is consumed, consequences escalate automatically:

| Budget Consumed | Action |
|---|---|
| 0-50% | Normal operations; all deployments permitted |
| 50-75% | Alert to SRE lead; increased monitoring; post-incident review mandatory for any incident |
| 75-100% | Deployment circuit breaker engages (see Phase 4); reliability sprint mandated |
| Exhausted | All feature deployments frozen; emergency reliability sprint; CTO escalation |

**NIS2 Incident Reporting Automation:**

| Timeline | Obligation | Automation |
|---|---|---|
| T+0h | Automated incident detection and classification | Sentinel playbook: detect, classify severity, create incident ticket |
| T+24h (max) | Early warning to competent authority (BSI for DE, NCSC-NL for NL) | Automated report generation; human review and submission |
| T+72h (max) | Detailed incident report (severity, impact, IoCs) | Automated report assembly from incident data; human review |
| T+1 month (max) | Final report (root cause, remediation, lessons learned) | PIR-generated report; human review and submission |

**FedRAMP Continuous Monitoring (ConMon):**

| Activity | Cadence | Tool | Output |
|---|---|---|---|
| Vulnerability scanning | Monthly | Defender for Cloud | ConMon vulnerability report |
| Configuration compliance | Continuous | Azure Policy + OPA | Configuration compliance report |
| POA&M updates | Monthly | GRC Platform | Updated POA&M |
| Annual penetration test | Annual | Third-party assessor | Penetration test report |
| Significant change assessment | Per change | Automated | Impact assessment |

**Chaos Engineering:**

| Practice | Cadence | Scope | Prerequisite |
|---|---|---|---|
| Automated chaos experiments | Weekly (non-production) | Service-level fault injection | Steady-state hypothesis defined |
| Game days | Quarterly | Cross-service failure scenarios | Runbooks verified; rollback tested |
| Disaster recovery drill | Semi-annually | Full regional failover | DR plan documented and reviewed |
| AI model failure simulation | Quarterly | Model degradation, data pipeline failure | Model fallback behavior defined |

**Runbook Architecture:**

All operational procedures are documented as executable runbooks:

| Runbook Type | Format | Update Trigger | Owner |
|---|---|---|---|
| Incident response | Executable (Sentinel playbook) | After every PIR | SRE |
| Deployment procedures | Executable (pipeline definition) | After every deployment change | Engineering Lead |
| Disaster recovery | Document + automated scripts | After every DR drill | SRE |
| Escalation procedures | Document | Quarterly review | SRE Lead |
| AI model incident | Executable + document | After every AI incident | ML Engineer + SRE |

**On-Call Structure:**

| Tier | Coverage | Escalation Path | Response Time |
|---|---|---|---|
| Primary on-call | 24/7 rotation (weekly) | Automated page via PagerDuty/Opsgenie | Per SLO tier |
| Secondary on-call | 24/7 rotation (weekly) | Escalation from primary after 15 min | 30 min |
| Engineering escalation | Business hours + reachable | Escalation from secondary | 1 hour |
| Management escalation | Reachable | For Critical incidents or NIS2-reportable events | 2 hours |

**Risk Activities (IEC 31010):**

| Technique | Application | Output |
|---|---|---|
| Root Cause Analysis (5 Whys, Ishikawa) | Post-incident investigation | PIR with root cause and corrective actions |
| Reliability Centered Maintenance | Proactive identification of reliability improvement opportunities | Reliability improvement backlog |
| Statistical Process Control | Monitor operational metrics for trend deviations | SPC charts for SLO compliance |
| Bayesian Network Analysis | Model cascading failure probabilities for chaos engineering | Failure probability models |

**AI Lifecycle Activities (ISO 5338):**

| ISO 5338 Process | Activity | Output |
|---|---|---|
| AI System Operation | Monitor AI systems in production | Operational dashboards |
| AI Performance Monitoring | Track model accuracy, drift, fairness in production | Model performance reports |
| AI Model Maintenance | Execute model retraining when drift thresholds exceeded | Retrained model (feeds back to Phase 2) |
| AI Incident Management | Handle AI-specific incidents (hallucination, bias, drift) | AI incident reports |

**Compliance Evidence Generated:**

| Artifact | UCL Reference | Frameworks Served |
|---|---|---|
| SLO compliance reports | UCL-PH5-001 | SOC 2 A1, SOC 2 CC7 |
| Incident reports (NIS2 format) | UCL-PH5-002 | NIS2 Art. 23, ISO 27001 A.5.24 |
| ConMon monthly reports | UCL-PH5-003 | FedRAMP ConMon |
| Vulnerability scan results | UCL-PH5-004 | NIS2 Art. 21(e), TISAX 5.2 |
| Error budget status reports | UCL-PH5-005 | Internal (operational governance) |
| Chaos engineering results | UCL-PH5-006 | SOC 2 A1, NIS2 Art. 21(c) |
| AI model telemetry reports | UCL-PH5-007 | ISO 42001 9.1, EU AI Act Art. 12 |
| PIR (Post-Incident Review) reports | UCL-PH5-008 | ISO 27001 A.5.27, NIS2 Art. 23 |

**Progressive Adoption:**

| Aspect | Startup | Growth | Enterprise |
|---|---|---|---|
| Observability | Metrics + logs + basic dashboards | Full stack (metrics, logs, traces) | Full stack + AI telemetry + cost monitoring |
| SLO framework | Informal availability targets | Formal SLOs per service tier | SLOs + error budgets + automated enforcement |
| Incident response | CTO + engineer on-call | Primary/secondary rotation | Full on-call structure with escalation |
| NIS2 reporting | Manual process documented | Semi-automated report generation | Fully automated pipeline |
| Chaos engineering | None (manual failure testing) | Quarterly game days | Weekly automated + quarterly game days + semi-annual DR drill |
| Runbooks | Informal documentation | Structured runbooks per service | Executable runbooks with automated testing |
| Cost monitoring | Manual cloud cost review | Monthly cost reporting | Automated cost anomaly detection + per-transaction costing |

**Gate Criteria (G5 -- Post-Release Validation):**
- [ ] SLO compliance verified for observation period (24h minimum for Tier 1, 48h for all tiers)
- [ ] No Critical/High incidents within observation period
- [ ] Error budget impact assessed and within acceptable range
- [ ] AI model metrics stable (if applicable)
- [ ] Customer-reported issues triaged and resolved or in progress
- [ ] NIS2 reporting obligations met (if incident occurred)
- [ ] Monitoring and alerting confirmed operational for new deployment

### 9.7 Phase 6: Feedback and Evolution

**Process ID:** SDLC-PH6
**Process Purpose:** To close the Strategy as Code loop by feeding operational intelligence, customer feedback, AI model performance data, and risk register updates back into strategic decision-making and product evolution, triggering new Phase 0 cycles.

**Process Outcomes:**
1. Feedback signals analyzed and actionable insights generated
2. Decision frameworks applied (pivot/persevere/kill) with documented rationale
3. AI model retraining triggers identified and acted upon
4. Risk register updated from operational data
5. SDLC process improvement actions identified and prioritized

**Key Activities:**

| Activity | Description | Actor |
|---|---|---|
| Production telemetry analysis | Analyze feature adoption, engagement, and conversion metrics | [AI] Autonomous analysis; human review of insights |
| AI model performance monitoring | Track accuracy, drift, fairness trends; identify retraining triggers | [AI] Automated monitoring; human decision on retraining |
| Customer feedback aggregation | Collect NPS, CSAT, feature requests, support ticket analysis | [AI+Human] AI synthesizes; Product reviews |
| Security posture trending | Analyze vulnerability trends, threat landscape evolution | [AI+Human] AI generates trend report; CISO reviews |
| Compliance audit findings | Process audit findings into corrective actions | [Human] Compliance lead |
| Competitive intelligence | Monitor competitor releases, market shifts, technology trends | [AI] Autonomous gathering; CTO reviews |
| Feature health scoring | Calculate composite health score per feature | [AI] Automated scoring |
| SDLC process feedback | Analyze process metrics, gate effectiveness, defect escape rates | [AI+Human] AI analyzes; Engineering Leads review |
| Risk register update | Update organizational risk register from operational data | [Human] CTO/CISO |

**Feature Health Scoring:**

| Signal | Weight | Source |
|---|---|---|
| Adoption rate (DAU/MAU) | 30% | Production telemetry |
| Engagement depth (actions per session) | 20% | Production telemetry |
| Support ticket volume (per 1000 users) | 20% | Support system |
| Revenue attribution | 20% | Business analytics |
| Technical debt score | 10% | SonarQube + manual assessment |

**Decision Framework:**

| Health Score | Action | Decision Authority |
|---|---|---|
| >= 80% | Invest: enhance and expand | Product Owner |
| 60-79% | Maintain: monitor and iterate | Product Owner + Engineering Lead |
| 40-59% | Review: conduct root cause analysis; improve or plan sunset | CTO + Product |
| < 40% for 2 consecutive PIs | Sunset: initiate deprecation process | CTO decision; VMO confirmation |

**AI Model Retraining Triggers:**

| Trigger | Threshold | Action |
|---|---|---|
| Accuracy drift | > 5% degradation from baseline | Automated alert; queue retraining in Phase 2 |
| Data drift | KS statistic > 0.1 on key features | Automated alert; data pipeline review |
| Fairness drift | Disparity ratio changes > 10% | Immediate alert; AI Governance review |
| Concept drift | Prediction distribution shift > 2 sigma | Automated alert; model architecture review |
| User feedback | > 5% of interactions flagged as incorrect | Product review; root cause analysis |

**Risk Register Updates from Operations:**

| Operational Signal | Risk Register Update | Frequency |
|---|---|---|
| Incident trends | Update likelihood assessments for related risks | Monthly |
| Vulnerability scan trends | Update technical risk severity ratings | Monthly |
| Compliance audit findings | Add new risks or update existing risk treatments | Per audit |
| Error budget consumption trends | Update service reliability risk assessments | Monthly |
| AI model performance trends | Update AI-specific risk assessments | Monthly |
| Market/competitive shifts | Update strategic risk register | Quarterly |

**Strategy as Code Loop Closure:**

```
Phase 6 Insights --> Strategic Review --> OKR Updates --> Portfolio Backlog --> Phase 0 (new initiative) or Phase 1 (requirement change) or Phase 2 (tech debt)
```

| Feedback Type | Loop Destination | Cadence |
|---|---|---|
| Feature health < 40% | Phase 0: sunset review | Per PI |
| Customer demand signal | Phase 0: new initiative evaluation | Monthly |
| AI model retraining | Phase 2: retraining sprint | Per trigger |
| Security vulnerability trend | Phase 1: security requirement update | Monthly |
| Process improvement | Phase 2: SDLC tooling change | Per PI |
| Competitive intelligence | Phase 0: strategic re-evaluation | Quarterly |

**Risk Activities (IEC 31010):**

| Technique | Application | Output |
|---|---|---|
| Trend Analysis | Identify patterns in operational metrics over time | Trend reports feeding risk register |
| Pareto Analysis | Prioritize improvement areas by impact (80/20 rule) | Prioritized improvement backlog |
| Cost-Benefit Analysis | Evaluate ROI of proposed improvements and new initiatives | Investment decision support |
| Delphi Technique | Gather expert judgment on emerging risks and opportunities | Expert consensus on strategic risks |

**AI Lifecycle Activities (ISO 5338):**

| ISO 5338 Process | Activity | Output |
|---|---|---|
| AI System Retirement Planning | Assess model end-of-life based on performance trends | Retirement/retraining decision |
| AI Continuous Improvement | Analyze model feedback loops for improvement opportunities | AI improvement backlog |
| AI Impact Reassessment | Periodic reassessment of AI impact per ISO 42005 | Updated impact assessment |

**Compliance Evidence Generated:**

| Artifact | UCL Reference | Frameworks Served |
|---|---|---|
| Feature health reports | UCL-PH6-001 | Internal (portfolio governance) |
| AI model performance trend reports | UCL-PH6-002 | ISO 42001 9.1, EU AI Act Art. 12 |
| Risk register updates | UCL-PH6-003 | ISO 27001 A.6, NIS2 Art. 21(a) |
| Process improvement records | UCL-PH6-004 | ISO 42001 10.1, ISO 27001 10.1 |
| Strategic review records | UCL-PH6-005 | ISO 42001 9.3, ISO 27001 9.3 |
| Sunset/deprecation decisions | UCL-PH6-006 | SOC 2 CC1 |

**Feedback Cadence:**

| Signal | Consumer | Cadence | Mechanism |
|---|---|---|---|
| Feature telemetry | Product Owners | Continuous | App Insights dashboards |
| Feature health score | CTO + Product | Monthly | Automated health report |
| AI model drift | AI Governance | Weekly | Automated drift reports |
| Security posture | CISO | Weekly | Sentinel dashboards |
| Compliance status | Compliance Lead | Bi-weekly | Compliance dashboard |
| Customer feedback | Product + ART leadership | Per sprint | Aggregated feedback reports |
| Strategic KPIs | CTO / LPM | Monthly (Startup/Growth), Quarterly (Enterprise) | OKR review + Strategy as Code audit |
| SDLC process metrics | Engineering Leads | Per PI | Process assessment report |

**Progressive Adoption:**

| Aspect | Startup | Growth | Enterprise |
|---|---|---|---|
| Feedback cadence | Monthly strategic review | Monthly strategic + weekly operational | As defined in cadence table above |
| Feature health scoring | Manual assessment | Semi-automated scoring | Fully automated with dashboards |
| Decision framework | CTO informal decision | Structured scoring with thresholds | Full scoring + governance review |
| AI model monitoring | Basic accuracy tracking | Automated drift detection | Full retraining pipeline with triggers |
| Risk register updates | Quarterly manual review | Monthly semi-automated | Continuous automated + monthly review |
| Customer feedback | Direct customer conversations | NPS/CSAT surveys | Full feedback program with analytics |
| Process feedback | Informal retrospective | PI-level I&A ceremony | Formal process assessment (ISO 33002) |

---

## 10. AI Integration Policy

### 10.1 AI Usage Classification (Enhanced)

All AI usage within the SDLC is classified along two axes: a **usage tier** (governing human oversight requirements) and a **product risk level** (governing regulatory obligations). The intersection of both axes determines the control set applied to any given AI action.

#### 10.1.1 Three-Tier Usage Model

| Tier | Label | IEA Behavior | Human Oversight | Post-Hoc Review | Examples |
|---|---|---|---|---|---|
| **Tier 1** | AI as Assistant | Autonomous with post-hoc review | Not required pre-execution | Within 24h (10% random sample + anomaly-triggered) | Code autocompletion, documentation generation, log anomaly detection |
| **Tier 2** | AI as Collaborator | Human review before execution | Mandatory pre-execution review | Full audit trail retained | Requirements drafting, architecture option generation, code refactoring suggestions |
| **Tier 3** | AI as Decision Support | Human-in-the-loop mandatory | Mandatory approval gate | Full audit trail + compliance attestation | Deployment decisions, model retraining, customer-facing AI behavior changes |

#### 10.1.2 EU AI Act Product Risk Classification (Dual Axis)

Every AI system is also classified per EU AI Act (2024/1689) risk taxonomy:

| EU AI Act Level | Regulatory Obligation | SDLC Control Mapping |
|---|---|---|
| **Prohibited** (Art. 5) | Must not be developed or deployed | Blocked by policy engine; see Section 10.7 |
| **High-Risk** (Art. 6, Annex III) | Full conformity assessment, CE marking, EU database registration | Tier 3 minimum + ISO 42005 impact assessment + continuous monitoring |
| **Limited-Risk** (Art. 50) | Transparency obligations (disclosure to users) | Tier 2 minimum + transparency documentation + user notification |
| **Minimal-Risk** | Voluntary code of conduct | Tier 1 permitted; standard SDLC controls apply |

The **effective control set** for any AI action is the union of controls required by its usage tier and its EU AI Act product risk level. When the two axes conflict, the stricter control set governs.

#### 10.1.3 Runtime Classification Engine

Static tier assignment (e.g., "Copilot is always Tier 1") is insufficient. The AI Gateway (Section 10.6) hosts a runtime classification engine that evaluates every AI request against four layers:

| Layer | Classification Logic | Escalation Trigger |
|---|---|---|
| **L1 -- Static** | Tool-based defaults per Section 10.1.1 | None (baseline) |
| **L2 -- Context** | Code path analysis: if AI-generated output touches `/auth`, `/crypto`, `/pii`, or files annotated `@security-critical` | Escalate to Tier 3 regardless of tool |
| **L3 -- Compositional** | Intent chain analysis within configurable window (default: 1 hour). If aggregate of Tier 1 intents touches > 5 files in the same security domain, or modifies > 100 lines in security-critical paths | Escalate aggregate to Tier 2 or Tier 3 |
| **L4 -- Anomaly** | Statistical deviation from historical request patterns per user, team, or service | Flag for human review; escalate if deviation > 2 standard deviations |

**Classification Engine Output:** Every request receives a classification decision:

```
{
  "effectiveTier": 1 | 2 | 3,
  "euAiActLevel": "minimal" | "limited" | "high",
  "escalationReasons": [],
  "requiredControls": [],
  "classificationTimestamp": "ISO-8601",
  "classificationVersion": "semver"
}
```

All classification decisions are logged as immutable audit events. Classification rule changes require AI Governance Board approval and follow the change management process defined in Section 10.3.

#### 10.1.4 Tier Enforcement Mechanism

The AI Gateway enforces tier boundaries through the following controls:

| Tier | Enforcement | Bypass Authority |
|---|---|---|
| **Tier 1** | Request proceeds; response logged; queued for post-hoc review batch | None required |
| **Tier 2** | Request blocked until designated reviewer approves via IEA approval queue; timeout after 72h triggers escalation | Engineering Lead or above |
| **Tier 3** | Request blocked until quorum approval (minimum 2 approvers: 1 technical + 1 governance); full compliance attestation generated | AI Governance Board only |

### 10.2 AI Lifecycle Management (ISO 5338)

The AI lifecycle follows ISO/IEC 5338:2023 process areas, adapted to the Helge Heupel Group's Azure-native infrastructure and SAFe operating model. Each stage has defined inputs, outputs, quality gates, and responsible roles.

#### 10.2.1 Lifecycle Stages

```
Data Acquisition → Data Preparation → Model Selection → Model Training →
Model Evaluation → Model Deployment → Model Monitoring → Model Retirement
```

#### 10.2.2 Stage Specifications

| Stage | ISO 5338 Ref | Key Activities | Quality Gate | Owner |
|---|---|---|---|---|
| **Data Acquisition** | 6.3.8 | Source identification, data ingestion, consent verification, DPA confirmation | Data quality baseline established; legal review passed | Data Engineer + Legal |
| **Data Preparation** | 6.3.8 | Cleaning, labeling, validation, augmentation, versioning (DVC on Azure Blob) | Schema validation pass; statistical quality checks pass (Great Expectations); bias pre-screening complete | Data Engineer |
| **Model Selection** | 6.3.9 | Architecture review, baseline comparison, computational budget assessment | ADR documenting selection rationale; cost projection approved | ML Engineer + Architect |
| **Model Training** | 6.3.9 | Training execution, hyperparameter optimization, experiment tracking (Azure ML / MLflow) | All experiments logged with reproducibility metadata; best model exceeds baseline metrics | ML Engineer |
| **Model Evaluation** | 6.3.10 | Performance, bias/fairness (Fairlearn), robustness, explainability (SHAP/LIME) testing | Evaluation report covers all ISO 42001 Annex A criteria; AI Governance Board sign-off for High-Risk models | ML Engineer + AI Ethics Champion |
| **Model Deployment** | 6.3.11 | Shadow deploy → Canary (10%) → Progressive rollout (25% → 50% → 100%) | No SLO violations during each stage; rollback tested before promotion | ML Engineer + SRE |
| **Model Monitoring** | 6.3.12 | Drift detection (input, output, concept), performance tracking, fairness monitoring | Automated alerts on drift thresholds; weekly governance dashboard updated | SRE + AI Governance Board |
| **Model Retirement** | 6.4.5 | Deprecation notice, traffic migration, model archive, documentation closure | Zero traffic to retired model; successor model meets or exceeds all metrics; audit trail archived | ML Engineer + Product Owner |

#### 10.2.3 MLOps Pipeline Architecture

The MLOps pipeline operates in parallel with the CI/CD pipeline (Section 9.3). Trigger types and integration points:

| Trigger | Pipeline | Integration Point |
|---|---|---|
| Code change (model code, serving code) | Standard CI/CD | Shared artifact registry |
| Data change (new training data, feature definition) | Data Pipeline → retraining trigger | DVC version tag triggers Azure ML Pipeline |
| Model change (retraining, new architecture) | Model Pipeline | Model registry promotion triggers deployment pipeline |
| Prompt change | Prompt Pipeline (Section 10.3) | Prompt registry version triggers prompt CI/CD |
| Evaluation dataset change | Re-evaluation Pipeline | All affected models and prompts re-evaluated |

#### 10.2.4 Model Registry Schema

Every model in the Azure ML Model Registry must include the following metadata:

| Field | Type | Required | Description |
|---|---|---|---|
| `model_id` | UUID | Yes | Unique identifier |
| `version` | Semver | Yes | Semantic version (MAJOR.MINOR.PATCH) |
| `training_data_version` | DVC hash | Yes | Exact data version used for training |
| `hyperparameters` | JSON | Yes | Full hyperparameter configuration |
| `evaluation_metrics` | JSON | Yes | All evaluation metrics with thresholds |
| `training_environment` | Docker hash | Yes | Exact training environment image |
| `fairness_audit` | JSON | Yes | Fairlearn audit results |
| `iso42001_risk_class` | Enum | Yes | Risk classification per ISO 42001 |
| `eu_ai_act_level` | Enum | Yes | Prohibited / High / Limited / Minimal |
| `approved_environments` | List | Yes | Environments approved for deployment (dev/staging/prod) |
| `promotion_history` | List | Yes | Approver identity, timestamp, justification for each promotion |
| `owner` | User ID | Yes | Human responsible for model behavior |

#### 10.2.5 Feature Store Strategy

For Verity VE/EAM products that require ML feature serving, the following feature store architecture applies:

- **Tool:** Azure Feature Store (primary) or Feast on Azure (if custom requirements arise)
- **Online Store:** Azure Cache for Redis (low-latency feature serving for inference)
- **Offline Store:** Azure Blob Storage / Delta Lake (training and batch inference)
- **Feature Governance:** Every feature definition version-controlled; schema changes require review; point-in-time correctness enforced for training data

#### 10.2.6 Experiment Tracking Requirements

All ML experiments must be tracked in Azure ML or MLflow with the following mandatory fields: experiment name, run ID, parameters, metrics, artifacts, source code commit hash, data version, environment specification, and status. Experiments without complete metadata are automatically flagged and cannot be promoted to the model registry.

### 10.3 Prompt Engineering Governance

Prompts are first-class software artifacts. They are versioned, tested, reviewed, deployed, and monitored with the same rigor as application code.

#### 10.3.1 Prompt Version Control

All production prompts are stored in a Git-based prompt registry alongside application code. Each prompt artifact includes:

| Artifact Component | Description |
|---|---|
| **Prompt template** | The parameterized prompt text |
| **Metadata manifest** | ID, version, owner, tier classification, approved model versions, expected output schema, PII handling classification |
| **Test suite** | Unit tests, regression tests, adversarial tests (see 10.3.2) |
| **Change log** | Human-authored description of changes per version |

**Naming convention:** `{product}.{feature}.{action}.v{version}` (e.g., `verity-ve.cost-analysis.generate-report.v3`)

#### 10.3.2 Prompt Testing Framework

| Test Type | Purpose | Minimum Dataset Size | Pass Criteria |
|---|---|---|---|
| **Unit tests** | Deterministic output validation against golden dataset | 100 examples | >= 90% match rate |
| **Regression tests** | Quality comparison against previous prompt version | 100 examples | Quality score >= previous version |
| **Adversarial tests** | Prompt injection resistance, jailbreak resistance | 50 attack vectors | 0 successful injections |
| **Performance tests** | Token count, latency, cost per invocation | 50 invocations | Within defined budget |
| **Fairness tests** | Output consistency across demographic inputs | 50 examples per group | Disparity ratio < configured threshold |

#### 10.3.3 Prompt Security Review

All prompts that handle customer data or generate executable content require a security review covering:

- **Injection resistance:** Tested against OWASP LLM Top 10 prompt injection patterns
- **Data leakage risk:** System prompt content classified as Confidential; never exposed to end users
- **PII handling:** Prompts that process PII must declare PII categories and apply redaction rules before logging
- **Output sandboxing:** Prompts that generate executable content (code, SQL, API calls) must route output through deterministic validation before execution

#### 10.3.4 Prompt A/B Testing and Rollback

- **Canary rollout:** New prompt version serves 10% of traffic with quality monitoring via AI Gateway
- **Promotion criteria:** No quality score degradation > 5% over observation window (minimum 4 hours)
- **Instant rollback:** Previous prompt version remains warm in the AI Gateway; rollback executes in < 30 seconds
- **Automated rollback triggers:** Quality score drops > 10%, error rate exceeds 5%, or hallucination rate exceeds configured threshold

### 10.4 AI Observability

AI observability extends the infrastructure observability stack (Section 16.2) with AI-specific signals. All AI observability data flows through the AI Gateway.

#### 10.4.1 Observability Signal Inventory

| Signal | What It Measures | Collection Point | Retention | Compliance Mapping |
|---|---|---|---|---|
| **Prompt/Completion Logs** | Full request and response text with automatic PII redaction | AI Gateway | 13 months | ISO 42001 9.1, EU AI Act Art. 12 |
| **Token Usage Metrics** | Tokens per request, per model, per feature, per team | AI Gateway → Prometheus | 13 months | Cost governance |
| **Latency Distribution** | p50 / p95 / p99 per model endpoint, per prompt template | Azure Application Insights | 90 days | SLO enforcement |
| **Quality Scores** | Task-specific output quality (accuracy, coherence, factual correctness) | Custom evaluation pipeline (sampled) | Indefinite | ISO 42001 A.6 |
| **Hallucination Rate** | Detected hallucinations / total responses (sampled at configurable rate, minimum 5%) | Custom detection pipeline | Indefinite | EU AI Act Art. 15 |
| **Cost Attribution** | Dollar cost per team, per feature, per customer (for multi-tenant Verity) | AI Gateway → Azure Cost Management | 13 months | Budget governance |
| **Error Classification** | Error type: timeout, rate limit, content filter, model error, validation error | AI Gateway | 13 months | Incident management |
| **Model Drift Indicators** | Feature drift (KS test, PSI), prediction drift, concept drift | Azure ML Monitoring | Indefinite | ISO 5338 6.3.12 |
| **Fairness Metrics** | Disparity metrics across protected attributes | Custom fairness pipeline | Indefinite | ISO 42001 A.6, EU AI Act Art. 10 |
| **Intent Contract Audit** | Intent lifecycle: created, classified, approved, executed, failed, rolled back | Azure Event Hub (event store) | Indefinite | ISO 42001 9.2, SOC 2 CC7 |

#### 10.4.2 PII Redaction in Logs

All prompt/completion logging passes through a PII redaction pipeline before storage:

1. Named entity recognition (NER) identifies PII tokens (names, emails, addresses, phone numbers, IDs)
2. Identified tokens are replaced with typed placeholders (`[PERSON_1]`, `[EMAIL_1]`)
3. Original-to-placeholder mapping stored in a separate, access-controlled audit vault (accessible only for incident investigation with two-person authorization)
4. Redaction effectiveness is audited quarterly; false negative rate must remain below 1%

#### 10.4.3 Dashboard Requirements

| Dashboard | Audience | Refresh Rate | Key Metrics |
|---|---|---|---|
| **AI Operations** | SRE team | Real-time (< 1 min) | Request rate, error rate, latency percentiles, cost run rate, circuit breaker status |
| **AI Governance** | AI Governance Board | Weekly digest + on-demand | Drift status, fairness metrics, quality trends, risk assessment coverage, tier escalation counts |
| **Feature AI Performance** | Product Owners | Daily | Per-feature quality scores, user satisfaction correlation, usage patterns, cost per feature |

### 10.5 AI Model Supply Chain Security

AI model supply chain security extends the software supply chain controls (Section 9.3) to cover model artifacts, training data, and third-party AI services.

#### 10.5.1 Model Provenance Tracking

Every model in production must have a verifiable provenance record:

| Model Origin | Required Provenance |
|---|---|
| **First-party models** | Training data lineage (DVC hash), training environment (Docker image hash), training code commit, hyperparameters, full evaluation results, bias/fairness audit |
| **Third-party API models** (Azure OpenAI) | Vendor name, model identifier, API version, data processing agreement reference, content filtering configuration, last assessment date |
| **Open-source models** | Source repository URL, commit hash, weight checksum (SHA-256), license identifier (SPDX), known vulnerability scan results, safety evaluation results |

#### 10.5.2 Third-Party Model Assessment Process

Before any third-party or open-source model is approved for use, it must pass the following assessment:

| Assessment Area | Evaluation Criteria | Assessor |
|---|---|---|
| **Security** | Adversarial robustness, prompt injection resistance, output predictability | Security Champion |
| **Privacy** | Training data memorization risk, PII extraction risk, data processing terms | Data Protection Officer |
| **Bias/Fairness** | Fairness across protected attributes for intended use case | AI Ethics Champion |
| **License** | Commercial use compatibility, attribution requirements, derivative work terms | Legal |
| **Vendor Risk** | Supply chain reliability, SLA, incident response, NIS2 Art. 21(d) alignment | CISO + Procurement |

Assessment results are recorded in the AI System Register and reviewed annually or upon model version change.

#### 10.5.3 Model Signing and Verification

- All first-party models are signed using Cosign (Sigstore), extending the existing artifact signing infrastructure
- Model weight checksums (SHA-256) are verified at every deployment stage (registry pull, staging load, production load)
- Third-party API model versions are pinned in the AI Gateway configuration; version changes require the full assessment process in 10.5.2

#### 10.5.4 Azure OpenAI Service Version Pinning Policy

| Policy | Specification |
|---|---|
| **Version pinning** | All production workloads pin to a specific Azure OpenAI model version (e.g., `gpt-4o-2024-08-06`). The `latest` alias is prohibited in production |
| **Upgrade process** | New model version enters evaluation pipeline (Section 10.2.2); must pass all evaluation criteria and regression tests before production promotion |
| **Deprecation response** | When Azure announces model version deprecation, the upgrade process begins within 5 business days; production migration completes at least 30 days before deprecation date |
| **Emergency rollback** | If a pinned model version exhibits degraded behavior, the AI Gateway routes traffic to the previous pinned version within 30 seconds |

#### 10.5.5 AI Bill of Materials (AI-BOM)

An AI-BOM is published alongside each product release, extending the existing CycloneDX SBOM:

| AI-BOM Field | Description |
|---|---|
| Model identifier and version | For all models in the release |
| Training framework and version | PyTorch, TensorFlow, ONNX Runtime, etc. |
| Training data sources | Data source identifiers (not raw data) with DVC versions |
| Fine-tuning datasets | Dataset identifiers and versions |
| Evaluation benchmarks | Benchmark names, versions, and scores |
| Known limitations | Documented failure modes and out-of-scope uses |
| Third-party API dependencies | Azure OpenAI model versions, API versions |

**Format:** CycloneDX ML extension (when available) or custom JSON schema aligned with CycloneDX structure.
**Cadence:** Published per release, archived indefinitely.

### 10.6 Approved AI Toolchain (Enhanced)

#### 10.6.1 Tool Inventory

| Tool | Use Case | Tier | Data Boundary | Approval Status |
|---|---|---|---|---|
| Azure OpenAI Service | LLM capabilities within Verity products | 1--3 | Azure EU / US (tenant-isolated) | Approved |
| GitHub Copilot Enterprise | Code assistance for developers | 1 | No code retention (enterprise config) | Approved |
| Azure AI Studio | Model fine-tuning, evaluation, prompt flow | 2--3 | Azure EU / US (tenant-isolated) | Approved |
| Azure Machine Learning | MLOps pipeline, model registry, experiment tracking | 2--3 | Azure EU / US | Approved |
| Microsoft Defender for AI | AI security monitoring, prompt injection detection | 1 | Azure EU / US | Approved |
| **AI Gateway** (Azure API Management + custom policy layer) | Centralized LLM request routing, tier enforcement, token budget management, cost attribution, rate limiting, model fallback | 1--3 | Azure EU / US | **New -- Approved** |
| **Azure ML Experiment Tracking / MLflow** | Experiment tracking, hyperparameter logging, metric comparison | 2--3 | Azure EU / US | **New -- Approved** |
| **Azure Feature Store / Feast** | Feature engineering, online/offline feature serving | 2--3 | Azure EU / US | **New -- Evaluation** |
| **Azure AI Search** (vector index) | Vector database for RAG patterns, semantic search | 1--2 | Azure EU / US (tenant-isolated) | **New -- Approved** |
| **Prompt Registry** (Git-based, custom) | Prompt version control, metadata, test suite storage | 1--3 | Git repository (same as source code) | **New -- Approved** |
| **Custom Evaluation Harness** | Systematic AI output evaluation (quality, factuality, coherence) | 2--3 | Azure EU / US | **New -- Approved** |
| **Fairlearn** | Bias and fairness evaluation for ML models | 2--3 | Runs locally / Azure ML compute | **New -- Approved** |

#### 10.6.2 Tool Approval Process

New AI tools must pass the following approval workflow before use with any Helge Heupel Group data:

1. **Request:** Engineer submits tool evaluation request with use case, data boundary requirements, and tier classification
2. **Security Assessment:** CISO team evaluates data handling, authentication, encryption, and supply chain risk
3. **Privacy Assessment:** DPO evaluates data processing terms, sub-processors, and GDPR/CCPA compliance
4. **AI Governance Review:** AI Governance Board evaluates alignment with ISO 42001 and EU AI Act obligations
5. **Decision:** Tool is classified as Approved, Evaluation (time-limited pilot with restricted data), or Rejected
6. **Re-assessment:** Approved tools are re-assessed annually or upon significant vendor/product change

#### 10.6.3 AI Gateway Architecture

The AI Gateway is the single enforcement point for all LLM interactions in production:

```
Application Service → AI Gateway → Model Endpoint(s)
                          │
              ┌───────────┼───────────┐
              │           │           │
        Classification  Rate/Cost   Logging
        Engine          Control     (PII-redacted)
        (Section 10.1.3) (token     (Section 10.4)
                         budgets)
```

**Implementation:** Azure API Management with custom inbound/outbound policies for tier enforcement, token counting, cost tagging, and PII redaction, augmented by a thin custom service for compositional risk analysis (L3) and Intent Contract integration.

### 10.7 Prohibited AI Practices (Enhanced)

The following AI practices are prohibited across the Helge Heupel Group. Prohibitions are enforced through a combination of policy engine rules (OPA), AI Gateway controls, and organizational controls.

#### 10.7.1 EU AI Act Article 5 Prohibitions (Retained)

- AI systems that deploy subliminal, manipulative, or deceptive techniques
- AI systems that exploit vulnerabilities of specific groups (age, disability, social/economic situation)
- Social scoring systems
- Real-time biometric identification in publicly accessible spaces
- AI systems that infer emotions in workplace contexts (beyond safety-critical applications)

#### 10.7.2 Helge Heupel Group Additional Prohibitions

| Prohibited Practice | Enforcement Mechanism | Rationale |
|---|---|---|
| AI-generated code in security-critical paths (`/auth`, `/crypto`, `/pii`, `@security-critical`) without human architectural design and code review | Runtime classification engine (L2 context escalation) + mandatory Tier 3 approval | ISO 27001 A.8.28; defense against AI-introduced vulnerabilities in trust-critical code |
| Using non-pinned model versions (`latest` alias) in production | AI Gateway configuration validation; deployment pipeline rejects unversioned model references | ISO 5338 6.3.6; reproducibility and regression prevention |
| Training or fine-tuning on customer data without executed DPA and completed DPIA | Data pipeline ingestion gate requires DPA reference and DPIA status check | GDPR Art. 35, ISO 42001 A.4 |
| Deploying AI features classified as High-Risk or Limited-Risk without completed AI Impact Assessment (ISO 42005) | Deployment pipeline gate checks AI System Register for current impact assessment | EU AI Act Art. 9, ISO 42005 |
| Use of non-approved AI tools for processing proprietary or customer data | Network-level controls (DLP), endpoint monitoring, quarterly access audit | ISO 27001 A.8.4, NIS2 Art. 21(d) |
| Autonomous AI decision-making on production systems without human approval path | AI Gateway enforces Tier 2 minimum for all production-targeting actions | ISO 42001 A.8 (human oversight) |
| Storing unredacted prompt/completion logs containing customer PII | PII redaction pipeline (Section 10.4.2) enforced at AI Gateway; storage layer rejects unredacted payloads | GDPR Art. 5(1)(c), data minimization |

### 10.8 AI Agent Governance

As Verity products evolve toward agentic AI patterns and the Helge Heupel Group employs multi-agent workflows (including this SDLC development process), formal governance for AI agent systems is required.

#### 10.8.1 Agent Registry

All AI agents (autonomous or semi-autonomous) operating within Helge Heupel Group systems must be registered in the AI System Register with:

| Registry Field | Description |
|---|---|
| Agent ID | Unique identifier |
| Purpose | Clear statement of the agent's intended function |
| Capabilities | Exhaustive list of actions the agent can perform (allowlist, not denylist) |
| Tier classification | Per Section 10.1.1; determines autonomy boundaries |
| Maximum autonomy level | What the agent can do without human approval |
| Escalation path | Named humans responsible for edge-case decisions |
| Owner | Human accountable for the agent's behavior |
| Token budget | Maximum token consumption per hour/day |
| Action rate limit | Maximum actions per time window (prevents infinite loops) |

#### 10.8.2 Agent Trust Levels and Autonomy Boundaries

| Agent Tier | Autonomy | Human Oversight | Example |
|---|---|---|---|
| **Tier 1** | Execute within defined scope without per-action approval | Post-hoc review (daily digest + random sampling) | Code suggestion agent, log analysis agent |
| **Tier 2** | Propose actions; human must approve before execution | Synchronous review queue with 72h timeout | Architecture recommendation agent, security analysis agent |
| **Tier 3** | Provide recommendations only; human must independently initiate execution | Full human-in-the-loop for every output | Deployment decision agent, incident response agent |

**Critical constraint:** An agent must never escalate its own autonomy level. Autonomy changes require AI Governance Board approval and a configuration change through the standard change management process.

#### 10.8.3 Agent-to-Agent Communication Governance

- All inter-agent communication must flow through Intent Contracts (extending the IEA framework in Section 8)
- No direct agent-to-agent API calls, shared memory, or side channels outside the Intent Contract framework
- All inter-agent messages are logged, timestamped, and auditable
- An agent must not modify another agent's state, configuration, or capabilities

#### 10.8.4 Multi-Agent Workflow Patterns

| Pattern | Description | Required Safeguards |
|---|---|---|
| **Sequential** | Agent A output feeds Agent B input (via Intent Contracts) | Per-stage timeout, per-stage quality gate, total workflow budget limit |
| **Fan-out / Fan-in** | Coordinator agent distributes tasks to specialist agents, aggregates results | Coordinator budget = sum of specialist budgets + overhead; deadlock detection; partial failure handling |
| **Peer Review** | Agent A generates output, Agent B reviews (using a different model or prompt) | Review agent must operate on separate model/prompt; disagreements escalate to human |
| **Hierarchical** | Orchestrator agent delegates to specialist agents with defined scope | Orchestrator cannot delegate beyond its own tier level; specialist agents inherit parent constraints |

#### 10.8.5 Human Oversight Requirements for Agent Orchestration

- **Kill switch:** Any authorized human can immediately terminate any agent or multi-agent workflow. The AI Gateway exposes an emergency stop endpoint per agent and per workflow
- **Budget enforcement:** No agent workflow may exceed its configured token or cost budget. The AI Gateway enforces hard limits with automatic termination on breach
- **Timeout enforcement:** No agent workflow may run longer than its configured maximum duration (default: 1 hour for Tier 1, 4 hours for Tier 2, 24 hours for Tier 3)
- **Rollback capability:** All agent actions that modify system state must be reversible within a defined time window via Git-recorded commits. The Intent Contract framework records compensating actions for every state change
- **Production isolation:** No agent may directly modify production systems. All production changes must flow through the standard deployment pipeline (Section 9.5)

---

## 11. AI Management System (AIMS)

### 11.1 AIMS Scope and Context (ISO 42001 Clauses 4.1--4.3)

#### 11.1.1 Context of the Organization (Clause 4.1)

The organization shall determine external and internal issues relevant to its purpose that affect its ability to achieve the intended outcomes of the AIMS.

**External context factors:**

| Factor | Description | Monitoring Mechanism |
|---|---|---|
| EU AI Act (2024/1689) | Regulation governing AI systems placed on the EU market; risk-based classification, conformity assessment, and post-market obligations | Legislative tracker; quarterly legal review |
| ISO/IEC 42001:2023 | Certifiable standard for AI management systems; harmonized structure with ISMS | Standards monitoring; annual standard review |
| Customer AI expectations | Enterprise customers (automotive, infrastructure, public sector) increasingly require AI governance evidence | Customer RFP analysis; contract review |
| Competitive landscape | Incumbents (Microsoft, Google) establishing AI governance practices as market differentiators | Competitive intelligence cycle |
| AI technology evolution | Rapid advancement in foundation models, agent architectures, and multimodal AI | Technology radar; quarterly assessment |
| National AI strategies | DE (AI Strategy 2025), NL (NLAIC), US (Executive Orders on AI) | Policy tracker |

**Internal context factors:**

| Factor | Description | Monitoring Mechanism |
|---|---|---|
| AI maturity level | Startup phase; lean team; AI is both a product component and a development tool | Annual maturity self-assessment |
| Technical architecture | Intent-Execution Architecture (IEA) as the AI governance enforcement layer | Architecture review board |
| Resource constraints | Small team requires automation-first governance; manual processes do not scale | Quarterly resource review |
| Organizational culture | "AI-Augmented, Human-Governed" principle; Strategy as Code philosophy | Culture survey; retrospectives |
| ISMS integration | Existing ISO 27001 ISMS provides foundational controls and risk management infrastructure | ISMS management review |
| Multi-entity structure | GmbH (DE), B.V. (NL), Inc. (US) with different regulatory regimes | Entity compliance mapping |

#### 11.1.2 Interested Parties and Their AI-Related Requirements (Clause 4.2)

| Interested Party | AI-Related Requirements | Engagement Mechanism |
|---|---|---|
| Customers (enterprise deployers) | Transparency about AI features; AI risk documentation; right to human override; conformity evidence | Contract terms; product documentation; customer advisory engagement |
| End users (affected persons) | Notification of AI interaction; explainability of AI-assisted decisions; redress mechanisms | Product UX; transparency notices; support channels |
| Regulators (BSI, AP, NCSC-NL, FTC) | EU AI Act conformity; incident reporting; technical documentation (Annex IV); cooperation on request | Regulatory correspondence; conformity documentation |
| Employees (developers, operators) | AI literacy training (EU AI Act Art. 4); clear acceptable use policy; toolchain guidance; competence development | AI policy; training program; AI ethics champion network |
| Investors and shareholders | AI risk exposure visibility; governance maturity evidence; strategic AI positioning | Board reporting; due diligence packages |
| Suppliers (Azure, GitHub, model providers) | Data processing boundaries; model performance SLAs; security commitments | Supplier contracts; DPAs; vendor risk assessments |
| Industry bodies (VDA, BSI, ISO) | Conformity with sector-specific AI requirements (TISAX AI addendum, if applicable) | Certification audits; industry working groups |
| Civil society and academia | Responsible AI development; fairness; societal impact consideration | Public transparency reporting (annual, at Growth stage) |

#### 11.1.3 AIMS Scope (Clause 4.3)

The AIMS applies to **all AI systems** developed, deployed, procured, or used by the Helge Heupel Group across all entities (GmbH, B.V., Inc.), covering three categories:

1. **Product AI** – AI features and components within Verity Value Engineering (VE) and Verity Enterprise Architecture Management (EAM) that are placed on the market or put into service for customers.
2. **Development AI** – AI tools and services used within the SDLC to augment software development, testing, deployment, and operations (e.g., GitHub Copilot, Claude Code, Azure OpenAI for development).
3. **Third-party AI services** – AI capabilities consumed from external providers that are integrated into products or used in internal operations (e.g., Azure OpenAI Service, Azure AI Studio).

**Scope boundaries:**

- The AIMS governs the AI aspects of the SDLC (Section 9) and interacts with the ISMS for shared controls.
- The AIMS does not duplicate the ISMS; shared control domains (access control, incident management, cryptography) are implemented once and cross-referenced.
- The AIMS scope includes the entire AI system lifecycle: conception, design, development, testing, deployment, operation, monitoring, and retirement.

#### 11.1.4 Relationship Between AIMS and ISMS (ISO 27001)

| Aspect | ISMS (ISO 27001) | AIMS (ISO 42001) | Integration Point |
|---|---|---|---|
| Risk register | Information security risks | AI-specific risks (data quality, model behavior, societal impact) | Shared risk register; AI risks flagged with AI tag; unified risk treatment process |
| Audit program | Annual internal audit of ISMS controls | Annual internal audit of AIMS controls | Coordinated audit schedule; shared controls audited once |
| Management review | ISMS management review (Clause 9.3) | AIMS management review (Clause 9.3) | Combined quarterly management review with distinct agenda sections |
| Incident management | Security incidents (NIS2 reporting) | AI-specific incidents (model failure, bias event, hallucination) | Unified incident taxonomy with AI classification extension |
| Document hierarchy | IS Policy > Procedures > Records | AI Policy > Procedures > Records | Aligned document numbering; shared document control process |

### 11.2 AI Policy (ISO 42001 Clause 5.2)

The AI Policy is a standalone governance document, distinct from the SDLC and the Information Security Policy. It is approved by the Managing Directors (Geschaeftsfuehrer) and reviewed annually.

#### 11.2.1 AI Policy Content

The AI Policy shall include:

1. **Purpose and applicability.** The policy applies to all personnel, contractors, and third parties involved in AI system lifecycle activities across all Helge Heupel Group entities.

2. **Commitment to responsible AI.**
   - AI systems shall be developed and used in a manner that respects human dignity, autonomy, and fundamental rights.
   - The "AI-Augmented, Human-Governed" principle: AI augments human capability; humans retain authority over all consequential decisions.
   - No AI output reaches production or affects end users without deterministic verification.

3. **Commitment to regulatory conformity.**
   - Full conformity with the EU AI Act (Regulation 2024/1689) for all AI systems placed on the EU market.
   - Certification to ISO/IEC 42001:2023 as the governing management system standard.
   - Alignment with ISO/IEC 12792, ISO/IEC 38507, ISO/IEC TR 24368, and ISO/IEC TS 42119-2 as supporting standards.

4. **Framework for AI objectives.** The policy provides the framework for setting measurable AI objectives (see Section 11.9 -- Plan).

5. **Commitment to continual improvement.** The AIMS shall be continually improved through the PDCA cycle, internal audit, management review, and corrective action.

6. **Prohibited practices.** The AI Policy incorporates by reference the prohibited AI practices defined in Section 10.7 (EU AI Act Art. 5 alignment) and extends them with internal prohibitions (no use of non-approved AI tools for proprietary data; no AI-generated code in security-critical paths without human design).

7. **Ethical commitments.** Commitment to fairness, non-discrimination, environmental sustainability, transparency, and stakeholder engagement in AI governance (per ISO/IEC TR 24368).

#### 11.2.2 AI Policy Communication

- Published in the internal knowledge base and accessible to all personnel.
- Summarized in onboarding materials for new employees and contractors.
- Referenced in supplier and customer contracts where AI features are delivered.
- Reviewed and reaffirmed annually by the Managing Directors.

### 11.3 AI System Registry (ISO 42001 Annex A.4.2)

#### 11.3.1 Registry Purpose

The AI System Registry is the authoritative inventory of all AI systems within AIMS scope. It serves as the foundation for risk assessment, impact assessment, conformity assessment, and regulatory reporting (EU AI Act Art. 49).

#### 11.3.2 Registry Schema

Each AI system entry shall contain:

| Field | Description | Example |
|---|---|---|
| `systemId` | Unique identifier (format: `AI-{category}-{seq}`) | `AI-PROD-001` |
| `name` | Descriptive name | Verity VE Cost Prediction Engine |
| `category` | Product AI / Development AI / Third-party AI | Product AI |
| `description` | Plain-language description of what the system does | Predicts construction cost deviations using historical project data |
| `intendedUse` | Documented intended purpose per ISO 42001 A.4.3 | Decision support for value engineering recommendations |
| `euAiActClass` | EU AI Act risk classification (see 11.4) | Limited-Risk |
| `sdlcTier` | SDLC usage tier (see 11.4) | Tier 3 – Decision Support |
| `safetyAssuranceLevel` | ISO TS 42119-2 safety assurance level | SAL-2 |
| `dataInputs` | Description of data consumed | Historical project cost data, BIM models, material pricing |
| `dataOutputs` | Description of outputs produced | Cost deviation predictions with confidence intervals |
| `responsibleOwner` | Individual accountable for the system | Product Owner, ART Verity VE |
| `lifecycleStatus` | Development / Deployed / Monitoring / Deprecated / Retired | Deployed |
| `applicableControls` | Annex A controls applicable to this system | A.5.2, A.6.2, A.6.3, A.7.2, A.8.2, A.9.3 |
| `lastRiskAssessment` | Date of most recent risk assessment | 2026-01-15 |
| `lastImpactAssessment` | Date of most recent impact assessment (if required) | 2026-01-15 |
| `conformityStatus` | Conformity assessment status (if high-risk) | In Progress / Compliant / Non-compliant |
| `deploymentEntities` | Which entities deploy this system | GmbH, B.V. |

#### 11.3.3 Registry Maintenance

- **Update frequency:** Updated per sprint for systems under active development; reviewed quarterly for deployed systems.
- **Update triggers:** New AI feature development; model retraining or architecture change; risk reclassification; lifecycle status change; regulatory change affecting classification.
- **Format:** Maintained as structured YAML in source control (aligned with "Everything as Code"), with a rendered dashboard in the GRC platform.
- **Review authority:** AI Governance Board reviews the complete registry quarterly.
- **Automation:** CI/CD pipeline validates registry completeness against deployed AI components; missing entries block deployment (Gate 2).

### 11.4 AI Risk Assessment (ISO 42001 Clause 6.1.2, ISO 23894)

#### 11.4.1 Dual-Axis Risk Classification

The AIMS uses a dual-axis classification framework that separates *regulatory product risk* from *internal usage context*:

**Axis 1 -- EU AI Act Product Risk (applied to Product AI and customer-facing Third-party AI):**

| Classification | Criteria (EU AI Act) | AIMS Controls | Examples |
|---|---|---|---|
| **Prohibited** (Art. 5) | Systems listed in Art. 5(1)(a)-(f) | System must not be developed or deployed; immediate escalation to Legal | Social scoring; subliminal manipulation; real-time biometric ID |
| **High-Risk** (Art. 6, Annex III) | Systems in Annex III categories or safety components of regulated products | Full Art. 9-15 compliance; conformity assessment; Annex IV documentation; post-market monitoring | AI for creditworthiness assessment in VE; workforce planning AI in EAM (if applicable) |
| **Limited-Risk** (Art. 50) | Systems that interact with humans, generate synthetic content, or perform emotion recognition | Transparency obligations; user notification; content marking | AI chatbots in Verity products; AI-generated reports |
| **Minimal-Risk** | All other AI systems | Voluntary codes of practice; internal best practices | Internal log analysis; code autocompletion |

**Axis 2 -- SDLC Usage Tier (applied to Development AI and internal-use Third-party AI):**

| Tier | IEA Trust Model | Human Oversight | Examples |
|---|---|---|---|
| **Tier 1 – Assistant** | Autonomous with Post-Hoc Review (within 24h) | Review within 24 hours | Code autocompletion; documentation generation; test case generation |
| **Tier 2 – Collaborator** | Human Review Before Execution | Mandatory review before any output is accepted | Requirements drafting; architecture suggestions; security analysis |
| **Tier 3 – Decision Support** | Human-in-the-Loop Mandatory | Real-time human approval required | Deployment decisions; incident response; model updates; customer-facing changes |

**Combined risk matrix:** Where an AI system spans both axes (e.g., a Development AI tool that processes customer data), the higher classification governs. A Tier 1 development tool that handles data from a High-Risk product AI system inherits the data governance requirements of the High-Risk classification.

#### 11.4.2 AI Risk Sources (ISO 23894, ISO 42001 Annex C)

The risk assessment shall consider the following AI-specific risk source categories:

| Category | Risk Sources | Assessment Method |
|---|---|---|
| **1. Data and data governance** | Training data quality; data representativeness; data bias; data provenance gaps; data poisoning; privacy violations from inference | Data quality metrics; bias statistical tests; provenance audit; privacy impact review |
| **2. Model and algorithm** | Model accuracy degradation; distributional shift; adversarial vulnerability; hallucination; emergent behavior; opacity of decision logic | Model performance benchmarks; adversarial testing; explainability scoring; drift monitoring |
| **3. System integration** | Interaction effects between AI and non-AI components; cascading failures; feedback loops; integration boundary mismatches | Integration testing; failure mode analysis; system-level safety review |
| **4. Operational environment** | Deployment context changes; user misuse or over-reliance; automation bias; infrastructure failures affecting AI availability | Operational risk assessment; user behavior analysis; infrastructure resilience testing |
| **5. Societal and stakeholder impact** | Fairness violations; discriminatory outcomes; labor displacement; environmental cost; erosion of human autonomy; cultural insensitivity | Impact assessment (Section 11.5); stakeholder consultation; ethical review |

#### 11.4.3 Risk Appetite Statement

The AI Governance Board, with Managing Directors' approval, establishes the following quantitative risk appetite:

| Risk Dimension | Appetite | Threshold (Escalation Required) |
|---|---|---|
| AI system availability (product) | Aligned with SLO framework (Section 16.1) | SLO breach for Tier 1 services |
| Model accuracy degradation | <= 5% deviation from validated baseline | > 5% triggers revalidation; > 10% triggers immediate rollback |
| Bias / fairness deviation | Disparate impact ratio >= 0.8 (four-fifths rule) across protected attributes | Ratio < 0.8 triggers mandatory remediation |
| Hallucination rate (generative AI) | <= 2% for factual claims in product AI | > 2% triggers human review enforcement; > 5% triggers feature suspension |
| Data quality score | >= 95% completeness; >= 98% accuracy against ground truth | Below threshold triggers data pipeline investigation |
| Unresolved AI nonconformities | Zero Critical or High unresolved beyond SLA | Any Critical unresolved > 72h escalates to Managing Directors |

#### 11.4.4 Risk Treatment Process

1. **Risk identification.** Performed during Phase 0 (Orient) for new AI features; continuously for deployed systems via monitoring.
2. **Risk evaluation.** Likelihood x Impact scoring on a 5x5 matrix; scored by the AI system owner and reviewed by the AI Governance Board.
3. **Risk treatment selection.** For each risk above the appetite threshold:
   - **Avoid:** Do not proceed with the AI system or feature.
   - **Mitigate:** Implement additional controls (IEA gates, monitoring, HITL enforcement).
   - **Transfer:** Contractual risk allocation to suppliers or insurance.
   - **Accept:** Document residual risk with explicit justification and time-bound review.
4. **Risk owner assignment.** Every treated risk has a named owner responsible for monitoring and reporting.
5. **Residual risk acceptance.** Residual risks are documented in the risk register and formally accepted by the AI Governance Board. Residual risks classified as High or Critical require Managing Directors' acceptance.
6. **Risk register integration.** AI risks are recorded in the shared risk register (with the ISMS) using an `AI-` prefix tag for filtering and reporting.

### 11.5 AI Impact Assessment (ISO 42005)

#### 11.5.1 When Required

An AI Impact Assessment (AIA) is mandatory for:

- All AI systems classified as **High-Risk** under EU AI Act Art. 6.
- All AI systems classified as **Limited-Risk** under EU AI Act Art. 50.
- Any AI system processing special category personal data (GDPR Art. 9).
- Any AI system whose outputs materially influence financial, employment, or contractual decisions.
- Any AI system flagged during Phase 0 risk pre-screening as requiring deeper analysis.

#### 11.5.2 Assessment Process

| Step | Activity | Responsible | Output |
|---|---|---|---|
| 1. Scope | Define assessment boundary: system, features, data, stakeholders, jurisdictions | AI System Owner + AI Governance Board | AIA Scope Document |
| 2. Thresholds | Define acceptable impact levels per dimension (fairness, safety, privacy, transparency, environmental, labor) | AI Governance Board | Impact Threshold Matrix |
| 3. Execution | Assess impacts against thresholds using quantitative methods (statistical fairness tests, privacy analysis, safety case review) and qualitative methods (stakeholder consultation, ethical review) | Assessment team (cross-functional) | Impact Assessment Report |
| 4. Analysis | Analyze findings; identify impacts exceeding thresholds; propose mitigation measures | Assessment team | Mitigation Plan |
| 5. Approval | AI Governance Board reviews and approves the assessment; for High-Risk systems, Managing Directors approve | AI Governance Board / Managing Directors | Signed Approval Record |
| 6. Monitoring | Integrate impact indicators into operational monitoring; define re-assessment triggers | AI System Owner | Monitoring Configuration |

#### 11.5.3 Re-Assessment Triggers

- Significant model change (architecture change, retraining on new data distribution, fine-tuning).
- Change in intended use or deployment context.
- Regulatory change affecting the system's risk classification.
- Stakeholder complaint or reported adverse impact.
- Annual re-assessment for all High-Risk systems.
- Quarterly review of impact indicators for all assessed systems.

#### 11.5.4 Integration with EU AI Act

- **Art. 9 (Risk management):** The AIA satisfies the Art. 9 requirement for continuous, iterative risk management by feeding into the risk treatment process (Section 11.4.4).
- **Art. 27 (Fundamental rights impact assessment):** For High-Risk AI systems deployed by public-sector customers, the AIA includes a fundamental rights impact assessment covering the right to non-discrimination, privacy, freedom of expression, and effective remedy.

### 11.6 ISO 42001 Annex A Controls

The following table maps all Annex A control groups to implementation approaches, evidence artifacts, and progressive adoption stages. Controls are implemented proportionate to organizational maturity.

| Control | Objective | Implementation Approach | Evidence Artifact | Startup | Growth | Enterprise |
|---|---|---|---|---|---|---|
| **A.2 – AI Policies** | | | | | | |
| A.2.2 AI Policy | Establish and communicate AI policy | Standalone AI Policy document (Section 11.2); version-controlled; annual review | Signed AI Policy; review records | AI Policy published internally | Policy extended to suppliers and customers | Policy aligned with industry codes of practice |
| A.2.3 Roles and responsibilities | Define AI governance roles | RACI matrix for AI lifecycle activities; AI Ethics Champion per team | RACI matrix; role descriptions; appointment records | CTO assumes AI governance lead; 0.5 FTE AI Ethics Champion | Dedicated AI governance function; AI Ethics Champion per ART | Full AI Governance team; external advisory board |
| A.2.4 Internal AI directives | Provide specific AI usage guidance | Acceptable use guidelines per Development AI tool; product AI development standards | AI acceptable use policy; tool-specific guidelines | Single acceptable use document | Tool-specific guidelines per category | Comprehensive directive library with automated enforcement |
| **A.3 – Internal Organization** | | | | | | |
| A.3.2 Resources for AI | Ensure adequate resources for AIMS | AIMS resource allocation in PI Planning; budget line for AI governance | PI resource allocation records; budget approval | AI governance activities within engineering capacity | Dedicated AI governance budget | Full AIMS resourcing with external specialist support |
| A.3.3 Competence of personnel | Ensure AI literacy and competence | AI competence framework per role (Section 11.8); training program; EU AI Act Art. 4 literacy requirement | Training records; competence assessments; certification evidence | Role-specific AI literacy training (annual) | Structured competence framework with assessment | Formal certification program; continuous professional development |
| A.3.4 Awareness of AI policies | Ensure personnel are aware of AIMS obligations | Onboarding module; quarterly awareness communications; AI ethics champion network | Training completion records; awareness survey results | Onboarding briefing; quarterly email update | Interactive training; awareness metrics tracked | Comprehensive awareness program with effectiveness measurement |
| **A.4 – Resources for AI Systems** | | | | | | |
| A.4.2 Inventory of AI systems | Maintain complete AI system registry | AI System Registry (Section 11.3); YAML-in-source-control with GRC dashboard | Registry entries; completeness reports; quarterly review records | Registry maintained; manual updates per sprint | Automated registry updates via CI/CD | Registry integrated with asset management and regulatory databases |
| A.4.3 Intended use documentation | Document intended purpose per AI system | Intent documentation as part of registry; linked to product specifications | Intended use documents per system; change logs | Intended use in registry entry | Formal intended use specification per system | Intended use documentation meeting Annex IV requirements |
| A.4.4 AI system documentation | Maintain technical documentation throughout lifecycle | Architecture Decision Records (ADRs); model cards; system design documents | ADRs; model cards; API specifications; deployment records | ADRs for AI-related decisions; basic model cards | Comprehensive model cards; Annex IV-aligned documentation | Full technical documentation per EU AI Act Annex IV |
| A.4.5 Resources for AI systems | Manage tools, compute, and infrastructure for AI | Approved AI toolchain (Section 10.6); Azure-native platform; resource tagging | Toolchain approval records; resource allocation logs | Approved toolchain list maintained | Resource governance with cost tracking | Full resource lifecycle management with capacity planning |
| A.4.6 Logging and monitoring | Log AI system operation for traceability | AI model telemetry (MLflow + Azure ML); IEA verification logs; audit trail generation | Telemetry dashboards; log retention evidence; audit trail samples | Basic model telemetry; IEA audit trail | Comprehensive AI logging with retention compliance | Full observability stack with automated anomaly detection |
| **A.5 – Assessing Impacts** | | | | | | |
| A.5.2 AI impact assessment process | Assess impacts of AI systems on individuals and society | AIA process (Section 11.5); integrated with Phase 0 and Gate 0 | AIA reports; approval records; monitoring configurations | Pre-screening at Phase 0; full AIA for High-Risk only | AIA for all High-Risk and Limited-Risk; stakeholder consultation | Comprehensive impact assessment with external review |
| A.5.3 Impacts on individuals | Assess effects on affected persons | Individual impact analysis within AIA; DPIA integration where personal data involved | Individual impact sections in AIA reports; DPIA cross-references | Combined with DPIA where applicable | Standalone individual impact analysis | Individual impact assessment with redress mechanism review |
| A.5.4 Impacts on groups and society | Assess societal-level impacts | Societal impact section within AIA; ethical review checklist (ISO TR 24368) | Societal impact sections; ethical review records | Ethical review checklist at Phase 0 | Structured societal impact analysis | Comprehensive societal assessment with external stakeholder input |
| **A.6 – AI System Lifecycle** | | | | | | |
| A.6.2 Lifecycle processes | Govern AI system through full lifecycle | SDLC phases (Section 9) extended with AI-specific activities; retirement process defined | Phase gate records; lifecycle status in registry; retirement records | SDLC phases with AI gates; manual retirement | Automated lifecycle tracking; formal retirement process | Full lifecycle governance with automated state transitions |
| A.6.3 Verification and validation | Verify AI systems meet requirements | AI-specific testing (Section 9.4); bias, fairness, robustness, drift testing | Test reports; validation certificates; model evaluation records | AI test suite in CI/CD pipeline | Comprehensive V&V per risk level | Independent V&V for High-Risk; safety case construction |
| A.6.4 Deployment and operation | Govern AI deployment and runtime | Deployment strategy (Section 9.5); canary analysis; feature flags; IEA enforcement | Deployment records; canary metrics; feature flag configurations | Progressive rollout with manual monitoring | Automated canary analysis with SLO-based rollback | Full deployment governance with conformity verification pre-deployment |
| A.6.5 Monitoring and review | Monitor AI performance in production | Continuous monitoring (Section 9.6); drift detection; performance regression alerts | Monitoring dashboards; drift reports; performance trend analysis | Basic model telemetry and drift alerting | Comprehensive monitoring with automated revalidation triggers | Continuous safety assessment; automated incident correlation |
| **A.7 -– Data for AI Systems** | | | | | | |
| A.7.2 Data management | Govern data used in AI systems | Data governance framework for AI; data catalog; quality requirements | Data governance policy; data catalog entries; quality reports | Data classification and basic quality checks | Formal data governance with quality metrics | Comprehensive data management with provenance tracking |
| A.7.3 Data quality | Ensure AI training/inference data quality | Automated data validation in CI/CD; quality thresholds per data pipeline | Data quality test results; threshold compliance reports | Automated data validation (schema, completeness) | Statistical quality monitoring (accuracy, representativeness) | Full data quality management with Great Expectations / Pandera |
| A.7.4 Data provenance | Track origin and lineage of AI data | Data lineage metadata in pipeline; provenance records for training datasets | Lineage diagrams; provenance logs; dataset version records | Manual provenance documentation for training data | Automated lineage tracking in data pipelines | Full provenance graph with regulatory audit capability |
| A.7.5 Data acquisition | Govern data procurement for AI | Data acquisition policy; DPA requirements; consent management for training data | DPAs; consent records; acquisition approval records | DPA review for all external data sources | Formal acquisition process with bias pre-assessment | Comprehensive acquisition governance with ethical sourcing review |
| **A.8 – Transparency** | | | | | | |
| A.8.2 Transparency information | Provide AI transparency per ISO 12792 | Transparency framework (Section 11.10); stakeholder-specific disclosure | Transparency reports; disclosure records; machine-readable metadata | Basic transparency notices for product AI features | Structured transparency information per ISO 12792 | Full transparency information lifecycle with machine-readable formats |
| A.8.3 AI interaction notification | Inform users when interacting with AI | Product UX notification for AI features (EU AI Act Art. 50); clear labeling | UI screenshots; notification implementation evidence; user testing records | "AI-assisted" labels on AI-generated content | Contextual AI interaction notifications | Comprehensive notification with opt-out where feasible |
| A.8.4 Communication of AI decisions | Explain AI-assisted decisions to affected parties | Explainability outputs (SHAP/LIME) surfaced to users; appeal mechanisms | Explainability reports; user-facing explanation UI; appeal process records | Basic confidence scores shown to users | Structured explanations per decision type | Full explainability with counterfactual reasoning and appeal process |
| **A.9 – Use of AI Systems** | | | | | | |
| A.9.2 Responsible use | Ensure responsible use of AI | Acceptable use policy; prohibited practices (Section 10.7); usage monitoring | Acceptable use acknowledgments; policy violation reports; usage analytics | Prohibited practices list; annual policy acknowledgment | Responsible use monitoring with automated violation detection | Comprehensive responsible use program with ethics hotline |
| A.9.3 Human oversight | Maintain appropriate human oversight | IEA Human-in-the-Loop gate (Section 8.6); oversight requirements per risk level | HITL decision logs; override records; oversight effectiveness metrics | HITL for Tier 3 and production deployments | Risk-proportionate oversight levels; override tracking | Full oversight framework with automation bias countermeasures |
| **A.10 – Third-Party and Customer Relationships** | | | | | | |
| A.10.2 Suppliers and third parties | Govern AI in supply chain | AI-specific supplier assessment; DPA with AI clauses; model provider evaluation | Supplier AI assessments; contract AI clauses; vendor risk records | AI clauses in key supplier contracts (Azure, GitHub) | Formal AI supplier assessment program | Comprehensive AI supply chain governance with ongoing monitoring |
| A.10.3 Customers and affected parties | Address customer and affected party AI needs | Customer AI documentation; transparency obligations; support for deployer obligations | Customer-facing AI documentation; deployer guidance; support records | Basic product AI documentation | Structured deployer documentation per EU AI Act | Full customer governance including Art. 26 deployer support |

### 11.7 EU AI Act Conformity

#### 11.7.1 Risk Classification Methodology (Art. 6)

1. **Inventory.** All product AI features are enumerated in the AI System Registry (Section 11.3).
2. **Annex III screening.** Each feature is screened against the eight Annex III high-risk categories. The screening is performed by the AI System Owner, reviewed by Legal, and approved by the AI Governance Board.
3. **Art. 6(2) exception analysis.** For systems matching an Annex III category, assess whether the exception in Art. 6(3) applies (system does not pose significant risk of harm).
4. **Art. 50 screening.** All non-high-risk product AI features are screened for Limited-Risk transparency obligations (AI interaction, synthetic content, emotion recognition).
5. **Classification documentation.** For each system, the classification rationale is documented in the AI System Registry, including the Annex III analysis and any exception justification.
6. **Reclassification triggers.** Classifications are reviewed upon significant intended use change, feature expansion, new regulatory guidance, or annually.

#### 11.7.2 High-Risk AI System Requirements (Art. 9–15)

For each AI system classified as High-Risk, the following requirements are implemented:

| Article | Requirement | AIMS Implementation | Evidence |
|---|---|---|---|
| Art. 9 | Risk management system | AI risk assessment (Section 11.4); continuous risk monitoring; foreseeable misuse analysis | Risk register entries; risk treatment records; misuse analysis document |
| Art. 10 | Data and data governance | A.7 controls (data quality, provenance, bias assessment, representativeness) | Data quality reports; bias test results; dataset documentation |
| Art. 11 | Technical documentation | Annex IV documentation package generated from SDLC artifacts (ADRs, model cards, test reports, deployment records) | Annex IV document package per system |
| Art. 12 | Record-keeping | AI model telemetry (Section 9.6); IEA audit trail; event logging per system lifecycle | Log retention evidence; audit trail samples; telemetry configuration |
| Art. 13 | Transparency | ISO 12792-aligned transparency framework (Section 11.10); instructions for use; deployer documentation | Transparency reports; instructions for use; deployer guidance |
| Art. 14 | Human oversight | IEA HITL gate; deployer override capability; automation bias awareness measures | HITL configuration evidence; override mechanism documentation; training records |
| Art. 15 | Accuracy, robustness, cybersecurity | AI-specific testing (Section 9.4); declared accuracy metrics; adversarial robustness testing; AI security monitoring | Test reports; declared metrics in documentation; penetration test results |

#### 11.7.3 Annex IV Technical Documentation

Technical documentation for High-Risk systems shall be organized as:

1. **General description:** System purpose, intended use, versions, hardware/software requirements, integration architecture.
2. **Development process:** Design specifications, data choices, training methodologies, evaluation procedures, decisions made.
3. **Monitoring and functioning:** Capabilities, limitations, foreseeable misuse, human oversight measures, computational resource requirements.
4. **Risk management:** Risk management process, residual risks, testing methodology and results.
5. **Change management:** Modification history, version control, post-market changes.

Documentation is generated as code artifacts within the CI/CD pipeline and assembled into the Annex IV format at each release gate.

#### 11.7.4 General-Purpose AI (GPAI) Provider Obligations

If Verity products incorporate or redistribute GPAI models (e.g., fine-tuned Azure OpenAI models integrated as product features), the following GPAI provider obligations under Art. 53 apply:

- Technical documentation maintained and updated.
- Information and documentation provided to downstream deployers.
- EU AI Act and copyright law compliance.
- Summary of training data published (sufficiently detailed).

Assessment of GPAI applicability is performed during Phase 0 (Orient) and documented in the AI System Registry.

### 11.8 AI Governance Bodies (Scaled)

#### 11.8.1 Startup Stage (Current)

| Function | Responsible | Cadence | Key Activities |
|---|---|---|---|
| AI governance leadership | CTO (assumes AI governance accountability) | Continuous | AI policy ownership; risk acceptance authority; regulatory engagement |
| AI Governance Board | CTO + CISO + Legal + Product Lead | Monthly + ad-hoc | Risk assessment review; registry review; impact assessment approval; nonconformity review |
| AI Ethics Champion | 0.5 FTE per ART (from engineering team) | Sprint-level | Ethical review at Phase 0; AI testing oversight; awareness advocacy |
| External review | External AI governance advisor or auditor | Quarterly | Independent AIMS effectiveness review; pre-certification readiness assessment |
| Managing Directors accountability | Geschaeftsfuehrer | Quarterly | EDM cycle review; risk appetite confirmation; resource approval; strategic AI direction |

#### 11.8.2 Growth Stage

| Function | Responsible | Cadence | Key Activities |
|---|---|---|---|
| AI Governance Board | Dedicated AI Governance Lead + CTO + CISO + Legal + Product Lead + Data Protection Officer | Monthly | Full AIMS management review; conformity oversight; stakeholder engagement |
| AI Ethics Champion network | 1 AI Ethics Champion per ART (dedicated allocation) | Sprint-level + bi-weekly network sync | Ethical review; AI testing; cross-ART knowledge sharing; incident triage |
| External advisory | External AI governance advisory board (2–3 members: academic, industry, civil society) | Quarterly | Strategic AI ethics guidance; horizon scanning; independent challenge |
| Managing Directors accountability | Geschaeftsfuehrer | Quarterly + ad-hoc (on escalation) | EDM cycle; public AI transparency report approval; High-Risk risk acceptance |

#### 11.8.3 Enterprise Stage

| Function | Responsible | Cadence | Key Activities |
|---|---|---|---|
| AI Governance Board | VP AI Governance (chair) + CTO + CISO + CPO + Legal + DPO + External member | Monthly | Full AIMS management review; conformity assessment oversight; regulatory liaison |
| Compliance Steering Committee | Chief Compliance Officer + CISO + Legal + VMO + External auditor | Quarterly | Cross-framework compliance posture; audit program oversight; regulatory change management |
| AI Ethics Champion network | Dedicated AI Ethics Champions per ART + central AI Ethics function | Continuous | Embedded ethical review; product AI oversight; incident investigation; stakeholder engagement |
| Independent audit function | Internal audit team (separate from AI development and governance) | Per audit program | AIMS internal audit; control effectiveness testing; evidence validation |
| External audit and certification | ISO 42001 certification body | Annual surveillance; triennial recertification | Independent conformity assessment |
| Managing Directors / Board | Governing body with AI governance on standing agenda | Quarterly + annual strategic review | EDM cycle; AI strategy direction; public reporting approval; ultimate accountability |

### 11.9 AIMS PDCA Cycle

#### 11.9.1 Plan

**Cadence:** Annually, aligned with fiscal year and first PI of the calendar year.

| Activity | Output | Responsible |
|---|---|---|
| Set AIMS objectives with measurable targets | AI Objectives document (e.g., "achieve ISO 42001 certification readiness by Q4"; "complete AIA for all High-Risk features by PI-3") | AI Governance Board + Managing Directors |
| Conduct or refresh AI risk assessment | Updated risk register with AI risks scored, treated, and owned | AI Governance Board |
| Determine resource requirements | AIMS resource plan (budget, personnel, tools, training) integrated into PI Planning | CTO + VMO |
| Plan internal audit program | Annual AIMS audit schedule covering all clauses and applicable Annex A controls | AI Governance Board (Startup); Internal Audit (Enterprise) |
| Review and update AI Policy | Revised AI Policy (if changes required) | Managing Directors |
| Define Statement of Applicability (SoA) | SoA documenting which Annex A controls are applicable, implemented, or justified as not applicable | AI Governance Board |

#### 11.9.2 Do

**Cadence:** Continuous, aligned with SDLC sprints and PI cadence.

| Activity | Mechanism | SDLC Integration Point |
|---|---|---|
| Enforce AI risk classification | Phase 0 Gate 0 includes EU AI Act classification | Section 9.1 / Section 13.2 |
| Execute AI impact assessments | AIA performed for all High-Risk and Limited-Risk features before Gate 2 | Section 9.4 / Section 13.2 |
| Operate IEA governance controls | Policy Gateway enforces AIMS controls (HITL gates, compliance checks, provenance metadata) | Section 8.3 -- Policy Gateway |
| Maintain AI System Registry | Registry updated per sprint; completeness validated at Gate 2 | Section 11.3 |
| Enforce AI-specific quality gates | AI model validation (bias, fairness, drift, explainability) in CI/CD pipeline | Section 9.3 |
| Operate transparency framework | Transparency information generated at deployment; user notifications enforced | Section 11.10 |
| Manage AI nonconformities | AI incident classification, investigation, corrective action | Integrated with incident management (Section 16.3) |
| Deliver AI competence training | Onboarding and annual training per EU AI Act Art. 4 | HR / AI Ethics Champion network |

#### 11.9.3 Check

**Cadence:** Quarterly management review (aligned with PI Inspect & Adapt); annual internal audit.

**Management Review Inputs (ISO 42001 Clause 9.3):**

| Input | Source |
|---|---|
| Status of actions from previous management reviews | Previous review minutes and action tracker |
| Changes in external and internal issues relevant to AIMS | Context monitoring (Section 11.1.1) |
| AI system performance and effectiveness information: | |
| – Nonconformities and corrective actions | Nonconformity register |
| – Monitoring and measurement results | AI governance metrics (see table below) |
| – Audit results | Internal audit reports |
| – AI system performance (accuracy, fairness, drift) | Model telemetry dashboards |
| Feedback from interested parties | Customer feedback; regulator correspondence; employee surveys |
| Results of AI risk assessments | Risk register (AI-tagged entries) |
| Results of AI impact assessments | AIA reports and monitoring data |
| Opportunities for improvement | Retrospectives; audit findings; incident post-mortems |
| Changes in AI technology or regulatory landscape | Technology radar; regulatory tracker |

**Management Review Outputs:**

| Output | Action |
|---|---|
| Decisions on improvement opportunities | Logged as improvement actions with owners and deadlines |
| Decisions on changes to the AIMS | Documented as AIMS change requests; implemented through controlled process |
| Resource needs | Communicated to VMO for PI Planning integration |
| Updated risk appetite (if changed) | Approved by Managing Directors; communicated to all stakeholders |

**AI Governance Metrics for Check Phase:**

| Metric | Target | Measurement Source |
|---|---|---|
| AI System Registry completeness | 100% of deployed AI systems registered | CI/CD validation; quarterly audit |
| AI risk assessments current | 100% of registered systems assessed within 12 months | Risk register dates |
| AI impact assessments current | 100% of High-Risk / Limited-Risk systems assessed within 12 months | AIA register dates |
| AI nonconformity closure rate | 100% Critical within 72h; 100% High within 30 days | Nonconformity register |
| AI training completion rate | 100% of personnel in-scope for Art. 4 AI literacy | Training records |
| Model performance within tolerance | 100% of production models within declared accuracy thresholds | Model telemetry |
| Transparency information current | 100% of product AI features with current transparency artifacts | Transparency register |

#### 11.9.4 Act

**Cadence:** Continuous for nonconformity management; quarterly for systematic improvement.

**Nonconformity management process (ISO 42001 Clause 10.2):**

1. **Detect.** AI nonconformity detected via monitoring, audit, user report, or incident.
2. **Classify.** Severity classification:
   - **Critical:** AI system causing harm, regulatory breach, or safety incident. Response: immediate containment (system suspension or HITL enforcement).
   - **High:** Significant deviation from declared performance, fairness violation, or transparency failure. Response: corrective action plan within 72 hours.
   - **Medium:** Minor performance degradation, documentation gap, or process deviation. Response: corrective action plan within 30 days.
   - **Low:** Observation or improvement opportunity. Response: logged for next planning cycle.
3. **Investigate.** Root cause analysis using the "5 Whys" method or equivalent systematic approach.
4. **Correct.** Implement corrective action addressing both the immediate issue and the root cause.
5. **Verify.** Confirm corrective action effectiveness through re-testing or re-assessment.
6. **Record.** Document the nonconformity, investigation, corrective action, and verification in the nonconformity register.
7. **Report.** Report to AI Governance Board at next meeting; Critical nonconformities reported to Managing Directors immediately.
8. **Incident reporting (EU AI Act Art. 62).** For High-Risk systems: serious incidents (death, serious damage to health, property, or environment; serious fundamental rights violation) reported to the relevant market surveillance authority without undue delay, and no later than 15 days after awareness.

**Continual improvement:**

- Improvement actions from management review, audit, retrospectives, and incident post-mortems are logged in the improvement backlog.
- Improvement items are prioritized using WSJF and integrated into PI Planning.
- AIMS effectiveness trends are tracked across PI boundaries to demonstrate continual improvement for certification auditors.

### 11.10 Transparency and Explainability (ISO 12792)

#### 11.10.1 AI Transparency Information Requirements

For each AI system in the registry, the following transparency information shall be defined, generated, maintained, and disclosed:

| Information Category | Content | Audience |
|---|---|---|
| System identity and provider | System name, version, provider (Helge Heupel entity), contact point | All stakeholders |
| Intended purpose and use | What the system does; intended use context; known limitations | Deployers, users, regulators |
| Capabilities and limitations | What the system can and cannot do; performance boundaries; known failure modes | Deployers, users |
| Data used | Categories of data used for training and inference; data sources (at category level, not individual records) | Deployers, regulators |
| Performance metrics | Declared accuracy, precision, recall, F1 (or equivalent); conditions under which metrics were measured | Deployers, regulators, auditors |
| Fairness characteristics | Protected attributes tested; fairness metrics and results; known bias limitations | Deployers, regulators, affected persons |
| Human oversight measures | HITL configuration; override mechanisms available to deployers; automation bias countermeasures | Deployers |
| AI interaction notification | Clear indication that the user is interacting with an AI system (EU AI Act Art. 50) | Users, affected persons |
| Decision explanation | For AI-assisted decisions: factors considered, confidence level, alternative outcomes (where applicable) | Users, affected persons |

#### 11.10.2 Explainability Methods and Thresholds

| Method | Application | Threshold | When Required |
|---|---|---|---|
| SHAP (SHapley Additive exPlanations) | Feature importance for tabular/structured predictions in Verity VE/EAM | Top-5 feature contributions must explain >= 70% of prediction variance | All product AI with structured input |
| LIME (Local Interpretable Model-agnostic Explanations) | Local explanations for individual predictions | Fidelity score >= 0.85 against original model | On-demand for user-requested explanations |
| Attention visualization | Transformer-based model interpretability | Available for inspection by deployers | All transformer-based product AI |
| Confidence scoring | Prediction confidence communicated to users | Confidence < 70% triggers mandatory human review recommendation in UI | All product AI generating recommendations |
| Counterfactual explanation | "What would need to change for a different outcome" | Available for High-Risk AI system decisions | High-Risk AI systems affecting individuals |

#### 11.10.3 User-Facing Transparency UX

Product AI transparency is implemented through the following UX patterns (linked to Section 14.4, Human-AI Interaction Patterns):

1. **AI indicator.** Visual indicator (icon + label) on all AI-generated or AI-assisted content. Users are never left uncertain about whether content is AI-generated.
2. **Confidence display.** Confidence score or confidence band shown alongside AI recommendations. Color-coded: green (>= 85%), amber (70--84%), red (< 70%).
3. **Explanation on demand.** "Why this recommendation?" expandable panel showing SHAP/LIME output in user-accessible language.
4. **Override control.** Users can override, modify, or reject any AI recommendation. Override actions are logged for model improvement.
5. **Feedback mechanism.** Users can flag incorrect or harmful AI outputs. Feedback feeds into the nonconformity management process.

#### 11.10.4 Transparency Documentation Lifecycle

| Lifecycle Phase | Transparency Activity | Output |
|---|---|---|
| Design (Phase 1) | Define transparency requirements per AI feature; specify explainability method and threshold | Transparency specification in requirements |
| Development (Phase 2) | Implement explainability methods; generate transparency metadata | Explainability code; metadata schema |
| Testing (Phase 3) | Validate explainability thresholds; test transparency UX; verify Art. 50 compliance | Transparency test report |
| Deployment (Phase 4) | Publish transparency information; activate user notifications | Published transparency artifacts |
| Operation (Phase 5) | Monitor transparency information accuracy; update on model change | Updated transparency artifacts; accuracy reports |
| Retirement (Phase 6) | Archive transparency information; notify deployers of system retirement | Archival records; retirement notices |

---
## 12. Security and Privacy by Design

### 12.1 Security Architecture Principles (Enhanced)

The following principles govern all security architecture decisions across the Helge Heupel Group. Each principle is mapped to its normative source and must be demonstrably implemented in every system, service, and deployment.

**Principle 1 – Zero Trust (ISO 27001 A.8.20, A.8.22; NIS2 Art. 21(i); NIST SP 800-207)**
Every service-to-service call is authenticated (mTLS) and authorized (Azure Entra ID with workload identities). No network perimeter trust is assumed. All access decisions are made per-request based on identity, device posture, context, and policy. Microsegmentation enforces lateral movement prevention across all subscription boundaries.

**Principle 2 – Defense in Depth (ISO 27001 A.8.20, A.8.21, A.8.22; NIS2 Art. 21(e))**
Security controls are layered: WAF (Azure Front Door) --> API Gateway (Azure API Management) --> Service Mesh (Istio/Linkerd mTLS) --> Application-level authorization (OPA/Cedar) --> Data-layer encryption (Azure Storage Service Encryption, TDE). No single control failure compromises the system.

**Principle 3 – Least Privilege (ISO 27001 A.5.15, A.5.18, A.8.2; NIS2 Art. 21(i); TISAX ISA 4.1)**
All identities (human and workload) operate with minimum necessary permissions. Just-in-time (JIT) access elevation via Azure PIM for sensitive operations. Privileged access requires time-bounded approval, MFA re-authentication, and session recording. Quarterly access reviews enforce permission decay.

**Principle 4 – Encryption Everywhere (ISO 27001 A.8.24; NIS2 Art. 21(h); TISAX ISA 5.1; FedRAMP SC)**
Data at rest: AES-256 via Azure Storage Service Encryption with Azure Key Vault managed keys (FIPS 140-2 Level 2 HSMs). Data in transit: TLS 1.3 minimum for all external connections; mTLS for all internal service communication. Data in use: Azure Confidential Computing (Intel SGX / AMD SEV-SNP) for sensitive AI workloads processing classified or PII data.

**Principle 5 – AI Security (ISO/IEC DIS 27090; ISO 42001 Annex A; EU AI Act Art. 9, 15)**
AI systems are treated as high-value assets requiring dedicated security controls:
- **Model integrity:** All model artifacts (weights, configurations, hyperparameters) are cryptographically signed (Cosign/Sigstore) with provenance metadata. Model checksums are verified at every stage of the deployment pipeline. Unauthorized model modification triggers automated containment (ISO DIS 27090 cl. 9).
- **Adversarial defense:** Production AI endpoints implement input validation, query rate limiting, and anomaly detection to defend against evasion attacks, prompt injection, model extraction, and inference attacks. Adversarial robustness testing is mandatory prior to deployment (ISO DIS 27090 cl. 6).
- **AI supply chain:** Pre-trained models, training datasets, and ML frameworks are subject to provenance verification, integrity checking, and vulnerability scanning. AI-specific Software Bill of Materials (AI-BOM) extends CycloneDX SBOM to cover training data provenance, model architecture lineage, and ML framework dependencies (ISO DIS 27090 cl. 7).

**Principle 6 –- Climate-Aware Security (ISO 27001:2022/Amd.1:2024 cl. 4.1, 4.2)**
Climate change is assessed annually as a contextual factor affecting information security:
- Physical risks to Azure data centers from extreme weather (flooding in Netherlands, heat stress in Germany) are incorporated into business continuity planning and Azure region selection.
- Transition risks from EU sustainability regulations (CSRD, EU Taxonomy) that may impose additional data handling and reporting requirements are monitored.
- Energy supply disruption risks to operations and cloud service providers are factored into redundancy planning.
- Interested party climate requirements – particularly from automotive OEM customers with ESG/sustainability mandates – are documented and reviewed annually as part of the ISMS context analysis.

### 12.2 ISO 27001:2022 ISMS Integration

#### 12.2.1 ISMS Scope (ISO 27001 cl. 4.3)

The ISMS scope encompasses all information assets, processes, people, and locations across the Helge Heupel Group:

| Dimension | Scope Definition |
|---|---|
| **Organizations** | Helge Heupel GmbH, Helge Heupel B.V., Helge Heupel Inc. |
| **Processes** | All SDLC phases (0-6), IT operations, customer support, AI model lifecycle management, corporate functions supporting information security |
| **Information assets** | Source code, AI models (weights, training data, configurations), customer data, employee data, business records, compliance artifacts, cryptographic keys, SBOM/AI-BOM inventories |
| **Technology** | Azure cloud platform (all subscriptions), development toolchain (Section 15), production and non-production environments, endpoint devices, communication systems |
| **People** | All employees, contractors, and third parties with access to information assets across all three entities |
| **Locations** | Corporate offices (DE, NL, US), remote worker locations, Azure data center regions (West Europe, Germany West Central, US Gov Virginia, US Gov Arizona) per shared responsibility model |
| **Exclusions** | Physical data center controls delegated to Microsoft Azure under the shared responsibility model; documented in the SoA with Azure SOC 2/ISO 27001 attestation as compensating evidence |

For multi-site certification, the scope statement complies with IAF MD 1 requirements, identifying central functions (ISMS governance, security architecture, platform security, GRC) and local functions (entity-specific regulatory compliance, local HR security, office physical security).

#### 12.2.2 Statement of Applicability (ISO 27001 cl. 6.1.3(d))

A comprehensive Statement of Applicability (SoA) covers all 93 Annex A controls organized by theme:

| Theme | Controls | Applicable | Not Applicable (with justification) | Evidence Location |
|---|---|---|---|---|
| A.5 Organizational (37) | A.5.1 – A.5.37 | All 37 | None | GRC Platform: IS-ORG-* |
| A.6 People (8) | A.6.1 – A.6.8 | All 8 | None | GRC Platform: IS-PPL-* |
| A.7 Physical (14) | A.7.1 – A.7.14 | 12 applicable | A.7.12 (Cabling), A.7.13 (Equipment maintenance) – delegated to Azure under shared responsibility | GRC Platform: IS-PHY-* |
| A.8 Technological (34) | A.8.1 – A.8.34 | All 34 | None | GRC Platform: IS-TECH-* |

The full SoA is maintained as a controlled document (DOC-ISMS-SoA-001) in the GRC platform, with version history, control owner assignments, implementation status, and evidence mapping per control. The SoA is reviewed and updated at minimum annually and upon any significant change to the ISMS scope, risk landscape, or organizational structure.

#### 12.2.3 PDCA Cycle for ISMS (ISO 27000 cl. 4.1-4.4; ISO 27001 cl. 4-10)

| Phase | Activities | Cadence | Clause |
|---|---|---|---|
| **Plan** | Context analysis (internal/external issues, interested parties including climate factors per Amd.1), ISMS scope definition, risk assessment, risk treatment plan, IS objectives, resource planning | Annually + upon significant change | 4.1, 4.2, 4.3, 6.1, 6.2, 7.1 |
| **Do** | Risk treatment plan implementation, control operation, security awareness and training, documented information management, operational planning and control | Continuous | 7.2, 7.3, 7.4, 7.5, 8.1, 8.2, 8.3 |
| **Check** | Performance evaluation (monitoring, measurement, analysis), internal audit program (annual cycle, all clauses and Annex A controls), management review (quarterly, with mandatory inputs per cl. 9.3.2 and outputs per cl. 9.3.3) | Quarterly management review; annual internal audit; continuous monitoring | 9.1, 9.2, 9.3 |
| **Act** | Nonconformity management, corrective action, continual improvement, ISMS process updates | Continuous; formal review at each PDCA cycle | 10.1, 10.2 |

#### 12.2.4 Amendment 1:2024 Climate Action Integration

Per ISO 27001:2022/Amd.1:2024:

**Clause 4.1 Addition – Climate Change Relevance Determination:**
The organization determines annually whether climate change is a relevant issue affecting the ISMS. The assessment considers:
- Physical risks: extreme weather events affecting Azure data center regions (flooding risk in Netherlands, heat stress on cooling infrastructure in Germany), power grid stability, and supply chain disruption.
- Transition risks: regulatory changes (CSRD, EU Taxonomy Regulation) imposing new data processing and reporting requirements that expand the ISMS information asset inventory.
- Assessment output is documented in the ISMS Context Analysis Record (DOC-ISMS-CTX-001) and reviewed by top management.

**Clause 4.2 Addition – Interested Party Climate Requirements:**
Interested parties with climate-related information security requirements are identified and documented:
- Automotive OEM customers requiring ESG/sustainability reporting for their supply chain (TISAX context).
- Regulators requiring carbon footprint disclosure for ICT services.
- Insurance providers assessing climate-related operational risk.
- Requirements are recorded in the Interested Party Register (DOC-ISMS-IPR-001).

#### 12.2.5 Documented Information Framework (ISO 27001 cl. 7.5)

All ISMS documented information is governed by a document control regime:

| Document Type | Format | Version Control | Approval Authority | Review Cycle | Retention |
|---|---|---|---|---|---|
| IS Policies | Markdown in Git | Git (tagged releases) | CISO | Annual | Indefinite |
| Procedures and Work Instructions | Markdown in Git | Git (tagged releases) | Control Owner | Annual | Indefinite |
| Risk Assessment Records | GRC platform | Platform versioning | Risk Owner | Annual + on change | 7 years |
| Audit Reports | GRC platform | Platform versioning | Internal Audit Lead | Per audit | 7 years |
| Evidence and Records | GRC platform + Azure DevOps | Platform versioning / Git | Control Owner | Per control cycle | Per retention schedule |
| SoA | GRC platform | Platform versioning | CISO | Annual + on change | Indefinite |
| Management Review Minutes | GRC platform | Platform versioning | CTO | Per review | 7 years |

Document control requirements per cl. 7.5.3: creation and updating follows defined templates with metadata (author, date, classification, version); distribution via GRC platform with role-based access; storage in tamper-evident repositories; retention per jurisdiction-specific requirements (DE: 10 years for financial records, NL: 7 years, US: per FedRAMP 3-year minimum for audit evidence); disposition via documented destruction procedures with certificates.

### 12.3 Secure Development Practices (Enhanced)

The following practices table expands the v1 secure development controls with AI-specific security, cybersecurity coordination, and AI threat taxonomy alignment.

| Practice | Description | ISO 27001 | NIS2 | TISAX ISA 6 | ISO DIS 27090 | ISO 27032 |
|---|---|---|---|---|---|---|
| Threat Modeling | STRIDE per feature; LINDDUN for privacy; DIS 27090 AI threat taxonomy for AI features (evasion, poisoning, extraction, inference attacks) | A.8.27 | Art. 21(a) | 1.1 | cl. 6 | cl. 6 |
| Secure Coding Standards | OWASP Secure Coding Practices, language-specific guides (TypeScript, Python, Go), CERT secure coding rules | A.8.28 | Art. 21(e) | 5.2 | – | cl. 8 |
| Secret Management | Azure Key Vault; no secrets in code, config, or logs; automated secret rotation; break-glass key escrow | A.8.24 | Art. 21(h) | 4.1 | – | – |
| Dependency Management | SCA with automated PR blocking on Critical/High CVEs; license compliance verification; transitive dependency analysis | A.5.19, A.8.8 | Art. 21(d) | 5.2 | cl. 7 | – |
| Container Hardening | Distroless base images, non-root execution, read-only FS, resource limits, seccomp profiles, AppArmor policies | A.8.9 | Art. 21(e) | 5.2 | – | cl. 9 |
| API Security | OAuth 2.1, rate limiting, input validation, schema enforcement (OpenAPI 3.1), CORS policy, request signing | A.8.26 | Art. 21(e) | 4.1 | – | cl. 8 |
| SBOM Generation | CycloneDX format, published per release, covering all direct and transitive dependencies | A.5.21 | Art. 21(d) | – | – | – |
| **AI Model Integrity** | Model artifact signing (Cosign), weight checksum verification at build and deploy, model provenance chain | A.8.9, A.8.25 | Art. 21(e) | – | cl. 9 | – |
| **Prompt Injection Defense** | Input sanitization for LLM inputs, system prompt isolation, output validation against injection patterns, guardrail frameworks | A.8.26 | Art. 21(e) | – | cl. 6.1 | cl. 8 |
| **AI Output Validation** | Deterministic verification of AI-generated code before execution; hallucination detection; output boundary enforcement; content filtering | A.8.25 | Art. 21(e) | – | cl. 11 | – |
| **AI Supply Chain Security** | AI-BOM (training data provenance, pre-trained model provenance, ML framework dependencies); model origin verification; training data integrity validation | A.5.19, A.5.21 | Art. 21(d) | – | cl. 7 | – |
| **AI Security Monitoring** | Adversarial input detection, query pattern analysis for model extraction, distribution shift monitoring for poisoning indicators, performance degradation alerting | A.8.16 | Art. 21(g) | – | cl. 12 | – |
| **Cybersecurity Coordination** | Formal relationships with CERT-Bund, NCSC-NL CERT, US-CERT; threat intelligence sharing via TLP protocol; ISAC membership (Automotive ISAC, IT-ISAC) | A.5.5, A.5.6, A.5.7 | Art. 23, 29 | 1.6 | – | cl. 5, 7, 11 |
| **Anti-Social Engineering** | Structured awareness program (phishing simulations quarterly, pretexting scenarios, baiting tests); verification procedures for sensitive requests; social engineering incident reporting channel | A.6.3 | Art. 21(f) | 1.2 | -- | cl. 6.3 |
| **DLP Strategy** | Network DLP (Azure Information Protection), endpoint DLP (Microsoft Purview), cloud DLP (Cloud App Security); classification-based enforcement; AI model exfiltration prevention | A.8.12 | Art. 21(e) | 2.1 | cl. 8.3 | – |

### 12.4 NIS2 Compliance (Art. 21) – Enhanced

#### 12.4.1 Full Art. 21(a-j) Implementation

| Art. 21 Measure | Implementation | Evidence | Owner |
|---|---|---|---|
| **(a)** Risk analysis and IS policies | ISO 27001 ISMS with semi-quantitative risk assessment (likelihood x impact, 5x5 matrix); IS policy (DOC-ISMS-POL-001) approved by management body; risk register maintained in GRC platform; risk acceptance criteria: residual risk score <= 6 approved by Risk Owner, score > 6 requires CISO approval, score > 15 requires management body approval | Risk register, IS policy, risk treatment plan | CISO |
| **(b)** Incident handling | Microsoft Sentinel SIEM with automated detection playbooks; SOAR integration for initial triage; severity classification (Critical/High/Medium/Low) per ISMS incident taxonomy; incident response procedures (DOC-ISMS-IRP-001) tested quarterly via tabletop exercises | Incident log, playbook execution records, exercise reports | CISO / SOC Lead |
| **(c)** Business continuity and crisis management | Azure Site Recovery for infrastructure failover; RPO/RTO targets per data classification (Tier 1: RPO 1h/RTO 4h, Tier 2: RPO 4h/RTO 8h, Tier 3: RPO 24h/RTO 24h); BCP tested semi-annually; crisis management team with defined escalation chain; communication templates pre-approved | BCP document, DR test reports, crisis communication logs | CTO / SRE Lead |
| **(d)** Supply chain security | Vendor risk assessment program (VRA) for all suppliers processing information assets; contractual security requirements (ISO 27001 A.5.20); SCA/SBOM for software supply chain; AI-BOM for AI supply chain (ISO DIS 27090 cl. 7); supply chain incident notification cascades within 24 hours of confirmed supplier breach | VRA register, supplier contracts, SBOM/AI-BOM artifacts, notification procedures | CISO / Procurement |
| **(e)** Security in network and information systems acquisition, development, and maintenance | This SDLC document; DevSecOps pipeline (Section 9.3); vulnerability management process with SLAs (Critical: 24h, High: 72h, Medium: 30d, Low: 90d); end-to-end process: discovery (Snyk/Trivy/Sentinel) --> triage (severity + exploitability + asset criticality) --> assignment --> remediation --> verification --> closure; exception management requires CISO approval with time-bound risk acceptance | Vulnerability dashboard, SLA compliance reports, exception register | CISO / Engineering Leads |
| **(f)** Cybersecurity risk management effectiveness assessment | Quarterly security metrics review; annual penetration testing (scope: external, internal, application, social engineering; methodology: PTES/OWASP Testing Guide); TISAX ISA maturity self-assessment annually; KPI dashboard: vulnerability SLA compliance, incident response times, training completion rates | Penetration test reports, metrics dashboards, maturity assessment results | CISO |
| **(g)** Cyber hygiene and training | Mandatory security awareness training for all employees (annually + onboarding); role-based training for developers (secure coding), administrators (hardening), and management (governance); phishing simulation campaigns (quarterly); training completion tracked in HR system; minimum 90% completion rate enforced | Training records, phishing simulation results, completion reports | CISO / HR |
| **(h)** Cryptography policies | Cryptographic policy (DOC-ISMS-CRY-001) defining approved algorithms, key lengths, key lifecycle management, certificate management; HSM-backed key storage (Azure Key Vault, FIPS 140-2 Level 2); crypto agility roadmap for PQC migration (NIST PQC standards: ML-KEM, ML-DSA) with hybrid approach timeline: assessment 2026, pilot 2027, migration 2028-2029 | Cryptographic policy, key inventory, PQC roadmap | CISO / Platform Architect |
| **(i)** HR security, access control, asset management | Pre-employment screening per jurisdiction (DE: Fuehrungszeugnis, NL: VOG, US: background check); employment contracts with IS clauses; RBAC via Azure Entra ID with quarterly access reviews; JIT/JEA for privileged access; MFA mandatory (FIDO2 preferred, authenticator app fallback); CMDB for all information assets; asset lifecycle management (provisioning, tracking, return, disposal) | Screening records, employment contracts, access review reports, CMDB | CISO / HR / IT Operations |
| **(j)** MFA and secured communications | Azure Entra ID MFA enforced for all users (conditional access policies); FIDO2 hardware keys for privileged accounts; encrypted communications (Microsoft Teams with E2EE for sensitive discussions, S/MIME for email where required); secure emergency communication channel (out-of-band, non-dependent on primary infrastructure) | MFA enforcement reports, conditional access policies, communication security configuration | CISO / IT Operations |

#### 12.4.2 NIS2UmsuCG – German Transposition Specifics

The NIS-2-Umsetzungs- und Cybersicherheitsstarkungsgesetz (NIS2UmsuCG) transposes NIS2 into German law. HH GmbH complies with the following requirements:

- **Entity categorization (Sec. 28 NIS2UmsuCG):** HH GmbH is classified as an "important entity" (wichtige Einrichtung) based on sector (ICT service provider), size, and services provided. If automotive OEM customers are classified as critical infrastructure operators (KRITIS per BSI-KritisV), additional obligations under the KRITIS regime are assessed and implemented.
- **BSI registration (Sec. 33 NIS2UmsuCG):** HH GmbH maintains a current registration with the Bundesamt fuer Sicherheit in der Informationstechnik (BSI), providing: entity contact point, sector classification, IP ranges, and designated incident contact.
- **Incident reporting to BSI (Sec. 32 NIS2UmsuCG):** Significant security incidents (erhebliche Sicherheitsvorfaelle) are reported via the BSI reporting portal in the following timeline: initial notification within 24 hours, detailed report within 72 hours, final report within one month. Reports are submitted in German. Classification criteria for "significant incident": service disruption affecting >= 5% of users, data breach involving personal data, cross-border impact, or compromise of critical systems.
- **BSI C5 reference:** Azure services used by HH GmbH hold BSI C5 (Cloud Computing Compliance Criteria Catalogue) attestation. The ISMS references Azure's BSI C5 Type 2 report as compensating evidence for cloud-related physical and infrastructure controls.

#### 12.4.3 Dutch Wbni Amendments – NIS2 Transposition

The Netherlands transposes NIS2 by amending the Wet beveiliging netwerk- en informatiesystemen (Wbni). HH B.V. complies with:

- **Entity categorization:** HH B.V. is classified under the Dutch NIS2 transposition based on sector, size, and services. Classification determines the supervisory regime: essential entities face ex-ante supervision, important entities face ex-post supervision.
- **NCSC-NL registration:** HH B.V. maintains registration with the Nationaal Cyber Security Centrum (NCSC-NL) as competent authority, providing required entity information and incident contact details.
- **NCSC-NL incident reporting:** Incidents are reported to NCSC-NL within the NIS2-mandated timelines. Technical incident reports may be submitted in English; formal notifications and regulatory correspondence are submitted in Dutch. The NCSC-NL reporting portal and format requirements are documented in the incident response procedures.
- **Autoriteit Persoonsgegevens (AP) coordination:** GDPR data breach notifications to the AP (72 hours, per GDPR Art. 33) and NIS2 incident notifications to NCSC-NL (24 hours initial) are separate obligations with distinct triggers, timelines, and procedures. An incident may trigger both; the incident response procedure includes a dual-notification assessment checklist.
- **NCSC-NL advisories:** A process is established for monitoring and incorporating NCSC-NL sector-specific cybersecurity baselines and advisories into the ISMS control framework.

#### 12.4.4 Management Body Liability (NIS2 Art. 20; NIS2UmsuCG Sec. 38)

NIS2 Art. 20 and its national transpositions impose personal liability on management bodies for cybersecurity risk management. The following obligations are operationalized:

- **Approval obligation:** The Geschaeftsfuehrer (GmbH) and Bestuurders (B.V.) formally approve the cybersecurity risk management measures described in Art. 21 and oversee their implementation. Approval is documented via signed management review minutes.
- **Training obligation:** Management body members complete cybersecurity training annually. Training covers: current threat landscape, ISMS performance, NIS2 obligations, personal liability implications, and incident response roles. Completion is recorded and auditable.
- **Personal liability acknowledgment:** Each management body member signs an annual acknowledgment of their personal liability for cybersecurity governance under NIS2UmsuCG Sec. 38 (DE) and the Wbni amendment (NL). Legal counsel reviews the acknowledgment form annually.
- **Liability mitigation:** The ISMS provides a documented defense demonstrating that management bodies have fulfilled their duties: approved risk management measures, overseen implementation, completed training, and responded appropriately to identified risks and incidents.

#### 12.4.5 Supply Chain Notification Cascades

When a confirmed security incident affects a supplier processing HH Group information assets:

1. **T+0h:** Supplier notifies HH Group incident contact per contractual notification clause (maximum 24 hours from supplier's detection).
2. **T+4h:** HH Group SOC assesses impact on HH Group information assets and classifies the incident per ISMS incident taxonomy.
3. **T+8h:** If the incident is classified as significant, downstream notification cascades are triggered: affected customers notified per contractual SLA, NIS2 competent authorities notified per 12.4.2/12.4.3 timelines.
4. **T+24h:** Cross-entity coordination (GmbH/B.V./Inc.) activated if the supplier incident affects multiple entities.
5. **Continuous:** Updated situation reports shared with affected parties until incident closure.

#### 12.4.6 Incident Reporting Automation

Incident reporting timelines (T+24h early warning, T+72h detailed report) are supported by automation:

- Microsoft Sentinel playbooks auto-generate NIS2 early warning templates from incident classification data within 4 hours of detection.
- Pre-populated report templates are routed to the designated incident contact for review and submission.
- The GRC platform tracks reporting deadlines and sends escalation alerts at T+16h (early warning) and T+48h (detailed report) if submissions are not confirmed.
- All submissions are archived with timestamp evidence for audit purposes.

### 12.5 TISAX Controls (VDA ISA 6) – Enhanced

#### 12.5.1 Full ISA 6 Control Objective Mapping

The following table maps all VDA ISA 6 control objectives with Level 3 (Managed/Optimized) maturity evidence requirements. Level 3 maturity requires: defined process, consistent implementation, measured effectiveness, and continuous improvement.

**Information Security Management (ISA Chapter 1)**

| ISA Objective | Title | Implementation | Level 3 Evidence |
|---|---|---|---|
| 1.1.1 | IS Policy | IS policy (DOC-ISMS-POL-001) approved by management, reviewed annually, communicated to all staff, aligned with ISO 27001 cl. 5.2 | Policy document, approval records, communication evidence, review history, effectiveness metrics |
| 1.2.1 | IS Organization | CISO appointed with defined authority; security organization spanning all entities; security champions embedded in each team; reporting line to management body | Org chart, CISO appointment, role descriptions, reporting evidence, security guild meeting minutes |
| 1.3.1 | Asset Management | CMDB covering all information assets (hardware, software, data, AI models); asset owners assigned; lifecycle management (acquisition, use, return, disposal) | CMDB extract, asset owner register, lifecycle process records, disposal certificates |
| 1.3.2 | Classification of Information | Four-tier classification scheme: Public, Internal, Confidential, Strictly Confidential; classification criteria defined; assets classified upon creation/acquisition | Classification policy, classified asset inventory, classification training records |
| 1.3.3 | Handling of Information | Handling rules per classification tier (storage, transmission, printing, disposal); technical enforcement via Azure Information Protection labels and DLP policies | Handling procedures, AIP configuration, DLP policy reports, compliance monitoring data |
| 1.3.4 | Software Approval Process | Approved software list maintained; endpoint protection (Microsoft Defender); unauthorized software detection and remediation; change management for new software | Approved software list, endpoint compliance reports, detection/remediation records |
| 1.4.1 | Risk Management | Semi-quantitative risk assessment (5x5 matrix); risk register in GRC platform; risk treatment plans linked to controls; risk acceptance criteria defined; quarterly risk review | Risk assessment methodology, risk register, treatment plans, acceptance records, review minutes |
| 1.5.1 | IS Training and Awareness | Annual security awareness training; role-based training (developers, administrators, management); phishing simulations quarterly; training effectiveness measured | Training curriculum, completion records, phishing results, knowledge assessment scores, improvement trends |
| 1.6.1 | Incident Management | Integrated incident management process aligned with NIS2 reporting; VDA-specific reporting templates; post-incident reviews with lessons learned; incident metrics tracked | Incident response plan, incident log, VDA templates, post-incident reports, metrics dashboard |
| 1.7.1 | Compliance | Regulatory compliance register; IS compliance monitoring via automated controls; annual compliance review; external audit coordination | Compliance register, monitoring reports, review records, audit findings and closure |

**Human Resources Security (ISA Chapter 2)**

| ISA Objective | Title | Implementation | Level 3 Evidence |
|---|---|---|---|
| 2.1.1 | HR Security – Prior to Employment | Pre-employment screening (background checks per jurisdiction); security responsibilities in job descriptions; IS competence requirements defined per role | Screening policy, screening records, job descriptions, competence matrix |
| 2.1.2 | HR Security – During Employment | Confidentiality agreements signed; IS responsibilities communicated; continuous awareness program; disciplinary process for IS violations | NDA register, responsibility acknowledgments, training records, disciplinary policy |
| 2.1.3 | HR Security – Termination / Change | Access revocation within 4 hours of termination; asset return process; exit interview with IS reminders; post-employment confidentiality obligations | Access revocation logs, asset return records, exit checklists, post-employment NDA |

**Physical Security (ISA Chapter 3)**

| ISA Objective | Title | Implementation | Level 3 Evidence |
|---|---|---|---|
| 3.1.1 | Physical Security Perimeters | Office premises: access-controlled entry (badge/key card); visitor management (sign-in, escort); Azure data centers: Microsoft's physical security per shared responsibility model (evidenced by Azure ISO 27001 and SOC 2 reports) | Physical access policy, visitor logs, Azure attestation reports |
| 3.1.2 | Working in Secure Areas | Clean desk policy enforced; screen lock policy (5-minute timeout); prohibited: photography in secure areas, unauthorized recording devices | Clean desk/screen policy, audit check records, secure area procedures |
| 3.1.3 | Equipment Security | Endpoint device encryption (BitLocker/FileVault); mobile device management (Microsoft Intune); secure disposal of storage media (NIST SP 800-88 guidelines); equipment maintenance logs | MDM compliance reports, encryption status reports, disposal certificates, maintenance logs |

**Identity and Access Management (ISA Chapter 4)**

| ISA Objective | Title | Implementation | Level 3 Evidence |
|---|---|---|---|
| 4.1.1 | Access Control Policy | Role-based access control (RBAC) via Azure Entra ID; attribute-based access control (ABAC) for fine-grained data access; access control policy reviewed annually | RBAC role definitions, ABAC policy configurations, access control policy document |
| 4.1.2 | User Access Management | Provisioning via identity governance (Azure Entra ID Governance); quarterly access reviews; deprovisioning within 4 hours of role change/termination; segregation of duties enforced | Provisioning workflows, access review reports, deprovisioning logs, SoD matrix |
| 4.1.3 | Privileged Access Management | JIT/JEA via Azure PIM; privileged sessions recorded; break-glass procedures documented and audited; PAM solution enforces least privilege for all administrative access | PIM activation logs, session recordings, break-glass audit trail, PAM policy |
| 4.1.4 | Authentication Management | MFA enforced for all users (conditional access); FIDO2 for privileged accounts; password policy: minimum 14 characters, complexity requirements, no known compromised passwords (Azure AD Password Protection); SSO for all enterprise applications | Conditional access policies, MFA enrollment reports, password policy configuration, SSO registry |

**IT Security (ISA Chapter 5)**

| ISA Objective | Title | Implementation | Level 3 Evidence |
|---|---|---|---|
| 5.1.1 | Cryptography | Cryptographic policy (DOC-ISMS-CRY-001); approved algorithms (AES-256, RSA-4096, ECDSA P-384, TLS 1.3); FIPS 140-2 Level 2 HSMs; key lifecycle management; PQC roadmap | Crypto policy, algorithm inventory, HSM configuration, key management records, PQC roadmap |
| 5.2.1 | Vulnerability Management | Continuous scanning (Snyk, Trivy, Microsoft Defender); vulnerability SLAs (Critical: 24h, High: 72h, Medium: 30d, Low: 90d); exception process with CISO approval; end-to-end process documented | Scanning reports, SLA compliance dashboard, exception register, process documentation |
| 5.2.2 | Penetration Testing | Annual penetration testing (scope: external, internal, application, social engineering); methodology: PTES and OWASP Testing Guide; qualified external testers; findings tracked to remediation | Engagement letters, test reports, findings register, remediation evidence |
| 5.3.1 | Network Security | Microsegmented networks; Azure NSG/firewall rules following deny-by-default; network monitoring via Azure Network Watcher; web filtering (Azure Firewall); network security reviewed quarterly | NSG configurations, firewall rules, monitoring dashboards, review records |
| 5.3.2 | System Hardening | CIS Benchmark compliance for all OS and application configurations; Azure Policy for drift detection; automated remediation via Azure Automation; hardening baselines documented | CIS compliance reports, Azure Policy results, remediation logs, baseline documents |
| 5.4.1 | Logging and Monitoring | Security logging policy (DOC-ISMS-LOG-001); centralized logging (Azure Log Analytics); tamper-evident log storage; log retention: 13 months (EU), 3 years (FedRAMP); log review procedures; SIEM correlation rules | Logging policy, log integrity verification, retention configuration, SIEM rule library, review records |
| 5.5.1 | Backup and Recovery | Backup policy with RPO/RTO targets per classification tier; Azure Backup for VMs and databases; blob versioning and soft delete; backup testing quarterly; recovery procedures documented and tested | Backup policy, backup job reports, recovery test results, procedure documentation |
| 5.6.1 | Mobile Device Security | Microsoft Intune MDM/MAM; device compliance policies (encryption, OS version, jailbreak detection); conditional access requiring compliant devices; remote wipe capability | Intune compliance reports, conditional access policies, device inventory, wipe log |
| 5.7.1 | Software Development Security | This SDLC document; DevSecOps pipeline with security gates; SAST, SCA, DAST integrated; secure coding standards; code review requirements; AI-specific security controls | SDLC document, pipeline configuration, scan reports, code review records, AI security controls |

**Supplier and Third-Party Management (ISA Chapter 6)**

| ISA Objective | Title | Implementation | Level 3 Evidence |
|---|---|---|---|
| 6.1.1 | Supplier Information Security | Vendor risk assessment (VRA) for all suppliers processing information assets; security requirements in contracts (A.5.20); annual supplier security review; right to audit clauses | VRA register, contract clauses, review records, audit reports |
| 6.1.2 | Outsourced Development Security | Security requirements for outsourced development specified in contracts; code review and security testing mandatory for outsourced code; IP ownership and confidentiality clauses | Contract clauses, code review records, security test reports |

**Prototype Protection (ISA Chapter 7 – Prototypenschutz)**

| ISA Objective | Title | Implementation | Level 3 Evidence |
|---|---|---|---|
| 7.1.1 | Prototype Handling | Classification of prototype information as "Strictly Confidential"; access restricted to named individuals; physical prototype handling procedures (where applicable); digital prototype data encrypted and access-logged | Classification records, access lists, handling procedures, encryption configuration, access logs |
| 7.2.1 | Project-Specific Security | Project security plans for automotive OEM engagements; customer-specific security requirements integrated into ISMS; dedicated access controls per project; information barriers between competing OEM projects | Project security plans, customer requirement matrices, project-level access controls, barrier configuration |
| 7.3.1 | Transfer of Prototype Information | Secure transfer channels for prototype information (encrypted file transfer, secure email); transfer logging; recipient verification; no prototype information on personal devices | Transfer policy, transfer logs, recipient verification records, device compliance reports |

#### 12.5.2 Level 3 Maturity Evidence Standard

For each ISA control objective, Level 3 maturity requires demonstrating:

1. **Process definition:** Documented procedure or policy governing the control.
2. **Consistent implementation:** Evidence that the control operates consistently across all applicable entities and processes (not ad-hoc).
3. **Measured effectiveness:** Metrics demonstrating that the control achieves its intended outcome (e.g., vulnerability SLA compliance rate, access review completion rate).
4. **Continuous improvement:** Evidence that control performance is reviewed and improved over time (trend analysis, corrective actions, process updates).

Evidence is maintained in the GRC platform and presented to the ENX-accredited TISAX auditor during assessment.

### 12.6 Privacy by Design (GDPR/CCPA) – Enhanced

#### 12.6.1 Privacy Principles Implementation

| GDPR Principle | Implementation | Control Reference |
|---|---|---|
| **Lawfulness, fairness, transparency** (Art. 5(1)(a)) | Processing activities documented in Records of Processing Activities (ROPA); legal basis identified per activity; privacy notices provided to data subjects in clear, plain language; AI decision-making transparency per EU AI Act Art. 13 | ISO 27001 A.5.34; EU AI Act Art. 13 |
| **Purpose limitation** (Art. 5(1)(b)) | Processing purposes specified and documented at point of collection; no further processing for incompatible purposes without new legal basis assessment; purpose limitation enforced in data access policies | ISO 27001 A.5.10 |
| **Data minimization** (Art. 5(1)(c)) | Data collection limited to what is necessary for specified purpose; automated data minimization rules in data pipelines; AI training data subject to minimization review | ISO 27001 A.5.34; ISO 42001 A.4 |
| **Accuracy** (Art. 5(1)(d)) | Data quality controls in processing pipelines; data subject right to rectification implemented; AI training data quality validation | ISO 42001 A.4 |
| **Storage limitation** (Art. 5(1)(e)) | Automated data lifecycle management with retention policies per data category and jurisdiction; data deletion verified and logged; backup data subject to same retention limits | ISO 27001 A.8.10 |
| **Integrity and confidentiality** (Art. 5(1)(f)) | Encryption (Section 12.1 Principle 4); access control (Section 12.5 ISA 4.1); logging (Section 12.5 ISA 5.4); incident management (Section 12.4.1(b)) | ISO 27001 A.8.24, A.5.15 |

#### 12.6.2 DPIA Requirements for AI Features (GDPR Art. 35)

A Data Protection Impact Assessment is mandatory for:
- Any AI feature that processes personal data for automated decision-making (GDPR Art. 22).
- Any AI feature classified as High-Risk under the EU AI Act (Art. 6).
- Any processing activity involving systematic monitoring, profiling, or large-scale processing of special category data.
- Any new cross-entity data flow involving personal data.

DPIA process: (1) necessity and proportionality assessment, (2) risk identification using LINDDUN threat model, (3) risk mitigation measures, (4) DPO consultation, (5) supervisory authority consultation if high residual risk (Art. 36), (6) annual review or upon significant processing change.

#### 12.6.3 Privacy-Preserving AI Techniques

| Technique | Application | Standard Reference |
|---|---|---|
| **Differential privacy** | Applied to AI model outputs and training data aggregation to prevent membership inference and model inversion attacks | ISO DIS 27090 cl. 8.3; GDPR Art. 25 |
| **Federated learning** | Explored for customer-specific model fine-tuning where data must remain on customer premises; design patterns documented in architecture repository | ISO 42001 A.4; GDPR Art. 25 |
| **Data anonymization** | Applied to staging and test environments; k-anonymity (k >= 5) or l-diversity for quasi-identifiers; anonymization effectiveness validated | GDPR Recital 26; ISO 27001 A.8.11 |
| **Synthetic data generation** | Used for development and testing environments; statistical fidelity validated against production distributions; no re-identification risk assessment | ISO 27001 A.8.33; GDPR Art. 25 |
| **Model output filtering** | PII detection and redaction in AI model outputs before delivery to users; content safety filters for all customer-facing AI features | EU AI Act Art. 15; ISO DIS 27090 cl. 11 |

#### 12.6.4 European Accessibility Act (EAA) Reference

Directive (EU) 2019/882, the European Accessibility Act, applies to digital products and services placed on the EU market from 28 June 2025. Verity VE and Verity EAM comply with:
- EN 301 549 (Harmonized European Standard for ICT accessibility), which incorporates WCAG 2.2 Level AA.
- Accessibility testing integrated into the SDLC (Section 9.3: axe-core in CI pipeline; Section 9.4: accessibility in testing pyramid).
- Accessibility statement published per product, detailing compliance status and feedback mechanism.
- Accessibility is considered a privacy-adjacent concern: inaccessible privacy controls (consent mechanisms, data subject rights portals) undermine both EAA and GDPR compliance.

#### 12.6.5 CCPA/CPRA Compliance (HH Inc.)

For US data subjects (California residents), HH Inc. implements:
- Right to know, delete, correct, and opt-out of sale/sharing of personal information.
- "Do Not Sell or Share My Personal Information" link on all customer-facing properties.
- Data Processing Agreements with service providers per CCPA Sec. 1798.140(ag).
- Annual review of CCPA compliance posture coordinated with the Privacy Architect.

---
## 13. Quality Gates and Governance

### 13.1 Risk-Tiered Gate Model

Quality gates in SDLC v2 are risk-tiered to resolve the tension between continuous delivery velocity and governance rigor. The risk classification of a change determines which gate mechanism the pipeline applies.

**Risk Classification Criteria:**

| Factor | Low | Medium | High | Critical |
|---|---|---|---|---|
| User impact | Internal tooling only | Limited user segment | All users affected | Safety/financial/legal impact |
| Data sensitivity | No personal data | Pseudonymized data | Personal data (GDPR) | Special category data or cross-border |
| AI involvement | No AI components | AI-assisted (Tier 1) | AI-driven (Tier 2) | AI decision-making (Tier 3) |
| Regulatory scope | No compliance impact | Single framework | Multiple frameworks | FedRAMP or High-Risk AI (EU AI Act) |
| Architecture impact | No changes to contracts or schemas | Minor contract changes | Major contract changes | Cross-service or cross-entity impact |
| Reversibility | Instantly reversible (feature flag) | Reversible within minutes (rollback) | Reversible within hours | Irreversible (data migration, contract change) |

**Risk Tier Determination:** The highest-severity factor determines the overall risk tier. Automated CI pipeline evaluates factors from metadata (labels, file paths, change scope). When automated classification is uncertain, it escalates to the next higher tier.

**Gate Mechanism by Risk Tier:**

| Gate Type | Risk Tier | Mechanism | Human Involvement | SLA |
|---|---|---|---|---|
| **Automated Gate** | Low | CI/CD pipeline checks pass -> auto-promote | Post-hoc review within 24h | Minutes |
| **Automated Gate** | Medium | CI/CD pipeline checks pass -> auto-promote | Post-hoc review within 24h; flagged for async review | Minutes |
| **Review Gate** | High | Automated checks + async human review required before promotion | 1-2 designated reviewers must approve | < 4 hours |
| **Approval Gate** | Critical | Automated checks + synchronous multi-stakeholder approval | CAB or equivalent governance body must convene | < 24 hours |

### 13.2 Gate Definitions

#### G0 – Strategic Alignment Gate (Orient -> Requirements)

**Purpose:** Confirm the initiative is strategically sound, risk-assessed, and worth pursuing.

| Criterion | Low/Medium | High | Critical |
|---|---|---|---|
| Strategic trace to OKR | Documented | Documented + scored | Documented + scored + portfolio review |
| Risk classification | Automated | Documented assessment | Full ISO 31000 assessment |
| AI risk classification | Automated or N/A | Documented (EU AI Act Art. 6) | AI Governance Board review |
| ISO 42005 pre-screening | Automated or N/A | Documented | Full impact assessment initiated |
| Cross-entity impact | Automated check | Documented analysis | Architecture Review Board |
| Investment decision | Tech Lead approves | CTO approves | CTO + VMO + AI Governance |

**Process Attribute Rating (ISO 33000):**
- PA 1.1 (Process Performance): Are orient activities producing the required outcomes (risk classification, strategic alignment)?
- Rating target: L (Largely) at Startup; F (Fully) at Growth/Enterprise

#### G1 – Requirements Readiness Gate (Requirements -> Development)

**Purpose:** Confirm requirements are complete, testable, traceable, and risk-appropriate for development to begin.

| Criterion | Low/Medium | High | Critical |
|---|---|---|---|
| Stories meet DoR | All stories ready | All stories ready + reviewed | All stories ready + reviewed + baselined |
| Threat model | Automated check or N/A | Security Champion review | Security Review Board approval |
| DPIA | Automated check or N/A | DPO review | DPO + Legal review |
| AI requirements (ISO 42001) | Checklist or N/A | Documented specification | AI Governance Board review |
| SBOM baseline | Automated capture | Reviewed for known vulnerabilities | Reviewed + dependency approval |
| ADRs approved | Tech Lead approval | Architect approval | Architecture Review Board |
| Accessibility requirements | WCAG 2.2 A checklist | WCAG 2.2 AA specification | WCAG 2.2 AA + Section 508 review |
| Requirements baseline | Ticket status tracking | Formal baseline established | Formal baseline + change control board |

**Process Attribute Rating (ISO 33000):**
- PA 1.1 (Process Performance): Are requirements producing complete, testable specifications?
- PA 2.2 (Work Product Management): Are requirements artifacts managed (baselined, change-controlled)?
- Rating target: L at Startup; F at Growth/Enterprise

#### G2 – Development Completeness Gate (Development -> Testing)

**Purpose:** Confirm the software increment is built, integrated, and has passed all CI/CD pipeline quality checks.

| Criterion | Low/Medium | High | Critical |
|---|---|---|---|
| DoD criteria met | All standard criteria | All criteria + AI addenda | All criteria + AI addenda + independent review |
| Fast loop CI | All stages pass | All stages pass | All stages pass |
| Extended loop CI | All stages pass | All stages pass + reviewed | All stages pass + reviewed + signed off |
| SBOM generated | Automated | Automated + reviewed | Automated + reviewed + approved |
| Artifacts signed | Automated | Automated | Automated + verified |
| AI provenance | If applicable, metadata attached | Reviewed for completeness | Audited by independent reviewer |

**Process Attribute Rating (ISO 33000):**
- PA 1.1 (Process Performance): Does development produce working, tested code?
- PA 2.1 (Performance Management): Is development planned and monitored (sprint burndown, velocity)?
- PA 2.2 (Work Product Management): Are code artifacts managed (versioned, signed, traceable)?
- Rating target: P (Partially) at Startup for PA 2.1/2.2; L at Growth; F at Enterprise

#### G3 – Quality and Compliance Gate (Testing -> Deployment)

**Purpose:** Confirm the integrated system meets quality, security, compliance, and accessibility standards.

| Criterion | Low/Medium | High | Critical |
|---|---|---|---|
| All test layers pass | Automated verification | Automated + QA sign-off | Automated + QA + CISO sign-off |
| Security test results | Zero Critical/High (automated) | Penetration test reviewed | Penetration test + security board review |
| AI validation | Automated metrics check or N/A | Report reviewed by AI Governance | AI Governance Board approval |
| Compliance evidence | Automated generation | Reviewed by compliance lead | Reviewed + external auditor confirmation |
| Performance baselines | Automated threshold check | Reviewed by SRE | Reviewed by SRE + capacity plan confirmed |
| Accessibility | axe-core automated pass | Automated + semi-automated review | Automated + expert audit pass |

**Process Attribute Rating (ISO 33000):**
- PA 1.1 (Process Performance): Is testing effectively finding defects and producing evidence?
- PA 2.1 (Performance Management): Is testing planned and tracked (test coverage, execution progress)?
- PA 3.1 (Process Definition): Is a standard testing process defined and followed?
- Rating target: L at Startup for PA 1.1; F at Growth; F + PA 3.1 L at Enterprise

#### G4 – Release Readiness Gate (Deployment -> Production)

**Purpose:** Confirm the deployment is safe to proceed to production with appropriate safeguards.

| Criterion | Low/Medium | High | Critical |
|---|---|---|---|
| Staging tests pass | Automated | Automated + reviewed | Automated + reviewed + signed off |
| Canary metrics | 15-minute observation | 4-hour observation | 24-hour observation + Kayenta analysis |
| CAB approval | Not required | Async CAB review | Synchronous CAB meeting |
| Error budget check | Automated (> 25% remaining) | Automated (> 25% remaining) | Automated + CTO confirmation |
| Rollback plan | Documented | Tested in staging | Tested + SRE walkthrough |
| Database migration | Automated test or N/A | Staging test + review | Staging test + SRE review + off-peak schedule |
| Incident runbook | Exists | Updated and reviewed | Updated + walkthrough + drill completed |

**Process Attribute Rating (ISO 33000):**
- PA 1.1 (Process Performance): Is deployment reliably producing successful releases?
- PA 4.1 (Quantitative Analysis): Is deployment predictable (success rate, duration, rollback rate)?
- Rating target: L for PA 1.1 at Startup; L for PA 1.1 + P for PA 4.1 at Growth; F for PA 1.1 + L for PA 4.1 at Enterprise

#### G5 – Post-Release Validation Gate (Production -> Steady State)

**Purpose:** Confirm the deployment is stable in production and the system has transitioned to steady-state operations.

| Criterion | Low/Medium | High | Critical |
|---|---|---|---|
| SLO compliance | Automated check (24h) | Automated check (48h) | Automated check (72h) + SRE review |
| Incident review | No Critical/High incidents | PIR for any incident | PIR + corrective actions approved |
| Error budget impact | Automated assessment | Reviewed by SRE | Reviewed by SRE + CTO |
| AI model stability | Automated metrics check or N/A | 48h observation + report | 72h observation + AI Governance review |
| Customer feedback | No blocking issues reported | Feedback reviewed by Product | Feedback reviewed + response plan if needed |
| Monitoring confirmation | Automated check | SRE verification | SRE + Engineering Lead verification |

**Process Attribute Rating (ISO 33000):**
- PA 1.1 (Process Performance): Does post-release validation catch production issues before customer impact?
- PA 5.1 (Process Innovation): Are post-release findings driving process improvements?
- Rating target: P for PA 1.1 at Startup; L at Growth; F for PA 1.1 + P for PA 5.1 at Enterprise

### 13.3 Governance Bodies – Scaled by Adoption Phase

| Body | Startup (< 20) | Growth (20-80) | Enterprise (80+) |
|---|---|---|---|
| **AI Governance** | CTO decides; documented in ADR | Monthly AI Governance Board (CTO, AI Lead, Legal) | Monthly board + ad-hoc for Critical AI changes |
| **Change Advisory Board (CAB)** | Tech Lead decides; async approval | Weekly async CAB (SRE, Engineering Lead, Product) | Weekly CAB + ad-hoc for Critical changes |
| **Security Review Board** | CTO + Security Champion review | Bi-weekly Security Board (CISO, Security Champions, SRE) | Bi-weekly board + ad-hoc for vulnerabilities |
| **Compliance Steering** | CTO reviews compliance posture monthly | Monthly Compliance Committee (CISO, Legal, Compliance Lead) | Monthly committee + quarterly external auditor |
| **Architecture Review Board** | CTO + Senior Engineer review ADRs | Bi-weekly Architecture Review (CTO, Principal Engineers) | Bi-weekly board + ad-hoc for cross-ART decisions |

**Governance Consolidation at Startup:**

At the Startup stage, the five governance bodies consolidate into two meetings to prevent governance overhead from exceeding available time:

| Combined Meeting | Agenda | Cadence | Duration | Participants |
|---|---|---|---|---|
| **Weekly Technical Governance** | Architecture decisions + change review + security items | Weekly | 30 minutes | CTO, Senior Engineer, Security Champion |
| **Monthly Strategic Governance** | AI governance + compliance posture + strategic review | Monthly | 60 minutes | CTO, Legal/Compliance, Product Lead |

**Role Consolidation at Startup:**

| Enterprise Role | Startup Consolidation | Separation Trigger |
|---|---|---|
| CTO | CTO = CISO = AI Governance Lead | Engineering headcount > 15 |
| Product Owner + Scrum Master | Single PO/SM per team | Team count > 3 |
| Security Champion + AI Ethics Champion | Rotating engineer responsibility | Dedicated security hire |
| Compliance Lead | CTO responsibility | First certification audit scheduled |
| SRE Lead | Senior Engineer responsibility | Dedicated SRE hire (typically at Growth stage) |

### 13.4 Process Assessment Integration

Quality gates produce not only pass/fail decisions but also process attribute ratings that feed into the organization's process improvement program.

**Assessment Cadence:**

| Assessment Type | Cadence | Scope | Assessor |
|---|---|---|---|
| Gate-level assessment | Per gate passage | Single process (phase being gated) | Gate reviewer (lightweight) |
| PI-level assessment | Per Planning Interval | All processes active in PI | Engineering Lead + QE (structured) |
| Annual formal assessment | Annually | All SDLC processes | Qualified assessor per ISO 33002 |

**Capability Level Targets by Adoption Phase:**

| SDLC Phase | Startup Target | Growth Target | Enterprise Target |
|---|---|---|---|
| Phase 0: Orient | Level 1 (Performed) | Level 2 (Managed) | Level 2 (Managed) |
| Phase 1: Requirements | Level 1 (Performed) | Level 2 (Managed) | Level 3 (Established) |
| Phase 2: Development | Level 2 (Managed) | Level 2 (Managed) | Level 3 (Established) |
| Phase 3: Testing | Level 1 (Performed) | Level 2 (Managed) | Level 3 (Established) |
| Phase 4: Deployment | Level 2 (Managed) | Level 2 (Managed) | Level 3 (Established) |
| Phase 5: Operate | Level 1 (Performed) | Level 2 (Managed) | Level 3 (Established) |
| Phase 6: Feedback | Level 1 (Performed) | Level 1 (Performed) | Level 2 (Managed) |

**Rating Scale (ISO 33002):**

| Rating | Symbol | Achievement Range | Meaning |
|---|---|---|---|
| Not achieved | N | 0-15% | Little or no evidence of achievement |
| Partially achieved | P | 16-50% | Some evidence; significant weakness remains |
| Largely achieved | L | 51-85% | Evidence of systematic approach; some weakness |
| Fully achieved | F | 86-100% | Evidence of complete and systematic approach |

### 13.5 Audit Readiness

The SDLC produces a continuous audit trail satisfying all applicable frameworks. Evidence is generated as a byproduct of normal development activity, not as a separate documentation exercise.

| Framework | Audit Type | Cadence | Evidence Source |
|---|---|---|---|
| ISO 27001 / 42001 | Internal audit; certification audit | Annual internal; triennial certification + annual surveillance | UCL evidence archive + GRC platform |
| TISAX | Assessment via ENX-accredited auditor | Every three years | UCL evidence archive + TISAX evidence package |
| SOC 2 Type II | Annual audit | Annual | Continuous evidence collection (Vanta/Drata) |
| NIS2 | Supervisory authority readiness | On-demand | Incident reports + compliance monitoring data |
| FedRAMP | Annual assessment by 3PAO; monthly ConMon | Annual + monthly | OSCAL SSP + ConMon reports |
| EU AI Act | Conformity assessment for high-risk AI | Before deployment + annually | Art. 11 documentation + AI validation reports |
| ISO 33002 | Process assessment | Annual | Process profiles + gate assessment records |

---

## 14. UX/DX and Accessibility

### 14.1 UX as First-Class Discipline

User experience is not a phase, a gate checkbox, or a polish pass before release. It is a discipline that runs continuously through every SDLC phase, from Orient to Operate. For AI-native enterprise products like Verity VE and Verity EAM, UX is the primary determinant of whether users trust, adopt, and effectively operate AI-augmented decision-support tools. The EU AI Act's transparency obligations (Art. 13) are fundamentally UX obligations: users must understand what the AI does, why it recommended something, and how to override it. These requirements cannot be satisfied by backend logging alone.

**Team Composition (amends Section 7.2):**

Every Agile Team includes the following UX and accessibility roles:

| Role | Allocation | Responsibility | Guild Membership |
|---|---|---|---|
| UX Designer | 0.5--1.0 FTE | User research, interaction design, prototyping, design QA | UX Guild |
| Accessibility Champion | 0.5 FTE | WCAG conformance, assistive technology testing, EAA compliance | Accessibility Guild |

At Startup maturity, a single designer may serve multiple teams, and an AI teammate (e.g., Copilot for design review, automated a11y scanning) can augment capacity. At Growth and Enterprise maturity, each ART has dedicated UX staff and a Design System team.

**UX Activities per SDLC Phase:**

| SDLC Phase | UX Activities | Artifacts Produced |
|---|---|---|
| Phase 0: Orient | User research (interviews, analytics review), persona validation, Jobs-to-be-Done mapping | Research findings, persona cards, opportunity canvas |
| Phase 1: Requirements | Journey mapping, wireframing, low-fidelity prototyping, usability testing of prototypes (minimum 5 users), accessibility design annotation | Wireframes, prototype, usability test report, accessibility annotation overlay |
| Phase 2: Development | Design-to-code handoff, design QA (designer verifies implementation), component-level a11y unit tests | Design QA sign-off, a11y test results |
| Phase 3: Testing | Usability testing of implemented features, manual assistive technology testing, cognitive walkthrough | Usability test report, a11y audit report, SUS score |
| Phase 4: Deployment | No UX-specific activity; feature flags enable progressive UX rollout | – |
| Phase 5: Operate | Real User Monitoring (RUM) for UX signals: Core Web Vitals, rage clicks, task completion rates, form abandonment | UX telemetry dashboards |
| Phase 6: Feedback | UX insight synthesis, design retrospective, pattern library updates | UX improvement backlog items, design system change requests |

**Amended Definition of Done (supplements Section 9.3, Item 2.4):**

For every user-facing story, the DoD includes:
- [ ] Design review approved by UX Designer
- [ ] UX acceptance criteria verified
- [ ] Accessibility criteria verified (automated + manual spot check)
- [ ] Design system components used correctly (custom components require ADR)

### 14.2 Verity Design System (VDS)

The Verity Design System is the shared component infrastructure for all Verity products. It is accessibility-first, token-driven, and includes purpose-built components for AI interaction patterns.

**Design Token Architecture:**

Design tokens are the single source of truth for visual properties, stored as JSON and consumed by both design tools (Figma via Tokens Studio) and code (CSS custom properties, Tailwind config). Tokens cover: color (including semantic roles and high-contrast alternatives), typography (scale, line height, font stack), spacing (4px grid), elevation, motion (duration, easing), and border radius.

Multi-brand support is achieved through token aliasing: a `brand.primary` token resolves to different values per product (Verity VE vs. Verity EAM) while components reference only semantic tokens.

**Component Library Tiers:**

| Tier | Examples | a11y Requirement |
|---|---|---|
| Foundation | Tokens, typography scale, color system, spacing, iconography, motion primitives | Color contrast ratios (4.5:1 normal text, 3:1 large text), prefers-reduced-motion support |
| Core Components | Button, Input, Select, Modal, Table, Card, Navigation, Layout Grid, Toast, Tooltip | Full WCAG 2.2 AA: keyboard operation, ARIA roles/states, focus management, error identification |
| AI Components | Confidence Badge, Explanation Panel, AI Attribution Indicator, Human Override Control, Decision Support Dashboard, Contestability Dialog, Feedback Widget | All Core requirements + live region announcements, AI status communication, comprehension-check patterns |

**Component Documentation:**

Every component is documented in Storybook with:
- Interactive playground with all states (default, hover, focus, active, disabled, error, loading)
- Accessibility tab (axe-core results, keyboard interaction map, screen reader output)
- Design token usage reference
- Do/Don't usage guidelines
- Multi-language layout behavior (DE/NL/EN string length variation)

**Visual Regression Testing in CI/CD (amends Section 9.3, Pipeline):**

| Stage | Tool | Behavior |
|---|---|---|
| Component Visual Regression | Chromatic (Storybook) | Blocking: unexpected visual changes to shared VDS components require explicit approval |
| Page-Level Visual Diff | Percy or Playwright screenshot comparison | Non-blocking: visual diff report attached to PR for designer review |

**Progressive Adoption by Maturity:**

| Maturity | VDS Scope |
|---|---|
| Startup | Design tokens (color, typography, spacing), basic component set (Button, Input, Card), a11y primitives |
| Growth | Full component library, AI component tier, Storybook with a11y addon, visual regression in CI |
| Enterprise | Dedicated Design System team, cross-product governance, external contribution model, versioned releases |

### 14.3 Accessibility Standards

**Compliance Targets:**

| Standard | Scope | Level |
|---|---|---|
| WCAG 2.2 | All user-facing products | AA minimum; AAA for critical user flows (authentication, AI decision approval, data subject rights) |
| European Accessibility Act (EAA, Directive 2019/882) | GmbH, B.V. – all products sold in EU (effective June 2025) | Full conformance (amends Section 4 Compliance Matrix) |
| EN 301 549 | GmbH, B.V. – harmonized EU standard for ICT accessibility | Clauses 5–13 as applicable |
| Section 508 (Revised) | Inc. – FedRAMP-adjacent US federal procurement | VPAT/ACR published per major release |

**Testing Strategy (amends Section 9.4 Testing Pyramid):**

| Layer | Scope | Automation | Tools | Cadence |
|---|---|---|---|---|
| Automated Scanning | Detectable WCAG violations (~30–40% of criteria) | 100% automated, every build | axe-core, pa11y, Lighthouse a11y audit | Every CI run |
| Component a11y Unit Tests | Keyboard interaction, ARIA attributes, focus management | 100% automated | jest-axe, Testing Library queries | Every CI run |
| Manual Screen Reader Testing | Content structure, reading order, dynamic content, live regions | Manual | NVDA (Windows), JAWS (Windows), VoiceOver (macOS/iOS), TalkBack (Android) | Per feature, pre-release |
| Keyboard-Only Navigation | Tab order, focus visibility, skip links, modal trap, custom widget operation | Manual | Browser + keyboard | Per feature, pre-release |
| Cognitive Walkthrough | Plain language, consistent navigation, error prevention, cognitive load | Manual | Structured walkthrough protocol | Per epic, during Requirements |

**Assistive Technology Testing Matrix:**

| AT + Browser Combination | Priority | Rationale |
|---|---|---|
| NVDA + Chrome (Windows) | P1 | Highest market share for enterprise screen reader users |
| JAWS + Chrome (Windows) | P1 | Required for US federal accessibility (Section 508) |
| VoiceOver + Safari (macOS) | P2 | Mandatory for Apple ecosystem; common in executive/management personas |
| VoiceOver + Safari (iOS) | P2 | Mobile accessibility baseline |
| TalkBack + Chrome (Android) | P3 | Mobile accessibility coverage |

**Accessibility in CI/CD (amends Section 9.3, Pipeline Stage 2.3):**

A dedicated Accessibility stage is added between DAST and Compliance Checks:
- **Blocking:** Zero Critical, zero Serious axe-core violations.
- **Non-blocking (reported):** Moderate and Minor violations tracked as backlog items with SLA (Moderate: resolved within current PI; Minor: resolved within next PI).

**VPAT/ACR Generation:**

A Voluntary Product Accessibility Template (VPAT) and Accessibility Conformance Report (ACR) are generated as part of Gate G4 (Release Readiness) for every major release. The ACR documents conformance against WCAG 2.2 AA, EN 301 549, and Section 508 in a single artifact, enabling procurement by EU public sector and US federal buyers.

### 14.4 Human-AI Interaction Patterns

The three AI tiers defined in Section 10.1 each require distinct UX patterns. Users must always know which tier they are operating in and what level of AI involvement is present.

**Tier 1 – AI as Assistant (Low Risk):**
- **Interaction model:** Inline suggestions, auto-complete, background analysis. AI operates quietly alongside the user.
- **Visual language:** Subtle AI attribution (small icon or label, e.g., "AI-suggested"). Suggestions appear inline with user content, visually distinguishable but not disruptive.
- **User control:** Accept, dismiss, or modify suggestions with single actions. Bulk accept/dismiss for batch suggestions.
- **Transparency:** On-demand "Why this suggestion?" expandable tooltip. No mandatory comprehension gate.

**Tier 2 – AI as Collaborator (Medium Risk):**
- **Interaction model:** Side-panel recommendations, draft reviews, interactive refinement. AI presents structured options for human evaluation.
- **Visual language:** Clear AI attribution (labeled panel, e.g., "AI Analysis"). AI-generated content visually distinct from human-authored content (border, background, or badge).
- **User control:** Review, edit, accept, or reject each recommendation individually. Provide structured feedback ("useful," "inaccurate," "missing context") that feeds the learning loop.
- **Transparency:** Inspectable explanation for every recommendation: key factors, data sources, confidence level. Expandable without leaving the current workflow.

**Tier 3 – AI as Decision Support (High Risk):**
- **Interaction model:** Full-screen or dedicated decision interface. AI provides comprehensive analysis; human makes the final decision with explicit recording of rationale.
- **Visual language:** Prominent AI attribution and risk indicators. Confidence visualization (calibrated probability displays, not misleading traffic lights). Clear delineation between AI analysis, supporting evidence, and human decision area.
- **User control:** Approve / Reject / Request More Context / Escalate / Defer. Mandatory rationale annotation for approvals above a defined risk threshold. No batch approval for high-risk items.
- **Transparency:** Full audit trail display. Evidence panel with supporting data, similar past decisions, and compliance implications. User-facing AI model card accessible from the decision interface.

**Anti-Rubber-Stamping Design (amends Section 8.6):**

Human-in-the-Loop gates are designed to require genuine engagement, not one-click approval:

| Mechanism | Description | Applicability |
|---|---|---|
| Comprehension Check | Randomized subset of approvals require the reviewer to answer a factual question about the AI's recommendation before proceeding | Tier 3 approvals |
| Rationale Annotation | Reviewer provides a one-line written rationale for approval or rejection | All Tier 3; Tier 2 above configurable risk threshold |
| Batch Approval Limit | Maximum N low-risk items per batch (configurable; default 5) | Tier 2 batch workflows |
| Approval Pattern Audit | System flags reviewers with >95% approval rate over a rolling 30-day window for review by the AI Governance Board | All tiers (monitoring) |
| Time-Boxing | Deferred decisions escalate automatically after a configurable period (default: 48 hours for Tier 3, 72 hours for Tier 2) | Tier 2, Tier 3 |

**EU AI Act Art. 13 Transparency UX:**

Three levels of AI explanation satisfy Art. 13 for different audiences:

| Level | Audience | Content | Access Pattern |
|---|---|---|---|
| Glanceable | All users | Confidence indicator (accessible, not color-only) + one-line summary | Visible in primary workflow by default |
| Inspectable | Power users, domain experts | Key factors, data sources, model metadata, known limitations | On-demand expand within the workflow |
| Auditable | Compliance officers, auditors | Full provenance chain, explainability scores (SHAP/LIME), data lineage, compliance evidence | Dedicated audit interface, exportable |

**AI Contestability:**

Users can flag, dispute, or override any AI recommendation through a first-class contestability flow: Flag -> Provide Reason -> Review Queue -> Resolution (with feedback to model improvement pipeline). This flow is a dedicated interaction pattern in the VDS AI Component tier, not buried in help menus.

### 14.5 Inclusive Design

**Multi-Language Support (DE, NL, EN):**

All Verity products support German, Dutch, and English as primary languages. The i18n architecture is extensible for future locales.

| Requirement | Implementation | Testing |
|---|---|---|
| String externalization | All user-facing strings in locale resource files; no hardcoded text | CI lint rule: fail on hardcoded strings in UI code |
| Layout flexibility | Designs accommodate 30% string length expansion (DE is typically 20–30% longer than EN) | Pseudo-localization testing in CI (doubled strings, accented characters) |
| Date/number/currency formatting | Locale-aware formatting via Intl API; no manual formatting | Locale-specific snapshot tests |
| AI-generated content localization | AI explanations generated in the user's locale; machine-translated content reviewed by native speakers for critical flows | Human review for Tier 2/3 AI explanations; automated quality scoring for Tier 1 |

**Cultural Adaptation:**

- **Data density:** Configurable information density preference (compact/comfortable/spacious) respecting German enterprise users' preference for higher density while supporting progressive disclosure for other markets.
- **Formality in AI communication:** AI-generated text uses formal register in German ("Sie"), standard register in Dutch, and industry-appropriate register in English.
- **Regulatory context in explanations:** AI explanations that reference regulations cite the locally applicable framework (BSI-Gesetz for DE users, NIS2 implementation for NL users, NIST for US users).

**Cognitive Accessibility:**

| Principle | Requirement | Measurement |
|---|---|---|
| Plain language | AI explanations target Flesch reading ease > 60 (EN), Lesbarkeitsindex > 50 (DE), Leesindex > 50 (NL) | Automated readability scoring in content pipeline |
| Consistent navigation | Persistent navigation structure across all product areas; WCAG 2.2 SC 3.2.6 Consistent Help | Manual review per epic |
| Error prevention | Confirmation for destructive actions; undo for reversible actions; clear error messages with recovery guidance | Heuristic evaluation checklist |
| Progressive disclosure | Complex AI outputs presented in expandable layers; no more than 7 concurrent information channels on a single screen | Cognitive load review in design phase |
| Reduced motion | All animations respect `prefers-reduced-motion`; no information conveyed solely through animation | Automated CSS audit + manual verification |
| Target size | Interactive targets minimum 24x24px (WCAG 2.2 SC 2.5.8); primary action targets minimum 44x44px | Automated layout audit |

### 14.6 Developer Experience (DX)

Developer experience is a measurable quality attribute. The SDLC's compliance obligations span 7+ frameworks and 17+ tools; without deliberate DX investment, process friction erodes productivity and adoption.

**Internal Developer Portal (IDP):**

A Backstage-based (or equivalent) Internal Developer Portal unifies:
- **Service Catalog:** Ownership, API documentation, runbook links, dependency map for every service.
- **Compliance Dashboard:** Per-service compliance status (which frameworks apply, current gate status, outstanding findings).
- **Golden Path Templates:** Scaffolding for new services, features, and AI components with all required configurations (pre-commit hooks, CI pipeline, IEA integration) pre-wired.
- **SDLC Phase Tracker:** Visualization of where each feature is in the pipeline (Orient through Operate).
- **Self-Service Environment Provisioning:** One-click creation of development, preview, and test environments.

**Development Environment Standardization:**

Dev Container (`.devcontainer`) configurations provide a fully reproducible development environment with all required tools, hooks, linters, and configurations pre-installed. Target: a new developer runs `code .` (or equivalent) and has a fully functional environment within 15 minutes.

**IEA Intent Contract Tooling:**

| Tool | Purpose | Friction Reduction |
|---|---|---|
| `verity intent init` CLI | Generate Intent Contract scaffolding from PR metadata | Eliminates manual contract authoring |
| `verity intent validate` CLI | Validate contract against schema and policy | Catches errors before CI pipeline |
| Intent Contract IDE Extension | Inline visualization, auto-complete, validation in VS Code | Zero context-switching for contract work |
| Intent Contract Dashboard (IDP) | Visualize contract history, approval chains, execution status | Replaces manual audit trail assembly |

**DX Metrics:**

| Metric | Target | Measurement |
|---|---|---|
| Time to First Productive Commit | < 1 day (new developer, existing repo) | Onboarding tracking |
| Inner Loop Time (code change to local verification) | < 10 seconds | Developer environment instrumentation |
| Pre-Commit Hook Execution | < 15 seconds | Hook timing telemetry |
| CI Pipeline Completion | < 15 minutes | Azure Pipelines telemetry |
| Developer Satisfaction (Developer NPS) | > 40 (quarterly survey) | Quarterly DX survey |
| Tool Satisfaction | > 4.0 / 5.0 per tool | Quarterly DX survey |
| Deployment Friction Score | < 2.0 / 5.0 (lower is better) | Quarterly DX survey |

**Compliance-for-Developers Guide:**

A developer-facing companion to this SDLC that translates governance requirements into actionable playbook format: "When you create a PR that touches authentication code, do X, Y, Z." Developers should not need to read ISO 42001 or NIS2 directly. The guide is maintained alongside the SDLC in source control and updated through the same review process.

### 14.7 UX Metrics

UX metrics are reported alongside DORA+ (Section 17.1), AI Governance (Section 17.2), and Compliance (Section 17.4) metrics. They are not secondary; product success depends on them.

| Metric | Target | Measurement Method | Cadence |
|---|---|---|---|
| Task Success Rate | > 95% for core workflows | Usability testing + RUM | Per feature + continuous |
| Time on Task | Within defined targets per workflow | Usability testing + RUM | Per feature + continuous |
| User Error Rate | < 5% for core workflows | Usability testing + RUM | Continuous |
| System Usability Scale (SUS) | > 72 (above average) | Moderated usability testing | Quarterly (per major release) |
| Accessibility Conformance Score | 100% of audited components pass WCAG 2.2 AA | Automated (axe-core + pa11y) + manual audit | Quarterly |
| Accessibility Bug Escape Rate | < 2% of total production bugs | Bug tracking metadata (a11y label) | Per sprint |
| AI Acceptance Rate | Tracked, not targeted (high or low rates both signal issues) | Product telemetry | Continuous |
| AI Override Rate | Tracked, not targeted | Product telemetry | Continuous |
| AI Trust Score | > 4.0 / 5.0 | User survey + behavioral correlation (override rate, dwell time) | Quarterly |
| NPS (Product UX) | > 30 | In-product survey | Quarterly |
| CSAT (Product UX) | > 4.0 / 5.0 | Post-task micro-survey | Continuous |
| Design System Adoption Rate | > 90% of UI using VDS components | Component usage analytics (automated) | Monthly |
| Core Web Vitals (LCP, INP, CLS) | "Good" threshold per Google | Real User Monitoring (RUM) | Continuous |
| Developer NPS (DX) | > 40 | Quarterly DX survey | Quarterly |

Note on AI metrics: acceptance and override rates are tracked but not targeted. An artificially high acceptance rate may indicate rubber-stamping; an artificially low rate may indicate poor AI quality. Both signals feed into AI Governance Board review.

### 14.8 Compliance UX

Compliance obligations (GDPR consent, AI transparency, data subject rights, audit trails) are real, but they must not degrade the user experience. The design principle is **invisible compliance, audit-ready infrastructure**.

**Three-Surface Compliance Architecture:**

| Surface | Audience | Design Principle | Examples |
|---|---|---|---|
| Primary (Product UX) | All users | Compliance is embedded in the default experience, not bolted on as interruptive modals or dismissible banners | AI confidence indicators as part of the design language; attribution badges integrated into layout; consent captured through natural interaction flows |
| Secondary (Settings/Preferences) | Users exercising rights | Self-service access to inspect, configure, and exercise data rights | Privacy dashboard, data export, consent preferences, AI explanation detail, communication preferences |
| Tertiary (Admin/Audit) | Compliance officers, auditors | Full audit trails, compliance reports, monitoring dashboards accessible without engineering support | Compliance evidence dashboard, VPAT/ACR library, consent audit log, AI decision history, regulatory report generation |

**AI Transparency That Informs Without Overwhelming:**

- Default: Glanceable indicators (confidence badge, AI attribution label) visible in the workflow.
- On demand: Inspectable explanations accessible via a consistent "Why?" interaction pattern (no hunt-and-find).
- Never: Unprompted technical detail, SHAP visualizations in the primary interface, or legalese disclaimers interleaved with product content.
- The goal is calibrated trust, not information overload.

**Consent Management UX (GDPR, CCPA):**

- Consent is collected through purpose-specific, plain-language requests at the moment of relevance (not a wall-of-text cookie banner on first visit).
- Consent choices are granular, revocable, and accessible from the Secondary (Settings) surface at any time.
- Consent state is communicated to the user through persistent, unobtrusive indicators (e.g., a privacy icon in the navigation that shows current consent summary on hover).
- Jurisdiction-specific consent requirements (GDPR legitimate interest vs. CCPA opt-out) are handled by the backend; the UX presents a single, coherent privacy experience regardless of jurisdiction.

**Data Subject Rights Automation UX:**

Data subject rights (access, rectification, erasure, portability, restriction, objection) are exercisable through a self-service privacy dashboard on the Secondary surface:
- Automated fulfillment for access and portability requests (download within minutes, not 30 days).
- Guided flow for erasure and rectification with clear impact communication ("Deleting your data will also remove X, Y, Z").
- Status tracking for requests that require manual review (e.g., erasure affecting shared datasets).
- All interactions logged for audit trail without exposing the audit mechanism to the user.

---

## 15. Toolchain and Platform: Azure-Native

### 15.1 Platform Architecture v2

#### 15.1.1 Azure Landing Zone Design

The Helge Heupel Group operates an Azure Cloud Adoption Framework (CAF) Enterprise-Scale Landing Zone spanning two physically separate Azure clouds: Azure Commercial (EU operations) and Azure Government (US federal operations). These clouds share no network connectivity, no Entra ID tenant, and no management group hierarchy.

**Management Group Hierarchy (Azure Commercial – EU):**

```
Tenant Root Group
└── HH-Group-Root
    ├── HH-Platform
    │   ├── HH-Management          [Sub: HH-Mgmt-Prod]
    │   │   └── Log Analytics, Automation, Sentinel workspace, Azure Monitor
    │   ├── HH-Connectivity         [Sub: HH-Connectivity-Prod]
    │   │   └── Hub VNETs, Azure Firewall Premium, VPN/ExpressRoute, DNS
    │   ├── HH-Identity             [Sub: HH-Identity-Prod]
    │   │   └── Entra ID Connect (if hybrid), domain controllers
    │   └── HH-Security             [Sub: HH-Security-Prod]
    │       └── Sentinel, Defender for Cloud, security tooling
    │
    ├── HH-Landing-Zones
    │   ├── HH-LZ-EU-Online         (Internet-facing workloads)
    │   │   ├── [Sub: HH-LZ-EU-Dev]
    │   │   ├── [Sub: HH-LZ-EU-Staging]
    │   │   └── [Sub: HH-LZ-EU-Prod]   (West Europe + Germany West Central)
    │   │
    │   └── HH-LZ-EU-Corp           (Internal/non-internet-facing)
    │       └── [Sub: HH-LZ-Corp-Shared]
    │
    ├── HH-Sandbox
    │   └── [Sub: HH-Sandbox-Dev]    (Experimentation, auto-cleanup, tight quotas)
    │
    └── HH-Decommissioned
        └── (Retired subscriptions – deny-all policy, read-only)
```

**Management Group Hierarchy (Azure Government – US):**

```
Tenant Root Group (Gov Tenant – separate Entra ID)
└── HH-USGov-Root
    ├── HH-USGov-Platform
    │   ├── HH-USGov-Management     [Sub: HH-USGov-Mgmt]
    │   ├── HH-USGov-Connectivity   [Sub: HH-USGov-Connectivity]
    │   └── HH-USGov-Security       [Sub: HH-USGov-Security]
    │
    ├── HH-USGov-Landing-Zones
    │   ├── [Sub: HH-USGov-LZ-Dev]
    │   ├── [Sub: HH-USGov-LZ-Staging]
    │   └── [Sub: HH-USGov-LZ-Prod]    (Gov Virginia + Gov Arizona)
    │
    └── HH-USGov-Sandbox
        └── [Sub: HH-USGov-Sandbox]
```

#### 15.1.2 Azure Policy Assignment Strategy

Policies are assigned at the highest applicable management group scope and inherited downward. Deny-mode policies prevent non-compliant resource creation; DeployIfNotExists policies auto-remediate configuration drift; Audit-mode policies generate compliance reports without blocking.

**EU Commercial – Policy Assignments:**

| Policy Initiative / Definition | Scope | Effect | Compliance Mapping |
|---|---|---|---|
| Azure Security Benchmark v3 | HH-Group-Root | Audit + Deny (selected) | ISO 27001, SOC 2, NIS2 baseline |
| CIS Microsoft Azure Foundations v2.0 | HH-Landing-Zones | Audit | CIS hardening benchmark |
| ISO 27001:2022 | HH-Landing-Zones | Audit | ISO 27001 Annex A evidence |
| Allowed Locations | HH-LZ-EU-Online | Deny | `westeurope`, `germanywestcentral` only |
| Require TLS 1.2+ | HH-Group-Root | Deny | NIS2 Art.21(h), TISAX 5.1 |
| Require HTTPS on storage accounts | HH-Group-Root | Deny | Data in transit encryption |
| Deny Public IP on NIC | HH-LZ-EU-Prod subscription | Deny | Zero trust enforcement |
| Require Private Endpoints for PaaS | HH-LZ-EU-Prod subscription | Deny | Zero trust, TISAX 4.1 |
| Require Disk Encryption (ADE/SSE-CMK) | HH-Landing-Zones | Deny | Data at rest, TISAX 5.1 |
| Deploy Defender for Cloud (P2) | HH-Group-Root | DeployIfNotExists | NIS2 Art.21(e), continuous protection |
| Deploy Diagnostic Settings | HH-Group-Root | DeployIfNotExists | Centralized logging, NIS2 Art.21(g) |
| Require Resource Tagging | HH-Group-Root | Deny | Cost governance, traceability |

**US Government – Policy Assignments:**

| Policy Initiative / Definition | Scope | Effect | Compliance Mapping |
|---|---|---|---|
| FedRAMP Moderate (NIST 800-53 Rev.5) | HH-USGov-Landing-Zones | Audit + Deny (selected) | FedRAMP Moderate baseline |
| NIST SP 800-53 Rev. 5 | HH-USGov-Root | Audit | Full NIST control mapping |
| Allowed Locations | HH-USGov-Landing-Zones | Deny | `usgovvirginia`, `usgovarizona` only |
| Require CMK Encryption | HH-USGov-Landing-Zones | Deny | FedRAMP SC-28 |
| Require Managed HSM Keys (Prod) | HH-USGov-LZ-Prod subscription | Deny | FIPS 140-2 Level 3, SC-12/SC-13 |
| FedRAMP-Approved Services Only | HH-USGov-Landing-Zones | Deny | Custom allowlist of FedRAMP-authorized resource types |
| Deploy Defender for Cloud | HH-USGov-Root | DeployIfNotExists | FedRAMP RA-5 |
| Deploy Diagnostic Settings | HH-USGov-Root | DeployIfNotExists | FedRAMP AU-2, AU-3 |

### 15.2 Network Architecture

#### 15.2.1 Hub-Spoke Topology

All network traffic flows through centralized Azure Firewall Premium instances in hub VNETs. No spoke-to-spoke communication bypasses the firewall. No workload has a public IP address.

```
                    ┌─────────────────────────────────────────┐
                    │         Azure Front Door Premium        │
                    │   (Global WAF, DDoS, TLS termination)   │
                    └────────────────┬────────────────────────┘
                                     │
        ┌────────────────────────────┼────────────────────────────┐
        │                            │                            │
┌───────▼───────┐                                         ┌───────▼───────┐
│  EU Hub VNET  │          NO CONNECTIVITY                │ US Gov Hub    │
│ West Europe   │◄─────── (physically separate ──────────►│  Gov Virginia │
│ 10.0.0.0/16   │           clouds)                       │ 172.16.0.0/16 │
│               │                                         │               │
│ ┌───────────┐ │                                         │ ┌───────────┐ │
│ │Az Firewall│ │                                         │ │Az Firewall│ │
│ │ Premium   │ │                                         │ │ Premium   │ │
│ │10.0.0.0/26│ │                                         │ │172.16.0/26│ │
│ └───────────┘ │                                         │ └───────────┘ │
│ ┌───────────┐ │                                         │ ┌───────────┐ │
│ │Az Bastion │ │                                         │ │Az Bastion │ │
│ │10.0.3.0/26│ │                                         │ │172.16.3/26│ │
│ └───────────┘ │                                         │ └───────────┘ │
└──┬────┬────┬──┘                                         └──┬────┬────┬──┘
   │    │    │                                               │    │    │
   │    │    └──── Spoke: Prod 10.3.0.0/16                   │    │    └── USGov-Prod 172.19.0.0/16
   │    └──────── Spoke: Staging 10.2.0.0/16                 │    └────── USGov-Staging 172.18.0.0/16
   └───────────── Spoke: Dev 10.1.0.0/16                     └────────── USGov-Dev 172.17.0.0/16
```

**EU Hub VNET (West Europe) -- 10.0.0.0/16:**

| Subnet | CIDR | Purpose |
|---|---|---|
| AzureFirewallSubnet | 10.0.0.0/26 | Azure Firewall Premium |
| AzureFirewallManagementSubnet | 10.0.0.64/26 | Firewall management (forced tunneling) |
| GatewaySubnet | 10.0.1.0/24 | VPN Gateway / ExpressRoute |
| AzureBastionSubnet | 10.0.3.0/26 | Azure Bastion Standard |
| DNSResolverInbound | 10.0.4.0/28 | Azure DNS Private Resolver inbound |
| DNSResolverOutbound | 10.0.4.16/28 | Azure DNS Private Resolver outbound |

**Spoke VNET Pattern (per environment):**

| Subnet | CIDR (Dev example) | Purpose |
|---|---|---|
| AKS System Nodes | 10.1.0.0/22 | AKS system node pool |
| AKS User Nodes | 10.1.4.0/22 | AKS user/GPU node pools |
| AKS Pods (CNI Overlay) | 10.1.128.0/17 | Pod CIDR (Azure CNI Overlay) |
| PrivateEndpoints | 10.1.8.0/24 | Private Endpoints for PaaS |
| AppGateway | 10.1.9.0/24 | Azure Application Gateway v2 |
| DataServices | 10.1.10.0/24 | Azure Database for PostgreSQL |

#### 15.2.2 Network Security Controls

| Control | Service / SKU | Purpose | Compliance |
|---|---|---|---|
| Edge protection | Azure Front Door Premium + WAF | Global load balancing, DDoS L7, OWASP managed ruleset, bot protection, geo-filtering | NIS2 Art.21(e) |
| DDoS protection | Azure DDoS Network Protection | Network-layer volumetric attack mitigation (L3/L4), adaptive tuning | NIS2 Art.21(e) |
| Central firewall | Azure Firewall Premium | TLS 1.3 inspection, IDPS (signature-based + anomaly), URL filtering, FQDN filtering, threat intelligence | NIS2 Art.21(e), TISAX 5.2, FedRAMP SC-7/AC-4 |
| Admin access | Azure Bastion Standard | Browser-based RDP/SSH without public IPs, session recording, shareable links with RBAC | FedRAMP AC-17 |
| Forced tunneling | UDR on all spoke subnets | 0.0.0.0/0 next-hop Azure Firewall -- all egress through firewall | Zero trust |
| DNS resolution | Azure DNS Private Resolver + Private DNS Zones | Private Endpoint name resolution across hub-spoke topology | Required for Private Link |
| Micro-segmentation | NSG on every subnet + Calico network policies in AKS | East-west traffic control at both VNET and pod level | NIS2 Art.21(e), FedRAMP SC-7 |

#### 15.2.3 Cross-Jurisdiction Connectivity

Azure Commercial and Azure Government are physically separate clouds. No VNET peering, no ExpressRoute interconnect, and no shared Entra ID tenant exists between them.

- **Permitted cross-jurisdiction flow:** API-level only, over public internet, TLS 1.3 with mutual certificate authentication, through Azure API Management gateways on both sides.
- **Data classification enforcement:** Every cross-boundary payload tagged with sensitivity level; automated PII detection blocks unauthorized data categories.
- **Audit logging:** Every cross-jurisdiction API call logged in both Microsoft Sentinel workspaces (EU and US Gov).
- **Legal basis validation:** EU Standard Contractual Clauses (SCCs) and EU-US Data Privacy Framework (DPF) validated before any data flow is configured.

### 15.3 Kubernetes Strategy

#### 15.3.1 Platform Selection

**Azure Kubernetes Service (AKS)** is the primary container orchestration platform for all production workloads in both EU and US Gov. **Azure Container Apps (ACA)** is permitted for lightweight, internal, EU-only services that do not process regulated data.

| Criterion | AKS | Azure Container Apps | Decision |
|---|---|---|---|
| Compliance customization (OPA, network policy, PSS) | Full Kubernetes-native | Limited | AKS |
| GPU support for AI inference | NC/ND-series node pools | Not available | AKS |
| FedRAMP High readiness | FedRAMP High authorized (with hardening) | Not FedRAMP authorized | AKS |
| Azure Government availability | Full feature parity | Limited availability | AKS |
| Service mesh (mTLS, observability) | Istio / Linkerd | Built-in Dapr | AKS |
| Admission control (policy-as-code) | OPA Gatekeeper native | Not available | AKS |
| Operational overhead | Higher (managed by platform team) | Lower (serverless) | ACA for simple workloads |

**ACA use cases (EU only):** Webhook receivers, scheduled cron jobs, internal event processors, developer tooling backends. These workloads must not process FedRAMP-scoped data, customer PII, or data subject to TISAX controls.

#### 15.3.2 AKS Hardening Checklist

Every AKS cluster deployed by the Helge Heupel Group must satisfy the following hardening baseline before workloads are scheduled:

| # | Control | Configuration | Compliance Mapping |
|---|---|---|---|
| 1 | Private cluster | API server accessible only via Private Endpoint; public FQDN disabled | FedRAMP AC-17, Zero trust |
| 2 | Azure CNI Overlay networking | Pod-level IP assignment with network policy support; avoids VNET IP exhaustion | NIS2 Art.21(e) |
| 3 | Entra ID integration + Kubernetes RBAC | Azure AD authentication for kubectl; namespace-scoped RoleBindings; no cluster-admin to developers | FedRAMP AC-2/AC-6, TISAX 4.1 |
| 4 | Workload Identity | Entra ID federated credentials for pods; no Kubernetes Secrets for Azure authentication | FedRAMP IA-5, Zero trust |
| 5 | Azure Key Vault CSI Driver | Secrets mounted from Key Vault at pod startup; Kubernetes Secrets never stored in etcd for sensitive data | FedRAMP SC-12/SC-28, TISAX 5.1 |
| 6 | Azure Policy Add-on (Gatekeeper) | Baseline + Restricted Pod Security Standards; deny privileged containers, host networking, host PID | FedRAMP CM-7, NIS2 Art.21(e) |
| 7 | Defender for Containers | Runtime threat protection, vulnerability assessment for node images and running containers | FedRAMP RA-5/SI-4, NIS2 Art.21(e) |
| 8 | Container Insights + Managed Prometheus | Metrics, logs, Prometheus scraping to Azure Monitor workspace | FedRAMP AU-2/AU-3 |
| 9 | Node OS auto-upgrade | SecurityPatch channel – automatic security patches without node reimaging | FedRAMP SI-2 |
| 10 | Kubernetes version auto-upgrade | Stable channel – automatic minor version upgrades within support window | FedRAMP CM-3 |
| 11 | Pod Security Standards | Restricted profile enforced on all production namespaces via Gatekeeper | FedRAMP CM-7 |
| 12 | Image integrity verification | Notation (Notary v2) or Cosign; deny unsigned images via Gatekeeper policy | FedRAMP SI-7, SOC 2 CC8 |
| 13 | Calico network policies | Default-deny ingress/egress per namespace; explicit allow rules for service-to-service | FedRAMP SC-7, NIS2 Art.21(e) |
| 14 | Egress lockdown | UDR on AKS subnet forcing 0.0.0.0/0 through Azure Firewall; FQDN-based allowlists | FedRAMP SC-7/AC-4 |
| 15 | Audit logging | kube-audit and kube-audit-admin logs sent to Log Analytics workspace; 13-month retention (EU), 3-year (US Gov) | FedRAMP AU-6, NIS2 Art.21(g) |
| 16 | Disk encryption | Ephemeral OS disks + Azure Disk Encryption with CMK for persistent volumes | FedRAMP SC-28, TISAX 5.1 |

#### 15.3.3 Namespace Isolation Strategy

Each AKS cluster uses namespace isolation to enforce multi-tenancy boundaries:

| Namespace | Purpose | Network Policy | Resource Quotas | Pod Security |
|---|---|---|---|---|
| `system` | AKS system components, CoreDNS | Default-deny except required | System-reserved | Privileged (AKS-managed) |
| `ingress` | NGINX Ingress Controller | Allow external traffic | Dedicated limits | Baseline |
| `monitoring` | Prometheus, Grafana agent, OTel Collector | Allow scrape targets | Dedicated limits | Baseline |
| `verity-ve` | Verity VE application pods | Default-deny + explicit rules | Per-tenant quotas | Restricted |
| `verity-eam` | Verity EAM application pods | Default-deny + explicit rules | Per-tenant quotas | Restricted |
| `ai-inference` | AI model serving endpoints | Default-deny + APIM ingress only | GPU-aware quotas | Restricted |
| `gatekeeper-system` | OPA Gatekeeper | Protected, no external access | System-reserved | Baseline |

### 15.4 AI Platform Architecture

#### 15.4.1 Azure OpenAI Service – Data-Sovereign Deployment

Separate Azure OpenAI Service instances are deployed in each jurisdiction. No prompts, completions, or embeddings cross jurisdictional boundaries. Enterprise data processing agreements ensure customer data is never used for model training.

| Component | EU (West Europe) | US Gov (Gov Virginia) |
|---|---|---|
| Azure OpenAI Service | Standard deployment | Gov deployment (verify model catalog) |
| GPT-4o | PTU (Provisioned Throughput) for Prod; Standard for Dev | PTU if available; fallback to GPT-4 Turbo |
| GPT-4o-mini | Standard (pay-per-token) | Standard if available |
| text-embedding-3-large | Standard | Standard if available; fallback to text-embedding-ada-002 |
| Content filtering | Custom policy aligned to EU AI Act Art. 5 | FedRAMP-compliant policy |
| Network access | Private Endpoint only; public access disabled | Private Endpoint only; public access disabled |
| Data processing | Processed in West Europe; no cross-region transfer | Processed in Gov Virginia; never leaves Gov boundary |

**Fallback for Azure Government model gaps:** If required models are not available in Azure Government, deploy open-weight models (Llama 3, Mistral) on AKS GPU node pools (Standard_NC24ads_A100_v4) within the FedRAMP boundary. Azure ML Managed Online Endpoints provide model serving with blue-green deployment capability.

#### 15.4.2 Azure API Management as AI Gateway

All AI service requests route through Azure API Management (Premium SKU, Internal VNET mode) which acts as the centralized AI governance gateway.

**AI Gateway Capabilities:**

| Capability | Implementation | Compliance Mapping |
|---|---|---|
| Rate limiting | Per-tenant, per-model token-per-minute (TPM) quotas via APIM policies | ISO 42001 A.5 resource management |
| PII detection | Inbound policy calling Azure AI Content Safety; blocks prompts containing detected PII categories | GDPR Art. 5(1)(c), NIS2 Art.21(h) |
| Prompt injection detection | Custom inbound policy with regex + ML-based detection; logs and blocks suspicious patterns | ISO 42001 A.8 robustness |
| Token consumption tracking | Outbound policy extracting usage headers; published to Azure Event Hubs for cost attribution | FinOps, ISO 42001 A.5 |
| Audit logging | Every request/response pair logged to Log Analytics (prompt hash, model, tokens, latency, tenant ID) | ISO 42001 Art. 12, FedRAMP AU-2 |
| Tier enforcement | APIM products map to service tiers (Standard, Premium, Enterprise) with differentiated rate limits | Business logic |
| Circuit breaker | Automatic failover between Azure OpenAI deployments (PTU primary, Standard fallback) | Availability SLO |

#### 15.4.3 Azure AI Search for RAG Patterns

| Configuration | EU (West Europe) | US Gov (Gov Virginia) |
|---|---|---|
| SKU | Standard S2 (Prod), Basic (Dev) | Standard S2 (Prod), Basic (Dev) |
| Semantic ranker | Enabled | Enabled (verify Gov availability) |
| Vector search | HNSW index with text-embedding-3-large | HNSW index with available embedding model |
| Network | Private Endpoint only | Private Endpoint only |
| Data source | Azure Blob Storage (Private Endpoint) via indexer | Azure Blob Storage (Private Endpoint) via indexer |
| Security | Customer-managed encryption key (CMK) via Key Vault | CMK via Managed HSM |

#### 15.4.4 Azure ML for Model Lifecycle

| Stage | Service | Environment | Purpose |
|---|---|---|---|
| Experiment tracking | Azure ML Workspace | Dev (EU), Dev (US Gov) | Track training runs, hyperparameters, metrics |
| Model registry | Azure ML Model Registry | Prod (each jurisdiction) | Version, stage, and approve models |
| Training compute | Azure ML Compute Clusters (NC-series GPU) | Dev/Staging (EU) | Fine-tuning on proprietary data |
| Batch inference | Azure ML Batch Endpoints | Prod (each jurisdiction) | Large-scale offline inference jobs |
| Online inference | Azure ML Managed Online Endpoints | Prod (each jurisdiction) | Real-time model serving with blue-green |
| Model monitoring | Azure ML Model Monitor | Prod (each jurisdiction) | Data drift, prediction drift, data quality alerts |
| Responsible AI | Azure ML Responsible AI Dashboard | All environments | Fairness, explainability, error analysis (ISO 42001/42005) |

#### 15.4.5 Medallion Data Pipeline Architecture

| Layer | Storage | Processing | Governance |
|---|---|---|---|
| **Bronze** (Raw) | Azure Data Lake Storage Gen2 (Private Endpoint, CMK) | Azure Data Factory | Immutable raw ingestion; audit trail on every record; no PII masking yet |
| **Silver** (Cleaned) | Azure Data Lake Storage Gen2 | Azure Databricks (Unity Catalog) or Synapse Spark | Deduplicated, schema-validated, PII detected and masked |
| **Gold** (Feature) | Azure ML Feature Store | Azure ML Pipelines | Feature-engineered datasets ready for training and inference |
| **Serving** | Azure AI Search + Azure Cosmos DB (for low-latency vector cache) | Azure Functions + Azure ML Endpoints | Real-time RAG serving layer with sub-200ms p99 latency target |

**Data sovereignty enforcement:** Each jurisdiction (EU, US Gov) runs its own complete Bronze-Silver-Gold pipeline. No pipeline stage references storage accounts, compute, or models in the other jurisdiction. Azure Policy denies cross-jurisdiction storage account access.

### 15.5 Development Toolchain v2

The v2 toolchain resolves the ambiguities identified in the Phase 1 gap analysis, consolidates overlapping tools, and adds critical missing services.

| Category | Tool | Purpose | Compliance Mapping | Data Boundary | Status |
|---|---|---|---|---|---|
| **Source Control** | Azure DevOps Repos (primary) | Trunk-based development, PR workflows, branch policies | FedRAMP High (authorized) | EU + US Gov (separate orgs) | **Resolved** – primary for all FedRAMP-scoped work |
| **Source Control** | GitHub Enterprise Cloud (secondary) | Open-source contributions, community engagement, EU-only projects | FedRAMP Moderate | EU only | **Clarified** – secondary for non-FedRAMP |
| **CI/CD** | Azure Pipelines | Build, test, deploy automation; YAML pipelines | FedRAMP High, SOC 2 CC8 | EU + US Gov | Retained |
| **Artifact Registry** | Azure Container Registry (Premium) | Container images, Helm charts, OCI artifacts, geo-replication | FedRAMP High, SOC 2 CC8 | EU + US Gov (separate registries) | Retained |
| **Artifact Registry** | Azure Artifacts | npm, NuGet, Maven packages | FedRAMP High | EU + US Gov | Retained |
| **IaC** | Terraform (AzureRM + AzAPI providers) | Primary infrastructure provisioning for all resources | N/A (tooling) | State in jurisdiction-specific Azure Storage | **Clarified** – primary IaC |
| **IaC** | Bicep | Supplementary for Azure-specific features with day-0 support | N/A (tooling) | N/A | **Clarified** – supplementary |
| **GitOps** | Flux CD v2 (AKS extension) | Kubernetes cluster reconciliation, multi-tenancy | CNCF Graduated | In-cluster | Retained |
| **Feature Flags** | Azure App Configuration | Progressive rollout, feature filters, A/B testing | FedRAMP High | EU + US Gov | Retained |
| **Secrets** | Azure Key Vault (Premium SKU) | Secrets, keys, certificates – HSM-backed (FIPS 140-2 Level 2) | TISAX 5.1, ISO 27001 A.8.24, FedRAMP SC-12 | Per subscription | Retained |
| **Secrets** | Azure Managed HSM | FIPS 140-2 Level 3 key management for US Gov production | FedRAMP SC-12/SC-13 | US Gov only | **Added** |
| **Monitoring** | Azure Monitor + Application Insights | Metrics, logs, traces, distributed tracing | FedRAMP AU, SOC 2 CC7 | Per jurisdiction | Retained |
| **Dashboarding** | Azure Managed Grafana | Operational dashboards, Prometheus visualization | FedRAMP High | Per jurisdiction | **Added** |
| **SIEM/SOAR** | Microsoft Sentinel | Security event management, SOAR playbooks, NIS2 reporting automation | FedRAMP High, NIS2 Art.23 | Per jurisdiction (separate workspaces) | Retained |
| **SAST** | SonarQube + Semgrep | Static analysis (quality + security rules) | N/A (tooling) | Self-hosted or SaaS (EU) | Retained |
| **SCA** | Microsoft Defender for DevOps + Trivy | Dependency vulnerability scanning, unified view in Defender for Cloud | FedRAMP (Defender) | Integrated with Azure DevOps | **Replaced** Snyk to reduce vendor count |
| **SBOM** | Syft (generation) + Trivy (vulnerability matching) | CycloneDX SBOM generation and vulnerability scanning | NIS2 Art.21(d), FedRAMP SA-4 | CI pipeline | **Updated** – Trivy replaces Grype |
| **Container Security** | Microsoft Defender for Containers | Runtime container protection, image vulnerability assessment | FedRAMP RA-5/SI-4, NIS2 Art.21(e) | Per AKS cluster | Retained |
| **Policy Engine** | Open Policy Agent (Gatekeeper) | Kubernetes admission control, Rego policies | All frameworks (policy-as-code) | In-cluster | Retained |
| **IaC Scanning** | Checkov + tfsec | Pre-deployment Terraform compliance scanning | N/A (tooling) | CI pipeline | **Added** |
| **GRC Platform** | Vanta (initial) / ServiceNow GRC (at scale) | Cross-framework compliance management, evidence collection | SOC 2, ISO 27001 automation | SaaS (EU data center) | **Clarified** |
| **AI/ML Platform** | Azure ML + Azure AI Foundry | Model training, registry, deployment, evaluation, prompt engineering | ISO 42001, EU AI Act Art.9/12 | Per jurisdiction | Retained |
| **API Gateway** | Azure API Management (Premium) | AI gateway, rate limiting, PII detection, audit logging | FedRAMP High | Per jurisdiction | **Added** |
| **Network Security** | Azure Firewall Premium | Central egress/ingress, TLS inspection, IDPS, threat intel feeds | NIS2 Art.21(e), TISAX 5.2, FedRAMP SC-7/AC-4 | Per hub VNET | **Added** |
| **Edge Security** | Azure Front Door Premium + WAF | Global WAF, DDoS L7, TLS termination, geo-filtering | NIS2 Art.21(e), FedRAMP SC-5 | Global edge (origin in jurisdiction) | **Added** |
| **DDoS Protection** | Azure DDoS Network Protection | Network-layer volumetric attack mitigation | NIS2 Art.21(e), FedRAMP SC-5 | Per VNET | **Added** |
| **Admin Access** | Azure Bastion Standard | Secure RDP/SSH without public IPs, session recording | FedRAMP AC-17 | Per hub VNET | **Added** |
| **Backup** | Azure Backup | VM, disk, PostgreSQL, AKS persistent volume backup | NIS2 Art.21(c), FedRAMP CP-9/CP-10 | Per jurisdiction | **Added** |
| **Disaster Recovery** | Azure Site Recovery | Cross-region failover (West Europe to Germany West Central; Gov VA to Gov AZ) | NIS2 Art.21(c), FedRAMP CP-7 | Within jurisdiction only | **Added** |
| **Container Orchestration** | Azure Kubernetes Service (AKS) | Primary workload runtime for all production services | FedRAMP High, all frameworks | Per jurisdiction | **Added** |
| **Lightweight Containers** | Azure Container Apps | Internal EU-only lightweight services, event-driven jobs | Not FedRAMP authorized | EU only | **Added** |
| **Database** | Azure Database for PostgreSQL Flexible Server | Primary relational database for all Verity products | FedRAMP High | Per jurisdiction | **Added** |
| **Search** | Azure AI Search (Standard S2) | RAG pattern, semantic + vector search for Verity AI features | FedRAMP Moderate (verify) | Per jurisdiction | **Added** |
| **Collaboration** | Microsoft Teams + Azure Boards | Communication, SAFe work tracking (epics, features, stories, PI planning) | FedRAMP High | Per tenant | Retained |

### 15.6 Infrastructure as Code Strategy

#### 15.6.1 Terraform as Primary IaC

Terraform (AzureRM provider v4.x + AzAPI provider for preview features) is the primary IaC tool for all Azure resource provisioning. Bicep is used supplementarily for Azure-specific resources where Terraform lags behind ARM API parity (e.g., new Azure AI Foundry features, Deployment Stacks).

#### 15.6.2 Terraform Workspace Structure

```
infra/
├── modules/                         # Reusable, versioned Terraform modules
│   ├── aks-cluster/                 # AKS with hardening baseline baked in
│   ├── postgresql-flexible/         # PostgreSQL Flexible Server + Private Endpoint
│   ├── key-vault/                   # Key Vault Premium + access policies + PE
│   ├── managed-hsm/                 # Managed HSM (US Gov only)
│   ├── vnet-hub/                    # Hub VNET + Firewall + Bastion + DNS
│   ├── vnet-spoke/                  # Spoke VNET + peering + UDR + subnets
│   ├── azure-firewall/              # Firewall Premium + policy + rule collections
│   ├── private-endpoint/            # Generic PE module (any PaaS service)
│   ├── azure-openai/                # OpenAI Service + deployments + PE
│   ├── ai-search/                   # AI Search + index + PE
│   ├── api-management/              # APIM Premium + VNET integration
│   ├── container-registry/          # ACR Premium + geo-replication
│   ├── log-analytics/               # Log Analytics + retention + solutions
│   ├── sentinel/                    # Sentinel workspace + connectors + rules
│   ├── front-door/                  # Front Door Premium + WAF policy
│   ├── policy-assignment/           # Azure Policy assignment + remediation
│   └── backup-vault/               # Backup vault + policies
│
├── platform/                        # Platform-level infrastructure
│   ├── management-groups/           # MG hierarchy definition
│   ├── policy-assignments/          # All Azure Policy assignments
│   ├── connectivity-hub-eu/         # EU Hub VNET + Firewall + Bastion
│   ├── connectivity-hub-usgov/      # US Gov Hub VNET + Firewall + Bastion
│   ├── management-eu/               # Log Analytics, Sentinel (EU)
│   ├── management-usgov/            # Log Analytics, Sentinel (US Gov)
│   ├── identity/                    # Entra ID configuration, app registrations
│   └── dns/                         # Private DNS Zones, DNS resolver
│
├── landing-zones/                   # Per-subscription workload infrastructure
│   ├── eu-dev/                      # LZ-EU-Dev: spoke VNET, AKS, DB, AI
│   ├── eu-staging/
│   ├── eu-prod/
│   ├── usgov-dev/
│   ├── usgov-staging/
│   └── usgov-prod/
│
└── environments/                    # Environment-specific variable files
    ├── eu-dev.tfvars
    ├── eu-staging.tfvars
    ├── eu-prod.tfvars
    ├── usgov-dev.tfvars
    ├── usgov-staging.tfvars
    └── usgov-prod.tfvars
```

#### 15.6.3 State Management

| Requirement | Implementation |
|---|---|
| Remote state | Azure Storage Account with Terraform AzureRM backend |
| State isolation | One state file per landing zone / per platform component (per-subscription) |
| Data sovereignty | EU state files in Azure Storage (West Europe); US Gov state files in Azure Storage (Gov Virginia) |
| State protection | Soft delete enabled (14-day retention), blob versioning, storage account firewall (Private Endpoint only) |
| Locking | Azure Blob lease-based locking (native to AzureRM backend) |
| Encryption | SSE with customer-managed key (Key Vault) |
| Access control | Azure RBAC: Storage Blob Data Contributor scoped to specific container per team |

#### 15.6.4 IaC CI/CD Pipeline

```
Terraform PR → Azure Pipeline:
  1. terraform init (backend config per environment)
  2. terraform validate
  3. terraform fmt -check
  4. checkov –framework terraform (compliance pre-scan)
  5. tfsec (security scanning)
  6. terraform plan -out=plan.tfplan
  7. Plan artifact published → manual approval gate (Staging/Prod)
  8. terraform apply plan.tfplan (after approval)
  9. Post-apply: Azure Policy compliance scan
```

#### 15.6.5 GitOps with Flux CD

Flux CD v2 deployed via AKS GitOps extension (`Microsoft.KubernetesConfiguration/fluxConfigurations`) on every AKS cluster. Flux reconciles the desired state from the GitOps repository to the cluster.

```
gitops/
├── clusters/
│   ├── eu-dev/
│   │   ├── flux-system/             # Flux bootstrap (kustomize-controller, etc.)
│   │   ├── infrastructure/          # Ingress, cert-manager, monitoring, external-secrets
│   │   └── apps/                    # Application HelmReleases and Kustomizations
│   ├── eu-staging/
│   ├── eu-prod/
│   ├── usgov-dev/
│   ├── usgov-staging/
│   └── usgov-prod/
│
├── infrastructure/                  # Shared infrastructure configs
│   ├── sources/                     # HelmRepository, OCIRepository definitions
│   ├── ingress-nginx/
│   ├── cert-manager/
│   ├── kube-prometheus-stack/
│   ├── external-secrets/            # Syncs Azure Key Vault → Kubernetes Secrets
│   └── gatekeeper/                  # OPA constraint templates and constraints
│
└── apps/
    ├── verity-ve/
    │   ├── base/                    # Kustomize base (Deployment, Service, etc.)
    │   └── overlays/
    │       ├── dev/                 # Dev-specific patches (replicas, resources)
    │       ├── staging/
    │       └── prod/
    └── verity-eam/
        ├── base/
        └── overlays/
```

**Secrets in GitOps:** Flux integrates with External Secrets Operator (ESO) which syncs secrets from Azure Key Vault into Kubernetes Secrets at runtime. No secrets are stored in Git. SOPS encryption is available as a fallback for non-Key-Vault secrets.

### 15.7 Azure Region Strategy v2

#### 15.7.1 Region Assignments

| Workload | Primary Region | Secondary Region | Rationale |
|---|---|---|---|
| EU Production (Verity VE/EAM) | West Europe (Netherlands) | Germany West Central | B.V. data residency (GDPR), Azure availability zone support, most Azure services available |
| EU Dev/Staging | West Europe | – | Cost optimization, team proximity (NL), same region as prod for parity |
| US Gov Production (FedRAMP) | US Gov Virginia | US Gov Arizona | Most feature-rich Gov region; paired region for DR within FedRAMP boundary |
| US Gov Dev/Staging | US Gov Virginia | – | Single Gov dev environment; FedRAMP boundary code testing |
| AI Services (EU) | West Europe | Germany West Central (limited) | Azure OpenAI and AI Search availability; West Europe has broadest model catalog in EU |
| AI Training (EU) | West Europe | – | GPU VM availability (NC/ND-series); AI compute concentrated for cost efficiency |
| AI Services (US Gov) | US Gov Virginia | – | Only Gov region with Azure OpenAI (limited catalog); validate model availability before commitment |
| Edge / CDN | Azure Front Door (global) | – | Anycast edge with WAF; origin servers in jurisdiction-specific regions |
| DNS | Azure DNS (global) + Private DNS (per region) | – | Public DNS global; Private DNS linked to VNETs per region |

#### 15.7.2 Data Residency Enforcement

Data residency is technically enforced, not merely documented:

1. **Azure Policy – Allowed Locations (Deny mode):** Prevents any resource creation outside approved regions per management group scope. EU resources restricted to `westeurope` and `germanywestcentral`. US Gov resources restricted to `usgovvirginia` and `usgovarizona`.

2. **Storage replication:** Geo-redundant storage (GRS) pairs only within jurisdiction. West Europe pairs with North Europe (Microsoft-managed); for explicit control, use Zone-Redundant Storage (ZRS) within West Europe. US Gov Virginia pairs with US Gov Arizona.

3. **Database geo-restriction:** Azure Database for PostgreSQL Flexible Server with geo-redundant backup restricted to paired regions within the same jurisdiction.

4. **AI data boundaries:** Azure OpenAI enterprise terms guarantee data processed in the deployed region and not used for model training. Separate service instances per jurisdiction enforce this architecturally.

### 15.8 Cost Optimization

#### 15.8.1 Reserved Instances and Savings Plans

| Resource Type | Strategy | Term | Estimated Savings |
|---|---|---|---|
| AKS System Node Pools (Prod) | Reserved VM Instances (Standard_D4s_v5) | 1-year | 30-40% |
| AKS User Node Pools (Prod) | Azure Savings Plan for Compute | 1-year | 15-25% |
| Azure Database for PostgreSQL (Prod) | Reserved Capacity | 1-year | 30-40% |
| Azure OpenAI PTU (Prod) | Provisioned Throughput Units commitment | Monthly | Predictable cost; eliminates pay-per-token spikes |
| Azure Cosmos DB (if used) | Reserved Capacity (RU/s) | 1-year | 20-30% |
| Azure Front Door | Committed use tier | Monthly | Volume discount on bandwidth |

#### 15.8.2 Dev/Test Optimization (50-90% Savings)

| Strategy | Implementation | Estimated Savings |
|---|---|---|
| AKS auto-shutdown | Azure Automation runbook: scale Dev/Staging AKS node pools to 0 outside business hours (19:00-07:00 CET, weekends) | 50-60% compute |
| Spot VMs | AKS Spot Node Pools for Dev/Staging user workloads (with Cluster Autoscaler tolerating eviction) | 60-90% VM cost |
| Burstable SKUs | Dev: Standard_B4ms (burstable); Staging: Standard_D4s_v5; Prod: Standard_D8s_v5 | Right-sized per tier |
| Azure Dev/Test subscription pricing | Enroll HH-LZ-EU-Dev and HH-USGov-LZ-Dev in Dev/Test pricing (no Windows license, discounted rates) | 10-30% across subscription |
| Ephemeral PR environments | Per-PR AKS namespaces with auto-cleanup after 24h merge; Flux Kustomization with TTL | Eliminate persistent test infra |
| Database scaling | Dev: Burstable B1ms (1 vCore); Staging: GP D2s_v3 (2 vCores); Prod: GP D4s_v3 (4 vCores) | Tier-appropriate sizing |

#### 15.8.3 Storage Lifecycle Policies

| Policy | Rule | Applicable Storage |
|---|---|---|
| Hot to Cool | Move blobs not accessed for 30 days to Cool tier | Log archives, old SBOM artifacts, build artifacts |
| Cool to Archive | Move blobs not accessed for 90 days to Archive tier | Compliance evidence older than 90 days, historical audit logs |
| Delete | Delete temporary blobs after 7 days | CI/CD ephemeral artifacts, PR preview assets |
| Log Analytics – Basic Logs | Use Basic Logs tier (8x cheaper, search-only) for verbose application logs | AKS container stdout, debug-level telemetry |
| Log Analytics – Analytics Logs | Use Analytics Logs tier for security-critical data with alerting | Sentinel, Defender, kube-audit, authentication logs |
| Data Collection Rules | Filter unnecessary verbose logs at ingestion (before Log Analytics) | Container Insights; drop health-check noise |

#### 15.8.4 AI Cost Optimization

| Strategy | Implementation | Estimated Savings |
|---|---|---|
| Model selection | Route low-complexity tasks (summarization, classification) to GPT-4o-mini; reserve GPT-4o for reasoning-heavy tasks | 10x cost reduction on routed tasks |
| Prompt caching | Azure OpenAI prompt caching for repeated system prompts (identical prefix matching) | 50% reduction on cached prompt tokens |
| Semantic caching | Azure AI Search + Azure Cache for Redis; cache responses to semantically similar queries (cosine similarity threshold) | 70-90% cost reduction on cache hits |
| Batch API | Azure OpenAI Batch API for non-real-time workloads (nightly analytics, bulk document processing) | 50% cost reduction vs. synchronous |
| PTU right-sizing | Start with Standard (pay-per-token) in Dev/Staging; measure actual TPM in Prod; right-size PTU commitment quarterly | Avoid over-provisioning |
| Token optimization | Structured output with JSON mode (fewer tokens than free-form); system prompt compression | 20-40% token reduction per request |

#### 15.8.5 FinOps Governance Framework

| Practice | Implementation | Cadence |
|---|---|---|
| **Tagging enforcement** | Azure Policy (Deny mode) requires tags: `environment`, `product`, `team`, `cost-center`, `compliance-boundary` on all resources | Continuous (policy) |
| **Budget alerts** | Microsoft Cost Management budgets per subscription; alerts at 50%, 75%, 90%, 100% of monthly budget | Continuous (automated) |
| **Anomaly detection** | Microsoft Cost Management anomaly detection enabled; alerts to #finops Teams channel | Continuous (automated) |
| **Right-sizing recommendations** | Azure Advisor recommendations reviewed and actioned | Weekly (automated report) |
| **Reserved Instance utilization** | Track RI/SP utilization in Cost Management; target >95% utilization | Monthly |
| **Monthly FinOps review** | CTO + Engineering Leads review cost dashboards, top-10 cost drivers, optimization opportunities | Monthly |
| **Quarterly commitment review** | Evaluate Reserved Instance and Savings Plan renewals, adjust based on actual usage trends | Quarterly |

---

## 16. Operations, Reliability, and Incident Management

Reliability is not a phase. It is an emergent property of architecture, culture, and engineering discipline applied continuously. This section defines the operational framework that makes reliability measurable, enforceable, and improvable across the Helge Heupel Group.

### 16.1 SLO Framework (Enhanced)

#### 16.1.1 Service Tier Model

The three-tier SLO model from SDLC v1 (Section 5.2) is retained and extended with AI-specific indicators.

| Service Tier | Availability | Latency (p99) | Error Rate | Incident Response |
|---|---|---|---|---|
| Tier 1 (Critical) | 99.95% | < 500ms | < 0.1% | 15 min (24/7) |
| Tier 1-AI (Critical AI) | 99.9% | < 2s (LLM), < 500ms (non-LLM) | < 0.1% | 15 min (24/7) |
| Tier 2 (Important) | 99.9% | < 1s | < 0.5% | 30 min (business hours + on-call) |
| Tier 3 (Standard) | 99.5% | < 3s | < 1% | 4 hours (business hours) |

#### 16.1.2 AI-Specific SLIs

Tier 1-AI services carry additional Service Level Indicators that traditional availability metrics cannot capture:

| SLI | Measurement Method | Target |
|---|---|---|
| Inference latency (p50) | Application Insights trace span | < 200ms (non-LLM), < 1s (LLM) |
| Inference latency (p99) | Application Insights trace span | < 500ms (non-LLM), < 2s (LLM) |
| Hallucination rate | Automated factuality scoring on sampled outputs | < 1% of responses |
| Factual accuracy | Golden-answer comparison on evaluation set (weekly) | > 95% |
| Throughput | Tokens per second per inference endpoint | Per-model baseline +/- 10% |
| Model freshness | Time since last validated training data update | < 90 days |
| Output quality score | Semantic similarity to reference outputs | > 0.85 cosine similarity |

#### 16.1.3 Error Budget Policy

Error budgets are the mechanism by which SLOs create organizational incentives. An SLO without an error budget policy is a number on a dashboard.

**Calculation:** Error budget is computed over a 28-day rolling window. For a 99.95% availability SLO, the error budget is 0.05% of total requests (approximately 21.6 minutes of downtime equivalent per 28 days).

**Enforcement rules:**

| Budget Remaining | Action |
|---|---|
| > 50% | Normal operations. Feature velocity is unrestricted. |
| 25% – 50% | Warning state. SRE reviews deployment risk for each release. New deployments require explicit SRE sign-off. |
| 10% – 25% | Deployment throttle. Only P0/P1 bug fixes and pre-approved reliability improvements deploy. All feature work is paused. |
| < 10% | **Deployment freeze.** Automated circuit breaker blocks all deployments except emergency security patches. Mandatory reliability sprint begins. Escalation to CAB. |
| Exhausted (0%) | **Mandatory reliability sprint.** The owning team dedicates the next full sprint to reliability work. Post-exhaustion review with CTO within 5 business days. |

Error budget status is published on the internal engineering dashboard and reviewed at every ART Sync.

#### 16.1.4 Burn-Rate Alerting

Burn-rate alerting detects abnormal error budget consumption before the budget is exhausted. Multi-window analysis reduces false positives.

| Alert Level | Burn Rate | Short Window | Long Window | Action |
|---|---|---|---|---|
| Page (SEV2) | 14.4x (budget exhausted in 2 days) | 1 hour | 6 hours | Immediate investigation. Page on-call. |
| Page (SEV1) | 36x (budget exhausted in 19 hours) | 5 minutes | 1 hour | Incident declared. IC assigned. |
| Ticket | 6x (budget exhausted in 4.7 days) | 6 hours | 3 days | Ticket filed. Investigate within 24 hours. |
| Slow burn | 3x (budget exhausted in 9.3 days) | 1 day | 3 days | Ticket filed. Review at next ART Sync. |

Both the short and long windows must exceed their thresholds simultaneously to fire. This two-window approach, adapted from Google's SRE workbook, eliminates transient spikes from triggering pages while still catching sustained degradation.

#### 16.1.5 SLO-to-Deployment Circuit Breaker

The deployment pipeline queries the error budget service before every production deployment. If the remaining error budget for any affected Tier 1 or Tier 1-AI service is below 10%, the deployment is automatically rejected. The pipeline returns a clear error message identifying the exhausted service, its current budget status, and instructions to request an emergency override.

Emergency overrides require approval from both the SRE on-call lead and the CISO (for security patches) or CTO (for critical business need). All overrides are logged in the GRC platform.

### 16.2 Observability Stack v2

#### 16.2.1 Four Signals Plus AI Telemetry

| Signal | Primary Tool | Secondary/Complement | Retention (EU) | Retention (US/FedRAMP) |
|---|---|---|---|---|
| Metrics | Azure Monitor | Prometheus (Kubernetes workloads) | 13 months | 3 years |
| Logs | Azure Log Analytics | Structured JSON logging (application layer) | 13 months | 3 years |
| Traces | Azure Application Insights | OpenTelemetry SDK (distributed tracing) | 90 days (detail), 13 months (aggregated) | 3 years |
| AI Telemetry | Custom (MLflow + Azure ML) | Token-level tracing, prompt/completion logging | Indefinite | Indefinite |
| Security Events | Microsoft Sentinel | SOAR playbooks, threat intelligence feeds | 13 months | 3 years |

#### 16.2.2 Structured Logging Standard

All services must emit structured JSON logs with the following mandatory fields:

- `timestamp` (ISO-8601, UTC)
- `service_name`, `service_version`
- `trace_id`, `span_id` (W3C Trace Context)
- `severity` (DEBUG, INFO, WARN, ERROR, FATAL)
- `entity` (GmbH, B.V., Inc.)
- `environment` (dev, staging, canary, production-eu, production-us)
- `message` (human-readable description)

PII fields are redacted at the application layer before log emission. Log fields containing user identifiers, email addresses, IP addresses, or session tokens are hashed (SHA-256 with per-environment salt) unless the service is explicitly whitelisted for PII logging with a documented DPIA.

#### 16.2.3 AI Telemetry Details

For every AI inference request:

- **Token-level tracing:** Time-to-first-token, inter-token latency, total tokens (prompt + completion), tokens-per-second.
- **Prompt/completion logging:** Full prompt and completion stored with PII redaction. Sampling rate configurable per model (default: 10% in production, 100% in staging).
- **Model performance dashboards:** Per-model latency percentiles, throughput, error rate, quality score, cost-per-request. Dashboards auto-generated from observability-as-code definitions.
- **RAG pipeline telemetry:** Retrieval latency, relevance scores, context window utilization percentage, reranking effectiveness (NDCG@k).
- **Cost attribution:** Token cost per request, per user, per feature, per entity. Monthly trending with anomaly detection (> 2 standard deviations from 7-day rolling mean triggers alert).

#### 16.2.4 Observability-as-Code

All dashboards, alert rules, SLO definitions, and recording rules are defined as code in the infrastructure repository. No manually created dashboards or alerts in production.

- **Dashboards:** JSON/YAML definitions in `/observability/dashboards/`, deployed via CI/CD.
- **Alert rules:** Defined in `/observability/alerts/`, reviewed via standard PR process.
- **SLO configurations:** Defined in `/observability/slos/`, linked to service catalog entries.
- **Recording rules:** Prometheus recording rules and Azure Monitor scheduled queries in source control.

Changes to observability configuration go through the same review, test, and deploy pipeline as application code. Drift detection runs hourly; any manually created alert or dashboard in production is flagged and must be codified within 48 hours or deleted.

### 16.3 Incident Management Framework

#### 16.3.1 Incident Command System (ICS-Lite)

Every declared incident has three mandatory roles:

| Role | Responsibility | Assignment |
|---|---|---|
| Incident Commander (IC) | Owns the incident end-to-end. Makes prioritization and escalation decisions. Declares resolution. | On-call SRE (SEV3/4), SRE lead (SEV2), VP Engineering (SEV1) |
| Communications Lead (CL) | Manages stakeholder updates: status page, internal Slack channel, customer notifications, regulatory communications. | Product on-call (SEV3/4), Communications team (SEV1/2) |
| Technical Lead (TL) | Directs technical investigation and remediation. Coordinates across engineering teams. | Most qualified engineer for the affected system |

For SEV1 incidents, additional roles may be activated: Scribe (maintains incident timeline), Liaison (coordinates with legal and compliance for NIS2 reporting), and Subject Matter Experts (pulled in as needed).

#### 16.3.2 Severity Classification

| Severity | Criteria | Examples | Response Time | Communication |
|---|---|---|---|---|
| SEV1 (Critical) | Tier 1 service fully down; active security breach with data exfiltration; AI model producing harmful output to customers; regulatory deadline breach | Authentication service outage, customer PII leak, hallucinating model in production serving harmful content | MTTD < 5 min, MTTA < 15 min, MTTR < 1 hour | Status page updated within 30 min. Exec notified within 15 min. Regulatory notification initiated if applicable. |
| SEV2 (Major) | Tier 1 degraded or Tier 2 down; confirmed intrusion without exfiltration; significant AI accuracy degradation; control failure detected | Elevated latency on core API, unauthorized access detected and contained, model quality below SLO threshold | MTTD < 15 min, MTTA < 30 min, MTTR < 4 hours | Status page updated within 1 hour. Stakeholders notified. |
| SEV3 (Minor) | Tier 2 degraded or Tier 3 down; moderate model drift; vulnerability exploitation attempt blocked; data integrity issue | Non-critical service degradation, drift alert on secondary model, WAF blocking attack pattern | MTTD < 1 hour, MTTA < 2 hours, MTTR < 24 hours | Internal notification. Update at next standup. |
| SEV4 (Low) | Tier 3 degraded; minor quality regression; suspicious activity without exploitation; metadata leakage | Background job slowdown, minor model accuracy decrease, unusual but non-malicious traffic pattern | MTTD < 4 hours, MTTA < 8 hours, MTTR < 72 hours | Ticket filed. Addressed in normal sprint work. |

**AI-Specific Incident Types:** The following are classified using the matrix above but carry additional response requirements:

- **Hallucination outbreak:** Immediate model rollback to last known-good version. Activate shadow model if available. SEV1 if customer-facing.
- **Model drift:** Trigger retraining pipeline. Increase monitoring sampling to 100%. Alert AI Governance Board. SEV2.
- **Prompt injection:** Block affected input pattern. Activate enhanced input filtering. Trigger security incident protocol. SEV1.
- **Bias detection:** Flag for AI Governance Board. Implement output filtering. Trigger fairness re-evaluation per ISO 42001 A.6. SEV2.
- **Data poisoning:** Rollback model. Quarantine affected training data. Forensic investigation. SEV1.

#### 16.3.3 On-Call Design

**Rotation structure:**

- Each Tier 1 service has a primary and secondary on-call engineer.
- Primary on-call rotations are 1 week (Monday 09:00 CET to Monday 09:00 CET).
- Secondary on-call is the previous week's primary (warm handoff, context retention).
- Maximum consecutive on-call weeks: 2. Minimum gap between rotations: 2 weeks.
- On-call compensation follows entity-specific employment law (German Arbeitsrecht for GmbH, Dutch arbeidstijdenwet for B.V., US exempt/non-exempt rules for Inc.).

**Timezone coverage and the GmbH/B.V. gap:**

GmbH and B.V. are both UTC+1/+2, providing operational redundancy but no timezone diversity. The Inc. (US, UTC-5/-4) covers the complementary window. Combined natural coverage: ~16 hours (08:00–24:00 CET).

To close the 8-hour gap (00:00–08:00 CET / 18:00–02:00 ET):

1. **Primary coverage (Year 1):** AI-assisted monitoring with automated remediation for known failure modes. PagerDuty auto-escalation to US on-call (extended hours) for unresolved alerts after 15 minutes.
2. **Target state (Year 2+):** Contracted overnight SRE support or cross-entity on-call rotation with appropriate compensation.
3. **Fallback:** US on-call engineer carries a secondary pager for the gap window with a 30-minute acknowledgment SLA (SEV1 only).

**Escalation timers:**

| Time Since Alert | Escalation |
|---|---|
| T+0 | Primary on-call paged |
| T+5 min (no ack) | Secondary on-call paged |
| T+15 min (no ack) | SRE lead paged + team lead notified |
| T+30 min (no ack or unresolved SEV1) | VP Engineering notified. Incident bridge opened. |
| T+60 min (unresolved SEV1) | CTO + CISO notified |

#### 16.3.4 Escalation Matrix

| | SEV1 | SEV2 | SEV3 | SEV4 |
|---|---|---|---|---|
| On-call SRE | Immediate | Immediate | Within 2 hours | Next business day |
| SRE Lead | Within 15 min | Within 1 hour | Informed | – |
| VP Engineering | Within 30 min | Within 4 hours | – | – |
| CTO | Within 1 hour | Informed | – | – |
| CISO (security incidents) | Within 15 min | Within 30 min | Within 4 hours | Informed |
| Legal (NIS2-reportable) | Within 2 hours | Within 4 hours | – | – |
| AI Governance Board (AI incidents) | Within 1 hour | Within 4 hours | Informed | – |

Cross-entity escalation: If the incident affects services owned by a different entity, the IC contacts that entity's on-call lead directly. Jurisdiction determines regulatory reporting obligations (Section 16.4).

#### 16.3.5 Blameless Postmortem Process

Every SEV1 and SEV2 incident receives a postmortem. SEV3 incidents receive a postmortem if they recur (same root cause within 90 days) or if the IC requests one.

**Timeline:**

- T+24 hours: Postmortem document draft started by TL.
- T+3 business days: Postmortem review meeting. Attendees: IC, TL, CL, affected team leads, SRE lead.
- T+5 business days: Postmortem published internally. Action items entered into sprint backlog with owners and due dates.
- T+30 days: Action item completion review.

**Postmortem template (mandatory sections):**

1. **Incident summary** – one paragraph, written for a non-technical executive.
2. **Impact** – duration, affected users/requests, error budget consumed, revenue impact estimate.
3. **Timeline** – minute-by-minute from detection to resolution, including escalation actions.
4. **Root cause** – proximate cause and contributing factors. No "human error" as root cause; identify the system that allowed the human error.
5. **What went well** – detection, response, and communication successes.
6. **What went poorly** – detection gaps, response delays, communication failures.
7. **Action items** – each with owner, priority (P0/P1/P2), due date, and tracking ticket.
8. **Lessons learned** – systemic patterns, architectural weaknesses, process gaps.
9. **Regulatory impact** – NIS2/FedRAMP reporting triggered? Status of submissions.

Postmortems are stored in the engineering knowledge base, indexed by service, root cause category, and severity. Quarterly postmortem review identifies recurring patterns for systemic remediation.

### 16.4 NIS2 Incident Reporting Automation

NIS2 Article 23 mandates strict reporting timelines. Manual processes will fail under time pressure. The following automation pipeline ensures compliance.

#### 16.4.1 Detection and Classification (T+0h)

1. **Microsoft Sentinel** analytics rules evaluate every security event against NIS2 significance criteria: service disruption affecting essential/important entity operations, compromise of confidentiality/integrity/availability, cross-border impact potential.
2. **Classification engine** tags the incident as NIS2-reportable or standard. Classification criteria are codified as Sentinel analytics rules in source control (observability-as-code).
3. **Automatic triage:** NIS2-reportable incidents are escalated to SEV1/SEV2 and trigger the reporting workflow. The IC is notified that NIS2 reporting obligations apply.

#### 16.4.2 Early Warning (T+24h)

1. **Template auto-population:** Pre-built report templates (BSI format in German, NCSC-NL format in Dutch) are auto-populated with: incident detection time, initial classification, affected systems, suspected attack vector, IoCs extracted from Sentinel, preliminary cross-border impact assessment.
2. **Legal review:** Template routed to Legal counsel with 2-hour review SLA. Legal confirms regulatory classification and reviews language.
3. **CISO approval:** 1-hour SLA for final sign-off.
4. **Submission:** Via BSI and/or NCSC-NL portal/API. Submission timestamp recorded in GRC platform.
5. **Dual-entity incidents:** If both GmbH and B.V. are affected, parallel submissions to BSI and NCSC-NL are triggered. Cross-border impact assessment is auto-populated from the service dependency map.

#### 16.4.3 Detailed Report (T+72h)

Auto-populated as the investigation progresses:

- Full IoC catalog (IP addresses, domains, file hashes, MITRE ATT&CK TTPs)
- Impact assessment (number of affected users, data categories compromised, service disruption duration)
- Remediation actions taken and their effectiveness
- Cross-border analysis (which entities, jurisdictions, and data categories were affected)

Legal and CISO review before submission. Same portal/API submission with GRC tracking.

#### 16.4.4 Final Report (T+1 month)

- Root cause analysis (from blameless postmortem)
- Complete remediation actions with evidence of effectiveness
- Preventive measures implemented
- Lessons learned and systemic improvements
- Updated risk assessment

#### 16.4.5 US Coordination (FedRAMP/CISA)

Incidents affecting the US production boundary (FedRAMP) may require parallel reporting to CISA and the FedRAMP PMO. The workflow includes a US-applicability check: if the incident touches US Gov infrastructure, the US reporting branch activates with separate templates and timelines per FedRAMP IR controls.

### 16.5 FedRAMP Continuous Monitoring (ConMon)

#### 16.5.1 Monthly ConMon Deliverables

| Deliverable | Content | Owner | Due |
|---|---|---|---|
| Vulnerability scan results | Infrastructure and application scans (Nessus/Qualys + Trivy) | SRE | Monthly, by 5th business day |
| POA&M update | Status of all open findings, deviation requests, risk adjustments | Compliance | Monthly, by 5th business day |
| Significant change report | Any changes to the authorization boundary, architecture, or data flows | SRE + Architecture | As needed, before implementation |
| Incident report | Security incidents affecting the FedRAMP boundary | SRE + CISO | Monthly summary + per-incident as required |
| Configuration baseline update | Drift from approved baseline, remediation actions | SRE | Monthly |

#### 16.5.2 Vulnerability Detection and Response (VDR)

Per FedRAMP 20x:

| Severity | Detection | Remediation SLA | Escalation |
|---|---|---|---|
| Critical | Automated, continuous | 24 hours | CISO + SRE lead immediately |
| High | Automated, continuous | 72 hours (30 days if mitigating control exists) | SRE lead within 24 hours |
| Medium | Automated, weekly scan | 90 days | Tracked in POA&M |
| Low | Automated, monthly scan | 180 days | Tracked in POA&M |

#### 16.5.3 Annual Activities

- **Penetration testing:** Conducted by 3PAO annually. Scope covers the full FedRAMP boundary.
- **3PAO assessment:** Annual security assessment report (SAR) generation.
- **SSP update:** OSCAL-formatted SSP updated annually or upon significant change.

#### 16.5.4 Significant Change Process

Before any change to the FedRAMP authorization boundary:

1. Change classified as significant or non-significant per FedRAMP guidance.
2. If significant: Security Impact Analysis (SIA) completed.
3. SIA reviewed by CISO and 3PAO.
4. FedRAMP PMO notified before implementation.
5. Post-implementation: updated SSP, scan results, and test evidence submitted.

The deployment pipeline includes a FedRAMP boundary check: any deployment to US Gov production that modifies network topology, introduces new services, or changes data flows triggers the significant change workflow.

### 16.6 Chaos Engineering

#### 16.6.1 Principles

Chaos engineering is the discipline of experimenting on a system to build confidence in its ability to withstand turbulent conditions in production. It is not random destruction; it is the scientific method applied to distributed systems.

1. **Start with a steady-state hypothesis.** Define normal behavior using SLIs. If you cannot define normal, you cannot detect abnormal.
2. **Vary real-world events.** Inject failures that actually happen: network partitions, disk full, process crashes, dependency timeouts.
3. **Run experiments in production.** Staging experiments build confidence; production experiments build certainty. Graduate from staging to production.
4. **Minimize blast radius.** Every experiment has an abort condition and an automatic rollback mechanism.
5. **Automate experiments.** Manual chaos is a one-time event. Automated chaos is a continuous validation system.

#### 16.6.2 Experiment Catalog

| Category | Experiment | Blast Radius Control | Frequency |
|---|---|---|---|
| Infrastructure | AZ failure (single availability zone) | Staging only until validated | Quarterly |
| Infrastructure | Node failure (kill random Kubernetes node) | Single node, auto-replacement | Monthly (staging), Quarterly (production) |
| Infrastructure | Network partition between services | Single service pair | Monthly (staging) |
| Infrastructure | Disk pressure (fill ephemeral storage to 95%) | Single pod | Monthly (staging) |
| Application | Service dependency timeout (inject 30s latency on downstream call) | Single service, 5% of traffic | Monthly (staging), Quarterly (production) |
| Application | Database connection pool exhaustion | Staging only | Quarterly |
| Application | Queue backpressure (pause message consumer) | Single queue, staging only | Quarterly |
| AI-Specific | Model serving latency injection (add 5s to inference) | 1% of production inference traffic | Quarterly |
| AI-Specific | Embedding service failure (kill vector DB replica) | Staging only until validated | Quarterly |
| AI-Specific | Inference endpoint failure (return 503 from model serving) | Single model endpoint | Quarterly |
| AI-Specific | Adversarial input injection (prompt injection test patterns) | Shadow mode only | Monthly |
| AI-Specific | Model version rollback under load | Staging, then production (off-peak) | Quarterly |
| Security | Certificate expiration simulation | Staging only | Quarterly |
| Security | Secret rotation during active traffic | Staging, then production | Quarterly |

#### 16.6.3 Game Days

Quarterly game days are mandatory for all Tier 1 and Tier 1-AI service teams. A game day is a facilitated exercise where a team practices incident response against injected failures in a production-like environment.

- **Planning:** Game day scenario designed by SRE, kept secret from the responding team.
- **Execution:** Failure injected during business hours. Team responds using standard incident management process.
- **Debrief:** Immediate retrospective. Findings feed into action items, runbook updates, and chaos experiment catalog updates.
- **Scoring:** Time to detect, time to mitigate, accuracy of root cause identification, communication quality.

### 16.7 Disaster Recovery

#### 16.7.1 RPO/RTO Targets

| Service Tier | RPO (Recovery Point Objective) | RTO (Recovery Time Objective) | Failover Authority |
|---|---|---|---|
| Tier 1 / Tier 1-AI | < 1 minute | < 15 minutes | Automated failover; SRE on-call validates |
| Tier 2 | < 15 minutes | < 1 hour | SRE on-call initiates; SRE lead approves |
| Tier 3 | < 1 hour | < 4 hours | SRE on-call initiates during business hours |

#### 16.7.2 Multi-Region Failover Architecture

| Region Pair | Primary | Secondary | Replication | Replication Lag SLO |
|---|---|---|---|---|
| EU | West Europe (Netherlands) | Germany West Central | Asynchronous | < 60 seconds |
| US (FedRAMP) | US Gov Virginia | US Gov Arizona | Asynchronous | < 60 seconds |

Replication lag is monitored as a continuous SLI. If lag exceeds 60 seconds for more than 5 minutes, a SEV3 alert fires. If lag exceeds 5 minutes, a SEV2 alert fires.

**Failover decision criteria:**

- Automated failover triggers when the primary region health check fails for 3 consecutive checks (1-minute interval).
- Manual failover can be initiated by the SRE on-call lead. For Tier 1, this requires confirmation from SRE lead or VP Engineering.
- Failback (return to primary) is always manual and requires a full validation cycle.

#### 16.7.3 DR Testing Cadence

| Test Type | Scope | Cadence | Success Criteria |
|---|---|---|---|
| Component failover | Single service failover to secondary | Monthly | Service recovers within RTO; no data loss exceeding RPO |
| Full region failover | Complete region failover (staging) | Quarterly | All Tier 1 services operational in secondary within 15 minutes |
| Full region failover | Complete region failover (production) | Annually | All Tier 1 services operational in secondary within 15 minutes |
| Backup restoration | Restore from backup to isolated environment | Weekly (automated) | Data integrity verified; restore completes within RTO |
| Full environment restore | Restore complete environment from backups | Quarterly | Environment fully operational; data integrity verified |
| Tabletop exercise | Walk through DR scenario with all stakeholders | Monthly | Decision points identified; runbooks validated; gaps documented |

#### 16.7.4 Runbook Architecture

Every Tier 1 and Tier 1-AI service must have runbooks covering: startup/shutdown, failover, rollback, scaling, and common failure modes.

**Runbook standard template:**

1. **Service overview** – what it does, who owns it, dependencies, SLOs.
2. **Prerequisites** – access requirements, tools needed, environment setup.
3. **Procedure** – numbered steps. Each step is independently executable. No ambiguous instructions.
4. **Verification** – how to confirm each step succeeded.
5. **Rollback** – how to undo each step if it fails.
6. **Escalation** – when to escalate and to whom.

Runbooks are stored in the engineering knowledge base alongside the service code. They are reviewed quarterly and after every incident that reveals a runbook gap. Runbook coverage is tracked as a metric: 100% of Tier 1 services must have current runbooks.

### 16.8 Toil Measurement and Elimination

#### 16.8.1 Definition

Toil is work that is manual, repetitive, automatable, tactical, devoid of enduring value, and scales linearly with service growth. Toil is not inherently bad -- some toil is unavoidable -- but unmanaged toil is a tax on engineering capacity.

#### 16.8.2 Toil Budget

**Organizational target:** No SRE team spends more than 50% of its time on toil. This is the Google SRE standard and serves as the Helge Heupel Group's minimum threshold.

**Aspirational target (Year 2+):** < 30% of SRE time on toil.

#### 16.8.3 Toil Categories and Tracking

| Category | Examples | Measurement | Target |
|---|---|---|---|
| Deployment toil | Manual deployment steps, config changes, certificate renewals | Minutes of human time per deployment | < 10 min per deployment |
| Incident toil | Repetitive investigation steps, manual remediation, report generation | Percentage of incident duration spent on manual work | < 30% of incident duration |
| Compliance toil | Manual evidence collection, audit prep, report formatting | Hours per audit cycle | < 5% of engineering time |
| On-call toil | Non-actionable alerts, manual health checks, routine maintenance | Interrupts per on-call shift | < 2 actionable pages per 12-hour shift |
| AI operations toil | Manual model retraining, dataset prep, evaluation runs | Hours per model lifecycle event | 90% automated within 12 months |

#### 16.8.4 Toil Elimination Process

1. **Identify:** Every on-call shift and sprint retrospective includes a "toil observed" section.
2. **Quantify:** Toil items are logged with estimated time-per-occurrence and frequency-per-month.
3. **Prioritize:** Top 3 toil sources by total time impact are candidates for automation each quarter.
4. **Automate:** Automation work is tracked in the sprint backlog as first-class engineering work, not side projects.
5. **Validate:** After automation, measure the actual time savings. If savings are less than expected, iterate.

Toil metrics are reported at PI Inspect & Adapt. Persistent toil that exceeds the 50% threshold triggers an escalation to VP Engineering.

### 16.9 Operational Readiness Reviews (ORR)

#### 16.9.1 Purpose

No service enters production without demonstrating operational readiness. The ORR is a structured review that validates a service is observable, recoverable, documented, and staffed for on-call before it accepts live traffic.

#### 16.9.2 ORR Checklist

| Category | Requirement | Evidence |
|---|---|---|
| **SLOs** | SLOs defined and published in service catalog | SLO configuration in observability-as-code repo |
| **SLIs** | SLI instrumentation deployed and producing data | Dashboard showing 7 days of SLI data from staging |
| **Alerting** | Burn-rate alerts configured for all SLOs | Alert definitions in observability-as-code repo |
| **Dashboards** | Service dashboard with key metrics, error budget, and dependency status | Dashboard definition in observability-as-code repo |
| **Logging** | Structured logging implemented per Section 16.2.2 standard | Log sample from staging showing all mandatory fields |
| **Tracing** | Distributed tracing with W3C Trace Context propagation | End-to-end trace from staging showing all service hops |
| **Runbooks** | Runbooks written per Section 16.7.4 template | Runbook links in service catalog |
| **On-call** | On-call rotation assigned with primary and secondary | PagerDuty schedule configured |
| **DR** | Failover tested in staging; RPO/RTO validated | DR test report |
| **Load testing** | Service load-tested to 2x expected peak traffic | Load test results showing behavior under stress |
| **Dependency mapping** | All upstream and downstream dependencies documented | Service catalog entry with dependency graph |
| **Rollback** | Rollback procedure tested; rollback time < 5 minutes for Tier 1 | Rollback test evidence |
| **Security** | Threat model completed; SAST/SCA clean; penetration test (Tier 1) | Security review sign-off |
| **Compliance** | Applicable regulatory requirements identified and controls mapped | Compliance checklist in GRC platform |

#### 16.9.3 Progressive Adoption

ORR rigor scales with the service tier:

- **Tier 3 (Standard):** Self-service checklist. Team self-certifies. SRE reviews asynchronously.
- **Tier 2 (Important):** Checklist + 30-minute review meeting with SRE representative.
- **Tier 1 / Tier 1-AI (Critical):** Full ORR meeting (60 minutes) with SRE lead, security champion, and service owner. All checklist items must have documented evidence. Any "not met" item blocks production launch.

#### 16.9.4 Ongoing Readiness

ORR is not a one-time gate. Services are re-assessed:

- Annually, as part of the service catalog review.
- After any SEV1 or SEV2 incident on the service.
- When the service changes tier classification.
- When the service undergoes a major architectural change.

### 16.10 Compliance Mapping

| Sub-Section | ISO 27001 | ISO 42001 | NIS2 | FedRAMP | SOC 2 | TISAX |
|---|---|---|---|---|---|---|
| 16.1 SLO Framework | A.5.29 | 9.1 | Art.21(a) | CA-7, SI-4 | A1, CC7 | 1.4 |
| 16.2 Observability | A.8.15, A.8.16 | 9.2 | Art.21(g) | AU, SI-4 | CC7, CC4 | 1.5 |
| 16.3 Incident Mgmt | A.5.24, A.5.26 | 8.4 | Art.21(b), Art.23 | IR | CC7 | 1.6 |
| 16.4 NIS2 Reporting | A.5.24 | – | Art.23 | – | CC7 | 1.6 |
| 16.5 FedRAMP ConMon | A.8.8 | – | – | CA-7, RA-5, SI-2 | CC7 | 5.2 |
| 16.6 Chaos Engineering | A.5.29 | – | Art.21(c) | CP-4 | A1 | 1.4 |
| 16.7 Disaster Recovery | A.5.29, A.5.30 | – | Art.21(c) | CP | A1 | 1.4 |
| 16.8 Toil Measurement | – | – | – | – | – | – |
| 16.9 ORR | A.8.29 | – | Art.21(e) | CM-3, SA-11 | CC7, CC8 | 5.2 |

---

## 17. Metrics and Continuous Improvement

### 17.1 DORA Elite+ Metrics (AI-Native Targets)

Standard DORA Elite targets are the floor, not the ceiling. AI-native development shall outperform conventional engineering organizations.

| Metric | Target | Warning Threshold | Critical Threshold | Measurement Source |
|---|---|---|---|---|
| Deployment Frequency | Continuous (every merged PR) | < 1 per day | < 3 per week | CI/CD pipeline telemetry |
| Lead Time for Changes | < 4 hours (commit to production) | > 8 hours | > 24 hours | Commit-to-deploy timestamp delta |
| Change Failure Rate | < 2% | > 3% | > 5% | Rollback / hotfix ratio |
| Time to Restore Service (Tier 1) | < 30 minutes | > 45 minutes | > 1 hour | Incident management system |
| Time to Restore Service (Tier 2) | < 2 hours | > 3 hours | > 4 hours | Incident management system |
| Flow Efficiency | > 50% | < 40% | < 25% | Active time / total pipeline time |
| Strategic Traceability | 100% | < 95% | < 90% | Work item → OKR mapping completeness |

### 17.2 AI Governance Metrics (ISO 42001)

| Metric | Target | Warning | Critical | Source |
|---|---|---|---|---|
| AI Risk Assessments Completed | 100% of AI features | < 95% | < 90% | AI governance register |
| AI Impact Assessments Current | 100% of High/Limited-Risk AI | < 100% | < 90% | ISO 42005 register |
| Model Drift Incidents (undetected) | 0 in production | 1 undetected | 2+ undetected | Automated drift monitoring |
| AI-Generated Code Human Review Rate | 100% | < 100% | < 95% | PR metadata |
| Mean Time to AI Incident Resolution | < 4 hours | > 6 hours | > 8 hours | Incident management |
| AI Transparency Compliance | 100% of AI features have ISO 12792 documentation | < 95% | < 90% | Documentation register |

### 17.3 AI-Native Productivity Metrics

| Metric | Target | Warning | Critical | Source |
|---|---|---|---|---|
| AI Code Contribution Rate | > 60% of initial code generation (100% human-reviewed) | < 40% | < 20% | PR provenance metadata |
| Human Override Rate | 5-15% (too low = rubber-stamping; too high = miscalibrated AI) | < 3% or > 20% | < 1% or > 30% | PR review decision log |
| Intent Contract Automation Rate | > 80% of low-risk intents execute without manual intervention | < 60% | < 40% | IEA telemetry |
| AI-Assisted Cycle Time Reduction | > 50% reduction vs. non-AI baseline | < 30% | < 15% | Story completion time comparison |
| Autonomous Test Coverage | > 70% of test cases AI-generated | < 50% | < 30% | Test provenance metadata |
| AI Teammate Uptime | 99.9% | < 99.5% | < 99% | Agent monitoring system |

### 17.4 Compliance Metrics (All 7 Frameworks)

| Metric | Target | Warning | Critical | Source |
|---|---|---|---|---|
| Control Effectiveness | >= 95% of controls operating effectively | < 90% | < 85% | GRC platform |
| Audit Finding Closure Rate | 100% within 90 days | Any open > 60 days | Any open > 90 days | GRC platform |
| Vulnerability SLA Compliance | >= 98% within defined SLA | < 95% | < 90% | Vulnerability management |
| NIS2 Reporting Compliance | 100% within 24h/72h deadlines | Any report late | –- | Incident workflow |
| TISAX Assessment Maturity | >= Level 3 all controls | Any < Level 3 | Any < Level 2 | VDA ISA results |
| SOC 2 Exception Rate | < 2% | > 3% | > 5% | SOC 2 Type II report |
| FedRAMP ConMon Compliance | 100% monthly submissions | Any late submission | 2+ late submissions | ConMon dashboard |
| Cost of Compliance (per framework per PI) | Within budget | > 120% budget | > 150% budget | Time tracking + GRC platform |

### 17.5 UX and Customer-Facing Metrics

| Metric | Target | Warning | Critical | Source |
|---|---|---|---|---|
| Time to Customer Value | < 2 hours (account creation to first analysis) | > 4 hours | > 8 hours | Onboarding telemetry |
| Feature Adoption Rate (30-day) | > 40% of target users | < 25% | < 10% | Usage telemetry |
| Customer-Reported Defect Rate | < 10% of total defects | > 20% | > 30% | Support system + bug tracker |
| System Usability Scale (SUS) | > 80 | < 70 | < 60 | In-app surveys (quarterly) |
| WCAG 2.2 AA Conformance | 100% of user-facing features | < 100% | < 95% | Automated + manual audit |
| API Reliability (customer-perceived) | 99.95% uptime, < 200ms p95 | < 99.9% or > 500ms | < 99.5% or > 1s | External monitoring |

### 17.6 Risk Management KRIs (ISO 31000)

| Key Risk Indicator | Target | Warning | Critical | Source |
|---|---|---|---|---|
| Risk Assessment Coverage | 100% of high-impact decisions assessed | < 95% | < 90% | Risk register |
| Risk Treatment Effectiveness | > 90% of treatments reduce risk level as planned | < 80% | < 70% | Risk register + incident data |
| Residual Risk Trend | Stable or declining quarter over quarter | Increasing for 1 quarter | Increasing for 2+ quarters | Risk register |
| Risk Prediction Accuracy | > 70% of materialized risks were previously identified | < 60% | < 50% | Post-incident analysis |
| Time to Risk Treatment | < 30 days for high-risk items | > 45 days | > 60 days | Risk register |
| Open Critical/High Risks | 0 critical, < 5 high without active treatment | 1 critical or > 5 high | 2+ critical or > 10 high | Risk register |

### 17.7 Process Maturity Metrics (ISO 33000 Series)

Process capability is assessed per ISO/IEC 33020 using a six-level capability scale. Target levels progress with organizational phases.

| Process Area | Startup Target | Growth Target | Enterprise Target | Assessment Method |
|---|---|---|---|---|
| Requirements Management | Level 1: Performed | Level 2: Managed | Level 3: Established | ISO 33002 assessment |
| Development | Level 1: Performed | Level 2: Managed | Level 3: Established | ISO 33002 assessment |
| Testing & Verification | Level 1: Performed | Level 2: Managed | Level 3: Established | ISO 33002 assessment |
| Configuration Management | Level 1: Performed | Level 2: Managed | Level 3: Established | ISO 33002 assessment |
| Risk Management | Level 1: Performed | Level 2: Managed | Level 3: Established | ISO 33002 assessment |
| AI Lifecycle Management | Level 1: Performed | Level 2: Managed | Level 3: Established | ISO 33002 + ISO 5338 criteria |
| Compliance Management | Level 1: Performed | Level 2: Managed | Level 3: Established | ISO 33002 assessment |
| Incident Management | Level 0: Incomplete | Level 1: Performed | Level 2: Managed | ISO 33002 assessment |

**Assessment cadence:** Annually (Startup), semi-annually (Growth), quarterly self-assessment + annual external (Enterprise).

### 17.8 Leading Indicators

Leading indicators predict future performance of lagging metrics. They are reviewed weekly to enable proactive intervention.

| Indicator | What It Predicts | Target | Source |
|---|---|---|---|
| Technical Debt Ratio | Future velocity decline, rising CFR | < 10% of total codebase effort | SonarQube technical debt estimate |
| Dependency Freshness | Future vulnerability exposure | > 90% of deps within 1 major version of latest | Dependency scanning |
| Security Posture Score | Future security incidents | Trending upward or stable quarter over quarter | Composite from vulnerability scans |
| Backlog Health | Future sprint predictability | > 80% of stories meet Definition of Ready | Work management system |
| Team Cognitive Load | Future burnout, quality decline, turnover | Self-reported < 7/10 (team average) | Bi-weekly team survey |
| Pipeline Reliability | Future deployment delays | > 99% pipeline success rate (excluding genuine test failures) | CI/CD telemetry |

### 17.9 Decision Triggers

Every metric has associated decision triggers. When a threshold is crossed, the specified action is initiated automatically or within 24 hours.

| Threshold Level | Automated Response | Human Escalation |
|---|---|---|
| **Target met** | Green status in dashboard. No action required. | – |
| **Warning breached** | Yellow status. Notification to metric owner. Retrospective item auto-created. | Metric owner reviews in next team standup. |
| **Critical breached** | Red status. Alert to metric owner and their manager. For deployment metrics: pipeline paused pending review. | Mandatory review in next Leadership Sync (Startup) or governance forum (Growth/Enterprise). Root cause analysis initiated within 48 hours. Corrective action plan required within 1 week. |

**Automatic process change triggers:**

| Condition | Triggered Process Change | Authority |
|---|---|---|
| Change Failure Rate > 5% for 2 consecutive sprints | Mandatory pre-deployment review added for all changes (temporary) | CTO / RTE |
| Lead Time > 24 hours for 1 sprint | Pipeline performance audit initiated | Tech Lead |
| Human Override Rate < 3% for 1 month | AI teammate trust level review (potential rubber-stamping) | CTO |
| Human Override Rate > 30% for 1 month | AI teammate model recalibration or autonomy reduction | CTO |
| Compliance cost exceeds budget by > 20% | Certification sequencing review – identify deferrals or automation opportunities | CTO + Compliance Lead |
| Risk Assessment Coverage < 90% for 1 PI | Risk assessment training mandatory; risk champion designated per team | CTO |
| Feature Adoption Rate < 10% for any feature after 30 days | Pivot/persevere review for linked investment thesis | Product Owner |

### 17.10 Continuous Improvement Cadence by Phase

| Activity | Startup | Growth | Enterprise |
|---|---|---|---|
| Sprint Retrospective | Every 2 weeks (30 min) | Every 2 weeks (60 min) | Every 2 weeks (60 min) |
| Process Improvement Review | Monthly (in Leadership Sync) | Per PI (in Inspect & Adapt) | Per PI (in I&A) + quarterly |
| SDLC Document Review | Quarterly | Per PI | Per PI |
| Metrics Dashboard Review | Weekly (in Leadership Sync) | Bi-weekly (in ART Sync) | Weekly (in ART Sync) |
| Management Review (ISO 42001) | Quarterly (in Strategy Sync) | Per PI (in Portfolio Governance) | Quarterly (AI Governance Board) |
| Security Posture Review | Monthly (in Leadership Sync) | Bi-weekly (in Technical Governance) | Monthly (Security Review Board) |
| Risk Register Review | Monthly | Bi-weekly | Weekly |
| Process Maturity Assessment | Annual | Semi-annual | Quarterly self + annual external |
| Compliance Cost Review | Quarterly | Per PI | Per PI |

### 17.11 Metrics Implementation

**Startup Implementation (minimum viable metrics):**
- DORA metrics via CI/CD pipeline telemetry (automated)
- Strategic Traceability via CI enforcement (automated)
- AI Code Contribution Rate and Human Override Rate via PR metadata (automated)
- Risk register and compliance status reviewed manually in Leadership Sync
- Customer-facing metrics deferred until first paying customer

**Growth Implementation (expanded metrics):**
- All Startup metrics plus UX metrics, Compliance metrics, leading indicators
- GRC platform integration for automated compliance evidence collection
- Process maturity first assessment conducted
- Cost of compliance tracking initiated

**Enterprise Implementation (full metrics suite):**
- All metrics active with automated dashboards and alerting
- Full ISO 33000 process maturity assessments
- Quarterly external benchmarking against industry DORA data
- Risk KRI automation with real-time risk register updates

---
## 18. Entity-Specific Addenda

### 18.1 Helge Heupel GmbH Addendum (Germany) – Enhanced

**Jurisdiction:** Federal Republic of Germany (EU Member State)
**Governing Law:** NIS2UmsuCG, BSIG (BSI-Gesetz), BDSG, DSGVO (German GDPR implementation), BetrVG, EU AI Act
**Competent Authority (NIS2):** Bundesamt für Sicherheit in der Informationstechnik (BSI)
**Data Protection Authority:** BfDI (Federal Commissioner for Data Protection and Freedom of Information) / LfDI (State Commissioner, per Sitzland)
**Entity Category (NIS2UmsuCG Sec. 28):** Wichtige Einrichtung (important entity); KRITIS assessment per BSI-KritisV to be completed if services support critical infrastructure operators.

**NIS2UmsuCG-Specific Obligations:**
- BSI registration maintained per Sec. 33 NIS2UmsuCG, including: entity contact point, sector classification, IP address ranges, and designated incident contact (Sicherheitsbeauftragter).
- Incident reporting to BSI in German via the BSI reporting portal per Sec. 32 NIS2UmsuCG timelines (initial notification 24h, detailed report 72h, final report 1 month). Significant incident (erheblicher Sicherheitsvorfall) classification criteria are documented in incident response procedures.
- BSI C5 attestation of Azure services referenced as compensating evidence for cloud infrastructure controls.
- KRITIS determination: assessment of whether HH GmbH's services to automotive OEM customers trigger obligations under BSI-KritisV. Assessment documented and reviewed annually.

**Management Body Liability (NIS2UmsuCG Sec. 38):**
- Geschaeftsfuehrer personally liable for approval and oversight of cybersecurity risk management measures.
- Annual cybersecurity training for Geschaeftsfuehrer documented and auditable.
- Signed liability acknowledgment on file, reviewed by legal counsel annually.

**German Language Requirements:**
- IS policy, incident response procedures, and employee security guidelines maintained in German and English.
- BSI communications, incident reports, and registration documents submitted in German.
- Internal training materials available in German for all Germany-based employees.
- ISMS audit evidence documentation maintained in English (primary) with German translations for BSI-facing materials.

**Works Council (Betriebsrat) Consultation (BetrVG):**
- AI tool deployments affecting employees (e.g., GitHub Copilot, developer monitoring, AI-assisted performance analytics) require Betriebsrat consultation per BetrVG Sec. 87(1)(6) (technical monitoring devices) and Sec. 90 (workplace design).
- A consultation matrix maps each AI tool and monitoring capability to applicable BetrVG co-determination rights.
- Consultation is initiated before deployment; deployment proceeds only after Betriebsrat agreement or Einigungsstelle resolution.
- Documentation of consultations maintained for audit and labor law compliance.

**Data Residency:**
- Regulatory data (BSI-submitted reports, audit logs for German regulatory purposes) stored in Azure Germany West Central.
- Employee personal data processed and stored in EU regions per DSGVO and BDSG requirements.

### 18.2 Helge Heupel B.V. Addendum (Netherlands) – Enhanced

**Jurisdiction:** Kingdom of the Netherlands (EU Member State)
**Governing Law:** Wbni (as amended for NIS2 transposition), AVG (Dutch GDPR implementation), Uitvoeringswet AVG, EU AI Act
**Competent Authority (NIS2):** Nationaal Cyber Security Centrum (NCSC-NL)
**Data Protection Authority:** Autoriteit Persoonsgegevens (AP)
**Entity Category (Wbni):** Classification under Dutch NIS2 transposition based on sector, size, and services; determines supervisory regime (ex-ante for essential entities, ex-post for important entities).

**Dutch NIS2 Transposition Obligations:**
- NCSC-NL registration maintained with required entity information and incident contact details.
- Incident reporting to NCSC-NL per NIS2-mandated timelines: technical reports may be submitted in English; formal regulatory notifications submitted in Dutch.
- Cross-border incident coordination with ENISA per NIS2 Art. 23(4) when an incident affects both GmbH and B.V. jurisdictions (see Section 18.4).
- Monitoring and incorporation of NCSC-NL sector-specific cybersecurity baselines and advisories into the ISMS control framework via a quarterly advisory review process.

**Autoriteit Persoonsgegevens (AP) Requirements:**
- GDPR data breach notification to the AP within 72 hours per GDPR Art. 33; submitted via the AP's digital notification form in Dutch.
- NIS2 incident notification to NCSC-NL (24 hours initial) and GDPR breach notification to AP (72 hours) are separate obligations with distinct triggers, assessment criteria, and procedures. The incident response procedure includes a dual-notification assessment checklist.
- Data Protection Officer (DPO) designated per AVG requirements; DPO contact registered with AP.

**Azure West Europe as Primary Region:**
- Azure West Europe (Netherlands) serves as the primary EU production region for B.V. operations.
- Azure Germany West Central serves as the secondary/DR region.
- Dutch-resident data processing verified via Azure region configuration and Azure Policy enforcement.

**Dutch Language Obligations:**
- Communications to AP: Dutch.
- Formal notifications to NCSC-NL: Dutch; technical annexes may be in English.
- Privacy notices for Dutch data subjects: Dutch.
- Internal ISMS documentation: English (primary); Dutch translations maintained for regulatory-facing materials.

### 18.3 Helge Heupel Inc. Addendum (United States)

**Jurisdiction:** United States of America
**Entity Type:** Delaware C-Corporation
**Primary Regulatory Regime:** FedRAMP 20x (NIST SP 800-53 Rev 5 Moderate), SOC 2 Type II, CCPA/CPRA, NIST Cybersecurity Framework 2.0
**Products in Scope:** Verity Value Engineering (VE), Verity Enterprise Architecture Management (EAM)
**Deployment Target:** Microsoft Azure Government

#### 18.3.1 FedRAMP 20x Authorization Strategy

##### 18.3.1.1 Security Categorization

Per FIPS 199 and NIST SP 800-60, the Verity VE and EAM systems are categorized at the **Moderate** impact level:

| Impact Factor | Confidentiality | Integrity | Availability |
|---|---|---|---|
| Verity VE | Moderate | Moderate | Moderate |
| Verity EAM | Moderate | Moderate | Moderate |

**Rationale:** Both systems process Controlled Unclassified Information (CUI) for federal agencies, including organizational financial data, enterprise architecture artifacts, and strategic planning information. Loss of confidentiality, integrity, or availability would have a serious adverse effect on agency operations. This categorization drives the selection of the NIST SP 800-53 Rev 5 Moderate baseline (approximately 325 controls across 20 control families).

##### 18.3.1.2 Authorization Boundary Definition

The FedRAMP authorization boundary encapsulates all system components, interconnections, and data flows under HH Inc. operational control within the Azure Government environment. Components are designated as **system-specific** (fully owned by HH Inc.), **shared** (jointly operated with Microsoft Azure Government), or **inherited** (provided entirely by the Azure Government CSP, which holds FedRAMP High authorization).

**Inside the Authorization Boundary:**

| Component | Type | Azure Service | Control Responsibility |
|---|---|---|---|
| Verity VE Application | System-Specific | Azure Kubernetes Service (AKS) | HH Inc. |
| Verity EAM Application | System-Specific | Azure Kubernetes Service (AKS) | HH Inc. |
| AI Inference Service | System-Specific | Azure AI Service (Gov) | HH Inc. |
| API Gateway | System-Specific | Azure API Management | HH Inc. |
| Data Layer | System-Specific | Azure SQL / Cosmos DB | HH Inc. |
| ML Inference Pipeline | System-Specific | Azure Machine Learning | HH Inc. |
| Key Vault (Managed HSM) | Shared | Azure Key Vault | Shared (HH Inc. + Microsoft) |
| Monitoring & Logging | Shared | Azure Monitor / Log Analytics | Shared (HH Inc. + Microsoft) |
| Container Registry | System-Specific | Azure Container Registry | HH Inc. |
| Identity & Access | Shared | Azure Entra ID (Gov tenant) | Shared (HH Inc. + Microsoft) |
| Network Infrastructure | Shared | Azure Virtual Network / NSGs | Shared (HH Inc. + Microsoft) |
| Physical Data Centers | Inherited | Azure Gov Virginia / Arizona | Microsoft (FedRAMP High) |
| Hypervisor / Host OS | Inherited | Azure Compute | Microsoft (FedRAMP High) |

**Outside the Authorization Boundary (Interconnections Requiring ISAs):**

| External System | Interconnection Type | Data Flow | ISA/MOU Required |
|---|---|---|---|
| Azure OpenAI Service (Gov) | API | Prompts, completions (may contain CUI) | Yes |
| GRC Platform (Vanta/Drata) | API | Compliance evidence, control status | Yes |
| Microsoft Sentinel | API/Agent | Security events, alerts | Yes (covered by Azure Gov agreement) |
| GitHub Enterprise (Cloud) | API | Source code, CI/CD artifacts | Yes |
| EU Production Environment | Controlled Transfer | Model artifacts (signed, no CUI) | Yes |
| Customer Agency Networks | API | Business data via Verity API | Yes (per-agency) |

##### 18.3.1.3 AI-Specific Boundary Treatment

AI components receive explicit boundary treatment to address the unique risks of AI-native SaaS products within a FedRAMP authorization:

**Training Outside, Inference Inside.** AI model training occurs outside the FedRAMP boundary in the EU environment (Azure West Europe) using non-federal data. Trained model artifacts are exported as signed, versioned binaries and imported into the FedRAMP boundary through a controlled pipeline:

1. Model trained in EU environment on non-CUI data only (SA-4, SA-10)
2. Model artifact signed with Cosign (Sigstore), hash recorded in model registry (SI-7)
3. Model artifact transferred to Azure Gov Container Registry via authenticated, encrypted channel (SC-8, AC-4)
4. Model signature verified at import; hash validated against registry (SI-7(1))
5. Model deployed to AKS inference pods within the boundary (CM-3, CM-5)

**Inference telemetry** (prompts, completions, confidence scores, token usage) is classified as potentially containing CUI and must remain within the authorization boundary at all times (AC-4, SC-7). No inference telemetry is transmitted to the EU environment or any external system.

**LLM API calls** to Azure OpenAI Service (Gov) are documented as a system interconnection. All prompts and responses traverse only Azure Government backbone networks and are subject to data loss prevention (DLP) policies (SC-7, AC-4).

##### 18.3.1.4 NIST SP 800-53 Rev 5 Moderate Baseline – Control Family Overview

The Moderate baseline requires implementation across all 20 control families. The following summarizes control responsibilities and maps each family to the SDLC activity that operationalizes it. The 11 families previously unmapped in SDLC v1 are marked with an asterisk (*).

| Family | ID | Controls (Moderate) | Responsibility | Primary SDLC Phase | Key Controls |
|---|---|---|---|---|---|
| Access Control | AC | ~25 | System-Specific | Phase 2, 4, 5 | AC-2 (Account Mgmt), AC-3 (Enforcement), AC-4 (Flow), AC-5 (SoD), AC-6 (Least Priv), AC-17 (Remote) |
| Awareness & Training* | AT | ~4 | System-Specific | Phase 5 (Operate) | AT-2 (Literacy Training), AT-3 (Role-Based), AT-4 (Records) |
| Audit & Accountability | AU | ~12 | System-Specific/Shared | Phase 5 (Observe) | AU-2 (Events), AU-3 (Content), AU-6 (Review), AU-9 (Protection), AU-11 (Retention 3yr) |
| Assessment & Authorization* | CA | ~9 | System-Specific | Phase 3, 5 (ConMon) | CA-2 (Assessments), CA-3 (ISAs), CA-5 (POA&M), CA-7 (ConMon), CA-8 (Pen Test) |
| Configuration Management* | CM | ~11 | System-Specific | Phase 2, 4 | CM-2 (Baseline), CM-3 (Change Control), CM-6 (Settings), CM-7 (Least Functionality), CM-8 (Inventory) |
| Contingency Planning* | CP | ~10 | System-Specific/Shared | Phase 5 (BCP/DR) | CP-2 (Plan), CP-4 (Testing), CP-6 (Alt Storage), CP-7 (Alt Processing), CP-9 (Backup) |
| Identification & Authentication | IA | ~8 | System-Specific/Shared | Phase 2, 4 | IA-2 (MFA), IA-3 (Device I&A), IA-5 (Authenticator Mgmt), IA-8 (Non-Org Users) |
| Incident Response | IR | ~8 | System-Specific | Phase 5 (Operate) | IR-4 (Handling), IR-6 (Reporting – US-CERT 1hr), IR-8 (Plan) |
| Maintenance* | MA | ~5 | System-Specific/Inherited | Phase 5 (Operate) | MA-2 (Controlled), MA-4 (Nonlocal), MA-5 (Personnel) |
| Media Protection* | MP | ~7 | Inherited/System-Specific | Phase 4, 5 | MP-2 (Access), MP-4 (Storage), MP-6 (Sanitization) |
| Physical & Environmental* | PE | ~20 | Inherited | Phase 5 (Inherited) | PE-2, PE-3, PE-6, PE-8 – documented as inherited from Azure Gov |
| Planning* | PL | ~4 | System-Specific | Phase 0, 1 | PL-2 (SSP), PL-4 (Rules of Behavior), PL-8 (Security Architecture) |
| Program Management* | PM | ~16 | System-Specific | Cross-Phase | PM-1 (Program Plan), PM-2 (ISSO/ISSM), PM-4 (POA&M Process), PM-9 (Risk Strategy) |
| Personnel Security* | PS | ~8 | System-Specific | Phase 5 (HR) | PS-2 (Risk Designation), PS-3 (Screening – NAC/NACLC), PS-4 (Termination – 4hr revoke), PS-6 (Access Agreements) |
| PII Processing & Transparency* | PT | ~8 | System-Specific | Phase 1, 5 | PT-2 (Authority), PT-3 (Purposes), PT-4 (Consent), PT-5 (Privacy Notice) |
| Risk Assessment | RA | ~7 | System-Specific | Phase 0, 1, 3 | RA-2 (FIPS 199), RA-3 (Risk Assessment), RA-5 (Vuln Scanning) |
| System & Services Acquisition | SA | ~15 | System-Specific | Phase 1, 2, 6 | SA-4 (Acquisition/SBOM), SA-9 (External Services), SA-11 (Developer Testing) |
| System & Communications Protection | SC | ~20+ | System-Specific/Shared | Phase 2, 4 | SC-7 (Boundary), SC-8 (Transmission), SC-12 (Crypto Key Mgmt), SC-13 (FIPS-validated), SC-28 (Data at Rest) |
| System & Information Integrity | SI | ~12 | System-Specific | Phase 2, 3, 5 | SI-2 (Flaw Remediation), SI-3 (Malicious Code), SI-4 (Monitoring), SI-7 (Integrity Verification) |

##### 18.3.1.5 FedRAMP 20x Process

FedRAMP 20x (effective 2025-2026) replaces the legacy authorization process with a digital-first, automation-driven model. HH Inc. targets FedRAMP 20x as the primary authorization path.

**Digital Authorization Package.** All authorization artifacts are submitted in OSCAL format (mandatory under 20x). The SSP, SAP, SAR, and POA&M are machine-readable and validated automatically by FedRAMP tooling before human review. See Section 18.3.2 for the OSCAL-as-Code pipeline.

**Automated Validation.** FedRAMP 20x introduces "checks as code" – automated control validation that verifies CSP compliance assertions against evidence. HH Inc. integrates these checks into the CI/CD pipeline (Section 9.3) via OPA policies mapped to NIST 800-53 control IDs. The SDLC compliance-as-code checks (Section 9.3, Pipeline Stage: Compliance Checks) generate machine-readable evidence that feeds directly into OSCAL component definitions.

**Agency Authorization Path.** The Joint Authorization Board (JAB) P-ATO path is discontinued under 20x. HH Inc. pursues authorization through an agency sponsor. The sponsor identification strategy is:
1. Engage initial federal pilot customer during pre-authorization period
2. Execute an agency sponsorship agreement defining the authorizing official (AO)
3. Submit OSCAL authorization package to FedRAMP PMO via digital storefront
4. Complete 3PAO assessment (see below)
5. Receive Agency ATO, published to FedRAMP Marketplace

**Target Timeline:** Agency ATO within 12 months of 3PAO engagement.

##### 18.3.1.6 3PAO Assessment Preparation

HH Inc. engages an accredited Third-Party Assessment Organization (3PAO) for initial and ongoing assessments:

| Activity | Frequency | Scope | Owner |
|---|---|---|---|
| Initial full assessment | Once (pre-ATO) | All Moderate baseline controls (~325) | 3PAO + ISSO |
| Annual security assessment | Annually | Full control re-assessment | 3PAO + ISSO |
| Penetration testing (external + internal) | Annually | Network, application, social engineering | 3PAO or contracted firm |
| Automated control validation | Continuous | Controls with automated evidence | CI/CD pipeline |
| Significant Change Assessment | As needed | Controls affected by boundary changes | 3PAO + ISSO |

**Readiness Activities (SDLC Phase 3 – Testing, Section 9.4):**
- Pre-assessment readiness review: self-assess all Moderate baseline controls (~325), identify gaps
- Evidence package assembly: collect 12 months of operating evidence for Type II-style assessment
- Remediation sprint: close Critical and High gaps before 3PAO engagement
- Mock assessment: internal team or consultant performs dry-run assessment

##### 18.3.1.7 Continuous Monitoring (ConMon) Program

Post-authorization, HH Inc. maintains continuous compliance through a structured ConMon program mapped to FedRAMP requirements and SDLC Phase 5 (Section 9.6):

**Monthly:**

| Activity | Tool | NIST Control | Deliverable |
|---|---|---|---|
| OS vulnerability scan (authenticated) | Tenable on Azure Gov | RA-5 | Scan report, POA&M updates |
| Database vulnerability scan | Tenable / Azure SQL Vuln Assessment | RA-5 | Scan report, POA&M updates |
| Web application scan | OWASP ZAP / Burp Suite | RA-5, SI-2 | Scan report, POA&M updates |
| Container image scan | Trivy / Microsoft Defender | RA-5, CM-8 | Scan report, POA&M updates |
| POA&M update submission | OSCAL POA&M generator | CA-5, PM-4 | OSCAL POA&M to FedRAMP PMO |
| Unique vulnerability count trending | Custom correlation | RA-5 | Monthly trend report |

**Quarterly:**

| Activity | NIST Control | Deliverable |
|---|---|---|
| POA&M review with Authorizing Official | CA-5, PM-4 | AO sign-off |
| Significant Change Request (SCR) evaluation | CM-3, CA-6 | SCR determination |
| Contingency plan tabletop exercise | CP-4 | Exercise report |
| Security awareness training verification | AT-2, AT-3 | Training completion records |

**Annually:**

| Activity | NIST Control | Deliverable |
|---|---|---|
| 3PAO security assessment | CA-2, CA-7 | OSCAL SAR |
| Penetration testing (external + internal + social engineering) | CA-8 | Pen test report, POA&M entries |
| Contingency plan functional test | CP-4 | Recovery evidence with RPO/RTO metrics |
| Authorization renewal | CA-6 | Updated SSP, SAR, POA&M |
| Enterprise risk assessment update | RA-3, PM-9 | Updated risk register |
| Incident response plan test | IR-3 | Tabletop exercise report |

**Vulnerability Remediation SLAs (per FedRAMP VDR):**

| Severity | CVSS Range | Remediation Deadline | Escalation |
|---|---|---|---|
| Critical | 9.0-10.0 | 30 calendar days | CISO at day 15 |
| High | 7.0-8.9 | 90 calendar days | CISO at day 45 |
| Medium | 4.0-6.9 | 180 calendar days | ISSO at day 90 |
| Low | 0.1-3.9 | 365 calendar days | Tracked in POA&M |

> **Note:** These are the FedRAMP compliance reporting time limits mandated by the FedRAMP VDR. Section 16.5.2 defines more aggressive operational targets (e.g., 24 hours for Critical vulnerabilities) that reflect the Helge Heupel Group's internal engineering standard. Both apply: the operational target drives day-to-day remediation urgency, while the FedRAMP deadline is the outer compliance boundary.

##### 18.3.1.8 Separation of Duties – EU and US Operations

HH Inc. maintains strict personnel and operational separation from EU entities to protect the FedRAMP authorization boundary:

| Control | Implementation | NIST Control |
|---|---|---|
| Dedicated US ISSO/ISSM | US-based personnel with NAC/NACLC background investigation | PM-2, PS-3 |
| Separate Entra ID tenant | Azure Gov Entra ID tenant with no federation to EU tenant | AC-2, IA-2 |
| No cross-boundary privileged access | EU personnel have no administrative access to US boundary; US personnel have no administrative access to EU boundary | AC-5, AC-6 |
| Break-glass procedures | Emergency access via dual-person PIM activation, logged and reviewed within 24 hours | AC-2(2), AU-6 |
| US-cleared contractors only | All personnel with access to the FedRAMP boundary are US persons with completed background investigations | PS-3, PS-7 |
| Separate change management | US boundary changes require US CAB approval independent of EU CAB | CM-3, CM-5 |

**Key Personnel Roles (FedRAMP-Required):**

| Role | Responsibility | Reports To |
|---|---|---|
| Information System Security Officer (ISSO) | Day-to-day security, ConMon execution, POA&M management | ISSM |
| Information System Security Manager (ISSM) | ISSO oversight, policy compliance, AO liaison | CISO |
| Authorizing Official (AO) | Accepts risk, grants ATO (agency representative) | Agency |
| FedRAMP PMO Liaison | Coordinates with GSA FedRAMP PMO | ISSM |
| US Security Engineering Lead | Vulnerability scanning, hardening, incident response | ISSO |

#### 18.3.2 OSCAL-as-Code Pipeline

FedRAMP 20x mandates machine-readable authorization packages in OSCAL (Open Security Controls Assessment Language) format. HH Inc. treats OSCAL artifacts as code -- versioned, reviewed, validated, and deployed through the same CI/CD pipeline that governs application code (Section 9.3).

##### 18.3.2.1 OSCAL Artifact Inventory

| OSCAL Model | Purpose | Source of Truth | Generation Method |
|---|---|---|---|
| Catalog | NIST 800-53 Rev 5 control definitions | NIST OSCAL Repository | Downloaded, pinned to release |
| Profile | FedRAMP Moderate baseline selection | FedRAMP Automation Repository (GSA) | Downloaded, pinned to release |
| Component Definition | Per-component control implementation statements | `/oscal/components/` in source repo | Authored by engineers + ISSO; auto-enriched from IaC |
| System Security Plan (SSP) | Comprehensive security documentation | Assembled from components + system metadata | Built by CI pipeline |
| Security Assessment Plan (SAP) | Assessment methodology and scope | Co-authored with 3PAO | Manual + template |
| Security Assessment Results (SAR) | Assessment findings | 3PAO output | 3PAO-generated, validated by ISSO |
| Plan of Action & Milestones (POA&M) | Remediation tracking | Auto-generated from vulnerability scans + manual entries | CI pipeline + manual |

##### 18.3.2.2 Source Control Structure

```
/oscal/
  catalog/
    nist-800-53-rev5.json           # Pinned NIST catalog
  profiles/
    fedramp-moderate.json           # Pinned FedRAMP Moderate profile
  components/
    verity-ve.json                  # Component definition: Verity VE
    verity-eam.json                 # Component definition: Verity EAM
    azure-aks.json                  # Component definition: AKS
    azure-sql.json                  # Component definition: Azure SQL
    azure-keyvault.json             # Component definition: Key Vault
    ai-inference.json               # Component definition: AI inference service
    ...
  system/
    ssp-metadata.json               # System-level metadata (boundary, users, etc.)
    interconnections.json           # ISA inventory
    inherited-controls.json         # Controls inherited from Azure Gov
  poam/
    poam-current.json               # Current POA&M (auto-updated)
  assessments/
    sap-template.json               # SAP template for 3PAO
    sar/                            # SAR artifacts (post-assessment)
  policies/
    opa/                            # OPA policies mapped to NIST controls
```

##### 18.3.2.3 CI/CD Integration

The OSCAL pipeline runs as part of the CI/CD process defined in Section 9.3:

```
Developer commits IaC/code/OSCAL change
  -> Pre-commit: OSCAL JSON schema validation (oscal-cli validate)
  -> Build: Component definitions updated from IaC metadata (Lula)
  -> Assemble: SSP assembled from components + system metadata (Trestle)
  -> Validate: OSCAL completeness check – all Moderate controls addressed
  -> Validate: FedRAMP-specific rules (GSA validation tooling)
  -> Generate: POA&M auto-updated from vulnerability scan results
  -> Publish: Validated OSCAL package versioned in artifact registry
  -> Notify: ConMon dashboard updated; delta report generated
```

**Pipeline Failure Conditions (Gate Block):**
- OSCAL schema validation failure (malformed JSON/XML)
- Missing control implementation statements (completeness < 100%)
- POA&M entries exceeding remediation SLA without approved deviation request
- Unsigned or untrusted component definition changes

##### 18.3.2.4 Tooling

| Tool | Purpose | Integration Point | NIST Control |
|---|---|---|---|
| `oscal-cli` (NIST) | Validation, conversion, resolution | CI pre-commit + build stage | CA-2 |
| Trestle (IBM) | OSCAL authoring, SSP assembly, transformation | CI build stage; developer workflow | PL-2, CA-2 |
| Lula (Defense Unicorns) | Automated evidence collection, component generation from IaC | CI build stage; linked to Terraform/Bicep | CA-7, SA-10 |
| FedRAMP Automation (GSA) | FedRAMP-specific templates and validation rules | CI validation stage | CA-6 |
| OPA (custom policies) | Map compliance checks to OSCAL control assertions | CI compliance-as-code stage (Section 9.3) | All families |
| GRC Platform (Vanta/Drata) | OSCAL import/export, evidence lifecycle management | Bi-directional sync | CA-7, PM-4 |

##### 18.3.2.5 OSCAL Output Formats

All OSCAL artifacts are maintained in JSON as the canonical format. XML and human-readable Markdown derivatives are generated on demand:

- **JSON** (canonical): stored in source control, validated in CI, submitted to FedRAMP
- **XML**: generated from JSON via `oscal-cli convert` for tools requiring XML input
- **Markdown/PDF**: generated from JSON via Trestle for human review, 3PAO walkthroughs, and agency consumption during transition from traditional document-based authorization

#### 18.3.3 SOC 2 Type II

HH Inc. maintains an annual SOC 2 Type II attestation covering all five Trust Service Categories. Evidence is collected continuously via GRC platform integration (Vanta/Drata) and SDLC phase gates (Section 13).

##### 18.3.3.1 Trust Service Categories in Scope

| Category | Criteria | Applicability to Verity | Key SDLC Controls |
|---|---|---|---|
| **Security (CC)** | CC1-CC9 | Core – all system components | Sections 9.3, 9.6, 12.1, 12.3 |
| **Availability (A1)** | A1.1-A1.3 | SaaS uptime, BCP/DR | Section 16.1 (SLOs), 16.8 (DR) |
| **Processing Integrity (PI1)** | PI1.1-PI1.5 | Critical for AI-driven outputs | Section 10 (AI Policy), 9.4 (Testing) |
| **Confidentiality (C1)** | C1.1-C1.2 | Customer data classification | Section 12.6 (Privacy), 12.5 (TISAX) |
| **Privacy (P)** | P1-P8 | Consumer PII handling | Section 12.6, 18.3.4 (CCPA/CPRA) |

##### 18.3.3.2 Common Criteria (CC1-CC9) Detailed Mapping

**CC1 -- Control Environment**

| Criterion | Requirement | SDLC Implementation | Evidence Source |
|---|---|---|---|
| CC1.1 | Commitment to integrity and ethical values | Code of conduct; AI ethics policy (Section 10.7) | Policy documents, annual acknowledgments |
| CC1.2 | Board/management oversight | AI Governance Board, Compliance Steering Committee (Section 13.3) | Meeting minutes, charter documents |
| CC1.3 | Management structure and reporting | Organizational model (Section 7), ISSO/ISSM reporting chain | Org charts, role descriptions |
| CC1.4 | Competence commitment | Role-based training (AT-2, AT-3); Security Champion program (Section 7.3) | Training records, certifications |
| CC1.5 | Accountability enforcement | Personnel sanctions (PS-8); Definition of Done enforcement (Section 9.3) | HR records, gate audit logs |

**CC2 -- Communication and Information**

| Criterion | Requirement | SDLC Implementation | Evidence Source |
|---|---|---|---|
| CC2.1 | Internal communication of objectives | PI Planning (Section 7.3), ART Sync, Sprint Reviews | Meeting records, Azure Boards |
| CC2.2 | Internal communication for internal control | Security Champion guild, CISO weekly briefings (Section 9.6) | Sentinel dashboards, Teams channels |
| CC2.3 | External communication | Customer security advisories, breach notification procedures | Notification templates, incident logs |

**CC3 -- Risk Assessment**

| Criterion | Requirement | SDLC Implementation | Evidence Source |
|---|---|---|---|
| CC3.1 | Risk identification | Threat modeling per feature (Section 9.2, RA-3) | STRIDE/LINDDUN outputs |
| CC3.2 | Fraud risk assessment | Segregation of duties matrix (AC-5), financial control reviews | SoD matrix, access reviews |
| CC3.3 | Significant change identification | SCR process (CM-3), change-driven risk reassessment | SCR records, CAB minutes |
| CC3.4 | External risk factors | Threat intelligence feeds (PM-16), ISAC membership | Sentinel threat reports, ISAC bulletins |

**CC4 -- Monitoring Activities**

| Criterion | Requirement | SDLC Implementation | Evidence Source |
|---|---|---|---|
| CC4.1 | Ongoing and separate evaluations | ConMon (Section 18.3.1.7), internal audits, 3PAO assessments | ConMon reports, audit reports |
| CC4.2 | Communication of deficiencies | POA&M process (CA-5), deficiency escalation via Compliance Steering Committee | POA&M entries, meeting minutes |

**CC5 -- Control Activities**

| Criterion | Requirement | SDLC Implementation | Evidence Source |
|---|---|---|---|
| CC5.1 | Selection of control activities | Cross-framework compliance matrix (Section 6), risk-based control selection | Compliance matrix, risk register |
| CC5.2 | Technology-based controls | CI/CD pipeline stages (Section 9.3), OPA policies, automated gates | Pipeline logs, OPA policy repo |
| CC5.3 | Deployment through policies | SDLC document (this document), security policies, operating procedures | Policy repository, version history |

**CC6 -- Logical and Physical Access Controls**

| Criterion | Requirement | SDLC Implementation | Evidence Source |
|---|---|---|---|
| CC6.1 | Logical access security | Azure Entra ID RBAC, Zero Trust (Section 12.1, AC-3) | Entra ID config, access policies |
| CC6.2 | Access provisioning | JIT/PIM access (AC-2), onboarding checklists | PIM logs, provisioning tickets |
| CC6.3 | Access deprovisioning | 4-hour termination revocation (PS-4), quarterly access reviews | Deprovisioning logs, review records |
| CC6.6 | Restriction of access to system components | Network segmentation (SC-7), NSGs, private endpoints | NSG rules, network diagrams |
| CC6.7 | Restriction of data movement | DLP policies (AC-4), cross-boundary transfer controls | DLP policy config, transfer logs |
| CC6.8 | Prevention of unauthorized data removal | USB restrictions (MP-7), egress filtering | Intune policies, firewall rules |

**CC7 -- System Operations**

| Criterion | Requirement | SDLC Implementation | Evidence Source |
|---|---|---|---|
| CC7.1 | Infrastructure/software monitoring | Azure Monitor, Application Insights (Section 16.2) | Dashboards, alert configs |
| CC7.2 | Anomaly monitoring | Microsoft Sentinel SIEM, AI-driven anomaly detection (SI-4) | Sentinel analytics rules, alerts |
| CC7.3 | Event evaluation | Incident classification matrix, triage procedures (IR-4) | Incident tickets, triage logs |
| CC7.4 | Incident response execution | Incident response plan (IR-8), playbooks | IR plan document, playbook runs |
| CC7.5 | Recovery from incidents | BCP/DR procedures (CP-2), recovery runbooks | Recovery evidence, RTO metrics |

**CC8 -- Change Management**

| Criterion | Requirement | SDLC Implementation | Evidence Source |
|---|---|---|---|
| CC8.1 | Change lifecycle | CAB approval (Section 13.3), CI/CD with mandatory review (Section 9.3, CM-3) | CAB records, PR approvals, deployment logs |

**CC9 -- Risk Mitigation**

| Criterion | Requirement | SDLC Implementation | Evidence Source |
|---|---|---|---|
| CC9.1 | Risk mitigation activities | Risk treatment plans from risk assessments (RA-3, PM-9) | Risk register, treatment plans |
| CC9.2 | Vendor/partner risk management | Vendor assessment program (SA-9), SCA/SBOM (Section 9.3) | Vendor assessments, SLA reviews |

##### 18.3.3.3 Evidence Automation

Evidence is collected continuously via GRC platform (either NorthGRC or Make) integration at each SDLC phase gate:

| SDLC Gate | Evidence Automatically Captured | TSC Criteria |
|---|---|---|
| G0 – Strategic Alignment | Risk classification, impact assessment | CC3 |
| G1 – Requirements Readiness | Threat model, DPIA, SBOM baseline | CC3, CC5 |
| G2 – Quality & Compliance | Test reports, scan results, AI validation | CC7, CC8, PI1 |
| G3 – Release Readiness | CAB approval, rollback verification, compliance package | CC5, CC8, A1 |
| G4 – Post-Release Validation | SLO metrics, monitoring confirmation | CC7, A1 |
| Continuous (Phase 5) | Access reviews, vulnerability scans, incident records, training records | CC4, CC6, CC7, CC1 |

**GRC Platform Integration Points:**
- Azure Entra ID -> Vanta/Drata: user access snapshots, MFA status, role assignments (CC6)
- Azure Pipelines -> Vanta/Drata: deployment records, PR approvals, test results (CC8, PI1)
- Microsoft Sentinel -> Vanta/Drata: incident tickets, response timelines (CC7)
- Tenable/Qualys -> Vanta/Drata: vulnerability scan results, remediation tracking (CC7, CC4)
- HR System -> Vanta/Drata: onboarding/offboarding records, training completion (CC1, CC6)

##### 18.3.3.4 Annual Audit Preparation Checklist

| # | Activity | Timeline | Owner |
|---|---|---|---|
| 1 | Confirm TSC scope with audit firm | T-4 months | CISO |
| 2 | Verify GRC platform evidence completeness for observation period | T-3 months | ISSO |
| 3 | Close open control deficiencies or document compensating controls | T-3 months | ISSO + Engineering |
| 4 | Conduct internal readiness assessment against all in-scope criteria | T-2 months | Internal Audit |
| 5 | Remediate readiness assessment findings | T-2 months | Engineering Leads |
| 6 | Prepare management assertion letter | T-1 month | CISO + Legal |
| 7 | Auditor fieldwork (evidence walkthrough, testing, interviews) | T-0 | Audit Firm + ISSO |
| 8 | Review draft report, respond to exceptions | T+1 month | CISO + Legal |
| 9 | Finalize SOC 2 Type II report | T+2 months | Audit Firm |
| 10 | Distribute report to customers via secure portal | T+2 months | Sales/Legal |

**Observation Period:** Minimum 6 months for initial engagement; 12 months for subsequent annual reports.

**Bridge Letter Strategy:** If ATO timing does not align with SOC 2 observation period, issue a SOC 2 bridge letter covering the gap between report periods.

#### 18.3.4 CCPA/CPRA Compliance

HH Inc. implements a "high-water-mark" privacy compliance approach – complying with California's CPRA (the most restrictive US state privacy law) and documenting how that compliance satisfies other state privacy laws (Virginia VCDPA, Colorado CPA, Connecticut CTDPA, Texas TDPSA, and additional states with enacted legislation).

##### 18.3.4.1 Consumer Rights Handling

All consumer rights requests are processed within a **30-day SLA** (extendable to 45 days with notice), per Cal. Civ. Code 1798.100 et seq.:

| Right | CPRA Reference | Implementation | SDLC Phase |
|---|---|---|---|
| Right to Know | 1798.100 | API endpoint + UI for consumer data access requests; automated data inventory query | Phase 2 (build), Phase 5 (operate) |
| Right to Delete | 1798.105 | Cascading deletion pipeline with verification and audit log; backup purge within 90 days | Phase 2 (build), Phase 5 (operate) |
| Right to Correct | 1798.106 | Data correction API with validation and provenance tracking | Phase 2 (build) |
| Right to Opt-Out of Sale/Sharing | 1798.120-121 | Global Privacy Control (GPC) signal detection; "Do Not Sell or Share" link; opt-out state persisted | Phase 2 (build), Phase 4 (deploy) |
| Right to Limit Use of Sensitive PI | 1798.121 | Sensitive data handling controls; purpose limitation enforcement | Phase 2 (build) |
| Right to Non-Discrimination | 1798.125 | Service parity verification for consumers exercising rights | Phase 3 (test) |

**Request Processing Workflow:**
1. Consumer submits request via web form, email, or authorized agent
2. Identity verification within 10 business days (two-step verification for deletion/access)
3. Request logged in privacy management system with SLA clock started
4. Automated data inventory query across all systems within the FedRAMP boundary
5. Response generated and delivered to consumer
6. Request and response archived for 24 months (1798.185)

##### 18.3.4.2 Automated Decision-Making Transparency (ADMT)

As an AI-native product company, HH Inc. proactively complies with CPRA ADMT regulations (1798.185(a)(16)), which are critical for Verity VE and EAM:

| Obligation | Implementation | NIST Control | SDLC Phase |
|---|---|---|---|
| Pre-use notification | In-product notice before ADMT is used to make significant decisions | PT-5 | Phase 2 (UI), Phase 4 (deploy) |
| Opt-out right | Consumer can disable ADMT profiling for their data; fallback to non-AI workflow | PT-4 | Phase 2 (build) |
| Access to logic | Explainability module: SHAP/LIME-based explanations for each AI decision (Section 8.2.3) | PT-3 | Phase 2 (build), Phase 3 (test) |
| Human review | Consumer can request human review of any AI-generated recommendation | PT-4 | Phase 2 (build) |
| Risk assessment | ADMT-specific privacy risk assessment conducted before deployment | RA-3, PT-2 | Phase 1 (requirements) |

**Integration with ISO 42001/EU AI Act:** ADMT transparency controls are harmonized with ISO 42001 Annex A.6 (Transparency) and EU AI Act Art. 13 (Transparency Obligations for High-Risk Systems). A single explainability infrastructure serves all three regimes.

##### 18.3.4.3 Privacy Risk Assessments

Per CPRA 1798.185(a)(15)(B), HH Inc. conducts privacy risk assessments for processing that presents significant risk to consumer privacy. These are distinct from GDPR DPIAs but share common methodology:

| Trigger | Assessment Type | Frequency | Owner |
|---|---|---|---|
| New AI feature processing consumer PI | Full ADMT risk assessment | Before deployment | Privacy Officer + AI Governance Board |
| New data collection category | Processing risk assessment | Before deployment | Privacy Officer |
| Significant change to existing processing | Delta risk assessment | Upon change | Privacy Officer |
| Annual reassessment | Comprehensive review | Annually | Privacy Officer |

**Assessments are submitted to the California Privacy Protection Agency (CPPA) upon request and maintained for 5 years.**

##### 18.3.4.4 Service Provider Contractual Obligations

HH Inc. executes CPRA-compliant service provider agreements (distinct from GDPR DPAs) with all sub-processors that handle California consumer personal information:

| Contractual Requirement | CPRA Reference | Implementation |
|---|---|---|
| Purpose limitation | 1798.140(ag)(1) | Sub-processor may only process PI for specified business purposes |
| No selling/sharing | 1798.140(ag)(1)(A) | Contractual prohibition on sale or sharing of consumer PI |
| Compliance obligations | 1798.140(ag)(1)(B) | Sub-processor must comply with CPRA and allow audits |
| Notification of inability to comply | 1798.140(ag)(1)(C) | Sub-processor must notify HH Inc. if unable to meet obligations |
| Downstream sub-processor restrictions | 1798.140(ag)(5) | Written consent required for sub-processor engagement |

##### 18.3.4.5 Data Broker Registration

If Verity products facilitate the sale of personal information (as defined under Cal. Civ. Code 1798.99.80), HH Inc. registers with the California Privacy Protection Agency as a data broker. **Current assessment: not applicable** – Verity VE and EAM are B2B SaaS products that process data on behalf of enterprise customers, not data brokers. This assessment is reviewed annually.

#### 18.3.5 Azure Government Deployment

HH Inc. deploys all FedRAMP-scoped workloads exclusively on Microsoft Azure Government, a physically and logically isolated cloud environment that holds FedRAMP High authorization.

##### 18.3.5.1 Region Strategy

| Purpose | Primary Region | DR Region | Rationale |
|---|---|---|---|
| Production (FedRAMP) | Azure Gov Virginia (USGov Virginia) | Azure Gov Arizona (USGov Arizona) | FedRAMP-authorized; lowest latency to DC-area agencies |
| Non-Production (Dev/Test) | Azure Gov Virginia | – | Boundary consistency; no commercial Azure |
| AI Inference | Azure Gov Virginia | Azure Gov Arizona (warm standby) | Azure AI Services availability |
| Backup / Archive | Azure Gov Arizona | – | Geographic separation for CP-6, CP-7 |

**RPO/RTO Targets (CP-9, CP-2):**

| Tier | RPO | RTO | Mechanism |
|---|---|---|---|
| Tier 1 (Database) | 5 minutes | 1 hour | Azure SQL geo-replication, point-in-time restore |
| Tier 2 (Application) | 15 minutes | 2 hours | AKS multi-region failover via Azure Front Door |
| Tier 3 (Batch/Analytics) | 1 hour | 4 hours | Azure Backup with cross-region restore |

##### 18.3.5.2 Separate Entra ID Tenant

HH Inc. operates a **dedicated Azure Entra ID tenant** for the US FedRAMP boundary (IA-2, IA-8, AC-2):

| Configuration | Setting | NIST Control |
|---|---|---|
| Tenant type | Azure Government Entra ID | IA-2 |
| Federation with EU tenant | **None** – no trust relationship | AC-2, AC-5 |
| Federation with customer agencies | Per-agency conditional access policies | IA-8, AC-20 |
| MFA enforcement | FIDO2 hardware keys (primary), Microsoft Authenticator (backup) | IA-2(1), IA-2(2) |
| Conditional Access | Device compliance, location-based, risk-based | AC-2(2), AC-7 |
| Privileged Identity Management (PIM) | JIT elevation, maximum 8-hour activation, dual approval for Global Admin | AC-2, AC-5, AC-6 |

##### 18.3.5.3 Network Isolation

| Control | Implementation | NIST Control |
|---|---|---|
| No Azure Commercial connectivity | No VNet peering, no ExpressRoute, no VPN to Azure Commercial regions | SC-7, AC-4 |
| Private endpoints | All PaaS services accessed via private endpoints only (no public IPs) | SC-7(5) |
| NSG rules | Default-deny; allowlist by service and port | SC-7, CM-7 |
| Azure Firewall | Centralized egress filtering; FQDN-based rules | SC-7(4) |
| DDoS Protection | Azure DDoS Protection Standard on all public-facing endpoints | SC-5 |
| DNS | Azure Private DNS; no external DNS resolution from within boundary | SC-20, SC-21, SC-22 |
| WAF | Azure Front Door WAF with OWASP 3.2 ruleset on all APIs | SC-7, SI-10 |

##### 18.3.5.4 FedRAMP-Authorized Services Only

All Azure services consumed within the boundary must hold FedRAMP Moderate or High authorization. Services not listed on the Azure Government FedRAMP audit scope are prohibited:

| Service | FedRAMP Status | Usage |
|---|---|---|
| Azure Kubernetes Service | FedRAMP High | Application hosting |
| Azure SQL Database | FedRAMP High | Relational data |
| Azure Cosmos DB | FedRAMP High | NoSQL data |
| Azure Key Vault (Managed HSM) | FedRAMP High | Key management (FIPS 140-2 Level 3) |
| Azure API Management | FedRAMP High | API gateway |
| Azure Monitor / Log Analytics | FedRAMP High | Observability |
| Microsoft Sentinel | FedRAMP High | SIEM |
| Azure Container Registry | FedRAMP High | Container images |
| Azure AI Services | FedRAMP High (Gov) | AI inference |
| Azure Machine Learning | FedRAMP High (Gov) | ML pipeline |
| Azure Backup | FedRAMP High | Data protection |
| Azure Front Door | FedRAMP High | CDN, WAF, load balancing |

##### 18.3.5.5 FIPS 140-2 Level 3 HSM

Cryptographic key management within the FedRAMP boundary uses Azure Key Vault Managed HSM, which provides FIPS 140-2 Level 3 validated hardware security modules (SC-12, SC-13):

| Key Type | Storage | FIPS Level | Rotation |
|---|---|---|---|
| Tenant master key (TDE) | Managed HSM | Level 3 | Annual |
| Application encryption keys | Managed HSM | Level 3 | 90 days |
| TLS certificates | Key Vault (Standard) | Level 2 | Auto-renew at 80% lifetime |
| Cosign signing keys | Managed HSM | Level 3 | Annual |
| Backup encryption keys | Managed HSM | Level 3 | Annual |

**Cryptographic Algorithm Requirements (SC-13):**
- Encryption at rest: AES-256 (FIPS-validated)
- Encryption in transit: TLS 1.3 (FIPS-validated provider)
- Hashing: SHA-256 minimum (SHA-384/512 for signing)
- Key exchange: ECDHE with P-384 minimum
- Digital signatures: ECDSA P-384 or RSA-4096

All cryptographic modules used within the boundary must appear on the NIST Cryptographic Module Validation Program (CMVP) validated modules list.

### 18.4 Cross-Entity Coordination – Enhanced

#### 18.4.1 Incident Escalation Matrix

| Severity | Detection Entity | Immediate Actions | Cross-Entity Escalation Trigger | Escalation Timeline | Incident Commander |
|---|---|---|---|---|---|
| **Critical** (service-wide outage, confirmed breach of Confidential/Strictly Confidential data, active adversary) | Any entity | SOC activates containment; CISO notified immediately | Automatic: all entities notified within 30 minutes | T+0.5h | Global CISO |
| **High** (partial service disruption, suspected data breach, vulnerability actively exploited) | Any entity | SOC initiates investigation; local CISO notified | If impact spans multiple entities or jurisdictions | T+2h | Local CISO; Global CISO consulted |
| **Medium** (contained security event, policy violation, vulnerability with no active exploitation) | Any entity | SOC investigates; local security team manages | If root cause affects shared infrastructure or controls | T+8h | Local Security Lead |
| **Low** (informational event, minor policy deviation) | Any entity | Logged and tracked | No cross-entity escalation | N/A | Local Security Lead |

**Follow-the-sun handoff protocol:**
- Primary coverage hours: GmbH/B.V. (CET 08:00-18:00), Inc. (ET 08:00-18:00).
- Handoff occurs at CET 18:00 to Inc. and at ET 18:00 to GmbH/B.V.
- Handoff includes: incident status summary, open actions, pending decisions, regulatory reporting deadlines.
- Handoff communication via dedicated secure channel (Microsoft Teams with E2EE), backed by phone escalation.

**Regulatory notification routing:**

| Incident Type | DE Notification | NL Notification | US Notification |
|---|---|---|---|
| NIS2 significant incident (GmbH affected) | BSI (24h/72h) | NCSC-NL (if B.V. also affected) | N/A |
| NIS2 significant incident (B.V. affected) | BSI (if GmbH also affected) | NCSC-NL (24h/72h) | N/A |
| GDPR data breach (EU data subjects) | BfDI/LfDI (72h, if GmbH is controller) | AP (72h, if B.V. is controller) | N/A |
| FedRAMP incident (US boundary) | N/A | N/A | US-CERT (per FedRAMP IR) |
| Cross-border incident (DE + NL) | BSI (24h/72h) | NCSC-NL (24h/72h) | ENISA coordination per NIS2 Art. 23(4) |

#### 18.4.2 Shared Control Ownership (RACI)

A RACI matrix assigns control ownership across all three entities for the 93 ISO 27001 Annex A controls:

| Control Category | Responsible | Accountable | Consulted | Informed |
|---|---|---|---|---|
| IS policies (A.5.1) | Global CISO | CTO | Entity Legal Counsel | All staff |
| Identity and access management (A.5.15-A.5.18) | Central IT / Platform Team | Global CISO | Entity IT Leads | All staff |
| Cloud security (A.5.23) | Platform Architecture Team | Global CISO | Entity Architects | SRE teams |
| Physical security – offices (A.7.1-A.7.7) | Entity Facilities Manager | Entity Managing Director | Global CISO | Local staff |
| Physical security – data centers (A.7.1-A.7.14) | Microsoft Azure (shared responsibility) | Global CISO (oversight) | Platform Team | Entity Leads |
| Cryptography (A.8.24) | Platform Architecture Team | Global CISO | Entity Security Champions | Engineering teams |
| Secure development (A.8.25-A.8.31) | Engineering Leads (per ART) | CTO | Global CISO, Security Champions | QA teams |
| Vulnerability management (A.8.8) | SOC / Security Operations | Global CISO | Entity Security Leads | Engineering teams |
| NIS2 compliance – DE | DE Compliance Officer | GmbH Geschaeftsfuehrer | Global CISO, Legal | BSI |
| NIS2 compliance – NL | NL Compliance Officer | B.V. Bestuurder | Global CISO, Legal | NCSC-NL |
| TISAX assessment | TISAX Coordinator | Global CISO | Entity Quality Leads | ENX auditor |
| GDPR/privacy | DPO | Entity Managing Director (controller) | Legal Counsel | AP/BfDI |

The full 93-control RACI matrix is maintained as a controlled document (DOC-ISMS-RACI-001) in the GRC platform.

#### 18.4.3 Inter-Entity Data Flow Governance

All data flows between entities are documented, classified, and technically enforced:

| Data Flow | Source | Destination | Legal Basis | Classification | Technical Controls |
|---|---|---|---|---|---|
| Employee HR data (intra-EU) | GmbH | B.V. (or reverse) | Legitimate interest (GDPR Art. 6(1)(f)); intra-group agreement | Confidential | Encrypted transfer (TLS 1.3); access restricted to HR function; logged |
| Customer data (EU to US) | GmbH / B.V. | Inc. | EU Standard Contractual Clauses (SCC 2021/914) + supplementary measures; EU-US Data Privacy Framework (DPF) certification | Confidential | Encrypted transfer; US data residency in Azure US Gov; access restricted and logged; TIA documented |
| ISMS evidence and audit data | All entities | GRC platform (centralized) | Legitimate interest; intra-group agreement | Internal | Role-based access per entity; audit trail on all access |
| AI training data | GmbH / B.V. | Centralized AI platform (EU region) | Purpose-limited to AI development; DPIA completed | Confidential | Data residency enforced (Azure West Europe); no cross-jurisdictional transfer without explicit DPIA and DPA |
| Incident data (cross-entity) | Any entity | All affected entities | Legal obligation (NIS2); legitimate interest | Confidential | Encrypted transfer; need-to-know access; time-limited sharing |
| Source code and development artifacts | All entities | Azure DevOps / GitHub (centralized) | Intra-group agreement; employment contracts | Internal / Confidential | Access controlled by Azure Entra ID; branch protection; commit signing |

**Controller/processor determinations (GDPR Art. 26, 28):**
- GmbH and B.V. are independent controllers for their respective employee data and jurisdiction-specific customer data.
- For joint development activities and shared AI platform services: joint controller arrangement per GDPR Art. 26, with documented responsibilities for data subject rights, DPIA obligations, and breach notification.
- Inc. acts as processor for EU customer data processed in the US boundary, governed by Data Processing Agreement per GDPR Art. 28 with SCC and supplementary measures.

#### 18.4.4 Jurisdictional Conflict Resolution

When legal requirements of different jurisdictions conflict (e.g., data retention periods, lawful access requests, employee monitoring):

1. **Identification:** The entity compliance officer or DPO identifies the conflict and documents the competing requirements with citation to specific legal provisions.
2. **Legal assessment:** Entity legal counsel and group legal counsel jointly assess the conflict, producing a written legal opinion.
3. **Resolution hierarchy:**
   - (a) Apply the stricter standard where compliance with both is possible (e.g., applying the longer data retention period where both jurisdictions set minimums).
   - (b) Where mutual compliance is not possible, segregate processing: each entity processes data under its own jurisdiction's rules, with technical separation enforced.
   - (c) Where segregation is not feasible, escalate to external legal counsel specializing in the relevant jurisdictions for formal legal opinion.
   - (d) Document the resolution decision, rationale, and any residual risk accepted by the relevant management body.
4. **Lawful access requests:** Requests from law enforcement or intelligence agencies are assessed per the entity's jurisdiction. No entity discloses data of another entity's jurisdiction without: (a) written legal obligation in the requesting jurisdiction, (b) conflict-of-law assessment, (c) notification to the affected entity (unless legally prohibited), and (d) CISO and legal counsel approval.
5. **Resolution register:** All jurisdictional conflict resolutions are recorded in the GRC platform (DOC-ISMS-JCR-001) and reviewed annually.

#### 18.4.5 Single ISMS/AIMS Spanning All Entities

The Helge Heupel Group operates a single integrated ISMS (ISO 27001) and AIMS (ISO 42001) spanning all three legal entities, certified under multi-site certification rules per IAF MD 1:

- **Central functions** (managed at group level): ISMS/AIMS governance, security architecture, platform security, risk methodology, policy framework, GRC platform, internal audit program, management review.
- **Local functions** (managed at entity level): entity-specific regulatory compliance (NIS2 registration, DPA notifications, TISAX coordination), local HR security, office physical security, jurisdiction-specific incident reporting, local language documentation.
- **Entity-specific SoAs:** While the overall SoA is unified, each entity maintains a supplementary applicability record documenting entity-specific control implementations, particularly for jurisdictional controls (e.g., BSI reporting for GmbH, NCSC-NL reporting for B.V., FedRAMP boundary controls for Inc.).
- **Audit coordination:** For multi-site ISO 27001 certification, the certification body conducts a central audit at the group ISMS governance level plus site audits at each entity (sampling per IAF MD 1). Cross-entity audit evidence is coordinated via the GRC platform. Audit findings are tracked centrally with entity-specific corrective action ownership. The internal audit program covers all entities on a 3-year cycle with annual risk-based sampling.
- **Cost allocation:** Shared ISMS/AIMS resources (GRC platform, central security team, shared tooling) are allocated to entities via a documented transfer pricing model reviewed by group finance and tax counsel for compliance with arm's length principles.

---
## Appendix A – Glossary

| Term | Definition | Source / Standard |
|---|---|---|
| 3PAO | Third-Party Assessment Organization; an independent body accredited to perform FedRAMP security assessments. | FedRAMP 20x |
| ACR | Accessibility Conformance Report; a document generated from a VPAT that details a product's conformance to accessibility standards. | Section 508 / VPAT |
| ADR | Architecture Decision Record; a lightweight document capturing a significant architectural decision, its context, and consequences. | Industry practice |
| AI-BOM | AI Bill of Materials; an extension of SBOM that captures model provenance, training data lineage, and dependency metadata for AI systems. | CycloneDX AI-BOM |
| AI Gateway | A centralized proxy (LLM Proxy) that mediates all AI model interactions, enforcing policies, logging requests, and managing trust-level routing. | IEA v2 (Section 8) |
| AI Trust Level | A graduated scale (0–6) classifying AI autonomy from Untrusted (Level 0) to Attested (Level 6), governing approval requirements and human oversight. Also referred to as "trust level" in the body text. | IEA v2 (Section 8) |
| AI Trust Tier | A three-tier classification for AI usage: Tier 1 (Assistant), Tier 2 (Collaborator), Tier 3 (Decision Support), each with escalating governance requirements. Also referred to as "usage tier" or "Tier 1/2/3" in the body text. | Section 10 |
| AIA | AI Impact Assessment; a structured evaluation of an AI system's potential societal, ethical, and rights-related impacts before deployment. | ISO/IEC 42005 |
| AIMS | AI Management System; a standalone management system governing AI development, deployment, and operation aligned with ISO 42001 PDCA cycles. | ISO/IEC 42001 |
| AKS | Azure Kubernetes Service; Microsoft Azure's managed Kubernetes container orchestration service. | Microsoft Azure |
| ALE | Annualized Loss Expectancy; the expected monetary loss from a risk over one year, calculated as frequency multiplied by magnitude. | FAIR methodology |
| ART | Agile Release Train; a long-lived team-of-teams that plans, commits, and executes together in Program Increments. | SAFe 6.0 |
| ATO | Authority to Operate; a formal authorization granted by an Authorizing Official permitting a system to operate in a federal environment. | NIST / FedRAMP |
| BCP | Business Continuity Plan; a document outlining how an organization will continue operating during and after a disruption. | ISO 22301 |
| BIA | Business Impact Analysis; an assessment that identifies critical business functions and the impact of their disruption. | ISO 22301 / NIST |
| BSI | Bundesamt fuer Sicherheit in der Informationstechnik; Germany's Federal Office for Information Security. | BSI |
| Burn-Rate Alerting | An SRE technique that triggers alerts when error budget consumption exceeds a predefined rate, enabling proactive response before SLO breach. | SRE / Google |
| CAB | Change Advisory Board; a governance body that reviews and approves high-risk or critical production changes. | Section 13 |
| CAF | Cloud Adoption Framework; Microsoft's structured approach for Azure landing zone architecture using hub-spoke network topology. | Microsoft Azure |
| Canary Analysis | A deployment strategy (using tools such as Kayenta) that routes a small percentage of traffic to a new release and statistically compares metrics before full rollout. | Section 9 |
| CCPA | California Consumer Privacy Act; a state privacy law granting California consumers rights over their personal information. | State of California |
| Chaos Engineering | The discipline of experimenting on a system to build confidence in its capability to withstand turbulent production conditions. | Principles of Chaos Engineering |
| CI/CD | Continuous Integration / Continuous Delivery (or Deployment); the combined practice of frequently integrating code changes and automatically deploying them through a pipeline. | Industry practice |
| CISO | Chief Information Security Officer; the senior executive responsible for an organization's information and data security strategy. | Industry practice |
| CMMI | Capability Maturity Model Integration; a process improvement framework that provides organizations with essential elements for effective process improvement. | ISACA / CMMI Institute |
| Compositional Risk | The principle that aggregate risk of chained AI operations cannot be lower than any individual operation's risk, enforced via compositional risk rules. | IEA v2 (Section 8) |
| ConMon | Continuous Monitoring; an ongoing process of automated security assessment that provides near-real-time visibility into system posture. | NIST 800-137 / FedRAMP |
| CPO | Chief Product Officer; the senior executive responsible for product strategy and management. | Industry practice |
| CPRA | California Privacy Rights Act; an amendment and expansion of CCPA strengthening consumer privacy protections. | State of California |
| CSP | Cloud Service Provider; a company that offers cloud computing services (compute, storage, networking) to other organizations. | Industry practice |
| CTO | Chief Technology Officer; the senior executive responsible for an organization's technological direction and development. | Industry practice |
| CUI | Controlled Unclassified Information; information that requires safeguarding per US federal regulations but is not classified. | NIST 800-171 |
| DAST | Dynamic Application Security Testing; runtime analysis of a running application to detect vulnerabilities such as injection and misconfiguration. | OWASP |
| DevSecOps | Development, Security, and Operations; an approach that integrates security practices into every phase of the software development lifecycle. | Industry practice |
| DoD | Definition of Done; a checklist of criteria (functional, non-functional, compliance) that a work item must satisfy before it is considered complete. | Section 9 |
| DoR | Definition of Ready; a checklist of criteria that a work item must satisfy before it may enter a sprint or iteration. | Section 9 |
| DORA Metrics | Four key software-delivery performance indicators (DevOps Research and Assessment): Deployment Frequency, Lead Time for Changes, Change Failure Rate, and Time to Restore Service. Not to be confused with the EU Digital Operational Resilience Act (DORA, EU 2022/2554). | DORA / Accelerate |
| DPA | Data Processing Agreement; a legally binding contract between a data controller and data processor per GDPR Art. 28. | GDPR |
| DPIA | Data Protection Impact Assessment; a process to identify and minimize data-protection risks of a project, required under GDPR Art. 35. | GDPR / ISO/IEC 29134 |
| DPO | Data Protection Officer; the designated officer responsible for overseeing data protection strategy and GDPR compliance. | GDPR |
| DR | Disaster Recovery; the process and set of policies for recovering IT infrastructure and systems after a natural or human-induced disaster. | ISO 22301 / Section 16 |
| DSGVO | Datenschutz-Grundverordnung; the German name for the EU General Data Protection Regulation (GDPR). | EU 2016/679 |
| ENISA | European Union Agency for Cybersecurity; the EU agency dedicated to achieving a high common level of cybersecurity across Europe. | EU |
| ENX | European Network Exchange; the association that manages the TISAX accreditation and assessment process. | ENX Association |
| Error Budget | The tolerable amount of unreliability derived from SLO targets (100% minus SLO), consumed by incidents and used to balance reliability investment against feature velocity. | SRE / Google |
| ESO | External Secrets Operator; a Kubernetes operator that synchronizes secrets from external secret stores into Kubernetes Secrets. | CNCF |
| ETA | Event Tree Analysis; an inductive analysis technique for identifying and evaluating the sequence of events in a potential accident scenario. | IEC 31010 |
| FAIR | Factor Analysis of Information Risk; a quantitative risk-analysis methodology using Monte Carlo simulation to model loss event frequency and magnitude. | The Open Group |
| Feature Flag | A software mechanism enabling runtime toggling of features without deployment, used for progressive rollout, A/B testing, and kill-switch capability. | Section 9 |
| FinOps | Financial Operations; a practice that brings financial accountability to cloud spending through real-time visibility, allocation, and optimization. | FinOps Foundation |
| Flux CD | A GitOps toolkit for Kubernetes that continuously reconciles cluster state with declarative configuration stored in Git repositories. | CNCF Flux |
| FMEA | Failure Mode and Effects Analysis; a systematic method for evaluating processes to identify where and how they might fail and the relative impact of failures. | IEC 31010 |
| FTA | Fault Tree Analysis; a top-down, deductive failure analysis using Boolean logic to determine the root causes of system-level failures. | IEC 31010 |
| GRC | Governance, Risk, and Compliance; an integrated approach to aligning IT with business objectives, managing risk, and meeting regulatory requirements. | Section 6 |
| HAZOP | Hazard and Operability Study; a structured examination technique for identifying potential hazards and operability problems. | IEC 31010 |
| HITL | Human-in-the-Loop; a pattern requiring human review, approval, or intervention in an automated or AI-driven process before execution. | IEA v2 (Section 8) |
| HSM | Hardware Security Module; a physical computing device that safeguards and manages cryptographic keys and provides crypto-processing. | Industry practice |
| IaC | Infrastructure as Code; the practice of managing and provisioning infrastructure through machine-readable definition files rather than manual processes. | Industry practice |
| ICS-Lite | Incident Command System (Lite); a streamlined incident-management structure with defined roles (Incident Commander, Communications Lead, Technical Lead). Scribe is added for SEV1 incidents. | Section 16 |
| IDP | Internal Developer Portal; a self-service platform (e.g., Backstage) providing service catalog, documentation, API specs, and scaffolding for engineering teams. | Section 14 |
| IEA | Intent-Execution Architecture; a governance architecture that separates human intent from AI execution through structured contracts, policies, and verification layers. | Section 8 |
| Intent Contract | A machine-readable specification (JSON Schema) that encodes the human intent, constraints, trust level, and verification requirements for an AI operation. | IEA v2 (Section 8) |
| ISA | Information Security Assessment; the VDA catalog of security controls used in TISAX assessments. | VDA |
| ISMS | Information Security Management System; a systematic approach to managing sensitive information so that it remains secure, per ISO 27001. | ISO/IEC 27001 |
| ISSM | Information System Security Manager; the individual who oversees the ISSO, ensures policy compliance, and serves as the AO liaison. | NIST / FedRAMP |
| ISSO | Information System Security Officer; the individual responsible for day-to-day security operations, ConMon execution, and POA&M management for a federal system. | NIST / FedRAMP |
| JEA | Just Enough Administration; a security technology that enables delegated administration with least-privilege access for specific administrative tasks. | Microsoft |
| JIT | Just-in-Time; a privileged access model providing time-bounded elevation of privileges only when needed, reducing standing administrative access. | Industry practice |
| KRI | Key Risk Indicator; a metric used to provide early warning of increasing risk exposure in a particular area. | ISO 31000 / COSO |
| KRITIS | Kritische Infrastrukturen; Germany's framework for classifying and protecting critical infrastructure under BSI-KritisV. | BSI |
| LEF | Loss Event Frequency; in FAIR, the probable frequency with which a threat agent will inflict harm on an asset within a given timeframe. | FAIR methodology |
| LINDDUN | A privacy threat-modelling framework addressing Linking, Identifying, Non-repudiation, Detecting, Data Disclosure, Unawareness, and Non-compliance. | KU Leuven |
| LLM | Large Language Model; a deep learning model trained on large text datasets that can generate, summarize, and transform natural language. | Industry practice |
| MDM | Mobile Device Management; a solution for managing, monitoring, and securing mobile devices used by employees. | Industry practice |
| Medallion Architecture | A data-pipeline pattern organizing data into Bronze (raw), Silver (cleansed), and Gold (curated) layers for progressive refinement. | Section 15 |
| MFA | Multi-Factor Authentication; an authentication method requiring two or more verification factors to gain access. | NIST 800-63 |
| MLOps | Machine Learning Operations; the set of practices that combines ML, DevOps, and data engineering to deploy and maintain ML systems in production reliably and efficiently. | Industry practice |
| Model Card | A structured document providing transparency about an ML model's intended use, performance characteristics, limitations, and ethical considerations. | Mitchell et al. (2019) / ISO/IEC 12792 |
| mTLS | Mutual Transport Layer Security; a protocol where both client and server authenticate each other using digital certificates. | Industry practice |
| MTTA | Mean Time to Acknowledge; the average elapsed time from alert firing to human acknowledgment. | SRE / Section 16 |
| MTTD | Mean Time to Detect; the average elapsed time from the onset of an incident to its detection by monitoring systems. | SRE / Section 16 |
| MTTR | Mean Time to Restore; the average elapsed time from the start of a service disruption to full service restoration. | SRE / DORA |
| NDCG | Normalized Discounted Cumulative Gain; a metric for evaluating ranking quality in information retrieval and recommendation systems. | Industry practice |
| NIS2 | Network and Information Security Directive 2 (EU 2022/2555); EU directive establishing cybersecurity obligations for essential and important entities. | EU 2022/2555 |
| NSG | Network Security Group; an Azure resource containing security rules that allow or deny inbound/outbound network traffic. | Microsoft Azure |
| OKR | Objectives and Key Results; a goal-setting framework that defines measurable objectives and the key results needed to achieve them. | Industry practice |
| OPA | Open Policy Agent; a general-purpose policy engine that enables unified, context-aware policy enforcement across the stack. | CNCF |
| ORR | Operational Readiness Review; a structured review verifying that a service meets reliability, observability, and operational criteria before production launch. | SRE / Section 16 |
| OSCAL | Open Security Controls Assessment Language; a NIST-developed machine-readable format for expressing security controls, baselines, and assessment results. | NIST OSCAL |
| PDCA | Plan-Do-Check-Act; a four-phase iterative management method used for continuous improvement of processes and products. | ISO management system standards |
| PERT | Program Evaluation and Review Technique; a statistical method using optimistic, most likely, and pessimistic estimates for risk quantification. | Section 5 |
| PI | Program Increment; a fixed timebox (typically 8–12 weeks) during which an Agile Release Train delivers incremental value. | SAFe 6.0 |
| PII | Personally Identifiable Information; any data that could identify a specific individual. | GDPR / NIST |
| PIM | Privileged Identity Management; Azure's just-in-time privileged access management service for time-bounded role elevation. | Microsoft Azure |
| PIR | Post-Incident Review; a structured analysis conducted after an incident to identify root causes, contributing factors, and improvement actions. | SRE / Section 16 |
| POA&M | Plan of Action and Milestones; a document identifying security weaknesses, planned remediation actions, and completion milestones for federal systems. | NIST 800-53 / FedRAMP |
| Policy Gateway | A component within IEA that evaluates AI operations against organizational policies, regulatory requirements, and trust-level constraints before execution. | IEA v2 (Section 8) |
| PQC | Post-Quantum Cryptography; cryptographic algorithms designed to be secure against both quantum and classical computing attacks. | NIST |
| Progressive Adoption | A three-phase maturity model (Startup <20 people, Growth 20–80, Enterprise 80+) with explicit transition triggers governing which SDLC practices are mandatory, recommended, or optional. | Section 4 |
| RAG | Retrieval-Augmented Generation; an AI pattern that enhances LLM responses by retrieving relevant context from a knowledge base before generation. | Industry practice |
| RBAC | Role-Based Access Control; an access control method that assigns permissions to users based on their organizational roles. | NIST |
| RPO | Recovery Point Objective; the maximum acceptable amount of data loss measured in time, defining how far back data must be recoverable. | ISO 22301 / Section 16 |
| RPN | Risk Priority Number; in FMEA, a numerical assessment of risk calculated from severity, occurrence, and detection ratings. | IEC 31010 |
| RTE | Release Train Engineer; the servant leader and coach for an Agile Release Train, facilitating PI execution and removing impediments. | SAFe 6.0 |
| RTO | Recovery Time Objective; the maximum acceptable duration for restoring a service after a disruption. | ISO 22301 / Section 16 |
| SAP (FedRAMP) | Security Assessment Plan; a document describing the 3PAO assessment scope, methodology, and schedule for a FedRAMP assessment. | FedRAMP / NIST |
| SAR | Security Assessment Report; a document containing assessment findings and observations from a FedRAMP security assessment. | FedRAMP / NIST |
| SARIF | Static Analysis Results Interchange Format; a standardized JSON format for the output of static analysis tools. | OASIS |
| SAST | Static Application Security Testing; analysis of source code or binaries to detect security vulnerabilities without executing the application. | OWASP |
| SBOM | Software Bill of Materials; a formal, machine-readable inventory of software components and dependencies, typically in CycloneDX or SPDX format. | NTIA / CycloneDX |
| SCA | Software Composition Analysis; automated identification of open-source components and known vulnerabilities within a codebase. | OWASP |
| SDLC | Software Development Life Cycle; the structured process governing the phases of software creation from planning through maintenance. | Industry practice |
| SIEM | Security Information and Event Management; a system that aggregates and analyzes security event data from across an organization's IT infrastructure. | Industry practice |
| SLI | Service Level Indicator; a quantitative measure of a specific aspect of service quality (e.g., latency, availability, error rate). | SRE / Google |
| SLO | Service Level Objective; a target value or range for a service level measured by an SLI, used to drive reliability decisions and error budgets. | SRE / Google |
| SoA | Statement of Applicability; a document listing all controls from a standard, indicating which are applicable, implemented, and justified. | ISO/IEC 27001 |
| SOAR | Security Orchestration, Automation, and Response; a solution that automates incident response workflows and integrates with security tools. | Industry practice |
| SOC (Security) | Security Operations Center; the centralized function monitoring and responding to security events and incidents. | Industry practice |
| SRE | Site Reliability Engineering; a discipline that applies software engineering principles to infrastructure and operations to create scalable and reliable systems. | SRE / Google |
| SSP | System Security Plan; a document that describes how security controls are implemented within a system's authorization boundary. | FedRAMP / NIST |
| Strategy as Code | The practice of encoding strategy formulation, execution, and feedback as verifiable, executable, and auditable machine-readable artifacts. | Section 2 |
| STRIDE | A threat-modelling framework categorizing threats as Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, and Elevation of Privilege. | Microsoft |
| SWIFT | Structured What-If Technique; a systematic team-based study that uses guided "what if" questions to identify risks. | IEC 31010 |
| TDE | Transparent Data Encryption; a technology for encrypting database data files at rest. | Industry practice |
| TEF | Threat Event Frequency; in FAIR, the probable frequency with which a threat agent contacts an asset. | FAIR methodology |
| TISAX | Trusted Information Security Assessment Exchange; an automotive-industry standard for information security based on ISA 6 (derived from ISO 27001). | ENX Association |
| Toil | Repetitive, manual, automatable, tactical, devoid-of-long-term-value operational work that scales linearly with service growth. | SRE / Google |
| Trunk-Based Development | A source-control branching model where developers merge small, frequent changes directly to the main branch, supported by feature flags and CI. | Section 3 |
| UCL | Unified Control Library; a consolidated library of approximately 300 controls organized in three tiers across 20 domains, mapped to seven compliance frameworks. | Section 6 |
| VDA | Verband der Automobilindustrie; the German Association of the Automotive Industry, which publishes the ISA information security assessment catalog. | VDA |
| VDS | Verity Design System; a token-driven, accessible component library providing UI consistency, WCAG 2.2 AA compliance, and Human-AI interaction patterns. | Section 14 |
| VMO | Value Management Office; the governing body responsible for portfolio-level value stream alignment, investment decisions, and strategic metric reporting. | SAFe 6.0 / Section 7 |
| VPAT | Voluntary Product Accessibility Template; a document that evaluates how accessible a product is according to Section 508 standards. | Section 508 |
| VRA | Vendor Risk Assessment; a structured evaluation of a supplier's security posture and risk profile before and during engagement. | Section 12 |
| WAF | Web Application Firewall; a security solution that monitors, filters, and blocks HTTP/HTTPS traffic to and from a web application. | Industry practice |
| WCAG | Web Content Accessibility Guidelines; W3C guidelines for making web content more accessible to people with disabilities. | W3C |
| WSJF | Weighted Shortest Job First; a prioritization model calculating (Business Value + Time Criticality + Risk Reduction) divided by Job Size using Modified Fibonacci scoring. | SAFe 6.0 / Section 2 |
| Zero Trust | A security model that assumes no implicit trust, requiring continuous verification of every user, device, and network flow regardless of location. | NIST 800-207 |

---

## Appendix B – Normative References

### B.1 ISO/IEC Standards

1. ISO/IEC 27000:2018 – Information security management systems – Overview and vocabulary
2. ISO/IEC 27001:2022 – Information security management systems - Requirements
3. ISO/IEC 27002:2022 - Information security controls
4. ISO/IEC 27005:2022 - Guidance on managing information security risks
5. ISO/IEC 27017:2015 - Code of practice for information security controls based on ISO/IEC 27002 for cloud services
6. ISO/IEC 27018:2019 - Code of practice for protection of personally identifiable information (PII) in public clouds
7. ISO/IEC 27032:2023 - Cybersecurity - Guidelines for Internet security
8. ISO/IEC 27090:2024 - Guidance on addressing security threats to AI systems
9. ISO/IEC 27701:2019 - Extension to ISO 27001 and ISO 27002 for privacy information management
10. ISO 31000:2018 - Risk management - Guidelines
11. ISO/IEC 31010:2019 - Risk management - Risk assessment techniques
12. ISO/IEC 42001:2023 - Artificial intelligence - Management system
13. ISO/IEC 42005:2025 - AI impact assessment
14. ISO/IEC TS 42119-2:2025 - Artificial intelligence - Management system - Guidance for the application of ISO/IEC 42001
15. ISO/IEC 22989:2022 - Artificial intelligence - Concepts and terminology
16. ISO/IEC 23053:2022 - Framework for Artificial Intelligence (AI) systems using Machine Learning (ML)
17. ISO/IEC 23894:2023 - Artificial intelligence - Guidance on risk management
18. ISO/IEC 24027:2021 - Bias in AI systems and AI-aided decision making
19. ISO/IEC 24368:2022 - AI - Overview of ethical and societal concerns
20. ISO/IEC 24372:2024 - AI - Quality considerations for AI and ML
21. ISO/IEC 5338:2023 - AI system lifecycle processes
22. ISO/IEC 5339:2024 - AI - Guidance for AI applications
23. ISO/IEC 5392:2024 - AI - Reference architecture
24. ISO/IEC 12207:2017 - Systems and software engineering - Software lifecycle processes
25. ISO/IEC 12792:2024 - AI - Transparency taxonomy of AI systems
26. ISO/IEC 15288:2023 - Systems and software engineering - System lifecycle processes
27. ISO/IEC 25010:2023 - Systems and software engineering - Product quality model
28. ISO/IEC 25019:2023 - Systems and software engineering - Quality-in-use model
29. ISO/IEC 20226:2024 - AI - Analysis of trustworthiness (referenced in standards dependency matrices)
30. ISO/IEC 29110 (series) - Systems and software engineering - Lifecycle profiles for very small entities
31. ISO/IEC 33001:2015 - Process assessment - Concepts and terminology
32. ISO/IEC 33002:2015 - Process assessment - Requirements for performing process assessment
33. ISO/IEC 33004:2015 - Process assessment - Requirements for process reference, process assessment, and maturity models
34. ISO/IEC 33017:2024 - Process assessment model for software lifecycle processes
35. ISO/IEC 33020:2019 - Process measurement framework for assessment of process capability
36. ISO/IEC 33030:2024 - Process assessment - Process capability framework
37. ISO/IEC 33060:2024 - Process assessment model for system lifecycle processes
38. ISO/IEC 33061:2024 - Process assessment model for AI management
39. ISO/IEC 34504:2024 - AI - Overview of trustworthiness requirements
40. ISO/IEC 38507:2022 - Governance implications of the use of AI by organizations
41. ISO 22301:2019 - Security and resilience - Business continuity management systems

### B.2 Industry Frameworks and Standards

1.  NIST Cybersecurity Framework (CSF) 2.0 - Framework for Improving Critical Infrastructure Cybersecurity
2.  NIST SP 800-53 Rev. 5 - Security and Privacy Controls for Information Systems and Organizations
3.  NIST SP 800-60 Vol. 1 Rev. 1 - Guide for Mapping Types of Information and Information Systems to Security Categories
4.  NIST SP 800-88 Rev. 1 - Guidelines for Media Sanitization
5.  NIST SP 800-137 - Information Security Continuous Monitoring (ISCM) for Federal Information Systems and Organizations
6.  NIST SP 800-171 Rev. 3 - Protecting Controlled Unclassified Information in Nonfederal Systems and Organizations
7.  NIST SP 800-207 - Zero Trust Architecture
8.  NIST OSCAL - Open Security Controls Assessment Language
9.  FedRAMP 20x - Federal Risk and Authorization Management Program (updated framework)
10. FIPS 140-2 - Security Requirements for Cryptographic Modules
11. FIPS 199 - Standards for Security Categorization of Federal Information and Information Systems
12. SOC 2 Type II - Service Organization Control 2 (Trust Services Criteria CC1-CC9)
13. TISAX ISA 6.0 - Trusted Information Security Assessment Exchange, Information Security Assessment catalog version 6
14. BSI C5:2020 - Cloud Computing Compliance Criteria Catalogue
15. SAFe 6.0 - Scaled Agile Framework
16. OWASP Top 10 - Open Worldwide Application Security Project Top Ten Web Application Security Risks
17. OWASP ASVS - Application Security Verification Standard (referenced in security testing tables)
18. CIS Benchmarks - Center for Internet Security configuration benchmarks for cloud and operating systems
19. COSO ERM - Committee of Sponsoring Organizations of the Treadway Commission Enterprise Risk Management framework
20. FAIR - Factor Analysis of Information Risk quantitative risk methodology
21. CycloneDX - OWASP standard for Software and AI Bills of Materials
22. SPDX - Software Package Data Exchange standard for SBOMs
23. DORA / Accelerate - DevOps Research and Assessment metrics and methodology

### B.3 Regulations and Directives

65. EU AI Act - Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence
66. NIS2 Directive - Directive (EU) 2022/2555 on measures for a high common level of cybersecurity across the Union
67. GDPR - Regulation (EU) 2016/679 General Data Protection Regulation
68. EAA - Directive (EU) 2019/882 European Accessibility Act
69. NIS2UmsuCG - German transposition of NIS2 Directive (NIS-2-Umsetzungs- und Cybersicherheitsstarkungsgesetz)
70. Wbni - Dutch Wet beveiliging netwerk- en informatiesystemen (amendments for NIS2 transposition)
71. BDSG - German Bundesdatenschutzgesetz (Federal Data Protection Act)
72. CCPA/CPRA - California Consumer Privacy Act as amended by the California Privacy Rights Act
73. DORA - Regulation (EU) 2022/2554 Digital Operational Resilience Act (financial-sector entities; included for completeness and future applicability)
74. Section 508 of the Rehabilitation Act (Revised 2017) - ICT accessibility standards for US federal procurement (29 U.S.C. Sec. 794d)

### B.4 Accessibility Standards

75. EN 301 549 V3.2.1 (2021) - Accessibility requirements for ICT products and services (harmonized European standard)
76. W3C Web Content Accessibility Guidelines (WCAG) 2.2 - Level AA conformance target

### B.5 Other References

77. Mitchell, M. et al. (2019) - "Model Cards for Model Reporting" (FAT* Conference)
78. Google SRE Books - *Site Reliability Engineering* and *The Site Reliability Workbook*
79. Forsgren, N., Humble, J., Kim, G. (2018) - *Accelerate: The Science of Lean Software and DevOps*
80. The Principles of Chaos Engineering - chaos engineering experimentation methodology
81. Microsoft Azure Cloud Adoption Framework (CAF) - Enterprise-Scale landing zone architecture
82. FinOps Foundation Framework - Cloud financial management principles and practices

---

## Appendix C – Document History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | 2025-06-01 | SDLC Working Group | Initial release covering Sections 1-17 and entity addenda. |
| 2.0 | 2026-02-17 | SDLC Working Group | Major revision: Strategy as Code (Section 2), IEA v2 with 7-level trust scale (Section 8), AI Management System per ISO 42001 (Section 11), Unified Control Library consolidation (Section 6), DORA Elite+ metric targets (Section 17), expanded EU/US entity addenda (Section 18). |

---

## Appendix D – Approval Signatures

| Role | Name | Signature | Date |
|---|---|---|---|
| Chief Technology Officer (CTO) | | | |
| Chief Information Security Officer (CISO) | | | |
| Head of Engineering | | | |
| Data Protection Officer (DPO) | | | |
| Quality Manager | | | |

---
