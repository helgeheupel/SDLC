# Phase 4: CTO and AppSec Agents with Security Engineering - Context

**Gathered:** 2026-02-21
**Status:** Ready for planning

<domain>
## Phase Boundary

Create the CTO Agent and AppSec Agent (CLAUDE.md system prompts with reference directories), then produce security engineering artifacts: threat modeling framework with applied threat models, SAST/DAST tooling configuration, SBOM generation pipeline, and supply chain security framework. All artifacts must map to ISO 27001 Annex A.8 controls and produce auditor-ready evidence.

</domain>

<decisions>
## Implementation Decisions

### Agent scope boundaries
- CTO Agent has a **security-architecture** dual identity: equal weight on architecture decisions/ADRs AND security engineering. Technical security is core to the CTO role, not secondary.
- AppSec Agent is the **operational arm of the CISO Agent**: CISO defines governance and policy, AppSec executes and produces technical security artifacts. AppSec consumes CISO policies as constraints.
- **AppSec owns all security engineering artifacts**: threat models, SAST/DAST, SBOM, supply chain security. CTO focuses on architecture decisions, ADRs, and AI system design.
- Both agents follow the **same construction pattern as the CISO Agent**: CLAUDE.md system prompt + reference/ directory with domain-context.md for progressive disclosure.

### Threat modeling approach
- **STRIDE primary, LINDDUN light**: Full STRIDE analysis for all modeled systems. LINDDUN only for systems processing personal data (GDPR scope).
- **YAML-in-Git format**: Threat models stored as YAML files, consistent with the risk register pattern from Phase 3. Machine-readable, version-controlled.
- **Scope**: Model the 7-agent Claude Code system AND one HH product (e.g., Verity or HH website) to validate the framework works for different system types.
- **Auditor-ready depth**: Full data flow diagrams, trust boundaries, per-component threat enumeration, mitigations with Annex A control references. Ready for Stage 1 audit.

### Security tooling gates
- **Specs + reference config**: Specification documents for tool selection, criteria, and integration points, plus one reference GitHub Actions config as proof-of-concept.
- **Block on Critical/High**: Critical and High severity findings block the pipeline. Medium and Low are advisory only.
- **Tool choice**: Research recommends the best fit for the TypeScript/Next.js/Qwik stack, budget (open source preferred), and GitHub integration.

### Supply chain ambition
- **SLSA Level 2**: Hosted build platform with signed provenance. Requires CI/CD generating attestations.
- **SBOM review**: Monthly human review cycle tracking new dependencies, license changes, and vulnerability trends. Automated vulnerability scanning between reviews.
- **Working pipeline + spec**: A working CycloneDX SBOM generation config for one existing HH repo (e.g., Verity or HH CMS) plus the specification document.

### Claude's Discretion
- False positive handling approach for SAST findings (inline suppression vs centralized baseline)
- Artifact signing technology choice (Sigstore/Cosign, GPG, or other based on research)
- Specific SAST/DAST tool selection (research-driven recommendation)
- CTO Agent domain-context.md structure and content depth
- AppSec Agent domain-context.md structure and content depth

</decisions>

<specifics>
## Specific Ideas

- Agent construction should mirror the CISO Agent pattern from Phase 2 (02-01-PLAN.md): CLAUDE.md prompt with progressive disclosure via reference/ directory, cross-domain dependency flagging
- Threat models in YAML should be consumable by the SoA consolidation script pattern from Phase 3 (03-04) for control traceability
- The reference GitHub Actions config should be immediately usable on HH repos, not a theoretical template

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 04-cto-and-appsec-agents-with-security-engineering*
*Context gathered: 2026-02-21*
