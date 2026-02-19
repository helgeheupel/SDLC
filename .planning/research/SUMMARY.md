# Project Research Summary

**Project:** ISO 27001 + ISO 42001 Dual Certification Agent System for Helge Heupel Group
**Domain:** Compliance engineering — AI-agent-powered ISMS/AIMS certification
**Researched:** 2026-02-18
**Confidence:** HIGH (stack and architecture), MEDIUM (timeline feasibility and ISO 42001 auditor expectations)

## Executive Summary

The Helge Heupel Group (1 CEO + 4 consultants + 6 Claude Code AI agents) is pursuing simultaneous ISO 27001:2022 + ISO 42001:2023 dual certification plus TISAX maintenance by mid-May 2026 — a 12-week window that is aggressive but achievable with AI-agent acceleration. Research confirms the approach is sound: both standards use the ISO Harmonized Structure (clauses 4–10), meaning a single Integrated Management System (IMS) can satisfy both simultaneously rather than running two parallel systems. The 6 Claude Code agents — already the team's working environment — are correctly architected as document-producing assistants under human orchestration, not autonomous decision-makers. The critical success factor is that agents produce drafts and humans own every decision.

The recommended stack is lean and purposeful: Vanta for GRC platform (continuous monitoring, evidence collection, auditor portal), Claude Code CLI for all 6 domain agents, Markdown + YAML in Git as the documentation-as-code store, Azure-native tooling (Policy, Defender, Sentinel) for automated evidence generation, and Pandoc for auditor-facing PDF rendering. The deliberate exclusions are as important as the inclusions: no ServiceNow GRC, no Confluence, no LangChain, no separate AIMS documentation system. The "Everything as Code" principle governs everything.

The dominant risks are not technical — they are execution risks. Five pitfalls are certification-killers: missing operational evidence (policies without proof of implementation), ISMS/AIMS treated as silos, boilerplate AI-generated artifacts that an auditor will see through, a risk register no human can explain, and selecting a certification body not accredited for ISO 42001. All five must be addressed in the first two weeks, not as an afterthought before Stage 1. The timeline requires evidence generation to begin on Day 1, the certification body to be selected in Week 1, and the CISO Agent's foundational artifacts to be the first deliverable.

## Key Findings

### Recommended Stack

The stack is Azure-native, agent-native, and deliberately startup-weight. Vanta (recommended over Drata, Sprinto, and Secureframe) is the only GRC platform with mature dual ISO 27001 + ISO 42001 support and strong Azure integration at startup pricing (~EUR 10–15K/year). It does not replace the agents — Vanta collects evidence and provides the auditor-facing portal; agents produce the substantive policy and procedure artifacts that Vanta cannot generate. The two systems complement each other: Git is the source of truth, Vanta is the auditor interface.

All 6 agents run as Claude Code sessions loaded from domain-specific CLAUDE.md system prompts. No LangChain, no orchestration framework, no custom API — the CEO orchestrates agents via CLI sessions with file-mediated communication through Git. This is sufficient and correct for human-orchestrated document production. Switching to an orchestration framework at startup scale would add engineering overhead without value.

**Core technologies:**
- **Vanta (current SaaS):** GRC platform — best ISO 27001 + ISO 42001 dual support at startup scale with Azure integration
- **Claude Code CLI (Opus 4.6):** 6 domain agents — already in use, 1M context for reading full ISO standards, no additional infrastructure
- **Markdown + YAML in Git (Azure DevOps Repos):** Documentation store — agent-native, version-controlled, PR-based review satisfies ISO 7.5.3 document control
- **Azure Policy + Defender for Cloud + Sentinel:** Automated evidence — infrastructure compliance, CSPM, SIEM producing continuous evidence from Day 1
- **Pandoc 3.x:** Rendering pipeline — Markdown-to-PDF for auditor-facing documents
- **OPA/Gatekeeper + Checkov:** Compliance-as-code — Kubernetes policy enforcement and IaC scanning
- **SonarQube + Semgrep + Trivy + Syft:** Security pipeline evidence — SAST, SCA, SBOM generation mapping to ISO 27001 Annex A.8

### Expected Features

Research identified 50 table-stakes artifacts (without which no certificate is possible), 17 differentiator features that justify the AI-agent approach, and 10 anti-features to deliberately defer.

