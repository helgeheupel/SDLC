# Routing Rules -- SDLC Lead Reference

This file encodes the task routing decision tree, multi-agent workflow patterns, conflict resolution protocol, and quality review checklist for the SDLC Lead Agent.

**Last updated:** 2026-02-22
**Source of truth:** Agent capabilities from `reference/agent-registry.md`, governance from `governance-model.md`

---

## 1. Task Classification Taxonomy

Classify incoming CEO requests by domain before routing. If a task spans multiple domains, it requires multi-agent coordination (see Section 3).

| Category | Examples | Primary Agent |
|----------|----------|--------------|
| **Security and Compliance** | IS Policy update, risk assessment, SoA maintenance, NIS2 compliance, GDPR DPIA, TISAX mapping, EU AI Act conformity, audit preparation | CISO |
| **Architecture and Engineering** | ADR production, technology evaluation, CI/CD pipeline design, platform architecture, AI system design, DX framework | CTO |
| **Security Testing** | Threat modeling (STRIDE/LINDDUN), SAST/DAST configuration, SBOM generation, supply chain security, dependency scanning | AppSec |
| **AI Science** | Model evaluation, fairness/bias testing, adversarial robustness, AI research assessment, AI toolchain evaluation, EU AI Act risk tier assessment | AI Science |
| **Platform and Operations** | SLO implementation, observability, incident management, BCP/DR, deployment pipeline, database migration, chaos engineering | Platform/SRE |
| **Strategy and Product** | OKR frameworks, WSJF scoring, strategic communications, competitive analysis, portfolio governance, metrics design, organizational model | Product/Strategy |
| **Cross-Domain** | Tasks spanning 2+ categories above | SDLC Lead coordinates multi-agent workflow |

---

## 2. Routing Decision Tree

### Step 1: Classify the task domain

Read the CEO's request. Identify which category (or categories) from Section 1 the task falls into. If unclear, consult `reference/agent-registry.md` for agent capabilities.

### Step 2: Determine routing path

**Single-domain task:**
- Route directly to the specialist agent
- Both routing paths are valid:
  - **Through Lead:** Lead decomposes, assigns, tracks, reviews, assembles
  - **Direct to Specialist:** CEO invokes specialist directly; Lead tracks via Git

**Multi-domain task:**
- SDLC Lead coordinates the workflow (see Section 3)
- Decompose into specialist-appropriate subtasks
- Determine execution order (sequential, parallel, or review)
- Assign each subtask to the appropriate specialist

### Step 3: Verify routing correctness

Before routing, verify:
1. The target agent has the capability (check `reference/agent-registry.md` Capabilities section)
2. The task does not violate the target agent's boundaries (check Boundaries section)
3. Cross-agent dependencies are identified and flagged

### Common Routing Decisions

| CEO Request Pattern | Route To | Why |
|-------------------|----------|-----|
| "Update the IS Policy..." | CISO | IS Policy ownership |
| "Create an ADR for..." | CTO | ADR production ownership |
| "Run a threat model on..." | AppSec | Threat modeling ownership |
| "Evaluate this AI model..." | AI Science | Model evaluation ownership |
| "Set up monitoring for..." | Platform/SRE | Observability ownership |
| "Prepare BearingPoint materials..." | Product/Strategy | Strategic communications |
| "Ensure this feature is compliant..." | CISO + CTO + AppSec | Cross-domain: compliance + architecture + security testing |
| "Deploy this to production..." | Platform/SRE + CTO | Cross-domain: operations + architecture review |
| "Prepare for the Weekly Technical..." | SDLC Lead | Governance meeting preparation (multi-agent coordination) |

---

## 3. Multi-Agent Workflow Patterns

### Sequential Pattern

Agent A produces output that Agent B consumes as input. The Lead manages the handoff.

**Examples:**
- CTO designs architecture -> Platform/SRE implements operational monitoring
- CISO defines security policy -> AppSec implements security testing
- AI Science evaluates model -> CTO produces ADR for model selection
- AppSec produces threat model -> CISO creates risk register entries

**Lead's role:** Ensure Agent A's output is complete before Agent B starts. Verify handoff artifacts are produced per `protocols/handoff-template.md`.

### Parallel Pattern

