---
document-id: HH-ISMS-PROC-006
title: "HR Security Procedure"
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

# HR Security Procedure

## 1. Purpose and Scope

This procedure defines how the **Helge Heupel Group** manages information security across the personnel lifecycle — from pre-employment screening through ongoing security awareness to termination. It operationalizes IS Policy Section 4 (roles and responsibilities) and IS Policy Annex 8 (onboarding/offboarding procedures).

**Scope:** All personnel across all three Helge Heupel Group entities:

- **Helge Heupel GmbH** (Germany) — employees and contractors under German labor law
- **Helge Heupel B.V.** (Netherlands) — employees and contractors under Dutch labor law
- **Helge Heupel Inc.** (United States) — employees and contractors under US employment law (skeleton scope at Startup)
- **Consultants:** BearingPoint, NorthGRC, and other external advisors engaged via HH-ISMS-PROC-005

**Current personnel:**

| Role | Entity | Type |
|------|--------|------|
| CEO (Helge Heupel) | GmbH (Geschaeftsfuehrer), B.V. (Bestuurder) | Executive |
| CTO | GmbH | Employee |
| CISO | GmbH | Employee |
| IT Pentester / Super Admin | GmbH | Employee |
| Strategy Partner | GmbH | Employee |
| Finance Industry Senior Manager | GmbH | Employee |

**AI agents:** The 7 Claude Code agents are not personnel. AI agent "onboarding" and "offboarding" are configuration activities governed by the AI Policy (HH-AIMS-POL-001) and agent creation RACI (row 29). This procedure does not apply to AI agents.

---

## 2. Normative References

### Standards and Policies

| Reference | Title | Relevance |
|-----------|-------|-----------|
| ISO 27001:2022 Annex A | A.6.1–A.6.8 | People security controls |
| HH-ISMS-POL-001 | Information Security Policy | Parent policy (Section 4: roles, Section 8: communication and review) |
| HH-ISMS-POL-001-ANNEX | IS Policy Operational Annex | Annex 8 (onboarding/offboarding), Annex 4 (role responsibilities) |
| HH-RACI-Startup-v1.0 | RACI Matrix | Role assignments for all 32 SDLC activities |
| GDPR Art. 88 | Employee data processing | Data protection in the employment context |
| BDSG Sec. 26 | Employee data processing (Germany) | German supplementary provisions for employment data |
| AVG (Dutch GDPR) | Employee data processing (Netherlands) | Dutch GDPR implementation for employment context |
| TISAX VDA ISA 6 Chapter 2 | Organization of information security | Personnel security requirements |

### Related Procedures

| Document ID | Title | Cross-Reference Purpose |
|-------------|-------|------------------------|
| HH-ISMS-PROC-003 | Access Control Procedure | Access provisioning during onboarding, modification during role change, revocation during offboarding |
| HH-ISMS-PROC-005 | Supplier Security Procedure | Consultant/contractor engagement, NDA management for external parties |
| HH-ISMS-PROC-001 | Incident Management Procedure | Handling of personnel-related security incidents and policy violations |

---

## 3. Decision Tree: Personnel Security Lifecycle

### 3.1 Pre-Employment / Onboarding

