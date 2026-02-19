---
document-id: HH-AIMS-POL-001
title: "AI Policy"
version: v1.0
date: 2026-02-19
classification: Internal
author: CISO Agent
reviewer: [CISO, CTO]
approver: CEO Helge Heupel
review-cycle: Semi-annual
next-review: 2026-08-19
status: Draft
ims-context: HH-IMS-CTX-001
change-summary: Initial release
---

# AI Policy

## 1. Purpose and Scope

This AI Policy establishes the governance framework for all artificial intelligence systems developed, deployed, procured, or used across the Helge Heupel Group. It is a standalone governance document within the Integrated Management System (IMS, ref. HH-IMS-CTX-001), complementing the Information Security Policy (HH-ISMS-POL-001) and demonstrating the Group's commitment to responsible, safe, and compliant use of AI technology.

**Applicability:** This policy applies to all personnel, contractors, and AI agents across all three Helge Heupel Group entities:

- **Helge Heupel GmbH** (Germany) -- primary operating entity
- **Helge Heupel B.V.** (Netherlands) -- EU market expansion entity
- **Helge Heupel Inc.** (United States) -- US market entity (skeleton scope at Startup)

**AI systems in scope:** This policy governs three categories of AI systems:

1. **Product AI** -- AI features and components within Verity Value Engineering (VE) and Verity Enterprise Architecture Management (EAM) that are delivered to customers
2. **Development AI** -- AI tools used within the SDLC to augment software development, including the 7 Claude Code agents (SDLC Lead, CTO, CISO, AI Science, Platform/SRE, Product/Strategy, AppSec), ChatGPT, and Codex
3. **Third-party AI services** -- AI capabilities consumed from external providers (Azure OpenAI Service, Anthropic Claude API) integrated into products or internal operations

**Relationship to IMS:** This AI Policy, together with the IMS Context preamble (HH-IMS-CTX-001) and the Information Security Policy (HH-ISMS-POL-001), forms the policy tier of the IMS. Shared controls between the ISMS and AIMS (access control, incident management, document control) are implemented once and cross-referenced. The operational procedures supporting this policy are documented in the AI Policy Operational Annex (HH-AIMS-POL-001-ANNEX).

**Normative references:** ISO/IEC 42001:2023 cl. 5.2 (AI Policy), Annex A.2 (Policies related to AI), EU AI Act (Regulation 2024/1689).

---

## 2. Management Commitment to Responsible AI

CEO Helge Heupel, as Geschaeftsfuehrer of HH GmbH and as the governing body of the Helge Heupel Group, commits to:

- **Responsible AI use:** All AI systems developed or deployed by the Helge Heupel Group respect human dignity, autonomy, and fundamental rights. AI augments human capability; humans retain authority over all consequential decisions.

- **AI safety:** AI systems are designed, tested, and operated to prevent harm to individuals, groups, and the environment. Safety risks are identified, assessed, and treated throughout the AI system lifecycle.

- **Fairness and non-discrimination:** AI systems are tested for bias across protected attributes (age, gender, ethnicity, disability, nationality) before deployment. Disparate impact is monitored and addressed.

- **Transparency:** AI system capabilities, limitations, and intended use are documented per ISO/IEC 12792. Users are informed when interacting with AI-generated content or AI-assisted decisions.

- **Privacy and data protection:** AI systems process only authorized data within classification boundaries. Personal data processing complies with GDPR (GmbH, B.V.) and applicable US privacy law (Inc.). AI training on customer data requires explicit consent and Data Processing Agreement (DPA).

- **Accountability:** Humans own AI risk. The 7 Claude Code agents operate at Trust Level 2 (Supervised Autonomous). No AI agent may accept risk on behalf of the Helge Heupel Group. All AI outputs that reach customers or production require human approval.

- **Regulatory conformity:** The Helge Heupel Group commits to full conformity with the EU AI Act (Regulation 2024/1689), certification to ISO/IEC 42001:2023, and alignment with ISO/IEC 12792 (AI transparency), ISO/IEC 38507 (IT governance of AI), ISO/IEC TR 24368 (AI ethical concerns), and ISO/IEC TS 42119-2 (AI safety and trustworthiness).

