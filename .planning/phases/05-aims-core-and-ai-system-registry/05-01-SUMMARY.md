---
phase: 05-aims-core-and-ai-system-registry
plan: 01
subsystem: ai-governance
tags: [iso-42001, ai-registry, yaml, js-yaml, eu-ai-act, aims, annex-a]

# Dependency graph
requires:
  - phase: 02-ciso-agent-and-is-ai-policy-foundation
    provides: "AI Policy (HH-AIMS-POL-001) defining AI system categories and governance framework"
  - phase: 02-ciso-agent-and-is-ai-policy-foundation
    provides: "AIMS Scope statements listing all 11 AI systems"
  - phase: 03-risk-framework-and-statement-of-applicability
    provides: "Risk register YAML pattern and 36 pre-seeded risks including 7 AI risks"
  - phase: 03-risk-framework-and-statement-of-applicability
    provides: "SoA consolidation script pattern (soa/scripts/generate-soa.js)"
  - phase: 04-cto-and-appsec-agents-with-security-engineering
    provides: "CTO and AppSec agent definitions for registry entries"
provides:
  - "11 per-system AI registry YAML files in ai-registry/"
  - "Registry consolidation script generating AI-Registry-Summary.md"
  - "24-field ISO 42001 Annex A.4.2 schema for AI system documentation"
  - "Control applicability matrix linking systems to ISO 42001 Annex A controls"
affects: [05-02, 05-03, 05-04, 06-sdlc-lead-agent, 07-operational-controls]

# Tech tracking
tech-stack:
  added: [js-yaml (ai-registry/scripts)]
  patterns: [per-system YAML registry, consolidation script generating Markdown, control applicability matrix]

key-files:
  created:
    - ai-registry/AI-AGENT-001.yml
    - ai-registry/AI-AGENT-002.yml
    - ai-registry/AI-AGENT-003.yml
    - ai-registry/AI-AGENT-004.yml
    - ai-registry/AI-AGENT-005.yml
    - ai-registry/AI-AGENT-006.yml
    - ai-registry/AI-AGENT-007.yml
    - ai-registry/AI-3PARTY-001.yml
    - ai-registry/AI-3PARTY-002.yml
    - ai-registry/AI-PROD-001.yml
    - ai-registry/AI-PROD-002.yml
    - ai-registry/scripts/generate-registry-summary.js
    - ai-registry/scripts/package.json
    - ai-registry/AI-Registry-Summary.md
  modified: []

key-decisions:
  - "24-field YAML schema per registry entry covering system identity, EU AI Act classification, SDLC tier, data I/O, controls, and lifecycle"
  - "Three categories (development-ai, third-party-ai, product-ai) matching AI Policy Section 1 taxonomy"
  - "Product AI systems (VE, EAM) have 36 applicable controls; third-party tools have 5-6; agents have 10-19 reflecting actual governance needs"
  - "Separate consolidation script (not extending soa/scripts/generate-soa.js) avoids risk to working ISO 27001 output"

patterns-established:
  - "AI-AGENT-NNN / AI-3PARTY-NNN / AI-PROD-NNN ID convention for registry entries"
  - "Per-system YAML with YAML front-matter style (--- delimiters) consistent with risk register and SoA"
  - "Control applicability matrix in generated summary showing system-to-control mapping"
  - "Consolidation script pattern: read YAML source of truth, generate auditor-facing Markdown"

requirements-completed: [AIMS-02]

# Metrics
duration: 6min
completed: 2026-02-22
---

# Phase 5 Plan 1: AI System Registry Summary

**11 per-system YAML registry entries with 24-field ISO 42001 schema plus Node.js consolidation script generating auditor-facing summary document (HH-AIMS-REG-001)**

## Performance

- **Duration:** 6 min
- **Started:** 2026-02-21T23:50:18Z
- **Completed:** 2026-02-21T23:56:59Z
- **Tasks:** 2
- **Files modified:** 15

## Accomplishments

