---
document-id: HH-IMS-CTX-001
title: "Integrated Management System Context"
version: v1.1
date: 2026-02-22
classification: Internal
author: CISO Agent
reviewer: [CISO, CTO]
approver: CEO Helge Heupel
review-cycle: Annual
next-review: 2027-02-19
status: Draft
change-summary: "Added AIMS PDCA cycle (Section 7) and AIMS Objectives (Section 8)"
---

# Integrated Management System Context

## 1. Organization Overview

The **Helge Heupel Group** is a technology startup developing AI-powered enterprise software products. The group operates through three legal entities across three jurisdictions:

| Entity | Jurisdiction | Registration | Primary Function |
|--------|-------------|-------------|------------------|
| **Helge Heupel GmbH** | Germany (DE) | Registered in Germany (HRB) | Primary operating entity. Product development, compliance governance, ISMS/AIMS home base. |
| **Helge Heupel B.V.** | Netherlands (NL) | Registered in Netherlands (KVK) | EU market operations. Subject to Wbni, AVG, NCSC-NL oversight. |
| **Helge Heupel Inc.** | United States (US) | Registered in US (state registration) | Future US market entry. Skeleton scope at Startup phase. |

**Products:** Verity VE (Value Engineering) and Verity EAM (Enterprise Architecture Management) -- both AI-powered B2B SaaS platforms targeting enterprise customers.

**Team:** 6 human team members (CEO, CTO, CISO, IT Pentester/Super Admin, Strategy Partner, Finance Industry Senior Manager) and 7 Claude Code AI agents (SDLC Lead, CTO, CISO, AI Science, Platform/SRE, Product/Strategy, AppSec).

**Operating model:** Cloud-only infrastructure on Microsoft Azure (West Europe and Germany West Central regions). No physical offices in scope. All team members work remotely. The AI agent system is a core operational component -- agents produce compliance artifacts, architecture documents, security assessments, and product specifications under human oversight.

---

## 2. Integrated Management System Scope

The Helge Heupel Group maintains an **Integrated Management System (IMS)** encompassing two management systems operating under a shared governance structure:

- **Information Security Management System (ISMS)** -- certified to ISO/IEC 27001:2022 (including Amendment 1:2024)
- **AI Management System (AIMS)** -- certified to ISO/IEC 42001:2023

### Why Integrated

Helge Heupel GmbH, B.V., and Inc. develop and deploy AI-powered products using AI agents as core operational tools. Information security and AI governance are inseparable concerns:

1. **Shared risk methodology:** Both ISMS and AIMS use the same enterprise risk framework (ISO 31000-aligned, 5x5 likelihood-impact matrix, FAIR quantitative analysis for High/Critical risks). A single risk register covers information security risks, AI-specific risks, compliance risks, and operational risks.

2. **Coordinated audit:** ISO 27001 and ISO 42001 audits are planned as a combined engagement. Shared clauses (context, leadership, support, performance evaluation, improvement) are assessed once, reducing audit burden and demonstrating integration.

3. **Combined management review:** The Monthly Strategic meeting (60 minutes, CEO + CTO + CISO + Strategy Partner) satisfies both ISO 27001 cl. 9.3 and ISO 42001 cl. 9.3 management review requirements. Compliance posture, risk register status, and AI system performance are reviewed in a single forum.

4. **Unified document control:** All ISMS and AIMS documented information follows the same Git-based document control framework (ISO 27001 cl. 7.5 / ISO 42001 cl. 7.5). YAML frontmatter metadata, PR-based approval, and Git history provide a single audit trail.

5. **Common personnel and AI systems:** The same 6 humans and 7 AI agents operate both management systems. Role assignments (RACI-Startup.md) cover ISMS and AIMS responsibilities in a single matrix.

### Scope Boundaries

Each entity maintains separate ISMS and AIMS scope statements (6 documents total). Separate certificates are pursued per entity. The IMS Context preamble establishes the shared foundation; per-entity scope statements define specific boundaries.

- **GmbH and B.V.:** Full scope -- all 10 scope dimensions detailed
- **Inc.:** Skeleton scope -- to be completed as US operations materialize