- **Continual improvement:** The AIMS is continually improved through the Plan-Do-Check-Act cycle, internal audit, management review (conducted within the Monthly Strategic meeting per the governance model HH-GOV-Startup-v1.0), and corrective action.

---

## 3. AI Governance Principles

The following principles govern all AI-related decisions across the Helge Heupel Group. Each principle is specific to HH's operating context and team structure.

### Principle 1: Human Oversight -- AI Augments, Humans Govern

All AI outputs require human review before external use, customer delivery, or production deployment. The 7 Claude Code agents produce draft artifacts; CEO Helge Heupel, CTO, CISO, and IT Pentester review and approve. No AI system operates autonomously in production without a human-in-the-loop gate. This applies equally to Product AI (Verity VE/EAM features) and Development AI (code generation, documentation, compliance artifacts).

**Ref:** ISO 42001 Annex A.9.3, EU AI Act Art. 14, SDLC-Growth-v2 Section 6.5

### Principle 2: Transparency and Explainability

AI system capabilities, limitations, and decision factors are documented per ISO/IEC 12792 for each system in the AI System Registry. Verity VE and EAM product features that use AI display clear "AI-assisted" indicators. Confidence scores accompany AI-generated recommendations. Users can request explanations for AI-assisted outputs.

**Ref:** ISO 42001 Annex A.8, ISO/IEC 12792, EU AI Act Art. 13 and Art. 50

### Principle 3: Accountability -- Humans Own Risk, Agents Assist

CEO Helge Heupel accepts High/Critical residual risk for all AI systems. CISO Agent drafts AI risk assessments; human CISO validates in workshop. CTO is accountable for AI system architecture decisions. Every AI system in the AI System Registry has a named human owner who is accountable for its performance, compliance, and lifecycle management.

**Ref:** ISO 42001 cl. 5.1, ISO/IEC 38507, RACI-Startup.md rows 21-26

### Principle 4: Data Governance and Privacy by Design

AI systems process only data authorized for their intended purpose and classification level. Secret-classified data requires explicit CEO authorization before AI processing. Customer data used for AI model training requires documented consent and DPA. Data quality, provenance, and representativeness are assessed before use in AI systems. Personal data processing complies with GDPR (GmbH, B.V.) and applicable US privacy law (Inc.).

**Ref:** ISO 42001 Annex A.7, EU AI Act Art. 10, GDPR Art. 5

### Principle 5: Safety and Robustness

AI systems are tested for adversarial robustness, distributional drift, and failure modes before deployment. Verity product AI features include fail-safe mechanisms that default to conservative outputs when confidence is low. AI model performance is monitored in production with drift detection and automated alerting. Safety cases are constructed for AI features classified as High-Risk.

**Ref:** ISO/IEC TS 42119-2, EU AI Act Art. 15, ISO/IEC DIS 27090

### Principle 6: Fairness and Non-Discrimination

AI systems are tested for bias across protected attributes before deployment. The disparate impact ratio (four-fifths rule) is applied: a ratio below 0.8 triggers mandatory remediation. AI training data is assessed for representativeness across the populations served by Verity VE and EAM. Bias testing is part of the CI/CD pipeline for Product AI.

**Ref:** ISO 42001 Annex A.5, ISO/IEC TR 24368, EU AI Act Recitals 27-28

### Principle 7: Environmental Sustainability

The environmental footprint of AI operations (model training compute, inference costs, data storage) is tracked and reported. Azure region selection considers energy efficiency and renewable energy availability. AI model architecture decisions balance performance against computational cost. Environmental sustainability metrics are reviewed in the Monthly Strategic meeting.

**Ref:** ISO/IEC TR 24368 (sustainability), ISO 27001:2022/Amd 1:2024 (climate change)

### Principle 8: Continuous Improvement through PDCA

AI governance practices improve through the Plan-Do-Check-Act cycle aligned to the AIMS management review (Monthly Strategic meeting, agenda item 2). AI system performance data, audit findings, incident post-mortems, and stakeholder feedback drive improvement actions. Improvement items are prioritized and tracked in the governance framework.

**Ref:** ISO 42001 cl. 10, ISO 31000

---

## 4. AI System Classification

The Helge Heupel Group uses a dual-axis classification framework that separates regulatory product risk from internal usage context.

