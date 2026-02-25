---
document-id: HH-ISMS-PROC-007
title: "Internal Audit Program"
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

# Internal Audit Program

## 1. Purpose and Scope

This document establishes the internal audit program for the **Helge Heupel Group** Integrated Management System (IMS), satisfying the requirements of:

- **ISO/IEC 27001:2022 cl. 9.2** — Internal audit of the Information Security Management System (ISMS)
- **ISO/IEC 42001:2023 cl. 9.2** — Internal audit of the AI Management System (AIMS)

### Scope

The internal audit program covers all applicable controls defined in both Statements of Applicability:

| Statement of Applicability | Document ID | Total Controls | Applicable |
|----------------------------|-------------|:--------------:|:----------:|
| ISO 27001:2022 Annex A | HH-ISMS-SOA-001 | 93 | 86 |
| ISO 42001:2023 Annex A | HH-AIMS-SOA-001 | 38 | 38 |

The audit universe encompasses **124 applicable controls** across both management systems. The IMS Context (HH-IMS-CTX-001) establishes the combined management system approach; this audit program follows that integration by conducting a **single combined IMS audit** covering ISMS and AIMS simultaneously.

### Applicability

This procedure applies to:

- All personnel subject to audit (CEO, CTO, CISO, IT Pentester/Super Admin)
- The External CISO (NorthGRC) as lead auditor
- The CISO Agent as evidence gathering assistant
- All information systems, AI systems, policies, procedures, and records within the ISMS and AIMS scope

---

## 2. Normative References

### Standards and Clauses

| Reference | Description |
|-----------|-------------|
| ISO/IEC 27001:2022 cl. 9.2 | ISMS internal audit requirements |
| ISO/IEC 42001:2023 cl. 9.2 | AIMS internal audit requirements |
| ISO 19011:2018 | Guidelines for auditing management systems |
| HH-IMS-CTX-001 | IMS Context — combined management system approach |
| HH-ISMS-SOA-001 | ISO 27001 Statement of Applicability (86 applicable controls) |
| HH-AIMS-SOA-001 | ISO 42001 Statement of Applicability (38 applicable controls) |
| HH-GOV-Startup-v1.0 | Governance model — meeting structure and decision authority |
| HH-RACI-Startup-v1.0 | RACI matrix — row 24 (Internal audit execution: CISO R, CEO A) |

### Related Procedures

| Document ID | Title | Relationship |
|-------------|-------|--------------|
| HH-ISMS-PROC-008 | Management Review Procedure | Audit results are a mandatory management review input per cl. 9.3.2(d.3). NCR status feeds into input (d.1). |
| HH-ISMS-PROC-001 | Incident Management Procedure | Audit findings that constitute security events are reported per the incident management procedure. |
| HH-ISMS-PROC-004 | Change Management Procedure | Corrective actions requiring system changes follow the change management procedure. |
| HH-AIMS-RMA-001 | AI Risk Assessment Procedure | AI risk assessment outcomes inform audit focus areas for AIMS controls. |

---

## 3. Audit Program Structure

### 3.1 Audit Cycle

The internal audit program operates on an **annual cycle**. At Startup phase, the primary milestone is:

> **One full-scope internal audit must be completed before the Stage 1 certification audit (target: mid-May 2026).** This demonstrates to the certification body that the audit program exists and has been exercised.

Subsequent audits follow an annual cadence, with the full cycle aligned to the management review calendar (quarterly reviews at the Monthly Strategic meeting per HH-ISMS-PROC-008).

### 3.2 Audit Scope

**Full-scope audit:** All 86 applicable ISO 27001 Annex A controls + all 38 applicable ISO 42001 Annex A controls. Both Statements of Applicability define the audit universe.

