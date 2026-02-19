# Architecture Research: Claude Code AI Agent System for ISMS/AIMS Certification

**Research Type:** Project Research -- Architecture Dimension
**Date:** 2026-02-18
**Researcher:** GSD Project Researcher Agent
**Downstream Consumer:** Roadmap planning (phase structure, build order)

---

## 1. Executive Summary

This document defines the architecture for a system of 6 Claude Code AI agents that produce ISO 27001 + ISO 42001 compliance artifacts for the Helge Heupel Group. The agents operate inside Claude Code sessions, orchestrated by the CEO alongside 4 human consultants. The architecture addresses four concerns: agent prompt structure, inter-agent communication, artifact production pipeline, and build order.

**Key architectural decisions:**

1. Each agent is a **CLAUDE.md system prompt file** in the SDLC repository, not a hosted service. Claude Code sessions load the prompt; the agent "exists" for the duration of the session.
2. Inter-agent communication is **file-mediated via Git**, not real-time API-based. Agent A produces an artifact; Agent B reads it in a subsequent session. The CEO orchestrates sequencing.
3. The artifact lifecycle follows a **4-stage pipeline**: Draft (agent) -> Review (human) -> Approve (sign-off log) -> Archive (evidence repository). This aligns with SDLC-Growth-v2 Section 8 IEA Trust Levels and Section 10.8 Agent Governance.
4. Build order is **dependency-driven**: CISO Agent first (foundational policies), then CTO/Platform/AppSec in parallel, then AI Science, then Product/Strategy last.

---

## 2. System Components

### 2.1 Component Overview

```
+===================================================================+
|                    ORCHESTRATION LAYER                              |
|  CEO (human) -- selects agent, provides context, reviews output    |
+===================================================================+
       |            |             |              |             |       |
 +----------+ +----------+ +----------+ +----------+ +----------+ +----------+
 | CTO      | | CISO     | | AI       | | Platform | | Product  | | AppSec   |
 | Agent    | | Agent    | | Science  | | /SRE     | | Strategy | | Agent    |
 |          | |          | | Agent    | | Agent    | | Agent    | |          |
 | PSA+CAIE | | EU-CA+   | | CAIS     | | PSRE     | | CSA      | | PSE      |
 |          | | AIGO     | |          | |          | |          | |          |
 +-----+----+ +-----+----+ +-----+----+ +-----+----+ +-----+----+ +-----+----+
       |            |             |              |             |       |
 +===================================================================+
 |              SHARED CONTEXT LAYER                                  |
 |  SDLC-Growth-v2.md | Risk Register | Artifact Repository | CLAUDE.md    |
 +===================================================================+
       |            |             |              |             |
 +===================================================================+
 |              ARTIFACT STORE (Git Repository)                       |
 |  /artifacts/drafts/ | /artifacts/reviewed/ | /artifacts/approved/  |
 |  /evidence/         | /.strategy/          | /policies/            |
 +===================================================================+
```

### 2.2 Component Definitions

| Component | Type | Boundary | Inputs | Outputs |
|-----------|------|----------|--------|---------|
| **CEO Orchestrator** | Human | Selects agent sessions, provides directives, reviews all outputs | Business context, certification requirements, human consultant feedback | Session directives, approval decisions, sign-off records |
| **CTO Agent** | Claude Code session (CLAUDE.md) | Architecture decisions, AI system design, ADRs, IEA governance | SDLC-Growth-v2 Sections 2, 3, 7, 8, 15; existing architecture; CISO risk outputs | ADRs, architecture diagrams, AI system design docs, technology decisions |
| **CISO Agent** | Claude Code session (CLAUDE.md) | IS policies, risk assessment, ISMS documentation, NIS2, AI governance | SDLC-Growth-v2 Sections 5, 6, 10, 11, 12; regulatory requirements; risk register | IS Policy, SoA, risk register, risk treatment plan, NIS2 docs, AI governance artifacts |
| **AI Science Agent** | Claude Code session (CLAUDE.md) | AI research assessment, model evaluation, ISO 42001 Annex A artifacts | SDLC-Growth-v2 Sections 10, 11; CISO AI governance framework; CTO architecture | AI strategy docs, model evaluation frameworks, Annex A implementation evidence |
| **Platform/SRE Agent** | Claude Code session (CLAUDE.md) | SLO frameworks, observability, incident management, BCP/DR, runbooks | SDLC-Growth-v2 Sections 15, 16; CTO architecture decisions; CISO security requirements | SLO definitions, observability config, incident procedures, BCP/DR plans, runbooks |
| **Product/Strategy Agent** | Claude Code session (CLAUDE.md) | Strategic alignment, OKR frameworks, WSJF, portfolio governance | SDLC-Growth-v2 Section 2; business strategy; market context | Strategy artifacts, OKR frameworks, WSJF templates, portfolio governance docs |
| **AppSec Agent** | Claude Code session (CLAUDE.md) | Threat models, SAST/DAST config, SBOM/AI-BOM, supply chain security | SDLC-Growth-v2 Sections 9, 10.5, 12.3; CTO architecture; CISO security policies | Threat models, security tooling configs, SBOM pipelines, SLSA evidence |
| **Shared Context Layer** | Files in Git | Read-only reference for all agents | SDLC-Growth-v2.md, risk register, existing artifacts | N/A (reference only) |
| **Artifact Store** | Git repository directories | Versioned storage for all agent outputs | Agent drafts | Reviewed, approved, and archived compliance artifacts |

