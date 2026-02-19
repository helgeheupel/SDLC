---
document-id: HH-ISMS-SCOPE-INC-001
title: "ISMS Scope Statement: Helge Heupel Inc."
version: v1.0
date: 2026-02-19
classification: Internal
entity: Helge Heupel Inc.
jurisdiction: United States (US)
ims-context: HH-IMS-CTX-001
status: Draft
author: CISO Agent
reviewer: [CISO, CTO]
approver: CEO Helge Heupel
review-cycle: Annual
next-review: 2027-02-19
---

# ISMS Scope Statement: Helge Heupel Inc.

## 1. Legal Entity

| Field | Detail |
|-------|--------|
| **Full legal name** | Helge Heupel Inc. |
| **Registration** | Registered in the United States (state registration) |
| **Jurisdiction** | United States of America |
| **Officer** | Helge Heupel |
| **Primary function** | Future US market entry entity. Currently operating with minimal scope. US-specific compliance (FedRAMP, SOC 2, CCPA) deferred until US customer pipeline is active. |

---

## 2. Organizational Scope

| Function | Description | In Scope |
|----------|-------------|----------|
| **US Market Entry** (future) | Future US customer-facing operations for Verity VE and Verity EAM | Yes (skeleton) |
| **Product Development (shared)** | Shared access to Verity product development repositories | Yes |
| **Compliance Governance (US)** | US regulatory monitoring (advisory level) | Yes (advisory only) |

---

## 3. Services and Products

| Service/Product | Description | Classification |
|----------------|-------------|----------------|
| **Verity VE** | AI-powered value engineering platform (future US distribution) | Confidential (patent-pending: [PATENT-VE-001]) |
| **Verity EAM** | AI-powered enterprise architecture management platform (future US distribution) | Confidential (patent-pending: [PATENT-EAM-001]) |
| **Shared IT Services** | Access to shared Azure infrastructure and M365 (limited) | Internal |

---

## 4. Information Assets

[TO BE COMPLETED during Startup phase]

**Preliminary notes:** Inc. information assets will include shared access to source code repositories, US customer data (when applicable), business records specific to US operations, and the same 7 Claude Code AI agents (SDLC Lead, CTO, CISO, AI Science, Platform/SRE, Product/Strategy, AppSec) used across all entities. A detailed asset inventory will be developed when US operations materialize.

---

## 5. Technology

[TO BE COMPLETED during Startup phase]

**Preliminary notes:** Inc. will access the shared Azure tenant. Specific Azure regions for US operations (e.g., East US, West US) will be determined when US customer data residency requirements are defined. Shared access to M365, Git repositories, and Claude Code agents.

---

## 6. People

[TO BE COMPLETED during Startup phase]

**Preliminary notes:** CEO Helge Heupel serves as Officer. No Inc.-dedicated personnel at Startup. Shared personnel from GmbH (CTO, CISO, IT Pentester) provide support. US-based personnel and contractors will be added to scope when hired.

---

## 7. Locations

[TO BE COMPLETED during Startup phase]

**Preliminary notes:** Cloud-only operations. Azure regions for US data residency to be determined. No physical offices planned. Remote workers in US jurisdictions will be in scope when applicable.

---

## 8. Interfaces with Other Entities

[TO BE COMPLETED during Startup phase]

**Preliminary notes:** Inc. interfaces with GmbH and B.V. through the shared Azure tenant, Git repositories, and AI agent system. Cross-entity data transfers from EU to US are governed by the EU-US Data Privacy Framework. Detailed interface documentation will be developed when US operations are active.

---

## 9. Exclusions

[TO BE COMPLETED during Startup phase]

**Preliminary notes:** Physical data center controls excluded (Azure shared responsibility model). US-specific regulatory compliance controls (FedRAMP, SOC 2 Type II) are deferred. CCPA/CPRA compliance requirements are monitored at an advisory level. Detailed exclusions and justifications will be documented when US scope is formalized.

---

## 10. Regulatory Context

[TO BE COMPLETED during Startup phase]

**Preliminary notes:** The following US regulations are monitored at an advisory level:

| Regulation/Framework | Status | Notes |
|---------------------|--------|-------|
| **CCPA/CPRA** | Advisory -- monitoring | California privacy law. Applicable when processing California resident personal data. |
| **SOC 2 Type II** | Deferred | Customer-driven requirement. To be pursued when US customer pipeline is active. |
| **FedRAMP** | Deferred | US federal government requirement. To be pursued when US government customer pipeline is active. |
| **NIST SP 800-53** | Advisory reference | Referenced for cross-framework control mapping. No compliance artifacts produced. |
| **ISO 27001:2022** | Certification planned | Inc. certification to follow GmbH and B.V. certification. |

`[CEO-SIGNOFF-REQUIRED]`

---

*Document: policies/scope/ISMS-Scope-Inc.md*
*Document ID: HH-ISMS-SCOPE-INC-001*
*ISMS Scope Statement for Helge Heupel Inc. (Skeleton)*
