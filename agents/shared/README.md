# Agent Shared Directory

**Purpose:** Cross-agent reference documents and shared resources for the HH SDLC Agent System.

## Directory Structure

```
agents/
  shared/                    # This directory -- cross-agent reference documents
    README.md                # This file
    SDLC-v2.md               # Full SDLC-v2 document (copy when activated)
  sdlc-lead/                 # SDLC Lead Agent (orchestrator)
    CLAUDE.md                # Agent definition
    reference/               # Domain-specific reference documents
  cto/                       # CTO Agent (architecture + AI engineering)
    CLAUDE.md
    reference/
  ciso/                      # CISO Agent (security + EU compliance + AI governance)
    CLAUDE.md
    reference/
  ai-science/                # AI Science Agent (AI research + model evaluation)
    CLAUDE.md
    reference/
  platform-sre/              # Platform/SRE Agent (infrastructure + operations)
    CLAUDE.md
    reference/
  product-strategy/          # Product/Strategy Agent (strategic alignment + OKRs)
    CLAUDE.md
    reference/
  appsec/                    # AppSec Agent (product security engineering)
    CLAUDE.md
    reference/
```

## SDLC-v2 Reference

The full SDLC-v2 document (7,434 lines, ~30K tokens) is the authoritative framework for all agent operations. Each agent's CLAUDE.md references this shared copy rather than inlining the document.

**Setup instruction:** Copy or symlink SDLC-v2.md to `agents/shared/SDLC-v2.md` when the agent system is activated:

```bash
cp path/to/SDLC-v2.md agents/shared/SDLC-v2.md
```

Agents read this file on demand when they need context about the full framework. It is NOT embedded in agent system prompts (to preserve context window budget).

## Agent Roles

| Agent | Directory | Phase Created | Primary Domain |
|-------|-----------|---------------|----------------|
| SDLC Lead | `agents/sdlc-lead/` | Phase 6 | Cross-domain orchestration, SDLC-v2 compliance |
| CTO | `agents/cto/` | Phase 4 | Architecture, AI engineering, ADRs |
| CISO | `agents/ciso/` | Phase 2 | Security, EU compliance, AI governance, ISMS |
| AI Science | `agents/ai-science/` | Phase 6 | AI research, model evaluation, ISO 42001 Annex A |
| Platform/SRE | `agents/platform-sre/` | Phase 6 | SLO frameworks, observability, BCP/DR, incident mgmt |
| Product/Strategy | `agents/product-strategy/` | Phase 6 | Strategic alignment, OKRs, WSJF, portfolio governance |
| AppSec | `agents/appsec/` | Phase 4 | Threat models, SAST/DAST, SBOM, supply chain security |

## Agent CLAUDE.md Status

Agent CLAUDE.md files are **placeholders in Phase 1**. Actual agent prompts are created in their respective phases:

- **Phase 2:** CISO Agent
- **Phase 4:** CTO Agent, AppSec Agent
- **Phase 6:** SDLC Lead Agent, AI Science Agent, Platform/SRE Agent, Product/Strategy Agent

All agent definitions must follow the template defined in `protocols/interaction-model.md` Section 6.

## Protocols

All agents operate under these shared protocols:

- **Interaction Model:** `protocols/interaction-model.md` -- how agents interact, operational modes, entry point decisions
- **Subagent Protocol:** `protocols/subagent-protocol.md` -- when/how to spawn subagents, model selection, governance
- **HANDOFF Template:** `protocols/handoff-template.md` -- structured handoff artifact for cross-agent work

## Reference Directory Convention

Each agent's `reference/` subdirectory holds domain-specific documents:
- Standards extracts relevant to the agent's domain
- Templates for artifacts the agent produces
- Prior work or examples for the agent to reference

Files placed in `reference/` are intended to be read by the agent during session execution, not embedded in the system prompt.

---

*Created: Phase 1 Plan 02 (Agent Foundation)*
*Framework: SDLC-v2 (Startup phase)*