### 2.3 Component Boundaries

Each agent has a clearly defined domain. Overlaps are resolved by the **primary owner principle**: the agent whose domain is the primary ISO clause owner produces the artifact; other agents contribute inputs.

| ISO Domain | Primary Owner | Contributing Agents |
|-----------|---------------|-------------------|
| ISO 27001 Clauses 4-10 (ISMS core) | CISO Agent | CTO (scope/context), Platform (operations) |
| ISO 27001 Annex A.5 (Organizational) | CISO Agent | Product/Strategy (business context) |
| ISO 27001 Annex A.6 (People) | CISO Agent | All (role-specific inputs) |
| ISO 27001 Annex A.7 (Physical) | Platform/SRE Agent | CISO (policy), CTO (architecture) |
| ISO 27001 Annex A.8 (Technological) | CTO Agent + AppSec Agent | CISO (policy), Platform (operations) |
| ISO 42001 Clauses 4-10 (AIMS core) | CISO Agent | AI Science (technical AI), CTO (architecture) |
| ISO 42001 Annex A.2-A.3 (AI Policies, Org) | CISO Agent | AI Science, CTO |
| ISO 42001 Annex A.4 (Resources for AI) | CTO Agent | AI Science (model registry), Platform (infra) |
| ISO 42001 Annex A.5 (Impact Assessment) | AI Science Agent | CISO (risk framework), Product (business context) |
| ISO 42001 Annex A.6 (AI Lifecycle) | AI Science Agent + CTO Agent | AppSec (security testing), Platform (deployment) |
| ISO 42001 Annex A.7 (Data for AI) | AI Science Agent | CTO (architecture), CISO (data governance) |
| ISO 42001 Annex A.8 (Transparency) | AI Science Agent | Product (user-facing), CISO (compliance) |
| ISO 42001 Annex A.9 (Use of AI) | CISO Agent | AI Science (technical), CTO (IEA) |
| ISO 42001 Annex A.10 (Third-Party) | CISO Agent | CTO (vendor tech assessment), AppSec (supply chain) |
| TISAX VDA ISA 6 | CISO Agent | CTO, Platform, AppSec (control evidence) |

---

## 3. Agent Prompt Architecture

### 3.1 System Prompt Structure (Per Agent)

Each agent is defined by a `CLAUDE.md` file placed in a dedicated directory. When the CEO starts a Claude Code session from that directory, the agent's persona, knowledge, and constraints are loaded.

**Prompt structure (7 sections, ordered by priority):**

```
CLAUDE.md
+--------------------------------------------------------------------+
| 1. IDENTITY AND ROLE                                                |
|    - Agent name, persona (25+ years domain expertise)               |
|    - SDLC-Growth-v2 archetype mapping (PSA, CAIE, EU-CA, etc.)           |
|    - Primary ISO clause ownership                                   |
|    - Relationship to human counterparts                             |
+--------------------------------------------------------------------+
| 2. CONSTRAINTS AND GOVERNANCE                                       |
|    - "Agents produce drafts. Humans own risk."                      |
|    - IEA Trust Level: Level 2 (Supervised Autonomous)               |
|    - SDLC-Growth-v2 Section 10.8 agent governance rules                   |
|    - Prohibited actions (no sign-off, no risk acceptance)           |
|    - Token budget awareness                                         |
+--------------------------------------------------------------------+
| 3. SDLC-Growth-v2 CONTEXT INJECTION                                       |
|    - Full SDLC-Growth-v2.md as reference (or section-specific excerpts)   |
|    - Startup Overlay: which sections apply at Startup               |
|    - Section cross-references for the agent's domain               |
+--------------------------------------------------------------------+
| 4. ARTIFACT PRODUCTION RULES                                        |
|    - Output format templates (Markdown, YAML, structured)           |
|    - Naming conventions: {domain}-{artifact}-{version}.md          |
|    - Metadata block requirements (date, author, status, reviewer)  |
|    - Quality criteria per artifact type                             |
+--------------------------------------------------------------------+
| 5. DOMAIN KNOWLEDGE AND EXPERTISE                                   |
|    - ISO standard-specific knowledge for the agent's domain        |
|    - Regulatory knowledge (EU AI Act, NIS2, TISAX as applicable)  |
|    - Technical knowledge relevant to the domain                     |
|    - Industry best practices and benchmarks                        |
+--------------------------------------------------------------------+
| 6. INTERACTION PATTERNS                                             |
|    - How to request input from other agents (via CEO orchestration)|
|    - How to flag dependencies on other agents' outputs             |
|    - How to handle ambiguity (ask CEO, don't assume)               |
|    - How to flag items requiring human sign-off                    |
+--------------------------------------------------------------------+
| 7. CURRENT STATE AND WORKING MEMORY                                 |
|    - What artifacts already exist                                   |
|    - What has been reviewed/approved                                |
|    - Open items and blockers                                        |
|    - Last session summary                                           |
+--------------------------------------------------------------------+
```

