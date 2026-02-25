# Phase 7: Operational Controls - Research

**Researched:** 2026-02-25
**Domain:** ISO 27001/42001 operational procedures, incident management, BCP/DR, access control, change management, supplier security, HR security, internal audit, management review
**Confidence:** HIGH

## Summary

Phase 7 produces 8 standalone operational security procedure documents that translate the Helge Heupel Group's existing policies into actionable, auditor-verifiable procedures. The domain is well-constrained: all 8 requirements (OPCT-01 through OPCT-06 + ISMS-07 + ISMS-08) map to specific ISO 27001:2022 clauses and Annex A controls, with ISO 42001:2023 and TISAX VDA ISA 6 cross-references where applicable. The user has locked all key decisions including procedure depth tiering, role assignments, ICS-Lite model, audit design, and management review vehicle.

The primary research challenge is not "what to build" (the CONTEXT.md is highly specific) but "what exact content goes into each document" to satisfy five frameworks simultaneously (ISO 27001, ISO 42001, TISAX, NIS2 informational, GDPR embedded). The codebase already contains substantial upstream material: the IS Policy Annex has interim incident response procedures, the Platform/SRE Agent domain context defines the ICS-Lite model and SLO framework, the governance model establishes the Monthly Strategic meeting as the management review vehicle, the RACI matrix defines role assignments for all 32 SDLC activities, and the SoA maps all 93 Annex A controls to implementation status.

**Primary recommendation:** Produce each procedure as a self-contained YAML-frontmatter Markdown document in a `procedures/` directory, following the established document control framework (HH-ISMS-PROC-XXX naming), with each procedure internally structured per the decided tiering (full runbook for OPCT-01/OPCT-02, decision-tree for all others). Extract and consolidate the upstream content rather than inventing from scratch.

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

#### NIS2 and regulatory scoping
- NIS2 is **informational until Growth phase** -- not actively driving procedure structure
- NIS2 reporting timelines (24h/72h/1-month) documented as **reference sections** within the incident management procedure (not standalone, not omitted)
- NIS2 reference sections include BSI (GmbH) and NCSC-NL (B.V.) **contact details and reporting URLs** so Growth activation is copy-paste ready
- **All five frameworks actively drive content:** ISO 27001, ISO 42001, TISAX, NIS2 (informational), GDPR
- GDPR obligations **embedded in relevant procedures** (breach notification in incident management, data subject rights in access control, DPA in supplier security) -- no standalone GDPR document
- Each procedure includes a "Regulatory obligations" subsection where applicable

#### Procedure depth and format
- **Tiered by risk:** Full runbook for High/Critical procedures, decision-tree for Low/Medium
- **Full runbook treatment:** Incident management (OPCT-01) and BCP/DR (OPCT-02) -- step-by-step with verification checks
- **Decision-tree treatment:** Access control (OPCT-03), change management (OPCT-04), supplier security (OPCT-05), HR security (OPCT-06), internal audit (ISMS-07), management review (ISMS-08)
- **One document per requirement** -- 8 separate documents with clear 1:1 mapping for auditors
- **YAML-frontmatter Markdown format** consistent with existing artifacts (HH-ISMS-PROC-XXX document ID scheme)

#### Role assignments and approval chains
- **Incident management ICS-Lite:** CTO primary Incident Commander, IT Pentester backup IC. CEO as Communications Lead. Most-qualified-engineer as Technical Lead.
- **Change management approval:** Low/Medium changes via PR approval (any reviewer). High/Critical changes require CEO + CTO approval on the PR.
- **AI agent role:** Agents assist, humans execute. Agents can draft, analyze, and recommend within procedures (e.g., CISO Agent classifies incident severity) but all actions and approvals are human. Consistent with Trust Level 2.
- **Access reviews (quarterly):** IT Pentester conducts review, CTO approves standard changes, CEO signs off on privileged/admin account access.

#### Audit and management review design
- **One full-scope internal audit before Stage 1** covering all ISMS + AIMS controls. Demonstrates the audit program exists and has been exercised.
- **Internal auditor:** External CISO (NorthGRC) leads the audit for independence (ISO 27001 cl. 9.2). CISO Agent assists with evidence gathering but does not audit its own outputs.
- **Management review:** Monthly Strategic meeting serves as the management review vehicle (already established in governance model). Structured agenda template added covering all cl. 9.3 inputs.
- **Single combined IMS review template** covering both ISMS (ISO 27001 cl. 9.3) and AIMS (ISO 42001 cl. 9.3) inputs. Matches the integrated management system approach.

### Claude's Discretion
- Exact section structure within each procedure document
- Annex A control mapping per procedure (which controls each procedure addresses)
- Internal audit checklist design and scoring criteria
- Management review template input ordering and format

