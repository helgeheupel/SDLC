---
document-id: HH-AIMS-RMA-001
title: "AI Risk Assessment Procedure"
version: v1.0
date: 2026-02-22
classification: Confidential
author: CISO Agent
reviewer: [CISO, CTO]
approver: CEO Helge Heupel
review-cycle: Annual
next-review: 2027-02-22
status: Draft
change-summary: Initial release
references:
  - HH-ISMS-RMA-001
  - ISO/IEC 42001:2023
  - ISO/IEC 23894:2023
  - HH-AIMS-POL-001
---

# AI Risk Assessment Procedure

## 1. Purpose and Scope

This procedure defines the AI-specific risk assessment process for the **Helge Heupel Group** Integrated Management System (IMS). It satisfies the requirements of **ISO/IEC 42001:2023 cl. 6.1.2** (AI risk assessment) and aligns with **ISO/IEC 23894:2023** (AI risk management guidance).

> **This procedure does NOT replace the organization's risk assessment methodology (HH-ISMS-RMA-001). It extends it with AI-specific risk identification sources, an additional impact dimension, and the dual-axis classification framework defined in the AI Policy (HH-AIMS-POL-001).**

The procedure applies to **ALL AI systems** registered in the AI System Registry (`ai-registry/` directory):

- **7 Claude Code agents:** CISO Agent (AI-AGENT-001), CTO Agent (AI-AGENT-002), SDLC Lead Agent (AI-AGENT-003), AI Science Agent (AI-AGENT-004), Platform/SRE Agent (AI-AGENT-005), Product/Strategy Agent (AI-AGENT-006), AppSec Agent (AI-AGENT-007)
- **Third-party AI tools:** ChatGPT (AI-3PARTY-001), Codex (AI-3PARTY-002)
- **Product AI:** Verity VE AI (AI-PROD-001), Verity EAM AI (AI-PROD-002)

### Relationship to ISMS Risk Assessment

This procedure works in conjunction with, not independently of, the ISMS risk assessment methodology:

| Aspect | ISMS Risk Assessment (HH-ISMS-RMA-001) | AI Risk Assessment (this document) |
|--------|----------------------------------------|-------------------------------------|
| **Risk register** | Single register in `risks/` directory | Same register; AI risks tagged `ai-risk: true` |
| **Risk matrix** | 5x5 likelihood/impact matrix | Same 5x5 matrix with 5th impact dimension |
| **Treatment options** | Avoid, Modify, Share, Retain | Same 4 options |
| **Acceptance authority** | CEO Helge Heupel | Same authority; additional threshold for individual/society impact >= 4 |
| **Review cycle** | Quarterly + event-driven | Same cycle + AI-specific triggers |
| **Control mapping** | ISO 27001 Annex A controls | ISO 42001 Annex A controls (additional) |

---

## 2. Normative References

| Reference | Title | Relevance |
|-----------|-------|-----------|
| ISO/IEC 42001:2023 cl. 6.1.2 | AI risk assessment | Requires assessment process including "potential consequences to the organization, individuals and societies" |
| ISO/IEC 42001:2023 cl. 6.1.3 | AI risk treatment | Requires treatment options, Annex A control mapping, SoA production |
| ISO/IEC 42001:2023 cl. 8.2 | AI risk assessment (operation) | Requires performing assessments at planned intervals |
| ISO/IEC 23894:2023 | Guidance on AI risk management | Provides AI-specific risk source categories (5 categories) |
| ISO 42005:2025 | AI system impact assessment | Cross-reference: impact assessment procedure (HH-AIMS-AIA-001) |
| HH-ISMS-RMA-001 | Risk Assessment Methodology | Base methodology that this procedure extends |
| HH-AIMS-POL-001 Section 4 | AI System Classification | Defines dual-axis classification framework |

---

## 3. AI-Specific Risk Sources (ISO 23894)

The following 5 categories of AI-specific risk sources guide risk identification for AI systems. For each registered AI system, the assessor must systematically evaluate all 5 categories to ensure comprehensive risk coverage.

### Category 1: Data and Data Governance Risks

Risks arising from the data used to train, fine-tune, or operate AI systems.

| # | Risk Source | Description | HH Example |
|---|-----------|-------------|------------|
| 1.1 | Training data bias | Training data does not represent the target population, leading to biased outputs | Verity VE cost prediction model trained on limited geographic/industry data |
| 1.2 | Data poisoning | Malicious manipulation of training data to influence model behavior | Compromised benchmark data affecting Verity VE predictions |
| 1.3 | Data quality degradation | Decline in data accuracy, completeness, or timeliness over time | Outdated industry benchmarks affecting Verity EAM recommendations |
| 1.4 | Data provenance gaps | Inability to trace data origin, transformations, and lineage | Unclear provenance of third-party AI model training data (Anthropic, OpenAI) |
| 1.5 | Data drift | Statistical distribution of input data shifts from what the model was trained on | Customer project data characteristics diverge from training distribution |