| Scope Component | Source | Controls |
|----------------|--------|:--------:|
| Organizational controls (A.5) | HH-ISMS-SOA-001 | 37 applicable |
| People controls (A.6) | HH-ISMS-SOA-001 | 8 applicable |
| Physical controls (A.7) | HH-ISMS-SOA-001 | 7 applicable |
| Technological controls (A.8) | HH-ISMS-SOA-001 | 34 applicable |
| AI policies (A.2) | HH-AIMS-SOA-001 | 3 applicable |
| AI internal organization (A.3) | HH-AIMS-SOA-001 | 2 applicable |
| AI resources (A.4) | HH-AIMS-SOA-001 | 5 applicable |
| AI impact assessment (A.5) | HH-AIMS-SOA-001 | 4 applicable |
| AI system lifecycle (A.6) | HH-AIMS-SOA-001 | 9 applicable |
| AI data (A.7) | HH-AIMS-SOA-001 | 5 applicable |
| AI information for interested parties (A.8) | HH-AIMS-SOA-001 | 4 applicable |
| AI system use (A.9) | HH-AIMS-SOA-001 | 3 applicable |
| AI third-party and customer (A.10) | HH-AIMS-SOA-001 | 3 applicable |

**Focused audit (subsequent years):** After the first full-scope audit, focused audits may be conducted targeting high-risk areas, controls with previous nonconformities, or controls where the risk assessment indicates elevated risk. Focused audits must cover a minimum of 50% of applicable controls per year, ensuring full coverage over a 2-year rolling period.

### 3.3 Audit Type

**Combined IMS audit:** A single audit engagement covers both ISMS and AIMS controls simultaneously, consistent with the Integrated Management System approach defined in HH-IMS-CTX-001. This avoids duplicating effort on shared Annex SL clauses (context, leadership, support, performance evaluation, improvement) while ensuring AI-specific controls receive dedicated assessment.

### 3.4 Decision Tree: Audit Program Flow

```
Annual audit cycle begins
    |
    v
Define scope from SoAs (HH-ISMS-SOA-001 + HH-AIMS-SOA-001)
    |
    v
Is this the first audit? ---> Yes: Full-scope (all 124 applicable controls)
    |                         No: Review risk assessment + previous findings
    |                             |
    v                             v
Select auditor (NorthGRC)    Determine focused scope (minimum 50% controls)
    |                             |
    +-----------------------------+
    |
    v
Plan audit (schedule, evidence requests, notifications)
    |
    v
Execute audit (evidence collection, interviews, observation, scoring)
    |
    v
Report findings (finding classification, scoring, recommendations)
    |
    v
Track corrective actions (NCR creation, responsible assignment, deadlines)
    |
    v
Feed results into management review (HH-ISMS-PROC-008 input d.1 and d.3)
    |
    v
Cycle complete --- monitor corrective actions until next audit
```

---

## 4. Auditor Competence and Independence

### 4.1 Lead Auditor: External CISO (NorthGRC)

Per ISO 27001 cl. 9.2: *"Auditors shall not audit their own work."* The Helge Heupel Group achieves auditor independence by appointing the **External CISO (NorthGRC)** as lead auditor for all internal audits.

| Attribute | Detail |
|-----------|--------|
| **Organization** | NorthGRC |
| **Role** | Lead Internal Auditor |
| **Qualifications** | ISO 27001 Lead Auditor certification, GRC platform expertise |
| **Independence basis** | External to HH operational processes; did not produce ISMS/AIMS documentation |
| **Audit authority** | Full access to all IMS documentation, systems, and personnel during audit |

### 4.2 CISO Agent Role: Evidence Gathering Assistant

The CISO Agent assists NorthGRC with evidence gathering but **does NOT audit its own outputs.** This distinction is critical because the CISO Agent produced most IMS documentation (policies, procedures, SoAs, risk assessments, AI registry entries).

| Permitted Activities | Prohibited Activities |
|---------------------|-----------------------|
| Collecting documents from Git repositories | Assessing compliance of documents it authored |
| Generating control status reports from SoA data | Scoring controls that rely on its own outputs |
| Preparing evidence packages organized by control group | Rendering audit opinions on ISMS/AIMS effectiveness |
| Answering factual questions about document content | Classifying its own outputs as conforming/nonconforming |

### 4.3 Independence Boundary Rule

> **Any evidence item produced by the CISO Agent must be independently verified by NorthGRC.** The audit checklist (Section 9) marks the evidence source for every control so NorthGRC knows which items require independent assessment versus which are system-generated or human-produced evidence.

**Evidence source classification:**