**Must have (table stakes — 50 items across 7 categories):**
- ISMS/AIMS foundation documents: Context, scope, IS Policy, AI Policy, objectives, roles (TS-01 through TS-09)
- Risk management: IS Risk Methodology, IS Risk Register, Risk Treatment Plan, AI Risk Assessment, AI Impact Assessment, SoA-93 (TS-10 through TS-16) — SoA is the critical path bottleneck
- Operational controls and procedures: Incident management, BCP/DR, access control, change management, cryptography, supplier policy, physical security, HR security (TS-17 through TS-28)
- ISO 42001 AI-specific artifacts: AI System Registry, data governance, transparency framework, human oversight controls, ethics framework, AI third-party management (TS-29 through TS-36)
- Performance evaluation: Internal audit, management review, monitoring, nonconformity process (TS-37 through TS-41)
- Technical security controls: Threat intelligence, asset inventory, SDLC policy, vulnerability management, logging, network security, data protection (TS-42 through TS-48)
- TISAX maintenance: VDA ISA 6 control evidence mapping, prototype protection (TS-49, TS-50)

**Should have (AI-agent differentiators):**
- Continuous artifact generation pipeline — agents produce on demand vs. periodic document sprints (DF-01)
- Cross-standard consistency engine — automated contradiction detection across 130+ controls (DF-02)
- Evidence chain traceability — every artifact tagged with agent, reviewer, sign-off status (DF-03)
- Risk-control linkage matrix, auto-maintained (DF-04)
- Policy-to-procedure cascade — propagate changes downstream automatically (DF-06)
- AI agent self-governance documentation — agents are themselves documented as AI systems under ISO 42001 (DF-11)
- NIS2 readiness overlay and EU AI Act alignment mapping (DF-13, DF-14)

**Defer to v2+ (anti-features):**
- Real-time compliance dashboard (AF-03) — attractive demo, not a certification requirement
- SOC 2 Type II artifacts (AF-04) — no US customer requiring it; dilutes focus
- FedRAMP authorization package (AF-05) — no US federal customer; 6–18 month effort
- Full SDLC-Growth-v2 Enterprise implementation (AF-08) — explicitly out of scope per PROJECT.md
- Automated penetration testing pipeline (AF-07) — manual pentest + DAST scanning is sufficient
- GRC platform with dedicated tooling beyond Vanta (AF-01) — justified only at 20+ people

### Architecture Approach

The architecture is a CEO-orchestrated, file-mediated multi-agent system where 6 Claude Code agents produce compliance artifacts through a 4-stage pipeline: Draft (agent) → Review (human) → Approved (sign-off) → Archived (evidence). Agents communicate exclusively through Git-stored files, with the CEO acting as the orchestration bridge between sessions. This is not a limitation — it is the correct architecture for compliance contexts where every artifact must have a human decision-maker in the chain.

**Major components:**
1. **CISO Agent (CLAUDE.md)** — foundational IS Policy, risk framework, SoA, ISMS/AIMS core; built first as the critical path dependency for all other agents
2. **CTO Agent + AppSec Agent (parallel)** — architecture decisions, IEA implementation plan, threat models, SBOM pipeline; consume CISO's policy framework as constraints
3. **AI Science Agent + Platform/SRE Agent + Product/Strategy Agent (parallel)** — ISO 42001 Annex A artifacts, SLO/BCP/DR, strategic alignment; lightest inter-dependencies
4. **Artifact pipeline (Git + Vanta)** — four-stage lifecycle from agent draft to archived evidence; every artifact carries structured YAML metadata mapping to ISO controls
5. **Shared context layer** — SDLC-Growth-v2.md, risk register, startup overlay, shared definitions; read-only reference for all agents ensuring consistency
6. **CEO orchestrator (human)** — sole decision authority; directs agent sessions, reviews drafts, approves artifacts, conducts management review and risk workshops

**Key patterns to follow:**
- CISO Agent first, always — no downstream agent can produce audit-ready artifacts without the foundational risk framework and SoA
- Startup Overlay before artifact production — explicitly constrains agents to startup-weight output, preventing over-documentation
- Evidence generation from Day 1 — Azure Policy, Sentinel, and audit logs configured before the first policy is written
- Single SSOT registry (YAML) for shared definitions — canonical risk methodology, role definitions, control statuses across all agents

### Critical Pitfalls

1. **Missing evidence chain (P4, CRITICAL)** — AI agents produce policies but cannot produce proof of implementation. Operational evidence (Azure logs, meeting minutes, training records, test results) must be generated from Day 1. Schedule management review in Week 2, internal audit by Week 6, tabletop exercise by Week 6. Without operational evidence, Stage 2 fails regardless of document quality.