- Created 11 AI system registry YAML entries: 7 development-ai agents, 2 third-party-ai tools, 2 product-ai systems, each with unique system-specific content across all 24 fields
- Built Node.js consolidation script generating AI-Registry-Summary.md with statistics, per-category tables, system details, and control applicability matrix
- Established control applicability mapping: product AI has 36 applicable controls (full lifecycle), agents have 10-19 (varies by domain), third-party tools have 5-6 (use and supplier controls only)

## Task Commits

Each task was committed atomically:

1. **Task 1: Create 11 AI System Registry YAML entries** - `5bc415b` (feat)
2. **Task 2: Create registry consolidation script and generate summary** - `028e003` (feat)

## Files Created/Modified

- `ai-registry/AI-AGENT-001.yml` - CISO Agent registry entry (18 applicable controls, 3 risk refs)
- `ai-registry/AI-AGENT-002.yml` - CTO Agent registry entry (19 applicable controls, 3 risk refs)
- `ai-registry/AI-AGENT-003.yml` - SDLC Lead Agent registry entry (10 controls, development lifecycle)
- `ai-registry/AI-AGENT-004.yml` - AI Science Agent registry entry (13 controls, bias/fairness focus)
- `ai-registry/AI-AGENT-005.yml` - Platform/SRE Agent registry entry (12 controls, operations focus)
- `ai-registry/AI-AGENT-006.yml` - Product/Strategy Agent registry entry (10 controls, product governance)
- `ai-registry/AI-AGENT-007.yml` - AppSec Agent registry entry (16 controls, security engineering)
- `ai-registry/AI-3PARTY-001.yml` - ChatGPT registry entry (5 controls, tier-1 assistant)
- `ai-registry/AI-3PARTY-002.yml` - Codex registry entry (6 controls, code generation)
- `ai-registry/AI-PROD-001.yml` - Verity VE AI registry entry (36 controls, full lifecycle governance)
- `ai-registry/AI-PROD-002.yml` - Verity EAM AI registry entry (36 controls, full lifecycle governance)
- `ai-registry/scripts/generate-registry-summary.js` - Consolidation script (reads YAML, generates Markdown)
- `ai-registry/scripts/package.json` - Script dependencies (js-yaml ^4.1.0)
- `ai-registry/AI-Registry-Summary.md` - Generated auditor-facing summary document (HH-AIMS-REG-001)

## Decisions Made

- **24-field schema:** Adapted Growth-phase 17-field schema with 7 additional fields (eu-ai-act-rationale, sdlc-usage-tier, transparency-information, deployment-entities, conformity-status, created-date, last-updated) for full ISO 42001 coverage
- **Control applicability varies by system type:** Product AI gets all applicable controls (A.5 impact, A.6 lifecycle, A.7 data, A.8 information, A.9 use, A.10 third-party); third-party tools get primarily A.9 and A.10; agent controls vary by domain specialization
- **Separate consolidation script:** Created ai-registry/scripts/generate-registry-summary.js as independent script rather than extending soa/scripts/generate-soa.js, avoiding risk to working ISO 27001 SoA generation
- **Risk reference differentiation:** Each system references risks specific to its domain (CISO: RISK-AI-001 compliance advice; CTO: RISK-AI-007 API dependency; AppSec: RISK-SEC-005 secret exposure; Product: RISK-AI-004/005/006 hallucination, bias, drift)

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- AI System Registry complete and ready for cross-referencing from ISO 42001 Annex A control mapping (Plan 3)
- Registry entries include risk-references linking to Phase 3 risk register
- Registry entries include applicable-controls field ready for ISO 42001 SoA (Plan 3)
- Consolidation script pattern established for reuse in AIMS SoA generation

## Self-Check: PASSED

- All 14 created files verified present on disk
- Both task commits verified in Git history (5bc415b, 028e003)

---
*Phase: 05-aims-core-and-ai-system-registry*
*Completed: 2026-02-22*
