---
document-id: HH-ISMS-POL-001-ANNEX
title: "Information Security Policy - Operational Annex"
version: v1.0
date: 2026-02-19
classification: Internal
parent-document: HH-ISMS-POL-001
status: Draft
---

# Information Security Policy -- Operational Annex

This operational annex translates the formal Information Security Policy (HH-ISMS-POL-001) into actionable procedures for the Helge Heupel Group team. Each section maps 1:1 to a section in the IS Policy.

---

## Annex 1: Purpose and Scope -- What This Means for You

**This section operationalizes IS-Policy Section 1.**

### Who Is Covered

Every human team member, contractor, and AI agent working with Helge Heupel Group information assets falls under this policy. This includes:

- **If you are a human team member:** You must follow the information security procedures in this annex. You are expected to understand your classification handling obligations and report security incidents.
- **If you interact with AI agents:** All AI agent outputs are reviewed via Pull Request before becoming effective. Agents operate at Trust Level 2 (Supervised Autonomous) -- their outputs must be validated by a human before impacting production systems or policy decisions.
- **If you are a contractor:** Your access is governed by your contract and NDA. You receive this policy during onboarding. Your access is revoked within 4 hours of contract termination.

### How to Determine If Something Is in Scope

If the information, system, or process relates to:
- Verity VE or Verity EAM development or operations
- Any Azure, M365, NorthGRC, Linear, Float, or Claude Code system
- Any Git repository under the Helge Heupel Group
- Any communication containing Helge Heupel Group business information

...then it is in scope for this policy.

---

## Annex 2: Management Commitment -- Governance in Practice

**This section operationalizes IS-Policy Section 2.**

### How Management Commitment Is Demonstrated

CEO Helge Heupel demonstrates commitment to information security through:

1. **Monthly Strategic meeting (60 min):** Reviews compliance posture, risk register status, and certification progress. Meeting notes are committed to Git as `meeting-notes/monthly-strategic/YYYY-MM.md`. This meeting satisfies ISO 27001 cl. 9.3 management review requirements.

2. **Weekly Technical meeting (30 min):** Reviews open security incidents, approves High/Critical risk deployments, and reviews architecture decisions. Meeting notes committed to Git as `meeting-notes/weekly-technical/YYYY-MM-DD.md`.

3. **Policy approval via PR:** CEO approves all policy documents and updates by merging the Pull Request. The Git merge commit serves as the documented approval.

4. **Annual NIS2UmsuCG training:** CEO completes mandatory cybersecurity training covering threat landscape, ISMS performance, and personal liability. Completion is documented.

5. **Annual personal liability acknowledgment:** CEO signs the management body liability acknowledgment per NIS2UmsuCG Sec. 38 and Wbni requirements.

### Escalation Path

For information security decisions:
1. **Routine (Low/Medium risk):** CISO decides, informs CEO at next meeting
2. **Significant (High risk):** CISO recommends, CEO decides at Weekly Technical
3. **Critical:** Immediate escalation to CEO. Discussed at next Weekly Technical or emergency session.

---

## Annex 3: Information Security Objectives -- Quarterly Review Process

**This section operationalizes IS-Policy Section 3.**

### Objective Review Cadence

| When | What | Who Presents | Forum |
|------|------|-------------|-------|
| Monthly | Compliance dashboard with progress against all 7 objectives | CISO (prepared by CISO Agent) | Monthly Strategic |
| Quarterly | Detailed objective assessment with metrics trends | CISO | Monthly Strategic (quarterly deep dive) |
| Annually | Full objective review and update for next year | CISO + CEO | Annual planning session |

### How Objectives Are Tracked

- The CISO Agent prepares a compliance dashboard before each Monthly Strategic meeting
- Dashboard contents: objective status (on track / at risk / behind), key metrics (training completion %, vulnerability SLA compliance %, access review completion %), and certification timeline progress
- The dashboard is committed to Git as `meeting-notes/monthly-strategic/YYYY-MM-compliance-dashboard.md`
- CEO reviews and approves objective changes at the Monthly Strategic meeting

### What to Do If an Objective Is at Risk

1. CISO identifies the objective at risk and root cause
2. CISO proposes corrective action with timeline
3. Corrective action is discussed at Weekly Technical (if technical) or Monthly Strategic (if resource/strategic)
4. CEO approves corrective action and resource allocation
5. Progress tracked at subsequent meetings until objective is back on track

---

## Annex 4: Roles and Responsibilities -- Day-to-Day Operations

**This section operationalizes IS-Policy Section 4.**

### Your Security Responsibilities by Role

