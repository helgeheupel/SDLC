# Features Research: ISO 27001 + ISO 42001 Dual Certification Agent System

> **Research type**: Features dimension for ISMS/AIMS dual certification agent system
> **Milestone**: Greenfield — what features and artifacts are required, what differentiates AI-agent delivery, what to deliberately defer
> **Downstream consumer**: Requirements definition (PROJECT.md active requirements)
> **Date**: 2026-02-18

---

## Executive Summary

An ISO 27001 + ISO 42001 dual certification system must produce ~45-55 mandatory artifacts across clauses 4-10 of both standards, plus control-specific evidence for 93 Annex A controls (27001) and ~39 controls across 9 domains (42001 Annex A). The AI-agent approach differentiates on three axes: (1) continuous artifact generation vs. periodic document updates, (2) traceability chains linking every artifact to its producing agent, review human, and evidence source, and (3) cross-standard consistency enforcement that humans cannot practically maintain across 130+ controls.

This document categorizes every feature into **Table Stakes** (mandatory for certification — without these, no certificate), **Differentiators** (competitive advantage of the AI-agent approach), and **Anti-Features** (things to deliberately NOT build at Startup phase).

---

## 1. Table Stakes Features

These are non-negotiable for ISO 27001:2022 + ISO 42001:2023 certification. An auditor will look for every one of these. Failure to produce any single item is a major nonconformity.

### 1.1 ISMS/AIMS Foundation Documents (Clauses 4-6)

| ID | Feature / Artifact | Standard Clause | Producing Agent | Complexity | Dependencies |
|----|-------------------|-----------------|-----------------|------------|--------------|
| TS-01 | **Context of the Organization** — documented internal/external issues, interested parties, their requirements, ISMS/AIMS scope | ISO 27001 cl.4.1-4.3, ISO 42001 cl.4.1-4.4 | CISO Agent + Product/Strategy Lead | Medium | None — foundational |
| TS-02 | **ISMS Scope Statement** — boundaries, applicability, interfaces, exclusions with justification | ISO 27001 cl.4.3 | CISO Agent | Low | TS-01 |
| TS-03 | **AIMS Scope Statement** — AI system boundaries, AI lifecycle stages covered, deployment contexts | ISO 42001 cl.4.3 | Head of AI Science Agent | Low | TS-01 |
| TS-04 | **Information Security Policy** — top-level IS policy, signed by top management, communicated to all personnel | ISO 27001 cl.5.2 | CISO Agent | Low | TS-02 |
| TS-05 | **AI Policy** — top-level AI management policy, principles for responsible AI development and use | ISO 42001 cl.5.2 | CISO Agent + Head of AI Science | Medium | TS-03 |
| TS-06 | **IS Objectives & Planning** — measurable security objectives with plans to achieve them | ISO 27001 cl.6.2 | CISO Agent | Medium | TS-04 |
| TS-07 | **AI Objectives & Planning** — measurable AI management objectives aligned with AI policy | ISO 42001 cl.6.2 | Head of AI Science Agent | Medium | TS-05 |
| TS-08 | **Leadership Commitment Evidence** — documented top management commitment, management review records | ISO 27001 cl.5.1, ISO 42001 cl.5.1 | Product/Strategy Lead | Low | TS-04, TS-05 |
| TS-09 | **Roles, Responsibilities & Authorities** — documented assignment of all ISMS/AIMS roles | ISO 27001 cl.5.3, ISO 42001 cl.5.3 | CISO Agent | Low | TS-08 |

### 1.2 Risk Management (Clause 6 + Clause 8)

| ID | Feature / Artifact | Standard Clause | Producing Agent | Complexity | Dependencies |
|----|-------------------|-----------------|-----------------|------------|--------------|
| TS-10 | **IS Risk Assessment Methodology** — criteria for risk acceptance, assessment approach, likelihood/impact scales, risk ownership | ISO 27001 cl.6.1.2 | CISO Agent | High | TS-02 |
| TS-11 | **IS Risk Register** — identified risks, risk owners, likelihood, impact, current controls, residual risk | ISO 27001 cl.6.1.2, cl.8.2 | CISO Agent | High | TS-10 |
| TS-12 | **IS Risk Treatment Plan** — selected treatment options, responsible persons, timelines, status | ISO 27001 cl.6.1.3, cl.8.3 | CISO Agent | High | TS-11, TS-15 |
| TS-13 | **AI Risk Assessment** — AI-specific risks including bias, fairness, transparency, safety, autonomy risks | ISO 42001 cl.6.1.2, cl.8.2 | Head of AI Science + CISO Agent | High | TS-03, TS-10 |
| TS-14 | **AI Impact Assessment Process** — methodology for assessing impacts of AI systems on individuals, groups, society | ISO 42001 cl.6.1.4 | Head of AI Science Agent | High | TS-13 |
| TS-15 | **Statement of Applicability (SoA)** — all 93 ISO 27001 Annex A controls with justification for inclusion/exclusion, implementation status | ISO 27001 cl.6.1.3d | CISO Agent | Very High | TS-11 |
| TS-16 | **AI Controls Applicability** — ISO 42001 Annex A controls (A.2-A.10) applicability determination and implementation status | ISO 42001 cl.6.1.3 | Head of AI Science + CISO Agent | High | TS-13 |

