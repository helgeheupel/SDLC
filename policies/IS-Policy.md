---
document-id: HH-ISMS-POL-001
title: "Information Security Policy"
version: v1.0
date: 2026-02-19
classification: Internal
author: CISO Agent
reviewer: [CISO, CTO]
approver: CEO Helge Heupel
review-cycle: Annual
next-review: 2027-02-19
status: Draft
ims-context: HH-IMS-CTX-001
change-summary: Initial release
---

# Information Security Policy

## 1. Purpose and Scope

This Information Security Policy establishes the information security governance framework for the **Helge Heupel Group** -- comprising Helge Heupel GmbH (Germany), Helge Heupel B.V. (Netherlands), and Helge Heupel Inc. (United States).

This policy exists within the Integrated Management System (IMS) defined in the IMS Context preamble (HH-IMS-CTX-001). The IMS Context establishes the relationship between the ISMS (ISO 27001:2022) and the AIMS (ISO 42001:2023) as one integrated management system.

The operational procedures supporting this policy are documented in the Information Security Policy Operational Annex (HH-ISMS-POL-001-ANNEX).

### Applicability

This policy applies to:

- **All personnel** of GmbH, B.V., and Inc., including the CEO (Helge Heupel), CTO, CISO, IT Pentester/Super Admin, Strategy Partner, and Finance Industry Senior Manager
- **All AI agents** with access to Helge Heupel Group information assets, including the 7 Claude Code agents (SDLC Lead, CTO, CISO, AI Science, Platform/SRE, Product/Strategy, AppSec), ChatGPT, and Codex
- **All contractors and third parties** with access to Helge Heupel Group information assets
- **All information assets** across all three entities: source code repositories, customer data, AI model configurations, compliance artifacts, communication data, product specifications, and cryptographic keys
- **All technology systems:** Azure cloud infrastructure (West Europe, Germany West Central), Microsoft 365, NorthGRC, Linear, Float, Claude Code, Git repositories

### Scope Reference

Detailed scope boundaries for each entity are defined in the per-entity ISMS Scope Statements:
- HH-ISMS-SCOPE-GMBH-001 (Helge Heupel GmbH)
- HH-ISMS-SCOPE-BV-001 (Helge Heupel B.V.)
- HH-ISMS-SCOPE-INC-001 (Helge Heupel Inc.)

---

## 2. Management Commitment

### ISO 27001 cl. 5.1 and cl. 5.2 Commitment

CEO Helge Heupel, as Geschaeftsfuehrer of Helge Heupel GmbH and Bestuurder of Helge Heupel B.V., commits to:

- Establishing this Information Security Policy and ensuring it is appropriate to the purpose and context of the Helge Heupel Group
- Ensuring that information security objectives are established and compatible with the strategic direction of the organization
- Ensuring the integration of ISMS requirements into the Helge Heupel Group's business processes, including the SDLC-Growth-v2 framework and governance model
- Ensuring that resources (personnel, AI agents, technology, budget) are available for the ISMS
- Communicating the importance of effective information security and conforming to ISMS requirements to all personnel and AI agents
- Ensuring the ISMS achieves its intended outcomes -- specifically, ISO 27001 certification readiness by mid-May 2026
- Directing and supporting persons and AI agents to contribute to the effectiveness of the ISMS
- Promoting continual improvement through the Monthly Strategic management review and Weekly Technical governance meetings

### NIS2UmsuCG Sec. 38 -- Management Body Personal Liability

In accordance with the NIS-2-Umsetzungs- und Cybersicherheitsstarkungsgesetz (NIS2UmsuCG), which entered into force on December 5, 2025, the management body of Helge Heupel GmbH acknowledges:

1. **Personal liability** of the Geschaeftsfuehrer for cybersecurity risk management under Sec. 38 NIS2UmsuCG. The management body bears personal responsibility for approving and overseeing the implementation of cybersecurity risk management measures (NIS2 Art. 21).

2. **Training obligation:** CEO Helge Heupel completes mandatory cybersecurity training annually, covering the current threat landscape, ISMS performance, NIS2 obligations, personal liability implications, and incident response roles. Training completion is recorded and auditable.

3. **Annual acknowledgment:** CEO Helge Heupel signs an annual acknowledgment of management body personal liability for cybersecurity governance. Legal counsel reviews the acknowledgment form annually.

4. **Liability mitigation:** The ISMS provides a documented defense demonstrating that the management body has fulfilled its duties: approved risk management measures, overseen implementation, completed training, and responded appropriately to identified risks and incidents.

For Helge Heupel B.V., equivalent management body obligations under the Dutch Wbni amendment (NIS2 transposition) apply to the Bestuurder(s).

