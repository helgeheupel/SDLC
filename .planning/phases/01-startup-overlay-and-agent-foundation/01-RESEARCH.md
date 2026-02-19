# Phase 1: Startup Overlay and Agent Foundation - Research

**Researched:** 2026-02-18
**Domain:** Compliance framework phasing (SDLC-Growth-v2 Startup extraction) + AI agent infrastructure (Claude Code multi-agent architecture)
**Confidence:** HIGH

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

#### Startup SDLC Companion Document
- **Format:** Standalone companion document ("SDLC-Startup-v2.md"), not an edit to SDLC-Growth-v2.md -- references v2 sections but stands alone as the operative guide
- **Naming convention:** "Startup SDLC", "Growth SDLC", "Enterprise SDLC" -- these are the three phases, not "NOW/Growth/Enterprise"
- **Granularity:** Per-control mapping -- every individual control, gate, and artifact in SDLC-Growth-v2 mapped to Startup/Growth/Enterprise with justifications (300+ entries)
- **SDLC-Growth-v2 preserved:** V2 remains the Growth SDLC target state; the Startup SDLC is a companion that says "for now, do this subset"
- **Product development integration:** Verity VE and Verity EAM product development (including patent-pending innovations) flows through the same SDLC phases (Orient -> Requirements -> Development etc.) alongside compliance work -- integrated, not parallel tracks
- **Patent-sensitive artifacts:** Kept in a separate repo with stricter access controls; SDLC references them by ID only. Aligned with TISAX prototype protection (ISA Chapter 7)

#### Role-to-Human Mapping (6 humans, not 5)
- **CEO (Helge Heupel):** Orchestrator + covers CISO responsibilities + Product/Strategy (with Strategy Partner). Ultimate sign-off authority for ALL policies and risk acceptance
- **Strategy Partner:** Product/Strategy Lead (with CEO)
- **Finance Industry Senior Manager:** Advisory role
- **IT Pentester/Super Admin (Azure):** Platform/SRE role (Head of Platform)
- **CTO:** Architecture + AI Engineering (CTO role)
- **CISO (dedicated, 6th person):** Security + EU Compliance + AI Governance
- RACI must reflect that CEO has dual functional role (CISO responsibilities + Product) alongside orchestration

#### Agent Interaction Model
- **Entry point:** Context-dependent -- SDLC Lead for complex multi-agent orchestration; direct specialist access for focused single-domain tasks
- **Session model:** Both standalone and multi-agent -- standalone sessions (one agent per Claude Code session) for focused work; multi-agent via SDLC Lead spawning specialists via Task tool for cross-domain tasks
- **Handoff protocol:** Explicit handoff -- Agent A produces a HANDOFF.md summarizing what it did + what Agent B needs; CEO passes it to Agent B
- **Human sign-off:** PR-based -- agents create branch + PR; human reviews and merges; Git history = audit trail
- **Human substitution:** Agents serve as human substitutes when consultants are unavailable -- CEO must be able to run the full SDLC process with agents alone

#### Agent Directory Structure
- **Location:** Per-agent directories under `agents/` -- each with its own CLAUDE.md + reference docs
- **Naming:** By role -- `agents/sdlc-lead/`, `agents/cto/`, `agents/ciso/`, `agents/ai-science/`, `agents/platform-sre/`, `agents/product-strategy/`, `agents/appsec/`
- **Context:** Full SDLC-Growth-v2 document available to every agent (7,434 lines) -- not section-filtered
- **Subagent spawning:** Protocol to be defined in this phase -- governs when/how agents spawn subagents, context passing, result collection, token budget governance

### Claude's Discretion
- Exact HANDOFF.md template structure
- Subagent spawning token budget thresholds
- Internal organization of each agent's reference docs within their directory
- How the Startup SDLC companion document cross-references SDLC-Growth-v2 section numbers

