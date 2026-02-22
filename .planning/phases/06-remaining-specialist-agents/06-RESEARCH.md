# Phase 6: Remaining Specialist Agents - Research

**Researched:** 2026-02-22
**Domain:** Agent prompt engineering, multi-agent orchestration, domain-specific AI agent design
**Confidence:** HIGH

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

#### SDLC Lead orchestration
- Lead Agent serves dual role: work router AND quality gatekeeper. It routes tasks to the right specialist and reviews specialist output for SDLC-Growth-v2 compliance before it reaches the CEO.
- Lead spawns specialists as full peer agents (not subagents), so specialists retain autonomy including their own subagent spawning capability.
- Both routing paths available: CEO can go through Lead for multi-agent work, or directly to a specialist for focused tasks. Lead tracks work from either path.
- Conflict resolution by policy: Lead resolves inter-agent disagreements using SDLC-Growth-v2 rules and established policies. Escalates to CEO only when policy is ambiguous.

#### Agent scope boundaries
- AI Science Agent has strict ownership: model evaluation and AI research only. CISO keeps all ISO 42001 governance, CTO keeps all architecture. No overlapping responsibilities.
- CTO owns infrastructure architecture including SLO targets and observability strategy. Platform/SRE implements and operates what CTO designs.
- Product/Strategy prepares strategic communications (BearingPoint materials, board updates, etc.), CEO reviews and sends. Agent drafts, human approves.
- Same cross-domain dependency flagging pattern ([AGENT-DEPENDENCY]) used consistently across all agents. Lead Agent tracks and routes these.

#### Domain context per agent
- SDLC Lead: Full orchestrator context combining SDLC-Growth-v2 compliance rules, agent registry (all 6 specialists with capabilities and boundaries), governance model (RACI, meetings, gates), and roadmap awareness.
- AI Science: Current AI landscape (11 registered AI systems, EU AI Act classifications, evaluation criteria) PLUS Verity product AI roadmap (VE/EAM) to advise proactively on AI research and model selection.
- Platform/SRE: Current tech stack (Azure, Vercel, Neon, GitHub Actions) plus AI tooling context (Claude, Claude Code, Claude Cowork, ChatGPT, Codex) and ARIS (Software AG) for organisational structure and process documentation (BPML).
- Product/Strategy: Full HH Group view including entity structure (GmbH, B.V., Inc.), all product lines, BearingPoint consulting relationship, EY consulting relationship, TISAX automotive context, and strategic goals.

#### Prompt structure and depth
- Lead Agent gets expanded structure: CLAUDE.md (under 500 lines) + reference/ directory with multiple files (agent-registry.md, routing-rules.md, etc.). Orchestration logic in reference files, not inline.
- AI Science, Platform/SRE, and Product/Strategy follow standard pattern: CLAUDE.md (under 400 lines each) + reference/domain-context.md. Consistent with CISO, CTO, AppSec.
- Each agent's CLAUDE.md explicitly lists which SDLC-Growth-v2 sections it is responsible for, matching the pattern established by CTO and AppSec agents.

### Claude's Discretion
- Internal structure of reference/ files for each agent
- Exact section ordering within CLAUDE.md prompts
- Which SDLC-Growth-v2 sections map to which agent (analysis task)
- Progressive disclosure strategy per agent

### Deferred Ideas (OUT OF SCOPE)
None, discussion stayed within phase scope.
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| AGNT-01 | SDLC Lead Agent created as CEO's primary orchestrator, can spawn and coordinate all 6 specialist agents and subagents | Established pattern: Lead uses CLAUDE.md + reference/ directory with agent-registry.md and routing-rules.md. Spawns specialists as peer agents (not subagents). Dual routing path documented. |
| AGNT-04 | Head of AI Science Agent created with CAIS expertise, can spawn subagents for model evaluation, AI strategy, research assessment | Agent qualifications define 9 primary ISO standards, 2 SDLC-Growth-v2 sections (6, 7.4). Domain context covers 11 AI systems + Verity AI roadmap. Follows standard pattern (CLAUDE.md + reference/domain-context.md). |
| AGNT-05 | Head of Platform/SRE Agent created with PSRE expertise, can spawn subagents for SLO design, observability, incident response, BCP/DR planning | Agent qualifications define 2 primary ISO standards, 3 SDLC-Growth-v2 sections (7.5, 7.6, SLO framework). Domain context covers current tech stack + AI tooling + ARIS. Follows standard pattern. |
| AGNT-06 | Product/Strategy Lead Agent created with CSA expertise, can spawn subagents for market analysis, OKR design, portfolio governance | Agent qualifications define 0 primary / 8 secondary ISO standards, 5 SDLC-Growth-v2 sections (1, 2, 3, 5, 12). Domain context covers full HH Group view + consulting relationships. Follows standard pattern. |
</phase_requirements>

