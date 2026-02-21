---
phase: 04-cto-and-appsec-agents-with-security-engineering
plan: 01
subsystem: agents
tags: [claude-code, cto-agent, architecture, ai-engineering, azure, security-architecture, system-prompt, adrs]

# Dependency graph
requires:
  - phase: 01-startup-overlay-and-agent-foundation
    provides: "Agent definition template (7-section), agent directory scaffold, subagent protocol, interaction model"
  - phase: 02-ciso-agent-and-is-ai-policy-foundation
    provides: "CISO Agent construction pattern (383-line CLAUDE.md + domain-context.md), IS Policy as constraint"
provides:
  - "CTO Agent CLAUDE.md -- full 7-section system prompt with 4-archetype expertise and security-architecture dual identity"
  - "Domain context reference document (HH entities, tech stack, products, ADR registry, technical constraints)"
affects: [phase-04-plan-02-appsec-agent, phase-04-plan-03-threat-models, phase-05-aims-core, phase-06-remaining-agents, phase-07-operational-controls, phase-10-agent-documentation]

# Tech tracking
tech-stack:
  added: []
  patterns: [4-archetype-composite-agent, security-architecture-dual-identity, adr-registry-in-domain-context, expanded-tech-stack-section]

key-files:
  created:
    - agents/cto/CLAUDE.md
    - agents/cto/reference/domain-context.md
  modified: []

key-decisions:
  - "CTO Agent CLAUDE.md at 321 lines (well under 500-line target) -- progressive disclosure via reference/ directory"
  - "Security-architecture dual identity as locked decision: equal weight on architecture decisions AND security engineering review"
  - "Strict CTO-AppSec boundary: CTO owns ADRs and architecture, AppSec owns threat models, SAST/DAST, SBOM, supply chain"
  - "Domain context includes ADR registry section (initially empty, populates as CTO Agent produces ADRs)"
  - "Expanded Technology Stack section in domain-context.md covering frontend, backend, hosting, cloud, development toolchain, and project management"
  - "Cross-domain dependency flagging pattern: [CISO-DEPENDENCY], [APPSEC-DEPENDENCY], [AI-SCIENCE-DEPENDENCY], [PLATFORM-DEPENDENCY]"

patterns-established:
  - "4-archetype composite agent: PSA + CAIE + PACA + partial PUX with security-architecture dual identity"
  - "ADR registry as living section in domain-context.md -- populates over time rather than being pre-filled"
  - "Expanded tech stack section pattern: detailed architecture context beyond what CISO domain-context.md covers"
  - "Security architecture review protocol: CTO reviews AppSec outputs before they become organizational standards"

requirements-completed: [AGNT-02]

# Metrics
duration: 5min
completed: 2026-02-21
---

# Phase 4 Plan 01: CTO Agent Construction Summary

**4-archetype CTO Agent (PSA + CAIE + PACA + partial PUX) with 321-line system prompt, 10 primary ISO standards, security-architecture dual identity, and HH-specific technical domain context with ADR registry**

## Performance

- **Duration:** 5 min
- **Started:** 2026-02-21T21:20:22Z
- **Completed:** 2026-02-21T21:25:09Z
- **Tasks:** 1
- **Files modified:** 2

## Accomplishments

- Full CTO Agent system prompt replacing placeholder, following the 7-section agent definition template from `protocols/interaction-model.md` Section 6 exactly
- Domain context reference document with 8 sections providing HH-specific technical architecture grounding (entities, personnel, agents, products, expanded tech stack, ADR registry, operating phase, technical constraints)
- Security-architecture dual identity explicitly stated in Identity section with equal weight on architecture decisions and security engineering
- Strict CTO-AppSec boundary enforced: CTO reviews security architecture, AppSec produces security tooling artifacts
- All 4 source archetypes represented from `protocols/agent-qualifications.md` Section 2.2
- 4 SDLC-Growth-v2 section references (Sections 7, 8, 10, 11) matching CTO agent's section ownership
- 9 core responsibilities specific to HH, covering architecture decisions, technology evaluation, security architecture review, AI system design, CI/CD pipeline design, platform architecture, developer experience, and process maturity
- Agent loadable via `claude --agent agents/cto/CLAUDE.md`

## Task Commits

Each task was committed atomically:

1. **Task 1: Construct CTO Agent CLAUDE.md and domain context reference** - `8d65bd3` (feat)

## Files Created/Modified

- `agents/cto/CLAUDE.md` -- Full CTO Agent system prompt (321 lines). 7 required sections + ISO Standard Ownership + Reference Materials. YAML frontmatter with name, description, tools (Read, Write, Edit, Bash, Grep, Glob), model (opus). Security-architecture dual identity in Identity section. 9 numbered core responsibilities. ADR format specified in Output Standards.
- `agents/cto/reference/domain-context.md` -- HH-specific technical domain context (187 lines). 8 sections: organization overview (3 entities with technology ownership), personnel (6 humans with architecture relevance), AI agent roster (7 agents with CTO relationship notes), products (Verity VE/EAM with patent IDs), expanded technology stack (frontend, backend, hosting, cloud, development toolchain, project management), ADR registry (initially empty), operating phase (Startup), technical constraints (12-week timeline, pnpm workspaces, serverless deployment, EU data residency, AIMS governance).

## Decisions Made

- **Prompt size (321 lines):** Under the CISO Agent's 383 lines and well under the 500-line target. CTO Agent has fewer archetypes (4 vs 5) and no US compliance advisory section, keeping it more compact. Progressive disclosure via reference/ directory handles detailed content.
- **ADR registry in domain-context.md:** Added a Section 6 (Architecture Decision Records) that starts empty and populates as the CTO Agent produces ADRs. This provides a living index without pre-filling fictional entries.
- **Expanded tech stack section:** Domain-context.md Section 5 goes deeper than the CISO Agent's tech stack table, breaking it into Frontend, Backend, Hosting and Deployment, Cloud Infrastructure, Development Toolchain, and Task/Project Management subsections. This gives the CTO Agent the detailed architecture context it needs for technology evaluations and ADRs.
- **Cross-domain dependency flagging:** Adopted the same tag pattern as the CISO Agent ([CISO-DEPENDENCY], [APPSEC-DEPENDENCY], etc.) for consistency across the agent system.

## Deviations from Plan

None -- plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None -- no external service configuration required.

## Next Phase Readiness

- CTO Agent is now loadable via `claude --agent agents/cto/CLAUDE.md` and can produce architecture decisions, ADRs, technology evaluations, and AI system design artifacts with HH-specific context
- Plan 04-02 (AppSec Agent) can follow the same construction pattern, using both CISO Agent and CTO Agent as reference patterns
- The domain context reference provides detailed technical architecture grounding for any CTO Agent session
- Security architecture review protocol is defined: CTO reviews AppSec outputs before they become organizational standards

---
*Phase: 04-cto-and-appsec-agents-with-security-engineering*
*Completed: 2026-02-21*

## Self-Check: PASSED

All 2 created files verified on disk. Task commit (8d65bd3) verified in git log. SUMMARY.md exists.
