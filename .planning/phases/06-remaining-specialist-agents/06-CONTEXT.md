# Phase 6: Remaining Specialist Agents - Context

**Gathered:** 2026-02-22
**Status:** Ready for planning

<domain>
## Phase Boundary

Construct 4 agent CLAUDE.md prompts with reference materials: SDLC Lead Agent (orchestrator), AI Science Agent, Platform/SRE Agent, and Product/Strategy Agent. Each agent operates within the established policy and risk framework from Phases 1-5. This phase creates agent definitions only, not the artifacts those agents will produce in later phases.

</domain>

<decisions>
## Implementation Decisions

### SDLC Lead orchestration
- Lead Agent serves dual role: work router AND quality gatekeeper. It routes tasks to the right specialist and reviews specialist output for SDLC-Growth-v2 compliance before it reaches the CEO.
- Lead spawns specialists as full peer agents (not subagents), so specialists retain autonomy including their own subagent spawning capability.
- Both routing paths available: CEO can go through Lead for multi-agent work, or directly to a specialist for focused tasks. Lead tracks work from either path.
- Conflict resolution by policy: Lead resolves inter-agent disagreements using SDLC-Growth-v2 rules and established policies. Escalates to CEO only when policy is ambiguous.

### Agent scope boundaries
- AI Science Agent has strict ownership: model evaluation and AI research only. CISO keeps all ISO 42001 governance, CTO keeps all architecture. No overlapping responsibilities.
- CTO owns infrastructure architecture including SLO targets and observability strategy. Platform/SRE implements and operates what CTO designs.
- Product/Strategy prepares strategic communications (BearingPoint materials, board updates, etc.), CEO reviews and sends. Agent drafts, human approves.
- Same cross-domain dependency flagging pattern ([AGENT-DEPENDENCY]) used consistently across all agents. Lead Agent tracks and routes these.

### Domain context per agent
- SDLC Lead: Full orchestrator context combining SDLC-Growth-v2 compliance rules, agent registry (all 6 specialists with capabilities and boundaries), governance model (RACI, meetings, gates), and roadmap awareness.
- AI Science: Current AI landscape (11 registered AI systems, EU AI Act classifications, evaluation criteria) PLUS Verity product AI roadmap (VE/EAM) to advise proactively on AI research and model selection.
- Platform/SRE: Current tech stack (Azure, Vercel, Neon, GitHub Actions) plus AI tooling context (Claude, Claude Code, Claude Cowork, ChatGPT, Codex) and ARIS (Software AG) for organisational structure and process documentation (BPML).
- Product/Strategy: Full HH Group view including entity structure (GmbH, B.V., Inc.), all product lines, BearingPoint consulting relationship, EY consulting relationship, TISAX automotive context, and strategic goals.

### Prompt structure and depth
- Lead Agent gets expanded structure: CLAUDE.md (under 500 lines) + reference/ directory with multiple files (agent-registry.md, routing-rules.md, etc.). Orchestration logic in reference files, not inline.
- AI Science, Platform/SRE, and Product/Strategy follow standard pattern: CLAUDE.md (under 400 lines each) + reference/domain-context.md. Consistent with CISO, CTO, AppSec.
- Each agent's CLAUDE.md explicitly lists which SDLC-Growth-v2 sections it is responsible for, matching the pattern established by CTO and AppSec agents.

### Claude's Discretion
- Internal structure of reference/ files for each agent
- Exact section ordering within CLAUDE.md prompts
- Which SDLC-Growth-v2 sections map to which agent (analysis task)
- Progressive disclosure strategy per agent

</decisions>

<specifics>
## Specific Ideas

- Lead Agent spawns specialists as teammates (peer agents), not as constrained subagents, so each specialist can spawn its own subagents freely
- ARIS (Software AG, BPML) is in the tooling landscape and should appear in Platform/SRE domain context
- EY consulting relationship should appear alongside BearingPoint in Product/Strategy context
- Verity AI roadmap (VE and EAM product AI features) gives AI Science forward-looking context beyond current registered systems

</specifics>

<deferred>
## Deferred Ideas

None, discussion stayed within phase scope.

</deferred>

---

*Phase: 06-remaining-specialist-agents*
*Context gathered: 2026-02-22*
