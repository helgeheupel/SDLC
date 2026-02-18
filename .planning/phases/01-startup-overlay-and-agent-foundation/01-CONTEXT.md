# Phase 1: Startup Overlay and Agent Foundation - Context

**Gathered:** 2026-02-18
**Status:** Ready for planning

<domain>
## Phase Boundary

Create the Startup SDLC companion document (per-control mapping of SDLC-v2 to Startup/Growth/Enterprise phases) and define the agent infrastructure foundation (interaction model, subagent protocol, directory structure). This phase does NOT create the actual agents — it creates the framework they operate within.

</domain>

<decisions>
## Implementation Decisions

### Startup SDLC Companion Document
- **Format:** Standalone companion document ("SDLC-v2-Startup.md"), not an edit to SDLC-v2.md — references v2 sections but stands alone as the operative guide
- **Naming convention:** "Startup SDLC", "Growth SDLC", "Enterprise SDLC" — these are the three phases, not "NOW/Growth/Enterprise"
- **Granularity:** Per-control mapping — every individual control, gate, and artifact in SDLC-v2 mapped to Startup/Growth/Enterprise with justifications (300+ entries)
- **SDLC-v2 preserved:** V2 remains the Growth SDLC target state; the Startup SDLC is a companion that says "for now, do this subset"
- **Product development integration:** Verity VE and Verity EAM product development (including patent-pending innovations) flows through the same SDLC phases (Orient → Requirements → Development etc.) alongside compliance work — integrated, not parallel tracks
- **Patent-sensitive artifacts:** Kept in a separate repo with stricter access controls; SDLC references them by ID only. Aligned with TISAX prototype protection (ISA Chapter 7)

### Role-to-Human Mapping (6 humans, not 5)
- **CEO (Helge Heupel):** Orchestrator + covers CISO responsibilities + Product/Strategy (with Strategy Partner). Ultimate sign-off authority for ALL policies and risk acceptance
- **Strategy Partner:** Product/Strategy Lead (with CEO)
- **Finance Industry Senior Manager:** Advisory role
- **IT Pentester/Super Admin (Azure):** Platform/SRE role (Head of Platform)
- **CTO:** Architecture + AI Engineering (CTO role)
- **CISO (dedicated, 6th person):** Security + EU Compliance + AI Governance
- RACI must reflect that CEO has dual functional role (CISO responsibilities + Product) alongside orchestration

### Agent Interaction Model
- **Entry point:** Context-dependent — SDLC Lead for complex multi-agent orchestration; direct specialist access for focused single-domain tasks
- **Session model:** Both standalone and multi-agent — standalone sessions (one agent per Claude Code session) for focused work; multi-agent via SDLC Lead spawning specialists via Task tool for cross-domain tasks
- **Handoff protocol:** Explicit handoff — Agent A produces a HANDOFF.md summarizing what it did + what Agent B needs; CEO passes it to Agent B
- **Human sign-off:** PR-based — agents create branch + PR; human reviews and merges; Git history = audit trail
- **Human substitution:** Agents serve as human substitutes when consultants are unavailable — CEO must be able to run the full SDLC process with agents alone

### Agent Directory Structure
- **Location:** Per-agent directories under `agents/` — each with its own CLAUDE.md + reference docs
- **Naming:** By role — `agents/sdlc-lead/`, `agents/cto/`, `agents/ciso/`, `agents/ai-science/`, `agents/platform-sre/`, `agents/product-strategy/`, `agents/appsec/`
- **Context:** Full SDLC-v2 document available to every agent (7,434 lines) — not section-filtered
- **Subagent spawning:** Protocol to be defined in this phase — governs when/how agents spawn subagents, context passing, result collection, token budget governance

### Claude's Discretion
- Exact HANDOFF.md template structure
- Subagent spawning token budget thresholds
- Internal organization of each agent's reference docs within their directory
- How the Startup SDLC companion document cross-references SDLC-v2 section numbers

</decisions>

<specifics>
## Specific Ideas

- The CTO/CISO expert assessment explicitly recommended collapsing 8 executive archetypes to 5 humans + AI agents to prevent "decision latency, artificial handoffs, policy inflation, documentation over velocity"
- Each AI meta-agent should be capable of spawning subagents — e.g., CISO spawns a "NIS2 gap analysis" subagent, CTO spawns an "ADR review" subagent
- The agent system must be designed so that "startups don't die from coordination overhead — not from missing ISO clauses"
- Agents must produce artifacts compatible with NorthGRC evidence management
- CEO uses Linear for task management and Float for product management — agents should integrate with these tools
- AI tooling ecosystem includes Claude (Code, Cowork), ChatGPT, and Codex — agents designed for Claude Code but the workflow must coexist with other tools

</specifics>

<deferred>
## Deferred Ideas

- Verity VE/EAM product development specifics — separate project; agents will support it but product scope is not defined here
- Cross-agent consistency engine (auto-detect contradictions across agent outputs) — v2 differentiator
- Agent self-governance documentation (agents producing their own ISO 42001 registry entries) — v2 differentiator
- Automated evidence chain from Git to NorthGRC — v2 differentiator
- ChatGPT/Codex-specific agent definitions — agents designed for Claude Code; other tools used separately

</deferred>

---

*Phase: 01-startup-overlay-and-agent-foundation*
*Context gathered: 2026-02-18*
