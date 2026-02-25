---
document-id: HH-ISMS-PROC-001
title: "Incident Management Procedure"
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

# Incident Management Procedure

## 1. Purpose and Scope

This procedure defines the full incident management lifecycle for the **Helge Heupel Group** Integrated Management System (IMS). It operationalizes the information security incident management requirements of IS Policy (HH-ISMS-POL-001) Section 7 and replaces the interim incident response guidance in the IS Policy Operational Annex (HH-ISMS-POL-001-ANNEX) Section 10.

### Scope

This procedure applies to:

- **All information security events and incidents** across Helge Heupel GmbH (Germany), Helge Heupel B.V. (Netherlands), and Helge Heupel Inc. (United States)
- **All personnel** (6 humans + 7 AI agents) who may detect, report, or respond to security events
- **All information assets** within the ISMS/AIMS scope: Azure infrastructure, Vercel deployments, Cloudflare Pages, Neon PostgreSQL databases, Microsoft 365, Git repositories, and AI agent systems
- **AI-specific incidents** including hallucination events, prompt injection attacks, unauthorized AI deployment, and AI system bias discovery

### Relationship to Other Documents

This procedure supersedes the interim incident response in HH-ISMS-POL-001-ANNEX Section 10. The Annex 10 content remains as a quick-reference summary; this procedure is the authoritative source for incident response.

---

## 2. Normative References

| Reference | Title | Relevance |
|-----------|-------|-----------|
| ISO 27001:2022 Annex A | A.5.24 through A.5.28 | Incident management planning, assessment, response, learning, evidence collection |
| ISO 42001:2023 | cl. 6.1.2, Annex A.6.2.6 | AI risk assessment triggers; reporting of AI-related concerns |
| TISAX VDA ISA 6 | Chapter 6 (Incident Management) | Automotive industry incident management requirements |
| HH-ISMS-POL-001 | Information Security Policy Section 7 | Regulatory compliance framework including NIS2 and GDPR |
| HH-AIMS-POL-001 | AI Policy | AI system governance, 14 prohibited practices, incident triggers |
| HH-GOV-Startup-v1.0 | Governance Model | Escalation through Weekly Technical and Monthly Strategic meetings |
| HH-RACI-Startup-v1.0 | RACI Matrix | Row 16 (Incident management), Row 17 (NIS2 reporting) |
| HH-ISMS-RMA-001 | Risk Assessment Methodology | Risk scoring for post-incident risk register updates |

### Related Procedures

| Procedure | Document ID | Cross-Reference Trigger |
|-----------|-------------|------------------------|
| Business Continuity and Disaster Recovery Plan | HH-ISMS-PROC-002 | If incident requires DR activation (service tier RPO/RTO breach or infrastructure failure) |
| Access Control Procedure | HH-ISMS-PROC-003 | If incident involves unauthorized access requiring emergency access revocation |
| Change Management Procedure | HH-ISMS-PROC-004 | If incident requires corrective change (patch, configuration fix, credential rotation) |
| Supplier Security Procedure | HH-ISMS-PROC-005 | If incident originates from a third-party supplier or service provider |
| HR Security Procedure | HH-ISMS-PROC-006 | If incident involves insider threat or personnel security violation |
| Internal Audit Program | HH-ISMS-PROC-007 | Post-incident review findings feed into audit scope and control effectiveness assessment |
| Management Review Procedure | HH-ISMS-PROC-008 | Incident trends and post-incident review outcomes are management review inputs |

---

## 3. Definitions and Severity Classification

### Key Definitions

| Term | Definition |
|------|-----------|
| **Security Event** | An identified occurrence of a system, service, or network state indicating a possible breach of information security policy or failure of controls. Not all events are incidents. |
| **Security Incident** | A security event that has been assessed and confirmed as having actually or potentially compromised the confidentiality, integrity, or availability of an information asset. |
| **Incident Commander (IC)** | The person who owns the incident end-to-end, makes prioritization and escalation decisions, and is responsible for resolution. |
| **Communications Lead (CL)** | The person who manages stakeholder updates, status communications, and customer notifications. |
| **Technical Lead (TL)** | The person who directs technical investigation and remediation for the affected system. |
| **Post-Incident Review (PIR)** | A structured review conducted after incident resolution to identify root causes, contributing factors, and improvement opportunities. |

### Severity Classification

Severity levels are extracted from the Platform/SRE domain context (HH-PLATSRE-REF-001, Section 6) and align with SDLC-Growth-v2 Section 16.3.

