---
document-id: HH-ISMS-PROC-005
title: "Supplier Security Procedure"
version: v1.0
date: 2026-02-25
classification: Internal
author: CISO Agent
reviewer: [CISO, CTO]
approver: CEO Helge Heupel
review-cycle: Annual
next-review: 2027-02-25
status: Draft
parent-document: HH-ISMS-POL-001
ims-context: HH-IMS-CTX-001
change-summary: Initial release
---

# Supplier Security Procedure

## 1. Purpose and Scope

This procedure defines how the **Helge Heupel Group** manages information security in supplier relationships throughout the supplier lifecycle — from onboarding through ongoing monitoring to offboarding. It operationalizes IS Policy Section 5 (risk management approach) and AI Policy Section 4 (AI system classification) for third-party engagements.

**Scope:** All third-party suppliers with access to Helge Heupel Group information, systems, or data, including:

- **Cloud infrastructure providers:** Microsoft Azure, Vercel, Cloudflare, Neon (PostgreSQL)
- **SaaS and development tools:** GitHub, Linear, Float, Microsoft 365, NorthGRC
- **AI service providers:** Anthropic (Claude Code), OpenAI (ChatGPT, Codex)
- **Consultants and advisory firms:** NorthGRC (External CISO / GRC platform), BearingPoint (ISMS/TISAX consulting)
- **Domain and infrastructure services:** Domain registrars, CDN providers, analytics tools

**Exclusions:** Internal AI agents (governed by AI Policy HH-AIMS-POL-001 and AI System Registry). Internal agents are not suppliers — they are organizational capabilities operating under Trust Level 2.

**Key principle:** Supplier security governance scales with the data sensitivity of the supplier relationship. Minimal bureaucracy for low-risk suppliers; full assessment for those handling Confidential or Secret data.

---

## 2. Normative References

### Standards and Policies

| Reference | Title | Relevance |
|-----------|-------|-----------|
| ISO 27001:2022 Annex A | A.5.19–A.5.23 | Supplier relationship security controls |
| ISO 42001:2023 Annex A.10 | Third-party relationships for AI | AI supplier assessment requirements |
| HH-ISMS-POL-001 | Information Security Policy | Parent policy (Section 5: risk management, Section 6: classification) |
| HH-AIMS-POL-001 | AI Policy | AI system classification framework (Section 4) |
| HH-ISMS-RMA-001 | Risk Assessment Methodology | 5x5 risk matrix used for vendor risk assessment |
| HH-AIMS-RMA-001 | AI Risk Assessment Procedure | AI-specific risk assessment for AI suppliers |
| GDPR Art. 28 | Processor requirements | DPA obligations for personal data processors |
| TISAX VDA ISA 6 Chapter 9 | Supplier management | TISAX supplier security requirements |

### Related Procedures

| Document ID | Title | Cross-Reference Purpose |
|-------------|-------|------------------------|
| HH-ISMS-PROC-001 | Incident Management Procedure | Supplier-triggered security incidents |
| HH-ISMS-PROC-003 | Access Control Procedure | Supplier access provisioning and revocation |
| HH-ISMS-PROC-004 | Change Management Procedure | Supplier service changes requiring change approval |
| HH-AIMS-RMA-001 | AI Risk Assessment Procedure | AI supplier onboarding assessment |

---

## 3. Decision Tree: Supplier Lifecycle

### 3.1 New Supplier Onboarding