### Category 2: Model and Algorithm Risks

Risks arising from the AI model or algorithm itself.

| # | Risk Source | Description | HH Example |
|---|-----------|-------------|------------|
| 2.1 | Hallucination | Model generates plausible but factually incorrect outputs | CISO Agent producing compliance statements that misrepresent ISO requirements |
| 2.2 | Prompt injection | Adversarial inputs that manipulate model behavior | Malicious input exploiting Claude Code agent to bypass security controls |
| 2.3 | Model degradation | Model performance degrades over time without retraining | Anthropic model updates changing behavior of the 7 Claude Code agents |
| 2.4 | Opacity/Explainability | Inability to explain how the model arrived at a specific output | Verity VE cost predictions lacking sufficient explanation for auditor review |
| 2.5 | Unintended learning | Model learns patterns not intended by the designer, including harmful biases | ChatGPT responses reflecting unwanted stereotypes or biases |

### Category 3: System Integration Risks

Risks arising from integrating AI systems into the broader technology environment.

| # | Risk Source | Description | HH Example |
|---|-----------|-------------|------------|
| 3.1 | API reliability | Dependency on external AI service APIs for system operation | Anthropic API outage disabling all 7 Claude Code agents simultaneously |
| 3.2 | Version incompatibility | AI model version changes breaking downstream integrations | Claude model update changing output format, breaking SDLC automation |
| 3.3 | Context window limitations | AI model input size constraints affecting output quality | Complex compliance analysis truncated due to context window limits |
| 3.4 | Tool misuse | AI agent misusing available tools (file system, shell) beyond intended scope | Claude Code agent executing unintended shell commands |
| 3.5 | Cascading failures | Failure in one AI system propagating to dependent systems | CISO Agent failure cascading to risk register update process |

### Category 4: Operational Environment Risks

Risks arising from the operational context in which AI systems are deployed.

| # | Risk Source | Description | HH Example |
|---|-----------|-------------|------------|
| 4.1 | Availability dependency on provider | Business operations dependent on third-party AI provider uptime | Anthropic/OpenAI service disruption halting SDLC operations |
| 4.2 | Latency | AI system response time exceeding acceptable thresholds | Slow API response degrading developer productivity |
| 4.3 | Cost overrun | AI system usage costs exceeding budgeted amounts | Unexpected Claude API token consumption driving costs beyond budget |
| 4.4 | Shadow AI | Personnel using unauthorized AI tools for business purposes | Team member using unapproved AI tool to process Confidential data |
| 4.5 | Unauthorized use escalation | AI system used beyond its intended purpose or classification | Claude Code agent outputs used for customer-facing decisions without review |

### Category 5: Societal and Stakeholder Impact Risks

Risks arising from the impact of AI systems on individuals, groups, and society.

| # | Risk Source | Description | HH Example |
|---|-----------|-------------|------------|
| 5.1 | Individual rights violation | AI system infringing on privacy, autonomy, or other individual rights | Verity AI processing personal data without adequate consent |
| 5.2 | Discrimination | AI system producing discriminatory outcomes across protected attributes | Verity VE cost predictions systematically disadvantaging specific demographics |
| 5.3 | Misinformation | AI system generating or amplifying false information | CISO Agent producing incorrect compliance guidance accepted without review |
| 5.4 | Environmental impact | Computational resources consuming excessive energy | Large-scale AI inference operations contributing to carbon footprint |
| 5.5 | Public trust erosion | AI system behavior undermining public trust in the organization | Customer discovery that Verity product recommendations are AI-generated without disclosure |

---

## 4. Dual-Axis Classification

The Helge Heupel Group classifies each AI system using the dual-axis framework defined in the AI Policy (HH-AIMS-POL-001, Section 4). The classification determines the risk treatment requirements.

### Axis 1: EU AI Act Risk Level (Applied to Product AI)

| Level | Criteria | Treatment Requirements |
|-------|----------|----------------------|
| **Prohibited (Art. 5)** | Practices listed in Art. 5(1)(a)-(h) | System must not be developed or deployed. Immediate escalation to CEO. |
| **High-Risk (Art. 6, Annex III)** | Annex III categories or safety components of regulated products | Full Art. 9-15 compliance. Conformity assessment. Annex IV documentation. Post-market monitoring. Full AI impact assessment (HH-AIMS-AIA-001). |
| **Limited-Risk (Art. 50)** | Systems interacting with humans, generating synthetic content | Transparency obligations. User notification. Content marking. Focused AI impact assessment. |
| **Minimal-Risk** | All other AI systems | Internal best practices. Voluntary codes of practice. No mandatory impact assessment. |

### Axis 2: SDLC Usage Tier (Applied to Development AI)