### Deferred Ideas (OUT OF SCOPE)
None -- discussion stayed within phase scope
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| OPCT-01 | Incident management procedure -- detection, classification, response, reporting (NIS2 timelines), post-incident review | Upstream: IS Policy Annex 10 (interim procedure), Platform/SRE domain context Section 6 (ICS-Lite, severity classification, NIS2 timelines), SDLC-Growth-v2 Section 16.3-16.4 (full framework). Control mapping: A.5.24-A.5.28. BSI portal (portal.bsi.bund.de) and NCSC-NL portal (mijn.ncsc.nl) for NIS2 reporting URLs. |
| OPCT-02 | BCP/DR plan -- RPO/RTO targets per service tier, failover procedures, testing schedule | Upstream: Platform/SRE domain context Section 5 (SLO framework with RPO/RTO), SDLC-Growth-v2 Section 16.7 (DR architecture), Section 16.6.3 (game days). Control mapping: A.5.29-A.5.30. TISAX ISA Chapter 10 requires documented BCP/DR. |
| OPCT-03 | Access control policy -- RBAC, least privilege, JIT elevation, MFA, quarterly access reviews | Upstream: IS Policy Section 6 (classification), SoA entries A.5.15-A.5.18 and A.8.1-A.8.5 (implementation status), governance model risk-tiered gate. GDPR data subject rights embedded. Control mapping: A.5.15-A.5.18, A.8.1-A.8.5. |
| OPCT-04 | Change management procedure -- risk-tiered approval, CAB for High/Critical, rollback requirements | Upstream: Governance model Section 3 (gate-to-meeting mapping, risk tiers), SDLC-Growth-v2 Section 13.1-13.2 (risk classification, gate criteria). Control mapping: A.8.32, A.5.37. PR workflow = audit trail per governance model. |
| OPCT-05 | Supplier security requirements -- vendor risk assessment, contractual security clauses, third-party AI assessment | Upstream: SoA entries A.5.19-A.5.23 (all planned status), risk register RISK-SUP-001. GDPR DPA requirements embedded. AI supplier assessment per ISO 42001 A.10. Control mapping: A.5.19-A.5.23. |
| OPCT-06 | HR security procedures -- screening, awareness training, termination procedures, NDA management | Upstream: SoA entries A.6.1-A.6.8 (mix of planned/partial), IS Policy Annex 8 (onboarding/offboarding). Control mapping: A.6.1-A.6.8. |
| ISMS-07 | Internal audit program -- audit schedule, scope, methodology, competence requirements | Upstream: IMS Context Section 7 (AIMS PDCA defers audit to Phase 7), RACI row 24 (CISO R, CEO A), SDLC-Startup-v2 Section 6.6.2. ISO 27001 cl. 9.2 requirements. External CISO (NorthGRC) leads for independence. |
| ISMS-08 | Management review template -- mandatory inputs per cl. 9.3.2, mandatory outputs per cl. 9.3.3 | Upstream: Governance model Section 2 Meeting 2 (Monthly Strategic with ISO compliance mapping table), IMS Context (combined ISMS/AIMS review). ISO 27001 cl. 9.3 + ISO 42001 cl. 9.3 mandatory inputs. |
</phase_requirements>

## Standard Stack

This phase produces compliance documentation, not software. The "stack" is the document framework and upstream artifacts.

### Core Document Framework

| Component | Reference | Purpose | Why Standard |
|-----------|-----------|---------|--------------|
| YAML-frontmatter Markdown | HH-ISMS-DOC-001 (Document Control Framework) | Consistent format for all IMS documents | Established in Phase 2; satisfies ISO 27001 cl. 7.5 |
| Document ID: `HH-ISMS-PROC-{NNN}` | Document Control Framework Section 4.3 | Unique identification per cl. 7.5.2 | Convention: `HH-{system}-{type}-{number}` where type=PROC for procedures |
| Git PR approval workflow | Governance model + Document Control Framework | Review and approval for suitability (cl. 7.5.2) | PR merge = CEO approval; immutable audit trail |
| Classification: Internal | IS Policy Section 6 | All procedures are Internal classification | Procedures are for personnel use, not external distribution |

### Upstream Artifacts (Input)

