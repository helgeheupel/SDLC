---
document-id: HH-ISMS-SCOPE-GMBH-001
title: "ISMS Scope Statement: Helge Heupel GmbH"
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

# ISMS Scope Statement: Helge Heupel GmbH

## 1. Legal Entity

| Field | Detail |
|-------|--------|
| **Full legal name** | Helge Heupel GmbH |
| **Registration** | Registered in Germany (Handelsregister, HRB) |
| **Jurisdiction** | Federal Republic of Germany |
| **Geschaeftsfuehrer** | Helge Heupel |
| **Primary function** | Primary operating entity of the Helge Heupel Group. Product development headquarters, compliance governance, ISMS/AIMS home base. |

---

## 2. Organizational Scope

The ISMS scope for Helge Heupel GmbH encompasses the following business functions:

| Function | Description | In Scope |
|----------|-------------|----------|
| **Product Development** | Development of Verity VE and Verity EAM using the SDLC-Growth-v2 framework | Yes |
| **Compliance Governance** | ISMS, AIMS, NIS2, TISAX, GDPR compliance management | Yes |
| **IT Operations** | Azure cloud infrastructure management, endpoint management, identity and access management | Yes |
| **AI Agent Operations** | Configuration, deployment, and oversight of 7 Claude Code AI agents | Yes |
| **Security Operations** | Vulnerability management, penetration testing, incident response, security monitoring | Yes |
| **Human Resources (IS aspects)** | Pre-employment screening, IS awareness training, access lifecycle management | Yes |
| **Corporate Governance** | Management review (Monthly Strategic), technical governance (Weekly Technical) | Yes |
| **Procurement (IS aspects)** | Vendor risk assessment for suppliers processing GmbH information assets | Yes |

---

## 3. Services and Products

| Service/Product | Description | Classification |
|----------------|-------------|----------------|
| **Verity VE** | AI-powered value engineering platform (development and internal testing) | Confidential (patent-pending: [PATENT-VE-001]) |
| **Verity EAM** | AI-powered enterprise architecture management platform (development and internal testing) | Confidential (patent-pending: [PATENT-EAM-001]) |
| **Internal IT Services** | Azure infrastructure, M365, identity management, endpoint management for GmbH personnel | Internal |
| **SDLC Framework** | SDLC-Growth-v2 framework governing all development activities | Internal |
| **AI Agent Services** | 7 Claude Code agents providing compliance, architecture, security, and product support | Internal |

---

## 4. Information Assets

### Data Assets

| Asset Category | Examples | Classification | Owner |
|---------------|----------|----------------|-------|
| **Source code** | Verity VE and Verity EAM repositories, SDLC framework code, infrastructure-as-code | Confidential | CTO |
| **Product specifications** | Architecture decisions, design documents, API specifications | Confidential | CTO |
| **Patent materials** | Verity VE ([PATENT-VE-001]) and Verity EAM ([PATENT-EAM-001]) patent applications | Secret | CEO |
| **Customer data** (future) | Customer-provided data for VE/EAM processing (not yet in production) | Confidential | CEO |
| **AI model configurations** | Claude Code agent system prompts (CLAUDE.md), domain context, reference materials | Internal | CISO (for CISO Agent); CTO (for CTO Agent) |
| **Compliance artifacts** | Policies, scope statements, risk register, SoA, audit reports, evidence | Internal/Confidential | CISO |
| **Communication data** | Email (M365), Teams messages, meeting notes | Internal | CEO |
| **Cryptographic keys** | Azure Key Vault managed keys, TLS certificates, code signing keys | Secret | IT Pentester |
| **Personnel records** | Employment contracts, screening records, training records (IS aspects) | Confidential | CEO |

### AI Agent Assets

The following 7 Claude Code AI agents are information assets under the ISMS and AI systems under the AIMS:

| # | Agent | CLAUDE.md Location | Security Classification |
|---|-------|-------------------|------------------------|
| 1 | **SDLC Lead** | agents/sdlc-lead/CLAUDE.md | Internal |
| 2 | **CTO Agent** | agents/cto/CLAUDE.md | Internal |
| 3 | **CISO Agent** | agents/ciso/CLAUDE.md | Internal |
| 4 | **AI Science Agent** | agents/ai-science/CLAUDE.md | Internal |
| 5 | **Platform/SRE Agent** | agents/platform-sre/CLAUDE.md | Internal |
| 6 | **Product/Strategy Agent** | agents/product-strategy/CLAUDE.md | Internal |
| 7 | **AppSec Agent** | agents/appsec/CLAUDE.md | Internal |