| Tier | Trust Model | Treatment Requirements |
|------|-------------|----------------------|
| **Tier 1: Assistant** | Post-hoc review within 24h | Standard risk controls. Quarterly monitoring review. |
| **Tier 2: Collaborator** | Human review before execution | Enhanced controls. All outputs reviewed before acceptance. |
| **Tier 3: Decision Support** | Human-in-the-loop mandatory | Maximum controls. Real-time human approval required. Full impact assessment. |

### Combined Classification Matrix

**The higher classification on either axis governs the overall risk treatment requirements.**

| | Tier 1 (Assistant) | Tier 2 (Collaborator) | Tier 3 (Decision Support) |
|---|---|---|---|
| **Minimal-Risk** | Standard | Enhanced | Maximum |
| **Limited-Risk** | Enhanced | Enhanced | Maximum |
| **High-Risk** | Maximum | Maximum | Maximum |
| **Prohibited** | Not Permitted | Not Permitted | Not Permitted |

### Classification Decision Tree

```
START: New or changed AI system
  |
  v
[1] Does the system perform any EU AI Act Art. 5 prohibited practice?
  |-- YES --> PROHIBITED. Do not develop or deploy. Escalate to CEO immediately.
  |-- NO --> Continue
  |
  v
[2] Is the system a product AI (customer-facing)?
  |-- YES --> [3] Does the system fall under EU AI Act Annex III?
  |             |-- YES --> HIGH-RISK on Axis 1
  |             |-- NO --> [4] Does the system interact with humans or generate content?
  |                         |-- YES --> LIMITED-RISK on Axis 1
  |                         |-- NO --> MINIMAL-RISK on Axis 1
  |-- NO --> MINIMAL-RISK on Axis 1 (regulatory axis not primary)
  |
  v
[5] Is the system a development AI or used internally?
  |-- YES --> [6] What level of human oversight?
  |             |-- Post-hoc review (24h) --> TIER 1 on Axis 2
  |             |-- Review before acceptance --> TIER 2 on Axis 2
  |             |-- Real-time approval required --> TIER 3 on Axis 2
  |-- NO --> TIER 1 on Axis 2 (third-party tool, minimal integration)
  |
  v
[7] Combine both axes: HIGHER classification governs.
  |
  v
[8] Document classification rationale in AI System Registry entry.
    Apply corresponding treatment requirements from the Combined Classification Matrix.
```

### Current HH Classification Summary

| AI System | Axis 1 (EU AI Act) | Axis 2 (SDLC Tier) | Combined | Rationale |
|-----------|-------------------|---------------------|----------|-----------|
| 7 Claude Code Agents | Limited-Risk | Tier 2 | Enhanced | Art. 50 transparency; human review before acceptance |
| ChatGPT | Limited-Risk | Tier 1 | Enhanced | Art. 50 transparency; limited-risk governs |
| Codex | Limited-Risk | Tier 1 | Enhanced | Art. 50 transparency; limited-risk governs |
| Verity VE AI | Limited-Risk | Tier 3 | Maximum | Customer-facing; HITL mandatory; potential High-Risk reclassification |
| Verity EAM AI | Limited-Risk | Tier 3 | Maximum | Customer-facing; HITL mandatory; potential High-Risk reclassification |

---

## 5. Assessment Process

The AI risk assessment follows 7 numbered steps. Each step has a designated responsible role, defined inputs and outputs, and detailed instructions.

### Step 1: Establish Context

**Responsible:** CISO Agent (R), CEO (A)
**Input:** AI System Registry entry, AIMS Scope statements, relevant jurisdictions
**Output:** Documented assessment scope and context

Establish the assessment context per HH-ISMS-RMA-001 Section 2, Step (a), with the following AI-specific additions:

1. **Identify the AI system** to be assessed by its registry ID (e.g., AI-AGENT-001)
2. **Define the system boundary:** model architecture, data flows, integration points, deployment environment
3. **Identify stakeholders** affected by the AI system: direct users, indirect users, data subjects, customers, regulators
4. **Determine applicable jurisdictions:** Germany (GmbH), Netherlands (B.V.), United States (Inc.) as applicable per the system's deployment entities
5. **Confirm the dual-axis classification** using the decision tree in Section 4

### Step 2: Identify AI-Specific Risks

**Responsible:** CISO Agent (R), CTO (C), AppSec Agent (C)
**Input:** System context from Step 1, ISO 23894 risk source categories (Section 3)
**Output:** List of identified AI-specific risks with descriptions

For each AI system, systematically evaluate all 5 ISO 23894 risk source categories:

1. Review **Category 1 (Data and Data Governance):** Assess training data quality, provenance, representativeness, and protection
2. Review **Category 2 (Model and Algorithm):** Assess hallucination potential, adversarial robustness, explainability, and degradation risk
3. Review **Category 3 (System Integration):** Assess API dependencies, version compatibility, tool access boundaries, and failure propagation
4. Review **Category 4 (Operational Environment):** Assess provider dependency, cost exposure, shadow AI risk, and scope creep
5. Review **Category 5 (Societal and Stakeholder Impact):** Assess individual rights, discrimination potential, transparency compliance, and environmental footprint

