---
document-id: HH-ISMS-RMA-001
title: "Risk Assessment Methodology"
version: v1.0
date: 2026-02-20
classification: Confidential
author: CISO Agent
reviewer: [CISO, CTO]
approver: CEO Helge Heupel
review-cycle: Annual
next-review: 2027-02-20
status: Draft
ims-context: HH-IMS-CTX-001
change-summary: Initial release
---

# Risk Assessment Methodology

## 1. Purpose and Scope

This document defines the risk assessment and treatment methodology for the **Helge Heupel Group** Integrated Management System (IMS), encompassing both the Information Security Management System (ISMS) per ISO/IEC 27001:2022 and the AI Management System (AIMS) per ISO/IEC 42001:2023.

The methodology is aligned with **ISO 31000:2018** (Risk management -- Guidelines) as the overarching risk management framework, and satisfies the specific requirements of:

- **ISO 27001 cl. 6.1.2** -- Information security risk assessment process
- **ISO 27001 cl. 6.1.3** -- Information security risk treatment
- **ISO 42001 cl. 6.1.2** -- AI risk assessment, including assessment of "potential consequences to the organization, individuals and societies" per cl. 6.1.2(d)(1)
- **IEC 31010:2019** -- Risk assessment techniques (qualitative matrix method selected for Startup phase)

### Scope

This methodology applies to:

- **All 3 legal entities:** Helge Heupel GmbH (Germany), Helge Heupel B.V. (Netherlands), Helge Heupel Inc. (United States)
- **All information assets** within the ISMS/AIMS scope: source code repositories, customer data, AI model configurations, compliance artifacts, communication data, product specifications, and cryptographic keys
- **All AI systems** within the AIMS scope: the 7 Claude Code AI agents (SDLC Lead, CTO, CISO, AI Science, Platform/SRE, Product/Strategy, AppSec), ChatGPT, Codex, and the Verity VE and Verity EAM product AI capabilities
- **All technology systems:** Azure cloud infrastructure (West Europe, Germany West Central), Microsoft 365, NorthGRC, Linear, Float, Claude Code, Git repositories

### Related Documents

| Document ID | Title | Relationship |
|-------------|-------|-------------|
| HH-ISMS-POL-001 | Information Security Policy | Defines risk appetite and acceptance authority |
| HH-AIMS-POL-001 | AI Policy | Defines AI-specific prohibited practices and risk controls |
| HH-GOV-Startup-v1.0 | Governance Model | Defines risk-tiered escalation (Weekly Technical, Monthly Strategic) |
| HH-IMS-CTX-001 | IMS Context | Establishes ISMS/AIMS integration framework |

---

## 2. Risk Assessment Process

The Helge Heupel Group risk assessment process follows a five-step approach that produces **consistent, valid, and comparable results** (ISO 27001 cl. 6.1.2(b)). Each step maps to a specific sub-clause of ISO 27001 cl. 6.1.2.

### Step (a): Establish Context and Criteria -- cl. 6.1.2(a)

Define the risk assessment criteria, including:

- **Risk acceptance criteria:** Aligned with the risk appetite statement in Section 7 of this document and IS Policy (HH-ISMS-POL-001) Section 5
- **Criteria for performing assessments:** This methodology document defines the scales, matrix, and rating process
- **Organizational context:** The Helge Heupel Group operates as a 6-person startup with 7 AI agents, providing AI-powered products (Verity VE, Verity EAM) to enterprise customers, with EU-first operations and TISAX certification obligations
- **Assessment scope:** Per-entity and per-system scope as defined in the ISMS/AIMS scope statements

### Step (b): Risk Identification -- cl. 6.1.2(c)

Identify risks associated with the loss of **confidentiality, integrity, and availability** of information within the ISMS scope. For AI risks (tagged with `ai-risk: true`), additionally identify risks to **individuals and societies** per ISO 42001 cl. 6.1.2(d)(1).

Risk identification methods:

1. **CISO Agent pre-seeding:** The CISO Agent generates 30-50 candidate risks based on HH-specific context (3 entities, 3 jurisdictions, AI-heavy SDLC, startup constraints, current threat landscape)
2. **CEO curation:** CEO Helge Heupel reviews pre-seeded risks, marks additions and removals, before the workshop session
3. **Workshop identification:** During the risk assessment workshop, participants (CEO, external CISO from NorthGRC, consultant) identify additional risks not captured in pre-seeding
4. **Event-triggered identification:** New risks identified during security incidents, organizational changes, regulatory changes, or new system deployments

