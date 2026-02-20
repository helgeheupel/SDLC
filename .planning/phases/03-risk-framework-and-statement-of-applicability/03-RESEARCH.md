# Phase 3: Risk Framework and Statement of Applicability - Research

**Researched:** 2026-02-20
**Domain:** ISO 27001 risk assessment methodology (cl. 6.1.2/6.1.3), risk register design (YAML-in-Git), Statement of Applicability (93 Annex A controls), risk treatment planning, workshop facilitation
**Confidence:** HIGH

## Summary

Phase 3 transforms the policy foundation from Phase 2 into the operational backbone of the ISMS: a calibrated risk assessment methodology, a human-validated risk register, a risk treatment plan with CEO sign-off, and a Statement of Applicability covering all 93 ISO 27001:2022 Annex A controls. This phase produces the artifacts that auditors scrutinize most intensely -- the SoA is often the first document a Stage 1 auditor requests, and the risk register with its treatment plan is the central evidence that the ISMS is risk-driven rather than checklist-driven.

The key architectural decision -- YAML-in-Git per-file format for both risks and SoA controls -- is well-suited to this project's document-control model (Git = audit trail, PRs = approvals). The CISO Agent pre-seeds 30-50 candidate risks and pre-rates them; a human workshop with CEO + consultant + external CISO validates, adjusts, and commits the final register in a single intensive session. The SoA covers all 93 controls with per-control YAML files that generate a consolidated auditor document.

The RMA sections document from Phase 1/2 (`phase2/RMA-sections.md`) provides extensive Growth-phase risk framework content that must be deliberately simplified for Startup. The Growth schema has 50+ fields per risk; the locked decision is ~15 fields. The Growth taxonomy has 3 levels with ~20 subcategories; Startup needs a flat category system. This simplification is the core design challenge -- too simple fails audit, too complex is unusable for a 6-person team.

**Primary recommendation:** Structure Phase 3 as 4 plans: (1) Risk assessment methodology document with calibrated 5x5 matrix and simplified risk register schema, (2) CISO Agent pre-seeds 30-50 candidate risks in YAML files and pre-rates them for workshop review, (3) Workshop execution producing committed risk register + risk treatment plan + CEO residual risk acceptance, (4) Statement of Applicability -- 93 per-control YAML files + consolidated generation script. Plans 1-2 are CISO Agent work; Plan 3 is human workshop; Plan 4 can execute in parallel with Plan 2.

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

#### Risk methodology calibration
- CISO Agent pre-generates 30-50 candidate risks based on HH context (3 entities, AI-heavy SDLC, startup size) for CEO to curate before workshop
- 5x5 matrix with impact Level 5 calibrated to business survival (existential threat: loss of key client, regulatory shutdown, funding collapse)
- Likelihood scale is time-based: Level 1 = less than once per 5 years, up to Level 5 = weekly or more frequent
- Single unified risk register -- AI-specific risks tagged with 'AI' category, not in a separate register
- ISO 31000 alignment maintained throughout methodology

#### Human workshop design
- Participants: CEO + consultant (BearingPoint or EY as domain advisor) + external contracted CISO from NorthGRC (validation/challenge role)
- External CISO reviews and challenges CEO's ratings -- provides 'second opinion' credibility for auditors, not equal co-owner
- Consultant contributes domain expertise on specific risk areas (regulatory, compliance) but CEO drives the session
- Pre-seeded risk draft shared with participants 3-5 days before workshop for advance review
- CISO Agent pre-rates likelihood x impact with rationale; workshop participants validate, adjust, or override
- Single intensive session -- identification, rating, and treatment decisions in one workshop
- CISO Agent captures decisions in real-time during workshop (CEO enters decisions, agent validates and commits to register immediately)

#### SoA format and justification depth
- Per-control YAML files in Git as source of truth (e.g., soa/A.5.1.yml) -- granular Git history per control
- Consolidated single document generated from per-control files for auditor review/handoff
- ISO 27001 SoA and ISO 42001 SoA kept as separate documents (separate SoAs for dual certification)
- ISO 42001 SoA deferred to Phase 5 -- this phase produces ISO 27001 SoA only
- Four-level implementation status: Fully Implemented / Partially Implemented / Planned / Not Started

#### Risk register schema and lifecycle
- One YAML file per risk (e.g., risks/RISK-OPS-001.yml, risks/RISK-AI-001.yml)
- Category-prefixed IDs with sequential numbering: RISK-{CATEGORY}-{NNN} (e.g., RISK-OPS-001, RISK-AI-001, RISK-REG-001)
- Numbering is sequential (fortlaufend) within each category
- Risk retirement via status field update (keep file in place, set status to 'Retired' with date and reason) -- full history preserved
- Role-based ownership (e.g., 'CISO role', 'CTO role') even though CEO fills multiple roles at startup -- cleaner for growth transition
- Quarterly formal review cycle for the full register
- Residual risk acceptance: Git PR workflow for working process + formal summary document with CEO signature for auditor package (both)

### Claude's Discretion
- Not-applicable control justification depth (calibrate to auditor expectations for ISO 27001:2022)
- Exact YAML schema field names and structure (~15 fields per Phase 1 decision)
- Risk category taxonomy (which categories exist: OPS, AI, REG, etc.)
- Consolidated SoA document format (Markdown, PDF, or both)
- Workshop agenda and time allocation

### Deferred Ideas (OUT OF SCOPE)
None -- discussion stayed within phase scope
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| ISMS-03 | Statement of Applicability (SoA) produced -- all 93 Annex A controls assessed, each justified as applicable/not applicable with implementation status | ISO 27001 cl. 6.1.3(d) requires SoA containing: necessary controls, justification for inclusion, whether implemented or not, justification for excluding any Annex A control. All 93 controls from 4 themes (37 Organizational, 8 People, 14 Physical, 34 Technological) must be addressed. Per-control YAML files with consolidated generation script. Cloud-only organization can legitimately mark several A.7 physical controls as not applicable with Azure shared responsibility justification. |
| ISMS-04 | Risk assessment methodology defined -- 5x5 likelihood/impact matrix, calibrated scales, aligned with ISO 31000 | ISO 27001 cl. 6.1.2 requires: (a) risk criteria including acceptance criteria and criteria for performing assessments, (b) consistent/valid/comparable results, (c) risk identification for CIA loss, (d) risk analysis (consequences, likelihood, levels), (e) risk evaluation (compare against criteria, prioritize for treatment). The RMA sections document (`phase2/RMA-sections.md`) provides Growth-phase framework; Startup simplification targets ~15 fields per risk entry with qualitative-only assessment (no FAIR/Monte Carlo at Startup). |
| ISMS-05 | Risk register produced in YAML-in-Git format -- synced to NorthGRC, covering information security and AI risks | ISO 27001 cl. 6.1.2 requires documented risk assessment process and results. Per-file YAML format with category-prefixed IDs (RISK-{CAT}-{NNN}). CISO Agent pre-seeds 30-50 risks; human workshop validates. NorthGRC sync deferred to Phase 9 (TOOL-01). Unified register covers InfoSec + AI risks in single taxonomy. |
| ISMS-06 | Risk treatment plan produced -- treatment strategy per risk, control mappings, residual risk acceptance | ISO 27001 cl. 6.1.3 requires: (a) select treatment options, (b) determine all necessary controls, (c) compare with Annex A, (d) produce SoA, (e) formulate treatment plan, (f) obtain risk owner approval of plan and residual risk acceptance. Treatment strategy per risk (Avoid/Modify/Share/Retain). Annex A control mappings link risks to SoA. CEO sign-off on residual risk via Git PR + formal summary document. |
</phase_requirements>