### 1.3 Operational Controls & Procedures (Clauses 7-8)

| ID | Feature / Artifact | Standard Clause | Producing Agent | Complexity | Dependencies |
|----|-------------------|-----------------|-----------------|------------|--------------|
| TS-17 | **Competence & Awareness Records** — evidence of competence for ISMS/AIMS roles, training records, awareness program | ISO 27001 cl.7.2-7.3, ISO 42001 cl.7.2-7.3 | CISO Agent + Product/Strategy Lead | Medium | TS-09 |
| TS-18 | **Document Control Procedure** — how documents are created, reviewed, approved, distributed, stored, version-controlled | ISO 27001 cl.7.5, ISO 42001 cl.7.5 | CISO Agent | Medium | None |
| TS-19 | **Communication Procedure** — what, when, with whom, and how to communicate about ISMS/AIMS | ISO 27001 cl.7.4, ISO 42001 cl.7.4 | CISO Agent | Low | TS-09 |
| TS-20 | **Operational Planning & Control** — processes to meet IS/AI requirements, criteria for processes, control of planned changes | ISO 27001 cl.8.1, ISO 42001 cl.8.1 | Head of Platform/SRE + CISO Agent | Medium | TS-06, TS-07 |
| TS-21 | **Incident Management Procedure** — detection, reporting, assessment, response, lessons learned for IS incidents | ISO 27001 A.5.24-A.5.28 | Head of Platform/SRE + CISO Agent | High | TS-15 |
| TS-22 | **Business Continuity Plan (BCP) & Disaster Recovery (DR)** — BC policy, BIA, BC plans, DR procedures, testing schedule | ISO 27001 A.5.29-A.5.30 | Head of Platform/SRE Agent | High | TS-11 |
| TS-23 | **Access Control Policy & Procedures** — user access management, access rights provisioning, privileged access, review cycles | ISO 27001 A.5.15-A.5.18, A.8.2-A.8.5 | CISO Agent + AppSec Agent | Medium | TS-15 |
| TS-24 | **Change Management Procedure** — controlled change management for systems, networks, configurations | ISO 27001 A.8.32 | CTO Agent + Head of Platform/SRE | Medium | TS-20 |
| TS-25 | **Supplier/Third-Party Security Policy** — IS requirements for supplier relationships, supply chain security | ISO 27001 A.5.19-A.5.23 | CISO Agent + AppSec Agent | Medium | TS-04 |
| TS-26 | **Cryptography Policy** — policy on use of cryptographic controls, key management | ISO 27001 A.8.24 | CTO Agent + CISO Agent | Medium | TS-15 |
| TS-27 | **Physical Security Controls** — physical perimeters, entry controls, securing offices, clear desk/screen | ISO 27001 A.7.1-A.7.14 | CISO Agent | Low | TS-15 |
| TS-28 | **HR Security Procedures** — screening, terms of employment, termination/change responsibilities, awareness | ISO 27001 A.6.1-A.6.8 | CISO Agent + Product/Strategy Lead | Low | TS-04 |

### 1.4 ISO 42001 AI-Specific Artifacts (Annex A Domains)

