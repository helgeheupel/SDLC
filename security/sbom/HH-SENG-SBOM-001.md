---
document-id: HH-SENG-SBOM-001
title: "SBOM Generation Pipeline Specification"
version: v1.0
date: 2026-02-22
classification: Internal
author: AppSec Agent
reviewer: CTO, CISO
status: Draft
annex-a-controls:
  - A.8.30
  - A.5.21
  - A.8.8
risk-references:
  - RISK-SUP-004
---

# SBOM Generation Pipeline Specification

This specification defines how the Helge Heupel Group generates, stores, reviews, and maintains Software Bills of Materials (SBOMs) for all production repositories. SBOMs provide visibility into third-party dependencies, enabling vulnerability tracking, license compliance, and supply chain risk management.

**Scope:** All HH Group production repositories using pnpm: `helgeheupel-cms`, `verity-cms`, `helgeheupel-website`, and `verity-website`.

**Reference target:** `helgeheupel-cms` (Payload CMS, pnpm, TypeScript, Next.js) is the initial proof-of-concept. The pattern transfers to all other HH repos.

---

## 1. Tool Selection

### Selection Criteria

The SBOM generator must:
- Support pnpm as a first-class package manager (reads `pnpm-lock.yaml`, not `package.json`)
- Output CycloneDX format (industry-standard, machine-readable, supports license data)
- Be open-source and free for all use
- Be maintained by the CycloneDX project or a trusted open-source community
- Run as a CLI tool in GitHub Actions without server infrastructure

### Selected Tool and Rationale

**Selected: `@cyclonedx/cyclonedx-node-pnpm`**

The official CycloneDX SBOM generator for pnpm projects. It reads `pnpm-lock.yaml` directly for exact dependency version resolution, producing CycloneDX 1.5+ JSON output with complete dependency trees and license data.

**Rationale:** All HH repositories use pnpm as the package manager. The dedicated pnpm generator reads `pnpm-lock.yaml` for exact version resolution rather than `package.json` semver ranges. This ensures the SBOM reflects the precise versions deployed, not the range of acceptable versions. The tool is maintained by the CycloneDX project and approaches OWASP SCVS Level 2 compliance for component identification.

### Alternatives Evaluated

| Tool | Consideration | Decision |
|------|--------------|----------|
| `cdxgen` (CycloneDX) | Universal SBOM generator supporting multiple languages | Rejected for primary use. Less precise for pnpm-specific dependency resolution. Retained as fallback if pnpm generator encounters issues. |
| `npm-sbom` (npm built-in) | npm's native SBOM command supporting CycloneDX and SPDX | Rejected. npm-specific; does not read `pnpm-lock.yaml`. HH repos use pnpm, not npm. |
| `syft` (Anchore) | Container and filesystem SBOM generator | Rejected for dependency SBOM. Designed for container image scanning, not JavaScript package dependency trees. Useful for Growth phase container scanning. |

---

## 2. Configuration

### Output Format

- **Format:** CycloneDX JSON (`.cdx.json` extension)
- **CycloneDX version:** 1.5+
- **Output file naming:** `sbom-{repo}-{git-sha}.cdx.json`
- **Example:** `sbom-helgeheupel-cms-a1b2c3d.cdx.json`

### Component Types Included

- Libraries (direct and transitive npm packages)
- Frameworks (Next.js, Payload CMS, Qwik, React)
- Applications (the repository itself as root component)

### Metadata Captured

Each generated SBOM includes:
- Tool name and version (`@cyclonedx/cyclonedx-node-pnpm`)
- Generation timestamp (ISO 8601)
- Repository name and Git commit SHA
- Complete component tree with:
  - Exact versions (e.g., `3.2.1`, never `^3.0.0`)
  - License identifiers (SPDX format)
  - Package URLs (purl format)
  - Dependency relationships (direct vs. transitive)

### Critical Configuration Requirement

