---
document-id: HH-ISMS-PROC-004
title: "Change Management Procedure"
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

# Change Management Procedure

## 1. Purpose and Scope

This procedure defines the change management process for the **Helge Heupel Group** (GmbH, B.V., Inc.). It operationalizes the governance model Section 3 (risk-tiered gate model) into an actionable decision tree governing how changes are classified, approved, executed, and recorded.

**Scope:** All changes to production systems, configurations, policies, and documentation, including:

- **Infrastructure changes:** Azure resource provisioning, Vercel/Cloudflare configuration, Neon database changes
- **Code deployments:** Application releases for Verity VE, Verity EAM, helgeheupel-cms, verity-cms
- **Policy and procedure updates:** IS Policy, AI Policy, operational procedures, governance documents
- **AI agent configuration changes:** CLAUDE.md files, reference documents, routing rules, tool permissions
- **Security configuration changes:** Entra ID Conditional Access, GitHub branch protection, MFA policies
- **Third-party integrations:** New external service connections, API integrations

This procedure does NOT cover:
- Non-production development work (local branches, staging experiments)
- Content updates to marketing materials classified as Public

**Parent policy:** Information Security Policy (HH-ISMS-POL-001)
**Governance model:** Risk-tiered gate model (HH-GOV-Startup-v1.0, Section 3)

---

## 2. Normative References

### Standards and Controls

| Reference | Title | Relevance |
|-----------|-------|-----------|
| ISO 27001:2022 A.8.32 | Change Management | Primary control for change management processes |
| ISO 27001:2022 A.5.37 | Documented Operating Procedures | Requirement for documented change procedures |
| TISAX VDA ISA 6 Ch. 5 | Cryptography and Operations | Change management within operational security |
| NIS2 Art. 21 | Cybersecurity Risk Management | Change management as part of risk management measures (informational) |

### Internal Documents

| Document ID | Title | Relationship |
|-------------|-------|-------------|
| HH-ISMS-POL-001 | Information Security Policy | Parent policy; Section 5 (risk management approach) |
| HH-GOV-Startup-v1.0 | Governance Model | Section 3 (risk-tiered gate model), Section 3.2 (gate-to-meeting mapping) |
| HH-RACI-Startup-v1.0 | RACI Matrix | Row 15 (deployment approval), Row 29 (agent configuration) |
| HH-ISMS-RMA-001 | Risk Assessment Methodology | Risk scoring for change classification |

### Related Procedures

| Document ID | Title | Cross-Reference Trigger |
|-------------|-------|------------------------|
| HH-ISMS-PROC-001 | Incident Management Procedure | Incident-driven changes use the emergency change process (Section 7) |
| HH-ISMS-PROC-002 | BCP/DR Plan | DR-triggered changes (failover, recovery) follow emergency process |
| HH-ISMS-PROC-003 | Access Control Procedure | Access-related changes (RBAC, permissions) follow this change process for approval |

---

## 3. Change Classification

All changes are classified into one of four risk tiers before approval. Classification uses 6 factors from the governance model: user impact, data sensitivity, AI involvement, regulatory scope, architecture impact, and reversibility. **The highest-severity factor determines the tier.**

### Decision Tree: Risk Classification

```
START: New change proposed
  |
  v
Does this change affect PRODUCTION systems or policies?
  |
  +-- NO: Out of scope (no change management required)
  +-- YES:
        |
        v
      Assess against 6 risk factors (see factor table below)
        |
        v
      HIGHEST factor severity determines the tier
        |
        +-- All factors Low -> LOW RISK
        +-- Any factor Medium, none High/Critical -> MEDIUM RISK
        +-- Any factor High, none Critical -> HIGH RISK
        +-- Any factor Critical -> CRITICAL RISK
```

### Risk Factor Assessment

| Factor | Low | Medium | High | Critical |
|--------|-----|--------|------|----------|
| **User impact** | No user-facing change | Limited user impact, easily communicated | Significant UX change or service degradation possible | Service disruption for all users possible |
| **Data sensitivity** | No data changes | Non-PII data changes | PII data changes, new data flows | Cross-entity data migration, data architecture change |
| **AI involvement** | No AI changes | AI documentation update | AI prompt changes, tool permission changes | New AI agent creation, Trust Level changes |
| **Regulatory scope** | No regulatory impact | Minor compliance documentation update | Changes affecting ISO 27001/42001 controls | Changes affecting certification scope or NIS2 reporting |
| **Architecture impact** | No architecture change | Single-component change | Multi-component change, new dependency | Infrastructure migration, new service layer |
| **Reversibility** | Instant revert (git revert) | Revert within 1 hour | Complex rollback, partial data impact | Irreversible or extremely costly to reverse |

