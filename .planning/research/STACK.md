# STACK.md -- ISO 27001 + ISO 42001 Dual Certification Stack

**Research Type:** Project Research -- Stack Dimension
**Date:** 2026-02-18
**Researcher:** GSD Project Researcher (Claude Opus 4.6)
**Confidence Methodology:** HIGH (>85% confidence in recommendation based on direct project context + professional knowledge), MEDIUM (60-85%, strong directional confidence but verify specifics), LOW (<60%, emerging area or limited direct evidence)

---

## Executive Summary

This document defines the prescriptive technology stack for achieving ISO 27001:2022+Amd.1:2024 + ISO 42001:2023 dual certification for the Helge Heupel Group (1 CEO + 4 consultants + 6 Claude Code AI agents) by mid-May 2026. The stack is optimized for a startup-weight team that must produce enterprise-grade compliance artifacts at speed, leveraging AI agents as first-class artifact producers with human sign-off.

**Key architectural decision:** Documentation-as-code with a lightweight GRC platform, not enterprise GRC tooling. The team is too small for ServiceNow GRC's implementation overhead, and the existing SDLC-Growth-v2 framework already defines a comprehensive evidence automation architecture that maps to Git-native workflows.

**Stack philosophy:** Azure-native infrastructure (per CTO/CISO recommendation and SDLC-Growth-v2 Section 15) + Git-native compliance artifacts + Vanta for continuous monitoring + Claude Code agents for artifact generation + human review/sign-off workflow.

---

## 1. GRC Platform

### 1.1 Recommendation: Vanta (Startup Phase) -- Confidence: HIGH

**What:** Vanta is a compliance automation platform that continuously monitors infrastructure, automates evidence collection, and provides auditor-facing dashboards for ISO 27001, SOC 2, and (as of 2025) ISO 42001.

**Why Vanta, not alternatives:**

| Platform | Verdict | Rationale |
|----------|---------|-----------|
| **Vanta** | **RECOMMENDED** | Native ISO 27001 + ISO 42001 support (added 2025). 200+ integrations including Azure, Azure AD/Entra ID, GitHub, Azure DevOps. Startup pricing (~$10-15K/year for ISO 27001 + ISO 42001 bundle). Auditor-facing portal reduces audit prep time by 50-70%. Time-to-value: 2-4 weeks. Adequate for a 5-person team. |
| ServiceNow GRC | NOT AT STARTUP | Enterprise-grade (correct for Growth phase at EUR 10-50M ARR). Implementation takes 3-6 months with a dedicated GRC engineer. Minimum ~$50-100K/year. SDLC-Growth-v2 Section 15.5 correctly identifies "Vanta (initial) / ServiceNow GRC (at scale)" -- follow this progression. |
| Drata | ALTERNATIVE | Comparable to Vanta. Slightly stronger on SOC 2, slightly weaker on ISO 42001 maturity. Either works; Vanta has better Azure-native integration. |
| Sprinto | ALTERNATIVE | Good for SOC 2 + ISO 27001 at lower price point (~$8-12K). ISO 42001 support is nascent (announced but not mature). Not recommended if ISO 42001 is a primary target. |
| Secureframe | ALTERNATIVE | Strong SOC 2/ISO 27001. ISO 42001 support added mid-2025. Less mature Azure integration than Vanta. |
| Anecdotes.ai | NICHE | Purpose-built for ISO 42001 + EU AI Act. Very new (founded 2024). Could be a supplementary tool for AI-specific compliance mapping. Worth monitoring but not as primary GRC. |
| Manual (spreadsheets) | DO NOT USE | A 5-person team cannot maintain manual evidence collection across 93 ISO 27001 controls + 28 ISO 42001 Annex A controls + TISAX ISA 6 objectives. The SDLC-Growth-v2 gap analyses (EU-CA, AIGO) identified 130+ gaps -- tracking these manually is unsustainable. |

**Vanta configuration for dual certification:**

1. **ISO 27001:2022+Amd.1:2024 framework** -- map all 93 Annex A controls
2. **ISO 42001:2023 framework** -- map Annex A controls A.2-A.10 (28 controls)
3. **TISAX ISA 6 custom framework** -- manual mapping using Vanta's custom framework feature (TISAX is not natively supported; requires custom control mapping)
4. **Integrations to enable:** Azure (subscription-level), Azure AD/Entra ID, Azure DevOps, GitHub (secondary), Microsoft 365, Endpoint management (Intune)

**What Vanta does NOT do (and what fills the gap):**

- Does not generate policy/procedure documents -- Claude Code agents produce these
- Does not perform risk assessments -- separate risk assessment tool needed (see Section 5)
- Does not manage the AIMS PDCA cycle -- documentation-as-code handles this
- Limited AI system registry capability -- custom YAML registry in Git (see Section 6)
- No TISAX native support -- custom framework mapping required
- Does not produce SoA documents -- agents generate, Vanta tracks evidence against controls

### 1.2 Migration Path to ServiceNow GRC -- Confidence: MEDIUM

At Growth phase (EUR 10-50M ARR, 20+ employees, SOC 2 Type II + FedRAMP requirements active):

- Migrate from Vanta to ServiceNow GRC IRM (Integrated Risk Management)
- ServiceNow GRC provides: unified risk register with quantitative scoring, automated control testing workflows, vendor risk management, policy lifecycle management, audit management with workpapers
- Timeline: 12-18 months from now (earliest mid-2027)
- Budget: Plan for $80-150K/year + $50-100K implementation