## Summary

Phase 6 constructs 4 agent CLAUDE.md prompts with reference materials. Three of the four agents (AI Science, Platform/SRE, Product/Strategy) follow the standard pattern established by CISO (Phase 2), CTO (Phase 4), and AppSec (Phase 4): a CLAUDE.md under 400 lines with a `reference/domain-context.md` file. The fourth agent (SDLC Lead) uses an expanded structure with CLAUDE.md under 500 lines and multiple reference files (`agent-registry.md`, `routing-rules.md`, etc.) because it must encode orchestration logic that exceeds what a single domain-context file can carry.

The research effort is primarily an internal analysis task rather than an external technology research task. All source material exists within the repository: the SDLC-Growth-v2 document (18 sections, ~6500 lines), the agent qualifications document (7 profiles, SDLC section ownership map, ISO assignment matrix), the governance model, the AI registry (11 systems), and the 3 existing agent prompts that establish the pattern. The planner's primary challenge is synthesizing this material into precise, consistent, non-contradictory agent prompts that preserve the established patterns while correctly encoding each agent's unique domain.

**Primary recommendation:** Build all 4 agents in a single planning phase with 4 sequential plans (one per agent), starting with the 3 standard-pattern specialists (they are independent of each other) and finishing with the SDLC Lead (which must reference all 6 specialists). The Lead agent goes last because its agent-registry.md must describe the other 3 agents being built in this phase.

---

## Standard Stack

This phase produces markdown-based agent prompts, not software. The "standard stack" is the established prompt structure pattern.

### Core: Established Agent Prompt Pattern

| Component | Purpose | Source of Truth |
|-----------|---------|----------------|
| YAML frontmatter | Agent metadata: name, description, tools, model | Established by CISO Agent (agents/ciso/CLAUDE.md lines 1-9) |
| Identity section | Professional persona, composite expertise, source archetypes | Established by all 3 existing agents; profiles defined in protocols/agent-qualifications.md |
| Core Responsibilities section | Numbered, HH-specific responsibilities | Established by all 3 existing agents; ~8-17 numbered items per agent |
| SDLC-Growth-v2 Context section | Section ownership, Startup phase operating context | Established by all 3 existing agents; references agents/shared/SDLC-Growth-v2.md |
| ISO Standard Ownership section | Primary and secondary standard assignments | Established by CTO and CISO agents; data from protocols/agent-qualifications.md Section 4 |
| Output Standards section | Audit readiness, document format, HH-specific content rules, information classification | Established by all 3 existing agents; consistent 4-level classification scheme |
| Collaboration Protocol section | Cross-agent HANDOFF.md, sign-off workflow, cross-domain dependencies using [AGENT-DEPENDENCY] pattern | Established by all 3 existing agents |
| Boundaries section | Must NOT Do list (7-9 items), scope awareness | Established by all 3 existing agents; prevents scope creep into adjacent domains |
| Subagent Spawning section | Typical tasks table, spawning rules, context passing | Established by all 3 existing agents; default: sonnet/25/Read,Grep,Glob,Bash |
| Reference Materials section | Progressive disclosure file list, "Always Read First" entry | Established by all 3 existing agents; always starts with domain-context.md |
| reference/domain-context.md | HH-specific domain context for the agent | Established by all 3 existing agents; YAML frontmatter + numbered sections |

### Supporting: Lead Agent Extended Pattern

| Component | Purpose | Why Different |
|-----------|---------|---------------|
| reference/agent-registry.md | All 6 specialist agents with capabilities, boundaries, and routing hints | Lead must know every agent's scope to route work correctly |
| reference/routing-rules.md | Decision tree for task routing, conflict resolution protocol, escalation rules | Orchestration logic too complex for inline CLAUDE.md |
| reference/governance-context.md | Governance model summary, meeting structure, gate criteria | Lead coordinates governance preparation |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Multiple reference files for Lead | Single large domain-context.md | Single file would exceed practical length; multiple files support progressive disclosure |
| Inline orchestration logic in CLAUDE.md | reference/ files | Would push CLAUDE.md well over 500 lines; violates progressive disclosure pattern |

---

## Architecture Patterns

### Recommended File Structure

