---
document-id: HH-ISMS-SOA-001
title: "Statement of Applicability -- ISO 27001:2022"
version: v1.0
date: 2026-02-20
classification: Confidential
author: CISO Agent
approver: CEO Helge Heupel
status: Draft
generated-by: soa/scripts/generate-soa.js
---

# Statement of Applicability -- ISO 27001:2022

## 1. Introduction

This Statement of Applicability (SoA) documents the applicability determination for all 93 controls in ISO/IEC 27001:2022 Annex A for the Helge Heupel Group (GmbH, B.V., Inc.). Each control has been assessed for applicability based on the organization's risk assessment, regulatory requirements (NIS2UmsuCG, Wbni, GDPR, EU AI Act), and operational context (cloud-only, fully remote, AI-powered development).

**Methodology:** Controls are assessed against the organization's risk profile, legal requirements, and business context. Applicable controls receive an implementation status assessment. Not-applicable controls receive a justification explaining why the control does not apply, referencing the Azure shared responsibility model where relevant.

**Implementation status levels:**
- **Fully Implemented** -- Control is operational with documented evidence
- **Partially Implemented** -- Control mechanisms exist but documentation or full operationalization is pending
- **Planned** -- Control is scheduled for implementation in a future SDLC phase
- **Not Started** -- No implementation work has begun (used for not-applicable controls)

---

## 2. Summary Statistics

| Metric | Count |
|--------|-------|
| Total Annex A Controls | 93 |
| Applicable | 86 |
| Not Applicable | 7 |
| Fully Implemented | 12 |
| Partially Implemented | 43 |
| Planned | 31 |
| Not Started | 7 |

**Applicability rate:** 92.5% of controls are applicable.

**Implementation coverage of applicable controls:**
- Fully Implemented: 12 (14.0%)
- Partially Implemented: 43 (50.0%)
- Planned: 31 (36.0%)

---

## 3. Organizational Controls (A.5.1 -- A.5.37)

**Controls:** 37 | **Applicable:** 37 | **Not Applicable:** 0

