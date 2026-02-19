---
document-id: HH-AIMS-SCOPE-GMBH-001
title: "AIMS Scope Statement: Helge Heupel GmbH"
version: v1.0
date: 2026-02-19
classification: Internal
entity: Helge Heupel GmbH
jurisdiction: Germany (DE)
ims-context: HH-IMS-CTX-001
status: Draft
author: CISO Agent
reviewer: [CISO, CTO]
approver: CEO Helge Heupel
review-cycle: Annual
next-review: 2027-02-19
---

# AIMS Scope Statement: Helge Heupel GmbH

## 1. Legal Entity

| Field | Detail |
|-------|--------|
| **Full legal name** | Helge Heupel GmbH |
| **Registration** | Registered in Germany (Handelsregister, HRB) |
| **Jurisdiction** | Federal Republic of Germany |
| **Geschaeftsfuehrer** | Helge Heupel |
| **AI governance role** | Primary entity for AI management system governance. Hosts AI agent definitions, AI policy, and AI risk assessment activities. |

---

## 2. AI System Scope

Helge Heupel GmbH operates the following categories of AI systems:

### Internal AI Systems (Operational)

The **7 Claude Code agents** are the primary AI systems under AIMS governance. These agents are deployed as operational tools within the SDLC-Growth-v2 framework, producing compliance artifacts, architecture documents, security assessments, and product specifications:

| # | Agent | Domain | Deployment Status |
|---|-------|--------|-------------------|
| 1 | **SDLC Lead** | Cross-domain orchestration, SDLC compliance | Placeholder (Phase 6) |
| 2 | **CTO Agent** | Architecture, AI engineering, Azure platform | Placeholder (Phase 4) |
| 3 | **CISO Agent** | Security, EU/US compliance, AI governance, risk | Active (Phase 2) |
| 4 | **AI Science Agent** | AI research, model evaluation, ISO 42001 Annex A | Placeholder (Phase 6) |
| 5 | **Platform/SRE Agent** | SLO frameworks, observability, incident management | Placeholder (Phase 6) |
| 6 | **Product/Strategy Agent** | Strategic alignment, OKRs, portfolio governance | Placeholder (Phase 6) |
| 7 | **AppSec Agent** | Threat models, SAST/DAST, SBOM, supply chain security | Placeholder (Phase 4) |

### Third-Party AI Tools (Operational)

| Tool | Provider | Usage |
|------|---------|-------|
| **ChatGPT** | OpenAI | General-purpose AI assistant for research and internal queries |
| **Codex** | OpenAI | AI-assisted code development |

### Future AI Systems (Development)

| System | Description | Status |
|--------|-------------|--------|
| **Verity VE AI components** | AI capabilities within the Verity VE product | In development |
| **Verity EAM AI components** | AI capabilities within the Verity EAM product | In development |

---

## 3. AI System Inventory

| System | Provider | EU AI Act Risk Classification | Lifecycle Status | ISO 42001 Annex A Applicability |
|--------|---------|-------------------------------|------------------|--------------------------------|
| **SDLC Lead Agent** | Anthropic (Claude Code) | Limited-Risk (Art. 52 transparency) | Development (Placeholder) | A.2 (AI policies), A.3 (internal org), A.4 (resources), A.6 (lifecycle), A.10 (third-party) |
| **CTO Agent** | Anthropic (Claude Code) | Limited-Risk (Art. 52 transparency) | Development (Placeholder) | A.2, A.3, A.4, A.6, A.10 |
| **CISO Agent** | Anthropic (Claude Code) | Limited-Risk (Art. 52 transparency) | Production (Active) | A.2, A.3, A.4, A.5 (impact assessment), A.6, A.7 (data), A.8 (monitoring), A.10 |
| **AI Science Agent** | Anthropic (Claude Code) | Limited-Risk (Art. 52 transparency) | Development (Placeholder) | A.2, A.3, A.4, A.6, A.10 |
| **Platform/SRE Agent** | Anthropic (Claude Code) | Limited-Risk (Art. 52 transparency) | Development (Placeholder) | A.2, A.3, A.4, A.6, A.10 |
| **Product/Strategy Agent** | Anthropic (Claude Code) | Limited-Risk (Art. 52 transparency) | Development (Placeholder) | A.2, A.3, A.4, A.6, A.10 |
| **AppSec Agent** | Anthropic (Claude Code) | Limited-Risk (Art. 52 transparency) | Development (Placeholder) | A.2, A.3, A.4, A.6, A.10 |
| **ChatGPT** | OpenAI | Limited-Risk (Art. 52 transparency) | Production | A.2, A.10 (third-party relationship) |
| **Codex** | OpenAI | Limited-Risk (Art. 52 transparency) | Production | A.2, A.10 (third-party relationship) |
| **Verity VE AI** | Helge Heupel GmbH | To be classified (product-level risk assessment required) | Development | Full Annex A (upon deployment) |
| **Verity EAM AI** | Helge Heupel GmbH | To be classified (product-level risk assessment required) | Development | Full Annex A (upon deployment) |

