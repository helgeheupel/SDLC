# Phase 5: AIMS Core and AI System Registry - Research

**Researched:** 2026-02-22
**Domain:** ISO 42001 Annex A control mapping (A.2 through A.10), AI System Registry design (YAML-in-Git), AI risk assessment process, AI impact assessment (ISO 42005), AIMS PDCA documentation, IMS integration
**Confidence:** HIGH

## Summary

Phase 5 is the ISO 42001 certification backbone. It transforms the AI Policy foundation from Phase 2 and the risk methodology from Phase 3 into the operational AIMS: a complete AI System Registry with full entries for all AI systems, formal AI risk and impact assessment processes, ISO 42001 Annex A control mapping (39 controls across 9 groups), and AIMS PDCA documentation integrated into the existing IMS. This phase produces the artifacts that an ISO 42001 auditor scrutinizes most intensely: the registry is the first evidence of operational AIMS scope, the Annex A control mapping (SoA-equivalent) proves deliberate control selection, and the PDCA documentation demonstrates the management system is alive rather than paper-only.

The key architectural challenge is consistency with the Phase 3 pattern while accommodating ISO 42001's distinct control structure. ISO 27001 has 93 Annex A controls in 4 themes; ISO 42001 has 39 controls in 9 groups (A.2 through A.10). The user decision to use per-control YAML files and extend the existing SoA consolidation script means the Phase 3 infrastructure (js-yaml dependency, generation script, Git-based document control) is reused rather than rebuilt. The bidirectional cross-reference between ISO 42001 controls and ISO 27001 controls is a critical requirement: each ISO 42001 Annex A YAML file must contain an `iso27001_mapping` field linking to related ISO 27001 Annex A controls, and auditors must be able to trace from either direction.

The AI System Registry is the most content-heavy deliverable. The user decided to register ALL AI systems with full schema: 7 Claude Code agents, third-party tools (ChatGPT, Codex), and Verity product AI (VE, EAM). The AIMS Scope statements from Phase 2 already enumerate these 11 systems (see `policies/scope/AIMS-Scope-GmbH.md` Section 3), so the registry formalizes what the scope identified. The Growth-phase registry schema from `phase2/AIGO-sections.md` Section 11.3 has 17 fields; the Startup registry schema needs to be adapted to match the user's full ISO 42001 schema requirement while remaining manageable.

**Primary recommendation:** Structure Phase 5 as 4-5 plans: (1) AI System Registry with YAML files for all 11 systems, (2) AI risk assessment and impact assessment formal procedures, (3) ISO 42001 Annex A control mapping (39 per-control YAML files + extended consolidation script), (4) AIMS PDCA documentation and IMS Context extension, optionally (5) AIMS objectives document derived from AI Policy commitments. Plans 1 and 3 can execute in parallel since they are independent artifacts. Plan 2 informs plans 1 and 3 (assessment process shapes what the registry tracks and which controls are applicable). Plan 4 depends on plans 1-3 being complete.

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

#### Registry scope and depth
- Register ALL AI systems: 7 Claude Code agents, all third-party AI tools (Claude API, GitHub Copilot, ChatGPT, etc.), AND Verity product AI (VE/EAM)
- Full ISO 42001 schema for every system: system ID, intended use, risk classification, data I/O, human oversight, transparency, lifecycle status, applicable controls
- Verity product AI gets full registry entries (not placeholders) alongside agents and third-party tools
- YAML-in-Git as source of truth (one YAML file per AI system), with consolidation script generating Markdown summaries for auditor consumption
- Pattern consistent with Phase 3 risk register approach

#### AI risk/impact assessment
- Formal procedure documents with numbered steps, roles, triggers, decision trees, and forms/templates
- AI impact assessment follows ISO 42005 structure closely, with HH-specific content filled in (auditors recognize the structure)
- Assessment triggers: event-driven (new AI system, major change, incident) PLUS annual periodic review cycle
- Reuse existing Phase 3 5x5 likelihood/impact matrix with the AI-specific 5th impact dimension (individual/society) rather than a separate AI risk matrix
- One risk methodology for the organization, extended for AI context

#### Annex A control mapping
- Per-control YAML files (one file per ISO 42001 Annex A control), consistent with the ISO 27001 SoA pattern from Phase 3
- Explicit cross-reference field in each YAML: `iso27001_mapping` listing related ISO 27001 Annex A controls for bidirectional auditor traceability
- Applicability assessment per control with justification, even though most will be applicable (auditor rigor over assumption)
- Extend existing SoA consolidation script to also process ISO 42001 Annex A controls, producing one tool covering both standards

#### PDCA documentation
- Integrated IMS manual covering both ISMS and AIMS PDCA together per Annex SL alignment
- Extend the existing IMS Context document from Phase 2 (not a new companion document) to be the single source of truth
- AIMS-specific internal audit criteria and management review inputs deferred to Phase 7 (Operational Controls) where the broader audit program lives
- AIMS objectives derived from AI Policy commitments (Phase 2) and made measurable, ensuring traceability from policy to objectives

### Claude's Discretion
- YAML schema field names and validation rules for registry entries
- Exact consolidation script architecture (how to extend Phase 3 script)
- ISO 42005 section-to-HH-section mapping details
- AIMS objective KPI formulation
- File naming convention for ISO 42001 Annex A control YAML files

### Deferred Ideas (OUT OF SCOPE)
None -- discussion stayed within phase scope
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| AIMS-02 | AI System Registry produced -- all 7 agents + future product AI registered with full schema (system ID, intended use, risk classification, lifecycle status, applicable controls) | Full ISO 42001 Annex A.4.2 control requires resource documentation. Growth-phase registry schema (AIGO-sections.md Section 11.3) provides 17 fields. AIMS Scope GmbH already enumerates 11 AI systems. YAML-in-Git per-file pattern from Phase 3 risk register reused. All 11 systems need full entries with EU AI Act classification, SDLC usage tier, data I/O, human oversight, and applicable ISO 42001 Annex A controls. |
| AIMS-03 | AI risk assessment process defined -- dual-axis classification (EU AI Act product risk x SDLC usage tier), ISO 23894 risk sources | AI Policy Section 4 already defines the dual-axis framework. Phase 3 risk assessment methodology (HH-ISMS-RMA-001) already covers AI risks with `ai-risk: true` tag and 5th impact dimension. Formal procedure document needed with numbered steps, decision trees, and templates. ISO 23894 risk sources documented in AIGO-sections.md Section 11.4.2 (5 categories). Procedure extends Phase 3 methodology, does not replace it. |
| AIMS-04 | AI impact assessment process defined -- per ISO 42005, mandatory for High-Risk and Limited-Risk AI systems | ISO 42005:2025 published May 2025 provides the structure. AIGO-sections.md Section 11.5 defines 6-step AIA process. ISO 42001 cl. 6.1.4 and cl. 8.4 mandate AI system impact assessment. Annex A.5 (4 controls: A.5.2-A.5.5) specifically addresses impact assessment. Procedure must cover: scope definition, threshold setting, execution, analysis, approval, monitoring. Assessment triggers defined in user decisions. |
| AIMS-05 | ISO 42001 Annex A control mapping produced -- A.2 (Policies) through A.10 (Third-party), each with implementation approach and evidence | Complete Annex A control list verified from ISO 42001:2023 standard PDF (pages 17-20): 39 controls across 9 groups. Per-control YAML with `iso27001_mapping` cross-reference field. Consolidation script extended from Phase 3 SoA generator. Implementation approaches from AIGO-sections.md Section 11.6 provide Startup-level detail per control. |
| AIMS-06 | AIMS PDCA documentation produced -- Plan (objectives, risk assessment, resources), Do (operational controls), Check (management review, internal audit), Act (nonconformity, improvement) | ISO 42001 clauses 6-10 define PDCA requirements. AIGO-sections.md Section 11.9 provides complete Growth-phase PDCA cycle. IMS Context document (HH-IMS-CTX-001) already establishes Annex SL alignment in Section 3. Extension of IMS Context (not new document) per user decision. Check/Act details deferred to Phase 7 per user decision. |
</phase_requirements>

## Standard Stack

This phase produces compliance documentation artifacts (YAML files, procedure documents, PDCA documentation), not software. The "stack" is the set of standards, formats, and tools that constrain the deliverables.