| Source Category | Definition | Auditor Treatment |
|----------------|------------|-------------------|
| **CISO Agent output** | Document authored or substantially drafted by the CISO Agent (policies, procedures, SoAs, risk assessments, AI registry) | Requires NorthGRC independent review — verify content accuracy, completeness, and operational effectiveness independently |
| **System-generated** | Automated evidence from infrastructure (Azure logs, Git history, deployment logs, monitoring data, CI/CD pipeline results) | Verify authenticity and completeness; lower independence risk |
| **Human-produced** | Documents authored by human personnel (meeting minutes, CEO sign-offs, manual access reviews, training records) | Standard audit verification |

### 4.4 Audit Team Composition

| Role | Person/Entity | Responsibility |
|------|---------------|----------------|
| **Lead Auditor** | External CISO (NorthGRC) | Plans and conducts audit, renders findings, writes audit report |
| **Evidence Assistant** | CISO Agent | Collects and organizes evidence per NorthGRC's request list |
| **Auditee (Governance)** | CEO Helge Heupel | Responds to governance, policy, and risk acceptance audit questions |
| **Auditee (Technical)** | CTO | Responds to architecture, AI system, and technical control questions |
| **Auditee (Infrastructure)** | IT Pentester/Super Admin | Responds to infrastructure, access control, and platform questions |
| **Auditee (Security)** | CISO | Responds to security operations, compliance, and procedure questions |

---

## 5. Audit Planning

For each audit cycle, NorthGRC (with CISO Agent assistance for evidence gathering) completes the following planning activities:

### 5.1 Pre-Audit Review

1. **Review previous audit results** — Examine prior audit report, open corrective actions, and NCR status from `audits/` directory.
2. **Review risk assessment** — Examine current risk register (`risks/` directory) to identify high-risk areas requiring focused attention. AI risks (tagged `ai-risk: true`) receive dedicated focus per ISO 42001 cl. 9.2.
3. **Review management review outputs** — Check action items from recent management review minutes (`management-reviews/` directory) for audit-relevant decisions.

### 5.2 Scope Determination

| Question | First Audit | Subsequent Audits |
|----------|:-----------:|:-----------------:|
| Scope | Full (all 124 applicable controls) | Risk-based selection (minimum 50%) |
| Duration | 2-3 days (on-site or remote) | 1-2 days |
| Focus areas | All control groups | High-risk areas + previous nonconformities |

### 5.3 Audit Schedule Preparation

NorthGRC prepares the audit schedule at least **2 weeks before the audit start date**, including:

- Audit dates and daily agenda
- Auditee interview schedule (CEO, CTO, IT Pentester, CISO)
- Control groups to be assessed each day
- Evidence request list organized by control group (CISO Agent assists with pre-collection)

### 5.4 Audit Notification

NorthGRC issues a formal audit notification to auditees at least **1 week before the audit start date**, containing:

- Audit scope and objectives
- Audit schedule
- Evidence request list
- Auditee responsibilities
- Confidentiality requirements

---

## 6. Audit Execution

### 6.1 Opening Meeting

**Led by:** NorthGRC (Lead Auditor)
**Attendees:** CEO Helge Heupel, CTO, IT Pentester, CISO

**Agenda:**
- Audit scope and objectives
- Audit methodology (ISO 19011:2018 principles)
- Schedule and logistics
- Independence statement (NorthGRC confirms no conflicts of interest)
- Evidence collection approach and CISO Agent role boundaries
- Confidentiality agreement

### 6.2 Evidence Collection

NorthGRC employs four evidence collection methods:

| Method | Description | Examples |
|--------|-------------|---------|
| **Document review** | Examination of policies, procedures, records, and evidence artifacts | IS Policy (HH-ISMS-POL-001), AI Policy (HH-AIMS-POL-001), risk register, SoAs, AI System Registry, procedures |
| **Interview** | Structured conversations with auditees to verify understanding and operational practice | CEO on risk acceptance, CTO on architecture decisions, IT Pentester on access reviews, CISO on compliance posture |
| **Observation** | Direct examination of system configurations, access controls, and operational processes | Azure Entra ID configuration, MFA enforcement, Git branch protection rules, CI/CD pipeline configuration |
| **Automated evidence** | System-generated records providing objective evidence of control operation | Git commit logs, PR approval history, deployment logs, Azure activity logs, monitoring alerts |

### 6.3 Control Assessment