| Control | Name | Applicable | Status | Justification (summary) |
|---------|------|:----------:|--------|-------------------------|
| A.5.1 | Policies for Information Security | Yes | fully implemented | Applicable. The Helge Heupel Group maintains an Information Security Policy (HH-ISMS-POL-001) approved by CEO Helge Heupel, covering all 3 entities (GmbH, B. |
| A.5.2 | Information Security Roles and Responsibilities | Yes | fully implemented | Applicable. The IS Policy Section 4 defines information security roles and responsibilities for all 6 human team members and 7 AI agents. |
| A.5.3 | Segregation of Duties | Yes | partially implemented | Applicable. The IS Policy defines segregation of duties principles for the Helge Heupel Group. |
| A.5.4 | Management Responsibilities | Yes | fully implemented | Applicable. CEO Helge Heupel as Geschaeftsfuehrer of GmbH and Bestuurder of B. |
| A.5.5 | Contact with Authorities | Yes | partially implemented | Applicable. The Helge Heupel Group must maintain contact with multiple regulatory authorities across 3 jurisdictions: BSI (Germany, NIS2UmsuCG), NCSC-NL (Netherlands, Wbni), and data protection authorities (BfDI, AP). |
| A.5.6 | Contact with Special Interest Groups | Yes | partially implemented | Applicable. The Helge Heupel Group engages with special interest groups relevant to its security posture including the ENX Association (TISAX), BSI advisories, Azure Security Center intelligence feeds, and AI governance communities. |
| A.5.7 | Threat Intelligence | Yes | partially implemented | Applicable. The Helge Heupel Group leverages Azure Security Center, Microsoft Defender for Cloud, and Entra ID Identity Protection for automated threat intelligence. |
| A.5.8 | Information Security in Project Management | Yes | fully implemented | Applicable. The SDLC-Growth-v2 framework and its Startup overlay integrate information security into all project management activities. |
| A.5.9 | Inventory of Information and Other Associated Assets | Yes | partially implemented | Applicable. The Helge Heupel Group maintains an inventory of information assets including Azure cloud resources, M365 services, Git repositories, AI systems (7 Claude Code agents, ChatGPT, Codex), and product systems (Verity VE, Verity EAM). |
| A.5.10 | Acceptable Use of Information and Other Associated Assets | Yes | fully implemented | Applicable. The IS Policy and AI Policy define acceptable use requirements for all information assets. |
| A.5.11 | Return of Assets | Yes | partially implemented | Applicable. When personnel leave the Helge Heupel Group or change roles, all information assets must be returned or securely wiped. |
| A.5.12 | Classification of Information | Yes | fully implemented | Applicable. The Helge Heupel Group maintains a four-level information classification scheme (Public, Internal, Confidential, Secret) aligned with TISAX ISA Chapter 7 handling requirements. |
| A.5.13 | Labelling of Information | Yes | fully implemented | Applicable. All controlled documents within the IMS carry classification labels in YAML frontmatter (document-id, classification, version, date). |
| A.5.14 | Information Transfer | Yes | partially implemented | Applicable. Information transfer between the 3 Helge Heupel Group entities and with external parties must be protected. |
| A.5.15 | Access Control | Yes | partially implemented | Applicable. Access control is implemented through Microsoft Entra ID (Azure AD) with Conditional Access policies for all Azure and M365 resources. |
| A.5.16 | Identity Management | Yes | partially implemented | Applicable. All user identities are managed centrally through Microsoft Entra ID for the shared Azure tenant. |
| A.5.17 | Authentication Information | Yes | partially implemented | Applicable. Multi-factor authentication is enforced for all accounts via Microsoft Entra ID Conditional Access policies. |
| A.5.18 | Access Rights | Yes | partially implemented | Applicable. Access rights are provisioned based on role requirements using Azure RBAC with least-privilege principle. |
| A.5.19 | Information Security in Supplier Relationships | Yes | planned | Applicable. The Helge Heupel Group relies on critical suppliers including Microsoft (Azure, M365), Anthropic (Claude Code), OpenAI (ChatGPT, Codex), Vercel, Cloudflare, and Neon (PostgreSQL). |
| A.5.20 | Addressing Information Security Within Supplier Agreements | Yes | planned | Applicable. Agreements with suppliers must include information security requirements. |
| A.5.21 | Managing Information Security in the ICT Supply Chain | Yes | planned | Applicable. The Helge Heupel Group's ICT supply chain includes cloud infrastructure (Azure), AI model providers (Anthropic, OpenAI), hosting platforms (Vercel, Cloudflare), and database providers (Neon). |
| A.5.22 | Monitoring, Review and Change Management of Supplier Services | Yes | planned | Applicable. Supplier services (Azure, Anthropic, OpenAI, Vercel, Cloudflare, Neon) must be monitored for security, availability, and compliance. |
| A.5.23 | Information Security for Use of Cloud Services | Yes | planned | Applicable. Cloud services are the primary infrastructure for the Helge Heupel Group (Azure West Europe, Germany West Central). |
| A.5.24 | Information Security Incident Management Planning and Preparation | Yes | partially implemented | Applicable. The IS Policy Annex includes an interim incident response procedure covering detection, triage, containment, eradication, and recovery. |
| A.5.25 | Assessment and Decision on Information Security Events | Yes | partially implemented | Applicable. Information security events must be assessed to determine whether they constitute information security incidents. |
| A.5.26 | Response to Information Security Incidents | Yes | partially implemented | Applicable. The IS Policy Annex defines interim incident response procedures including containment, eradication, and recovery steps. |
| A.5.27 | Learning from Information Security Incidents | Yes | partially implemented | Applicable. Post-incident reviews (lessons learned) must be conducted after significant security incidents to prevent recurrence. |
| A.5.28 | Collection of Evidence | Yes | partially implemented | Applicable. Evidence collection procedures must be defined for information security incidents to support potential legal action or regulatory investigation. |
| A.5.29 | Information Security During Disruption | Yes | planned | Applicable. The Helge Heupel Group must maintain information security during business disruptions including cloud service outages, cyberattacks, and natural disasters. |
| A.5.30 | ICT Readiness for Business Continuity | Yes | planned | Applicable. ICT systems (Azure cloud, M365, Git repositories, AI services) must be ready to support business continuity requirements. |
| A.5.31 | Legal, Statutory, Regulatory and Contractual Requirements | Yes | fully implemented | Applicable. The Helge Heupel Group operates across 3 jurisdictions (DE, NL, US) with multiple regulatory requirements: NIS2UmsuCG (Germany), Wbni (Netherlands), GDPR/BDSG/AVG (EU data protection), EU AI Act, TISAX. |
| A.5.32 | Intellectual Property Rights | Yes | partially implemented | Applicable. The Helge Heupel Group holds patent-pending intellectual property for Verity VE (PATENT-VE-001) and Verity EAM (PATENT-EAM-001). |
| A.5.33 | Protection of Records | Yes | fully implemented | Applicable. The Document Control Framework (HH-ISMS-DOC-001) establishes Git-based document control satisfying ISO 27001 cl. |
| A.5.34 | Privacy and Protection of PII | Yes | fully implemented | Applicable. The Helge Heupel Group processes personal data across 3 jurisdictions subject to GDPR (EU), BDSG (Germany), and AVG (Netherlands). |
| A.5.35 | Independent Review of Information Security | Yes | planned | Applicable. Independent review of the ISMS is required by ISO 27001 cl. |
| A.5.36 | Compliance with Policies, Rules and Standards | Yes | fully implemented | Applicable. Compliance with information security policies is enforced through the governance model with risk-tiered gate criteria. |
| A.5.37 | Documented Operating Procedures | Yes | fully implemented | Applicable. The IS Policy Annex (HH-ISMS-POL-001-ANNEX) provides documented operating procedures for information security activities, mapping 1:1 to the IS Policy sections. |

---

## 4. People Controls (A.6.1 -- A.6.8)

**Controls:** 8 | **Applicable:** 8 | **Not Applicable:** 0

| Control | Name | Applicable | Status | Justification (summary) |
|---------|------|:----------:|--------|-------------------------|
| A.6.1 | Screening | Yes | planned | Applicable. All personnel joining the Helge Heupel Group must undergo appropriate background screening proportionate to their role and access level. |
| A.6.2 | Terms and Conditions of Employment | Yes | partially implemented | Applicable. Employment contracts for all Helge Heupel Group personnel include information security responsibilities and confidentiality obligations. |
| A.6.3 | Information Security Awareness, Education and Training | Yes | planned | Applicable. All Helge Heupel Group personnel must receive information security awareness training covering the IS Policy, classification handling, incident reporting, and AI-specific risks. |
| A.6.4 | Disciplinary Process | Yes | planned | Applicable. A disciplinary process must exist to address information security policy violations by personnel. |
| A.6.5 | Responsibilities After Termination or Change of Employment | Yes | planned | Applicable. Personnel leaving the Helge Heupel Group or changing roles retain information security responsibilities for Confidential and Secret information they accessed. |
| A.6.6 | Confidentiality or Non-Disclosure Agreements | Yes | partially implemented | Applicable. All Helge Heupel Group personnel and contractors sign NDAs covering Confidential and Secret information. |
| A.6.7 | Remote Working | Yes | partially implemented | Applicable. The Helge Heupel Group operates as a fully remote organization with no physical offices in scope. |
| A.6.8 | Information Security Event Reporting | Yes | partially implemented | Applicable. All Helge Heupel Group personnel must report information security events promptly. |

---

## 5. Physical Controls (A.7.1 -- A.7.14)

**Controls:** 14 | **Applicable:** 7 | **Not Applicable:** 7

| Control | Name | Applicable | Status | Justification (summary) |
|---------|------|:----------:|--------|-------------------------|
| A.7.1 | Physical Security Perimeters | No | N/A | Not applicable. The Helge Heupel Group operates as a fully remote, cloud-only organization with no owned or leased physical premises within the ISMS scope. |
| A.7.2 | Physical Entry | No | N/A | Not applicable. The Helge Heupel Group has no physical facilities requiring entry control. |
| A.7.3 | Securing Offices, Rooms and Facilities | No | N/A | Not applicable. The Helge Heupel Group does not operate physical offices, rooms, or facilities within its ISMS scope. |
| A.7.4 | Physical Security Monitoring | Yes | planned | Applicable. While the Helge Heupel Group has no physical premises to monitor, this control is conservatively interpreted to include monitoring of remote access patterns to cloud resources. |
| A.7.5 | Protecting Against Physical and Environmental Threats | No | N/A | Not applicable. All information processing infrastructure is hosted in Microsoft Azure datacenters. |
| A.7.6 | Working in Secure Areas | No | N/A | Not applicable. The Helge Heupel Group does not operate secure areas such as server rooms, data centers, or restricted physical zones. |
| A.7.7 | Clear Desk and Clear Screen | Yes | planned | Applicable. All 6 Helge Heupel Group team members work remotely from home offices. |
| A.7.8 | Equipment Siting and Protection | Yes | planned | Applicable. Endpoint devices (MacOS and Windows laptops) used by all 6 team members must be sited and protected appropriately in their remote work environments. |
| A.7.9 | Security of Assets Off-Premises | Yes | partially implemented | Applicable. For a cloud-only, fully remote organization, all assets are effectively off-premises. |
| A.7.10 | Storage Media | Yes | partially implemented | Applicable. Storage media includes the SSDs in team member laptops and any cloud storage (Azure Blob, OneDrive, SharePoint). |
| A.7.11 | Supporting Utilities | No | N/A | Not applicable. All information processing infrastructure is hosted in Microsoft Azure. |
| A.7.12 | Cabling Security | No | N/A | Not applicable. The Helge Heupel Group does not own or manage physical network cabling infrastructure. |
| A.7.13 | Equipment Maintenance | Yes | planned | Applicable. Endpoint devices (MacOS and Windows laptops) used by team members require lifecycle management including maintenance, warranty tracking, OS and firmware updates, and timely replacement. |
| A.7.14 | Secure Disposal or Re-Use of Equipment | Yes | planned | Applicable. When endpoint devices (laptops) reach end-of-life or are reassigned, all data must be securely erased. |

---

## 6. Technological Controls (A.8.1 -- A.8.34)

**Controls:** 34 | **Applicable:** 34 | **Not Applicable:** 0

| Control | Name | Applicable | Status | Justification (summary) |
|---------|------|:----------:|--------|-------------------------|
| A.8.1 | User Endpoint Devices | Yes | partially implemented | Applicable. All HH team members use managed endpoint devices (MacOS/Windows laptops). |
| A.8.2 | Privileged Access Rights | Yes | partially implemented | Applicable. Privileged access to Azure subscriptions and M365 admin roles is managed through Azure PIM (Privileged Identity Management) with time-limited just-in-time elevation. |
| A.8.3 | Information Access Restriction | Yes | partially implemented | Applicable. Access to information is restricted based on the four-level classification scheme (Public, Internal, Confidential, Secret). |
| A.8.4 | Access to Source Code | Yes | partially implemented | Applicable. Source code for Verity VE and Verity EAM (patent-pending products) is stored in Git repositories with access restricted to authorized personnel. |
| A.8.5 | Secure Authentication | Yes | partially implemented | Applicable. Multi-factor authentication is enforced for all accounts via Microsoft Entra ID Conditional Access policies. |
| A.8.6 | Capacity Management | Yes | planned | Applicable. Azure cloud resources must be monitored for capacity to ensure Verity VE and EAM service availability. |
| A.8.7 | Protection Against Malware | Yes | partially implemented | Applicable. Endpoint protection against malware is provided through Microsoft Defender for Endpoint deployed via Intune MDM on all team member devices. |
| A.8.8 | Management of Technical Vulnerabilities | Yes | planned | Applicable. Technical vulnerabilities in Azure infrastructure, application dependencies, and endpoint systems must be identified, assessed, and remediated. |
| A.8.9 | Configuration Management | Yes | planned | Applicable. Configuration management for Azure resources, M365 settings, and application deployments must be documented and controlled. |
| A.8.10 | Information Deletion | Yes | planned | Applicable. Information stored in Azure cloud services, Neon PostgreSQL databases, M365, and endpoint devices must be deleted when no longer required, in compliance with GDPR/BDSG/AVG data retention requirements. |
| A.8.11 | Data Masking | Yes | planned | Applicable. Data masking is relevant for non-production environments where real customer data should not be used. |
| A.8.12 | Data Leakage Prevention | Yes | planned | Applicable. Data leakage prevention is critical for protecting patent-pending Verity VE and EAM intellectual property, Confidential/Secret classified information, and customer data. |
| A.8.13 | Information Backup | Yes | partially implemented | Applicable. Critical information including Azure resources, Neon PostgreSQL databases, Git repositories, and M365 data must be backed up regularly. |
| A.8.14 | Redundancy of Information Processing Facilities | Yes | partially implemented | Applicable. Azure provides infrastructure redundancy through availability zones and regional redundancy (West Europe, Germany West Central). |
| A.8.15 | Logging | Yes | partially implemented | Applicable. Azure Monitor collects platform-level logs for all cloud resources. |
| A.8.16 | Monitoring Activities | Yes | partially implemented | Applicable. Monitoring of Azure infrastructure, application performance, and security events is implemented through Azure Monitor, Azure Security Center, and Entra ID Identity Protection. |
| A.8.17 | Clock Synchronization | Yes | partially implemented | Applicable. Accurate time synchronization is critical for log correlation, audit trail integrity, and incident investigation. |
| A.8.18 | Use of Privileged Utility Programs | Yes | planned | Applicable. Privileged utility programs (admin scripts, Azure CLI, PowerShell with elevated privileges) must be controlled. |
| A.8.19 | Installation of Software on Operational Systems | Yes | partially implemented | Applicable. Software installation on endpoint devices and deployment to Azure production environments must be controlled. |
| A.8.20 | Networks Security | Yes | partially implemented | Applicable. Azure virtual networking provides network security through NSGs (Network Security Groups), VNets, and subnet isolation. |
| A.8.21 | Security of Network Services | Yes | partially implemented | Applicable. Network services consumed by the Helge Heupel Group include Azure networking services, Cloudflare CDN/DDoS protection, and Vercel edge network. |
| A.8.22 | Segregation of Networks | Yes | partially implemented | Applicable. Azure virtual networks provide network segregation between production, staging, and development environments. |
| A.8.23 | Web Filtering | Yes | planned | Applicable. Web filtering to protect against access to malicious websites and web-based threats is relevant for all endpoint devices. |
| A.8.24 | Use of Cryptography | Yes | partially implemented | Applicable. Cryptography is used extensively across the Helge Heupel Group: TLS for all data in transit, Azure Storage Service Encryption for data at rest, FileVault/BitLocker for endpoint disk encryption, and HTTPS enforcement for all web applications. |
| A.8.25 | Secure Development Life Cycle | Yes | partially implemented | Applicable. The Helge Heupel Group operates a comprehensive SDLC framework (SDLC-Growth-v2) with security-by-design principles, AI-assisted code review via Claude Code agents, and Git-based change control. |
| A.8.26 | Application Security Requirements | Yes | planned | Applicable. Security requirements must be defined for Verity VE and EAM applications including authentication, authorization, input validation, and data protection. |
| A.8.27 | Secure System Architecture and Engineering Principles | Yes | planned | Applicable. Secure architecture principles including defense in depth, least privilege, and fail-secure design are incorporated into the Helge Heupel Group's cloud architecture. |
| A.8.28 | Secure Coding | Yes | partially implemented | Applicable. Code review is mandatory via Git PR workflow for all changes to Verity VE and EAM repositories. |
| A.8.29 | Security Testing in Development and Acceptance | Yes | planned | Applicable. Security testing must be integrated into development and acceptance processes for Verity VE and EAM. |
| A.8.30 | Outsourced Development | Yes | planned | Applicable. While the Helge Heupel Group primarily develops in-house with AI agent assistance, third-party development contributions and open-source dependencies must be governed. |
| A.8.31 | Separation of Development, Test and Production Environments | Yes | partially implemented | Applicable. Verity VE and EAM services are deployed across separated environments (development, staging, production) in Azure. |
| A.8.32 | Change Management | Yes | partially implemented | Applicable. All changes to Verity VE and EAM code, infrastructure configurations, and compliance artifacts are managed through Git-based change control with PR approval workflows. |
| A.8.33 | Test Information | Yes | planned | Applicable. Test information for Verity VE and EAM must be protected, particularly when test data contains or resembles real customer data. |
| A.8.34 | Protection of Information Systems During Audit Testing | Yes | planned | Applicable. During ISO 27001, ISO 42001, and TISAX audits, information systems must be protected from disruption caused by audit activities. |

---

## 7. Risk-to-Control Traceability

This section maps identified risks to the Annex A controls that treat them. Risk references are provisional and will be fully populated after the risk assessment workshop.

| Risk ID | Mapped Controls |
|---------|----------------|
| RISK-AI-001 | A.8.26 |
| RISK-OPS-001 | A.5.23, A.8.14, A.8.6 |
| RISK-OPS-002 | A.5.29, A.5.30, A.8.13 |
| RISK-PPL-001 | A.6.1 |
| RISK-PPL-002 | A.6.3 |
| RISK-REG-001 | A.5.1, A.5.31 |
| RISK-REG-002 | A.5.34, A.8.10 |
| RISK-SEC-001 | A.5.17, A.8.5 |
| RISK-SEC-002 | A.5.15, A.8.2 |
| RISK-SUP-001 | A.5.19, A.5.20, A.5.21, A.5.22, A.8.30 |

---

## 8. Approval

This Statement of Applicability has been reviewed and approved by:

| Role | Name | Date | Signature |
|------|------|------|-----------|
| CEO | Helge Heupel | [CEO-SIGNOFF-REQUIRED] | _________________ |
| CISO | [CISO name] | [CISO-REVIEW-ON-RETURN] | _________________ |

**Git PR Reference:** [To be populated upon PR approval]

---

*Generated by: soa/scripts/generate-soa.js*
*Generated on: 2026-02-20*
*Source files: 93 per-control YAML files in soa/*