| Artifact | Document ID | Used By |
|----------|-------------|---------|
| IS Policy | HH-ISMS-POL-001 | All 8 procedures reference policy sections |
| IS Policy Annex | HH-ISMS-POL-001-ANNEX | OPCT-01 (interim incident procedure), OPCT-03 (classification handling), OPCT-06 (onboarding) |
| AI Policy | HH-AIMS-POL-001 | OPCT-05 (AI supplier assessment), OPCT-01 (AI incident types) |
| SoA (ISO 27001) | HH-ISMS-SOA-001 | All procedures -- Annex A control mapping |
| SoA (ISO 42001) | HH-AIMS-SOA-001 | OPCT-01, OPCT-05, ISMS-07, ISMS-08 -- AIMS control mapping |
| Risk Assessment Methodology | HH-ISMS-RMA-001 | OPCT-01 (severity classification), OPCT-04 (risk-tiered approval), OPCT-05 (vendor risk) |
| RACI Matrix | HH-RACI-Startup-v1.0 | All procedures -- role assignments |
| Governance Model | HH-GOV-Startup-v1.0 | OPCT-04 (gate model), ISMS-07 (audit governance), ISMS-08 (management review) |
| IMS Context | HH-IMS-CTX-001 | ISMS-07, ISMS-08 -- combined IMS approach |
| Platform/SRE Domain Context | HH-PLATSRE-REF-001 | OPCT-01 (ICS-Lite, severity), OPCT-02 (SLO/RPO/RTO) |
| SDLC-Growth-v2 | (shared reference) | Section 16 (Operations), Section 13 (Gates) |

### Document ID Assignment (Recommended)

| Requirement | Document ID | Title |
|-------------|-------------|-------|
| OPCT-01 | HH-ISMS-PROC-001 | Incident Management Procedure |
| OPCT-02 | HH-ISMS-PROC-002 | Business Continuity and Disaster Recovery Plan |
| OPCT-03 | HH-ISMS-PROC-003 | Access Control Procedure |
| OPCT-04 | HH-ISMS-PROC-004 | Change Management Procedure |
| OPCT-05 | HH-ISMS-PROC-005 | Supplier Security Procedure |
| OPCT-06 | HH-ISMS-PROC-006 | HR Security Procedure |
| ISMS-07 | HH-ISMS-PROC-007 | Internal Audit Program |
| ISMS-08 | HH-ISMS-PROC-008 | Management Review Procedure |

## Architecture Patterns

### Recommended Document Structure

```
procedures/
  incident-management.md           # HH-ISMS-PROC-001 (OPCT-01)
  bcp-dr.md                        # HH-ISMS-PROC-002 (OPCT-02)
  access-control.md                # HH-ISMS-PROC-003 (OPCT-03)
  change-management.md             # HH-ISMS-PROC-004 (OPCT-04)
  supplier-security.md             # HH-ISMS-PROC-005 (OPCT-05)
  hr-security.md                   # HH-ISMS-PROC-006 (OPCT-06)
  internal-audit.md                # HH-ISMS-PROC-007 (ISMS-07)
  management-review.md             # HH-ISMS-PROC-008 (ISMS-08)
  ai-risk-assessment-procedure.md  # HH-AIMS-RMA-001 (existing, Phase 5)
  ai-impact-assessment-procedure.md # HH-AIMS-IMA-001 (existing, Phase 5)
```

### Pattern 1: Full Runbook Structure (OPCT-01, OPCT-02)

**What:** Step-by-step procedure with verification checks at each stage, designed to be followed under pressure.
**When to use:** High/Critical risk procedures where missing a step has regulatory or operational consequences.

```markdown
---
document-id: HH-ISMS-PROC-001
title: "Incident Management Procedure"
version: v1.0
date: 2026-02-XX
classification: Internal
author: CISO Agent
reviewer: [CISO, CTO]
approver: CEO Helge Heupel
review-cycle: Annual
next-review: 2027-02-XX
status: Draft
parent-document: HH-ISMS-POL-001
ims-context: HH-IMS-CTX-001
change-summary: Initial release
---

# Incident Management Procedure

## 1. Purpose and Scope
## 2. Normative References
## 3. Definitions and Severity Classification
## 4. Detection and Initial Triage
  ### 4.1 Detection Sources
  ### 4.2 Initial Classification (decision tree)
  ### 4.3 Verification Checkpoint: Is this an incident?
## 5. Incident Response
  ### 5.1 ICS-Lite Role Activation
  ### 5.2 Containment Steps (by severity)
  ### 5.3 Eradication
  ### 5.4 Recovery
  ### 5.5 Verification Checkpoint: Is the incident resolved?
## 6. Communication
  ### 6.1 Internal Notification Chain
  ### 6.2 External Communication (customers, partners)
## 7. NIS2 Reporting (Reference Section)
  ### 7.1 GmbH -- BSI Reporting
  ### 7.2 B.V. -- NCSC-NL Reporting
  ### 7.3 Dual-Entity Incident Coordination
## 8. GDPR Breach Notification
## 9. AI-Specific Incident Types
## 10. Post-Incident Review
## 11. Metrics and KPIs
## 12. Annex A Control Mapping
## 13. Regulatory Obligations
## 14. Document Control
```

### Pattern 2: Decision-Tree Structure (OPCT-03 through OPCT-06, ISMS-07, ISMS-08)

**What:** Flowchart-style procedure organized around decision points, with branches for different scenarios.
**When to use:** Low/Medium risk procedures where the primary question is "which path do I follow?"