### Risk Classification Approach

The Helge Heupel Group applies a **dual-axis risk classification** for AI systems:

1. **EU AI Act product risk:** Unacceptable / High-Risk / Limited-Risk / Minimal-Risk per EU AI Act Art. 5-7 and Annex III
2. **SDLC usage tier:** Internal operational tool / Internal decision support / Customer-facing component / Customer-facing autonomous

All 7 Claude Code agents are classified as **Limited-Risk** under the EU AI Act (Art. 52 transparency obligations for AI systems interacting with persons). The agents are used as **internal operational tools** under human supervision.

---

## 4. AI Data Scope

### Data Flowing Into AI Systems

| Data Category | AI Systems Consuming | Classification | Controls |
|--------------|---------------------|----------------|----------|
| **Compliance artifacts** | All 7 Claude Code agents | Internal | Agent reads from Git repositories; output reviewed via PR |
| **Source code** | CTO Agent, AppSec Agent, SDLC Lead Agent | Confidential | Agent reads from Git; no training on HH data by Anthropic (per terms) |
| **Internal communications** | CISO Agent, Product/Strategy Agent | Internal | Selective context provided per session; not bulk-ingested |
| **Product specifications** | CTO Agent, AI Science Agent | Confidential | Patent-sensitive content referenced by ID only ([PATENT-VE-001], [PATENT-EAM-001]) |
| **SDLC framework documents** | All agents | Internal | Agents read on demand from `agents/shared/SDLC-Growth-v2.md` and root files |
| **Meeting notes and governance records** | SDLC Lead Agent, CISO Agent | Internal | Context for governance artifact preparation |

### Data Flowing Out of AI Systems

| Data Category | AI Systems Producing | Classification | Controls |
|--------------|---------------------|----------------|----------|
| **Policy documents** | CISO Agent | Internal | PR review before merge; YAML frontmatter with classification |
| **Architecture decisions** | CTO Agent | Internal/Confidential | PR review; ADR format with security impact |
| **Risk assessments** | CISO Agent | Confidential | PR review; `[CEO-SIGNOFF-REQUIRED]` for risk acceptance |
| **Code suggestions** | Codex, CTO Agent, AppSec Agent | Confidential | Code review before merge |
| **Security assessments** | CISO Agent, AppSec Agent | Confidential | PR review; vulnerability data handled per classification |

### Data Protection

- **No personal data of customers** is currently processed by AI systems (products not yet in production)
- **Employee personal data** is not provided to AI agents (agents receive role identifiers, not personal details beyond names in public business context)
- **Anthropic data policy:** Claude Code operates under Anthropic's enterprise terms; HH data is not used for model training
- **OpenAI data policy:** ChatGPT and Codex usage follows enterprise terms where applicable

---

## 5. AI Risk Context

### Risk Classification Framework

AI risks are classified using the enterprise risk taxonomy (Section 5 of SDLC-Growth-v2):

| Risk Subcategory | Code | Examples |
|-----------------|------|----------|
| **AI data risk** | AIR.DAT | Bias in training data, data quality issues, data poisoning |
| **AI model risk** | AIR.MDL | Hallucination, model drift, adversarial vulnerability, opacity |
| **AI output risk** | AIR.OUT | Incorrect decisions, discrimination, unexplainability |
| **AI systemic risk** | AIR.SYS | Cascading failures, feedback loops, emergent behavior |
| **AI supply chain risk** | AIR.SUP | Third-party model dependency (Anthropic, OpenAI), API deprecation |

### Risk Assessment Process

The detailed AI risk assessment methodology is a Phase 5 deliverable (AIMS Core). At Startup:
- Each AI system is assessed against the dual-axis classification (EU AI Act risk x SDLC usage tier)
- High-risk AI determinations are escalated to CEO for review
- AI risks are integrated into the single risk register alongside information security and compliance risks
- The CISO Agent drafts AI risk assessments; CEO + human CISO validate

---

## 6. Human Oversight Measures

### Agent Trust Level

All 7 Claude Code agents operate at **Trust Level 2 (Supervised Autonomous)** per the interaction model (`protocols/interaction-model.md`):