```
START: New supplier engagement proposed
  |
  v
[1] What type of supplier?
  |-- Cloud/SaaS provider --> Continue to [2]
  |-- Consultant/Advisory --> Continue to [2] (plus NDA per Section 6)
  |-- AI service provider --> Continue to [2] (plus AI assessment per Section 7)
  |-- Other (domain, analytics) --> Continue to [2]
  |
  v
[2] What data will they access?
  |-- Public data only --> TIER 3 assessment (Section 4.3)
  |-- Internal data --> TIER 2 assessment (Section 4.2)
  |-- Confidential or Secret data --> TIER 1 assessment (Section 4.1)
  |
  v
[3] Complete vendor risk assessment (Section 4)
  |-- Assessment passed --> Continue to [4]
  |-- Assessment failed --> REJECT supplier. Document rationale. Inform CEO.
  |
  v
[4] Does the supplier process personal data on behalf of HH?
  |-- YES --> Execute DPA per Section 6. Must be signed before data access.
  |-- NO --> Continue to [5]
  |
  v
[5] Is the supplier an AI service provider?
  |-- YES --> Complete third-party AI assessment per Section 7.
  |           Register in AI System Registry before deployment.
  |-- NO --> Continue to [6]
  |
  v
[6] Negotiate and execute contractual security clauses (Section 5)
  |
  v
[7] Provision supplier access per HH-ISMS-PROC-003
  |-- Access scope limited to minimum necessary for service delivery
  |-- Access classification matches the risk tier assessment
  |
  v
[8] Add supplier to the Supplier Register (Section 8)
  |
  v
COMPLETE: Supplier onboarded. Next review per risk tier schedule.
```

**Responsible:** CEO initiates supplier engagement decisions. CISO conducts risk assessment. CTO validates technical integration requirements.

**Timeline:** Complete onboarding assessment before granting any access to HH information or systems. Tier 1 assessments may take 2–4 weeks; Tier 2 assessments 1–2 weeks; Tier 3 assessments 1–3 business days.

### 3.2 Ongoing Supplier Monitoring

```
START: Annual review cycle (or triggered event)
  |
  v
[1] Are the supplier's security certifications still valid?
  |-- YES --> Continue to [2]
  |-- NO --> Escalate to CEO. Request updated certification.
  |           If not remediated within 30 days: initiate re-assessment.
  |
  v
[2] Has the supplier's service performance been acceptable?
  |-- YES --> Continue to [3]
  |-- NO --> Document performance issues. Discuss at Weekly Technical.
  |           Consider risk tier re-evaluation.
  |
  v
[3] Have there been any security incidents involving this supplier?
  |-- YES --> Review incident details. Assess impact on HH.
  |           Update risk register if risk level has changed.
  |           Escalate to CEO for Tier 1 suppliers.
  |-- NO --> Continue to [4]
  |
  v
[4] Have data processing arrangements changed?
  |-- YES --> Does the change affect DPA scope? --> Update DPA if needed.
  |           Does the change affect risk tier? --> Re-assess if needed.
  |-- NO --> Continue to [5]
  |
  v
[5] Has the supplier introduced new sub-processors?
  |-- YES --> Review sub-processor list. Assess data flow changes.
  |           For Tier 1 suppliers: confirm sub-processors meet HH requirements.
  |-- NO --> Continue to [6]
  |
  v
[6] Update Supplier Register with review date and findings.
  |
  v
COMPLETE: Review documented. Next review per schedule.
```

**Review frequency by risk tier:**

| Risk Tier | Review Frequency | Forum |
|-----------|-----------------|-------|
| Tier 1 (Confidential/Secret) | Annual full review + quarterly check-in | Monthly Strategic meeting |
| Tier 2 (Internal) | Annual review | Monthly Strategic meeting |
| Tier 3 (Public only) | Biennial review | CEO ad hoc |

**Event-driven review triggers:** Supplier security incident, significant service outage, M&A activity involving the supplier, regulatory change affecting the supplier, material change to sub-processor list, contract renewal.

### 3.3 Supplier Offboarding