---

## 3. Annex SL / Harmonized Structure Alignment

ISO 27001:2022 and ISO 42001:2023 both follow the **ISO Harmonized Structure** (formerly Annex SL), sharing identical clause numbering for management system requirements. The Helge Heupel Group exploits this alignment to operate both systems as one integrated whole:

| Clause | Requirement | ISMS (ISO 27001) | AIMS (ISO 42001) | IMS Integration Point |
|--------|-------------|-------------------|-------------------|----------------------|
| **cl. 4** | Context of the organization | External/internal issues affecting information security; interested parties; ISMS scope | External/internal issues affecting AI; interested parties; AIMS scope | **Single context analysis** covering both information security and AI factors. This IMS Context document serves both systems. |
| **cl. 5** | Leadership | IS Policy; management commitment; roles and responsibilities | AI Policy; management commitment; AI-specific roles | **CEO Helge Heupel** provides unified management commitment. IS Policy (HH-ISMS-POL-001) and AI Policy (HH-AIMS-POL-001) are separate documents under a shared IMS Context. |
| **cl. 6** | Planning | IS risk assessment and treatment; IS objectives | AI risk assessment and treatment; AI objectives | **Single risk framework** (Section 5 of SDLC-Growth-v2). Risk register entries are tagged by domain (information security, AI, compliance, operational). |
| **cl. 7** | Support | Resources; competence; awareness; communication; documented information | Resources; competence; awareness; communication; documented information | **Shared support infrastructure:** same team, same tools, same document control, same training program covering both IS and AI awareness. |
| **cl. 8** | Operation | IS risk treatment implementation; operational planning and control | AI system lifecycle management; AI risk treatment | **Shared operational controls** where applicable (e.g., access control, change management). AI-specific controls (model lifecycle, data governance) are additive. |
| **cl. 9** | Performance evaluation | Monitoring; internal audit; management review | Monitoring; internal audit; management review | **Combined management review** (Monthly Strategic meeting). **Coordinated internal audit** program covering both standards. |
| **cl. 10** | Improvement | Nonconformity; corrective action; continual improvement | Nonconformity; corrective action; continual improvement | **Single improvement process.** Corrective actions tracked in one system regardless of whether the nonconformity relates to IS or AI. |

---

## 4. Document Hierarchy

The IMS document structure follows a four-tier hierarchy:

```
Tier 1: IMS Context (this document)
    |
    +-- Tier 2: Policies
    |     |-- IS Policy (HH-ISMS-POL-001) + Operational Annex (HH-ISMS-POL-001-ANNEX)
    |     |-- AI Policy (HH-AIMS-POL-001) + Operational Annex (HH-AIMS-POL-001-ANNEX)
    |     |-- Scope Statements (per entity, per system)
    |
    +-- Tier 3: Procedures and Frameworks
    |     |-- Risk Assessment Methodology
    |     |-- Statement of Applicability (SoA)
    |     |-- AIMS Statement of Applicability (AIMS SoA)
    |     |-- Unified Control Library (UCL)
    |     |-- AI Risk Assessment Procedure
    |     |-- AI Impact Assessment Procedure
    |     |-- Incident Response Procedures
    |     |-- Document Control Framework
    |
    +-- Tier 4: Evidence and Records
          |-- Risk Register
          |-- AI System Registry
          |-- AI Impact Assessment Reports
          |-- Audit Reports
          |-- Management Review Minutes
          |-- Training Records
          |-- Compliance Evidence
```

**Document control:** All documents are maintained in Git repositories. Version control via Git commits and tags. Approval via Pull Request review and merge. Distribution via repository access permissions. Retention per jurisdiction-specific requirements. This approach satisfies ISO 27001 cl. 7.5 and ISO 42001 cl. 7.5 requirements for documented information control.

**Document register:** A separate document register (maintained as part of the Document Control Framework) catalogs all controlled documents with their metadata, ownership, review dates, and current status.

---

## 5. Management Commitment

**Joint Statement from the CEO:**