---

## 2. Claude Code AI Agent Architecture

### 2.1 Agent Framework: Claude Code CLI with System Prompts -- Confidence: HIGH

**What:** Each of the 6 AI agents is a Claude Code session configured with a domain-specific system prompt (CLAUDE.md), tool permissions, and access to the project's documentation-as-code repository. Agents are invoked by the CEO or consultants via CLI.

**Why this architecture, not alternatives:**

| Approach | Verdict | Rationale |
|----------|---------|-----------|
| **Claude Code CLI + system prompts** | **RECOMMENDED** | Already the team's working environment. Agents have full filesystem access to read standards, produce artifacts, and commit to Git. No additional infrastructure needed. The SDLC-Growth-v2 Section 10.8 already defines agent governance (tiers, trust levels, kill switches). |
| Claude API + custom orchestrator | NOT AT STARTUP | Adds engineering overhead to build orchestration logic. Not justified for 6 agents with a single human orchestrator (CEO). Appropriate for Growth phase if agent-to-agent workflows become complex. |
| LangChain / LangGraph / CrewAI | DO NOT USE | Adds unnecessary abstraction layers. These frameworks are designed for complex multi-agent workflows with tool use, memory management, and routing. The HH use case is simpler: human-invoked agents that produce document artifacts. The overhead of maintaining a Python orchestration layer is not justified for a 5-person team. |
| AutoGen (Microsoft) | DO NOT USE | Similar to LangChain concern -- adds engineering complexity. Also, AutoGen's multi-agent conversation patterns are designed for collaborative problem-solving, not document production. |
| Claude MCP (Model Context Protocol) servers | CONSIDER FOR GROWTH | MCP servers could provide agents with structured access to the GRC platform API, risk register, and evidence store. Not needed for startup phase where filesystem access suffices. |

**Agent architecture pattern:**

```
CEO (Orchestrator)
  |
  +-- Claude Code Session: CTO Agent
  |     System prompt: architecture + AI engineering domain
  |     Tools: filesystem, git, Azure CLI
  |     Outputs: ADRs, architecture decisions, AI system designs
  |
  +-- Claude Code Session: CISO Agent
  |     System prompt: security + EU compliance + AI governance
  |     Tools: filesystem, git, Vanta API (read-only)
  |     Outputs: IS policies, risk assessments, ISMS docs, SoA
  |
  +-- Claude Code Session: Head of AI Science Agent
  |     System prompt: AI research + model evaluation + ISO 42001
  |     Tools: filesystem, git
  |     Outputs: AI risk assessments, model eval frameworks, AIMS artifacts
  |
  +-- Claude Code Session: Head of Platform/SRE Agent
  |     System prompt: SRE + observability + BCP/DR
  |     Tools: filesystem, git, Azure CLI, kubectl
  |     Outputs: SLO frameworks, runbooks, incident procedures
  |
  +-- Claude Code Session: Product/Strategy Lead Agent
  |     System prompt: strategy + OKRs + portfolio governance
  |     Tools: filesystem, git
  |     Outputs: Strategic alignment docs, OKR frameworks, market analysis
  |
  +-- Claude Code Session: AppSec Agent
        System prompt: threat modeling + SAST/DAST + SBOM + SLSA
        Tools: filesystem, git, security scanning CLIs
        Outputs: Threat models, security configs, SBOM pipelines
```

### 2.2 Agent System Prompt Architecture -- Confidence: HIGH

Each agent's system prompt (stored as `CLAUDE.md` or dedicated agent definition files) must include:

1. **Role definition:** Domain expertise, accountability boundaries, what the agent owns vs. advises on
2. **Standards context:** Which ISO clauses and controls the agent is responsible for (loaded via file references to the ISO standards collection in `/SDLC/ISO IEC Standards Collection/`)
3. **Output templates:** Structured templates for each artifact type (policy, procedure, risk assessment, SoA entry, etc.)
4. **Quality gates:** Self-check criteria before presenting output to human reviewer
5. **Cross-agent references:** Which other agents' outputs to reference (dependency map from AIGO and EU-CA gap analyses)
6. **Sign-off protocol:** How to mark artifacts as "agent-produced, pending human review" with metadata (agent ID, timestamp, model version, confidence level)

### 2.3 Agent Interaction Model -- Confidence: HIGH

Per SDLC-Growth-v2 Section 10.8.4, the recommended workflow patterns for compliance artifact production:

| Pattern | Use Case | Example |
|---------|----------|---------|
| **Sequential** | Policy drafting chain | CISO agent drafts IS Policy -> CTO agent reviews technical feasibility -> CISO agent incorporates feedback -> CEO signs off |
| **Fan-out / Fan-in** | Cross-cutting artifact | CEO requests SoA update -> CISO agent (organizational controls), CTO agent (technical controls), Platform agent (physical/cloud controls) each produce their sections -> CISO agent consolidates |
| **Peer Review** | Quality assurance | CISO agent produces risk assessment -> Head of AI Science agent reviews AI-specific risks -> disagreements flagged for CEO |

**Human oversight enforcement:**
- All agent outputs committed to a `drafts/` branch, never directly to `main`
- Pull request required for any artifact moving to `main` (human review gate)
- Git commit metadata includes agent ID and session hash for audit trail
- Per SDLC-Growth-v2 Section 10.8.5: kill switch, budget enforcement, timeout enforcement, rollback capability