Each identified risk is assigned a unique **risk ID** following the pattern `RISK-{CATEGORY}-{NNN}` (see Section 6 for categories).

### Step (c): Risk Analysis -- cl. 6.1.2(d)

Analyze each identified risk to determine:

1. **Likelihood:** Using the 5-level time-based scale (Section 3)
2. **Impact:** Using the 5-level business-survival-calibrated scale (Section 4), assessed across 4 dimensions (Financial, Operational, Regulatory, Reputational); the highest dimension determines the overall impact level
3. **Inherent risk score:** Likelihood x Impact (range: 1-25)
4. **Inherent risk level:** Derived from the risk matrix (Section 5)

For AI risks (`ai-risk: true`): a 5th impact dimension -- "Impact on Individuals/Society" -- is additionally assessed per ISO 42001 cl. 6.1.2(d)(1).

### Step (d): Risk Evaluation -- cl. 6.1.2(e)

Compare analysis results against the risk acceptance criteria to prioritize risks for treatment:

- **Low (1-6):** Accept and monitor. No treatment plan required.
- **Medium (7-12):** Treat within quarterly review cycle.
- **High (13-19):** Treatment plan required within 30 days. Escalate to Weekly Technical meeting.
- **Critical (20-25):** Immediate treatment plan required. Escalate to Weekly Technical meeting with CEO/CISO sign-off.

### Step (e): Risk Treatment -- cl. 6.1.3

Select and implement risk treatment options for each risk requiring treatment. See Section 9 for the treatment framework.

---

## 3. Likelihood Scale (5-Level, Time-Based)

The likelihood scale uses **time-based frequencies** that the Helge Heupel Group team can intuitively assess based on operational experience and industry threat intelligence.

| Level | Label | Frequency | Description |
|-------|-------|-----------|-------------|
| 1 | Rare | Less than once per 5 years | Has not occurred and is unlikely in the planning horizon |
| 2 | Unlikely | Once per 1-5 years | Has occurred elsewhere; conceivable for HH |
| 3 | Possible | Once per 3-12 months | Has occurred in similar organizations; plausible for HH |
| 4 | Likely | Once per 1-12 weeks | Expected to occur within a year; may have occurred at HH |
| 5 | Almost Certain | Weekly or more frequent | Occurs regularly; would be surprising if it did not happen |

**Rating guidance:** When assessing likelihood, consider:
- Historical occurrence at HH or comparable organizations
- Current threat intelligence for the risk category
- Effectiveness of existing preventive controls (for inherent risk, assume no additional controls; for residual risk, account for implemented controls)
- Environmental factors (industry sector, geographic exposure, regulatory landscape)

---

## 4. Impact Scale (5-Level, Calibrated to HH Business Survival)

The impact scale is calibrated to the **Helge Heupel Group's actual business context** as a startup. Level 5 represents an existential threat: loss of key client, regulatory shutdown, or funding collapse.

Impact is assessed across 4 dimensions. The **highest dimension score determines the overall impact level.**

| Level | Label | Financial | Operational | Regulatory | Reputational |
|-------|-------|-----------|-------------|------------|--------------|
| 1 | Negligible | < EUR 5K | < 1h disruption | Minor audit finding | No external awareness |
| 2 | Minor | EUR 5-25K | 1-8h disruption | Minor nonconformity | Limited external awareness |
| 3 | Moderate | EUR 25-100K | 8-48h disruption | Major nonconformity | Regional media/industry attention |
| 4 | Major | EUR 100-250K | 2-14d disruption | Regulatory investigation | National media; customer concern |
| 5 | Severe/Existential | > EUR 250K | > 14d disruption | Certification loss, regulatory shutdown | Key client loss; funding failure |

**Note:** Level 5 is calibrated to business survival. For a startup of HH's size, > EUR 250K financial impact or loss of a key enterprise client or regulatory certification loss can be existential. This calibration ensures the matrix produces meaningful risk differentiation.

### AI Risk Impact Dimension (ISO 42001 cl. 6.1.2(d)(1))

For risks tagged with `ai-risk: true`, a 5th impact dimension is assessed:

| Level | Label | Impact on Individuals/Society |
|-------|-------|-------------------------------|
| 1 | No individual impact | AI output error with no consequence to individuals |
| 2 | Minor individual inconvenience | Incorrect recommendation requiring user re-evaluation; no harm |
| 3 | Material individual impact | Systematically misleading recommendations affecting user decisions; correctable |
| 4 | Significant harm to individuals | Biased or discriminatory AI outputs affecting individuals' professional decisions or assessments |
| 5 | Widespread discriminatory or harmful impact | Systematic bias or harmful AI behavior affecting multiple individuals or groups; regulatory intervention warranted |

This dimension applies **only** when `ai-risk: true` is set on the risk entry. When assessed, the overall impact level is the maximum across all 5 dimensions (Financial, Operational, Regulatory, Reputational, and Individual/Society).

---

## 5. Risk Matrix and Risk Levels

### 5x5 Risk Matrix

|  | **Impact 1 (Negligible)** | **Impact 2 (Minor)** | **Impact 3 (Moderate)** | **Impact 4 (Major)** | **Impact 5 (Severe)** |
|---|---|---|---|---|---|
| **Likelihood 5 (Almost Certain)** | 5 - Medium | 10 - Medium | 15 - High | 20 - Critical | 25 - Critical |
| **Likelihood 4 (Likely)** | 4 - Low | 8 - Medium | 12 - Medium | 16 - High | 20 - Critical |
| **Likelihood 3 (Possible)** | 3 - Low | 6 - Low | 9 - Medium | 12 - Medium | 15 - High |
| **Likelihood 2 (Unlikely)** | 2 - Low | 4 - Low | 6 - Low | 8 - Medium | 10 - Medium |
| **Likelihood 1 (Rare)** | 1 - Low | 2 - Low | 3 - Low | 4 - Low | 5 - Medium |

### Risk Level Definitions and Response

| Risk Level | Score Range | Color | Response | Escalation |
|------------|------------|-------|----------|------------|
| **Low** | 1-6 | Green | Accept and monitor. Review at quarterly cycle. | None required |
| **Medium** | 7-12 | Yellow | Treat within quarterly review cycle. Monitor effectiveness of existing controls. | Reviewed at Monthly Strategic meeting (item 3: Risk register review) |
| **High** | 13-19 | Orange | Treatment plan required within 30 days. Assign risk owner and treatment timeline. | Escalate to Weekly Technical meeting per governance model (HH-GOV-Startup-v1.0) |
| **Critical** | 20-25 | Red | Immediate treatment plan required. CEO and CISO must review and approve treatment. | Escalate to Weekly Technical meeting + CEO/CISO sign-off per governance model |

**Governance reference:** The risk-tiered escalation aligns with the governance model (HH-GOV-Startup-v1.0) gate criteria. Low/Medium risk items flow through automated monitoring and quarterly review. High/Critical risk items require human approval at Weekly Technical or Monthly Strategic meetings.

---

## 6. Risk Category Taxonomy

The Helge Heupel Group uses a flat 7-category taxonomy for Startup phase. Categories are designed to map to distinct Annex A control groups and risk ownership roles.

| Code | Category | Description | Typical Owner |
|------|----------|-------------|---------------|
| **OPS** | Operational | Service delivery, platform availability, development pipeline, BCP | CTO role |
| **SEC** | Security | Cybersecurity threats, vulnerabilities, access control, data protection | CISO role |
| **AI** | AI Risk | AI model risk, data quality, output risk, AI supply chain, agent governance | CISO role |
| **REG** | Regulatory | Compliance, certification, data protection, regulatory change | CISO role |
| **PPL** | People | Skills, capacity, key person dependency, insider threat, security awareness | CEO role |
| **SUP** | Supply Chain | Vendor risk, third-party AI dependencies, SaaS provider risk | CTO role |
| **STR** | Strategic | Market risk, technology obsolescence, competitive position | CEO role |

### Risk ID Convention

Risk IDs follow the pattern: **RISK-{CATEGORY}-{NNN}**

- `{CATEGORY}` is the 2-3 letter code from the table above
- `{NNN}` is a 3-digit sequential number within each category, starting at 001
- Numbering is sequential (fortlaufend) within each category -- gaps from retired risks are not reused

**Examples:**
- `RISK-OPS-001` -- First operational risk
- `RISK-AI-003` -- Third AI risk
- `RISK-REG-012` -- Twelfth regulatory risk

### Category Assignment Guidance

- If a risk spans multiple categories, assign the **primary** category based on the risk source and the most relevant Annex A control group
- AI risks that are primarily about cybersecurity (e.g., prompt injection) are categorized under **AI**, not SEC, because the AI-specific assessment dimension (Individual/Society impact) must be evaluated
- Supply chain risks involving AI providers (e.g., Anthropic API dependency) are categorized under **SUP** unless the primary concern is AI model quality (then **AI**)