```
agents/
├── sdlc-lead/
│   ├── CLAUDE.md                    # Under 500 lines; orchestrator identity + core responsibilities
│   └── reference/
│       ├── agent-registry.md        # All 6 specialists: capabilities, boundaries, routing hints
│       ├── routing-rules.md         # Task routing decision tree, conflict resolution, escalation
│       └── governance-context.md    # Governance model summary, meetings, gates, RACI awareness
│
├── ai-science/
│   ├── CLAUDE.md                    # Under 400 lines; standard pattern
│   └── reference/
│       └── domain-context.md        # AI landscape, 11 systems, evaluation criteria, Verity AI roadmap
│
├── platform-sre/
│   ├── CLAUDE.md                    # Under 400 lines; standard pattern
│   └── reference/
│       └── domain-context.md        # Tech stack, AI tooling, ARIS context, operational status
│
└── product-strategy/
    ├── CLAUDE.md                    # Under 400 lines; standard pattern
    └── reference/
        └── domain-context.md        # HH Group view, entity structure, products, consulting relationships
```

### Pattern 1: Standard Agent CLAUDE.md Structure

**What:** The 11-section structure used by CISO, CTO, and AppSec agents.
**When to use:** For AI Science, Platform/SRE, and Product/Strategy agents.
**Key structural observations from existing agents:**

1. **YAML frontmatter** always includes: name, description, tools (Read, Write, Edit, Bash, Grep, Glob), model (opus).

2. **Identity section** always includes:
   - Role title with "Helge Heupel Group" qualifier
   - Years of experience (25+)
   - Professional persona (1 paragraph, specific companies/roles)
   - Source archetypes with Active/Advisory/Partial labels
   - Key relationship declarations (e.g., CTO-AppSec boundary, CISO substitution model)

3. **Core Responsibilities** always:
   - Begins with "All responsibilities are specific to the Helge Heupel Group (GmbH, B.V., Inc.)"
   - Groups responsibilities under subsection headers
   - Numbers each responsibility (1-17 range across existing agents)
   - Names specific HH systems, tools, personnel, and products

4. **SDLC-Growth-v2 Context** always:
   - Points to `agents/shared/SDLC-Growth-v2.md`
   - Lists "Key sections for your role" with section numbers and 1-line descriptions
   - Includes "Current operating phase: Startup" with Startup simplification bullets
   - References `SDLC-Startup-v2.md`, `governance-model.md`, `RACI-Startup.md`

5. **Boundaries** always includes:
   - "Do NOT modify SDLC-Growth-v2.md"
   - "Do NOT accept risk on behalf of the organization"
   - "Do NOT include patent-sensitive content"
   - Domain-specific boundary statements (what this agent does NOT do)
   - Scope awareness: "Your domain" / "Adjacent domains" / "Your escalation path"

### Pattern 2: Domain Context File Structure

**What:** The reference/domain-context.md used by CISO, CTO, and AppSec agents.
**When to use:** For all 3 standard-pattern specialist agents.
**Key structural observations:**

1. **CISO domain-context** (most comprehensive, 8 sections): Organization Overview, Personnel, AI Agent Roster, Products, Technology Stack, Current Compliance Status, Operating Phase, Key Constraints. This is the "master" organizational context.

2. **CTO domain-context** (moderate, 8 sections): Same section structure as CISO but tailored to technical context. Adds ADR Registry section. Abbreviates compliance status.

3. **AppSec domain-context** (focused, 8 sections): Abbreviated org overview referencing CISO context, then specialized sections: Security Tooling Inventory, Threat Model Registry, SAST/DAST Status, SBOM and Supply Chain Status, Annex A.8 Control Mapping, Upstream Policy Constraints, Operating Phase and Key Dates.

**Pattern:** Each domain-context provides just enough organizational context for the agent to orient itself, then dives into domain-specific operational data. AppSec's approach of referencing CISO's domain-context for full org details (rather than duplicating) is the most efficient pattern for the 3 new agents.

### Pattern 3: SDLC Lead Orchestrator Pattern

**What:** Expanded reference directory with multiple files for orchestration logic.
**When to use:** Only for the SDLC Lead Agent.
**Key design elements:**

1. **agent-registry.md**: Must describe all 6 specialist agents with:
   - Agent name, directory path, description
   - Capabilities (what the agent CAN do)
   - Boundaries (what the agent MUST NOT do)
   - Routing hints (when to send work to this agent)
   - Key relationships and dependencies to other agents

2. **routing-rules.md**: Must encode:
   - Task classification taxonomy (by domain, risk, complexity)
   - Routing decision tree (which agent handles which task type)
   - Multi-agent workflow patterns (sequential, parallel, review)
   - Conflict resolution protocol (policy-first, CEO-escalation-last)
   - Quality review checklist (SDLC-Growth-v2 compliance verification)

3. **governance-context.md**: Must summarize:
   - 2-meeting governance model (Weekly Technical, Monthly Strategic)
   - Gate criteria summary (G0-G5 with risk tiers)
   - Agent preparation responsibilities for each meeting
   - RACI awareness (which humans approve what)

### Anti-Patterns to Avoid

- **Duplicating organizational context across domain-context files.** The CISO domain-context is the master reference. Other agents should reference it for full org details and provide only domain-specific additions, following the AppSec pattern.