`[CEO-SIGNOFF-REQUIRED]`

---

## 3. Information Security Objectives

The Helge Heupel Group establishes the following measurable information security objectives per ISO 27001 cl. 6.2:

| # | Objective | Measure | Target | Review |
|---|-----------|---------|--------|--------|
| 1 | Achieve ISO 27001:2022 certification readiness | Stage 1 audit pass rate | 100% by mid-May 2026 | Monthly (Monthly Strategic) |
| 2 | Maintain zero critical security incidents | Critical incident count | 0 per quarter | Weekly (Weekly Technical) |
| 3 | Complete security awareness training | Training completion rate | 100% of personnel annually | Quarterly |
| 4 | Maintain vulnerability remediation SLAs | Critical: 24h, High: 72h, Medium: 30d, Low: 90d | 95% SLA compliance | Monthly |
| 5 | Complete access reviews | Quarterly access review completion | 100% quarterly | Quarterly |
| 6 | Achieve NIS2 compliance readiness | Compliance assessment score | No major gaps for GmbH and B.V. | Monthly |
| 7 | Maintain document control compliance | All controlled documents current | 100% within review cycle | Quarterly |

### Objective Review Framework

- Information security objectives are reviewed at the **Monthly Strategic meeting** (satisfying ISO 27001 cl. 9.3 management review inputs)
- The CISO prepares a compliance dashboard showing progress against each objective
- Objectives are updated annually or upon significant organizational change, regulatory change, or security incident
- Each objective has a designated owner: objectives 1-7 are owned by the CISO with CEO oversight

---

## 4. Organizational Roles and Responsibilities

### Human Personnel

| Role | Person | Information Security Responsibilities |
|------|--------|--------------------------------------|
| **CEO** | Helge Heupel | Ultimate policy approver. Accepts all High/Critical residual risk. Geschaeftsfuehrer liability under NIS2UmsuCG Sec. 38. Bestuurder obligations under Wbni. Oversees all 7 AI agents. Interim CISO delegate when human CISO is unavailable. |
| **CTO** | (Named individual) | Accountable for technical architecture security decisions. Reviews security-relevant code and architecture. Approves deployments at Weekly Technical. Co-reviewer of IS Policy and AI Policy. |
| **CISO** | (Named individual) | Accountable for ISMS operation. Responsible for IS Policy maintenance, risk assessment, NIS2 compliance, TISAX ISA 6 control mapping, audit readiness, and cross-framework integration. Reports to CEO. |
| **IT Pentester/Super Admin** | (Named individual) | Head of Platform. Responsible for Azure infrastructure security, penetration testing, platform operations, deployment execution. Hands-on security testing. Attends Weekly Technical. |
| **Strategy Partner** | (Named individual) | Consulted on strategic risk and product security decisions. Informed on security policies. Attends Monthly Strategic. |
| **Finance Industry Senior Manager** | (Named individual) | Consulted on financial risk and industry-specific compliance. Attends Monthly Strategic when financial items are on the agenda. |

### AI Agent Security Roles

All 7 Claude Code agents operate at Trust Level 2 (Supervised Autonomous) and contribute to information security under human oversight:

| Agent | Security Role |
|-------|--------------|
| **SDLC Lead** | Orchestrates multi-agent workflows. Ensures security gates are included in all SDLC processes. |
| **CTO Agent** | Produces architecture artifacts incorporating security requirements. Drafts Architecture Decision Records (ADRs) with security impact analysis. |
| **CISO Agent** | Primary security artifact producer. Drafts IS Policy, AI Policy, risk assessments, compliance mappings, and audit evidence. Operates as CISO substitute when human CISO is unavailable. |
| **AI Science Agent** | Produces AI research assessments with security implications. Evaluates AI model risk per ISO 42001 Annex A. |
| **Platform/SRE Agent** | Produces SLO frameworks, observability configurations, and BCP/DR plans incorporating security requirements. |
| **Product/Strategy Agent** | Produces strategic artifacts ensuring security requirements are embedded in product decisions. |
| **AppSec Agent** | Produces threat models, SAST/DAST configurations, SBOM pipeline specifications, and supply chain security assessments. |

**Agent governance principle:** Agents produce artifacts; humans own risk. No AI agent may accept risk on behalf of the Helge Heupel Group. All agent outputs are reviewed via Pull Request before becoming effective.

### RACI Reference

The full Responsibility Assignment Matrix covering 32 SDLC activities across 13 columns (6 humans + 7 agents) is maintained in RACI-Startup.md. Key principle: **Accountable (A) is always a human** -- AI agents may be Responsible (R) or Consulted (C) but never Accountable.

