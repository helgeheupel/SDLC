# Roadmap: HH SDLC Agent System

## Overview

This roadmap delivers a hierarchical system of 7 Claude Code AI agents and the full set of ISO 27001 + ISO 42001 + TISAX compliance artifacts needed for dual certification readiness by mid-May 2026. The structure follows the critical dependency chain: Startup Overlay constrains scope, CISO Agent establishes the foundational risk framework and policies, then CTO/AppSec agents run parallel to the SoA/risk work, remaining agents build on that foundation to produce operational controls and AI-specific artifacts, and finally everything integrates for Stage 1 audit readiness. Every phase delivers a coherent, verifiable capability that the next phase depends on.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [ ] **Phase 1: Startup Overlay and Agent Foundation** - Distill SDLC-v2 to startup-weight, define agent interaction model, establish subagent protocol
- [ ] **Phase 2: CISO Agent and IS/AI Policy Foundation** - Create CISO Agent and produce foundational IS Policy, AI Policy, ISMS Scope, document control framework
- [ ] **Phase 3: Risk Framework and Statement of Applicability** - Establish risk methodology, populate risk register via human workshop, produce SoA for all 93 Annex A controls
- [ ] **Phase 4: CTO and AppSec Agents with Security Engineering** - Create CTO and AppSec agents, produce threat models, SAST/DAST config, SBOM pipeline, supply chain security
- [ ] **Phase 5: AIMS Core and AI System Registry** - Produce AI System Registry, AI risk/impact assessment processes, ISO 42001 Annex A control mapping, AIMS PDCA documentation
- [ ] **Phase 6: Remaining Specialist Agents** - Create AI Science, Platform/SRE, and Product/Strategy agents
- [ ] **Phase 7: Operational Controls** - Produce incident management, BCP/DR, access control, change management, supplier security, HR security procedures
- [ ] **Phase 8: TISAX Maintenance** - Map VDA ISA 6 controls to existing ISO 27001 evidence, produce prototype protection docs, document Level 3 maturity
- [ ] **Phase 9: Toolchain Integration** - Define NorthGRC, Linear, and Float integrations for evidence sync, task traceability, and milestone tracking
- [ ] **Phase 10: Agent ISO 42001 Documentation and Integration** - Document all 7 agents as AI systems under ISO 42001, cross-agent consistency verification, gap analysis, Stage 1 readiness

## Phase Details

### Phase 1: Startup Overlay and Agent Foundation
**Goal**: Agents and humans share a common operating framework that constrains all downstream work to startup-appropriate scope
**Depends on**: Nothing (first phase)
**Requirements**: OVLY-01, OVLY-02, OVLY-03, AGNT-08, AGNT-09
**Success Criteria** (what must be TRUE):
  1. A Startup Overlay document exists that explicitly maps every SDLC-v2 section to Startup / Growth / Enterprise with justifications for each "not yet" deferral
  2. A role consolidation RACI matrix exists showing how 8 SDLC-v2 personas map to 6 humans + 7 agents, and any team member can identify who owns what
  3. The gate model is documented as 2 meetings (Weekly Technical + Monthly Strategic) with risk-tiered criteria, not the full Enterprise gate structure
  4. The agent interaction model is documented (hierarchical: CEO to SDLC Lead to specialists, plus direct CEO-to-specialist paths) and any agent session can reference it
  5. The subagent spawning protocol exists with clear rules for context passing, result collection, and token budget governance
**Plans**: 4 plans

Plans:
- [x] 01-01-PLAN.md -- Startup SDLC companion document sections 1-8 (OVLY-01)
- [x] 01-02-PLAN.md -- Agent interaction model, subagent protocol, handoff template, directory structure (AGNT-08, AGNT-09)
- [ ] 01-03-PLAN.md -- Startup SDLC companion document sections 9-18 (OVLY-01)
- [ ] 01-04-PLAN.md -- RACI matrix and 2-meeting governance model (OVLY-02, OVLY-03)

### Phase 2: CISO Agent and IS/AI Policy Foundation
**Goal**: The CISO Agent exists and has produced the foundational policy documents that every downstream agent and artifact depends on
**Depends on**: Phase 1
**Requirements**: AGNT-03, ISMS-01, ISMS-02, ISMS-09, AIMS-01
**Success Criteria** (what must be TRUE):
  1. The CISO Agent (CLAUDE.md system prompt) is constructed, validated, and can be loaded in a Claude Code session to produce security/compliance artifacts with HH-specific context
  2. An Information Security Policy exists that is approved by management, names specific HH systems and personnel, and covers all 3 entities (GmbH, B.V., Inc.)
  3. An ISMS Scope Statement exists covering all 3 entities, 3 jurisdictions, and all information assets with explicit boundaries
  4. An AI Policy exists as a standalone governance document with commitment to responsible AI, regulatory conformity, and prohibited practices
  5. A document control framework is established with version control, approval workflow, distribution, and retention procedures satisfying ISO 27001 cl. 7.5
