# Governance Context -- SDLC Lead Reference

This file summarizes the governance model for the SDLC Lead Agent's orchestration needs. For the full governance model, read `governance-model.md`.

**Last updated:** 2026-02-22
**Source of truth:** `governance-model.md` (HH-GOV-Startup-v1.0)

---

## 1. Two-Meeting Governance Model

The Helge Heupel Group operates with 2 meetings replacing 5 SDLC-Growth-v2 governance bodies. The Lead Agent coordinates preparation for both.

### Weekly Technical Governance (30 minutes)

| Field | Detail |
|-------|--------|
| Frequency | Weekly |
| Duration | 30 minutes (hard stop) |
| Required | CEO, CTO, CISO, IT Pentester |
| Optional | Strategy Partner (when product decisions have technical implications) |
| By Invitation | Finance Industry Senior Manager (when financial risk is relevant) |
| Lead Agent Role | Prepare agenda from open PRs, incidents, and pending decisions; coordinate specialist preparation |

**Standing Agenda:**

| # | Item | Duration | Agent Preparation |
|---|------|----------|-------------------|
| 1 | Open incidents / security findings | 5 min | Platform/SRE: incident summaries; CISO: security finding status |
| 2 | High/Critical risk items requiring approval | 10 min | CISO: risk classification; CTO: technical assessment |
| 3 | Architecture decisions / ADRs for review | 10 min | CTO: ADR drafts; AppSec: security architecture review |
| 4 | Upcoming deployments requiring sign-off | 5 min | Platform/SRE: deployment checklists; CTO: deployment approval assessment |

**Decision Authority:**
- CTO: Technical architecture, deployment approvals, code quality
- CISO: Security policy, compliance posture, vulnerability response
- CEO: Risk acceptance (final authority), cross-domain disputes, strategic alignment

### Monthly Strategic Governance (60 minutes)

| Field | Detail |
|-------|--------|
| Frequency | Monthly |
| Duration | 60 minutes |
| Required | CEO, Strategy Partner, CTO, CISO |
| Required for Financial | Finance Industry Senior Manager |
| By Invitation | IT Pentester (when platform investment decisions on agenda) |
| Lead Agent Role | Coordinate cross-agent preparation; ensure all agents deliver their agenda inputs |

**Standing Agenda:**

| # | Item | Duration | Agent Preparation |
|---|------|----------|-------------------|
| 1 | Strategic progress / OKR review | 15 min | Product/Strategy: OKR status summary, strategic alignment assessment |
| 2 | Compliance posture and certification progress | 15 min | CISO: compliance dashboard, certification readiness (ISO 27001, ISO 42001, TISAX, NIS2, EU AI Act) |
| 3 | Risk register review and treatment status | 15 min | CISO: top risks by severity, treatment plan progress |
| 4 | Resource allocation and budget review | 10 min | Product/Strategy: resource recommendations; all agents: capacity inputs |
| 5 | Action items and decisions | 5 min | Lead: compile action items from meeting discussion |

**ISO Management Review Compliance:**
This meeting satisfies ISO 27001 cl. 9.3 and ISO 42001 cl. 9.3 management review requirements when mandatory inputs are covered (at minimum quarterly): status of actions, changes in issues, nonconformities, monitoring results, audit results, objective fulfilment, feedback, risk assessment results, improvement opportunities, resource adequacy.

---

## 2. Gate Criteria Summary (G0-G5)

The Lead Agent uses this summary to verify gate readiness. Full criteria in `governance-model.md` Section 4.

| Gate | Purpose | Low/Medium Risk | High/Critical Risk |
|------|---------|----------------|-------------------|
| **G0** | Strategic Alignment | Auto-approve if OKR-linked | Monthly Strategic meeting |
| **G1** | Requirements Readiness | PR approval (CTO/CISO) | Weekly Technical review (+ CEO for Critical) |
| **G2** | Development Completeness | CI/CD checks pass | Weekly Technical review (+ CEO for Critical) |
| **G3** | Quality and Compliance | Automated tests pass | Weekly Technical review (+ CISO sign-off for Critical) |
| **G4** | Release Readiness | Auto-deploy if G3 passed | Weekly Technical approval (+ CEO sign-off for Critical) |
| **G5** | Post-Release Validation | Automated monitoring | Weekly Technical review (dedicated for Critical) |

**Key design principle:** Low/Medium risk auto-flows through CI/CD and PR approval. High/Critical requires human judgment in Weekly Technical.

### Risk Tier Classification