---

## 3. Evidence Management and Automation

### 3.1 Evidence Architecture: Git-Native + Vanta -- Confidence: HIGH

The SDLC-Growth-v2 Section 6.4 already defines a comprehensive evidence automation architecture. The stack must implement this design.

**Evidence lifecycle (per SDLC-Growth-v2 Section 6.4.1):**

```
Generate  ->  Validate  ->  Store  ->  Query  ->  Package
CI/CD,        Schema       Immutable    GRC Query     Audit Pack
Runtime,      check +      evidence     API +         per framework
Agent output  attestation  store (Git)  Dashboard
```

**Evidence sources and storage:**

| Source | Evidence Type | Storage | Format | Automation |
|--------|-------------|---------|--------|------------|
| Claude Code agents | Policies, procedures, risk assessments, SoA entries | Git repository (Markdown/YAML) | Structured Markdown with YAML frontmatter | Agent produces, human reviews via PR |
| Azure Pipelines | SAST/DAST results, SBOM, container scan reports, deployment records | Azure DevOps + Vanta | CycloneDX (SBOM), SARIF (scan results), JSON (deployment) | Automated pipeline artifacts pushed to Vanta via API |
| Azure Monitor / Sentinel | Security event logs, monitoring evidence, incident records | Azure Log Analytics (primary), exported to Vanta | KQL queries producing JSON evidence snapshots | Scheduled Vanta integration pulls |
| Azure Policy | Infrastructure compliance posture | Azure Policy compliance state | JSON compliance reports | Vanta Azure integration |
| Vanta platform | Control status, test results, personnel evidence | Vanta SaaS (EU data center) | Vanta native format | Automated tests + manual attestations |
| Human sign-offs | Management review minutes, risk acceptance decisions, policy approvals | Git repository (signed commits) + Vanta | Markdown with cryptographic attestation | CEO/consultant signs off via Git + records in Vanta |

### 3.2 Evidence Schema (per SDLC-Growth-v2 Section 6.4.2) -- Confidence: HIGH

Each evidence artifact conforms to this schema, enabling automated binding to controls:

```yaml
# Evidence artifact frontmatter
evidence_id: "EVD-2026-02-18-ISMS-POL-001"
type: "policy_document"
title: "Information Security Policy"
version: "1.0"
status: "draft" # draft | review | approved | superseded
produced_by:
  agent_id: "CISO-Agent-v1"
  model: "claude-opus-4-6"
  session_hash: "abc123..."
  timestamp: "2026-02-18T14:30:00Z"
reviewed_by: null  # filled on human review
approved_by: null  # filled on sign-off
controls_mapped:
  - "ISO27001:A.5.1"
  - "ISO42001:5.2"
  - "TISAX:ISA-1.1"
classification: "internal-confidential"
retention: "indefinite"
next_review: "2027-02-18"
```

### 3.3 Evidence Repository Structure -- Confidence: HIGH

```
compliance/
├── isms/                          # ISO 27001 ISMS artifacts
│   ├── policies/                  # IS Policy, sub-policies
│   ├── procedures/                # Operational procedures
│   ├── risk-assessment/           # Risk methodology, register, treatment plan
│   ├── soa/                       # Statement of Applicability
│   ├── internal-audit/            # Audit program, reports
│   └── management-review/         # Review minutes, inputs/outputs
│
├── aims/                          # ISO 42001 AIMS artifacts
│   ├── ai-policy/                 # AI Policy (standalone per AIGO gap)
│   ├── ai-system-registry/        # AI system inventory (YAML)
│   ├── ai-risk-assessment/        # AI risk methodology, register
│   ├── ai-impact-assessment/      # Impact assessment records
│   ├── ai-objectives/             # AI objectives and plans
│   ├── soa/                       # AIMS Statement of Applicability
│   └── transparency/              # Transparency information per ISO 12792
│
├── tisax/                         # TISAX-specific evidence
│   ├── isa6-mapping/              # ISA 6 control mapping with Level 3 evidence
│   └── prototype-protection/      # Prototype protection procedures
│
├── shared/                        # Cross-framework artifacts
│   ├── risk-register/             # Unified risk register (YAML/JSON)
│   ├── control-library/           # Unified Control Library (UCL)
│   ├── competence-records/        # Training and competence evidence
│   ├── incident-management/       # Incident procedures, records
│   └── bcp-dr/                    # Business continuity, disaster recovery
│
├── entity-addenda/                # Entity-specific compliance
│   ├── gmbh-de/                   # German NIS2UmsuCG, BSI
│   ├── bv-nl/                     # Dutch Wbni, NCSC-NL
│   └── inc-us/                    # US compliance (FedRAMP deferred)
│
└── evidence-index.yaml            # Master index mapping evidence to controls
```

---

## 4. Documentation-as-Code Approach

### 4.1 Recommendation: Markdown + YAML in Git -- Confidence: HIGH

**What:** All ISMS/AIMS documentation maintained as Markdown files with YAML frontmatter in a Git repository. Policies, procedures, risk registers, SoA, and evidence records are all version-controlled, reviewable via PRs, and auditable via Git history.

**Why documentation-as-code, not traditional document management:**