```
START: Supplier relationship ending (contract expiry, termination, replacement)
  |
  v
[1] Revoke all supplier access per HH-ISMS-PROC-003
  |-- All system accounts disabled or deleted
  |-- All API keys and tokens revoked
  |-- All VPN or network access removed
  |-- Timeline: within 4 hours for immediate termination;
  |   within 24 hours for planned offboarding
  |
  v
[2] Confirm data return or deletion
  |-- Request written confirmation of data deletion from supplier
  |-- For Tier 1 suppliers: request certificate of destruction
  |-- For personal data: confirm GDPR-compliant deletion per DPA terms
  |-- Retain evidence of data handling confirmation in supplier file
  |
  v
[3] Update Supplier Register
  |-- Mark supplier as "Inactive" with offboarding date
  |-- Record data return/deletion confirmation date
  |-- Archive contract and assessment documents (retain 7 years)
  |
  v
[4] Update risk register if residual risk changes
  |-- Remove supplier-specific risks that no longer apply
  |-- Adjust treatment plans for any risks affected by the change
  |
  v
[5] Conduct lessons learned if the offboarding was due to security concerns
  |-- Document findings in the supplier file
  |-- Inform the next Weekly Technical meeting
  |
  v
COMPLETE: Supplier offboarded. Records archived.
```

---

## 4. Vendor Risk Assessment

Vendor risk assessment follows a tiered model based on the highest data classification the supplier will access. All assessments are documented and stored in the supplier file within Git.

### 4.1 Tier 1 — Confidential/Secret Data Access

**Assessment scope:** Full security assessment for suppliers accessing Confidential or Secret classified data.

**Current Tier 1 suppliers:**

| Supplier | Service | Data Accessed | Certification |
|----------|---------|---------------|---------------|
| Microsoft Azure | Cloud infrastructure (West Europe, Germany West Central) | Confidential (customer data, application data) | ISO 27001, SOC 2 Type II, BSI C5 Type 2 |
| Neon | PostgreSQL database hosting | Confidential (customer data, application data) | SOC 2 Type II |

**Assessment requirements:**

1. **Security certification review:** ISO 27001 certification or equivalent (SOC 2 Type II, BSI C5) — current and covering in-scope services
2. **Security questionnaire:** Full vendor security questionnaire covering:
   - Information security governance and policies
   - Access control and identity management
   - Data encryption (at rest and in transit)
   - Incident management and notification procedures
   - Business continuity and disaster recovery
   - Personnel security and background screening
   - Vulnerability management and penetration testing
   - Data location and jurisdictional compliance
3. **Penetration test results:** Evidence of recent penetration testing (within 12 months) of the services used by HH
4. **DPA review by CEO:** Data Processing Agreement reviewed and approved by CEO Helge Heupel before execution (see Section 6)
5. **Sub-processor list:** Complete list of sub-processors with data flow description
6. **Right to audit clause:** Contract must include right-to-audit provision for HH

**Assessment decision:** CEO approves Tier 1 supplier engagements. CISO provides risk assessment recommendation.

### 4.2 Tier 2 — Internal Data Access

**Assessment scope:** Standard security assessment for suppliers accessing Internal classified data.

**Current Tier 2 suppliers:**

| Supplier | Service | Data Accessed | Certification |
|----------|---------|---------------|---------------|
| Vercel | Frontend hosting and deployment | Internal (source code, deployment configs) | SOC 2 Type II |
| Cloudflare | CDN, DNS, DDoS protection | Internal (traffic data, DNS records) | ISO 27001, SOC 2 Type II |
| GitHub | Source code repository | Internal (source code, documentation) | ISO 27001, SOC 2 Type II |
| Anthropic | Claude Code AI agents | Internal (code, compliance artifacts) | SOC 2 Type II |
| OpenAI | ChatGPT, Codex | Internal (code snippets, documentation) | SOC 2 Type II |

**Assessment requirements:**

1. **Security questionnaire (abbreviated):** Focused on access control, data handling, encryption, and incident notification
2. **Privacy policy review:** Confirm data handling practices are compatible with GDPR and HH classification requirements
3. **DPA if personal data:** Data Processing Agreement required if the supplier processes personal data (see Section 6)
4. **Service-level terms review:** Confirm availability commitments, support response times, and data locality

