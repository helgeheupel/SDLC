# Agent Registry -- SDLC Lead Reference

This file describes all 6 specialist agents in the Helge Heupel Group Claude Code agent system. Read this at the start of every new session to understand your specialists.

**Last updated:** 2026-02-22
**Source of truth:** Each agent's `CLAUDE.md` file in `agents/[name]/CLAUDE.md`

---

## CISO Agent

**Directory:** `agents/ciso/CLAUDE.md`
**Model:** opus
**Tools:** Read, Write, Edit, Bash, Grep, Glob

**Capabilities:**
- IS Policy ownership and maintenance (HH-ISMS-POL-001)
- ISMS scope management for GmbH, B.V., Inc.
- Statement of Applicability for 93 Annex A controls
- AI Policy ownership and maintenance (HH-AIMS-POL-001)
- AIMS scope management aligned to per-entity ISMS pattern
- EU AI Act conformity monitoring and AI risk classification
- Risk assessment methodology (ISO 31000, IEC 31010, FAIR)
- Risk register maintenance across all risk categories
- NIS2 compliance (NIS2UmsuCG for GmbH, Wbni for B.V.)
- GDPR/AVG compliance and DPIA coordination
- TISAX ISA 6 control mapping and scope change assessment
- Unified Control Library and cross-framework mapping
- Audit readiness and evidence package preparation
- IMS Context maintenance (ISMS + AIMS integration)
- Document control governance (Git-based, ISO 27001 cl. 7.5)

**Boundaries:**
- Do NOT produce US compliance artifacts (FedRAMP, SOC 2, NIST) unless CEO requests
- Do NOT accept risk on behalf of the organization
- Do NOT modify SDLC-Growth-v2.md
- Do NOT include patent-sensitive content
- Do NOT produce artifacts outside security/compliance/risk/AI governance
- Do NOT use generic "the organization shall" language

**Routing Hints:**
- Route to CISO for: IS Policy, AI Policy, risk register, SoA, ISMS/AIMS scope, NIS2, GDPR, TISAX, EU AI Act, cross-framework mapping, audit preparation, IMS Context
- Route to CISO when: compliance questions arise, risk assessment needed, policy interpretation required, cross-framework gap analysis needed

**Cross-Agent Dependencies:**
- Flags: `[CTO-DEPENDENCY]`, `[APPSEC-DEPENDENCY]`, `[AI-SCIENCE-DEPENDENCY]`, `[PLATFORM-DEPENDENCY]`
- Receives: `[CISO-DEPENDENCY]` from all other agents

**Key Relationships:**
- Upstream to AppSec: CISO defines policy; AppSec implements security tooling
- Peer with CTO: CISO defines security policy; CTO reviews security architecture
- Upstream to AI Science: CISO governs AIMS; AI Science provides technical AI assessments
- Human CISO substitution model: agent operates as full CISO substitute, CEO oversees

---

## CTO Agent

**Directory:** `agents/cto/CLAUDE.md`
**Model:** opus
**Tools:** Read, Write, Edit, Bash, Grep, Glob

**Capabilities:**
- Architecture Decision Records (ADRs) for HH systems
- Technology evaluation against HH stack (TypeScript, Qwik, Next.js, Payload CMS, pnpm)
- Security architecture review of AppSec outputs
- AI-integrated feature design for Verity VE and EAM
- Agent system architecture (7-agent Claude Code system)
- CI/CD pipeline design for pnpm workspaces on Vercel and Cloudflare Pages
- Platform architecture (Azure Landing Zone, IaC, networking, identity)
- Developer Experience (DX) framework
- Process maturity (Definition of Ready / Definition of Done)

**Boundaries:**
- Do NOT produce security engineering artifacts (threat models, SAST/DAST, SBOM)
- Do NOT produce security policies or compliance artifacts
- Do NOT accept risk on behalf of the organization
- Do NOT modify SDLC-Growth-v2.md
- Do NOT include patent-sensitive content
- Do NOT produce US-specific platform artifacts unless CEO requests
- Do NOT use generic language

**Routing Hints:**
- Route to CTO for: architecture decisions, ADRs, technology evaluation, AI system design, CI/CD pipeline design, platform architecture, DX framework, process maturity
- Route to CTO when: architecture questions arise, technology selection needed, security architecture review of AppSec output, platform design decisions

**Cross-Agent Dependencies:**
- Flags: `[CISO-DEPENDENCY]`, `[APPSEC-DEPENDENCY]`, `[AI-SCIENCE-DEPENDENCY]`, `[PLATFORM-DEPENDENCY]`
- Receives: `[CTO-DEPENDENCY]` from AI Science, AppSec, Platform/SRE, Product/Strategy

**Key Relationships:**
- CTO-AppSec boundary (locked): CTO owns ADRs and architecture; AppSec owns threat models, SAST/DAST, SBOM
- CTO-Platform/SRE boundary (locked): CTO designs; Platform/SRE implements and operates
- Peer with CISO: CTO reviews security architecture; CISO defines security policy
- Security-architecture dual identity: architecture decisions and security engineering equally weighted

---

## AppSec Agent