For each identified risk, document:
- Risk description (threat, vulnerability, potential consequence)
- Risk source category (1-5)
- Affected stakeholders
- Applicable AI system(s)

### Step 3: Analyze Risks

**Responsible:** CISO Agent (R), CEO (A), Human CISO (C), CTO (C)
**Input:** Identified risks from Step 2, HH-ISMS-RMA-001 likelihood and impact scales
**Output:** Rated risks with inherent risk scores

Use the existing 5x5 likelihood/impact matrix from HH-ISMS-RMA-001 with the following process:

1. **Assess likelihood** using the 5-level time-based scale (HH-ISMS-RMA-001 Section 3):
   - 1 = Rare (< once per 5 years)
   - 2 = Unlikely (once per 1-5 years)
   - 3 = Possible (once per 3-12 months)
   - 4 = Likely (once per 1-12 weeks)
   - 5 = Almost Certain (weekly or more)

2. **Assess impact across 4 standard dimensions** (HH-ISMS-RMA-001 Section 4): Financial, Operational, Regulatory, Reputational. The highest dimension determines the base impact level.

3. **Assess the 5th impact dimension** (Individual/Society) for all AI risks:

   | Level | Label | Impact on Individuals/Society |
   |-------|-------|-------------------------------|
   | 1 | Negligible | No individual impact. AI output error with no consequence to individuals. |
   | 2 | Minor | Inconvenience to individuals. Incorrect recommendation requiring user re-evaluation; no harm. |
   | 3 | Moderate | Material harm to individuals. Systematically misleading recommendations affecting decisions; correctable. |
   | 4 | Major | Significant harm to groups. Biased or discriminatory outputs affecting professional decisions or assessments. |
   | 5 | Severe | Systemic societal harm. Systematic bias or harmful behavior affecting multiple groups; regulatory intervention warranted. |

4. **Overall impact level** is the maximum across all 5 dimensions (Financial, Operational, Regulatory, Reputational, Individual/Society).

5. **Calculate inherent risk score:** Likelihood x Impact (range: 1-25). Derive inherent risk level from the risk matrix (HH-ISMS-RMA-001 Section 5).

### Step 4: Evaluate Against Risk Acceptance Criteria

**Responsible:** CEO (R, A), Human CISO (R), CISO Agent (C)
**Input:** Rated risks from Step 3, risk appetite statement (HH-ISMS-RMA-001 Section 7)
**Output:** Risk evaluation decisions (treat or accept)

Apply the same risk acceptance thresholds as HH-ISMS-RMA-001:

| Risk Level | Score Range | Response |
|------------|------------|----------|
| **Low (1-6)** | Accept and monitor. No treatment plan required. |
| **Medium (7-12)** | Treat within quarterly review cycle. |
| **High (13-19)** | Treatment plan required within 30 days. Escalate to Weekly Technical meeting. |
| **Critical (20-25)** | Immediate treatment plan required. CEO/CISO sign-off required. |

**AI-specific threshold:** AI risks with an Individual/Society impact dimension score **>= 4 (Major or Severe) ALWAYS require explicit CEO acceptance** regardless of the overall risk level. This ensures that risks with significant potential harm to individuals or society receive executive attention even when the overall risk score falls in the Medium range.

**Documentation:** For each risk, record the evaluation decision and rationale. For risks accepted at Medium or below but with Individual/Society >= 4, document the CEO's explicit acceptance in the `residual-risk-accepted-by` field.

### Step 5: Select Treatment Options

**Responsible:** CISO Agent (R), CEO (A), CTO (C)
**Input:** Risk evaluation decisions from Step 4
**Output:** Treatment strategy per risk

Select treatment options per HH-ISMS-RMA-001 Section 9:

| Strategy | Definition | When to Use |
|----------|-----------|-------------|
| **Avoid** | Eliminate the risk source or activity | Risk-generating activity is not essential; no acceptable residual risk achievable |
| **Modify** | Implement controls to reduce likelihood, impact, or both | Most common. Risk can be reduced to acceptable level through controls |
| **Share** | Transfer risk to a third party | Transfer is more cost-effective than direct treatment |
| **Retain** | Accept the risk with documented justification | Residual risk is within appetite; treatment cost exceeds potential loss |

For AI risks, additionally consider:
- Whether the AI system should be reclassified (e.g., from Tier 2 to Tier 3) as a treatment measure
- Whether human oversight gates should be added or strengthened
- Whether the AI system should be deprecated and replaced with a non-AI alternative

### Step 6: Map to ISO 42001 Annex A Controls

**Responsible:** CISO Agent (R), CEO (A)
**Input:** Treatment strategies from Step 5, ISO 42001 Annex A control catalogue
**Output:** Applicable controls per risk, documented in risk register

