# Phase 7: Operational Controls - Context

**Gathered:** 2026-02-24
**Status:** Ready for planning

<domain>
## Phase Boundary

Produce 8 standalone operational security procedure documents (one per requirement: OPCT-01 through OPCT-06 + ISMS-07 + ISMS-08) that HH personnel can follow and auditors can verify. These are the "how we actually do things" documents covering incident management, BCP/DR, access control, change management, supplier security, HR security, internal audit, and management review.

</domain>

<decisions>
## Implementation Decisions

### NIS2 and regulatory scoping
- NIS2 is **informational until Growth phase** — not actively driving procedure structure
- NIS2 reporting timelines (24h/72h/1-month) documented as **reference sections** within the incident management procedure (not standalone, not omitted)
- NIS2 reference sections include BSI (GmbH) and NCSC-NL (B.V.) **contact details and reporting URLs** so Growth activation is copy-paste ready
- **All five frameworks actively drive content:** ISO 27001, ISO 42001, TISAX, NIS2 (informational), GDPR
- GDPR obligations **embedded in relevant procedures** (breach notification in incident management, data subject rights in access control, DPA in supplier security) — no standalone GDPR document
- Each procedure includes a "Regulatory obligations" subsection where applicable

### Procedure depth and format
- **Tiered by risk:** Full runbook for High/Critical procedures, decision-tree for Low/Medium
- **Full runbook treatment:** Incident management (OPCT-01) and BCP/DR (OPCT-02) — step-by-step with verification checks
- **Decision-tree treatment:** Access control (OPCT-03), change management (OPCT-04), supplier security (OPCT-05), HR security (OPCT-06), internal audit (ISMS-07), management review (ISMS-08)
- **One document per requirement** — 8 separate documents with clear 1:1 mapping for auditors
- **YAML-frontmatter Markdown format** consistent with existing artifacts (HH-ISMS-PROC-XXX document ID scheme)

### Role assignments and approval chains
- **Incident management ICS-Lite:** CTO primary Incident Commander, IT Pentester backup IC. CEO as Communications Lead. Most-qualified-engineer as Technical Lead.
- **Change management approval:** Low/Medium changes via PR approval (any reviewer). High/Critical changes require CEO + CTO approval on the PR.
- **AI agent role:** Agents assist, humans execute. Agents can draft, analyze, and recommend within procedures (e.g., CISO Agent classifies incident severity) but all actions and approvals are human. Consistent with Trust Level 2.
- **Access reviews (quarterly):** IT Pentester conducts review, CTO approves standard changes, CEO signs off on privileged/admin account access.

### Audit and management review design
- **One full-scope internal audit before Stage 1** covering all ISMS + AIMS controls. Demonstrates the audit program exists and has been exercised.
- **Internal auditor:** External CISO (NorthGRC) leads the audit for independence (ISO 27001 cl. 9.2). CISO Agent assists with evidence gathering but does not audit its own outputs.
- **Management review:** Monthly Strategic meeting serves as the management review vehicle (already established in governance model). Structured agenda template added covering all cl. 9.3 inputs.
- **Single combined IMS review template** covering both ISMS (ISO 27001 cl. 9.3) and AIMS (ISO 42001 cl. 9.3) inputs. Matches the integrated management system approach.

### Claude's Discretion
- Exact section structure within each procedure document
- Annex A control mapping per procedure (which controls each procedure addresses)
- Internal audit checklist design and scoring criteria
- Management review template input ordering and format

</decisions>

<specifics>
## Specific Ideas

- NIS2 reference sections should be "Growth-activation ready" — include enough detail that enabling NIS2 reporting is a configuration change, not a rewrite
- Incident management runbook should handle the 00:00-08:00 CET timezone gap (AI-assisted monitoring with auto-escalation per SDLC-Growth-v2 Section 16.3.3)
- Management review template should produce minutes that satisfy both ISO 27001 cl. 9.3 and ISO 42001 cl. 9.3 in a single document

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 07-operational-controls*
*Context gathered: 2026-02-24*