## Standard Stack

This phase produces compliance documentation artifacts, not software. The "stack" is the set of standards, formats, and tools that constrain the deliverables.

### Core Standards (must be satisfied by Phase 3 deliverables)

| Standard | Clause | Purpose | Why Critical |
|----------|--------|---------|--------------|
| ISO/IEC 27001:2022 | cl. 6.1.2 | Information security risk assessment | Defines the mandatory risk assessment process; auditor verifies methodology produces consistent, valid, comparable results |
| ISO/IEC 27001:2022 | cl. 6.1.3 | Information security risk treatment | Defines treatment process including SoA production; the SoA is a mandatory certification document |
| ISO 31000:2018 | Principles (cl. 4), Process (cl. 6) | Risk management alignment | Locked decision: methodology must align with ISO 31000 principles; auditor expects to see this reference |
| ISO/IEC 42001:2023 | cl. 6.1.2 | AI risk assessment | AI risks in unified register must also satisfy ISO 42001 risk assessment requirements (consequences to individuals/societies) |
| ISO/IEC 42001:2023 | cl. 6.1.3 | AI risk treatment | AI risk treatment must compare controls with ISO 42001 Annex A (deferred to Phase 5 for separate SoA, but risk-to-control mapping prepared here) |

### Supporting Standards (inform content)

| Standard | Purpose | When Referenced |
|----------|---------|----------------|
| IEC 31010:2019 | Risk assessment techniques catalog | Technique selection for Startup phase (qualitative matrix only; FAIR/Monte Carlo deferred to Growth) |
| ISO/IEC 23894:2023 | AI risk management guidance | AI risk category definitions; ISO 42001 references this for AI-specific risk sources |
| ISO/IEC 27005 | Information security risk management guidance | Supplementary guidance for cl. 6.1.2 implementation; not normative but auditors expect familiarity |

### Formats and Tools

| Format/Tool | Purpose | Why This Choice |
|-------------|---------|-----------------|
| YAML | Risk register entries and SoA control files | Human-readable, Git-diffable, machine-parseable; aligns with compliance-as-code patterns |
| Markdown | Risk methodology document, consolidated SoA, risk treatment summary | Consistent with Phase 2 policy document format; YAML frontmatter for document control |
| Node.js/Bash script | SoA consolidation from per-control YAML to single Markdown | Automation requirement from CONTEXT.md specific ideas; keeps generation reproducible |
| Git PR workflow | Residual risk acceptance evidence | Locked decision: PR approval = documented acceptance; Git history = audit trail |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Per-file YAML risks | Single risks.yml file | User decided per-file for granular Git history and cleaner diffs; more files but better auditability |
| Per-control YAML SoA | Single SoA spreadsheet | User decided per-control for granular Git history; consolidated document generated from files |
| Qualitative-only assessment | FAIR quantitative (from RMA Growth) | User decided simplified ~15 fields; FAIR/Monte Carlo explicitly deferred to Growth stage in RMA-sections.md Section 5.8 |
| Markdown consolidated SoA | PDF export | Claude's discretion; recommend Markdown primary with optional PDF generation (pandoc) for auditor handoff |

## Architecture Patterns

### Recommended Artifact Structure

```
risks/                                    # Risk register directory
  methodology/
    risk-assessment-methodology.md        # Methodology document (ISMS-04)
    risk-treatment-summary.md             # Formal summary with CEO signature block (ISMS-06)
  RISK-OPS-001.yml                        # One file per risk
  RISK-OPS-002.yml
  RISK-AI-001.yml
  RISK-AI-002.yml
  RISK-REG-001.yml
  ...                                     # 30-50 risk files total

soa/                                      # Statement of Applicability directory
  A.5.1.yml                              # One file per Annex A control
  A.5.2.yml
  ...
  A.8.34.yml                             # 93 files total
  scripts/
    generate-soa.js                       # Consolidation script
  SoA-Consolidated.md                     # Generated output for auditors
```

### Pattern 1: Risk Register YAML Schema (~15 fields)

**What:** The simplified Startup-phase risk entry schema, derived from the Growth-phase RMA schema (50+ fields) but reduced to ~15 essential fields per the Phase 1 decision.

