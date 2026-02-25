# Phase 8: TISAX Maintenance - Context

**Gathered:** 2026-02-25
**Status:** Ready for planning

<domain>
## Phase Boundary

Maintain TISAX certification by mapping existing ISO 27001 evidence to VDA ISA 6 controls, producing prototype protection documentation, and documenting Level 3 maturity evidence. The TISAX label expires March 16, 2026. Scope does not change — this is a label renewal/re-assessment with AL 3 (High protection). HH GmbH is pivoting to two new products after VW AG project completion.

</domain>

<decisions>
## Implementation Decisions

### ISA-to-ISO Mapping Structure
- Single consolidated mapping document (not per-chapter or per-control YAML files)
- Each ISA control objective maps to ISO 27001 Annex A controls with specific evidence pointers (document + section, not just control IDs)
- Gaps flagged explicitly in a separate section listing ISA controls with no ISO 27001 equivalent, each with a remediation note
- Version-aware structure with ISA version field per control to track future ISA version deltas

### TISAX Scope Alignment
- Scope does NOT change — this is a label renewal, not a scope change
- AL 3 (High protection) assessment level maintained
- Label expires March 16, 2026 — evidence mapping demonstrates continued compliance under existing scope
- Business context: VW project completing, two new products launching, but scope definition unchanged

### Prototype Protection Scope
- Physical + digital prototypes in scope
- Documentation written for new product context (not VW project which is winding down)
- Prototype protection as IS Policy Annex extension (not standalone document) — integrated with existing 4-level classification scheme
- HH facility controls needed — physical spaces where prototypes are stored require facility-level controls (secure rooms, camera restrictions, visitor protocols)

### Level 3 Maturity Evidence
- Per-control maturity assessment section within the mapping document — each ISA control gets evidence for all 4 maturity criteria (process definition, consistent implementation, measured effectiveness, continuous improvement)
- Measured effectiveness: proxy evidence from design-time artifacts (risk assessments, test results, review records) PLUS planned measurement schedule with specific KPIs and collection start dates
- Continuous improvement: reference existing IMS cycle (Monthly Strategic + Quarterly IMS review from Phase 7) — no duplication, no TISAX-specific improvement process
- Self-assessment scoring: 0-5 maturity scale per control with justification — auditor sees HH's own assessment to validate against

### Claude's Discretion
- Exact column layout and formatting of the consolidated mapping table
- How to structure the gap remediation notes
- ISA version field format and delta tracking mechanism
- Which proxy evidence to cite for each control's measured effectiveness
- Maturity score calibration (what constitutes a 3 vs 4 vs 5)

</decisions>

<specifics>
## Specific Ideas

- March 2026 label expiration creates urgency — evidence package must be assessment-ready
- RISK-REG-005 (TISAX scope change) already in risk register with monthly review cycle — this phase addresses that risk directly
- Existing 4-level classification scheme (Public, Internal, Confidential, Secret) already aligned with TISAX ISA Chapter 7 protection needs
- 7 physical controls were marked not-applicable in Phase 3 SoA (A.7.1-A.7.3, A.7.5-A.7.6, A.7.11-A.7.12) with Azure shared responsibility — prototype protection may need to revisit some of these
- Prototype protection annex should leverage the IS Policy Annex structure established in Phase 2

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 08-tisax-maintenance*
*Context gathered: 2026-02-25*