- **Overloading CLAUDE.md with operational data.** Policies, control mappings, tool inventories, and registry data belong in reference/ files. CLAUDE.md carries identity, responsibilities, boundaries, and navigation instructions.

- **Creating overlapping responsibilities.** The locked decision explicitly states: "AI Science Agent has strict ownership: model evaluation and AI research only. CISO keeps all ISO 42001 governance, CTO keeps all architecture." Every responsibility statement must respect these boundaries.

- **Generic language.** The established pattern requires naming specific HH entities, personnel, systems, and products. "The organization shall implement observability" is prohibited. "Platform/SRE Agent configures Azure Monitor, Application Insights, and Microsoft Sentinel for Verity VE and EAM deployed on Vercel and Azure" is correct.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| SDLC-Growth-v2 section mapping | Manual assignment from scratch | `protocols/agent-qualifications.md` Section 3 | Already maps all 18 sections to agents with source archetype justification |
| ISO standard assignment | Manual assignment from scratch | `protocols/agent-qualifications.md` Section 4 | Complete 29-document matrix with primary/secondary ownership already defined |
| Agent capability descriptions | Invent from general knowledge | `protocols/agent-qualifications.md` Section 2 | Full profiles with persona, expertise, deliverables already defined |
| Organizational context | Draft from memory | `agents/ciso/reference/domain-context.md` | Master organizational reference with verified entity details, personnel, tech stack |
| AI system landscape | Enumerate manually | `ai-registry/AI-Registry-Summary.md` | Auto-generated from 11 YAML files with EU AI Act classifications, controls, risk references |
| Governance structure | Derive from SDLC-Growth-v2 | `governance-model.md` | Already compressed Growth governance to 2-meeting Startup structure |
| Cross-agent dependency pattern | Invent new convention | Existing `[AGENT-DEPENDENCY]` pattern from CISO, CTO, AppSec agents | Pattern already in use: `[CTO-DEPENDENCY]`, `[CISO-DEPENDENCY]`, `[APPSEC-DEPENDENCY]`, etc. |

**Key insight:** Phase 6 is primarily a synthesis task. All source material exists. The risk is in mis-synthesizing (contradicting established patterns, creating overlapping responsibilities, or missing required sections), not in lacking source material.

---

## Common Pitfalls

### Pitfall 1: Scope Overlap Between AI Science and CISO

**What goes wrong:** AI Science Agent responsibilities bleed into ISO 42001 governance territory, or AI Science produces policy-level artifacts that conflict with CISO outputs.
**Why it happens:** Both agents deal with "AI governance" but from different angles. AI Science owns the technical/scientific perspective (model evaluation, AI research, bias testing). CISO owns the management system perspective (AIMS, risk register, conformity assessment).
**How to avoid:** AI Science CLAUDE.md must include an explicit boundary: "Do NOT produce ISO 42001 management system artifacts (AIMS scope, AI Policy, AI risk register entries). These are CISO Agent domain. You provide technical AI assessments that the CISO Agent consumes as inputs to governance decisions."
**Warning signs:** AI Science responsibilities mention "AIMS", "AI Policy", or "risk register" without the qualifier "as input to CISO Agent".

### Pitfall 2: Scope Overlap Between CTO and Platform/SRE

**What goes wrong:** Platform/SRE designs infrastructure architecture instead of operationalizing CTO designs. Or CTO produces operational runbooks.
**Why it happens:** The locked decision states "CTO owns infrastructure architecture including SLO targets and observability strategy. Platform/SRE implements and operates what CTO designs." The boundary between "design" and "implement" is subtle.
**How to avoid:** Platform/SRE CLAUDE.md must declare: "CTO Agent designs platform architecture and SLO targets. You implement, configure, operate, and monitor what CTO designs. You do NOT produce architecture decisions or ADRs." Mirror the CTO-AppSec boundary model (CTO designs, AppSec implements security tooling).
**Warning signs:** Platform/SRE responsibilities include "design" or "architect" language without qualifying "per CTO specification".

### Pitfall 3: Product/Strategy Agent Scope Creep into CEO Territory

**What goes wrong:** Product/Strategy produces strategic decisions instead of strategic communications and recommendations. The agent starts making portfolio decisions rather than preparing materials for human decision-makers.
**Why it happens:** The agent absorbs the "Chief Strategy Architect" archetype which sounds like it makes strategy. But the locked decision states: "Agent drafts, human approves."
**How to avoid:** Product/Strategy CLAUDE.md must explicitly state: "You prepare strategic analysis, OKR frameworks, WSJF scoring models, and strategic communications. The CEO makes strategic decisions. You draft materials; the CEO reviews and sends."
**Warning signs:** Responsibilities use "decide", "approve", or "determine" instead of "draft", "prepare", "recommend", "analyze".

