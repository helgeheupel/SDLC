---
document-id: HH-AIMS-AIA-001
title: "AI Impact Assessment Procedure"
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
  - ISO/IEC 42001:2023 cl. 6.1.4
  - ISO/IEC 42001:2023 cl. 8.4
  - ISO/IEC 42005:2025
  - HH-AIMS-POL-001
---

# AI Impact Assessment Procedure

## 1. Purpose and Scope

This procedure defines the AI Impact Assessment (AIA) process for the **Helge Heupel Group** Integrated Management System (IMS). It satisfies the requirements of **ISO/IEC 42001:2023 cl. 6.1.4** (AI system impact assessment) and **cl. 8.4** (performing impact assessments at planned intervals or when significant changes occur). The procedure follows the structural framework of **ISO/IEC 42005:2025** (AI system impact assessment).

### Objective

The AI Impact Assessment evaluates the potential consequences of AI system deployment for:
- **Individuals** directly interacting with or affected by the AI system
- **Groups of individuals** who may be systematically affected by AI system behavior
- **Society** through broader impacts on public trust, democratic values, and the environment

### Applicability

This procedure applies to all AI systems registered in the AI System Registry (`ai-registry/` directory) that meet the assessment triggers defined in Section 3. Specifically:

- **All High-Risk AI systems** (EU AI Act Art. 6/Annex III): Full impact assessment required
- **All Limited-Risk AI systems** (EU AI Act Art. 50): Focused impact assessment on transparency and individual impact
- **Any AI system processing special category personal data** (GDPR Art. 9): Full impact assessment required regardless of EU AI Act classification

### Normative References

| Reference | Title | Relevance |
|-----------|-------|-----------|
| ISO/IEC 42001:2023 cl. 6.1.4 | AI system impact assessment | Requires process to assess consequences for individuals, groups, and societies |
| ISO/IEC 42001:2023 cl. 8.4 | AI system impact assessment (operation) | Requires performing assessments at planned intervals or significant changes |
| ISO/IEC 42001:2023 Annex A.5.2 | AI system impact assessment process | Control requiring documented AIA process |
| ISO/IEC 42001:2023 Annex A.5.3 | Documentation of AI system impact assessments | Control requiring documented AIA reports |
| ISO/IEC 42001:2023 Annex A.5.4 | Assessing AI system impact on individuals/groups | Control requiring individual impact assessment |
| ISO/IEC 42001:2023 Annex A.5.5 | Assessing societal impacts of AI systems | Control requiring societal impact assessment |
| ISO/IEC 42005:2025 | AI system impact assessment framework | Structural framework for this procedure |
| EU AI Act Art. 9 | Risk management for High-Risk AI | Risk management requirements for High-Risk systems |
| EU AI Act Art. 50 | Transparency for Limited-Risk AI | Transparency obligations for Limited-Risk systems |
| HH-AIMS-POL-001 | AI Policy | AI governance principles, classification framework, prohibited practices |

---

## 2. Normative References

(See table in Section 1 above for the complete normative reference list.)

Additional references supporting this procedure:

| Reference | Title | Relevance |
|-----------|-------|-----------|
| HH-AIMS-RMA-001 | AI Risk Assessment Procedure | AI risk assessment results inform which systems need impact assessment |
| HH-ISMS-RMA-001 | Risk Assessment Methodology | Base risk methodology with 5x5 matrix |
| GDPR Art. 9 | Special category personal data | Triggers mandatory AIA regardless of AI Act classification |
| GDPR Art. 35 | Data Protection Impact Assessment | DPIA may be required in conjunction with AIA for personal data processing |
| ISO/IEC 12792:2025 | AI transparency taxonomy | Framework for transparency information in AIA reports |

---

## 3. When Assessment is Required

The following table defines mandatory triggers for AI impact assessment. The assessment scope (full or focused) depends on the trigger type and the AI system's classification.

### Mandatory Assessment Triggers

| Trigger | Assessment Scope | Required For | Responsible |
|---------|-----------------|-------------|-------------|
| **All High-Risk AI systems (Art. 6/Annex III)** | Full assessment | Every High-Risk system before deployment | AI System Owner + CISO Agent |
| **All Limited-Risk AI systems (Art. 50)** | Focused assessment (transparency + individual impact) | Every Limited-Risk system before deployment | AI System Owner + CISO Agent |
| **AI system processing special category personal data (GDPR Art. 9)** | Full assessment + DPIA coordination | Any system processing health, biometric, racial/ethnic, political, religious, sexual orientation, or trade union data | AI System Owner + CISO Agent + DPO |
| **New AI system introduction** | Full or focused (per classification) | Before first deployment | AI System Owner + CISO Agent |
| **Significant model change (architecture, retraining, new data)** | Reassessment of affected dimensions | Changed system | AI System Owner + CISO Agent |
| **Change in intended use or deployment context** | Full reassessment | Changed system | AI System Owner + CISO Agent |
| **Annual periodic review** | Review existing assessments, update as needed | All systems with existing AIAs | CISO Agent |

### Full vs. Focused Assessment