| ID | Feature / Artifact | Standard Domain | Producing Agent | Complexity | Dependencies |
|----|-------------------|-----------------|-----------------|------------|--------------|
| TS-29 | **AI System Inventory/Registry** — catalogue of all AI systems with purpose, lifecycle stage, risk classification, data sources | ISO 42001 A.2 (AI System Life Cycle) | Head of AI Science + CTO Agent | Medium | TS-03 |
| TS-30 | **AI System Design & Development Controls** — documented AI development lifecycle, design specifications, data requirements | ISO 42001 A.3 (Data for AI Systems) | Head of AI Science + CTO Agent | High | TS-29 |
| TS-31 | **Data Governance for AI** — data quality requirements, provenance tracking, bias assessment in training data, data lifecycle management | ISO 42001 A.3, A.4 | Head of AI Science Agent | High | TS-29, TS-30 |
| TS-32 | **AI Transparency & Explainability** — documented approach to transparency, explainability methods per AI system, user notification | ISO 42001 A.6 (Transparency & Explainability) | Head of AI Science Agent | Medium | TS-29 |
| TS-33 | **AI System Monitoring & Logging** — performance monitoring, drift detection approach, audit logging for AI decisions | ISO 42001 A.7 (AI System Operation) | Head of Platform/SRE + Head of AI Science | Medium | TS-29, TS-20 |
| TS-34 | **Human Oversight Controls** — defined levels of human oversight per AI system, override mechanisms, escalation procedures | ISO 42001 A.8 (Human Oversight) | CISO Agent + Head of AI Science | Medium | TS-29, TS-14 |
| TS-35 | **AI Ethics & Responsible AI Framework** — ethical principles, bias mitigation, fairness criteria, societal impact considerations | ISO 42001 A.5 (Responsible AI), A.9 (Third-Party & Societal) | Head of AI Science + CISO Agent | Medium | TS-05 |
| TS-36 | **AI Third-Party Management** — controls for third-party AI components, model providers, data providers | ISO 42001 A.10 (Third-Party Relationships) | CISO Agent + AppSec Agent | Medium | TS-25, TS-29 |

### 1.5 Performance Evaluation & Improvement (Clauses 9-10)

| ID | Feature / Artifact | Standard Clause | Producing Agent | Complexity | Dependencies |
|----|-------------------|-----------------|-----------------|------------|--------------|
| TS-37 | **Internal Audit Program** — audit plan, audit criteria, scope, frequency, methods, auditor independence, audit reports | ISO 27001 cl.9.2, ISO 42001 cl.9.2 | CISO Agent | High | All TS-* items |
| TS-38 | **Management Review Process & Records** — inputs, outputs, decisions, actions, frequency (at least annually) | ISO 27001 cl.9.3, ISO 42001 cl.9.3 | Product/Strategy Lead + CISO Agent | Medium | TS-37 |
| TS-39 | **Monitoring, Measurement, Analysis & Evaluation** — what to monitor, methods, when, who analyzes, who evaluates | ISO 27001 cl.9.1, ISO 42001 cl.9.1 | CISO Agent + Head of Platform/SRE | Medium | TS-06, TS-07 |
| TS-40 | **Nonconformity & Corrective Action Procedure** — process for identifying, documenting, correcting, and preventing recurrence | ISO 27001 cl.10.1-10.2, ISO 42001 cl.10.1-10.2 | CISO Agent | Medium | TS-37 |
| TS-41 | **Continual Improvement Evidence** — documented improvements to ISMS/AIMS suitability, adequacy, effectiveness | ISO 27001 cl.10.2, ISO 42001 cl.10.2 | CISO Agent + All Agents | Low | TS-40 |

### 1.6 Technical Security Controls (Annex A 27001:2022 — Selected Critical)

| ID | Feature / Artifact | Control Reference | Producing Agent | Complexity | Dependencies |
|----|-------------------|-----------------|-----------------|------------|--------------|
| TS-42 | **Threat Intelligence Process** — sources, collection, analysis, dissemination | A.5.7 | CISO Agent + AppSec Agent | Medium | TS-04 |
| TS-43 | **Asset Inventory & Classification** — information assets, owners, classification scheme, labeling | A.5.9-A.5.13 | CISO Agent + CTO Agent | Medium | TS-02 |
| TS-44 | **Secure Development Lifecycle (SDLC) Policy** — secure coding standards, code review, testing requirements | A.8.25-A.8.31 | AppSec Agent + CTO Agent | High | TS-15 |
| TS-45 | **Vulnerability Management Process** — vulnerability identification, assessment, remediation, scanning schedule | A.8.8 | AppSec Agent | High | TS-43 |
| TS-46 | **Logging & Monitoring Policy** — events to log, log protection, retention, analysis, alerting | A.8.15-A.8.16 | Head of Platform/SRE Agent | Medium | TS-20 |
| TS-47 | **Network Security Controls** — segmentation, filtering, secure services, wireless security | A.8.20-A.8.23 | Head of Platform/SRE + CTO Agent | Medium | TS-15 |
| TS-48 | **Data Protection & Privacy Controls** — data masking, DLP, privacy by design evidence | A.8.10-A.8.12, A.5.34 | CISO Agent + AppSec Agent | Medium | TS-15 |

### 1.7 TISAX Maintenance Artifacts

| ID | Feature / Artifact | VDA ISA Domain | Producing Agent | Complexity | Dependencies |
|----|-------------------|----------------|-----------------|------------|--------------|
| TS-49 | **VDA ISA 6 Control Evidence Mapping** — evidence mapped to VDA ISA 6 control objectives, Level 3 maturity documentation | VDA ISA 6 all applicable | CISO Agent | High | TS-15, TS-11 |
| TS-50 | **Prototype Protection Documentation** — classification and handling of prototype data, physical/logical controls | VDA ISA Prototype Protection | CISO Agent | Medium | TS-49 |

