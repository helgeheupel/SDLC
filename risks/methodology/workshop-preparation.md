---
document-id: HH-ISMS-WRK-001
title: "Risk Assessment Workshop Preparation Package"
version: v1.0
date: 2026-02-20
classification: Confidential
author: CISO Agent
reviewer: [CEO Helge Heupel, External CISO (NorthGRC)]
approver: CEO Helge Heupel
status: Draft
methodology-reference: HH-ISMS-RMA-001
change-summary: Initial release -- workshop preparation materials for risk assessment session
---

# Risk Assessment Workshop Preparation Package

## 1. Workshop Overview

### Purpose

Validate the pre-seeded risk register, finalize likelihood and impact ratings, determine treatment strategies for each risk, map treatments to Annex A controls, and formally accept residual risk. The workshop produces a committed risk register and risk treatment plan that satisfies:

- **ISO 27001 cl. 6.1.2** -- Risk assessment with consistent, valid, and comparable results
- **ISO 27001 cl. 6.1.3** -- Risk treatment including SoA-linked control selection and risk owner approval
- **ISO 42001 cl. 6.1.2** -- AI risk assessment including consequences to individuals and societies
- **ISO 31000:2018** -- Risk management process alignment

### Workshop Details

| Item | Detail |
|------|--------|
| **Date** | [TO BE SCHEDULED] |
| **Duration** | 4 hours (including breaks) |
| **Location** | Remote (video conference with screen sharing) |
| **Format** | Single intensive session covering identification review, rating, treatment, and acceptance |
| **Pre-seeded Risks** | 36 YAML files in `risks/` directory (CISO Agent pre-rated with rationale) |
| **Methodology** | Risk Assessment Methodology (HH-ISMS-RMA-001) |
| **Output** | Committed risk register in Git, risk treatment summary (HH-ISMS-RTP-001) with CEO signature |

### Scope

The workshop covers all risks affecting the Helge Heupel Group Integrated Management System:

- **Legal entities:** Helge Heupel GmbH (Germany), Helge Heupel B.V. (Netherlands), Helge Heupel Inc. (United States)
- **Risk categories:** Operational (OPS), Security (SEC), AI Risk (AI), Regulatory (REG), People (PPL), Supply Chain (SUP), Strategic (STR)
- **Standards coverage:** ISO 27001:2022, ISO 42001:2023, TISAX, NIS2, GDPR, EU AI Act

---

## 2. Participant Roles

| Participant | Affiliation | Role in Workshop | Preparation Required |
|-------------|------------|-----------------|---------------------|
| **CEO Helge Heupel** | HH Group | Workshop driver. Makes final decisions on all risk ratings and treatment strategies. Accepts residual risk. Enters decisions for CISO Agent to capture. | Curate pre-seeded risk list: flag additions, removals, or rating disagreements before the session |
| **External CISO** | NorthGRC (contracted to HH GmbH) | Challenge and validation role. Reviews and challenges CEO's ratings. Provides "second opinion" credibility for auditors. Not an equal co-owner -- a challenger who ensures ratings are defensible. | Review all 36 pre-seeded risk YAML files. Prepare challenge notes for any ratings that appear under- or over-estimated. |
| **Consultant** | BearingPoint or EY | Domain expertise on regulatory, compliance, and industry-specific risk areas. CEO drives the session; consultant advises on specific risks where domain knowledge is relevant. | Review regulatory risks (RISK-REG-*) and any risks in their domain of expertise. Prepare domain-specific input. |
| **CISO Agent** | HH Group (AI Agent) | Real-time capture and validation. Validates ratings against the methodology (HH-ISMS-RMA-001), commits decisions to Git during the session, computes risk scores, flags inconsistencies (e.g., rating without rationale, residual higher than inherent). | Pre-seeding complete. Workshop preparation package (this document) distributed. Ready for real-time Git operations. |

### Role Boundaries