### Pitfall 4: SDLC Lead Agent Becoming a Bottleneck

**What goes wrong:** Lead Agent becomes a mandatory intermediary for all work, creating latency where none is needed.
**Why it happens:** The dual role of "router AND gatekeeper" can be over-interpreted as "every task must flow through Lead."
**How to avoid:** The locked decision explicitly allows both paths: "CEO can go through Lead for multi-agent work, or directly to a specialist for focused tasks. Lead tracks work from either path." The routing-rules.md must encode that direct-to-specialist is a valid path, not a bypass.
**Warning signs:** Lead Agent CLAUDE.md implies all work must be routed through it, or specialists cannot be invoked directly.

### Pitfall 5: Inconsistent Section Ordering

**What goes wrong:** New agents use different section ordering than existing agents, making the agent system harder to navigate and maintain.
**Why it happens:** Writer creates sections in a logical order for the specific agent rather than matching the established pattern.
**How to avoid:** Extract the exact section ordering from the CISO Agent (the most mature, established in Phase 2) and use it as the template. Sections that don't apply to a specific agent are omitted, not reordered.
**Warning signs:** Sections appear in a different order than CISO/CTO/AppSec agents.

### Pitfall 6: Missing Cross-Agent Dependencies for Lead

**What goes wrong:** SDLC Lead Agent's agent-registry.md describes agents incompletely, missing key boundaries or capabilities that affect routing decisions.
**Why it happens:** The registry is compiled from 6 separate agent CLAUDE.md files, and subtle boundary statements can be missed.
**How to avoid:** Build agent-registry.md by systematically extracting from each agent's CLAUDE.md: (1) the "Your domain" statement from Scope Awareness, (2) the "Must NOT Do" list from Boundaries, (3) the cross-domain dependency flags from Collaboration Protocol.
**Warning signs:** Routing rules reference capabilities or boundaries not documented in the registry.

---

## Code Examples

### Example 1: YAML Frontmatter (from CISO Agent, the established pattern)

```yaml
---
name: ciso
description: >
  CISO Agent for the Helge Heupel Group. Use for information security policy,
  ISMS/AIMS management, risk assessment, EU compliance (NIS2, GDPR, TISAX),
  AI governance (ISO 42001), and cross-framework compliance integration.
tools: Read, Write, Edit, Bash, Grep, Glob
model: opus
---
```

### Example 2: Cross-Domain Dependency Pattern (from CTO Agent)

```markdown
### Cross-Domain Dependencies

When producing artifacts that touch another agent's domain, flag the dependency explicitly:

- Compliance-affecting decisions: `[CISO-DEPENDENCY]` (e.g., architecture change affecting ISMS scope)
- Security tooling impacts: `[APPSEC-DEPENDENCY]` (e.g., pipeline change affecting SAST integration points)
- AI governance impacts: `[AI-SCIENCE-DEPENDENCY]` (e.g., agent architecture change affecting AI system registry)
- Operational impacts: `[PLATFORM-DEPENDENCY]` (e.g., infrastructure change affecting SLO targets)
```

### Example 3: Subagent Spawning Table (from CISO Agent)

```markdown
| Task Type | Example | Model | maxTurns | Tools |
|-----------|---------|-------|----------|-------|
| **Gap analysis** | "Assess ISO 27001 Annex A controls A.5.1-A.5.8 against HH current state" | sonnet | 25 | Read, Grep, Glob, Bash |
| **Policy section drafting** | "Draft the NIS2 compliance section for the IS Policy" | opus | 50 | Read, Write, Edit, Bash, Grep, Glob |
| **Quick lookup** | "What does ISO 42001 Annex A.4.6 require?" | haiku | 10 | Read, Grep, Glob |
```

### Example 4: Scope Awareness (from AppSec Agent)

```markdown
### Scope Awareness

- **Your domain:** Threat modeling, SAST/DAST configuration, SBOM generation, supply chain security
- **Adjacent domains (consult, do not own):** Security policy (CISO Agent), architecture decisions (CTO Agent), platform operations (Platform/SRE Agent), AI model evaluation (AI Science Agent)
- **Your escalation path:** CEO (Helge Heupel) for risk acceptance; CISO Agent for policy interpretation; CTO Agent for architecture clarification
```

### Example 5: Reference to CISO Domain Context (from AppSec Agent)

```markdown
## 1. Organization Overview (Abbreviated)

The **Helge Heupel Group** consists of 3 legal entities: Helge Heupel GmbH (Germany), Helge Heupel B.V. (Netherlands), and Helge Heupel Inc. (United States). GmbH is the primary operating entity.

For full entity details (registration, addresses, inter-entity relationships), see `agents/ciso/reference/domain-context.md` Section 1.
```

