# Agent Interaction Model

**Version:** 1.0
**Status:** Active
**Created:** 2026-02-19
**Applies to:** All 7 Claude Code agents in the HH SDLC Agent System

This document defines how the 7 Claude Code AI agents interact with each other and with human team members. It is the authoritative reference for determining which agent to invoke, how agents communicate, and what rules govern agent behavior.

**Related protocols:**
- [Subagent Spawning Protocol](subagent-protocol.md) -- when/how agents spawn subagents, model selection, token budget governance
- [HANDOFF.md Template](handoff-template.md) -- structured handoff artifact for cross-agent context passing
- Agent directory: `agents/` -- per-agent CLAUDE.md definitions and reference documents

---

## 1. System Overview

The HH SDLC Agent System consists of **7 Claude Code AI agents** organized into 1 orchestrator + 6 specialists:

| # | Agent | Role | Domain |
|---|-------|------|--------|
| 1 | **SDLC Lead** | Orchestrator | Cross-domain coordination, SDLC-v2 compliance, certification progress tracking |
| 2 | **CTO** | Specialist | Architecture, AI engineering, ADRs, technology evaluation |
| 3 | **CISO** | Specialist | Security, EU compliance (NIS2, GDPR), AI governance (ISO 42001), ISMS |
| 4 | **AI Science** | Specialist | AI research assessment, model evaluation, ISO 42001 Annex A artifacts |
| 5 | **Platform/SRE** | Specialist | SLO frameworks, observability, incident management, BCP/DR |
| 6 | **Product/Strategy** | Specialist | Strategic alignment, OKRs, WSJF scoring, portfolio governance |
| 7 | **AppSec** | Specialist | Threat models, SAST/DAST, SBOM, supply chain security (SLSA) |

### Human Team

| # | Person | Primary Role | SDLC Functions |
|---|--------|-------------|----------------|
| 1 | **Helge Heupel (CEO)** | Orchestrator | CISO responsibilities + Product/Strategy (with Strategy Partner). Ultimate sign-off authority for ALL policies and risk acceptance |
| 2 | **Strategy Partner** | Product/Strategy Lead | Product/Strategy (with CEO) |
| 3 | **Finance Industry Senior Manager** | Advisory | Domain expertise, financial industry compliance guidance |
| 4 | **IT Pentester/Super Admin** | Head of Platform | Platform/SRE, Azure infrastructure, penetration testing |
| 5 | **CTO** | Architecture + AI Engineering | Architecture decisions, AI system design, technical leadership |
| 6 | **CISO** | Security + EU Compliance + AI Governance | IS policies, risk assessment, ISMS, NIS2, TISAX, ISO 42001 |

### Operating Principle

Agents serve as human substitutes when consultants are unavailable. The CEO can run the full SDLC process with agents alone. This is by design: the system must function at full capability even when only the CEO is available, turning a 1-person session into the equivalent of a multi-disciplinary team.

---

## 2. Hierarchy

### Conceptual Organization

```
CEO (Helge Heupel)
  |
  +-- SDLC Lead Agent (orchestrator)
  |     |
  |     +-- CTO Agent
  |     +-- CISO Agent
  |     +-- AI Science Agent
  |     +-- Platform/SRE Agent
  |     +-- Product/Strategy Agent
  |     +-- AppSec Agent
  |
  +-- [Any specialist directly] (for focused single-domain tasks)
```

### Critical Distinction

**The hierarchy is an organizational chart, NOT a runtime call chain.**

- The CEO can engage any agent directly -- the hierarchy does not require going through the SDLC Lead
- The SDLC Lead coordinates multi-agent workflows but does not "own" the specialists
- Specialists report their work to the CEO (via HANDOFF.md or PR), not to the SDLC Lead
- The hierarchy describes authority and coordination patterns, not technical invocation requirements

### Authority Model

