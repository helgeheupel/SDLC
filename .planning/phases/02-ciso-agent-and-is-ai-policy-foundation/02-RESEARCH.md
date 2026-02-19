# Phase 2: CISO Agent and IS/AI Policy Foundation - Research

**Researched:** 2026-02-19
**Domain:** Agent construction (Claude Code CLAUDE.md), ISO 27001/42001 policy documents, ISMS scope, document control
**Confidence:** HIGH

## Summary

Phase 2 is the first phase that produces real operational artifacts (as opposed to Phase 1's framework artifacts). It creates the CISO Agent -- the most complex of the 7 agents, absorbing 5 source archetypes -- and uses that agent to produce 5 foundational documents: IMS Context preamble, Information Security Policy, AI Policy, ISMS/AIMS Scope Statements, and a document control framework. Every downstream phase depends on these outputs: Phase 3 (risk framework) needs the IS Policy and scope as inputs; Phase 4 (CTO/AppSec agents) consumes IS Policy as a constraint; Phase 5 (AIMS core) builds on the AI Policy. Getting these wrong means cascading rework.

The research finds that the Phase 1 foundation is solid: the agent definition template in `protocols/interaction-model.md` Section 6 provides the exact structure every agent CLAUDE.md must follow; the agent qualifications in `protocols/agent-qualifications.md` define the CISO Agent's 5-archetype expertise, 13 primary ISO standards, and 10 SDLC-Growth-v2 section ownerships; and the Phase 1 gap analyses (EU-CA, AIGO, RMA, CFCI) provide extensive raw material for policy content. The key challenge is not discovering what to write but rather compressing a vast domain (5 archetypes, 13 primary standards, 10+ SDLC sections) into a focused, HH-specific agent prompt and a set of concise policy documents that satisfy ISO auditors while remaining actionable for a 6-person startup.

**Primary recommendation:** Structure Phase 2 as 3 plans: (1) CISO Agent CLAUDE.md construction and validation, (2) IMS Context + IS Policy + ISMS Scope Statements, (3) AI Policy + Document Control Framework. This mirrors the dependency chain: the agent must exist before it can produce artifacts, and the IMS context must exist before entity-specific policies reference it.

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

#### CISO Agent Persona and Expertise

- **Balanced security + AI governance from day one** -- equal weight on ISO 27001 and ISO 42001. Both certifications are equally urgent; neither is secondary.
- **5-archetype composite active at Startup** -- the CISO Agent carries expertise from all 5 source archetypes (CISO/EU Compliance Architect, AI Governance Officer, US Compliance & FedRAMP Architect, Cross-Framework Compliance Integrator, Risk Management Architect) as defined in `protocols/agent-qualifications.md`
- **US compliance carried as advisory knowledge** -- FedRAMP, SOC 2, NIST 800-53, CCPA expertise remains in the system prompt but explicitly marked as deferred. Agent can answer questions and flag future requirements but does not produce US compliance artifacts.
- **Risk work model: agent drafts, human validates** -- CISO Agent produces risk assessment drafts, risk register entries, and risk methodology. CEO + CISO human validate in workshop. Agent refines based on feedback.
- **Human CISO substitution model** -- Agent operates as full CISO substitute when the human CISO is unavailable. CEO oversees. Agent flags items needing human CISO review when they return. When human CISO is available, agent complements and assists.

#### Policy Document Style and Structure

- **Hybrid format: formal policy + operational annex** -- each policy has a short formal document (what auditors review) plus a linked operational annex (what the team actually follows day-to-day)
- **Three policy documents, not one:**
  - `IMS-Context.md` -- 2-page Integrated Management System context (shared preamble establishing that IS Policy and AI Policy are part of one management system)
  - `IS-Policy.md` -- Information Security Policy (ISO 27001 cl. 5.2, A.5.1)
  - `AI-Policy.md` -- AI Policy (ISO 42001 cl. 5.2, A.2)
- **Rationale:** Separate documents allow independent review cycles (AI Policy evolves faster than IS Policy), cleaner auditor navigation, and ownership clarity. Shared preamble demonstrates Annex SL / Harmonized Structure alignment.
- **Language: English primary + German/Dutch summaries** -- full policies in English. Executive summaries or key sections translated for local compliance. ISO auditors in DE/NL accept English.
- **HH-specific from scratch** -- every policy statement references actual HH systems, personnel, tools (Azure, NorthGRC, Linear, Claude Code). No generic templates.

#### ISMS/AIMS Scope Boundaries

- **Separate scope statements per entity** -- HH GmbH, HH B.V., and HH Inc. each get their own ISMS scope statement. Separate certificates.
- **AIMS scopes match per-entity ISMS pattern** -- each entity's AIMS scope shows which AI systems it uses. Per-entity AI System Registry entries.
- **EU first, US later** -- initial scope work focuses on GmbH (DE) and B.V. (NL). HH Inc. (US) scope deferred to end of Startup phase. This simplifies the initial workload significantly.
- **Asset scope: product development + internal IT + AI agents** -- covers Verity VE/EAM development, internal IT infrastructure (Azure, M365), all 7 Claude Code agents, customer data handling
- **Physical scope: cloud-only + remote workers** -- no physical offices in scope. All processing in Azure cloud. Team works remotely. Auditors assess logical controls, not physical premises.

#### Document Control and Approval Workflow

- **Git-only for document control** -- Git is the single source of truth. PRs = approval. Commit history = version control. Branch protection = distribution control. Satisfies ISO 27001 cl. 7.5.
- **Approval chain: CISO + CTO review, then CEO approves** -- CISO Agent drafts, human CISO and CTO review via PR, CEO final approval via PR merge.
- **Version numbering: semantic + date stamp** -- v1.0 (2026-02-19), v1.1 (2026-03-15), v2.0 (2026-06-01). Major version for significant changes, minor for updates.
- **Information classification: 4 levels** -- Public, Internal, Confidential, Secret. Policies are Internal. Patent artifacts are Confidential or Secret. Published docs are Public. Aligns with TISAX handling requirements.

### Claude's Discretion

- Exact structure of the IMS Context preamble
- How to organize the operational annex per policy
- Document control metadata fields beyond the minimum (ID, version, date, classification, author, approver)
- How the German/Dutch executive summaries are structured
- Whether to include a document register as a separate file or inline in the document control framework

### Deferred Ideas (OUT OF SCOPE)

- NorthGRC integration for document management -- Phase 9 (Toolchain Integration)
- Automated document review notifications -- Growth phase tooling
- Multi-language full translations (beyond summaries) -- Growth phase when team size justifies

</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| AGNT-03 | CISO Agent (Security + EU Compliance + AI Governance) created with EU-CA + AIGO + partial US-CA expertise -- can spawn subagents for risk assessment, policy drafting, gap analysis | Agent definition template in `protocols/interaction-model.md` Section 6 provides the mandatory structure. Agent qualification profile in `protocols/agent-qualifications.md` Section 2.3 defines persona, expertise, ISO ownership, and deliverables. Phase 1 gap analyses (EU-CA, AIGO, RMA, CFCI) provide domain content for the system prompt. |
| ISMS-01 | Information Security Policy produced -- approved by management, communicated to all personnel, reviewed annually | ISO 27001 cl. 5.2 mandatory requirements researched; SDLC-Startup-v2.md Section 12.2 defines ISMS integration; EU-CA sections document (phase2/EU-CA-sections.md) provides IS Policy content framework; NIS2UmsuCG and Wbni requirements researched for jurisdiction-specific compliance. |
| ISMS-02 | ISMS Scope Statement produced -- covering all 3 entities (GmbH, B.V., Inc.), 3 jurisdictions (DE, NL, US), all information assets | ISO 27001 cl. 4.3 scope requirements researched including multi-entity and cloud-only patterns; EU-CA sections document Section 12.2.1 provides scope dimensions; IAF MD 1 multi-site certification approach documented. |
| ISMS-09 | Document control framework established -- version control, approval, distribution, retention per cl. 7.5 | ISO 27001 cl. 7.5 (7.5.1, 7.5.2, 7.5.3) requirements researched; Git-based document control pattern validated; EU-CA sections document Section 12.2.5 provides document type matrix; governance-model.md Section 1 confirms Git PR = audit trail. |
| AIMS-01 | AI Policy produced -- standalone governance document, commitment to responsible AI, regulatory conformity, prohibited practices | ISO 42001 cl. 5.2 and Annex A.2 requirements researched; AIGO sections document (phase2/AIGO-sections.md) Section 11.2 provides AI Policy content framework; EU AI Act prohibited practices (Art. 5) documented in gap analysis. |

</phase_requirements>

## Standard Stack

This phase does not involve software libraries or tools in the traditional sense. The "stack" is the set of standards, templates, and protocols that constrain the deliverables.

### Core Standards (must be satisfied by Phase 2 deliverables)

| Standard | Clause | Purpose | Why Critical |
|----------|--------|---------|--------------|
| ISO/IEC 27001:2022 | cl. 5.2 | Information Security Policy | Certification-mandatory; auditor's first document request |
| ISO/IEC 27001:2022 | cl. 4.3 | ISMS Scope determination | Certification-mandatory; defines what is audited |
| ISO/IEC 27001:2022 | cl. 7.5 | Documented information control | Certification-mandatory; governs all subsequent documents |
| ISO/IEC 27001:2022/Amd 1:2024 | cl. 4.1, 4.2 | Climate change relevance | Must be acknowledged in context; formal assessment deferred to Growth |
| ISO/IEC 42001:2023 | cl. 5.2 | AI Policy | Certification-mandatory; standalone governance document |
| ISO/IEC 42001:2023 | Annex A.2 | Policies related to AI | Normative controls requiring documented AI policy, roles, internal directives |

### Supporting Standards (inform content, not direct certification targets in Phase 2)

| Standard | Purpose | When Referenced |
|----------|---------|----------------|
| ISO 31000:2018 | Risk management principles | Risk appetite statement in IS Policy |
| NIS2 / NIS2UmsuCG | German cybersecurity law | IS Policy must reference management body obligations |
| Wbni (NL) | Dutch NIS2 transposition | IS Policy must reference NL-specific obligations |
| TISAX ISA 6 | Automotive information security | IS Policy classification scheme must align |
| EU AI Act (2024/1689) | AI regulation | AI Policy prohibited practices list |
| ISO/IEC 22989:2022 | AI terminology | AI Policy vocabulary alignment |

### Templates and Protocols (Phase 1 foundation consumed)

| Artifact | Location | How Phase 2 Uses It |
|----------|----------|---------------------|
| Agent definition template | `protocols/interaction-model.md` Section 6 | Mandatory structure for CISO Agent CLAUDE.md |
| Agent qualification profile | `protocols/agent-qualifications.md` Section 2.3 | Persona, expertise, ISO/SDLC ownership for CISO Agent |
| Subagent spawning protocol | `protocols/subagent-protocol.md` | Subagent configuration section in CISO Agent prompt |
| Handoff template | `protocols/handoff-template.md` | Referenced in CISO Agent collaboration protocol |
| Governance model | `governance-model.md` | Approval workflow for policy sign-off |
| RACI matrix | `RACI-Startup.md` | Identifies who reviews, approves, and is informed for policy artifacts |
| SDLC-Startup-v2.md | Root directory | Startup-phase controls the CISO Agent must implement |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Separate IS Policy + AI Policy | Single unified security+AI policy | User explicitly decided on 3 documents (IMS Context + IS Policy + AI Policy). Separate documents allow independent review cycles. |
| NorthGRC for document control | Git-only | User explicitly decided Git-only at Startup. NorthGRC integration deferred to Phase 9. |
| Full multi-language policies | English + summaries | User decided English primary with German/Dutch summaries only. Full translations deferred to Growth. |

## Architecture Patterns

### Recommended Artifact Structure

```
agents/
  ciso/
    CLAUDE.md                    # Full CISO Agent system prompt (Phase 2 primary deliverable)
    reference/
      domain-context.md          # HH-specific context for the agent (entities, personnel, systems)

policies/                        # New directory for policy documents
  IMS-Context.md                 # Integrated Management System preamble (2 pages)
  IS-Policy.md                   # Information Security Policy (formal)
  IS-Policy-Annex.md             # IS Policy operational annex
  AI-Policy.md                   # AI Policy (formal)
  AI-Policy-Annex.md             # AI Policy operational annex
  scope/
    ISMS-Scope-GmbH.md           # ISMS scope statement for HH GmbH
    ISMS-Scope-BV.md             # ISMS scope statement for HH B.V.
    ISMS-Scope-Inc.md            # ISMS scope statement for HH Inc.
    AIMS-Scope-GmbH.md           # AIMS scope statement for HH GmbH
    AIMS-Scope-BV.md             # AIMS scope statement for HH B.V.
    AIMS-Scope-Inc.md            # AIMS scope statement for HH Inc.
  document-control.md            # Document control framework
  document-register.md           # Document register (separate file -- see recommendation)
```

### Pattern 1: Agent Definition Template (Mandatory)

**What:** Every agent CLAUDE.md must follow the template in `protocols/interaction-model.md` Section 6 exactly. The template has 7 required sections: Identity, Core Responsibilities, SDLC-Growth-v2 Context, Output Standards, Collaboration Protocol, Boundaries, Subagent Spawning.

**When to use:** Always -- this is a hard constraint from Phase 1.

**Quality bar from Phase 1 (Section 6 bottom):**
1. Follows template exactly (all sections present)
2. References HH-specific context (entities, personnel, systems) -- no generic prompts
3. Includes at least 3 SDLC-Growth-v2 section references relevant to the agent's domain
4. Defines clear boundaries (what the agent must NOT do)
5. Specifies output format requirements including audit readiness standards

**Source:** `protocols/interaction-model.md` Section 6

### Pattern 2: Hybrid Policy + Operational Annex

**What:** Each policy document has two parts:
- **Formal policy** (what auditors review): Short, declarative, signed by management. Contains objectives, commitments, scope references, and high-level requirements. Typically 3-6 pages.
- **Operational annex** (what the team follows): Practical, procedural, updated more frequently. Contains implementation details, checklists, tools, responsibilities. Can be longer.

**When to use:** For IS Policy and AI Policy (locked decision).

**Recommended annex structure:**
1. Implementation procedures (how each policy statement is operationalized)
2. Roles and responsibilities matrix (who does what)
3. Tools and systems (specific HH tools mapped to policy requirements)
4. Review and update procedures
5. Exception handling process
6. Contact information and escalation paths

**Rationale:** Auditors need a stable, formal document they can reference in the audit report. The team needs actionable procedures they can follow. Separating these prevents the policy from becoming either too vague (useless for team) or too detailed (unwieldy for auditors and requiring constant re-approval for minor procedural changes).

### Pattern 3: IMS Context Preamble (Claude's Discretion)

**What:** A 2-page document establishing the Integrated Management System context that both IS Policy and AI Policy reference as their shared foundation.

**Recommended structure:**
1. **Organization overview** (HH Group: GmbH, B.V., Inc.; products; team; operating model)
2. **Management system scope** (what the IMS covers; relationship between ISMS and AIMS)
3. **Annex SL / Harmonized Structure alignment** (how ISO 27001 and ISO 42001 share context, leadership, support, performance evaluation, and improvement clauses)
4. **Document hierarchy** (where IMS Context sits in relation to IS Policy, AI Policy, and downstream procedures)
5. **Management commitment** (joint statement committing to both information security and responsible AI)

**Why this structure:** It demonstrates to auditors that the two management systems are deliberately integrated, not accidental. The Annex SL alignment section is particularly important because both ISO 27001 and ISO 42001 use the Harmonized Structure -- showing this integration in a preamble document is a best practice recognized by certification bodies conducting integrated audits.

### Pattern 4: Per-Entity Scope Statements

**What:** Separate ISMS/AIMS scope statements per legal entity, each defining organizational boundaries, information assets, technology, people, and locations for that entity specifically.

**When to use:** For all 3 entities (locked decision: separate scope statements per entity, separate certificates).

**Recommended scope statement structure per entity:**

| Dimension | Content |
|-----------|---------|
| Legal entity | Full legal name, registration, jurisdiction |
| Organizational boundary | Business units, functions, departments in scope |
| Services/products | What the entity delivers |
| Information assets | Source code, customer data, AI models, etc. |
| Technology | Azure subscriptions, development tools, production environments |
| People | Employees, contractors, AI agents with access |
| Locations | Cloud regions, remote worker jurisdictions |
| Interfaces | How this entity interacts with the other 2 entities |
| Exclusions | What is explicitly out of scope, with justification |

**EU-first approach:** GmbH and B.V. scope statements are full and detailed. Inc. scope statement is a skeleton with "to be completed during Startup phase" markers for US-specific elements.

### Pattern 5: Git-Based Document Control Framework

**What:** A document control framework that maps ISO 27001 cl. 7.5 requirements entirely to Git-based workflows.

**Mapping:**

| ISO 27001 cl. 7.5 Requirement | Git Implementation |
|-------------------------------|-------------------|
| 7.5.1 General (documented information required by standard) | Document register listing all mandatory documents |
| 7.5.2 Creating and updating (identification, format, review, approval) | Markdown with YAML frontmatter (metadata); PR review = approval |
| 7.5.3 Control (distribution, access, retrieval, storage, retention, disposition) | Branch protection = access control; Git tags = versions; commit history = retention; repository access = distribution |

**Recommended metadata fields (YAML frontmatter):**
```yaml
---
document-id: HH-ISMS-POL-001
title: Information Security Policy
version: v1.0
date: 2026-02-19
classification: Internal
author: CISO Agent
reviewer: [Human CISO, CTO]
approver: CEO (Helge Heupel)
review-cycle: Annual
next-review: 2027-02-19
status: Draft | Active | Superseded | Archived
change-summary: Initial release
---
```

### Anti-Patterns to Avoid

- **Generic policy language:** "The organization shall ensure information security" is useless. Every statement must name HH systems, personnel, or processes. The EU-CA gap analysis flagged this as the #1 problem with SDLC v1.
- **Policy-procedure conflation:** Putting implementation details (specific tool configurations, step-by-step procedures) in the formal policy document. These belong in the operational annex.
- **Scope creep into US compliance:** The decision is EU-first. The agent prompt and policies must reference US frameworks as advisory only, not produce US compliance artifacts.
- **Monolithic agent prompt:** The CISO Agent absorbs 5 archetypes. Do not try to inline all expertise into the system prompt. Use the `reference/` directory for domain-specific context documents that the agent reads on demand.
- **Ignoring the Phase 1 gap analyses:** The phase1/ and phase2/ directories contain 12 gap analysis documents and 12 section drafts from the SDLC-Growth-v2 creation process. These are rich source material that should be referenced by path in the CISO Agent's prompt, not ignored or re-created.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| IS Policy content structure | Custom structure from scratch | ISO 27001 cl. 5.2 mandatory elements + phase2/EU-CA-sections.md Section 12.2 as starting framework | The EU-CA sections document already maps all ISMS requirements to HH-specific content |
| AI Policy content structure | Custom structure from scratch | ISO 42001 cl. 5.2 + Annex A.2 requirements + phase2/AIGO-sections.md Section 11.2 as starting framework | The AIGO sections document already provides a comprehensive AI Policy framework |
| ISMS scope dimensions | Invent scope categories | ISO 27001 cl. 4.3 standard dimensions (organizational, physical, technological, information asset) + phase2/EU-CA-sections.md Section 12.2.1 | The EU-CA sections document already defines scope dimensions for HH |
| Risk appetite statement content | Draft from first principles | phase2/RMA-sections.md Section 5.2 | The RMA sections document has a complete risk appetite statement with HH-specific thresholds |
| Document control metadata | Design metadata schema from scratch | Adapt from EU-CA sections document Section 12.2.5 document type matrix | Already maps document types to format, version control, approval, retention |
| Agent expertise description | Write CISO persona from scratch | `protocols/agent-qualifications.md` Section 2.3 (CISO Agent profile) | Already defines persona, expertise bullets, ISO ownership, section ownership |
| NIS2 compliance mapping | Research NIS2 from scratch | phase2/EU-CA-sections.md Section 12.4 (NIS2 Art. 21 full implementation) | Already maps all 10 Art. 21 measures to HH-specific implementations |
| AIMS integration pattern | Design IMS integration from scratch | phase2/AIGO-sections.md Section 11.1.4 (AIMS-ISMS relationship) | Already defines shared risk register, coordinated audit, combined management review |

**Key insight:** Phase 2 is not a greenfield research exercise. The Phase 1 gap analyses and Phase 2 section drafts contain 80%+ of the domain knowledge needed. The planner's job is to organize this existing material into the required document structures, not to research ISO standards from scratch.

## Common Pitfalls

### Pitfall 1: Agent Prompt Too Large for Effective Use

**What goes wrong:** The CISO Agent absorbs 5 archetypes with 13 primary ISO standards and 10+ SDLC sections. Attempting to inline all this context produces a system prompt so large it consumes excessive context window, reduces response quality, and makes the agent slow.

**Why it happens:** The natural instinct is "more context = better responses." But Claude Code agents have practical context window limits, and the CISO Agent must leave room for conversation, artifact generation, and subagent spawning.

**How to avoid:**
- Keep the CLAUDE.md system prompt to essential identity, responsibilities, boundaries, and operating instructions (target: 2000-4000 lines maximum, ideally under 2000)
- Use `agents/ciso/reference/` directory for domain-specific content that the agent reads on demand
- Reference file paths rather than inlining content: "Read `phase2/EU-CA-sections.md` for NIS2 compliance mapping"
- Use progressive disclosure: agent loads lightweight prompt, then reads reference materials as needed for specific tasks

**Warning signs:** CLAUDE.md exceeds 5000 lines; agent responses become slow or lose coherence; agent fails to follow instructions buried deep in the prompt.

### Pitfall 2: Policies That Satisfy Auditors but Not the Team

**What goes wrong:** The IS Policy and AI Policy read like ISO standard paraphrases. They pass audit but nobody on the team reads or follows them.

**Why it happens:** Policy writers (especially AI agents) default to ISO language because it maps directly to audit criteria.

**How to avoid:**
- The formal policy is deliberately short (3-6 pages) and uses clear, direct language
- The operational annex translates every policy statement into "what this means for you" procedures
- Every policy statement names specific HH systems, tools, or people -- no "the organization shall"
- German/Dutch executive summaries make key obligations accessible to non-English-speaking stakeholders

**Warning signs:** Policy contains phrases like "the organization shall ensure" without naming who, what, or how. Operational annex is missing or identical to the policy.

### Pitfall 3: Scope Statement That Is Too Broad or Too Narrow

**What goes wrong:** A scope statement that covers "all information processing" (too broad -- auditors will examine everything) or "only the production Azure subscription" (too narrow -- leaves critical assets unprotected and unaudited).

**Why it happens:** Multi-entity, multi-jurisdiction organizations struggle with scope boundaries. The temptation is either to include everything or to minimize the scope to ease the audit.

**How to avoid:**
- Follow the user's decision: product development + internal IT + AI agents. This is a well-defined boundary.
- Cloud-only + remote workers means physical security controls are out of scope (delegated to Azure shared responsibility model), but remote worker endpoint security IS in scope.
- Each entity's scope statement must explicitly state interfaces with the other entities (data flows, shared services, shared personnel).
- Exclusions must be justified: "Physical data center controls excluded because all processing occurs in Azure cloud; Azure SOC 2/ISO 27001 attestation provides compensating evidence."

**Warning signs:** Scope statement does not mention AI agents as information assets. Scope excludes remote worker endpoints. No inter-entity interfaces described.

### Pitfall 4: Document Control Framework That Doesn't Map to Git

**What goes wrong:** The document control framework describes traditional document management (approval signatures, distribution lists, document libraries) that does not match the actual Git-based workflow the team uses.

**Why it happens:** ISO 27001 cl. 7.5 was written for traditional document management. Mapping it to Git requires deliberate translation.

**How to avoid:**
- Explicitly map each cl. 7.5 sub-requirement to a Git mechanism (see Pattern 5 above)
- PR approval = document approval (with named reviewers and approver)
- Git tags = version releases
- Branch protection rules = access control for document modification
- Commit history = change tracking and audit trail
- Repository access permissions = distribution control
- The framework document itself should explain the Git mapping so auditors understand the equivalence

**Warning signs:** Framework mentions "document approval signatures" or "distribution lists" that don't correspond to Git workflows. No explicit mapping table between cl. 7.5 and Git.

### Pitfall 5: Forgetting the Climate Amendment (ISO 27001:2022/Amd 1:2024)

**What goes wrong:** The IS Policy and ISMS scope statement omit any reference to climate change, and the auditor flags a nonconformity because the 2024 Amendment is now mandatory.

**Why it happens:** The amendment is new (2024) and easy to overlook. It adds requirements to cl. 4.1 (determine if climate change is a relevant issue) and cl. 4.2 (identify interested party climate requirements).

**How to avoid:**
- Include a brief section in the IMS Context preamble acknowledging climate change as a contextual factor
- The IS Policy does not need extensive climate content, but the ISMS scope / context analysis must reference it
- Per SDLC-Startup-v2.md, formal climate assessment is deferred to Growth, but awareness must be documented at Startup
- The EU-CA sections document Section 12.2.4 already has the HH-specific climate analysis content

**Warning signs:** No mention of "climate" anywhere in the IMS Context, IS Policy, or scope statements.

### Pitfall 6: AI Policy Without Prohibited Practices List

**What goes wrong:** The AI Policy discusses responsible AI principles in general terms but does not enumerate specific prohibited practices, and the auditor flags missing ISO 42001 Annex A.9 and EU AI Act Art. 5 alignment.

**Why it happens:** Prohibited practices seem "obvious" or "implied" by responsible AI commitments.

**How to avoid:**
- The AI Policy must contain an explicit prohibited practices section
- EU AI Act Art. 5 practices must be listed (social scoring, real-time biometric identification in public spaces, exploitation of vulnerabilities, etc.)
- HH-specific prohibited practices must be added (e.g., no AI-generated outputs reaching customers without deterministic verification)
- The AIGO gap analysis and sections documents provide the complete list

**Warning signs:** AI Policy has "responsible AI commitment" without an enumerated prohibited practices section.

## Code Examples

Since Phase 2 produces documentation artifacts rather than code, these "code examples" are structural patterns for the key deliverables.

### CISO Agent CLAUDE.md Skeleton

```markdown
---
name: ciso
description: >
  CISO Agent for the Helge Heupel Group. Use for information security policy,
  ISMS/AIMS management, risk assessment, EU compliance (NIS2, GDPR, TISAX),
  AI governance (ISO 42001), and cross-framework compliance integration.
tools: Read, Write, Edit, Bash, Grep, Glob
model: opus
---

# CISO Agent -- Helge Heupel Group

## Identity
You are the Chief Information Security Officer for the Helge Heupel Group...
[5 archetype composite: EU-CA + AIGO + US-CA (advisory) + CFCI + RMA]
[Balanced ISO 27001 and ISO 42001 -- equal weight]
[Human CISO substitution model]

## Core Responsibilities
- [IS Policy ownership and maintenance]
- [AI Policy ownership and maintenance]
- [ISMS scope and SoA management]
- [Risk assessment methodology and register]
- [NIS2 compliance (DE: NIS2UmsuCG, NL: Wbni)]
- [EU AI Act conformity assessment]
- [TISAX ISA 6 control mapping]
- [Cross-framework control integration]
- [Document control governance]
[... each responsibility specific to HH, not generic]

## SDLC-Growth-v2 Context
[Reference agents/shared/SDLC-Growth-v2.md]
Key sections:
- Section 4: Compliance and Certification Matrix
- Section 8.2: AI Governance / AIMS
- Section 9: Security and Privacy by Design
- Section 10.2: Governance Bodies
- Section 10.3: Audit Readiness
- Section 13.1-13.4: Entity Addenda and Cross-Entity Coordination

## Output Standards
[Audit-ready for ISO 27001, ISO 42001, TISAX]
[Markdown with YAML frontmatter]
[Framework references: ISO clause numbers, Annex A control IDs]
[HH-specific: name entities, personnel, systems]

## US Compliance (Advisory Only)
[FedRAMP, SOC 2, NIST 800-53, CCPA knowledge present]
[Explicitly deferred -- flag future requirements but do not produce artifacts]

## Collaboration Protocol
[HANDOFF.md per protocols/handoff-template.md]
[Branch + PR for sign-off artifacts]
[CEO-SIGNOFF-REQUIRED flag]
[Risk work model: agent drafts, human validates]

## Boundaries
[Do NOT produce US compliance artifacts]
[Do NOT accept risk on behalf of the organization]
[Do NOT modify SDLC-Growth-v2.md]
[Do NOT include patent-sensitive content]

## Subagent Spawning
[Per protocols/subagent-protocol.md]
[Typical subagent tasks: gap analysis, control mapping, evidence gathering]

## Reference Materials
[List of files the agent should read on demand for specific tasks]
- protocols/agent-qualifications.md (Section 2.3 -- own profile)
- phase1/EU-CA-gap-analysis.md (IS/NIS2/TISAX gaps)
- phase1/AIGO-gap-analysis.md (AI governance gaps)
- phase1/RMA-gap-analysis.md (risk management gaps)
- phase1/CFCI-gap-analysis.md (cross-framework gaps)
- phase2/EU-CA-sections.md (IS Policy, ISMS, NIS2 content)
- phase2/AIGO-sections.md (AI Policy, AIMS content)
- phase2/RMA-sections.md (risk framework content)
- phase2/CFCI-sections.md (UCL, compliance matrix content)
- SDLC-Startup-v2.md (Startup-phase controls)
- governance-model.md (approval workflow)
- RACI-Startup.md (role assignments)
```

### IS Policy Document Structure

```markdown
---
document-id: HH-ISMS-POL-001
title: Information Security Policy
version: v1.0
date: 2026-02-19
classification: Internal
author: CISO Agent
reviewer: [Human CISO, CTO]
approver: CEO (Helge Heupel)
review-cycle: Annual
next-review: 2027-02-19
status: Draft
ims-context: HH-IMS-CTX-001
---

# Information Security Policy

## 1. Purpose and Scope
[References IMS-Context.md]
[Names all 3 entities]

## 2. Management Commitment
[ISO 27001 cl. 5.1 and 5.2 requirements]
[CEO as Geschaeftsfuehrer commitment]
[NIS2UmsuCG Sec. 38 management body liability acknowledgment]

## 3. Information Security Objectives
[Measurable objectives per cl. 6.2]
[Framework for setting objectives]

## 4. Organizational Roles and Responsibilities
[Names specific HH personnel: CEO, CTO, CISO, etc.]
[Names 7 Claude Code agents and their security roles]
[RACI reference]

## 5. Risk Management Approach
[References risk methodology (Phase 3)]
[Risk appetite summary -- references RMA framework]

## 6. Information Classification
[4 levels: Public, Internal, Confidential, Secret]
[TISAX ISA alignment]

## 7. Regulatory Compliance
[NIS2UmsuCG (DE) -- management body obligations]
[Wbni (NL) -- NCSC-NL obligations]
[GDPR/AVG cross-reference]
[US compliance: advisory reference, deferred]

## 8. Policy Communication and Review
[How communicated: onboarding, annual acknowledgment]
[Annual review cycle]
[Change triggers for extraordinary review]

## 9. Exceptions and Violations
[Exception request process]
[Consequences of violation]

## Zusammenfassung (German Executive Summary)
[Key policy obligations in German]

## Samenvatting (Dutch Executive Summary)
[Key policy obligations in Dutch]

## Document Control
[Version history table]
[Approval signatures via Git PR]
```

### ISMS Scope Statement Structure (Per Entity)

```markdown
---
document-id: HH-ISMS-SCOPE-GMBH-001
title: "ISMS Scope Statement: Helge Heupel GmbH"
version: v1.0
date: 2026-02-19
classification: Internal
entity: Helge Heupel GmbH
jurisdiction: Germany (DE)
---

## 1. Legal Entity
[Full legal name, HRB registration, jurisdiction]

## 2. Organizational Scope
[Business units / functions in scope]

## 3. Services and Products
[Verity VE, Verity EAM development]
[Internal IT services]

## 4. Information Assets
[Source code, customer data, AI models, compliance artifacts, etc.]
[7 Claude Code agents as AI system assets]

## 5. Technology
[Azure subscriptions and regions]
[Development toolchain]
[Communication systems]

## 6. People
[Employees, contractors, AI agents]
[Remote worker jurisdictions]

## 7. Locations
[Cloud-only: Azure West Europe, Germany West Central]
[Remote workers in DE jurisdiction]
[No physical offices in scope]

## 8. Interfaces with Other Entities
[Data flows to/from B.V. and Inc.]
[Shared services and personnel]

## 9. Exclusions
[Physical data center controls -- Azure shared responsibility]
[Justification for each exclusion]

## 10. Regulatory Context
[NIS2UmsuCG applicability]
[BSI registration]
[GDPR / BDSG]
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Single combined IS+AI policy | Separate IS Policy and AI Policy with shared IMS Context | ISO 42001 published Dec 2023 | Organizations pursuing dual certification now maintain separate policies with integration points |
| Climate change not in ISMS scope | Climate change mandatory context factor | ISO 27001:2022/Amd 1:2024 (published Feb 2024) | Must acknowledge climate change in context analysis; formal assessment may be deferred but awareness must be documented |
| NIS2 not yet transposed in Germany | NIS2UmsuCG in force since Dec 5, 2025 | Dec 2025 | Management body personal liability for cybersecurity; BSI registration required; incident reporting timelines mandatory |
| ISO 42001 not yet certifiable | ISO 42001 certifiable, early adopter phase | 2024-2025 | Organizations can now achieve dual ISO 27001 + ISO 42001 certification; certification bodies ramping up |
| Document control = traditional DMS | Git-based document control accepted by auditors | Gradual 2020-2025 | ISO 27001 cl. 7.5 does not mandate specific tools; Git with PR workflows satisfies requirements when properly mapped |
| Agent system prompts as simple instruction sets | Agent system prompts as structured role definitions with progressive disclosure | Claude Code 2024-2026 | Best practice: lightweight prompt + reference directory for on-demand context loading |

**Deprecated/outdated:**
- ISO 27001:2013 structure (old Annex A with 114 controls) -- must use 2022 edition with 93 controls in 4 themes
- Generic "the organization" language in policies -- current best practice requires named entities, systems, and personnel
- Combined ISMS/AIMS as single management system -- current guidance recommends integrated but separate systems

## Open Questions

1. **Document register: separate file or inline?**
   - What we know: The user gave this as Claude's discretion. A document register lists all controlled documents with their metadata (ID, title, version, classification, owner, review date).
   - What's unclear: Whether to maintain it as a standalone `document-register.md` or inline it as a section within `document-control.md`.
   - Recommendation: **Separate file** (`policies/document-register.md`). Rationale: The register changes frequently as new documents are created in Phases 3-10. A separate file means the document control framework itself (which describes the process) does not need a new version every time a document is added. The register is a living index; the framework is a stable process description.

2. **Operational annex organization**
   - What we know: Each policy gets a formal document + linked operational annex (locked decision). User gave annex structure as Claude's discretion.
   - What's unclear: Whether annexes should mirror the policy section structure (Section 4.1 Annex = operationalization of Section 4.1 Policy) or be organized by audience/role.
   - Recommendation: **Mirror the policy structure** with a 1:1 section mapping. Each annex section starts with "This section operationalizes IS-Policy Section X" and then provides procedures, checklists, and tool-specific instructions. This makes it trivially easy for auditors to trace from policy to procedure and for the team to find the operational guidance for any policy statement.

3. **How many AIMS scope statements are needed in Phase 2?**
   - What we know: User decided AIMS scopes match per-entity ISMS pattern. EU first, US later.
   - What's unclear: Whether to produce 3 AIMS scope statements (GmbH, B.V., Inc.) in Phase 2 or only the 2 EU entities and defer Inc. entirely.
   - Recommendation: **Produce all 3 AIMS scope statements** but with Inc. as a skeleton (like the ISMS approach). This maintains consistency and makes Phase 5 (AIMS Core) work cleaner because the scope infrastructure already exists. The Inc. AIMS scope would list "7 Claude Code agents" as the AI systems (same as other entities) with a "to be completed" note for US-specific regulatory context.

4. **German/Dutch executive summary format**
   - What we know: User decided English primary + German/Dutch summaries (locked decision). Structure is Claude's discretion.
   - What's unclear: Length and depth of summaries.
   - Recommendation: **Half-page summary per language** at the end of each policy document. Structure: (1) Policy purpose (1-2 sentences), (2) Key obligations for personnel (3-5 bullet points), (3) How to get more information (reference to full English document). This serves the practical purpose: non-English-speaking team members or local auditors can quickly understand the policy's key requirements without needing to read the full English document.

5. **CISO Agent reference materials: copy or reference?**
   - What we know: The agent definition template says to reference file paths, not paste content. But the `agents/ciso/reference/` directory is currently empty (only `.gitkeep`).
   - What's unclear: Whether to create new reference documents in `agents/ciso/reference/` or simply reference the existing `phase1/` and `phase2/` documents by path.
   - Recommendation: **Create one domain-context reference document** (`agents/ciso/reference/domain-context.md`) that summarizes HH-specific context (entities, personnel, systems, current tool stack, current compliance status) and then reference existing `phase1/`, `phase2/`, and `protocols/` documents by path for detailed domain knowledge. This avoids duplication while ensuring the agent has a compact, current context document.

## Sources

### Primary (HIGH confidence)

- `protocols/interaction-model.md` -- Agent definition template (Section 6), operational modes, communication protocol. Read directly.
- `protocols/agent-qualifications.md` -- CISO Agent profile (Section 2.3), ISO standard assignments, SDLC section ownership. Read directly.
- `protocols/subagent-protocol.md` -- Spawning governance, model selection, context passing. Read directly.
- `protocols/handoff-template.md` -- HANDOFF.md structure for cross-agent work. Read directly.
- `phase1/EU-CA-gap-analysis.md` -- ISO 27001 gap analysis with Annex A coverage assessment. Read directly (first 150 lines; full document 62K).
- `phase1/AIGO-gap-analysis.md` -- ISO 42001 gap analysis with Annex A coverage assessment. Read directly (first 150 lines; full document 56K).
- `phase2/EU-CA-sections.md` -- SDLC v2 Sections 12/18 draft with IS Policy, ISMS, NIS2 content. Read directly (first 200 lines; full document extensive).
- `phase2/AIGO-sections.md` -- SDLC v2 Section 11 draft with AIMS, AI Policy content. Read directly (first 100 lines).
- `phase2/RMA-sections.md` -- SDLC v2 Section 5 draft with risk management framework. Read directly (first 100 lines).
- `phase2/CFCI-sections.md` -- SDLC v2 Section 6 draft with UCL and compliance matrix. Read directly (first 100 lines).
- `SDLC-Startup-v2.md` -- Startup SDLC companion with phase assignments and control mapping. Searched for relevant sections.
- `governance-model.md` -- 2-meeting governance model with approval workflows. Read first 100 lines.
- `RACI-Startup.md` -- Role consolidation with 32 activities x 13 columns. Referenced.
- `.planning/REQUIREMENTS.md` -- All 45 requirements with phase mapping. Read directly.
- `.planning/ROADMAP.md` -- Phase dependencies and success criteria. Read directly.

### Secondary (MEDIUM confidence)

- [ISO 27001:2022 Clause 5.2 requirements](https://www.isms.online/iso-27001/requirements-2022/5-2-information-security-policy-2022/) -- Mandatory IS Policy elements verified against multiple sources
- [ISO 27001:2022 Clause 4.3 scope requirements](https://hightable.io/iso-27001-clause-4-3-determining-the-scope-of-the-information-security-management-system/) -- Multi-entity scope statement guidance
- [ISO 27001:2022 Clause 7.5 documented information](https://www.dataguard.com/iso-27001/clause-7-5-documented-information/) -- Document control requirements (7.5.1, 7.5.2, 7.5.3)
- [ISO 42001 Clause 5 leadership and AI policy](https://www.controlcase.com/leadership-in-ai-management-systems-clause-5-iso-42001-2023/) -- AI Policy requirements
- [ISO 42001 Annex A.2 AI policies](https://www.isms.online/iso-42001/annex-a-controls/a-2-policies-related-to-ai/) -- Normative control requirements for AI policies
- [ISO 42001 and ISO 27001 integration via Annex SL](https://www.isms.online/frameworks/iso-42001/iso-42001-integration-with-other-management-systems-annex-sl/) -- Integrated management system guidance
- [NIS2UmsuCG in force since Dec 5, 2025](https://www.usd.de/en/nis2umsucg-officially-in-force/) -- German NIS2 transposition status and requirements
- [NIS2 Germany management body liability](https://www.gtlaw.com/en/insights/2025/12/nis2-in-germany-the-new-bsi-act-makes-cybersecurity-a-board-level-issue) -- Personal liability for cybersecurity governance
- [Claude Code agent system prompts and CLAUDE.md best practices](https://arize.com/blog/claude-md-best-practices-learned-from-optimizing-claude-code-with-prompt-learning/) -- Agent prompt architecture guidance
- [ISO 27001 ISMS scope for cloud-only remote organizations](https://sprinto.com/blog/iso-27001-scope-statement/) -- Example scope statements for remote organizations

### Tertiary (LOW confidence)

- None. All findings verified against either primary (read directly from codebase) or secondary (verified against multiple web sources) evidence.

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH -- ISO standard requirements well-documented and verified against multiple official sources; Phase 1 foundation artifacts read directly from the repository
- Architecture: HIGH -- Artifact structure follows locked user decisions (3 policy documents, per-entity scopes, Git-only document control) with discretion areas (IMS preamble structure, annex organization) supported by industry best practices
- Pitfalls: HIGH -- Informed by Phase 1 gap analyses which identified specific HH gaps (generic language, missing scope, incomplete Annex A coverage, absent climate amendment, missing prohibited practices), combined with standard ISO certification pitfalls verified against multiple sources
- Agent construction: HIGH -- Mandatory template from Phase 1 (`protocols/interaction-model.md` Section 6) with quality bar defined; agent profile from `protocols/agent-qualifications.md` Section 2.3; Claude Code agent best practices verified via web sources

**Research date:** 2026-02-19
**Valid until:** 2026-03-19 (30 days -- stable domain; ISO standards do not change frequently)