| Approach | Verdict | Rationale |
|----------|---------|-----------|
| **Markdown + YAML in Git** | **RECOMMENDED** | Aligns with SDLC-Growth-v2 Principle 7 ("Everything as Code"). Full audit trail via Git history. Claude Code agents can read/write natively. PR-based review = human sign-off with timestamp. Diff-based change tracking satisfies ISO 27001 cl. 7.5.3 (document control). No additional tooling cost. |
| SharePoint / Confluence | DO NOT USE | Creates a parallel documentation silo outside the developer workflow. AI agents cannot natively produce/edit documents in these systems. Change tracking is weaker than Git. Requires manual evidence export for auditors. |
| GRC platform document module | SUPPLEMENTARY ONLY | Use Vanta's document storage for the auditor-facing "golden copies" of approved policies. Source of truth remains Git. Sync approved documents to Vanta after PR merge. |
| Notion / Coda | DO NOT USE | Not designed for compliance documentation. Weak audit trails. No structured frontmatter. AI agent integration requires API work. |

### 4.2 Rendering and Publishing -- Confidence: MEDIUM

For auditor-facing presentation, convert Markdown to professional PDF:

| Tool | Purpose | Confidence |
|------|---------|------------|
| **Pandoc + LaTeX** | Convert Markdown policies/procedures to branded PDF for auditors | HIGH -- mature, well-understood |
| **MkDocs Material** | Internal documentation site for team navigation of compliance docs | MEDIUM -- good DX, may be over-engineering for 5 people |
| **Vanta document upload** | Auditor-facing portal where approved PDFs are uploaded | HIGH -- required for audit workflow |

**Pipeline:**
```
Agent produces Markdown -> PR review -> Merge to main ->
CI pipeline: Pandoc converts to PDF -> Upload to Vanta document store ->
Auditor accesses via Vanta portal
```

### 4.3 Document Control Requirements (ISO 27001 cl. 7.5.3) -- Confidence: HIGH

Git-native document control satisfies all ISO requirements:

| ISO Requirement | Git Implementation |
|-----------------|-------------------|
| Creation and updating | YAML frontmatter (author, date, version, classification) |
| Approval | PR approval by designated reviewer (CEO, CISO, CTO) |
| Version control | Git commit history with semantic versioning in frontmatter |
| Distribution | Git repository access control (Azure DevOps RBAC) |
| Access control | Branch protection + Azure DevOps permissions |
| Storage | Azure DevOps Repos (FedRAMP High authorized) |
| Retention | Git history (indefinite); backup via Azure DevOps |
| Disposition | Document status field: "superseded" with reference to replacement |
| Change tracking | `git diff` between versions; PR descriptions document change rationale |

---

## 5. Risk Assessment and Management

### 5.1 Risk Register: YAML-in-Git + Vanta -- Confidence: HIGH

**What:** The unified risk register (per SDLC-Growth-v2 Section 5.5) is maintained as structured YAML in the compliance Git repository, with a synchronized view in Vanta for dashboard/reporting.

**Why YAML-in-Git, not a dedicated GRC risk module:**

- Claude Code agents can directly read and update YAML risk entries
- Version-controlled risk history (every change auditable)
- PR-based review for risk acceptance decisions
- Structured schema enables automated cross-framework evidence generation
- Vanta sync provides the dashboard/reporting layer humans and auditors need

**Risk register schema (per SDLC-Growth-v2 Section 5.5):**

```yaml
risks:
  - risk_id: "ISR-001"
    title: "Unauthorized access to Verity customer data"
    category: "information_security"  # or ai_specific, operational, compliance
    description: "..."
    risk_owner: "CISO"
    threat_source: "External attacker"
    vulnerability: "Misconfigured Azure RBAC"
    asset_affected: "Verity VE customer database"
    likelihood: 3  # 1-5 scale
    impact: 4      # 1-5 scale
    inherent_risk: 12
    controls:
      - control_id: "UCL-AC-001"
        frameworks: ["ISO27001:A.5.15", "TISAX:ISA-4.1", "ISO42001:A.4.5"]
        effectiveness: "effective"
    residual_likelihood: 2
    residual_impact: 4
    residual_risk: 8
    risk_treatment: "mitigate"
    treatment_plan: "Implement JIT access + quarterly access reviews"
    acceptance_status: "accepted"  # accepted | treating | escalated
    accepted_by: "CEO"
    last_reviewed: "2026-02-18"
    next_review: "2026-05-18"
    frameworks_served:
      - "ISO27001:6.1.2"
      - "ISO42001:6.1.2"
      - "TISAX:ISA-1.4"
```

### 5.2 Risk Assessment Methodology Tool -- Confidence: MEDIUM

For the semi-quantitative risk assessment methodology (5x5 likelihood x impact matrix, per SDLC-Growth-v2 and EU-CA gap analysis recommendation):

| Tool | Purpose | Recommendation |
|------|---------|---------------|
| **YAML templates + Claude Code agents** | Agents populate risk assessments using structured templates; CEO/CISO reviews | RECOMMENDED for startup. Agents can reference the ISO 23894 AI risk management standard and the SDLC-Growth-v2 risk methodology to produce consistent assessments. |
| **Vanta risk management module** | Track risk status, trigger reviews, generate reports | SUPPLEMENTARY -- use for dashboard and auditor reporting |
| **FAIR (Factor Analysis of Information Risk)** | Quantitative risk analysis for high-impact risks | DEFERRED to Growth phase. Mentioned in SDLC-Growth-v2 Section 5.1 but overkill for startup with <30 top risks. |

---

## 6. AI System Registry (ISO 42001 Annex A.4.2)

### 6.1 Recommendation: YAML Registry in Git -- Confidence: HIGH