```
START: New personnel engagement
  |
  v
[1] What type of personnel?
  |-- Employee (GmbH, B.V., or Inc.) --> Continue to [2]
  |-- Contractor --> Continue to [2] (plus HH-ISMS-PROC-005 supplier assessment)
  |-- Consultant (BearingPoint, NorthGRC) --> Redirect to HH-ISMS-PROC-005 Section 4.4
  |                                          (consultant assessment pathway)
  |-- AI Agent operator --> No HR screening. Agent governance per AI Policy.
  |                        Continue to access provisioning only.
  |
  v
[2] Conduct pre-employment screening (Section 4)
  |-- Screening appropriate to role AND jurisdiction
  |-- GmbH (Germany): Identity + employment history + references.
  |   Fuehrungszeugnis if Confidential/Secret data access.
  |-- B.V. (Netherlands): Identity + employment history + references.
  |   VOG if Confidential/Secret data access.
  |-- Inc. (United States): Identity + employment history + references.
  |   Standard background check.
  |
  v
[3] Screening passed?
  |-- YES --> Continue to [4]
  |-- NO --> CEO makes final hiring decision with documented rationale.
  |           If proceeding: compensating controls documented.
  |           If rejecting: inform candidate per applicable law.
  |
  v
[4] Execute employment documentation
  |-- Employment contract with information security responsibilities
  |-- NDA signed (see Section 6)
  |-- IS Policy acknowledgment signed (HH-ISMS-POL-001)
  |-- AI Policy acknowledgment signed (HH-AIMS-POL-001)
  |
  v
[5] Complete security awareness briefing (Section 5)
  |-- Initial briefing within first 5 business days
  |-- Covers: IS Policy overview, classification scheme,
  |   acceptable use, incident reporting, GDPR basics,
  |   AI Policy overview (prohibited practices, Trust Level 2)
  |
  v
[6] Provision access per HH-ISMS-PROC-003
  |-- Role-based access assignment per RACI matrix
  |-- MFA enrollment completed
  |-- Microsoft Entra ID account configured
  |-- Git repository access granted per role
  |
  v
[7] Add to personnel register
  |-- Record: name, entity, role, start date, NDA date,
  |   screening completion date, training completion date
  |
  v
COMPLETE: Personnel onboarded. First annual refresher in 12 months.
```

**Responsible:** CEO approves all hiring decisions. CISO coordinates security onboarding. CTO provisions technical access.

**Timeline:** Steps 2–5 completed before or within the first 5 business days of start date. Access provisioned on day 1 per approved role.

### 3.2 During Employment

```
START: Ongoing personnel security management
  |
  v
[1] Annual security awareness refresher due?
  |-- YES --> Schedule and deliver refresher (Section 5.2).
  |           Record completion in training register.
  |-- NO --> Continue to [2]
  |
  v
[2] Role change or promotion?
  |-- YES --> Review and update access per HH-ISMS-PROC-003
  |           Update RBAC assignments in Microsoft Entra ID
  |           Verify new role's screening requirements met
  |           (e.g., promotion to Confidential data access
  |           may trigger Fuehrungszeugnis requirement)
  |-- NO --> Continue to [3]
  |
  v
[3] Security performance review (annual, integrated into regular review)
  |-- Assess: compliance with IS Policy, incident reporting behavior,
  |   security awareness engagement, classification handling
  |-- If concerns identified: additional training or monitoring.
  |   If serious concerns: escalate per Section 7 (disciplinary).
  |
  v
[4] Quarterly access review participation
  |-- IT Pentester conducts review per HH-ISMS-PROC-003
  |-- CTO approves standard access changes
  |-- CEO signs off on privileged/admin account access
  |
  v
COMPLETE: Ongoing security activities recorded. Continue cycle.
```

### 3.3 Termination / Transfer