### 3.2 Context Injection Strategy

The SDLC-Growth-v2 is 7,434 lines. Injecting it fully into every agent session is possible but wasteful. The architecture uses **section-specific injection** with a **reference index**.

| Agent | Primary SDLC-Growth-v2 Sections (full injection) | Secondary Sections (summary + reference) |
|-------|--------------------------------------------|------------------------------------------|
| CTO Agent | 2 (Strategy as Code), 3 (Principles), 7 (Org Model), 8 (IEA v2), 15 (Toolchain) | 4 (Progressive Adoption), 9 (SDLC Phases), 10 (AI Integration) |
| CISO Agent | 5 (Risk Management), 6 (UCL), 10 (AI Integration), 11 (AIMS), 12 (Security/Privacy) | 3 (Principles), 4 (Progressive Adoption), 13 (Quality Gates) |
| AI Science Agent | 10 (AI Integration), 11 (AIMS -- full), 8 (IEA -- AI sections) | 5 (Risk -- AI risk), 12 (Security -- AI security), 17 (Metrics) |
| Platform/SRE Agent | 15 (Toolchain), 16 (Operations/Reliability), 9 (SDLC Phases -- deployment) | 12 (Security -- infrastructure), 13 (Quality Gates -- G4/G5) |
| Product/Strategy Agent | 2 (Strategy as Code -- full), 4 (Progressive Adoption), 17 (Metrics) | 3 (Principles), 7 (Org Model), 13 (Quality Gates -- G0) |
| AppSec Agent | 9 (SDLC Phases -- security), 10.5 (AI Supply Chain), 12 (Security -- full) | 6 (UCL -- security controls), 8 (IEA -- verification), 13 (Quality Gates -- G2/G3) |

**Implementation:** Each agent's CLAUDE.md includes:
1. The full text of its primary sections (copy-pasted, not referenced).
2. A structured summary of secondary sections with section numbers for `@file` references.
3. A `REFERENCE_INDEX.md` listing all SDLC-Growth-v2 sections with one-line descriptions, so the agent can request specific sections from the CEO if needed.

### 3.3 Prompt Size Estimates

| Agent | Primary Sections (tokens est.) | Supporting Context (tokens est.) | Identity/Rules (tokens est.) | Total Est. |
|-------|-------------------------------|----------------------------------|------------------------------|------------|
| CTO Agent | ~8,000 | ~3,000 | ~2,000 | ~13,000 |
| CISO Agent | ~12,000 | ~4,000 | ~2,000 | ~18,000 |
| AI Science Agent | ~10,000 | ~3,000 | ~2,000 | ~15,000 |
| Platform/SRE Agent | ~6,000 | ~2,000 | ~2,000 | ~10,000 |
| Product/Strategy Agent | ~5,000 | ~2,000 | ~2,000 | ~9,000 |
| AppSec Agent | ~8,000 | ~3,000 | ~2,000 | ~13,000 |

All prompts fit comfortably within Claude Code's context window. The CISO Agent has the largest prompt because it owns the most ISO clauses across both 27001 and 42001.

---

## 4. Inter-Agent Communication Patterns

### 4.1 Communication Model: CEO-Orchestrated, File-Mediated

Agents do **not** communicate directly. The CEO is the orchestrator who:
1. Starts a Claude Code session with Agent A.
2. Directs Agent A to produce an artifact.
3. Reviews the artifact (or delegates review to a human consultant).
4. Starts a session with Agent B, providing Agent A's artifact as input context.

This aligns with SDLC-Growth-v2 Section 10.8.3: "All inter-agent communication must flow through Intent Contracts... No direct agent-to-agent API calls, shared memory, or side channels."

In this architecture, the **CEO acts as the Intent Contract bridge** between agents. The Git repository acts as the shared state store.

```
CEO Decision: "CISO produces IS Policy -> CTO reviews architecture alignment ->
               AppSec reviews security controls -> CEO finalizes"

Session 1 (CISO Agent):
  Input:  SDLC-Growth-v2 Sections 5, 12; certification requirements
  Output: /artifacts/drafts/isms-is-policy-v0.1.md

CEO Review: Reads draft, identifies items needing CTO input

Session 2 (CTO Agent):
  Input:  /artifacts/drafts/isms-is-policy-v0.1.md + architecture context
  Output: /artifacts/drafts/isms-is-policy-v0.1-cto-review.md (comments + suggestions)

Session 3 (AppSec Agent):
  Input:  /artifacts/drafts/isms-is-policy-v0.1.md + CTO review notes
  Output: /artifacts/drafts/isms-is-policy-v0.1-appsec-review.md (security assessment)

CEO Consolidation:
  Merges feedback -> /artifacts/reviewed/isms-is-policy-v0.2.md
  Assigns human consultant for formal review
```

### 4.2 Interaction Patterns (SDLC-Growth-v2 Section 10.8.4 Alignment)