Agent system prompts, reference materials, and domain context documents are treated as controlled information assets. Modifications require PR-based review and approval.

---

## 5. Technology

### Cloud Infrastructure

| Component | Detail |
|-----------|--------|
| **Azure subscriptions** | Production and development subscriptions in **West Europe** and **Germany West Central** regions |
| **Azure Entra ID** | Identity provider for all users and workload identities. MFA enforced via Conditional Access. |
| **Azure Key Vault** | Cryptographic key management. FIPS 140-2 Level 2 HSMs. |
| **Azure Storage** | Data at rest encryption (AES-256) via Storage Service Encryption. |
| **BSI C5 attestation** | Azure services hold BSI C5 Type 2 attestation, referenced as compensating evidence for infrastructure controls. |

### Development and Operations Tools

| Tool | Purpose | Data Processed |
|------|---------|---------------|
| **Microsoft 365** | Email (Exchange), collaboration (Teams), file storage (SharePoint/OneDrive) | Internal communications, business documents |
| **Git repositories** | Version control, document management, PR-based approval workflows | Source code, policies, compliance artifacts |
| **Claude Code (Anthropic)** | AI agent platform for 7 Claude Code agents | Agent prompts, compliance artifacts, architecture docs |
| **ChatGPT (OpenAI)** | General-purpose AI assistant | Internal queries, research (no classified data) |
| **Codex (OpenAI)** | AI-assisted development | Code suggestions, development artifacts |
| **NorthGRC** | GRC platform (integration planned Phase 9) | Risk register, compliance evidence, audit management |
| **Linear** | Development task management | Sprint tasks, bug tracking (Internal classification) |
| **Float** | Resource planning and product management | Team capacity, project schedules |
| **Microsoft Intune** | Endpoint management (MDM/MAM) | Device compliance, security configurations |

---

## 6. People

### Personnel in Scope

| # | Role | Name / Identifier | Location | GmbH Function |
|---|------|-------------------|----------|---------------|
| 1 | **CEO / Geschaeftsfuehrer** | Helge Heupel | Germany (remote) | Ultimate authority. Policy approver. Risk acceptor. NIS2UmsuCG Sec. 38 management body liability. |
| 2 | **CTO** | (Named individual) | Germany (remote) | Architecture, AI engineering, technical leadership. Security co-reviewer. |
| 3 | **CISO** | (Named individual) | Germany (remote) | ISMS operation, risk assessment, NIS2 compliance, audit coordination. |
| 4 | **IT Pentester / Super Admin** | (Named individual) | Germany (remote) | Head of Platform. Azure infrastructure, penetration testing, deployment. |
| 5 | **Strategy Partner** | (Named individual) | Germany (remote) | Product/strategy. Consulted on strategic risk. |

### AI Agents in Scope

All 7 Claude Code agents (listed in Section 4) are in scope as both information assets and operational actors. Agents operate at Trust Level 2 (Supervised Autonomous). All agent outputs require human review via PR.

### Third-Party Access

Any contractors or third parties granted access to GmbH information assets are in scope. Vendor risk assessments (VRAs) are conducted per the procurement IS requirements.

---

## 7. Locations

### Physical Locations

Helge Heupel GmbH has **no physical offices in scope**. All personnel work remotely from locations within Germany. Remote worker endpoints are in scope for endpoint security controls (Microsoft Intune MDM/MAM, device compliance policies).

### Cloud Locations

| Azure Region | Purpose | Data Classification |
|-------------|---------|-------------------|
| **West Europe** (Netherlands) | Primary development and operations | Internal, Confidential |
| **Germany West Central** (Frankfurt) | German data residency requirements | Internal, Confidential |

Data residency: EU personal data and compliance-sensitive information remain within EU Azure regions.

---

## 8. Interfaces with Other Entities

### Interface with Helge Heupel B.V.