For each AI risk receiving "Modify" treatment, identify applicable ISO 42001 Annex A controls:

| Annex A Group | Controls | Typical Risk Source Categories |
|---------------|----------|-------------------------------|
| A.2 (Policies) | A.2.2, A.2.3, A.2.4 | All categories (policy foundation) |
| A.3 (Internal organization) | A.3.2, A.3.3 | Category 4, Category 5 |
| A.4 (Resources) | A.4.2-A.4.6 | Category 1, Category 3 |
| A.5 (Impact assessment) | A.5.2-A.5.5 | Category 5 |
| A.6 (Lifecycle) | A.6.1.2-A.6.2.8 | Category 2, Category 3 |
| A.7 (Data) | A.7.2-A.7.6 | Category 1 |
| A.8 (Information) | A.8.2-A.8.5 | Category 5 |
| A.9 (Use) | A.9.2-A.9.4 | Category 4 |
| A.10 (Third-party) | A.10.2-A.10.4 | Category 3, Category 4 |

Document applicable controls in the risk register entry's `treatment-controls` field using the format:
```yaml
treatment-controls:
  - control-id: A.6.2.6
    description: "AI system operation and monitoring for drift detection"
  - control-id: 42001-A.9.4
    description: "Intended use documentation and enforcement"
```

**Note:** AI risks should reference both ISO 27001 Annex A controls (from HH-ISMS-RMA-001) and ISO 42001 Annex A controls (from this procedure) where applicable. The dual control mapping creates the bidirectional traceability chain required for integrated audit.

### Step 7: Document in Risk Register

**Responsible:** CISO Agent (R), CEO (A)
**Input:** Completed risk assessment (Steps 1-6)
**Output:** Risk register YAML entry with `ai-risk: true`

Create or update the risk register YAML entry in the `risks/` directory following the schema in HH-ISMS-RMA-001 Section 8. AI risks must include:

1. **`ai-risk: true`** tag to enable the 5th impact dimension
2. **All 5 impact dimensions** documented (Financial, Operational, Regulatory, Reputational, Individual/Society)
3. **ISO 42001 Annex A control references** in the `treatment-controls` field
4. **Risk source category** from Section 3 of this procedure documented in the `rationale` field
5. **Dual-axis classification** of the affected AI system documented in the `rationale` field
6. **Link to the AI System Registry entry** via the system-id in the risk description

**Risk register entry template for AI risks:**

```yaml
---
risk-id: RISK-AI-NNN
title: "[Descriptive title]"
description: >
  [Detailed risk description including AI system reference,
  threat, vulnerability, and potential consequence]
category: AI
ai-risk: true
affected-entities:
  - GmbH
  - B.V.
risk-source: [external | internal | environmental]
owner: "[Role name]"
status: active
likelihood: [1-5]
impact: [1-5]
inherent-risk-score: [likelihood x impact]
inherent-risk-level: [low | medium | high | critical]
treatment-strategy: [avoid | modify | share | retain]
treatment-controls:
  - control-id: [ISO 27001 A.X.Y or ISO 42001 A.X.Y]
    description: "[Control implementation description]"
residual-likelihood: [1-5]
residual-impact: [1-5]
residual-risk-score: [residual-likelihood x residual-impact]
residual-risk-level: [low | medium | high | critical]
residual-risk-accepted-by: ""
residual-risk-accepted-date: ""
review-cycle: quarterly
last-review-date: ""
next-review-date: ""
created-date: [ISO-8601]
last-updated: [ISO-8601]
retirement-date: ""
retirement-reason: ""
rationale: >
  [ISO 23894 risk source category: X.Y.
  Dual-axis classification: [EU AI Act level] x [SDLC Tier].
  Detailed assessment rationale.]
workshop-notes: ""
---
```

---

## 6. Assessment Triggers

The AI risk assessment is triggered by the following events. Each trigger specifies the scope of assessment and required action.

### Event-Driven Triggers

| Trigger | Scope | Required Action | Responsible |
|---------|-------|-----------------|-------------|
| **New AI system introduction** | Full 7-step assessment for the new system | Complete assessment before deployment (Steps 1-7) | AI System Owner + CISO Agent |
| **Major model or architecture change** | Reassess risks for the changed system | Re-execute Steps 2-7; update existing risk entries | AI System Owner + CISO Agent |
| **AI incident or near-miss** | Affected system(s) and related risks | Re-evaluate likelihood based on actual occurrence; update treatment | CISO Agent + CEO |
| **EU AI Act reclassification** | System reclassification + full reassessment | Re-execute classification (Section 4) then Steps 2-7 | CISO Agent + CEO |
| **New customer deployment** | Product AI systems deployed to new customer | Verify classification and treatment remain appropriate for new context | CTO + CISO Agent |

### Periodic Triggers

