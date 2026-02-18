# HH SDLC Agent System

## What This Is

A system of 6 Claude Code AI agents — each embodying 25+ years of domain expertise — that enable the Helge Heupel Group CEO to orchestrate a mixed human/AI team of 5 core consultants and 6 AI agents to achieve ISO 27001 + ISO 42001 certification readiness by mid-May 2026. The agents produce real compliance artifacts (policies, procedures, risk registers, SoA, evidence) under the SDLC-v2 framework, compressed to Startup-weight for a 5-person team.

## Core Value

CEO can interchangeably steer humans and AI agents to produce audit-ready compliance artifacts at enterprise quality with startup speed — turning a 5-person team into the equivalent of a 30-person governance organization.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Create CTO Agent (Architecture + AI Engineering) — PSA + CAIE combined; produces ADRs, architecture decisions, AI system design, IEA governance artifacts
- [ ] Create CISO Agent (Security + EU Compliance + AI Governance) — EU-CA + AIGO + partial US-CA; produces IS policies, risk assessments, ISMS documentation, NIS2 compliance, AI governance artifacts
- [ ] Create Head of AI Science Agent — CAIS; produces AI research assessments, model evaluation frameworks, AI strategy recommendations, ISO 42001 Annex A artifacts
- [ ] Create Head of Platform/SRE Agent — PSRE; produces SLO frameworks, observability configurations, incident management procedures, BCP/DR plans, runbooks
- [ ] Create Product/Strategy Lead Agent — CSA; produces strategic alignment artifacts, OKR frameworks, WSJF scoring, portfolio governance, market analysis
- [ ] Create Product Security Engineering Agent (AppSec) — produces threat models, SAST/DAST configurations, SBOM generation pipelines, supply chain security (SLSA), dependency scanning, secure SDLC tooling
- [ ] Create Startup Overlay on SDLC-v2 — distill the 7,434-line SDLC-v2.md into a Startup-weight execution guide that maps which v2 sections apply NOW vs. Growth vs. Enterprise
- [ ] Produce ISO 27001 certification artifacts — IS Policy, SoA (93 Annex A controls), risk assessment methodology, risk register, risk treatment plan, internal audit program, management review template
- [ ] Produce ISO 42001 certification artifacts — AI Policy, AI System Registry, AI risk assessment, AI impact assessment process, Annex A control mapping (A.2-A.10), AIMS PDCA documentation
- [ ] Produce TISAX maintenance artifacts — VDA ISA 6 control evidence, Level 3 maturity documentation for all applicable control objectives
- [ ] Define agent interaction model — how CEO orchestrates 6 agents, how agents hand off to each other, how human review/sign-off is captured

### Out of Scope

- FedRAMP authorization — deferred until US federal customer pipeline is active (advisory only for now)
- Verity VE/EAM product development — agents will support product development later, but this project focuses on agent creation and compliance readiness
- SOC 2 Type II — deferred until US SaaS customers require it
- Full Enterprise-phase governance (5 boards, dual ARTs) — that's SDLC-v2's Growth/Enterprise target
- Building the Verity platform infrastructure — separate project

## Context

### Company Background
Helge Heupel GmbH previously developed and operated global cloud-edge automotive solutions for one of the world's largest OEMs, achieving a EUR 1.7B financial saving. Peak revenue EUR 16.9M with 55 people over 8.5 years. That project has closed.

### Current State
- 1 Founder/CEO (Helge Heupel) + 4 core consultants: Strategy Partner, Finance Industry Senior Manager, IT Pentester/Super Admin (MS Azure), CTO
- Three legal entities: HH Inc. (US), HH B.V. (NL), HH GmbH (DE)
- Pivoting to two new products: Verity Value Engineering (VE) and Verity Enterprise Architecture Management (EAM)
- SDLC-v2.md exists (7,434 lines, 18 sections) — comprehensive but Enterprise-weight
- Existing TISAX certification (prototype-development) from automotive project
- IS policies and risk register exist from previous operations but starting fresh/greenfield for new structure

### CTO/CISO Expert Assessment (Key Takeaways)
- SDLC-v2 is "top 5% maturity thinking" — strategically correct
- Over-complex for Phase 1: 8 executive archetypes must collapse to 5 humans + AI agents
- Missing critical function: Product Security Engineering (AppSec)
- Must compress governance for startup mode or "drown in governance friction before ARR justifies it"
- Recommended: 5 AI meta-agents aligned to 5 humans (we're doing 6 to add AppSec)
- Budget: 8-12% of revenue for security & compliance at <EUR 10M ARR
- Machine-enforce deployment invariants, not policy-enforce them
- "AI agents assist. Humans own risk."

### Verity VE Vision
Addresses $2.1 trillion in unattributed enterprise decision value. Introduces Outcome-Attributed Liability Chains — every enterprise decision cryptographically bound to its predicted financial impact at creation, actual outcome at realization, and variance decomposition. Features Decision Quality Scores (DQS), DuPont-decomposed financial linkage, and mandatory counterfactual baselines.

### Verity EAM Vision
Enriches existing SAP, ServiceNow, and IBM Maximo/Control Desk systems with AI-native enterprise architecture management.

## Constraints

- **Team size**: 1 CEO + 4 consultants + 6 AI agents — must be effective at this scale
- **Timeline**: Certification-ready by mid-May 2026 (~12 weeks from now)
- **Certification scope**: ISO 27001 + ISO 42001 dual certification + TISAX maintenance
- **Agent platform**: Claude Code (Anthropic) — agents are system prompts/definitions run in Claude Code sessions
- **SDLC-v2 preservation**: Keep as Growth-phase target; create Startup overlay, don't replace
- **Human accountability**: All AI-generated artifacts require human review and sign-off logging — agents produce, humans own risk
- **Progressive scaling**: Startup (now) -> Growth (EUR 10-50M ARR) -> Enterprise (EUR 50M+)
- **Tech stack direction**: Azure-native + open source (per CTO/CISO recommendation)

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| 6 Claude Code agents (not 5) | CTO/CISO recommended 5; we add dedicated AppSec agent because ISO 27001 + 42001 + TISAX require automated security tooling that can't be "implied" in other roles | -- Pending |
| Keep SDLC-v2, create Startup overlay | V2 represents Growth-phase target state; rewriting loses the comprehensive framework; overlay approach lets us grow into it | -- Pending |
| Agents produce artifacts, humans sign off | Maximizes the leverage of a 5-person team; maintains "AI-augmented, human-governed" principle from SDLC-v2 | -- Pending |
| ISO 27001 + ISO 42001 dual certification | Enterprise customers require it; competitive differentiator vs. incumbents; EU AI Act readiness | -- Pending |
| Defer FedRAMP until US customer pipeline active | Resource constraint; no immediate US federal demand; advisory-only for now | -- Pending |

---
*Last updated: 2026-02-18 after initialization*
