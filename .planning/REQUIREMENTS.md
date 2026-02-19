# Requirements: HH SDLC Agent System

**Defined:** 2026-02-18
**Core Value:** CEO can interchangeably steer humans and AI agents to produce audit-ready compliance artifacts at enterprise quality with startup speed

## v1 Requirements

Requirements for certification readiness by mid-May 2026. Each maps to roadmap phases.

### Agent Infrastructure

- [ ] **AGNT-01**: SDLC Lead Agent created as CEO's primary orchestrator — can spawn and coordinate all 6 specialist agents and subagents
- [ ] **AGNT-02**: CTO Agent (Architecture + AI Engineering) created with PSA + CAIE domain expertise — can spawn subagents for architecture analysis, code review, technology evaluation
- [x] **AGNT-03**: CISO Agent (Security + EU Compliance + AI Governance) created with EU-CA + AIGO + partial US-CA expertise — can spawn subagents for risk assessment, policy drafting, gap analysis
- [ ] **AGNT-04**: Head of AI Science Agent created with CAIS expertise — can spawn subagents for model evaluation, AI strategy, research assessment
- [ ] **AGNT-05**: Head of Platform/SRE Agent created with PSRE expertise — can spawn subagents for SLO design, observability, incident response, BCP/DR planning
- [ ] **AGNT-06**: Product/Strategy Lead Agent created with CSA expertise — can spawn subagents for market analysis, OKR design, portfolio governance
- [ ] **AGNT-07**: AppSec Agent (Product Security Engineering) created — can spawn subagents for threat modeling, SAST/DAST config, SBOM generation, supply chain analysis
- [x] **AGNT-08**: Agent interaction model defined — hierarchical (CEO → SDLC Lead → specialists), file-mediated via Git, CEO can also engage any specialist directly
- [x] **AGNT-09**: Subagent spawning protocol defined — context passing, result collection, token budget governance, when/how agents spawn subagents
- [ ] **AGNT-10**: All 7 agents documented as AI systems under ISO 42001 — registered in AI System Registry with intended use, risk classification, data I/O, human oversight, transparency information

### ISMS Foundation (ISO 27001)

- [ ] **ISMS-01**: Information Security Policy produced — approved by management, communicated to all personnel, reviewed annually
- [ ] **ISMS-02**: ISMS Scope Statement produced — covering all 3 entities (GmbH, B.V., Inc.), 3 jurisdictions (DE, NL, US), all information assets
- [ ] **ISMS-03**: Statement of Applicability (SoA) produced — all 93 Annex A controls assessed, each justified as applicable/not applicable with implementation status
- [ ] **ISMS-04**: Risk assessment methodology defined — 5x5 likelihood/impact matrix, calibrated scales, aligned with ISO 31000
- [ ] **ISMS-05**: Risk register produced in YAML-in-Git format — synced to NorthGRC, covering information security and AI risks
- [ ] **ISMS-06**: Risk treatment plan produced — treatment strategy per risk, control mappings, residual risk acceptance
- [ ] **ISMS-07**: Internal audit program defined — audit schedule, scope, methodology, competence requirements
- [ ] **ISMS-08**: Management review template produced — mandatory inputs per cl. 9.3.2, mandatory outputs per cl. 9.3.3
- [ ] **ISMS-09**: Document control framework established — version control, approval, distribution, retention per cl. 7.5

### AIMS Foundation (ISO 42001)

- [ ] **AIMS-01**: AI Policy produced — standalone governance document, commitment to responsible AI, regulatory conformity, prohibited practices
- [ ] **AIMS-02**: AI System Registry produced — all 7 agents + future product AI registered with full schema (system ID, intended use, risk classification, lifecycle status, applicable controls)
- [ ] **AIMS-03**: AI risk assessment process defined — dual-axis classification (EU AI Act product risk × SDLC usage tier), ISO 23894 risk sources
- [ ] **AIMS-04**: AI impact assessment process defined — per ISO 42005, mandatory for High-Risk and Limited-Risk AI systems
- [ ] **AIMS-05**: ISO 42001 Annex A control mapping produced — A.2 (Policies) through A.10 (Third-party), each with implementation approach and evidence
- [ ] **AIMS-06**: AIMS PDCA documentation produced — Plan (objectives, risk assessment, resources), Do (operational controls), Check (management review, internal audit), Act (nonconformity, improvement)

### Startup Overlay

- [x] **OVLY-01**: SDLC-Growth-v2 Startup phase extraction produced — maps which v2 sections apply at Startup vs. Growth vs. Enterprise, with explicit "not yet" justifications
- [x] **OVLY-02**: Role consolidation mapping produced — 8 SDLC-Growth-v2 personas collapsed to 5 humans + 7 agents with RACI matrix
- [x] **OVLY-03**: Gate model simplified for startup — risk-tiered gates compressed, governance consolidated into 2 meetings (Weekly Technical + Monthly Strategic)

### TISAX Maintenance

- [ ] **TISX-01**: VDA ISA 6 control evidence mapped — all applicable control objectives with implementation evidence references
- [ ] **TISX-02**: Prototype protection documentation produced — classification, handling, transfer procedures per ISA Chapter 7
- [ ] **TISX-03**: Level 3 maturity evidence documented — process definition, consistent implementation, measured effectiveness, continuous improvement per control

### Operational Controls

- [ ] **OPCT-01**: Incident management procedure produced — detection, classification, response, reporting (NIS2 timelines), post-incident review
- [ ] **OPCT-02**: BCP/DR plan produced — RPO/RTO targets per service tier, failover procedures, testing schedule
- [ ] **OPCT-03**: Access control policy produced — RBAC, least privilege, JIT elevation, MFA, quarterly access reviews
- [ ] **OPCT-04**: Change management procedure produced — risk-tiered approval, CAB for High/Critical, rollback requirements
- [ ] **OPCT-05**: Supplier security requirements defined — vendor risk assessment, contractual security clauses, third-party AI assessment
- [ ] **OPCT-06**: HR security procedures produced — screening, awareness training, termination procedures, NDA management

