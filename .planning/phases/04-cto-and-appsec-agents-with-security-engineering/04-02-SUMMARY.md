---
phase: 04-cto-and-appsec-agents-with-security-engineering
plan: 02
subsystem: agents
tags: [claude-code, appsec-agent, threat-modeling, sast, dast, sbom, supply-chain, stride, linddun, semgrep, owasp-zap, cyclonedx, sigstore, slsa]

# Dependency graph
requires:
  - phase: 01-startup-overlay-and-agent-foundation
    provides: "Agent definition template (7-section), agent directory scaffold, subagent protocol, interaction model"
  - phase: 02-ciso-agent-and-is-ai-policy-foundation
    provides: "CISO Agent construction pattern (383 lines, progressive disclosure), IS Policy and AI Policy as upstream constraints"
provides:
  - "AppSec Agent CLAUDE.md -- full 7-section system prompt with security engineering expertise"
  - "Domain context reference document (tooling inventory, threat model registry, Annex A.8 control mapping)"
affects: [phase-04-plan-03-threat-modeling, phase-04-plan-04-sast-dast, phase-04-plan-05-sbom-supply-chain, phase-07-security-architecture, phase-08-audit-readiness, phase-10-agent-documentation]

# Tech tracking
tech-stack:
  added: []
  patterns: [security-engineering-agent-pattern, annex-a8-control-mapping-in-domain-context, upstream-policy-constraint-model]

key-files:
  created:
    - agents/appsec/CLAUDE.md
    - agents/appsec/reference/domain-context.md
  modified: []

key-decisions:
  - "AppSec Agent CLAUDE.md at 304 lines (under 500-line target) using progressive disclosure via reference/ directory"
  - "Domain context focused on security engineering context, not duplicating organizational context from CISO domain-context.md"
  - "AppSec explicitly positioned as operational arm of CISO Agent consuming policies as constraints"
  - "9 Annex A.8 controls mapped plus 2 additional controls (A.5.21, A.5.23) from threat model contributions"
  - "Centralized false positive management approach (semgrepignore + policy file) rather than inline suppressions"
  - "LINDDUN applicability gated by GDPR scope: Claude Code agent system excluded, Verity products included"

patterns-established:
  - "Security engineering agent pattern: lightweight prompt focused on tooling responsibilities + reference/ directory for technical inventories"
  - "Annex A.8 control mapping in domain context: linking agent artifacts directly to SoA controls for traceability"
  - "Upstream policy constraint model: agent consumes CISO policies by document ID, never duplicates or owns them"

requirements-completed: [AGNT-07]

# Metrics
duration: 4min
completed: 2026-02-21
---

# Phase 4 Plan 02: AppSec Agent Construction Summary

**304-line AppSec Agent with 5 security engineering artifact types (threat models, SAST, DAST, SBOM, supply chain), Annex A.8 control mapping, and CISO Agent upstream constraint model**

## Performance

- **Duration:** 4 min
- **Started:** 2026-02-21T21:20:22Z
- **Completed:** 2026-02-21T21:25:21Z
- **Tasks:** 1
- **Files modified:** 2

## Accomplishments

- Full AppSec Agent system prompt replacing placeholder, following the 7-section agent definition template from `protocols/interaction-model.md` Section 6 exactly
- Domain context reference document with 8 sections providing security engineering context (tooling inventory, threat model registry, SAST/DAST status, SBOM/supply chain status, Annex A.8 control mapping, upstream policy constraints, operating phase)
- AppSec Agent positioned as operational arm of CISO Agent with clear domain boundaries: CISO owns policy, CTO owns architecture, AppSec produces security tooling
- 17 core responsibilities covering threat modeling, SAST, DAST, SBOM, supply chain security, dependency scanning, and security testing pipeline integration
- 9 Annex A.8 controls mapped to AppSec artifacts plus 2 additional controls (A.5.21, A.5.23)
- Agent loadable via `claude --agent agents/appsec/CLAUDE.md`

## Task Commits

Each task was committed atomically:

1. **Task 1: Construct AppSec Agent CLAUDE.md and domain context reference** - `dc709a7` (feat)

## Files Created/Modified

- `agents/appsec/CLAUDE.md` -- Full AppSec Agent system prompt (304 lines). 7 required sections + ISO Standard Ownership + Reference Materials. YAML frontmatter with name (appsec), description, tools (Read, Write, Edit, Bash, Grep, Glob), model (opus). 17 numbered core responsibilities across 7 subsections (threat modeling, SAST, DAST, SBOM, supply chain, dependency scanning, pipeline integration). 9 explicit boundaries (do-not-do list). 8 subagent task type examples.
- `agents/appsec/reference/domain-context.md` -- HH-specific security engineering context (188 lines). 8 sections: organization overview (abbreviated, refers to CISO domain-context), security tooling inventory (6 planned tools), threat model registry (2 planned models), SAST/DAST status, SBOM/supply chain status, Annex A.8 control mapping (9 primary + 2 additional), upstream policy constraints (IS Policy + AI Policy by document ID), operating phase and key dates.

## Decisions Made

- **Prompt size (304 lines):** Under the 500-line maximum and within the research estimate of 250-350 lines. Progressive disclosure pattern: system prompt focuses on identity, responsibilities, and operating instructions; detailed technical inventories and control mappings in reference/ directory.
- **ISO Standard Ownership section added:** Beyond the mandatory 7 sections, added an ISO Standard Ownership section documenting the 0 primary + 1 shared standard assignment, consistent with the CISO Agent pattern.
- **Domain context structure:** Followed research recommendation of security-engineering-focused content rather than duplicating organizational context. Section 1 explicitly refers to CISO domain-context.md for full organizational details.
- **Centralized false positive approach:** Chose `.semgrepignore` + `semgrep-policy.yml` + `security/sast-baseline.md` over inline `# nosemgrep` comments, per research discretionary recommendation. Keeps suppression decisions auditable.
- **LINDDUN gating:** Explicit per-system determination based on GDPR scope. Claude Code agent system excluded (processes SDLC artifacts, not personal data). Verity CMS included (may handle user data).

## Deviations from Plan

None -- plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None -- no external service configuration required.

## Next Phase Readiness

- AppSec Agent is now loadable via `claude --agent agents/appsec/CLAUDE.md` and can produce threat models, SAST/DAST configurations, SBOM pipelines, and supply chain security artifacts with HH-specific context
- Plans 04-03 (threat modeling), 04-04 (SAST/DAST), and 04-05 (SBOM/supply chain) can now use the AppSec Agent as their producing agent
- The domain context reference provides security engineering grounding including Annex A.8 control mapping for SoA traceability
- Both CTO Agent (04-01) and AppSec Agent (04-02) are now active, completing Wave 1 of Phase 4

---
*Phase: 04-cto-and-appsec-agents-with-security-engineering*
*Completed: 2026-02-21*

## Self-Check: PASSED

All 2 created files verified on disk. Task commit (dc709a7) verified in git log. SUMMARY.md exists.
