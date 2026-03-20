---
document-id: HH-ISMS-PROC-003
title: "Access Control Procedure"
version: v1.0
date: 2026-02-25
classification: Internal
author: CISO Agent
reviewer: [CISO, CTO]
approver: CEO
review-cycle: Annual
next-review: 2027-02-25
status: Draft
parent-document: HH-ISMS-POL-001
ims-context: HH-IMS-CTX-001
change-summary: Initial release
---

# Access Control Procedure

## 1. Purpose and Scope

This procedure defines the access control lifecycle for the **Helge Heupel Group** (GmbH, B.V., Inc.). It operationalizes IS Policy Section 6 (information classification) and IS Policy Annex 4 (roles and responsibilities) into actionable decision trees that any team member can follow without consulting additional documents.

**Scope:** All logical access to Helge Heupel Group systems including:

- **Cloud platforms:** Azure (West Europe, Germany West Central), Microsoft 365, Microsoft Entra ID
- **Hosting platforms:** Vercel, Cloudflare
- **Database services:** Neon PostgreSQL
- **Source code:** GitHub repositories
- **AI agent configurations:** Claude Code agent CLAUDE.md files, reference documents, routing rules
- **Development tools:** Linear, Float
- **GRC platform:** NorthGRC

This procedure applies to all 6 human personnel, 7 Claude Code AI agents, contractors, and third parties with access to Helge Heupel Group information assets.

**Parent policy:** Information Security Policy (HH-ISMS-POL-001)
**Governance model:** Risk-tiered gate model (HH-GOV-Startup-v1.0)

---

## 2. Normative References

### Standards and Controls

| Reference | Title | Relevance |
|-----------|-------|-----------|
| ISO 27001:2022 A.5.15 | Access Control | Primary control for access control policy and rules |
| ISO 27001:2022 A.5.16 | Identity Management | User identity lifecycle management |
| ISO 27001:2022 A.5.17 | Authentication Information | MFA and credential management |
| ISO 27001:2022 A.5.18 | Access Rights | Provisioning and review of access rights |
| ISO 27001:2022 A.8.1 | User Endpoint Devices | Endpoint access control via Intune |
| ISO 27001:2022 A.8.2 | Privileged Access Rights | Admin and elevated access management |
| ISO 27001:2022 A.8.3 | Information Access Restriction | Need-to-know enforcement |
| ISO 27001:2022 A.8.4 | Access to Source Code | GitHub repository access control |
| ISO 27001:2022 A.8.5 | Secure Authentication | Authentication mechanism requirements |
| TISAX VDA ISA 6 Ch. 4 | Access Control | Automotive industry access control requirements |
| GDPR Art. 12-23 | Data Subject Rights | Right of access, rectification, erasure, portability |
| GDPR Art. 25 | Data Protection by Design | Privacy by design in access control systems |

### Internal Documents

| Document ID | Title | Relationship |
|-------------|-------|-------------|
| HH-ISMS-POL-001 | Information Security Policy | Parent policy; Section 6 (classification), Section 4 (roles) |
| HH-ISMS-POL-001-ANNEX | IS Policy Operational Annex | Annex 6 (classification handling), Annex 4 (role responsibilities) |
| HH-GOV-Startup-v1.0 | Governance Model | Risk-tiered gate model for access approval thresholds |
| HH-RACI-Startup-v1.0 | RACI Matrix | Role assignments for access-related activities |
| HH-ISMS-RMA-001 | Risk Assessment Methodology | Risk scoring for access-related risk decisions |

### Related Procedures

| Document ID | Title | Cross-Reference Trigger |
|-------------|-------|------------------------|
| HH-ISMS-PROC-001 | Incident Management Procedure | Security incident involving unauthorized access triggers incident response |
| HH-ISMS-PROC-004 | Change Management Procedure | Changes to RBAC model or access policies follow change management |
| HH-ISMS-PROC-006 | HR Security Procedure | Onboarding provisions initial access; offboarding triggers access revocation |
| HH-ISMS-PROC-008 | Management Review Procedure | Quarterly access review results feed into management review inputs |

---

## 3. Decision Tree: Access Lifecycle

### 3.1 New Access Request