I, Helge Heupel, as Geschaeftsfuehrer of Helge Heupel GmbH, Bestuurder of Helge Heupel B.V., and Officer of Helge Heupel Inc., commit the Helge Heupel Group to:

1. **Information security** -- protecting the confidentiality, integrity, and availability of all information assets across GmbH, B.V., and Inc., including source code, customer data, AI model configurations, compliance artifacts, and communication data.

2. **Responsible AI governance** -- ensuring that all AI systems operated by the Helge Heupel Group (including the 7 Claude Code agents, ChatGPT, and Codex) are developed and deployed with fairness, transparency, human oversight, and accountability in accordance with ISO 42001 and the EU AI Act.

3. **Regulatory compliance** -- fulfilling all management body obligations under NIS2UmsuCG Sec. 38 (Germany) and the Wbni amendment (Netherlands), including personal liability for cybersecurity governance, mandatory cybersecurity training, and oversight of risk management measures.

4. **Continual improvement** -- establishing measurable objectives for both information security and AI governance, reviewing performance at least monthly (Monthly Strategic meeting), and driving corrective action when nonconformities are identified.

5. **Adequate resources** -- providing the personnel, technology, and AI agent capacity necessary to maintain and improve both management systems, including dedicated CISO, CTO, and IT Pentester roles.

This commitment extends to ensuring that the Integrated Management System remains appropriate to the Helge Heupel Group's purpose, context, and strategic direction as the organization grows from Startup through Growth and Enterprise phases.

**Acknowledged by:**
- CEO Helge Heupel (Geschaeftsfuehrer, GmbH / Bestuurder, B.V.)
- CTO (Technical Architecture and AI Engineering)
- CISO (Information Security and AI Governance)

`[CEO-SIGNOFF-REQUIRED]`

---

## 6. Climate Change Acknowledgment

Per **ISO 27001:2022/Amd 1:2024** (clauses 4.1 and 4.2), the Helge Heupel Group acknowledges climate change as a contextual factor relevant to information security:

### Clause 4.1 -- Climate Change as an External Issue

The Helge Heupel Group has determined that climate change is a relevant issue that may affect the ISMS and AIMS. The assessment considers:

- **Physical risks to cloud infrastructure:** Azure data center regions (West Europe, Germany West Central) face potential disruption from extreme weather events -- flooding risk in the Netherlands, heat stress affecting cooling infrastructure in Germany. Microsoft Azure maintains resilience measures including geo-redundant storage and regional failover capabilities. Azure's ISO 27001 and SOC 2 attestations cover physical infrastructure controls including climate-related resilience.

- **Transition risks from EU sustainability regulation:** The Corporate Sustainability Reporting Directive (CSRD) and EU Taxonomy Regulation may impose data handling and reporting requirements that expand the ISMS information asset inventory. These requirements are monitored as part of the regulatory landscape review.

- **Energy supply disruption risks:** Power grid instability from extreme weather events could affect cloud service availability. Azure's multi-region deployment mitigates this risk.

### Clause 4.2 -- Interested Party Climate Requirements

Interested parties with climate-related information security requirements include:

- **Automotive OEM customers** requiring ESG/sustainability reporting for their supply chain (relevant to TISAX context)
- **Regulators** monitoring carbon footprint disclosure for ICT services
- **Insurance providers** assessing climate-related operational risk

### Assessment Outcome

Given the Helge Heupel Group's cloud-only operating model with no physical data centers, the direct climate risk to information assets is low and primarily mitigated by Azure's infrastructure resilience. A formal, detailed climate risk assessment is planned for the Growth phase. At Startup, this acknowledgment ensures compliance with ISO 27001:2022/Amd 1:2024 while reflecting the organization's actual risk profile.

---

## 7. AIMS Plan-Do-Check-Act Cycle

The AI Management System (AIMS) operates through the Plan-Do-Check-Act cycle integrated into the ISMS PDCA cycle per the Annex SL harmonized structure (Section 3). This section documents the operational PDCA for AIMS at Startup phase.

### 7.1 Plan