| Aspect | Full Assessment | Focused Assessment |
|--------|----------------|-------------------|
| **All 6 impact dimensions** | Yes | Transparency + Individual rights (minimum) |
| **Stakeholder identification** | Comprehensive | Primary stakeholders only |
| **Quantitative methods** | Required where measurable | Optional |
| **External review** | Required for High-Risk | Not required |
| **CEO approval** | Required | Required |
| **Re-assessment triggers** | All triggers apply | Classification change or annual review |

> **Note:** At Startup, all HH AI systems are classified as Limited-Risk. Full High-Risk assessment process is documented in this procedure but not yet exercised. When Verity product AI features are finalized, a reclassification assessment will determine if High-Risk assessment is required.

---

## 4. Impact Dimensions and Thresholds

This section defines the 6 impact dimensions assessed in every AIA, with specific measurable thresholds that determine whether mitigation is required. Each threshold is calibrated to the Helge Heupel Group's operating context.

### Dimension 1: Fairness

**Definition:** The AI system does not produce discriminatory outcomes across protected attributes (age, gender, ethnicity, disability, nationality, religion, sexual orientation).

| Rating | Label | Description | Threshold |
|--------|-------|-------------|-----------|
| 1 | No concern | System does not process data that could lead to discrimination; N/A for fairness assessment | N/A |
| 2 | Minimal | System processes demographic data but not for decision-making | Monitor annually |
| 3 | Moderate | System outputs may indirectly correlate with protected attributes | Disparate impact ratio >= 0.8 (four-fifths rule) |
| 4 | Significant | System directly influences decisions affecting individuals across protected groups | Disparate impact ratio >= 0.8 required; if < 0.8, mitigation required before deployment |
| 5 | Critical | System makes autonomous decisions with legal or similarly significant effects on individuals | Disparate impact ratio >= 0.9 required; independent fairness audit required |

**Threshold:** Disparate impact ratio >= 0.8 (four-fifths rule). If the ratio falls below 0.8 for any protected attribute, mitigation is required before deployment. For autonomous decisions with legal effect, the threshold is raised to >= 0.9.

### Dimension 2: Safety

**Definition:** The AI system does not cause physical, psychological, or economic harm to individuals through its outputs or actions.

| Rating | Label | Description | Threshold |
|--------|-------|-------------|-----------|
| 1 | No concern | System outputs are informational only; no action capability | N/A |
| 2 | Minimal | System provides suggestions; human always makes final decision | HITL gate present for all outputs |
| 3 | Moderate | System influences decisions that could affect individual wellbeing | Dual review required (system owner + independent reviewer) |
| 4 | Significant | System outputs directly affect safety-relevant decisions | No autonomous decisions without HITL gate; safety-critical output requires dual review |
| 5 | Critical | System operates in safety-critical environment; failure could cause physical harm | Full safety case construction required; external safety review mandatory |

**Threshold:** No autonomous decisions without a human-in-the-loop (HITL) gate. Any safety-critical output requires dual review (system owner + independent reviewer). Safety cases are required for systems rated 5.

### Dimension 3: Privacy

**Definition:** The AI system processes personal data in compliance with GDPR and applicable data protection law, with appropriate data minimization and purpose limitation.

| Rating | Label | Description | Threshold |
|--------|-------|-------------|-----------|
| 1 | No concern | System does not process personal data | N/A |
| 2 | Minimal | System processes non-sensitive personal data with adequate consent | Standard GDPR compliance measures sufficient |
| 3 | Moderate | System processes Confidential data that may contain personal information | Data minimization assessment required per output type; privacy-by-design review |
| 4 | Significant | System processes personal data for profiling or automated decision-making | No profiling without explicit consent; DPIA required per GDPR Art. 35 |
| 5 | Critical | System processes special category data (GDPR Art. 9) or makes automated decisions with legal effect | No special category data processing without DPIA; no automated decision with legal effect without human review |

**Threshold:** No special category data processing without DPIA completion. Data minimization assessment required for each output type. No automated decision with legal effect without human review.

### Dimension 4: Transparency

**Definition:** Users and affected individuals are informed about the AI system's nature, capabilities, limitations, and the basis for its outputs.

| Rating | Label | Description | Threshold |
|--------|-------|-------------|-----------|
| 1 | Fully met | All AI-generated outputs clearly identifiable; full capability documentation available | EU AI Act Art. 50 compliance confirmed |
| 2 | Substantially met | AI-generated outputs identifiable in most contexts; documentation available | Minor gaps to address within 30 days |
| 3 | Partially met | Some AI outputs not clearly identifiable; documentation incomplete | Remediation plan required within 14 days |
| 4 | Insufficiently met | Significant transparency gaps; users unaware of AI involvement | Deployment blocked until transparency obligations met |
| 5 | Not met | No transparency measures in place; users cannot identify AI involvement | System suspended; remediation required before any use |

**Threshold:** All AI-generated outputs must be identifiable as such (EU AI Act Art. 50). Users must be informed of the AI nature of the system. For ratings 4-5, deployment is blocked or suspended until transparency obligations are met.

### Dimension 5: Environmental

**Definition:** The environmental footprint of the AI system (energy consumption, carbon emissions) is documented and within acceptable bounds.