---

## 7. Risk Appetite Statement

The Helge Heupel Group's risk appetite is defined in the Information Security Policy (HH-ISMS-POL-001, Section 5) and summarized here for risk assessment reference.

### Overall Risk Acceptance Authority

At Startup phase, **CEO Helge Heupel** accepts residual risk for all risk levels. This reflects the CEO's dual role covering CISO responsibilities and is documented in the governance model (HH-GOV-Startup-v1.0).

### Risk Appetite Targets

- **No Critical residual risks:** All Critical-level residual risks must be treated to High or below before acceptance
- **High residual risks require explicit documented justification:** CEO must document the business rationale for accepting any High residual risk with `[CEO-SIGNOFF-REQUIRED]`
- **Medium/Low residual risks:** Accepted within normal quarterly review cycle

### Risk Appetite by Category

| Category | Appetite | Rationale |
|----------|----------|-----------|
| **Regulatory (REG)** | Very Low | Near-zero tolerance for non-conformities affecting ISO 27001, ISO 42001, TISAX, or NIS2. A certification failure or regulatory action could be existential. |
| **Operational (OPS)** | Low | High availability target (99.95% for Tier 1 services). Operational failures erode the enterprise customer trust that differentiates Verity products. |
| **AI (AI)** | Low-Moderate | Moderate AI risk accepted where controls ensure fairness, transparency, and human oversight. Zero appetite for AI systems causing significant harm to individuals. |
| **Security (SEC)** | Very Low | A single data breach could be existential for a startup competing on enterprise trust. Prevention over remediation. |
| **Reputational** | Very Low | Reputational impact is captured across SEC, OPS, and REG categories. Key client trust is non-negotiable. |
| **People (PPL)** | Moderate | Key person dependency (CEO covers multiple roles) is an accepted structural risk at Startup. Mitigation through documentation and agent capabilities. |
| **Supply Chain (SUP)** | Moderate | Vendor dependency (Azure, Anthropic) is an accepted structural risk. Mitigated through multi-provider strategy readiness and contractual controls. |
| **Strategic (STR)** | Moderate | Competitive disruption accepted. Failed product experiments are acceptable costs of innovation leadership. |

---

## 8. Risk Register Schema

The risk register is maintained as **one YAML file per risk** in the `risks/` directory. This format provides granular Git history per risk, human-readable content, and machine-parseability for future NorthGRC synchronization.

### Schema Definition

The schema consists of **~15 core assessment fields** plus lifecycle metadata fields. Core assessment fields are those required to perform and document a risk assessment per ISO 27001 cl. 6.1.2. Lifecycle fields are populated over time as the risk moves through treatment and review cycles.