For each applicable control in the SoA, NorthGRC assesses:

1. **Implementation status** — Is the control implemented as described in the SoA?
2. **Operational effectiveness** — Is the control operating as intended and producing expected outcomes?
3. **Evidence completeness** — Is there sufficient documented evidence to demonstrate both implementation and effectiveness?
4. **Evidence source** — Was this evidence produced by the CISO Agent (requires independent verification), system-generated, or human-produced?

Each control receives a score (Section 8) and a finding classification (Section 7).

### 6.4 Closing Meeting

**Led by:** NorthGRC (Lead Auditor)
**Attendees:** CEO Helge Heupel, CTO

**Agenda:**
- Summary of audit activities completed
- Preliminary findings by category (conforming, OFI, minor NC, major NC)
- Highlight any major nonconformities requiring immediate attention
- Corrective action timeline expectations
- Next steps (formal audit report delivery within 5 business days)

---

## 7. Audit Finding Classification

| Classification | Definition | Response Required |
|---------------|------------|-------------------|
| **Conforming** | Control is implemented and operating effectively. Evidence is current and complete. | None — document in audit report as conforming. |
| **Opportunity for Improvement (OFI)** | Control is conforming but could be more effective or efficient. No nonconformity exists. | Document recommendation. Address within next review cycle. No corrective action required. |
| **Minor Nonconformity** | Control is partially implemented or evidence is incomplete. No immediate risk to ISMS/AIMS effectiveness. | Corrective action within **30 days**. Root cause analysis required. NCR created in `audits/NCR-{YYYY}-{NNN}.md`. |
| **Major Nonconformity** | Control is not implemented, or a significant gap exists that undermines ISMS/AIMS effectiveness. | **Immediate corrective action** required. CEO notification within 24 hours. Must be resolved before Stage 1 certification audit. NCR created with "Major" classification. |

### Finding Escalation

```
Finding identified by NorthGRC
    |
    v
Is the control implemented? ---> No: Major Nonconformity
    |                                  (CEO notification, immediate action)
    Yes
    |
    v
Is evidence complete and current? ---> No: Minor Nonconformity
    |                                        (30-day corrective action)
    Yes
    |
    v
Could the control be more effective? ---> Yes: Opportunity for Improvement
    |                                            (recommendation only)
    No
    |
    v
Conforming (document and proceed)
```

---

## 8. Scoring Criteria

Each applicable control is scored on a 4-point scale reflecting implementation maturity and evidence quality:

| Score | Rating | Definition |
|:-----:|--------|------------|
| **3** | Fully conforming | Evidence is complete, current, and demonstrates operational effectiveness. Control operates as designed with measurable outcomes. |
| **2** | Partially conforming | Control exists but evidence gaps or operational weaknesses are identified. Intent is met but full operationalization is pending. |
| **1** | Minimally conforming | Significant gaps exist. Control meets basic intent but is not fully operational. May rely on compensating measures. |
| **0** | Non-conforming | Control is not implemented or no evidence exists. Corresponds to a Major Nonconformity finding. |

### Aggregate Scoring

After scoring all applicable controls, NorthGRC calculates:

| Metric | Formula |
|--------|---------|
| **ISMS Conformity Index** | Sum of scores for 86 applicable ISO 27001 controls / (86 x 3) x 100% |
| **AIMS Conformity Index** | Sum of scores for 38 applicable ISO 42001 controls / (38 x 3) x 100% |
| **IMS Composite Index** | Sum of all scores / (124 x 3) x 100% |

**Stage 1 readiness threshold:** An IMS Composite Index above 70% with zero Major Nonconformities is the recommended target for Stage 1 audit readiness.

---

## 9. Audit Checklist Template

The following template demonstrates the checklist structure used during audit execution. The full checklist is generated from both SoAs prior to each audit (NorthGRC + CISO Agent collaboration for evidence pre-collection).

### Checklist Structure

| Control ID | Control Name | Evidence Required | Evidence Source | Auditor Score (0-3) | Finding Classification | Notes |
|------------|-------------|-------------------|-----------------|:--------------------:|----------------------|-------|
| *[ID]* | *[Name]* | *[Specific evidence]* | *[Source flag]* | *[0-3]* | *[C/OFI/Minor/Major]* | *[Auditor notes]* |