```markdown
---
document-id: HH-ISMS-PROC-003
title: "Access Control Procedure"
...
---

# Access Control Procedure

## 1. Purpose and Scope
## 2. Normative References
## 3. Decision Tree: Access Lifecycle
  ### 3.1 New Access Request --> [Who needs it? What level?]
  ### 3.2 Access Modification --> [Promotion? Role change? Temporary?]
  ### 3.3 Access Revocation --> [Termination? Transfer? Contractor end?]
## 4. RBAC Model and Role Definitions
## 5. Least Privilege and JIT Elevation
## 6. MFA Requirements
## 7. Quarterly Access Review Process
## 8. GDPR Data Subject Rights
## 9. Annex A Control Mapping
## 10. Regulatory Obligations
## 11. Document Control
```

### Pattern 3: Combined IMS Template (ISMS-08)

**What:** Management review template that produces minutes satisfying both ISO 27001 cl. 9.3 and ISO 42001 cl. 9.3 in a single document.
**When to use:** For the management review procedure, which includes an appendix template for meeting minutes.

### Anti-Patterns to Avoid

- **Copy-paste from Growth framework:** SDLC-Growth-v2 Section 16 describes a Growth-scale organization. Procedures must be downscaled to Startup reality (6 humans, 7 agents, no Sentinel, no PagerDuty).
- **Generic boilerplate:** Each procedure must name specific HH personnel, systems, and processes. "The incident manager" is wrong; "CTO (primary Incident Commander)" is correct.
- **Duplicating policy content:** Procedures reference the IS Policy sections; they do not restate them. A procedure says "Per IS Policy Section 5, risk assessment uses the 5x5 matrix (HH-ISMS-RMA-001)" not a copy of the matrix.
- **Standalone GDPR document:** GDPR obligations are embedded in relevant procedures per locked decision. No HH-ISMS-PROC-009 for GDPR.
- **Overbuilding NIS2:** NIS2 sections are "informational reference" not "active driver." Include enough for Growth activation, not a full NIS2 compliance program.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Incident severity classification | New severity scale | Use Platform/SRE domain context Section 6 (SEV1-SEV4 already defined, aligned with SDLC-Growth-v2 Section 16.3.2) | Consistency with agent context; already reviewed |
| Risk-tiered change approval | New approval matrix | Use governance model Section 3.2 (gate-to-meeting mapping already maps Low/Medium/High/Critical to approval mechanisms) | Governance model is the source of truth |
| RPO/RTO targets | New availability targets | Use Platform/SRE domain context Section 5 (SLO framework with 3 tiers + Tier 1-AI) | SLO targets already established |
| Role assignments | New RACI | Reference RACI-Startup.md (32 activities already mapped) | RACI is the source of truth for who does what |
| NIS2 reporting timeline | Research NIS2 articles | Use IS Policy Annex 7 (checklists already exist for BSI and NCSC-NL) | Annex already has step-by-step checklists |
| ISO cl. 9.3 management review inputs | Derive from scratch | Use governance model Section 2 Meeting 2 (already maps ISO requirements to agenda items) | Governance model table already verified |
| Document control metadata | Custom fields | Use document-control.md Section 4 (YAML frontmatter standard) | Consistency with all existing IMS documents |

**Key insight:** Phase 7's primary task is consolidation and operationalization of upstream content, not original research. The IS Policy, governance model, RACI, SoA, Platform/SRE context, and SDLC-Growth-v2 already contain 70-80% of the content. The value-add is structuring it into auditor-facing, personnel-followable procedure documents.

## Common Pitfalls

### Pitfall 1: Policy-Procedure Confusion
**What goes wrong:** Procedures restate policy intent instead of providing actionable steps. An auditor finds the same content in two documents with no added operational specificity.
**Why it happens:** The IS Policy and IS Policy Annex already contain substantial operational guidance (Annex 7 has NIS2 checklists, Annex 10 has interim incident response). It is tempting to just wrap them in a new document.
**How to avoid:** Each procedure must contain content that the IS Policy does NOT: specific step numbers, verification checks, escalation timers, tool-specific instructions, and role-specific actions. If a section could live entirely in the policy, it belongs there, not in the procedure.
**Warning signs:** A procedure section that contains no names, no system names, and no timestamps.

### Pitfall 2: Growth-Scale Content in Startup Procedures
**What goes wrong:** Procedures reference Microsoft Sentinel, PagerDuty, observability-as-code, canary deployments, or other Growth-phase capabilities that do not exist at Startup.
**Why it happens:** SDLC-Growth-v2 Section 16 is the most detailed upstream source. It is easy to copy content that assumes Growth-scale infrastructure.
**How to avoid:** For each capability referenced, check the Platform/SRE domain context Section 7 "Operational Status" table. If the capability is "Planned" or "Growth target," use the Startup-applicable alternative. For example: monitoring is "Basic Vercel/Cloudflare analytics" not "Azure Monitor + Application Insights."
**Warning signs:** Any reference to Sentinel, PagerDuty, Kubernetes, canary analysis, or formal SRE team rotation.