```
START: New access needed
  |
  v
WHO needs access?
  |
  +-- Employee (6 HH human roles)
  |     |
  |     v
  |   WHAT system? (see RBAC table, Section 4)
  |     |
  |     v
  |   WHAT level? (Read / Write / Admin)
  |     |
  |     v
  |   Is this the STANDARD level for the role? (check RBAC table)
  |     |
  |     +-- YES: Auto-approve per RBAC table
  |     |     |
  |     |     v
  |     |   Provision access -> Log in access register -> DONE
  |     |
  |     +-- NO (higher than standard):
  |           |
  |           v
  |         Is Admin/privileged level requested?
  |           |
  |           +-- NO (elevated but not admin): CTO approves
  |           |     |
  |           |     v
  |           |   Provision access -> Log in access register -> DONE
  |           |
  |           +-- YES (admin level): CEO + CTO approve
  |                 |
  |                 v
  |               Provision access -> Log in access register -> DONE
  |
  +-- Contractor / Third Party
  |     |
  |     v
  |   NDA signed? (mandatory prerequisite)
  |     |
  |     +-- NO: Obtain NDA before proceeding
  |     +-- YES:
  |           |
  |           v
  |         WHAT system and level? (minimum necessary for contract scope)
  |           |
  |           v
  |         CTO approves access scope
  |           |
  |           v
  |         Set access expiry date (aligned with contract end date)
  |           |
  |           v
  |         Provision access -> Log in access register -> DONE
  |
  +-- AI Agent (Claude Code)
        |
        v
      AI agents do NOT receive persistent system credentials.
      Access is session-scoped per Trust Level 2 boundaries.
        |
        v
      Agent configuration change? -> Follow HH-ISMS-PROC-004 (Change Management)
        |
        v
      Log agent access scope in AI System Registry -> DONE
```

**Access register:** All access grants are logged in `access-reviews/access-register.md` with: date, requester, system, level, approver, and expiry (if applicable).

### 3.2 Access Modification

```
START: Access modification needed
  |
  v
REASON for modification?
  |
  +-- Promotion / Role Change
  |     |
  |     v
  |   Map new role to RBAC table (Section 4)
  |     |
  |     v
  |   Is the change an UPGRADE or DOWNGRADE?
  |     |
  |     +-- UPGRADE: Approval required per new level
  |     |     |
  |     |     v
  |     |   Standard for new role? -> Auto-approve
  |     |   Higher than standard? -> CTO approves
  |     |   Admin level? -> CEO + CTO approve
  |     |     |
  |     |     v
  |     |   Modify access -> Update register -> DONE
  |     |
  |     +-- DOWNGRADE: Auto-process (no approval needed)
  |           |
  |           v
  |         Remove excess privileges -> Update register -> DONE
  |
  +-- Project Need (temporary)
  |     |
  |     v
  |   Follow JIT Elevation process (Section 5)
  |
  +-- Temporary Elevation (emergency)
        |
        v
      Follow JIT Elevation process (Section 5)
      If related to security incident -> also follow HH-ISMS-PROC-001
```

### 3.3 Access Revocation

```
START: Access revocation triggered
  |
  v
TRIGGER?
  |
  +-- Termination of employment
  |     |
  |     v
  |   IMMEDIATE revocation within 4 hours of termination notice
  |     |
  |     v
  |   Revoke ALL system access (see revocation checklist below)
  |     |
  |     v
  |   Verify revocation across all systems -> Update register -> DONE
  |
  +-- Role transfer (internal)
  |     |
  |     v
  |   Map new role to RBAC table
  |     |
  |     v
  |   Remove access not needed for new role
  |     |
  |     v
  |   Add access required for new role (per Section 3.1)
  |     |
  |     v
  |   Verify changes -> Update register -> DONE
  |
  +-- Contractor engagement ends
  |     |
  |     v
  |   Revoke access on contract end date (or earlier if notified)
  |     |
  |     v
  |   Verify revocation -> Update register -> DONE
  |
  +-- Security incident
        |
        v
      EMERGENCY revocation per HH-ISMS-PROC-001 (Incident Management)
        |
        v
      CTO (Incident Commander) authorizes immediate lockout
        |
        v
      Revoke access to affected systems immediately
        |
        v
      Document in incident record -> Update register -> DONE
```

**Revocation Checklist:**

| # | System | Revocation Action | Verified By |
|---|--------|-------------------|-------------|
| 1 | Microsoft Entra ID | Disable account, revoke sessions, remove from all groups | IT Pentester |
| 2 | GitHub | Remove from organization, revoke personal access tokens | CTO |
| 3 | Vercel | Remove from team | CTO |
| 4 | Cloudflare | Remove from account | CTO |
| 5 | Neon | Remove database access (via GitHub SSO revocation) | CTO |
| 6 | Azure subscriptions | Remove role assignments | IT Pentester |
| 7 | Linear | Deactivate account | CTO |
| 8 | Float | Deactivate account | Strategy Partner |
| 9 | NorthGRC | Remove user access | CISO |
| 10 | Microsoft Intune | Retire/wipe managed device | IT Pentester |