| # | Field | Type | Required | Valid Values | Description | Populated By |
|---|-------|------|----------|-------------|-------------|-------------|
| 1 | `risk-id` | string | Required | RISK-{CAT}-{NNN} | Unique identifier per naming convention | CISO Agent |
| 2 | `title` | string | Required | Free text | Short descriptive title (< 100 chars) | CISO Agent |
| 3 | `description` | string | Required | Free text (multi-line) | Detailed risk description including threat, vulnerability, and potential consequence | CISO Agent |
| 4 | `category` | string | Required | OPS, SEC, AI, REG, PPL, SUP, STR | Risk category code | CISO Agent |
| 5 | `ai-risk` | boolean | Required | true, false | Whether this is an AI-specific risk requiring ISO 42001 cl. 6.1.2(d)(1) assessment | CISO Agent |
| 6 | `affected-entities` | list | Required | GmbH, B.V., Inc. | Which legal entities are affected | CISO Agent |
| 7 | `risk-source` | string | Required | external, internal, environmental | Origin of the risk | CISO Agent |
| 8 | `owner` | string | Required | Role name (e.g., "CISO role") | Role-based risk owner | CISO Agent |
| 9 | `status` | string | Required | active, treating, accepted, retired | Current risk status | CISO Agent / Workshop |
| 10 | `likelihood` | integer | Required | 1-5 | Likelihood rating per Section 3 scale | CISO Agent (pre-rated) / Workshop (validated) |
| 11 | `impact` | integer | Required | 1-5 | Impact rating per Section 4 scale (max across dimensions) | CISO Agent (pre-rated) / Workshop (validated) |
| 12 | `inherent-risk-score` | integer | Required | 1-25 | Calculated: likelihood x impact | Auto-calculated |
| 13 | `inherent-risk-level` | string | Required | low, medium, high, critical | Derived from risk matrix (Section 5) | Auto-derived |
| 14 | `treatment-strategy` | string | Required | avoid, modify, share, retain | Selected treatment per Section 9 | Workshop |
| 15 | `treatment-controls` | list | Required | List of {control-id, description} | Annex A controls implementing treatment | Workshop |
| 16 | `residual-likelihood` | integer | Optional | 1-5 | Likelihood after treatment controls | Workshop |
| 17 | `residual-impact` | integer | Optional | 1-5 | Impact after treatment (typically unchanged) | Workshop |
| 18 | `residual-risk-score` | integer | Optional | 1-25 | Calculated: residual-likelihood x residual-impact | Auto-calculated |
| 19 | `residual-risk-level` | string | Optional | low, medium, high, critical | Derived from risk matrix | Auto-derived |
| 20 | `residual-risk-accepted-by` | string | Optional | Person/role name | Who accepted the residual risk | Workshop |
| 21 | `residual-risk-accepted-date` | string | Optional | ISO-8601 date | Date of acceptance | Workshop |
| 22 | `review-cycle` | string | Required | quarterly, monthly | Review frequency | CISO Agent |
| 23 | `last-review-date` | string | Optional | ISO-8601 date | Last formal review date | Lifecycle |
| 24 | `next-review-date` | string | Optional | ISO-8601 date | Next scheduled review date | Lifecycle |
| 25 | `created-date` | string | Required | ISO-8601 date | Date risk was created | Auto |
| 26 | `last-updated` | string | Required | ISO-8601 date | Date risk was last modified | Auto |
| 27 | `retirement-date` | string | Optional | ISO-8601 date | Date risk was retired (only when status = retired) | Lifecycle |
| 28 | `retirement-reason` | string | Optional | Free text | Reason for retirement (only when status = retired) | Lifecycle |
| 29 | `rationale` | string | Required | Free text (multi-line) | CISO Agent pre-rating rationale explaining likelihood and impact assessment | CISO Agent |
| 30 | `workshop-notes` | string | Optional | Free text (multi-line) | Human workshop discussion, adjustments, and decisions | Workshop |

**Core assessment fields (15):** risk-id, title, description, category, ai-risk, affected-entities, risk-source, owner, status, likelihood, impact, inherent-risk-score, treatment-strategy, treatment-controls, rationale.

**Lifecycle metadata fields (15):** inherent-risk-level, residual-likelihood, residual-impact, residual-risk-score, residual-risk-level, residual-risk-accepted-by, residual-risk-accepted-date, review-cycle, last-review-date, next-review-date, created-date, last-updated, retirement-date, retirement-reason, workshop-notes.

### Annotated Example

```yaml
# File: risks/RISK-SEC-001.yml
# Risk entry demonstrating all schema fields
---
risk-id: RISK-SEC-001
title: "Phishing attack compromises employee credentials"
description: >
  A targeted phishing campaign compromises the credentials of a Helge Heupel
  Group team member, granting the attacker access to Azure cloud resources,
  Git repositories, or M365 services. At 6 team members, each individual has
  broad access, amplifying the blast radius of a single credential compromise.
category: SEC
ai-risk: false
affected-entities:
  - GmbH
  - B.V.
risk-source: external
owner: "CISO role"
status: active
likelihood: 4                          # Likely: phishing attacks on small tech companies occur weekly
impact: 4                              # Major: potential access to source code, customer data, compliance artifacts
inherent-risk-score: 16                # 4 x 4 = 16 (High)
inherent-risk-level: high
treatment-strategy: modify
treatment-controls:
  - control-id: A.5.17
    description: "Entra ID Conditional Access with MFA requirement for all users"
  - control-id: A.6.3
    description: "Annual phishing awareness training for all personnel"
  - control-id: A.8.5
    description: "FIDO2 hardware keys for privileged accounts"
residual-likelihood: 2                 # Unlikely: MFA + Conditional Access significantly reduces success rate
residual-impact: 4                     # Major: impact unchanged if attack succeeds despite controls
residual-risk-score: 8                 # 2 x 4 = 8 (Medium)
residual-risk-level: medium
residual-risk-accepted-by: ""          # Filled during workshop
residual-risk-accepted-date: ""        # Filled during workshop (ISO-8601)
review-cycle: quarterly
last-review-date: ""                   # Filled after first formal review
next-review-date: ""                   # Filled after first formal review
created-date: 2026-02-20
last-updated: 2026-02-20
retirement-date: ""                    # Empty unless status = retired
retirement-reason: ""                  # Empty unless status = retired
rationale: >
  Phishing is the most common initial access vector for cloud-hosted organizations.
  With 6 team members each having significant access to Azure, M365, and Git,
  a single compromised credential provides broad lateral movement opportunity.
  Rated Likely (4) based on industry frequency data for targeted attacks on
  small technology companies. Impact is Major (4) due to potential regulatory
  investigation and customer trust damage. Treatment via Azure-native controls
  (Conditional Access, MFA, FIDO2 keys) and security awareness training reduces
  likelihood to Unlikely (2); impact remains Major (4) because MFA bypass
  techniques exist.
workshop-notes: ""                     # Filled during workshop with human discussion and decisions
---
```