- **CEO drives all decisions.** The External CISO and Consultant provide input and challenge, but the CEO has final authority on every rating, treatment decision, and residual risk acceptance.
- **External CISO's challenge role must be substantive.** The auditor will review workshop evidence for at least one instance where the external CISO challenged a rating and the outcome (accepted or adjusted). A ceremonial "agree with everything" participation is insufficient.
- **CISO Agent does not vote.** The agent captures, validates schema compliance, and flags methodology deviations but does not express opinions on ratings.

---

## 3. Pre-Workshop Checklist

Complete all items 3-5 business days before the scheduled workshop date.

### Materials Distribution

- [ ] Risk assessment methodology (HH-ISMS-RMA-001) shared with all participants
  - File: `risks/methodology/risk-assessment-methodology.md`
  - Share via: Git repository read access or exported PDF
- [ ] Pre-seeded risk register (36 YAML files in `risks/`) shared via Git repository read access
  - Files: `risks/RISK-OPS-*.yml`, `risks/RISK-SEC-*.yml`, `risks/RISK-AI-*.yml`, `risks/RISK-REG-*.yml`, `risks/RISK-PPL-*.yml`, `risks/RISK-SUP-*.yml`, `risks/RISK-STR-*.yml`
- [ ] Workshop preparation package (this document) shared with all participants
  - File: `risks/methodology/workshop-preparation.md`
- [ ] Risk treatment summary template shared for reference
  - File: `risks/methodology/risk-treatment-summary.md`

### Participant Preparation

- [ ] External CISO (NorthGRC) has reviewed pre-seeded risks and prepared challenge notes
  - Focus areas: SEC risks (RISK-SEC-001 through RISK-SEC-007), AI risks (RISK-AI-001 through RISK-AI-007)
  - Specific ask: identify any ratings that seem under- or over-estimated based on NorthGRC's client base experience
- [ ] Consultant (BearingPoint/EY) has reviewed regulatory risks (RISK-REG-*) and prepared domain input
  - Focus areas: NIS2 compliance (RISK-REG-001), EU AI Act (RISK-REG-003), TISAX scope (RISK-REG-005)
  - Specific ask: identify any missing regulatory risks based on their cross-industry experience
- [ ] CEO has curated the pre-seeded list: flagged additions, removals, or rating disagreements
  - Decision: which risks to add (new risks identified since pre-seeding)
  - Decision: which risks to remove (irrelevant or duplicate risks)
  - Decision: which ratings to challenge (disagreement with CISO Agent pre-ratings)

### Technical Setup

- [ ] Video conference set up with screen sharing for real-time Git commits
  - Platform: [Teams / Zoom / Google Meet -- to be confirmed]
  - Screen sharing: CISO Agent terminal visible to all participants for real-time commit verification
- [ ] CISO Agent ready for real-time Git operations
  - Git repository access confirmed
  - YAML schema validation functional
  - Can commit individual risk file changes during session
- [ ] All participants have confirmed attendance
  - CEO Helge Heupel: [ ] Confirmed
  - External CISO (NorthGRC): [ ] Confirmed
  - Consultant (BearingPoint/EY): [ ] Confirmed

---

## 4. Workshop Agenda (4 Hours)

### Block 1: Opening (15 minutes)

| Time | Activity | Led By | Output |
|------|----------|--------|--------|
| 0:00-0:05 | CEO introduces workshop scope and objectives | CEO | Scope confirmed |
| 0:05-0:10 | Review risk assessment methodology (HH-ISMS-RMA-001) highlights: 5x5 matrix, likelihood scale (time-based), impact scale (business-survival-calibrated), risk levels and response thresholds | CEO + CISO Agent | Methodology confirmed by all |
| 0:10-0:13 | Confirm participant roles: CEO drives, External CISO challenges, Consultant advises, CISO Agent captures | CEO | Roles acknowledged |
| 0:13-0:15 | Walk through the evidence capture process: attendance, per-risk decisions, Git commit trail | CISO Agent | Process understood |

### Block 2: Risk Identification Review (45 minutes)