### Evidence Source Flags

- **CISO-AGENT** — CISO Agent output; requires NorthGRC independent review
- **SYSTEM** — System-generated automated evidence
- **HUMAN** — Human-produced document or record

### Sample Checklist Rows

#### ISO 27001 Annex A Controls

| Control ID | Control Name | Evidence Required | Evidence Source | Score | Classification | Notes |
|------------|-------------|-------------------|-----------------|:-----:|----------------|-------|
| A.5.1 | Policies for Information Security | IS Policy (HH-ISMS-POL-001), AI Policy (HH-AIMS-POL-001), CEO approval evidence | **CISO-AGENT** — requires NorthGRC independent review | | | Verify policy content, CEO sign-off via PR merge |
| A.5.24 | IS Incident Management Planning and Preparation | Incident Management Procedure (HH-ISMS-PROC-001), ICS-Lite role assignments, severity classification | **CISO-AGENT** — requires NorthGRC independent review | | | Verify procedure exists and roles are assigned |
| A.5.29 | IS During Disruption | BCP/DR Plan (HH-ISMS-PROC-002), RPO/RTO targets, Neon backup configuration | **CISO-AGENT** (procedure) + **SYSTEM** (backup config) | | | Verify backup schedule and recovery targets |
| A.8.9 | Configuration Management | Azure resource configurations, Git branch protection rules, CI/CD pipeline settings | **SYSTEM** — automated evidence from Azure/GitHub | | | Verify configurations match documented standards |
| A.8.32 | Change Management | Change Management Procedure (HH-ISMS-PROC-004), PR approval history, risk-tiered approval evidence | **CISO-AGENT** (procedure) + **SYSTEM** (Git PR logs) | | | Verify PR workflow matches procedure requirements |

#### ISO 42001 Annex A Controls

| Control ID | Control Name | Evidence Required | Evidence Source | Score | Classification | Notes |
|------------|-------------|-------------------|-----------------|:-----:|----------------|-------|
| A.2.2 | AI Policy | AI Policy (HH-AIMS-POL-001), prohibited practices list, semi-annual review evidence | **CISO-AGENT** — requires NorthGRC independent review | | | Verify AI Policy covers all ISO 42001 requirements |
| A.5.4 | AI Impact Assessment Process | AI Impact Assessment Procedure (HH-AIMS-IMA-001), completed assessments for Limited-Risk systems | **CISO-AGENT** — requires NorthGRC independent review | | | Verify assessments exist for all classified systems |
| A.6.2 | AI System Life Cycle | SDLC-Startup-v2.md, agent CLAUDE.md files, PR workflow for AI system changes | **CISO-AGENT** (SDLC doc) + **SYSTEM** (Git history) | | | Verify lifecycle governance is operational |
| A.10.3 | Third-Party AI Providers | Supplier Security Procedure (HH-ISMS-PROC-005), Anthropic/OpenAI service agreements, AI Registry entries | **CISO-AGENT** (procedure + registry) + **HUMAN** (agreements) | | | Verify third-party AI assessment and monitoring |

> **Note:** The full checklist covering all 124 applicable controls is generated from the SoA data files prior to each audit engagement. The CISO Agent pre-populates the "Evidence Required" and "Evidence Source" columns; NorthGRC validates the source classification and completes the scoring and classification columns during audit execution.

---

## 10. Corrective Action Tracking

### 10.1 Nonconformity Report (NCR) Process

For each minor or major nonconformity identified during the audit, a Nonconformity Report is created and tracked:

**NCR file location:** `audits/NCR-{YYYY}-{NNN}.md`
**Naming convention:** NCR-2026-001, NCR-2026-002, etc. (sequential per calendar year)

### 10.2 NCR Template