2. **ISMS/AIMS treated as silos (P5, CRITICAL)** — Dual certification with a 5-person team requires a single Integrated Management System. Two parallel management systems doubles the artifact load and is operationally unsustainable. The ISO Harmonized Structure (clauses 4–10) is identical between standards — implement once, extend for AI-specific requirements. This architecture decision must be made Day 1 before any artifact is produced.

3. **Boilerplate artifacts that fail auditor scrutiny (P1, CRITICAL)** — Auditors are trained to detect AI-generated compliance documents that use generic language. Every artifact must name specific HH systems (Azure Entra ID, Neon databases, Cloudflare Pages), specific people, specific risks. Apply the "name three" rule: every control or risk statement names at least three HH-specific instantiations. Context injection is mandatory in all agent prompts.

4. **Theoretical risk assessment (P7, CRITICAL)** — The risk register must result from a real human workshop, not be fully AI-generated. Agents draft the register as a starting point; a 4-hour workshop with all 5 team members validates, challenges, and owns the final assessments. The auditor will interview risk owners — if they cannot explain the reasoning, it is a nonconformity.

5. **Wrong certification body (P10, HIGH)** — Not all certification bodies are ISO 42001 accredited. Week 1 action: identify 3–5 bodies accredited for both standards, negotiate combined audit and multi-site scope under IAF MD 1. If the wrong body is selected, the 12-week timeline collapses. If no body can accommodate combined ISO 42001 + 27001 in time, the fallback is certifying ISO 27001 first and adding ISO 42001 as scope extension 3–6 months later.

## Implications for Roadmap

The dependency structure is clear and must drive phase ordering. All research converges on the same build order: CISO Agent foundation first, then parallel technical agents, then domain-specific agents, then integration and evidence validation. The 12-week calendar maps to a PDCA cycle: Plan (Weeks 1–4), Do (Weeks 5–8), Check (Weeks 9–10), Act (Weeks 11–12), targeting Stage 1 readiness at Week 10 with Stage 2 occurring Weeks 14–16 after nonconformity remediation.

### Phase 1: IMS Foundation and Agent Infrastructure (Weeks 1–2)

**Rationale:** Every downstream artifact depends on foundational decisions made here. The IMS architecture (single integrated system, not two silos) must be decided on Day 1. The CISO Agent is the critical path — no other agent can produce audit-ready artifacts without its risk framework, IS Policy, and SoA. The Startup Overlay prevents agents from producing Enterprise-weight artifacts for a 5-person team.

**Delivers:**
- IMS architecture decision and integration blueprint
- Startup Overlay for SDLC-Growth-v2 (which sections apply at startup phase)
- CISO Agent CLAUDE.md (system prompt) constructed and validated
- SSOT registry with canonical definitions (risk methodology parameters, role definitions, terminology glossary, control numbering)
- IS Policy, AI Policy, ISMS Scope, AIMS Scope — approved by CEO
- AI System Registry (first version) populated with known AI systems
- Context of Organization analysis covering both IS and AI aspects
- Roles and responsibilities documented
- Vanta configured with ISO 27001 + ISO 42001 frameworks + Azure integration
- Azure Policy, Sentinel, CI/CD audit logging deployed (evidence collection begins)
- Certification body selected, combined audit and multi-site approach confirmed (Week 1 action)

**Addresses:** TS-01 through TS-09, TS-18, TS-29 (initial), DF-03
**Avoids:** P5 (ISMS/AIMS silos — architecture decision Day 1), P10 (wrong certification body — Week 1), P3 (over-documentation — Startup Overlay controls scope), P2 (contradictions — SSOT registry established)
**Research flag:** Phase well-documented; standard patterns apply. Skip deeper research.

### Phase 2: Risk Framework and SoA (Weeks 2–5)

**Rationale:** The SoA is the single most important artifact for ISO 27001 and is the critical path bottleneck for all control implementations. It must exist before any Annex A procedure or evidence can be properly scoped. The risk assessment methodology must be established and validated through a human workshop before the register is populated. AI Impact Assessment is the backbone of ISO 42001 Annex A compliance.