---

## 2. Differentiator Features

These are not required for certification but represent the competitive advantage of the AI-agent-powered approach. These are what make the system worth building vs. hiring consultants.

### 2.1 Agent-Powered Artifact Generation

| ID | Feature | Producing Agent(s) | Complexity | Dependencies | Value Proposition |
|----|---------|-------------------|------------|--------------|-------------------|
| DF-01 | **Continuous Artifact Generation Pipeline** — agents produce draft artifacts on demand, not in periodic document sprints; any artifact can be regenerated with current context | All 6 Agents | High | All TS foundation docs | 10x speed: what takes consultants 2-4 weeks per document takes agents minutes per draft |
| DF-02 | **Cross-Standard Consistency Engine** — automated detection of inconsistencies between ISO 27001 SoA, ISO 42001 Annex A mapping, TISAX VDA ISA evidence, and inter-document references | CISO Agent | Very High | TS-15, TS-16, TS-49 | Humans cannot practically maintain consistency across 130+ controls and 50+ documents; agents can enforce referential integrity |
| DF-03 | **Evidence Chain Traceability** — every artifact tagged with: producing agent, timestamp, human reviewer, sign-off status, evidence sources cited, version lineage | All 6 Agents | Medium | TS-18 | Auditors love traceability; most organizations cannot produce it; agents create it by default |
| DF-04 | **Risk-Control Linkage Matrix (Automated)** — bidirectional mapping from every risk to its treating controls and from every control to the risks it addresses, auto-maintained as risks/controls change | CISO Agent + Head of AI Science | High | TS-11, TS-13, TS-15, TS-16 | Most organizations maintain this as a manual spreadsheet that drifts; agent-maintained matrix is always current |
| DF-05 | **Gap Analysis on Demand** — agent can analyze current artifact set against either standard's requirements and produce a gap report with specific remediation actions | CISO Agent | Medium | All TS items | Replaces the Stage 1 audit pre-check that consultancies charge EUR 15-30K for |
| DF-06 | **Policy-to-Procedure Cascade** — when a top-level policy changes, agents identify all downstream procedures, work instructions, and evidence that need updating | CISO Agent + All Agents | High | TS-04, TS-05, TS-18 | Change propagation is where most ISMS fail in practice; agents eliminate the "updated the policy but forgot 3 procedures" problem |

### 2.2 Agent Orchestration & Handoff

| ID | Feature | Producing Agent(s) | Complexity | Dependencies | Value Proposition |
|----|---------|-------------------|------------|--------------|-------------------|
| DF-07 | **CEO Orchestration Interface** — single human (CEO) can task any of 6 agents, agents produce artifacts, CEO reviews and signs off; clear handoff protocol between agents | All 6 Agents | High | TS-09 | 5-person team operates at 30-person governance capacity; CEO steers agents like a leadership team |
| DF-08 | **Agent-to-Agent Handoff Protocol** — defined interfaces for when one agent's output is another agent's input (e.g., CTO's ADR feeds CISO's risk assessment, AppSec's threat model feeds CISO's risk register) | All 6 Agents | High | DF-07 | Eliminates the "silo" problem in traditional organizations where security, architecture, and operations don't share context |
| DF-09 | **Human Review & Sign-Off Logging** — structured log of which human reviewed which artifact, when, what they approved/rejected/modified, creating an audit trail | All 6 Agents | Medium | TS-18, DF-03 | Satisfies ISO 27001 cl.5.1 (leadership commitment) and ISO 42001 A.8 (human oversight) simultaneously and automatically |
| DF-10 | **Progressive Scaling Roadmap** — artifacts produced at Startup weight with documented upgrade paths to Growth and Enterprise maturity levels (aligned to SDLC-Growth-v2) | Product/Strategy Lead | Medium | None | Built-in maturity model means the ISMS/AIMS grows with the company without needing to restart |

### 2.3 AI-Specific Differentiators