```yaml
---
ncr-id: NCR-{YYYY}-{NNN}
audit-date: YYYY-MM-DD
control-id: [A.X.Y or ISO 42001 A.X.Y]
control-name: [Control name]
classification: [minor | major]
auditor: NorthGRC
status: [open | in-progress | closed | verified]
---

# Nonconformity Report: NCR-{YYYY}-{NNN}

## Finding
[Description of the nonconformity as observed during audit]

## Evidence
[Specific evidence or lack thereof that led to this finding]

## Root Cause Analysis
[Analysis of why the nonconformity exists — completed by responsible person]

## Corrective Action Plan
[Specific actions to address the nonconformity]

| Action | Responsible | Target Date | Status |
|--------|------------|-------------|--------|
| [Action 1] | [Person] | YYYY-MM-DD | [open/done] |
| [Action 2] | [Person] | YYYY-MM-DD | [open/done] |

## Verification
**Verified by:** NorthGRC
**Verification date:** YYYY-MM-DD
**Verification method:** [Document review / re-assessment / evidence review]
**Result:** [Effective / Not effective — requires further action]
```

### 10.3 Corrective Action Responsibility

| Finding Category | Responsible Person | Timeline |
|-----------------|-------------------|----------|
| Technical corrective actions (infrastructure, configuration, code) | CTO | Minor: 30 days; Major: immediate |
| Governance corrective actions (policy, procedure, risk acceptance) | CEO Helge Heupel | Minor: 30 days; Major: immediate |
| Security corrective actions (access control, monitoring, incident response) | CISO | Minor: 30 days; Major: immediate |
| AI governance corrective actions (AI registry, AI risk, AI impact assessment) | CISO (with CTO support) | Minor: 30 days; Major: immediate |

### 10.4 Corrective Action Verification

NorthGRC verifies corrective action effectiveness through one of the following methods:

- **Interim review:** For major nonconformities, NorthGRC conducts a focused review within 2 weeks of the reported correction date.
- **Next audit cycle:** For minor nonconformities, NorthGRC verifies effectiveness during the next scheduled internal audit.
- **Evidence review:** For documentation-based corrections, NorthGRC reviews the updated evidence via Git PR (remote verification).

### 10.5 Management Review Integration

Corrective action status feeds directly into the management review process (HH-ISMS-PROC-008):

- **Input (d.1):** Nonconformities and corrective actions — NCR register summary presented at each quarterly management review.
- **Input (d.3):** Audit results — Full audit report presented at the quarterly management review following audit completion.

---

## 11. Clause Mapping

This procedure satisfies the following mandatory management system clauses:

| Clause | Standard | Requirement | How This Procedure Satisfies It |
|--------|----------|-------------|--------------------------------|
| cl. 9.2.1 | ISO 27001:2022 | The organization shall conduct internal audits at planned intervals | Section 3 establishes annual audit cycle with first audit before Stage 1 |
| cl. 9.2.2 | ISO 27001:2022 | The organization shall plan, establish, implement, and maintain audit programme(s) | Sections 3-6 define the complete audit program including scope, methodology, and execution |
| cl. 9.2 | ISO 42001:2023 | Internal audit of the AIMS | Sections 3 and 9 extend audit scope to include all 38 applicable AIMS controls |

> **Note:** Internal audit is a mandatory management system requirement under cl. 9.2, not an Annex A control. No Annex A control directly maps to "internal audit." The audit *program* assesses Annex A controls; the program itself satisfies a clause requirement.

---

## 12. Regulatory Obligations

| Framework | Requirement | How Addressed |
|-----------|-------------|---------------|
| **ISO 27001:2022 cl. 9.2** | Internal audit at planned intervals, considering importance of processes and previous audit results | Annual audit cycle (Section 3), risk-based scope determination (Section 5), finding tracking (Section 10) |
| **ISO 42001:2023 cl. 9.2** | Internal audit covering AIMS requirements | Combined IMS audit scope includes all 38 AIMS controls (Section 3), AI-specific checklist rows (Section 9) |
| **TISAX (VDA ISA Chapter 8)** | Audit requirements for information security assessment | Full-scope audit covers all TISAX-relevant ISO 27001 controls. TISAX assessment readiness verified as part of audit program. |
| **NIS2 (informational)** | Supervisory audits and compliance assessment | At Startup, NIS2 audit requirements are informational. Internal audit program provides the foundation for demonstrating compliance to BSI (GmbH) and NCSC-NL (B.V.) supervisory audits at Growth phase. |

---

## 13. Document Control

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

---

*Document: procedures/internal-audit.md*
*Document ID: HH-ISMS-PROC-007*
*Internal Audit Program for the Helge Heupel Group*
