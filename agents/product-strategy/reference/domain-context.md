---
document-id: HH-STRAT-REF-001
title: "Product/Strategy Agent Domain Context: Helge Heupel Group"
version: v1.0
date: 2026-02-22
classification: Internal
status: Active
author: Product/Strategy Agent (Phase 6 Plan 03)
review-cycle: Quarterly
---

# Product/Strategy Agent Domain Context -- Helge Heupel Group

This document provides HH-specific strategic and business context for the Product/Strategy Agent. Read this first at the start of every new session to ground your responses in the organization's actual entity structure, product lines, consulting relationships, market context, and strategic goals.

---

## 1. HH Group Entity Structure

The **Helge Heupel Group** consists of 3 legal entities, 100% owned by Helge Heupel across all entities. No external investors.

| Entity | Jurisdiction | Registration | Primary Function |
|--------|-------------|-------------|------------------|
| **Helge Heupel GmbH** | Germany (DE) | A limited liability company (Gesellschaft mit beschrankter Haftung) incorporated under the laws of Germany, with registered office in Berlin, entered in the commercial register of the Local Court (Amtsgericht) of Charlottenburg under HRB 180095 B, business address: Kurfurstendamm 194, 10707 Berlin, represented by its Managing Director, Mr Helge Heupel. Share capital: EUR 25,000. | Primary operating entity. Core product development and sales. Subject to NIS2UmsuCG, BDSG, BSI-Gesetz. Home base for ISMS/AIMS certification. |
| **Helge Heupel B.V.** | Netherlands (NL) | A limited liability company incorporated under the laws of The Netherlands, with registered office in Noordbeemster, entered in the commercial register of the chamber of commerce (Kamer van Koophandel, KVK) under 92676545, business address: Jisperweg 2, 1463ND Noordbeemster, North Holland, represented by its Managing Director, Mr Helge Heupel. Share capital: EUR 18,000. | EU market expansion entity. EU customer-facing operations. Subject to Wbni (Dutch NIS2), AVG (Dutch GDPR), NCSC-NL oversight. |
| **Helge Heupel Inc.** | United States (US) | A Delaware C Corporation, incorporated under the laws of the State of Delaware, entered in the State of Delaware File Registry under Delaware State File Number 5236917, registered with the IRS under Employer Identification Number 35-2869749. Registered office: 16192 Coastal Highway, Lewes, Delaware 19958, County of Sussex. Registered agent: Harvard Business Services, Inc. Business address: 1 Sansome Street Suite 1400, San Francisco CA 94104. CEO: Mr Helge Heupel. Share capital: USD 1,000. | Future US market entry. Currently minimal operations. US compliance (FedRAMP, SOC 2, CCPA) deferred until customer pipeline active. |

**Inter-entity relationships:**
- GmbH is the group's nucleus and primary data controller
- B.V. operates as a joint controller or processor depending on data flow (inter-entity DPA to be formalized)
- Inc. operates with minimal data processing scope at Startup; data flows governed by EU-US Data Privacy Framework
- Shared services: Azure tenant, M365, development toolchain, AI agent system, Git repositories
- Separate ISMS and AIMS certificates per entity (not a single group certificate)

---

## 2. Product Lines

### Verity VE (Value Engineering)

| Attribute | Detail |
|-----------|--------|
| **Description** | AI-native value engineering platform |
| **Target Market** | Enterprise, specifically automotive OEMs (BMW, Mercedes, VW, and tier-1 suppliers) |
| **Patent Status** | Patent-pending. Reference as [PATENT-VE-001] only. Never inline technical details. |
| **Technology Backbone** | Azure OpenAI Service |
| **Core Differentiator** | AI-driven cost optimization with human-in-the-loop decision support. Full AI-native stack with compliance-by-design (ISO 27001 + ISO 42001 certified). |
| **TISAX Dependency** | TISAX certification is table-stakes for automotive OEM market. Without valid TISAX label, Verity VE cannot sell to BMW, Mercedes, VW, or tier-1 automotive suppliers. |
| **EU AI Act Classification** | Limited-Risk per Art. 52 (transparency obligations apply) |

### Verity EAM (Enterprise Architecture Management)

| Attribute | Detail |
|-----------|--------|
| **Description** | AI-native enterprise architecture management platform |
| **Target Market** | Large enterprises across industries |
| **Patent Status** | Patent-pending. Reference as [PATENT-EAM-001] only. Never inline technical details. |
| **Technology Backbone** | Azure OpenAI Service |
| **Core Differentiator** | AI-assisted architecture decision support with compliance awareness. Patent-pending AI approach to EA modeling and optimization. |
| **Competitors** | Established EA tools (Sparx Systems, MEGA, LeanIX, Planview), emerging AI-native platforms |
| **EU AI Act Classification** | Limited-Risk per Art. 52 (transparency obligations apply) |