### Deferred Ideas (OUT OF SCOPE)
- Verity VE/EAM product development specifics -- separate project; agents will support it but product scope is not defined here
- Cross-agent consistency engine (auto-detect contradictions across agent outputs) -- v2 differentiator
- Agent self-governance documentation (agents producing their own ISO 42001 registry entries) -- v2 differentiator
- Automated evidence chain from Git to NorthGRC -- v2 differentiator
- ChatGPT/Codex-specific agent definitions -- agents designed for Claude Code; other tools used separately
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| OVLY-01 | SDLC-Growth-v2 Startup phase extraction produced -- maps which v2 sections apply at Startup vs. Growth vs. Enterprise, with explicit "not yet" justifications | SDLC-Growth-v2 structure analysis (18 sections, 131 subsections, 237 sub-subsections); Section 4 already defines progressive adoption but at section level, not per-control; per-control mapping requires 300+ entries covering UCL domains, gates, ceremonies, roles, risk activities, and compliance evidence |
| OVLY-02 | Role consolidation mapping produced -- 8 SDLC-Growth-v2 personas collapsed to 6 humans + 7 agents with RACI matrix | SDLC-Growth-v2 Section 7 defines 8 role archetypes (CTO, Product Owner, Engineers, Security/Compliance Advisor, Security Champion, AI Ethics Champion, SRE Lead, Compliance Lead); Section 13.3 defines governance body consolidation at Startup; user decision maps to 6 humans (CEO, Strategy Partner, Finance SM, IT Pentester, CTO, CISO) + 7 agents |
| OVLY-03 | Gate model simplified for startup -- risk-tiered gates compressed, governance consolidated into 2 meetings (Weekly Technical + Monthly Strategic) | SDLC-Growth-v2 Section 13.3 already defines 2-meeting consolidation at Startup (Weekly Technical Governance 30min + Monthly Strategic Governance 60min); Section 4.2 defines startup gate criteria (G0-G4 simplified); Section 13.1-13.2 defines full gate model that needs per-tier startup mapping |
| AGNT-08 | Agent interaction model defined -- hierarchical (CEO -> SDLC Lead -> specialists), file-mediated via Git, CEO can also engage any specialist directly | Claude Code subagent architecture (CLAUDE.md per agent, Task tool for spawning, frontmatter configuration); agent teams feature (experimental, shared task list, inter-agent messaging); subagent limitations (cannot spawn other subagents) inform the protocol design |
| AGNT-09 | Subagent spawning protocol defined -- context passing, result collection, token budget governance, when/how agents spawn subagents | Claude Code subagent documentation (model selection, tool restrictions, permission modes, maxTurns, persistent memory); token budget management through model selection (haiku/sonnet/opus) and maxTurns; context passing via spawn prompts and HANDOFF.md artifacts |
</phase_requirements>

## Summary

This phase has two distinct deliverable streams: (1) a Startup SDLC companion document that maps every control, gate, artifact, and role in SDLC-Growth-v2 to Startup/Growth/Enterprise phases with justifications, and (2) the agent infrastructure foundation that defines how 7 Claude Code agents interact, spawn subagents, hand off work, and operate within the SDLC framework.

The SDLC-Growth-v2 document is 7,434 lines across 18 major sections, 131 subsections, and 237 sub-subsections. It already contains progressive adoption guidance (Section 4) but at a coarse level (section-by-section, not control-by-control). The Startup SDLC companion document must go deeper: mapping every individual UCL control domain (20 domains, 280-320 controls), every gate criterion (6 gates x 4 risk tiers), every ceremony, every role, and every compliance artifact to one of three phases. This is a systematic extraction, not a creative design exercise -- the information exists in SDLC-Growth-v2, scattered across sections, and must be consolidated into a single operative guide.

The agent infrastructure leverages Claude Code's native subagent architecture. Each agent is a Markdown file with YAML frontmatter defining name, description, tools, model, and system prompt. Agents operate in standalone Claude Code sessions (one agent loaded per session) or via the Task tool for subagent spawning. The critical constraint is that Claude Code subagents cannot spawn other subagents -- this means the hierarchical model (CEO -> SDLC Lead -> specialists) must be implemented as CEO invoking SDLC Lead, which spawns specialists via Task, but specialists cannot further delegate to sub-subagents. This shapes the protocol design.

**Primary recommendation:** Structure the Startup SDLC companion as a section-by-section mapping that mirrors SDLC-Growth-v2's table of contents, with each entry containing: v2 reference, Startup applicability (Apply/Simplify/Defer), justification, Growth trigger, and responsible role. For the agent infrastructure, use Claude Code's native `.claude/agents/` directory structure with per-agent CLAUDE.md files, define the HANDOFF.md protocol as a structured template, and implement subagent spawning governance through a combination of `maxTurns`, model selection, and tool restrictions in agent frontmatter.

## Standard Stack

### Core

This phase produces documents and protocols, not code. The "stack" is the tooling and format infrastructure.

| Tool/Format | Version | Purpose | Why Standard |
|-------------|---------|---------|--------------|
| Claude Code agents | Current (2026) | Agent definitions as `.claude/agents/*.md` files | Native Claude Code subagent architecture; no external orchestration needed |
| Markdown + YAML frontmatter | N/A | Agent definition format and document format | Claude Code's native agent definition format; human-readable; version-controllable |
| Git + PR workflow | N/A | Human sign-off mechanism and audit trail | Decision locked: PR-based review = compliance audit trail |
| HANDOFF.md | N/A (custom) | Inter-agent context passing | Explicit handoff artifact; human-reviewable; Git-versioned |