| Rating | Label | Description | Threshold |
|--------|-------|-------------|-----------|
| 1 | Negligible | Minimal computational footprint (API calls to existing infrastructure) | Documentation of API provider's environmental commitments sufficient |
| 2 | Minor | Moderate inference usage; no proprietary training | Energy consumption per inference documented; provider sustainability report reviewed |
| 3 | Moderate | Significant inference volume or fine-tuning on proprietary data | Annual carbon footprint estimate required; optimization review if > 10% of total IT energy budget |
| 4 | Significant | Large-scale training on proprietary data; high inference volume | Carbon offset or reduction plan required; quarterly energy consumption reporting |
| 5 | Critical | Massive computational requirements; training on very large datasets | External environmental impact assessment required; board-level sustainability review |

**Threshold:** Energy consumption per inference documented for all AI systems. Carbon footprint of proprietary training documented when applicable. For third-party models (current HH situation), documentation of the provider's environmental commitments is sufficient.

### Dimension 6: Individual Rights

**Definition:** The AI system respects and protects the fundamental rights of individuals, including the right to non-discrimination, privacy, freedom of expression, and due process.

| Rating | Label | Description | Threshold |
|--------|-------|-------------|-----------|
| 1 | No concern | System does not interact with or affect external individuals | N/A |
| 2 | Minimal | System interacts with internal users only; no external individual impact | Standard human oversight sufficient |
| 3 | Moderate | System outputs may indirectly affect external individuals' decisions | Rights impact review required; human oversight for outputs reaching external stakeholders |
| 4 | Significant | System directly affects individual rights (profiling, access decisions, recommendations) | No profiling without explicit consent; no automated decisions with legal effect without human review |
| 5 | Critical | System makes decisions with legal or similarly significant effects on individuals | Full rights impact assessment; independent review; appeal mechanism for affected individuals |

**Threshold:** No profiling without explicit consent. No automated decision with legal effect without human review. For ratings 4-5, independent rights impact assessment is required.

---

## 5. Assessment Process

The AI Impact Assessment follows 8 numbered steps aligned with ISO 42005:2025. Each step has a designated responsible role, defined inputs and outputs, and detailed instructions.

### Step 1: Scoping

**Responsible:** AI System Owner (R), CISO Agent (C)
**Input:** AI System Registry entry, deployment context, stakeholder map
**Output:** AIA Scope Document

Define the assessment boundary:

1. **AI system identification:** Reference the AI System Registry entry by system-id (e.g., AI-AGENT-001)
2. **Feature scope:** Identify specific features and capabilities being assessed (for initial assessment: all features; for change-triggered assessment: changed features only)
3. **Data flows:** Document what data enters the system, how it is processed, and what data exits the system (reference `data-inputs` and `data-outputs` from the registry entry)
4. **Affected stakeholders:** Identify and categorize:
   - **Direct users:** Personnel who interact with the AI system (e.g., CEO, CTO, developers)
   - **Indirect users:** Personnel who consume AI outputs (e.g., human CISO reviewing risk assessments)
   - **Data subjects:** Individuals whose data is processed by the AI system
   - **Customers:** External customers who receive products or services informed by AI outputs
   - **Regulators:** Regulatory bodies with jurisdiction (BaFin, BSI, Autoriteit Persoonsgegevens, NCSC-NL)
5. **Applicable jurisdictions:** Germany (GmbH), Netherlands (B.V.), United States (Inc.) as applicable per the system's `deployment-entities` field

### Step 2: Responsibility Assignment

**Responsible:** CISO Agent (R), CEO (A)
**Input:** AIA Scope Document from Step 1
**Output:** Assessment Team Record

Assign the assessment team based on system classification:

| Role | Limited-Risk Assessment | High-Risk Assessment |
|------|------------------------|---------------------|
| **AI System Owner** | Required (provides system knowledge) | Required |
| **CISO Agent** | Required (drafts assessment) | Required |
| **CTO** | Consulted (technical review) | Required (technical review) |
| **CEO** | Required (approval) | Required (approval) |
| **External Consultant** | Not required | Required (independent review) |

Document the assessment team members, their roles, and their qualifications in the Assessment Team Record.

### Step 3: Threshold Definition

**Responsible:** CISO Agent (R), CEO (A)
**Input:** Impact dimensions and thresholds from Section 4, system-specific context
**Output:** Threshold Matrix for this assessment

Apply the standard thresholds from Section 4 to the specific AI system being assessed:

1. **Review each dimension** against the system's intended use and operational context
2. **Apply standard thresholds** unless system-specific adjustment is justified
3. **Document any threshold adjustments** with written justification (e.g., a system that does not process personal data may have Privacy rated as N/A with justification)
4. **CEO approves threshold adjustments:** Any relaxation of standard thresholds requires CEO documented approval

**Threshold adjustments must be conservative:** Thresholds may be tightened (more restrictive) without additional justification. Thresholds may only be relaxed with documented business rationale and CEO approval.

### Step 4: Execution

**Responsible:** Assessment Team (R), CISO Agent (coordinator)
**Input:** Scope, thresholds, system documentation
**Output:** Impact Assessment Report (draft)

Assess impacts using both quantitative and qualitative methods:

**Quantitative methods** (where measurable):
- **Bias testing metrics:** Calculate disparate impact ratio across protected attributes using test datasets
- **Privacy analysis:** Data inventory, purpose limitation check, consent verification, DPIA review
- **Performance benchmarking:** Accuracy, reliability, and consistency metrics against declared baselines
- **Environmental metrics:** API call volume, token consumption, estimated energy per inference

**Qualitative methods** (for all assessments):
- **Stakeholder impact review:** For each stakeholder category from Step 1, assess potential positive and negative impacts
- **Rights assessment:** Evaluate each individual right potentially affected (non-discrimination, privacy, autonomy, due process, freedom of expression)
- **Societal impact review:** Assess broader societal implications (public trust, democratic values, environmental sustainability)
- **Scenario analysis:** Develop 2-3 adverse scenarios (e.g., system failure, biased output reaching customers, data breach) and assess consequences

Rate each impact dimension (Section 4) on the 1-5 scale with documented rationale.

### Step 5: Analysis

**Responsible:** CISO Agent (R), CEO (A)
**Input:** Impact Assessment Report draft from Step 4
**Output:** Findings and Mitigation Plan

Analyze the assessment findings:

1. **Identify impacts exceeding thresholds:** For each dimension rated 3 or above, document the specific threshold exceeded
2. **Classify severity:** Map dimension ratings to overall assessment outcome:
   - All dimensions <= 2: **ACCEPTABLE** (proceed with monitoring)
   - Any dimension = 3: **ACCEPTABLE WITH CONDITIONS** (implement mitigations within 30 days)
   - Any dimension = 4: **REQUIRES MITIGATION** (implement mitigations before deployment or continued operation)
   - Any dimension = 5: **UNACCEPTABLE** (suspend system; remediation required before any use)
3. **Propose mitigations** for each exceeded threshold:
   - Specific action to reduce or eliminate the impact
   - Responsible owner for each mitigation
   - Timeline for implementation
   - Success criteria for the mitigation
4. **Assess residual impact:** After proposed mitigations, what is the expected impact level?

### Step 6: Documentation

**Responsible:** CISO Agent (R)
**Input:** Analysis results from Step 5
**Output:** Formal AIA Report (per ISO 42001 A.5.3 requirements)

Document the assessment per the requirements in Section 7 of this procedure. The AIA Report must include all mandatory sections specified in Section 7.

### Step 7: Approval

**Responsible:** CEO (R, A)
**Input:** Formal AIA Report from Step 6
**Output:** Signed Approval Record

Approval process by classification:

| Classification | Approval Process |
|---------------|-----------------|
| **Limited-Risk** | CEO reviews AIA Report and approves via Git PR merge. CISO consulted. |
| **High-Risk** | External consultant reviews AIA Report for completeness and rigor. CEO reviews consultant feedback and approves via Git PR merge with formal acceptance record. |
| **Special category data** | CEO approves AIA Report. DPO reviews and approves DPIA alignment. Both approvals documented. |

**Approval decision options:**
- **Approved:** System may proceed to deployment or continue operation. Monitoring plan activated.
- **Approved with conditions:** System may proceed subject to mitigation completion within specified timeline.
- **Not approved:** System suspended until remediation completed and re-assessment performed.
- **Returned for revision:** AIA Report incomplete or inadequate; additional assessment required.

### Step 8: Monitoring

**Responsible:** AI System Owner (R), CISO Agent (C)
**Input:** Approved AIA Report with monitoring plan
**Output:** Monitoring Configuration and re-assessment triggers

Define ongoing impact monitoring:

1. **Impact indicators:** For each dimension rated 2 or above, define specific metrics to monitor:
   - Fairness: Periodic bias audit frequency (quarterly for Limited-Risk, monthly for High-Risk)
   - Safety: Incident rate, HITL override frequency, error rate trends
   - Privacy: Data access audit, consent validity review, DPIA currency
   - Transparency: User comprehension surveys, disclosure compliance checks
   - Environmental: API usage trends, token consumption, energy estimates
   - Individual rights: Complaint tracking, appeal outcomes, rights exercise requests

2. **Re-assessment triggers:** Define conditions requiring AIA update:
   - Monitoring metrics exceed defined thresholds
   - AI system classification changes
   - Significant model update or data change
   - Stakeholder complaint or regulatory inquiry
   - Annual periodic review date reached

3. **Integration with AI system operational monitoring:** Impact indicators are included in the Monthly Strategic meeting AI governance review (agenda item 2).

---

## 6. Roles and Responsibilities

### RACI Table for Assessment Steps

| Step | AI System Owner | CISO Agent | CTO | CEO | External Consultant |
|------|----------------|-----------|-----|-----|---------------------|
| **Step 1:** Scoping | R | C | I | I | I |
| **Step 2:** Responsibility assignment | I | R | I | A | I |
| **Step 3:** Threshold definition | C | R | I | A | I |
| **Step 4:** Execution | C | R | C | I | C (High-Risk only) |
| **Step 5:** Analysis | C | R | C | A | C (High-Risk only) |
| **Step 6:** Documentation | I | R | I | I | I |
| **Step 7:** Approval | I | C | I | R/A | R (High-Risk only) |
| **Step 8:** Monitoring | R | C | I | I | I |

**Legend:** R = Responsible (does the work), A = Accountable (approves/owns), C = Consulted (provides input), I = Informed (notified of outcome)