**CEO (Helge Heupel):**
- Approve all policies and risk acceptance decisions (via PR merge with `[CEO-SIGNOFF-REQUIRED]`)
- Attend Weekly Technical and Monthly Strategic meetings
- Complete annual NIS2UmsuCG cybersecurity training
- Oversee all AI agent outputs for security-critical artifacts
- Make final decisions on exception requests

**CTO:**
- Review all architecture decisions for security implications
- Approve deployments at Weekly Technical (High/Critical risk)
- Co-review IS Policy and AI Policy updates
- Ensure secure coding standards are followed in code reviews

**CISO:**
- Maintain the ISMS, including this policy, risk register, and SoA
- Prepare compliance dashboards and risk reports for governance meetings
- Manage NIS2 compliance for GmbH (BSI) and B.V. (NCSC-NL)
- Coordinate internal and external audits
- Review and classify security incidents
- Manage the exception process

**IT Pentester/Super Admin:**
- Manage Azure infrastructure security configurations
- Conduct penetration testing (annual at minimum, per scope)
- Execute deployments following approved change management process
- Monitor platform security alerts and respond to Critical/High findings
- Manage endpoint security via Microsoft Intune

**Strategy Partner:**
- Report any security concerns observed during product/strategy work
- Participate in Monthly Strategic meetings when security topics are on the agenda

**Finance Industry Senior Manager:**
- Advise on industry-specific compliance requirements (financial sector)
- Participate in Monthly Strategic meetings when financial risk items are on the agenda

### AI Agent Security Responsibilities

All AI agents follow these security operating procedures:
- Include YAML frontmatter with classification level on every artifact
- Reference policy and standard clauses in all compliance artifacts
- Flag items requiring CEO sign-off with `[CEO-SIGNOFF-REQUIRED]`
- Flag items for human CISO review with `[CISO-REVIEW-ON-RETURN]`
- Flag cross-domain dependencies with `[CTO-DEPENDENCY]`, `[APPSEC-DEPENDENCY]`, etc.
- Submit all work via Pull Request for human review before merge

---

## Annex 5: Risk Management -- Practical Procedures

**This section operationalizes IS-Policy Section 5.**

### How to Report a New Risk

1. **Identify the risk:** Describe the threat, vulnerability, and potential impact
2. **Classify:** Use the risk taxonomy (Strategic, Operational, Compliance, AI, Financial, Reputational)
3. **Score:** Apply the 5x5 likelihood-impact matrix (Low 1-6, Medium 7-12, High 13-19, Critical 20-25)
4. **Document:** Create a risk register entry (YAML-in-Git format, ~15 fields)
5. **Submit:** Create a PR with the risk register entry for CISO review
6. **Escalate if needed:** High/Critical risks are escalated to the Weekly Technical meeting

### Risk Treatment Workflow

| Risk Level | Treatment Timeline | Decision Authority | Review Frequency |
|-----------|-------------------|-------------------|------------------|
| Low (1-6) | Accept and monitor | CISO | Quarterly |
| Medium (7-12) | Treat within 90 days | CISO | Monthly |
| High (13-19) | Treat within 30 days; FAIR analysis required | CEO | Bi-weekly |
| Critical (20-25) | Immediate treatment; FAIR analysis + contingency plan | CEO | Weekly |

### Risk Assessment Tools

- **Qualitative:** 5x5 matrix in the risk register
- **Quantitative:** FAIR methodology for High/Critical risks (CISO Agent produces draft; CEO + human CISO validate)
- **Risk register:** Maintained in Git as YAML-in-Git format. Source of truth for all risk across ISMS and AIMS.

---

## Annex 6: Information Classification -- Handling Procedures

**This section operationalizes IS-Policy Section 6.**

### Classification Decision Tree

1. Does it contain patent-sensitive material? --> **Secret** (reference by ID only: [PATENT-VE-001], [PATENT-EAM-001])
2. Does it contain personal data, vulnerability details, or risk assessments? --> **Confidential**
3. Is it for internal Helge Heupel Group use only? --> **Internal**
4. Can it be freely shared externally? --> **Public**

### Handling Procedures by Classification Level

| Action | Public | Internal | Confidential | Secret |
|--------|--------|----------|-------------|--------|
| **Storage** | Any repository | Access-controlled Git/SharePoint | Restricted Git repo + audit logging | Dedicated location, CEO authorization |
| **Transmission** | Any channel | Encrypted channels (Teams, TLS email) | Encrypted + recipient verification | CEO pre-approval + encrypted delivery |
| **Printing** | Unrestricted | Clean desk applies | Retrieve immediately, shred when done | CEO authorization, witnessed destruction |
| **External sharing** | Unrestricted | Management approval required | CEO approval + NDA/DPA required | CEO authorization, case-by-case |
| **AI agent access** | Unrestricted | Standard agent access | Need-to-know per session context | Explicit CEO authorization per session |
| **Retention** | Per project needs | Per document type schedule | 7 years minimum | Indefinite or per legal requirement |
| **Disposal** | No special requirements | Delete from all locations | Verified deletion with confirmation | CEO-authorized destruction with certificate |