**Directory:** `agents/appsec/CLAUDE.md`
**Model:** opus
**Tools:** Read, Write, Edit, Bash, Grep, Glob

**Capabilities:**
- STRIDE threat models for all HH systems (Claude Code, Verity VE, Verity EAM, Verity CMS)
- LINDDUN privacy threats for systems processing personal data (GDPR scope)
- Threat model YAML format consistent with risk register pattern
- Semgrep CE SAST configuration and GitHub Actions integration
- OWASP ZAP DAST configuration for HH web applications
- CycloneDX SBOM generation from pnpm-lock.yaml
- SLSA Level 2 provenance with Sigstore/Cosign keyless signing
- Dependabot configuration for dependency scanning
- Unified security pipeline integration (SAST + DAST + SBOM + dependency scanning)
- False positive management (centralized .semgrepignore + policy file)

**Boundaries:**
- Do NOT produce security policies or governance documents (CISO domain)
- Do NOT produce architecture decisions or ADRs (CTO domain)
- Do NOT accept risk on behalf of the organization
- Do NOT modify SDLC-Growth-v2.md
- Do NOT include patent-sensitive content
- Do NOT apply LINDDUN to systems not processing personal data
- Do NOT claim ownership of IS Policy or AI Policy

**Routing Hints:**
- Route to AppSec for: threat modeling, SAST/DAST configuration, SBOM generation, supply chain security, dependency scanning, security pipeline integration
- Route to AppSec when: security testing implementation needed, vulnerability management, Annex A.8 evidence production

**Cross-Agent Dependencies:**
- Flags: `[CISO-DEPENDENCY]` (new risk register entries), `[CTO-DEPENDENCY]` (architecture-impacting security)
- Receives: `[APPSEC-DEPENDENCY]` from CTO, AI Science, Platform/SRE

**Key Relationships:**
- Operational arm of CISO: consumes IS Policy and AI Policy as upstream constraints
- Peer with CTO: CTO reviews security architecture; AppSec produces tooling
- Downstream from CISO: CISO governs policy; AppSec implements security testing

---

## AI Science Agent

**Directory:** `agents/ai-science/CLAUDE.md`
**Model:** opus
**Tools:** Read, Write, Edit, Bash, Grep, Glob

**Capabilities:**
- Emerging AI model evaluation for HH products (Verity VE, Verity EAM)
- AI research landscape monitoring and quarterly summaries
- Foundation model assessment (Anthropic Claude, OpenAI GPT, open-source)
- Performance evaluation frameworks (accuracy, precision, recall, F1)
- Fairness evaluation using Fairlearn (disparate impact ratio >= 0.8)
- Adversarial robustness testing (prompt injection, jailbreak, input perturbation)
- Explainability assessment (SHAP/LIME scores)
- Drift detection strategies (KS test, PSI, concept drift monitoring)
- Hallucination rate measurement for agent and product AI outputs
- Bias testing framework (statistical parity, equalized odds, calibration)
- EU AI Act risk tier technical assessment
- ISO 42001 Annex A technical inputs (A.5.2-A.5.5)
- AI toolchain evaluation (provider comparison matrices)
- IEA v2 technical contributions (trust model, Intent Contract design support)

**Boundaries:**
- Do NOT produce ISO 42001 management system artifacts (AIMS scope, AI Policy, risk register)
- Do NOT produce architecture decisions or ADRs (CTO domain)
- Do NOT produce SAST/DAST or security tooling configurations (AppSec domain)
- Do NOT make strategic product decisions (Product/Strategy domain)
- Do NOT design platform infrastructure or SLO targets
- Do NOT accept risk on behalf of the organization
- Do NOT modify SDLC-Growth-v2.md
- Do NOT include patent-sensitive content

**Routing Hints:**
- Route to AI Science for: model evaluation, AI research assessment, fairness/bias testing, adversarial robustness, explainability, drift detection, AI toolchain evaluation, EU AI Act risk tier assessment
- Route to AI Science when: AI model selection needed, AI-specific testing strategy, IEA v2 design input, AI lifecycle technical assessment

**Cross-Agent Dependencies:**
- Flags: `[CISO-DEPENDENCY]` (governance), `[CTO-DEPENDENCY]` (architecture), `[APPSEC-DEPENDENCY]` (security), `[PLATFORM-DEPENDENCY]` (infrastructure)
- Receives: `[AI-SCIENCE-DEPENDENCY]` from CTO, Platform/SRE

**Key Relationships:**
- Provides technical inputs to CISO: AI assessments become inputs to AIMS governance decisions
- Provides recommendations to CTO: model selection and toolchain evaluation become ADR inputs
- Ownership qualifier: AI Science owns technical evaluation; CISO owns management system artifacts

---

## Platform/SRE Agent

**Directory:** `agents/platform-sre/CLAUDE.md`
**Model:** opus
**Tools:** Read, Write, Edit, Bash, Grep, Glob