| Severity | Criteria | Examples | Response Time |
|----------|----------|----------|---------------|
| **SEV1 (Critical)** | Complete service outage; active data breach; AI model producing harmful output; safety risk to individuals | Production database compromised; Vercel deployment serving malicious content; AI agent executing unauthorized actions; ransomware detected | 15 minutes |
| **SEV2 (Major)** | Significant service degradation; confirmed intrusion without data exfiltration; AI accuracy below SLO; potential data exposure | Neon database performance degradation affecting users; unauthorized access to Azure resources detected; CISO Agent producing incorrect compliance guidance at scale | 30 minutes |
| **SEV3 (Minor)** | Limited impact; workaround available; single-system issue; moderate model drift | Single Vercel deployment failure with rollback available; failed phishing attempt against team member; minor AI output quality regression | 4 hours |
| **SEV4 (Low)** | Cosmetic issue; minor inconvenience; minor quality regression; informational security event | SSL certificate warning on non-production system; isolated spam email; minor UI rendering issue; low-impact AI hallucination caught in review | Next business day |

### NIS2 Applicability by Severity

| Severity | NIS2 Reporting | Rationale |
|----------|---------------|-----------|
| SEV1 | 24h early warning to BSI (GmbH) / NCSC-NL (B.V.) | Meets "significant incident" criteria per NIS2UmsuCG Sec. 32 |
| SEV2 | Assessed case-by-case by CISO and CEO | May meet threshold depending on scope, data impact, and cross-border effect |
| SEV3 | Not applicable | Below significant incident threshold |
| SEV4 | Not applicable | Below significant incident threshold |

---

## 4. Detection and Initial Triage

### 4.1 Detection Sources

At Startup, the Helge Heupel Group relies on the following detection sources:

| # | Detection Source | What It Detects | Responsible | Availability |
|---|-----------------|----------------|-------------|-------------|
| 1 | **Vercel Analytics and Status** | Deployment failures, error rate spikes, availability drops for helgeheupel-cms and verity-cms | CTO, IT Pentester | 24/7 (automated alerts to email) |
| 2 | **Cloudflare Analytics and Status** | Traffic anomalies, DDoS indicators, WAF triggers for verity-website | CTO, IT Pentester | 24/7 (automated alerts to email) |
| 3 | **Azure Monitor Basic Alerts** | Infrastructure anomalies, resource health changes, Entra ID sign-in anomalies | IT Pentester | 24/7 (automated alerts to email) |
| 4 | **User/Customer Reports** | Service outages, data discrepancies, suspicious behavior observed by end users | CEO (via support channels) | Business hours |
| 5 | **Internal Team Observation** | Unusual system behavior, suspicious emails, policy violations, AI agent anomalies | All personnel | Business hours |
| 6 | **CISO Agent Compliance Monitoring** | Compliance drift, policy violations in artifacts, risk register anomalies | CISO Agent (automated during sessions) | During active sessions |
| 7 | **GitHub Security Alerts** | Dependency vulnerabilities (Dependabot), secret scanning alerts, code scanning findings | CTO, IT Pentester | 24/7 (automated) |

**Growth target:** Microsoft Sentinel SIEM with SOAR playbooks for automated detection, correlation, and initial response.

### 4.2 Initial Classification Decision Tree

When a security event is detected or reported, the following decision tree determines whether it is an incident and, if so, its initial severity.

```
EVENT DETECTED OR REPORTED
  |
  v
[1] Is the event security-related?
  |-- NO --> Log as operational event. No further action under this procedure.
  |-- UNSURE --> Treat as security-related. Proceed to step [2].
  |-- YES --> Proceed to step [2].
  |
  v
[2] Does the event affect Confidentiality, Integrity, or Availability of an information asset?
  |-- NO --> Log as security event. Monitor for 24 hours. Close if no further indicators.
  |-- UNSURE --> Escalate to CISO for classification. Default to SEV3 pending assessment.
  |-- YES --> This is a SECURITY INCIDENT. Proceed to step [3].
  |
  v
[3] Assign initial severity using the classification table in Section 3.
  |-- SEV1 or SEV2 --> IMMEDIATE: Activate ICS-Lite roles (Section 5). Notify CEO.
  |-- SEV3 --> IC (CTO) reviews within 4 hours. No immediate role activation required.
  |-- SEV4 --> IC (CTO) reviews at next business day. Log in incident register.
  |
  v
[4] Create incident record in Git: incidents/INC-{YYYY-MM-DD}-{short-description}.md
  |-- Include: date/time detected, detection source, initial severity, initial description, assigned IC.
```

### 4.3 00:00-08:00 CET Timezone Gap Coverage

At Startup, there is no natural timezone diversity between Germany (GmbH) and the Netherlands (B.V.). The following coverage applies during the overnight gap:

| Time Window | Coverage Mechanism | Response SLA |
|------------|-------------------|-------------|
| 08:00-18:00 CET | Full team availability (CTO, IT Pentester, CEO reachable) | Per severity table (15 min SEV1, 30 min SEV2) |
| 18:00-00:00 CET | CTO and IT Pentester on informal on-call (Signal/phone) | 30 minutes for SEV1 only |
| 00:00-08:00 CET | Vercel/Cloudflare built-in uptime alerts to CTO email + IT Pentester email | 30 minutes for SEV1 acknowledgment only |

**Important:** During 00:00-08:00 CET, only automated platform alerts (Vercel, Cloudflare, Azure) provide detection. SEV2-SEV4 events occurring in this window are triaged at the start of the next business day.