| Pattern | Description | When Used | CEO Role |
|---------|-------------|-----------|----------|
| **Sequential Drafting** | Agent A produces artifact, Agent B refines it | Policy documents requiring multi-domain expertise | Passes artifact between sessions; provides directive for refinement scope |
| **Parallel Drafting** | Multiple agents produce independent artifacts simultaneously | Independent work streams (e.g., SLO framework + threat models) | Starts multiple sessions (or delegates to consultants); merges outputs |
| **Review Chain** | Agent A drafts, Agents B and C review from their domain perspective | Cross-cutting artifacts (SoA, risk register) | Routes artifact to reviewer agents with specific review directives |
| **Template Seeding** | One agent produces a template, others populate it for their domain | Standardized artifacts (risk assessments, control evidence) | Distributes template; collects populated versions |
| **Gap Analysis** | Agent examines existing artifacts to identify missing items | Audit preparation, completeness checks | Points agent at artifact directory with analysis directive |

### 4.3 Data Flow Directions (Explicit)

```
                    Product/Strategy Agent
                           |
                    (strategy context, OKRs)
                           |
                           v
     +------------------------------------------+
     |              CISO Agent                   |
     |  (foundational policies, risk framework)  |
     +------------------------------------------+
           |           |            |
           v           v            v
     +---------+  +----------+  +---------+
     | CTO     |  | AI       |  | AppSec  |
     | Agent   |  | Science  |  | Agent   |
     |         |  | Agent    |  |         |
     +---------+  +----------+  +---------+
           |           |            |
           v           v            v
     +------------------------------------------+
     |          Platform/SRE Agent               |
     |  (implements operational controls)        |
     +------------------------------------------+
```

**Explanation of flow directions:**
- Product/Strategy provides business context and strategic objectives that CISO translates into risk appetite and policy scope.
- CISO produces foundational policies and risk framework that CTO, AI Science, and AppSec consume as constraints.
- CTO produces architecture that Platform/SRE implements operationally.
- AI Science produces AI-specific requirements that Platform/SRE operationalizes.
- AppSec produces security tooling requirements that Platform/SRE integrates.
- All data flows are **unidirectional for primary artifacts** but **bidirectional for review feedback** (mediated by CEO).

---

## 5. Artifact Production Pipeline

### 5.1 Pipeline Stages

The artifact lifecycle maps to SDLC-Growth-v2 Section 8 IEA Trust Levels:

```
+----------+     +-----------+     +-----------+     +------------+
| DRAFT    | --> | REVIEW    | --> | APPROVED  | --> | ARCHIVED   |
| (Agent)  |     | (Human)   |     | (Sign-off)|     | (Evidence) |
|          |     |           |     |           |     |            |
| Trust    |     | Trust     |     | Trust     |     | Trust      |
| Level 0  |     | Level 3-4 |     | Level 4   |     | Level 6    |
+----------+     +-----------+     +-----------+     +------------+
```

| Stage | IEA Trust Level | Actor | Activities | Output Location |
|-------|----------------|-------|------------|-----------------|
| **Draft** | 0 (Untrusted) | Agent (Claude Code session) | Generate artifact from SDLC-Growth-v2 context + directive; apply domain expertise; flag uncertainties and assumptions; include metadata header | `/artifacts/drafts/{domain}/{artifact-name}-v{version}.md` |
| **Review** | 3 (Peer-Reviewed) | Human consultant + optionally another agent | Verify accuracy against ISO clauses; check SDLC-Growth-v2 alignment; validate completeness; annotate issues; suggest revisions | `/artifacts/reviewed/{domain}/{artifact-name}-v{version}.md` + review comments |
| **Approved** | 4 (Human-Approved) | CEO or designated approver | Formal sign-off; record approver identity, date, scope; confirm artifact meets certification requirements | `/artifacts/approved/{domain}/{artifact-name}-v{version}.md` + sign-off log entry |
| **Archived** | 6 (Attested) | Automated (Git commit + evidence metadata) | Version-locked in Git; indexed in evidence register; linked to applicable ISO controls in SoA; retention policy applied | `/evidence/{framework}/{control-id}/{artifact-name}-v{version}.md` |

### 5.2 Artifact Metadata Standard

Every agent-produced artifact MUST include this metadata header:

```yaml
---
document_id: "HH-{DOMAIN}-{TYPE}-{SEQ}"
title: "{Artifact Title}"
version: "0.1"
status: "DRAFT"  # DRAFT | REVIEW | APPROVED | ARCHIVED
classification: "Confidential"
author: "{Agent Name} (AI-Generated)"
reviewer: ""
approver: ""
created: "2026-02-18"
last_modified: "2026-02-18"
review_deadline: ""
applicable_frameworks:
  - "ISO 27001:2022"
  - "ISO 42001:2023"
applicable_controls: []  # e.g., ["A.5.1", "A.5.2"]
sdlc_v2_sections: []     # e.g., ["5.1", "12.2"]
dependencies: []          # artifacts this depends on
supersedes: ""            # previous version document_id
sign_off_log: []          # [{approver, date, scope, decision}]
---
```

### 5.3 Artifact Types by Agent