### Classification Examples

| Change | Classification | Rationale |
|--------|---------------|-----------|
| Fix typo in README | Low | No production impact, instantly reversible |
| Update dependency version | Medium | Limited production impact, reversible within 1 hour |
| Database schema migration | High | Significant production impact, complex rollback |
| Authentication system change | High | Security implications, multi-component impact |
| Infrastructure migration to new Azure region | Critical | Service disruption possible, irreversible |
| New AI agent creation | High | AI involvement factor is High per governance model |
| AI agent Trust Level promotion | Critical | AI involvement factor is Critical per governance model |
| IS Policy amendment | High | Regulatory scope factor is High |
| ISMS scope change | Critical | Regulatory scope is Critical (affects certification) |

---

## 4. Approval Process

### Decision Tree: Approval Routing

```
START: Change classified (Section 3)
  |
  v
RISK TIER?
  |
  +-- LOW RISK
  |     |
  |     v
  |   Create PR with change description
  |     |
  |     v
  |   PR approval from any reviewer (CTO, CISO, or IT Pentester)
  |     |
  |     v
  |   CI passes -> Auto-merge permitted
  |     |
  |     v
  |   No meeting required -> Execute change -> DONE
  |
  +-- MEDIUM RISK
  |     |
  |     v
  |   Create PR with change description + risk classification
  |     |
  |     v
  |   PR approval from any reviewer (CTO, CISO, or IT Pentester)
  |     |
  |     v
  |   CI passes -> Merge permitted after 1 approval
  |     |
  |     v
  |   No meeting required -> Execute change -> DONE
  |
  +-- HIGH RISK
  |     |
  |     v
  |   Create PR with:
  |     - Change description
  |     - Risk classification with justification
  |     - Rollback plan (mandatory)
  |     - Testing evidence
  |     - Security impact assessment
  |     |
  |     v
  |   PR requires CEO + CTO approval (both must approve)
  |     |
  |     v
  |   Discussed at next Weekly Technical meeting if time permits
  |     |
  |     v
  |   Both approvals received -> Merge permitted -> Execute change -> DONE
  |
  +-- CRITICAL RISK
        |
        v
      Create PR with:
        - Change description
        - Risk classification with justification
        - Documented rollback plan (mandatory, tested if possible)
        - Testing evidence
        - Security impact assessment (CIA impact analysis)
        |
        v
      PR requires CEO + CTO approval (both must approve)
        |
        v
      MUST be discussed at Weekly Technical meeting before merge
        |
        v
      CAB function: CEO + CTO at Weekly Technical review and approve
        |
        v
      Both approvals received + Weekly Technical discussed -> Merge -> Execute -> DONE
```

**Key locked decision:** Low/Medium changes require any PR reviewer approval. High/Critical changes require CEO + CTO approval on the PR. This matches the governance model Section 3.2 exactly.

---

## 5. Change Request Format

All changes flow through the Git Pull Request workflow. The PR serves as the change record.

### PR Template (Required Fields)

Every PR that constitutes a change to a production system or policy must include:

```markdown
## Change Request

**Risk Classification:** [Low / Medium / High / Critical]
**Classification Justification:** [Which risk factor(s) drove the classification]

### Change Description
[What is being changed and why]

### Systems Affected
[List all systems, services, or documents affected by this change]

### Rollback Plan
[How to revert this change if it fails]
- Low/Medium: "Git revert + redeploy" is acceptable
- High/Critical: Must include specific rollback steps

### Testing Evidence
[Screenshots, test output, CI results, or "Manual verification: [description]"]

### Security Impact Assessment (High/Critical only)
- **Confidentiality impact:** [None / Low / Medium / High]
- **Integrity impact:** [None / Low / Medium / High]
- **Availability impact:** [None / Low / Medium / High]
- **Justification:** [Brief explanation]
```

### Traceability Principle

Git PR = the change record. No separate change management system is needed at Startup.