```
START: Personnel departure or transfer
  |
  v
[1] What is the reason for departure?
  |-- Voluntary resignation --> Standard departure (Section 7.1)
  |-- Contract end --> Standard departure (Section 7.1)
  |-- Transfer between entities --> Transfer procedure (see below)
  |-- Involuntary termination --> Immediate security procedure (Section 7.2)
  |-- Security concern (data breach, policy violation) --> Immediate security
  |   procedure (Section 7.2)
  |
  v
[STANDARD DEPARTURE - Section 7.1]
  |
  [2a] Schedule access revocation for last working day
  |-- All system access revoked within 4 hours of departure
  |    (per IS Policy Annex 8)
  |-- CTO executes access revocation per HH-ISMS-PROC-003
  |
  [3a] Return company assets
  |-- Company devices (if any — cloud-first company, may be minimal)
  |-- Access tokens, hardware keys (YubiKey if issued)
  |-- Any physical documents containing classified information
  |
  [4a] Confirm NDA obligations
  |-- Remind departing individual of NDA post-termination period (2 years)
  |-- Provide written summary of ongoing obligations
  |
  [5a] Exit interview (security-focused)
  |-- Questions: Were you aware of any unreported security concerns?
  |   Did you observe any data handling issues?
  |   Do you have any HH data on personal devices?
  |
  [6a] Update personnel register
  |-- Record: departure date, reason, NDA status, asset return status
  |
  --> COMPLETE
  |
  v
[IMMEDIATE SECURITY PROCEDURE - Section 7.2]
  |
  [2b] Immediate access revocation
  |-- CTO executes emergency access revocation per HH-ISMS-PROC-003
  |-- During or immediately after the notification meeting
  |-- All accounts disabled across all systems simultaneously
  |
  [3b] CEO communicates as needed to team
  |-- Minimum disclosure appropriate to situation
  |-- Protect individual's privacy per GDPR/BDSG/AVG
  |
  [4b] Post-departure monitoring
  |-- Monitor for unauthorized access attempts (30-day watch period)
  |-- CTO reviews access logs for the departing individual's accounts
  |-- Any suspicious activity reported as security incident per
  |   HH-ISMS-PROC-001
  |
  [5b] Complete remaining standard departure steps (3a-6a)
  |
  --> COMPLETE
  |
  v
[ENTITY TRANSFER]
  |
  [2c] Review access requirements for new entity
  |-- Different entity may have different jurisdictional requirements
  |-- Update employment contract for new entity
  |-- Verify NDA covers both entities (or execute new NDA)
  |
  [3c] Update access per HH-ISMS-PROC-003
  |-- Revoke entity-specific access from departing entity
  |-- Provision entity-specific access for receiving entity
  |
  [4c] Update personnel register for both entities
  |
  --> COMPLETE
```

---

## 4. Pre-Employment Screening

### Screening by Jurisdiction and Role

Pre-employment screening must be **proportionate to the role** and **lawful in the applicable jurisdiction**. German and Dutch privacy law imposes strict limits on employer background checks — screening must be relevant to the role and proportionate to the data sensitivity.

#### All Roles (Minimum Screening)

| Check | Description | When Required | Evidence |
|-------|-------------|---------------|----------|
| Identity verification | Government-issued ID check | All roles | Copy retained per applicable law |
| Employment history | Verification of prior 3 years employment | All roles | CV + 1 reference check minimum |
| Reference check | Professional reference from prior employer | All roles (minimum 1) | Documented reference outcome |

#### GmbH (Germany) — Additional Screening

| Check | Description | When Required | Legal Basis |
|-------|-------------|---------------|-------------|
| Polizeiliches Fuehrungszeugnis (criminal record certificate) | Certificate of good conduct from Bundeszentralregister | Roles with access to Confidential or Secret data | BDSG Sec. 26 — proportionate to role and data sensitivity. Request after conditional offer made. |
| Academic verification | Degree verification for roles requiring specific qualifications | Technical roles (CTO, IT Pentester) | Only when qualification is essential to the role |

**German labor law limitations:**
- Criminal record checks are only permissible when directly relevant to the role's responsibilities and the data sensitivity of information accessed
- Credit checks are generally not permitted for non-financial roles
- Social media screening should be limited to professional platforms (LinkedIn, Xing) and documented as proportionate
- The Betriebsrat (works council), if established, must be consulted on screening procedures

#### B.V. (Netherlands) — Additional Screening

| Check | Description | When Required | Legal Basis |
|-------|-------------|---------------|-------------|
| Verklaring Omtrent het Gedrag (VOG) — Certificate of Good Conduct | Certificate from Justis (Ministry of Justice) confirming no relevant criminal record | Roles with access to Confidential or Secret data | Employer may request; employee applies to Justis. Screening profile must match the role. |

