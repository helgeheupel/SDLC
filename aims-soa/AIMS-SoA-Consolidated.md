---
document-id: HH-AIMS-SOA-001
title: "Statement of Applicability -- ISO 42001:2023"
version: v1.0
date: 2026-02-22
classification: Confidential
author: CISO Agent
approver: CEO Helge Heupel
status: Draft
generated-by: aims-soa/scripts/generate-aims-soa.js
---

# Statement of Applicability -- ISO 42001:2023

## 1. Introduction

This Statement of Applicability (SoA) documents the applicability determination for all 38 controls in ISO/IEC 42001:2023 Annex A for the Helge Heupel Group (GmbH, B.V., Inc.). Each control has been assessed for applicability based on the organization's AI risk assessment, regulatory requirements (EU AI Act, ISO 42001, GDPR), and operational context (11 AI systems across 3 categories: Development AI, Third-party AI, Product AI).

**Methodology:** Controls are assessed against the organization's AI risk profile, EU AI Act obligations, and business context. Applicable controls receive an implementation status assessment with an HH-specific implementation approach. The assessment considers all 11 AI systems registered in the AI System Registry, with applicability evaluated per system category.

**Implementation status levels:**
- **Fully Implemented** -- Control is operational with documented evidence
- **Partially Implemented** -- Control mechanisms exist but documentation or full operationalization is pending
- **Planned** -- Control is scheduled for implementation in a future SDLC phase
- **Not Started** -- No implementation work has begun (used for not-applicable controls)

**Relationship to ISO 27001 SoA:** This AIMS SoA (HH-AIMS-SOA-001) is a companion to the ISMS SoA (HH-ISMS-SOA-001). Each ISO 42001 Annex A control includes cross-references to related ISO 27001 Annex A controls, enabling bidirectional traceability for integrated audits.

---

## 2. Summary Statistics

| Metric | Count |
|--------|-------|
| Total Annex A Controls | 38 |
| Applicable | 38 |
| Not Applicable | 0 |
| Fully Implemented | 10 |
| Partially Implemented | 22 |
| Planned | 6 |
| Not Started | 0 |

**Applicability rate:** 100.0% of controls are applicable.

**Implementation coverage of applicable controls:**
- Fully Implemented: 10 (26.3%)
- Partially Implemented: 22 (57.9%)
- Planned: 6 (15.8%)

### By Group

| Group | Name | Controls | Applicable | Fully Implemented | Partially Implemented | Planned |
|-------|------|:--------:|:----------:|:-----------------:|:---------------------:|:-------:|
| A.2 | Policies related to AI | 3 | 3 | 3 | 0 | 0 |
| A.3 | Internal organization | 2 | 2 | 1 | 1 | 0 |
| A.4 | Resources for AI systems | 5 | 5 | 2 | 3 | 0 |
| A.5 | Assessing impacts of AI systems | 4 | 4 | 0 | 1 | 3 |
| A.6 | AI system life cycle | 9 | 9 | 1 | 8 | 0 |
| A.7 | Data for AI systems | 5 | 5 | 0 | 3 | 2 |
| A.8 | Information for interested parties of AI systems | 4 | 4 | 0 | 4 | 0 |
| A.9 | Use of AI systems | 3 | 3 | 3 | 0 | 0 |
| A.10 | Third-party and customer relationships | 3 | 3 | 0 | 2 | 1 |

---

## 3. Policies related to AI (A.2)

**Objective:** To provide management direction and support for AI, in accordance with business requirements, relevant laws, regulations, and contracts.

**Controls:** 3 | **Applicable:** 3 | **Not Applicable:** 0

| Control | Name | Applicable | Status | Justification (summary) |
|---------|------|:----------:|--------|-------------------------|
| A.2.2 | AI policy | Yes | fully implemented | Applicable. The Helge Heupel Group maintains a dedicated AI Policy (HH-AIMS-POL-001) approved by CEO Helge Heupel. |
| A.2.3 | Alignment with other organizational policies | Yes | fully implemented | Applicable. The AI Policy (HH-AIMS-POL-001) is explicitly aligned with the Information Security Policy (HH-ISMS-POL-001) and the IMS Context (HH-IMS-CTX-001) through the Integrated Management System architecture. |
| A.2.4 | Review of the AI policy | Yes | fully implemented | Applicable. The AI Policy has a semi-annual review cycle (faster than the IS Policy annual cycle) reflecting the rapid evolution of AI regulation and technology. |