| ID | Feature | Producing Agent(s) | Complexity | Dependencies | Value Proposition |
|----|---------|-------------------|------------|--------------|-------------------|
| DF-11 | **AI System Self-Governance Documentation** — the 6 Claude Code agents themselves are documented as AI systems under ISO 42001, eating our own cooking; AI impact assessment of the agents themselves | Head of AI Science + CISO Agent | High | TS-29, TS-14, TS-34 | Demonstrates to auditors that we practice what we preach; the agents that produce AI governance artifacts are themselves governed |
| DF-12 | **Automated Control Evidence Collection** — agents pull evidence from actual systems (Git commits, CI/CD logs, access control configs, monitoring dashboards) and map to control requirements | Head of Platform/SRE + AppSec Agent | Very High | TS-15, TS-16, TS-46 | Most organizations scramble to collect evidence before audits; agents maintain evidence continuously |
| DF-13 | **NIS2 Readiness Overlay** — since EU NIS2 directive has significant overlap with ISO 27001, agent produces a NIS2 gap analysis alongside certification artifacts | CISO Agent | Medium | TS-15, TS-11 | Two-for-one regulatory compliance; NIS2 is mandatory for many EU organizations by Oct 2024 enforcement |
| DF-14 | **EU AI Act Alignment Mapping** — ISO 42001 Annex A controls mapped to EU AI Act requirements (risk classification, conformity assessment, transparency obligations) | Head of AI Science + CISO Agent | High | TS-16, TS-29 | ISO 42001 was designed to support EU AI Act compliance; making this explicit is high value for EU-based organizations |

### 2.4 Security Engineering Differentiators

| ID | Feature | Producing Agent(s) | Complexity | Dependencies | Value Proposition |
|----|---------|-------------------|------------|--------------|-------------------|
| DF-15 | **Threat Model as Code** — STRIDE/DREAD threat models generated from architecture diagrams and maintained as versioned artifacts, linked to risk register | AppSec Agent + CTO Agent | High | TS-44, TS-11 | Traditional threat modeling is a periodic workshop; agent-maintained threat models update with every architecture change |
| DF-16 | **SBOM Generation & Supply Chain Attestation** — automated SBOM generation, dependency scanning, SLSA provenance, linked to supplier management controls | AppSec Agent | High | TS-25, TS-45 | Maps directly to ISO 27001 A.5.19-A.5.23 (supplier security) with machine-verifiable evidence |
| DF-17 | **Security Architecture Decision Records (SecADRs)** — security-relevant ADRs that link architectural decisions to risk treatment and control implementation | CTO Agent + CISO Agent | Medium | TS-44, DF-15 | Creates the traceability auditors want between "why did you choose this architecture" and "how does it address these risks" |

---

## 3. Anti-Features (Deliberately NOT Built at Startup Phase)

These are things that seem useful but should be explicitly deferred. Building them now would consume capacity needed for certification readiness.

| ID | Anti-Feature | Why NOT Now | When to Revisit | Risk of Building Now |
|----|-------------|-------------|-----------------|---------------------|
| AF-01 | **GRC Platform / Tooling** — dedicated GRC software (Vanta, Drata, OneTrust, etc.) | 5-person team doesn't need a platform; Git + structured Markdown + agent pipeline is sufficient; platform ROI appears at 20+ people | Growth phase (EUR 10M+ ARR) | EUR 15-50K/year spend for software that agents make partially redundant; vendor lock-in on artifact format |
| AF-02 | **Automated Audit Scheduling & Tracking System** — calendaring, automated reminders, auditor assignment workflows | Manual scheduling works fine at 5 people; internal audit is 1-2x/year; management review is 1x/year minimum | Growth phase | Over-engineering a problem that doesn't exist yet |
| AF-03 | **Real-Time Compliance Dashboard** — live dashboard showing control implementation status, risk heat maps, evidence freshness | Attractive demo but not certification requirement; agents can produce status reports on demand | Growth phase when multiple teams need visibility | Significant frontend development effort that doesn't produce audit artifacts |
| AF-04 | **SOC 2 Type II Artifacts** — SOC 2 trust service criteria evidence, Type II observation period documentation | No US SaaS customer requiring it; overlap with ISO 27001 is ~60% but the delta is real effort | When US customer pipeline demands it | Dilutes focus from ISO 27001 + 42001 timeline |
| AF-05 | **FedRAMP Authorization Package** — SSP, POA&M, continuous monitoring per NIST 800-53 | No US federal customer; massive effort (300+ controls); fundamentally different from ISO standards | When US federal pipeline is active | 6-18 month effort that could consume entire team |
| AF-06 | **Multi-Tenant Governance** — separate ISMS scopes for different customers/products | Single scope covering HH Group is sufficient; multi-tenancy is Enterprise complexity | Enterprise phase (EUR 50M+ ARR) | Scope creep that confuses auditors; simple scope is faster to certify |
| AF-07 | **Automated Penetration Testing Pipeline** — fully automated pentesting integrated into CI/CD | Manual pentest by the IT Pentester/Super Admin consultant is sufficient and more thorough; DAST scanning covers the automated portion | Growth phase | False sense of security; automated pentesting finds different things than manual |
| AF-08 | **Full SDLC-Growth-v2 Governance Implementation** — 5 boards, dual ARTs, all 18 sections at Enterprise weight | Explicitly out of scope per PROJECT.md; Startup overlay is the plan | Growth phase as documented in SDLC-Growth-v2 | "Drown in governance friction before ARR justifies it" (CTO/CISO assessment) |
| AF-09 | **AI Model Training Pipeline** — infrastructure for training/fine-tuning models | Using Claude Code API (third-party AI); not training own models at Startup phase | If/when proprietary model development begins | Scope expansion into AI engineering that ISO 42001 doesn't require |
| AF-10 | **Certification Body Selection & Engagement Automation** — automated RFP generation, CB comparison matrices | Manual process for selecting certification body; 1-time decision | Never — this is a human judgment call | Automation of something that happens once |