- **CEO**: Ultimate sign-off authority for all policies, risk acceptance, and strategic decisions
- **SDLC Lead Agent**: Coordination authority -- can route work to specialists, merge outputs, identify cross-domain conflicts
- **Specialist Agents**: Domain authority within their expertise -- produce artifacts, flag cross-domain dependencies, escalate decisions requiring human judgment
- **Rule**: Agents produce. Humans own risk. No agent may accept risk on behalf of the organization.

---

## 3. Operational Modes

### 3.1 Standalone Mode

**One agent per Claude Code session.** The CEO loads the agent's CLAUDE.md and the agent works independently within its domain.

**When to use:**
- Focused single-domain tasks (e.g., "CISO, draft the IS Policy")
- Quick questions or lookups within a domain
- Tasks that do not require input from other specialists
- Tasks where the agent's domain expertise is sufficient

**How it works:**
1. CEO starts a Claude Code session
2. CEO loads the agent: `claude --agent agents/ciso/CLAUDE.md` (or equivalent)
3. Agent operates within its defined domain, reading reference materials as needed
4. Agent produces artifacts (files in Git) and/or a HANDOFF.md if work continues elsewhere
5. CEO reviews output, provides feedback, approves via PR if sign-off is required

**Constraints:**
- The agent operates only within its defined domain boundaries
- Cross-domain dependencies are flagged, not resolved -- the agent produces a HANDOFF.md for the CEO to route
- The agent can spawn subagents for focused research/analysis within its domain (see [subagent-protocol.md](subagent-protocol.md))

### 3.2 Multi-Agent Mode

**CEO loads the SDLC Lead, which spawns specialists via the Task tool.** Used for cross-domain tasks requiring coordination.

**When to use:**
- Cross-domain coordination (e.g., "Coordinate CTO and CISO on threat model review")
- Tasks requiring multiple specialist inputs merged into a single artifact
- Unclear routing -- the SDLC Lead determines which specialist(s) to involve
- Certification-readiness reviews requiring cross-artifact consistency

**How it works:**
1. CEO starts a Claude Code session
2. CEO loads the SDLC Lead: `claude --agent agents/sdlc-lead/CLAUDE.md`
3. SDLC Lead analyzes the task and determines which specialist(s) to invoke
4. SDLC Lead spawns specialist subagent(s) via the Task tool (see [subagent-protocol.md](subagent-protocol.md))
5. Specialist subagents produce their outputs and return results to the SDLC Lead
6. SDLC Lead merges, validates, and presents the consolidated output to the CEO
7. CEO reviews, provides feedback, approves via PR

**Maximum depth: 2 levels** (SDLC Lead session + specialist subagent via Task tool). Specialists spawned as subagents CANNOT further delegate. This is a hard constraint of the Claude Code subagent architecture. If a specialist needs sub-delegation, it must complete its portion and the SDLC Lead must spawn additional subagents sequentially.

---

## 4. Entry Point Decision Matrix

| Situation | Entry Point | Why |
|-----------|-------------|-----|
| Single-domain focused task | Specialist directly | Faster, no orchestration overhead |
| Cross-domain coordination | SDLC Lead | Orchestrator coordinates specialists |
| Unclear which specialist | SDLC Lead | Orchestrator routes to correct specialist |
| Quick question or lookup | Specialist directly | No need for orchestration |
| Artifact requiring multiple specialist inputs | SDLC Lead | Orchestrator merges outputs |
| Certification readiness review | SDLC Lead | Cross-artifact consistency requires orchestrator |
| Urgent single-domain fix | Specialist directly | Speed matters; no coordination overhead |
| Strategic planning session | SDLC Lead | Multiple domains involved, requires coordination |

**Rule of thumb:** If the task touches only one domain and you know which specialist handles it, go directly to that specialist. If the task crosses domains or you are uncertain about routing, use the SDLC Lead.

---

## 5. Human Sign-Off Protocol

### Workflow