The AIGO gap analysis identified the AI system registry as a CRITICAL gap. The SDLC-Growth-v2 Section 10.7 defines the registry requirements.

**Why YAML-in-Git, not a database:**

- Claude Code agents can directly maintain registry entries
- Version-controlled (every registry change auditable)
- Machine-readable (enables automated compliance checks)
- Aligns with "Everything as Code" principle
- No additional infrastructure to maintain
- Can be rendered to human-readable format via CI/CD

**Registry schema (per SDLC-Growth-v2 Section 10.7 + AIGO gap analysis):**

```yaml
ai_systems:
  - system_id: "PROD-AI-001"
    name: "Verity VE Decision Quality Score Engine"
    category: "product_ai"  # product_ai | development_ai | third_party_ai
    description: "Calculates Decision Quality Scores for enterprise decisions"
    intended_purpose: "Quantify decision quality in value engineering contexts"
    eu_ai_act_classification: "limited_risk"  # prohibited | high_risk | limited_risk | minimal_risk
    iso42001_risk_level: "medium"
    lifecycle_status: "development"  # design | development | testing | deployed | monitoring | retired
    data_inputs:
      - "Enterprise decision metadata"
      - "Historical outcome data"
    data_outputs:
      - "Decision Quality Score (0-100)"
      - "Confidence interval"
    model_details:
      base_model: "Azure OpenAI GPT-4o"
      fine_tuned: false
      training_data_description: "N/A (prompt-based)"
    applicable_controls:
      - "ISO42001:A.4.2"
      - "ISO42001:A.5.2"
      - "ISO42001:A.6.2"
      - "ISO42001:A.8.2"
    transparency_requirements:
      user_notification: true
      explainability_method: "Feature attribution via prompt"
    responsible_owner: "CTO"
    risk_assessment_id: "AIR-001"
    impact_assessment_id: "AIA-001"
    last_reviewed: "2026-02-18"

  - system_id: "DEV-AI-001"
    name: "Claude Code - CTO Agent"
    category: "development_ai"
    description: "AI agent producing architecture decisions and technical artifacts"
    intended_purpose: "Augment CTO function with AI-generated technical documentation"
    eu_ai_act_classification: "minimal_risk"
    iso42001_risk_level: "low"
    lifecycle_status: "deployed"
    # ... (similar structure)

  - system_id: "3P-AI-001"
    name: "GitHub Copilot Enterprise"
    category: "third_party_ai"
    description: "AI-powered code completion in IDE"
    intended_purpose: "Developer productivity for code generation"
    eu_ai_act_classification: "minimal_risk"
    iso42001_risk_level: "low"
    lifecycle_status: "deployed"
    supplier: "GitHub / Microsoft"
    data_boundary: "Enterprise - no code retention"
    # ... (similar structure)
```

---

## 7. Compliance Automation Tooling

### 7.1 Azure-Native Compliance Stack -- Confidence: HIGH

Per SDLC-Growth-v2 Section 15, the Azure-native stack provides the infrastructure compliance layer:

| Tool | Purpose | Compliance Mapping | Status in SDLC-Growth-v2 |
|------|---------|-------------------|-------------------|
| **Azure Policy (Deny + Audit)** | Infrastructure compliance enforcement | ISO 27001 A.5.36, A.8.9; all frameworks | Defined |
| **Microsoft Defender for Cloud** | Cloud security posture management (CSPM) | ISO 27001 A.8.7, A.8.8; NIS2 Art.21(e) | Defined |
| **Microsoft Sentinel** | SIEM/SOAR, NIS2 incident reporting automation | ISO 27001 A.5.24-A.5.28; NIS2 Art.23 | Defined |
| **Azure Monitor + App Insights** | Observability, SLO monitoring | ISO 27001 A.8.15, A.8.16 | Defined |
| **OPA/Gatekeeper** | Kubernetes policy enforcement | All frameworks (policy-as-code) | Defined |
| **Checkov + tfsec** | IaC security scanning | ISO 27001 A.8.25, A.8.27 | Defined |

### 7.2 CI/CD Pipeline Evidence Generation -- Confidence: HIGH

Per SDLC-Growth-v2 Section 6.4.3, each pipeline stage produces structured evidence:

| Pipeline Stage | Evidence Artifact | UCL Controls | Framework Mapping |
|---------------|-------------------|-------------|-------------------|
| SAST | SonarQube + Semgrep results | UCL-SD-001 | ISO 27001 A.8.28 |
| SCA | Defender for DevOps + Trivy results | UCL-SD-002 | NIS2 Art.21(d) |
| SBOM | Syft CycloneDX output | UCL-SD-003 | ISO 27001 A.5.19 |
| Container Scan | Defender for Containers results | UCL-SD-004 | ISO 27001 A.8.7 |
| DAST | Dynamic scan results | UCL-SD-005 | ISO 27001 A.8.29 |
| Compliance-as-Code | OPA policy check results | UCL-SD-006 | All frameworks |
| Deployment | Deployment record with rollback plan | UCL-SD-015 | ISO 27001 A.5.29 |

### 7.3 Compliance-as-Code Engine -- Confidence: HIGH

