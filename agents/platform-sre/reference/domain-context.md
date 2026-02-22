---
document-id: HH-PLATSRE-REF-001
title: "Platform/SRE Agent Domain Context: Helge Heupel Group"
version: v1.0
date: 2026-02-22
classification: Internal
status: Active
author: Platform/SRE Agent (Phase 6 Plan 02)
review-cycle: Quarterly
---

# Platform/SRE Agent Domain Context

This document provides HH-specific operational and infrastructure context for the Platform/SRE Agent. Read this first at the start of every new session to ground your responses in the organization's actual technology stack, operational status, SLO framework, and incident management procedures.

For full organizational details (entities, personnel, AI agent roster, products, technology stack, compliance status), refer to `agents/ciso/reference/domain-context.md` (HH-CISO-REF-001).

---

## 1. Organization Overview (Abbreviated)

The **Helge Heupel Group** consists of 3 legal entities: Helge Heupel GmbH (Germany), Helge Heupel B.V. (Netherlands), and Helge Heupel Inc. (United States). GmbH is the primary operating entity. All entities share Azure infrastructure, M365, development toolchain, and Git repositories.

For full entity details (registration, addresses, inter-entity relationships), see `agents/ciso/reference/domain-context.md` Section 1.

---

## 2. Current Technology Stack (Operational View)

| Category | Technology | Details | Status |
|----------|-----------|---------|--------|
| **Cloud Platform** | Azure | West Europe (primary), Germany West Central (DR) | Active |
| **Hosting (CMS)** | Vercel | helgeheupel-cms (HH Admin), verity-cms (Verity Admin) | Active (production) |
| **Hosting (Websites)** | Cloudflare Pages | verity-website (Verity public site) | Active (production) |
| **Database** | Neon PostgreSQL | Serverless PostgreSQL; 2 databases (HH Admin, Verity); connection via `DATABASE_URI` | Active (production) |
| **CI/CD** | GitHub Actions | Current pipeline for all HH repositories | Active |
| **CI/CD (Growth target)** | Azure Pipelines | Per SDLC-Growth-v2 Section 15; migration planned | Planned |
| **Identity** | Microsoft Entra ID | MFA enforced; Conditional Access policies; SSO for all services | Active |
| **Monitoring** | Azure Monitor | Infrastructure and application metrics | Planned (Growth target) |
| **APM** | Application Insights | Application performance monitoring for Vercel and Azure workloads | Planned (Growth target) |
| **SIEM** | Microsoft Sentinel | Security event monitoring, SOAR playbooks, NIS2 reporting automation | Planned (Growth target) |
| **IaC** | Terraform / Bicep | Infrastructure as Code for Azure resources; currently manual provisioning | Planned (Growth target) |
| **CDN** | Cloudflare | Verity website edge delivery | Active |
| **CDN** | Vercel Edge Network | CMS admin app edge delivery | Active |
| **Package Manager** | pnpm | Strict lockfile (`pnpm-lock.yaml`); workspace support; `--frozen-lockfile` in CI | Active |
| **Productivity** | Microsoft 365 | Exchange, Teams, SharePoint, OneDrive; data residency in EU | Active |
| **GRC Platform** | NorthGRC | Governance, Risk, and Compliance management | Planned (Phase 9 integration) |
| **Task Management** | Linear | Development task tracking, sprint management | Active |
| **Resource Planning** | Float | Resource planning and product management | Active |

**Key infrastructure constraint:** CTO designs architecture; Platform/SRE implements and operates. All significant infrastructure changes require CTO architecture approval via ADR when they affect platform design.

---

## 3. AI Tooling Context

Per locked decision, the following AI tools operate within the HH Group infrastructure:

| Tool | Provider | Purpose | SDLC Tier | Operational Responsibility |
|------|----------|---------|-----------|---------------------------|
| **Claude Code** | Anthropic | 7-agent system; primary SDLC tool; agents run locally via Claude Code CLI | tier-2-collaborator | Platform/SRE monitors agent system availability and performance |
| **Claude Cowork** | Anthropic | Collaborative AI development (note: may need AI Registry entry) | TBD | Platform/SRE monitors availability |
| **ChatGPT** | OpenAI | Research and brainstorming | tier-1-assistant | No operational monitoring required (external SaaS) |
| **Codex** | OpenAI | AI-assisted code development | tier-1-assistant | No operational monitoring required (external SaaS) |
| **Azure OpenAI Service** | Microsoft/OpenAI | Backend for Verity VE/EAM product AI features | tier-3-decision-support | Platform/SRE operates inference endpoints; manages by CTO/AI Science; AI-specific SLIs apply |