**Growth target:** Sentinel-based automated detection with auto-escalation. Contracted overnight SRE support or cross-entity rotation with US (Inc.) coverage.

---

## 5. ICS-Lite Role Activation

The Helge Heupel Group uses an ICS-Lite (Incident Command System — Lite) model appropriate for a Startup team of 6 humans + 7 AI agents. This is a simplified version of the full ICS model described in SDLC-Growth-v2 Section 16.3.

### Role Assignments

| Role | Primary | Backup | Responsibility |
|------|---------|--------|---------------|
| **Incident Commander (IC)** | CTO | IT Pentester | Owns incident end-to-end. Makes prioritization and escalation decisions. Coordinates response. Declares incident resolved. |
| **Communications Lead (CL)** | CEO (Helge Heupel) | Strategy Partner | Manages internal and external stakeholder updates. Sole authorized external communicator. Decides on customer notification. |
| **Technical Lead (TL)** | Most qualified engineer for affected system | CTO (if TL role is filled by IT Pentester) | Directs technical investigation and remediation. Executes containment, eradication, and recovery steps. |

### Activation by Severity

| Severity | Roles Activated | Contact Method | Activation Timeframe |
|----------|----------------|---------------|---------------------|
| **SEV1** | IC + CL + TL (all three roles) | Signal message + phone call | Within 15 minutes of detection |
| **SEV2** | IC + TL | Signal message | Within 30 minutes of detection |
| **SEV3** | IC reviews (no formal activation) | Signal message or email | Within 4 hours (next business day if overnight) |
| **SEV4** | IC reviews at next opportunity | Email | Next business day |

### AI Agent Assistance During Incidents

AI agents operate at Trust Level 2 (Supervised Autonomous) during incidents. They may assist but do not execute incident response actions independently.

| Agent | Assistance Role | Limitation |
|-------|----------------|-----------|
| **CISO Agent** | Draft severity classification rationale; identify regulatory reporting obligations; prepare post-incident review template | Cannot classify severity authoritatively; human IC makes final classification |
| **Platform/SRE Agent** | Draft recovery runbook steps; identify affected infrastructure; prepare monitoring queries | Cannot execute recovery actions; human TL executes |
| **CTO Agent** | Assess architectural impact; draft ADR if architecture change needed | Cannot approve architecture changes during incident |
| **AppSec Agent** | Analyze attack vectors; draft threat model updates; identify related vulnerabilities | Cannot authorize security exceptions |

---

## 6. Incident Response Runbook

This section provides step-by-step response procedures with verification checks at each stage. The IC coordinates overall response; the TL executes technical steps.

### 6.1 Containment

**Objective:** Stop the incident from spreading and limit further damage.

**Step 1: Assess scope of compromise**

- TL identifies all affected systems (check Vercel deployments, Cloudflare sites, Neon databases, Azure resources, Git repositories)
- TL documents affected systems in the incident record
- **Verification:** "List of affected systems documented. No additional systems showing compromise indicators."

**Step 2: Isolate affected systems**

Depending on the affected system, apply the appropriate containment action:

| Affected System | Containment Action | How to Execute |
|----------------|-------------------|---------------|
| **Vercel deployment** (helgeheupel-cms or verity-cms) | Roll back to last known-good deployment | Vercel Dashboard > Deployments > select previous deployment > "Promote to Production" or CLI: `vercel rollback` |
| **Cloudflare Pages** (verity-website) | Roll back to previous build or enable Under Attack Mode | Cloudflare Dashboard > Pages > select previous deployment > "Rollback" or Security > Under Attack Mode: On |
| **Cloudflare WAF** | Block malicious traffic patterns | Cloudflare Dashboard > Security > WAF > Create custom rule to block identified attack pattern |
| **Neon PostgreSQL** | Pause the database branch (stops all connections) | Neon Console > select database > Settings > "Pause compute" |
| **Azure resource** | Disable the affected resource or restrict network access | Azure Portal > Resource > Stop/Disable or Network Security Group rule update |
| **Microsoft Entra ID** (compromised account) | Disable the user account; revoke all sessions | Entra ID > Users > select user > "Block sign-in: Yes"; Revoke sessions |
| **Git repository** | Restrict write access; enable branch protection if not already set | GitHub > Settings > Branches > Add branch protection rule; or restrict collaborator access |
| **AI agent** (Claude Code) | Terminate the agent session; do not spawn new sessions for the affected agent | Close the terminal running Claude Code; do not re-invoke until investigation complete |

- **Verification:** "Affected system(s) isolated. Confirmed no further unauthorized access or data exfiltration in available logs."

**Step 3: Preserve evidence**

- TL captures relevant logs, screenshots, and system state before any remediation
- Store evidence in `incidents/evidence/INC-{YYYY-MM-DD}-{short-description}/`
- For Vercel: export function logs and deployment logs
- For Cloudflare: export security event logs and analytics
- For Neon: export query logs if available
- For Azure: export Activity Log and Sign-in logs from Entra ID
- **Verification:** "Evidence captured and stored in incident evidence directory."

