---
document-id: HH-APPSEC-REF-001
title: "AppSec Agent Domain Context: Helge Heupel Group"
version: v1.0
date: 2026-02-21
classification: Internal
status: Active
author: AppSec Agent (Phase 4 Plan 02)
review-cycle: Quarterly
---

# AppSec Agent Domain Context

This document provides HH-specific security engineering context for the AppSec Agent. Read this first at the start of every new session to ground your responses in the organization's actual security tooling, threat model registry, and Annex A.8 control mapping.

For full organizational details (entities, personnel, AI agent roster, products, technology stack, compliance status), refer to `agents/ciso/reference/domain-context.md` (HH-CISO-REF-001).

---

## 1. Organization Overview (Abbreviated)

The **Helge Heupel Group** consists of 3 legal entities: Helge Heupel GmbH (Germany), Helge Heupel B.V. (Netherlands), and Helge Heupel Inc. (United States). GmbH is the primary operating entity. All entities share Azure infrastructure, M365, development toolchain, and Git repositories.

For full entity details (registration, addresses, inter-entity relationships), see `agents/ciso/reference/domain-context.md` Section 1.

---

## 2. Security Tooling Inventory

| Tool | Category | Status | Phase | Notes |
|------|----------|--------|-------|-------|
| Semgrep CE (CLI) | SAST | Planned | Phase 4 | Open-source; native TypeScript/JavaScript support; SARIF output for GitHub Security tab |
| OWASP ZAP | DAST | Planned | Phase 4 | Open-source; Docker-based CI integration; API scanning support |
| CycloneDX pnpm generator | SBOM | Planned | Phase 4 | `@cyclonedx/cyclonedx-node-pnpm`; reads `pnpm-lock.yaml` for exact versions |
| GitHub Dependabot | Dependency Scanning | Planned | Phase 4 | Free; automated vulnerability alerts and fix PRs; supports pnpm |
| Sigstore/Cosign | Artifact Signing | Planned | Phase 4 | Keyless signing via OIDC; industry standard for supply chain security |
| GitHub `actions/attest-build-provenance` | SLSA L2 Provenance | Planned | Phase 4 | Native GitHub SLSA integration; Sigstore-signed in-toto attestations |

**Status legend:** Planned = specification produced, not yet configured in repos. Configured = tool running in at least one repo. Active = tool running across all applicable repos with baseline established.

*Update this table as tools are configured and activated.*

---

## 3. Threat Model Registry

| Threat Model ID | System Name | Methodology | Status | File Path |
|-----------------|-------------|-------------|--------|-----------|
| TM-CLAUDE-001 | Claude Code Agent System (7 agents) | STRIDE | Planned | `threat-models/TM-CLAUDE-001.yml` |
| TM-VERITY-CMS-001 | Verity CMS (Payload CMS backend) | STRIDE + LINDDUN | Planned | `threat-models/TM-VERITY-CMS-001.yml` |

**Registry rules:**
- Every HH system processing data must have a threat model
- STRIDE is applied to all systems
- LINDDUN is applied only to systems processing personal data (GDPR scope)
- Threat models are stored as YAML-in-Git, consistent with the risk register pattern
- All threat model mitigations reference Annex A controls for SoA traceability

*Populate file paths and update status as threat models are produced.*

---

## 4. SAST/DAST Status

**Current state:** Not configured.

**SAST (Semgrep CE):**
- Scan coverage: None (pending configuration)
- Baseline suppressions: 0
- Open findings: N/A
- Rule sets: `p/javascript`, `p/typescript`, `p/owasp-top-ten` (planned)
- False positive management: Centralized baseline approach (`.semgrepignore` + `semgrep-policy.yml`)

**DAST (OWASP ZAP):**
- Scan coverage: None (pending configuration)
- Target applications: Verity CMS (verity-cms.vercel.app), HH CMS (helgeheupel-cms.vercel.app)
- Scan policies: To be defined per application risk profile

**Pipeline gate criteria:**
- Critical/High severity: Block pipeline (merge blocked)
- Medium/Low severity: Advisory only (reported, not blocking)
- Override procedure: `@security-override` label on PR requires CTO + CISO approval

*Update sections as SAST/DAST tools are configured.*

---

## 5. SBOM and Supply Chain Status

**Current state:** Not configured.

**SBOM Generation:**
- Latest generation date: N/A
- Generator: `@cyclonedx/cyclonedx-node-pnpm` (planned)
- Format: CycloneDX 1.5+ JSON
- Dependency count: To be determined after first generation
- Known vulnerability count: To be determined
- License compliance status: To be determined