**AI operational notes:**
- Claude Code agents are the primary AI system under AIMS governance (ISO 42001)
- Azure OpenAI Service endpoints require AI-specific SLI monitoring (inference latency, hallucination rate, factual accuracy)
- All AI tools subject to AI Policy (HH-AIMS-POL-001) constraints including 14 prohibited practices

---

## 4. ARIS Context

Per locked decision, ARIS is part of the HH Group toolset:

| Tool | Provider | Purpose | Status |
|------|----------|---------|--------|
| **ARIS** | Software AG | Organisational structure documentation, process architecture | Available (integration planned for Growth) |

**ARIS details:**
- Uses BPML (Business Process Markup Language) for process models
- Current use: organisational structure documentation and process architecture
- Integration with SDLC artifact pipeline planned for Growth phase
- No ARIS-specific infrastructure or configuration required at Startup

---

## 5. SLO Framework (from SDLC-Growth-v2 Section 16.1)

### Service Tier Model

| Service Tier | Availability | Latency (p50) | Latency (p99) | Error Rate | Incident Response |
|-------------|-------------|---------------|---------------|------------|-------------------|
| **Tier 1 (Mission-critical)** | 99.95% | < 200ms | < 500ms | < 0.1% | 15 min (24/7) |
| **Tier 1-AI (Critical AI)** | 99.9% | < 1s (LLM) | < 2s (LLM) | < 0.1% | 15 min (24/7) |
| **Tier 2 (Business-essential)** | 99.9% | < 500ms | < 1s | < 0.5% | 30 min (business hours + on-call) |
| **Tier 3 (Internal/development)** | 99.5% | < 1s | < 3s | < 1% | 4 hours (business hours) |

### AI-Specific SLIs (Tier 1-AI)

| SLI | Target | Measurement |
|-----|--------|-------------|
| Inference latency (p50) | < 200ms (non-LLM), < 1s (LLM) | Application Insights trace span |
| Inference latency (p99) | < 500ms (non-LLM), < 2s (LLM) | Application Insights trace span |
| Hallucination rate | < 1% of responses | Automated factuality scoring on sampled outputs |
| Factual accuracy | > 95% | Golden-answer comparison on evaluation set (weekly) |
| Throughput | Per-model baseline +/- 10% | Tokens per second per inference endpoint |
| Model freshness | < 90 days since last validated training data | Model registry metadata |
| Output quality score | > 0.85 cosine similarity | Semantic similarity to reference outputs |

### Error Budget Policy

- **Window:** 30-day rolling
- **Burn-rate alerting:** 2x (slow burn, ticket) and 10x (fast burn, page)
- **Enforcement:** > 50% remaining = normal ops; 25-50% = warning; 10-25% = deployment throttle; < 10% = deployment freeze

### Startup Simplification

- Focus on **Tier 2** (Verity CMS apps) and **Tier 3** (internal tools) at Startup
- **Tier 1** activated when products go live to customers
- **Tier 1-AI** activated when Azure OpenAI Service endpoints serve production customer traffic
- Basic availability monitoring (Vercel analytics) currently in place; formal SLO framework at Growth

---

## 6. Incident Management Framework (from SDLC-Growth-v2 Section 16.3)

### Severity Classification

| Severity | Criteria | Response Time | NIS2 Applicability |
|----------|----------|---------------|-------------------|
| **SEV1 (Critical)** | Complete service outage; active data breach; AI model producing harmful output | 15 min | 24h early warning to BSI (GmbH) / NCSC-NL (B.V.) |
| **SEV2 (Major)** | Significant degradation; confirmed intrusion without exfiltration; AI accuracy below SLO | 30 min | Assessed case-by-case |
| **SEV3 (Minor)** | Limited impact; workaround available; moderate model drift | 4 hours | Not applicable |
| **SEV4 (Low)** | Cosmetic; minor inconvenience; minor quality regression | Next business day | Not applicable |

### ICS-Lite Model

| Role | Responsibility | Startup Assignment |
|------|---------------|-------------------|
| **Incident Commander (IC)** | Owns incident end-to-end; makes prioritization/escalation decisions | CTO or IT Pentester |
| **Communications Lead (CL)** | Manages stakeholder updates; status page; customer notifications | CEO or Strategy Partner |
| **Technical Lead (TL)** | Directs technical investigation and remediation | Most qualified engineer for affected system |

