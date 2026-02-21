---
document-id: HH-CTO-REF-001
title: "CTO Agent Domain Context: Helge Heupel Group"
version: v1.0
date: 2026-02-21
classification: Internal
status: Active
author: CTO Agent (Phase 4 Plan 01)
review-cycle: Quarterly
---

# CTO Agent Domain Context -- Helge Heupel Group

This document provides HH-specific technical architecture context for the CTO Agent. Read this first at the start of every new session to ground your responses in the organization's actual structure, products, technology stack, and architectural decisions.

---

## 1. Organization Overview

The **Helge Heupel Group** consists of 3 legal entities operating as an integrated technology startup:

| Entity | Jurisdiction | Primary Function | Technology Ownership |
|--------|-------------|------------------|---------------------|
| **Helge Heupel GmbH** | Germany (DE) | Primary operating entity. Product development, R&D, EU compliance. Registered in Berlin (HRB 180095 B), Kurfurstendamm 194, 10707 Berlin. Managing Director: Helge Heupel. | Core development team. Owns source code repositories, Azure tenant, M365 subscription, CI/CD pipelines, and AI agent system. |
| **Helge Heupel B.V.** | Netherlands (NL) | EU market expansion. Registered in Noordbeemster (KVK 92676545), Jisperweg 2, 1463ND. Managing Director: Helge Heupel. | Shared infrastructure via GmbH. Separate deployment targets possible for data residency. |
| **Helge Heupel Inc.** | United States (US) | Future US market entry. Delaware C Corporation (File 5236917), business address: 1 Sansome Street Suite 1400, San Francisco CA 94104. CEO: Helge Heupel. | Skeleton scope at Startup. US-specific platform artifacts (Azure Government, FedRAMP boundary) deferred until customer pipeline active. |

**Shared services:** Azure tenant (West Europe, Germany West Central), M365, Git repositories, Claude Code 7-agent system, development toolchain (pnpm, TypeScript).

---

## 2. Personnel

The Helge Heupel Group operates with 6 human team members at Startup phase:

| # | Role | SDLC Function | Architecture Relevance |
|---|------|---------------|----------------------|
| 1 | **CEO** (Helge Heupel) | Orchestrator, ultimate sign-off authority | Approves all architecture decisions affecting security posture. Accepts residual risk. NIS2UmsuCG Sec. 38 management body liability. |
| 2 | **CTO** (Named individual) | Architecture, AI engineering, technical leadership | **Accountable for all technical architecture decisions.** Reviews and approves deployments. Owns ADR registry. Signs off on technology evaluations. |
| 3 | **IT Pentester / Super Admin** (Named individual) | Head of Platform: Azure infrastructure, penetration testing | CTO's primary platform counterpart. Executes deployment approvals, manages Azure infrastructure, conducts hands-on security testing. |
| 4 | **CISO** (Named individual) | Security, EU compliance, AI governance | Reviews security-relevant architecture decisions. CTO coordinates on Annex A.8 control implementations. |
| 5 | **Strategy Partner** (Named individual) | Product/Strategy lead | Consulted on architecture decisions with product impact. |
| 6 | **Finance Industry Senior Manager** (Named individual) | Advisory: financial domain expertise | Consulted on architecture decisions affecting financial industry compliance. |

**CTO accountability model:** The human CTO is accountable for technical architecture decisions and deployment approvals. The CTO Agent drafts ADRs, architecture analyses, and technology evaluations; the human CTO reviews and approves via PR.

---

## 3. AI Agent Roster

The SDLC Agent System consists of 7 Claude Code AI agents:

| # | Agent | Domain | Status | Relationship to CTO Agent |
|---|-------|--------|--------|--------------------------|
| 1 | **SDLC Lead** | Cross-domain orchestration | Placeholder (Phase 6) | Coordinates CTO Agent with other specialists |
| 2 | **CTO** | Architecture, AI engineering, Azure platform | **Active (Phase 4)** | This agent |
| 3 | **CISO** | Security, EU/US compliance, AI governance, risk | Active (Phase 2) | CTO reviews security architecture; CISO reviews security-relevant ADRs |
| 4 | **AI Science** | AI research, model evaluation | Placeholder (Phase 6) | CTO provides AI engineering perspective; AI Science provides research perspective |
| 5 | **Platform/SRE** | SLO frameworks, observability, incident management | Placeholder (Phase 6) | CTO designs platform architecture; Platform/SRE operationalizes it |
| 6 | **Product/Strategy** | Strategic alignment, OKRs, WSJF | Placeholder (Phase 6) | Product/Strategy defines requirements; CTO translates to architecture |
| 7 | **AppSec** | Threat models, SAST/DAST, SBOM, supply chain | Active (Phase 4) | CTO reviews security architecture; AppSec produces security tooling artifacts |

**CTO-AppSec boundary:** CTO owns architecture decisions, ADRs, and AI system design. AppSec owns all security engineering artifacts (threat models, SAST/DAST configs, SBOM, supply chain security). CTO reviews security architecture outputs before they become organizational standards. AppSec does NOT produce architecture decisions; CTO does NOT produce security tooling configurations.

---

## 4. Products

| Product | Description | Security Classification | Patent Status |
|---------|-------------|------------------------|---------------|
| **Verity VE** (Value Engineering) | AI-powered value engineering platform | Confidential | Patent-pending: reference as [PATENT-VE-001] only |
| **Verity EAM** (Enterprise Architecture Management) | AI-powered enterprise architecture management | Confidential | Patent-pending: reference as [PATENT-EAM-001] only |

**Technology shared across products:** Both products use the same core stack (TypeScript, Qwik frontend, Payload CMS backend, Neon PostgreSQL, Vercel/Cloudflare Pages hosting). Architecture decisions affecting the shared stack apply to both products.

**Patent-sensitive content policy:** Reference patent-sensitive materials by ID only. Never inline product architecture details, algorithms, or proprietary technical implementation. Aligns with TISAX ISA Chapter 7 (prototype protection).

---

## 5. Technology Stack

### Frontend

| Technology | Purpose | Key Details |
|-----------|---------|-------------|
| **TypeScript** | Primary language (frontend and backend) | Strict mode enabled. All HH codebases are TypeScript-first. |
| **Qwik** | Frontend framework (Verity website, HH website) | Resumable framework with fine-grained lazy loading. SSR-first architecture. Deployed to Cloudflare Pages. |
| **Next.js** | Admin UI framework (Payload CMS admin panels) | Server-side rendering, API routes. Used as Payload CMS's built-in admin framework. Deployed to Vercel. |

### Backend

| Technology | Purpose | Key Details |
|-----------|---------|-------------|
| **Payload CMS** | Headless CMS framework | Built on Next.js. Powers both `helgeheupel-cms` and `verity-cms`. Provides admin UI, REST/GraphQL APIs, access control, and media management. |
| **Neon PostgreSQL** | Managed database | Serverless PostgreSQL with branching. Separate databases per CMS instance. Connection via `DATABASE_URI` (not `DATABASE_URL`). |

### Hosting and Deployment

| Platform | Deploys | Key Details |
|----------|---------|-------------|
| **Vercel** | CMS admin apps (`helgeheupel-cms`, `verity-cms`) | Framework preset: Next.js. Automatic deployments on push to main. Preview deployments on PRs. |
| **Cloudflare Pages** | Static/SSR websites (`verity-website`, `helgeheupel-website`) | Edge-first deployment. Qwik SSR support. Custom domains. |

### Cloud Infrastructure

| Service | Purpose | Key Details |
|---------|---------|-------------|
| **Azure** | Primary cloud platform | Regions: West Europe (primary), Germany West Central (data residency). Azure shared responsibility model applies. |
| **Microsoft Entra ID** | Identity and access management | MFA enforced. Conditional Access policies. Identity provider for all users and services. |
| **Microsoft 365** | Productivity suite | Exchange, Teams, SharePoint, OneDrive. Data residency in EU. |

### Development Toolchain