**Plans**: TBD

Plans:
- [ ] 02-01: TBD
- [ ] 02-02: TBD

### Phase 3: Risk Framework and Statement of Applicability
**Goal**: The organization has a validated risk posture and every ISO 27001 Annex A control has been assessed for applicability, creating the backbone for all control implementations
**Depends on**: Phase 2
**Requirements**: ISMS-03, ISMS-04, ISMS-05, ISMS-06
**Success Criteria** (what must be TRUE):
  1. A risk assessment methodology exists using a 5x5 likelihood/impact matrix with calibrated scales, aligned with ISO 31000, and any team member can explain the rating criteria
  2. A risk register exists in YAML-in-Git format that was validated through a human workshop (not purely AI-generated), with every risk having an identifiable human owner who can explain it
  3. A risk treatment plan exists with treatment strategy per risk, control mappings to Annex A, and explicit residual risk acceptance signed by the CEO
  4. The Statement of Applicability covers all 93 Annex A controls, each justified as applicable or not applicable with implementation status and evidence references
**Plans**: TBD

Plans:
- [ ] 03-01: TBD
- [ ] 03-02: TBD

### Phase 4: CTO and AppSec Agents with Security Engineering
**Goal**: Technical security architecture and automated security tooling are defined and produce evidence that maps directly to ISO 27001 Annex A.8 controls
**Depends on**: Phase 2 (consumes IS Policy as constraint); can run parallel with Phase 3
**Requirements**: AGNT-02, AGNT-07, SENG-01, SENG-02, SENG-03, SENG-04, SENG-05
**Success Criteria** (what must be TRUE):
  1. The CTO Agent (CLAUDE.md) is constructed and can produce architecture decisions, ADRs, and AI system design artifacts with HH-specific context
  2. The AppSec Agent (CLAUDE.md) is constructed and can produce threat models, security tooling configurations, and supply chain security artifacts
  3. A threat modeling framework exists with STRIDE/LINDDUN templates and a threat-model-as-code approach that can be applied to any HH system
  4. SAST/DAST configuration is defined with tool selection, pipeline integration points, and pass/fail criteria
  5. An SBOM generation pipeline is defined using CycloneDX format with per-release generation and dependency tracking, plus a supply chain security framework targeting SLSA levels with artifact signing
**Plans**: TBD

Plans:
- [ ] 04-01: TBD
- [ ] 04-02: TBD

### Phase 5: AIMS Core and AI System Registry
**Goal**: The AI Management System artifacts exist and every AI system (including the 7 agents) has a registry entry with full ISO 42001 schema
**Depends on**: Phase 2 (AI Policy), Phase 3 (risk methodology for AI risk assessment)
**Requirements**: AIMS-02, AIMS-03, AIMS-04, AIMS-05, AIMS-06
**Success Criteria** (what must be TRUE):
  1. An AI System Registry exists with all known AI systems registered using full schema (system ID, intended use, risk classification, lifecycle status, applicable controls)
  2. An AI risk assessment process exists using dual-axis classification (EU AI Act product risk x SDLC usage tier) with ISO 23894 risk sources
  3. An AI impact assessment process exists per ISO 42005, with mandatory assessment criteria for High-Risk and Limited-Risk AI systems
  4. ISO 42001 Annex A control mapping is complete (A.2 through A.10) with implementation approach and evidence pointers for each control
  5. AIMS PDCA documentation exists covering Plan (objectives, risk assessment, resources), Do (operational controls), Check (management review, internal audit), and Act (nonconformity, improvement)
**Plans**: TBD

Plans:
- [ ] 05-01: TBD
- [ ] 05-02: TBD

### Phase 6: Remaining Specialist Agents
**Goal**: The AI Science, Platform/SRE, and Product/Strategy agents exist and can produce domain-specific artifacts within the established policy and risk framework
**Depends on**: Phase 1 (interaction model), Phase 2 (policy constraints)
**Requirements**: AGNT-01, AGNT-04, AGNT-05, AGNT-06
**Success Criteria** (what must be TRUE):
  1. The SDLC Lead Agent (CLAUDE.md) is constructed as the CEO's primary orchestrator and can coordinate all 6 specialist agents, route work, and maintain SDLC-v2 compliance
  2. The AI Science Agent (CLAUDE.md) is constructed and can produce AI research assessments, model evaluation frameworks, and ISO 42001 Annex A artifacts
  3. The Platform/SRE Agent (CLAUDE.md) is constructed and can produce SLO frameworks, observability configurations, incident management procedures, and BCP/DR plans
  4. The Product/Strategy Agent (CLAUDE.md) is constructed and can produce strategic alignment artifacts, OKR frameworks, WSJF scoring, and portfolio governance
**Plans**: TBD

Plans:
- [ ] 06-01: TBD
- [ ] 06-02: TBD