| Time | Activity | Led By | Output |
|------|----------|--------|--------|
| 0:15-0:20 | Overview of pre-seeded risk distribution (36 risks: OPS=5, SEC=7, AI=7, REG=6, PPL=4, SUP=4, STR=3) | CISO Agent | Distribution acknowledged |
| 0:20-0:30 | Walk through OPS and SEC risks (12 risks). Validate each: keep, remove, or adjust scope. Add any missing operational or security risks. | CEO + External CISO | OPS/SEC list finalized |
| 0:30-0:40 | Walk through AI and REG risks (13 risks). Validate each. External CISO challenges AI risks; Consultant provides regulatory domain input. | CEO + External CISO + Consultant | AI/REG list finalized |
| 0:40-0:50 | Walk through PPL, SUP, STR risks (11 risks). Validate each. CEO leads (these are strategic/organizational). | CEO | PPL/SUP/STR list finalized |
| 0:50-0:60 | Capture any new risks identified. Assign IDs following RISK-{CAT}-{NNN} convention. Remove any irrelevant risks with documented justification. | All + CISO Agent | Final risk list locked |

### Break (15 minutes) -- 1:00-1:15

### Block 3: Risk Rating (60 minutes)

| Time | Activity | Led By | Output |
|------|----------|--------|--------|
| 1:15-1:20 | Rating process reminder: likelihood (1-5 time-based), impact (1-5 max across dimensions), AI risks include individual/society dimension | CISO Agent | Process confirmed |
| 1:20-1:50 | Rate HIGH-priority risks first (pre-seeded score >= 12). For each risk: CEO states likelihood and impact; External CISO challenges; CEO decides; CISO Agent commits. | CEO + External CISO | High-priority risks rated |
| 1:50-2:05 | Rate remaining risks (pre-seeded score < 12). Faster pace for lower-risk items. CISO Agent commits each. | CEO | All risks rated |
| 2:05-2:15 | Review rating summary: distribution by level (Low/Medium/High/Critical). Flag any rating inconsistencies. | CISO Agent | Rating summary confirmed |

**Rating workflow per risk:**
1. CISO Agent displays pre-seeded rating and rationale
2. CEO states validated or adjusted likelihood (1-5) with brief justification
3. CEO states validated or adjusted impact (1-5) with brief justification
4. External CISO challenges if disagreement (document challenge in workshop-notes)
5. CEO makes final decision
6. CISO Agent computes score, determines level, commits to YAML file
7. If rating changed from pre-seeded: document "Pre-seeded: L=X, I=Y. Workshop: L=X', I=Y'. Reason: [...]" in workshop-notes

### Break (15 minutes) -- 2:15-2:30

### Block 4: Treatment Decisions (45 minutes)

| Time | Activity | Led By | Output |
|------|----------|--------|--------|
| 2:30-2:35 | Treatment options reminder: Avoid, Modify, Share, Retain. Annex A control mapping requirement for "Modify" treatments. | CISO Agent | Process confirmed |
| 2:35-2:55 | Treat HIGH and CRITICAL risks first. For each: CEO selects strategy, reviews pre-seeded Annex A control mappings, adjusts if needed, CISO Agent assesses residual risk. | CEO + External CISO | High/Critical treatments decided |
| 2:55-3:10 | Treat MEDIUM risks. Pre-seeded treatment-controls serve as starting point. Faster pace. | CEO | Medium treatments decided |
| 3:10-3:15 | Treat LOW risks. Typically "retain" with monitoring. Quick confirmation. | CEO | Low treatments decided |

**Treatment workflow per risk:**
1. CISO Agent displays pre-seeded treatment strategy and controls
2. CEO confirms or adjusts treatment strategy (avoid/modify/share/retain)
3. For "modify": review Annex A control mappings; add or remove controls as needed
4. CEO states residual likelihood and residual impact after treatment
5. CISO Agent computes residual score and level
6. If residual level is High or Critical: CEO must provide explicit justification
7. CISO Agent commits treatment decisions to YAML file

### Block 5: Residual Risk Acceptance (15 minutes)