---

## 4. Feature Dependency Map

```
FOUNDATION LAYER (Must be completed first)
  TS-01 Context of Organization
    |
    +---> TS-02 ISMS Scope ---> TS-04 IS Policy ---> TS-06 IS Objectives
    |                                |
    +---> TS-03 AIMS Scope ---> TS-05 AI Policy ---> TS-07 AI Objectives
    |
    TS-08 Leadership Commitment
    TS-09 Roles & Responsibilities
    TS-18 Document Control

RISK LAYER (Requires Foundation)
    TS-10 IS Risk Methodology
      |
      +--> TS-11 IS Risk Register
      |      |
      |      +--> TS-15 Statement of Applicability (SoA) [CRITICAL PATH]
      |      |      |
      |      |      +--> ALL Annex A control implementations (TS-21 through TS-48)
      |      |
      |      +--> TS-12 Risk Treatment Plan
      |
    TS-13 AI Risk Assessment
      |
      +--> TS-14 AI Impact Assessment
      +--> TS-16 AI Controls Applicability

AI SYSTEM LAYER (Requires Risk + Foundation)
    TS-29 AI System Registry
      |
      +--> TS-30 AI Development Controls
      +--> TS-31 Data Governance
      +--> TS-32 Transparency & Explainability
      +--> TS-33 AI Monitoring
      +--> TS-34 Human Oversight
      +--> TS-35 Ethics Framework
      +--> TS-36 AI Third-Party Management

OPERATIONAL LAYER (Requires Risk + Control Selections)
    TS-20 Operational Planning
      |
      +--> TS-21 Incident Management
      +--> TS-22 BCP/DR
      +--> TS-23 Access Control
      +--> TS-24 Change Management
      +--> TS-44 Secure SDLC
      +--> TS-45 Vulnerability Management
      +--> TS-46 Logging & Monitoring

EVALUATION LAYER (Requires Everything Above)
    TS-37 Internal Audit Program
      |
      +--> TS-38 Management Review
      +--> TS-39 Monitoring & Measurement
      +--> TS-40 Nonconformity & Corrective Action
      +--> TS-41 Continual Improvement

DIFFERENTIATOR LAYER (Can be built in parallel once Foundation exists)
    DF-01 through DF-17 (all require at least Foundation + Risk layers)
```

---

## 5. Agent Production Matrix

Each agent's complete artifact portfolio — what they produce, what they consume from other agents, and the approval flow.

### 5.1 CISO Agent (Security + EU Compliance + AI Governance)

**Primary producer of**: TS-02, TS-04, TS-06, TS-09, TS-10, TS-11, TS-12, TS-15, TS-17, TS-18, TS-19, TS-21 (co), TS-23, TS-25, TS-26 (co), TS-27, TS-28, TS-34 (co), TS-37, TS-38 (co), TS-39 (co), TS-40, TS-41, TS-42, TS-43 (co), TS-48, TS-49, TS-50
**Co-producer of**: TS-01, TS-05, TS-13, TS-16, TS-20, TS-35, TS-36
**Consumes from**: CTO Agent (ADRs, architecture diagrams), AppSec Agent (threat models, vulnerability reports), Head of AI Science (AI system registry, impact assessments), Head of Platform/SRE (incident data, monitoring configs)
**Differentiators owned**: DF-02, DF-04 (co), DF-05, DF-06, DF-09 (co), DF-13, DF-14 (co)
**Approval authority**: CEO (for top-level policies), CEO + CTO (for technical controls)
**Artifact count**: ~25 primary, ~10 co-produced

### 5.2 CTO Agent (Architecture + AI Engineering)

**Primary producer of**: TS-24 (co), TS-26 (co), TS-47 (co)
**Co-producer of**: TS-01, TS-20, TS-29, TS-30, TS-43, TS-44
**Consumes from**: CISO Agent (IS policy, risk register, SoA), AppSec Agent (threat models, SAST results), Head of Platform/SRE (SLO data, infrastructure state)
**Differentiators owned**: DF-15 (co), DF-17
**Approval authority**: CEO
**Key output**: Architecture Decision Records (ADRs) that feed into risk assessments and control justifications