**SBOM generation MUST occur after `pnpm install --frozen-lockfile`.** This ensures:
1. The lockfile integrity is verified (CI fails if `pnpm-lock.yaml` is out of sync with `package.json`)
2. The `node_modules/` tree matches exactly what the lockfile specifies
3. The SBOM generator reads resolved versions from the lockfile, not semver ranges

**If `--frozen-lockfile` is omitted,** the lockfile could be silently updated during install, and the SBOM might reflect different versions than what was deployed. This makes the SBOM unreliable for vulnerability tracking and audit evidence.

### CLI Command

```bash
npx @cyclonedx/cyclonedx-node-pnpm --output-file sbom.cdx.json --output-format json
```

---

## 3. Pipeline Integration

### GitHub Actions Workflow

The SBOM generation pipeline is defined in `security/reference-configs/sbom-cyclonedx.yml` and targets the `helgeheupel-cms` repository.

### Trigger Conditions

| Trigger | Behavior |
|---------|----------|
| Push to `main` | Generate SBOM, upload as GitHub Actions artifact (90-day retention) |
| Release published | Generate SBOM, upload as GitHub Actions artifact AND attach to GitHub release (permanent) |

Every merge to `main` produces an updated SBOM reflecting the current dependency state. Published releases get a permanently attached SBOM for auditor access.

### Artifact Storage

- **GitHub Actions artifacts:** SBOM uploaded via `actions/upload-artifact@v4` with name `sbom-{git-sha}`. Retention: 90 days (default). Accessible via GitHub Actions UI.
- **Release artifacts:** SBOM attached to GitHub releases via release asset upload. Permanent retention. Accessible via GitHub releases page.

### File Naming Convention

- CI artifact name: `sbom-${{ github.sha }}`
- SBOM file name: `sbom.cdx.json` (inside the artifact)

---

## 4. Monthly Review Cycle

**This is a locked decision:** A monthly human review cycle covers dependencies, licenses, and vulnerabilities.

### Review Schedule

- **Cadence:** First week of each month
- **Reviewer:** CTO (Helge Heupel) with CISO advisory
- **Duration:** 30-60 minutes
- **Input:** Latest SBOM from `main` branch, vulnerability reports from Dependabot, previous review log entry

### Review Criteria

Each monthly review evaluates the following:

| Criteria | Action Trigger |
|----------|---------------|
| **New dependencies added** since last review | Review purpose, license, maintenance status, supply chain risk indicators |
| **Dependencies removed** since last review | Verify removal was intentional, check for orphaned functionality |
| **License changes** | Any dependency changing to copyleft license (GPL, AGPL) requires immediate review for compatibility |
| **Known vulnerability status** | New CVEs affecting current dependencies, especially Critical/High severity |
| **Dependency version freshness** | Any direct dependency more than 1 major version behind current stable = attention item |
| **Supply chain risk indicators** | Single-maintainer packages, recent ownership transfers, typosquatting name similarity |

### Review Process

1. Download the latest SBOM from GitHub Actions artifacts for the `main` branch
2. Compare component list against the previous month's SBOM (diff the JSON files or use a CycloneDX comparison tool)
3. Cross-reference with Dependabot alerts for open vulnerability findings
4. Evaluate each review criterion and document findings
5. Record the review in `security/sbom/review-log.md` with date, reviewer, and findings
6. Create action items for any identified issues (new vulnerability remediation, license concerns, outdated dependencies)

### Review Documentation

Reviews are documented in `security/sbom/review-log.md`. This file is created at the time of the first review (not in this specification). Each entry includes:
- Review date
- Reviewer name
- SBOM artifact reference (commit SHA)
- Findings per review criterion
- Action items with assignees and due dates
- Resolution status for previous action items

---

## 5. Reporting

### Output Artifacts

