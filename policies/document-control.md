---
document-id: HH-ISMS-DOC-001
title: "Document Control Framework"
version: v1.0
date: 2026-02-19
classification: Internal
author: CISO Agent
reviewer: [CISO, CTO]
approver: CEO Helge Heupel
review-cycle: Annual
next-review: 2027-02-19
status: Draft
change-summary: Initial release
---

# Document Control Framework

## 1. Purpose

This document defines how documented information required by ISO 27001:2022 and ISO 42001:2023 is created, updated, controlled, and retained within the Helge Heupel Group. It establishes Git as the single source of truth for all management system documentation and maps each requirement of ISO 27001 cl. 7.5 (Documented information) to a specific Git-based mechanism.

This framework governs all controlled documents across the Integrated Management System (IMS, ref. HH-IMS-CTX-001), including the Information Security Policy (HH-ISMS-POL-001), AI Policy (HH-AIMS-POL-001), scope statements, procedures, work instructions, records, and evidence artifacts.

---

## 2. Scope

This framework applies to all documented information in the ISMS and AIMS across all three Helge Heupel Group entities:

- **Helge Heupel GmbH** (Germany)
- **Helge Heupel B.V.** (Netherlands)
- **Helge Heupel Inc.** (United States)

**Document types covered:**

| Type | Description | Examples |
|---|---|---|
| Policies | Top-level governance documents approved by CEO | IS Policy, AI Policy |
| Procedures | Operational procedures implementing policies | Incident response procedure, access review procedure |
| Work instructions | Step-by-step instructions for specific tasks | Deployment runbook, agent spawning checklist |
| Records | Evidence of activities performed | Risk assessment records, audit findings, meeting minutes |
| Evidence | Artifacts demonstrating control implementation | Scan reports, test results, configuration screenshots |
| Templates | Standard formats for recurring document types | HANDOFF.md template, ADR template |
| Scope statements | ISMS/AIMS scope per entity | ISMS-Scope-GmbH, AIMS-Scope-BV |
| Registers | Living indices of controlled items | Document register, risk register, AI system registry |

**Exclusions:** Source code version control is governed by the SDLC-Growth-v2 development workflow, not this document control framework. However, source code that constitutes compliance evidence (e.g., CI/CD pipeline configurations, security scan configurations) falls under this framework for retention and auditability purposes.

---

## 3. ISO 27001 cl. 7.5 Mapping to Git

This section maps every sub-requirement of ISO 27001 cl. 7.5 to the corresponding Git-based mechanism used by the Helge Heupel Group. This mapping satisfies the ISO 27001 auditor requirement to demonstrate how each cl. 7.5 element is addressed.

| cl. 7.5 Requirement | Sub-Requirement | Git Implementation | Evidence |
|---|---|---|---|
| **7.5.1 General** | Documented information required by the standard | Document register (`policies/document-register.md`, HH-ISMS-REG-001) lists all mandatory documents with metadata | Register file in Git repository; updated as new documents are created |
| **7.5.1 General** | Documented information determined necessary for ISMS/AIMS effectiveness | Same document register; includes both mandatory (ISO-required) and voluntary (HH-determined) documents | Register entries tagged as "Mandatory" or "Determined necessary" |
| **7.5.2 Creating and updating: identification** | Unique identification and description | YAML frontmatter `document-id` field in every controlled document (format: HH-{system}-{type}-{number}) | Frontmatter in every .md file; Git search confirms uniqueness |
| **7.5.2 Creating and updating: format** | Appropriate format and media | Markdown (.md) with YAML frontmatter as the standard format for all controlled documents | Consistent format across all documents in `policies/` directory |
| **7.5.2 Creating and updating: review and approval** | Review and approval for suitability and adequacy | Pull Request (PR) with named reviewers (CISO + CTO) and approver (CEO Helge Heupel). PR merge = approval. | PR history in Git; reviewer names and approval timestamps recorded |
| **7.5.3 Control: availability and suitability** | Available and suitable for use where and when needed | Git repository accessible to all authorized personnel and agents. Repository cloned to local environments. | Git access control configuration; clone access for team members |
| **7.5.3 Control: adequately protected** | Loss of confidentiality, improper use, loss of integrity | Branch protection rules on `main` branch prevent unauthorized modification. Commit signing ensures integrity. Classification in YAML frontmatter controls handling. | Branch protection configuration; signed commit evidence; classification labels |
| **7.5.3 Control: distribution, access, retrieval, and use** | Controlled distribution to authorized parties | Repository access managed via Git hosting platform (GitHub/Azure DevOps) role-based access control. Personnel granted read/write based on role. | Access control configuration; team/role membership records |
| **7.5.3 Control: storage and preservation** | Stored and preserved, including preservation of legibility | Git repository with cloud hosting (GitHub/Azure DevOps) provides durable storage. Markdown format ensures long-term legibility (no proprietary format dependency). Backup via cloud provider redundancy. | Repository hosting configuration; backup/redundancy documentation |
| **7.5.3 Control: control of changes** | Changes tracked and managed | Every change is a Git commit with author, timestamp, and diff. PRs show full change history with reviewer comments. No change occurs without a tracked commit. | Git log; PR history; commit diffs |
| **7.5.3 Control: retention and disposition** | Retained for required periods; disposed when no longer needed | Git history is immutable -- all previous versions permanently accessible via `git log` and `git show`. Active documents live in `main` branch. Superseded documents have `status: Superseded` in frontmatter. Archived documents have `status: Archived`. Documents are never deleted from Git history. | Git history (immutable); status field in YAML frontmatter; tag-based version markers |