| PR Element | Change Management Function |
|------------|---------------------------|
| PR number | Change request ID |
| PR description | Change request details and risk classification |
| PR reviews | Approval records (who approved and when) |
| PR comments | Discussion and decision rationale |
| PR merge commit | Change execution record (immutable timestamp) |
| Deployment log (Vercel/Cloudflare) | Implementation evidence |
| Git history | Complete audit trail |

---

## 6. Rollback Requirements

Rollback plans are tiered by risk classification:

### 6.1 Low/Medium Risk Changes

| Aspect | Requirement |
|--------|-------------|
| **Rollback method** | Git revert + redeploy |
| **Rollback target** | 15 minutes from decision to revert |
| **Documentation** | "Git revert + redeploy" in PR description is sufficient |
| **Pre-testing** | Not required |
| **Approval to rollback** | CTO or any reviewer can authorize |

### 6.2 High Risk Changes

| Aspect | Requirement |
|--------|-------------|
| **Rollback method** | Documented rollback steps specific to the change |
| **Rollback target** | 30 minutes from decision to revert |
| **Documentation** | Specific rollback steps in PR description (mandatory) |
| **Pre-testing** | Tested rollback before merge if possible (recommended) |
| **Approval to rollback** | CTO authorizes |

### 6.3 Critical Risk Changes

| Aspect | Requirement |
|--------|-------------|
| **Rollback method** | Documented and rehearsed rollback steps |
| **Rollback target** | 1 hour from decision to revert |
| **Documentation** | Detailed rollback plan in PR description (mandatory) |
| **Pre-testing** | Mandatory rollback rehearsal (dry-run in staging before production) |
| **Verification** | CTO verifies rollback steps before production execution |
| **Approval to rollback** | CEO + CTO authorize (unless SEV1/SEV2 incident, then CTO alone per emergency process) |

### Rollback Execution

When a rollback is needed:

1. **Identify the failure:** What went wrong after the change was deployed?
2. **Assess severity:** Is this a SEV1/SEV2 incident? If yes, also engage HH-ISMS-PROC-001 (Incident Management).
3. **Execute rollback:** Follow the documented rollback steps from the PR.
4. **Verify recovery:** Confirm systems are restored to pre-change state.
5. **Document:** Add a comment to the original PR documenting the rollback: reason, steps taken, time to recover, and lessons learned.
6. **Review:** Discuss at next Weekly Technical meeting. Determine root cause and whether the change can be re-attempted.

---

## 7. Emergency Change Process

For incident-driven changes requiring immediate action, the normal approval process is bypassed. This section is referenced from HH-ISMS-PROC-001 (Incident Management Procedure).

### 7.1 When Emergency Changes Apply

Emergency changes are authorized when:
- A SEV1 or SEV2 security incident is in progress
- A critical system outage requires immediate remediation
- A vulnerability is being actively exploited
- Regulatory reporting deadlines require immediate system changes

### 7.2 Emergency Approval

| Aspect | Requirement |
|--------|-------------|
| **Approval authority** | CTO can approve alone for SEV1/SEV2 incidents |
| **Documentation during incident** | Minimal: verbal approval + brief notes in incident channel |
| **Post-emergency PR** | Must create a PR within 24 hours documenting the emergency change |
| **Post-emergency review** | Discussed at next Weekly Technical meeting |
| **Logging** | Emergency change logged in incident record (linked to incident ID) |

### 7.3 Emergency Change Steps

1. **Identify:** Change is needed to resolve an active incident.
2. **Authorize:** CTO (Incident Commander) verbally approves the emergency change.
3. **Execute:** Make the change. Document what was changed and when.
4. **Verify:** Confirm the change resolved the incident (or mitigated the immediate impact).
5. **Formalize:** Within 24 hours, create a PR documenting:
   - What was changed
   - Why (link to incident record)
   - Who authorized the emergency change
   - Risk classification (retrospective)
   - Rollback plan (if the emergency change needs to be reverted)
6. **Review:** Emergency change reviewed at next Weekly Technical meeting. Determine if the emergency change should become permanent or be replaced with a planned change.

---

## 8. AI Agent Configuration Changes

Changes to AI agent configurations follow the standard change management process with additional requirements per Trust Level 2 governance.

### 8.1 Classification for AI Agent Changes

