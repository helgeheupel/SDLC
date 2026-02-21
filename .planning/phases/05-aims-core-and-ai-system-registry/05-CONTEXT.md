# Phase 5: AIMS Core and AI System Registry - Context

**Gathered:** 2026-02-22
**Status:** Ready for planning

<domain>
## Phase Boundary

Produce the AI Management System core artifacts: AI System Registry with full entries for all AI systems, AI risk and impact assessment processes, ISO 42001 Annex A control mapping (A.2 through A.10), and AIMS PDCA documentation integrated into the existing IMS. This phase builds on the AI Policy (Phase 2) and risk methodology (Phase 3) to create the ISO 42001 certification backbone.

</domain>

<decisions>
## Implementation Decisions

### Registry scope and depth
- Register ALL AI systems: 7 Claude Code agents, all third-party AI tools (Claude API, GitHub Copilot, ChatGPT, etc.), AND Verity product AI (VE/EAM)
- Full ISO 42001 schema for every system: system ID, intended use, risk classification, data I/O, human oversight, transparency, lifecycle status, applicable controls
- Verity product AI gets full registry entries (not placeholders) alongside agents and third-party tools
- YAML-in-Git as source of truth (one YAML file per AI system), with consolidation script generating Markdown summaries for auditor consumption
- Pattern consistent with Phase 3 risk register approach

### AI risk/impact assessment
- Formal procedure documents with numbered steps, roles, triggers, decision trees, and forms/templates
- AI impact assessment follows ISO 42005 structure closely, with HH-specific content filled in (auditors recognize the structure)
- Assessment triggers: event-driven (new AI system, major change, incident) PLUS annual periodic review cycle
- Reuse existing Phase 3 5x5 likelihood/impact matrix with the AI-specific 5th impact dimension (individual/society) rather than a separate AI risk matrix
- One risk methodology for the organization, extended for AI context

### Annex A control mapping
- Per-control YAML files (one file per ISO 42001 Annex A control), consistent with the ISO 27001 SoA pattern from Phase 3
- Explicit cross-reference field in each YAML: `iso27001_mapping` listing related ISO 27001 Annex A controls for bidirectional auditor traceability
- Applicability assessment per control with justification, even though most will be applicable (auditor rigor over assumption)
- Extend existing SoA consolidation script to also process ISO 42001 Annex A controls, producing one tool covering both standards

### PDCA documentation
- Integrated IMS manual covering both ISMS and AIMS PDCA together per Annex SL alignment
- Extend the existing IMS Context document from Phase 2 (not a new companion document) to be the single source of truth
- AIMS-specific internal audit criteria and management review inputs deferred to Phase 7 (Operational Controls) where the broader audit program lives
- AIMS objectives derived from AI Policy commitments (Phase 2) and made measurable, ensuring traceability from policy to objectives

### Claude's Discretion
- YAML schema field names and validation rules for registry entries
- Exact consolidation script architecture (how to extend Phase 3 script)
- ISO 42005 section-to-HH-section mapping details
- AIMS objective KPI formulation
- File naming convention for ISO 42001 Annex A control YAML files

</decisions>

<specifics>
## Specific Ideas

- Registry YAML pattern should mirror the risk register YAML pattern from Phase 3 for consistency across the project
- ISO 42001 Annex A cross-references to ISO 27001 should use the same A.X.Y format as the SoA files for automated cross-referencing
- The auditor traceability chain should extend: Risk Register -> AI Risk Assessment -> Registry Entry -> ISO 42001 Annex A -> ISO 27001 Annex A -> SoA -> Evidence

</specifics>

<deferred>
## Deferred Ideas

None - discussion stayed within phase scope

</deferred>

---

*Phase: 05-aims-core-and-ai-system-registry*
*Context gathered: 2026-02-22*