### 5.3 Head of AI Science Agent

**Primary producer of**: TS-03, TS-07, TS-29, TS-30, TS-31, TS-32, TS-33 (co), TS-35 (co)
**Co-producer of**: TS-05, TS-13, TS-14, TS-16, TS-34
**Consumes from**: CISO Agent (AI policy, risk methodology), CTO Agent (AI system architecture), Head of Platform/SRE (monitoring data)
**Differentiators owned**: DF-11, DF-14 (co)
**Approval authority**: CEO + CISO Agent (for AI risk classifications)
**Key output**: AI System Registry (TS-29) is the foundational document for all ISO 42001 Annex A controls

### 5.4 Head of Platform/SRE Agent

**Primary producer of**: TS-22, TS-46, TS-47 (co)
**Co-producer of**: TS-20, TS-21, TS-24, TS-33, TS-39
**Consumes from**: CISO Agent (BCP requirements, logging policy, SoA control requirements), CTO Agent (architecture decisions, infrastructure design)
**Differentiators owned**: DF-12 (co)
**Approval authority**: CEO + CISO Agent
**Key output**: BCP/DR plans, SLO frameworks, monitoring and logging configurations that serve as control evidence

### 5.5 Product/Strategy Lead Agent

**Primary producer of**: TS-08, TS-38 (co)
**Co-producer of**: TS-01, TS-17, TS-28
**Consumes from**: All agents (for management review inputs), CISO Agent (risk posture, compliance status)
**Differentiators owned**: DF-07 (co), DF-10
**Approval authority**: CEO
**Key output**: Management review records, strategic alignment of ISMS/AIMS with business objectives, OKR frameworks that include security/AI governance objectives

### 5.6 Product Security Engineering (AppSec) Agent

**Primary producer of**: TS-44 (co), TS-45
**Co-producer of**: TS-23, TS-25, TS-36, TS-42, TS-48
**Consumes from**: CTO Agent (architecture, code repositories, deployment pipelines), CISO Agent (vulnerability management policy, supplier requirements), Head of AI Science (AI system data flows)
**Differentiators owned**: DF-15 (co), DF-16
**Approval authority**: CEO + CISO Agent
**Key output**: Threat models, SAST/DAST configurations, SBOM, supply chain security attestations — these are the technical evidence that proves operational security controls work

---

## 6. Shared Controls: ISO 27001 + ISO 42001 Overlap

The dual certification creates efficiency opportunities. These areas overlap significantly and should be produced once and mapped to both standards.

| Shared Domain | ISO 27001 Reference | ISO 42001 Reference | Producing Agent | Notes |
|--------------|--------------------|--------------------|-----------------|-------|
| Risk management methodology | cl.6.1 | cl.6.1 | CISO Agent | Single methodology, AI-specific risk criteria added as extension |
| Document control | cl.7.5 | cl.7.5 | CISO Agent | Identical requirement — one procedure covers both |
| Internal audit | cl.9.2 | cl.9.2 | CISO Agent | Single audit program with combined checklist |
| Management review | cl.9.3 | cl.9.3 | Product/Strategy Lead | Single review meeting covering both scopes |
| Competence & awareness | cl.7.2-7.3 | cl.7.2-7.3 | CISO Agent | One training program, AI-specific modules added |
| Nonconformity & corrective action | cl.10 | cl.10 | CISO Agent | Single process |
| Supplier management | A.5.19-A.5.23 | A.10 | CISO Agent + AppSec | Supplier security assessment extended with AI supplier criteria |
| Roles & responsibilities | cl.5.3 | cl.5.3 | CISO Agent | Single RACI matrix covering both ISMS and AIMS |
| Incident management | A.5.24-A.5.28 | A.7 (operations) | Head of Platform/SRE | IS incident process extended with AI incident classification |
| Monitoring & logging | A.8.15-A.8.16 | A.7 | Head of Platform/SRE | Single monitoring framework, AI-specific metrics added |

**Efficiency estimate**: ~40% of ISO 42001 requirements are satisfied by a well-implemented ISO 27001 ISMS. The incremental effort for ISO 42001 is primarily in Annex A domains A.2-A.6 (AI lifecycle, data, responsible AI, transparency, explainability) and A.8 (human oversight).

---

## 7. Complexity Assessment Summary