| Change Type | Risk Classification | Rationale |
|-------------|-------------------|-----------|
| Documentation updates in agent reference files | Low | No behavioral change; reference data refresh |
| Prompt modifications in agent CLAUDE.md | Medium | Behavioral change possible; limited scope |
| Tool permission changes (adding/removing tools) | Medium | Changes agent capability boundaries |
| New agent creation | High | New AI system requires AI System Registry entry |
| Agent Trust Level changes | Critical | Governance boundary modification |
| Agent boundary modifications (expanding scope) | High | Changes to what the agent can access or produce |
| Routing rule changes (SDLC Lead Agent) | Medium | Affects work distribution but not individual agent behavior |

### 8.2 Additional Requirements

All AI agent configuration changes require:

1. **CEO approval** per Trust Level 2 governance (regardless of risk tier).
2. **AI System Registry update** if the change affects system identity, scope, or risk classification.
3. **PR description** must include: what behavioral change is expected, which AI Policy sections are relevant, and confirmation that the change does not violate any of the 14 prohibited AI practices (HH-AIMS-POL-001 Section 2).

### 8.3 Growth Target

At Growth phase with Trust Level 3 agents: Low-risk documentation updates to reference files may be auto-approved via CI checks, with post-hoc review. This requires formal Trust Level promotion per the agent qualification framework.

---

## 9. Traceability

The complete audit trail for every change is maintained through Git:

| Traceability Element | Source | How to Retrieve |
|---------------------|--------|-----------------|
| Change request ID | PR number | `gh pr view {number}` |
| Change description | PR body | PR description in GitHub |
| Risk classification | PR body | "Risk Classification" field in PR template |
| Approval records | PR reviews | Reviewer approvals with timestamps |
| Discussion and rationale | PR comments | Thread of comments on the PR |
| Change execution | Merge commit | `git log --oneline` with merge commit hash |
| Deployment evidence | Vercel/Cloudflare deployment logs | Platform deployment dashboard |
| Rollback evidence (if applicable) | PR comments + revert commit | Revert PR linked to original PR |

**Audit query examples:**

- "Show all Critical changes in Q1 2026": `gh pr list --state merged --search "Risk Classification: Critical" --limit 100`
- "Show who approved change #42": `gh pr view 42 --json reviews`
- "Show deployment history for a specific date": Check Vercel/Cloudflare deployment dashboard

**Growth target:** Linear integration (Phase 9) for enhanced change tracking with project-level traceability. At Startup, Git PR workflow provides complete traceability without an additional system.

---

## 10. Annex A Control Mapping

| Control | Name | How This Procedure Addresses It |
|---------|------|---------------------------------|
| A.8.32 | Change Management | Sections 3-7 define the complete change management lifecycle: classification, approval, execution, rollback, and emergency changes |
| A.5.37 | Documented Operating Procedures | Section 5 (PR template), Section 6 (rollback requirements), Section 7 (emergency process) provide documented operating procedures for change management |

---

## 11. Regulatory Obligations

| Framework | Requirement | How This Procedure Satisfies It |
|-----------|-------------|-------------------------------|
| **ISO 27001:2022** | A.8.32 (Change management) | Full coverage: risk-tiered classification (Section 3), approval process (Section 4), rollback (Section 6), emergency changes (Section 7) |
| **ISO 27001:2022** | A.5.37 (Documented operating procedures) | PR template (Section 5) provides documented change request format; traceability (Section 9) provides audit trail |
| **TISAX VDA ISA 6** | Chapter 5: Cryptography and Operations | Risk-tiered change approval with documented rollback requirements satisfies TISAX operational security controls |
| **NIS2** | Art. 21: Cybersecurity risk management measures (informational) | Change management as part of the risk management framework; Growth activation requires no structural changes to this procedure |

---

## 12. Document Control

### Version History

| Version | Date | Author | Change Summary | Approved By |
|---------|------|--------|---------------|-------------|
| v1.0 | 2026-02-25 | CISO Agent | Initial release | Pending CEO approval |

### Approval

This document is approved via Git Pull Request:
1. **Author:** CISO Agent drafts the procedure
2. **Reviewers:** CISO and CTO review via PR comments
3. **Approver:** CEO Helge Heupel approves via PR merge

`[CEO-SIGNOFF-REQUIRED]`

---

*Document: procedures/change-management.md*
*Document ID: HH-ISMS-PROC-004*
*Change Management Procedure for the Helge Heupel Group*