| Tier | Definition | Gate Path |
|------|-----------|-----------|
| **Low** | Routine changes, minimal impact (bug fixes, docs, UI tweaks) | Automated checks + PR approval |
| **Medium** | Moderate scope, limited data/security impact (new features without PII, refactoring) | Automated checks + PR approval |
| **High** | Significant scope, data sensitivity, or security implications (PII, auth, AI features, infra) | Weekly Technical meeting approval |
| **Critical** | Organization-wide impact, regulatory implications (security policy, cross-entity data flows, AI deployment) | Weekly Technical + CEO/CISO sign-off |

---

## 3. Agent Preparation Responsibilities

### Weekly Technical Meeting

The Lead Agent coordinates these specialists to prepare their assigned items:

| Agent | Prepares | For Agenda Item |
|-------|----------|----------------|
| **Platform/SRE** | Incident summaries (SEV1/SEV2), deployment checklists, operational status | Items 1, 4 |
| **CISO** | Security finding status, risk classifications, compliance impacts | Items 1, 2 |
| **CTO** | ADR drafts, architecture change summaries, deployment approval assessments | Items 3, 4 |
| **AppSec** | Security architecture review inputs, vulnerability scan summaries | Item 3 |

### Monthly Strategic Meeting

The Lead Agent coordinates these specialists to prepare their assigned items:

| Agent | Prepares | For Agenda Item |
|-------|----------|----------------|
| **Product/Strategy** | OKR status summary, strategic alignment assessment, resource recommendations | Items 1, 4 |
| **CISO** | Compliance dashboard (ISO 27001, ISO 42001, TISAX readiness), risk register review, management review data per ISO 27001 cl. 9.3 and ISO 42001 cl. 9.3 | Items 2, 3 |
| **CTO** | Technical investment recommendations, platform architecture direction | Item 4 |
| **AI Science** | AI landscape updates, model evaluation status (when relevant) | Item 1 (as needed) |
| **Platform/SRE** | Operational metrics, SLO performance, incident trends | Item 1 (as needed) |

### Lead Agent's Own Preparation

For each meeting, the Lead Agent:
1. Reviews open PRs and pending decisions in Git
2. Identifies items requiring meeting discussion (High/Critical risk)
3. Coordinates specialist agent preparation (ensures each agent delivers their inputs)
4. Assembles agenda with pre-prepared materials
5. After meeting: captures action items, tracks resolution

---

## 4. RACI Awareness

The Lead Agent uses RACI awareness to verify correct agent assignments. Full matrix in `RACI-Startup.md`.

### Key RACI Patterns

**Accountable (A) is ALWAYS a human** in every RACI row. Agents can be R (Responsible) or C (Consulted) but never A (Accountable).

| Activity Domain | Accountable Human | Responsible Agent(s) |
|----------------|-------------------|---------------------|
| Strategic governance (rows 1-3) | CEO | Product/Strategy Agent |
| Security policy and compliance (rows 5-10) | CEO or CISO | CISO Agent |
| Architecture and engineering (rows 11-14) | CTO | CTO Agent |
| Security testing (rows 15-16) | CTO or CISO | AppSec Agent |
| Platform operations (rows 17-19) | CTO | Platform/SRE Agent |
| AI governance (rows 20-22) | CEO | CISO Agent + AI Science Agent |
| Cross-domain coordination | CEO | SDLC Lead Agent |

### Decision Authority Summary

| Decision Type | Human Authority | Agent Support |
|--------------|----------------|---------------|
| Risk acceptance | CEO | CISO drafts assessment |
| Security policy | CEO + CISO | CISO Agent drafts policy |
| Architecture | CTO (human) | CTO Agent produces ADRs |
| Deployment approval (High/Critical) | CTO (human) | Platform/SRE prepares checklist |
| Strategic direction | CEO | Product/Strategy prepares analysis |
| AI governance | CEO | CISO + AI Science provide inputs |

---

## 5. Governance Consolidation Reference

The 5 SDLC-Growth-v2 governance bodies map to the 2 meetings:

| Growth Governance Body | Startup Meeting | Agenda Item |
|-----------------------|----------------|-------------|
| Architecture Review Board | Weekly Technical | Item 3: ADRs |
| Security Governance Board | Weekly Technical | Items 1-2: Incidents, High/Critical risk |
| AI Ethics Board | Weekly Technical or Monthly Strategic | Item 2 (tactical) or Strategic Item 2 (strategic) |
| Release Management Board | Weekly Technical | Item 4: Deployments |
| Strategic Portfolio Board | Monthly Strategic | Full meeting scope |

---

*Context version: 1.0*
*Source: governance-model.md, RACI-Startup.md, agent CLAUDE.md files*
*Created: Phase 6 Plan 04 (2026-02-22)*