| Agent | Artifact Category | Specific Artifacts | ISO Mapping | Priority |
|-------|------------------|-------------------|-------------|----------|
| **CISO Agent** | ISMS Core | Information Security Policy | 27001 cl. 5.2 | P0 |
| | | Statement of Applicability (93 controls) | 27001 cl. 6.1.3(d) | P0 |
| | | Risk Assessment Methodology | 27001 cl. 6.1.2 | P0 |
| | | Risk Register | 27001 cl. 6.1.2, 8.2 | P0 |
| | | Risk Treatment Plan | 27001 cl. 6.1.3 | P0 |
| | | Internal Audit Program | 27001 cl. 9.2 | P1 |
| | | Management Review Template | 27001 cl. 9.3 | P1 |
| | AIMS Core | AI Policy | 42001 cl. 5.2 | P0 |
| | | AI System Registry | 42001 A.4.2 | P0 |
| | | AI Risk Assessment Methodology | 42001 cl. 6.1.2 | P0 |
| | | AIMS-ISMS Integration Document | 42001 cl. 4, 27001 cl. 4 | P1 |
| | NIS2 | NIS2 Compliance Matrix | NIS2 Art. 21(a-j) | P1 |
| **CTO Agent** | Architecture | Architecture Decision Records (template + key ADRs) | 42001 A.4.4 | P1 |
| | | IEA v2 Implementation Plan (Startup scope) | SDLC-Growth-v2 S.8 | P1 |
| | | Technology Stack Decision Record | 27001 A.8 | P1 |
| **AI Science Agent** | AIMS Annex A | AI Impact Assessment Process | 42001 A.5.2, ISO 42005 | P0 |
| | | AI System Lifecycle Procedures | 42001 A.6.2 | P1 |
| | | AI Transparency Framework | 42001 A.8.2, ISO 12792 | P1 |
| | | Model Evaluation Framework | 42001 A.6.3 | P2 |
| **Platform/SRE Agent** | Operations | SLO Framework | 27001 A.8.14 | P1 |
| | | Incident Management Procedure | 27001 A.5.24-28, NIS2 Art. 21(b) | P1 |
| | | Business Continuity Plan | 27001 A.5.29-30, NIS2 Art. 21(c) | P1 |
| | | Backup and Recovery Procedure | 27001 A.8.13 | P2 |
| **Product/Strategy Agent** | Strategy | Strategic Alignment Framework | SDLC-Growth-v2 S.2 | P2 |
| | | OKR Framework (compliance-integrated) | SDLC-Growth-v2 S.2.2 | P2 |
| **AppSec Agent** | Security Engineering | Threat Model Template + Methodology | 27001 A.8.27, NIS2 Art. 21(a) | P1 |
| | | SAST/DAST/SCA Configuration Plan | 27001 A.8.28 | P1 |
| | | SBOM/AI-BOM Generation Pipeline Design | 27001 A.5.21, NIS2 Art. 21(d) | P2 |
| | | Supply Chain Security Procedure | 27001 A.5.19-21, NIS2 Art. 21(d) | P1 |

### 5.4 Evidence Mapping

Every approved artifact maps to one or more SoA control entries. The CISO Agent maintains the master evidence register:

```
/evidence/
  iso27001/
    A.5.1/    -> IS Policy (approved)
    A.5.2/    -> IS Policy review records
    ...
    A.8.27/   -> Threat model methodology, completed threat models
  iso42001/
    A.2.2/    -> AI Policy (approved)
    A.4.2/    -> AI System Registry
    ...
    A.9.3/    -> IEA HITL gate configuration, override records
  tisax/
    ISA-1.1/  -> ISMS governance evidence
    ...
```

---

## 6. Agent-Specific Architecture Details

### 6.1 CISO Agent (Primary -- Build First)

**SDLC-Growth-v2 Archetype Mapping:** EU-CA (EU Compliance Architect) + AIGO (AI Governance Officer) + partial US-CA

**Why build first:** Every other agent's outputs are constrained by the CISO's risk framework, IS Policy, and AI Policy. The Statement of Applicability defines what controls exist; other agents produce evidence for those controls. Without the CISO's foundational artifacts, other agents lack their governance envelope.

**Key prompt elements:**
- Full text of SDLC-Growth-v2 Sections 5 (Risk Management), 6 (UCL), 11 (AIMS), 12 (Security/Privacy)
- ISO 27001:2022 Annex A control list (all 93) with applicability guidance
- ISO 42001:2023 Annex A control list (A.2-A.10) with Startup-phase scoping
- NIS2 Art. 21(a-j) requirements per SDLC-Growth-v2 Section 12.4
- TISAX VDA ISA 6 control objectives per SDLC-Growth-v2 Section 12.5
- Risk assessment methodology (5x5 qualitative matrix per Section 5.4.1)
- Startup phase constraints (Section 4.2): governance consolidated into 2 meetings, CTO=CISO=AI Governance Lead

**Critical constraint in prompt:** "You produce DRAFT artifacts only. You NEVER accept risk on behalf of the organization. You NEVER sign off on controls. You flag items requiring human decision with `[HUMAN_DECISION_REQUIRED]` markers."

### 6.2 CTO Agent