| Tool | Purpose | Recommendation |
|------|---------|---------------|
| **Open Policy Agent (OPA) + Rego** | Policy-as-code for Kubernetes admission control and general policy enforcement | RECOMMENDED -- already in SDLC-Growth-v2 stack. Write Rego policies for ISMS/AIMS controls that can be machine-enforced. |
| **Azure Policy (built-in + custom)** | Azure resource compliance | RECOMMENDED -- enforce data residency, encryption, network isolation at Azure level |
| **Checkov** | IaC compliance scanning against CIS benchmarks + custom policies | RECOMMENDED -- pre-deployment gate in CI/CD |

---

## 8. ISMS/AIMS Documentation Production Workflow

### 8.1 Agent-Driven Documentation Pipeline -- Confidence: HIGH

This is the core innovation: Claude Code agents produce ISMS/AIMS documentation artifacts that would traditionally require expensive consultants or months of manual effort.

**Workflow:**

```
Step 1: CEO identifies artifact needed (e.g., "IS Policy per ISO 27001 cl. 5.2")
     |
Step 2: CEO invokes appropriate agent (e.g., CISO Agent) with context
     |    Agent reads: ISO 27001 standard (PDF), AIGO/EU-CA gap analyses,
     |    SDLC-Growth-v2 requirements, existing artifacts in compliance/ repo
     |
Step 3: Agent produces draft artifact in Markdown with YAML frontmatter
     |    Commits to drafts/ branch
     |
Step 4: CEO (or designated consultant) reviews via PR
     |    - Checks factual accuracy against standards
     |    - Checks organizational fit
     |    - Requests changes or approves
     |
Step 5: On PR merge to main:
     |    - CI pipeline generates PDF via Pandoc
     |    - Evidence metadata indexed in evidence-index.yaml
     |    - Artifact synced to Vanta document store
     |    - Control mapping updated in Vanta
     |
Step 6: Artifact is now audit-ready in both Git (source of truth)
        and Vanta (auditor portal)
```

### 8.2 Artifact Production Priority (for mid-May 2026 certification) -- Confidence: HIGH

Based on the EU-CA and AIGO gap analyses, these are the artifacts the agents must produce, in priority order:

**Phase 1 (Weeks 1-4): Foundation artifacts**
1. Information Security Policy (ISO 27001 cl. 5.2) -- CISO Agent
2. AI Policy (ISO 42001 cl. 5.2) -- CISO Agent + Head of AI Science Agent
3. ISMS Scope Statement (ISO 27001 cl. 4.3) -- CISO Agent
4. AIMS Scope Statement (ISO 42001 cl. 4.3) -- Head of AI Science Agent
5. Risk Assessment Methodology (ISO 27001 cl. 6.1.2 + ISO 42001 cl. 6.1.2) -- CISO Agent
6. Statement of Applicability - ISO 27001 (93 controls) -- CISO Agent
7. Statement of Applicability - ISO 42001 (Annex A controls) -- Head of AI Science Agent
8. AI System Registry (ISO 42001 A.4.2) -- CTO Agent + Head of AI Science Agent

**Phase 2 (Weeks 5-8): Operational procedures**
9. Risk Register (populated, unified) -- CISO Agent + all agents contributing domain risks
10. Risk Treatment Plan -- CISO Agent
11. Incident Management Procedure -- Platform/SRE Agent + CISO Agent
12. Access Control Policy -- CTO Agent + CISO Agent
13. Cryptographic Policy -- CTO Agent
14. BCP/DR Plan -- Platform/SRE Agent
15. Supplier Security Policy -- CISO Agent
16. AI Data Governance Framework -- Head of AI Science Agent
17. AI Transparency Framework -- Head of AI Science Agent
18. Change Management Procedure -- CTO Agent + Platform/SRE Agent

**Phase 3 (Weeks 9-12): Certification readiness**
19. Internal Audit Program and Plan -- CISO Agent
20. Management Review template and first review record -- CISO Agent
21. Competence Framework + Training Records -- Product/Strategy Lead Agent
22. Nonconformity and Corrective Action Procedure -- CISO Agent
23. Monitoring and Measurement Procedure -- Platform/SRE Agent
24. Entity-specific addenda (DE, NL, US) -- CISO Agent
25. TISAX ISA 6 control mapping with Level 3 evidence -- CISO Agent + AppSec Agent
26. Cross-entity incident escalation matrix -- CISO Agent + Platform/SRE Agent

---

## 9. Specific Tool Versions and Configurations

### 9.1 Core Stack Summary -- Confidence: HIGH

| Category | Tool | Version/Edition | Purpose |
|----------|------|----------------|---------|
| **GRC Platform** | Vanta | Current SaaS (2025/2026) | Continuous compliance monitoring, evidence collection, auditor portal |
| **AI Agent Runtime** | Claude Code | Current (Opus 4.6 model) | 6 domain-expert agents producing compliance artifacts |
| **AI Model** | Claude Opus 4.6 | claude-opus-4-6 | Primary model for all agents (1M context window for reading standards + producing artifacts) |
| **Source Control** | Azure DevOps Repos | Current | Primary compliance document repository |
| **Source Control** | GitHub Enterprise Cloud | Current | Secondary (open source, EU-only) |
| **CI/CD** | Azure Pipelines | Current | Evidence generation pipeline, PDF rendering, Vanta sync |
| **Document Rendering** | Pandoc | 3.x | Markdown-to-PDF conversion for auditor-facing documents |
| **Infrastructure Compliance** | Azure Policy | Current | Infrastructure-level control enforcement |
| **CSPM** | Microsoft Defender for Cloud | Current | Cloud security posture management |
| **SIEM/SOAR** | Microsoft Sentinel | Current | Security monitoring, NIS2 incident reporting |
| **SAST** | SonarQube + Semgrep | SonarQube 10.x, Semgrep latest | Static code analysis |
| **SCA** | Microsoft Defender for DevOps + Trivy | Current | Dependency vulnerability scanning |
| **SBOM** | Syft | Latest | CycloneDX SBOM generation |
| **Container Security** | Microsoft Defender for Containers | Current | Runtime container protection |
| **Policy Engine** | OPA/Gatekeeper | OPA latest, Gatekeeper 3.x | Kubernetes policy enforcement |
| **IaC Scanning** | Checkov + tfsec | Latest | Pre-deployment compliance scanning |
| **Secrets** | Azure Key Vault (Premium) | Current | HSM-backed secret management |
| **Monitoring** | Azure Monitor + Grafana | Current | Observability stack |

