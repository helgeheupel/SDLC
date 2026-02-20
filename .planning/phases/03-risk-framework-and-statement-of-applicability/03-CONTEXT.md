# Phase 3: Risk Framework and Statement of Applicability - Context

**Gathered:** 2026-02-20
**Status:** Ready for planning

<domain>
## Phase Boundary

Establish risk assessment methodology, populate risk register via human workshop with external participants, produce risk treatment plan with CEO sign-off, and create Statement of Applicability covering all 93 ISO 27001 Annex A controls. ISO 42001 Annex A controls are handled in a separate SoA (Phase 5). Risk register is unified (InfoSec + AI risks in one register).

</domain>

<decisions>
## Implementation Decisions

### Risk methodology calibration
- CISO Agent pre-generates 30-50 candidate risks based on HH context (3 entities, AI-heavy SDLC, startup size) for CEO to curate before workshop
- 5x5 matrix with impact Level 5 calibrated to business survival (existential threat: loss of key client, regulatory shutdown, funding collapse)
- Likelihood scale is time-based: Level 1 = less than once per 5 years, up to Level 5 = weekly or more frequent
- Single unified risk register — AI-specific risks tagged with 'AI' category, not in a separate register
- ISO 31000 alignment maintained throughout methodology

### Human workshop design
- Participants: CEO + consultant (BearingPoint or EY as domain advisor) + external contracted CISO from NorthGRC (validation/challenge role)
- External CISO reviews and challenges CEO's ratings — provides 'second opinion' credibility for auditors, not equal co-owner
- Consultant contributes domain expertise on specific risk areas (regulatory, compliance) but CEO drives the session
- Pre-seeded risk draft shared with participants 3-5 days before workshop for advance review
- CISO Agent pre-rates likelihood x impact with rationale; workshop participants validate, adjust, or override
- Single intensive session — identification, rating, and treatment decisions in one workshop
- CISO Agent captures decisions in real-time during workshop (CEO enters decisions, agent validates and commits to register immediately)

### SoA format and justification depth
- Per-control YAML files in Git as source of truth (e.g., soa/A.5.1.yml) — granular Git history per control
- Consolidated single document generated from per-control files for auditor review/handoff
- ISO 27001 SoA and ISO 42001 SoA kept as separate documents (separate SoAs for dual certification)
- ISO 42001 SoA deferred to Phase 5 — this phase produces ISO 27001 SoA only
- Four-level implementation status: Fully Implemented / Partially Implemented / Planned / Not Started

### Risk register schema and lifecycle
- One YAML file per risk (e.g., risks/RISK-OPS-001.yml, risks/RISK-AI-001.yml)
- Category-prefixed IDs with sequential numbering: RISK-{CATEGORY}-{NNN} (e.g., RISK-OPS-001, RISK-AI-001, RISK-REG-001)
- Numbering is sequential (fortlaufend) within each category
- Risk retirement via status field update (keep file in place, set status to 'Retired' with date and reason) — full history preserved
- Role-based ownership (e.g., 'CISO role', 'CTO role') even though CEO fills multiple roles at startup — cleaner for growth transition
- Quarterly formal review cycle for the full register
- Residual risk acceptance: Git PR workflow for working process + formal summary document with CEO signature for auditor package (both)

### Claude's Discretion
- Not-applicable control justification depth (calibrate to auditor expectations for ISO 27001:2022)
- Exact YAML schema field names and structure (~15 fields per Phase 1 decision)
- Risk category taxonomy (which categories exist: OPS, AI, REG, etc.)
- Consolidated SoA document format (Markdown, PDF, or both)
- Workshop agenda and time allocation

</decisions>

<specifics>
## Specific Ideas

- Workshop should produce a fully committed risk register in Git by end of session — no post-session transcription gap
- External CISO from NorthGRC is contracted to Helge Heupel GmbH specifically — this is the entity-level CISO for audit purposes
- The consolidated SoA generation from per-control files should be automated (build script or CISO Agent capability)
- Risk pre-seeding should leverage all existing HH context: 3 entities, 3 jurisdictions, AI-agent SDLC, NIS2 obligations, TISAX scope

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 03-risk-framework-and-statement-of-applicability*
*Context gathered: 2026-02-20*