**Dutch labor law limitations:**
- VOG can only be requested when relevant to the position — the employer must specify the screening profile
- Credit checks are restricted to roles with financial responsibilities
- Medical examinations are limited to roles where physical fitness is essential
- Ondernemingsraad (works council), if applicable, must be consulted on screening procedures

#### Consultant / Contractor Screening

| Check | Description | When Required |
|-------|-------------|---------------|
| Company-level due diligence | Via HH-ISMS-PROC-005 (supplier security) | All consultants/contractors |
| Individual NDA | Signed before access to HH information | All consultants/contractors |
| Security awareness confirmation | Consultant confirms awareness of HH classification scheme | All consultants/contractors |

Individual background screening of consultants is the responsibility of their employing firm. HH verifies that the consulting firm has adequate personnel screening practices as part of the HH-ISMS-PROC-005 assessment.

### Screening Decision Authority

CEO Helge Heupel approves all personnel hiring decisions for the Helge Heupel Group. The CEO may delegate initial screening coordination to the CISO or CTO but retains final approval authority.

---

## 5. Security Awareness Training

### 5.1 Initial Training (Onboarding)

**When:** Within first 5 business days of start date.

**Format:** Self-study of IS Policy (HH-ISMS-POL-001) and AI Policy (HH-AIMS-POL-001) followed by a brief orientation session.

**Topics:**

| # | Topic | Source Document | Duration |
|---|-------|-----------------|----------|
| 1 | IS Policy overview — purpose, scope, applicability | HH-ISMS-POL-001 Sections 1–4 | 20 min read |
| 2 | Information classification scheme — Public, Internal, Confidential, Secret | HH-ISMS-POL-001 Section 6 + Annex 6 | 15 min read |
| 3 | Acceptable use and handling procedures | HH-ISMS-POL-001-ANNEX Sections 1, 6 | 10 min read |
| 4 | Incident reporting — what to report, how, and to whom | HH-ISMS-POL-001-ANNEX Annex 10 | 10 min read |
| 5 | GDPR basics — data subject rights, personal data handling | HH-ISMS-POL-001 Section 7 | 10 min read |
| 6 | AI Policy overview — prohibited practices, Trust Level 2, transparency | HH-AIMS-POL-001 Sections 3–5 | 20 min read |
| 7 | Tools and systems — what you use, security expectations | HH-ISMS-POL-001-ANNEX Annex 11 | 5 min read |

**Completion:** Signed acknowledgment form confirming:
- "I have read and understood the Information Security Policy (HH-ISMS-POL-001)"
- "I have read and understood the AI Policy (HH-AIMS-POL-001)"
- "I understand my responsibilities regarding information classification and incident reporting"

**Evidence:** Acknowledgment recorded via signed commit or PR approval in `hr-security/training/YYYY-{name}-onboarding.md`.

### 5.2 Annual Refresher

**When:** Annually, delivered at the Monthly Strategic meeting in Q1 (January or February).

**Format:** 30-minute briefing session.

**Topics:**

| # | Topic | Content |
|---|-------|---------|
| 1 | IS Policy updates | Changes since last briefing, new or modified sections |
| 2 | Recent incidents / lessons learned | Anonymized incident summaries, what we learned, how procedures changed |
| 3 | Emerging threats | Threats relevant to HH (phishing, supply chain attacks, AI-specific threats) |
| 4 | GDPR refresher | Data subject rights reminders, any new guidance from DPAs |
| 5 | AI governance updates | Changes to AI Policy, new AI systems, EU AI Act enforcement updates |

**Completion:** Annual acknowledgment recorded via signed commit or PR approval in `policies/acknowledgments/YYYY.md` (aligned with IS Policy Annex 8 annual acknowledgment process).

**Tracking:** 100% completion target tracked as IS Objective #3 (complete security awareness training).