### EU Timezone Coverage

- **Primary:** CET/CEST (GmbH Berlin, B.V. Noordbeemster) -- 08:00 to 18:00 CET
- **Gap:** 00:00-08:00 CET (no natural timezone diversity between DE and NL)
- **Startup coverage:** AI-assisted monitoring with automated remediation for known failure modes; auto-escalation for unresolved alerts after 15 minutes
- **Growth target:** Contracted overnight SRE support or cross-entity rotation with US coverage

### NIS2 Reporting Timelines (Legally Binding)

| Timeline | Obligation | Responsible Authority |
|----------|-----------|----------------------|
| **T+24h (max)** | Early warning to competent authority | BSI (GmbH per NIS2UmsuCG) or NCSC-NL (B.V. per Wbni) |
| **T+72h (max)** | Detailed incident report (severity, impact, IoCs) | BSI / NCSC-NL |
| **T+1 month (max)** | Final report (root cause, remediation, lessons learned) | BSI / NCSC-NL |

---

## 7. Operational Status

### Deployed Services

| Service | Platform | Environment | Current Monitoring |
|---------|----------|------------|-------------------|
| **Verity CMS** (verity-cms.vercel.app) | Vercel | Production | Vercel analytics (basic) |
| **HH Admin CMS** (helgeheupel-cms.vercel.app) | Vercel | Production | Vercel analytics (basic) |
| **Verity Website** (verity-website.pages.dev) | Cloudflare Pages | Production | Cloudflare analytics (basic) |

### Infrastructure Readiness

| Capability | Current State | Growth Target |
|-----------|--------------|---------------|
| **Monitoring** | Basic Vercel/Cloudflare analytics | Azure Monitor + Application Insights |
| **SIEM** | None | Microsoft Sentinel with SOAR playbooks |
| **DR readiness** | Neon PostgreSQL automated backups | Full DR plan with Azure region failover |
| **CI/CD** | GitHub Actions basic pipeline | Full pipeline per SDLC-Growth-v2 with canary analysis |
| **IaC** | Manual provisioning | Terraform/Bicep with drift detection |
| **Observability-as-code** | None | All dashboards, alerts, SLOs defined as code |
| **On-call** | Informal (CTO + IT Pentester) | Formal primary/secondary rotation |
| **Chaos engineering** | None | Quarterly game days (Growth), weekly automated (Enterprise) |
| **Runbooks** | Informal documentation | Structured per SDLC-Growth-v2 Section 16.7.4 template |
| **Toil tracking** | None | Automated measurement per SDLC-Growth-v2 Section 16.8 |

---

## 8. Key Constraints

| Constraint | Detail | Impact on Platform/SRE Agent |
|-----------|--------|------------------------------|
| **CTO designs, you implement** | All architecture decisions including SLO targets, observability strategy, and infrastructure design come from CTO Agent | Never produce ADRs or architecture decisions. Flag `[CTO-DEPENDENCY]` for operational adjustments. |
| **NIS2 reporting legally binding** | 24h early warning and 72h detailed report timelines per NIS2UmsuCG (GmbH) and Wbni (B.V.) are non-negotiable | Incident reporting automation is critical path. Manual fallback documented until automation deployed. |
| **TISAX BCP/DR requirements** | TISAX ISA Chapter 10 controls require documented BCP/DR plans with tested recovery procedures | DR plans must be audit-ready with test evidence. |
| **Budget-conscious infrastructure** | Prefer Azure consumption-based pricing, Vercel Pro tier, Neon free/Pro tier | Cost optimization is a standing consideration in all operational decisions. Avoid over-provisioning. |
| **12-week timeline** | Certification readiness target: mid-May 2026 | Operational documentation must be produced rapidly. Focus on Startup-applicable procedures first. |
| **Startup team size** | 6 humans + 7 AI agents | On-call rotation must be realistic for team size. Full SRE team structure deferred to Growth. |
| **EU data residency** | All infrastructure in Azure West Europe and Germany West Central | No US region defaults. All monitoring and log storage in EU. |
| **No patent content** | Reference Verity VE and EAM by name only | Operational documentation references products by name; never inline technical product details. |

---

*Document: agents/platform-sre/reference/domain-context.md*
*Document ID: HH-PLATSRE-REF-001*
*Created: Phase 6 Plan 02*