| Interface | Data Flow | Mechanism | Security Controls |
|-----------|-----------|-----------|------------------|
| **Shared Azure tenant** | B.V. personnel access shared Azure subscriptions | Azure Entra ID with role-based access | Conditional Access policies, MFA, audit logging |
| **Shared Git repositories** | Source code and compliance artifacts shared between GmbH and B.V. | Git repository access permissions | Branch protection, PR review, audit trail |
| **Shared AI agent system** | Same 7 Claude Code agents serve both entities | Agent CLAUDE.md files in shared repositories | Agent Trust Level 2, PR review for all outputs |
| **Cross-entity data transfers** | Compliance data, development artifacts, communication data | M365, Azure, Git | Encryption in transit (TLS 1.3), EU data residency |
| **Personnel overlap** | CEO (Helge Heupel) serves as Geschaeftsfuehrer (GmbH) and Bestuurder (B.V.) | Management role | Governance model ensures both entities' requirements are addressed |
| **Shared SDLC framework** | SDLC-Growth-v2 and Startup overlay govern development across both entities | Git-based documentation | Document control per ISO 27001 cl. 7.5 |

### Interface with Helge Heupel Inc.

| Interface | Data Flow | Mechanism | Security Controls |
|-----------|-----------|-----------|------------------|
| **Shared Azure tenant** | Inc. personnel access shared Azure subscriptions (limited scope) | Azure Entra ID | Conditional Access, MFA, geo-based restrictions |
| **Shared Git repositories** | Source code shared for Verity product development | Git repository access permissions | Branch protection, PR review |
| **Cross-entity data transfers** | Limited business data flows | Encrypted channels | EU-US Data Privacy Framework for personal data |
| **Personnel overlap** | CEO (Helge Heupel) serves as Officer of Inc. | Management role | US-specific obligations tracked separately |

### Data Processing Agreements

- GmbH-B.V. inter-entity DPA governing joint controller / processor arrangements (to be formalized)
- GmbH-Inc. data transfer agreement under EU-US Data Privacy Framework (to be formalized for Startup phase)

---

## 9. Exclusions

| Exclusion | Justification |
|-----------|---------------|
| **Physical data center controls** | All processing occurs in Microsoft Azure cloud infrastructure. Azure's ISO 27001 and SOC 2 Type II attestations provide compensating evidence for physical infrastructure controls (data center access, environmental controls, hardware maintenance). The shared responsibility model documents the boundary. |
| **Physical office security** | No physical offices in scope. All personnel work remotely. Endpoint security (Intune MDM/MAM) and access controls (Entra ID MFA) provide compensating controls for remote work. |
| **Manufacturing or physical product controls** | The Helge Heupel Group develops software products only. TISAX ISA Chapter 7 prototype protection applies to digital prototypes (source code, product specs), not physical prototypes. |

---

## 10. Regulatory Context

| Regulation/Framework | Applicability | Key Requirements |
|---------------------|---------------|------------------|
| **NIS2UmsuCG** (NIS-2-Umsetzungs- und Cybersicherheitsstarkungsgesetz) | GmbH classified as "important entity" (wichtige Einrichtung) | BSI registration (Sec. 33), incident reporting (Sec. 32: 24h/72h/30d), management body liability (Sec. 38), cybersecurity risk management (Sec. 30) |
| **BSI-Gesetz** (Gesetz ueber das Bundesamt fuer Sicherheit in der Informationstechnik) | BSI oversight of NIS2-regulated entities | Cooperation with BSI, compliance with BSI technical guidelines |
| **BDSG** (Bundesdatenschutzgesetz) | German supplementary data protection law | Employee data processing, data protection officer requirements (assessed), supervisory authority (BfDI) |
| **GDPR** (EU 2016/679) | EU personal data processing | Data protection by design, DPIA for AI features, data subject rights, 72h breach notification to BfDI |
| **TISAX** (ISA 6) | Automotive information security | Currently certified (prior scope). Scope change assessment required for new HH Group scope. TISAX Level 3 maturity target. |
| **ISO 27001:2022** | Certification target | This ISMS scope statement supports certification. All 93 Annex A controls assessed in SoA. |
| **ISO 27001:2022/Amd 1:2024** | Climate change amendment | Climate change acknowledged as contextual factor in IMS Context (HH-IMS-CTX-001). Formal assessment deferred to Growth phase. |

`[CEO-SIGNOFF-REQUIRED]`

---

*Document: policies/scope/ISMS-Scope-GmbH.md*
*Document ID: HH-ISMS-SCOPE-GMBH-001*
*ISMS Scope Statement for Helge Heupel GmbH*