| Aspect | Control |
|--------|---------|
| **Output validation** | All agent outputs reviewed via Pull Request before merge. No agent output reaches production without human review. |
| **Risk acceptance** | Human-only. No agent may accept risk on behalf of the Helge Heupel Group. Risk acceptance requires `[CEO-SIGNOFF-REQUIRED]`. |
| **Policy approval** | Human-only. CEO approves all policies via PR merge. |
| **Deployment authority** | Human-only. IT Pentester executes deployments; CTO approves at Weekly Technical. |
| **Trust level promotion** | Requires 30+ interactions with demonstrated accuracy + CEO approval to move from Level 2 to Level 3. |

### Oversight Personnel

| Role | AI Oversight Responsibility |
|------|---------------------------|
| **CEO (Helge Heupel)** | Ultimate overseer of all 7 AI agents. Approves all agent-produced policies and risk decisions. Primary interface via SDLC Lead Agent. |
| **CTO** | Reviews architecture and technical artifacts produced by CTO Agent and AppSec Agent. |
| **CISO** | Reviews security and compliance artifacts produced by CISO Agent. Validates AI risk assessments. |
| **IT Pentester** | Reviews infrastructure and platform artifacts produced by Platform/SRE Agent. |

---

## 7. Interfaces

### Cross-Entity AI System Interfaces

| Interface | Description | Security Controls |
|-----------|-------------|------------------|
| **Shared agent definitions** | The 7 Claude Code agents are defined once and serve all 3 entities. Agent CLAUDE.md files are stored in shared Git repositories. | PR-based modification control; Trust Level 2 applies globally |
| **Shared SDLC framework** | SDLC-Growth-v2 governs AI system usage across all entities | Document control per ISO 27001 cl. 7.5 |
| **Shared compliance artifacts** | Agents produce artifacts that reference all 3 entities (e.g., scope statements, risk register) | Classification labeling; entity-specific sections in shared documents |
| **Cross-entity AI data flows** | AI agents may process information from multiple entities in a single session (e.g., cross-entity compliance mapping) | Context boundaries enforced per session; classification controls apply |

### External AI Provider Interfaces

| Provider | Interface | Data Controls |
|---------|-----------|--------------|
| **Anthropic** | Claude Code API for 7 agents | Enterprise terms; no training on HH data; API key management via Azure Key Vault |
| **OpenAI** | ChatGPT and Codex access | Enterprise terms where applicable; no classified data input |

---

## 8. Exclusions

| Exclusion | Justification |
|-----------|---------------|
| **AI systems in customer products (production)** | Verity VE and Verity EAM AI features are in development, not deployed to customers. Product-level AI risk assessment will be conducted before production deployment (Phase 5 deliverable). When deployed, product AI systems will be brought into full AIMS scope. |
| **Third-party AI assessment (full)** | Comprehensive assessment of Anthropic and OpenAI AI systems is deferred. At Startup, reliance is placed on provider enterprise terms and public documentation. Full third-party AI assessment planned for Growth phase. |
| **AI model training** | The Helge Heupel Group does not currently train AI models. Claude Code agents use Anthropic-trained models. If model training begins (for Verity VE/EAM AI features), AI-specific SBOM and training data governance controls will be added to scope. |

---

## 9. Regulatory Context

| Regulation/Framework | Applicability | Key Requirements |
|---------------------|---------------|------------------|
| **EU AI Act (2024/1689)** | Applicable to all AI systems operated by GmbH | Prohibited practices (Art. 5) in force since Feb 2, 2025. Transparency obligations (Art. 52) for limited-risk AI. Full conformity for high-risk systems by Aug 2026. |
| **ISO 42001:2023** | Certification target | This AIMS scope statement supports GmbH certification. Annex A controls assessed per AI system. |
| **ISO/IEC DIS 27090** | AI cybersecurity (draft standard) | Referenced for AI-specific security controls: model integrity, adversarial defense, AI supply chain. |
| **ISO/IEC 23894:2023** | AI risk management | Referenced for AI risk taxonomy and assessment methodology alignment. |
| **GDPR Art. 22 / Art. 35** | Automated decision-making and DPIA | DPIAs required for AI features processing personal data. No fully automated decisions affecting individuals without human oversight. |

`[CEO-SIGNOFF-REQUIRED]`

---

*Document: policies/scope/AIMS-Scope-GmbH.md*
*Document ID: HH-AIMS-SCOPE-GMBH-001*
*AIMS Scope Statement for Helge Heupel GmbH*