### Axis 1: EU AI Act Risk Level (Applied to Product AI)

| Classification | Criteria | AIMS Controls | Current HH Status |
|---|---|---|---|
| **Unacceptable (Art. 5)** | Prohibited practices listed in Art. 5(1)(a)-(h) | System must not be developed or deployed; immediate escalation to CEO and Legal | No HH systems fall in this category |
| **High-Risk (Art. 6, Annex III)** | Systems in Annex III categories or safety components of regulated products | Full Art. 9-15 compliance; conformity assessment; Annex IV documentation; post-market monitoring | Assessment pending for future Verity product features (Phase 5 AI risk assessment) |
| **Limited-Risk (Art. 50)** | Systems interacting with humans, generating synthetic content, or performing emotion recognition | Transparency obligations; user notification; content marking | **Current HH AI systems: all Limited-Risk** -- 7 Claude Code agents, ChatGPT, Codex, Verity AI features |
| **Minimal-Risk** | All other AI systems | Internal best practices; voluntary codes of practice | Internal log analysis, code autocompletion (when not classified as Limited-Risk) |

### Axis 2: SDLC Usage Tier (Applied to Development AI)

| Tier | IEA Trust Model | Human Oversight | Examples |
|---|---|---|---|
| **Tier 1 -- Assistant** | Autonomous with Post-Hoc Review (within 24h) | Review within 24 hours | Code autocompletion; documentation generation; test case generation |
| **Tier 2 -- Collaborator** | Human Review Before Execution | Mandatory review before any output is accepted | Requirements drafting; architecture suggestions; security analysis (all 7 Claude Code agents at Trust Level 2) |
| **Tier 3 -- Decision Support** | Human-in-the-Loop Mandatory | Real-time human approval required | Deployment decisions; incident response; production system changes |

**Combined risk matrix:** Where an AI system spans both axes (e.g., a Development AI tool processing customer data), the higher classification governs. Classification rationale is documented in the AI System Registry per system.

**Classification procedure:** Classification is performed by the AI system owner, reviewed by CISO Agent, and approved by CEO Helge Heupel for High-Risk or Unacceptable determinations. The detailed classification process, including the decision tree and reclassification triggers, is documented in Phase 5 (AI Risk Assessment Process).

---

## 5. Prohibited Practices

The Helge Heupel Group explicitly prohibits the following AI practices. This section satisfies EU AI Act Art. 5 requirements and extends them with HH-specific prohibitions to ensure responsible AI use across all three entities.

### 5.1 EU AI Act Art. 5 Prohibited Practices

The following AI practices are prohibited across all Helge Heupel Group entities, effective since 2 February 2025:

1. **Social scoring:** AI systems that evaluate or classify natural persons based on social behavior or personal characteristics, leading to detrimental or unfavourable treatment unrelated to the context in which the data was generated (Art. 5(1)(c))

2. **Exploitation of vulnerabilities:** AI systems that exploit vulnerabilities of specific groups of persons due to their age, disability, or social or economic situation, with the objective or effect of materially distorting their behavior in a manner that causes or is likely to cause significant harm (Art. 5(1)(b))

3. **Real-time remote biometric identification in publicly accessible spaces:** AI systems used for real-time remote biometric identification in publicly accessible spaces for law enforcement purposes, except where strictly necessary under the conditions and safeguards set out in Art. 5(1)(h) (Art. 5(1)(h))

4. **Emotion recognition in workplace and education:** AI systems that infer emotions of natural persons in the workplace or in educational institutions, except where the AI system is intended to be placed on the market for medical or safety reasons (Art. 5(1)(f))

5. **Untargeted scraping of facial images:** AI systems that create or expand facial recognition databases through untargeted scraping of facial images from the internet or CCTV footage (Art. 5(1)(e))

6. **Predictive policing based on profiling:** AI systems for making risk assessments of natural persons in order to assess or predict the risk of a natural person committing a criminal offence, based solely on profiling or personality traits (Art. 5(1)(d))

7. **Subliminal manipulation:** AI systems that deploy subliminal techniques beyond a person's consciousness, or purposefully manipulative or deceptive techniques, with the objective or effect of materially distorting a person's behavior causing significant harm (Art. 5(1)(a))

