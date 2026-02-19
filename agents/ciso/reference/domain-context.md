---
document-id: HH-CISO-REF-001
title: "CISO Agent Domain Context: Helge Heupel Group"
version: v1.0
date: 2026-02-19
classification: Internal
status: Active
author: CISO Agent (Phase 2 Plan 01)
review-cycle: Quarterly
---

# CISO Agent Domain Context -- Helge Heupel Group

This document provides HH-specific context for the CISO Agent. Read this first at the start of every new session to ground your responses in the organization's actual structure, personnel, systems, and compliance posture.

---

## 1. Organization Overview

The **Helge Heupel Group** consists of 3 legal entities operating as an integrated technology startup:

| Entity | Jurisdiction | Registration | Primary Function |
|--------|-------------|-------------|------------------|
| **Helge Heupel GmbH** | Germany (DE) | Registered in Germany (HRB) | Primary operating entity. Product development, EU compliance, ISMS/AIMS home base. Subject to NIS2UmsuCG, BDSG, BSI-Gesetz. |
| **Helge Heupel B.V.** | Netherlands (NL) | Registered in Netherlands (KVK) | EU market expansion. Subject to Wbni (Dutch NIS2 transposition), AVG (Dutch GDPR), NCSC-NL oversight. |
| **Helge Heupel Inc.** | United States (US) | Registered in US | Future US market entry. Skeleton scope at Startup. US compliance (FedRAMP, SOC 2, CCPA) deferred until customer pipeline active. |

**Inter-entity relationships:**
- GmbH is the group parent and primary data controller
- B.V. operates as a joint controller or processor depending on data flow (to be formalized in inter-entity DPA)
- Inc. operates with minimal data processing scope at Startup; data flows to/from EU entities governed by EU-US Data Privacy Framework
- Shared services: Azure tenant, M365, development toolchain, AI agent system, Git repositories
- Separate ISMS and AIMS certificates per entity (not a single group certificate)

---

## 2. Personnel

The Helge Heupel Group operates with 6 human team members at Startup phase:

| # | Role | Name / Identifier | SDLC Function | Security Relevance |
|---|------|-------------------|---------------|-------------------|
| 1 | **CEO** | Helge Heupel | Orchestrator, ultimate sign-off authority, interim CISO delegate | Accepts all residual risk. Approves all policies. Covers CISO responsibilities when human CISO unavailable. Geschaeftsfuehrer with NIS2UmsuCG Sec. 38 management body liability. |
| 2 | **Strategy Partner** | (Named individual) | Product/Strategy lead | Consulted on strategic risk. Informed on security policies. |
| 3 | **Finance Industry Senior Manager** | (Named individual) | Advisory -- financial domain expertise | Consulted on financial risk and industry-specific compliance. |
| 4 | **IT Pentester / Super Admin** | (Named individual) | Head of Platform -- Azure infrastructure, penetration testing | Responsible for infrastructure security, platform operations, deployment execution. Hands-on security testing. |
| 5 | **CTO** | (Named individual) | Architecture, AI engineering, technical leadership | Accountable for technical architecture decisions. Reviews security-relevant code. Approves deployments. |
| 6 | **CISO** | (Named individual) | Security, EU compliance, AI governance | Accountable for security policies (under CEO sign-off). Responsible for ISMS, risk assessment, NIS2, TISAX, ISO 42001. |

**Key operating principle:** The CEO can run the full SDLC process with AI agents alone when consultants are unavailable. The system must function at full capability even when only the CEO is present.

---

## 3. AI Agent Roster

The SDLC Agent System consists of 7 Claude Code AI agents:

| # | Agent | Domain | Status | Created In |
|---|-------|--------|--------|-----------|
| 1 | **SDLC Lead** | Cross-domain orchestration, SDLC compliance | Placeholder | Phase 6 |
| 2 | **CTO** | Architecture, AI engineering, Azure platform | Placeholder | Phase 4 |
| 3 | **CISO** | Security, EU/US compliance, AI governance, risk, compliance integration | **Active (Phase 2)** | Phase 2 |
| 4 | **AI Science** | AI research, model evaluation, ISO 42001 Annex A | Placeholder | Phase 6 |
| 5 | **Platform/SRE** | SLO frameworks, observability, incident management, BCP/DR | Placeholder | Phase 6 |
| 6 | **Product/Strategy** | Strategic alignment, OKRs, WSJF, portfolio governance | Placeholder | Phase 6 |
| 7 | **AppSec** | Threat models, SAST/DAST, SBOM, supply chain security | Placeholder | Phase 4 |

**Agent governance:**
- All agents start at Trust Level 2 (Supervised Autonomous)
- Promotion to Level 3 requires 30+ interactions with demonstrated accuracy + CEO approval
- Agents produce artifacts; humans own risk. No agent may accept risk on behalf of the organization.
- Agent definitions stored at `agents/[name]/CLAUDE.md`; loaded via `claude --agent agents/[name]/CLAUDE.md`

---

## 4. Products

| Product | Description | Security Classification | Patent Status |
|---------|-------------|------------------------|---------------|
| **Verity VE** (Value Engineering) | AI-powered value engineering platform | Confidential | Patent-pending -- reference as [PATENT-VE-001] only |
| **Verity EAM** (Enterprise Architecture Management) | AI-powered enterprise architecture management | Confidential | Patent-pending -- reference as [PATENT-EAM-001] only |

**Patent-sensitive content policy:** Never inline patent-sensitive details in any artifact. Reference by ID only (e.g., [PATENT-VE-001]). Aligns with TISAX ISA Chapter 7 (prototype protection).

---

## 5. Technology Stack

| Category | Systems | Security Relevance |
|----------|---------|-------------------|
| **Cloud Platform** | Azure (West Europe, Germany West Central regions) | Primary processing environment. Azure shared responsibility model applies. Azure SOC 2 and ISO 27001 attestations provide infrastructure-level evidence. |
| **Identity & Access** | Microsoft Entra ID (Azure AD), M365 | Identity provider for all users and services. MFA enforced. Conditional Access policies. |
| **Productivity** | Microsoft 365 (Exchange, Teams, SharePoint, OneDrive) | Email, collaboration, file storage. Data residency in EU. |
| **GRC Platform** | NorthGRC | Governance, Risk, and Compliance management. Integration deferred to Phase 9. |
| **Task Management** | Linear | Development task tracking, sprint management. |
| **Product Management** | Float | Resource planning and product management. |
| **AI Tooling** | Claude Code (Anthropic), ChatGPT (OpenAI), Codex (OpenAI) | AI development and automation tools. 7 Claude Code agents are the primary AI system under AIMS governance. |
| **Version Control** | Git (repositories hosted in cloud) | Single source of truth for all documents and code. PR workflow = audit trail. Satisfies ISO 27001 cl. 7.5. |
| **Development** | TypeScript, Qwik (frontend), Payload CMS (backend), Vercel, Cloudflare Pages | Product development stack. |
| **Database** | Neon (PostgreSQL) | Managed database for product backends. |

---

## 6. Current Compliance Status