1. Agent creates a Git branch for the artifact(s) requiring sign-off
2. Agent produces the artifact(s) and commits to the branch
3. Agent creates a Pull Request with:
   - Clear description of what was produced
   - Which SDLC-v2 sections or ISO clauses the artifact addresses
   - Any open questions or decisions requiring human input
4. Human (typically the CEO) reviews the PR diff
5. Human approves, requests changes, or rejects
6. Upon approval, human merges the PR
7. Git history serves as the audit trail

### Audit Trail Compliance

This workflow satisfies:
- **ISO 27001 cl. 7.5** -- Documented information control (creation, updating, version control, distribution, access, storage, disposition)
- **ISO 42001 cl. 7.5** -- Same documented information requirements applied to AI management system
- **TISAX ISA** -- Traceability of changes to security-relevant documentation

### Sign-Off Authority

| Artifact Type | Sign-Off Authority | Escalation |
|---------------|-------------------|------------|
| IS Policy, AI Policy | CEO (as CISO delegate) | None -- CEO is ultimate authority |
| Risk register entries | CEO | None |
| Risk treatment decisions | CEO | None -- CEO accepts residual risk |
| Architecture decisions (ADRs) | CTO (human) | CEO if cross-domain impact |
| Operational procedures | Relevant domain lead | CEO for security-sensitive procedures |
| Agent definitions (CLAUDE.md) | CEO | None |
| Threat models | CTO (human) + CISO (human) | CEO if risk acceptance required |

---

## 6. Agent Definition Template

Every agent CLAUDE.md file in the system MUST follow this template. This template constrains all downstream agent creation in Phases 2, 4, and 6.

### Required YAML Frontmatter

```yaml
---
name: [role-name]
description: >
  [1-2 sentence description of when to use this agent.
  Include primary domain expertise and key artifact types.]
tools: [comma-separated list: Read, Write, Edit, Bash, Grep, Glob]
model: [opus | sonnet | haiku]
---
```

### Required System Prompt Sections

Every agent CLAUDE.md MUST include ALL of the following sections:

```markdown
# [Agent Role Name] -- Helge Heupel Group

## Identity
You are the [Role Title] for the Helge Heupel Group. You embody 25+ years
of domain expertise in [domain areas]. [Brief description of the agent's
perspective, priorities, and professional identity.]

## Core Responsibilities
- [Responsibility 1 -- specific, not generic]
- [Responsibility 2]
- [Responsibility 3]
- [Additional as needed]

## SDLC-v2 Context
You operate within the Helge Heupel Group SDLC-v2 framework. The full
SDLC-v2 document is available at `agents/shared/SDLC-v2.md`. Read it
when you need context about the full framework.

Key sections for your role:
- Section [X]: [relevant section name and why it matters]
- Section [Y]: [relevant section name and why it matters]

Current operating phase: Startup (see SDLC-v2-Startup.md for applicable
controls and simplifications).

## Output Standards
- All artifacts must be audit-ready for [relevant certifications: ISO 27001, ISO 42001, TISAX]
- Use markdown format with clear section headers
- Include framework references (ISO clause numbers, Annex A control IDs)
- Every recommendation must cite the specific SDLC-v2 section or standard clause
- Name specific HH systems, personnel, and entities (GmbH, B.V., Inc.) -- no generic placeholders

## Collaboration Protocol
- Produce HANDOFF.md (using protocols/handoff-template.md) when work must continue with another agent
- Create branch + PR for all artifacts requiring human sign-off
- Reference patent-sensitive materials by ID only (never inline content)
- Flag items requiring CEO sign-off explicitly with [CEO-SIGNOFF-REQUIRED]
- When producing artifacts that cross domain boundaries, note the dependency and the receiving agent

## Boundaries
- Do NOT produce artifacts outside your domain without flagging the cross-domain dependency
- Do NOT accept risk on behalf of the organization -- flag for human decision
- Do NOT modify SDLC-v2.md -- it is the Growth-phase target state
- Do NOT include patent-sensitive content in any artifact; reference by ID only
- Do NOT make assumptions about other agents' outputs -- verify by reading their artifacts

## Subagent Spawning
When you need focused research or analysis, spawn subagents per
protocols/subagent-protocol.md:
- Clear task description in the spawn prompt
- Appropriate model selection (haiku for lookup, sonnet for analysis, opus for complex drafting)
- Defined tool restrictions (read-only for research, full tools for drafting)
- maxTurns appropriate to task complexity
- Reference file paths, do not paste large documents into spawn prompts
```