8. **Biometric categorization for sensitive attributes:** AI systems that categorize natural persons based on biometric data to deduce or infer race, political opinions, trade union membership, religious or philosophical beliefs, sex life, or sexual orientation (Art. 5(1)(g))

### 5.2 HH-Specific Prohibited Practices

In addition to the EU AI Act prohibitions, the Helge Heupel Group prohibits:

9. **AI-generated outputs reaching customers without deterministic verification:** No AI-generated content, recommendation, or decision output reaches a Verity VE or EAM customer without deterministic verification by a qualified human reviewer. This applies to all Product AI features per the SDLC-Growth-v2 framework.

10. **AI processing of Secret-classified data without CEO authorization:** No AI system (including the 7 Claude Code agents, ChatGPT, and Codex) may access or process data classified as Secret without explicit, documented authorization from CEO Helge Heupel.

11. **AI systems making risk acceptance decisions:** No AI system may accept risk on behalf of the Helge Heupel Group. All risk acceptance decisions require human judgment and are flagged with `[CEO-SIGNOFF-REQUIRED]`. CEO Helge Heupel is the sole risk acceptance authority for High/Critical risks.

12. **AI systems modifying production systems without human approval:** No AI agent or AI system may deploy to, modify, or reconfigure production systems without explicit human approval via the CI/CD gate model (G4 -- Release Readiness per governance-model.md). This includes all 7 Claude Code agents.

13. **Training AI models on customer data without consent and DPA:** No AI model may be trained, fine-tuned, or adapted using customer data from Verity VE or EAM without: (a) documented customer consent, (b) an executed Data Processing Agreement (DPA) covering the AI processing purpose, and (c) DPIA completion per GDPR Art. 35.

14. **Use of non-approved AI tools for proprietary data:** No team member or agent may process proprietary, Confidential, or Secret data through AI tools not on the approved AI toolchain. Approved tools are: Claude Code (Anthropic), ChatGPT (OpenAI, with data restrictions), Codex (OpenAI), and Azure OpenAI Service. Any new AI tool must be assessed and approved before processing HH data.

**Violation response:** Any suspected violation of a prohibited practice must be immediately reported to the CISO Agent and CEO Helge Heupel. The AI system involved is suspended pending investigation. Violations are classified as Critical nonconformities and managed through the AIMS corrective action process.

---

## 6. Roles and Responsibilities for AI Governance

### 6.1 Human Personnel

| Role | Person | AI Governance Responsibilities |
|---|---|---|
| **CEO** | Helge Heupel | Ultimate accountability for AI governance across all 3 entities. Approves AI Policy. Accepts High/Critical AI risk. Approves AI system classifications as High-Risk or Unacceptable. Oversees all AI agents. Personal liability under NIS2UmsuCG Sec. 38 for cybersecurity governance covering AI systems. |
| **CTO** | (Named individual) | AI system architecture accountability. Technical standards for AI engineering. Reviews AI system designs and ADRs. Approves AI deployments at G4 gate (High/Critical risk). Ensures AI systems meet performance, robustness, and security requirements. |
| **CISO** | (Named individual) | AI Policy validation (under CEO sign-off). AI risk assessment validation in workshop. EU AI Act conformity oversight. ISO 42001 certification readiness. TISAX ISA 6 AI-relevant controls. NIS2 AI incident reporting coordination. |
| **IT Pentester / Super Admin** | (Named individual) | AI system infrastructure security. Penetration testing of AI endpoints. Azure platform security for AI workloads. Deployment execution for AI system releases. |
| **Strategy Partner** | (Named individual) | Consulted on AI product strategy. Informed on AI governance decisions. Product-level AI feature prioritization. |
| **Finance Industry Senior Manager** | (Named individual) | Consulted on financial risk from AI systems. Advisory on industry-specific AI compliance requirements. |

### 6.2 AI Agents