---

## 4. Internal organization (A.3)

**Objective:** To establish a framework for the implementation and operation of the AI management system within the organization.

**Controls:** 2 | **Applicable:** 2 | **Not Applicable:** 0

| Control | Name | Applicable | Status | Justification (summary) |
|---------|------|:----------:|--------|-------------------------|
| A.3.2 | AI roles and responsibilities | Yes | fully implemented | Applicable. The Helge Heupel Group has defined AI governance roles for all 6 human personnel and 7 AI agents in the RACI-Startup matrix (HH-RACI-Startup-v1. |
| A.3.3 | Reporting of concerns | Yes | partially implemented | Applicable. The Helge Heupel Group provides mechanisms for all personnel and AI agents to report AI-related concerns including bias detection, prohibited practice suspicion, safety issues, and ethical concerns. |

---

## 5. Resources for AI systems (A.4)

**Objective:** To ensure that the organization accounts for the resources (including AI system components and assets) of the AI system in order to fully understand and address risks and impacts.

**Controls:** 5 | **Applicable:** 5 | **Not Applicable:** 0

| Control | Name | Applicable | Status | Justification (summary) |
|---------|------|:----------:|--------|-------------------------|
| A.4.2 | Resource documentation | Yes | fully implemented | Applicable. The Helge Heupel Group maintains an AI System Registry (ai-registry/ directory) documenting all 11 AI systems within AIMS scope: 7 Claude Code agents, ChatGPT, Codex, Verity VE AI, and Verity EAM AI. |
| A.4.3 | Data resources | Yes | partially implemented | Applicable. Each AI system in the registry has documented data-inputs and data-outputs with classification levels. |
| A.4.4 | Tooling resources | Yes | fully implemented | Applicable. The Helge Heupel Group uses specific tooling for AI system development and operation: Claude Code CLI for agent execution, Azure OpenAI Service for product AI inference, GitHub for version control and CI/CD, Semgrep for SAST, OWASP ZAP for DAST, and CycloneDX for SBOM generation. |
| A.4.5 | System and computing resources | Yes | partially implemented | Applicable. AI systems rely on external computing resources: Anthropic API for Claude Code agent execution, Azure OpenAI Service for Verity product AI inference, Azure compute (West Europe, Germany West Central) for hosting. |
| A.4.6 | Human resources | Yes | partially implemented | Applicable. The Helge Heupel Group has 6 human team members with defined AI governance responsibilities. |

---

## 6. Assessing impacts of AI systems (A.5)

**Objective:** To identify and assess the potential consequences of AI systems on individuals, groups of individuals, and societies.

**Controls:** 4 | **Applicable:** 4 | **Not Applicable:** 0

| Control | Name | Applicable | Status | Justification (summary) |
|---------|------|:----------:|--------|-------------------------|
| A.5.2 | AI system impact assessment process | Yes | partially implemented | Applicable. The Helge Heupel Group operates 11 AI systems that interact with individuals (team members, customers). |
| A.5.3 | Documentation of AI system impact assessments | Yes | planned | Applicable. All AI impact assessments must be documented per ISO 42001 Annex A. |
| A.5.4 | Assessing AI system impact on individuals or groups of individuals | Yes | planned | Applicable. Verity product AI directly impacts customer users through value engineering recommendations and cost predictions. |
| A.5.5 | Assessing societal impacts of AI systems | Yes | planned | Applicable. Verity product AI serves enterprise customers in construction and architecture industries where AI-generated cost predictions and value engineering recommendations can influence procurement decisions, employment levels, and resource allocation at scale. |

---

## 7. AI system life cycle (A.6)

**Objective:** To define and manage the AI system life cycle, including design, development, deployment, operation, monitoring, and retirement.

**Controls:** 9 | **Applicable:** 9 | **Not Applicable:** 0

| Control | Name | Applicable | Status | Justification (summary) |
|---------|------|:----------:|--------|-------------------------|
| A.6.1.2 | Objectives for responsible development of AI system | Yes | fully implemented | Applicable. The Helge Heupel Group has documented responsible AI development objectives in the AI Policy (8 governance principles) and measurable AIMS objectives. |
| A.6.1.3 | Processes for responsible AI system design and development | Yes | partially implemented | Applicable. The SDLC-Growth-v2 framework (Startup overlay) defines the development process for all AI systems. |
| A.6.2.2 | AI system requirements and specification | Yes | partially implemented | Applicable. Every AI system in the registry has documented requirements: intended-use, operational-context, EU AI Act classification, human oversight requirements, and data handling constraints. |
| A.6.2.3 | Documentation of AI system design and development | Yes | partially implemented | Applicable. All AI systems have design documentation: agents have prompt specifications, reference materials, and domain context documents; Product AI has architecture decision records (ADRs) and technical design documents. |
| A.6.2.4 | AI system verification and validation | Yes | partially implemented | Applicable. All AI systems undergo verification and validation: agents are validated through PR-based review of outputs against requirements; Product AI follows the SDLC testing framework (Semgrep SAST, OWASP ZAP DAST, bias testing, performance benchmarking). |
| A.6.2.5 | AI system deployment | Yes | partially implemented | Applicable. Claude Code agents are deployed and operational (lifecycle-status: production). |
| A.6.2.6 | AI system operation and monitoring | Yes | partially implemented | Applicable. All operational AI systems require monitoring. |
| A.6.2.7 | AI system technical documentation | Yes | partially implemented | Applicable. Technical documentation is maintained for all AI systems: agent specifications (300-400 lines each), reference materials, domain context documents, and threat models. |
| A.6.2.8 | AI system recording of event logs | Yes | partially implemented | Applicable. All AI system interactions produce auditable records. |

---

## 8. Data for AI systems (A.7)

**Objective:** To ensure appropriate data management practices for AI systems, including data collection, processing, and usage throughout the AI system life cycle.

**Controls:** 5 | **Applicable:** 5 | **Not Applicable:** 0

| Control | Name | Applicable | Status | Justification (summary) |
|---------|------|:----------:|--------|-------------------------|
| A.7.2 | Data for development and enhancement of AI system | Yes | partially implemented | Applicable. Development data varies by AI system category: Claude Code agents use compliance documents, ISO standards, and code repositories as context data (not training data, as Anthropic trains the base model). |
| A.7.3 | Acquisition of data | Yes | partially implemented | Applicable but with different scope per system category. For Development AI (agents), HH does not acquire training data as Anthropic provides the pre-trained model; however, context data (ISO standards, compliance documents) is acquired and managed. |
| A.7.4 | Quality of data for AI systems | Yes | planned | Applicable. Data quality directly affects AI system performance and fairness. |
| A.7.5 | Data provenance | Yes | partially implemented | Applicable. Data provenance tracking is essential for audit traceability and regulatory compliance. |
| A.7.6 | Data preparation | Yes | planned | Applicable but with different scope per system category. For Development AI (agents), HH does not prepare training data as Anthropic handles base model training; however, context data preparation (document formatting, reference material curation) constitutes data preparation. |

---

## 9. Information for interested parties of AI systems (A.8)

**Objective:** To ensure that interested parties of AI systems are informed about the AI system's capabilities, limitations, and intended use.

**Controls:** 4 | **Applicable:** 4 | **Not Applicable:** 0

| Control | Name | Applicable | Status | Justification (summary) |
|---------|------|:----------:|--------|-------------------------|
| A.8.2 | System documentation and information for users | Yes | partially implemented | Applicable. All AI systems require user-facing documentation. |
| A.8.3 | External reporting | Yes | partially implemented | Applicable. External reporting obligations exist for multiple regulatory frameworks: NIS2 requires reporting of significant AI-related cybersecurity incidents to BSI/NCSC-NL (24h initial, 72h detailed). |
| A.8.4 | Communication of incidents | Yes | partially implemented | Applicable. AI-related incidents (bias detection, hallucination with business impact, model compromise, unauthorized data processing, prohibited practice detection) must be communicated to affected stakeholders. |
| A.8.5 | Information for interested parties | Yes | partially implemented | Applicable. Multiple interested parties require AI governance information: customers need transparency about Product AI capabilities and limitations; regulators need conformity evidence; auditors need AIMS documentation; employees need AI literacy and acceptable use guidance; suppliers need AI requirement specifications. |

---

## 10. Use of AI systems (A.9)

**Objective:** To ensure that AI systems are used responsibly, taking into account the intended use and the potential impacts on individuals, groups, and societies.

**Controls:** 3 | **Applicable:** 3 | **Not Applicable:** 0

| Control | Name | Applicable | Status | Justification (summary) |
|---------|------|:----------:|--------|-------------------------|
| A.9.2 | Processes for responsible use of AI systems | Yes | fully implemented | Applicable. The AI Policy establishes 8 governance principles for responsible AI use, and the SDLC-Growth-v2 framework operationalizes these principles through gate criteria and human oversight requirements. |
| A.9.3 | Objectives for responsible use of AI system | Yes | fully implemented | Applicable. Measurable AIMS objectives for responsible use are defined per ISO 42001 cl. |
| A.9.4 | Intended use of the AI system | Yes | fully implemented | Applicable. Every AI system in the registry has a documented intended-use field specifying authorized use cases, boundaries, and restrictions. |

---

## 11. Third-party and customer relationships (A.10)

**Objective:** To ensure appropriate management of AI-related responsibilities in third-party and customer relationships.

**Controls:** 3 | **Applicable:** 3 | **Not Applicable:** 0

| Control | Name | Applicable | Status | Justification (summary) |
|---------|------|:----------:|--------|-------------------------|
| A.10.2 | Allocating responsibilities | Yes | partially implemented | Applicable. The Helge Heupel Group has third-party AI relationships with Anthropic (Claude Code agents), OpenAI (ChatGPT, Codex), and Microsoft (Azure OpenAI Service). |
| A.10.3 | Suppliers | Yes | partially implemented | Applicable. The Helge Heupel Group relies on AI suppliers for core operations: Anthropic provides the Claude foundation model used by all 7 agents, OpenAI provides ChatGPT and Codex, and Microsoft provides Azure OpenAI Service for Product AI. |
| A.10.4 | Customers | Yes | planned | Applicable. Verity VE and EAM products include AI features that serve enterprise customers. |

---

## 12. ISO 27001 Cross-Reference Matrix

This section provides bidirectional traceability between ISO 42001 Annex A controls and ISO 27001 Annex A controls. Each mapping includes a description of the specific relationship.

| ISO 42001 Control | Control Name | ISO 27001 Control | Relationship |
|-------------------|-------------|-------------------|-------------|
| A.2.2 | AI policy | A.5.1 | A.5.1 (Policies for information security) requires documented IS policy; A.2.2 requires documented AI policy. Both ar... |
| A.2.3 | Alignment with other organizational policies | A.5.1 | A.5.1 (Policies for information security) and A.2.3 both require alignment of security/AI policies with organizationa... |
| A.2.3 | Alignment with other organizational policies | A.5.2 | A.5.2 (Information security roles and responsibilities) defines roles that also carry AI governance responsibilities ... |
| A.2.3 | Alignment with other organizational policies | A.5.31 | A.5.31 (Legal, statutory, regulatory and contractual requirements) ensures AI policy alignment with external obligati... |
| A.2.4 | Review of the AI policy | A.5.1 | A.5.1 (Policies for information security) requires periodic IS policy review; A.2.4 requires periodic AI policy revie... |
| A.3.2 | AI roles and responsibilities | A.5.2 | A.5.2 (Information security roles and responsibilities) defines IS roles; A.3.2 extends this with AI-specific governa... |
| A.3.3 | Reporting of concerns | A.6.8 | A.6.8 (Information security event reporting) establishes IS event reporting mechanisms; A.3.3 extends this to AI-spec... |
| A.4.2 | Resource documentation | A.5.9 | A.5.9 (Inventory of information and other associated assets) covers general asset inventory; A.4.2 extends this speci... |
| A.4.2 | Resource documentation | A.5.12 | A.5.12 (Classification of information) applies to data resources documented in registry entries, ensuring AI data inp... |
| A.4.3 | Data resources | A.5.12 | A.5.12 (Classification of information) provides the 4-level classification scheme applied to AI data resources. Each ... |
| A.4.3 | Data resources | A.5.13 | A.5.13 (Labelling of information) applies to ensuring AI training data and inference data are labelled with their cla... |
| A.4.4 | Tooling resources | A.8.25 | A.8.25 (Secure development life cycle) addresses development tooling security; A.4.4 extends this to ensure AI-specif... |
| A.4.4 | Tooling resources | A.5.9 | A.5.9 (Inventory of information and other associated assets) covers general tool inventory; A.4.4 specifically addres... |
| A.4.5 | System and computing resources | A.8.6 | A.8.6 (Capacity management) addresses general capacity planning; A.4.5 extends this to AI-specific compute capacity i... |
| A.4.5 | System and computing resources | A.5.23 | A.5.23 (Information security for use of cloud services) addresses cloud security controls that apply to AI compute ho... |
| A.4.6 | Human resources | A.6.1 | A.6.1 (Screening) addresses personnel verification before employment; A.4.6 extends this to ensure personnel involved... |
| A.4.6 | Human resources | A.6.2 | A.6.2 (Terms and conditions of employment) includes information security obligations; A.4.6 adds AI-specific competen... |
| A.4.6 | Human resources | A.6.3 | A.6.3 (Information security awareness, education and training) provides the training framework; A.4.6 extends it to i... |
| A.6.1.2 | Objectives for responsible development of AI system | A.8.25 | A.8.25 (Secure development life cycle) defines secure development objectives; A.6.1.2 extends this to responsible AI ... |
| A.6.1.3 | Processes for responsible AI system design and development | A.8.25 | A.8.25 (Secure development life cycle) provides the security framework for development; A.6.1.3 adds responsible AI-s... |
| A.6.1.3 | Processes for responsible AI system design and development | A.8.26 | A.8.26 (Application security requirements) defines security requirements; A.6.1.3 extends to AI-specific requirements... |
| A.6.2.2 | AI system requirements and specification | A.8.26 | A.8.26 (Application security requirements) addresses security requirement specification; A.6.2.2 extends to AI-specif... |
| A.6.2.2 | AI system requirements and specification | A.5.8 | A.5.8 (Information security in project management) ensures security requirements in projects; A.6.2.2 adds AI-specifi... |
| A.6.2.3 | Documentation of AI system design and development | A.8.25 | A.8.25 (Secure development life cycle) requires development documentation; A.6.2.3 extends this to AI-specific design... |
| A.6.2.3 | Documentation of AI system design and development | A.5.37 | A.5.37 (Documented operating procedures) covers operational documentation; A.6.2.3 specifically addresses AI system d... |
| A.6.2.4 | AI system verification and validation | A.8.25 | A.8.25 (Secure development life cycle) includes security testing; A.6.2.4 adds AI-specific verification (bias testing... |
| A.6.2.4 | AI system verification and validation | A.8.29 | A.8.29 (Security testing in development and acceptance) provides the testing framework; A.6.2.4 extends it with AI-sp... |
| A.6.2.5 | AI system deployment | A.8.25 | A.8.25 (Secure development life cycle) includes secure deployment; A.6.2.5 adds AI-specific deployment controls inclu... |
| A.6.2.5 | AI system deployment | A.8.31 | A.8.31 (Separation of development, test and production environments) applies to AI system deployment; A.6.2.5 ensures... |
| A.6.2.5 | AI system deployment | A.8.32 | A.8.32 (Change management) governs deployment changes; A.6.2.5 adds AI-specific change assessment (model retraining, ... |
| A.6.2.6 | AI system operation and monitoring | A.8.16 | A.8.16 (Monitoring activities) provides general monitoring controls; A.6.2.6 extends this with AI-specific monitoring... |
| A.6.2.7 | AI system technical documentation | A.5.37 | A.5.37 (Documented operating procedures) covers general operational documentation; A.6.2.7 specifically addresses AI ... |
| A.6.2.7 | AI system technical documentation | A.8.25 | A.8.25 (Secure development life cycle) requires security-related documentation; A.6.2.7 extends to AI-specific techni... |
| A.6.2.8 | AI system recording of event logs | A.8.15 | A.8.15 (Logging) provides general logging controls; A.6.2.8 extends this with AI-specific event logging including inf... |
| A.6.2.8 | AI system recording of event logs | A.8.17 | A.8.17 (Clock synchronization) ensures consistent timestamps; applies to AI event logs for correlating inference even... |
| A.7.2 | Data for development and enhancement of AI system | A.5.12 | A.5.12 (Classification of information) provides the classification scheme applied to AI development data. Training da... |
| A.7.2 | Data for development and enhancement of AI system | A.5.33 | A.5.33 (Protection of records) addresses record protection; applies to AI training data records and data provenance d... |
| A.7.3 | Acquisition of data | A.5.12 | A.5.12 (Classification of information) classifies acquired data; A.7.3 extends to ensure AI-specific data acquisition... |
| A.7.3 | Acquisition of data | A.5.34 | A.5.34 (Privacy and protection of PII) addresses personal data acquisition; A.7.3 adds AI-specific requirements for t... |
| A.7.4 | Quality of data for AI systems | A.5.33 | A.5.33 (Protection of records) ensures record integrity; A.7.4 extends data integrity to AI-specific quality dimensio... |
| A.7.5 | Data provenance | A.5.33 | A.5.33 (Protection of records) ensures records integrity and availability; A.7.5 extends this to AI-specific data pro... |
| A.7.5 | Data provenance | A.5.12 | A.5.12 (Classification of information) tracks data classification; A.7.5 adds provenance metadata tracking the full l... |
| A.7.6 | Data preparation | A.5.12 | A.5.12 (Classification of information) governs data handling during preparation; A.7.6 adds AI-specific data preparat... |
| A.8.2 | System documentation and information for users | A.5.37 | A.5.37 (Documented operating procedures) covers general operational documentation; A.8.2 specifically addresses AI sy... |
| A.8.3 | External reporting | A.5.24 | A.5.24 (Information security incident management planning and preparation) provides the incident management framework... |
| A.8.3 | External reporting | A.5.31 | A.5.31 (Legal, statutory, regulatory and contractual requirements) tracks reporting obligations; A.8.3 adds AI-specif... |
| A.8.4 | Communication of incidents | A.5.24 | A.5.24 (Information security incident management planning and preparation) provides incident communication framework;... |
| A.8.4 | Communication of incidents | A.5.25 | A.5.25 (Assessment and decision on information security events) covers event assessment; A.8.4 adds AI-specific sever... |
| A.8.4 | Communication of incidents | A.5.26 | A.5.26 (Response to information security incidents) provides response procedures; A.8.4 extends with AI-specific resp... |
| A.8.5 | Information for interested parties | A.5.1 | A.5.1 (Policies for information security) provides IS policy to interested parties; A.8.5 extends to comprehensive AI... |
| A.8.5 | Information for interested parties | A.5.6 | A.5.6 (Contact with special interest groups) addresses engagement with relevant groups; A.8.5 extends to AI-specific ... |
| A.9.2 | Processes for responsible use of AI systems | A.5.10 | A.5.10 (Acceptable use of information and other associated assets) defines acceptable use of information assets; A.9.... |
| A.9.2 | Processes for responsible use of AI systems | A.5.1 | A.5.1 (Policies for information security) provides IS policy governing information use; A.9.2 adds AI-specific respon... |
| A.9.3 | Objectives for responsible use of AI system | A.5.1 | A.5.1 (Policies for information security) establishes IS objectives; A.9.3 establishes responsible AI use objectives ... |
| A.9.4 | Intended use of the AI system | A.5.10 | A.5.10 (Acceptable use of information and other associated assets) defines acceptable use of information assets; A.9.... |
| A.10.2 | Allocating responsibilities | A.5.19 | A.5.19 (Information security in supplier relationships) addresses IS responsibilities with suppliers; A.10.2 extends ... |
| A.10.2 | Allocating responsibilities | A.5.20 | A.5.20 (Addressing information security within supplier agreements) covers IS in supplier agreements; A.10.2 adds AI-... |
| A.10.3 | Suppliers | A.5.19 | A.5.19 (Information security in supplier relationships) provides the supplier management framework; A.10.3 extends to... |
| A.10.3 | Suppliers | A.5.21 | A.5.21 (Managing information security in the ICT supply chain) covers ICT supply chain; A.10.3 specifically addresses... |
| A.10.3 | Suppliers | A.5.22 | A.5.22 (Monitoring, review and change management of supplier services) covers supplier monitoring; A.10.3 adds AI-spe... |
| A.10.4 | Customers | A.5.19 | A.5.19 (Information security in supplier relationships) addresses security in supply chain; from the customer perspec... |
| A.10.4 | Customers | A.5.23 | A.5.23 (Information security for use of cloud services) applies to Product AI hosted on Azure; A.10.4 extends to cust... |

**Note:** ISO 42001 Annex A.5 controls (A.5.2-A.5.5, Assessing impacts of AI systems) have no direct ISO 27001 equivalent. AI impact assessment is additive to the ISMS.

---

## 13. Risk-to-Control Traceability

This section maps identified AI risks to the ISO 42001 Annex A controls that treat them. Risk references correspond to entries in the risk register (risks/ directory).

| Risk ID | Mapped Controls |
|---------|----------------|
| RISK-AI-001 | A.2.2, A.3.2, A.4.2, A.6.1.2, A.6.1.3, A.6.2.2, A.6.2.3, A.6.2.5, A.6.2.7, A.9.2, A.9.3, A.9.4 |
| RISK-AI-002 | A.3.3, A.4.2, A.6.1.2, A.6.2.6, A.6.2.8, A.8.4, A.9.2, A.9.4 |
| RISK-AI-003 | A.4.3, A.5.2, A.5.3, A.6.1.3, A.6.2.4, A.7.2, A.7.4, A.7.6 |
| RISK-AI-004 | A.4.3, A.5.2, A.5.4, A.6.2.4, A.7.2, A.7.3, A.7.4, A.7.5, A.7.6 |
| RISK-AI-005 | A.5.2, A.5.4, A.5.5, A.8.2, A.8.5, A.10.4 |
| RISK-AI-006 | A.5.5 |
| RISK-OPS-001 | A.4.5, A.6.2.6 |
| RISK-OPS-002 | A.4.4, A.6.2.2, A.6.2.5 |
| RISK-PPL-001 | A.3.2, A.4.6 |
| RISK-PPL-002 | A.4.6 |
| RISK-REG-001 | A.2.2, A.2.3, A.2.4, A.9.3 |
| RISK-REG-002 | A.3.3, A.8.3 |
| RISK-REG-003 | A.4.6 |
| RISK-REG-004 | A.5.3, A.6.2.7, A.7.3, A.7.5, A.8.2, A.8.5, A.10.4 |
| RISK-SEC-003 | A.6.2.8 |
| RISK-SEC-005 | A.8.3, A.8.4 |
| RISK-SUP-001 | A.4.4, A.10.2, A.10.3 |
| RISK-SUP-002 | A.10.2, A.10.3 |
| RISK-SUP-003 | A.4.5, A.10.3 |

---

## 14. Approval

This Statement of Applicability has been reviewed and approved by:

| Role | Name | Date | Signature |
|------|------|------|-----------|
| CEO | Helge Heupel | [CEO-SIGNOFF-REQUIRED] | _________________ |
| CISO | [CISO name] | [CISO-REVIEW-ON-RETURN] | _________________ |

**Git PR Reference:** [To be populated upon PR approval]

---

*Generated by: aims-soa/scripts/generate-aims-soa.js*
*Generated on: 2026-02-22*
*Source files: 38 per-control YAML files in aims-soa/*