### 6.2 Eradication

**Objective:** Remove the root cause of the incident.

**Step 1: Identify root cause**

- TL analyzes evidence to determine the root cause (vulnerability, misconfiguration, compromised credential, social engineering, etc.)
- Document root cause hypothesis in incident record
- **Verification:** "Root cause identified and documented."

**Step 2: Remove root cause**

| Root Cause Type | Eradication Action | How to Execute |
|----------------|-------------------|---------------|
| **Vulnerability in code** | Apply patch or fix | Create Git branch, fix vulnerability, submit PR for CTO review (expedited for SEV1/SEV2 — CTO reviews immediately) |
| **Misconfiguration** | Correct the configuration | Update configuration via appropriate admin interface (Vercel, Cloudflare, Azure, Neon). Document change. |
| **Compromised credential** | Rotate all affected credentials | Rotate API keys (Vercel, Cloudflare, Neon connection strings, Azure service principals). Update environment variables. Force password reset for affected Entra ID accounts. |
| **Malicious dependency** | Remove and replace the dependency | Update `pnpm-lock.yaml`, run `pnpm audit`, rebuild and redeploy. Follow HH-ISMS-PROC-005 for supplier assessment. |
| **Social engineering / phishing** | Isolate affected accounts; security awareness reinforcement | Block compromised accounts (Entra ID). Review access logs for lateral movement. Notify affected personnel. |

- **Verification:** "Root cause removed. Vulnerability/misconfiguration is resolved. Credential rotation complete (if applicable)."

**Step 3: Verify eradication**

- TL confirms the root cause is no longer present
- Run security scan (Semgrep for code vulnerabilities, `pnpm audit` for dependencies)
- Check that no backdoors, persistent access, or residual compromise exists
- **Verification:** "Security scan clean. No residual indicators of compromise."

### 6.3 Recovery

**Objective:** Restore normal operations and confirm system health.

**Step 1: Restore affected systems**

| Affected System | Recovery Action | How to Execute |
|----------------|----------------|---------------|
| **Vercel deployment** | Redeploy from clean codebase | `vercel deploy --prod` from the patched branch, or promote the fixed deployment via dashboard |
| **Cloudflare Pages** | Trigger rebuild from clean codebase | Push to production branch in Git; Cloudflare auto-deploys |
| **Neon PostgreSQL** | Resume compute; or restore from PITR backup if data corruption occurred | Neon Console > "Resume compute" or Restore > select timestamp > "Restore to new branch" > verify > promote |
| **Azure resource** | Re-enable resource; verify configuration | Azure Portal > Resource > Start/Enable; verify Network Security Group rules; verify access policies |
| **Microsoft Entra ID** | Re-enable account with new credentials and MFA re-enrollment | Entra ID > Users > select user > "Block sign-in: No"; user resets password and re-enrolls MFA |
| **DNS (if affected)** | Update DNS records; verify propagation | Cloudflare Dashboard > DNS; verify with `dig` or online DNS propagation checker |

- **Verification:** "Affected system(s) restored and operational."

**Step 2: Validate system health**

- TL verifies service health checks pass for all affected systems
- Check Vercel deployment status (green/healthy)
- Check Cloudflare analytics for normal traffic patterns
- Check Neon database connectivity and query response times
- Verify Azure resource health in Azure Portal
- **Verification:** "All service health checks pass. Error rates and latency within normal parameters."

**Step 3: Monitor for recurrence**

- TL monitors affected systems for 24 hours (SEV1/SEV2) or until next business day (SEV3/SEV4)
- Set up temporary enhanced monitoring if possible (e.g., Cloudflare notification thresholds lowered)
- **Verification:** "24-hour monitoring period complete. No recurrence indicators detected."

**Step 4: Declare incident resolved**

- IC reviews containment, eradication, and recovery evidence
- IC declares the incident resolved and updates the incident record with resolution timestamp
- IC notifies all involved parties that the incident is closed
- **Verification:** "Incident record updated with resolution. All parties notified."

---

## 7. Communication

### 7.1 Internal Communication

| Action | Responsible | When | Channel |
|--------|-----------|------|---------|
| Notify CEO of SEV1/SEV2 incident | IC (CTO) | Immediately upon classification | Signal message + phone call |
| Notify affected team members | IC (CTO) | Upon incident confirmation | Signal group message |
| Provide status updates during active incident | IC (CTO) | Every 30 minutes (SEV1) / every 2 hours (SEV2) | Signal group message |
| Notify team of incident resolution | IC (CTO) | Upon resolution declaration | Signal group message + email for record |
| Report at Weekly Technical meeting | IC (CTO) | Next Weekly Technical | Meeting agenda item 1 (per governance model) |

### 7.2 External Communication

**CEO (Helge Heupel) is the sole authorized external communicator.** No other team member communicates externally about security incidents without CEO explicit authorization.