### Role Descriptions

**AI System Owner:**
- Provides system-specific knowledge for scoping and assessment
- Responsible for ongoing monitoring after assessment approval
- Implements mitigations assigned to the system

**CISO Agent:**
- Drafts and coordinates the assessment process
- Produces AIA Report documentation
- Ensures consistency across all AI system assessments
- Maintains traceability between AIA results and risk register

**CTO:**
- Provides technical expertise during execution (bias testing methodology, performance analysis)
- Consulted on technical feasibility of proposed mitigations

**CEO Helge Heupel:**
- Accountable for the assessment process
- Approves thresholds and threshold adjustments
- Reviews and approves final AIA Report
- Makes deployment decisions for systems with significant impacts

**External Consultant (High-Risk only):**
- Provides independent review of AIA Report completeness and rigor
- Required for High-Risk systems per EU AI Act conformity assessment expectations

---

## 7. Documentation Requirements (per ISO 42001 A.5.3)

Every AIA Report must contain the following sections. This section list serves as both a checklist and the structural requirement for the AIA Report Template (Appendix B).

### Required AIA Report Sections

| # | Section | Content | Evidence Purpose |
|---|---------|---------|-----------------|
| 1 | **System identification** | AI System Registry entry reference (system-id, name, classification, lifecycle status) | Links AIA to specific registered system |
| 2 | **Assessment scope and boundary** | Features assessed, data flows, system boundary, deployment entities | Demonstrates assessment covered the right scope |
| 3 | **Stakeholder identification** | Direct users, indirect users, data subjects, customers, regulators | Demonstrates affected parties were considered |
| 4 | **Assessment methodology** | Methods used (quantitative, qualitative), data sources, tools, ISO 42005 alignment | Demonstrates assessment was systematic and rigorous |
| 5 | **Findings per impact dimension** | Rating (1-5), rationale, evidence for each of the 6 dimensions | Core assessment content |
| 6 | **Threshold comparison results** | Each dimension's rating compared to applicable threshold; pass/fail per dimension | Demonstrates objective evaluation criteria |
| 7 | **Mitigation actions** | For each exceeded threshold: action, responsible owner, timeline, success criteria | Demonstrates organization acts on findings |
| 8 | **Residual impact statement** | Expected impact levels after mitigations; overall assessment outcome | Demonstrates mitigation adequacy |
| 9 | **Assessor details and qualifications** | Assessment team members, roles, relevant qualifications or expertise | Demonstrates competent assessment team |
| 10 | **Approval records** | CEO approval (all systems), external consultant review (High-Risk), DPO review (GDPR) | Formal acceptance evidence |

---

## 8. Forms and Templates

### Appendix A: AI Impact Assessment Form

```
============================================================
AI IMPACT ASSESSMENT FORM
Document: HH-AIMS-AIA-001, Appendix A
============================================================

ASSESSMENT INFORMATION
--------------------------------------------------------------
System ID:          [e.g., AI-AGENT-001]
System Name:        [e.g., CISO Agent]
Classification:     [Limited-Risk | High-Risk]
Assessment Type:    [ ] Initial  [ ] Change-driven  [ ] Annual review
Assessor:           [e.g., CISO Agent]
Assessment Date:    [ISO-8601 date]
Trigger:            [What triggered this assessment]

IMPACT DIMENSION ASSESSMENT
--------------------------------------------------------------

1. FAIRNESS
   Rating: [1-5] ______
   Threshold: Disparate impact ratio >= 0.8
   Threshold Met: [ ] Yes  [ ] No  [ ] N/A
   Evidence:
   [Description of fairness assessment methodology and findings]

   Mitigation Required: [ ] Yes  [ ] No
   Mitigation Action:   [If yes, describe action]
   Timeline:            [If yes, completion date]

2. SAFETY
   Rating: [1-5] ______
   Threshold: No autonomous decisions without HITL gate
   Threshold Met: [ ] Yes  [ ] No  [ ] N/A
   Evidence:
   [Description of safety assessment methodology and findings]

   Mitigation Required: [ ] Yes  [ ] No
   Mitigation Action:   [If yes, describe action]
   Timeline:            [If yes, completion date]

3. PRIVACY
   Rating: [1-5] ______
   Threshold: No special category data without DPIA; data minimization per output
   Threshold Met: [ ] Yes  [ ] No  [ ] N/A
   Evidence:
   [Description of privacy assessment methodology and findings]

   Mitigation Required: [ ] Yes  [ ] No
   Mitigation Action:   [If yes, describe action]
   Timeline:            [If yes, completion date]

4. TRANSPARENCY
   Rating: [1-5] ______
   Threshold: All AI outputs identifiable (EU AI Act Art. 50)
   Threshold Met: [ ] Yes  [ ] No  [ ] N/A
   Evidence:
   [Description of transparency assessment methodology and findings]

   Mitigation Required: [ ] Yes  [ ] No
   Mitigation Action:   [If yes, describe action]
   Timeline:            [If yes, completion date]

5. ENVIRONMENTAL
   Rating: [1-5] ______
   Threshold: Energy consumption per inference documented
   Threshold Met: [ ] Yes  [ ] No  [ ] N/A
   Evidence:
   [Description of environmental assessment methodology and findings]

   Mitigation Required: [ ] Yes  [ ] No
   Mitigation Action:   [If yes, describe action]
   Timeline:            [If yes, completion date]

6. INDIVIDUAL RIGHTS
   Rating: [1-5] ______
   Threshold: No profiling without consent; no automated decisions with legal effect without review
   Threshold Met: [ ] Yes  [ ] No  [ ] N/A
   Evidence:
   [Description of rights assessment methodology and findings]

   Mitigation Required: [ ] Yes  [ ] No
   Mitigation Action:   [If yes, describe action]
   Timeline:            [If yes, completion date]

OVERALL ASSESSMENT
--------------------------------------------------------------
Highest Dimension Rating: [1-5] ______
Overall Outcome:    [ ] ACCEPTABLE
                    [ ] ACCEPTABLE WITH CONDITIONS
                    [ ] REQUIRES MITIGATION
                    [ ] UNACCEPTABLE

APPROVAL
--------------------------------------------------------------
Assessed By:        ________________  Date: ________________
Reviewed By:        ________________  Date: ________________
Approved By (CEO):  ________________  Date: ________________
============================================================
```