**ISO 42001 cl. 7.5 alignment:** ISO 42001 uses the same cl. 7.5 requirements (Harmonized Structure). This mapping satisfies both ISO 27001 and ISO 42001 documented information requirements simultaneously.

---

## 4. Document Metadata Standard

Every controlled document in the ISMS and AIMS must contain a YAML frontmatter block with the following fields.

### 4.1 Required Fields

| Field | Description | Format | Example |
|---|---|---|---|
| `document-id` | Unique document identifier | `HH-{system}-{type}-{number}` | `HH-ISMS-POL-001` |
| `title` | Document title | String in quotes | `"Information Security Policy"` |
| `version` | Semantic version | `v{major}.{minor}` | `v1.0` |
| `date` | Date of current version | ISO 8601 | `2026-02-19` |
| `classification` | Information classification level | `Public`, `Internal`, `Confidential`, `Secret` | `Internal` |
| `author` | Who drafted the document (person or agent name) | String | `CISO Agent` |
| `reviewer` | List of reviewers | YAML list | `[CISO, CTO]` |
| `approver` | Who approved the document (always a human) | String | `CEO Helge Heupel` |
| `review-cycle` | Scheduled review frequency | `Annual`, `Semi-annual`, `Quarterly`, `As-needed` | `Annual` |
| `next-review` | Date of next scheduled review | ISO 8601 | `2027-02-19` |
| `status` | Document lifecycle status | `Draft`, `Active`, `Superseded`, `Archived` | `Draft` |
| `change-summary` | Brief description of changes in current version | String | `Initial release` |

### 4.2 Optional Fields

| Field | Description | When Used |
|---|---|---|
| `parent-document` | ID of parent document | For annexes and sub-documents (e.g., IS-Policy-Annex references IS-Policy) |
| `ims-context` | ID of IMS Context document | For documents that reference the shared IMS preamble |
| `entity` | Specific legal entity | For entity-specific documents (e.g., ISMS-Scope-GmbH) |
| `jurisdiction` | Applicable jurisdiction | For jurisdiction-specific documents (e.g., Germany (DE)) |
| `supersedes` | ID of superseded document | When a new document replaces an older one |

### 4.3 Document ID Convention

The document ID follows the pattern: `HH-{system}-{type}-{number}`

| Component | Values | Description |
|---|---|---|
| `HH` | Always `HH` | Helge Heupel Group prefix |
| `{system}` | `ISMS`, `AIMS`, `IMS`, `CISO`, `GOV` | Management system or domain |
| `{type}` | `POL` (Policy), `ANNEX` (Annex), `SCOPE` (Scope), `DOC` (Document), `REG` (Register), `REF` (Reference), `PROC` (Procedure), `REC` (Record) | Document type |
| `{number}` | 3-digit number | Sequential within type (001, 002, ...) |

**Entity-specific documents** add an entity suffix: `HH-ISMS-SCOPE-GMBH-001`, `HH-AIMS-SCOPE-BV-001`

---

## 5. Version Numbering Convention

Per the locked decision (semantic + date stamp), the Helge Heupel Group uses the following version numbering:

### 5.1 Version Format