| Agent | AI Governance Role | Trust Level |
|---|---|---|
| **CISO Agent** | AI Policy ownership and drafting. AI risk assessment drafting. EU AI Act conformity analysis. ISO 42001 Annex A control implementation. Cross-framework AI governance mapping. | Trust Level 2 (Supervised Autonomous) |
| **CTO Agent** | AI system architecture design. AI engineering standards. AI system performance requirements. AI-specific ADR drafting. | Trust Level 2 |
| **AI Science Agent** | AI research assessment. Model evaluation and benchmarking. Bias and fairness monitoring. ISO 42001 Annex A artifact production. AI impact assessment support. | Trust Level 2 |
| **AppSec Agent** | AI system threat modeling. AI-specific security testing (adversarial robustness, prompt injection defense). AI supply chain security. | Trust Level 2 |
| **Platform/SRE Agent** | AI system monitoring and observability. AI model drift detection infrastructure. AI incident management support. | Trust Level 2 |
| **Product/Strategy Agent** | AI feature product requirements. AI transparency information for product documentation. Customer communication about AI features. | Trust Level 2 |
| **SDLC Lead Agent** | Cross-agent AI governance coordination. Multi-agent workflow orchestration for AI-related tasks. | Trust Level 2 |

**Agent governance principle:** All agents operate at Trust Level 2 (Supervised Autonomous). Promotion to Trust Level 3 requires 30+ interactions with demonstrated accuracy and CEO approval. Agents produce draft artifacts; humans own risk. See RACI-Startup.md for the full responsibility assignment matrix.

---

## 7. AI System Lifecycle Requirements

Per ISO 42001 Annex A.6, all AI systems within the AIMS scope must adhere to the following lifecycle requirements.

### 7.1 Design

- Document intended use, target users, and operational context for each AI system
- Complete EU AI Act risk classification (Section 4 of this policy)
- Identify and document training data sources, data quality requirements, and provenance
- Assess bias and representativeness of training data
- Produce initial transparency information per ISO/IEC 12792
- Register the AI system in the AI System Registry (process defined in Phase 5)

### 7.2 Development

- Follow the SDLC-Growth-v2 framework (Startup overlay) for all AI development
- Apply security by design principles per ISO 27001 A.8.25 and ISO/IEC DIS 27090
- Implement AI-specific security controls: model artifact signing (Cosign), input validation, prompt injection defense, output boundary enforcement
- Generate and maintain AI-BOM (AI Bill of Materials) covering training data provenance, model architecture, and ML framework dependencies

### 7.3 Testing

- Conduct bias testing across protected attributes (disparate impact ratio threshold: 0.8)
- Perform adversarial robustness testing (evasion, poisoning, extraction, inference attacks per ISO/IEC DIS 27090)
- Execute performance benchmarking against declared accuracy metrics
- Validate explainability outputs (SHAP/LIME thresholds per system requirements)
- Complete transparency information validation
- Document test results in the AI system's conformity evidence package

### 7.4 Deployment

- Human approval required for all AI system deployments (G4 -- Release Readiness gate)
- CEO sign-off required for Critical risk AI deployments
- Publish transparency information (AI interaction notification, capability documentation)
- Configure monitoring and alerting (drift detection, performance degradation, error rates)
- Implement rollback plan with documented procedures
- Update AI System Registry with deployment status

### 7.5 Monitoring

- Track performance metrics against declared accuracy baselines
- Monitor for distributional drift with automated alerting (threshold: 5% deviation from baseline)
- Log AI system operations for traceability per ISO 42001 Annex A.4.6
- Report AI-specific incidents (bias detection, hallucination causing business impact, unauthorized data processing)
- Review monitoring data in the Monthly Strategic meeting (agenda item 2: compliance posture)

### 7.6 Retirement

- Document rationale for AI system retirement
- Archive model artifacts, training data references, and compliance evidence per data retention policy (7 years minimum)
- Notify affected stakeholders (customers, deployers, internal users)
- Update AI System Registry with retirement status and date
- Ensure replacement system (if any) is registered and classified before the retired system is decommissioned

---

## 8. Regulatory Compliance

### 8.1 EU AI Act (Regulation 2024/1689)

**Prohibited practices (Art. 5):** In force since 2 February 2025. Section 5 of this policy enumerates all prohibited practices. The CISO Agent monitors regulatory updates and implementing acts.