### Appendix B: AIA Report Template

```
============================================================
AI IMPACT ASSESSMENT REPORT
Document: HH-AIMS-AIA-001, Appendix B
============================================================

DOCUMENT CONTROL
--------------------------------------------------------------
Report ID:          AIA-[SYSTEM-ID]-[YYYY]-[NN]
System ID:          [e.g., AI-AGENT-001]
System Name:        [e.g., CISO Agent]
Report Version:     [v1.0]
Date:               [ISO-8601]
Classification:     Confidential
Author:             [Assessor name/role]

1. SYSTEM IDENTIFICATION
--------------------------------------------------------------
[Reference AI System Registry entry. Include: system-id, name,
category, provider, EU AI Act classification, SDLC usage tier,
lifecycle status, deployment entities.]

2. ASSESSMENT SCOPE AND BOUNDARY
--------------------------------------------------------------
[Features assessed, data flows, system boundary, integration
points, deployment environment. Reference AIA Scope Document.]

3. STAKEHOLDER IDENTIFICATION
--------------------------------------------------------------
[Direct users, indirect users, data subjects, customers,
regulators. Include stakeholder category, count/estimate,
nature of interaction with AI system.]

4. ASSESSMENT METHODOLOGY
--------------------------------------------------------------
[Methods used (quantitative metrics, qualitative review,
scenario analysis), data sources, tools, ISO 42005 alignment
statement.]

5. FINDINGS PER IMPACT DIMENSION
--------------------------------------------------------------
5.1 Fairness
  Rating: [1-5]
  Findings: [Detailed findings]
  Evidence: [Supporting data/analysis]

5.2 Safety
  Rating: [1-5]
  Findings: [Detailed findings]
  Evidence: [Supporting data/analysis]

5.3 Privacy
  Rating: [1-5]
  Findings: [Detailed findings]
  Evidence: [Supporting data/analysis]

5.4 Transparency
  Rating: [1-5]
  Findings: [Detailed findings]
  Evidence: [Supporting data/analysis]

5.5 Environmental
  Rating: [1-5]
  Findings: [Detailed findings]
  Evidence: [Supporting data/analysis]

5.6 Individual Rights
  Rating: [1-5]
  Findings: [Detailed findings]
  Evidence: [Supporting data/analysis]

6. THRESHOLD COMPARISON RESULTS
--------------------------------------------------------------
[Tabular comparison of each dimension rating against threshold.
Pass/fail per dimension. Overall outcome determination.]

7. MITIGATION ACTIONS
--------------------------------------------------------------
[For each exceeded threshold: specific action, responsible
owner, timeline, success criteria, verification method.]

8. RESIDUAL IMPACT STATEMENT
--------------------------------------------------------------
[Expected impact levels after mitigations. Overall assessment
outcome. Statement on acceptability of residual impacts.]

9. ASSESSOR DETAILS AND QUALIFICATIONS
--------------------------------------------------------------
[Team members, roles, relevant qualifications, independence
statement.]

10. APPROVAL RECORDS
--------------------------------------------------------------
[CEO approval with date and signature/PR reference.
External consultant review (High-Risk only).
DPO review (GDPR special category data).]

============================================================
```

### Appendix C: Worked Example -- CISO Agent (AI-AGENT-001) AIA

This worked example demonstrates a completed Limited-Risk impact assessment for the CISO Agent, the primary AI system used for compliance artifact generation within the Helge Heupel Group.

---

**Report ID:** AIA-AI-AGENT-001-2026-01
**System ID:** AI-AGENT-001
**System Name:** CISO Agent
**Date:** 2026-02-22
**Classification:** Confidential

#### 1. System Identification

The CISO Agent is a Claude Code agent (Anthropic) operating as Chief Information Security Officer for the Helge Heupel Group. It produces compliance artifacts, risk assessments, policy documents, and audit evidence across ISO 27001, ISO 42001, TISAX, NIS2, and EU AI Act frameworks. Classified as Limited-Risk under EU AI Act Art. 50 and Tier 2 (Collaborator) under SDLC Usage Tier.

#### 2. Assessment Scope and Boundary