### 5.3 Role-Specific Training

In addition to the general awareness training, the following role-specific training is required:

| Role | Training Topic | Frequency | Evidence |
|------|---------------|-----------|----------|
| CTO | Secure architecture design, OWASP Top 10, threat modeling | Annual | Training completion record |
| IT Pentester | Penetration testing methodology, OWASP testing guide, tool certification updates | Annual | Training completion record |
| CEO | Management review training, NIS2UmsuCG Sec. 38 cybersecurity training, personal liability awareness | Annual | Training completion record (mandatory per NIS2) |
| CISO | ISO 27001 / ISO 42001 auditor updates, regulatory landscape, risk management | Annual | Training completion record |

**Evidence storage:** Training completion records stored in Git as `hr-security/training/YYYY-{name}-completion.md`. Each record includes: training topic, date, format (self-study / course / briefing), duration, and acknowledgment.

---

## 6. NDA Management

### Decision Tree: NDA Type

```
START: NDA requirement assessment
  |
  v
[1] What is the relationship type?
  |-- Employee --> Employee NDA (Section 6.1)
  |-- Consultant / Contractor --> Consultant NDA (Section 6.2)
  |-- AI Agent --> No NDA applicable (Section 6.3)
  |
  v
[2] Select appropriate NDA template and execute.
```

### 6.1 Employee NDA

| Field | Detail |
|-------|--------|
| When signed | At hiring, as part of employment documentation (Step 4 in Section 3.1) |
| Duration | Employment period plus 2 years post-termination |
| Template | Standard HH NDA template (stored in `templates/nda-employee.md`) |
| Signing authority | CEO Helge Heupel signs on behalf of the applicable HH entity |
| Scope | All Confidential and Secret information accessed during employment |
| Governing law | German law (GmbH), Dutch law (B.V.), New York law (Inc.) |

### 6.2 Consultant / Contractor NDA

| Field | Detail |
|-------|--------|
| When signed | At engagement, per HH-ISMS-PROC-005 Section 5, clause 1 |
| Duration | Contract period plus 2 years post-termination |
| Template | Standard HH NDA template or mutual NDA (if consultant has own template — CEO reviews) |
| Signing authority | CEO Helge Heupel signs on behalf of the applicable HH entity |
| Scope | Limited to information accessed during the specific engagement |
| Governing law | As agreed in the engagement contract |

### 6.3 AI Agent NDA

AI agents do not sign NDAs. Agent confidentiality is enforced through:
- **Trust Level 2 boundaries:** All agent outputs reviewed by humans before external use
- **Prohibited practices:** AI Policy Section 5.2 — agents cannot process Secret data without CEO authorization
- **Session scoping:** Agents access only information provided in their session context
- **No persistent memory:** Agents do not retain information between sessions beyond configured memory files

### NDA Register

The NDA register is maintained as part of HR records in Git.

| Field | Description |
|-------|-------------|
| Name | Individual or entity name |
| Entity | HH entity (GmbH, B.V., Inc.) |
| NDA Date | Date NDA was executed |
| NDA Type | Employee / Consultant / Mutual |
| Duration | Employment + 2 years / Contract + 2 years |
| Post-Termination Period | 2 years from departure date |
| Status | Active / Expired / Renewed |

---

## 7. Termination Procedures

Per IS Policy Annex 8 (onboarding/offboarding procedures), this section provides the detailed termination process.

### 7.1 Standard Departure

For voluntary resignation, planned contract end, or retirement:

| Step | Action | Responsible | Timeline |
|------|--------|-------------|----------|
| 1 | Confirm departure date and transition plan | CEO | Upon notice received |
| 2 | Schedule access revocation for last working day | CTO | At least 5 days before departure |
| 3 | Revoke all system access per HH-ISMS-PROC-003 | CTO | Within 4 hours of departure time |
| 4 | Disable Microsoft Entra ID account | IT Pentester | Within 4 hours of departure time |
| 5 | Revoke Git repository access | CTO | Within 4 hours of departure time |
| 6 | Revoke all SaaS tool access (Linear, Float, NorthGRC) | CTO / IT Pentester | Within 4 hours of departure time |
| 7 | Return company equipment | Departing individual | By last working day |
| 8 | Confirm NDA obligations in writing | CEO | At exit interview |
| 9 | Conduct security-focused exit interview | CEO or CISO | Last working day |
| 10 | Update personnel register | CISO | Within 1 business day of departure |

**Exit interview security questions:**
- Are you aware of any unreported security incidents or concerns?
- Did you observe any data handling practices inconsistent with the IS Policy?
- Do you have any HH information on personal devices? (If yes: supervised deletion)
- Do you understand your ongoing NDA obligations?

### 7.2 Involuntary / Security-Related Departure

For involuntary termination or departure triggered by security concerns:

| Step | Action | Responsible | Timeline |
|------|--------|-------------|----------|
| 1 | CEO makes termination decision | CEO | Per applicable labor law |
| 2 | **Immediate access revocation** — CTO executes emergency revocation | CTO | During or immediately after notification meeting |
| 3 | All accounts disabled simultaneously across all systems | IT Pentester | Immediately upon CTO instruction |
| 4 | CEO communicates to team as appropriate | CEO | Same day |
| 5 | Post-departure access monitoring (30-day watch period) | CTO | Starts immediately |
| 6 | Review access logs for departing individual | CTO | Within 24 hours |
| 7 | If suspicious activity detected: report as security incident per HH-ISMS-PROC-001 | CTO / CISO | Immediately upon detection |
| 8 | Complete standard departure steps 7–10 | Respective owners | Within 5 business days |

**Critical:** The 4-hour access revocation timeline in Section 7.1 becomes an **immediate** revocation for involuntary or security-related departures. Access must be revoked before or during the notification meeting.

### 7.3 Access Revocation Checklist

For both standard and involuntary departures, the following systems must be addressed:

| System | Action | Responsible |
|--------|--------|-------------|
| Microsoft Entra ID | Disable account, revoke sessions | IT Pentester |
| Microsoft 365 (email, Teams, SharePoint) | Disable access, convert mailbox to shared (if needed) | IT Pentester |
| Azure portal and subscriptions | Remove all role assignments | IT Pentester |
| Git repositories (GitHub) | Remove from organization | CTO |
| NorthGRC | Disable account | CISO |
| Linear | Disable account | CTO |
| Float | Disable account | CEO |
| Claude Code | Revoke any agent configurations referencing the individual | CTO |
| Microsoft Intune | Remote wipe company data from managed devices | IT Pentester |

---

## 8. Roles and Responsibilities

From RACI-Startup.md (HH-RACI-Startup-v1.0):

