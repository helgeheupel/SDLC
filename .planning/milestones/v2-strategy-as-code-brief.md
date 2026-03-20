---
document-id: HH-SDLC-MILESTONE-V2-BRIEF
title: "v2 Strategy-as-Code Operating Model — Milestone Brief"
version: v0.1
date: 2026-03-20
classification: Internal
author: CEO (via SDLC Lead Agent)
status: Draft — pending CEO refinement through role-by-role discussion
---

# v2: Strategy-as-Code Operating Model

## Vision

Helge Heupel Group (GmbH, B.V., Inc.) operates as a Strategy-as-Code company — each entity in its own right. Strategy, governance, and compliance are codified, versioned, and executable by humans and AI agents working together.

## Prerequisite

- v1 milestone (Phases 1–10) complete — certification-ready IMS artifacts
- HH-Team-EU-VM at production readiness (Phase 11.1 complete, Phase 12 golden image)

## Scope Areas

### 1. Role Model — 3 Entities × 3 Stages

Define the complete role model for HH Group across:

**Entities:** GmbH (DE), B.V. (NL), Inc. (US)

**Stages:**
- Startup (current — CEO wears multiple hats, 6 humans + 7 agents)
- Growth (named CTO, CISO, expanded dev team, customer-facing AI systems)
- Enterprise (full organizational structure, multiple teams, formal governance)

**Roles to define (one-by-one discussion with CEO):**
- CEO
- CTO
- CISO
- IT Pentester / Head of Platform
- Developer (new — proper definition with AI agent)
- Strategy Partner (3 instances — consulting partners)
- Finance Industry Senior Manager
- Additional roles as identified during discussion

**Per role:** RBAC access, RACI participation, AI agent access, VM workspace config, CLAUDE.md template, Copilot Enterprise config

### 2. Multi-Model AI Tooling Strategy

Every team member gets access to best-in-class AI tooling, role-appropriate:

**Platforms:**
- GitHub Copilot Enterprise (Anthropic + OpenAI models + coding agents)
- Claude Code (direct, with SDLC agents on VM)
- OpenAI ChatGPT (for roles that benefit)
- OpenAI Codex (for coding roles)

**Security model:**
- GitHub's 6-box agent security model — research and adopt
- Compare with Anthropic and OpenAI harnesses
- Map to Trust Level 2 governance
- ISO 42001 lineage for ALL AI interactions across all platforms

### 3. New AI Agents

- **Developer AI Agent** — proper dev assistant with project context, code review, testing
- **SEO AI Agent** — uses Similarweb solution for search optimization
- **Role-adapted SDLC agents** — simplified versions of specialist agents for non-specialist users
- **Strategy Partner-specific**: legal/ISO 27001 + coding assistance
- **Finance Industry Senior Manager-specific**: financial industries + product design + AI-leveraged promotion

### 4. Role-Based VM Provisioning

Implementation of the SDLC role model on the VM:
- Layer 1 Entra groups (infrastructure access)
- Layer 2 Entra groups (SDLC role identity)
- Role-specific workspace provisioning (CLAUDE.md, agents, extensions, tools)
- PROFILE.md for ISO 42001 lineage
- AI session logging per role

### 5. GHE Organization Model

- Team structure mapped to SDLC roles
- Repo access per role (read/write/admin)
- Copilot Enterprise licensing and configuration
- Content exclusions per role
- Branch protection and review policies

### 6. ArcKit v4 Integration

Introduce ArcKit v4 for architecture visualization once the VM reaches production milestone.

## Phasing (TBD — after role-by-role discussion)

The exact phases will be determined through `/gsd:discuss-phase` sessions with the CEO, working through each role and scope area. Estimated 8–12 phases.

## Dependencies

| Dependency | Status | Blocks |
|-----------|--------|--------|
| SDLC v1 complete (Phases 8–10) | In progress (80%) | Role model formalization |
| HH-Team-EU-VM production | In progress (Phase 11.1) | VM role provisioning |
| RDS CALs procurement | Pending (HSO contacted) | Multi-user VM access |
| GitHub Copilot Enterprise research | Not started | Multi-model AI strategy |
| Similarweb integration research | Not started | SEO AI Agent |
| ArcKit v4 evaluation | Not started | Architecture visualization |

## CEO Direction

- Work through roles one-by-one via structured discussion
- All decisions provided through discussion or answer themselves
- Complete VM production milestone first
- Strategy-as-Code is the guiding principle for all decisions

---

*Milestone brief for: HH SDLC Agent System v2*
*Created: 2026-03-20*
*Status: Draft — scope will be refined through CEO discussions*
