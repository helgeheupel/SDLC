---
phase: 02-ciso-agent-and-is-ai-policy-foundation
plan: 01
subsystem: agents
tags: [claude-code, ciso-agent, iso-27001, iso-42001, isms, aims, compliance, ai-governance, system-prompt]

# Dependency graph
requires:
  - phase: 01-startup-overlay-and-agent-foundation
    provides: "Agent definition template (7-section), agent directory scaffold, subagent protocol, interaction model"
provides:
  - "CISO Agent CLAUDE.md -- full 7-section system prompt with 5-archetype expertise"
  - "Domain context reference document (HH entities, personnel, systems, compliance status)"
  - "SDLC-Growth-v2.md copied to agents/shared/ for on-demand agent reference"
affects: [phase-02-plan-02-ims-is-policy, phase-02-plan-03-ai-policy-doccontrol, phase-03-risk-framework, phase-04-cto-appsec-agents, phase-05-aims-core, phase-07-security-architecture, phase-08-audit-readiness, phase-10-agent-documentation]

# Tech tracking
tech-stack:
  added: []
  patterns: [progressive-disclosure-agent-prompt, reference-directory-pattern, 5-archetype-composite]

key-files:
  created:
    - agents/ciso/CLAUDE.md
    - agents/ciso/reference/domain-context.md
    - agents/shared/SDLC-Growth-v2.md
  modified: []

key-decisions:
  - "CISO Agent CLAUDE.md at 383 lines (well under 2000-line target) -- progressive disclosure via reference/ directory"
  - "Domain context document structured as 8 sections covering org, personnel, agents, products, tech stack, compliance, operating phase, constraints"
  - "ISO 27001 and ISO 42001 balanced equally in Identity section -- neither subordinated"
  - "US compliance explicitly marked advisory-only with 5 frameworks (FedRAMP, SOC 2, NIST 800-53, CCPA, OSCAL) carried but deferred"
  - "Human CISO substitution model with [CISO-REVIEW-ON-RETURN] flag for items needing review"
  - "Cross-domain dependency flagging pattern: [CTO-DEPENDENCY], [APPSEC-DEPENDENCY], [AI-SCIENCE-DEPENDENCY], [PLATFORM-DEPENDENCY]"

patterns-established:
  - "Agent CLAUDE.md with progressive disclosure: lightweight prompt (383 lines) + reference/ directory for domain context"
  - "Domain context document pattern: HH-specific context organized into 8 standard sections for agent grounding"
  - "5-archetype composite agent: 4 active + 1 advisory with clear deferred-scope markers"
  - "Dual-certification balance: equal weight on ISO 27001 and ISO 42001 in agent identity"

requirements-completed: [AGNT-03]

# Metrics
duration: 5min
completed: 2026-02-19
---

# Phase 2 Plan 01: CISO Agent Construction Summary

**5-archetype CISO Agent (EU-CA + AIGO + US-CA advisory + CFCI + RMA) with 383-line system prompt, 13 primary ISO standards, balanced ISO 27001/42001 dual-certification focus, and HH-specific domain context reference**

## Performance

- **Duration:** 5 min
- **Started:** 2026-02-19T13:44:10Z
- **Completed:** 2026-02-19T13:49:43Z
- **Tasks:** 1
- **Files modified:** 3

## Accomplishments

- Full CISO Agent system prompt replacing placeholder, following the 7-section agent definition template from `protocols/interaction-model.md` Section 6 exactly
- Domain context reference document with 8 sections providing HH-specific grounding (entities, personnel, agents, products, tech stack, compliance status, operating phase, constraints)
- SDLC-Growth-v2.md copied to agents/shared/ so the agent can read the full framework on demand
- All 5 source archetypes represented with clear active/advisory status markers
- ISO 27001 and ISO 42001 balanced equally in the agent's identity -- neither subordinated to the other
- 10 SDLC-Growth-v2 section references in the agent prompt (Sections 4, 5, 8.2, 9, 10.2, 10.3, 13.1, 13.2, 13.3, 13.4)
- 16 core responsibilities specific to HH (not generic), covering ISMS, AIMS, risk, NIS2, TISAX, cross-framework integration, and document control
- Human CISO substitution model with CEO oversight and flagging protocol
- Agent loadable via `claude --agent agents/ciso/CLAUDE.md`

## Task Commits

Each task was committed atomically:

1. **Task 1: Construct CISO Agent CLAUDE.md and domain context reference** - `067062c` (feat)

## Files Created/Modified

- `agents/ciso/CLAUDE.md` -- Full CISO Agent system prompt (383 lines). 7 required sections + ISO Standard Ownership + US Compliance (Advisory) + Reference Materials. YAML frontmatter with name, description, tools (Read, Write, Edit, Bash, Grep, Glob), model (opus).
- `agents/ciso/reference/domain-context.md` -- HH-specific domain context (155 lines). 8 sections: organization overview (3 entities), personnel (6 humans), AI agent roster (7 agents), products (Verity VE/EAM), technology stack (Azure, M365, NorthGRC, Linear, Float, Claude Code), compliance status (TISAX certified, ISO 27001/42001 in progress, NIS2 required), operating phase (Startup), key constraints (12-week timeline, EU-first, 4 classification levels).
- `agents/shared/SDLC-Growth-v2.md` -- Copy of root SDLC-Growth-v2.md (7434 lines) for on-demand agent reference.

## Decisions Made

- **Prompt size (383 lines):** Well under the 2000-line maximum from research. Used progressive disclosure pattern: lightweight system prompt focused on identity, responsibilities, and operating instructions; detailed domain content delegated to reference/ directory and existing phase1/phase2 documents. This preserves context window budget for conversation and artifact generation.
- **10 additional sections beyond the 7-section template:** Added ISO Standard Ownership (13 primary + 8 secondary), US Compliance (Advisory Only), and Reference Materials as supplementary sections. These extend rather than replace the mandatory 7-section template.
- **Cross-domain dependency flagging:** Established tag pattern ([CTO-DEPENDENCY], [APPSEC-DEPENDENCY], etc.) for the CISO Agent to mark outputs that affect other agents' domains. Not in the original plan but follows naturally from the collaboration protocol design.
- **Domain context as separate file:** Created `agents/ciso/reference/domain-context.md` rather than inlining context in the system prompt. This keeps the prompt focused and allows the context to be updated independently.

## Deviations from Plan

None -- plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None -- no external service configuration required.

## Next Phase Readiness

- CISO Agent is now loadable via `claude --agent agents/ciso/CLAUDE.md` and can produce security, compliance, risk, and AI governance artifacts with HH-specific context
- Plans 02-02 (IMS Context + IS Policy + ISMS Scope) and 02-03 (AI Policy + Document Control) can now use the CISO Agent as their producing agent
- The domain context reference provides compact HH-specific grounding for any session
- All phase1/ and phase2/ gap analysis and section draft documents are referenced by path in the agent's Reference Materials section

---
*Phase: 02-ciso-agent-and-is-ai-policy-foundation*
*Completed: 2026-02-19*

## Self-Check: PASSED

All 3 created files verified on disk. Task commit (067062c) verified in git log. SUMMARY.md exists.
