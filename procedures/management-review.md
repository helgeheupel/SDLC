---
document-id: HH-ISMS-PROC-008
title: "Management Review Procedure"
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

# Management Review Procedure

## 1. Purpose and Scope

This procedure defines the management review process for the **Helge Heupel Group** Integrated Management System (IMS), satisfying the requirements of:

- **ISO/IEC 27001:2022 cl. 9.3** — Management review of the Information Security Management System (ISMS)
- **ISO/IEC 42001:2023 cl. 9.3** — Management review of the AI Management System (AIMS)

Management reviews ensure the IMS remains **suitable** (appropriate to the organization's context), **adequate** (sufficient to address risks and objectives), and **effective** (achieving intended outcomes) per cl. 9.3.1 of both standards.

### Single Combined IMS Review

Per the Integrated Management System approach defined in HH-IMS-CTX-001, a **single management review** covers both ISMS and AIMS. The ISO Harmonized Structure (Annex SL) shared by ISO 27001 and ISO 42001 enables this integration: shared clause numbering means the mandatory inputs from both standards can be addressed in one structured meeting, with AIMS-specific inputs additive to the ISO 27001 baseline.

---

## 2. Normative References

### Standards and Clauses

| Reference | Description |
|-----------|-------------|
| ISO/IEC 27001:2022 cl. 9.3.1 | General requirements for management review |
| ISO/IEC 27001:2022 cl. 9.3.2 | Mandatory management review inputs |
| ISO/IEC 27001:2022 cl. 9.3.3 | Mandatory management review outputs |
| ISO/IEC 42001:2023 cl. 9.3.1 | General requirements for AIMS management review |
| ISO/IEC 42001:2023 cl. 9.3.2 | Mandatory AIMS management review inputs (superset of ISO 27001) |
| ISO/IEC 42001:2023 cl. 9.3.3 | Mandatory AIMS management review outputs |
| HH-IMS-CTX-001 | IMS Context — combined management system approach, AIMS PDCA cycle |
| HH-GOV-Startup-v1.0 | Governance model — Monthly Strategic meeting as review vehicle |
| HH-RACI-Startup-v1.0 | RACI matrix — row 25 (Management review preparation: CISO R, CEO A) |

### Related Procedures

| Document ID | Title | Relationship |
|-------------|-------|--------------|
| HH-ISMS-PROC-001 | Incident Management Procedure | Incident reports feed into input (d.1) nonconformities and corrective actions |
| HH-ISMS-PROC-002 | BCP/DR Plan | BCP testing results feed into input (d.2) monitoring and measurement |
| HH-ISMS-PROC-003 | Access Control Procedure | Access review results feed into input (d.2) monitoring and measurement |
| HH-ISMS-PROC-004 | Change Management Procedure | Change statistics feed into input (d.2) monitoring and measurement |
| HH-ISMS-PROC-005 | Supplier Security Procedure | Supplier assessment results feed into input (b) external issues and (e) interested party feedback |
| HH-ISMS-PROC-006 | HR Security Procedure | Training completion rates feed into input (d.4) IS objective fulfilment |
| HH-ISMS-PROC-007 | Internal Audit Program | **Primary input:** Audit results feed into input (d.3). NCR status feeds into input (d.1). |
| HH-AIMS-RMA-001 | AI Risk Assessment Procedure | AI risk assessment outcomes feed into AIMS input (AI-2) |
| HH-AIMS-IMA-001 | AI Impact Assessment Procedure | AI impact assessment results feed into AIMS input (AI-2) |
| HH-ISMS-POL-001 | Information Security Policy | IS objectives (Section 3) provide the baseline for input (d.4) fulfilment assessment |
| HH-AIMS-POL-001 | AI Policy | AIMS objectives provide the baseline for AIMS input (AI-1) performance assessment |

---

## 3. Review Vehicle and Schedule

### 3.1 Review Vehicle: Monthly Strategic Meeting

The management review is conducted as part of the **Monthly Strategic meeting** already established in the governance model (HH-GOV-Startup-v1.0, Meeting 2).

| Attribute | Detail |
|-----------|--------|
| **Meeting** | Monthly Strategic Governance |
| **Frequency** | Monthly (60 minutes) |
| **IMS review integration** | IMS review inputs are incorporated into the standing agenda alongside strategic, OKR, and resource items |

**Why this vehicle:** A 6-person organization does not require a separate management review meeting. The Monthly Strategic meeting already covers compliance posture (agenda item 2), risk register review (agenda item 3), and resource allocation (agenda item 4) — which together address the majority of cl. 9.3.2 mandatory inputs. Extending the agenda with structured IMS input coverage avoids governance overhead while maintaining audit-ready evidence.

### 3.2 Review Schedule

The management review operates on a **monthly cadence with quarterly depth escalation:**

```
Is this a quarterly review month? (January, April, July, October)
    |
    +---> Yes: FULL IMS REVIEW
    |           All mandatory inputs per cl. 9.3.2 (ISMS + AIMS)
    |           All mandatory outputs per cl. 9.3.3
    |           Full minutes template (Section 8)
    |           NorthGRC invited as observer
    |
    +---> No: MONTHLY ACTION REVIEW
              Status of actions from previous reviews — input (a)
              Any urgent emerging issues — inputs (b), (c)
              Corrective action tracking — input (d.1)
              Abbreviated minutes (action tracking focus)
```

| Review Type | Months | Duration | Scope | Minutes Template |
|-------------|--------|----------|-------|-----------------|
| **Full IMS Review** | Jan, Apr, Jul, Oct | 60 min (full meeting) | All cl. 9.3.2 inputs (ISMS + AIMS) + cl. 9.3.3 outputs | Full template (Section 8) |
| **Monthly Action Review** | Feb, Mar, May, Jun, Aug, Sep, Nov, Dec | 15-20 min (within meeting) | Action item tracking + urgent issues only | Abbreviated (action items + emerging issues) |

### 3.3 Attendees

| Role | Person/Entity | Full IMS Review | Monthly Action Review |
|------|---------------|:---------------:|:---------------------:|
| **Chair** | CEO Helge Heupel | Mandatory | Mandatory |
| **Technical Lead** | CTO | Mandatory | Mandatory |
| **Security Lead** | CISO | Mandatory | Mandatory |
| **External Auditor** | NorthGRC (External CISO) | Invited | Not required |
| **Preparation** | CISO Agent | Prepares all input materials | Prepares action status update |
| **Strategic Input** | Strategy Partner | As per Monthly Strategic attendance | As per Monthly Strategic attendance |
| **Financial Input** | Finance Industry Senior Manager | When financial items on agenda | Not required |

---

## 4. ISO 27001 cl. 9.3.2 Mandatory Inputs

The following inputs are **mandatory** for each full IMS review (quarterly). Top management must consider these inputs per cl. 9.3.2.

| # | Input | Source | Presenter | Frequency |
|---|-------|--------|-----------|-----------|
| **(a)** | Status of actions from previous management reviews | Previous meeting minutes (`management-reviews/` directory) | CISO | Monthly |
| **(b)** | Changes in external and internal issues relevant to the ISMS | Environmental scan, regulatory updates (NIS2, EU AI Act, TISAX scope), competitive landscape changes | CISO | Quarterly |
| **(c)** | Changes in needs and expectations of interested parties | Stakeholder feedback register, customer security questionnaires, BearingPoint input, partner assessments | CEO | Quarterly |
| **(d.1)** | Nonconformities and corrective actions | NCR register from HH-ISMS-PROC-007 (`audits/NCR-*.md`), corrective action log | CISO | Monthly |
| **(d.2)** | Monitoring and measurement results | IS objective dashboard, KPI trends, access review results, BCP test results, change management statistics | CISO | Quarterly |
| **(d.3)** | Audit results | Internal audit report from HH-ISMS-PROC-007 (IMS Conformity Index, finding summary), external audit findings | CISO | Quarterly (when audit results available) |
| **(d.4)** | Fulfilment of information security objectives | IS objective status — 7 objectives per IS Policy (HH-ISMS-POL-001) Section 3 with measurable KPIs and targets | CISO | Quarterly |
| **(e)** | Feedback from interested parties | Customer feedback on security posture, BearingPoint gap analysis input, partner security assessments, TISAX assessment feedback | CEO | Quarterly |
| **(f)** | Results of risk assessment and status of risk treatment plan | Risk register summary (`risks/` directory), treatment progress by risk tier, residual risk trends, risk acceptance decisions | CISO | Quarterly |
| **(g)** | Opportunities for continual improvement | Improvement register, post-incident review action items, audit OFI recommendations, procedure enhancement proposals | CTO | Quarterly |

---

## 5. ISO 42001 cl. 9.3.2 Additional AIMS Inputs

In addition to the ISO 27001 inputs above, the following **AIMS-specific inputs** are mandatory for the combined IMS review. These address the AI-specific aspects of the management system per ISO 42001 cl. 9.3.2.

| # | Input | Source | Presenter | Frequency |
|---|-------|--------|-----------|-----------|
| **(AI-1)** | AI system performance against AIMS objectives | AI System Registry metrics (ai-registry/), AIMS objective KPIs (7 objectives per aims-objectives.md), SLO status for AI-powered services | CTO | Quarterly |
| **(AI-2)** | AI risk assessment status and treatment progress | AI risk entries (`ai-risk: true`) from risk register, AI impact assessment outcomes (HH-AIMS-IMA-001), residual AI risk levels, individual/society impact scores | CISO | Quarterly |
| **(AI-3)** | Feedback on AI systems from interested parties | Customer feedback on AI features (Verity VE/EAM AI capabilities), regulatory guidance on AI (EU AI Act implementing acts, ISO 42001 auditor guidance), BearingPoint AI governance input | CEO | Quarterly |
| **(AI-4)** | AI incident summary and lessons learned | AI-specific incidents from HH-ISMS-PROC-001 Section 10 (bias detection, hallucination impact, unauthorized data processing, model drift), post-incident review findings | CTO | Quarterly |
| **(AI-5)** | Changes in AI regulatory landscape | EU AI Act enforcement timeline updates, ISO 42001 guidance evolution, national AI regulations affecting GmbH/B.V./Inc., AI-related amendments to GDPR guidance | CISO | Quarterly |
| **(AI-6)** | AI governance metrics | Trust level compliance (all agents at Level 2), prohibited practice monitoring (14 practices per AI Policy Section 5), AI Registry completeness (target: 100%), AIA completion rate | CISO | Quarterly |

> **Combined coverage:** Inputs (a) through (g) plus (AI-1) through (AI-6) together satisfy both ISO 27001 cl. 9.3.2 and ISO 42001 cl. 9.3.2 in a single review. This combined approach is enabled by the Integrated Management System architecture (HH-IMS-CTX-001).

---

## 6. Mandatory Outputs per cl. 9.3.3

The management review **must** produce documented decisions on the following per cl. 9.3.3 of both ISO 27001 and ISO 42001. Minutes must explicitly document each output even if the decision is "no change needed."

### 6.1 Opportunities for Continual Improvement

Every full IMS review produces a list of improvement decisions:

| Decision | Owner | Deadline | Source Input |
|----------|-------|----------|-------------|
| *[Specific improvement action]* | *[Named person]* | *YYYY-MM-DD* | *[Input reference, e.g., (d.3) audit OFI]* |

Each improvement action is tracked in subsequent management reviews via input (a) until closed.

### 6.2 Changes to the ISMS/AIMS

Documented decisions on whether changes to the management system are needed, including:

- Policy updates (IS Policy, AI Policy, or any procedure)
- Scope changes (entity additions, technology scope expansion)
- Process changes (workflow modifications, tool changes)
- Resource allocation changes

If no changes are needed, the minutes explicitly state: *"No changes to the ISMS/AIMS were identified at this review."*

### 6.3 Resource Needs

Documented decisions on resource adequacy, including:

- Budget (cloud costs, tool licensing, AI API costs, security tools)
- Personnel (capacity assessment, new role needs, contractor requirements)
- Technology (new tools, platform changes, training needs)
- External support (NorthGRC engagement, BearingPoint advisory, certification body)

If no additional resources are needed, the minutes explicitly state: *"Current resources are adequate for ISMS/AIMS operation."*

---

## 7. Review Preparation

### 7.1 CISO Agent Preparation (Quarterly Full Review)

The CISO Agent prepares a **pre-meeting brief** for each quarterly full IMS review:

| Step | Activity | Timeline |
|------|----------|----------|
| 1 | Collect all mandatory input data from source systems (Git repositories, risk register, audit reports, KPI dashboards, AI System Registry) | T-5 business days |
| 2 | Produce draft agenda with populated input summaries for all 13 inputs (a through g + AI-1 through AI-6) | T-4 business days |
| 3 | Distribute draft to CEO and CTO for review | T-3 business days |
| 4 | CTO adds technical performance data, AI system metrics, and improvement proposals | T-2 business days |
| 5 | CEO reviews and confirms final agenda | T-1 business day |
| 6 | Distribute final agenda with supporting materials to all attendees | T-1 business day |

### 7.2 CISO Agent Preparation (Monthly Action Review)

For intervening months, the CISO Agent prepares a lighter update:

| Step | Activity | Timeline |
|------|----------|----------|
| 1 | Extract open action items from previous meeting minutes | T-2 business days |
| 2 | Contact action owners for status updates | T-2 business days |
| 3 | Produce action tracking summary and flag any emerging issues | T-1 business day |
| 4 | Distribute to CEO | T-1 business day |

### 7.3 Input Data Sources

| Input | Primary Data Source | Location |
|-------|-------------------|----------|
| (a) Previous actions | Meeting minutes | `management-reviews/` |
| (b) External/internal issues | CISO environmental scan | Prepared per review |
| (c) Interested parties | Stakeholder feedback | CEO maintains |
| (d.1) NCRs and corrective actions | NCR register | `audits/NCR-*.md` |
| (d.2) Monitoring results | KPI dashboard | IS Policy Section 3 metrics |
| (d.3) Audit results | Audit report | `audits/` |
| (d.4) IS objectives | Objective status | IS Policy Section 3 (7 objectives) |
| (e) Interested party feedback | Feedback log | CEO maintains |
| (f) Risk assessment | Risk register | `risks/` directory |
| (g) Improvement opportunities | Improvement log | Compiled from all sources |
| (AI-1) AI performance | AI System Registry + AIMS objectives | `ai-registry/` + `aims-objectives.md` |
| (AI-2) AI risk status | Risk register (ai-risk: true) | `risks/` directory |
| (AI-3) AI feedback | Customer and regulatory feedback | CEO maintains |
| (AI-4) AI incidents | Incident log (AI-specific) | `incidents/` (if any) |
| (AI-5) AI regulatory changes | Regulatory monitoring | CISO environmental scan |
| (AI-6) AI governance metrics | AI Registry + AI Policy compliance | `ai-registry/` + AI Policy Section 5 |

---

## 8. Minutes Template

The following template produces audit-ready management review minutes satisfying both ISO 27001 cl. 9.3 and ISO 42001 cl. 9.3. Minutes are stored in Git at: `management-reviews/YYYY-MM-DD-ims-review.md`

```markdown
---
document-type: management-review-minutes
date: YYYY-MM-DD
review-type: [full | action-review]
meeting: Monthly Strategic (IMS Review)
chair: CEO Helge Heupel
classification: Internal
---

# IMS Management Review Minutes

**Date:** YYYY-MM-DD
**Meeting:** Monthly Strategic (IMS Review)
**Review type:** [Full IMS Review | Monthly Action Review]
**Chair:** CEO Helge Heupel
**Attendees:** [names and roles]
**Prepared by:** CISO Agent
**Minutes recorded by:** [name]

---

## ISMS Inputs (ISO 27001 cl. 9.3.2)

### (a) Previous Action Items

| # | Action | Owner | Due Date | Status | Notes |
|---|--------|-------|----------|--------|-------|
| 1 | [Action from previous review] | [Name] | YYYY-MM-DD | [Open/In Progress/Closed] | [Update] |

### (b) External/Internal Changes

[Summary of changes in external and internal issues since last review. Include: regulatory updates, competitive landscape, technology changes, organizational changes.]

**Decision:** [Any actions arising, or "No action required."]

### (c) Interested Parties

[Changes in needs and expectations of interested parties. Include: customer requirements, partner assessments, regulatory expectations.]

**Decision:** [Any actions arising, or "No changes identified."]

### (d.1) Nonconformities and Corrective Actions

| NCR ID | Control | Classification | Status | Target Date | Notes |
|--------|---------|---------------|--------|-------------|-------|
| [NCR-YYYY-NNN] | [A.X.Y] | [Minor/Major] | [Open/Closed] | YYYY-MM-DD | [Update] |

**Summary:** [X] open NCRs, [Y] closed since last review. [Z] overdue.
**Decision:** [Any escalation or resource allocation needed.]

### (d.2) Monitoring Results

[KPI dashboard summary. Include: vulnerability remediation SLA compliance, access review completion, BCP test results, change management statistics.]

| KPI | Target | Current | Trend | Status |
|-----|--------|---------|-------|--------|
| [Metric] | [Target] | [Value] | [Up/Down/Stable] | [On track/At risk/Off track] |

**Decision:** [Any actions arising, or "Monitoring results are satisfactory."]

### (d.3) Audit Results

[Internal/external audit findings summary. Include: IMS Conformity Index scores, finding counts by classification, key areas of concern.]

**Last audit date:** YYYY-MM-DD
**IMS Conformity Index:** [X]%
**Major NCs:** [N] | **Minor NCs:** [N] | **OFIs:** [N]

**Decision:** [Any actions arising, or "No audit has been conducted since last review."]

### (d.4) IS Objective Fulfilment

| # | Objective | Target | Current | Status |
|---|-----------|--------|---------|--------|
| 1 | ISO 27001 certification readiness | 100% by mid-May 2026 | [%] | [On track/At risk] |
| 2 | Zero critical security incidents | 0 per quarter | [N] | [Met/Not met] |
| 3 | Security awareness training | 100% annually | [%] | [On track/At risk] |
| 4 | Vulnerability remediation SLAs | 95% compliance | [%] | [On track/At risk] |
| 5 | Quarterly access reviews | 100% quarterly | [%] | [On track/At risk] |
| 6 | NIS2 compliance readiness | No major gaps | [Status] | [On track/At risk] |
| 7 | Document control compliance | 100% within cycle | [%] | [On track/At risk] |

**Decision:** [Any actions arising, or "Objectives are on track."]

### (e) Interested Party Feedback

[Feedback summary from customers, BearingPoint, partners, regulators.]

**Decision:** [Any actions arising, or "No actionable feedback received."]

### (f) Risk Assessment and Treatment

[Risk register changes and treatment progress. Include: new risks, risk level changes, treatment plan status, residual risk acceptance decisions.]

| Risk Tier | Count | Change | Treatment Progress |
|-----------|:-----:|--------|-------------------|
| Critical | [N] | [+/-/=] | [Summary] |
| High | [N] | [+/-/=] | [Summary] |
| Medium | [N] | [+/-/=] | [Summary] |
| Low | [N] | [+/-/=] | [Summary] |

**Decision:** [Any risk acceptance decisions or treatment adjustments.]

### (g) Improvement Opportunities

[Proposed improvements from post-incident reviews, audit OFIs, procedure enhancements, technology improvements.]

| # | Improvement Proposal | Source | Priority | Owner |
|---|---------------------|--------|----------|-------|
| 1 | [Description] | [Source] | [High/Medium/Low] | [Name] |

**Decision:** [Approved/deferred/rejected for each proposal.]

---

## AIMS Inputs (ISO 42001 cl. 9.3.2)

### (AI-1) AI System Performance

[AI system performance against AIMS objectives. Include: AI Registry metrics, SLO status for AI-powered services, AIMS objective KPIs.]

| # | AIMS Objective | Target | Current | Status |
|---|---------------|--------|---------|--------|
| 1 | ISO 42001 certification readiness | Stage 1 ready by May 2026 | [Status] | [On track/At risk] |
| 2 | AI Registry completeness | 100% systems registered | [%] | [Met/Not met] |
| 3 | AI risk assessment currency | 100% assessed within 12 months | [%] | [On track/At risk] |
| 4 | AI impact assessment completion | 100% Limited/High-Risk assessed | [%] | [On track/At risk] |
| 5 | EU AI Act prohibited practice compliance | Zero violations | [N] | [Met/Not met] |
| 6 | AI literacy training | 100% personnel trained | [%] | [On track/At risk] |
| 7 | Human oversight compliance | All agents at Trust Level 2 | [Status] | [Met/Not met] |

**Decision:** [Any actions arising, or "AIMS objectives are on track."]

### (AI-2) AI Risk Status

[AI risk assessment status and treatment progress. Include: AI risk entries from risk register, AI impact assessment outcomes, individual/society impact scores.]

**AI risks in register:** [N] total | [N] High/Critical
**AI impact assessments completed:** [N] of [N] required
**Individual/society impact >= 4:** [N] (requires explicit CEO acceptance)

**Decision:** [Any AI risk acceptance decisions or treatment adjustments.]

### (AI-3) AI Stakeholder Feedback

[Feedback from interested parties on AI systems. Include: customer feedback on Verity VE/EAM AI features, regulatory guidance, BearingPoint AI governance input.]

**Decision:** [Any actions arising, or "No actionable AI-specific feedback received."]

### (AI-4) AI Incident Summary

[AI-specific incidents since last review. Include: bias detection, hallucination impact, unauthorized data processing, model drift, prohibited practice concerns.]

| # | Date | AI System | Incident Type | Severity | Status |
|---|------|-----------|--------------|----------|--------|
| 1 | [Date] | [System] | [Type] | [SEV1-4] | [Resolved/Open] |

**Incidents since last review:** [N] | **Lessons learned:** [Summary]

**Decision:** [Any actions arising, or "No AI incidents to report."]

### (AI-5) AI Regulatory Changes

[Changes in AI regulatory landscape. Include: EU AI Act enforcement timeline, ISO 42001 guidance updates, national AI regulations.]

**Key changes:**
- [Change 1 and impact assessment]
- [Change 2 and impact assessment]

**Decision:** [Any policy/procedure updates needed, or "No material regulatory changes."]

### (AI-6) AI Governance Metrics

[AI governance metrics. Include: Trust level compliance, prohibited practice monitoring, AI Registry completeness, AIA completion rate.]

| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| Agent trust levels | All Level 2 | [Status] | [Compliant/Non-compliant] |
| Prohibited practices | Zero violations | [N] | [Compliant/Non-compliant] |
| Registry completeness | 100% | [%] | [Met/Not met] |
| AIA completion | 100% | [%] | [Met/Not met] |

**Decision:** [Any actions arising, or "AI governance metrics are satisfactory."]

---

## Outputs (cl. 9.3.3)

### Improvement Decisions

| # | Decision | Owner | Deadline | Source Input |
|---|----------|-------|----------|-------------|
| 1 | [Specific improvement action] | [Name] | YYYY-MM-DD | [(X) reference] |

### Changes to IMS

[Approved changes to the ISMS/AIMS, or "No changes to the ISMS/AIMS were identified at this review."]

- Policy updates: [None / Description]
- Scope changes: [None / Description]
- Process changes: [None / Description]

### Resource Needs

[Resource decisions, or "Current resources are adequate for ISMS/AIMS operation."]

- Budget: [No change / Description]
- Personnel: [No change / Description]
- Technology: [No change / Description]
- External support: [No change / Description]

---

## Approval

**Chair signature:** _________________________
**Date:** YYYY-MM-DD

**Next review:** [Full IMS Review: YYYY-MM-DD | Monthly Action Review: YYYY-MM-DD]
```

---

## 9. Clause Mapping

This procedure satisfies the following mandatory management system clauses:

| Clause | Standard | Requirement | How This Procedure Satisfies It |
|--------|----------|-------------|--------------------------------|
| cl. 9.3.1 | ISO 27001:2022 | Top management shall review the ISMS at planned intervals | Section 3 establishes monthly reviews with quarterly full IMS reviews |
| cl. 9.3.2 | ISO 27001:2022 | The management review shall include consideration of specific inputs | Section 4 maps all 7 mandatory ISMS inputs (a through g) with sources and presenters |
| cl. 9.3.3 | ISO 27001:2022 | The results of the management review shall include decisions on specific outputs | Section 6 defines the 3 mandatory output categories with documentation requirements |
| cl. 9.3.1 | ISO 42001:2023 | Top management shall review the AIMS at planned intervals | Section 3 includes AIMS review in the same quarterly cadence |
| cl. 9.3.2 | ISO 42001:2023 | The management review shall include consideration of AIMS-specific inputs | Section 5 adds 6 AIMS-specific inputs (AI-1 through AI-6) supplementing the ISMS baseline |
| cl. 9.3.3 | ISO 42001:2023 | The results of the management review shall include AIMS-related decisions | Section 6 output requirements cover both ISMS and AIMS decision categories |

> **Note:** Management review is a mandatory management system requirement under cl. 9.3, not an Annex A control. No Annex A control directly maps to "management review." The review *process* evaluates Annex A control effectiveness; the process itself satisfies a clause requirement.

---

## 10. Regulatory Obligations

| Framework | Requirement | How Addressed |
|-----------|-------------|---------------|
| **ISO 27001:2022 cl. 9.3** | Management review at planned intervals with mandatory inputs and outputs | Monthly reviews with quarterly full IMS review covering all cl. 9.3.2 inputs and cl. 9.3.3 outputs |
| **ISO 42001:2023 cl. 9.3** | AIMS management review with AI-specific inputs | Combined IMS review adds AIMS inputs (AI-1 through AI-6) to the ISO 27001 baseline |
| **TISAX (VDA ISA Chapter 8)** | Management responsibility and governance for information security | Monthly Strategic meeting demonstrates ongoing management engagement with IS governance. Quarterly full reviews provide structured evidence. |
| **NIS2 (informational)** | Management body oversight of cybersecurity risk management measures | CEO chairs all management reviews. Risk assessment results (input f) and compliance posture are standing agenda items. NIS2UmsuCG Sec. 38 management body obligations are addressed through this process. |

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

---

*Document: procedures/management-review.md*
*Document ID: HH-ISMS-PROC-008*
*Management Review Procedure for the Helge Heupel Group*