**AIMS Objectives:** Established by CEO Helge Heupel, derived from AI Policy (HH-AIMS-POL-001) commitments, and documented in the AIMS Objectives document ([aims-objectives.md](aims-objectives.md)). Objectives are reviewed at the Monthly Strategic meeting (60 minutes, monthly cadence). Each objective has measurable KPIs with specific targets. Reference: ISO 42001 cl. 6.2.

**AI Risk Assessment Schedule:** Annual full cycle for all registered AI systems per the AI Risk Assessment Procedure (HH-AIMS-RMA-001). Event-driven assessments triggered by:
- New AI system introduction or registration
- Major changes to existing AI systems (model update, data source change, scope expansion)
- AI-related incidents (bias detection, hallucination impact, unauthorized data processing)
- Regulatory changes (EU AI Act implementing acts, new guidance)

Next scheduled annual assessment: [DATE-TO-BE-SET-AT-FIRST-REVIEW].

**AI Impact Assessment Schedule:** Per the AI Impact Assessment Procedure (HH-AIMS-AIA-001). All Limited-Risk and High-Risk AI systems assessed before deployment and annually thereafter. Currently 11 systems classified as Limited-Risk under EU AI Act Art. 50. Impact assessments use 6 measurable dimensions (fairness, safety, privacy, transparency, environmental, individual rights) with specific thresholds per dimension.

**Resource Requirements:** AI governance is resourced through the existing team structure:
- **Personnel:** CEO (ultimate accountability), CTO (architecture decisions), CISO (compliance oversight), IT Pentester/Super Admin (infrastructure security), and 7 Claude Code AI agents (operational artifact production)
- **Budget:** No dedicated AI governance budget at Startup. AI governance costs are integrated into operational costs (Azure AI services, Anthropic API, team time)
- **External support:** BearingPoint consultant available for guidance on certification readiness and gap assessment
- **Growth trigger:** A dedicated AI governance role will be established when the team exceeds 15 people or a High-Risk AI system is deployed under EU AI Act Art. 6

### 7.2 Do

**AI System Registry Maintenance:** The AI System Registry (ai-registry/ directory) is maintained as the YAML-in-Git source of truth for all AI systems within AIMS scope. Currently 11 registered systems across 3 categories (7 development-ai agents, 2 third-party-ai tools, 2 product-ai systems). Each entry follows a 24-field schema covering system identity, EU AI Act classification, SDLC usage tier, data I/O, human oversight, applicable ISO 42001 Annex A controls, and lifecycle status. The CISO Agent performs quarterly review of all entries. Event-driven updates occur when AI systems change. CEO approves updates via the PR workflow.

**AI Risk Treatment Implementation:** Applicable ISO 42001 Annex A controls are documented in the AIMS Statement of Applicability (aims-soa/ directory). 38 controls across 9 groups are assessed for applicability, with implementation status reflecting Startup reality (10 fully implemented, 22 partially implemented, 6 planned). Treatment actions for AI-specific risks are tracked in risk register entries with the `ai-risk: true` tag, using the same treatment framework as ISMS risks (avoid, modify, share, retain).

**AI System Lifecycle Governance:** Design, development, deployment, and operational monitoring of AI systems are governed by the SDLC-Growth-v2 framework adapted for Startup (SDLC-Startup-v2.md). PR-based approval is required for all AI system changes. All 7 Claude Code agents operate at Trust Level 2 (Supervised Autonomous), meaning all outputs require human review before acceptance. The AI system lifecycle requirements defined in AI Policy Section 7 (HH-AIMS-POL-001) establish specific obligations for each lifecycle phase.

**AI Competence and Training:** The EU AI Act Art. 4 AI literacy obligation is addressed through:
- (a) All team members trained on the AI Policy including prohibited practices (Section 5)
- (b) All 7 Claude Code agents configured with policy constraints via CLAUDE.md system prompts and reference directories
- (c) Training records maintained per the document control framework (HH-ISMS-DOC-001)
- (d) AI literacy training completion tracked as AIMS Objective 6 with a target of 100% personnel trained by August 2025

### 7.3 Check