### Pitfall 3: Missing Cross-Procedure References
**What goes wrong:** Eight separate documents with no cross-references create auditor confusion about how procedures interrelate. An incident that triggers a change (OPCT-01 to OPCT-04) has no documented handoff.
**Why it happens:** The "one document per requirement" decision is correct for audit clarity but creates integration risk.
**How to avoid:** Each procedure includes a "Related Procedures" table in Section 2 (Normative References) that explicitly names the other procedures and the trigger conditions for cross-referencing. For example: "If a security incident results in a corrective change, follow HH-ISMS-PROC-004 (Change Management) for the change approval."
**Warning signs:** A procedure that never references any other procedure.

### Pitfall 4: NIS2 Section That Is Either Too Thin or Too Active
**What goes wrong:** The NIS2 reference section in OPCT-01 is either a stub ("See NIS2 for details") that is useless for Growth activation, or a full compliance program that contradicts the "informational" decision.
**Why it happens:** The user decision is nuanced: "informational until Growth, but Growth-activation ready with contact details and reporting URLs."
**How to avoid:** Include: (1) exact reporting timelines (24h/72h/1-month), (2) BSI portal URL (portal.bsi.bund.de), (3) NCSC-NL portal URL (mijn.ncsc.nl), (4) step-by-step reporting instructions from IS Policy Annex 7, (5) a "Growth Activation" callout box explaining what changes when NIS2 becomes actively driving. Do NOT include: NIS2 compliance program design, gap analysis, or implementation roadmap.
**Warning signs:** The NIS2 section is shorter than 1 page (too thin) or longer than 4 pages (too active).

### Pitfall 5: Internal Audit Checklist That Audits Itself
**What goes wrong:** The CISO Agent assists with evidence gathering for the internal audit, but the checklist includes controls that the CISO Agent itself produced (e.g., IS Policy, AI Policy, SoA).
**Why it happens:** The locked decision says "CISO Agent assists with evidence gathering but does not audit its own outputs." This boundary is easy to cross when the Agent produced most of the IMS documentation.
**How to avoid:** The audit checklist must clearly mark which evidence items were produced by the CISO Agent and flag them for independent verification by the External CISO (NorthGRC). The checklist should have a column: "Evidence Source" with values like "CISO Agent output -- requires NorthGRC independent review" vs "System-generated (Azure logs) -- automated evidence."
**Warning signs:** An audit checklist where every evidence item has the same source.

### Pitfall 6: Management Review Template Missing AIMS Inputs
**What goes wrong:** The management review template covers ISO 27001 cl. 9.3 inputs but omits the ISO 42001-specific inputs, producing a template that fails the AIMS audit.
**Why it happens:** ISO 42001 cl. 9.3 inputs are a superset of ISO 27001 cl. 9.3. The differences are subtle: AI system performance metrics, AI risk assessment status, stakeholder feedback on AI systems, and AI-specific objectives.
**How to avoid:** Build the template as a combined IMS review that adds AIMS-specific rows to the ISO 27001 input table. The governance model already maps ISO 27001 cl. 9.3 inputs to Monthly Strategic agenda items; extend this mapping with AIMS-specific items.
**Warning signs:** The template has no mention of AI systems, AI governance, or ISO 42001.

## Code Examples

### YAML Frontmatter Standard (from Document Control Framework)

```yaml
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
```

### Annex A Control Mapping Table (per procedure)

Each procedure includes a section mapping to specific Annex A controls it addresses:

```markdown
## Annex A Control Mapping

| Control | Name | How This Procedure Addresses It |
|---------|------|---------------------------------|
| A.5.24 | Information Security Incident Management Planning and Preparation | Sections 3-5 define the full incident planning and preparation framework |
| A.5.25 | Assessment and Decision on Information Security Events | Section 4.2 provides the classification decision tree |
| A.5.26 | Response to Information Security Incidents | Section 5 provides the response runbook |
| A.5.27 | Learning from Information Security Incidents | Section 10 defines the post-incident review process |
| A.5.28 | Collection of Evidence | Section 5.3 includes evidence collection steps |
```

### NIS2 Reference Section Pattern (Growth-Activation Ready)