| Trigger | Frequency | Scope | Required Action |
|---------|-----------|-------|-----------------|
| **Annual review cycle** | Annually (aligned with ISMS annual risk review) | All registered AI systems | Re-execute Steps 3-4 for all AI risks; verify classifications remain current |
| **Quarterly monitoring review** | Quarterly (Monthly Strategic meeting) | All active AI risks | Review risk levels, treatment progress, and emerging risks |

### Regulatory Triggers

| Trigger | Scope | Required Action | Responsible |
|---------|-------|-----------------|-------------|
| **New EU AI Act implementing acts** | All AI systems potentially affected | Assess whether classification changes are needed | CISO Agent |
| **New EDPB guidance affecting AI** | AI systems processing personal data | Reassess privacy-related risks in Category 1 and Category 5 | CISO Agent |
| **ISO standard updates** | Methodology and procedure alignment | Review and update this procedure as needed | CISO Agent |

---

## 7. Roles and Responsibilities

### RACI Table for Assessment Steps

| Step | CISO Agent | CEO | Human CISO | CTO | AppSec Agent |
|------|-----------|-----|-----------|-----|-------------|
| **Step 1:** Establish context | R | A | I | C | I |
| **Step 2:** Identify risks | R | A | C | C | C |
| **Step 3:** Analyze risks | R | A | C | C | I |
| **Step 4:** Evaluate risks | C | A | R | I | I |
| **Step 5:** Select treatment | R | A | C | C | I |
| **Step 6:** Map to Annex A | R | A | I | I | I |
| **Step 7:** Document in register | R | A | I | I | I |

**Legend:** R = Responsible (does the work), A = Accountable (approves/owns), C = Consulted (provides input), I = Informed (notified of outcome)

### Role Descriptions

**CISO Agent (R for Steps 1-3, 5-7):**
- Drafts assessment scope, identifies risks, analyzes ratings, proposes treatment, maps controls, and documents entries
- Ensures consistent application of methodology across all AI systems
- Maintains the AI risk register entries with `ai-risk: true`
- Flags risks with Individual/Society >= 4 for CEO explicit acceptance

**CEO Helge Heupel (A for all steps):**
- Accountable for the complete AI risk assessment process
- Approves risk classifications and treatment strategies
- Explicitly accepts residual risk for all AI risks (especially Individual/Society >= 4)
- Makes final decisions when risk ratings are disputed

**Human CISO (C for Steps 2-4, R for Step 4):**
- Validates risk identification completeness in workshop sessions
- Challenges risk ratings to ensure objectivity and consistency
- Co-responsible for risk evaluation decisions (Step 4)
- Provides external perspective on AI risk landscape

**CTO (C for Steps 2-3, 5):**
- Validates technical AI risk analysis (architecture, integration, performance)
- Provides input on system integration risks (Category 3) and operational risks (Category 4)
- Consulted on treatment options requiring architectural changes

**AppSec Agent (C for Step 2):**
- Identifies technical security risks specific to AI systems (prompt injection, model extraction, adversarial attacks)
- Provides input from threat models (TM-CLAUDE-001, TM-VERITY-CMS-001)

---

## 8. Forms and Templates

### Appendix A: AI Risk Assessment Form

```
============================================================
AI RISK ASSESSMENT FORM
Document: HH-AIMS-RMA-001, Appendix A
============================================================

ASSESSMENT INFORMATION
--------------------------------------------------------------
System ID:          [e.g., AI-AGENT-001]
System Name:        [e.g., CISO Agent]
Assessor:           [e.g., CISO Agent]
Assessment Date:    [ISO-8601 date]
Assessment Type:    [ ] Initial  [ ] Periodic  [ ] Event-driven
Trigger:            [Description of what triggered this assessment]

RISK IDENTIFICATION
--------------------------------------------------------------
Risk ID:            [RISK-AI-NNN]
Risk Source Category: [ ] 1-Data  [ ] 2-Model  [ ] 3-Integration
                      [ ] 4-Operational  [ ] 5-Societal
Risk Description:
[Detailed description of the identified risk, including
threat, vulnerability, and potential consequence]

Affected Stakeholders:
[List stakeholders affected by this risk]

RISK ANALYSIS
--------------------------------------------------------------
Likelihood:         [1-5] ______
  Rationale:        [Why this likelihood rating]

Impact Dimensions:
  Financial:        [1-5] ______
  Operational:      [1-5] ______
  Regulatory:       [1-5] ______
  Reputational:     [1-5] ______
  Individual/Society: [1-5] ______

Overall Impact:     [Maximum of 5 dimensions] ______

Inherent Risk Score: [Likelihood x Impact] ______
Inherent Risk Level: [ ] Low  [ ] Medium  [ ] High  [ ] Critical

RISK EVALUATION
--------------------------------------------------------------
Treatment Decision: [ ] Accept  [ ] Treat
  Rationale:        [Why this decision]

Individual/Society >= 4: [ ] Yes  [ ] No
  If Yes, CEO explicit acceptance required: [ ] Obtained  [ ] Pending

RISK TREATMENT
--------------------------------------------------------------
Treatment Strategy: [ ] Avoid  [ ] Modify  [ ] Share  [ ] Retain

ISO 42001 Annex A Controls:
  Control ID:       [e.g., A.6.2.6]
  Description:      [How this control treats the risk]

  Control ID:       [additional controls as needed]
  Description:      [How this control treats the risk]

ISO 27001 Annex A Controls (if applicable):
  Control ID:       [e.g., A.8.16]
  Description:      [How this control treats the risk]

RESIDUAL RISK
--------------------------------------------------------------
Residual Likelihood:  [1-5] ______
Residual Impact:      [1-5] ______
Residual Risk Score:  [Likelihood x Impact] ______
Residual Risk Level:  [ ] Low  [ ] Medium  [ ] High  [ ] Critical

APPROVAL
--------------------------------------------------------------
Assessed By:        ________________  Date: ________________
Reviewed By:        ________________  Date: ________________
Approved By (CEO):  ________________  Date: ________________
============================================================
```