**SDLC-Growth-v2 Archetype Mapping:** PSA (Principal Solution Architect) + CAIE (Chief AI Infrastructure Engineer)

**Key prompt elements:**
- Full text of SDLC-Growth-v2 Sections 2 (Strategy as Code), 7 (Org Model), 8 (IEA v2), 15 (Toolchain)
- Azure-native architecture patterns per Section 15
- IEA v2 graduated trust scale (7 levels, Section 8.2)
- ADR template and decision criteria
- Startup phase architecture constraints: single team, minimal ceremony

**Dependencies:** Consumes CISO Agent's IS Policy and risk framework as architectural constraints.

### 6.3 AI Science Agent

**SDLC-Growth-v2 Archetype Mapping:** CAIS (Chief AI Scientist)

**Key prompt elements:**
- Full text of SDLC-Growth-v2 Sections 10 (AI Integration Policy), 11 (AIMS -- complete)
- ISO 42001 Annex A controls A.4-A.8 implementation guidance
- ISO 42005 impact assessment process
- AI lifecycle stages per ISO 5338 (Section 10.2)
- Model evaluation framework requirements
- Startup-phase AI governance: CTO assumes AI governance lead role

**Dependencies:** Consumes CISO Agent's AI Policy and AI risk assessment methodology; CTO Agent's IEA architecture.

### 6.4 Platform/SRE Agent

**SDLC-Growth-v2 Archetype Mapping:** PSRE (Platform and Site Reliability Engineer)

**Key prompt elements:**
- Full text of SDLC-Growth-v2 Sections 15 (Toolchain), 16 (Operations/Reliability)
- SLO framework design per Section 16.1
- Incident management per Section 16 + NIS2 Art. 21(b)
- BCP/DR per Section 16 + NIS2 Art. 21(c)
- Azure-native operational architecture

**Dependencies:** Consumes CTO Agent's architecture decisions; CISO Agent's security requirements; AppSec Agent's security tooling configurations.

### 6.5 Product/Strategy Agent

**SDLC-Growth-v2 Archetype Mapping:** CSA (Chief Strategy Architect)

**Key prompt elements:**
- Full text of SDLC-Growth-v2 Section 2 (Strategy as Code), Section 4 (Progressive Adoption)
- WSJF scoring methodology (Section 2.3)
- OKR framework and strategy artifact schemas (Section 2.2)
- Startup phase business context: pivoting to Verity VE/EAM

**Dependencies:** Lightest dependencies; provides business context to other agents. Can be built in parallel with later agents.

### 6.6 AppSec Agent (Product Security Engineering)

**SDLC-Growth-v2 Archetype Mapping:** PSE (Product Security Engineer) -- NEW role not in original SDLC-Growth-v2 archetypes

**Key prompt elements:**
- Full text of SDLC-Growth-v2 Sections 9 (SDLC Phases -- security gates), 10.5 (AI Supply Chain), 12.3 (Secure Dev Practices)
- OWASP LLM Top 10 for AI-specific threats
- STRIDE/LINDDUN threat modeling methodology per Section 12.3
- SBOM (CycloneDX) and AI-BOM requirements per Section 10.5.5
- SLSA supply chain security framework
- Security tooling: Snyk, Trivy, Semgrep, SAST/DAST configuration

**Dependencies:** Consumes CISO Agent's security policies; CTO Agent's architecture (to know what to secure).

---

## 7. Build Order and Dependencies

### 7.1 Dependency Graph

```
Phase 1 (Foundation):
  CISO Agent -----> [IS Policy, SoA, Risk Methodology, AI Policy, Risk Register]

Phase 2 (Architecture + Security, parallel):
  CTO Agent ------> [ADRs, IEA Implementation Plan, Tech Stack Record]
  AppSec Agent ---> [Threat Model Template, Security Tooling Config, Supply Chain Procedure]

Phase 3 (Domain-Specific, parallel):
  AI Science Agent -> [AI Impact Assessment Process, AI Lifecycle Procedures]
  Platform/SRE Agent -> [SLO Framework, Incident Management, BCP/DR]
  Product/Strategy Agent -> [Strategy Framework, OKR Templates]

Phase 4 (Integration):
  All agents ------> [Cross-referenced artifacts, evidence mapping, gap analysis]
```

### 7.2 Build Order Rationale

| Phase | Agents | Calendar Estimate | Rationale |
|-------|--------|-------------------|-----------|
| **Phase 1** | CISO Agent | Week 1-2 | Foundational. IS Policy and risk framework are prerequisites for all other agents. The SoA defines the control universe. AI Policy sets AIMS scope. No other agent can produce audit-ready artifacts without these. |
| **Phase 2** | CTO Agent, AppSec Agent (parallel) | Week 2-3 | CTO needs CISO's policies as constraints for architecture decisions. AppSec needs CISO's security policies to define tooling requirements. These two can work in parallel since CTO focuses on architecture and AppSec focuses on security engineering. |
| **Phase 3** | AI Science, Platform/SRE, Product/Strategy (parallel) | Week 3-4 | All three consume Phase 1+2 outputs. AI Science needs CISO's AI governance + CTO's IEA. Platform/SRE needs CTO's architecture + CISO's operational requirements. Product/Strategy is the most independent. |
| **Phase 4** | All agents (integration) | Week 4-5 | Cross-reference artifacts. Run gap analysis. Ensure evidence completeness. Prepare for audit readiness review. |