---

## 5. Risk Management Approach

### Risk Methodology

The Helge Heupel Group applies a risk management framework aligned with ISO 31000:2018 and IEC 31010:2019. The detailed risk assessment methodology is documented separately (Phase 3 deliverable: Risk Assessment Methodology).

**Key parameters:**
- **Qualitative assessment:** 5x5 likelihood-impact matrix for all risks
- **Quantitative assessment:** FAIR methodology with Monte Carlo simulation for High and Critical risks
- **Risk register:** Single register covering information security, AI, compliance, and operational risks across all 3 entities
- **Risk classification:** 4 tiers -- Low (1-6), Medium (7-12), High (13-19), Critical (20-25)

### Risk Appetite Summary

The Helge Heupel Group's risk appetite reflects the balance between competitive innovation and enterprise trust:

| Risk Category | Appetite | Key Principle |
|---------------|----------|---------------|
| **Compliance** | Very Low | Near-zero tolerance for non-conformities affecting ISO 27001, ISO 42001, TISAX, or NIS2 certification and compliance. |
| **Operational** | Low | High availability (99.95% target for Tier 1 services). Operational failures erode the customer trust that differentiates Verity products. |
| **AI** | Low-Moderate | Moderate AI risk accepted where controls ensure fairness, transparency, and human oversight. Zero appetite for AI systems causing significant harm. |
| **Reputational** | Very Low | A single data breach or AI failure could be existential for a startup competing against incumbent trust. Prevention over remediation. |
| **Strategic** | Moderate | Competitive disruption accepted; failed experiments are acceptable costs of innovation leadership. |
| **Financial** | Moderate | Calculated financial risks on product development and market expansion accepted. |

### Residual Risk Acceptance Authority

At Startup phase, **CEO Helge Heupel** is the acceptance authority for all High and Critical residual risk. This consolidation reflects the CEO's dual role covering CISO responsibilities and is documented in the governance model. Residual risk acceptance requires:
- Risk register entry with justification
- FAIR analysis for High/Critical risks
- `[CEO-SIGNOFF-REQUIRED]` tag on all acceptance decisions

---

## 6. Information Classification

The Helge Heupel Group applies a **four-level classification scheme** aligned with TISAX ISA Chapter 7 handling requirements:

| Level | Description | Handling Requirements | Examples |
|-------|-------------|----------------------|----------|
| **Public** | No restriction on disclosure. | May be shared externally without restriction. No special storage or transmission requirements. | Published documentation, marketing materials, open-source contributions |
| **Internal** | Helge Heupel Group personnel and authorized AI agents only. | Stored in access-controlled repositories (Git, SharePoint). Transmitted via encrypted channels (Teams, email with TLS). No external sharing without management approval. | Policies, procedures, RACI matrix, governance model, meeting notes |
| **Confidential** | Need-to-know within the Helge Heupel Group. | Stored in access-restricted repositories with audit logging. Transmitted only via encrypted channels with recipient verification. External sharing requires CEO approval and NDA/DPA. Access reviewed quarterly. | Risk register, vulnerability assessments, audit findings, customer data, AI model configurations |
| **Secret** | Named individuals only, CEO authorization required. | Stored in dedicated access-controlled locations with full audit trail. Transmission requires CEO pre-approval and encrypted delivery. No AI agent access without explicit authorization per session. | Patent materials ([PATENT-VE-001], [PATENT-EAM-001]), M&A documents, cryptographic root keys |

### Classification Governance

- All information assets are classified upon creation or acquisition
- Classification labels are applied via Azure Information Protection and YAML frontmatter metadata in documents
- AI agents classify their outputs in the YAML frontmatter of every artifact they produce
- Handling violations are reported as security incidents per the incident response procedure
- The CISO reviews classification assignments quarterly as part of the access review cycle

---

## 7. Regulatory Compliance

### NIS2UmsuCG (Germany) -- Helge Heupel GmbH

Helge Heupel GmbH is classified as an "important entity" (wichtige Einrichtung) under Sec. 28 NIS2UmsuCG. Compliance obligations include:

| Obligation | Implementation | Reference |
|-----------|----------------|-----------|
| **BSI registration** (Sec. 33) | GmbH maintains current registration with the BSI providing entity contact point, sector classification, IP ranges, and designated incident contact. | BSI registration record |
| **Incident reporting** (Sec. 32) | Significant incidents reported to BSI: initial notification within 24 hours, detailed report within 72 hours, final report within one month. Reports submitted in German. | Incident response procedure |
| **Risk management measures** (Art. 21 via Sec. 30) | Cybersecurity risk management measures approved by the Geschaeftsfuehrer and implemented per this IS Policy and ISMS. | This policy; risk assessment methodology |
| **Management body training** (Sec. 38) | CEO completes annual cybersecurity training. Training covers threat landscape, ISMS performance, NIS2 obligations, and personal liability. | Training records |
| **BSI C5 reference** | Azure services hold BSI C5 Type 2 attestation. Referenced as compensating evidence for cloud infrastructure controls. | Azure BSI C5 report |