### File Naming and Storage

- **Location:** `risks/` directory at repository root
- **File name:** `{risk-id}.yml` (e.g., `RISK-SEC-001.yml`, `RISK-AI-003.yml`)
- **Methodology document:** `risks/methodology/risk-assessment-methodology.md` (this document)
- **Risk treatment summary:** `risks/methodology/risk-treatment-summary.md` (produced during workshop)

---

## 9. Risk Treatment Framework

Risk treatment follows **ISO 27001 cl. 6.1.3** requirements. For each risk requiring treatment, the risk owner selects one of four strategies and maps the treatment to specific **Annex A controls**.

### Treatment Strategies

| Strategy | Definition | When to Use | ISO 27001 Reference |
|----------|-----------|-------------|---------------------|
| **Avoid** | Eliminate the risk source or the activity that gives rise to the risk | When the risk-generating activity is not essential to business operations, or when no acceptable residual risk level can be achieved through other strategies | cl. 6.1.3(a) |
| **Modify** | Implement controls to reduce likelihood, impact, or both | Most common strategy. When the risk can be reduced to an acceptable level through Annex A controls or additional controls | cl. 6.1.3(b) |
| **Share** | Transfer risk to a third party (insurance, outsourcing, contractual allocation) | When risk transfer is more cost-effective than direct treatment, or when specialized expertise is needed | cl. 6.1.3(a) |
| **Retain** | Accept the risk within appetite, with documented justification | When the residual risk is within appetite, when treatment cost exceeds potential loss, or when the risk is a structural characteristic of the business model | cl. 6.1.3(a) |

### Treatment Requirements

1. **Control mapping:** Every "Modify" treatment decision must map to specific **ISO 27001:2022 Annex A controls** in the `treatment-controls` field. This creates bidirectional traceability between the risk register and the Statement of Applicability (SoA).

2. **Residual risk assessment:** After treatment controls are identified, assess the residual likelihood and impact. The residual risk score determines whether further treatment is needed or whether the risk is acceptable.

3. **Risk owner approval:** The designated risk owner (per the `owner` field) must accept the treatment plan. For High/Critical residual risks, CEO Helge Heupel provides explicit acceptance with `[CEO-SIGNOFF-REQUIRED]`.

4. **Treatment plan documentation:** Treatment decisions are captured in each risk's YAML file (`treatment-strategy`, `treatment-controls`, residual risk fields) and summarized in the Risk Treatment Summary document (`risks/methodology/risk-treatment-summary.md`) for the auditor package.

### ISO 42001 Treatment Extension

For AI risks (`ai-risk: true`), treatment controls must additionally be compared against **ISO 42001 Annex A** controls (separate from ISO 27001 Annex A). The ISO 42001 SoA is produced in Phase 5; however, AI risk treatment mappings prepared in this phase will inform the Phase 5 SoA.

---

## 10. Risk Register Lifecycle

### Quarterly Formal Review Cycle

The full risk register is formally reviewed **quarterly** at the Monthly Strategic meeting (HH-GOV-Startup-v1.0, agenda item 3: Risk register review and treatment status).

**Quarterly review activities:**
1. Review all active risks -- assess whether likelihood or impact has changed
2. Review treatment plan progress -- are controls being implemented on schedule?
3. Assess residual risk levels -- have implemented controls achieved the expected risk reduction?
4. Identify new risks that have emerged since last review
5. Review retired risks -- confirm retirement remains appropriate
6. Update `last-review-date` and `next-review-date` fields in all risk files

### Event-Triggered Reviews