### Appendix B: AI System Classification Form

```
============================================================
AI SYSTEM CLASSIFICATION FORM
Document: HH-AIMS-RMA-001, Appendix B
============================================================

SYSTEM IDENTIFICATION
--------------------------------------------------------------
System ID:          [e.g., AI-AGENT-001]
System Name:        [e.g., CISO Agent]
Category:           [ ] Product AI  [ ] Development AI  [ ] Third-party AI
Provider:           [e.g., Anthropic]
Assessor:           [e.g., CISO Agent]
Date:               [ISO-8601 date]

AXIS 1: EU AI ACT RISK LEVEL
--------------------------------------------------------------
[1] Prohibited practice (Art. 5)?    [ ] Yes  [ ] No
    If Yes: STOP. Do not develop/deploy. Escalate to CEO.

[2] Product AI (customer-facing)?    [ ] Yes  [ ] No
    If No: Axis 1 = Minimal-Risk

[3] Falls under Annex III?           [ ] Yes  [ ] No
    If Yes: Axis 1 = HIGH-RISK

[4] Interacts with humans or         [ ] Yes  [ ] No
    generates content?
    If Yes: Axis 1 = LIMITED-RISK
    If No:  Axis 1 = MINIMAL-RISK

Axis 1 Result: _________________________
Rationale:    _________________________

AXIS 2: SDLC USAGE TIER
--------------------------------------------------------------
[5] Is the system development AI     [ ] Yes  [ ] No
    or used internally?
    If No: Axis 2 = Tier 1

[6] Human oversight level:
    [ ] Post-hoc review (24h)         --> Tier 1 (Assistant)
    [ ] Review before acceptance      --> Tier 2 (Collaborator)
    [ ] Real-time approval required   --> Tier 3 (Decision Support)

Axis 2 Result: _________________________
Rationale:    _________________________

COMBINED CLASSIFICATION
--------------------------------------------------------------
Axis 1 (EU AI Act):  _________________________
Axis 2 (SDLC Tier):  _________________________
Combined (higher governs): _________________________

Treatment Level:  [ ] Standard  [ ] Enhanced  [ ] Maximum

APPROVAL
--------------------------------------------------------------
Classified By:      ________________  Date: ________________
Reviewed By (CISO): ________________  Date: ________________
Approved By (CEO):  ________________  Date: ________________
============================================================
```

### Appendix C: Residual Risk Acceptance Record

```
============================================================
RESIDUAL RISK ACCEPTANCE RECORD
Document: HH-AIMS-RMA-001, Appendix C
============================================================

RISK IDENTIFICATION
--------------------------------------------------------------
Risk ID:            [RISK-AI-NNN]
Risk Title:         [Short descriptive title]
AI System(s):       [System ID(s) affected]
Assessment Date:    [ISO-8601 date]

RESIDUAL RISK SUMMARY
--------------------------------------------------------------
Inherent Risk:      Score: ___  Level: ______________
Treatment Applied:  [Strategy and key controls]
Residual Risk:      Score: ___  Level: ______________

Individual/Society
Impact Dimension:   Score: ___
  >= 4 Threshold:   [ ] Yes (CEO explicit acceptance required)
                    [ ] No

RESIDUAL RISK DETAILS
--------------------------------------------------------------
Residual Likelihood: [1-5] ___ ([Label])
  Rationale: [Why residual likelihood is at this level after treatment]

Residual Impact:     [1-5] ___ ([Label])
  Rationale: [Why residual impact remains at this level]

Remaining Vulnerabilities:
[Description of vulnerabilities that remain after treatment]

Monitoring Measures:
[How the residual risk will be monitored going forward]

Review Schedule:     [ ] Quarterly  [ ] Monthly  [ ] Other: ___

ACCEPTANCE DECISION
--------------------------------------------------------------
I, CEO Helge Heupel, have reviewed the residual risk assessment
for the above-identified AI risk. I understand the remaining
vulnerabilities and accept the residual risk level as documented.

[ ] ACCEPTED    [ ] NOT ACCEPTED (return to treatment)

Business Rationale for Acceptance:
[Documented justification for accepting the residual risk]

SIGNATURES
--------------------------------------------------------------
CEO (Accountable):  ________________  Date: ________________
CISO (Reviewer):    ________________  Date: ________________

Git PR Reference:   [PR URL for audit trail]
============================================================
```

