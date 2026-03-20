# Helge Heupel Group -- Startup Phase Governance Model

| Field | Value |
|---|---|
| Document ID | HH-GOV-Startup-v1.0 |
| Version | 1.0 |
| Status | Draft |
| Effective Date | TBD |
| Review Cycle | Quarterly |
| Classification | Internal |

## Purpose

This document compresses the full SDLC-Growth-v2 Enterprise gate structure (5 governance bodies, formal process assessment) into 2 meetings while preserving risk-tiered criteria. It defines the governance model for the Startup phase of the Helge Heupel Group SDLC.

**Related documents:**
- [SDLC-Startup-v2.md](SDLC-Startup-v2.md) – Startup SDLC companion document (gate criteria from SDLC Growth Sec. 13)
- [RACI-Startup.md](RACI-Startup.md) – Role consolidation RACI matrix (meeting attendees aligned with RACI roles)
- [protocols/interaction-model.md](protocols/interaction-model.md) – Agent interaction model

---

## 1. Governance Philosophy at Startup

The Helge Heupel Group startup governance model optimizes for velocity while maintaining compliance at adequate level to comply with TISAX, ISO 27001, and ISO 42001.

### Key Principles

1. **2 meetings replace 5+ governance bodies** from SDLC-Growth-v2 SDLC Growth Sec. 13.3. Consolidation eliminates decision latency and artificial handoffs while preserving the substance of each governance function.

2. **Risk-tiering is PRESERVED – not all changes are equal.** The 4 risk tiers (Low, Medium, High, Critical) from SDLC Growth Sec. 13.1 remain fully operative. Governance intensity scales with risk, not with ceremony.

3. **Automated checks replace manual gates for Low/Medium risk.** CI/CD pipeline validation, PR approval, and automated test suites serve as the gate mechanism for routine changes. No meeting required.

4. **Human judgment concentrated on High/Critical risk decisions.** The Weekly Technical meeting is the forum where CTO, CISO, and IT Pentester apply expert judgment to changes that automated checks cannot adequately assess.

5. **Git PR workflow = audit trail.** No additional approval systems are needed at Startup. PR creation, review, approval, and merge provide the documented evidence trail required by ISO 27001 cl. 7.5 (Documented information) and ISO 42001 cl. 7.5. Every gate passage is recorded in Git history.

---

## 2. Meeting Structure

### Meeting 1: Weekly Technical Governance (30 minutes)

| Field | Detail |
|---|---|
| Frequency | Weekly |
| Duration | 30 minutes (hard stop) |
| Required Attendees | CEO, CTO, CISO, IT Pentester |
| Optional Attendees | Strategy Partner (when product decisions have technical implications) |
| By Invitation | Finance Industry Senior Manager (when financial risk is relevant) |
| Agent Support | SDLC Lead Agent prepares agenda from open PRs, incidents, and pending decisions; specialist agents prepare technical materials as needed |
| Decision Record | Meeting notes committed to Git as `meeting-notes/weekly-technical/YYYY-MM-DD.md` |

**Purpose:** Technical decisions, risk assessment, deployment approvals (High/Critical), incident review, security findings, architecture decisions.

**Standing Agenda:**

| # | Item | Duration | Description |
|---|---|---|---|
| 1 | Open incidents / security findings | 5 min | Review any open Sev-1/Sev-2 incidents, security vulnerabilities, or NIS2-reportable events. Platform/SRE Agent and CISO Agent may pre-prepare incident summaries. |
| 2 | High/Critical risk items requiring approval | 10 min | Review and approve/reject changes classified as High or Critical risk. Gate criteria applied per Section 3 below. CTO approves technical; CISO approves security; CEO approves risk acceptance. |
| 3 | Architecture decisions / ADRs for review | 10 min | Review proposed ADRs, technology evaluations, and architectural changes. CTO Agent may pre-prepare ADR drafts. CTO has decision authority for technical architecture; CEO for cross-domain impact. |
| 4 | Upcoming deployments requiring sign-off | 5 min | Review deployment schedule for High/Critical risk releases. Confirm rollback plans exist. CTO approves deployment. Platform/SRE Agent may pre-prepare deployment checklists. |