---

## SDLC-Growth-v2 Section Ownership Analysis

This analysis maps SDLC-Growth-v2 sections to the 4 new agents. Source: `protocols/agent-qualifications.md` Section 3 (verified against SDLC-Growth-v2 table of contents).

### SDLC Lead Agent: Orchestration Oversight

The Lead Agent does not own any SDLC-Growth-v2 sections directly. It oversees all 18 sections through cross-agent coordination and SDLC-Growth-v2 compliance verification.

### AI Science Agent Sections

| Section | Title | Ownership Level | Notes |
|---------|-------|-----------------|-------|
| 8 (IEA v2) | Intent-Execution Architecture v2 | Primary | From Chief AI Scientist archetype. Specifically the AI-specific trust model and IEA component design. |
| 9.4 | AI-specific testing | Primary | From Chief AI Scientist. Bias/fairness testing, adversarial robustness, explainability, drift detection, model performance regression. |

### Platform/SRE Agent Sections

| Section | Title | Ownership Level | Notes |
|---------|-------|-----------------|-------|
| 9.5 | Deploy | Primary | From Principal SRE. Deployment strategy, canary analysis, rollback, blue-green. |
| 9.6 | Operate and Monitor | Primary | From Principal SRE. Observability, incident management. |
| 16 | Operations, Reliability, and Incident Management | Primary | SLO framework, observability stack, incident management, NIS2 reporting, chaos engineering, DR, toil measurement, ORR. |

**Note:** SDLC-Growth-v2 renumbered sections. In V2, the SDLC Phases are in Section 9 (not Section 7 as in V1). Section 16 is Operations which is Platform/SRE's primary domain. The agent qualifications document references V1 numbering (7.5, 7.6) but the actual V2 sections are 9.5, 9.6, and the full Section 16.

### Product/Strategy Agent Sections

| Section | Title | Ownership Level | Notes |
|---------|-------|-----------------|-------|
| 1 | Purpose and Scope | Primary | From Chief Strategy Architect. Strategic context, mission, competitive positioning. |
| 2 | Strategic Foundation: Strategy as Code | Primary | Machine-readable strategic artifacts, WSJF scoring, traceability, feedback loops, compounding data advantage. |
| 3 | Governing Principles | Primary | 12 core principles, conflict resolution hierarchy. |
| 7 | Organizational Model: SAFe 6.0 Adapted | Primary | Phase A/B/C organizations, AI teammate roles, team composition. |
| 14 | UX/DX and Accessibility | Shared | UX strategy, accessibility (shared with CTO for DX). |
| 17 | Metrics and Continuous Improvement | Primary | DORA, AI governance metrics, compliance metrics, UX metrics, risk KRIs, leading indicators. |

---

## Agent-Specific Domain Context Research

### AI Science Agent Domain Context Requirements

Content needed for `agents/ai-science/reference/domain-context.md`:

1. **Organization Overview (abbreviated):** Reference CISO domain-context for full org details.

2. **AI System Landscape (primary content):** Extracted from `ai-registry/AI-Registry-Summary.md`:
   - 11 total AI systems: 7 development (Claude Code agents), 2 third-party (ChatGPT, Codex), 2 product (Verity VE AI, Verity EAM AI)
   - All currently classified as limited-risk per EU AI Act
   - SDLC tiers: 2 tier-1-assistant, 7 tier-2-collaborator, 2 tier-3-decision-support
   - Lifecycle: 5 production, 6 development

3. **Verity Product AI Roadmap:** Per locked decision, AI Science gets forward-looking context:
   - Verity VE AI (AI-PROD-001): Azure OpenAI backbone, decision support for value engineering
   - Verity EAM AI (AI-PROD-002): Azure OpenAI backbone, decision support for enterprise architecture
   - Both classified tier-3 (Human-in-the-Loop mandatory), 37 applicable ISO 42001 controls each

4. **Model Evaluation Criteria:** From SDLC-Growth-v2 Section 10.2 (AI Lifecycle Management):
   - Performance metrics (accuracy, precision, recall, F1)
   - Fairness evaluation (Fairlearn, protected attributes)
   - Robustness testing (adversarial inputs, prompt injection resistance)
   - Explainability (SHAP/LIME scores)
   - Drift detection (KS test, PSI, concept drift)

5. **AI Toolchain (relevant subset):** Azure OpenAI Service, Azure ML, Azure AI Studio, Fairlearn, Custom Evaluation Harness.

6. **ISO Standard Ownership Summary:** 9 primary, 3 secondary (from agent qualifications).

### Platform/SRE Agent Domain Context Requirements

Content needed for `agents/platform-sre/reference/domain-context.md`:

1. **Organization Overview (abbreviated):** Reference CISO domain-context.

