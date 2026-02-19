# HANDOFF.md Template

**Version:** 1.0
**Status:** Active
**Created:** 2026-02-19

## Usage Instructions

- This template is used when one agent's work must continue with another agent
- The CEO reads the HANDOFF.md and passes it to the target agent as session context
- Fill in ALL sections. If a section is not applicable, write "N/A" -- do not delete the section
- File naming convention: `HANDOFF-[source]-to-[target]-[YYYY-MM-DD].md`
  - Example: `HANDOFF-ciso-to-cto-2026-03-15.md`
  - Example: `HANDOFF-sdlc-lead-to-appsec-2026-04-01.md`
- Store HANDOFF.md files in the working branch alongside the artifacts they reference
- The HANDOFF.md is a Git-versioned audit artifact -- it satisfies ISO 27001 cl. 7.5 traceability

**Agent role identifiers for file naming:**
`sdlc-lead` | `cto` | `ciso` | `ai-science` | `platform-sre` | `product-strategy` | `appsec`

---

## Template

```markdown
# HANDOFF: [Source Agent Role] -> [Target Agent Role]

**Date:** [YYYY-MM-DD]
**Source Agent:** [sdlc-lead | cto | ciso | ai-science | platform-sre | product-strategy | appsec]
**Target Agent:** [sdlc-lead | cto | ciso | ai-science | platform-sre | product-strategy | appsec]
**Branch:** [git branch name, if applicable]
**PR:** [PR URL, if applicable]
**Priority:** [urgent | normal | low]

## What Was Done

[Bullet summary of completed work with exact file paths. Be specific -- the receiving
agent should know exactly what files exist and what state they are in.]

- Created [file path]: [what was done and current state]
- Modified [file path]: [what changed and why]
- Analyzed [file path]: [key findings]

## Artifacts Produced

| Artifact | Path | Status | Sign-Off Required |
|----------|------|--------|--------------------|
| [name] | [path] | complete / draft / needs-review | yes / no |
| [name] | [path] | complete / draft / needs-review | yes / no |

## What Needs to Happen Next

[Specific, actionable instructions for the receiving agent. NOT vague like
"continue the work" but precise like "Review sections 3.1-3.5 of IS-Policy.md
against ISO 27001 cl. 5.2 requirements and add missing elements."]

1. [First task -- specific, verifiable, with file references]
2. [Second task -- specific, verifiable, with file references]
3. [Third task if applicable]

## Context the Receiving Agent Needs

[Key decisions, constraints, assumptions. Only include what is NOT obvious
from reading the artifacts. Do not restate what is already in the files.]

- **Decision:** [what was decided and why]
- **Constraint:** [what limits the approach]
- **Assumption:** [what was assumed -- could be wrong]

## Open Questions for Human Decision

[Items that require CEO/human judgment before proceeding. If none, state "None."]

- [ ] [Question requiring human decision -- include options if possible]
- [ ] [Question requiring human decision]

## Subagents Used

[Document any subagents spawned during this work for audit trail.
If no subagents were used, state "None."]

| Subagent Task | Model | Purpose | Outcome |
|---------------|-------|---------|---------|
| [brief task description] | haiku / sonnet / opus | [what it was asked to do] | [summary of result] |
| [brief task description] | haiku / sonnet / opus | [what it was asked to do] | [summary of result] |

## Dependencies

[What must be true before the receiving agent can proceed.
If no dependencies, state "None."]

- [ ] [Dependency 1 -- specific and verifiable]
- [ ] [Dependency 2 -- specific and verifiable]
```

---

## Examples

### Example 1: CISO to CTO Handoff