| Scenario | Communication | Responsible | Timeline |
|----------|--------------|-------------|----------|
| **Customer data breach** | Notify affected customers | CEO | Within 72 hours per GDPR Art. 34 (if high risk to individuals) |
| **Service disruption affecting customers** | Status update to affected customers | CEO | Within 4 hours of confirmed disruption |
| **Partner/vendor involved** | Notify affected partner | CEO | Within 24 hours |
| **Media inquiry** | All media inquiries routed to CEO | CEO | As received |

### 7.3 Customer Notification Decision Tree

```
INCIDENT INVOLVES CUSTOMER DATA OR SERVICE
  |
  v
[1] Is customer personal data affected?
  |-- YES --> [2] Is there a risk to the rights and freedoms of individuals?
  |             |-- YES (high risk) --> Notify data subjects without undue delay (GDPR Art. 34)
  |             |-- YES (standard risk) --> Notify supervisory authority (Section 9). Customer notification at CEO discretion.
  |             |-- NO --> Document assessment. No customer notification required.
  |-- NO --> [3] Is customer service affected?
               |-- YES --> CEO decides on proactive service disruption notice
               |-- NO --> No customer notification required
```

---

## 8. NIS2 Reporting (Reference Section)

> **Status:** INFORMATIONAL. NIS2 reporting is documented here as a reference for Growth-phase activation. At Startup, these steps serve as the reporting procedure if a NIS2-reportable incident occurs. Full NIS2 compliance program activation is deferred to the Growth phase.

### 8.1 GmbH — BSI Reporting

**Authority:** Bundesamt fuer Sicherheit in der Informationstechnik (BSI)
**Legal basis:** NIS2UmsuCG Sec. 32 (Meldepflichten)
**Portal:** portal.bsi.bund.de
**Registration:** Via Mein Unternehmenskonto (MUK) with ELSTER certificate
**Reporting language:** German
**Contact:** BSI Meldestelle (reporting office via portal)

**Significant Incident Criteria (NIS2UmsuCG):**
- Service disruption affecting >= 5% of users
- Data breach involving personal data
- Cross-border impact affecting B.V. or Inc.
- Compromise of critical systems

| Timeline | Obligation | Action | Template |
|----------|-----------|--------|----------|
| **T+24h (max)** | Early warning (Fruehwarnung) | Submit via portal.bsi.bund.de. Include: incident type, suspected cause, cross-border impact assessment. | BSI Erstmeldung template |
| **T+72h (max)** | Detailed report (Detaillierter Bericht) | Submit via portal.bsi.bund.de. Include: severity assessment, impact analysis, indicators of compromise, initial remediation measures. | BSI detailed report template |
| **T+1 month (max)** | Final report (Abschlussbericht) | Submit via portal.bsi.bund.de. Include: root cause analysis, full remediation actions taken, lessons learned, preventive measures implemented. | BSI final report template |

**Step-by-step BSI reporting:**

1. IC determines the incident meets significant incident criteria (above)
2. CISO prepares the early warning report content in German
3. CEO reviews and approves the report content
4. CISO submits via portal.bsi.bund.de within 24 hours of incident detection
5. CISO prepares the detailed report within 72 hours
6. CEO reviews and approves; CISO submits
7. After incident resolution, CISO prepares the final report within 1 month
8. CEO reviews and approves; CISO submits
9. All submissions documented in the incident record with timestamps

### 8.2 B.V. — NCSC-NL Reporting

**Authority:** Nationaal Cyber Security Centrum (NCSC-NL)
**Legal basis:** Wet beveiliging netwerk- en informatiesystemen (Wbni) as amended for NIS2
**Portal:** mijn.ncsc.nl
**Incident form:** ncsc.nl/contact/contactformulieren/incident-melden
**Reporting language:** Dutch (formal notifications), English (technical reports accepted)
**Contact:** NCSC-NL via mijn.ncsc.nl portal

| Timeline | Obligation | Action | Template |
|----------|-----------|--------|----------|
| **T+24h (max)** | Early warning | Submit via mijn.ncsc.nl. Include: incident type, suspected cause, cross-border impact. | NCSC-NL early warning form |
| **T+72h (max)** | Detailed report | Submit via mijn.ncsc.nl. Include: severity, impact, IoCs, remediation status. | NCSC-NL detailed report form |
| **T+1 month (max)** | Final report | Submit via mijn.ncsc.nl. Include: root cause, full remediation, lessons learned. | NCSC-NL final report form |

**Step-by-step NCSC-NL reporting:**

1. IC determines the incident meets significant incident criteria (NIS2 thresholds)
2. CISO prepares the early warning content (Dutch for formal, English for technical details)
3. CEO reviews and approves the report content
4. CISO submits via mijn.ncsc.nl within 24 hours
5. CISO prepares the detailed report within 72 hours
6. CEO reviews and approves; CISO submits
7. After resolution, CISO prepares the final report within 1 month
8. CEO reviews and approves; CISO submits