**Delivers:**
- Risk Assessment Methodology (IS + AI, unified, 5x5 qualitative matrix)
- IS Risk Register — agent-drafted, human workshop validated in Week 3 (4-hour session, all 5 team members + CEO)
- IS Risk Treatment Plan — CEO approved
- AI Risk Assessment and AI Impact Assessment Process
- Statement of Applicability (SoA) — 93 ISO 27001 Annex A controls + ISO 42001 Annex A controls in unified spreadsheet
- ISO 42001 AI Controls Applicability determination
- First management review meeting conducted and minuted (Week 2)

**Uses:** YAML-in-Git risk register (agent-writable, version-controlled), Vanta risk dashboard for auditor view
**Implements:** Risk management component, unified SoA architecture
**Addresses:** TS-10 through TS-16
**Avoids:** P7 (theoretical risk assessment — human workshop required), P8 (weak SoA — human applicability decisions, evidence links required), P9 (PDCA shortcuts — management review Week 2)
**Research flag:** SoA construction is complex and HH-specific. CISO Agent needs the full ISO 27001 Annex A control list injected. Standard patterns otherwise apply.

### Phase 3: Agent Infrastructure — CTO and AppSec Agents (Weeks 2–3, parallel with Phase 2)

**Rationale:** CTO and AppSec Agents consume the CISO's policy framework as constraints. They can be built in parallel with Phase 2 risk work once IS Policy and ISMS Scope exist. Architecture decisions (ADRs) and threat models are needed as inputs for the risk register workshop (Week 3). AppSec outputs (SBOM pipeline, SAST config) generate automated evidence that maps to ISO 27001 Annex A.8 controls.

**Delivers:**
- CTO Agent CLAUDE.md constructed and validated
- AppSec Agent CLAUDE.md constructed and validated
- Architecture Decision Records template + key ADRs
- IEA v2 Implementation Plan (startup scope)
- Threat Model Template and Methodology (STRIDE/LINDDUN)
- SAST/DAST/SCA Configuration Plan (SonarQube, Semgrep, Trivy)
- SBOM generation pipeline design (Syft, CycloneDX)
- Supply Chain Security Procedure
- Security Architecture Decision Records (SecADRs)

**Uses:** CTO Agent, AppSec Agent, Azure DevOps Pipelines for evidence automation
**Implements:** Technical security controls architecture, supply chain security
**Addresses:** TS-42 through TS-48 (partial), DF-15, DF-16, DF-17
**Avoids:** P14 (certification not security — real security tooling deployed, not just documented)
**Research flag:** SBOM and SLSA patterns are well-documented. Standard implementation. Skip research-phase.

### Phase 4: Operational Controls and AI-Specific Artifacts (Weeks 5–8)

**Rationale:** Operational procedures and AI-specific Annex A artifacts are the largest artifact volume (30+ documents). They can only be properly scoped once the SoA exists (Phase 2 output). Three agents work in parallel — AI Science, Platform/SRE, and Product/Strategy — consuming Phase 1 and 2 outputs. This phase is also where operational evidence must be actively collected, not just documented.

**Delivers:**
- AI Science Agent CLAUDE.md constructed and validated
- Platform/SRE Agent CLAUDE.md constructed and validated
- Product/Strategy Agent CLAUDE.md constructed and validated
- Incident Management Procedure (IS + AI incident classification)
- Business Continuity Plan and DR Procedure
- Access Control Policy and Procedures
- Change Management Procedure
- Cryptography Policy
- Supplier/Third-Party Security Policy
- Physical Security Controls documentation
- HR Security Procedures
- AI System Lifecycle Procedures (ISO 42001 A.6)
- AI Data Governance Framework (ISO 42001 A.3, A.7)
- AI Transparency and Explainability Framework (ISO 42001 A.8)
- AI Ethics and Responsible AI Framework (ISO 42001 A.5)
- Human Oversight Controls (ISO 42001 A.8)
- AI Third-Party Management Controls (ISO 42001 A.10)
- SLO Framework, Monitoring and Logging Policy
- Security awareness training delivered; completion attestations collected (Week 4)
- Tabletop incident response exercise conducted and documented (Week 6)
- First internal audit conducted (limited scope, Week 7–8)
- TISAX VDA ISA 6 control evidence mapping (parallel, leveraging ISO 27001 evidence)