| Role | HR Security Responsibilities |
|------|------------------------------|
| **CEO (Helge Heupel)** | Accountable for all HR security decisions. Approves all hiring and termination. Signs NDAs on behalf of HH entities. Conducts exit interviews (or delegates to CISO). Completes mandatory NIS2UmsuCG Sec. 38 cybersecurity training. |
| **CTO** | Responsible for access provisioning and revocation per HH-ISMS-PROC-003. Executes emergency access revocation for involuntary departures. Reviews technical security training content. |
| **CISO** | Responsible for security awareness program design and delivery. Maintains personnel register. Coordinates pre-employment screening. Monitors training completion metrics (IS Objective #3). |
| **IT Pentester / Super Admin** | Assists with access review (quarterly). Executes Entra ID account management and Intune device management. Delivers role-specific technical security training. |
| **CISO Agent** | Recommends security awareness content based on threat landscape. Monitors compliance metrics and flags non-compliance. Drafts training materials for CISO review. |

---

## 9. Annex A Control Mapping

| Control | Name | How This Procedure Addresses It |
|---------|------|---------------------------------|
| A.6.1 | Screening | Section 4 defines jurisdiction-appropriate pre-employment screening with proportionality requirements for GmbH (Fuehrungszeugnis), B.V. (VOG), and Inc. |
| A.6.2 | Terms and Conditions of Employment | Section 3.1, Step 4 requires employment contracts to include information security responsibilities. NDA signed at hiring. |
| A.6.3 | Information Security Awareness, Education and Training | Section 5 defines the full training program: initial onboarding (5-day deadline), annual refresher (Q1 Monthly Strategic), and role-specific training for CTO, IT Pentester, CEO, and CISO |
| A.6.4 | Disciplinary Process | Section 3.2, Step 3 addresses security performance review. IS Policy Section 9 defines violation consequences (unintentional, negligent, intentional). Formal disciplinary process follows applicable labor law. |
| A.6.5 | Responsibilities After Termination or Change of Employment | Section 7 defines termination procedures with NDA confirmation. Section 6 defines post-termination NDA period (2 years). Section 3.3 covers entity transfers. |
| A.6.6 | Confidentiality or Non-Disclosure Agreements | Section 6 provides the full NDA management framework: employee NDA, consultant NDA, AI agent clarification, and NDA register |
| A.6.7 | Remote Working | Addressed implicitly — HH operates as a fully remote organization. IS Policy Annex 6 (classification handling) and Annex 11 (tools reference) define remote working security requirements. Microsoft Intune enforces endpoint security. |
| A.6.8 | Information Security Event Reporting | Section 5 (training) covers incident reporting as a core topic. IS Policy Annex 10 defines the interim reporting chain. HH-ISMS-PROC-001 provides the full incident management procedure. |

---

## 10. Regulatory Obligations

| Framework | Requirement | How This Procedure Addresses It |
|-----------|-------------|--------------------------------|
| **ISO 27001:2022** | Annex A.6.1–A.6.8 | Full personnel security lifecycle from screening through termination (Sections 3–7) |
| **TISAX VDA ISA 6** | Chapter 2 (organization of information security) | Personnel screening, awareness training, and NDA management aligned with TISAX personnel security requirements |
| **GDPR** | Art. 88 + BDSG Sec. 26 + AVG | Pre-employment screening conducted in compliance with jurisdiction-specific employee data protection law. Screening proportionate to role and data sensitivity. |
| **NIS2** | Art. 21(g) (training) | Security awareness training program satisfies NIS2 requirement for personnel training. CEO mandatory cybersecurity training per NIS2UmsuCG Sec. 38. **Informational:** Full NIS2 training program deferred to Growth phase. |

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

### Next Review

- **Annual review:** 2027-02-25
- **Extraordinary review triggers:** New hire onboarding, security-related termination, regulatory change affecting personnel screening, new jurisdiction (Inc. activation), labor law changes in Germany or Netherlands

### Related Documents

| Document ID | Title | Relationship |
|-------------|-------|-------------|
| HH-ISMS-POL-001 | Information Security Policy | Parent policy |
| HH-ISMS-POL-001-ANNEX | IS Policy Operational Annex | Annex 4 (roles), Annex 8 (onboarding/offboarding) |
| HH-AIMS-POL-001 | AI Policy | AI governance awareness training content |
| HH-ISMS-PROC-003 | Access Control Procedure | Access provisioning, modification, and revocation |
| HH-ISMS-PROC-005 | Supplier Security Procedure | Consultant/contractor engagement pathway |
| HH-ISMS-PROC-001 | Incident Management Procedure | Personnel-related security incident handling |
| HH-RACI-Startup-v1.0 | RACI Matrix | Role assignments for all SDLC activities |
| HH-GOV-Startup-v1.0 | Governance Model | Meeting structure for training delivery and review |

---

*Document: procedures/hr-security.md*
*Document ID: HH-ISMS-PROC-006*
*HR Security Procedure for the Helge Heupel Group*