**Assessment decision:** CISO recommends; CEO approves.

### 4.3 Tier 3 — Public Data Only

**Assessment scope:** Minimal assessment for suppliers that only access or process Public classified data.

**Current Tier 3 suppliers:** Domain registrars, public analytics tools, marketing tools.

**Assessment requirements:**

1. **Privacy policy review:** Confirm the supplier does not process personal data beyond what is publicly available
2. **Basic due diligence:** Verify the supplier is a legitimate entity with a functioning service

**Assessment decision:** CISO reviews; CEO informed.

### 4.4 Consultant Assessment

**Applicable to:** BearingPoint (ISMS/TISAX consulting), NorthGRC (External CISO / GRC platform)

Consultants and advisory firms require specific assessment because they access multiple types of HH information during engagements:

1. **NDA required:** Mutual or unilateral NDA signed before any HH information is shared (see Section 5, clause 1)
2. **Access scoped to project needs:** Consultant access is limited to the specific engagement scope. No standing access beyond the project timeline.
3. **Security awareness confirmation:** Consultant confirms awareness of HH information classification scheme and handling requirements
4. **Background verification:** Consulting firm provides assurance of personnel screening for individuals assigned to HH engagement
5. **Data handling:** All HH data accessed by consultants must remain within agreed environments. No copying to personal devices or unauthorized cloud services.

**Special considerations:**
- **NorthGRC** as External CISO has broader access (risk register, audit findings, compliance artifacts — all Confidential). Treated as Tier 1 for access scope but assessed via consultant pathway.
- **BearingPoint** accesses ISMS documentation, TISAX evidence, and governance artifacts (Internal and Confidential). NDA and project-scoped access apply.

---

## 5. Contractual Security Clauses

The following security clauses must be included in all supplier contracts. CEO Helge Heupel approves all supplier contracts for the Helge Heupel Group.

### Mandatory Clauses (All Suppliers)

| # | Clause | Requirement | Applicability |
|---|--------|-------------|---------------|
| 1 | **Confidentiality / NDA** | Supplier must protect HH information from unauthorized disclosure. NDA covers the contract period plus 2 years post-termination. | All suppliers |
| 2 | **Security incident notification** | Supplier must notify HH within 24 hours of discovering a security breach or incident affecting HH data or systems. Notification to CEO and CISO via email. | All suppliers |
| 3 | **Data location** | Supplier must process HH data within the EU/EEA, or provide Standard Contractual Clauses (SCCs) or equivalent transfer mechanism for non-EU processing. EU data residency preferred per ISMS scope. | All suppliers handling HH data |
| 4 | **Compliance with applicable law** | Supplier must comply with GDPR, applicable national data protection law, and industry standards relevant to the services provided. | All suppliers |
| 5 | **Termination data handling** | Upon contract termination, supplier must return all HH data within 30 days and certify destruction of all copies, or confirm data deletion per agreed retention schedule. | All suppliers |

### Risk-Tier-Specific Clauses

| # | Clause | Requirement | Applicability |
|---|--------|-------------|---------------|
| 6 | **Data Processing Agreement (DPA)** | DPA per GDPR Art. 28 required when supplier processes personal data on behalf of HH (see Section 6). | Tier 1, Tier 2 (when personal data involved) |
| 7 | **Right to audit** | HH retains the right to audit the supplier's security controls, either directly or via independent third-party auditor. Audit may be exercised annually with 30 days notice. | Tier 1 suppliers |
| 8 | **Sub-processor notification** | Supplier must notify HH of any new sub-processor at least 30 days before granting the sub-processor access to HH data. HH retains right to object. | Tier 1 suppliers, cloud providers |
| 9 | **Business continuity** | Supplier must maintain business continuity and disaster recovery capabilities appropriate to the criticality of the service provided to HH. | Tier 1 suppliers |
| 10 | **Insurance** | Supplier must maintain appropriate professional indemnity and cyber liability insurance. | Tier 1 suppliers |