```markdown
## 7. NIS2 Reporting (Reference Section)

> **Status:** INFORMATIONAL. NIS2 reporting is documented here as a reference
> for Growth-phase activation. At Startup, these steps serve as the
> reporting procedure if a NIS2-reportable incident occurs. Full NIS2
> compliance program activation is deferred to the Growth phase.

### 7.1 GmbH -- BSI Reporting

**Authority:** Bundesamt fuer Sicherheit in der Informationstechnik (BSI)
**Portal:** portal.bsi.bund.de
**Registration:** Via Mein Unternehmenskonto (MUK) with ELSTER certificate
**Reporting language:** German
**Contact:** BSI Meldestelle (reporting office via portal)

| Timeline | Action | Template |
|----------|--------|----------|
| T+24h | Early warning (Fruehwarnung) submitted via BSI portal | BSI Erstmeldung template |
| T+72h | Detailed report (Detaillierter Bericht) submitted via BSI portal | BSI detailed report template |
| T+1 month | Final report (Abschlussbericht) submitted via BSI portal | BSI final report template |

### 7.2 B.V. -- NCSC-NL Reporting

**Authority:** Nationaal Cyber Security Centrum (NCSC-NL)
**Portal:** mijn.ncsc.nl
**Reporting language:** Dutch (formal), English (technical reports accepted)
**Incident form:** ncsc.nl/contact/contactformulieren/incident-melden

| Timeline | Action | Template |
|----------|--------|----------|
| T+24h | Early warning submitted via mijn.ncsc.nl | NCSC-NL early warning form |
| T+72h | Detailed report submitted via mijn.ncsc.nl | NCSC-NL detailed report form |
| T+1 month | Final report submitted via mijn.ncsc.nl | NCSC-NL final report form |

### 7.3 Growth Activation Checklist

When NIS2 transitions from informational to active:
- [ ] Confirm GmbH BSI registration is current (portal.bsi.bund.de)
- [ ] Confirm B.V. NCSC-NL registration is current (mijn.ncsc.nl)
- [ ] Activate automated NIS2 classification in monitoring (Sentinel analytics rules)
- [ ] Pre-populate BSI and NCSC-NL report templates
- [ ] Establish legal review SLA (2 hours per SDLC-Growth-v2 Section 16.4.2)
- [ ] Test end-to-end reporting workflow with tabletop exercise
```

### Management Review Mandatory Inputs (Combined IMS Template)

```markdown
## Management Review Inputs (Combined ISMS + AIMS)

### ISO 27001 cl. 9.3.2 Mandatory Inputs

| # | Input | Source | Presenter |
|---|-------|--------|-----------|
| a | Status of actions from previous management reviews | Previous meeting minutes | CISO |
| b | Changes in external/internal issues relevant to ISMS | Environmental scan, regulatory updates | CISO |
| c | Changes in needs/expectations of interested parties | Stakeholder feedback register | CEO |
| d.1 | Nonconformities and corrective actions | NCR register, corrective action log | CISO |
| d.2 | Monitoring and measurement results | IS Objective dashboard, KPI trends | CISO |
| d.3 | Audit results | Internal audit report, external audit findings | CISO |
| d.4 | Fulfilment of information security objectives | IS Objective status (7 objectives per IS Policy Section 3) | CISO |
| e | Feedback from interested parties | Customer feedback, partner assessments, BearingPoint input | CEO |
| f | Results of risk assessment and status of risk treatment plan | Risk register summary, treatment progress | CISO |
| g | Opportunities for continual improvement | Improvement register, postmortem action items | CTO |

### ISO 42001 cl. 9.3.2 Additional AIMS Inputs

| # | Input | Source | Presenter |
|---|-------|--------|-----------|
| AI-1 | Status of AI system performance against AIMS objectives | AI System Registry metrics, SLO status | CTO |
| AI-2 | AI risk assessment status and AI-specific treatment progress | AI risk entries (ai-risk: true) from risk register | CISO |
| AI-3 | Feedback from interested parties on AI systems | Customer feedback on AI features, regulatory guidance | CEO |
| AI-4 | AI incident summary and lessons learned | AI-specific incidents (hallucination, bias, drift) | CTO |
| AI-5 | Changes in AI regulatory landscape | EU AI Act enforcement timeline, ISO 42001 updates | CISO |
| AI-6 | AI governance metrics | Trust level compliance, prohibited practice monitoring | CISO |
```

### Internal Audit Scoring Criteria (Recommended)

```markdown
## Audit Finding Classification

| Rating | Definition | Response Required |
|--------|-----------|-------------------|
| **Conforming** | Control is implemented and operating effectively. Evidence is current and complete. | None -- document in audit report. |
| **Opportunity for Improvement (OFI)** | Control is conforming but could be more effective or efficient. | Document recommendation. Address within next review cycle. |
| **Minor Nonconformity** | Control is partially implemented or evidence is incomplete. No immediate risk to ISMS/AIMS effectiveness. | Corrective action within 30 days. Root cause analysis required. |
| **Major Nonconformity** | Control is not implemented, or a significant gap exists that undermines ISMS/AIMS effectiveness. | Immediate corrective action. CEO notification. Must be resolved before Stage 1 audit. |

## Scoring (per control)

| Score | Meaning |
|-------|---------|
| 3 | Fully conforming -- evidence is complete, current, and demonstrates operational effectiveness |
| 2 | Partially conforming -- control exists but evidence gaps or operational weaknesses identified |
| 1 | Minimally conforming -- significant gaps; meets intent but not fully operational |
| 0 | Non-conforming -- control not implemented or no evidence |
```