### Supporting

| Tool/Format | Version | Purpose | When to Use |
|-------------|---------|---------|-------------|
| Task tool (Claude Code) | Current | Subagent spawning from SDLC Lead | Multi-agent orchestration sessions requiring specialist coordination |
| Model selection (haiku/sonnet/opus) | Current | Token budget governance | Use haiku for exploration/research subagents; sonnet for implementation; opus for complex reasoning |
| maxTurns (agent frontmatter) | Current | Subagent execution bounds | Prevent runaway subagent sessions; enforce time-boxed work |
| Agent memory (`.claude/agent-memory/`) | Current | Cross-session learning | Enable agents to accumulate domain knowledge across sessions |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| File-based HANDOFF.md | Agent teams (experimental) with shared task list | Agent teams are experimental, disabled by default, have known limitations (no session resumption, no nested teams); HANDOFF.md is simpler, more auditable, works with any Claude Code version |
| Per-agent `.claude/agents/` dirs | Monolithic CLAUDE.md with role-switching | Monolithic approach overloads context window; per-agent files keep each specialist focused and under token budget |
| Task tool for multi-agent | Claude Code agent teams (CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS) | Agent teams provide richer inter-agent communication but are experimental, consume significantly more tokens, and add coordination overhead. Task tool is stable, well-documented, and sufficient for the hierarchical model |

## Architecture Patterns

### Recommended Project Structure

```
agents/
  sdlc-lead/
    CLAUDE.md           # Agent system prompt + frontmatter
    reference/          # Reference docs (SDLC-Growth-v2, protocol docs)
    templates/          # HANDOFF.md template, artifact templates
  cto/
    CLAUDE.md
    reference/
  ciso/
    CLAUDE.md
    reference/
  ai-science/
    CLAUDE.md
    reference/
  platform-sre/
    CLAUDE.md
    reference/
  product-strategy/
    CLAUDE.md
    reference/
  appsec/
    CLAUDE.md
    reference/
protocols/
  interaction-model.md    # How agents interact (AGNT-08)
  subagent-protocol.md    # Spawning rules and governance (AGNT-09)
  handoff-template.md     # HANDOFF.md template structure
SDLC-Startup-v2.md       # Startup SDLC companion document (OVLY-01)
RACI-Startup.md           # Role consolidation RACI matrix (OVLY-02)
governance-model.md       # 2-meeting gate model (OVLY-03)
```

### Pattern 1: Agent Definition Structure (CLAUDE.md)

**What:** Each agent is a Markdown file with YAML frontmatter defining its identity, tools, model, and capabilities, followed by a detailed system prompt.

**When to use:** Every agent in the system.

**Key design decisions:**
- Each agent gets the full SDLC-Growth-v2 document (7,434 lines) as reference context -- not section-filtered. This prevents agents from making decisions without seeing the full framework. At ~30K tokens for SDLC-Growth-v2, this fits within Claude's context window alongside the agent prompt and working context.
- Agents are stored in `agents/{role}/CLAUDE.md` (project-level), NOT in `~/.claude/agents/` (user-level). This ensures agents are version-controlled with the project and shared across sessions.
- Each agent's `reference/` directory contains domain-specific documents (standards extracts, templates, prior work).

**Example structure:**
```yaml
---
name: ciso
description: Security, EU Compliance, and AI Governance specialist. Use for IS policy drafting, risk assessment, NIS2/TISAX compliance, ISO 42001 governance, and security architecture review.
tools: Read, Write, Edit, Bash, Grep, Glob
model: opus
---

You are the CISO Agent for the Helge Heupel Group...
[detailed system prompt with domain expertise, SDLC-Growth-v2 context, output format requirements]
```

### Pattern 2: HANDOFF.md Protocol

**What:** Structured artifact produced by Agent A when its work must continue with Agent B. Contains summary of completed work, open items, context needed by the receiving agent, and explicit instructions.

**When to use:** Any cross-agent workflow where Agent A completes a phase and Agent B needs to continue. CEO reads the HANDOFF.md and passes it to Agent B.

