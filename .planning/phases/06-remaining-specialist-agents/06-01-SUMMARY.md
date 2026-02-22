---
phase: 06-remaining-specialist-agents
plan: 01
subsystem: agents
tags: [ai-science, claude-agent, model-evaluation, fairness, iso-42001, iea-v2]

# Dependency graph
requires:
  - phase: 02-ciso-agent-and-is-ai-policy-foundation
    provides: CISO Agent pattern (11-section CLAUDE.md + reference/domain-context.md)
  - phase: 04-cto-appsec-agents-and-security-engineering
    provides: CTO and AppSec Agent patterns confirming established structure
  - phase: 05-aims-core-and-ai-system-registry
    provides: AI Registry with 11 systems, AI risk assessment, ISO 42001 Annex A controls
provides:
  - AI Science Agent CLAUDE.md (338 lines, 17 responsibilities, 9 primary ISO standards)
  - AI Science Agent domain context (11 AI systems, Verity AI roadmap, model evaluation criteria)
affects: [06-04 (SDLC Lead needs agent-registry entry for AI Science), phase-07 (AI governance evidence)]

# Tech tracking
tech-stack:
  added: []
  patterns: [ai-science-agent-pattern, technical-vs-governance-ownership-boundary]

key-files:
  created:
    - agents/ai-science/reference/domain-context.md
  modified:
    - agents/ai-science/CLAUDE.md

key-decisions:
  - "AI Science sections 8 (IEA v2) and 9.4 (AI-specific testing) mapped as primary ownership using V2 numbering"
  - "Technical vs governance ownership qualifier: AI Science owns evaluation methodologies, CISO owns management system artifacts"
  - "Startup AI testing simplified to prompt injection resistance and hallucination rate; full model evaluation deferred to Growth"

patterns-established:
  - "Technical-governance boundary: AI Science provides technical inputs, CISO packages into audit-ready governance artifacts"
  - "Abbreviated domain context pattern: reference CISO domain-context for org details, specialize for domain"

requirements-completed: [AGNT-04]

# Metrics
duration: 5min
completed: 2026-02-22
---

# Phase 06 Plan 01: AI Science Agent Summary

**AI Science Agent with 338-line CLAUDE.md (17 responsibilities, 9 ISO standards) and domain context covering 11 AI systems, Verity AI roadmap, and model evaluation criteria (Fairlearn, SHAP/LIME, drift detection)**

## Performance

- **Duration:** 5 min
- **Started:** 2026-02-22T22:32:53Z
- **Completed:** 2026-02-22T22:37:53Z
- **Tasks:** 2
- **Files modified:** 2

## Accomplishments
- Full AI Science Agent CLAUDE.md following the established 11-section pattern at 338 lines (under 400 target)
- Domain context with comprehensive AI landscape covering all 11 registered AI systems
- Strict scope boundaries preventing overlap with CISO (governance), CTO (architecture), AppSec (security tooling), and Product/Strategy (decisions)
- Model evaluation criteria section covering performance, fairness (Fairlearn), robustness, explainability (SHAP/LIME), and drift detection

## Task Commits

Each task was committed atomically:

1. **Task 1: Create AI Science Agent CLAUDE.md** - `2500163` (feat)
2. **Task 2: Create AI Science Agent domain context** - `da108a6` (feat)

## Files Created/Modified
- `agents/ai-science/CLAUDE.md` - Full 338-line agent prompt with 17 numbered responsibilities across 7 subsections, 9 primary ISO standards, and strict scope boundaries
- `agents/ai-science/reference/domain-context.md` - 8-section domain context with AI system landscape (11 systems), Verity AI roadmap, model evaluation criteria, AI toolchain inventory, and key constraints

## Decisions Made
- **SDLC-Growth-v2 section numbering:** Used V2 section numbers (Section 8 for IEA v2, Section 9.4 for AI-specific testing) consistent with research recommendation, not V1 numbering from agent qualifications
- **Technical vs governance boundary:** Explicit ownership qualifier throughout: AI Science owns technical evaluation methodologies; CISO owns management system aspects. This mirrors the CTO-AppSec boundary (CTO designs, AppSec implements)
- **Startup simplification:** AI-specific testing at Startup focuses on prompt injection resistance and hallucination rate only; full model evaluation deferred to Growth when Verity product AI enters production

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- AI Science Agent can be loaded via `claude --agent agents/ai-science/CLAUDE.md` and self-identifies as Head of AI Science
- Agent correctly refuses to produce governance artifacts (AIMS scope, AI Policy, risk register entries)
- Domain context grounds the agent in HH-specific AI landscape for autonomous operation
- Ready for Plan 02 (Platform/SRE Agent), Plan 03 (Product/Strategy Agent), and Plan 04 (SDLC Lead Agent which needs AI Science in its agent-registry.md)

## Self-Check: PASSED

- FOUND: agents/ai-science/CLAUDE.md
- FOUND: agents/ai-science/reference/domain-context.md
- FOUND: 06-01-SUMMARY.md
- FOUND: commit 2500163 (Task 1)
- FOUND: commit da108a6 (Task 2)

---
*Phase: 06-remaining-specialist-agents*
*Completed: 2026-02-22*