| Framework | Status | Key Details |
|-----------|--------|-------------|
| **TISAX** | Certified (scope change needed) | Certified for prototype-development from prior automotive project. Current scope does not match new HH Group scope. Scope change assessment required. |
| **ISO 27001:2022** | Certification in progress | ISMS being established. Phase 2 produces IS Policy, scope statements. Target: certification readiness by mid-May 2026. |
| **ISO 42001:2023** | Certification in progress | AIMS being established alongside ISMS. Phase 2 produces AI Policy. Dual certification with ISO 27001 is the target. |
| **NIS2 / NIS2UmsuCG** | Compliance required | NIS2UmsuCG in force since Dec 5, 2025. Management body personal liability (Sec. 38). BSI registration required. 24h/72h incident reporting timelines. |
| **Wbni (NL)** | Compliance required | Dutch NIS2 transposition. NCSC-NL oversight for B.V. entity. |
| **GDPR / BDSG / AVG** | Ongoing compliance | Data protection obligations for all 3 jurisdictions. DPIA required for AI features processing personal data. |
| **EU AI Act (2024/1689)** | Monitoring and preparation | Prohibited practices apply since Feb 2, 2025. Full conformity timeline extends to Aug 2026. AI Policy must enumerate prohibited practices. |
| **FedRAMP / SOC 2** | Deferred | US compliance frameworks carried as advisory knowledge. No artifacts produced until US customer pipeline active. |

---

## 7. Operating Phase

**Current phase: Startup** (per SDLC-Growth-v2 framework)

The Startup overlay (`SDLC-Startup-v2.md`) simplifies the full Growth framework for a team of 6 humans + 7 AI agents:

- **Governance:** 2 meetings replace 5 governance bodies (Weekly Technical 30min + Monthly Strategic 60min)
- **Risk tiers:** 4 tiers preserved (Low, Medium, High, Critical). Low/Medium auto-flow via CI/CD + PR. High/Critical require human approval.
- **Gate model:** 6 gates (G0-G5) preserved with risk-tiered criteria
- **Document control:** Git-only. PRs = approval. Commit history = audit trail.
- **Agent trust:** All agents at Trust Level 2 (Supervised Autonomous)
- **Principles:** 8 of 12 governing principles fully active; 3 simplified; 1 (radical traceability) deferred to Growth
- **RACI:** 32 activities across 7 domains with 13 columns (6 humans + 7 agents). Accountable (A) is ALWAYS human.

**Growth triggers:** Documented in SDLC-Growth-v2.md. Key triggers include team size exceeding 12, deployment volume exceeding 3 High/Critical per week, external audit findings requiring governance separation.

---

## 8. Key Constraints

| Constraint | Detail | Impact on CISO Agent |
|-----------|--------|---------------------|
| **12-week timeline** | Certification readiness target: mid-May 2026 | All policy and framework artifacts must be produced rapidly. Prioritize completeness over perfection; iterate after initial certification. |
| **EU-first approach** | GmbH (DE) + B.V. (NL) full scope. Inc. (US) skeleton only. | Focus IS Policy and scope statements on EU jurisdictions. US compliance advisory only. |
| **4 information classification levels** | Public, Internal, Confidential, Secret | All artifacts must carry classification in YAML frontmatter. Policies are Internal. Patent artifacts are Confidential or Secret. |
| **Hybrid policy format** | Formal policy + linked operational annex | Keep formal policy short (3-6 pages, auditor-focused). Operational annex contains procedures the team follows day-to-day. |
| **CEO risk acceptance** | CEO accepts High/Critical residual risk (not CTO/CISO split) | Flag all risk acceptance items with [CEO-SIGNOFF-REQUIRED]. Agent drafts; CEO validates. |
| **Agent-human work model** | Agent drafts, human validates | CISO Agent produces policy drafts, risk assessments, compliance mappings. Humans review via PR. CEO approves via merge. |
| **No patent content in artifacts** | Reference by ID only | Never inline Verity VE or EAM technical details. Use [PATENT-VE-001] and [PATENT-EAM-001]. |
| **ISO 42001 auditor expectations** | Standard is 2 years old; auditor expectations poorly documented | Engage certification body in Week 1 for expectations clarification. Build conservatively. |
| **Medium confidence on timeline** | CEO review bottleneck is primary risk | Structure work to minimize CEO review cycles. Batch policy approvals where possible. |

---

*Document: agents/ciso/reference/domain-context.md*
*Document ID: HH-CISO-REF-001*
*Created: Phase 2 Plan 01*
