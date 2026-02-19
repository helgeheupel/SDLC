---
document-id: HH-AIMS-SCOPE-BV-001
title: "AIMS Scope Statement: Helge Heupel B.V."
version: v1.0
date: 2026-02-19
classification: Internal
entity: Helge Heupel B.V.
jurisdiction: Netherlands (NL)
ims-context: HH-IMS-CTX-001
status: Draft
author: CISO Agent
reviewer: [CISO, CTO]
approver: CEO Helge Heupel
review-cycle: Annual
next-review: 2027-02-19
---

# AIMS Scope Statement: Helge Heupel B.V.

## 1. Legal Entity

| Field | Detail |
|-------|--------|
| **Full legal name** | Helge Heupel B.V. |
| **Registration** | Registered in the Netherlands (Kamer van Koophandel, KVK) |
| **Jurisdiction** | Kingdom of the Netherlands |
| **Bestuurder** | Helge Heupel |
| **AI governance role** | EU market-facing entity for AI-powered products. Subject to EU AI Act obligations as both deployer and (future) provider of AI systems. |

---

## 2. AI System Scope

Helge Heupel B.V. operates the following AI systems:

### Internal AI Systems (Shared with GmbH)

The **7 Claude Code agents** serve B.V. operations identically to GmbH:

| # | Agent | Domain | Deployment Status |
|---|-------|--------|-------------------|
| 1 | **SDLC Lead** | Cross-domain orchestration, SDLC compliance | Placeholder (Phase 6) |
| 2 | **CTO Agent** | Architecture, AI engineering, Azure platform | Placeholder (Phase 4) |
| 3 | **CISO Agent** | Security, EU/US compliance, AI governance, risk | Active (Phase 2) |
| 4 | **AI Science Agent** | AI research, model evaluation, ISO 42001 Annex A | Placeholder (Phase 6) |
| 5 | **Platform/SRE Agent** | SLO frameworks, observability, incident management | Placeholder (Phase 6) |
| 6 | **Product/Strategy Agent** | Strategic alignment, OKRs, portfolio governance | Placeholder (Phase 6) |
| 7 | **AppSec Agent** | Threat models, SAST/DAST, SBOM, supply chain security | Placeholder (Phase 4) |

### Third-Party AI Tools (Shared)

| Tool | Provider | Usage |
|------|---------|-------|
| **ChatGPT** | OpenAI | General-purpose AI assistant |
| **Codex** | OpenAI | AI-assisted development |

### Future AI Systems

| System | Description | Status |
|--------|-------------|--------|
| **Verity VE AI components** | AI capabilities within Verity VE (EU market distribution via B.V.) | In development |
| **Verity EAM AI components** | AI capabilities within Verity EAM (EU market distribution via B.V.) | In development |

---

## 3. AI System Inventory

| System | Provider | EU AI Act Risk Classification | Lifecycle Status | ISO 42001 Annex A Applicability |
|--------|---------|-------------------------------|------------------|--------------------------------|
| **SDLC Lead Agent** | Anthropic (Claude Code) | Limited-Risk (Art. 52 transparency) | Development (Placeholder) | A.2, A.3, A.4, A.6, A.10 |
| **CTO Agent** | Anthropic (Claude Code) | Limited-Risk (Art. 52 transparency) | Development (Placeholder) | A.2, A.3, A.4, A.6, A.10 |
| **CISO Agent** | Anthropic (Claude Code) | Limited-Risk (Art. 52 transparency) | Production (Active) | A.2, A.3, A.4, A.5, A.6, A.7, A.8, A.10 |
| **AI Science Agent** | Anthropic (Claude Code) | Limited-Risk (Art. 52 transparency) | Development (Placeholder) | A.2, A.3, A.4, A.6, A.10 |
| **Platform/SRE Agent** | Anthropic (Claude Code) | Limited-Risk (Art. 52 transparency) | Development (Placeholder) | A.2, A.3, A.4, A.6, A.10 |
| **Product/Strategy Agent** | Anthropic (Claude Code) | Limited-Risk (Art. 52 transparency) | Development (Placeholder) | A.2, A.3, A.4, A.6, A.10 |
| **AppSec Agent** | Anthropic (Claude Code) | Limited-Risk (Art. 52 transparency) | Development (Placeholder) | A.2, A.3, A.4, A.6, A.10 |
| **ChatGPT** | OpenAI | Limited-Risk (Art. 52 transparency) | Production | A.2, A.10 |
| **Codex** | OpenAI | Limited-Risk (Art. 52 transparency) | Production | A.2, A.10 |
| **Verity VE AI** | Helge Heupel GmbH/B.V. | To be classified | Development | Full Annex A (upon deployment) |
| **Verity EAM AI** | Helge Heupel GmbH/B.V. | To be classified | Development | Full Annex A (upon deployment) |

### B.V.-Specific AI Considerations

As the EU market-facing entity, B.V. has additional obligations when Verity VE and Verity EAM AI features are deployed to EU customers:
- **Provider obligations** under EU AI Act if B.V. is the entity placing AI systems on the EU market
- **Deployer obligations** for AI systems used in B.V. operations
- Product-level risk assessment required before EU market launch

---

## 4. AI Data Scope

### Data Flowing Into AI Systems

| Data Category | AI Systems Consuming | Classification | Controls |
|--------------|---------------------|----------------|----------|
| **Compliance artifacts** | All 7 Claude Code agents | Internal | Agent reads from Git; PR review for all outputs |
| **Source code (shared)** | CTO Agent, AppSec Agent | Confidential | No training on HH data per Anthropic terms |
| **EU customer data** (future) | Verity VE/EAM AI (when deployed) | Confidential | DPIA required before processing; AVG compliance |
| **B.V. business records** | CISO Agent, Product/Strategy Agent | Internal | Selective context per session |
| **SDLC framework documents** | All agents | Internal | On-demand read access |

