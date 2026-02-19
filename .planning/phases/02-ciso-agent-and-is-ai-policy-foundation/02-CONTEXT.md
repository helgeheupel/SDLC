# Phase 2: CISO Agent and IS/AI Policy Foundation – Context

**Gathered:** 2026-02-19
**Status:** Ready for planning

<domain>
## Phase Boundary

Create the CISO Agent (first real agent in the system) and produce the foundational policy documents that every downstream agent and artifact depends on: Information Security Policy, AI Policy, ISMS Scope Statement, and document control framework. The CISO Agent is built using the interaction model, subagent protocol, and agent definition template established in Phase 1.

</domain>

<decisions>
## Implementation Decisions

### CISO Agent Persona and Expertise

- **Balanced security + AI governance from day one** – equal weight on ISO 27001 and ISO 42001. Both certifications are equally urgent; neither is secondary.
- **5-archetype composite active at Startup** – the CISO Agent carries expertise from all 5 source archetypes (CISO/EU Compliance Architect, AI Governance Officer, US Compliance & FedRAMP Architect, Cross-Framework Compliance Integrator, Risk Management Architect) as defined in `protocols/agent-qualifications.md`
- **US compliance carried as advisory knowledge** – FedRAMP, SOC 2, NIST 800-53, CCPA expertise remains in the system prompt but explicitly marked as deferred. Agent can answer questions and flag future requirements but does not produce US compliance artifacts.
- **Risk work model: agent drafts, human validates** – CISO Agent produces risk assessment drafts, risk register entries, and risk methodology. CEO + CISO human validate in workshop. Agent refines based on feedback.
- **Human CISO substitution model** – Agent operates as full CISO substitute when the human CISO is unavailable. CEO oversees. Agent flags items needing human CISO review when they return. When human CISO is available, agent complements and assists.

### Policy Document Style and Structure

- **Hybrid format: formal policy + operational annex** – each policy has a short formal document (what auditors review) plus a linked operational annex (what the team actually follows day-to-day)
- **Three policy documents, not one:**
  - `IMS-Context.md` – 2-page Integrated Management System context (shared preamble establishing that IS Policy and AI Policy are part of one management system)
  - `IS-Policy.md` – Information Security Policy (ISO 27001 cl. 5.2, A.5.1)
  - `AI-Policy.md` – AI Policy (ISO 42001 cl. 5.2, A.2)
- **Rationale:** Separate documents allow independent review cycles (AI Policy evolves faster than IS Policy), cleaner auditor navigation, and ownership clarity. Shared preamble demonstrates Annex SL / Harmonized Structure alignment.
- **Language: English primary + German/Dutch summaries** – full policies in English. Executive summaries or key sections translated for local compliance. ISO auditors in DE/NL accept English.
- **HH-specific from scratch** – every policy statement references actual HH systems, personnel, tools (Azure, NorthGRC, Linear, Claude Code). No generic templates.

### ISMS/AIMS Scope Boundaries

- **Separate scope statements per entity** – HH GmbH, HH B.V., and HH Inc. each get their own ISMS scope statement. Separate certificates.
- **AIMS scopes match per-entity ISMS pattern** – each entity's AIMS scope shows which AI systems it uses. Per-entity AI System Registry entries.
- **EU first, US later** – initial scope work focuses on GmbH (DE) and B.V. (NL). HH Inc. (US) scope deferred to end of Startup phase. This simplifies the initial workload significantly.
- **Asset scope: product development + internal IT + AI agents** – covers Verity VE/EAM development, internal IT infrastructure (Azure, M365), all 7 Claude Code agents, customer data handling
- **Physical scope: cloud-only + remote workers** – no physical offices in scope. All processing in Azure cloud. Team works remotely. Auditors assess logical controls, not physical premises.

### Document Control and Approval Workflow

- **Git-only for document control** – Git is the single source of truth. PRs = approval. Commit history = version control. Branch protection = distribution control. Satisfies ISO 27001 cl. 7.5.
- **Approval chain: CISO + CTO review, then CEO approves** – CISO Agent drafts, human CISO and CTO review via PR, CEO final approval via PR merge.
- **Version numbering: semantic + date stamp** – v1.0 (2026-02-19), v1.1 (2026-03-15), v2.0 (2026-06-01). Major version for significant changes, minor for updates.
- **Information classification: 4 levels** – Public, Internal, Confidential, Secret. Policies are Internal. Patent artifacts are Confidential or Secret. Published docs are Public. Aligns with TISAX handling requirements.

### Claude's Discretion

- Exact structure of the IMS Context preamble
- How to organize the operational annex per policy
- Document control metadata fields beyond the minimum (ID, version, date, classification, author, approver)
- How the German/Dutch executive summaries are structured
- Whether to include a document register as a separate file or inline in the document control framework

</decisions>

<specifics>
## Specific Ideas

- The CISO Agent is the first agent built – its quality sets the bar for CTO Agent (Phase 4), AppSec Agent (Phase 4), and the remaining 4 agents (Phase 6). The agent definition template from `protocols/interaction-model.md` must be followed precisely.
- The IS Policy must name all 3 entities (GmbH, B.V., Inc.) and all specific HH systems and personnel – not generic "the organization" language
- The AI Policy must reference the 7 Claude Code agents by name as AI systems under the organization's governance
- The document control framework must work with Git PR workflow established in Phase 1 – no additional approval systems
- EU-first approach means the initial IS Policy can focus on NIS2UmsuCG (DE) and Wbni (NL) compliance, adding US-specific sections later

</specifics>

<deferred>
## Deferred Ideas

- NorthGRC integration for document management – Phase 9 (Toolchain Integration)
- Automated document review notifications – Growth phase tooling
- Multi-language full translations (beyond summaries) – Growth phase when team size justifies

</deferred>

---

*Phase: 02-ciso-agent-and-is-ai-policy-foundation*
*Context gathered: 2026-02-19*