**Supply Chain Security:**
- SLSA Level: Target Level 2 (hosted build platform with signed provenance)
- Provenance tool: GitHub `actions/attest-build-provenance` (planned)
- Artifact signing: Sigstore/Cosign keyless via OIDC (planned)
- Verification procedures: To be documented

**Review cadence:** Monthly human review cycle covering:
- New dependencies added since last review
- License changes (especially to copyleft licenses)
- Vulnerability trends (new Critical/High CVEs)
- Dependency supply chain attack history

*Update sections as SBOM and supply chain tools are configured.*

---

## 6. Annex A.8 Control Mapping

This agent's artifacts provide evidence for the following ISO 27001:2022 Annex A controls:

| Control ID | Control Name | AppSec Artifact | Evidence Type |
|------------|-------------|-----------------|---------------|
| A.8.8 | Management of Technical Vulnerabilities | SAST/DAST spec + reference config | Scan reports, pipeline gate logs |
| A.8.11 | Data Masking | Threat model data masking needs | Threat model mitigation entries |
| A.8.25 | Secure Development Life Cycle | SAST/DAST integration + threat modeling framework | Pipeline config, threat model YAML |
| A.8.26 | Application Security Requirements | Threat modeling framework | Threat model per-system requirements |
| A.8.27 | Secure System Architecture and Engineering Principles | CTO co-owned; AppSec contributes security architecture review | Threat model trust boundaries, data flows |
| A.8.28 | Secure Coding | SAST enforcement (Semgrep rules) | Semgrep config, scan results, baseline |
| A.8.29 | Security Testing in Development and Acceptance | SAST/DAST reference config | GitHub Actions workflow, scan reports |
| A.8.30 | Outsourced Development | SBOM + supply chain framework | SBOM reports, dependency review logs |
| A.8.33 | Test Information | Threat model test data sensitivity | Threat model data classification entries |

**Additional controls referenced from threat models:**

| Control ID | Control Name | Contribution |
|------------|-------------|--------------|
| A.5.21 | ICT Supply Chain | Supply chain security framework, SLSA provenance |
| A.5.23 | Information Security for Use of Cloud Services | Threat models for cloud-deployed systems (Azure, Vercel, Cloudflare Pages) |

*Cross-reference: SoA control files at `soa/A.X.Y.yml`. Threat model mitigations use the same control IDs for traceability.*

---

## 7. Upstream Policy Constraints

The AppSec Agent operates under constraints defined in two upstream policy documents. Reference these policies by document ID; do not duplicate their content.

**Information Security Policy (HH-ISMS-POL-001):**
- 4-level information classification scheme (Public, Internal, Confidential, Secret) applies to all AppSec artifacts
- Security testing requirements mandate automated scanning in CI/CD pipelines
- Vulnerability management requires timely remediation of Critical/High findings
- All security artifacts must be traceable to Annex A controls

**AI Policy (HH-AIMS-POL-001):**
- 14 prohibited practices (8 EU AI Act Art. 5 + 6 HH-specific) constrain AI system threat models
- AI-generated content follows the same approval workflow as human-authored documents
- AI systems classified as Limited-Risk per EU AI Act Art. 52 require transparency obligations in threat models
- All AI-related security findings must consider both ISMS and AIMS implications

**Escalation paths:**
- Policy interpretation questions: flag as `[CISO-DEPENDENCY]` for CISO Agent resolution
- Architecture-impacting security decisions: flag as `[CTO-DEPENDENCY]` for CTO Agent review
- Risk acceptance decisions: flag as `[CEO-SIGNOFF-REQUIRED]` for CEO decision

---

## 8. Operating Phase and Key Dates

**Current phase:** Startup (per SDLC-Growth-v2 framework)

**Key dates:**

| Date | Event | Relevance to AppSec |
|------|-------|---------------------|
| 2026-03-16 | TISAX label expiry | Security tooling evidence needed for renewal scope |
| Mid-May 2026 | ISO 27001/42001 certification target | All Annex A.8 evidence must be audit-ready |
| 2026-08 | EU AI Act full conformity deadline | AI system threat models must address conformity |

**Startup simplifications affecting AppSec:**
- All agents at Trust Level 2 (Supervised Autonomous)
- Low/Medium risk auto-flows via CI/CD + PR; High/Critical require human approval
- Security tooling override requires CTO + CISO approval (not just CTO)
- CEO accepts all residual risk (not CTO/CISO split)

---

*Document: agents/appsec/reference/domain-context.md*
*Document ID: HH-APPSEC-REF-001*
*Created: Phase 4 Plan 02*