- **Features assessed:** All compliance artifact generation capabilities (policy drafting, risk assessment, SoA entries, procedure documents)
- **Data flows:** Inputs: compliance documents (Internal), ISO standard PDFs (Confidential), gap analysis documents (Internal). Outputs: policy documents (Internal), risk assessments (Confidential), compliance mappings (Internal)
- **System boundary:** Claude Code CLI, Anthropic API, HH Group compliance repository (Git)
- **Deployment entities:** GmbH, B.V.

#### 3. Stakeholder Identification

| Stakeholder | Category | Interaction |
|-------------|----------|-------------|
| CEO Helge Heupel | Direct user | Reviews and approves all CISO Agent outputs via PR |
| Human CISO (NorthGRC) | Indirect user | Validates risk assessments in workshop; consults on outputs |
| CTO | Indirect user | Consumes architecture-related compliance artifacts |
| External auditors | End consumer | Rely on compliance artifacts for certification decisions |
| BearingPoint consultant | Indirect user | Reviews compliance artifacts for alignment |

#### 4. Assessment Methodology

- **Methods:** Qualitative stakeholder impact review, scenario analysis (3 adverse scenarios), document review of data handling practices
- **ISO 42005 alignment:** Steps 1-8 of this procedure followed in sequence
- **Data sources:** AI System Registry entry, agent prompt configuration, Git commit history, output review records

#### 5. Findings per Impact Dimension

**5.1 Fairness: Rating 1 (No concern)**
- The CISO Agent does not process data about individuals or make decisions affecting individuals. It generates compliance documentation. No fairness concern is applicable.

**5.2 Safety: Rating 2 (Minimal)**
- The CISO Agent produces draft compliance artifacts. All outputs are reviewed by CEO before acceptance (Trust Level 2). No output reaches customers or production without human approval. Incorrect compliance guidance could cause indirect harm (failed audit, regulatory nonconformity), but the HITL gate prevents unreviewed outputs from taking effect.
- **Adverse scenario:** CISO Agent produces incorrect ISO 42001 interpretation; CEO accepts without thorough review. Consequence: audit finding. Mitigation: dual review (CEO + human CISO for risk-related outputs).

**5.3 Privacy: Rating 3 (Moderate)**
- The CISO Agent processes Confidential documents (ISO standard PDFs, risk assessments containing organizational security posture details). It does not process personal data about individuals. However, risk assessments may reference named roles, and compliance artifacts reference organizational structure.
- Data is transmitted to Anthropic API under Anthropic's enterprise terms (no training on customer data). Data minimization: the agent accesses only files within the compliance repository scope.

**5.4 Transparency: Rating 1 (Fully met)**
- All CISO Agent outputs carry Git commit attribution identifying the author as "CISO Agent." YAML frontmatter in every document includes `author: CISO Agent`. PR descriptions state that content is AI-generated. Stakeholders (CEO, human CISO, auditors) are fully aware of the AI nature of the outputs. EU AI Act Art. 50 transparency obligation is met.

**5.5 Environmental: Rating 1 (Negligible)**
- The CISO Agent operates via API calls to Anthropic's infrastructure. HH does not train AI models. Computational footprint is limited to inference API calls for compliance document generation. Anthropic publishes sustainability information for their infrastructure. No material environmental impact from CISO Agent operations.

**5.6 Individual Rights: Rating 1 (No concern)**
- The CISO Agent does not interact with external individuals. It does not profile individuals, make decisions affecting individuals, or process individual-level data. All outputs are organizational compliance artifacts consumed by internal stakeholders.

#### 6. Threshold Comparison Results

| Dimension | Rating | Threshold | Met? |
|-----------|--------|-----------|------|
| Fairness | 1 | N/A | N/A |
| Safety | 2 | HITL gate present | Yes |
| Privacy | 3 | Data minimization per output type | Yes (Confidential data transmitted under enterprise terms; no personal data) |
| Transparency | 1 | All outputs identifiable as AI-generated | Yes |
| Environmental | 1 | Provider commitments documented | Yes |
| Individual Rights | 1 | N/A | N/A |

#### 7. Mitigation Actions

No mitigations required. All thresholds are met. The highest dimension rating is Privacy at 3 (Moderate), which is within the ACCEPTABLE WITH CONDITIONS range. The condition is already satisfied: data transmission to Anthropic occurs under enterprise terms with no-training guarantees.

**Recommended monitoring enhancement:** Periodic review (quarterly) of Anthropic's data handling terms to confirm continued compliance with HH data classification requirements.

#### 8. Residual Impact Statement

**Overall outcome: ACCEPTABLE**

The CISO Agent operates with minimal impact across all dimensions. The primary consideration is Privacy (rating 3) due to Confidential data transmission to Anthropic API. This is mitigated by enterprise data handling terms, no-training guarantees, and data minimization practices. All other dimensions are rated 1-2 with no concerns.

#### 9. Assessor Details

| Team Member | Role | Qualifications |
|-------------|------|---------------|
| CISO Agent | Lead assessor (draft) | ISO 27001/42001 compliance expertise; domain knowledge of all HH AI systems |
| CEO Helge Heupel | Approver | Organizational accountability; system owner knowledge |