**Transparency obligations (Art. 50, Limited-Risk):** All current HH AI systems are classified as Limited-Risk. Transparency obligations apply:
- Users must be informed when interacting with AI-generated content
- AI-generated synthetic content must be marked as such
- The 7 Claude Code agents produce outputs clearly identified as AI-generated via the SDLC workflow

**Conformity assessment (High-Risk, Art. 43):** The Helge Heupel Group prepares for potential High-Risk classification of future Verity product features. The conformity assessment process (internal assessment per Annex VI or third-party assessment) is defined in Phase 5 (AI Risk Assessment Process).

**Timeline:**
- Feb 2025: Prohibited practices in force (compliance confirmed)
- Aug 2025: AI literacy obligations (Art. 4) -- training program in preparation
- Aug 2026: Full conformity for High-Risk systems, general-purpose AI provider obligations

### 8.2 ISO/IEC 42001:2023

This AI Policy satisfies cl. 5.2 (AI Policy) requirements. The AIMS is structured per the Harmonized Structure (clauses 4-10) and implements applicable Annex A controls. The Statement of Applicability for ISO 42001 Annex A controls is maintained as a controlled document (Phase 5 deliverable). Dual certification with ISO 27001 is the target, leveraging shared controls through the IMS (HH-IMS-CTX-001).

### 8.3 NIS2 Intersection

AI systems are part of the critical information infrastructure governed by NIS2 (NIS2UmsuCG for GmbH, Wbni for B.V.). AI-specific security incidents (model compromise, adversarial attack, data poisoning) follow the NIS2 incident reporting timelines (24h initial notification, 72h detailed report to BSI/NCSC-NL). AI system availability is covered by the business continuity and crisis management measures required under NIS2 Art. 21(c).

### 8.4 US AI Regulation (Advisory)

The Helge Heupel Group monitors US AI regulation developments (Executive Orders on AI, state-level AI legislation, NIST AI Risk Management Framework). US regulatory compliance for AI is advisory at Startup; no US-specific AI compliance artifacts are produced until the US customer pipeline for HH Inc. is active. The CISO Agent carries this knowledge and flags relevant developments.

---

## 9. Policy Communication and Review

### 9.1 Communication

- This AI Policy is published in the HH Group Git repository (policies/AI-Policy.md), accessible to all personnel and agents
- New employees and contractors receive this policy during onboarding
- All personnel and agents acknowledge this policy annually
- Key obligations are summarized for non-English-speaking stakeholders in German (Section 10) and Dutch (Section 11)
- The AI Policy Operational Annex (HH-AIMS-POL-001-ANNEX) provides actionable procedures for day-to-day compliance

### 9.2 Review Cycle