### 9.2 NOT in the Stack (and Why) -- Confidence: HIGH

| Tool | Category | Why NOT |
|------|----------|---------|
| **ServiceNow GRC** | GRC | Over-engineered for 5-person team. 3-6 month implementation. $100K+ annual cost. Correct for Growth phase, not startup. |
| **OneTrust** | Privacy/GRC | Focused on privacy program management. Overlaps with Vanta. Adds complexity without proportional value at startup scale. |
| **Archer (RSA)** | GRC | Legacy enterprise GRC. Massive implementation overhead. Not cloud-native. |
| **LangChain / CrewAI / AutoGen** | Agent framework | Unnecessary abstraction layer for document-producing agents. Adds Python dependency and orchestration complexity. Claude Code CLI is sufficient. |
| **Confluence / SharePoint** | Document management | Creates parallel documentation silo. Not agent-friendly. Weaker audit trail than Git. |
| **Snyk** | SCA | Replaced by Microsoft Defender for DevOps + Trivy per SDLC-Growth-v2 to reduce vendor count. |
| **Jira** | Work tracking | Azure Boards already in stack per SDLC-Growth-v2. Adding Jira duplicates work tracking. |
| **Notion** | Documentation | No structured compliance support. Weak audit trail. Not designed for this use case. |
| **Custom-built GRC** | GRC | Building a GRC platform is a multi-quarter engineering project. Buy, don't build, for compliance tooling. |
| **Excel/Google Sheets** | Risk register, SoA | Not version-controlled. No agent integration. No automated evidence binding. Manual effort does not scale. |

---

## 10. TISAX-Specific Stack Considerations

### 10.1 TISAX ISA 6 Tooling -- Confidence: MEDIUM

TISAX is not natively supported by Vanta (or most GRC platforms). This requires a hybrid approach:

| Need | Solution | Rationale |
|------|----------|-----------|
| ISA 6 control mapping | Custom YAML mapping in Git + Vanta custom framework | Agents produce the mapping; Vanta tracks evidence status |
| Level 3 maturity evidence | Structured evidence per control objective in compliance/tisax/ | Level 3 requires: documented processes, consistent implementation, measured effectiveness, continuous improvement |
| ENX portal | Manual submission | TISAX assessment registration and results are managed via the ENX portal; no API automation |
| Prototype protection | Dedicated procedure in compliance/tisax/prototype-protection/ | Critical for automotive OEM customers; agent-produced, human-reviewed |

---

## 11. Integrated Management System (IMS) Architecture

### 11.1 Single IMS for ISO 27001 + ISO 42001 -- Confidence: HIGH

Both standards follow the ISO Harmonized Structure (clauses 4-10). The stack must support a single integrated management system, not two parallel systems.

**Shared processes:**
| Process | ISO 27001 Clause | ISO 42001 Clause | Implementation |
|---------|-----------------|-----------------|----------------|
| Context analysis | 4.1, 4.2 | 4.1, 4.2 | Single context analysis document covering both IS and AI |
| Leadership commitment | 5.1 | 5.1 | Single management commitment statement |
| Risk assessment | 6.1.2 | 6.1.2 | Unified risk register with IS and AI risk categories |
| Internal audit | 9.2 | 9.2 | Single audit program covering both standards |
| Management review | 9.3 | 9.3 | Single quarterly review covering both ISMS and AIMS |
| Nonconformity management | 10.2 | 10.2 | Single NCR process |
| Document control | 7.5 | 7.5 | Single Git-based document control system |

**Separate artifacts (standard-specific):**
| Artifact | Standard | Rationale |
|----------|----------|-----------|
| IS Policy | ISO 27001 | Different scope and objectives from AI Policy |
| AI Policy | ISO 42001 | AI-specific commitments and objectives |
| SoA (93 controls) | ISO 27001 | Annex A controls are IS-specific |
| SoA (Annex A controls) | ISO 42001 | Annex A controls are AI-specific |
| AI System Registry | ISO 42001 | No ISO 27001 equivalent requirement |
| AI Impact Assessment | ISO 42001 | Extends beyond IS risk assessment |

---

## 12. Budget Estimate

### 12.1 Startup Phase Annual Cost -- Confidence: MEDIUM