2. **Current Technology Stack (operational view):**
   - Cloud: Azure (West Europe, Germany West Central)
   - Hosting: Vercel (CMS admin apps), Cloudflare Pages (websites)
   - Database: Neon PostgreSQL (serverless)
   - CI/CD: GitHub Actions (current), Azure Pipelines (Growth target per SDLC-Growth-v2)
   - Identity: Microsoft Entra ID
   - Monitoring: Azure Monitor, Application Insights (Growth target)
   - SIEM: Microsoft Sentinel (Growth target)

3. **AI Tooling Context:** Per locked decision:
   - Claude Code (Anthropic): 7-agent system, primary SDLC tool
   - Claude Cowork (Anthropic): Collaborative AI development
   - ChatGPT (OpenAI): Research and brainstorming
   - Codex (OpenAI): AI-assisted code development

4. **ARIS Context:** Per locked decision:
   - ARIS (Software AG): Organizational structure and process documentation
   - BPML: Business Process Markup Language for process models
   - Used for organizational structure documentation and process architecture

5. **SLO Framework (from SDLC-Growth-v2 Section 16.1):**
   - 3 tiers + Tier 1-AI: availability targets (99.95% to 99.5%), latency, error rates
   - Error budget policy and burn-rate alerting
   - AI-specific SLIs (hallucination rate, inference latency, factual accuracy)

6. **Incident Management Framework (from SDLC-Growth-v2 Section 16.3):**
   - 4-severity classification (SEV1-SEV4)
   - ICS-Lite model (IC, CL, TL roles)
   - On-call design with EU timezone gap coverage
   - NIS2 incident reporting timelines (24h/72h)

7. **Operational Status:** Current state of deployed services, monitoring coverage, DR readiness.

### Product/Strategy Agent Domain Context Requirements

Content needed for `agents/product-strategy/reference/domain-context.md`:

1. **Full HH Group View:** Per locked decision, this agent gets the most comprehensive business context:
   - GmbH (DE): Primary operating entity, registered Berlin, Kurfurstendamm 194
   - B.V. (NL): EU market expansion, registered Noordbeemster
   - Inc. (US): Future US entry, Delaware C Corp, San Francisco office
   - 100% owned by Helge Heupel across all entities

2. **Product Lines:**
   - Verity VE (Value Engineering): AI-native value engineering, patent-pending [PATENT-VE-001]
   - Verity EAM (Enterprise Architecture Management): AI-native EA management, patent-pending [PATENT-EAM-001]
   - Target market: Enterprise, specifically automotive OEMs (VE) and large enterprises (EAM)

3. **Consulting Relationships:** Per locked decision:
   - BearingPoint: Weekly meeting cadence established, TISAX as-is communicated, alignment project plan needed
   - EY: Consulting relationship (details to be documented in domain context)

4. **TISAX Automotive Context:**
   - Certified (label expiring 2026-03-16), Participant ID P5P6X0
   - TUV SUD renewal pending (unanswered as of 2026-02-20)
   - ISA version 5.1, must upgrade to ISA 6
   - Automotive industry context critical for VE product positioning

5. **Strategic Goals:**
   - ISO 27001 + ISO 42001 dual certification readiness by mid-May 2026
   - TISAX renewal with new scope (ISA 6)
   - Product-market fit for Verity VE in automotive
   - 12-week timeline from SDLC-Growth-v2

6. **Personnel (strategic view):**
   - CEO (Helge Heupel): Orchestrator, final sign-off
   - Strategy Partner: Product/Strategy lead
   - Finance Industry Senior Manager: Financial domain advisory
   - CTO, CISO, IT Pentester: Technical leadership

---

## SDLC Lead Agent Reference File Research

### agent-registry.md Structure

Each entry must include the following fields (extracted from the pattern established by the 3 existing agents):

```markdown
### [Agent Name]

**Directory:** `agents/[name]/CLAUDE.md`
**Model:** opus
**Tools:** Read, Write, Edit, Bash, Grep, Glob

**Capabilities:**
- [What this agent CAN do, extracted from Core Responsibilities]

**Boundaries:**
- [What this agent MUST NOT do, extracted from Boundaries section]

**Routing Hints:**
- [When to send work to this agent]

**Cross-Agent Dependencies:**
- [Which dependency flags this agent uses]

**Key Relationships:**
- [Upstream/downstream dependencies with other agents]
```

### routing-rules.md Structure

Must encode the dual routing path:

1. **Through Lead (multi-agent work):** CEO describes a complex task. Lead decomposes it, assigns subtasks to specialists, tracks completion, reviews outputs for SDLC-Growth-v2 compliance, assembles final deliverable.

2. **Direct to Specialist (focused tasks):** CEO invokes a specialist directly for domain-specific work. Lead is informed after the fact (or concurrently tracks via shared artifacts in Git).