| Version | When Used | Examples |
|---|---|---|
| **v1.0** | Initial release of a document | First publication of IS Policy |
| **v1.1, v1.2** | Minor updates: corrections, clarifications, procedural changes that do not alter the intent or scope | Fixing a typo, clarifying a procedure, adding a reference |
| **v2.0** | Major revision: significant scope change, new regulatory requirement, structural reorganization | Adding a new section for a new regulation, redesigning the risk classification |
| **v3.0, v4.0** | Subsequent major revisions | Annual comprehensive review resulting in significant changes |

### 5.2 Date Association

Each version is associated with its publication date in the YAML frontmatter `date` field:

```
v1.0 (2026-02-19) -- Initial release
v1.1 (2026-05-15) -- Minor correction
v2.0 (2026-08-19) -- Semi-annual major review
```

### 5.3 Git Tags

Each document version is tagged in Git for immutable reference:

```
doc/HH-ISMS-POL-001/v1.0
doc/HH-AIMS-POL-001/v1.0
doc/HH-ISMS-DOC-001/v1.0
```

**Tag creation:** After CEO approves a document version (PR merge), the tag is created:
```bash
git tag doc/{document-id}/v{version}
```

**Tag retrieval:** Any historical version can be retrieved:
```bash
git show doc/HH-ISMS-POL-001/v1.0:policies/IS-Policy.md
```

---

## 6. Approval Workflow

Per the locked decision (CISO + CTO review, CEO approves), all controlled documents follow this approval workflow.

### 6.1 Standard Approval Process

| Step | Action | Responsible | Evidence |
|---|---|---|---|
| 1 | **Author creates** document on feature branch | Author (CISO Agent or human) | Git branch creation with commits |
| 2 | **PR created** with CISO and CTO as reviewers | Author | PR creation with reviewer assignment |
| 3 | **CISO reviews** for security and compliance accuracy | CISO (human) | PR review comments and approval |
| 4 | **CTO reviews** for technical accuracy and feasibility | CTO | PR review comments and approval |
| 5 | **Author addresses** review comments | Author | Additional commits on the PR branch |
| 6 | **CEO approves** and merges the PR | CEO Helge Heupel | PR merge (this IS the formal approval signature) |
| 7 | **Status updated** to Active in YAML frontmatter | Author | Commit updating status field |
| 8 | **Git tag created** for the version | Author | Tag in format `doc/{document-id}/v{version}` |
| 9 | **Document register updated** with new entry or version | CISO Agent | Commit updating document-register.md |

### 6.2 Emergency Change Process

When a document change is urgently needed (e.g., regulatory deadline, critical incident response):

1. CEO Helge Heupel may merge a PR directly without waiting for CISO and CTO review
2. The PR description must include: `[EMERGENCY-CHANGE]` tag with justification
3. Post-hoc review by CISO and CTO must occur at the next Weekly Technical meeting
4. If post-hoc review identifies issues, a corrective PR is created immediately

### 6.3 AI-Generated Document Approval

Documents drafted by Claude Code agents (CISO Agent, CTO Agent, etc.) follow the same approval workflow as human-authored documents, with additional requirements:

- The `author` field in YAML frontmatter identifies the agent (e.g., `author: CISO Agent`)
- The PR description explicitly states the document was AI-generated
- Human reviewers (CISO, CTO) verify factual accuracy, not just formatting
- CEO approval via PR merge constitutes acceptance of the AI-generated content

This satisfies ISO 42001 human oversight requirements for AI-generated compliance artifacts.

---

## 7. Information Classification and Handling

Per the locked decision (4 levels), all documented information is classified and handled according to the following scheme.

### 7.1 Classification Levels

| Level | Description | Access | Examples |
|---|---|---|---|
| **Public** | Information that may be disclosed externally without restriction | Anyone | Marketing materials, public website content, open-source contributions |
| **Internal** | Information available to all HH Group personnel and authorized AI agents. Default classification for management system documents. | All HH employees, contractors with NDA, all 7 Claude Code agents | Policies, procedures, RACI matrix, governance model, meeting agendas |
| **Confidential** | Information restricted to individuals with a demonstrated need-to-know | Named individuals/roles with explicit access grant | Risk register, vulnerability assessments, audit findings, agent system prompts, penetration test reports |
| **Secret** | Information accessible only to named individuals with explicit CEO authorization | CEO + specifically named individuals only | Patent-sensitive materials (Verity VE [PATENT-VE-001], Verity EAM [PATENT-EAM-001]), financial projections, M&A documents |