Outside the quarterly cycle, the risk register is reviewed when:

| Trigger | Scope of Review | Initiated By |
|---------|----------------|--------------|
| **New system deployment** | Risks related to the new system and its dependencies | CTO role or CISO role |
| **Security incident** | All risks in the affected category; reassess likelihood based on actual occurrence | CISO role |
| **Regulatory change** | REG category risks; any risks affected by new regulatory requirements | CISO role |
| **Organizational change** | PPL and STR category risks; entity-level impacts | CEO |
| **New AI system or capability** | AI category risks; reassess Individual/Society impact dimension | CISO role |
| **Vendor/supplier change** | SUP category risks; reassess supply chain dependencies | CTO role |

### Risk Retirement

When a risk is no longer applicable (e.g., the risk source has been permanently eliminated, or the affected system has been decommissioned):

1. Update the `status` field to `retired`
2. Set the `retirement-date` field to the current date (ISO-8601)
3. Document the `retirement-reason` explaining why the risk is no longer applicable
4. **The risk file remains in place** in the `risks/` directory. Full history is preserved in Git.
5. Retired risks are excluded from active risk reporting but remain accessible for audit trail purposes

Retired risk IDs are **not reused**. If a similar risk re-emerges, it receives a new sequential ID.

### Residual Risk Acceptance

Residual risk acceptance follows a **dual mechanism**:

1. **Git PR workflow (working process):** The risk file update with residual risk fields populated is committed via Pull Request. PR approval by CEO = documented acceptance. Git history provides the audit trail with timestamp, approver identity, and full file diff showing what was accepted.

2. **Formal summary document (auditor package):** A Risk Treatment Summary document (`risks/methodology/risk-treatment-summary.md`) with CEO signature block consolidates all residual risk acceptance decisions. This document is produced during the risk assessment workshop and provides the formal auditor evidence.

Both mechanisms are maintained in parallel. The Git PR workflow is the working process; the formal summary document is the auditor-facing package.

### NorthGRC Synchronization

Risk register data is maintained in Git as the source of truth. NorthGRC synchronization will be established in Phase 9 (TOOL-01). The YAML format is designed to be exportable to GRC platforms -- all field names, categories, and scoring use standard terminology that maps to common GRC tool schemas.

---

## 11. Workshop Protocol

The risk assessment workshop is a **single intensive session** where pre-seeded risks are validated, rated, and treated by a multi-participant team. The workshop produces the committed risk register, risk treatment plan, and CEO residual risk acceptance.

### Pre-Workshop Preparation (3-5 Days Before)

| # | Activity | Responsible | Deliverable |
|---|----------|-------------|-------------|
| 1 | CISO Agent generates 30-50 pre-seeded risks in YAML format with pre-ratings and rationale | CISO Agent | Risk YAML files in `risks/` directory |
| 2 | Risk assessment methodology document finalized and shared | CISO Agent | This document (HH-ISMS-RMA-001) |
| 3 | Pre-seeded risk files shared via Git repository access | CEO | Participants have read access to `risks/` directory |
| 4 | External CISO from NorthGRC receives repository access for review | CEO | NorthGRC CISO can review pre-seeded risks |
| 5 | CEO curates the pre-seeded list -- marks obvious additions/removals | CEO | Annotated risk list (ready for workshop) |
| 6 | Consultant (BearingPoint or EY) reviews risk list for domain gaps | Consultant | Domain-specific feedback |

### Workshop Agenda (4 Hours)

| # | Block | Duration | Activity | Outputs |
|---|-------|----------|----------|---------|
| 1 | Opening | 15 min | CEO introduces scope and objectives. Review methodology document. Confirm 5x5 matrix calibration with all participants. Confirm roles. | Methodology confirmed by all participants |
| 2 | Risk Identification Review | 45 min | Walk through pre-seeded risks by category (OPS, SEC, AI, REG, PPL, SUP, STR). Participants validate, add missing risks, remove irrelevant ones. Target: finalize the risk list. | Finalized risk list |
| -- | Break | 15 min | -- | -- |
| 3 | Risk Rating | 60 min | Rate each risk: likelihood (1-5), impact (1-5). External CISO challenges ratings. CEO decides on disputes. CISO Agent commits validated ratings to Git in real-time. | Rated risk register (all likelihood and impact fields populated) |
| -- | Break | 15 min | -- | -- |
| 4 | Treatment Decisions | 45 min | For each risk: select treatment strategy (avoid/modify/share/retain), map to Annex A controls, assess residual risk. Focus on High/Critical risks first, then Medium. | Treatment plans for all risks |
| 5 | Residual Risk Acceptance | 15 min | CEO reviews residual risk for each entry. Formally accepts residual risk. CISO Agent commits acceptance to Git. | CEO acceptance recorded in each risk file |
| 6 | Wrap-up | 15 min | Review action items. Confirm quarterly review schedule. Identify any gaps for follow-up. Record next review date. | Workshop complete; register committed |