```markdown
# HANDOFF: CISO -> CTO

**Date:** 2026-03-15
**Source Agent:** ciso
**Target Agent:** cto
**Branch:** feature/is-policy-v1
**PR:** N/A (not ready for PR yet)
**Priority:** normal

## What Was Done

- Created artifacts/policies/is-policy.md: Information Security Policy draft covering
  ISO 27001 cl. 5.2 requirements, all 3 HH entities, and management commitment statement
- Analyzed SDLC-v2 Section 12: Identified 8 security controls requiring architecture decisions

## Artifacts Produced

| Artifact | Path | Status | Sign-Off Required |
|----------|------|--------|--------------------|
| IS Policy | artifacts/policies/is-policy.md | draft | yes (CEO) |
| Security Controls Gap List | artifacts/gap-analysis/security-controls-gaps.md | complete | no |

## What Needs to Happen Next

1. Review Section 4.2 of is-policy.md ("Technical Security Architecture") and add
   Azure-specific implementation details for encryption at rest and in transit
2. Evaluate the 8 controls listed in security-controls-gaps.md and provide ADR-format
   decisions for each (use ADR template from SDLC-v2 S.9.3)
3. Add network segmentation approach to is-policy.md Section 4.3

## Context the Receiving Agent Needs

- **Decision:** Policy uses "encrypt everything" approach per CTO/CISO expert recommendation
- **Constraint:** Must use Azure-native services (Azure Key Vault, Azure Disk Encryption)
  per PROJECT.md tech stack direction
- **Assumption:** Azure AD is the identity provider (not yet confirmed by CTO human)

## Open Questions for Human Decision

- [ ] Confirm Azure AD as identity provider (CTO human to confirm)
- [ ] Approve "encrypt everything" approach vs. risk-based encryption selection

## Subagents Used

| Subagent Task | Model | Purpose | Outcome |
|---------------|-------|---------|---------|
| ISO 27001 Annex A.8 analysis | sonnet | Map A.8 controls to IS Policy sections | 8 controls mapped, 3 gaps identified |

## Dependencies

- [ ] CTO human confirms Azure AD as identity provider
- [ ] CEO approves "encrypt everything" policy direction
```

### Example 2: SDLC Lead Orchestration Handoff

```markdown
# HANDOFF: SDLC Lead -> Product/Strategy

**Date:** 2026-04-10
**Source Agent:** sdlc-lead
**Target Agent:** product-strategy
**Branch:** main
**PR:** N/A
**Priority:** low

## What Was Done

- Coordinated CTO and CISO agents on threat model for Verity VE AI pipeline
- Merged outputs into artifacts/threat-models/verity-ve-ai-pipeline.md
- Identified strategic risk: AI model supply chain not covered in current product roadmap

## Artifacts Produced

| Artifact | Path | Status | Sign-Off Required |
|----------|------|--------|--------------------|
| Threat Model | artifacts/threat-models/verity-ve-ai-pipeline.md | complete | yes (CTO + CISO humans) |
| Strategic Risk Note | artifacts/risk/ai-supply-chain-strategic-risk.md | draft | no |

## What Needs to Happen Next

1. Review ai-supply-chain-strategic-risk.md and assess product roadmap impact
2. Determine if AI model supply chain security should be a Verity VE product feature
   (competitive differentiator) or internal-only control
3. Update OKR framework to include AI supply chain security if product feature

## Context the Receiving Agent Needs

- **Decision:** Threat model uses STRIDE + LINDDUN (dual methodology per AppSec recommendation)
- **Constraint:** Patent-sensitive -- reference [PATENT-VE-003] by ID only
- **Assumption:** Verity VE will use third-party AI models (not exclusively in-house)

## Open Questions for Human Decision

None.

## Subagents Used

| Subagent Task | Model | Purpose | Outcome |
|---------------|-------|---------|---------|
| CTO analysis of AI pipeline architecture | opus | Produce architecture threat surface | 12 threat surfaces identified |
| AppSec STRIDE analysis | sonnet | Apply STRIDE to each threat surface | 34 threats enumerated |
| CISO LINDDUN privacy analysis | sonnet | Apply LINDDUN to AI data flows | 8 privacy threats identified |

## Dependencies

- [ ] CTO and CISO humans have reviewed the threat model (PR pending)
```

---

*Document: protocols/handoff-template.md*
*Version: 1.0 -- Created during Phase 1 Plan 02*