**Decision Authority:**
- **CTO:** Technical architecture decisions, deployment approvals, code quality standards
- **CISO:** Security policy decisions, compliance posture, vulnerability response
- **CEO:** Risk acceptance (final authority), cross-domain disputes, strategic alignment of technical decisions

**Meeting Alignment with RACI:**
- Attendees are the humans who hold **A (Accountable)** for the majority of technical, security, and operational SDLC activities (see [RACI-Startup.md](RACI-Startup.md) rows 5-19)
- IT Pentester attends as the human **R (Responsible)** for infrastructure, deployment, and platform operations
- Strategy Partner attends optionally when product context is needed for requirements or architecture decisions

---

### Meeting 2: Monthly Strategic Governance (60 minutes)

| Field | Detail |
|---|---|
| Frequency | Monthly |
| Duration | 60 minutes |
| Required Attendees | CEO, Strategy Partner, CTO, CISO |
| Required for Financial Items | Finance Industry Senior Manager |
| By Invitation | IT Pentester (when platform investment decisions are on agenda) |
| Agent Support | Product/Strategy Agent prepares strategic review and OKR status; CISO Agent prepares compliance posture and risk register status; SDLC Lead Agent coordinates cross-agent preparation |
| Decision Record | Management review minutes committed to Git as `meeting-notes/monthly-strategic/YYYY-MM.md` |

**Purpose:** Strategic alignment, OKR review, compliance posture, risk register review, management review. This meeting satisfies **ISO 27001 cl. 9.3** (Management review) and **ISO 42001 cl. 9.3** (Management review) when compliance is on the agenda.

**Standing Agenda:**

| # | Item | Duration | Description |
|---|---|---|---|
| 1 | Strategic progress / OKR review | 15 min | Review progress against quarterly OKRs. Assess strategic alignment of ongoing work. Product/Strategy Agent pre-prepares status summary. |
| 2 | Compliance posture and certification progress | 15 min | Review ISO 27001, ISO 42001, and TISAX certification readiness. Review NIS2 compliance status. Review EU AI Act conformity status. CISO Agent pre-prepares compliance dashboard. |
| 3 | Risk register review and treatment status | 15 min | Review top risks by severity. Assess risk treatment plan progress. Accept or escalate residual risks. CEO has final authority for risk acceptance. |
| 4 | Resource allocation and budget review | 10 min | Review cloud spend, AI API costs, tool licensing. Assess team capacity and hiring needs. Finance Industry SM consulted for financial items. |
| 5 | Action items and decisions | 5 min | Record decisions. Assign action items with owners and deadlines. Confirm next month's agenda focus areas. |

**Decision Authority:**
- **CEO:** Strategic direction, policy approval, risk acceptance, resource allocation, all final decisions
- **Strategy Partner:** Product prioritization recommendations, market positioning input
- **CTO:** Technical investment recommendations, platform architecture direction
- **CISO:** Compliance risk assessment, certification timeline recommendations

**ISO Management Review Compliance:**

This meeting satisfies ISO 27001 cl. 9.3 and ISO 42001 cl. 9.3 when the following mandatory inputs are covered (at minimum quarterly):

| ISO Requirement | Meeting Agenda Item | Frequency |
|---|---|---|
| Status of actions from previous reviews | Action items (item 5) | Monthly |
| Changes in external/internal issues | Strategic progress (item 1) | Monthly |
| Nonconformities and corrective actions | Compliance posture (item 2) | Monthly |
| Monitoring and measurement results | Compliance posture (item 2) + OKR review (item 1) | Monthly |
| Audit results | Compliance posture (item 2) | When audits occur |
| Fulfilment of objectives | OKR review (item 1) | Monthly |
| Feedback from interested parties | Strategic progress (item 1) | Monthly |
| Results of risk assessment/treatment | Risk register review (item 3) | Monthly |
| Opportunities for improvement | Action items (item 5) | Monthly |
| Resource adequacy | Resource allocation (item 4) | Monthly |