**Management Review Inputs for AIMS:** AIMS performance is reviewed at the Monthly Strategic meeting, which satisfies ISO 42001 cl. 9.3 management review requirements alongside ISO 27001 cl. 9.3. AIMS-specific inputs for each review include:
- AI System Registry status (new systems, changes, retirements)
- AI risk assessment outcomes and residual risk levels
- AI impact assessment outcomes and threshold compliance
- AI incident reports (bias events, hallucination impacts, prohibited practice concerns)
- Regulatory changes (EU AI Act implementing acts, ISO 42001 guidance evolution)
- AIMS objective KPI performance (7 objectives with measurable targets)

**AI Governance Metrics:** The following metrics are monitored as standing agenda items:
- Registry completeness: percentage of deployed AI systems registered (target: 100%)
- Assessment currency: percentage of systems with risk assessment within 12 months (target: 100%)
- AIA completion rate: percentage of Limited-Risk and High-Risk systems with impact assessment (target: 100%)
- Prohibited practice compliance: number of EU AI Act Art. 5 violations (target: zero)
- AIMS objective KPI performance: per-objective status reported against targets

**Internal Audit Program:** AIMS-specific internal audit criteria are deferred to Phase 7 (Operational Controls) where the broader audit program covering both ISMS and AIMS is established. At Startup, the Monthly Strategic meeting review serves as the primary AIMS performance check, with CEO Helge Heupel responsible for identifying nonconformities and initiating corrective actions.

> Detailed AIMS internal audit procedures and management review input templates will be established in Phase 7 as part of the integrated audit program covering both ISMS and AIMS.

### 7.4 Act

**Nonconformity and Corrective Action:** AIMS nonconformities are handled through the same corrective action process as ISMS nonconformities, maintaining a single improvement pipeline. Nonconformities may be identified during:
- Monthly Strategic meeting reviews
- Ad-hoc discovery by team members or AI agents
- External audit findings
- AI incident investigations

All AIMS corrective actions are tracked in a unified corrective action log alongside ISMS corrective actions. CEO Helge Heupel is the accountable owner for all corrective actions, consistent with the Startup governance model where the CEO covers CISO responsibilities.

**Continual Improvement:** AI governance improvements are captured as action items at the Monthly Strategic meeting. These are prioritized alongside ISMS improvements in a single organizational improvement pipeline. AI-specific improvement drivers include:
- EU AI Act updates (implementing acts, delegated regulations, guidance documents)
- ISO 42001 guidance evolution (Annex B updates, auditor feedback, certification body publications)
- AI incident learnings (post-incident review findings)
- Audit findings (internal and external, integrated across ISMS and AIMS)

**Improvement Backlog:** No separate AIMS improvement backlog is maintained at Startup. All improvement items are integrated into the single organizational improvement backlog. Growth trigger: separate AIMS improvement tracking will be established when the AIMS has been operational for 12 months and improvement volume justifies separation.

> At Startup phase, AIMS PDCA is integrated into the ISMS PDCA cycle via the Monthly Strategic meeting. Separate AIMS governance bodies and dedicated audit programs are introduced at Growth phase when team size and AI system complexity justify the overhead. This integration is enabled by the Annex SL harmonized structure (Section 3) and serves both audit efficiency and operational simplicity.

---

## 8. AIMS Objectives

AIMS objectives satisfying ISO 42001 cl. 6.2 are documented in [aims-objectives.md](aims-objectives.md). These objectives are derived from AI Policy (HH-AIMS-POL-001) commitments and reviewed at each Monthly Strategic meeting. Measurable targets and monitoring mechanisms are specified per objective.

The 7 AIMS objectives cover: ISO 42001 certification readiness, AI System Registry completeness, AI risk assessment currency, AI impact assessment completion, EU AI Act prohibited practice compliance, AI literacy training, and human oversight compliance. Each objective has a specific KPI, measurable target, defined measurement method, monitoring frequency, and named owner.

Objective performance is reported as a standing agenda item at the Monthly Strategic meeting, with CEO Helge Heupel accountable for ensuring monitoring occurs and corrective actions are initiated when targets are not met.

---

*Document: policies/IMS-Context.md*
*Document ID: HH-IMS-CTX-001*
*Integrated Management System Context for the Helge Heupel Group*