## State of the Art

| Aspect | Startup State | Growth Target | Impact on Phase 7 |
|--------|--------------|---------------|-------------------|
| Monitoring | Basic Vercel/Cloudflare analytics | Azure Monitor + Application Insights + Sentinel | Incident detection in OPCT-01 must reference current basic monitoring, not Sentinel-based detection |
| On-call | Informal (CTO + IT Pentester) | Formal primary/secondary rotation with PagerDuty | OPCT-01 ICS-Lite assigns CTO as primary IC with IT Pentester backup; no formal rotation tool |
| DR readiness | Neon PostgreSQL automated backups | Full DR with Azure region failover | OPCT-02 RPO/RTO targets must be realistic for current infrastructure (Neon + Vercel + Cloudflare) |
| Change management | Git PR workflow with branch protection | Full CI/CD pipeline per SDLC-Growth-v2 | OPCT-04 uses PR approval as the gate mechanism; no dedicated change management tool |
| GRC platform | Not yet deployed | NorthGRC integration (Phase 9) | ISMS-07 audit evidence tracked in Git, not NorthGRC |
| IaC | Manual provisioning | Terraform/Bicep with drift detection | OPCT-02 failover procedures are manual, not automated |
| SIEM | None | Microsoft Sentinel with SOAR playbooks | OPCT-01 incident detection is manual/basic monitoring, not SIEM-driven |
| NIS2 portal | BSI portal opened January 2026; NCSC-NL portal active since October 2024 | Automated NIS2 reporting via Sentinel | OPCT-01 NIS2 reference section includes manual reporting steps with portal URLs |

**Key state-of-art insight:** The procedures must describe the CURRENT operational reality, not the Growth target. Growth capabilities are noted as "Growth target" callouts where relevant.

## Open Questions

1. **File location for 8 new procedures**
   - What we know: Existing procedures (`ai-risk-assessment-procedure.md`, `ai-impact-assessment-procedure.md`) are in `procedures/` directory. The `policies/` directory holds policies. The document control framework lists "Procedures" as a document type stored in Git.
   - What's unclear: Whether the 8 new procedures should go in `procedures/` (co-located with existing Phase 5 procedures) or a new `procedures/operational/` subdirectory.
   - Recommendation: Use `procedures/` (flat, consistent with existing convention). 10 procedure files in one directory is manageable.

2. **Exact ISO 42001 cl. 9.3 management review inputs**
   - What we know: ISO 42001 follows the Annex SL harmonized structure, so cl. 9.3 has the same basic inputs as ISO 27001 cl. 9.3 plus AI-specific additions. The AIMS SoA and IMS Context confirm combined management review approach.
   - What's unclear: The exact additional AI-specific inputs required by ISO 42001 cl. 9.3.2 beyond what ISO 27001 cl. 9.3.2 requires. Web search returned general information but not clause-level specifics.
   - Recommendation: Use the AI-specific inputs identified in the IMS Context and AIMS SoA as the basis. Include: AI system performance, AI risk status, AI-specific feedback, AI incident summary, AI regulatory changes, AI governance metrics. Flag for validation by External CISO (NorthGRC) during audit preparation. **Confidence: MEDIUM.**

3. **TISAX ISA 6 specific control requirements per procedure**
   - What we know: TISAX ISA 6 has chapters covering incident management, BCP, access control, and supplier security. The SoA references TISAX controls. VDA ISA 6 replaced ISA 5 from April 2024.
   - What's unclear: The exact VDA ISA 6 control IDs that map to each of the 8 procedures.
   - Recommendation: Map TISAX requirements via the existing SoA cross-references. TISAX VDA ISA 6 chapters are: 1 (IS Policies), 2 (Organization), 3 (Asset Mgmt), 4 (Access Control), 5 (Cryptography/Operations), 6 (Incident Mgmt), 7 (Data Protection), 8 (Compliance), 9 (Supplier), 10 (BCP). Each procedure's "Regulatory Obligations" section should reference the applicable TISAX chapter. **Confidence: MEDIUM** -- exact ISA 6 control IDs need validation against the ISO IEC Standards Collection in the repo.