| Tool | Purpose | Key Details |
|------|---------|-------------|
| **pnpm** | Package manager | Strict lockfile (`pnpm-lock.yaml`). Workspace support for monorepo patterns. `--frozen-lockfile` enforced in CI. |
| **Git** | Version control | PR workflow = audit trail. Satisfies ISO 27001 cl. 7.5 (documented information). |
| **Claude Code** | AI development tooling | 7-agent system under AIMS governance. Primary AI tooling for SDLC execution. |
| **ChatGPT / Codex** | AI development tooling | Secondary AI tools. Subject to AI Policy constraints. |

### Task and Project Management

| Tool | Purpose |
|------|---------|
| **Linear** | Development task tracking, sprint management |
| **Float** | Resource planning and product management |
| **NorthGRC** | GRC platform (integration deferred to Phase 9) |

---

## 6. Architecture Decision Records (ADRs)

ADRs document significant technical decisions affecting HH systems. Each ADR receives a sequential ID and follows this lifecycle:

| Status | Description |
|--------|-------------|
| **Proposed** | ADR drafted, under review |
| **Accepted** | Approved by human CTO via PR merge |
| **Deprecated** | No longer applies but kept for historical context |
| **Superseded** | Replaced by a newer ADR (references the successor) |

**ADR Registry:**

| ADR ID | Title | Status | Date |
|--------|-------|--------|------|
| *(No ADRs yet. Registry populates as CTO Agent produces architecture decisions.)* | | | |

**ADR format:** Markdown with YAML frontmatter containing `adr-id`, `title`, `status`, `date`, `deciders`, followed by Context, Decision, Consequences sections.

**ADR storage:** `adrs/ADR-NNN-title-slug.md` (directory created when first ADR is produced).

---

## 7. Operating Phase

**Current phase: Startup** (per SDLC-Growth-v2 framework)

The Startup overlay (`SDLC-Startup-v2.md`) simplifies the full Growth framework for a team of 6 humans + 7 AI agents:

- **Governance:** 2 meetings replace 5 governance bodies (Weekly Technical 30min + Monthly Strategic 60min)
- **Risk tiers:** 4 tiers preserved (Low, Medium, High, Critical). Low/Medium auto-flow via CI/CD + PR. High/Critical require human approval.
- **Gate model:** 6 gates (G0-G5) preserved with risk-tiered criteria
- **Document control:** Git-only. PRs = approval. Commit history = audit trail.
- **Agent trust:** All agents at Trust Level 2 (Supervised Autonomous)

**Growth triggers:** Team size exceeding 12, deployment volume exceeding 3 High/Critical per week, external audit findings requiring governance separation.

---

## 8. Technical Constraints

| Constraint | Detail | Impact on CTO Agent |
|-----------|--------|---------------------|
| **12-week timeline** | Certification readiness target: mid-May 2026 | Architecture decisions must prioritize simplicity and auditability over elegance. No over-engineering. |
| **pnpm workspace structure** | All HH repos use pnpm with strict lockfile | Architecture decisions must be compatible with pnpm workspace resolution. CI/CD must use `--frozen-lockfile`. |
| **Vercel/Cloudflare deployment** | CMS to Vercel (Next.js), websites to Cloudflare Pages (Qwik) | No custom server infrastructure for web apps. Architecture must fit serverless/edge deployment models. |
| **Neon PostgreSQL** | Serverless managed PostgreSQL | No self-managed database infrastructure. Connection pooling via Neon. Branch-based dev environments possible. |
| **Azure West Europe + Germany West Central** | Data residency in EU regions | All infrastructure decisions must respect EU data residency. No US region defaults. |
| **AI system under AIMS governance** | 7 Claude Code agents are an AI system per ISO 42001 | Architecture decisions affecting the agent system require dual consideration: technical merit AND AIMS compliance. |
| **No patent content in artifacts** | Reference by ID only: [PATENT-VE-001], [PATENT-EAM-001] | ADRs and architecture documents must never inline proprietary product details. |
| **CEO risk acceptance** | CEO accepts High/Critical residual risk | Flag all architecture decisions with security implications via `[CEO-SIGNOFF-REQUIRED]`. |

---

*Document: agents/cto/reference/domain-context.md*
*Document ID: HH-CTO-REF-001*
*Created: Phase 4 Plan 01*