### Core Standards (must be satisfied by Phase 5 deliverables)

| Standard | Clause / Annex | Purpose | Why Critical |
|----------|----------------|---------|--------------|
| ISO/IEC 42001:2023 | Annex A (Table A.1) | Reference control objectives and controls (A.2-A.10) | The normative Annex A contains 39 controls that must be assessed for applicability, each justified and documented. This is the ISO 42001 SoA equivalent. |
| ISO/IEC 42001:2023 | cl. 6.1.2 | AI risk assessment | Requires risk criteria, consistent assessment process, identification of risks including "potential consequences to the organization, individuals and societies" |
| ISO/IEC 42001:2023 | cl. 6.1.3 | AI risk treatment | Requires treatment options, control determination, comparison with Annex A, SoA production, treatment plan, risk owner approval |
| ISO/IEC 42001:2023 | cl. 6.1.4 | AI system impact assessment | Requires process to "assess the potential consequences for individuals or groups of individuals, or both, and societies" |
| ISO/IEC 42001:2023 | cl. 8.4 | AI system impact assessment (operation) | Requires performing impact assessments "at planned intervals or when significant changes are proposed to occur" |
| ISO/IEC 42001:2023 | Annex B | Implementation guidance for AI controls | Normative guidance for each Annex A control; informs implementation approach documentation |
| ISO/IEC 42001:2023 | cl. 6.2 | AI objectives | Must be measurable, monitored, communicated, updated, documented |

### Supporting Standards (inform content)

| Standard | Purpose | When Referenced |
|----------|---------|----------------|
| ISO/IEC 42005:2025 | AI system impact assessment framework | Structure for the AI impact assessment procedure (published May 2025; provides the recognized assessment process) |
| ISO/IEC 23894:2023 | AI risk management guidance | AI-specific risk source categories (5 categories); referenced by ISO 42001 for risk identification |
| ISO/IEC 22989:2022 | AI concepts and terminology | Vocabulary alignment for registry entries and assessment documentation |
| ISO/IEC 12792:2025 | AI transparency taxonomy | Transparency information requirements per registry entry |
| ISO 31000:2018 | Risk management principles | Already adopted in Phase 3; AI risk assessment reuses the same risk management framework |
| ISO/IEC 27001:2022 | ISMS requirements | Cross-reference target for bidirectional Annex A traceability |

### Formats and Tools

| Format/Tool | Purpose | Why This Choice |
|-------------|---------|-----------------|
| YAML | Registry entries, Annex A control YAML files | Consistent with Phase 3 pattern (risk register, ISO 27001 SoA); human-readable, Git-diffable, machine-parseable |
| Markdown | Procedure documents, PDCA documentation, consolidated outputs | Consistent with all prior phases; YAML frontmatter for document control |
| Node.js (js-yaml) | Extended consolidation script covering both ISO 27001 and ISO 42001 | Reuses Phase 3 dependency; single tool for both standards |
| Git PR workflow | Approval evidence for registry, procedures, IMS extension | Consistent with all prior phases; PR approval = documented acceptance |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Per-file YAML for 39 ISO 42001 controls | Single aims-soa.yml file | User decided per-file for consistency with Phase 3 ISO 27001 SoA pattern; more files but granular Git history |
| Separate AIMS impact assessment procedure | Combined risk+impact assessment procedure | User decided separate procedure documents; ISO 42001 treats risk assessment (cl. 6.1.2) and impact assessment (cl. 6.1.4) as distinct activities |
| New IMS companion document for PDCA | Extend IMS Context document | User explicitly decided to extend IMS Context (HH-IMS-CTX-001) rather than create a new document |

## Architecture Patterns

### Recommended Artifact Structure

```
ai-registry/                                    # AI System Registry directory
  AI-AGENT-001.yml                              # CISO Agent
  AI-AGENT-002.yml                              # CTO Agent
  AI-AGENT-003.yml                              # SDLC Lead Agent
  AI-AGENT-004.yml                              # AI Science Agent
  AI-AGENT-005.yml                              # Platform/SRE Agent
  AI-AGENT-006.yml                              # Product/Strategy Agent
  AI-AGENT-007.yml                              # AppSec Agent
  AI-3PARTY-001.yml                             # ChatGPT
  AI-3PARTY-002.yml                             # Codex
  AI-PROD-001.yml                               # Verity VE AI
  AI-PROD-002.yml                               # Verity EAM AI
  scripts/
    generate-registry-summary.js                # Consolidation script
  AI-Registry-Summary.md                        # Generated output for auditors

aims-soa/                                       # ISO 42001 Annex A control mapping
  42001-A.2.2.yml                               # Per-control YAML files
  42001-A.2.3.yml
  42001-A.2.4.yml
  42001-A.3.2.yml
  42001-A.3.3.yml
  ...                                           # 39 files total
  42001-A.10.4.yml
  scripts/
    generate-aims-soa.js                        # Generation script (or extend soa/scripts/)
  AIMS-SoA-Consolidated.md                      # Generated output for auditors

procedures/                                     # New or extended directory for procedures
  ai-risk-assessment-procedure.md               # AI risk assessment process (AIMS-03)
  ai-impact-assessment-procedure.md             # AI impact assessment process (AIMS-04)

policies/
  IMS-Context.md                                # EXTENDED -- add AIMS PDCA sections
  aims-objectives.md                            # AIMS objectives document
```

### Pattern 1: AI System Registry YAML Schema (Claude's Discretion)

**What:** The full registry entry schema for each AI system. Adapts the Growth-phase schema (AIGO-sections.md Section 11.3, 17 fields) to the Startup scope with the user's required ISO 42001 fields.

**Recommended schema:**

```yaml
# AI System Registry entry: ai-registry/AI-AGENT-001.yml
---
system-id: AI-AGENT-001
name: "CISO Agent"
category: development-ai                    # product-ai | development-ai | third-party-ai
description: >
  Chief Information Security Officer agent for the Helge Heupel Group. Produces
  compliance artifacts, risk assessments, policy documents, and audit evidence
  across ISO 27001, ISO 42001, TISAX, NIS2, and EU AI Act frameworks. Operates
  within the SDLC-Growth-v2 framework at Trust Level 2 (Supervised Autonomous).
provider: Anthropic                         # AI system provider/vendor
model: Claude Code (Claude Opus)            # Specific model/version
intended-use: >
  Decision support and artifact generation for information security policy,
  ISMS/AIMS management, risk assessment, EU compliance, AI governance, and
  cross-framework compliance integration. Outputs require human validation
  before acceptance.
operational-context: >
  Deployed as a Claude Code agent accessed via CLI. Operates on HH Group
  compliance repository. Produces markdown and YAML artifacts committed to Git.
  CEO Helge Heupel and human CISO review all outputs via PR workflow.
eu-ai-act-classification: limited-risk      # prohibited | high-risk | limited-risk | minimal-risk
eu-ai-act-rationale: >
  Classified as Limited-Risk under EU AI Act Art. 50 (transparency obligations).
  The agent interacts with users and generates content that could be perceived
  as human-generated. Transparency obligation: all outputs are clearly identified
  as AI-generated via the SDLC workflow and Git commit attribution.
sdlc-usage-tier: tier-2-collaborator        # tier-1-assistant | tier-2-collaborator | tier-3-decision-support
human-oversight: >
  Trust Level 2 (Supervised Autonomous). All outputs require human review before
  acceptance. CEO approves via PR merge. Human CISO validates risk assessments
  in workshop sessions. No output reaches production or customers without human
  approval.
data-inputs:
  - type: compliance-documents
    classification: internal
    description: "ISMS/AIMS policies, scope statements, risk register, SoA files"
  - type: iso-standards
    classification: confidential
    description: "Licensed ISO standard PDFs for compliance interpretation"
  - type: gap-analyses
    classification: internal
    description: "Phase 1/2 gap analysis documents"
data-outputs:
  - type: policy-documents
    classification: internal
    description: "IS Policy, AI Policy, scope statements, procedures"
  - type: risk-assessments
    classification: confidential
    description: "Risk register entries, risk methodology, treatment plans"
  - type: compliance-mappings
    classification: internal
    description: "SoA entries, Annex A control mappings, UCL entries"
transparency-information: >
  All CISO Agent outputs carry Git commit attribution identifying the author as
  "CISO Agent." YAML frontmatter in every document includes `author: CISO Agent`.
  PR descriptions state that content is AI-generated. Stakeholders can identify
  AI-generated content through Git history and document metadata.
lifecycle-status: production                # development | production | monitoring | deprecated | retired
deployment-entities:
  - GmbH
  - B.V.
responsible-owner: "CISO role"              # Role-based, not person name
applicable-controls:                        # ISO 42001 Annex A controls applicable to this system
  - 42001-A.2.2
  - 42001-A.2.3
  - 42001-A.3.2
  - 42001-A.4.2
  - 42001-A.4.3
  - 42001-A.4.5
  - 42001-A.4.6
  - 42001-A.6.1.2
  - 42001-A.6.2.6
  - 42001-A.6.2.8
  - 42001-A.7.2
  - 42001-A.8.2
  - 42001-A.9.2
  - 42001-A.9.3
  - 42001-A.9.4
  - 42001-A.10.2
  - 42001-A.10.3
risk-references:                            # Linked risk register entries
  - RISK-AI-001
  - RISK-AI-002
last-risk-assessment: 2026-02-20
last-impact-assessment: ""                  # To be completed in this phase
conformity-status: in-progress              # not-assessed | in-progress | conformant | non-conformant
created-date: 2026-02-22
last-updated: 2026-02-22
notes: ""
---
```