### Wbni (Netherlands) -- Helge Heupel B.V.

Helge Heupel B.V. complies with the Wet beveiliging netwerk- en informatiesystemen (Wbni) as amended for NIS2 transposition:

| Obligation | Implementation | Reference |
|-----------|----------------|-----------|
| **NCSC-NL registration** | B.V. maintains registration with NCSC-NL providing required entity information and incident contact details. | NCSC-NL registration record |
| **Incident reporting** | Incidents reported to NCSC-NL per NIS2-mandated timelines. Technical reports may be submitted in English; formal notifications in Dutch. | Incident response procedure |
| **Dual notification** | GDPR data breach notifications to the Autoriteit Persoonsgegevens (AP, 72 hours per GDPR Art. 33) and NIS2 incident notifications to NCSC-NL (24 hours initial) are separate obligations. A dual-notification assessment checklist is included in the incident response procedure. | Incident response procedure |
| **NCSC-NL advisories** | Monitoring and incorporation of NCSC-NL sector-specific cybersecurity baselines and advisories into the ISMS control framework. | Advisory monitoring process |

### GDPR / BDSG / AVG

The Helge Heupel Group complies with:
- **GDPR** (EU 2016/679) -- applicable to all 3 entities for processing of EU personal data
- **BDSG** (Bundesdatenschutzgesetz) -- German supplementary data protection law applicable to GmbH
- **AVG** (Algemene Verordening Gegevensbescherming) -- Dutch GDPR implementation applicable to B.V.

Data Protection Impact Assessments (DPIAs) per GDPR Art. 35 are conducted for AI features processing personal data. Cross-entity data transfers are governed by inter-entity Data Processing Agreements and, where applicable, the EU-US Data Privacy Framework.

### US Compliance (Advisory)

US-specific compliance requirements (CCPA/CPRA, SOC 2, FedRAMP) for Helge Heupel Inc. are monitored at an advisory level and deferred until the US customer pipeline becomes active. The CISO Agent carries advisory knowledge of these frameworks and flags future requirements when relevant.

---

## 8. Policy Communication and Review

### Communication

This policy is communicated to all Helge Heupel Group personnel and AI agents through:

1. **Onboarding:** New team members receive this policy as part of onboarding. AI agents reference this policy via the CISO Agent domain context.
2. **Annual acknowledgment:** All human personnel acknowledge this policy annually. Acknowledgment is recorded in Git (signed commit or PR approval).
3. **Availability:** This policy is maintained in the Git repository accessible to all personnel and authorized AI agents.
4. **Updates:** Material changes to this policy are communicated via email notification and discussed at the next Weekly Technical or Monthly Strategic meeting.

### Review Cycle

- **Annual review:** Full policy review annually. The CISO initiates the review process and submits updates via Pull Request. The CTO co-reviews. CEO approves via PR merge.
- **Next scheduled review:** 2027-02-19

### Extraordinary Review Triggers

This policy is reviewed outside the annual cycle when:

1. **Regulatory change:** New legislation or regulation affecting information security obligations (e.g., NIS2 implementation changes, new GDPR guidance, EU AI Act enforcement timeline changes)
2. **Significant security incident:** Any incident classified as Critical or any incident resulting in data breach notification
3. **Major organizational change:** Entity acquisition or divestiture, significant headcount change (growth trigger per SDLC-Growth-v2), entry into new jurisdiction, or new product launch affecting scope
4. **Audit findings:** Major nonconformity identified during internal or external audit
5. **Technology change:** Adoption of new AI systems or cloud platforms that materially affect the risk profile

---

## 9. Exceptions and Violations

### Exception Process

Exceptions to this policy are permitted under the following conditions:

1. **Documented:** The exception is formally documented with a clear description of the policy requirement being excepted, the reason, the affected systems/data/personnel, and the compensating controls (if any).
2. **Time-limited:** All exceptions have an expiration date (maximum 12 months). Expired exceptions must be renewed or remediated.
3. **Risk-assessed:** The CISO assesses the risk introduced by the exception using the standard risk assessment methodology. The risk assessment is recorded in the risk register.
4. **CEO-approved:** All exceptions require CEO Helge Heupel approval. The exception request is submitted as a Git Pull Request with the `[CEO-SIGNOFF-REQUIRED]` tag.
5. **Reviewed:** Active exceptions are reviewed at each Monthly Strategic meeting. Exceptions approaching expiration are flagged 30 days in advance.