### Verity CMS

| Attribute | Detail |
|-----------|--------|
| **Description** | Content management infrastructure |
| **Technology** | Payload CMS (Next.js-based), deployed on Vercel |
| **Purpose** | Supports marketing websites for HH and Verity brands |
| **Instances** | helgeheupel-cms (Vercel), verity-cms (Vercel) |
| **Strategic Significance** | Supporting infrastructure, not a revenue product |

---

## 3. Consulting Relationships

### BearingPoint

| Attribute | Detail |
|-----------|--------|
| **Engagement Type** | Implementation consulting for ISMS/AIMS certification |
| **Meeting Cadence** | Weekly meetings established (as of 2026-02-20) |
| **Current Status** | TISAX as-is situation communicated. Alignment project plan needed. |
| **Key Principle** | CEO works with AI agents when humans are not available, with highest integrity and giving value to human colleagues. BearingPoint buy-in is vital before proceeding to implementation phases. |
| **Next Steps** | Complete alignment project plan. Learn BearingPoint's perspective, identify gaps/improvements, get buy-in for the new AI-augmented modus operandi. |
| **Strategic Importance** | BearingPoint alignment is a prerequisite for implementation phases. Their buy-in on the AI agent approach is critical for successful ISMS/AIMS certification. |

### EY (Ernst & Young)

| Attribute | Detail |
|-----------|--------|
| **Engagement Type** | Consulting and advisory services |
| **Current Status** | Consulting relationship established. Specific engagement details to be confirmed with CEO. |
| **Strategic Importance** | Audit and advisory perspective complementing BearingPoint implementation focus. |

**Communications protocol for both relationships:** All materials for BearingPoint and EY are drafts prepared by the Product/Strategy Agent. The CEO reviews, modifies as needed, and sends. The agent never sends external communications directly.

---

## 4. TISAX Automotive Context

| Attribute | Detail |
|-----------|--------|
| **Current Certification** | Certified. Label expiring **2026-03-16**. |
| **Participant ID** | P5P6X0 |
| **Scope ID** | S29VC0 |
| **DUNS** | 313531361 |
| **Audit Level** | AL 3 |
| **Assessment Objectives** | High Protection, Very High Protection, Prototype Protection |
| **Auditor** | TUV SUD Management Service GmbH (order 707148729) |
| **ISA Version** | Currently ISA 5.1. Must upgrade to ISA 6 for renewal. |
| **Renewal Status** | TUV SUD (Carsten Diercks) sent renewal inquiry 2025-12-30 requesting new Scope Excerpt from ENX portal. **Unanswered as of 2026-02-20.** |
| **Scope Redefinition Required** | Entire scope must be redefined: new address (Kurfurstendamm 194), single location (Berlin only), new business model (AI software products), ISA 6 upgrade. |
| **Prototype Protection** | ISA Chapter 7, critical for automotive IP handling. Aligns with patent-sensitive content policy ([PATENT-VE-001], [PATENT-EAM-001]). |