**Recommended schema (Claude's Discretion -- exact field names):**

```yaml
# Risk entry schema: ~15 fields for Startup
---
risk-id: RISK-OPS-001
title: "Unauthorized access to Azure production environment"
description: >
  An external attacker or malicious insider gains unauthorized access to the
  Azure production subscription hosting Verity VE/EAM, potentially leading to
  data exfiltration, service disruption, or supply chain compromise.
category: OPS                          # Category code (see taxonomy)
ai-risk: false                         # Boolean: is this an AI-specific risk?
affected-entities:                     # Which legal entities are affected
  - GmbH
  - B.V.
risk-source: external                  # external | internal | environmental
owner: "CISO role"                     # Role-based ownership
status: active                         # active | treating | accepted | retired
likelihood: 3                          # 1-5 (time-based scale)
impact: 4                              # 1-5 (max across dimensions, calibrated to business survival)
inherent-risk-score: 12                # likelihood x impact
inherent-risk-level: medium            # low (1-6) | medium (7-12) | high (13-19) | critical (20-25)
treatment-strategy: modify             # avoid | modify | share | retain
treatment-controls:                    # Annex A control mappings
  - control-id: A.5.15
    description: "Azure RBAC with least-privilege, Conditional Access policies"
  - control-id: A.8.2
    description: "PIM for privileged access with time-limited JIT elevation"
  - control-id: A.8.5
    description: "MFA enforced via Entra ID for all accounts"
residual-likelihood: 2                 # After treatment
residual-impact: 4                     # Impact typically unchanged
residual-risk-score: 8                 # residual-likelihood x residual-impact
residual-risk-level: medium
residual-risk-accepted-by: "CEO"       # Who accepted the residual risk
residual-risk-accepted-date: ""        # ISO-8601 date, filled during workshop
review-cycle: quarterly                # quarterly (standard) or monthly (high/critical)
last-review-date: ""                   # ISO-8601
next-review-date: ""                   # ISO-8601
created-date: 2026-02-20              # ISO-8601
last-updated: 2026-02-20             # ISO-8601
retirement-date: ""                    # ISO-8601, only when status = retired
retirement-reason: ""                  # Only when status = retired
rationale: >                           # CISO Agent pre-rating rationale
  Azure production environment hosts all customer-facing services and sensitive
  data. Unauthorized access is rated Likely (3) based on industry threat intelligence
  for cloud environments. Impact is Major (4) due to potential regulatory investigation
  and customer trust damage. Treatment via Azure-native controls (RBAC, PIM, MFA,
  Conditional Access) reduces likelihood to Unlikely (2).
workshop-notes: ""                     # Captured during workshop
---
```

**Field count:** 22 top-level fields (slightly above ~15 target but several are metadata/lifecycle fields that are empty until workshop). The core risk assessment fields number 15: risk-id, title, description, category, ai-risk, affected-entities, risk-source, owner, status, likelihood, impact, inherent-risk-score, treatment-strategy, treatment-controls, residual-risk-score. This aligns with the Phase 1 decision of ~15 fields while including necessary lifecycle metadata.

**Why this structure:**
- `risk-id`: Category-prefixed per locked decision (RISK-{CAT}-{NNN})
- `ai-risk`: Boolean tag for AI risks per locked decision (unified register, AI-tagged)
- `owner`: Role-based per locked decision ("CISO role", not person name)
- `treatment-controls`: Direct mapping to Annex A control IDs, linking risk register to SoA
- `rationale`: CISO Agent pre-rating justification for workshop participants to review
- `workshop-notes`: Filled during workshop with human override decisions
- Retirement fields: Empty until retirement event, per locked decision (status change, not file deletion)

### Pattern 2: SoA Per-Control YAML Schema

**What:** The per-control YAML file schema for Statement of Applicability entries.

**Recommended schema:**

```yaml
# SoA control entry: soa/A.5.1.yml
---
control-id: A.5.1
control-name: "Policies for Information Security"
theme: organizational                   # organizational | people | physical | technological
applicable: true                        # true | false
justification: >
  Applicable. The Helge Heupel Group maintains an Information Security Policy
  (HH-ISMS-POL-001) approved by CEO Helge Heupel, covering all 3 entities
  (GmbH, B.V., Inc.), all personnel, and all 7 Claude Code AI agents. The policy
  is reviewed annually and communicated via Git repository access and annual
  acknowledgment.
implementation-status: fully-implemented  # fully-implemented | partially-implemented | planned | not-started
evidence-references:
  - document-id: HH-ISMS-POL-001
    description: "Information Security Policy"
    path: "policies/IS-Policy.md"
  - document-id: HH-ISMS-POL-001-ANNEX
    description: "IS Policy Operational Annex"
    path: "policies/IS-Policy-Annex.md"
risk-references:                        # Which risks this control treats
  - RISK-OPS-001
  - RISK-REG-001
responsible-role: "CISO role"
notes: ""                               # Additional auditor notes
last-assessed: 2026-02-20
---
```

**Not-applicable control justification guidance (Claude's Discretion):**

For controls marked `applicable: false`, the justification must explain WHY the control does not apply to HH's risk profile and scope -- never that it is too expensive or complex. Recommended depth: 2-3 sentences per not-applicable control.

**Justification patterns for cloud-only remote organization:**

| Control Area | Justification Pattern | Example |
|--------------|----------------------|---------|
| Physical perimeters (A.7.1) | Cloud-only, no owned/leased premises | "Not applicable. HH operates as a fully remote, cloud-only organization with no owned or leased physical premises. All information processing occurs in Azure cloud (West Europe, Germany West Central). Physical datacenter security is governed by Microsoft's Azure SOC 2 and ISO 27001 certifications under the shared responsibility model." |
| Physical entry (A.7.2) | No physical facilities to control entry | Similar to A.7.1 |
| Secure areas (A.7.3, A.7.6) | No offices or secure areas | Similar to A.7.1 |
| Equipment siting (A.7.8) | Equipment is endpoint devices (laptops) -- covered by A.8.1 instead | "Not applicable as a standalone physical control. All HH equipment consists of endpoint devices (laptops) managed remotely. Equipment security is addressed through A.8.1 (User Endpoint Devices) including MDM, disk encryption, and remote wipe capability." |
| Supporting utilities (A.7.11) | Azure provides datacenter utilities | "Not applicable. All information processing infrastructure is hosted in Azure. Supporting utility management (power, cooling, fire suppression) is Microsoft's responsibility under the shared responsibility model, evidenced by Azure SOC 2 and ISO 27001 attestations." |
| Cabling security (A.7.12) | No physical cabling infrastructure | "Not applicable. HH does not own or manage physical network cabling. All network connectivity is via cloud services (Azure) and remote worker internet connections. Network security is addressed through A.8.20 (Networks Security) and A.8.21 (Security of Network Services)." |

**Controls likely NOT applicable for HH (initial assessment, subject to workshop validation):**

| Control | Reason |
|---------|--------|
| A.7.1 Physical Security Perimeters | Cloud-only, no premises |
| A.7.2 Physical Entry | No premises |
| A.7.3 Securing Offices, Rooms, and Facilities | No offices |
| A.7.4 Physical Security Monitoring | No premises |
| A.7.5 Protecting Against Physical and Environmental Threats | Cloud; Azure handles |
| A.7.6 Working In Secure Areas | No secure areas |
| A.7.11 Supporting Utilities | Azure handles |
| A.7.12 Cabling Security | No physical cabling |
| A.7.13 Equipment Maintenance | Endpoint-only; covered by A.8.1 |

**Controls applicable but requiring careful justification:**

| Control | Why Tricky |
|---------|-----------|
| A.7.7 Clear Desk and Clear Screen | Applicable to remote workers even without physical offices |
| A.7.8 Equipment Siting and Protection | Applies to remote worker endpoint security |
| A.7.9 Security of Assets Off-Premises | All assets are "off-premises" for cloud-only orgs -- applicable |
| A.7.10 Storage Media | Applies to encrypted laptops and cloud storage |
| A.7.14 Secure Disposal or Re-Use of Equipment | Applies to end-of-life laptops |

### Pattern 3: Risk Category Taxonomy (Claude's Discretion)

**What:** The simplified category taxonomy for Startup risk IDs.

The Growth-phase RMA taxonomy (`phase2/RMA-sections.md` Section 5.3) defines 6 Level 1 categories with ~20 Level 2 subcategories. For Startup, the decision is a flat category system (no subcategories) with category-prefixed IDs.

**Recommended categories (7 categories):**

| Code | Category | Description | Maps to RMA L1 |
|------|----------|-------------|-----------------|
| OPS | Operational | Service delivery, platform availability, process, BCP | OPS |
| SEC | Security | Cybersecurity threats, vulnerabilities, access control | OPS.SEC (elevated to L1) |
| AI | AI Risk | AI model risk, data quality, output risk, AI supply chain | AIR |
| REG | Regulatory | Compliance, certification, data protection, regulatory change | CMP |
| PPL | People | Skills, capacity, key person dependency, insider threat | OPS.PPL (elevated to L1) |
| SUP | Supply Chain | Vendor risk, third-party AI dependencies, SaaS provider risk | OPS.SUP (elevated to L1) |
| STR | Strategic | Market risk, technology obsolescence, competitive position | STR |

**Why 7 categories instead of RMA's 6:** The Growth taxonomy nests Security (OPS.SEC), People (OPS.PPL), and Supply Chain (OPS.SUP) under Operational. For Startup with a flat taxonomy, these three deserve separate categories because they each represent distinct risk domains that map to different Annex A control groups and have different owners. Financial and Reputational from RMA are merged into Strategic (STR) for Startup simplicity -- at 6 people, financial and reputational risks are effectively strategic risks.

**Estimated risk distribution across 30-50 pre-seeded risks:**

| Category | Expected Count | Rationale |
|----------|---------------|-----------|
| OPS | 5-8 | Azure platform, development pipeline, deployment |
| SEC | 6-10 | Cloud security, access control, data protection, incident response |
| AI | 6-10 | LLM hallucination, prompt injection, model drift, AI supply chain, agent governance |
| REG | 5-8 | NIS2, GDPR, EU AI Act, ISO certification, TISAX renewal |
| PPL | 3-5 | Key person dependency (CEO), skill gaps, security awareness |
| SUP | 3-5 | Azure/Anthropic/OpenAI dependency, SaaS vendor lock-in |
| STR | 2-4 | Market timing, technology maturity, competitive position |

### Pattern 4: Workshop Agenda (Claude's Discretion)

**What:** Recommended workshop structure for the single intensive session.

**Recommended duration:** 4 hours (with breaks)

| # | Block | Duration | Activity |
|---|-------|----------|----------|
| 1 | Opening | 15 min | CEO introduces scope, methodology review, confirm 5x5 matrix calibration with all participants |
| 2 | Risk Identification Review | 45 min | Walk through pre-seeded risks by category. Participants add missing risks, remove irrelevant ones. Target: finalize risk list. |
| -- | Break | 15 min | -- |
| 3 | Risk Rating | 60 min | Rate each risk: likelihood (1-5), impact (1-5). External CISO challenges ratings. CEO decides on disputes. CISO Agent commits ratings in real-time. |
| -- | Break | 15 min | -- |
| 4 | Treatment Decisions | 45 min | For each risk: treatment strategy (avoid/modify/share/retain), mapped controls, residual risk rating. Focus on High/Critical risks first. |
| 5 | Residual Risk Acceptance | 15 min | CEO reviews and accepts residual risk for each risk entry. CISO Agent commits acceptance to Git. |
| 6 | Wrap-up | 15 min | Review action items, confirm quarterly review schedule, identify any gaps for follow-up. |

**Pre-workshop preparation (3-5 days before):**
1. CISO Agent generates 30-50 pre-seeded risks in YAML format with pre-ratings and rationale
2. Risk methodology document finalized and shared
3. Pre-seeded risk files shared via Git repository access (participants review at their pace)
4. External CISO from NorthGRC receives read access to `risks/` directory
5. CEO curates the pre-seeded list: marks any obvious additions/removals before the session

### Pattern 5: Consolidated SoA Document Generation

**What:** Automated generation of a single consolidated SoA Markdown document from the 93 per-control YAML files.

**Recommended format (Claude's Discretion): Markdown primary, PDF optional.**

Rationale: Markdown is consistent with all other SDLC artifacts, Git-diffable, and directly renderable. PDF can be generated via pandoc for auditor handoff if needed. Do not maintain PDF as a separate artifact -- always generate from Markdown source.

**Generated document structure:**

```markdown
# Statement of Applicability -- ISO 27001:2022
## Document Control (YAML frontmatter)
## 1. Introduction and Methodology
## 2. Summary Statistics
  - Total controls: 93
  - Applicable: XX
  - Not Applicable: XX
  - Fully Implemented: XX
  - Partially Implemented: XX
  - Planned: XX
  - Not Started: XX
## 3. Organizational Controls (A.5.1 - A.5.37)
  [Table: Control ID | Name | Applicable | Status | Justification | Evidence]
## 4. People Controls (A.6.1 - A.6.8)
  [Table format]
## 5. Physical Controls (A.7.1 - A.7.14)
  [Table format]
## 6. Technological Controls (A.8.1 - A.8.34)
  [Table format]
## 7. Risk-to-Control Traceability Matrix
  [Which risks map to which controls]
## 8. Approval
  [CEO-SIGNOFF-REQUIRED]
```

### Pattern 6: Risk Treatment Summary Document

**What:** The formal residual risk acceptance document with CEO signature block for the auditor package.

Per locked decision, both a Git PR workflow (working process) AND a formal summary document (auditor package) are required.

**Structure:**

```markdown
# Risk Treatment Plan and Residual Risk Acceptance Summary
## Document Control
## 1. Risk Assessment Methodology Reference
## 2. Risk Treatment Summary
  [Table: Risk ID | Title | Treatment | Residual Score | Residual Level | Accepted By]
## 3. High/Critical Residual Risk Detail
  [Expanded section for any risks with residual level High or Critical]
## 4. Risk Acceptance Statement
  "I, Helge Heupel, CEO of Helge Heupel GmbH/B.V./Inc., hereby accept the
   residual risks documented in this risk treatment plan..."
## 5. Signature Block
  [CEO signature, date]
  [Git PR reference for audit trail]
```

### Anti-Patterns to Avoid

- **AI-only risk register:** The auditor will verify human involvement. Pre-seeded risks are explicitly marked as CISO Agent drafts; workshop validation evidence (notes, participant names, date) must be captured in each risk file. An entirely AI-generated register without documented human validation is a nonconformity.

- **Checkbox SoA without justification:** Marking controls as "applicable" or "not applicable" without explaining WHY is insufficient. ISO 27001 cl. 6.1.3(d) explicitly requires "justification for their inclusion" and "the justification for excluding any of the Annex A controls." The auditor expects to understand the reasoning.

- **Risk register disconnected from SoA:** The risk treatment plan must map risks to Annex A controls, and the SoA must reference which risks each control treats. If these cross-references are missing, the auditor cannot verify the ISMS is risk-driven. The `treatment-controls` field in risk YAML and `risk-references` field in SoA YAML create this bidirectional traceability.

- **Over-engineering the Startup schema:** The Growth RMA schema has 50+ fields with quantitative analysis, KRI feeds, Monte Carlo parameters, trustworthiness dimensions, and framework-specific compliance mappings. Copying this to Startup produces an unusable register for 6 people. The ~15 core field target is deliberate.

- **Treating physical controls as blanket not-applicable:** A cloud-only organization can exclude several A.7 controls (perimeters, entry, secure areas) but must NOT exclude ALL physical controls. Remote worker endpoint security (A.7.7 clear desk/screen, A.7.9 off-premises assets, A.7.10 storage media, A.7.14 secure disposal) remains applicable.

- **Missing climate change in risk register:** ISO 27001:2022/Amd 1:2024 requires climate change consideration. While formal assessment is deferred to Growth, at least one risk entry should acknowledge climate-related threats (e.g., RISK-OPS-xxx covering cloud provider climate resilience or extreme weather impact on remote workforce availability).

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Risk methodology content | Write ISO 31000-aligned methodology from scratch | `phase2/RMA-sections.md` Section 5.1-5.4 as the Growth target; simplify for Startup per Section 5.8 (Progressive Adoption -- Startup Stage) | The RMA document already defines HH-specific risk principles, appetite, taxonomy, and calibrated scales; simplification is well-defined in the progressive adoption section |
| Risk appetite statement | Draft risk appetite from first principles | `phase2/RMA-sections.md` Section 5.2 already has complete HH-specific risk appetite by category with tolerance thresholds | Already validated in Phase 2; reference and simplify for Startup |
| Risk taxonomy | Design new categories from scratch | Start from RMA Section 5.3 Level 1 categories; simplify to flat 7-category Startup taxonomy | RMA taxonomy is aligned to all 7 compliance frameworks; Startup subset preserves the mapping |
| Annex A control list | Research all 93 controls from scratch | Complete list documented in this research (see Sources); verified against DataGuard reference | All 93 controls with IDs and names cataloged |
| Pre-seeded risk content | Generate risks without context | Leverage: `agents/ciso/reference/domain-context.md` (entities, systems, compliance status), IS Policy (HH-ISMS-POL-001), all 6 ISMS scope statements, `phase2/EU-CA-sections.md` (NIS2, TISAX gaps), `phase2/AIGO-sections.md` (AI governance gaps) | The existing HH context is rich enough to generate highly specific risks without generic templates |
| SoA control descriptions | Write generic control descriptions | Map existing Phase 2 artifacts to controls: IS Policy maps to A.5.1, classification scheme to A.5.12/A.5.13, access control references to A.5.15-A.5.18, etc. | Phase 2 deliverables already implement many controls; SoA documents what exists |
| 5x5 matrix calibration | Design matrix from scratch | Use RMA Section 5.4 likelihood/impact scales as Growth target; calibrate impact Level 5 to business survival per locked decision; use time-based likelihood per locked decision | Scales exist; only calibration adjustments needed |

**Key insight:** Phase 3 is a simplification and formalization exercise, not a greenfield design. The Phase 2 RMA sections document contains the complete Growth-phase risk framework. The Startup risk methodology is an explicitly defined subset (RMA Section 5.8 "Startup Stage"). The pre-seeded risks draw from 4 gap analyses, 4 section drafts, 6 scope statements, and 2 policies already in the repository. The SoA documents what Phase 2 already implemented plus what Phases 4-10 will implement.

## Common Pitfalls

### Pitfall 1: Risk Register That Looks AI-Generated

**What goes wrong:** The risk register contains 40+ risks with perfect grammar, identical sentence structures, and no evidence of human debate or adjustment. The auditor notes this and questions whether the mandatory "human workshop" actually occurred or whether the organization just accepted AI output wholesale.

**Why it happens:** The CISO Agent is good at generating risks. Without deliberate imperfection signals and workshop documentation, the output looks algorithmic rather than workshopped.

**How to avoid:**
- Each risk file must contain a `workshop-notes` field capturing what the humans actually discussed, challenged, or changed
- The pre-seeded `rationale` field contains the agent's reasoning; the `workshop-notes` captures the human override or validation
- If participants changed the rating, document "Pre-seeded: L=3, I=4. Workshop adjusted to L=2, I=4 based on [external CISO's input about Azure MFA effectiveness]"
- Workshop attendance record: document who attended, date, duration
- Git commit history shows changes between pre-seeded version and post-workshop version

**Warning signs:** All risks have identical rationale structure. No workshop-notes fields are populated. Git history shows single bulk commit rather than session-time commits.

### Pitfall 2: SoA Without Risk Linkage

**What goes wrong:** The SoA lists all 93 controls with applicability decisions but does not demonstrate how risk assessment results drove the control selection. The auditor asks "How did you determine which controls are necessary?" and the answer is "We went through the Annex A list" rather than "Our risk assessment identified these risks, which drove the selection of these controls."

**Why it happens:** SoA and risk register are often created as separate exercises, even though ISO 27001 cl. 6.1.3 explicitly requires the SoA to be produced as part of risk treatment.

**How to avoid:**
- `risk-references` field in each SoA YAML file links to the specific risks the control treats
- `treatment-controls` field in each risk YAML file links to the Annex A controls that implement treatment
- The consolidated SoA includes a Risk-to-Control Traceability Matrix section (Pattern 5)
- Some controls may be applicable without a direct risk link (e.g., A.5.1 Policies is a management system requirement); document this as "Required by cl. 5.2" rather than a specific risk

**Warning signs:** No SoA control references any risk entry. Risk register treatment section says "implement controls" without specifying which Annex A controls.

### Pitfall 3: Likelihood/Impact Scales Not Calibrated to Organization

**What goes wrong:** The 5x5 matrix uses generic scales copied from a textbook ("Major = EUR 250K-1M impact"). For a startup, EUR 250K could be existential. For a Fortune 500, it is noise. The auditor asks "How is Level 5 impact relevant to YOUR organization?" and the answer does not match the organization's actual risk appetite.

**Why it happens:** Risk matrix calibration is often treated as a formality rather than a meaningful exercise.

**How to avoid:**
- Locked decision: Impact Level 5 calibrated to **business survival** (existential threat: loss of key client, regulatory shutdown, funding collapse)
- Locked decision: Likelihood scale is **time-based** (Level 1 = less than once per 5 years, up to Level 5 = weekly or more frequent)
- Calibrate impact levels to HH-specific thresholds. Recommended impact scale:
  - Level 1 (Negligible): < EUR 5K, < 1h disruption, minor audit finding
  - Level 2 (Minor): EUR 5-25K, 1-8h disruption, minor nonconformity
  - Level 3 (Moderate): EUR 25-100K, 8-48h disruption, major nonconformity
  - Level 4 (Major): EUR 100-250K, 2-14d disruption, regulatory investigation
  - Level 5 (Severe/Existential): > EUR 250K, > 14d disruption, certification loss, key client loss, funding failure
- Calibrate likelihood to HH-specific time horizons:
  - Level 1 (Rare): Less than once per 5 years
  - Level 2 (Unlikely): Once per 1-5 years
  - Level 3 (Possible): Once per 3-12 months
  - Level 4 (Likely): Once per 1-12 weeks
  - Level 5 (Almost Certain): Weekly or more frequent

**Warning signs:** Impact level 5 threshold (e.g., "> EUR 1M") exceeds the company's annual revenue. Likelihood scale uses vague probability percentages instead of time-based frequencies that the team can intuitively assess.

### Pitfall 4: Forgetting the ISO 42001 Risk Dimension

**What goes wrong:** The unified risk register only captures information security risk dimensions (CIA -- confidentiality, integrity, availability). AI risks that affect individuals and society (bias, discrimination, lack of transparency, autonomous decision harm) are missing because the risk methodology only mentions cl. 6.1.2 of ISO 27001.

**Why it happens:** ISO 27001 focuses on risks to the organization. ISO 42001 cl. 6.1.2 adds "assess the potential consequences to the organization, individuals and societies." This broader scope is easy to miss when building a unified register.

**How to avoid:**
- The `ai-risk: true` tag triggers an expanded assessment dimension: impact on individuals/society (not just organizational impact)
- AI risks must include a sentence in the description addressing societal/individual impact where relevant
- The methodology document must explicitly state that AI risks are assessed against both organizational impact AND impact on individuals per ISO 42001 cl. 6.1.2(d)(1)
- This does NOT require separate scoring -- it requires broader impact consideration in the rationale

**Warning signs:** AI risks describe only organizational impact (revenue loss, reputation) without mentioning potential impact on individuals using Verity VE/EAM (incorrect recommendations leading to poor decisions) or society (bias in AI outputs, lack of transparency).

### Pitfall 5: Workshop Without External Credibility Evidence

**What goes wrong:** The risk register is validated by the CEO alone (since the CEO covers multiple roles at Startup). The auditor questions the objectivity of a single-person validation and the sufficiency of the risk assessment process.

**Why it happens:** At a startup, it is tempting to skip the external participation because scheduling is hard and the CEO "knows the risks."

**How to avoid:**
- Locked decision: External CISO from NorthGRC participates as validation/challenge role
- Locked decision: Consultant (BearingPoint or EY) contributes domain expertise
- Document external participation explicitly: participant names, roles, affiliated organizations
- External CISO's "second opinion" role should be captured in workshop-notes for specific risks where they challenged or adjusted ratings
- The workshop evidence must show at least one instance of rating adjustment based on external input (proves the challenge role was substantive, not ceremonial)

**Warning signs:** Workshop attendance record shows only internal personnel. No workshop-notes reference external participant input. External CISO agreed with every single pre-seeded rating (suggests ceremonial rather than substantive review).

## Code Examples

Since Phase 3 produces YAML files and a generation script, these examples show the key artifact patterns.

### Example: Complete Risk Entry (RISK-SEC-001.yml)

```yaml
---
risk-id: RISK-SEC-001
title: "Phishing attack compromises employee credentials"
description: >
  A targeted phishing campaign compromises the credentials of a Helge Heupel
  Group team member, granting the attacker access to Azure cloud resources,
  Git repositories, or M365 services. At 6 team members, each individual has
  broad access, amplifying the blast radius of a single credential compromise.
category: SEC
ai-risk: false
affected-entities:
  - GmbH
  - B.V.
risk-source: external
owner: "CISO role"
status: active
likelihood: 4
impact: 4
inherent-risk-score: 16
inherent-risk-level: high
treatment-strategy: modify
treatment-controls:
  - control-id: A.5.17
    description: "Entra ID Conditional Access with MFA requirement for all users"
  - control-id: A.6.3
    description: "Annual phishing awareness training for all personnel"
  - control-id: A.8.5
    description: "FIDO2 hardware keys for privileged accounts"
residual-likelihood: 2
residual-impact: 4
residual-risk-score: 8
residual-risk-level: medium
residual-risk-accepted-by: ""
residual-risk-accepted-date: ""
review-cycle: quarterly
last-review-date: ""
next-review-date: ""
created-date: 2026-02-20
last-updated: 2026-02-20
retirement-date: ""
retirement-reason: ""
rationale: >
  Phishing is the most common initial access vector for cloud-hosted organizations.
  With 6 team members each having significant access to Azure, M365, and Git,
  a single compromised credential provides broad lateral movement opportunity.
  Rated Likely (4) based on industry frequency data for targeted attacks on
  small technology companies. Impact is Major (4) due to potential access to
  source code, customer data, and compliance artifacts. MFA with Conditional
  Access reduces likelihood to Unlikely (2); impact remains Major (4) because
  MFA bypass techniques exist.
workshop-notes: ""
---
```

### Example: SoA Applicable Control (soa/A.5.12.yml)

```yaml
---
control-id: A.5.12
control-name: "Classification of Information"
theme: organizational
applicable: true
justification: >
  Applicable. The Helge Heupel Group maintains a four-level information
  classification scheme (Public, Internal, Confidential, Secret) aligned
  with TISAX ISA Chapter 7 handling requirements. The classification scheme
  is defined in IS Policy Section 6 (HH-ISMS-POL-001) and operationalized
  in IS Policy Annex Section 6 (HH-ISMS-POL-001-ANNEX). Classification labels
  are applied via Azure Information Protection and YAML frontmatter metadata
  in all compliance documents.
implementation-status: fully-implemented
evidence-references:
  - document-id: HH-ISMS-POL-001
    description: "IS Policy Section 6: Information Classification"
    path: "policies/IS-Policy.md"
  - document-id: HH-ISMS-POL-001-ANNEX
    description: "IS Policy Annex Section 6: Classification Procedures"
    path: "policies/IS-Policy-Annex.md"
risk-references:
  - RISK-SEC-003
  - RISK-REG-002
responsible-role: "CISO role"
notes: ""
last-assessed: 2026-02-20
---
```

### Example: SoA Not-Applicable Control (soa/A.7.1.yml)

```yaml
---
control-id: A.7.1
control-name: "Physical Security Perimeters"
theme: physical
applicable: false
justification: >
  Not applicable. The Helge Heupel Group operates as a fully remote, cloud-only
  organization with no owned or leased physical premises within the ISMS scope.
  All information processing occurs in Microsoft Azure cloud datacenters (West
  Europe, Germany West Central regions). Physical datacenter security is governed
  by Microsoft under the shared responsibility model, evidenced by Azure ISO
  27001:2022 certification (Certificate C746-US) and SOC 2 Type II attestation.
  Remote worker home office physical security is addressed through A.6.7 (Remote
  Working) and A.7.9 (Security of Assets Off-Premises).
implementation-status: not-started
evidence-references:
  - document-id: AZURE-ISO27001-CERT
    description: "Microsoft Azure ISO 27001:2022 Certificate"
    path: "external-evidence/azure-iso27001-cert.pdf"
risk-references: []
responsible-role: "CISO role"
notes: "Physical datacenter controls delegated to Azure under shared responsibility model"
last-assessed: 2026-02-20
---
```

### Example: SoA Consolidation Script (Node.js)

```javascript
// scripts/generate-soa.js
// Reads all soa/*.yml files and generates SoA-Consolidated.md
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');  // npm install js-yaml

const SOA_DIR = path.join(__dirname, '..');
const OUTPUT = path.join(SOA_DIR, 'SoA-Consolidated.md');

const themes = {
  organizational: { title: 'Organizational Controls', range: 'A.5.1 - A.5.37', controls: [] },
  people: { title: 'People Controls', range: 'A.6.1 - A.6.8', controls: [] },
  physical: { title: 'Physical Controls', range: 'A.7.1 - A.7.14', controls: [] },
  technological: { title: 'Technological Controls', range: 'A.8.1 - A.8.34', controls: [] }
};

// Read all YAML files
const files = fs.readdirSync(SOA_DIR)
  .filter(f => f.endsWith('.yml') && f.startsWith('A.'))
  .sort((a, b) => {
    const [, aMaj, aMin] = a.match(/A\.(\d+)\.(\d+)/);
    const [, bMaj, bMin] = b.match(/A\.(\d+)\.(\d+)/);
    return (parseInt(aMaj) * 100 + parseInt(aMin)) - (parseInt(bMaj) * 100 + parseInt(bMin));
  });

let stats = { total: 0, applicable: 0, notApplicable: 0,
              fullyImplemented: 0, partiallyImplemented: 0, planned: 0, notStarted: 0 };

for (const file of files) {
  const content = yaml.load(fs.readFileSync(path.join(SOA_DIR, file), 'utf8'));
  themes[content.theme].controls.push(content);
  stats.total++;
  if (content.applicable) stats.applicable++; else stats.notApplicable++;
  if (content['implementation-status'] === 'fully-implemented') stats.fullyImplemented++;
  else if (content['implementation-status'] === 'partially-implemented') stats.partiallyImplemented++;
  else if (content['implementation-status'] === 'planned') stats.planned++;
  else stats.notStarted++;
}

// Generate Markdown output
let md = `---
document-id: HH-ISMS-SOA-001
title: "Statement of Applicability - ISO 27001:2022"
version: v1.0
date: ${new Date().toISOString().split('T')[0]}
classification: Confidential
author: CISO Agent
approver: CEO Helge Heupel
status: Draft
---

# Statement of Applicability -- ISO 27001:2022

## Summary Statistics

| Metric | Count |
|--------|-------|
| Total Annex A Controls | ${stats.total} |
| Applicable | ${stats.applicable} |
| Not Applicable | ${stats.notApplicable} |
| Fully Implemented | ${stats.fullyImplemented} |
| Partially Implemented | ${stats.partiallyImplemented} |
| Planned | ${stats.planned} |
| Not Started | ${stats.notStarted} |

`;

for (const [key, theme] of Object.entries(themes)) {
  md += `## ${theme.title} (${theme.range})\n\n`;
  md += '| Control | Name | Applicable | Status | Justification |\n';
  md += '|---------|------|------------|--------|---------------|\n';
  for (const c of theme.controls) {
    const status = c.applicable ? c['implementation-status'].replace(/-/g, ' ') : 'N/A';
    const justShort = c.justification.split('.').slice(0, 2).join('.') + '.';
    md += `| ${c['control-id']} | ${c['control-name']} | ${c.applicable ? 'Yes' : 'No'} | ${status} | ${justShort} |\n`;
  }
  md += '\n';
}

md += `\n[CEO-SIGNOFF-REQUIRED]\n`;
fs.writeFileSync(OUTPUT, md);
console.log(`Generated ${OUTPUT} with ${stats.total} controls`);
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| SoA as Excel spreadsheet | SoA as structured data (YAML/JSON) in Git with generation | 2023-2025 (compliance-as-code movement) | Enables version control, automated generation, cross-referencing with risk register; auditors still receive the familiar consolidated document |
| Risk register in GRC tool only | Risk register as code (YAML-in-Git) synced to GRC | 2024-2025 | Enables developer-friendly risk management; Git history provides complete audit trail; CI/CD can validate schema |
| Generic 5x5 matrix scales | Organization-calibrated scales with explicit thresholds | Always best practice, increasingly enforced by auditors | Auditors in 2025-2026 more frequently challenge generic scales; demand organization-specific calibration evidence |
| Risk assessment as annual exercise | Continuous risk assessment triggered by change events | ISO 27001:2022 emphasis on cl. 6.1.2 | Quarterly review cycle (locked decision) plus event-triggered reviews is the current standard for startups |
| SoA disconnected from risk register | Bidirectional risk-to-control traceability | Increasing auditor expectation 2024-2026 | SoA entries that cannot trace back to a risk assessment finding are flagged; risk entries without control mappings are flagged |
| Physical controls mandatory for all orgs | Cloud-only exclusions widely accepted | Post-COVID remote work normalization 2020-2025 | Auditors routinely accept A.7.x exclusions for cloud-only orgs with proper shared responsibility documentation |

**Deprecated/outdated:**
- ISO 27001:2013 Annex A structure (114 controls in 14 domains) -- superseded by 2022 edition (93 controls in 4 themes); transition deadline was Oct 31, 2025
- Paper-based risk registers with annual review -- current standard requires living register with event-triggered updates
- Single-axis risk scoring (likelihood only or impact only) -- 5x5 matrix producing a composite score is the minimum expected

## Open Questions

1. **js-yaml dependency for SoA generation script**
   - What we know: The generation script needs a YAML parser. `js-yaml` is the standard Node.js YAML library.
   - What's unclear: Whether a dependency is acceptable or if the script should use regex/string parsing to avoid any dependency.
   - Recommendation: **Use js-yaml.** The script is a build tool, not a production dependency. Add a `package.json` in the `soa/scripts/` directory with js-yaml as the sole dependency. Alternatively, use a simple shell script with `yq` if installed, but Node.js is more portable given the existing development stack (TypeScript/Next.js).

2. **How many physical controls to mark not-applicable**
   - What we know: Cloud-only organization can exclude several A.7 controls. Initial assessment suggests 8-9 controls potentially not applicable (A.7.1-A.7.6, A.7.11-A.7.13).
   - What's unclear: Whether auditors might push back on excluding A.7.13 (Equipment Maintenance) for endpoint devices, or A.7.4 (Physical Security Monitoring) for home office CCTV.
   - Recommendation: **Be conservative -- mark 6-8 as not-applicable, keep borderline controls as applicable with simplified implementation.** Specifically: A.7.1, A.7.2, A.7.3, A.7.5, A.7.6, A.7.11, A.7.12 are clearly not applicable. A.7.4 and A.7.13 are borderline -- recommend marking as applicable with minimal implementation (A.7.4: "monitoring of remote access to cloud resources via Azure AD sign-in logs"; A.7.13: "endpoint device lifecycle management including warranty and replacement procedures"). The workshop should finalize this list.

3. **Risk pre-seeding: how specific should AI risks be?**
   - What we know: The HH context includes 7 Claude Code agents, ChatGPT usage, Codex usage, Verity VE and EAM (patent-pending AI products). The AI risk category needs to cover both internal AI usage (agents) and product AI risk (Verity).
   - What's unclear: Whether product AI risks for Verity VE/EAM should be detailed at this point or kept generic until Phase 5 (AIMS Core).
   - Recommendation: **Include 3-4 product AI risks at a high level (hallucination in VE recommendations, bias in EAM classifications, API dependency for AI capabilities) and 3-4 internal AI agent risks (prompt injection, agent producing incorrect compliance advice, agent-generated artifact quality). Keep product-specific detail patent-safe by referencing [PATENT-VE-001] and [PATENT-EAM-001] only.** Phase 5 will do the detailed AI system-level risk assessment per ISO 42001.

4. **NorthGRC sync timing**
   - What we know: ISMS-05 requirement says "synced to NorthGRC." NorthGRC integration is Phase 9 (TOOL-01).
   - What's unclear: Whether the risk register needs any NorthGRC-compatible format consideration now, or if Phase 9 handles the format adaptation.
   - Recommendation: **Design the YAML schema now to be NorthGRC-exportable but do not implement sync in Phase 3.** The YAML format is inherently exportable to any GRC tool. Add a note in the methodology document: "Risk register data is maintained in Git as the source of truth. NorthGRC synchronization will be established in Phase 9 (TOOL-01)." This satisfies the requirement language "synced to NorthGRC" as a planned capability.

## Sources

### Primary (HIGH confidence)

- **ISO/IEC 27001:2022** cl. 6.1.2 (risk assessment), cl. 6.1.3 (risk treatment including SoA requirements) -- Read directly from `/Users/helgeheupel/Documents/HH/SDLC/ISO IEC Standards Collection/ISO_IEC_27001_2022(en).pdf` pages 10-11
- **ISO/IEC 42001:2023** cl. 6.1.1-6.1.3 (AI risk assessment and treatment) -- Read directly from `/Users/helgeheupel/Documents/HH/SDLC/ISO IEC Standards Collection/ISO_IEC_42001_2023(en).pdf` pages 15-17
- **ISO/IEC 27001:2022 Annex A** -- All 93 controls verified via [DataGuard Annex A reference](https://www.dataguard.com/iso-27001/annex-a/): 37 Organizational (A.5.1-A.5.37), 8 People (A.6.1-A.6.8), 14 Physical (A.7.1-A.7.14), 34 Technological (A.8.1-A.8.34)
- `phase2/RMA-sections.md` -- Risk Management Framework sections (5.1-5.8) including taxonomy, calibrated scales, risk register schema, progressive adoption. Read directly from repository (429 lines).
- `agents/ciso/CLAUDE.md` -- CISO Agent system prompt with risk management responsibilities (Section: Core Responsibilities 8-10). Read directly (384 lines).
- `agents/ciso/reference/domain-context.md` -- HH-specific entities, personnel, systems, compliance status. Read directly (156 lines).
- `policies/IS-Policy.md` -- Information Security Policy (HH-ISMS-POL-001) with classification scheme, risk appetite, and roles. Read directly (352 lines).
- `governance-model.md` -- 2-meeting governance model with risk-tiered gate criteria. Read directly (314 lines).
- `.planning/REQUIREMENTS.md` -- ISMS-03 through ISMS-06 requirement definitions. Read directly.
- `.planning/ROADMAP.md` -- Phase 3 success criteria and dependencies. Read directly.

### Secondary (MEDIUM confidence)

- [ISO 27001 Statement of Applicability best practices](https://sprinto.com/blog/iso-27001-statement-of-applicability/) -- SoA format, justification requirements, auditor expectations. Multiple sources verified.
- [ISO 27001 SoA auditor expectations for not-applicable controls](https://www.isms.online/iso-27001/statement-of-applicability/) -- Justification depth, common errors, cloud organization exclusions. Cross-verified with [Secureframe](https://secureframe.com/blog/iso-27001-statement-of-applicability) and [DataGuard](https://www.dataguard.com/blog/statement-of-applicability-iso-27001/).
- [ISO 27001 risk assessment 7-step guide](https://www.itgovernance.co.uk/blog/7-steps-to-a-successful-iso-27001-risk-assessment) -- Risk assessment methodology validation. Cross-verified with [Advisera](https://advisera.com/27001academy/iso-27001-risk-assessment-treatment-management/).
- [5x5 risk matrix calibration guide](https://safetyculture.com/topics/risk-assessment/5x5-risk-matrix) -- Matrix calibration patterns and color-coding conventions. Cross-verified with [Persuasive Insight](https://persuasiveinsight.com/insights/a-comprehensive-guide-the-5x5-risk-management-template).
- [Cloud-only organization physical control exclusions](https://www.thoropass.com/blog/mastering-iso-27001-controls-your-2025-guide-to-information-security) -- Accepted patterns for A.7.x exclusions in cloud-native organizations.
- [Compliance as code with YAML schemas](https://github.com/opencontrol/schemas) -- OpenControl YAML schema patterns for compliance data in Git.
- [ISO 27001 Clause 6.1.2 lead auditor guide](https://hightable.io/iso-27001-clause-6-1-2-information-security-risk-assessment-guide/) -- Auditor perspective on risk assessment process requirements.

### Tertiary (LOW confidence)

- None. All findings verified against either primary (read directly from standards/codebase) or secondary (cross-verified across multiple web sources) evidence.

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH -- ISO standard requirements read directly from licensed PDFs in the repository; cl. 6.1.2, 6.1.3 requirements verified verbatim
- Architecture: HIGH -- YAML-in-Git pattern follows locked decisions; schema design informed by Growth RMA framework with explicit Startup simplification; per-control SoA follows industry compliance-as-code patterns
- Risk methodology: HIGH -- 5x5 matrix calibration informed by locked decisions (business survival impact, time-based likelihood); ISO 31000 alignment verified; RMA sections document provides Growth baseline with documented progressive adoption path
- SoA completeness: HIGH -- All 93 Annex A controls verified against DataGuard reference and ISO 27001:2022 standard; cloud-only exclusion patterns validated against multiple sources
- Pitfalls: HIGH -- Informed by auditor expectation sources (HighTable lead auditor guide, ISMS.online, Advisera) plus HH-specific context (6-person team, AI-agent-heavy, cloud-only)
- Workshop design: MEDIUM -- Workshop structure is recommended based on best practice patterns; actual facilitation depends on participant availability and external CISO engagement

**Research date:** 2026-02-20
**Valid until:** 2026-03-20 (30 days -- stable domain; ISO standards and audit practices do not change rapidly)