| Artifact | Storage | Retention | Purpose |
|----------|---------|-----------|---------|
| SBOM JSON (`sbom.cdx.json`) | GitHub Actions artifact | 90 days | CI/CD dependency tracking |
| SBOM JSON (release) | GitHub release asset | Permanent | Auditor evidence, compliance reporting |
| Review log entries | `security/sbom/review-log.md` in Git | Permanent (version-controlled) | Monthly review evidence |

### Evidence for Audit

Auditors can access the following evidence chain:

1. **SBOM specification** (this document): Defines the generation process, tooling, and review cycle
2. **GitHub Actions workflow** (`security/reference-configs/sbom-cyclonedx.yml`): Automated generation proof
3. **SBOM JSON files**: Actual dependency inventory per release
4. **Review log**: Monthly human review evidence with findings and action items
5. **Git commit history**: Version-controlled record of all SBOM changes over time

This evidence chain satisfies:
- **A.8.30 (Outsourced Development):** SBOM provides visibility into third-party code (open-source dependencies) used in HH products
- **A.5.21 (ICT Supply Chain):** SBOM + monthly review demonstrates active supply chain component management
- **A.8.8 (Technical Vulnerabilities):** SBOM enables vulnerability tracking against known CVE databases

### Metrics

Track the following metrics over time:
- Total dependency count (direct and transitive) per repository
- New dependencies added per month
- Vulnerabilities by severity (Critical, High, Medium, Low)
- Average time to remediate Critical/High dependency vulnerabilities
- License distribution (permissive vs. copyleft)

---

## 6. Maintenance

### Tool Version Management

- **Update cadence:** Monthly. Check for new `@cyclonedx/cyclonedx-node-pnpm` releases during the monthly SBOM review
- **Update procedure:** Test new version in a non-production branch, compare SBOM output for consistency, then update the reference config

### CycloneDX Specification Alignment

- **Review cadence:** When CycloneDX publishes new specification versions (approximately annually)
- **Action:** Evaluate new CycloneDX features (e.g., new component types, attestation fields) for HH applicability
- **Update the `--output-format` and schema version when CycloneDX releases breaking changes

### SBOM Accuracy Validation

- **Cadence:** Semi-annually
- **Procedure:** Compare SBOM component count against `pnpm list --depth 0` output for direct dependencies and `pnpm list` for the full tree
- **Expected result:** SBOM dependency count should match or exceed the pnpm list count (SBOM may include build-time metadata components)
- **Discrepancy action:** Investigate missing or extra components, update tool configuration if needed

### Workflow Maintenance

- **GitHub Actions version updates:** Review `actions/upload-artifact`, `actions/setup-node`, `pnpm/action-setup` for new major versions quarterly
- **pnpm version updates:** Ensure the GitHub Actions workflow pnpm version matches the repository's `packageManager` field in `package.json`
- **Node.js version updates:** Align workflow `node-version` with the project's `.nvmrc` or `engines.node` specification

---

## Annex A Control References

| Control ID | Control Name | Evidence Provided |
|------------|-------------|-------------------|
| A.8.30 | Outsourced Development | SBOM provides complete inventory of third-party open-source code used in HH products |
| A.5.21 | Managing Information Security in the ICT Supply Chain | Monthly SBOM review cycle + automated generation demonstrates active supply chain component governance |
| A.8.8 | Management of Technical Vulnerabilities | SBOM enables vulnerability tracking by providing exact dependency versions for CVE cross-referencing |

### Risk Register Cross-References

| Risk ID | Risk Title | How SBOM Mitigates |
|---------|-----------|-------------------|
| RISK-SUP-004 | Open-source dependency vulnerability in Verity product supply chain | SBOM generation provides visibility into the full dependency tree, enabling vulnerability identification before deployment. Monthly review cycle ensures human oversight of dependency changes. |

---

*Document: security/sbom/HH-SENG-SBOM-001.md*
*Author: AppSec Agent*
*Classification: Internal*