| Item | Annual Cost (EUR) | Notes |
|------|------------------|-------|
| Vanta (ISO 27001 + ISO 42001) | 10,000 - 15,000 | Startup pricing; negotiate for dual-framework bundle |
| Claude Code (Anthropic) | 6,000 - 12,000 | 6 agents, heavy usage during artifact production phase; depends on plan tier |
| Azure compliance tooling | 0 (included) | Defender for Cloud, Policy, Sentinel included in Azure spend already budgeted |
| Certification body (ISO 27001 + ISO 42001) | 15,000 - 30,000 | Stage 1 + Stage 2 audit; dual certification may qualify for integrated audit discount |
| TISAX assessment (ENX) | 8,000 - 15,000 | Level 3 assessment by ENX-accredited body |
| Pandoc / rendering tooling | 0 | Open source |
| SonarQube | 0 - 5,000 | Community Edition free; Developer Edition if needed |
| **Total** | **39,000 - 77,000** | First year; subsequent years lower (surveillance audits ~40-50% of initial) |

### 12.2 Budget as % of Expected Revenue -- Confidence: MEDIUM

At pre-revenue / early revenue stage, this represents the "8-12% of revenue for security & compliance" recommended by the CTO/CISO assessment. This is an investment in market access (enterprise customers require ISO 27001/42001) and competitive differentiation.

---

## 13. Risk and Limitations

### 13.1 Stack Risks

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Vanta ISO 42001 support is immature | Medium | Medium | Supplement with Git-native artifacts. Vanta's ISO 42001 module is newer than their ISO 27001 support. If control mapping is incomplete, maintain manual mapping in YAML alongside. |
| Claude Code agent output quality varies | Medium | High | Mandatory human review for all artifacts. Use the 1M context window to load full ISO standards text as reference. Implement structured output templates. |
| Single-person bottleneck (CEO review) | High | High | Delegate review authority: CTO reviews technical artifacts, CISO consultant reviews security artifacts. CEO retains final sign-off on policies only. |
| TISAX assessment body unfamiliar with AI-produced artifacts | Low | Medium | Ensure all artifacts have human sign-off documented. Present evidence of human review process (PR history, sign-off records). |
| Git-based evidence not accepted by auditor | Low | Medium | Vanta auditor portal is the auditor-facing interface. Git is the source of truth. PDF exports satisfy traditional auditor expectations. |

### 13.2 Key Assumptions

1. Vanta supports ISO 42001 with sufficient control coverage by mid-2026 (verified: announced 2025)
2. Claude Opus 4.6 (1M context) can read and reason about full ISO standard PDFs accurately
3. Certification body accepts integrated ISMS+AIMS audit (most accredited bodies do)
4. TISAX ENX-accredited assessors are available in the required timeline
5. Azure compliance features (Policy, Defender, Sentinel) remain in current feature parity

---

## 14. Decision Log

| Decision | Options Considered | Selected | Rationale | Confidence |
|----------|-------------------|----------|-----------|------------|
| GRC Platform | Vanta, Drata, Sprinto, ServiceNow GRC, Manual | Vanta | Best ISO 27001 + 42001 dual support at startup price point; strongest Azure integration; auditor portal | HIGH |
| Agent Framework | Claude Code CLI, LangChain, CrewAI, AutoGen, Custom API | Claude Code CLI | Already in use; no additional infrastructure; sufficient for human-orchestrated agent workflows | HIGH |
| Documentation Format | Markdown+YAML, Confluence, SharePoint, Notion | Markdown+YAML in Git | Agent-native; version-controlled; PR-based review; aligns with "Everything as Code" | HIGH |
| Risk Register | YAML-in-Git, Vanta module, ServiceNow, Excel | YAML-in-Git + Vanta sync | Agent-writable; version-controlled; Vanta provides dashboard layer | HIGH |
| AI System Registry | YAML-in-Git, Database, Vanta, Custom app | YAML-in-Git | Agent-writable; machine-readable; no infra overhead; aligns with SDLC-Growth-v2 design | HIGH |
| Evidence Storage | Git + Vanta, SharePoint, S3, Custom | Git + Vanta | Dual-layer: Git for source of truth + agent access; Vanta for auditor access | HIGH |
| IMS vs Separate MS | Integrated, Separate ISMS+AIMS | Integrated | Both standards share Harmonized Structure; single team cannot run two parallel MS; auditor efficiency | HIGH |
| TISAX Approach | Vanta custom, Manual, Dedicated tool | Vanta custom + Git YAML | No good dedicated TISAX tool at startup scale; hybrid approach pragmatic | MEDIUM |

---

## 15. Version Notes

| Date | Change | Author |
|------|--------|--------|
| 2026-02-18 | Initial research document | GSD Project Researcher (Claude Opus 4.6) |

**Research sources:**
- SDLC-Growth-v2.md (7,434 lines) -- primary architectural reference
- Phase 1 gap analyses: AIGO (AI Governance), EU-CA (EU Compliance), PSA (Software Architecture), PSRE (SRE) -- gap identification and priority setting
- ISO/IEC 42001:2023 standard (licensed copy in project) -- AIMS requirements
- ISO/IEC 27001:2022+Amd.1:2024 (licensed copy in project) -- ISMS requirements
- PROJECT.md -- project context and constraints
- Professional knowledge of Vanta, ServiceNow GRC, Drata, compliance automation landscape (knowledge cutoff: May 2025; web verification was not available for this research session)

**Confidence notes:**
- GRC platform pricing is approximate and should be verified with current Vanta sales team
- Claude Code agent architecture is based on current (Feb 2026) Claude Code capabilities
- ISO 42001 GRC platform support is an evolving market; verify Vanta's current ISO 42001 control coverage before purchase
- All "Version" fields for SaaS tools refer to "current as of Feb 2026" since these are continuously updated services