**Strategic significance:** TISAX certification is table-stakes for the automotive OEM market. Without a valid TISAX label:
- Verity VE cannot be sold to BMW, Mercedes, VW, or any automotive OEM requiring TISAX
- The automotive value engineering market (Verity VE's primary target) becomes inaccessible
- The 2026-03-16 expiration creates **immediate urgency** for renewal scope definition and TUV SUD engagement

---

## 5. Strategic Goals and Timeline

### Certification Timeline

| Milestone | Target Date | Status | Strategic Impact |
|-----------|------------|--------|-----------------|
| TISAX label expiration | 2026-03-16 | Urgent: renewal scope unanswered | Automotive market access at risk |
| ISO 27001 + ISO 42001 dual certification readiness | Mid-May 2026 | In progress (Phase 5 of 10 complete) | Enterprise credibility, competitive differentiator |
| TISAX renewal (ISA 6) | Dependent on TUV SUD scheduling | Blocked: awaiting TUV SUD engagement | Automotive market continuity |
| EU AI Act full conformity | August 2026 | Monitoring | Regulatory compliance for AI products |

### Product-Market Fit Goals

| Goal | Target | Current Status |
|------|--------|---------------|
| Verity VE product-market fit | Automotive OEM market validation | Pre-market: certification and IP protection prerequisite |
| Verity EAM product-market fit | Enterprise market validation | Pre-market: competitive positioning vs. LeanIX, MEGA, Sparx |
| BearingPoint alignment | Completed alignment project plan | In progress: weekly meetings established |

### SDLC Execution Timeline

- 12-week SDLC execution timeline from SDLC-Growth-v2
- 10 phases total, currently in Phase 6 (Remaining Specialist Agents)
- Phases 1-5 complete: Foundation (Phase 1), CISO Agent + Policy (Phase 2), Risk Framework (Phase 3), CTO/AppSec Agents + Security Engineering (Phase 4), AIMS Core + AI Registry (Phase 5)
- Remaining: Agent Orchestration (Phase 6), Internal Audit (Phase 7), Operational Readiness (Phase 8), GRC Integration (Phase 9), Certification Preparation (Phase 10)

### Growth Triggers

The following triggers indicate transition from Startup to Growth operating phase:
- Team size exceeds 15 (currently 6 humans + 7 AI agents)
- External investment secured
- First paying customer acquired
- Deployment volume exceeds 3 High/Critical per week
- External audit findings require governance separation

---

## 6. Personnel (Strategic View)

| # | Role | Strategic Function |
|---|------|--------------------|
| 1 | **CEO** (Helge Heupel) | Final decision maker for all strategic commitments, product direction, and investor relations. Orchestrator of AI agent system. Geschaeftsfuehrer with NIS2UmsuCG Sec. 38 management body liability. Accepts all residual risk. |
| 2 | **Strategy Partner** | Product and strategy lead. HH Group strategic advisory. Consulted on OKRs, portfolio decisions, and market positioning. |
| 3 | **Finance Industry Senior Manager** | Financial domain advisory. Investment analysis, financial industry compliance context, revenue modeling. |
| 4 | **CTO** | Technical leadership, architecture decisions, AI engineering direction. Translates strategic requirements into architecture decisions. |
| 5 | **CISO / External CISO (NorthGRC)** | Information security governance, compliance leadership. Ensures strategic decisions consider certification requirements. |
| 6 | **IT Pentester / Super Admin** | Head of Platform. Azure infrastructure, penetration testing, deployment execution. |

For full personnel details (security relevance, SDLC functions), reference `agents/ciso/reference/domain-context.md` Section 2.

**Key operating principle:** The CEO can run the full SDLC process with AI agents alone when consultants are unavailable. The system must function at full capability even when only the CEO is present.

---

## 7. Competitive Landscape

### Verity VE Competitive Context

| Category | Competitors | HH Differentiator |
|----------|-------------|-------------------|
| **Traditional VE consultancies** | Large consultancies with manual VE processes | AI-native automation vs. manual-intensive processes |
| **Emerging AI-assisted cost tools** | Startup and enterprise tools adding AI to cost analysis | Patent-pending AI approach [PATENT-VE-001], full compliance-by-design |
| **Automotive-specific tools** | OEM-internal cost engineering systems | Independent platform with TISAX certification, automotive domain expertise |

### Verity EAM Competitive Context

| Category | Competitors | HH Differentiator |
|----------|-------------|-------------------|
| **Established EA tools** | Sparx Systems (Enterprise Architect), MEGA (HOPEX), LeanIX (SAP), Planview | AI-native architecture from ground up vs. AI bolted onto legacy |
| **Microsoft ecosystem** | Azure DevOps, Visio, Power Platform | Purpose-built for EA vs. general-purpose tools |
| **Emerging AI-native platforms** | New entrants building AI-first EA | Patent-pending approach [PATENT-EAM-001], dual ISO certification |

**Classification note:** Detailed competitive analysis including specific competitor pricing, strategy, and market share data is classified **Confidential**. Do not include in non-classified documents.

---

## 8. Key Constraints

| Constraint | Detail | Impact on Product/Strategy Agent |
|-----------|--------|----------------------------------|
| **All strategic decisions require CEO approval** | Agent prepares analysis and recommends; CEO reviews, modifies, and decides | Every strategic artifact must include `[CEO-SIGNOFF-REQUIRED]` for commitments |
| **All external communications require CEO review** | BearingPoint, EY, investors, customers: agent drafts, CEO reviews and sends | Never send or finalize external materials. Always label as draft. |
| **Patent-sensitive product features** | Reference by ID only: [PATENT-VE-001], [PATENT-EAM-001] | Never inline product architecture, algorithms, or technical implementation in strategic documents |
| **TISAX expiration urgency** | Label expires 2026-03-16 | Cost-of-delay analysis for TISAX renewal is highest priority |
| **Dual certification timeline** | ISO 27001 + ISO 42001 readiness by mid-May 2026 | All strategic planning must accommodate certification workstream |
| **No external investors** | All strategic decisions are CEO-only (no board approval required) | Simplifies decision chain but concentrates approval bottleneck on CEO |
| **12-week timeline** | Certification readiness target creates compressed execution window | Strategic planning must prioritize certification-critical work over nice-to-have improvements |
| **Medium confidence on timeline** | CEO review bottleneck is primary risk to timeline | Structure work to minimize CEO review cycles. Batch strategic reviews where possible. |

---

*Document: agents/product-strategy/reference/domain-context.md*
*Document ID: HH-STRAT-REF-001*
*Created: Phase 6 Plan 03*