**Uses:** AI Science Agent, Platform/SRE Agent, Product/Strategy Agent, Vanta evidence collection
**Implements:** All operational controls, ISO 42001 Annex A domains
**Addresses:** TS-17 through TS-50
**Avoids:** P4 (missing evidence chain — tabletop, training, audit all conducted this phase), P6 (ISO 42001 gaps — Annex A controls completed), P11 (TISAX forgotten — parallel mapping), P13 (CEO review bottleneck — tiered approval, staggered delivery)
**Research flag:** ISO 42001 Annex A control implementation guidance is sparse (standard is only 2 years old). Phase 4 may need targeted research on specific controls during planning, particularly A.5 (AI Impact Assessment) and A.8 (Transparency). Flag for `/gsd:research-phase` during roadmap creation.

### Phase 5: Integration, Gap Analysis, and Stage 1 Readiness (Weeks 9–10)

**Rationale:** Cross-agent artifact consistency must be verified before submitting to a Stage 1 auditor. The CISO Agent performs gap analysis across all approved artifacts. Configuration verification sprint compares documented controls against actual Azure/Cloudflare/Neon settings. Stage 1 documentation package assembled.

**Delivers:**
- Cross-agent consistency audit — automated cross-reference checks for contradictions
- CISO Agent gap analysis across all approved artifacts vs. SoA (DF-05)
- Configuration verification sprint — export and compare actual system settings against documented controls
- Agent self-governance documentation — Claude Code agents documented as AI systems under ISO 42001 (DF-11)
- NIS2 readiness overlay (DF-13)
- EU AI Act alignment mapping (DF-14)
- Evidence register complete with all evidence links verified
- Management review meeting conducted (Week 8–9) — IS + AI performance review
- Stage 1 documentation package assembled and submitted (Week 10)
- Security metrics dashboard operational for auditor demonstration

**Avoids:** P1 (boilerplate — auditor-perspective review gate applied to all artifacts), P2 (contradictions — cross-reference checks), P9 (PDCA shortcuts — Check phase completed)
**Research flag:** Well-documented patterns. Standard audit preparation. Skip research-phase.

### Phase 6: Stage 1 Nonconformity Remediation and Stage 2 Preparation (Weeks 11–16)

**Rationale:** Stage 1 will produce findings. The 12-week plan targets Stage 1 readiness, not Stage 2 completion. Realistic timeline: Stage 1 at Week 10, remediation Weeks 11–12, Stage 2 at Weeks 14–16. This buffer is non-negotiable.

**Delivers:**
- Stage 1 nonconformity responses and corrective actions
- Second configuration verification sprint (Week 11)
- Penetration test (limited scope, Week 11–12)
- Second risk re-assessment (demonstrates iterative process)
- CTO/CISO posture review (security posture, not just documentation review)
- Stage 2 evidence package
- ISO 27001 + ISO 42001 dual certificate (target Week 16)

**Avoids:** P9 (PDCA shortcuts — Act phase properly executed), P14 (certification not security — posture review ensures actual security improvement)
**Research flag:** Standard certification body engagement patterns. No deeper research needed.

### Phase Ordering Rationale

- CISO Agent on Day 1 because every other agent depends on its risk framework and SoA — this is the only hard sequential constraint
- Certification body selection in Week 1 because ISO 42001 accreditation is not universal — a 2-week delay here can collapse the entire timeline
- Evidence generation from Day 1 (Azure Policy, Sentinel) because Stage 2 requires 2–3 months of operational evidence — waiting until documentation is "done" guarantees failure
- IMS architecture decided before any artifact is produced — the decision cannot be reversed later without discarding completed work
- Startup Overlay before agents produce artifacts — without it, agents default to Enterprise-weight output that is unsustainable for a 5-person team and raises auditor credibility concerns
- TISAX mapped in parallel with ISO 27001 (not sequentially) because 70–80% of TISAX ISA 6 controls overlap with ISO 27001 Annex A — parallel mapping is efficient, sequential is wasteful
- Stage 1 readiness at Week 10 (not Week 12) — the 2-week gap to Stage 2 scheduling and the remediation buffer are not optional

### Research Flags

**Phases needing deeper research during planning:**
- **Phase 4 (Operational Controls + ISO 42001 Annex A):** ISO 42001 is 2 years old with limited certification precedent. Specifically, AI Impact Assessment methodology (A.5), AI Transparency requirements (A.8), and auditor expectations for first-time ISO 42001 are poorly documented. Flag for `/gsd:research-phase` during roadmap planning. Recommend direct engagement with the selected certification body in Week 1 to close this gap.
- **Phase 4 (TISAX VDA ISA 6 mapping):** TISAX is not natively supported in any GRC platform. The Vanta custom framework approach is pragmatic but untested at HH scale. Flag for validation during Phase 1 Vanta configuration.