### 8.3 Dual-Entity Incident Coordination

If an incident affects both GmbH and B.V. (shared infrastructure such as Azure, Git repositories, or AI agent systems):

1. **Report to BOTH authorities** within their respective timelines
2. **CEO coordinates** dual-entity response as Communications Lead
3. **CISO prepares parallel reports** — BSI report in German, NCSC-NL report in Dutch/English
4. **Cross-reference** the reports: each report mentions that the other entity is also reporting
5. **Single incident record** in Git covers both entities with separate reporting status tracking

### 8.4 Growth Activation Checklist

When NIS2 transitions from informational to active:

- [ ] Confirm GmbH BSI registration is current (portal.bsi.bund.de)
- [ ] Confirm B.V. NCSC-NL registration is current (mijn.ncsc.nl)
- [ ] Activate automated NIS2 classification in Sentinel analytics rules
- [ ] Pre-populate BSI and NCSC-NL report templates with entity details
- [ ] Establish legal review SLA (2 hours for report review before submission)
- [ ] Test end-to-end reporting workflow with tabletop exercise
- [ ] Integrate NIS2 reporting triggers into Sentinel SOAR playbooks
- [ ] Assign dedicated NIS2 reporting coordinator role

---

## 9. GDPR Breach Notification

### Obligation

Per IS Policy (HH-ISMS-POL-001) Section 7 and GDPR Articles 33-34, the Helge Heupel Group must notify supervisory authorities and, in certain cases, data subjects when a personal data breach occurs.

### GDPR Breach Notification Decision Tree

```
INCIDENT INVOLVES PERSONAL DATA
  |
  v
[1] Has there been a breach of personal data?
    (unauthorized access, loss, alteration, disclosure)
  |-- NO --> No GDPR notification required. Document assessment in incident record.
  |-- YES --> Proceed to [2].
  |
  v
[2] Is the breach likely to result in a risk to the rights and freedoms
    of natural persons?
  |-- NO --> Document the breach internally (GDPR Art. 33(5)). No authority notification required.
  |-- YES --> Proceed to [3]. NOTIFY SUPERVISORY AUTHORITY within 72 hours.
  |
  v
[3] Is the breach likely to result in a HIGH risk to the rights and
    freedoms of natural persons?
  |-- NO --> Authority notification only. No data subject notification required.
  |-- YES --> NOTIFY DATA SUBJECTS without undue delay (GDPR Art. 34).
```

### Supervisory Authority by Entity

| Entity | Supervisory Authority | Contact |
|--------|----------------------|---------|
| **Helge Heupel GmbH** | Landesbeauftragte fuer Datenschutz und Informationsfreiheit (LfDI) of the relevant German Bundesland | Via the LfDI online reporting portal |
| **Helge Heupel B.V.** | Autoriteit Persoonsgegevens (AP) | Via autoriteitpersoonsgegevens.nl/en/melden/meldplicht-datalekken |
| **Helge Heupel Inc.** | Varies by state (no federal data breach notification authority). Consult legal counsel. | Per applicable state law |

### GDPR Notification Content (Art. 33(3))

The supervisory authority notification must include:

1. Nature of the personal data breach (categories and approximate number of data subjects and records)
2. Name and contact details of the data protection contact (CISO)
3. Description of likely consequences of the breach
4. Description of measures taken or proposed to address the breach and mitigate effects

### Dual Notification Assessment

**Critical:** NIS2 and GDPR notifications are separate obligations with different triggers, timelines, and authorities. A single incident may require:

- NIS2 reporting to BSI/NCSC-NL (24h/72h/1-month — see Section 8)
- GDPR reporting to LfDI/AP (72h — this section)
- Both in parallel

CISO assesses both triggers independently for every SEV1/SEV2 incident.

---

## 10. AI-Specific Incident Types

Per ISO 42001 and the AI Policy (HH-AIMS-POL-001), the following AI-specific incident types are recognized and classified using the same SEV1-SEV4 scale.

### AI Incident Classification