Independent specialist tasks running simultaneously. No dependency between tasks.

**Examples:**
- CISO prepares compliance status + CTO prepares architecture updates (for Weekly Technical)
- AppSec runs SAST scan + Platform/SRE runs deployment pipeline
- AI Science evaluates model fairness + Product/Strategy prepares OKR update

**Lead's role:** Track parallel tasks. Assemble outputs when all complete. Check for contradictions in the assembled output.

### Review Pattern

One agent reviews another agent's output for quality, consistency, or compliance.

**Examples:**
- CTO reviews AppSec security architecture before it becomes organizational standard
- Lead reviews all specialist outputs for SDLC-Growth-v2 compliance
- CISO reviews AI Science technical assessment before recording in risk register

**Lead's role:** Identify when review is needed. Route the review request to the reviewing agent. Track review completion and incorporate feedback.

---

## 4. Conflict Resolution Protocol

When specialists disagree or produce contradictory outputs, resolve using this policy cascade.

### Step 1: Check SDLC-Growth-v2

Read the applicable section(s) of `agents/shared/SDLC-Growth-v2.md`. If the framework has an explicit rule that resolves the conflict, apply it. Cite the section number.

### Step 2: Check established policies

Read `artifacts/policies/IS-Policy.md` and `artifacts/policies/AI-Policy.md`. If an established policy provides guidance, apply it. Cite the document ID and section.

### Step 3: Check governance model

Read `governance-model.md`. If the governance model defines decision authority for this type of conflict, apply it. Identify which human role has decision authority.

### Step 4: Escalate to CEO

If the policy cascade does not resolve the conflict (all three sources are ambiguous or silent), escalate to the CEO with:
- Description of the conflict
- What each specialist produced
- What Steps 1-3 yielded (and why they were insufficient)
- Recommended resolution with rationale
- Impact of each option

**Important:** Steps 1-3 resolve the vast majority of conflicts. CEO escalation should be rare. If you find yourself escalating frequently, re-read the policy documents more carefully.

---

## 5. Quality Review Checklist

Before forwarding specialist output to the CEO, verify the following. This is the Lead Agent's gatekeeper function.

### SDLC-Growth-v2 Compliance

- [ ] Output references the correct SDLC-Growth-v2 section(s) for the specialist's domain
- [ ] Startup-phase simplifications are applied (not Growth-phase requirements at Startup)
- [ ] Risk tiering is consistent with the 4-tier model (Low, Medium, High, Critical)
- [ ] Gate criteria references match the governance model

### HH-Specific Content

- [ ] Named entities: GmbH, B.V., Inc. referenced by name (not "the organization")
- [ ] Named personnel: CEO, CTO, CISO, IT Pentester, Strategy Partner, Finance Industry Senior Manager referenced by role
- [ ] Named systems: Azure, M365, Vercel, Cloudflare Pages, Neon, GitHub Actions referenced by name
- [ ] Named products: Verity VE and Verity EAM referenced by name
- [ ] Named agents: all 7 Claude Code agents referenced by name where applicable

### Information Classification

- [ ] Artifact has an information classification level assigned (Public, Internal, Confidential, Secret)
- [ ] Classification level is appropriate for the content

### Cross-Agent Consistency

- [ ] No contradictions with other specialists' outputs on the same topic
- [ ] Terminology is consistent across agent outputs (same terms for same concepts)
- [ ] Control references (Annex A IDs, ISO clause numbers) are consistent
- [ ] Policy interpretations align with CISO Agent's authoritative interpretation

### Patent-Sensitive Content

- [ ] Products referenced by name and patent ID only: `[PATENT-VE-001]`, `[PATENT-EAM-001]`
- [ ] No inlined product architecture, algorithms, or technical implementation details

### Boundary Compliance

- [ ] Agent stayed within its declared scope (check against `reference/agent-registry.md` Boundaries)
- [ ] No cross-domain artifact production without proper dependency flagging
- [ ] Agent did not accept risk, make policy decisions, or modify SDLC-Growth-v2.md

---

*Rules version: 1.0*
*Source: Governance model, agent registry, SDLC-Growth-v2, locked decisions*
*Created: Phase 6 Plan 04 (2026-02-22)*