### Quality Bar

An agent CLAUDE.md is NOT complete until it:
1. Follows this template exactly (all sections present)
2. References HH-specific context (entities, personnel, systems) -- no generic prompts
3. Includes at least 3 SDLC-v2 section references relevant to the agent's domain
4. Defines clear boundaries (what the agent must NOT do)
5. Specifies output format requirements including audit readiness standards

---

## 7. Communication Protocol

### File-Mediated via Git

All agent communication is file-mediated through Git. There is no real-time messaging between agents. The workflow is asynchronous and human-mediated.

| Communication Type | Mechanism | When |
|-------------------|-----------|------|
| Agent -> Human | PR with artifacts | Artifact requires sign-off |
| Agent -> Agent | HANDOFF.md file | Work continues with another agent |
| Human -> Agent | Load agent + provide context | Starting a session |
| Agent -> Subagent | Task tool spawn prompt | Multi-agent mode (see [subagent-protocol.md](subagent-protocol.md)) |
| Subagent -> Agent | Task tool return value | Subagent completes work |

### HANDOFF.md Protocol

When one agent's work must continue with another agent:

1. Source agent produces a HANDOFF.md using the template in [protocols/handoff-template.md](handoff-template.md)
2. Source agent commits the HANDOFF.md to the working branch
3. CEO reads the HANDOFF.md and evaluates whether to proceed
4. CEO starts a new session with the target agent, providing the HANDOFF.md as context
5. Target agent reads the HANDOFF.md and continues the work

**File naming:** `HANDOFF-[source]-to-[target]-[YYYY-MM-DD].md`
Example: `HANDOFF-ciso-to-cto-2026-03-15.md`

### Patent-Sensitive Material Handling

- Patent-pending innovations (Verity VE, Verity EAM) are stored in a separate repository with stricter access controls
- All SDLC artifacts reference patent-sensitive materials by ID only (e.g., `[PATENT-VE-001]`)
- Agents MUST NEVER inline patent-sensitive content in any artifact
- This aligns with TISAX ISA Chapter 7 (prototype protection)

### Agent Directory Structure

Agents are stored in `agents/` at the project root (not `.claude/agents/`). This prioritizes version control and project portability over Claude Code's auto-discovery mechanism. The CEO loads agents explicitly:

```
agents/
  shared/            # Cross-agent reference documents
    README.md        # This directory's documentation
    SDLC-v2.md       # Copy of SDLC-v2 (when activated)
  sdlc-lead/
    CLAUDE.md        # Agent definition
    reference/       # Domain-specific reference documents
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
```

**Loading an agent:**
```bash
claude --agent agents/ciso/CLAUDE.md
```

---

## Appendix: Glossary

| Term | Definition |
|------|-----------|
| **Standalone mode** | One agent per Claude Code session, operating independently |
| **Multi-agent mode** | SDLC Lead session spawning specialist subagents via Task tool |
| **Subagent** | An agent spawned by another agent via the Task tool within a session |
| **HANDOFF.md** | Structured artifact for cross-agent context passing |
| **Sign-off** | Human approval of an agent-produced artifact via PR merge |
| **Domain boundary** | The scope of an agent's expertise and authorized actions |
| **2-level limit** | Maximum spawning depth: parent session + one subagent level |

---

*Document: protocols/interaction-model.md*
*Version: 1.0 -- Created during Phase 1 Plan 02*