### Labeling Requirements

- **Documents:** YAML frontmatter `classification:` field (mandatory on every artifact)
- **Azure resources:** Azure Information Protection labels applied to files in SharePoint/OneDrive
- **Emails:** Classification noted in subject line for Confidential and Secret content
- **Meeting notes:** Classification in document header

---

## Annex 7: Regulatory Compliance -- Practical Checklists

**This section operationalizes IS-Policy Section 7.**

### NIS2 Incident Reporting Checklist (GmbH -- BSI)

When a significant security incident occurs affecting Helge Heupel GmbH:

- [ ] **T+0h:** Incident detected and classified per ISMS incident taxonomy
- [ ] **T+4h:** Internal assessment completed -- is this a "significant incident" (erheblicher Sicherheitsvorfall)?
  - Criteria: service disruption >= 5% of users, data breach involving personal data, cross-border impact, compromise of critical systems
- [ ] **T+24h:** Initial notification (Erstmeldung) submitted to BSI via BSI reporting portal (in German)
- [ ] **T+72h:** Detailed report (Detaillierter Bericht) submitted to BSI (in German)
- [ ] **T+30d:** Final report (Abschlussbericht) submitted to BSI (in German)
- [ ] Cross-entity coordination activated if incident affects B.V. or Inc.
- [ ] If personal data breach: separate GDPR Art. 33 notification to relevant DPA (BfDI for GmbH, AP for B.V.)

### NIS2 Incident Reporting Checklist (B.V. -- NCSC-NL)

When a significant security incident occurs affecting Helge Heupel B.V.:

- [ ] **T+0h:** Incident detected and classified
- [ ] **T+4h:** Internal assessment completed -- does this trigger NCSC-NL notification?
- [ ] **T+24h:** Initial notification to NCSC-NL (technical reports in English accepted; formal notifications in Dutch)
- [ ] **T+72h:** Detailed report to NCSC-NL
- [ ] **T+30d:** Final report to NCSC-NL
- [ ] If personal data breach: separate GDPR Art. 33 notification to Autoriteit Persoonsgegevens (72 hours, in Dutch)
- [ ] Dual-notification assessment: check both NIS2 and GDPR triggers independently

### GDPR Data Subject Rights Procedure

When a data subject request is received (access, rectification, erasure, portability):

1. Log the request with date, data subject identity, and request type
2. Verify the identity of the data subject
3. Route to CISO for assessment and response coordination
4. Respond within 30 days (extendable by 60 days for complex requests with notification)
5. Document the response and outcome

### US Compliance Monitoring (Advisory)

The CISO Agent monitors US regulatory developments (CCPA/CPRA, SOC 2, FedRAMP) and flags requirements relevant to future US operations. No US compliance artifacts are produced until explicitly requested by CEO.

---

## Annex 8: Policy Communication and Review -- Procedures

**This section operationalizes IS-Policy Section 8.**

### Onboarding Procedure

For new human team members:
1. Provide access to the Git repository containing all policies
2. Share this IS Policy and the operational annex
3. Schedule a 30-minute security orientation covering: classification scheme, incident reporting, access request process
4. Obtain signed acknowledgment (Git commit or PR approval in the acknowledgment register)
5. Ensure completion of security awareness training within 30 days

For new AI agents:
1. Configure agent with reference to IS Policy in domain context
2. Verify agent CLAUDE.md includes appropriate security operating instructions
3. Verify agent output standards include YAML frontmatter with classification

### Annual Acknowledgment Process

Each February (aligned with policy review date):
1. CISO sends acknowledgment reminder to all personnel
2. Each team member reviews the current IS Policy
3. Acknowledgment recorded via signed commit or PR approval in `policies/acknowledgments/YYYY.md`
4. Non-compliance followed up within 14 days
5. 100% completion target tracked as IS Objective #3

### Policy Update Communication

When the IS Policy is updated:
1. CISO Agent drafts update in a feature branch
2. PR created with change description and affected sections highlighted
3. CISO and CTO review via PR comments
4. CEO approves via PR merge
5. Email notification sent to all personnel with summary of changes
6. Changes discussed at next Weekly Technical or Monthly Strategic meeting

---

## Annex 9: Exceptions and Violations -- Step-by-Step Process

**This section operationalizes IS-Policy Section 9.**

### Exception Request Step-by-Step

1. **Requester** identifies the need for an exception and discusses with CISO
2. **Requester** creates a Git branch: `exception/YYYY-MM-DD-brief-description`
3. **Requester** creates a PR using the exception request template:

```markdown
## Exception Request

**Requested by:** [Name/Role]
**Date:** [YYYY-MM-DD]
**Policy section:** [Section number and title]

### Business Justification
[Why this exception is needed]

### Risk Assessment
- **Likelihood:** [1-5]
- **Impact:** [1-5]
- **Risk score:** [Likelihood x Impact]
- **Residual risk with compensating controls:** [Score]

### Compensating Controls
[What alternative protections are in place]

### Duration
- **Start date:** [YYYY-MM-DD]
- **End date:** [YYYY-MM-DD] (maximum 12 months)
- **Review date:** [YYYY-MM-DD] (minimum 30 days before expiry)

### Affected Systems/Data/Personnel
[What is affected by this exception]
```

4. **CISO** reviews the risk assessment and compensating controls
5. **CISO** adds risk register entry for the exception
6. **CEO** approves via PR merge (tagged `[CEO-SIGNOFF-REQUIRED]`)
7. **CISO** adds the exception to the active exceptions register
8. **CISO** reviews active exceptions at each Monthly Strategic meeting
9. At expiration: exception is either renewed (new PR) or remediated (control implemented)

### Violation Reporting

If you observe a potential security policy violation:
1. Report immediately to the CISO via Teams or email
2. If the CISO is unavailable, report to the CEO
3. Do not attempt to investigate or remediate on your own (unless the situation requires immediate action to prevent data loss)
4. The CISO classifies the violation and initiates the incident response procedure if warranted

---

## Annex 10: Interim Incident Response Procedure

**This section provides interim guidance pending the detailed Incident Response Procedure (Phase 7 deliverable).**

### Interim Notification Chain

For security incidents affecting the Helge Heupel Group:

1. **Discoverer** reports to CISO immediately (Teams message + email for audit trail)
2. **CISO** classifies severity (Critical / High / Medium / Low) and assesses NIS2 reporting triggers
3. **For Critical/High:** CISO notifies CEO immediately. Emergency discussion convened.
4. **For NIS2-reportable incidents:** Follow the reporting checklists in Annex 7
5. **For all incidents:** Incident logged in the incident register (Git)
6. **Post-incident:** Root cause analysis conducted, lessons learned documented, corrective actions assigned

### Key Contacts

| Role | Primary Contact | Backup |
|------|----------------|--------|
| **Incident coordinator** | CISO | CEO |
| **Technical lead** | IT Pentester/Super Admin | CTO |
| **Management notification** | CEO | CTO |
| **BSI reporting (GmbH)** | CISO | CEO |
| **NCSC-NL reporting (B.V.)** | CISO | CEO |
| **GDPR breach notification** | CISO | CEO |

### Incident Severity Classification

| Severity | Description | Response Time | Notification |
|----------|-------------|---------------|-------------|
| **Critical** | Data breach, system compromise, ransomware, NIS2-reportable | Immediate | CEO + relevant authority within 24h |
| **High** | Significant vulnerability exploited, unauthorized access detected | Within 4 hours | CEO at next Weekly Technical |
| **Medium** | Policy violation, phishing attempt, minor vulnerability | Within 24 hours | CISO decision on escalation |
| **Low** | Informational event, failed attack attempt | Within 72 hours | Logged, reviewed at next meeting |

---

## Annex 11: Tools and Systems Reference

**This section provides a quick reference for the security-relevant tools used across the Helge Heupel Group.**

| Tool | Purpose | Security Relevance | Owner |
|------|---------|-------------------|-------|
| **Azure** | Cloud platform (West Europe, Germany West Central) | Primary processing environment. Shared responsibility model. SOC 2/ISO 27001 attested. | IT Pentester |
| **Microsoft Entra ID** | Identity and access management | MFA enforced. Conditional Access policies. Quarterly access reviews. | IT Pentester |
| **Microsoft 365** | Email, Teams, SharePoint, OneDrive | Collaboration platform. Azure Information Protection labels. EU data residency. | IT Pentester |
| **NorthGRC** | GRC platform | Governance, risk, and compliance management. Integration planned for Phase 9. | CISO |
| **Linear** | Task management | Development task tracking. No classified data stored. | CTO |
| **Float** | Resource planning | Resource and capacity planning. No classified data stored. | Strategy Partner |
| **Claude Code** | AI agent platform | 7 Claude Code agents operating under AIMS governance. Trust Level 2. | CEO |
| **Git** | Version control and document management | Single source of truth. PR workflow = audit trail. Branch protection = access control. | CTO |
| **Microsoft Intune** | Endpoint management | MDM/MAM. Device compliance policies. Remote wipe capability. | IT Pentester |

---

*Document: policies/IS-Policy-Annex.md*
*Document ID: HH-ISMS-POL-001-ANNEX*
*Operational Annex to the Information Security Policy*