### Phase 7: Operational Controls
**Goal**: All operational security procedures exist as actionable, HH-specific documents that personnel can follow and auditors can verify against real operational evidence
**Depends on**: Phase 3 (SoA determines which controls are applicable), Phase 6 (Platform/SRE agent produces BCP/DR and incident procedures)
**Requirements**: OPCT-01, OPCT-02, OPCT-03, OPCT-04, OPCT-05, OPCT-06, ISMS-07, ISMS-08
**Success Criteria** (what must be TRUE):
  1. An incident management procedure exists covering detection, classification, response, NIS2-timeline reporting, and post-incident review, with roles assigned to specific HH personnel
  2. A BCP/DR plan exists with RPO/RTO targets per service tier, failover procedures, and a testing schedule
  3. An access control policy exists defining RBAC, least privilege, JIT elevation, MFA requirements, and quarterly access review procedures
  4. A change management procedure exists with risk-tiered approval (including CAB for High/Critical), rollback requirements, and traceability
  5. Supplier security requirements, HR security procedures, an internal audit program, and a management review template all exist and reference specific HH systems, personnel, and processes
**Plans**: TBD

Plans:
- [ ] 07-01: TBD
- [ ] 07-02: TBD
- [ ] 07-03: TBD

### Phase 8: TISAX Maintenance
**Goal**: TISAX certification is maintained by mapping existing ISO 27001 evidence to VDA ISA 6 controls without duplicating effort
**Depends on**: Phase 3 (SoA and risk register), Phase 7 (operational controls provide evidence base)
**Requirements**: TISX-01, TISX-02, TISX-03
**Success Criteria** (what must be TRUE):
  1. Every applicable VDA ISA 6 control objective is mapped to corresponding ISO 27001 Annex A controls with evidence references
  2. Prototype protection documentation exists with classification, handling, and transfer procedures per ISA Chapter 7
  3. Level 3 maturity evidence is documented for each applicable control showing process definition, consistent implementation, measured effectiveness, and continuous improvement
**Plans**: TBD

Plans:
- [ ] 08-01: TBD

### Phase 9: Toolchain Integration
**Goal**: The compliance workflow is connected end-to-end from Git-stored artifacts through NorthGRC to task management, so evidence flows automatically and nothing falls through cracks
**Depends on**: Phase 7 (operational controls define what evidence must flow)
**Requirements**: TOOL-01, TOOL-02, TOOL-03
**Success Criteria** (what must be TRUE):
  1. NorthGRC integration is defined with evidence sync from Git, risk register sync, and audit evidence management procedures
  2. Linear integration is defined showing how compliance tasks flow to/from Linear with traceability to requirements
  3. Float integration is defined connecting product management to SDLC phases and compliance milestones
**Plans**: TBD

Plans:
- [ ] 09-01: TBD

### Phase 10: Agent ISO 42001 Documentation and Integration
**Goal**: All 7 agents are fully documented as AI systems under ISO 42001, the entire artifact set is cross-verified for consistency, and the organization is ready for Stage 1 audit
**Depends on**: All previous phases (this is the integration and verification phase)
**Requirements**: AGNT-10
**Success Criteria** (what must be TRUE):
  1. All 7 Claude Code agents are registered in the AI System Registry with intended use, risk classification, data inputs/outputs, human oversight measures, and transparency information
  2. A cross-agent consistency audit has been performed and all contradictions between artifacts from different agents have been resolved
  3. A gap analysis against the SoA confirms every applicable control has at least one evidence reference and no orphaned controls remain
  4. The Stage 1 documentation package is assembled with all ISMS, AIMS, and TISAX artifacts organized for auditor review
  5. A management review has been conducted covering IS and AI performance, and its minutes are available as evidence
**Plans**: TBD

Plans:
- [ ] 10-01: TBD
- [ ] 10-02: TBD

## Progress

**Execution Order:**
Phases execute in numeric order: 1 -> 2 -> 3 (parallel with 4) -> 5 -> 6 -> 7 -> 8 -> 9 -> 10

Note: Phases 3 and 4 can execute in parallel since Phase 4 depends on Phase 2 (not Phase 3).

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Startup Overlay and Agent Foundation | 2/4 | In progress | - |
| 2. CISO Agent and IS/AI Policy Foundation | 0/TBD | Not started | - |
| 3. Risk Framework and Statement of Applicability | 0/TBD | Not started | - |
| 4. CTO and AppSec Agents with Security Engineering | 0/TBD | Not started | - |
| 5. AIMS Core and AI System Registry | 0/TBD | Not started | - |
| 6. Remaining Specialist Agents | 0/TBD | Not started | - |
| 7. Operational Controls | 0/TBD | Not started | - |
| 8. TISAX Maintenance | 0/TBD | Not started | - |
| 9. Toolchain Integration | 0/TBD | Not started | - |
| 10. Agent ISO 42001 Documentation and Integration | 0/TBD | Not started | - |