**Meeting Alignment with RACI:**
- CEO holds **A (Accountable)** for all strategic, policy, and compliance governance activities (see [RACI-Startup.md](RACI-Startup.md) rows 1-3, 20-28)
- Strategy Partner is **R (Responsible)** or **C (Consulted)** on strategic and product activities
- Finance Industry SM is **C (Consulted)** on financial risk and market strategy (rows 1-3, 22, 25)

---

## 3. Risk-Tiered Gate Model

The 6 SDLC-Growth-v2 gates (G0-G5) are preserved and mapped to the 2-meeting structure with risk tiering. Reference: SDLC Growth Sec. 13.1 (4 risk tiers) and SDLC Growth Sec. 13.2 (gate criteria).

### 3.1 Risk Tier Definitions

| Tier | Definition | Examples |
|---|---|---|
| **Low** | Routine changes with minimal impact | Bug fixes, documentation updates, dependency patches, UI tweaks |
| **Medium** | Changes with moderate scope or limited data/security impact | New features without PII, refactoring, non-critical API changes |
| **High** | Changes with significant scope, data sensitivity, or security implications | Features handling PII, authentication changes, new AI features, infrastructure changes |
| **Critical** | Changes with organization-wide impact, regulatory implications, or irreversible consequences | Security policy changes, cross-entity data flows, AI system deployment, production database schema changes, NIS2-reportable changes |

Risk classification uses 6 factors from SDLC Growth Sec. 13.1: user impact, data sensitivity, AI involvement, regulatory scope, architecture impact, reversibility. The highest-severity factor determines the tier.

### 3.2 Gate-to-Meeting Mapping

| Gate | Low Risk | Medium Risk | High Risk | Critical Risk |
|---|---|---|---|---|
| **G0: Strategic Alignment** | Auto-approve if OKR-linked | Auto-approve if OKR-linked | Monthly Strategic meeting | Monthly Strategic meeting |
| **G1: Requirements Readiness** | PR approval (CTO/CISO) | PR approval (CTO/CISO) | Weekly Technical review | Weekly Technical review + CEO |
| **G2: Development Completeness** | CI/CD checks pass | CI/CD checks pass | Weekly Technical review | Weekly Technical review + CEO |
| **G3: Quality and Compliance** | Automated tests pass | Automated tests + security scan | Weekly Technical review | Weekly Technical review + CISO sign-off |
| **G4: Release Readiness** | Auto-deploy if G3 passed | PR approval (CTO) | Weekly Technical approval | Weekly Technical approval + CEO sign-off |
| **G5: Post-Release Validation** | Automated monitoring | Automated monitoring + 24h check | Weekly Technical review | Dedicated review in Weekly Technical |

### 3.3 Key Design Decisions

1. **Low/Medium risk items flow through automated checks and PR approvals -- no meeting required.** This means the majority of day-to-day development operates without governance friction. CI/CD pipeline checks, automated tests, SAST scans, and PR review by CTO or CISO serve as the gate mechanism.

2. **High risk items require Weekly Technical meeting approval.** The Weekly Technical meeting agenda item 2 (High/Critical risk items) is the primary governance touchpoint. High risk items are reviewed asynchronously via PR, then confirmed in the Weekly Technical meeting.

3. **Critical risk items require Weekly Technical meeting approval PLUS CEO/CISO explicit sign-off.** Critical items cannot proceed on PR approval alone. They require synchronous discussion in the Weekly Technical meeting with explicit approval from CEO (risk acceptance) or CISO (security policy).

4. **All gate passages are recorded in Git.** PR merge = gate passage evidence for audit. The PR description includes: risk classification, gate criteria checklist, approver identity, and any conditions or exceptions. This satisfies ISO 27001 cl. 7.5 and ISO 42001 cl. 7.5 without additional documentation overhead.

---

## 4. Gate Criteria at Startup

For each gate, the simplified Startup criteria are listed below. Growth additions are noted for reference. Full Growth criteria are documented in SDLC Growth Sec. 13.2.

