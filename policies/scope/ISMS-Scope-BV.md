---
document-id: HH-ISMS-SCOPE-BV-001
title: "ISMS Scope Statement: Helge Heupel B.V."
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

# ISMS Scope Statement: Helge Heupel B.V.

## 1. Legal Entity

| Field | Detail |
|-------|--------|
| **Full legal name** | Helge Heupel B.V. |
| **Registration** | Registered in the Netherlands (Kamer van Koophandel, KVK) |
| **Jurisdiction** | Kingdom of the Netherlands |
| **Bestuurder** | Helge Heupel |
| **Primary function** | EU market operations for the Helge Heupel Group. Subject to Dutch NIS2 transposition (Wbni), AVG, and NCSC-NL oversight. |

---

## 2. Organizational Scope

The ISMS scope for Helge Heupel B.V. encompasses the following business functions:

| Function | Description | In Scope |
|----------|-------------|----------|
| **EU Market Operations** | Market-facing operations for Verity VE and Verity EAM within the European Union | Yes |
| **Product Development (shared)** | Participation in shared Verity product development using SDLC-Growth-v2 framework | Yes |
| **Compliance Governance (NL)** | Wbni compliance, AVG obligations, NCSC-NL registration | Yes |
| **IT Operations (shared)** | Access to shared Azure cloud infrastructure and M365 platform | Yes |
| **AI Agent Operations (shared)** | Use of 7 Claude Code AI agents for business operations | Yes |
| **Financial Operations** | Financial management and reporting for B.V. entity | Yes |
| **Human Resources (IS aspects)** | Pre-employment screening (VOG), IS awareness training, access lifecycle | Yes |
| **Corporate Governance** | Management review via Monthly Strategic meeting | Yes |
| **Procurement (IS aspects)** | Vendor risk assessment for suppliers processing B.V. information assets | Yes |

---

## 3. Services and Products

| Service/Product | Description | Classification |
|----------------|-------------|----------------|
| **Verity VE** | AI-powered value engineering platform (EU market distribution and customer support) | Confidential (patent-pending: [PATENT-VE-001]) |
| **Verity EAM** | AI-powered enterprise architecture management platform (EU market distribution and customer support) | Confidential (patent-pending: [PATENT-EAM-001]) |
| **Internal IT Services (shared)** | Access to shared Azure infrastructure, M365, identity management | Internal |
| **EU Customer Support** (future) | Customer-facing support for EU customers of Verity products | Internal |

---

## 4. Information Assets

### Data Assets

| Asset Category | Examples | Classification | Owner |
|---------------|----------|----------------|-------|
| **Source code (shared)** | Shared access to Verity VE and Verity EAM repositories | Confidential | CTO |
| **Customer data (EU)** (future) | EU customer data processed by B.V. under GDPR/AVG | Confidential | CEO |
| **Business records** | B.V. financial records, contracts, correspondence | Internal/Confidential | Finance Industry Senior Manager |
| **AI model configurations (shared)** | Shared access to Claude Code agent system prompts and reference materials | Internal | CISO |
| **Compliance artifacts** | B.V.-specific compliance evidence, Wbni registration, NCSC-NL correspondence | Internal/Confidential | CISO |
| **Communication data** | Email (M365), Teams messages, meeting notes involving B.V. business | Internal | CEO |
| **Personnel records (NL)** | Employment contracts, VOG screenings, training records | Confidential | CEO |

### AI Agent Assets

The same 7 Claude Code AI agents are in scope as information assets for B.V.:

| # | Agent | Security Classification |
|---|-------|------------------------|
| 1 | **SDLC Lead** | Internal |
| 2 | **CTO Agent** | Internal |
| 3 | **CISO Agent** | Internal |
| 4 | **AI Science Agent** | Internal |
| 5 | **Platform/SRE Agent** | Internal |
| 6 | **Product/Strategy Agent** | Internal |
| 7 | **AppSec Agent** | Internal |

---

## 5. Technology

### Cloud Infrastructure

| Component | Detail |
|-----------|--------|
| **Azure subscriptions (shared)** | Shared access to development and operations subscriptions in **West Europe** (Netherlands) and **Germany West Central** regions |
| **Azure Entra ID (shared)** | Shared identity provider with B.V.-specific role assignments and Conditional Access policies |
| **Azure Key Vault (shared)** | Shared cryptographic key management infrastructure |

### Development and Operations Tools

| Tool | Purpose | Data Processed |
|------|---------|---------------|
| **Microsoft 365 (shared)** | Email, Teams, SharePoint, OneDrive | Internal communications, business documents |
| **Git repositories (shared)** | Version control, document management | Source code, compliance artifacts |
| **Claude Code (shared)** | AI agent platform (7 agents) | Agent prompts, compliance artifacts |
| **ChatGPT (shared)** | General-purpose AI assistant | Internal queries, research |
| **Codex (shared)** | AI-assisted development | Code suggestions |
| **NorthGRC (shared)** | GRC platform (integration planned Phase 9) | Compliance evidence |
| **Linear (shared)** | Development task management | Sprint tasks |
| **Float (shared)** | Resource planning | Team capacity, schedules |
| **Microsoft Intune (shared)** | Endpoint management | Device compliance |

---

## 6. People

### Personnel in Scope

| # | Role | Name / Identifier | Location | B.V. Function |
|---|------|-------------------|----------|---------------|
| 1 | **CEO / Bestuurder** | Helge Heupel | Germany/Netherlands (remote) | Bestuurder with Wbni management body obligations. Policy approver. Risk acceptor. |
| 2 | **Finance Industry Senior Manager** | (Named individual) | Netherlands (remote) | Financial operations, B.V. financial compliance, industry advisory. |

### Shared Personnel (GmbH-employed, serving B.V.)