### 7.3 Build Order Implications for Roadmap

1. **CISO Agent is the critical path.** Any delay in CISO Agent completion delays all downstream agents. Prioritize getting the CISO Agent's system prompt right -- it is the most complex (widest ISO coverage) and the most foundational.

2. **The Startup Overlay should be built before or concurrently with Phase 1.** The CISO Agent needs to know which SDLC-Growth-v2 controls apply at Startup vs. later. Without the overlay, the agent will produce Enterprise-weight artifacts that are over-complex for a 5-person team.

3. **Human consultant allocation should match the build phases.** The CTO consultant should review CTO Agent outputs in Phase 2. The Pentester/Super Admin should review AppSec Agent outputs in Phase 2. Strategy Partner should review Product/Strategy Agent outputs in Phase 3.

4. **Phase 4 integration is where audit readiness is tested.** The CISO Agent should perform a gap analysis across all approved artifacts against the SoA. Any gaps become additional work items.

---

## 8. Human-Agent Interaction Model

### 8.1 CEO Orchestration Patterns

The CEO manages the 6 agents using 4 primary patterns:

| Pattern | When | Example |
|---------|------|---------|
| **Directive** | CEO tells agent exactly what to produce | "Draft the IS Policy per ISO 27001 cl. 5.2, scoped to SDLC-Growth-v2 Section 12.2.5 document hierarchy. Startup phase." |
| **Consultative** | CEO asks agent to analyze and recommend | "Review the current risk register and identify gaps against ISO 27001 Annex A. Recommend priority treatment items." |
| **Review** | CEO provides another agent's output for domain review | "Here is the CTO Agent's ADR for Azure architecture. Review from CISO perspective and flag security concerns." |
| **Gap Analysis** | CEO asks agent to assess completeness | "Examine all artifacts in /artifacts/approved/ and identify which SoA controls lack evidence." |

### 8.2 Human Consultant Integration

| Human Role | Agent Counterpart(s) | Interaction Mode |
|------------|---------------------|------------------|
| **CTO Consultant** | CTO Agent, Platform/SRE Agent | Reviews architecture decisions and operational procedures. Provides real-world technical context agents lack. |
| **Strategy Partner** | Product/Strategy Agent | Reviews strategic alignment artifacts. Provides business context and market intelligence. |
| **Finance Industry Senior Manager** | CISO Agent (risk/compliance), Product/Strategy Agent | Reviews financial risk aspects, compliance cost estimates, enterprise customer requirements. |
| **IT Pentester/Super Admin** | AppSec Agent, Platform/SRE Agent | Reviews threat models, security configurations, penetration test scope. Validates technical security controls. |

### 8.3 Sign-Off Protocol (SDLC-Growth-v2 Section 10.8 Alignment)

Every artifact requiring formal approval follows this protocol:

```
1. Agent produces draft with [HUMAN_DECISION_REQUIRED] markers
2. CEO assigns reviewer (human consultant or themselves)
3. Reviewer provides feedback (in-line comments or separate review document)
4. CEO directs agent to incorporate feedback (new session)
5. Reviewer confirms changes address their feedback
6. Approver (CEO or designated authority) records sign-off:

   sign_off_log:
     - approver: "Helge Heupel, CEO"
       date: "2026-02-20"
       scope: "Full document"
       decision: "APPROVED"
       conditions: "None"
       evidence_id: "SIGNOFF-ISMS-POL-001-v1.0"
```

---

## 9. Technical Implementation

### 9.1 Repository Structure

```
/Users/helgeheupel/Documents/HH/SDLC/
  SDLC-Growth-v2.md                          # The 7,434-line framework (reference)

  agents/
    ciso/
      CLAUDE.md                        # CISO Agent system prompt
      context/                         # Agent-specific context files
        sdlc-growth-v2-sections.md            # Extracted SDLC-Growth-v2 sections for this agent
        iso27001-annex-a.md            # Control reference
        iso42001-annex-a.md            # Control reference
    cto/
      CLAUDE.md
      context/
    ai-science/
      CLAUDE.md
      context/
    platform-sre/
      CLAUDE.md
      context/
    product-strategy/
      CLAUDE.md
      context/
    appsec/
      CLAUDE.md
      context/
    shared/
      REFERENCE_INDEX.md               # All SDLC-Growth-v2 sections with summaries
      startup-overlay.md               # Which sections apply at Startup
      artifact-templates/              # Shared templates for all agents
      metadata-schema.yaml             # Artifact metadata standard

  artifacts/
    drafts/                            # Agent-produced drafts
      isms/
      aims/
      operations/
      architecture/
      security/
      strategy/
    reviewed/                          # Human-reviewed versions
    approved/                          # Signed-off versions

  evidence/                            # Archived evidence mapped to controls
    iso27001/
    iso42001/
    tisax/

  sign-off-log/                        # Formal approval records
    SIGN_OFF_REGISTER.yaml

  .planning/                           # Project planning (existing)
    PROJECT.md
    research/
      ARCHITECTURE.md                  # This document
```