4. **00:00-08:00 CET timezone gap handling in incident management**
   - What we know: CONTEXT.md specifics say "incident management runbook should handle the 00:00-08:00 CET timezone gap (AI-assisted monitoring with auto-escalation per SDLC-Growth-v2 Section 16.3.3)." Platform/SRE domain context Section 6 confirms the gap and Startup coverage: "AI-assisted monitoring with automated remediation for known failure modes; auto-escalation for unresolved alerts after 15 minutes."
   - What's unclear: Exactly what "AI-assisted monitoring" means at Startup when there is no Sentinel or formal monitoring stack.
   - Recommendation: At Startup, the 00:00-08:00 gap is covered by: (1) Vercel/Cloudflare built-in uptime monitoring with email alerts, (2) Azure Monitor basic alerts (if configured), (3) CTO or IT Pentester available on-call (informal) with 30-minute acknowledgment SLA for SEV1 only. Document this as current state with Growth target of Sentinel-based automation.

## Sources

### Primary (HIGH confidence)
- IS Policy (HH-ISMS-POL-001) -- policy framework, roles, risk appetite, regulatory requirements
- IS Policy Annex (HH-ISMS-POL-001-ANNEX) -- operational procedures, interim incident response, NIS2 checklists, classification handling
- Governance Model (HH-GOV-Startup-v1.0) -- meeting structure, gate model, management review compliance mapping
- RACI Matrix (HH-RACI-Startup-v1.0) -- role assignments for all 32 SDLC activities
- SoA ISO 27001 (HH-ISMS-SOA-001) -- 93 Annex A control applicability and implementation status
- SoA ISO 42001 (HH-AIMS-SOA-001) -- 38 Annex A control applicability and implementation status
- Risk Assessment Methodology (HH-ISMS-RMA-001) -- 5x5 matrix, risk levels, treatment framework
- Platform/SRE Domain Context (HH-PLATSRE-REF-001) -- SLO framework, ICS-Lite, severity classification, NIS2 timelines, operational status
- Document Control Framework (HH-ISMS-DOC-001) -- YAML frontmatter standard, document ID convention
- IMS Context (HH-IMS-CTX-001) -- combined ISMS/AIMS management review, integrated audit approach
- SDLC-Growth-v2 Section 16 -- full operations, incident management, DR, chaos engineering framework

### Secondary (MEDIUM confidence)
- [ISO 27001:2022 Clause 9.3 Management Review](https://hightable.io/iso-27001-clause-9-3-management-reviews-essential-guide/) -- mandatory inputs and outputs
- [ISO 27001:2022 Clause 9.2 Internal Audit](https://hightable.io/iso-27001-clause-9-2-internal-audit/) -- audit program requirements
- [ISMS.online ISO 27001 Clause 9.2](https://www.isms.online/iso-27001/requirements-2022/9-2-internal-audit-2022/) -- internal audit methodology
- [ISO 42001 Core Requirements Clauses 4-10](https://www.hicomply.com/hub/the-core-requirements-of-iso-42001-clauses-4-10) -- AIMS management review structure
- [BSI NIS2 Meldepflicht](https://www.bsi.bund.de/DE/Themen/Regulierte-Wirtschaft/NIS-2-regulierte-Unternehmen/NIS-2-Infopakete/NIS-2-Meldepflicht/NIS-2-Meldepflicht_node.html) -- BSI reporting obligation portal and instructions
- [BSI Portal Registration](https://www.bsi.bund.de/DE/Service-Navi/Presse/Pressemitteilungen/Presse2026/260601_NIS2_BSI-Portal.html) -- BSI portal operational since January 2026
- [NCSC-NL Incident Melden](https://www.ncsc.nl/contact/contactformulieren/incident-melden) -- NCSC-NL incident reporting form
- [NCSC-NL Meldplicht](https://www.ncsc.nl/cyberbeveiligingswet-nis2/bereid-je-voor/meldplicht) -- Dutch NIS2 reporting obligations
- [VDA ISA Catalog 6](https://vda-isa-berater.com/en/vda-isa-catalog-6/) -- TISAX ISA 6 changes and structure
- [DQS ISA Catalog 6.0 Update](https://www.dqsglobal.com/en/explore/blog/isa-catalog-6-0-valid-from-2024) -- ISA 6 effective from April 2024

### Tertiary (LOW confidence)
- ISO 42001:2023 cl. 9.3.2 exact AI-specific management review inputs -- derived from Annex SL harmonized structure plus AI-specific extensions found in general documentation. Exact clause text not verified against the standard document. Flag for NorthGRC validation.

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH -- Document framework is established; upstream artifacts are comprehensive and consistent
- Architecture: HIGH -- Section structures are well-constrained by user decisions and upstream patterns
- Pitfalls: HIGH -- Identified from direct codebase analysis showing real gaps between Growth-scale content and Startup reality
- Annex A control mapping: MEDIUM -- Control assignments are based on SoA analysis; exact per-procedure allocation is Claude's discretion and should be validated
- ISO 42001 cl. 9.3 inputs: MEDIUM -- Based on harmonized structure inference and general documentation; exact clause text not verified

**Research date:** 2026-02-25
**Valid until:** 2026-03-25 (30 days -- stable domain, documents unlikely to change)