**Recommended template structure (Claude's Discretion area):**
```markdown
# HANDOFF: [Source Agent] -> [Target Agent]

**Date:** [ISO-8601]
**Branch:** [git branch name]
**PR:** [if applicable]

## What Was Done
[Bullet summary of completed work with file references]

## Artifacts Produced
| Artifact | Path | Status |
|----------|------|--------|
| [name] | [path] | [complete/draft/needs-review] |

## What Needs to Happen Next
[Specific instructions for the receiving agent]

## Context the Receiving Agent Needs
[Key decisions, constraints, assumptions that inform next steps]

## Open Questions
[Unresolved items requiring human decision]

## Dependencies
[What must be true before the receiving agent can proceed]
```

### Pattern 3: Subagent Spawning Governance

**What:** Rules governing when and how agents spawn subagents via the Task tool, including context budget, model selection, and result collection.

**When to use:** SDLC Lead orchestrating multi-agent work; any agent needing focused research or analysis in a separate context window.

**Key constraints from Claude Code architecture:**
- Subagents CANNOT spawn other subagents (Claude Code limitation). This means:
  - CEO -> SDLC Lead (standalone session) -> spawns specialists via Task (one level deep)
  - CEO -> Specialist directly (standalone session) -> spawns subagents for research (one level deep)
  - Maximum depth is always 2 levels (parent + subagent)
- Subagents inherit the parent's permission context but can have restricted tools
- Subagents run in their own context window; results return to parent

**Recommended governance rules:**

| Trigger | Model | maxTurns | Tools | Use Case |
|---------|-------|----------|-------|----------|
| Quick lookup / fact-check | haiku | 10 | Read, Grep, Glob | "What does SDLC-Growth-v2 say about X?" |
| Focused analysis | sonnet | 25 | Read, Grep, Glob, Bash | "Analyze gap between current state and ISO 27001 A.5.1-A.5.10" |
| Complex reasoning / drafting | opus | 50 | Read, Write, Edit, Bash, Grep, Glob | "Draft the incident management procedure covering NIS2 timelines" |
| Exploratory research | haiku | 15 | Read, Grep, Glob, WebSearch | "Research current best practices for X" |

**Token budget thresholds (Claude's Discretion area):**
- haiku subagents: ~3K token system prompt, 10-15 turns -- low cost, high speed
- sonnet subagents: ~10K token system prompt, 25 turns -- balanced capability/cost
- opus subagents: ~15K token system prompt, 50 turns -- maximum capability, highest cost
- Recommendation: Default to sonnet for subagents; use haiku for read-only exploration; reserve opus for tasks requiring the parent agent's full reasoning capability

### Pattern 4: Startup SDLC Companion Document Structure

**What:** Per-control mapping document that tells the startup team exactly what to do now, what to prepare for later, and what to ignore until triggered.

**When to use:** The operative guide for all Startup work.

**Cross-referencing approach (Claude's Discretion area):**

Each entry in the companion document references the SDLC-Growth-v2 section using the format `SDLC Growth Sec. X.Y.Z` where X.Y.Z is the section number. This allows anyone to look up the full context in SDLC-Growth-v2 without duplicating content.

**Recommended entry structure:**
```markdown
### [Domain or Topic Name] [v2 Section Reference]

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| [Specific control/gate/artifact] | SDLC Growth Sec. X.Y | Startup / Growth / Enterprise | [Why this phase] |

**Startup Implementation:**
[What to actually do at startup -- the operative instruction]

**Growth Trigger:**
[What event/threshold triggers escalation to the Growth implementation]
```

### Anti-Patterns to Avoid

- **Over-filtering agent context:** Do NOT give agents only their section of SDLC-Growth-v2. Agents need cross-domain awareness to identify conflicts and dependencies. The full 7,434-line document (~30K tokens) is manageable within Claude's context window.
- **Premature agent teams:** Do NOT use Claude Code's experimental agent teams feature for the production workflow. It is experimental, has known limitations (no session resumption, no nested teams, one team per session), and adds unnecessary complexity. The HANDOFF.md protocol with Task tool subagents is sufficient and more auditable.
- **Role-switching in a single session:** Do NOT try to make one Claude Code session act as multiple agents by switching roles mid-conversation. Each agent session should load a single agent definition and maintain that persona throughout.
- **Implicit handoffs:** Do NOT rely on shared Git state alone for inter-agent communication. Always produce an explicit HANDOFF.md that a human can review before passing to the next agent. This maintains the "human-in-the-loop" principle and creates an audit trail.
- **Governance theater in the companion doc:** Do NOT map every SDLC-Growth-v2 subsection as "Apply at Startup" just to appear thorough. The CTO/CISO expert assessment warned that "startups don't die from coordination overhead -- not from missing ISO clauses." Be aggressive about deferring what is not needed for ISO 27001 + ISO 42001 dual certification readiness.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Agent orchestration | Custom multi-agent framework | Claude Code native subagents + Task tool | Claude Code's built-in architecture handles context isolation, permission inheritance, model selection, and result collection. Custom frameworks add complexity without adding capability for this use case |
| Inter-agent messaging | Real-time message bus / pub-sub | HANDOFF.md files in Git | The workflow is asynchronous and human-mediated. Real-time messaging adds complexity without value. Git provides versioning, branching, and audit trail for free |
| Token budget enforcement | Custom token counting middleware | maxTurns + model selection in agent frontmatter | Claude Code's native configuration handles this. maxTurns caps execution length; model selection (haiku/sonnet/opus) controls cost per turn |
| Compliance mapping spreadsheet | Custom database or tool | Markdown tables in the companion document | The mapping is a reference document, not a dynamic system. Markdown is human-readable, version-controllable, and diff-friendly. A database adds operational overhead for a document that changes infrequently |
| RACI matrix tool | Custom RACI application | Markdown table with clear column definitions | 6 humans + 7 agents across ~20 SDLC activities = a manageable table. No tool is needed; the RACI matrix is a reference document |

**Key insight:** This phase produces governance documents and protocol definitions, not running software. The temptation is to over-engineer the infrastructure. Resist it. Markdown files in Git, Claude Code's native agent architecture, and structured templates deliver everything needed. The value is in the content (correct mappings, clear protocols), not in tooling sophistication.

## Common Pitfalls

### Pitfall 1: Companion Document Becomes a Copy of SDLC-Growth-v2
**What goes wrong:** The Startup SDLC companion ends up restating SDLC-Growth-v2 content instead of mapping it. This creates maintenance burden (two documents to keep in sync) and defeats the purpose of a standalone operative guide.
**Why it happens:** The urge to be "complete" leads to copying rather than referencing.
**How to avoid:** Every entry in the companion document should reference SDLC-Growth-v2 by section number and add ONLY: (1) the phase assignment (Startup/Growth/Enterprise), (2) the justification, (3) the startup-specific implementation instruction, and (4) the growth trigger. If you're writing more than 2-3 sentences per entry, you're copying.
**Warning signs:** Companion document exceeds 15,000 lines; large blocks of text duplicated from SDLC-Growth-v2; entries that don't add phase information.

### Pitfall 2: RACI Matrix Ignores AI Agent Roles
**What goes wrong:** The RACI matrix maps only the 6 humans, treating agents as invisible tools rather than named participants. This fails the success criterion that "any team member can identify who owns what."
**Why it happens:** Traditional RACI matrices don't include AI agents.
**How to avoid:** Include all 7 agents as named columns in the RACI matrix alongside the 6 humans. Each SDLC activity should show which agent(s) are Responsible/Consulted alongside which humans are Accountable/Informed.
**Warning signs:** No agent names in the RACI; activities where the "Responsible" column says "AI" without specifying which agent.

### Pitfall 3: Gate Model Loses Risk-Tiering at Startup
**What goes wrong:** The simplified 2-meeting gate model flattens all changes to the same approval level, losing the risk-tiered approach that SDLC-Growth-v2 carefully defines.
**Why it happens:** Simplification is interpreted as "remove all nuance."
**How to avoid:** The 2-meeting model compresses WHERE decisions happen (2 meetings instead of 5 boards), not WHETHER risk-tiering applies. Low/Medium risk changes should still auto-flow through automated checks; High/Critical changes still require human approval -- they just happen in the Weekly Technical meeting instead of separate governance bodies.
**Warning signs:** No mention of risk tiers in the gate documentation; all changes requiring the same approval process.

### Pitfall 4: Agent Definitions Are Too Generic
**What goes wrong:** Agent CLAUDE.md files contain generic prompts like "You are a security expert" without HH-specific context, SDLC-Growth-v2 references, or output format requirements.
**Why it happens:** Phase 1 defines the framework, not the agents (agents are created in Phases 2, 4, 6). But the agent definition template established here sets the quality bar.
**How to avoid:** The interaction model document should include a detailed agent definition template showing: required frontmatter fields, minimum system prompt sections (identity, domain expertise, SDLC-Growth-v2 context loading, output format, collaboration protocol, boundaries), and an example of a well-defined agent. This template constrains all downstream agent creation.
**Warning signs:** Agent template has fewer than 5 required sections; no mention of SDLC-Growth-v2 context; no output format specification.

### Pitfall 5: Subagent Protocol Ignores Claude Code's Nesting Limitation
**What goes wrong:** The protocol assumes agents can spawn agents that spawn agents (3+ levels deep). In reality, Claude Code subagents cannot spawn other subagents -- maximum depth is 2 (parent + subagent).
**Why it happens:** The "hierarchical" model (CEO -> SDLC Lead -> specialists) suggests 3 levels.
**How to avoid:** Design the protocol with two operational modes: (1) CEO runs SDLC Lead as standalone agent in a session, SDLC Lead spawns specialists as subagents via Task tool (2 levels); (2) CEO runs a specialist directly as standalone agent for focused work, specialist spawns research/analysis subagents (2 levels). The "hierarchy" is a conceptual org chart, not a runtime call chain.
**Warning signs:** Protocol diagrams showing 3+ nested spawning levels; no mention of the 2-level limitation.

### Pitfall 6: Patent-Sensitive Artifacts Referenced Without TISAX Alignment
**What goes wrong:** The companion document references patent-pending work without establishing the TISAX Chapter 7 prototype protection controls.
**Why it happens:** Patent protection is deferred as "product scope" but the SDLC companion must still establish the handling protocol.
**How to avoid:** The companion document must include a "Patent-Sensitive Artifact Handling" section that: defines the reference-by-ID-only protocol, specifies the separate repo access controls, and maps to TISAX ISA Chapter 7 (7.1.1 Prototype Handling, 7.2.1 Project-Specific Security, 7.3.1 Transfer of Prototype Information). The actual patent artifacts are out of scope; the handling protocol is in scope.
**Warning signs:** No mention of prototype protection in the companion document; patent artifact IDs appearing inline instead of by reference.

## Code Examples

This phase does not produce code. Instead, the "code examples" are structured document templates.

### Agent Definition Template

```yaml
---
name: [role-name]
description: [1-2 sentence description of when Claude should delegate to this agent. Include "Use proactively" if the agent should be invoked automatically.]
tools: Read, Write, Edit, Bash, Grep, Glob
model: opus
---

# [Agent Role Name] -- Helge Heupel Group

## Identity
You are the [Role Title] for the Helge Heupel Group. You embody 25+ years of domain expertise in [domain areas].

## Core Responsibilities
- [Responsibility 1]
- [Responsibility 2]
- [Responsibility 3]

## SDLC-Growth-v2 Context
You operate within the Helge Heupel Group SDLC-Growth-v2 framework. The full SDLC-Growth-v2 document is available in your reference directory. Key sections for your role:
- Section [X]: [relevant section]
- Section [Y]: [relevant section]

## Output Standards
- All artifacts must be audit-ready for [relevant certifications]
- Use markdown format with clear section headers
- Include framework references (ISO clause numbers, Annex A controls)
- Every recommendation must cite the specific SDLC-Growth-v2 section or standard

## Collaboration Protocol
- Produce HANDOFF.md when work must continue with another agent
- Create branch + PR for all artifacts requiring human sign-off
- Reference patent-sensitive materials by ID only (never inline content)
- Flag items requiring CEO sign-off explicitly

## Boundaries
- Do NOT produce artifacts outside your domain without flagging the cross-domain dependency
- Do NOT accept risk on behalf of the organization -- flag for human decision
- Do NOT modify SDLC-Growth-v2.md -- it is the Growth-phase target state
- Do NOT include patent-sensitive content in any artifact; reference by ID only

## Subagent Spawning
When you need focused research or analysis, spawn subagents with:
- Clear task description in the spawn prompt
- Appropriate model selection (haiku for lookup, sonnet for analysis, opus for complex drafting)
- Defined tool restrictions (read-only for research, full tools for drafting)
- maxTurns appropriate to task complexity
```

### RACI Matrix Entry Structure

```markdown
| SDLC Activity | CEO | Strategy Partner | Finance SM | IT Pentester | CTO | CISO | SDLC Lead Agent | CTO Agent | CISO Agent | AI Science Agent | Platform Agent | Product Agent | AppSec Agent |
|---------------|-----|-----------------|------------|--------------|-----|------|-----------------|-----------|------------|-----------------|----------------|---------------|--------------|
| IS Policy drafting | A | I | I | C | C | C | I | I | R | I | I | I | I |
| Risk assessment | A | I | C | C | C | R | I | I | C | I | I | I | I |
```

Where:
- **R** = Responsible (does the work)
- **A** = Accountable (ultimate sign-off authority -- only one per activity, always a human)
- **C** = Consulted (provides input)
- **I** = Informed (notified of outcome)

Rule: "A" is always a human. Agents can be "R" (do the work) or "C" (consulted for input) but never "A" (accountable). This enforces "AI-augmented, human-governed."

### Startup SDLC Companion Entry Example

```markdown
### 6.1 Unified Control Library (UCL) SDLC Growth Sec. 6.1

| Item | v2 Reference | Phase | Justification |
|------|-------------|-------|---------------|
| UCL three-tier architecture | S.6.1.2 | Growth | Startup needs only Tier 1 canonical controls (~140). Framework-specific extensions (Tier 2) and entity-specific implementations (Tier 3) add complexity without value at <20 people |
| UCL schema (YAML per control) | S.6.1.3 | Startup | Machine-readable controls enable automation from day one. Start with ISO 27001 + ISO 42001 controls only |
| UCL domain taxonomy (20 domains) | S.6.1.4 | Startup | Adopt full taxonomy as organizational framework even if not all domains have controls yet |
| UCL storage and maintenance | S.6.1.5 | Growth | Quarterly review cycle is Growth-appropriate. Startup reviews controls as needed |
| Cross-framework mapping (42 domains) | S.6.2 | Growth | Startup focuses on ISO 27001 + ISO 42001 overlap only. Full 7-framework mapping deferred |
| Entity-framework applicability | S.6.3 | Startup | Must determine which frameworks apply to which entity from day one |
| Evidence automation architecture | S.6.4 | Growth | Startup uses manual evidence collection + Git; automated evidence pipeline is Growth investment |
| OSCAL integration | S.6.5 | Enterprise | FedRAMP deferred until US customer pipeline active |
| Audit readiness framework | S.6.6 | Startup (simplified) | Need audit calendar for ISO 27001 + ISO 42001; defer SOC 2, TISAX, FedRAMP scheduling |

**Startup Implementation:**
Create UCL YAML files for ISO 27001 Annex A controls (93) and ISO 42001 Annex A controls. Use the domain taxonomy to organize them. Store in Git. Map each control to evidence that will be produced in subsequent phases. Skip framework-specific extensions until additional certifications are pursued.

**Growth Trigger:**
First enterprise customer requires formal certification evidence beyond ISO 27001 + ISO 42001; OR first TISAX assessment scheduled; OR US customer pipeline activates FedRAMP requirement.
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Monolithic compliance documents | Per-control machine-readable mappings (YAML, OSCAL) | 2024-2025 with FedRAMP 20x and OSCAL adoption | Companion document should use structured format (tables, not prose) for each mapping entry |
| Single-agent AI assistants | Multi-agent Claude Code architectures with subagent spawning | 2025 with Claude Code subagents + Task tool | Agent infrastructure can use native subagent architecture instead of custom orchestration |
| Manual compliance evidence collection | Git-as-audit-trail with PR-based sign-off | 2024-2025 | PR workflow satisfies ISO 27001 cl. 7.5 (documented information control) |
| Separate ISMS and AIMS | Integrated management system (ISO 27001 + ISO 42001) | 2023-2024 with ISO 42001 publication | Startup SDLC companion must address both standards as an integrated system, not separately |
| Fractional CISO / outsourced security | Dedicated CISO even at startup (per user decision: 6th person) | User decision (2026) | Unusual for a 6-person startup; reflects the compliance-intensive nature of the target market |

**Deprecated/outdated:**
- Claude Code agent teams: Experimental feature (requires `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS` flag). Has known limitations including no session resumption with in-process teammates, task status lagging, and one team per session. NOT recommended for production agent workflow. Use standalone sessions + Task tool subagents instead.
- SDLC-Growth-v2 Section 4 "NOW/Growth/Enterprise" terminology: User decision renames to "Startup/Growth/Enterprise" in the companion document.
- SDLC-Growth-v2's 5-human assumption: Updated to 6 humans (dedicated CISO added as 6th person per user decision).

## Open Questions

1. **Agent directory location: `.claude/agents/` vs `agents/`**
   - What we know: User decision says "per-agent directories under `agents/`." Claude Code's native subagent discovery looks in `.claude/agents/` (project-level) or `~/.claude/agents/` (user-level).
   - What's unclear: If agents are stored in `agents/` (a non-standard path), they won't be auto-discovered by Claude Code. The CEO would need to explicitly load them or copy/symlink them to `.claude/agents/`.
   - Recommendation: Store agent definitions in `.claude/agents/` to leverage Claude Code's native auto-discovery. Use `agents/` as a logical organizational directory if needed, but ensure `.claude/agents/` contains the actual `.md` files that Claude Code loads. Alternatively, use Claude Code's `--agents` CLI flag to point to the custom directory. **This is a decision point for the planner.**

2. **SDLC-Growth-v2 full document as agent context**
   - What we know: User decision says "Full SDLC-Growth-v2 document available to every agent (7,434 lines) -- not section-filtered." SDLC-Growth-v2 is approximately 30K tokens.
   - What's unclear: How to include it -- as a file in each agent's `reference/` directory that the agent reads, or as inline content in the agent's system prompt via `skills` field? Inline inclusion would consume 30K of the ~200K context window. File reference requires the agent to read it on demand, which uses a tool call.
   - Recommendation: Include SDLC-Growth-v2 as a file in a shared `reference/` location (e.g., `agents/shared/SDLC-Growth-v2.md`) and instruct each agent's CLAUDE.md to read it when context about the full framework is needed. Do NOT inline 30K tokens into every agent's system prompt. **This is a decision point for the planner.**

3. **Companion document size and maintainability**
   - What we know: 300+ entries at per-control granularity. 18 sections, 131 subsections. Each entry needs v2 reference, phase, justification, implementation note, and growth trigger.
   - What's unclear: Whether a single monolithic document or a directory of per-section files is more maintainable.
   - Recommendation: Single document (`SDLC-Startup-v2.md`) as the user decided, but organized with clear section headers matching SDLC-Growth-v2's numbering. Use HTML-style anchors for cross-referencing. A table of contents at the top enables navigation. Expected size: 3,000-5,000 lines (significant but manageable).

4. **NorthGRC evidence format compatibility**
   - What we know: NorthGRC is the GRC platform (per PROJECT.md constraints). Agents must produce artifacts compatible with NorthGRC evidence management.
   - What's unclear: NorthGRC's specific evidence format requirements, import capabilities, and API.
   - Recommendation: For Phase 1, define artifacts in standard formats (Markdown, YAML) that can be manually uploaded to NorthGRC. Defer NorthGRC integration specifics to Phase 9 (Toolchain Integration). Flag this as a dependency for the planner.

## Sources

### Primary (HIGH confidence)
- SDLC-Growth-v2.md (7,434 lines) -- the source document for all Startup SDLC mapping work. Read sections 1-18 including progressive adoption model (S.4), organizational model (S.7), quality gates (S.13), risk framework (S.5), UCL (S.6), SDLC phases (S.9), AI integration policy (S.10), AIMS (S.11), security/privacy (S.12), operations (S.16), metrics (S.17), entity addenda (S.18)
- Claude Code official docs: [Create custom subagents](https://code.claude.com/docs/en/sub-agents) -- subagent architecture, CLAUDE.md format, frontmatter fields, tool configuration, model selection, maxTurns, permission modes, persistent memory, hooks
- Claude Code official docs: [Orchestrate teams of Claude Code sessions](https://code.claude.com/docs/en/agent-teams) -- agent teams architecture, TeammateTool, shared task list, limitations (experimental, no session resumption, no nested teams)

### Secondary (MEDIUM confidence)
- [ISO 27001 RACI matrix guidance](https://advisera.com/27001academy/blog/2018/11/05/raci-matrix-for-iso-27001-implementation-project/) -- RACI structure for ISMS implementation; verified against ISO 27001 cl. 5.3 (roles and responsibilities)
- [ISO 42001 RASCI Template](https://cyberzoni.com/product/iso-42001-raci-matrix-template/) -- AI governance RACI patterns; includes AI system lifecycle responsibilities
- [Claude Code multiple agent systems guide](https://www.eesel.ai/blog/claude-code-multiple-agent-systems-complete-2026-guide) -- ecosystem overview; multi-agent patterns in practice
- [Anthropic: Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents) -- agent architecture best practices from Anthropic engineering

### Tertiary (LOW confidence)
- [Claude Code Swarm Orchestration Skill](https://gist.github.com/kieranklaassen/4f2aba89594a4aea4ad64d753984b2ea) -- community-developed multi-agent patterns; unverified but shows real-world usage patterns
- General web search results on startup compliance frameworks -- no authoritative single source found for "startup overlay" pattern; this appears to be a novel approach specific to HH Group

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH -- Claude Code subagent architecture is well-documented and stable; agent definition format verified against official docs
- Architecture: HIGH -- patterns derived from official Claude Code docs and SDLC-Growth-v2 content analysis; per-control mapping approach is systematic extraction, not speculative
- Pitfalls: HIGH -- based on direct analysis of SDLC-Growth-v2 structure, Claude Code architecture constraints (verified: subagents cannot spawn subagents), and user decisions (verified: 6 humans, not 5)
- Open questions: MEDIUM -- directory location question depends on Claude Code's discovery behavior which may change; NorthGRC specifics require tool-specific research deferred to Phase 9

**Research date:** 2026-02-18
**Valid until:** 2026-03-18 (30 days -- Claude Code agent features are evolving but core subagent architecture is stable)