| Complexity | Count | Examples | Estimated Agent Effort |
|-----------|-------|---------|----------------------|
| **Very High** | 3 | SoA (TS-15), Cross-Standard Consistency (DF-02), Automated Evidence Collection (DF-12) | Multiple iterations, extensive human review, cross-agent coordination |
| **High** | 20 | Risk Register, Risk Treatment Plan, AI Risk Assessment, Internal Audit, Threat Models, BCP/DR | Significant agent work per artifact, human SME review required |
| **Medium** | 22 | Most operational procedures, AI system controls, communication procedures | Standard agent generation with template + context |
| **Low** | 10 | Policy statements, scope documents, role assignments, physical security | Agent generates from template, minimal iteration expected |

---

## 8. Critical Path for Mid-May 2026

Given 12 weeks to certification readiness, the critical path is:

**Weeks 1-2**: Foundation Layer
- TS-01 through TS-09 (Context, Scope, Policies, Objectives, Roles)
- TS-18 (Document Control)
- TS-10 (Risk Methodology)

**Weeks 3-5**: Risk Layer
- TS-11, TS-12, TS-13, TS-14 (Risk Registers, Treatment Plans, AI Risks, Impact Assessments)
- TS-15 (SoA) — THIS IS THE CRITICAL PATH BOTTLENECK
- TS-16 (AI Controls Applicability)
- TS-29 (AI System Registry)

**Weeks 5-8**: Operational Controls Layer
- TS-20 through TS-28 (All operational procedures)
- TS-30 through TS-36 (AI-specific controls)
- TS-42 through TS-48 (Technical security controls)
- TS-44, TS-45 (Secure SDLC, Vulnerability Management)
- TS-49, TS-50 (TISAX evidence)

**Weeks 8-10**: Evidence Collection & Differentiators
- DF-01 through DF-06 (Agent pipeline, consistency, traceability)
- DF-11 (Self-governance of the agents themselves)
- DF-12 (Automated evidence collection where feasible)

**Weeks 10-12**: Evaluation Layer & Audit Preparation
- TS-37 (Internal Audit — conduct at least one)
- TS-38 (Management Review — conduct at least one)
- TS-39, TS-40, TS-41 (Monitoring, Nonconformity, Improvement)
- Gap analysis and remediation (DF-05)
- Stage 1 audit readiness review

---

## 9. Key Risks to Feature Delivery

| Risk | Impact | Mitigation |
|------|--------|------------|
| SoA (TS-15) is the single most complex artifact and blocks all control implementations | Critical path delay | CISO Agent prioritizes SoA in Week 3; iterative completion (draft then refine) |
| AI System Registry (TS-29) scope unclear — how many AI systems does HH Group have? | Scope creep in ISO 42001 artifacts | Define minimum viable AI system inventory early (the 6 Claude Code agents + any Verity AI features) |
| Human review bottleneck — CEO is single reviewer for 50+ artifacts | Timeline risk | Batch reviews by domain; delegate sub-reviews to consultants where expertise aligns |
| TISAX maintenance (TS-49, TS-50) may conflict with ISO timeline | Resource contention | Produce TISAX evidence as a mapping layer on ISO 27001 evidence (high overlap) |
| Internal audit (TS-37) requires auditor independence — 5-person team has limited independence | Certification objection | External auditor for internal audit or designate consultant with no ISMS role |

---

## 10. Sources & Confidence

| Source | Confidence | Notes |
|--------|------------|-------|
| ISO/IEC 27001:2022 standard requirements (clauses 4-10, Annex A) | **High** — standard is well-established, requirements are deterministic | 93 Annex A controls in 4 themes: Organizational (37), People (8), Physical (14), Technological (34) |
| ISO/IEC 42001:2023 standard requirements (clauses 4-10, Annex A-D) | **High** — standard published Dec 2023, structure mirrors 27001 | Annex A has 39 controls across domains A.2-A.10; Annex B (implementation guidance), C (AI objectives), D (use of other standards) |
| Dual certification integration approach | **Medium-High** — common in practice, well-documented by certification bodies (BSI, TUV, DNV) | Integrated management system approach (IMS) is standard practice |
| AI-agent differentiator assessment | **Medium** — novel approach, limited precedent | The 6-agent model is original; competitive advantage claims need validation through audit |
| TISAX (VDA ISA 6) requirements | **High** — established automotive standard, well-documented | Significant overlap with ISO 27001; prototype protection is the main additive |
| Timeline feasibility (12 weeks) | **Medium** — aggressive but achievable with AI agent acceleration | Assumes agents dramatically reduce artifact creation time; human review remains the bottleneck |

---

*Research completed: 2026-02-18*
*Quality gate checklist:*
- [x] Categories are clear (table stakes: 50 items, differentiators: 17 items, anti-features: 10 items)
- [x] Complexity noted for each feature (Very High / High / Medium / Low)
- [x] Dependencies between features identified (Section 4 dependency map + per-item dependency column)