#### 10. Approval

- **CEO Approval:** [CEO-SIGNOFF-REQUIRED] via Git PR merge
- **External Review:** Not required (Limited-Risk system)
- **Git PR Reference:** [To be filled upon PR creation]

---

## 9. Integration with AI Risk Assessment

The AI Impact Assessment and AI Risk Assessment (HH-AIMS-RMA-001) are complementary processes within the AIMS. Their integration ensures comprehensive AI governance.

### Risk Assessment Informs Impact Assessment

- Risk assessment results (HH-AIMS-RMA-001, Step 3) include the 5th impact dimension (Individual/Society). Systems with Individual/Society impact >= 3 are automatically flagged for focused impact assessment.
- Risk treatment decisions may trigger impact reassessment when mitigations change the system's operational profile.
- The risk register entry for each AI system (`risk-references` field) links to the impact assessment findings.

### Impact Assessment Informs Risk Assessment

- Impact assessment findings may reveal new risks not previously identified in the risk assessment.
- Threshold exceedances in the AIA may require risk register updates (new risks or reclassification of existing risks).
- Mitigation actions from the AIA may be implemented as risk treatment controls.

### Shared Registry Linkage

Both processes update the AI System Registry:

| Registry Field | Updated By |
|---------------|-----------|
| `last-risk-assessment` | AI Risk Assessment (HH-AIMS-RMA-001) |
| `last-impact-assessment` | AI Impact Assessment (this procedure) |
| `risk-references` | AI Risk Assessment |
| `applicable-controls` | Both (ISO 42001 Annex A controls informed by both assessments) |
| `conformity-status` | Both (overall conformity reflects both risk and impact assessment currency) |

### Process Sequence

For new AI systems, the recommended sequence is:
1. **Register** the AI system in the AI System Registry
2. **Classify** the system using the dual-axis framework (HH-AIMS-RMA-001, Section 4)
3. **Assess risks** per HH-AIMS-RMA-001 (7-step process)
4. **Assess impacts** per this procedure (8-step process)
5. **Update registry** with assessment dates and references

---

## 10. Startup Phase Simplification

At Startup, all 11 registered AI systems are classified as **Limited-Risk** under EU AI Act Art. 50. The impact assessment for Limited-Risk systems focuses on **transparency obligations and individual/societal impact dimensions**.

### What Applies at Startup

- **Focused assessment** (not full assessment) for all 11 AI systems
- **CEO approval** sufficient (no external consultant review required)
- **Transparency dimension** is the primary compliance driver (Art. 50 obligations)
- **Privacy dimension** is relevant for systems processing Confidential data (CISO Agent, CTO Agent, AppSec Agent)
- **6 impact dimensions** assessed for completeness, but most systems will rate 1-2 on most dimensions
- **Annual periodic review** for all assessed systems

### What Does Not Apply at Startup (but is documented)

- **Full High-Risk assessment process** (Art. 9-15 conformity assessment): Documented in Sections 3-5 but not yet exercised. When Verity product AI features are finalized, a reclassification assessment will determine if High-Risk assessment is required.
- **External consultant review:** Not required for Limited-Risk systems. External review process documented in Step 7 for future High-Risk assessments.
- **Quantitative bias testing:** Most current AI systems (7 agents, 2 third-party tools) do not produce outputs where disparate impact measurement is applicable. Verity product AI (VE, EAM) will require quantitative bias testing when deployed.
- **Full DPIA coordination:** No current AI system processes special category personal data (GDPR Art. 9). DPIA coordination process documented for future use.

### Startup Assessment Priority

| Priority | AI Systems | Rationale |
|----------|-----------|-----------|
| 1 (First) | AI-PROD-001 (Verity VE), AI-PROD-002 (Verity EAM) | Customer-facing; Tier 3 (Decision Support); highest potential individual impact |
| 2 (Second) | AI-AGENT-001 (CISO Agent) | Highest-volume development AI; processes Confidential data; compliance artifact quality affects audit outcomes |
| 3 (Third) | Remaining 6 Claude Code agents | Development AI at Tier 2; lower individual impact; similar profile assessments |
| 4 (Fourth) | AI-3PARTY-001 (ChatGPT), AI-3PARTY-002 (Codex) | Third-party tools; HH does not control model; transparency focus |

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
- **Extraordinary review triggers:** New EU AI Act implementing acts, ISO 42005 updates, High-Risk system deployment, AI incident with stakeholder impact, audit finding on AIA process

### Related Documents

| Document ID | Title | Relationship |
|-------------|-------|-------------|
| HH-AIMS-RMA-001 | AI Risk Assessment Procedure | AI risk results inform impact assessment triggers |
| HH-ISMS-RMA-001 | Risk Assessment Methodology | Base methodology with 5x5 matrix used for risk analysis |
| HH-AIMS-POL-001 | AI Policy | AI governance principles, classification, prohibited practices |
| HH-GOV-Startup-v1.0 | Governance Model | Meeting structure for monitoring review |
| HH-IMS-CTX-001 | IMS Context | IMS integration framework |

---

*Document: procedures/ai-impact-assessment-procedure.md*
*Document ID: HH-AIMS-AIA-001*
*AI Impact Assessment Procedure for the Helge Heupel Group*