| AI Incident Type | Description | Typical Severity | Additional Actions |
|-----------------|-------------|-----------------|-------------------|
| **AI system producing harmful output** | AI agent or product AI generates output that could cause harm to individuals, violate rights, or produce dangerous recommendations | SEV1 (if customer-facing) / SEV2 (if internal) | Immediately terminate affected AI session. Check AI System Registry for affected system. Notify CTO + AI Science Agent for assessment. |
| **Unauthorized AI model deployment** | An AI model or agent is deployed to production without following the approval process in AI Policy Section 5 | SEV2 | Suspend the unauthorized deployment. Review access controls. Follow HH-ISMS-PROC-004 for corrective change management. |
| **AI system data poisoning** | Training data, fine-tuning data, or input data has been maliciously manipulated to influence AI model behavior | SEV1 (if in production) / SEV2 (if detected before deployment) | Quarantine affected data. Roll back to known-good model state. Engage AI Science Agent for data integrity assessment. |
| **AI system bias discovered** | AI system produces systematically discriminatory outputs across protected attributes | SEV2 (if customer-facing) / SEV3 (if internal) | Document the bias pattern. Assess individual/society impact per AI Risk Assessment Procedure (HH-AIMS-RMA-001). If Individual/Society impact >= 4, CEO explicit acceptance required. |
| **Prompt injection attack** | Adversarial input successfully manipulates AI agent behavior to bypass security controls or produce unintended actions | SEV1 (if data exfiltrated) / SEV2 (if contained) | Terminate affected AI session. Analyze the attack vector. Update threat model (TM-CLAUDE-001). Review AI agent tool permissions. |
| **AI service provider outage** | Anthropic API or Azure OpenAI Service unavailable, disabling AI agent operations | SEV3 (if workaround available) / SEV2 (if critical workflow blocked) | Activate manual fallback procedures. Monitor provider status page. No HH-side remediation possible for provider outages. |

### AI Incident Response Additional Steps

For all AI-specific incidents, in addition to the standard runbook (Section 6):

1. **Check the AI System Registry** (`ai-registry/` directory) for the affected system's registration entry, classification, and applicable controls
2. **Notify CTO and AI Science Agent** for technical assessment of AI-specific impact
3. **Assess Individual/Society impact dimension** per the AI Risk Assessment Procedure (HH-AIMS-RMA-001, Step 3)
4. **Update the AI System Registry entry** with incident reference after resolution
5. **Review ISO 42001 Annex A.6.2.6** (Reporting of AI-related concerns) compliance

---

## 11. Post-Incident Review

### Review Requirements

| Severity | Review Required | Timeline | Participants |
|----------|----------------|----------|-------------|
| **SEV1** | Mandatory | Within 5 business days of resolution | IC, CL, TL, CEO, CISO |
| **SEV2** | Mandatory | Within 5 business days of resolution | IC, TL, CISO |
| **SEV3** | Optional (IC discretion) | Within 10 business days if conducted | IC, TL |
| **SEV4** | Not required | N/A | N/A |

### Post-Incident Review Template

Each PIR is documented in Git as `incidents/PIR-{YYYY-MM-DD}-{short-description}.md` with the following structure:

```markdown
---
incident-id: INC-{YYYY-MM-DD}-{short-description}
pir-date: {YYYY-MM-DD}
severity: {SEV1|SEV2|SEV3}
incident-commander: {name}
participants: [{names}]
---

# Post-Incident Review: {short description}

## 1. Incident Timeline
| Time (UTC) | Event | Actor |
|-----------|-------|-------|
| {time} | {event description} | {who} |

## 2. Root Cause Analysis
### Primary Root Cause
{description}

### Contributing Factors
- {factor 1}
- {factor 2}

## 3. What Worked Well
- {positive 1}
- {positive 2}

## 4. What Needs Improvement
- {improvement 1}
- {improvement 2}

## 5. Action Items
| # | Action | Owner | Deadline | Status |
|---|--------|-------|----------|--------|
| 1 | {action} | {owner} | {date} | Open |

## 6. Risk Register Updates
{List any risk register entries that need to be created or updated
as a result of this incident. Reference risk IDs.}
```

### PIR Outputs

Post-incident reviews feed into multiple processes:

| Output | Destination | Purpose |
|--------|------------|---------|
| Action items with owners and deadlines | Tracked in Git and Weekly Technical meeting | Ensure corrective actions are completed |
| Risk register updates | Risk register in `risks/` directory | Update risk scores based on actual incident occurrence |
| Control effectiveness assessment | Internal audit scope (HH-ISMS-PROC-007) | Feed into audit planning — controls that failed during incidents get priority audit attention |
| Incident trends | Management review (HH-ISMS-PROC-008) | Input to Monthly Strategic meeting agenda item 2 |
| Lessons learned | Knowledge base | Improve future incident response |

---

## 12. Metrics and KPIs

The following metrics are tracked for all incidents and reported at the Monthly Strategic meeting (management review input).

| Metric | Definition | Target | Measurement |
|--------|-----------|--------|-------------|
| **Mean Time to Detect (MTTD)** | Time from incident occurrence to detection | < 30 minutes (SEV1) | Incident record timestamps |
| **Mean Time to Respond (MTTR)** | Time from detection to IC activation and initial response | < 15 minutes (SEV1), < 30 minutes (SEV2) | Incident record timestamps |
| **Mean Time to Resolve** | Time from detection to resolution declaration | < 4 hours (SEV1), < 8 hours (SEV2) | Incident record timestamps |
| **Incidents by Severity per Quarter** | Count of incidents per severity level | SEV1: 0, SEV2: < 2 | Incident register |
| **Post-Incident Review Completion Rate** | Percentage of SEV1/SEV2 incidents with completed PIR within 5 business days | 100% | PIR documents in Git |
| **NIS2 Reporting SLA Compliance** | Percentage of NIS2-reportable incidents where early warning submitted within 24 hours | 100% | BSI/NCSC-NL submission records |
| **GDPR Notification SLA Compliance** | Percentage of notifiable breaches where authority notified within 72 hours | 100% | DPA notification records |
| **Recurring Incident Rate** | Percentage of incidents with same root cause as a previous incident | < 10% | PIR root cause analysis |