### Exception Request Template

Exception requests follow a Git PR template containing:
- Policy section being excepted
- Business justification
- Risk assessment (likelihood, impact, residual risk)
- Compensating controls
- Proposed duration
- Review date

### Consequences of Violation

Violations of this policy are treated as security incidents and handled per the incident response procedure. Consequences are proportionate to the severity and intent of the violation:

- **Unintentional violations:** Additional training, process improvement, and documented corrective action
- **Negligent violations:** Formal warning, mandatory remedial training, and enhanced monitoring
- **Intentional violations:** Disciplinary action up to and including termination of employment or contract, and potential legal action

For AI agents, violations result in review of agent configuration, potential trust level reduction, and enhanced human oversight requirements.

---

## 10. Zusammenfassung (German Executive Summary)

### Informationssicherheitsrichtlinie -- Kurzfassung

Diese Informationssicherheitsrichtlinie legt den Rahmen fuer die Informationssicherheit der Helge Heupel Gruppe fest (GmbH, B.V., Inc.).

**Wesentliche Pflichten fuer alle Mitarbeiter:**

- Schuetzen Sie alle Informationswerte der Helge Heupel Gruppe -- Quellcode, Kundendaten, KI-Modellkonfigurationen und Compliance-Dokumente -- gemaess ihrer Klassifizierungsstufe (Public, Internal, Confidential, Secret).
- Melden Sie Sicherheitsvorfaelle und Richtlinienverstoesze unverzueglich an den CISO oder ueber die festgelegten Meldekanale.
- Nehmen Sie an jaehrlichen Sicherheitsschulungen teil und bestaetigen Sie jaehrlich die Kenntnisnahme dieser Richtlinie.
- Beachten Sie die Zugriffskontrollen -- nutzen Sie nur die Ihnen zugewiesenen Berechtigungen und melden Sie unautorisierte Zugriffsversuche.
- Informieren Sie sich ueber NIS2UmsuCG-Anforderungen: Das Leitungsorgan (Geschaeftsfuehrer) haftet persoenlich fuer die Cybersicherheits-Governance (Sec. 38 NIS2UmsuCG). Alle Teammitglieder tragen zur Einhaltung bei.

**Vollstaendige Richtlinie:** Das vollstaendige englischsprachige Dokument befindet sich in `policies/IS-Policy.md` im Git-Repository.

---

## 11. Samenvatting (Dutch Executive Summary)

### Informatieveiligheidsbeleid -- Samenvatting

Dit informatieveiligheidsbeleid vormt het kader voor informatiebeveiliging van de Helge Heupel Groep (GmbH, B.V., Inc.).

**Belangrijkste verplichtingen voor alle medewerkers:**

- Bescherm alle informatiemiddelen van de Helge Heupel Groep -- broncode, klantgegevens, AI-modelconfiguraties en compliance-documenten -- volgens hun classificatieniveau (Public, Internal, Confidential, Secret).
- Meld beveiligingsincidenten en beleidsschendingen onmiddellijk bij de CISO of via de vastgestelde meldkanalen.
- Neem deel aan jaarlijkse beveiligingstrainingen en bevestig jaarlijks dat u kennis heeft genomen van dit beleid.
- Volg de toegangscontroles -- gebruik alleen de aan u toegewezen rechten en meld ongeautoriseerde toegangspogingen.
- Wees op de hoogte van Wbni-vereisten: Het bestuur (Bestuurder) is persoonlijk verantwoordelijk voor cyberbeveiligingsgovernance onder de gewijzigde Wbni. Alle teamleden dragen bij aan naleving.

**Volledig beleid:** Het volledige Engelstalige document is beschikbaar in `policies/IS-Policy.md` in de Git-repository.

---

## 12. Document Control

### Version History

| Version | Date | Author | Change Summary | Approved By |
|---------|------|--------|---------------|-------------|
| v1.0 | 2026-02-19 | CISO Agent | Initial release | Pending CEO approval |

### Approval

This document is approved via Git Pull Request. The approval chain is:
1. **Author:** CISO Agent drafts the document
2. **Reviewers:** CISO and CTO review via PR comments
3. **Approver:** CEO Helge Heupel approves via PR merge

`[CEO-SIGNOFF-REQUIRED]`

---

*Document: policies/IS-Policy.md*
*Document ID: HH-ISMS-POL-001*
*Information Security Policy for the Helge Heupel Group*