---

## 4. RBAC Model and Role Definitions

### 4.1 Human Role Access Matrix

The following table maps the 6 Helge Heupel Group human roles to standard access levels per system. Access provisioned beyond these levels requires explicit approval per Section 3.1.

| Role | GitHub | Vercel | Cloudflare | Neon | Azure | AI Agent Configs | Linear | Float | NorthGRC |
|------|--------|--------|------------|------|-------|-----------------|--------|-------|----------|
| **CEO** | Owner | Admin | Admin | Admin | Owner | Write | Admin | Admin | Admin |
| **CTO** | Owner | Admin | Admin | Admin | Contributor | Write | Admin | Member | Member |
| **CISO** | Maintainer | Member | Member | Reader | Reader | Read | Member | Viewer | Admin |
| **IT Pentester** | Maintainer | Member | Member | Reader | Owner | Read | Member | Viewer | Member |
| **Strategy Partner** | Read | Viewer | - | - | Reader | - | Member | Admin | Viewer |
| **Finance Industry Senior Manager** | - | - | - | - | Reader | - | Viewer | Member | Viewer |

**Notes:**
- CEO holds Owner/Admin access across all systems as Geschaeftsfuehrer/Bestuurder with ultimate sign-off authority
- CTO holds Owner on GitHub and Admin on Vercel/Cloudflare for technical architecture ownership
- IT Pentester holds Azure Owner for infrastructure and platform management responsibilities
- CISO holds NorthGRC Admin for GRC platform management
- Strategy Partner holds Float Admin for resource planning ownership
- Dash (-) indicates no access to that system

### 4.2 AI Agent Access

AI agents (Claude Code) operate within session scope and do not hold persistent system credentials:

| Aspect | Description |
|--------|-------------|
| **Authentication** | No persistent credentials. Agents operate within the invoking user's Claude Code session. |
| **Authorization** | Governed by Trust Level 2 boundaries defined in each agent's CLAUDE.md file. |
| **Tool access** | Read, Write, Edit, Glob, Grep, Bash tools as configured per agent. |
| **Data access** | Limited to files within the repository and session context. No direct database or cloud API access. |
| **Configuration changes** | Agent CLAUDE.md modifications, reference document updates, and routing rule changes follow HH-ISMS-PROC-004 (Change Management). All require CEO approval per Trust Level 2 governance. |

**Key principle:** Agents produce artifacts; humans own risk. No AI agent has standing access to any production system.

---

## 5. Least Privilege and JIT Elevation

### 5.1 Least Privilege Principle

All accounts start with the minimum access necessary for the role as defined in the RBAC table (Section 4). Access beyond the standard role level must be explicitly approved.

**Enforcement mechanisms at Startup:**
- Azure RBAC with role assignments per the RBAC table
- GitHub organization roles and team memberships
- Microsoft Entra ID Conditional Access policies
- Vercel/Cloudflare team role assignments

### 5.2 JIT (Just-In-Time) Elevation Process

When temporary elevated access is needed:

1. **Request:** State the reason and expected duration in the team Signal group or as a PR comment.
   - Include: system, current access level, requested level, reason, expected duration.

2. **Approval:**
   - Standard elevation (e.g., Contributor to Maintainer): **CTO approves**.
   - Admin/privileged elevation (e.g., any role to Owner/Admin): **CEO + CTO approve**.

3. **Maximum elevation duration:**
   - Admin access: **4 hours** maximum
   - Elevated contributor access: **24 hours** maximum

4. **Provisioning:** CTO or IT Pentester provisions the elevated access immediately upon approval.

5. **Revert:**
   - **Startup:** Manually tracked via calendar reminder. The person who provisioned the access is responsible for reverting.
   - **Growth target:** Automated JIT via Azure Privileged Identity Management (PIM) with time-bound role activation.

6. **Logging:** All JIT elevations are logged in the access register with: date, requester, system, elevated level, approver, duration, and revert confirmation.

---

## 6. MFA Requirements

All systems supporting multi-factor authentication must have it enabled for all users. There are no exceptions to MFA at the Helge Heupel Group.