---

## 6. GDPR Data Processing Agreements

Per locked decision (GDPR DPA requirements embedded in supplier security, not standalone):

### When a DPA Is Required

A Data Processing Agreement per GDPR Art. 28 is required whenever a supplier processes personal data **on behalf of** the Helge Heupel Group (processor relationship). The CEO, as data controller for GmbH and B.V., signs all DPAs.

**DPA required when:**
- Supplier stores, transmits, or processes personal data of HH employees, customers, or end-users
- Supplier has technical access to databases or systems containing personal data
- Supplier provides hosted services where personal data resides

**DPA NOT required when:**
- Supplier only accesses Public classified data
- Supplier acts as an independent controller (e.g., the supplier's own marketing tools)
- No personal data is processed in the relationship

### DPA Checklist

Every DPA must address the following elements per GDPR Art. 28(3):

- [ ] **Processing purpose:** Specific description of why personal data is processed
- [ ] **Categories of personal data:** Types of data processed (name, email, usage data, etc.)
- [ ] **Categories of data subjects:** Who the data relates to (employees, customers, end-users)
- [ ] **Duration of processing:** Period for which data is processed
- [ ] **Sub-processor list:** Current sub-processors with data flow description
- [ ] **International transfer mechanisms:** Standard Contractual Clauses (SCCs) if data leaves EU/EEA
- [ ] **Technical and organizational measures (TOMs):** Encryption, access control, pseudonymization, backup, incident response
- [ ] **Data subject rights support:** Supplier must assist HH in fulfilling data subject rights requests
- [ ] **Data breach notification:** Supplier must notify HH without undue delay (within 24 hours maximum)
- [ ] **Audit rights:** HH retains right to audit compliance with DPA obligations
- [ ] **Data deletion/return:** Upon termination, data returned or destroyed per HH instructions

### Current DPA Inventory

| Supplier | DPA Status | DPA Type | Transfer Mechanism | Last Reviewed |
|----------|-----------|----------|-------------------|---------------|
| Microsoft Azure | Active | Microsoft DPA (standard) | SCCs + EU Data Boundary | 2026-02-25 |
| Neon | Active | DPA via Terms of Service | SCCs (US-based provider) | 2026-02-25 |
| Vercel | Active | DPA via Terms of Service | SCCs (US-based provider) | 2026-02-25 |
| Cloudflare | Active | DPA via Terms of Service | SCCs (US-based provider) | 2026-02-25 |
| Anthropic | Active | DPA via Terms of Service | SCCs (US-based provider) | 2026-02-25 |
| OpenAI | Active | DPA via Terms of Service | SCCs (US-based provider) | 2026-02-25 |
| GitHub | Active | DPA via GitHub Enterprise agreement | SCCs (US-based provider) | 2026-02-25 |

**DPA review:** All DPAs are reviewed annually as part of the Tier 1/Tier 2 supplier review cycle. CEO approves DPA renewals or amendments.

---

## 7. Third-Party AI Assessment

Per ISO 42001 Annex A.10 (Third-party relationships for AI), all third-party AI services must be assessed before deployment within the Helge Heupel Group.

### When This Section Applies

This section applies when:
- A new AI service from an external provider is being considered for use
- An existing AI service undergoes a major version change (model upgrade, API change)
- An AI service's data handling practices change materially

### Assessment Criteria

For each third-party AI service, evaluate the following:

| # | Criterion | Assessment Question | Evidence Required |
|---|-----------|-------------------|-------------------|
| 1 | **Intended use alignment** | Does the AI service's intended use align with the HH AI Policy (HH-AIMS-POL-001)? | Vendor documentation of AI service capabilities and limitations |
| 2 | **Data handling practices** | How does the provider handle input data? Is data used for model training? Can data processing be restricted to EU? | Provider's data processing documentation, DPA, privacy policy |
| 3 | **Model transparency** | Can we explain the AI service's outputs to auditors and customers? Does the provider disclose model limitations? | Provider transparency documentation, model cards (if available) |
| 4 | **EU AI Act classification** | What EU AI Act risk level applies to this AI service in our use context? | Classification per HH-AIMS-POL-001 Section 4 (dual-axis framework) |
| 5 | **Human oversight measures** | Does the service support human-in-the-loop operation? Can outputs be reviewed before use? | Integration architecture, workflow documentation |
| 6 | **Security posture** | Does the provider have ISO 27001, SOC 2, or equivalent? Are API endpoints secured? | Security certifications, API security documentation |
| 7 | **Incident notification** | Will the provider notify HH of AI-specific incidents (model compromise, data breach, bias discovery)? | Incident notification terms in contract or DPA |

### Current Third-Party AI Inventory

| AI Service | Registry ID | EU AI Act Level | Assessment Status | Last Assessment |
|------------|-------------|-----------------|-------------------|-----------------|
| ChatGPT (OpenAI) | AI-3PARTY-001 | Limited-Risk (Art. 50) | Assessed | 2026-02-22 |
| Codex (OpenAI) | AI-3PARTY-002 | Limited-Risk (Art. 50) | Assessed | 2026-02-22 |
| Claude Code (Anthropic) | AI-AGENT-001 through AI-AGENT-007 | Limited-Risk (Art. 50) | Assessed | 2026-02-22 |

### New AI Tool Onboarding

Before deploying any new third-party AI tool:

1. Complete the AI risk assessment per HH-AIMS-RMA-001 (all 7 steps)
2. Complete the third-party AI assessment (Section 7 criteria above)
3. Register the AI system in the AI System Registry (`ai-registry/` directory)
4. Confirm the AI system does not perform any prohibited practice per AI Policy Section 5
5. Obtain CEO approval for deployment
6. Configure human oversight gates appropriate to the SDLC Usage Tier classification
7. Document the assessment outcome in the supplier file

**Prohibited:** Use of non-approved AI tools for processing proprietary, Confidential, or Secret data (AI Policy Section 5.2, practice #14).

---

## 8. Supplier Register

The Supplier Register is maintained as a controlled document within the Git repository at `suppliers/supplier-register.md` (or YAML format when the register grows beyond 20 suppliers).

### Register Fields

| Field | Description | Example |
|-------|-------------|---------|
| Supplier Name | Legal entity name | Microsoft Ireland Operations Limited |
| Service Provided | Description of services | Azure cloud infrastructure |
| Data Classification Accessed | Highest classification the supplier accesses | Confidential |
| Risk Tier | Assessment tier (1, 2, or 3) | Tier 1 |
| DPA Status | Current DPA status | Active (Microsoft DPA) |
| Contract Status | Active, Expiring, Expired | Active |
| Contract Expiry | Date of contract expiry | 2027-06-30 |
| Last Assessment Date | Date of most recent risk assessment | 2026-02-25 |
| Next Review Date | Scheduled next review | 2027-02-25 |
| Primary Contact | HH contact responsible for the relationship | CEO |
| Notes | Any relevant notes or conditions | Azure West Europe and Germany West Central regions |

### Register Maintenance

- **Updated by:** CISO, with CEO oversight
- **Review frequency:** Quarterly at Monthly Strategic meeting (agenda item 3: risk register review)
- **Access:** Internal classification — accessible to all HH personnel
- **Storage:** Git repository under version control

---

## 9. Annex A Control Mapping

| Control | Name | How This Procedure Addresses It |
|---------|------|---------------------------------|
| A.5.19 | Information Security in Supplier Relationships | Sections 3–5 define the full supplier lifecycle management with risk-based assessment tiers and contractual clauses |
| A.5.20 | Addressing Information Security Within Supplier Agreements | Section 5 specifies 10 mandatory and risk-tier-specific contractual security clauses |
| A.5.21 | Managing Information Security in the ICT Supply Chain | Section 4 assesses the full ICT supply chain (Azure, Neon, Vercel, Cloudflare, GitHub, Anthropic, OpenAI) with sub-processor notification requirements |
| A.5.22 | Monitoring, Review and Change Management of Supplier Services | Section 3.2 defines the ongoing monitoring decision tree with risk-tier-based review frequencies and event-driven triggers |
| A.5.23 | Information Security for Use of Cloud Services | Section 4.1 (Tier 1 assessment for Azure, Neon) and Section 4.2 (Tier 2 assessment for Vercel, Cloudflare) address cloud-specific security requirements including data location, certification, and right to audit |

### ISO 42001 Annex A Control Mapping

| Control | Name | How This Procedure Addresses It |
|---------|------|---------------------------------|
| A.10.2 | Third-party and customer relationships | Section 7 defines the third-party AI assessment criteria and onboarding process |
| A.10.3 | Suppliers | Section 4 (vendor risk assessment) covers AI suppliers as part of the tiered assessment model |
| A.10.4 | Provision to third parties | Not directly applicable at Startup (HH does not yet provide AI to third parties as a service) — addressed when Verity product AI reaches customer deployment |

---

## 10. Regulatory Obligations

| Framework | Requirement | How This Procedure Addresses It |
|-----------|-------------|--------------------------------|
| **ISO 27001:2022** | Annex A.5.19–A.5.23 | Full supplier lifecycle management with tiered risk assessment (Section 3, 4) |
| **ISO 42001:2023** | Annex A.10 (third-party AI) | Third-party AI assessment before deployment, AI System Registry integration (Section 7) |
| **TISAX VDA ISA 6** | Chapter 9 (supplier management) | Tiered vendor risk assessment aligned with TISAX protection needs for Very High, High, and Normal classification |
| **GDPR** | Art. 28 (processor requirements) | DPA management embedded in Section 6 with checklist, inventory, and CEO sign-off |
| **NIS2** | Art. 21(d) (supply chain security) | **Informational:** Supply chain security addressed through tiered assessment and contractual clauses. Full NIS2 supply chain program deferred to Growth phase. |

---

## 11. Document Control

### Version History

| Version | Date | Author | Change Summary | Approved By |
|---------|------|--------|---------------|-------------|
| v1.0 | 2026-02-25 | CISO Agent | Initial release | Pending CEO approval |

### Approval

This document is approved via Git Pull Request. The approval chain is:
1. **Author:** CISO Agent drafts the document
2. **Reviewers:** CISO and CTO review via PR comments
3. **Approver:** CEO Helge Heupel approves via PR merge

`[CEO-SIGNOFF-REQUIRED]`

### Next Review

- **Annual review:** 2027-02-25
- **Extraordinary review triggers:** New supplier onboarding, supplier security incident, regulatory change affecting supplier requirements, significant change to ICT supply chain

### Related Documents

| Document ID | Title | Relationship |
|-------------|-------|-------------|
| HH-ISMS-POL-001 | Information Security Policy | Parent policy |
| HH-AIMS-POL-001 | AI Policy | AI classification and governance framework |
| HH-ISMS-PROC-001 | Incident Management Procedure | Supplier-triggered incident handling |
| HH-ISMS-PROC-003 | Access Control Procedure | Supplier access provisioning and revocation |
| HH-ISMS-PROC-004 | Change Management Procedure | Supplier service changes |
| HH-AIMS-RMA-001 | AI Risk Assessment Procedure | AI supplier risk assessment |
| HH-ISMS-RMA-001 | Risk Assessment Methodology | Vendor risk scoring methodology |
| HH-GOV-Startup-v1.0 | Governance Model | Review forums and escalation paths |

---

*Document: procedures/supplier-security.md*
*Document ID: HH-ISMS-PROC-005*
*Supplier Security Procedure for the Helge Heupel Group*