### 7.2 Handling Procedures by Classification

| Handling Rule | Public | Internal | Confidential | Secret |
|---|---|---|---|---|
| **Storage** | Any location | Git repository (main branch) | Git repository (access-controlled branch or separate repo) | Encrypted storage; separate repository with restricted access |
| **Transmission** | Any channel | Encrypted channels (TLS 1.3 for email/web) | Encrypted channels only; no forwarding without owner approval | End-to-end encrypted only; no email; CEO approval for each transmission |
| **Sharing** | Unrestricted | Within HH Group and authorized parties | Need-to-know only; sharing logged | CEO-approved recipient list only |
| **Printing** | Unrestricted | Permitted; clean desk policy applies | Minimize; secure disposal required | Not permitted without CEO approval; numbered copies |
| **AI processing** | All agents may process | All agents may process | Agents may process only when task requires it; output marked Confidential | No agent processing without explicit CEO authorization per interaction |
| **Disposal** | No special requirements | Delete/overwrite (Git retains history) | Secure deletion verification; disposal certificate for physical media | CEO-authorized disposal; destruction certificate; witness required |
| **Labeling** | Optional | `classification: Internal` in YAML frontmatter | `classification: Confidential` in YAML frontmatter + header marking | `classification: Secret` in YAML frontmatter + header + footer marking |

### 7.3 TISAX ISA Alignment

The HH information classification levels map to TISAX ISA protection need levels:

| HH Classification | TISAX Protection Need | ISA Assessment Criteria |
|---|---|---|
| Public | None | No TISAX protection requirements |
| Internal | Normal | ISA Chapter 1 standard controls apply |
| Confidential | High | ISA Chapter 1 + additional controls (access logging, encryption, need-to-know) |
| Secret | Very High | ISA Chapter 7 (Prototype Protection) controls apply; named access lists; comprehensive audit trails |

This alignment ensures that HH Group information classification is compatible with automotive OEM customer requirements for TISAX-certified information handling.

---

## 8. Document Review and Retention

### 8.1 Review Triggers

Documents are reviewed when any of the following occurs:

| Trigger | Review Type | Timeline |
|---|---|---|
| **Scheduled review** (per review-cycle in frontmatter) | Comprehensive review of all content | Per cycle: Annual, Semi-annual, Quarterly |
| **Regulatory change** | Targeted review of affected sections | Within 30 days of regulatory change effective date |
| **Significant security incident** | Review of incident-relevant documents | Within 14 days of incident closure |
| **Organizational change** | Review of affected scope and responsibilities | Within 30 days of organizational change |
| **Audit finding** (internal or external) | Targeted review based on finding | Per corrective action timeline (Critical: 72h, High: 30d) |
| **New AI system deployment** | Review of AI Policy and AIMS documents | Before deployment (G0 gate) |

### 8.2 Retention Periods

| Document Category | Retention Period | Rationale | Storage |
|---|---|---|---|
| **Policies** | Permanent (in Git history) | Audit trail requires demonstrating policy evolution over time | Git repository (all versions accessible via history) |
| **Procedures and work instructions** | Permanent (in Git history) | Same as policies; operational procedures may be referenced in future audits | Git repository |
| **Risk assessment records** | 7 years minimum | GDPR Art. 17 (right to erasure does not override legitimate interest for compliance evidence); German tax law (10 years for financial records); Dutch retention requirements (7 years) | Git repository + GRC platform (when Phase 9 integration is complete) |
| **Audit reports and findings** | 7 years minimum | Certification body requirements; regulatory audit trail | Git repository + GRC platform |
| **Meeting minutes (management review)** | 7 years minimum | ISO 27001 cl. 9.3 / ISO 42001 cl. 9.3 management review evidence | Git repository |
| **Evidence and records** | Per control-specific requirements (minimum 3 years for operational evidence; 7 years for compliance evidence) | Varies by control and jurisdiction | Git repository + GRC platform + Azure storage |
| **Superseded documents** | Permanent (in Git history) with `status: Superseded` | Previous versions may be needed for audit trail or legal proceedings | Git repository (previous versions accessible; current file shows Superseded status) |

### 8.3 Disposition

Documents are never physically deleted from Git history (Git is immutable). Disposition is managed through status transitions:

1. **Active to Superseded:** When a new version replaces the document, the old version's status changes to `Superseded` and the `supersedes` field is added to the new version
2. **Active to Archived:** When a document is no longer applicable (e.g., entity dissolved, regulation repealed), the status changes to `Archived` with a note explaining why
3. **No deletion:** Documents are never removed from the Git repository. Auditors may need to reference any historical version.

---

## 9. External Documents

Documents of external origin (not created by the Helge Heupel Group) are managed differently from internal documents.

### 9.1 External Document Types

| Type | Examples | How Managed |
|---|---|---|
| **ISO standards** | ISO 27001:2022, ISO 42001:2023, ISO 31000:2018 | Store reference (standard number, version, publication date) in the document register. Do NOT copy standard text into the repository (copyright restrictions). |
| **Regulatory texts** | EU AI Act (2024/1689), NIS2UmsuCG, Wbni, GDPR, BDSG, AVG | Store reference (regulation number, title, effective date) in the document register. Link to official publication source (EUR-Lex, BGBl, Staatscourant). |
| **Vendor certifications** | Azure SOC 2 Type II report, Azure ISO 27001 certificate, Azure BSI C5 attestation | Store reference (vendor, certification type, validity period) in the document register. Actual reports stored in Confidential repository section per vendor NDA. |
| **Customer requirements** | TISAX requirements from automotive OEMs, customer security questionnaires | Store reference (customer ID, requirement type, version). Actual documents stored per customer NDA and classification. |
| **Audit reports** (external) | ISO 27001/42001 certification audit report, TISAX assessment report | Store in Confidential section. Reference in document register with version and date. |

### 9.2 External Document Version Tracking

For each external document referenced in the management system, the document register tracks:
- Document title and identifier
- Current version / edition / amendment
- Date of last version check
- Applicability to HH Group (which entity, which management system)
- Location of reference (URL, file path, or "physical copy with [person]")

External document versions are checked during:
- Annual document review cycle
- Regulatory change monitoring (CISO Agent responsibility)
- Certification body communications regarding standard updates

---

## 10. Document Control for AI-Generated Content

AI-generated documents are a routine part of the Helge Heupel Group's compliance artifact production. The 7 Claude Code agents produce policy drafts, risk assessments, compliance mappings, and other management system documents. This section establishes specific provisions for AI-generated content.

### 10.1 Authorship Identification

- The `author` field in YAML frontmatter identifies the AI agent that drafted the document (e.g., `CISO Agent`, `CTO Agent`)
- If a human and agent co-authored the document, both are listed: `author: [CISO Agent, CISO (human)]`
- The PR description for AI-generated documents must state: "This document was drafted by [agent name] and is submitted for human review and approval."

### 10.2 Review Requirements for AI-Generated Documents

AI-generated documents follow the standard approval workflow (Section 6) with additional quality checks:

| Check | Description | Reviewer |
|---|---|---|
| **Factual accuracy** | All ISO clause references, regulation citations, and technical statements verified against source material | CISO (for compliance), CTO (for technical) |
| **HH specificity** | No generic "the organization shall" language; all statements reference HH entities, personnel, or systems | All reviewers |
| **Prohibited content** | No patent-sensitive content inlined; no Secret-classified data exposed | All reviewers |
| **Consistency** | Cross-references to other documents are correct and document IDs are valid | CISO Agent (automated check) |
| **Classification** | Classification level in frontmatter is appropriate for the content | CISO |

### 10.3 Human Oversight Requirement

Per the AI Policy (HH-AIMS-POL-001) and ISO 42001 human oversight requirements:

- No AI-generated document achieves `Active` status without human approval (CEO PR merge)
- AI agents may update `Draft` documents without separate PR approval (within the same working session)
- Any change to an `Active` document by an AI agent requires a new PR with human review
- The approval chain (CISO + CTO review, CEO approves) applies identically to human-authored and AI-authored documents

### 10.4 AI-Generated Content Audit Trail

The Git history provides a complete audit trail for AI-generated documents:
- **Creation:** Initial commit shows the AI agent as author (via commit message convention)
- **Review:** PR comments show human reviewer feedback and agent revisions
- **Approval:** PR merge by CEO shows formal approval
- **Modifications:** Subsequent commits show all changes with author identification
- **Evidence:** The entire chain (creation to approval) is immutable in Git history

This audit trail satisfies both ISO 27001 cl. 7.5.3 (control of documented information) and ISO 42001 human oversight requirements for AI-generated artifacts.