**Semi-annual review:** This policy is reviewed every 6 months (next review: 2026-08-19). The faster review cadence (compared to the IS Policy's annual cycle) reflects the rapid evolution of AI regulation, technology, and organizational AI maturity.

**Change triggers requiring extraordinary review:**
- New EU AI Act implementing acts or delegated regulations
- New AI system deployment classified as High-Risk
- Significant AI incident (bias event affecting customers, model compromise, prohibited practice detection)
- ISO 42001 auditor findings requiring policy changes
- Changes to the Helge Heupel Group structure (new entity, new product line with AI features)
- Material changes in the regulatory landscape (new national AI legislation in DE, NL, or US)

### 9.3 Approval Process

Changes to this policy follow the document control framework (HH-ISMS-DOC-001):
1. CISO Agent drafts proposed changes on a feature branch
2. Pull Request created with CISO and CTO as reviewers
3. CISO and CTO review, comment, and approve
4. CEO Helge Heupel approves and merges the PR (this constitutes the formal approval)
5. Document status and version updated in YAML frontmatter
6. Document register (HH-ISMS-REG-001) updated with new version

---

## 10. Zusammenfassung (German Executive Summary)

### Zweck

Diese KI-Richtlinie legt den Governance-Rahmen fuer alle Systeme der kuenstlichen Intelligenz fest, die in der Helge Heupel Gruppe (GmbH, B.V., Inc.) entwickelt, eingesetzt oder genutzt werden. Sie ist ein eigenstaendiges Governance-Dokument innerhalb des Integrierten Managementsystems (IMS).

### Wesentliche Verpflichtungen

- **Verbotene Praktiken:** Die in Artikel 5 der EU-KI-Verordnung aufgefuehrten Praktiken sind seit dem 2. Februar 2025 verboten. Darueber hinaus gelten HH-spezifische Verbote (kein KI-generierter Output an Kunden ohne deterministische Verifizierung; kein Zugriff auf als Geheim klassifizierte Daten ohne CEO-Genehmigung).

- **Menschliche Aufsicht:** Alle KI-Ergebnisse erfordern eine menschliche Ueberpruefung vor externer Nutzung oder Produktionsbereitstellung. Die 7 Claude Code Agenten arbeiten auf Vertrauensstufe 2 (Ueberwacht Autonom).

- **Transparenz:** KI-Systemfaehigkeiten und -grenzen werden dokumentiert. Nutzer werden informiert, wenn sie mit KI-generierten Inhalten interagieren.

- **Verantwortlichkeit:** CEO Helge Heupel traegt die letztendliche Verantwortung fuer die KI-Governance. Kein KI-System darf Risiken im Namen der Organisation akzeptieren.

- **Halbjaehrliche Ueberpruefung:** Diese Richtlinie wird alle 6 Monate ueberprueft (naechste Ueberpruefung: 19. August 2026).

### Vollstaendiges Dokument

Das vollstaendige englischsprachige Dokument ist verfuegbar unter: `policies/AI-Policy.md`

---

## 11. Samenvatting (Dutch Executive Summary)

### Doel

Dit AI-beleid stelt het governance-kader vast voor alle systemen voor kunstmatige intelligentie die worden ontwikkeld, ingezet of gebruikt binnen de Helge Heupel Groep (GmbH, B.V., Inc.). Het is een zelfstandig governance-document binnen het Geintegreerd Managementsysteem (IMS).

### Belangrijkste verplichtingen

- **Verboden praktijken:** De praktijken vermeld in Artikel 5 van de EU AI-verordening zijn verboden sinds 2 februari 2025. Daarnaast gelden HH-specifieke verboden (geen AI-gegenereerde output naar klanten zonder deterministische verificatie; geen toegang tot als Geheim geclassificeerde gegevens zonder CEO-goedkeuring).

- **Menselijk toezicht:** Alle AI-resultaten vereisen menselijke beoordeling voor extern gebruik of productie-implementatie. De 7 Claude Code agents werken op Vertrouwensniveau 2 (Gecontroleerd Autonoom).

- **Transparantie:** AI-systeemcapaciteiten en -beperkingen worden gedocumenteerd. Gebruikers worden geinformeerd wanneer zij interageren met AI-gegenereerde inhoud.

- **Verantwoordelijkheid:** CEO Helge Heupel draagt de uiteindelijke verantwoordelijkheid voor AI-governance. Geen enkel AI-systeem mag risico's accepteren namens de organisatie.

- **Halfjaarlijkse beoordeling:** Dit beleid wordt elke 6 maanden beoordeeld (volgende beoordeling: 19 augustus 2026).

### Volledig document

Het volledige Engelstalige document is beschikbaar op: `policies/AI-Policy.md`

---

## 12. Document Control

### Version History

| Version | Date | Author | Change Summary | Approved By |
|---|---|---|---|---|
| v1.0 | 2026-02-19 | CISO Agent | Initial release | [CEO-SIGNOFF-REQUIRED] |

### Approval

This document is approved via Git Pull Request. The PR merge by CEO Helge Heupel constitutes formal approval per the document control framework (HH-ISMS-DOC-001).

### Related Documents

| Document ID | Title | Relationship |
|---|---|---|
| HH-IMS-CTX-001 | IMS Context | Shared preamble establishing IMS scope and integration |
| HH-ISMS-POL-001 | Information Security Policy | Companion policy for information security governance |
| HH-AIMS-POL-001-ANNEX | AI Policy Operational Annex | Operational procedures supporting this policy |
| HH-ISMS-DOC-001 | Document Control Framework | Governs creation, review, and approval of this document |
| HH-ISMS-REG-001 | Document Register | Lists this document with metadata |
| HH-GOV-Startup-v1.0 | Governance Model | Defines meeting structure for AI governance review |
| HH-RACI-Startup-v1.0 | RACI Matrix | Defines AI governance role assignments |