Must encode conflict resolution:

1. Check SDLC-Growth-v2 for an applicable rule
2. Check established policies (IS Policy, AI Policy) for guidance
3. Check governance-model.md for decision authority
4. If policy is ambiguous, escalate to CEO

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Placeholder CLAUDE.md files (3 lines each) | Full agent prompts (300-400 lines) + reference directories | Phase 2 (CISO), Phase 4 (CTO, AppSec) | Agents can now operate autonomously within defined boundaries |
| SDLC-Growth-v1 as reference | SDLC-Growth-v2 as shared reference | Phase 1 | V2 has 18 sections (vs. V1's 14), 6500+ lines, proper IEA v2, expanded operations section |
| Agent qualifications in planning docs only | `protocols/agent-qualifications.md` as formal reference | Phase 1 | Complete archetype-to-agent mapping, ISO ownership, section ownership |

**Key context for planner:** The 3 existing agents (CISO at 383 lines, CTO at 321 lines, AppSec at 304 lines) establish a tight pattern. The planner must follow this pattern precisely for the 3 new standard agents and extend it thoughtfully for the Lead agent.

---

## Open Questions

1. **SDLC-Growth-v2 section numbering discrepancy**
   - What we know: Agent qualifications document references V1 section numbers (e.g., Platform/SRE owns "Section 7.5: Deploy" and "Section 7.6: Operate and Monitor"). In SDLC-Growth-v2, the SDLC Phases are Section 9 (not 7), and Operations is Section 16 (not embedded in phases).
   - What's unclear: Whether the agent qualifications should be updated to V2 numbering, or if the agents should reference both.
   - Recommendation: Use V2 section numbers in the new agent CLAUDE.md files. The agents reference V2 directly. Note the discrepancy in the domain context so agents can handle references to either numbering.

2. **ARIS detail depth for Platform/SRE**
   - What we know: The locked decision places ARIS (Software AG, BPML) in Platform/SRE domain context.
   - What's unclear: How much ARIS-specific detail is needed. No ARIS artifacts exist in the repository yet.
   - Recommendation: Include ARIS as a known tool in the domain context with its purpose (organizational structure, process documentation via BPML). Do not create ARIS-specific configuration or process artifacts in this phase (Phase 6 creates agent definitions only).

3. **EY consulting relationship detail**
   - What we know: The locked decision states EY should appear alongside BearingPoint in Product/Strategy context.
   - What's unclear: No EY-specific details exist in the repository or memory.
   - Recommendation: Include EY as a named consulting relationship in the Product/Strategy domain context with a placeholder note. The agent can ask the CEO for details when needed.

4. **Claude Cowork context**
   - What we know: The locked decision mentions "Claude Cowork" as AI tooling for Platform/SRE context.
   - What's unclear: Claude Cowork is not in the AI Registry (only Claude Code agents, ChatGPT, and Codex are registered).
   - Recommendation: Include Claude Cowork as a known tool in Platform/SRE domain context. Flag that it may need an AI Registry entry.

---

## Sources

### Primary (HIGH confidence)

- `agents/ciso/CLAUDE.md` (383 lines) - Established CLAUDE.md pattern, Phase 2
- `agents/cto/CLAUDE.md` (321 lines) - Established CLAUDE.md pattern, Phase 4
- `agents/appsec/CLAUDE.md` (304 lines) - Established CLAUDE.md pattern, Phase 4
- `agents/ciso/reference/domain-context.md` - Master organizational context
- `agents/cto/reference/domain-context.md` - Technical architecture context
- `agents/appsec/reference/domain-context.md` - Security engineering context
- `protocols/agent-qualifications.md` - Complete agent profiles, ISO ownership, section ownership
- `agents/shared/SDLC-Growth-v2.md` - Full SDLC framework (18 sections, ~6500 lines)
- `governance-model.md` - Startup governance (2-meeting model, gate criteria)
- `ai-registry/AI-Registry-Summary.md` - 11 AI systems with classifications and controls
- `.planning/phases/06-remaining-specialist-agents/06-CONTEXT.md` - User decisions for this phase

### Secondary (MEDIUM confidence)

- `SDLC-Growth-v1.md` - Original SDLC (V1 section numbering referenced in agent qualifications)

---

## Metadata

**Confidence breakdown:**
- Standard Stack: HIGH - Pattern established by 3 existing agents with consistent structure
- Architecture: HIGH - File structure and section ordering derived from verified existing agents
- Pitfalls: HIGH - Derived from analysis of actual agent boundaries and locked decisions
- Domain Context: HIGH - Source material exists in repository; synthesis task, not discovery

**Research date:** 2026-02-22
**Valid until:** 2026-04-22 (stable; agent prompt patterns change infrequently)