---

## 13. Annex A Control Mapping

| Control | Name | How This Procedure Addresses It |
|---------|------|---------------------------------|
| **A.5.24** | Information Security Incident Management Planning and Preparation | Sections 3-5 define the full incident planning framework: severity classification, detection sources, ICS-Lite roles, and activation procedures |
| **A.5.25** | Assessment and Decision on Information Security Events | Section 4.2 provides the classification decision tree for distinguishing events from incidents and assigning severity |
| **A.5.26** | Response to Information Security Incidents | Section 6 provides the step-by-step response runbook with containment, eradication, and recovery procedures |
| **A.5.27** | Learning from Information Security Incidents | Section 11 defines the post-incident review process with mandatory reviews for SEV1/SEV2, action item tracking, and risk register updates |
| **A.5.28** | Collection of Evidence | Section 6.1 Step 3 specifies evidence preservation procedures including log capture, screenshot collection, and evidence directory structure |

### ISO 42001 Control Mapping

| Control | Name | How This Procedure Addresses It |
|---------|------|---------------------------------|
| **A.6.2.6** | Reporting of AI-related concerns | Section 10 defines AI-specific incident types and requires notification to CTO + AI Science Agent for assessment. Reporting chain ensures AI concerns reach appropriate technical reviewers. |

---

## 14. Regulatory Obligations

| Framework | Requirement | How This Procedure Satisfies It |
|-----------|------------|--------------------------------|
| **ISO 27001:2022** | cl. 6.1 (Risk assessment), Annex A.5.24-A.5.28 | Full incident lifecycle from planning through post-incident review. Annex A control mapping in Section 13. |
| **ISO 42001:2023** | cl. 6.1.2 (AI risk assessment), Annex A.6.2.6 | AI-specific incident types in Section 10. AI risk assessment triggers feed from incident classification. |
| **TISAX VDA ISA 6** | Chapter 6 (Incident Management) | Full incident management procedure with severity classification, response runbook, and evidence collection. |
| **NIS2** | NIS2UmsuCG Sec. 32 / Wbni (Meldepflichten) | Section 8 provides NIS2 reporting reference with BSI and NCSC-NL portal URLs, timelines, and step-by-step reporting instructions. Status: informational. |
| **GDPR** | Art. 33 (Notification to supervisory authority), Art. 34 (Communication to data subject) | Section 9 provides GDPR breach notification decision tree, supervisory authority contacts, and notification content requirements. |

---

## 15. Document Control

### Version History

| Version | Date | Author | Change Summary | Approved By |
|---------|------|--------|---------------|-------------|
| v1.0 | 2026-02-25 | CISO Agent | Initial release. Replaces interim incident response in HH-ISMS-POL-001-ANNEX Section 10. | Pending CEO approval |

### Approval

This document is approved via Git Pull Request. The approval chain is:
1. **Author:** CISO Agent drafts the document
2. **Reviewers:** CISO and CTO review via PR comments
3. **Approver:** CEO Helge Heupel approves via PR merge

`[CEO-SIGNOFF-REQUIRED]`

### Next Review

- **Annual review:** 2027-02-25
- **Extraordinary review triggers:** Any SEV1 incident, major organizational change, regulatory change affecting incident reporting obligations, audit finding related to incident management

### Related Documents

| Document ID | Title | Relationship |
|-------------|-------|-------------|
| HH-ISMS-POL-001 | Information Security Policy | Parent policy; this procedure operationalizes Section 7 |
| HH-ISMS-POL-001-ANNEX | IS Policy Operational Annex | Superseded interim procedure in Section 10 |
| HH-AIMS-POL-001 | AI Policy | AI system governance; Section 10 AI incident types |
| HH-ISMS-PROC-002 | BCP/DR Plan | Cross-reference when incident triggers DR activation |
| HH-ISMS-PROC-004 | Change Management Procedure | Cross-reference for corrective changes post-incident |
| HH-ISMS-RMA-001 | Risk Assessment Methodology | Risk scoring for post-incident risk register updates |
| HH-AIMS-RMA-001 | AI Risk Assessment Procedure | AI-specific risk assessment triggered by AI incidents |
| HH-PLATSRE-REF-001 | Platform/SRE Domain Context | Source for severity classification and ICS-Lite model |
| HH-GOV-Startup-v1.0 | Governance Model | Escalation paths and meeting structure |
| HH-RACI-Startup-v1.0 | RACI Matrix | Role assignments for incident management and NIS2 reporting |

---

*Document: procedures/incident-management.md*
*Document ID: HH-ISMS-PROC-001*
*Incident Management Procedure for the Helge Heupel Group*