**Phases with standard patterns (skip research-phase):**
- **Phase 1 (IMS foundation, agent infrastructure):** Claude Code CLAUDE.md architecture is well-understood; Vanta configuration is documented; IMS approach is standard certification body practice.
- **Phase 2 (Risk framework and SoA):** ISO 27001 risk assessment and SoA are extensively documented. HH-specific content is the variable, not the process.
- **Phase 3 (CTO and AppSec agents):** SBOM, SAST, threat modeling — all well-documented engineering patterns.
- **Phase 5 (Integration and Stage 1 readiness):** Standard audit preparation patterns.
- **Phase 6 (Remediation and Stage 2):** Standard certification body process.

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH | All tool selections grounded in existing project context (SDLC-Growth-v2, Azure-native stack) + professional knowledge of GRC market. Vanta ISO 42001 pricing should be verified with sales team. |
| Features | HIGH | ISO 27001 and ISO 42001 mandatory requirements are deterministic (normative standards). Agent differentiator features are logically derived. Timeline feasibility is medium confidence. |
| Architecture | HIGH | Claude Code CLI + Git + CLAUDE.md system prompts are the existing project environment. 4-stage pipeline and IMS approach are established patterns. Build order is dependency-driven with no ambiguity. |
| Pitfalls | HIGH | All pitfalls are grounded in the existing gap analyses (AIGO, EU-CA, PSA, PSRE) and well-documented ISO certification failure modes. ISO 42001-specific pitfalls are medium confidence (limited precedent). |

**Overall confidence:** HIGH for the approach, MEDIUM for the ISO 42001-specific execution details.

### Gaps to Address

- **ISO 42001 auditor expectations:** The standard is 2 years old. Certification body selection (Phase 1) should include explicit conversation about their ISO 42001 audit methodology and evidence expectations. This gap cannot be resolved through research alone — direct engagement required.

- **Vanta ISO 42001 control coverage:** Vanta's ISO 42001 module was announced in 2025. The actual control coverage and mapping completeness should be verified with Vanta sales before purchase. If coverage is insufficient, maintain parallel YAML mapping in Git as the source of truth.

- **TISAX scope change assessment:** The previous TISAX certification scope may not match the new HH Group scope (cloud services, AI). This may require a new assessment, not just maintenance. Must be confirmed in Week 1.

- **Multi-site certification strategy:** Three legal entities across three jurisdictions (DE, NL, US) under IAF MD 1 multi-site rules has specific requirements. Legal counsel review recommended in Week 2. This gap cannot be resolved by agents.

- **12-week timeline feasibility:** Research rates this as MEDIUM confidence. The human review bottleneck (CEO as sole approver) is the most likely failure mode. Tiered approval authority (CEO/CTO/consultant) and staggered delivery must be implemented from Week 1. If timeline slips, the pragmatic fallback is ISO 27001 first, ISO 42001 as scope extension 3–6 months later.

## Sources

### Primary (HIGH confidence)
- SDLC-Growth-v2.md (7,434 lines) — primary architectural reference for agent design, evidence automation architecture, risk management framework, tool selections
- ISO/IEC 27001:2022+Amd.1:2024 (licensed copy) — mandatory requirements, Annex A control list (93 controls)
- ISO/IEC 42001:2023 (licensed copy) — mandatory requirements, Annex A control list (A.2–A.10)
- Phase 1 gap analyses: AIGO (AI Governance), EU-CA (EU Compliance), PSA (Software Architecture), PSRE (SRE) — gap identification, priority setting, cross-entity complexity

### Secondary (MEDIUM confidence)
- Vanta platform documentation and market positioning — GRC platform recommendation
- ISO certification body public guidance on integrated audits (BSI, TUV, DNV) — IMS approach, combined audit feasibility
- IAF MD 1 (multi-site certification rules) — multi-entity scope design
- VDA ISA 6.0 documentation — TISAX control requirements

### Tertiary (LOW confidence — verify during planning)
- Vanta ISO 42001 module capabilities (announced 2025, limited independent documentation)
- ISO 42001 audit methodology precedents (standard is 2 years old; limited published audit reports)
- Timeline benchmarks for 12-week ISO dual certification (novel approach; no direct comparators)

---
*Research completed: 2026-02-18*
*Ready for roadmap: yes*