### 9.2 Agent Session Workflow

```
CEO starts Claude Code session:
  $ cd /path/to/SDLC/agents/ciso
  $ claude

Claude Code loads:
  1. /SDLC/agents/ciso/CLAUDE.md (agent identity + rules)
  2. /SDLC/CLAUDE.md (workspace-level instructions, if present)
  3. CEO provides directive in chat

Agent operates:
  - Reads reference files via @file
  - Produces artifacts via file creation
  - Flags [HUMAN_DECISION_REQUIRED] items
  - Session ends; artifacts persist in Git

CEO reviews:
  - Reads artifacts
  - Git commits drafts to drafts/ directory
  - Routes to human consultants for review
  - Starts next agent session as needed
```

### 9.3 Agent Governance Alignment with SDLC-Growth-v2

| SDLC-Growth-v2 Requirement | Implementation in This Architecture |
|---------------------|-------------------------------------|
| Section 10.8.1 Agent Registry | Each agent registered in `agents/shared/AGENT_REGISTRY.yaml` with ID, purpose, capabilities, tier, owner |
| Section 10.8.2 Trust Level | All 6 agents operate at **Tier 2 (Collaborator)**: propose actions, human must approve before acceptance |
| Section 10.8.3 Agent-to-Agent Communication | File-mediated via Git; CEO bridges between sessions; no direct communication |
| Section 10.8.4 Multi-Agent Patterns | **Sequential** (most common): Agent A drafts, Agent B reviews. **Fan-out/Fan-in**: CISO distributes risk template, multiple agents populate |
| Section 10.8.5 Kill Switch | CEO can terminate any Claude Code session immediately (Ctrl+C) |
| Section 10.8.5 Budget Enforcement | Token budgets managed per-session by Claude Code; large artifacts may require multiple sessions |
| Section 10.8.5 Production Isolation | Agents produce Markdown/YAML documents only; no access to production systems |
| Section 7.5 AI Teammate Operating Principles | Agents tracked in roster; outputs require human review; autonomy level managed by CEO |

---

## 10. Risks and Mitigations

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Agent produces inaccurate ISO control mapping | Audit finding; rework | Medium | Human consultant review for every control mapping; cross-reference against official ISO standard text |
| Context window limits prevent agent from processing full SDLC-Growth-v2 | Incomplete artifacts | Low | Section-specific injection strategy (Section 3.2); agents can request additional sections |
| Agent sessions produce inconsistent artifacts across sessions | Evidence inconsistency | Medium | Artifact metadata standard enforced; templates used; CEO reviews for consistency before approval |
| Single CEO bottleneck for orchestration | Delays in artifact production | High | Delegate review to human consultants; batch agent sessions; prioritize critical path (CISO first) |
| SDLC-Growth-v2 is Enterprise-weight; agents produce over-complex artifacts | Governance overhead | High | Startup Overlay (built first) explicitly tells agents what applies at Startup; agent prompts include phase-awareness |
| Agent drift from intended persona across long sessions | Quality degradation | Low | Keep sessions focused (one artifact per session); re-read CLAUDE.md at session start |

---

## 11. Quality Gate Checklist

- [x] Components clearly defined with boundaries (Section 2)
- [x] Data flow direction explicit (Section 4.3)
- [x] Build order implications noted (Section 7)
- [x] Agent prompt architecture defined (Section 3)
- [x] Inter-agent communication patterns specified (Section 4)
- [x] Artifact production pipeline with stages (Section 5)
- [x] Human-agent interaction model (Section 8)
- [x] SDLC-Growth-v2 alignment verified (Section 9.3)
- [x] Risks and mitigations identified (Section 10)

---

## 12. Key Decisions for Downstream Consumer (Roadmap)

1. **CISO Agent is Week 1 deliverable.** Roadmap must allocate the first sprint to CISO Agent prompt construction and validation. This is the critical path.

2. **Startup Overlay is a prerequisite.** Before any agent can produce right-sized artifacts, the SDLC-Growth-v2 Startup Overlay must exist. Build it in Week 1 alongside CISO Agent.

3. **Phase 2 agents (CTO + AppSec) can be built in parallel in Week 2-3.** Roadmap can assign these to different workstreams.

4. **Phase 3 agents (AI Science, Platform, Product) can be built in parallel in Week 3-4.** These have the lightest inter-dependencies.

5. **Integration testing (Phase 4) is essential.** Allocate Week 4-5 for cross-agent artifact review and gap analysis. This is where audit readiness is actually tested.

6. **Human consultant allocation must track the build phases.** CTO consultant in Phase 2, Pentester in Phase 2, Strategy Partner in Phase 3, Finance Manager across Phases 1-3 for risk review.

7. **Expect iteration.** The first CISO Agent draft will not be perfect. Budget 2-3 revision cycles per agent before the prompts stabilize.

---

*Document produced by GSD Project Researcher Agent. This is a DRAFT requiring human review before architectural decisions are finalized.*