### Security Engineering

- [ ] **SENG-01**: Threat modeling framework produced — STRIDE/LINDDUN templates, threat-model-as-code approach
- [ ] **SENG-02**: SAST/DAST configuration produced — tool selection, pipeline integration, pass/fail criteria
- [ ] **SENG-03**: SBOM generation pipeline defined — CycloneDX format, per-release generation, dependency tracking
- [ ] **SENG-04**: Supply chain security framework produced — SLSA level targeting, artifact signing (Sigstore/Cosign), provenance verification
- [ ] **SENG-05**: Dependency scanning setup defined — automated PR blocking on Critical/High CVEs, license compliance

### Toolchain Integration

- [ ] **TOOL-01**: NorthGRC integration defined — evidence sync from Git, risk register sync, audit evidence management
- [ ] **TOOL-02**: Linear integration defined — how compliance tasks flow to/from Linear, traceability to requirements
- [ ] **TOOL-03**: Float integration defined — how product management connects to SDLC phases and compliance milestones

## v2 Requirements

Deferred to Growth phase. Tracked but not in current roadmap.

### Extended Compliance

- **COMP-01**: FedRAMP 20x authorization (when US federal customer pipeline active)
- **COMP-02**: SOC 2 Type II attestation (when US SaaS customers require it)
- **COMP-03**: NIS2 full implementation with automated incident reporting
- **COMP-04**: EU AI Act conformity assessment for Verity VE/EAM

### Advanced Agent Capabilities

- **AAGN-01**: Cross-agent consistency engine (auto-detect contradictions)
- **AAGN-02**: Agent self-governance documentation (agents produce own registry entries)
- **AAGN-03**: Automated evidence chain from Git to NorthGRC
- **AAGN-04**: OSCAL-as-Code pipeline for FedRAMP

### Product Integration

- **PROD-01**: Agents support Verity VE development under SDLC framework
- **PROD-02**: Agents support Verity EAM development under SDLC framework
- **PROD-03**: Full SDLC-Growth-v2 Growth-phase governance activated

## Out of Scope

| Feature | Reason |
|---------|--------|
| Full Enterprise-phase governance (5 boards, dual ARTs) | SDLC-Growth-v2 Enterprise target; not needed until 80+ people |
| FedRAMP authorization | No US federal customer demand yet; advisory only |
| SOC 2 Type II | No US SaaS customer demand yet |
| Verity VE/EAM product development | Separate project; agents will support it later |
| Building Verity platform infrastructure | Separate project |
| Real-time compliance dashboards | Over-engineering for startup; NorthGRC provides sufficient visibility |
| Automated audit scheduling | Manual scheduling sufficient at startup scale |
| AI model training pipelines | No custom models in v1; using third-party LLMs |
| ChatGPT/Codex agent definitions | Agents designed for Claude Code; ChatGPT/Codex used separately as complementary tools |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| AGNT-01 | Phase 6 | Pending |
| AGNT-02 | Phase 4 | Pending |
| AGNT-03 | Phase 2 | Complete |
| AGNT-04 | Phase 6 | Pending |
| AGNT-05 | Phase 6 | Pending |
| AGNT-06 | Phase 6 | Pending |
| AGNT-07 | Phase 4 | Pending |
| AGNT-08 | Phase 1 | Complete |
| AGNT-09 | Phase 1 | Complete |
| AGNT-10 | Phase 10 | Pending |
| ISMS-01 | Phase 2 | Pending |
| ISMS-02 | Phase 2 | Pending |
| ISMS-03 | Phase 3 | Pending |
| ISMS-04 | Phase 3 | Pending |
| ISMS-05 | Phase 3 | Pending |
| ISMS-06 | Phase 3 | Pending |
| ISMS-07 | Phase 7 | Pending |
| ISMS-08 | Phase 7 | Pending |
| ISMS-09 | Phase 2 | Pending |
| AIMS-01 | Phase 2 | Pending |
| AIMS-02 | Phase 5 | Pending |
| AIMS-03 | Phase 5 | Pending |
| AIMS-04 | Phase 5 | Pending |
| AIMS-05 | Phase 5 | Pending |
| AIMS-06 | Phase 5 | Pending |
| OVLY-01 | Phase 1 | Complete |
| OVLY-02 | Phase 1 | Complete |
| OVLY-03 | Phase 1 | Complete |
| TISX-01 | Phase 8 | Pending |
| TISX-02 | Phase 8 | Pending |
| TISX-03 | Phase 8 | Pending |
| OPCT-01 | Phase 7 | Pending |
| OPCT-02 | Phase 7 | Pending |
| OPCT-03 | Phase 7 | Pending |
| OPCT-04 | Phase 7 | Pending |
| OPCT-05 | Phase 7 | Pending |
| OPCT-06 | Phase 7 | Pending |
| SENG-01 | Phase 4 | Pending |
| SENG-02 | Phase 4 | Pending |
| SENG-03 | Phase 4 | Pending |
| SENG-04 | Phase 4 | Pending |
| SENG-05 | Phase 4 | Pending |
| TOOL-01 | Phase 9 | Pending |
| TOOL-02 | Phase 9 | Pending |
| TOOL-03 | Phase 9 | Pending |

**Coverage:**
- v1 requirements: 45 total
- Mapped to phases: 45
- Unmapped: 0

---
*Requirements defined: 2026-02-18*
*Last updated: 2026-02-18 after roadmap creation*