### Data Flowing Out of AI Systems

| Data Category | AI Systems Producing | Classification | Controls |
|--------------|---------------------|----------------|----------|
| **Policy documents** | CISO Agent | Internal | PR review; YAML frontmatter classification |
| **Compliance mappings** | CISO Agent | Internal/Confidential | PR review |
| **Architecture artifacts** | CTO Agent | Confidential | PR review; ADR format |
| **Code suggestions** | Codex, CTO Agent | Confidential | Code review before merge |

### Data Protection

- **No EU customer personal data** currently processed by AI systems
- **AVG compliance** required before AI systems process personal data of EU individuals
- **DPIA per GDPR Art. 35** required for AI features with automated decision-making

---

## 5. AI Risk Context

### Risk Classification

AI risks for B.V. follow the same enterprise risk taxonomy as GmbH (Section 5 of SDLC-Growth-v2). The same five AI risk subcategories apply: AIR.DAT (data), AIR.MDL (model), AIR.OUT (output), AIR.SYS (systemic), AIR.SUP (supply chain).

### B.V.-Specific AI Risks

| Risk | Description | Current Assessment |
|------|-------------|-------------------|
| **EU AI Act provider risk** | B.V. may bear provider obligations for Verity AI features in the EU market | Medium -- deferred until product deployment |
| **AVG + AI intersection** | DPIA requirements for AI features processing EU personal data | Low -- no personal data processing by AI currently |
| **NCSC-NL AI advisory** | Emerging Dutch guidance on AI system cybersecurity | Monitoring -- no formal guidance yet |

### Risk Assessment Process

Identical to GmbH: dual-axis classification (EU AI Act risk x SDLC usage tier), integrated risk register, CISO Agent drafts, CEO + CISO validate. Detailed AI risk assessment methodology is a Phase 5 deliverable.

---

## 6. Human Oversight Measures

### Agent Trust Level

All 7 Claude Code agents operate at **Trust Level 2 (Supervised Autonomous)** -- identical to GmbH governance.

| Aspect | Control |
|--------|---------|
| **Output validation** | All outputs reviewed via PR before merge |
| **Risk acceptance** | Human-only (`[CEO-SIGNOFF-REQUIRED]`) |
| **Policy approval** | CEO (Bestuurder) approves via PR merge |
| **Trust level promotion** | 30+ interactions + CEO approval |

### Oversight Personnel

| Role | AI Oversight Responsibility |
|------|---------------------------|
| **CEO (Helge Heupel)** | Bestuurder. Ultimate AI oversight for B.V. AI systems. |
| **CTO** | Reviews technical AI artifacts produced for B.V. |
| **CISO** | Reviews compliance and risk artifacts; validates AI risk assessments for NL regulatory context. |
| **Finance Industry Senior Manager** | Informed on AI risk with financial implications for B.V. |

---

## 7. Interfaces

### Cross-Entity AI System Interfaces

| Interface | Description | Security Controls |
|-----------|-------------|------------------|
| **Shared agent definitions** | 7 agents defined once, serving GmbH and B.V. identically | PR-based control; Trust Level 2 |
| **Shared SDLC framework** | SDLC-Growth-v2 governs AI usage across entities | Document control per ISO 27001 cl. 7.5 |
| **Shared compliance artifacts** | Agents produce artifacts referencing multiple entities | Classification labeling; entity-specific sections |
| **Cross-entity AI data flows** | Agents may process B.V. and GmbH data in a single session | Context boundaries; classification controls |

### External AI Provider Interfaces

| Provider | Interface | Data Controls |
|---------|-----------|--------------|
| **Anthropic** | Claude Code API (shared) | Enterprise terms; no HH data training; API key management via Azure Key Vault |
| **OpenAI** | ChatGPT and Codex (shared) | Enterprise terms; no classified data input |

---

## 8. Exclusions

| Exclusion | Justification |
|-----------|---------------|
| **AI systems in customer products (production)** | Verity VE/EAM AI features in development. Product-level AI risk assessment required before deployment. EU AI Act provider/deployer obligations assessed before EU market launch. |
| **Third-party AI full assessment** | Deferred to Growth phase. Reliance on provider enterprise terms at Startup. |
| **AI model training** | B.V. does not train models. Anthropic and OpenAI models used as-is. |

---

## 9. Regulatory Context

| Regulation/Framework | Applicability | Key Requirements |
|---------------------|---------------|------------------|
| **EU AI Act (2024/1689)** | Applicable to all AI systems operated and (future) placed on EU market by B.V. | Prohibited practices (Art. 5) in force since Feb 2, 2025. Transparency (Art. 52) for limited-risk. Provider obligations if B.V. places AI products on EU market. |
| **ISO 42001:2023** | Certification target | AIMS scope supports B.V. certification. Separate certificate from GmbH. |
| **AVG / GDPR** | Automated decision-making | DPIAs for AI features processing personal data. No fully automated decisions affecting individuals. Autoriteit Persoonsgegevens oversight. |
| **Wbni + AI** | Emerging intersection | Dutch NIS2 transposition may impose AI-specific cybersecurity requirements. Monitoring. |
| **ISO/IEC 23894:2023** | AI risk management | Referenced for risk taxonomy alignment. |

`[CEO-SIGNOFF-REQUIRED]`

---

*Document: policies/scope/AIMS-Scope-BV.md*
*Document ID: HH-AIMS-SCOPE-BV-001*
*AIMS Scope Statement for Helge Heupel B.V.*