| System | MFA Method | Enforcement | Notes |
|--------|-----------|-------------|-------|
| **Microsoft Entra ID** | Microsoft Authenticator or FIDO2 | Mandatory for all users | Conditional Access policy enforces MFA on every sign-in |
| **GitHub** | TOTP or hardware key | Mandatory for all users | Organization-level requirement; non-compliant users blocked |
| **Vercel** | TOTP | Mandatory for all users | Enforced at team level |
| **Cloudflare** | TOTP | Mandatory for all users | Enforced at account level |
| **Azure portal** | Inherits Entra ID MFA | Mandatory for all users | Same Conditional Access policy as Entra ID |
| **Neon** | SSO via GitHub | Inherits GitHub MFA | Authentication delegated to GitHub; no separate MFA |
| **NorthGRC** | Per platform configuration | Mandatory for all users | TOTP or SSO (when configured) |
| **Linear** | SSO via Google/GitHub or TOTP | Mandatory for all users | Team-level enforcement |

**AI Agent exception:** Claude Code agents do not authenticate via MFA. They operate within session scope, invoked by an MFA-authenticated human user. No persistent credentials exist for agents.

**MFA recovery:** If a team member loses their MFA device, the IT Pentester (for Azure/Entra ID) or CTO (for GitHub/Vercel/Cloudflare) can perform an MFA reset after verifying the team member's identity via a secondary channel (video call or in-person verification).

---

## 7. Quarterly Access Review Process

Per IS Policy Objective #5 (complete access reviews quarterly) and the locked decision on access review roles:

### 7.1 Schedule

| Quarter | Review Period | Report Due |
|---------|--------------|------------|
| Q1 | First week of January | January 15 |
| Q2 | First week of April | April 15 |
| Q3 | First week of July | July 15 |
| Q4 | First week of October | October 15 |

### 7.2 Process

1. **Generate access report:** IT Pentester generates an access report per system:
   - Microsoft Entra ID: export user list, role assignments, group memberships, last sign-in date
   - GitHub: export organization members, team memberships, repository permissions
   - Vercel/Cloudflare: export team member list and roles
   - Azure subscriptions: export RBAC role assignments
   - Neon: verify access inherits correctly from GitHub SSO

2. **Review standard access:** CTO reviews the access reports against the RBAC table (Section 4):
   - Confirm each user's access matches their role standard
   - Identify any access that exceeds role standard (requires documented justification or removal)
   - Identify stale accounts (no sign-in in 90+ days)

3. **Review privileged/admin access:** CEO reviews and approves all Admin/Owner level access:
   - Verify admin access is still required for each account holder
   - Confirm no unauthorized admin accounts exist
   - Review and approve any exceptions to the RBAC table

4. **MFA compliance check:** IT Pentester verifies MFA is enabled on all accounts across all systems.

5. **Output:** Access review report stored in Git as `access-reviews/YYYY-QN-access-review.md` containing:
   - Date of review, reviewer names
   - Per-system access summary
   - Findings: stale accounts, excess privileges, MFA non-compliance
   - Actions taken: accounts removed, privileges downgraded, exceptions documented

6. **Actions:**
   - Remove stale accounts (no sign-in in 90+ days without documented leave)
   - Downgrade unnecessary privileges to role standard
   - Verify MFA compliance (100% target)
   - Update RBAC table if roles have changed

7. **Feeds into:** Management review (HH-ISMS-PROC-008) as a mandatory input for the Monthly Strategic meeting.

---

## 8. GDPR Data Subject Rights

Per the locked decision to embed GDPR data subject rights in the access control procedure:

### 8.1 Data Subject Access Request (DSAR)

When a data subject exercises their rights under GDPR Art. 12-23, the following process applies:

1. **Receipt:** DSAR received via any channel (email, letter, verbal request).

2. **Routing:** All DSARs are routed to **CEO** as the data controller for all three entities (GmbH, B.V., Inc.).

3. **Verification:** Verify the identity of the data subject before processing the request. Acceptable verification: government-issued ID, verified email address matching records, or video call verification.

4. **Scope identification:** Identify all systems containing the data subject's personal data using:
   - AI System Registry (`ai-registry/` directory) for AI-processed data
   - System inventory (IS Policy Annex 11) for all systems
   - Database records (Neon PostgreSQL) for application data
   - Azure/M365 for communication data

### 8.2 Rights and Response Procedures