### G0 -- Strategic Alignment (Orient -> Requirements)

**Startup Criteria:**
- Feature/initiative is linked to an OKR or strategic hypothesis
- Risk classification completed (6-factor assessment)
- AI applicability determination completed (EU AI Act Art. 6 pre-screening for AI features)
- Threat landscape consideration for High/Critical risk items (documented in ADR)
- Cross-entity applicability assessed for features affecting GmbH, B.V., or Inc.
- Investment decision documented (CTO verbal for Low/Medium; CTO written for High/Critical)

**Growth Adds:** Formal WSJF score, competitive analysis with quantitative metrics, strategic traceability enforcement (machine-readable trace to OKR), VMO portfolio review for Critical items.

### G1 -- Requirements Readiness (Requirements -> Development)

**Startup Criteria:**
- Requirements documented in PR/issue with acceptance criteria (Given/When/Then)
- Threat model exists for High/Critical risk features (STRIDE; LINDDUN for PII features)
- DPIA completed for features processing personal data (GDPR Art. 35)
- Compliance requirements tagged (ISO clause references where applicable)
- AI-specific requirements checklist for AI features (ISO 42001 Annex A)
- SBOM baseline captured for dependency tracking

**Growth Adds:** Full user story schema with INVEST criteria, formal acceptance criteria sign-off, AI impact assessment (ISO 42005), formal requirements baseline with change control.

### G2 -- Development Completeness (Development -> Testing)

**Startup Criteria:**
- Code passes linting and basic tests (CI pipeline green)
- PR reviewed by at least 1 human (typically CTO for architecture, CISO for security)
- Security-sensitive code (auth, crypto, PII) reviewed by CTO or CISO
- SBOM updated with any new dependencies
- No Critical/High SAST findings (Semgrep/SonarQube clean)

**Growth Adds:** Full code coverage thresholds (line, branch, mutation), architecture conformance checks, Intent Contract validation, formal peer review with checklist.

### G3 -- Quality and Compliance (Testing -> Deployment)

**Startup Criteria:**
- Unit and integration tests pass
- SAST scan clean (no Critical/High findings)
- Dependency vulnerability check clean (Trivy scan, no Critical/High CVEs)
- E2E tests pass for critical user paths
- Manual security review completed for High/Critical risk features
- Compliance evidence generated (test results, scan reports stored in Git)

**Growth Adds:** Full test suite (unit, integration, E2E, performance, load), DAST scan, AI model validation (accuracy, bias, robustness), compliance evidence package assembled, formal quality gate sign-off.

### G4 -- Release Readiness (Deployment -> Production)

**Startup Criteria:**
- Rollback plan documented (how to revert if deployment fails)
- Deployment runbook exists for High/Critical risk releases
- Monitoring and alerting configured for the release
- Feature flags configured for gradual rollout (where applicable)
- CTO deployment approval for High/Critical risk (Weekly Technical meeting)
- CEO sign-off for Critical risk releases

**Growth Adds:** Canary deployment with automated rollback, traffic management plan, full Operational Readiness Review (ORR) checklist, SLO impact assessment.

### G5 -- Post-Release Validation (Production -> Steady State)

**Startup Criteria:**
- No Critical incidents within 24 hours of deployment
- Basic monitoring confirms expected behavior (error rates, latency, availability)
- User-reported issues triaged and classified
- NIS2-reportable incidents escalated within required timelines (24h initial, 72h update)
- Post-deployment review in next Weekly Technical meeting for High/Critical releases

**Growth Adds:** SLO validation against error budget, formal postmortem if SLO breach, automated performance regression detection, user satisfaction measurement.

---

## 5. Governance Consolidation Mapping

The full SDLC-Growth-v2 governance structure (from SDLC Growth Sec. 13.3) defines 5 governance bodies. At Startup, these consolidate into the 2 meetings:

| SDLC-Growth-v2 Governance Body SDLC Growth Sec. 13.3 | Startup Consolidation | Rationale |
|---|---|---|
| Architecture Review Board | Weekly Technical (architecture agenda item 3) | CTO reviews ADRs and architecture decisions; IT Pentester provides platform perspective |
| Security Governance Board | Weekly Technical (security findings item 1 + security in item 2) | CISO reviews security findings and policy; CTO provides technical security context |
| AI Ethics Board | Weekly Technical or Monthly Strategic (depending on issue scope) | Tactical AI issues in Weekly Technical; strategic AI governance in Monthly Strategic. CEO leads AI governance |
| Release Management Board | Weekly Technical (deployment agenda item 4) | CTO approves High/Critical releases; IT Pentester confirms deployment readiness |
| Strategic Portfolio Board | Monthly Strategic (full meeting scope) | CEO, Strategy Partner, CTO, CISO review strategic alignment, OKRs, resource allocation |

### Mapping Validation

Every function of the 5 SDLC-Growth-v2 governance bodies is covered by one of the 2 meetings:

| Governance Function | Covered By | Agenda Item |
|---|---|---|
| Architecture decision review | Weekly Technical | Item 3: ADRs |
| Security vulnerability triage | Weekly Technical | Item 1: Incidents/findings |
| Security policy approval | Weekly Technical | Item 2: High/Critical items |
| AI ethics review | Weekly Technical or Monthly Strategic | Item 2 or Strategic item 2 |
| Release approval (High/Critical) | Weekly Technical | Item 4: Deployments |
| Strategic alignment review | Monthly Strategic | Item 1: OKR review |
| Compliance posture assessment | Monthly Strategic | Item 2: Compliance |
| Risk register review | Monthly Strategic | Item 3: Risk register |
| Resource allocation | Monthly Strategic | Item 4: Resources |
| Management review (ISO 27001/42001) | Monthly Strategic | Items 1-5 combined |

---

## 6. Growth Transition Triggers

The 2-meeting governance model is designed for a team of 6 humans + 7 agents operating as a single cross-functional unit. The following triggers indicate when to transition to more formal governance:

### 6.1 Trigger Criteria

| # | Trigger | Threshold | Action |
|---|---|---|---|
| 1 | Team size | Exceeds 12 people (including AI teammates counted by effective load) | Split Weekly Technical into separate Architecture Review and Security Review meetings |
| 2 | Deployment volume | More than 3 High/Critical deployments per week requiring approval | Create dedicated Release Management meeting or async release approval process |
| 3 | Audit finding | External auditor recommends separation of duties in governance | Separate the governance bodies as recommended, referencing SDLC-Growth-v2 SDLC Growth Sec. 13.3 for the full structure |
| 4 | Product line expansion | Second product line launches requiring separate governance tracks | Create product-specific governance tracks with shared security/compliance oversight |
| 5 | Regulatory expansion | New certification scope (SOC 2, FedRAMP) requires dedicated governance | Create compliance-specific governance body for the new framework |

### 6.2 Transition Approach

When a trigger is met:

1. **Assess impact:** Determine which governance functions need separation
2. **Reference SDLC-Growth-v2:** Consult SDLC Growth Sec. 13.3 for the full governance body definitions and SDLC Growth Sec. 4.5 for transition criteria
3. **Incremental separation:** Do not create all 5 bodies at once. Separate the specific function that triggered the change
4. **Update RACI:** Modify [RACI-Startup.md](RACI-Startup.md) to reflect new meeting attendee assignments
5. **Update this document:** Version increment with rationale for each governance body added

### 6.3 What Does NOT Trigger Transition

- More Low/Medium risk changes (these auto-flow regardless of volume)
- Adding a new agent (agents are governed by existing meetings)
- Minor compliance findings (addressed within existing meeting structure)
- Team members attending remotely (meeting format, not structure, adapts)

---

*Document: governance-model.md*
*Document ID: HH-GOV-Startup-v1.0*
*Created during Phase 1 Plan 04*
*Reference: SDLC-Growth-v2 SDLC Growth Sec. 13, [RACI-Startup.md](RACI-Startup.md)*