| # | Role | GmbH Function | B.V. Function |
|---|------|---------------|---------------|
| 3 | **CTO** | Architecture, AI engineering | Technical leadership for B.V. operations |
| 4 | **CISO** | ISMS/AIMS operation | NL compliance governance (Wbni, AVG) |
| 5 | **IT Pentester / Super Admin** | Head of Platform | Infrastructure support for B.V. operations |
| 6 | **Strategy Partner** | Product/strategy | EU market strategy |

### AI Agents in Scope

All 7 Claude Code agents serve B.V. operations. Agent governance (Trust Level 2, PR-based review) applies identically.

### Third-Party Access

Any contractors or third parties granted access to B.V. information assets are in scope.

---

## 7. Locations

### Physical Locations

Helge Heupel B.V. has **no physical offices in scope**. Personnel work remotely from locations in the Netherlands and Germany. Remote worker endpoints are in scope for endpoint security controls (Microsoft Intune MDM/MAM).

### Cloud Locations

| Azure Region | Purpose | Data Classification |
|-------------|---------|-------------------|
| **West Europe** (Netherlands) | Primary operations -- NL data residency | Internal, Confidential |
| **Germany West Central** (Frankfurt) | Shared infrastructure with GmbH | Internal, Confidential |

Data residency: B.V. data remains within EU Azure regions. No personal data transferred outside the EU without appropriate safeguards.

---

## 8. Interfaces with Other Entities

### Interface with Helge Heupel GmbH

| Interface | Data Flow | Mechanism | Security Controls |
|-----------|-----------|-----------|------------------|
| **Shared Azure tenant** | GmbH manages the Azure tenant; B.V. accesses via shared Entra ID | Azure Entra ID with B.V.-specific roles | Conditional Access, MFA, role separation |
| **Shared Git repositories** | B.V. contributes to and accesses shared source code and compliance artifacts | Git repository access permissions | Branch protection, PR review, audit trail |
| **Shared AI agent system** | 7 Claude Code agents produce artifacts for both entities | Agent CLAUDE.md in shared repos | Trust Level 2, PR review |
| **Cross-entity data transfers** | Compliance data, development artifacts, business communications | M365, Azure, Git | TLS 1.3 encryption, EU data residency |
| **Personnel sharing** | CTO, CISO, IT Pentester employed by GmbH serve B.V. | Employment/service agreements | Access rights specific to B.V. function |
| **Management overlap** | CEO serves as Geschaeftsfuehrer (GmbH) and Bestuurder (B.V.) | Management role | Governance model addresses both entities |
| **Shared SDLC framework** | SDLC-Growth-v2 and Startup overlay | Git-based documentation | Document control per ISO 27001 cl. 7.5 |

### Interface with Helge Heupel Inc.

| Interface | Data Flow | Mechanism | Security Controls |
|-----------|-----------|-----------|------------------|
| **Shared Azure tenant** | Inc. accesses shared Azure subscriptions (limited) | Azure Entra ID | Conditional Access, MFA, geo-restrictions |
| **Shared Git repositories** | Source code shared for product development | Git repository access permissions | Branch protection, PR review |
| **Cross-entity data transfers** | Limited business data flows B.V.-to-Inc. | Encrypted channels | EU-US Data Privacy Framework |

### Data Processing Agreements

- B.V.-GmbH inter-entity DPA governing joint controller / processor arrangements (to be formalized)
- B.V.-Inc. data transfer agreement under EU-US Data Privacy Framework (to be formalized for Startup phase)

---

## 9. Exclusions

| Exclusion | Justification |
|-----------|---------------|
| **Physical data center controls** | All processing occurs in Microsoft Azure cloud. Azure's ISO 27001 and SOC 2 Type II attestations provide compensating evidence for physical infrastructure controls. Shared responsibility model documents the boundary. |
| **Physical office security** | No physical offices in scope. All B.V. personnel work remotely. Endpoint security (Intune MDM/MAM) and access controls (Entra ID MFA) provide compensating controls. |
| **Manufacturing or physical product controls** | B.V. distributes software products only. No physical prototypes. |

---

## 10. Regulatory Context

| Regulation/Framework | Applicability | Key Requirements |
|---------------------|---------------|------------------|
| **Wbni** (Wet beveiliging netwerk- en informatiesystemen, as amended for NIS2) | B.V. classified under Dutch NIS2 transposition | NCSC-NL registration, incident reporting (24h/72h/30d), management body obligations, cybersecurity risk management |
| **AVG** (Algemene Verordening Gegevensbescherming) | Dutch GDPR implementation | Data protection by design, DPIA for AI features, data subject rights, supervisory authority (Autoriteit Persoonsgegevens) |
| **GDPR** (EU 2016/679) | EU personal data processing | 72h breach notification to AP, cross-border data transfer rules, inter-entity DPA requirements |
| **Dual notification requirement** | GDPR + Wbni (NIS2) separate obligations | Incidents may trigger both GDPR breach notification to AP (72h) and NIS2 notification to NCSC-NL (24h). Separate triggers, timelines, and procedures. |
| **NCSC-NL advisories** | Sector-specific cybersecurity baselines | Monitoring and incorporation of NCSC-NL advisories into ISMS control framework |
| **ISO 27001:2022** | Certification target | This ISMS scope statement supports B.V. certification. Separate certificate from GmbH. |
| **ISO 27001:2022/Amd 1:2024** | Climate change amendment | Climate change acknowledged in IMS Context (HH-IMS-CTX-001). Formal assessment deferred to Growth phase. |

`[CEO-SIGNOFF-REQUIRED]`

---

*Document: policies/scope/ISMS-Scope-BV.md*
*Document ID: HH-ISMS-SCOPE-BV-001*
*ISMS Scope Statement for Helge Heupel B.V.*