| Time | Activity | Led By | Output |
|------|----------|--------|--------|
| 3:15-3:20 | Display residual risk summary: count by level, list any High/Critical residual risks requiring explicit acceptance | CISO Agent | Summary reviewed |
| 3:20-3:25 | CEO reviews each residual risk entry. For High residual risks: CEO provides documented business rationale. For Critical residual risks: must be treated down to High or below. | CEO | Acceptance recorded |
| 3:25-3:30 | CISO Agent commits `residual-risk-accepted-by: "CEO Helge Heupel"` and `residual-risk-accepted-date: [today]` to each risk file. Creates Git PR for formal record. | CISO Agent | Acceptance in Git |

### Block 6: Wrap-up (15 minutes)

| Time | Activity | Led By | Output |
|------|----------|--------|--------|
| 3:30-3:35 | Review post-workshop actions: risk treatment summary generation, CEO signature, quarterly review schedule | CISO Agent | Actions clear |
| 3:35-3:40 | Set next quarterly review date (3 months from workshop date). Record in risk methodology. | CEO | Review date set |
| 3:40-3:43 | Identify any gaps, follow-up items, or risks needing further research | All | Gap list (if any) |
| 3:43-3:45 | Thank participants. Confirm workshop evidence will be committed to Git. | CEO | Workshop closed |

---

## 5. During-Workshop Evidence Capture Template

The following evidence is captured during the workshop to satisfy ISO 27001 cl. 6.1.2 requirements for documented risk assessment results and to demonstrate human validation to auditors.

### 5.1 Attendance Record

```
RISK ASSESSMENT WORKSHOP -- ATTENDANCE RECORD

Date:           [YYYY-MM-DD]
Start Time:     [HH:MM] (CET/CEST)
End Time:       [HH:MM] (CET/CEST)
Location:       Remote (video conference)
Methodology:    HH-ISMS-RMA-001 v1.0

Participants:
| # | Name             | Affiliation                    | Role              | Present |
|---|------------------|--------------------------------|--------------------|---------|
| 1 | Helge Heupel     | Helge Heupel GmbH (CEO)        | Workshop Driver    | [ ]     |
| 2 | [Name]           | NorthGRC (External CISO)       | Challenge/Validate | [ ]     |
| 3 | [Name]           | BearingPoint / EY (Consultant) | Domain Advisor     | [ ]     |
| 4 | CISO Agent       | Helge Heupel GmbH (AI Agent)   | Real-time Capture  | [ ]     |
```

### 5.2 Per-Risk Decision Log

For each risk reviewed during the workshop, capture decisions in the following format. This is committed to each risk's `workshop-notes` field in the YAML file.

```
WORKSHOP DECISION LOG TEMPLATE (per risk)

Risk ID:              [RISK-CAT-NNN]
Pre-seeded Rating:    L=[X], I=[Y], Score=[Z], Level=[level]
Workshop Rating:      L=[X'], I=[Y'], Score=[Z'], Level=[level']
Rating Changed:       [Yes/No]
Change Reason:        [If changed: who proposed, what rationale, how resolved]

Treatment Decision:
  Strategy:           [avoid / modify / share / retain]
  Controls Adjusted:  [Yes/No -- list any added/removed Annex A controls]
  Residual:           L=[X''], I=[Y''], Score=[Z''], Level=[level'']

Accepted By:          [CEO Helge Heupel]
Challenge Notes:      [External CISO challenge: what was challenged, outcome]
Domain Input:         [Consultant input: what domain expertise contributed]

Git Commit:           [commit hash after CISO Agent commits]
```

### 5.3 Rating Disagreements and Resolution

This section captures instances where the External CISO or Consultant challenged a pre-seeded or proposed rating. This is critical audit evidence that the challenge role was substantive, not ceremonial.

```
RATING DISAGREEMENT LOG

| # | Risk ID | Pre-seeded | Proposed By | Challenge By | Challenge Reason | Resolution | Final Rating |
|---|---------|------------|-------------|--------------|------------------|------------|--------------|
| 1 | [ID]    | L=X, I=Y   | [who]       | [who]        | [reason]         | [outcome]  | L=X', I=Y'  |
| 2 | ...     | ...        | ...         | ...          | ...              | ...        | ...          |
```