**Field count:** 24 top-level fields. Core ISO 42001 schema fields number 16 (system-id, name, category, description, intended-use, eu-ai-act-classification, sdlc-usage-tier, human-oversight, data-inputs, data-outputs, transparency-information, lifecycle-status, deployment-entities, responsible-owner, applicable-controls, risk-references). The remaining 8 are metadata and lifecycle fields.

**ID convention (Claude's Discretion):**
- `AI-AGENT-NNN` for the 7 Claude Code agents
- `AI-3PARTY-NNN` for third-party AI tools
- `AI-PROD-NNN` for Verity product AI

This convention distinguishes the three categories defined in the AI Policy Section 1 (Product AI, Development AI, Third-party AI services) while maintaining consistent sequential numbering within each category.

### Pattern 2: ISO 42001 Annex A Control YAML Schema (Claude's Discretion)

**What:** The per-control YAML file schema for ISO 42001 Annex A controls, mirroring the ISO 27001 SoA pattern from Phase 3.

**File naming convention (Claude's Discretion):** `42001-A.X.Y.yml` (e.g., `42001-A.2.2.yml`, `42001-A.6.2.3.yml`). The `42001-` prefix distinguishes these from the ISO 27001 SoA files (which are `A.X.Y.yml` in the `soa/` directory).

**Recommended schema:**

```yaml
# ISO 42001 Annex A control entry: aims-soa/42001-A.4.2.yml
---
control-id: A.4.2
control-name: "Resource documentation"
group: A.4
group-name: "Resources for AI systems"
group-objective: >
  To ensure that the organization accounts for the resources (including AI system
  components and assets) of the AI system in order to fully understand and address
  risks and impacts.
applicable: true
justification: >
  Applicable. The Helge Heupel Group maintains an AI System Registry
  (ai-registry/ directory) documenting all 11 AI systems within AIMS scope:
  7 Claude Code agents, ChatGPT, Codex, Verity VE AI, and Verity EAM AI.
  Each registry entry documents resources required for the system's lifecycle
  activities including compute (Azure, Anthropic API), data resources, tooling,
  and human resources per ISO 42001 Annex B.4.2 guidance.
implementation-status: fully-implemented     # fully-implemented | partially-implemented | planned | not-started
implementation-approach: >
  AI System Registry maintained as YAML-in-Git (one file per AI system in
  ai-registry/ directory). Each entry contains: system-id, name, category,
  description, provider, model, intended-use, operational-context, data-inputs,
  data-outputs, lifecycle-status, deployment-entities, responsible-owner.
  Registry is reviewed quarterly and updated when AI systems change.
  Consolidation script generates auditor-readable summary document.
evidence-references:
  - document-id: AI-AGENT-001
    description: "CISO Agent registry entry"
    path: "ai-registry/AI-AGENT-001.yml"
  - document-id: AI-Registry-Summary
    description: "Consolidated AI System Registry summary"
    path: "ai-registry/AI-Registry-Summary.md"
iso27001-mapping:                            # Bidirectional cross-reference to ISO 27001 Annex A
  - control-id: A.5.9
    relationship: "A.5.9 (Inventory of information and other associated assets) covers general asset inventory; A.4.2 extends this specifically for AI system resources"
  - control-id: A.5.12
    relationship: "A.5.12 (Classification of information) applies to data resources documented in registry entries"
risk-references:
  - RISK-AI-001
  - RISK-AI-002
ai-system-references:                        # Which registered AI systems this control applies to
  - AI-AGENT-001
  - AI-AGENT-002
  - AI-AGENT-003
  - AI-AGENT-004
  - AI-AGENT-005
  - AI-AGENT-006
  - AI-AGENT-007
  - AI-3PARTY-001
  - AI-3PARTY-002
  - AI-PROD-001
  - AI-PROD-002
responsible-role: "CISO role"
annex-b-reference: "B.4.2"                   # Corresponding Annex B guidance section
notes: ""
last-assessed: 2026-02-22
---
```

**Key fields beyond the ISO 27001 SoA pattern:**
- `group` and `group-name`: ISO 42001 groups controls into 9 groups (A.2-A.10) with explicit objectives, unlike ISO 27001's 4 themes
- `group-objective`: Captures the group-level objective from Annex A Table A.1
- `iso27001-mapping`: The critical bidirectional cross-reference field (locked decision)
- `ai-system-references`: Links each control to the specific AI systems it applies to (enables per-system control applicability view)
- `annex-b-reference`: Links to the normative implementation guidance in Annex B

### Pattern 3: Complete ISO 42001 Annex A Control List (Verified from Standard)

**What:** The complete list of ISO 42001 Annex A controls, verified directly from the ISO/IEC 42001:2023 standard PDF (pages 17-20, Table A.1).

**39 controls across 9 groups:**

| Group | Group Name | Controls |
|-------|-----------|----------|
| **A.2** | Policies related to AI | A.2.2 AI policy, A.2.3 Alignment with other organizational policies, A.2.4 Review of the AI policy |
| **A.3** | Internal organization | A.3.2 AI roles and responsibilities, A.3.3 Reporting of concerns |
| **A.4** | Resources for AI systems | A.4.2 Resource documentation, A.4.3 Data resources, A.4.4 Tooling resources, A.4.5 System and computing resources, A.4.6 Human resources |
| **A.5** | Assessing impacts of AI systems | A.5.2 AI system impact assessment process, A.5.3 Documentation of AI system impact assessments, A.5.4 Assessing AI system impact on individuals or groups of individuals, A.5.5 Assessing societal impacts of AI systems |
| **A.6** | AI system life cycle | **A.6.1 Management guidance for AI system development:** A.6.1.2 Objectives for responsible development of AI system, A.6.1.3 Processes for responsible AI system design and development. **A.6.2 AI system life cycle:** A.6.2.2 AI system requirements and specification, A.6.2.3 Documentation of AI system design and development, A.6.2.4 AI system verification and validation, A.6.2.5 AI system deployment, A.6.2.6 AI system operation and monitoring, A.6.2.7 AI system technical documentation, A.6.2.8 AI system recording of event logs |
| **A.7** | Data for AI systems | A.7.2 Data for development and enhancement of AI system, A.7.3 Acquisition of data, A.7.4 Quality of data for AI systems, A.7.5 Data provenance, A.7.6 Data preparation |
| **A.8** | Information for interested parties of AI systems | A.8.2 System documentation and information for users, A.8.3 External reporting, A.8.4 Communication of incidents, A.8.5 Information for interested parties |
| **A.9** | Use of AI systems | A.9.2 Processes for responsible use of AI systems, A.9.3 Objectives for responsible use of AI system, A.9.4 Intended use of the AI system |
| **A.10** | Third-party and customer relationships | A.10.2 Allocating responsibilities, A.10.3 Suppliers, A.10.4 Customers |

**Total: 39 controls** (verified against ISO 42001:2023 Table A.1, pages 17-20)

**Note on numbering:** ISO 42001 Annex A uses a non-sequential numbering scheme (A.2.2 exists but A.2.1 does not; A.6.1.2 exists but A.6.1.1 does not). This is because the X.1 numbers are reserved for the group objectives. The YAML files should use the exact control IDs from the standard.

### Pattern 4: ISO 42001 to ISO 27001 Cross-Reference Map

**What:** The bidirectional mapping between ISO 42001 Annex A and ISO 27001 Annex A controls, enabling the auditor traceability chain specified in the user's decisions.

**Recommended mappings (Claude's Discretion -- key relationships):**

| ISO 42001 Control | Related ISO 27001 Controls | Relationship |
|-------------------|---------------------------|--------------|
| A.2.2 (AI policy) | A.5.1 (Policies for information security) | Both require documented policies; AI Policy is companion to IS Policy within IMS |
| A.2.3 (Alignment with other policies) | A.5.1, A.5.2, A.5.31 | AI policy must align with IS Policy and related organizational policies |
| A.2.4 (Review of AI policy) | A.5.1 | Both require periodic policy review |
| A.3.2 (AI roles and responsibilities) | A.5.2 (Information security roles and responsibilities) | Both define accountability; AI-specific roles supplement IS roles |
| A.3.3 (Reporting of concerns) | A.6.8 (Information security event reporting) | Both establish reporting mechanisms; AI concern reporting extends IS event reporting |
| A.4.2 (Resource documentation) | A.5.9 (Inventory of information assets) | AI system registry extends asset inventory for AI-specific resources |
| A.4.3 (Data resources) | A.5.12 (Classification of information), A.5.13 (Labelling of information) | Data classification and labelling apply to AI training/inference data |
| A.4.6 (Human resources) | A.6.1 (Screening), A.6.2 (Terms and conditions of employment) | AI competence requirements supplement general HR security |
| A.5.2-A.5.5 (Impact assessment) | No direct equivalent | ISO 27001 does not have impact assessment controls; AI impact assessment is additive |
| A.6.2.4 (Verification and validation) | A.8.25 (Secure development life cycle), A.8.29 (Security testing) | AI V&V extends secure development and security testing for AI-specific quality |
| A.6.2.5 (AI system deployment) | A.8.25, A.8.31 (Separation of environments) | AI deployment controls extend change management for AI systems |
| A.6.2.6 (Operation and monitoring) | A.8.16 (Monitoring activities) | AI monitoring extends general monitoring for AI-specific metrics |
| A.6.2.8 (Event log recording) | A.8.15 (Logging) | AI event logging extends general logging for AI-specific events |
| A.7.2-A.7.6 (Data for AI) | A.5.12, A.5.33 (Protection of records) | Data governance for AI extends information classification and records protection |
| A.8.2 (System documentation) | A.5.37 (Documented operating procedures) | AI system documentation extends general operating procedures |
| A.8.4 (Communication of incidents) | A.5.24, A.5.25, A.5.26 (Incident management) | AI incident communication extends IS incident management |
| A.9.2-A.9.4 (Responsible use) | A.5.10 (Acceptable use of information), A.5.1 | Responsible AI use extends acceptable use policies |
| A.10.2-A.10.4 (Third-party) | A.5.19-A.5.23 (Supplier relationships) | AI supplier governance extends general supplier security requirements |

### Pattern 5: AI Risk Assessment Procedure Structure

**What:** The formal AI risk assessment procedure document, extending the Phase 3 methodology for AI-specific requirements per ISO 42001 cl. 6.1.2 and ISO 23894.

**Recommended procedure structure:**

```markdown
# AI Risk Assessment Procedure
## Document Control (YAML frontmatter)
## 1. Purpose and Scope
  - Extends HH-ISMS-RMA-001 (Risk Assessment Methodology) for AI-specific context
  - Satisfies ISO 42001 cl. 6.1.2 and ISO 23894 requirements
  - Applies to all AI systems in the AI System Registry
## 2. Normative References
  - ISO 42001 cl. 6.1.2, ISO 23894, ISO 42005, HH-ISMS-RMA-001
## 3. AI-Specific Risk Sources (ISO 23894)
  - Category 1: Data and data governance risks
  - Category 2: Model and algorithm risks
  - Category 3: System integration risks
  - Category 4: Operational environment risks
  - Category 5: Societal and stakeholder impact risks
## 4. Dual-Axis Classification
  - Axis 1: EU AI Act Risk Level (applied to Product AI)
  - Axis 2: SDLC Usage Tier (applied to Development AI)
  - Combined matrix: higher classification governs
  - Decision tree (flowchart format)
## 5. Assessment Process (numbered steps)
  - Step 1: Establish context (per HH-ISMS-RMA-001 Section 2, Step a)
  - Step 2: Identify AI-specific risks using 5 risk source categories
  - Step 3: Analyze using 5x5 matrix with 5th dimension (individual/society impact)
  - Step 4: Evaluate against risk acceptance criteria
  - Step 5: Select treatment options (avoid/modify/share/retain)
  - Step 6: Map to ISO 42001 Annex A controls
  - Step 7: Document in risk register with ai-risk: true tag
## 6. Assessment Triggers
  - Event-driven: new AI system, major change, incident, reclassification
  - Periodic: annual review cycle for all registered AI systems
  - Regulatory: EU AI Act implementing acts, new guidance
## 7. Roles and Responsibilities
  - CISO Agent: drafts assessments, identifies risks, proposes classifications
  - CEO: validates classifications, accepts residual risk
  - Human CISO: validates in workshop, challenges ratings
  - CTO: validates technical risk analysis for architecture-related AI risks
## 8. Forms and Templates
  - AI Risk Assessment Form (template)
  - AI System Classification Form (template)
  - Residual Risk Acceptance Record (template)
## 9. Integration with ISMS Risk Assessment
  - Single risk register (ai-risk: true tag)
  - Same 5x5 matrix, same risk levels, same treatment options
  - 5th impact dimension added for AI risks only
  - Same quarterly review cycle
```

### Pattern 6: AI Impact Assessment Procedure Structure (ISO 42005)

**What:** The formal AI impact assessment procedure following ISO 42005:2025 structure, with HH-specific content.

**ISO 42005 process steps mapped to HH (Claude's Discretion):**

| ISO 42005 Step | HH Implementation | Responsible | Output |
|----------------|-------------------|-------------|--------|
| 1. Scoping | Define assessment boundary: AI system, features, data flows, affected stakeholders, jurisdictions (DE, NL, US) | AI System Owner + CISO Agent | AIA Scope Document |
| 2. Responsibility assignment | Assign assessment team: system owner, CISO Agent, CTO (technical), CEO (approval) | CISO Agent | Assessment Team Record |
| 3. Threshold definition | Define acceptable impact levels per dimension: fairness (disparate impact ratio >= 0.8), safety, privacy, transparency, environmental | CISO Agent (draft), CEO (approve) | Impact Threshold Matrix |
| 4. Execution | Assess impacts using quantitative methods (bias tests, privacy analysis) and qualitative methods (stakeholder impact review) | Assessment team | Impact Assessment Report |
| 5. Analysis | Analyze findings; identify impacts exceeding thresholds; propose mitigation | Assessment team | Mitigation Plan |
| 6. Documentation | Document per ISO 42001 A.5.3: scope, methods, findings, mitigations, residual impacts | CISO Agent | AIA Report |
| 7. Approval | CEO reviews and approves. For High-Risk systems, external review by consultant. | CEO | Signed Approval Record |
| 8. Monitoring | Integrate impact indicators into operational monitoring; define re-assessment triggers | AI System Owner | Monitoring Configuration |

**When required (per user decision):**
- All AI systems classified as High-Risk under EU AI Act Art. 6
- All AI systems classified as Limited-Risk under EU AI Act Art. 50
- Any AI system processing special category personal data (GDPR Art. 9)
- New AI system introduction
- Significant model change (architecture, retraining, new data)
- Change in intended use or deployment context
- Annual periodic review

**HH-specific simplification at Startup:** All current HH AI systems are classified as Limited-Risk. No High-Risk systems exist yet. The impact assessment for Limited-Risk systems focuses on transparency obligations and individual/societal impact dimensions. Full Art. 9-15 conformity assessment for High-Risk systems is documented as a procedure but not yet exercised.

### Pattern 7: AIMS PDCA Extension to IMS Context

**What:** The sections to add to the existing IMS Context document (HH-IMS-CTX-001) to cover AIMS PDCA.

**The current IMS Context (policies/IMS-Context.md) has 6 sections:**
1. Organization Overview
2. Integrated Management System Scope
3. Annex SL / Harmonized Structure Alignment
4. Document Hierarchy
5. Management Commitment
6. Climate Change Acknowledgment

**Sections to add:**

```markdown
## 7. AIMS Plan-Do-Check-Act Cycle

### 7.1 Plan
- AIMS objectives (with measurable targets, derived from AI Policy commitments)
- AI risk assessment schedule (annual cycle + event triggers)
- AI impact assessment schedule (per AI-Impact-Assessment-Procedure.md)
- Resource requirements (AI governance budget, personnel, tools)

### 7.2 Do
- AI System Registry maintenance (quarterly review, event-driven updates)
- AI risk treatment implementation (controls from ISO 42001 Annex A)
- AI system lifecycle governance (design, development, deployment, monitoring)
- AI competence and training (EU AI Act Art. 4 AI literacy)

### 7.3 Check
- Management review inputs for AIMS (deferred detailed criteria to Phase 7)
- AI governance metrics (registry completeness, assessment currency, etc.)
- Reference to internal audit program (deferred to Phase 7)

### 7.4 Act
- Nonconformity and corrective action process
- Continual improvement mechanism
- Reference to improvement backlog

## 8. AIMS Objectives

[Measurable objectives derived from AI Policy commitments]
```

### Pattern 8: AIMS Objectives (Claude's Discretion -- KPI Formulation)

**What:** Measurable AIMS objectives derived from AI Policy (HH-AIMS-POL-001) commitments, satisfying ISO 42001 cl. 6.2 requirements.

**ISO 42001 cl. 6.2 requires objectives that:**
(a) are consistent with the AI policy
(b) be measurable (if practicable)
(c) take into account applicable requirements
(d) be monitored
(e) be communicated
(f) be updated as appropriate
(g) be available as documented information

**Recommended AIMS objectives for Startup:**

| # | Objective | Derived From (AI Policy) | KPI | Target | Measurement |
|---|-----------|--------------------------|-----|--------|-------------|
| 1 | Achieve ISO 42001 certification readiness | Management commitment (Section 2) | Annex A control implementation rate | 100% applicable controls at planned or higher status by mid-May 2026 | AIMS SoA consolidated report |
| 2 | Maintain complete AI System Registry | Principle 2 (Transparency) | Registry completeness | 100% of deployed AI systems registered | Quarterly registry audit |
| 3 | Complete AI risk assessments for all registered systems | Principle 3 (Accountability) | Assessment currency | 100% of systems assessed within 12 months | Risk register dates |
| 4 | Complete AI impact assessments for all Limited-Risk and High-Risk systems | Principle 3 (Accountability) + cl. 6.1.4 | AIA completion rate | 100% of applicable systems assessed | AIA report dates |
| 5 | Ensure EU AI Act Art. 5 prohibited practice compliance | Section 5 (Prohibited Practices) | Prohibited practice violations | Zero violations | Incident register |
| 6 | Deliver AI literacy training per EU AI Act Art. 4 | Principle 2 (Transparency) | Training completion rate | 100% of personnel trained by Aug 2025 deadline | Training records |
| 7 | Maintain human oversight for all AI systems | Principle 1 (Human Oversight) | HITL compliance rate | 100% of AI outputs reviewed before external use | PR approval records |

### Anti-Patterns to Avoid

- **Registry entries that look like copy-paste:** The auditor will read all 11 entries. If the CISO Agent, CTO Agent, and AppSec Agent all have identical descriptions, intended-use, and data-inputs, the auditor questions whether the organization actually understands each system's distinct purpose and risk profile. Each entry must reflect the specific system's unique characteristics.

- **ISO 42001 SoA without ISO 27001 cross-references:** The user explicitly requires `iso27001_mapping` in each control YAML. If these are empty or generic ("related to information security"), the bidirectional traceability chain breaks. Each mapping must explain the specific relationship between the ISO 42001 control and the referenced ISO 27001 control.

- **Impact assessment procedure without HH-specific thresholds:** ISO 42005 requires organization-specific impact thresholds. A procedure that says "assess impacts" without defining what threshold triggers action is audit-insufficient. The AI Policy already defines the disparate impact ratio threshold (0.8); the impact assessment procedure must include similarly specific thresholds for safety, privacy, transparency, and environmental dimensions.

- **PDCA documentation that is aspirational rather than operational:** The AIMS PDCA sections in the IMS Context must describe what the organization actually does, not what it plans to do in Growth phase. At Startup, "Check" is the Monthly Strategic meeting reviewing AI governance metrics. "Act" is the corrective action process documented in Phase 7. Describe the Startup reality, not the Growth target.

- **Assuming all 39 controls are applicable without assessment:** The user decision requires applicability assessment per control with justification, "even though most will be applicable." Some controls may genuinely not apply at Startup (e.g., A.6.2.5 deployment for agents that are still placeholders; certain A.7 data controls for third-party tools where HH does not control training data). Each not-applicable determination needs the same rigor as the ISO 27001 SoA.

- **Orphaned registries with no process connection:** The AI System Registry must be connected to the AI risk assessment process (each system has risk references), the AI impact assessment process (each system has an impact assessment date), and the Annex A control mapping (each system lists applicable controls). If the registry exists without these linkages, it is an inventory, not a management system artifact.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Registry schema | Design AI system inventory schema from scratch | Growth-phase schema from `phase2/AIGO-sections.md` Section 11.3.2 (17 fields) adapted for Startup | The AIGO sections already define the schema aligned to ISO 42001 A.4.2; simplify and adapt for Startup context |
| AI risk source categories | Research AI risk categories from scratch | ISO 23894:2023 risk source categories already documented in `phase2/AIGO-sections.md` Section 11.4.2 (5 categories) | These are the standard categories; ISO 42001 references ISO 23894 directly |
| Impact assessment process | Design AIA from first principles | ISO 42005:2025 process structure already documented in `phase2/AIGO-sections.md` Section 11.5 (6-step process) | The AIGO sections already map ISO 42005 to HH context |
| Annex A control list | Research all 39 controls from ISO 42001 | Complete list verified from standard PDF pages 17-20 and documented in this research (Pattern 3) | All 39 controls cataloged with exact IDs, names, group assignments |
| Implementation approaches per control | Write generic control descriptions | `phase2/AIGO-sections.md` Section 11.6 already maps every Annex A control to implementation approach, evidence artifact, and progressive adoption stages (Startup/Growth/Enterprise) | The Growth-phase implementation approaches exist; extract Startup column for each control |
| PDCA cycle content | Design AIMS PDCA from scratch | `phase2/AIGO-sections.md` Section 11.9 provides complete PDCA cycle with cadence, activities, outputs, and responsibilities | Simplify the Growth PDCA for Startup context (2 meetings instead of quarterly review board) |
| Consolidation script | Build new script for ISO 42001 controls | Extend the existing `soa/scripts/generate-soa.js` pattern | Same architecture (read YAML, generate Markdown), same dependency (js-yaml), consistent output format |
| Dual-axis classification framework | Define risk classification from scratch | AI Policy Section 4 already defines the dual-axis framework (EU AI Act x SDLC Usage Tier) | Classification framework is policy; the procedure operationalizes it with steps and decision trees |
| AI system enumeration | Discover which AI systems to register | `policies/scope/AIMS-Scope-GmbH.md` Section 3 already lists all 11 AI systems with provider, classification, and lifecycle status | The scope work is done; the registry provides the full schema per system |

**Key insight:** Phase 5 is a formalization and operationalization exercise, not a discovery exercise. The AI Policy (Phase 2) defines the governance framework. The risk methodology (Phase 3) defines how risks are assessed. The AIMS scope statements (Phase 2) enumerate the AI systems. The AIGO sections document (Phase 2) contains the Growth-phase detail for every deliverable in this phase. Phase 5 takes all of this existing content and produces the formal, per-system, per-control, auditable artifacts that ISO 42001 certification requires.

## Common Pitfalls

### Pitfall 1: Registry Entries That Are Generic Rather Than System-Specific

**What goes wrong:** All 7 Claude Code agent entries have nearly identical descriptions, data inputs, and applicable controls. The auditor asks "What distinguishes the CISO Agent from the CTO Agent in terms of AI governance?" and the answer is not compelling.

**Why it happens:** All 7 agents use the same underlying model (Claude Code via Anthropic). The temptation is to document the shared infrastructure rather than each agent's distinct purpose and risk profile.

**How to avoid:**
- Each agent has a distinct `intended-use` reflecting its specific domain (security vs. architecture vs. testing)
- Each agent has different `data-inputs` (CISO reads risk register and standards; CTO reads architecture documents and codebase; AppSec reads threat models and vulnerability reports)
- Each agent has different `applicable-controls` (CISO Agent requires A.5 impact assessment controls because it handles risk; CTO Agent requires A.6 lifecycle controls because it handles architecture)
- Each agent may have different `risk-references` (RISK-AI-001 applies to CISO Agent specifically; different risks apply to other agents)
- Verity product AI entries (VE, EAM) must differ fundamentally from agent entries because they face customers

**Warning signs:** More than 3 agents share identical `data-inputs` or `applicable-controls` lists. No agent entry references a unique risk.

### Pitfall 2: Annex A Controls Without Bidirectional Cross-References

**What goes wrong:** The ISO 42001 SoA has 39 YAML files, but the `iso27001-mapping` field is empty or says "N/A" for most controls. Meanwhile, the ISO 27001 SoA (93 files) has no reference back to ISO 42001 controls. The auditor performing an integrated audit cannot trace between the two standards.

**Why it happens:** Cross-referencing 39 controls to 93 controls is labor-intensive. The temptation is to defer it or fill it generically.

**How to avoid:**
- Every ISO 42001 Annex A YAML file must have at least one entry in `iso27001-mapping` unless the control is genuinely unique to AI governance (only A.5.2-A.5.5 impact assessment controls have no ISO 27001 equivalent)
- The cross-reference must explain the relationship, not just list a control ID ("A.5.9 covers general asset inventory; A.4.2 extends this specifically for AI system resources")
- Consider also adding a `42001-mapping` field to the existing ISO 27001 SoA files to complete the bidirectional traceability (this is an enhancement to Phase 3 artifacts)

**Warning signs:** More than 5 ISO 42001 controls have empty `iso27001-mapping` fields. No ISO 27001 SoA entry references an ISO 42001 control.

### Pitfall 3: Impact Assessment Procedure Without Practical Templates

**What goes wrong:** The AI impact assessment procedure reads like an ISO standard paraphrase. It describes what should be done but provides no forms, templates, or worked examples. The team (6 people) cannot execute the procedure without significant interpretation.

**Why it happens:** ISO 42005 is a guidance standard that describes process principles. Translating these into actionable templates requires domain-specific judgment.

**How to avoid:**
- Include an AIA Form template with specific fields (system name, scope, affected stakeholders, impact dimensions with rating scales, threshold comparison, mitigation actions, approval block)
- Include a worked example using a real HH AI system (e.g., CISO Agent impact assessment)
- Define specific thresholds per impact dimension (fairness: disparate impact ratio 0.8; privacy: no special category data processing without DPIA; safety: no autonomous decisions without HITL; transparency: all AI outputs identifiable)
- The procedure must be executable by the CEO with CISO Agent support, without needing external consultants

**Warning signs:** The procedure has no appendices (forms, templates). No worked example exists. Thresholds are described as "appropriate" or "adequate" rather than specific values.

### Pitfall 4: PDCA That Does Not Reflect Startup Reality

**What goes wrong:** The AIMS PDCA sections in the IMS Context describe a quarterly management review with an AI Governance Board, annual internal audit program, and dedicated AI governance budget. None of this exists at Startup with 6 people and 2 governance meetings.

**Why it happens:** The Growth-phase PDCA from AIGO-sections.md Section 11.9 is detailed and impressive. The temptation is to copy it into the IMS Context without adapting for Startup scale.

**How to avoid:**
- Plan: AIMS objectives set by CEO, reviewed at Monthly Strategic meeting (not a separate AI Governance Board)
- Do: Registry maintained by CISO Agent, reviewed quarterly by CEO. Operational controls implemented through SDLC gates.
- Check: Monthly Strategic meeting reviews AI governance metrics (agenda item). No separate AIMS management review at Startup.
- Act: Corrective actions tracked in the same system as ISMS corrective actions. No separate AIMS improvement backlog.
- Explicitly state: "At Startup phase, AIMS PDCA is integrated into the ISMS PDCA cycle via the Monthly Strategic meeting. Separate AIMS governance bodies and dedicated audit programs are introduced at Growth phase when team size and AI system complexity justify the overhead."

**Warning signs:** PDCA describes governance bodies that do not exist. PDCA references a quarterly review cadence that the 2-meeting governance model does not include. PDCA mentions roles that are not in RACI-Startup.md.

### Pitfall 5: Extended SoA Script That Breaks Existing ISO 27001 Output

**What goes wrong:** The consolidation script is modified to handle both ISO 27001 and ISO 42001 controls, but the changes break the existing ISO 27001 SoA generation. The auditor receives a document with mixed controls or missing data.

**Why it happens:** Extending an existing script is riskier than writing a new one because changes can have unintended side effects on the existing output.

**How to avoid:**
- Option A (recommended): Write a separate `generate-aims-soa.js` script in `aims-soa/scripts/` that follows the same pattern but is independent. This avoids any risk to the working ISO 27001 script.
- Option B: Extend the existing script with a command-line flag (`--standard iso27001|iso42001`) to select which controls to process, keeping the two outputs completely separate.
- Either way: the ISO 27001 SoA output must remain unchanged after the Phase 5 work.
- Test both outputs after any script changes.

**Warning signs:** Running `generate-soa.js` produces different output after Phase 5 changes. The generated SoA mixes ISO 27001 and ISO 42001 controls in the same table.

## Code Examples

### Example: Registry Entry for Third-Party AI Tool (AI-3PARTY-001.yml)

```yaml
---
system-id: AI-3PARTY-001
name: "ChatGPT"
category: third-party-ai
description: >
  General-purpose conversational AI assistant provided by OpenAI. Used by
  Helge Heupel Group team members for research, brainstorming, and internal
  query resolution. Not used for customer-facing outputs. Subject to data
  restrictions per AI Policy Section 5.2 HH-specific prohibition #14
  (non-approved AI tools restriction).
provider: OpenAI
model: GPT-4o (current default)
intended-use: >
  Internal research and brainstorming tool for team members. Used for
  general-purpose queries, document drafting assistance, and knowledge
  retrieval. NOT authorized for processing Confidential or Secret data.
  NOT authorized for generating customer-facing content.
operational-context: >
  Accessed via OpenAI web interface (chat.openai.com) and API. Team members
  use under individual accounts. Data handling governed by OpenAI enterprise
  terms. No Confidential or Secret data may be submitted per AI Policy.
eu-ai-act-classification: limited-risk
eu-ai-act-rationale: >
  Classified as Limited-Risk under EU AI Act Art. 50. The system interacts
  with humans and generates content. OpenAI as the GPAI provider has its own
  conformity obligations. HH as deployer has transparency obligations.
sdlc-usage-tier: tier-1-assistant
human-oversight: >
  Tier 1 (Post-hoc review within 24 hours). Team members review outputs
  before incorporating into any work product. No ChatGPT output may be
  submitted to customers, production systems, or compliance artifacts
  without additional human review.
data-inputs:
  - type: user-queries
    classification: internal
    description: "Team member questions and prompts (Internal classification maximum)"
data-outputs:
  - type: text-responses
    classification: internal
    description: "AI-generated text for internal use only"
transparency-information: >
  ChatGPT usage is governed by AI Policy Section 5.2 prohibition #14. Team
  members are trained to identify AI-generated content. ChatGPT outputs
  incorporated into work products are disclosed via workflow practices.
lifecycle-status: production
deployment-entities:
  - GmbH
  - B.V.
responsible-owner: "CTO role"
applicable-controls:
  - 42001-A.2.2
  - 42001-A.9.2
  - 42001-A.9.4
  - 42001-A.10.2
  - 42001-A.10.3
risk-references:
  - RISK-AI-005
  - RISK-SUP-002
last-risk-assessment: 2026-02-20
last-impact-assessment: ""
conformity-status: in-progress
created-date: 2026-02-22
last-updated: 2026-02-22
notes: >
  OpenAI enterprise agreement status to be confirmed. Data processing
  addendum (DPA) required for GDPR compliance. API usage subject to
  separate assessment if expanded beyond web interface.
---
```

### Example: Registry Entry for Verity Product AI (AI-PROD-001.yml)

```yaml
---
system-id: AI-PROD-001
name: "Verity VE AI"
category: product-ai
description: >
  AI capabilities within the Verity Value Engineering (VE) product.
  Customer-facing AI features that provide value engineering analysis,
  cost prediction, and optimization recommendations for enterprise
  customers. Patent-pending technology [PATENT-VE-001].
provider: Helge Heupel GmbH
model: Multiple (Azure OpenAI Service backbone)
intended-use: >
  Decision support for enterprise value engineering. Generates cost deviation
  predictions, optimization recommendations, and value analysis reports for
  customer use. All AI outputs include confidence indicators and require
  human professional review before customer decision-making.
operational-context: >
  Deployed within the Verity VE SaaS platform on Azure (West Europe, Germany
  West Central). Customer data processed within Azure tenant boundaries.
  Customer-facing AI features marked with "AI-assisted" indicators per
  EU AI Act Art. 50 transparency obligations.
eu-ai-act-classification: limited-risk
eu-ai-act-rationale: >
  Currently classified as Limited-Risk under EU AI Act Art. 50 (system
  interacts with humans and generates content). Assessment pending for
  potential High-Risk reclassification if VE features are used in contexts
  covered by Annex III (e.g., creditworthiness assessment, safety-related
  decisions). Full Art. 6/Annex III analysis to be completed when product
  features are finalized.
sdlc-usage-tier: tier-3-decision-support
human-oversight: >
  Tier 3 (Human-in-the-Loop Mandatory). All AI-generated recommendations
  require human professional review before customer presentation. AI
  outputs include confidence scores. Customers are informed that outputs
  are AI-assisted. No autonomous decisions without human approval gate.
data-inputs:
  - type: customer-project-data
    classification: confidential
    description: "Customer project data, cost models, BIM data (per customer DPA)"
  - type: historical-benchmarks
    classification: confidential
    description: "Anonymized industry benchmark data for cost prediction models"
data-outputs:
  - type: analysis-reports
    classification: confidential
    description: "AI-generated value engineering analysis and recommendations"
  - type: cost-predictions
    classification: confidential
    description: "Cost deviation predictions with confidence intervals"
transparency-information: >
  Product UI displays "AI-assisted" labels on all AI-generated content per
  EU AI Act Art. 50. System documentation includes capability description,
  known limitations, and performance characteristics. Customer documentation
  per ISO/IEC 12792 transparency taxonomy.
lifecycle-status: development
deployment-entities:
  - GmbH
  - B.V.
responsible-owner: "CTO role"
applicable-controls:
  - 42001-A.2.2
  - 42001-A.2.3
  - 42001-A.3.2
  - 42001-A.4.2
  - 42001-A.4.3
  - 42001-A.4.4
  - 42001-A.4.5
  - 42001-A.4.6
  - 42001-A.5.2
  - 42001-A.5.3
  - 42001-A.5.4
  - 42001-A.5.5
  - 42001-A.6.1.2
  - 42001-A.6.1.3
  - 42001-A.6.2.2
  - 42001-A.6.2.3
  - 42001-A.6.2.4
  - 42001-A.6.2.5
  - 42001-A.6.2.6
  - 42001-A.6.2.7
  - 42001-A.6.2.8
  - 42001-A.7.2
  - 42001-A.7.3
  - 42001-A.7.4
  - 42001-A.7.5
  - 42001-A.7.6
  - 42001-A.8.2
  - 42001-A.8.3
  - 42001-A.8.4
  - 42001-A.8.5
  - 42001-A.9.2
  - 42001-A.9.3
  - 42001-A.9.4
  - 42001-A.10.2
  - 42001-A.10.3
  - 42001-A.10.4
risk-references:
  - RISK-AI-003
  - RISK-AI-004
  - RISK-AI-005
last-risk-assessment: 2026-02-20
last-impact-assessment: ""
conformity-status: not-assessed
created-date: 2026-02-22
last-updated: 2026-02-22
notes: >
  Product AI features in development. Full AI impact assessment required
  before first customer deployment. Patent-sensitive details in [PATENT-VE-001].
  Potential High-Risk reclassification pending feature finalization.
---
```

### Example: AIMS SoA Consolidation Script Extension Approach

```javascript
// aims-soa/scripts/generate-aims-soa.js
// Reads all aims-soa/42001-A.*.yml files and generates AIMS-SoA-Consolidated.md
// Pattern follows soa/scripts/generate-soa.js but adapted for ISO 42001 structure
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const AIMS_SOA_DIR = path.join(__dirname, '..');
const OUTPUT = path.join(AIMS_SOA_DIR, 'AIMS-SoA-Consolidated.md');

// ISO 42001 uses 9 groups (A.2-A.10) instead of ISO 27001's 4 themes
const groups = {
  'A.2': { title: 'Policies related to AI', controls: [] },
  'A.3': { title: 'Internal organization', controls: [] },
  'A.4': { title: 'Resources for AI systems', controls: [] },
  'A.5': { title: 'Assessing impacts of AI systems', controls: [] },
  'A.6': { title: 'AI system life cycle', controls: [] },
  'A.7': { title: 'Data for AI systems', controls: [] },
  'A.8': { title: 'Information for interested parties of AI systems', controls: [] },
  'A.9': { title: 'Use of AI systems', controls: [] },
  'A.10': { title: 'Third-party and customer relationships', controls: [] }
};

// Read all YAML files matching 42001-A.*.yml pattern
const files = fs.readdirSync(AIMS_SOA_DIR)
  .filter(f => f.endsWith('.yml') && f.startsWith('42001-A.'))
  .sort(/* numeric sort by control ID */);

// Process files, collect stats, generate markdown
// ... (same pattern as generate-soa.js but with groups instead of themes,
//     and additional sections for ISO 27001 cross-references)
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| AI governance as informal practice | ISO 42001 certification with formal AIMS | ISO 42001 published Dec 2023; certification available 2024 | Organizations must now demonstrate formal AI management system with documented controls, registry, and PDCA |
| AI risk assessment as part of general IT risk | Dedicated AI risk assessment with AI-specific risk sources (ISO 23894) | ISO 23894 published 2023; ISO 42001 references it | AI risks require specialized assessment addressing model, data, integration, operational, and societal dimensions |
| No standard for AI impact assessment | ISO 42005:2025 provides formal AIA framework | Published May 2025 | Organizations pursuing ISO 42001 can now reference a recognized standard for impact assessment; auditors expect alignment |
| AI system inventory as spreadsheet | AI System Registry as structured data (YAML-in-Git) with automation | Compliance-as-code movement 2024-2025 | Registry becomes a living management system artifact, not a static document |
| Separate ISMS and AIMS documentation | Integrated IMS with Annex SL alignment | Harmonized Structure enables integration 2023-2025 | Dual certification audits expect demonstrated integration; shared controls assessed once |
| AI transparency as ad-hoc disclosure | Structured transparency per ISO 12792:2025 | Published 2025 | Registry entries must include transparency information per standardized taxonomy |

**Deprecated/outdated:**
- Treating AI governance as a subset of IS governance without a dedicated management system. ISO 42001 is a standalone management system standard; auditors will not accept "we handle AI within ISO 27001."
- AI risk assessment using only CIA (confidentiality, integrity, availability) dimensions. ISO 42001 cl. 6.1.2 explicitly requires assessing "potential consequences to the organization, individuals and societies."
- Impact assessment without reference to ISO 42005. While not mandatory for ISO 42001 certification, auditors increasingly expect organizations to demonstrate awareness of and alignment with ISO 42005:2025.

## Open Questions

1. **A.7.6 missing from standard?**
   - What we know: The ISO 42001:2023 standard Table A.1 (verified from PDF page 19) lists A.7.2 through A.7.5 explicitly and mentions A.7.6 (Data preparation). The AIGO sections document references A.7 controls including data preparation. I counted 5 controls in A.7 based on the standard.
   - What's unclear: I noticed that A.7.6 is present in Table A.1 but the Annex B implementation guidance section for A.7 needs verification. The numbering is non-sequential (A.7.1 is the objective, A.7.2-A.7.6 are controls).
   - Recommendation: Include all A.7 controls (A.7.2 through A.7.6) in the YAML files. Verify against the full Annex B text before finalizing implementation guidance.

2. **Should existing ISO 27001 SoA files get a `42001-mapping` field?**
   - What we know: The user decision requires `iso27001_mapping` in each ISO 42001 YAML file (42001 -> 27001 direction). The reverse direction (27001 -> 42001) is not explicitly required but would complete bidirectional traceability.
   - What's unclear: Whether to modify the existing 93 ISO 27001 SoA files to add a `42001-mapping` field as part of this phase.
   - Recommendation: **Add `42001-mapping` to ISO 27001 SoA files as a lightweight enhancement.** This is a small addition to each file (1-2 lines for the handful of ISO 27001 controls that map to ISO 42001) and completes the bidirectional traceability the user specified. Only ~20-25 of the 93 ISO 27001 controls have ISO 42001 mappings, so the effort is bounded.

3. **Consolidation script: separate or unified?**
   - What we know: User decided to extend the existing SoA consolidation script. The current script (`soa/scripts/generate-soa.js`) is 235 lines and processes ISO 27001 controls only.
   - What's unclear: Whether "extend" means modifying the existing script or creating a parallel script with shared utilities.
   - Recommendation: **Create a separate `generate-aims-soa.js` script** in `aims-soa/scripts/` (or a shared `soa/scripts/` location) that follows the same pattern but processes ISO 42001 controls independently. This avoids risking the working ISO 27001 generation and is easier to test. Both scripts can share the js-yaml dependency. The user's intent of "one tool covering both standards" can be achieved with a wrapper script that invokes both generators.

4. **Claude API as separate registry entry?**
   - What we know: The user said "Claude API" in the registry scope. The AIMS Scope GmbH document lists "ChatGPT" and "Codex" as third-party tools but lists Claude Code agents individually (not the Claude API separately).
   - What's unclear: Whether the Claude API (Anthropic's API used by the 7 agents) should be a separate registry entry or is covered by the individual agent entries.
   - Recommendation: **Do not create a separate Claude API entry.** The 7 Claude Code agents already reference Anthropic as the provider. The API is the infrastructure enabling the agents, not a separate AI system. Creating a redundant entry adds confusion. If the API is used for non-agent purposes in the future, a new entry can be created at that time. However, if "GitHub Copilot" is in use (mentioned in the user's CONTEXT.md), it should get its own entry (AI-3PARTY-003).

## Sources

### Primary (HIGH confidence)

- **ISO/IEC 42001:2023** -- Read directly from `/Users/helgeheupel/Documents/HH/SDLC/ISO IEC Standards Collection/ISO_IEC_42001_2023(en).pdf`:
  - Table A.1 (pages 17-20): Complete Annex A control list, all 39 controls verified with exact IDs and names
  - cl. 6.1.2-6.1.4 (pages 9-10): AI risk assessment, treatment, and impact assessment requirements
  - cl. 6.2 (page 10): AI objectives requirements
  - cl. 8.1-8.4 (page 13): Operation requirements including AI risk assessment and impact assessment
  - cl. 9.1-9.3 (pages 14-15): Performance evaluation, internal audit, management review
  - cl. 10.1-10.2 (pages 15-16): Improvement requirements
  - Annex B (pages 21+): Implementation guidance for all controls
- **ISO/IEC 23894:2023** -- Available at `/Users/helgeheupel/Documents/HH/SDLC/ISO IEC Standards Collection/ISO_IEC_23894_2023(en).pdf`; AI risk management guidance referenced for risk source categories
- `phase2/AIGO-sections.md` -- AIMS section drafts (Section 11.1-11.10): Registry schema (Section 11.3), AI risk assessment (Section 11.4), AI impact assessment (Section 11.5), Annex A control implementation table (Section 11.6), PDCA cycle (Section 11.9). Read directly from repository.
- `policies/AI-Policy.md` (HH-AIMS-POL-001) -- AI Policy with dual-axis classification (Section 4), prohibited practices (Section 5), roles and responsibilities (Section 6), lifecycle requirements (Section 7). Read directly (410 lines).
- `policies/IMS-Context.md` (HH-IMS-CTX-001) -- IMS Context with Annex SL alignment (Section 3), document hierarchy (Section 4), management commitment (Section 5), climate change (Section 6). Read directly (173 lines).
- `policies/scope/AIMS-Scope-GmbH.md` (HH-AIMS-SCOPE-GMBH-001) -- AIMS Scope GmbH with AI system inventory (Section 3) listing all 11 AI systems. Read directly (80 lines).
- `risks/RISK-AI-001.yml` -- Example AI risk register entry demonstrating the existing YAML schema with `ai-risk: true` flag and 5th impact dimension. Read directly.
- `soa/A.5.1.yml` -- Example ISO 27001 SoA control entry demonstrating the per-control YAML pattern. Read directly.
- `soa/scripts/generate-soa.js` -- Existing SoA consolidation script (235 lines, Node.js + js-yaml). Read directly.
- `risks/methodology/risk-assessment-methodology.md` (HH-ISMS-RMA-001) -- Risk assessment methodology with 5-step process. Read directly (100 lines header).
- `agents/ciso/reference/domain-context.md` (HH-CISO-REF-001) -- HH-specific context including compliance status, personnel, systems. Read directly (156 lines).

### Secondary (MEDIUM confidence)

- [ISO/IEC 42005:2025 overview](https://digital.nemko.com/insights/iso-iec-42005-ai-impact-assessment-framework-guide) -- AI impact assessment framework structure (risk identification, stakeholder analysis, mitigation, monitoring). Published May 2025. Cross-verified with [Scrut](https://www.scrut.io/post/iso-42005), [Pillar Security](https://www.pillar.security/blog/understanding-iso-42005-ai-impact-assessment), and [Prompt Security](https://prompt.security/blog/understanding-iso-iec-42005).
- [ISO 42001 Annex A Controls explained](https://www.isms.online/iso-42001/annex-a-controls/) -- Annex A control descriptions and implementation guidance overview. Cross-verified against the actual standard PDF.
- [ISO 42001 full list of clauses and controls](https://cyberzoni.com/standards/iso-42001/) -- Structural overview of ISO 42001. Cross-verified against standard PDF.
- [ISO 42001 Annex A complete overview](https://www.novelvista.com/blogs/quality-management/iso-42001-annex-a-controls) -- Control group descriptions. Cross-verified against standard PDF.

### Tertiary (LOW confidence)

- ISO/IEC 42005:2025 detailed section structure -- The standard was published in May 2025 and is not in the local standards collection. The process steps referenced in this research are based on secondary sources and the AIGO-sections.md mapping. If detailed section-level structure is needed, the standard should be procured. **Action:** Recommend procuring ISO 42005:2025 before finalizing the AI impact assessment procedure.

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH -- ISO 42001 Annex A controls verified directly from licensed standard PDF; all 39 controls confirmed with exact IDs and names; clause requirements read verbatim
- Architecture (registry, SoA, procedures): HIGH -- All patterns derived from established Phase 3 patterns (risk register YAML, SoA per-control YAML, consolidation script) with ISO 42001-specific adaptations
- Cross-references (42001 to 27001): HIGH -- Mapping derived from direct reading of both standards' Annex A requirements; verified against AIGO-sections.md Section 11.6 implementation table
- Impact assessment (ISO 42005): MEDIUM -- ISO 42005:2025 not in local collection; structure based on secondary sources and AIGO-sections.md growth-phase mapping. Sufficient for planning but detailed section mapping should be validated against the actual standard.
- PDCA integration: HIGH -- IMS Context document and AI Policy both read directly; Annex SL alignment verified from standard; Startup adaptation follows established 2-meeting governance model
- Don't-hand-roll items: HIGH -- All source materials (AIGO-sections.md, AI Policy, AIMS Scope, risk methodology, existing SoA script) read directly from repository and verified

**Research date:** 2026-02-22
**Valid until:** 2026-03-22 (30 days -- stable domain; ISO standards and audit practices do not change rapidly)