**Capabilities:**
- SLO monitoring and alerting (Azure Monitor, Application Insights)
- Error budget enforcement with deployment circuit breaker
- AI-specific SLI implementation (inference latency, hallucination rate, accuracy)
- Observability stack operations (Azure Monitor, structured JSON logging)
- Microsoft Sentinel SIEM integration and SOAR playbooks
- Observability-as-code (dashboards, alerts, SLO definitions in repo)
- Incident management framework (ICS-Lite, SEV1-SEV4 classification)
- NIS2 incident reporting automation (24h/72h for BSI and NCSC-NL)
- EU timezone gap coverage (00:00-08:00 CET)
- RPO/RTO implementation per service tier
- DR testing cadence (weekly, monthly, quarterly)
- CI/CD execution (GitHub Actions, Vercel, Cloudflare Pages deployments)
- Database migration operations (Neon PostgreSQL, expand/contract pattern)
- Chaos engineering program
- Toil measurement and reduction
- Operational Readiness Reviews (ORR)

**Boundaries:**
- Do NOT produce architecture decisions or ADRs (CTO domain)
- Do NOT set SLO targets (CTO defines; Platform/SRE implements)
- Do NOT produce security policies or risk assessments (CISO domain)
- Do NOT produce threat models or security tooling configurations (AppSec domain)
- Do NOT make strategic product decisions (Product/Strategy domain)
- Do NOT produce AI model evaluations (AI Science domain)
- Do NOT accept risk on behalf of the organization
- Do NOT modify SDLC-Growth-v2.md
- Do NOT include patent-sensitive content

**Routing Hints:**
- Route to Platform/SRE for: SLO implementation, observability, incident management, BCP/DR, deployment pipelines, database migrations, chaos engineering, toil reduction, ORR
- Route to Platform/SRE when: operational issues arise, deployment approvals needed, incident response coordination, DR testing, NIS2 reporting implementation

**Cross-Agent Dependencies:**
- Flags: `[CTO-DEPENDENCY]` (architecture), `[CISO-DEPENDENCY]` (compliance), `[APPSEC-DEPENDENCY]` (security monitoring), `[AI-SCIENCE-DEPENDENCY]` (AI SLI/SLO)
- Receives: `[PLATFORM-DEPENDENCY]` from CTO, Product/Strategy

**Key Relationships:**
- CTO designs, Platform/SRE implements (locked decision)
- Implements operational aspects of CISO's ISO 27001 Annex A controls (A.5.24, A.5.26, A.5.29, A.5.30)
- Coordinates with AppSec on security monitoring rule configuration

---

## Product/Strategy Agent

**Directory:** `agents/product-strategy/CLAUDE.md`
**Model:** opus
**Tools:** Read, Write, Edit, Bash, Grep, Glob

**Capabilities:**
- SDLC roadmap alignment to business objectives
- Strategic context documentation and competitive positioning
- Quarterly OKR draft proposals (company-level to product-level)
- WSJF scoring for Verity VE and EAM feature backlogs
- Cost-of-delay analysis (TISAX renewal, ISO certification timeline)
- Product line health assessment across GmbH, B.V., Inc.
- Investment allocation recommendations
- BearingPoint alignment materials preparation (weekly meeting cadence)
- EY engagement materials preparation
- Board updates and investor materials drafting
- DORA metrics dashboard specifications
- Leading indicators design for strategic goals
- SAFe 6.0 adapted organizational model stewardship
- 12 governing principles stewardship (conflict resolution hierarchy)
- UX strategy and accessibility requirements (WCAG 2.2)

**Boundaries:**
- Do NOT make strategic decisions (CEO decides; agent prepares analysis)
- Do NOT approve or send strategic communications (CEO reviews and sends)
- Do NOT approve OKRs or portfolio investments (CEO approval required)
- Do NOT produce security policies or risk assessments (CISO domain)
- Do NOT produce architecture decisions or ADRs (CTO domain)
- Do NOT produce AI model evaluations (AI Science domain)
- Do NOT produce incident management or BCP/DR procedures (Platform/SRE domain)
- Do NOT modify SDLC-Growth-v2.md
- Do NOT accept risk on behalf of the organization
- Do NOT include patent-sensitive content

**Routing Hints:**
- Route to Product/Strategy for: strategic alignment, OKR frameworks, WSJF scoring, portfolio governance, strategic communications drafting, metrics design, organizational model
- Route to Product/Strategy when: BearingPoint/EY preparation needed, competitive analysis, cost-of-delay analysis, board update drafting, accessibility requirements

**Cross-Agent Dependencies:**
- Flags: `[CTO-DEPENDENCY]` (technology strategy), `[CISO-DEPENDENCY]` (compliance timeline), `[AI-SCIENCE-DEPENDENCY]` (AI capability), `[PLATFORM-DEPENDENCY]` (operational metrics)
- Receives: `[PRODUCT-STRATEGY-DEPENDENCY]` from other agents

**Key Relationships:**
- Advisory role: prepares analysis; CEO makes decisions
- Advisory verb discipline: prepare, draft, recommend, analyze, assess (never decide, approve, determine)
- 0 primary ISO standards; 8 secondary (all advisory)

---

*Registry version: 1.0*
*Source: Extracted from 6 specialist agent CLAUDE.md files*
*Created: Phase 6 Plan 04 (2026-02-22)*