At minimum, the workshop should document at least one substantive rating challenge. If the External CISO agrees with every single pre-seeded rating, explicitly document: "External CISO reviewed all ratings and confirmed the pre-seeded assessments are appropriate based on NorthGRC's client base experience. No challenges raised."

### 5.4 New Risks Identified During Workshop

```
NEW RISKS IDENTIFIED

| # | Proposed By | Category | Title | Assigned ID | Notes |
|---|-------------|----------|-------|-------------|-------|
| 1 | [who]       | [CAT]    | [...] | RISK-CAT-NNN | [brief description; full YAML created by CISO Agent] |
```

### 5.5 Risks Removed with Justification

```
RISKS REMOVED

| # | Risk ID | Title | Removed By | Justification |
|---|---------|-------|------------|---------------|
| 1 | [ID]    | [...] | [who]      | [why this risk is not applicable or is a duplicate] |
```

---

## 6. Post-Workshop Actions

### Immediate (Within 24 hours)

| # | Action | Responsible | Deliverable |
|---|--------|-------------|-------------|
| 1 | CISO Agent generates Risk Treatment Summary (HH-ISMS-RTP-001) from committed risk YAML files | CISO Agent | `risks/methodology/risk-treatment-summary.md` (populated) |
| 2 | CEO reviews and confirms the Risk Treatment Summary is accurate | CEO | Review confirmation |
| 3 | CEO signs Risk Treatment Summary via Git PR approval | CEO | Signed HH-ISMS-RTP-001 |
| 4 | Workshop evidence document committed to Git | CISO Agent | `risks/methodology/workshop-evidence.md` containing attendance record, decision log, disagreement log |
| 5 | Git PR created for formal residual risk acceptance record | CEO / CISO Agent | PR with all workshop changes for audit trail |

### Within 1 Week

| # | Action | Responsible | Deliverable |
|---|--------|-------------|-------------|
| 6 | Update Statement of Applicability (HH-ISMS-SOA-001) risk references with final risk IDs | CISO Agent | Updated `soa/` YAML files with `risk-references` fields |
| 7 | Set `next-review-date` in all risk YAML files (3 months from workshop) | CISO Agent | Updated risk files |
| 8 | Distribute final risk treatment summary to all workshop participants | CEO | Participant acknowledgment |

### Quarterly Review Schedule

After the workshop, the full risk register enters the quarterly formal review cycle as defined in the Risk Assessment Methodology (HH-ISMS-RMA-001, Section 10):

- **Quarterly review** at Monthly Strategic meeting (agenda item 3: Risk register review and treatment status)
- **Event-triggered reviews** per methodology triggers (new systems, incidents, regulatory changes, organizational changes)
- **Next quarterly review date:** [TO BE SET -- 3 months from workshop date]

---

## 7. Reference Documents

| Document ID | Title | Location | Purpose |
|-------------|-------|----------|---------|
| HH-ISMS-RMA-001 | Risk Assessment Methodology | `risks/methodology/risk-assessment-methodology.md` | Defines 5x5 matrix, scales, categories, schema, treatment framework |
| HH-ISMS-RTP-001 | Risk Treatment Summary | `risks/methodology/risk-treatment-summary.md` | Template for CEO signature and auditor package (populated post-workshop) |
| HH-ISMS-POL-001 | Information Security Policy | `policies/IS-Policy.md` | Defines risk appetite and acceptance authority |
| HH-AIMS-POL-001 | AI Policy | `policies/AI-Policy.md` | Defines AI-specific prohibited practices and risk controls |
| HH-GOV-Startup-v1.0 | Governance Model | `governance-model.md` | Defines risk-tiered escalation and meeting structure |
| HH-IMS-CTX-001 | IMS Context | `policies/IMS-Context.md` | Establishes ISMS/AIMS integration framework |
| HH-ISMS-SOA-001 | Statement of Applicability | `soa/SoA-Consolidated.md` | Bidirectional traceability with risk treatment controls |

---

*Document: risks/methodology/workshop-preparation.md*
*Document ID: HH-ISMS-WRK-001*
*Workshop Preparation Package for the Helge Heupel Group Risk Assessment*