| Right | GDPR Article | Procedure | Timeline |
|-------|-------------|-----------|----------|
| **Right of access** | Art. 15 | CTO coordinates data extraction from all identified systems. CEO reviews and provides data subject with a copy. | 30 days |
| **Right to rectification** | Art. 16 | CTO coordinates correction of inaccurate data. CEO confirms completion. | 30 days |
| **Right to erasure** | Art. 17 | CTO coordinates technical deletion across all systems. CEO confirms completion and documents scope of deletion. | 30 days |
| **Right to restriction** | Art. 18 | CTO implements technical restriction (data retained but not processed). CEO confirms. | 30 days |
| **Right to data portability** | Art. 20 | CTO exports data in machine-readable format (JSON or CSV). CEO provides to data subject. | 30 days |
| **Right to object** | Art. 21 | CEO assesses whether compelling legitimate grounds override the objection. Documents decision. | 30 days |

**Timeline:** Respond within **30 days** per GDPR Art. 12(3). Extendable by 60 days for complex requests with notification to the data subject within the initial 30-day period.

**Complex requests:** If the request requires significant effort (e.g., data across multiple systems), the CEO notifies the data subject of the extension and its reasons within 30 days.

### 8.3 Data Protection Authorities

| Entity | DPA | Jurisdiction |
|--------|-----|-------------|
| Helge Heupel GmbH | BfDI (Bundesbeauftragter fuer den Datenschutz und die Informationsfreiheit) | Germany |
| Helge Heupel B.V. | AP (Autoriteit Persoonsgegevens) | Netherlands |
| Helge Heupel Inc. | N/A at Startup (US CCPA/CPRA deferred) | United States |

---

## 9. Annex A Control Mapping

| Control | Name | How This Procedure Addresses It |
|---------|------|---------------------------------|
| A.5.15 | Access Control | Sections 3-4 define the full access control lifecycle and RBAC model |
| A.5.16 | Identity Management | Section 3.1 (new access request) and Section 3.3 (revocation) cover the identity lifecycle |
| A.5.17 | Authentication Information | Section 6 defines MFA requirements for all systems |
| A.5.18 | Access Rights | Section 4 (RBAC table), Section 5 (least privilege), Section 7 (quarterly review) |
| A.8.1 | User Endpoint Devices | Section 3.3 revocation checklist includes Intune device retirement |
| A.8.2 | Privileged Access Rights | Section 4 (admin roles), Section 5.2 (JIT elevation), Section 7 (privileged access review by CEO) |
| A.8.3 | Information Access Restriction | Section 4 (role-based access), Section 5.1 (least privilege principle) |
| A.8.4 | Access to Source Code | Section 4 (GitHub access per role: Owner, Maintainer, Contributor, Read) |
| A.8.5 | Secure Authentication | Section 6 (MFA table with specific methods per system) |

---

## 10. Regulatory Obligations

| Framework | Requirement | How This Procedure Satisfies It |
|-----------|-------------|-------------------------------|
| **ISO 27001:2022** | Annex A controls A.5.15-A.5.18, A.8.1-A.8.5 | Full coverage per Section 9 control mapping |
| **TISAX VDA ISA 6** | Chapter 4: Access Control | RBAC model (Section 4), access reviews (Section 7), MFA (Section 6), privileged access management (Section 5) |
| **GDPR** | Art. 12-23: Data subject rights | Section 8 defines DSAR processing with 30-day timeline |
| **GDPR** | Art. 25: Data protection by design | Least privilege (Section 5), RBAC (Section 4), session-scoped AI agent access (Section 4.2) |
| **GDPR** | Art. 32: Security of processing | Access control lifecycle (Section 3), MFA (Section 6), quarterly reviews (Section 7) |
| **NIS2** | Access control requirements (informational) | Full access control framework documented; Growth activation requires no structural changes |

---

## 11. Document Control

### Version History

| Version | Date | Author | Change Summary | Approved By |
|---------|------|--------|---------------|-------------|
| v1.0 | 2026-02-25 | CISO Agent | Initial release | Pending CEO approval |

### Approval

This document is approved via Git Pull Request:
1. **Author:** CISO Agent drafts the procedure
2. **Reviewers:** CISO and CTO review via PR comments
3. **Approver:** CEO approves via PR merge

`[CEO-SIGNOFF-REQUIRED]`

---

*Document: procedures/access-control.md*
*Document ID: HH-ISMS-PROC-003*
*Access Control Procedure for the Helge Heupel Group*