---

## 9. Integration with ISMS Risk Assessment

This section documents how the AI risk assessment integrates with the ISMS risk assessment, ensuring a single, coherent risk management process for the Helge Heupel Group.

### Single Risk Register

All risks, including AI-specific risks, are maintained in the **single risk register** in the `risks/` directory. AI risks are distinguished by the `ai-risk: true` tag, which activates the 5th impact dimension (Individual/Society) for that entry. There is no separate AI risk register.

### Same 5x5 Matrix

The AI risk assessment uses the **same 5x5 likelihood/impact matrix** as the ISMS risk assessment (HH-ISMS-RMA-001 Section 5). The 5th impact dimension for AI risks is an extension, not a replacement. The overall impact level is the maximum across all applicable dimensions.

### Same Risk Levels and Treatment Options

AI risks use the **same 4 risk levels** (Low, Medium, High, Critical) and the **same 4 treatment options** (Avoid, Modify, Share, Retain) as ISMS risks. The response actions and escalation paths are identical.

### Same Review Cycle

AI risks follow the **same quarterly formal review cycle** as ISMS risks, conducted at the Monthly Strategic meeting (HH-GOV-Startup-v1.0, agenda item 3). AI-specific event-driven triggers (Section 6) supplement the standard event triggers in HH-ISMS-RMA-001 Section 10.

### Same CEO Residual Risk Acceptance

AI residual risk acceptance uses the **same dual mechanism** as ISMS risk acceptance:
1. **Git PR workflow** (working process): Risk file update via Pull Request with CEO approval
2. **Formal summary document** (auditor package): Consolidated acceptance record

The AI-specific addition is the **Individual/Society >= 4 threshold** requiring explicit CEO acceptance regardless of overall risk level.

### Additional Control Mapping

AI risks reference **both** ISO 27001 Annex A controls and ISO 42001 Annex A controls in the `treatment-controls` field. This dual mapping creates the bidirectional traceability chain:

```
Risk Register Entry (ai-risk: true)
  --> ISO 27001 Annex A Control --> SoA (soa/ directory)
  --> ISO 42001 Annex A Control --> AIMS SoA (aims-soa/ directory)
  --> AI System Registry Entry (ai-registry/ directory)
```

### Feed into AI Impact Assessment

Risks identified through this procedure inform which AI systems require impact assessment per HH-AIMS-AIA-001. Specifically:
- AI systems with Individual/Society impact >= 3 are flagged for focused impact assessment
- AI systems with Individual/Society impact >= 4 are flagged for full impact assessment
- Risk assessment results are recorded in the AI System Registry entry (`last-risk-assessment` date)

---

## Document Control

### Version History

| Version | Date | Author | Change Summary | Approved By |
|---------|------|--------|---------------|-------------|
| v1.0 | 2026-02-22 | CISO Agent | Initial release | [CEO-SIGNOFF-REQUIRED] |

### Approval

This document is approved via Git Pull Request. The approval chain is:
1. **Author:** CISO Agent drafts the document
2. **Reviewers:** CISO and CTO review via PR comments
3. **Approver:** CEO Helge Heupel approves via PR merge

`[CEO-SIGNOFF-REQUIRED]`

### Next Review

- **Annual review:** 2027-02-22
- **Extraordinary review triggers:** New EU AI Act implementing acts, ISO 42001 auditor findings, AI incident requiring methodology changes, significant organizational change

### Related Documents

| Document ID | Title | Relationship |
|-------------|-------|-------------|
| HH-ISMS-RMA-001 | Risk Assessment Methodology | Base methodology that this procedure extends |
| HH-AIMS-POL-001 | AI Policy | Defines dual-axis classification and governance principles |
| HH-AIMS-AIA-001 | AI Impact Assessment Procedure | Impact assessment process informed by risk assessment results |
| HH-GOV-Startup-v1.0 | Governance Model | Defines escalation paths for risk treatment |
| HH-IMS-CTX-001 | IMS Context | Establishes ISMS/AIMS integration framework |

---

*Document: procedures/ai-risk-assessment-procedure.md*
*Document ID: HH-AIMS-RMA-001*
*AI Risk Assessment Procedure for the Helge Heupel Group*