### Participant Roles

| Participant | Affiliation | Role in Workshop |
|-------------|------------|-----------------|
| **CEO Helge Heupel** | HH Group | Session driver. Makes final decisions on risk ratings and treatment. Accepts residual risk. Enters decisions for CISO Agent to capture. |
| **External CISO** | NorthGRC (contracted to HH GmbH) | Challenge and validation role. Reviews and challenges CEO's ratings. Provides "second opinion" credibility for auditors. Not an equal co-owner -- a challenger. |
| **Consultant** | BearingPoint or EY | Domain expertise. Contributes knowledge on specific risk areas (regulatory, compliance, industry-specific threats). CEO drives; consultant advises. |
| **CISO Agent** | HH Group (AI) | Real-time capture. Validates ratings against methodology, commits decisions to Git during session, flags inconsistencies, computes scores. |

### Evidence Requirements

The workshop produces the following audit evidence:

| Evidence | Format | Purpose |
|----------|--------|---------|
| **Attendance record** | Recorded in workshop-notes or separate attendance log | Proves multi-participant validation occurred |
| **Date and duration** | ISO-8601 date, start/end times | Proves dedicated time was allocated |
| **Participant names and affiliations** | Listed with roles and organizations | Proves external expertise was involved |
| **Pre-seeded vs. post-workshop diff** | Git commit history showing changes between pre-seeded and workshop-validated versions | Proves human review and adjustment occurred |
| **Workshop notes per risk** | `workshop-notes` field in each risk YAML file | Proves individual risk discussion occurred |
| **CEO acceptance records** | `residual-risk-accepted-by` and `residual-risk-accepted-date` fields | Proves risk owner approval per cl. 6.1.3(f) |

---

## 12. Document Control

### Version History

| Version | Date | Author | Change Summary | Approved By |
|---------|------|--------|---------------|-------------|
| v1.0 | 2026-02-20 | CISO Agent | Initial release | Pending CEO approval |

### Approval

This document is approved via Git Pull Request. The approval chain is:
1. **Author:** CISO Agent drafts the document
2. **Reviewers:** CISO and CTO review via PR comments
3. **Approver:** CEO Helge Heupel approves via PR merge

`[CEO-SIGNOFF-REQUIRED]`

### Next Review

- **Annual review:** 2027-02-20
- **Extraordinary review triggers:** Regulatory change affecting risk methodology, audit finding on risk assessment process, significant organizational change, methodology inadequacy identified during quarterly risk review

### Distribution

| Recipient | Access Level | Purpose |
|-----------|-------------|---------|
| CEO Helge Heupel | Full | Risk acceptance authority, workshop driver |
| CTO | Full | Technical risk assessment, treatment implementation |
| CISO | Full | Risk methodology owner, risk register maintenance |
| IT Pentester / Super Admin | Read | Platform and infrastructure risk context |
| External CISO (NorthGRC) | Read | Workshop preparation, challenge role |
| Consultant (BearingPoint/EY) | Read | Workshop preparation, domain expertise |
| CISO Agent | Full | Pre-seeding, real-time capture, schema validation |

### Related Documents

| Document ID | Title | Relationship |
|-------------|-------|-------------|
| HH-ISMS-POL-001 | Information Security Policy | Defines risk appetite and acceptance authority (Section 5) |
| HH-AIMS-POL-001 | AI Policy | Defines AI-specific prohibited practices and risk controls |
| HH-GOV-Startup-v1.0 | Governance Model | Defines risk-tiered escalation (Weekly Technical, Monthly Strategic meetings) |
| HH-IMS-CTX-001 | IMS Context | Establishes ISMS/AIMS integration framework |
| HH-ISMS-SOA-001 | Statement of Applicability (ISO 27001) | Bidirectional traceability with risk treatment controls |

---

*Document: risks/methodology/risk-assessment-methodology.md*
*Document ID: HH-ISMS-RMA-001*
*Risk Assessment Methodology for the Helge Heupel Group*
