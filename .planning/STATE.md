# Project State

## Project Reference

See: .planning/PROJECT.md (updated 2026-02-18)

**Core value:** CEO can interchangeably steer humans and AI agents to produce audit-ready compliance artifacts at enterprise quality with startup speed
**Current focus:** Phase 4: CTO and AppSec Agents with Security Engineering

## Current Position

Phase: 4 of 10 (CTO and AppSec Agents with Security Engineering)
Plan: 5 of 5 complete in current phase
Status: Phase 4 COMPLETE. All 5 plans executed: CTO Agent, AppSec Agent, Threat Modeling, SAST/DAST, SBOM/Supply Chain.
Last activity: 2026-02-22 -- Completed 04-05-PLAN.md (SBOM Generation and Supply Chain Security)

Progress: [█████░░░░░] 50%

## Performance Metrics

**Velocity:**
- Total plans completed: 17
- Average duration: 10min
- Total execution time: 2.70 hours

**By Phase:**

| Phase | Plans | Total | Avg/Plan |
|-------|-------|-------|----------|
| 1 | 4 | 72min | 18min |
| 2 | 4 | 27min | 7min |
| 3 | 4 | 34min | 9min |
| 4 | 5 | 29min | 6min |

**Recent Trend:**
- Last 5 plans: 04-05 (6min), 04-04 (7min), 04-03 (7min), 04-02 (4min), 04-01 (5min)
- Trend: Phase 4 complete in 29 min total (5 plans). Security engineering specs averaging 6-7 min. Wave 2 (3 plans) executed in 20 min.

*Updated after each plan completion*

## Accumulated Context

### Decisions

Decisions are logged in PROJECT.md Key Decisions table.
Recent decisions affecting current work:

- [Roadmap]: 10-phase structure derived from 45 requirements across 8 categories
- [Roadmap]: Phases 3 and 4 can run in parallel (CTO/AppSec agents depend on Phase 2, not Phase 3)
- [Roadmap]: SDLC Lead Agent placed in Phase 6 (not Phase 1) because it orchestrates specialists that must exist first
- [01-02]: Agent directory at agents/ (project root) not .claude/agents/ -- prioritizes version control and portability over auto-discovery
- [01-02]: SDLC-Growth-v2 stored in agents/shared/ as read-on-demand file, not inlined in agent system prompts
- [01-02]: Default subagent config: sonnet, 25 maxTurns, Read/Grep/Glob/Bash tools
- [01-02]: Maximum 2 re-spawns per subagent task before escalation
- [01-01]: All 12 governing principles apply in spirit; 8 fully, 3 simplified, 1 (radical traceability) deferred to Growth
- [01-01]: CEO accepts High/Critical residual risk (not CTO/CISO split) because CEO covers CISO responsibilities at Startup
- [01-01]: All 7 agents start at Trust Level 2 (Supervised Autonomous); promotion requires 30+ interactions + CEO approval
- [01-01]: IEA maps to PR-based workflow at Startup; 9 v2 components collapse to agents + PR review + CI/CD + Git history
- [01-01]: Focus on 8-9 standards/frameworks at Startup; defer 21+ to Growth/Enterprise
- [01-01]: Simplified risk register schema (~15 fields in YAML-in-Git, not 50+ field full schema)
- [01-03]: 66% of SDLC-Growth-v2 applicable at Startup (263/398 entries); 31% deferred to Growth; 3% to Enterprise
- [01-03]: Gate criteria mapped at per-risk-tier granularity: Low/Medium auto-flow, High/Critical require human approval
- [01-03]: AI sections (10, 11) map with dual ISO 27001 + ISO 42001 certification awareness
- [01-03]: NIS2 controls consistently Startup (legally mandatory); FedRAMP/SOC 2 consistently Growth/Enterprise (deferred)
- [01-03]: Complete Startup SDLC companion document now has 398 entries with 758 cross-references across all 18 sections
- [01-04]: Accountable (A) is ALWAYS a human in every RACI row -- agents can be R or C but never A
- [01-04]: 32 SDLC activities mapped across 7 domains with 13 columns (6 humans + 7 agents)
- [01-04]: 2 meetings replace 5 governance bodies: Weekly Technical (30min) + Monthly Strategic (60min)
- [01-04]: Low/Medium risk auto-flows via CI/CD + PR; High needs Weekly Technical; Critical needs Weekly Technical + CEO/CISO
- [01-04]: Monthly Strategic meeting satisfies ISO 27001 cl. 9.3 and ISO 42001 cl. 9.3 management review
- [01-04]: Git PR workflow = complete audit trail for all gate passages (no additional approval systems)
- [02-01]: CISO Agent prompt at 383 lines (under 2000-line target) using progressive disclosure via reference/ directory
- [02-01]: ISO 27001 and ISO 42001 balanced equally in agent identity -- neither subordinated
- [02-01]: US compliance (FedRAMP, SOC 2, NIST 800-53, CCPA, OSCAL) explicitly advisory-only with deferred scope
- [02-01]: Human CISO substitution model: agent as full substitute, CEO oversees, [CISO-REVIEW-ON-RETURN] flag
- [02-01]: Cross-domain dependency flagging: [CTO-DEPENDENCY], [APPSEC-DEPENDENCY], [AI-SCIENCE-DEPENDENCY], [PLATFORM-DEPENDENCY]
- [02-01]: Domain context document (8 sections) provides compact HH-specific grounding for CISO Agent sessions
- [02-02]: IMS Context 6-section structure with explicit Annex SL clause-by-clause alignment table
- [02-02]: IS Policy 12-section structure sourced from EU-CA-sections.md with German/Dutch executive summaries
- [02-02]: IS Policy Annex maps 1:1 to IS Policy with 11 operational annexes + interim incident response + tools reference
- [02-02]: ISMS/AIMS scopes follow EU-first approach: GmbH/B.V. fully detailed, Inc. skeleton with TO BE COMPLETED markers
- [02-02]: All AIMS scopes include AI system inventory table with EU AI Act Limited-Risk classification per Art. 52
- [02-02]: Dual-axis AI risk classification: EU AI Act product risk x SDLC usage tier
- [02-02]: 4-level classification scheme (Public, Internal, Confidential, Secret) aligned with TISAX ISA Chapter 7
- [02-03]: AI Policy review cycle is semi-annual (faster than IS Policy annual) because AI regulation evolves rapidly
- [02-03]: 14 prohibited practices: 8 EU AI Act Art. 5 + 6 HH-specific (deterministic verification, Secret data, risk acceptance, production, customer data training, non-approved tools)
- [02-03]: Document register as separate living file (not inline) -- updated per document without re-versioning the framework
- [02-03]: 4 information classification levels (Public, Internal, Confidential, Secret) with TISAX ISA protection need alignment
- [02-03]: AI-generated content follows same approval workflow as human-authored documents with additional factual accuracy checks
- [02-03]: 16 controlled documents registered spanning IMS, ISMS, AIMS policies, scopes, governance, and agent reference
- [02-04]: IS Policy annex cross-reference placed in Section 1 after IMS Context paragraph, mirroring AI-Policy.md line 35 pattern
- [03-01]: Risk register YAML schema has 22 total fields (15 core assessment + 15 lifecycle metadata) balancing ~15 target with auditability
- [03-01]: AI risks get 5th impact dimension (Individual/Society) per ISO 42001 cl. 6.1.2(d)(1) -- only when ai-risk: true
- [03-01]: Dual residual risk acceptance: Git PR workflow (working process) + formal summary document (auditor package)
- [03-01]: 7-category flat taxonomy (OPS, SEC, AI, REG, PPL, SUP, STR) with RISK-{CAT}-{NNN} ID convention
- [03-04]: 7 physical controls not-applicable (A.7.1-A.7.3, A.7.5-A.7.6, A.7.11-A.7.12) with Azure shared responsibility justification; 7 applicable conservatively
- [03-04]: Risk-to-control references provisional (10 risk IDs, 22 control refs) -- remainder populated after risk workshop
- [03-04]: SoA consolidation script uses yaml.loadAll() for front-matter style YAML; generates sections 1-8 with statistics and risk traceability
- [03-02]: 36 pre-seeded risks across 7 categories: OPS(5), SEC(7), AI(7), REG(6), PPL(4), SUP(4), STR(3) -- within locked 30-50 range
- [03-02]: All AI risks include ai-risk: true with individual/society impact consideration per ISO 42001 cl. 6.1.2(d)(1)
- [03-02]: Treatment strategy "retain" used for RISK-STR-003 (competitive entry) where Annex A controls cannot reduce inherent market risk
- [03-02]: RISK-REG-005 (TISAX scope change) set to monthly review cycle due to March 2026 label expiration urgency
- [03-02]: Climate change risk (RISK-OPS-005) explicitly addresses ISO 27001:2022/Amd 1:2024 requirement
- [03-03]: Workshop materials approved by CEO for distribution to External CISO (NorthGRC) and Consultant (BearingPoint)
- [03-03]: 4-hour remote workshop with 6-block structure and evidence capture template for auditor verification of human involvement
- [03-03]: Risk treatment summary (HH-ISMS-RTP-001) includes CEO signature block covering all 3 entities (GmbH, B.V., Inc.)
- [04-01]: CTO Agent prompt at 321 lines (under 500-line target) using progressive disclosure via reference/ directory
- [04-01]: Security-architecture dual identity as locked decision: equal weight on architecture decisions AND security engineering review
- [04-01]: Strict CTO-AppSec boundary: CTO owns ADRs and architecture, AppSec owns threat models, SAST/DAST, SBOM, supply chain
- [04-01]: Domain context includes ADR registry section (initially empty, populates as CTO Agent produces ADRs)
- [04-01]: Expanded Technology Stack section in domain-context.md covering frontend, backend, hosting, cloud, development toolchain
- [04-01]: Cross-domain dependency flagging pattern consistent with CISO Agent
- [04-02]: AppSec Agent prompt at 304 lines (under 500-line target) using progressive disclosure via reference/ directory
- [04-02]: AppSec positioned as operational arm of CISO Agent consuming IS Policy and AI Policy as upstream constraints
- [04-02]: 9 Annex A.8 controls mapped to AppSec artifacts plus A.5.21 and A.5.23 from threat model contributions
- [04-02]: Domain context focused on security engineering, not duplicating CISO organizational context (refers to HH-CISO-REF-001)
- [04-02]: Centralized false positive management (semgrepignore + policy file) chosen over inline suppressions
- [04-02]: LINDDUN applicability gated by GDPR scope: Claude Code agent system excluded, Verity products included
- [04-04]: Semgrep CE selected as primary SAST tool: free for all repos, native TypeScript/JavaScript support, SARIF output, fast CI scans
- [04-04]: OWASP ZAP selected as primary DAST tool: open-source, Docker-based CI integration, baseline and full scan modes
- [04-04]: Dependabot selected as primary dependency scanner: free, native GitHub integration, automated fix PRs
- [04-04]: Critical/High findings block pipeline; Medium/Low advisory only; @security-override label bypass requires CTO + CISO approval
- [04-04]: Centralized false positive management: .semgrepignore + sast-baseline.md (no inline nosemgrep comments)
- [04-04]: Vulnerability remediation SLAs: Critical 48h, High 7d, Medium 30d, Low next release
- [04-04]: License compliance framework: Allowed (MIT, Apache-2.0, BSD, ISC), Warning (LGPL, MPL-2.0), Blocked (GPL, AGPL, SSPL, EUPL)
- [04-05]: CycloneDX pnpm generator selected over cdxgen for lockfile-based exact version resolution
- [04-05]: Sigstore/Cosign keyless signing selected over GPG for zero key management overhead with OIDC identity
- [04-05]: SLSA Level 2 as Startup target; Level 3 deferred to Growth (requires isolated build environments)
- [04-05]: Monthly SBOM review cycle (first week of month) covering dependencies, licenses, vulnerabilities, supply chain risk
- [04-05]: License whitelist: MIT, Apache-2.0, ISC, BSD-2-Clause, BSD-3-Clause, 0BSD, CC0-1.0; copyleft requires CTO+CISO approval
- [04-05]: Provenance verification required before production deployment; verification failures block deployment

### Pending Todos

None yet.

### Blockers/Concerns

- [Research]: ISO 42001 auditor expectations are poorly documented (standard is 2 years old) -- engage certification body in Week 1
- [Research]: NorthGRC is the GRC platform (not Vanta as research suggested) -- integration patterns may differ
- [Research]: TISAX scope change assessment needed -- previous scope may not match new HH Group scope
- [Research]: 12-week timeline rated MEDIUM confidence -- CEO review bottleneck is primary risk

## Session Continuity

Last session: 2026-02-22
Stopped at: Completed 04-05-PLAN.md (SBOM Generation and Supply Chain Security) -- Phase 4 COMPLETE
Resume file: .planning/phases/04-cto-and-appsec-agents-with-security-engineering/04-05-SUMMARY.md
Next: Phase 5 research and planning
