---
document-id: HH-SENG-DEP-001
title: "Dependency Scanning Specification"
version: v1.0
date: 2026-02-22
classification: Internal
author: AppSec Agent
reviewer: CTO, CISO
status: Draft
annex-a-controls: [A.8.8, A.5.21, A.8.30]
---

# Dependency Scanning Specification

This document defines the dependency scanning tool selection, configuration, pipeline integration, PR blocking criteria, license compliance framework, and maintenance procedures for the Helge Heupel Group (GmbH, B.V., Inc.). All HH repositories using pnpm/npm ecosystems are in scope.

---

## 1. Tool Selection

### Primary Tool: GitHub Dependabot

**Tool:** GitHub Dependabot
**License:** Free (included with GitHub)
**Integration:** Native GitHub integration

**Rationale:**

1. **Built into GitHub.** Dependabot is natively integrated into GitHub, requiring no external infrastructure or paid subscriptions.
2. **Automated PRs for vulnerable dependencies.** Dependabot automatically creates pull requests to update dependencies with known vulnerabilities.
3. **pnpm ecosystem support.** Dependabot supports the npm ecosystem, which covers pnpm repositories (Dependabot reads `package.json` and `pnpm-lock.yaml`).
4. **Configurable alerting.** Dependabot alerts can be configured with custom severity thresholds, assignees, and labels.
5. **Automated fix PRs.** For patch-level security updates, Dependabot creates fix PRs automatically, reducing remediation time.

### Supplementary Tools

| Tool | Purpose | When Used |
|------|---------|-----------|
| `pnpm audit` | Ad-hoc vulnerability scanning from CLI | Local development, pre-commit checks, CI pipeline audit step |
| CycloneDX SBOM license analysis | License compliance checking via SBOM license fields | Monthly review cycle (covered in Plan 04-05 SBOM specification) |

### Alternatives Evaluated

| Tool | Evaluation | Why Not Primary |
|------|-----------|-----------------|
| Snyk Open Source | Comprehensive vulnerability database, fix PRs | Requires paid license for private repos beyond free tier limits. Dependabot is free and sufficient. |
| npm audit | Built into npm/pnpm CLI | Useful for ad-hoc scanning but does not create automated fix PRs. Used as supplementary, not primary. |
| Renovate | Highly configurable dependency update bot | More complex configuration than Dependabot. HH does not require the additional flexibility at Startup phase. |
| Socket.dev | Supply chain attack detection | Specialized tool for detecting malicious packages. Valuable but not a replacement for vulnerability scanning. May be added in Growth phase. |

---

## 2. Configuration

### Dependabot Configuration

Dependabot is configured via a `dependabot.yml` file placed at `.github/dependabot.yml` in each repository. The reference configuration is provided at `security/reference-configs/dependabot.yml`.

**Key settings:**

| Setting | Value | Rationale |
|---------|-------|-----------|
| Ecosystem | npm (covers pnpm) | All HH repos use pnpm |
| Directory | `/` (repository root) | Single-root repos; monorepo paths added as needed |
| Security update schedule | Daily | Critical/High CVE fixes should be detected as fast as possible |
| Version update schedule | Weekly (Monday) | Non-security updates batched weekly to prevent PR flood |
| Target branch | `main` | All HH repos use `main` as the default branch |
| Assignees | CTO (Helge Heupel) | CTO reviews dependency updates for compatibility and security |
| Labels | `dependencies`, `security` | For filtering and tracking in GitHub Issues/PRs |
| Commit message prefix | `deps:` | Consistent commit message convention for dependency updates |
| Open PR limit | 10 | Prevents Dependabot from creating excessive PRs |

### Update Grouping

Minor and patch updates for non-security changes are grouped to reduce PR noise:

| Group | Scope | Strategy |
|-------|-------|----------|
| `minor-and-patch` | Non-security minor and patch updates | Grouped into a single weekly PR |
| Security updates | All severities | Individual PRs (not grouped) for clear tracking |

### Monorepo Considerations

For HH repositories with multiple `package.json` files (e.g., monorepos with apps/ and packages/ directories), add additional directory entries to `dependabot.yml`:

```yaml
updates:
  - package-ecosystem: "npm"
    directory: "/apps/web"
    schedule:
      interval: "weekly"
  - package-ecosystem: "npm"
    directory: "/packages/shared"
    schedule:
      interval: "weekly"
```

---

## 3. Pipeline Integration

### Automated PR Workflow

Dependabot creates PRs automatically based on its configuration. These PRs follow the standard HH CI pipeline:

```
Dependabot detects vulnerability
    -> Creates fix PR with `deps:` prefix
    -> CI runs (SAST via sast-semgrep.yml, tests, build)
    -> CTO reviews for compatibility
    -> PR merged (or closed with justification)
```

### PR Checks

All Dependabot PRs run the same CI checks as developer PRs:

| Check | Source | Required |
|-------|--------|----------|
| SAST scan | `sast-semgrep.yml` workflow | Yes |
| Build | Repository build workflow | Yes |
| Tests | Repository test workflow | Yes |
| `pnpm audit` | CI audit step | Yes (advisory) |

### Vulnerability Remediation SLA

Dependabot PR merge timelines are governed by vulnerability severity:

| Severity | SLA | Action | Escalation |
|----------|-----|--------|------------|
| **Critical** | 48 hours | Merge fix PR or apply workaround within 48 hours. If no fix available, assess and document risk acceptance. | CTO + CISO review. CEO sign-off required for risk acceptance. |
| **High** | 7 days | Merge fix PR within 7 days. If no fix available, document mitigation plan. | CTO review. CISO notified. |
| **Medium** | 30 days | Merge fix PR within 30 days. Advisory only, does not block current PRs. | Tracked in monthly security review. |
| **Low** | Next release | Merge fix PR at next convenient release cycle. | Logged for tracking. |

### SLA Tracking

SLA compliance is tracked as part of the monthly security review:

- **Open Dependabot PRs by age:** PRs older than their SLA are flagged
- **Time to merge by severity:** Average merge time for each severity level
- **Stale PRs:** Dependabot PRs open longer than 30 days are reviewed for closure or action

---

## 4. PR Blocking Criteria

### CI Audit Step

A `pnpm audit` step runs as part of the CI pipeline for all PRs (not just Dependabot PRs):

```bash
pnpm audit --audit-level=critical
```

| Condition | Result |
|-----------|--------|
| Critical vulnerabilities in production dependencies | **PR blocked.** Job fails with error listing affected packages. |
| High vulnerabilities in production dependencies | **Warning.** PR not blocked but warning annotation displayed. Manual review required. |
| Medium/Low vulnerabilities | **Logged.** Reported in CI output but does not affect PR status. |
| Vulnerabilities in devDependencies only | **Advisory.** Not blocking (devDependencies are not deployed to production). |

### Blocking Scope

The audit step distinguishes between production and development dependencies:

| Dependency Type | Critical | High | Medium/Low |
|----------------|----------|------|------------|
| Production (`dependencies`) | Block | Warning | Log |
| Development (`devDependencies`) | Warning | Log | Log |

**Rationale:** Production dependencies ship to end users and pose direct security risk. Development dependencies are used in the build process only and present lower risk exposure.

### Override Procedure

If a PR is blocked by a vulnerability that cannot be immediately resolved:

1. Add `@security-override` label to the PR
2. Document justification in PR description (why the vulnerability cannot be fixed now)
3. CTO + CISO approve the override
4. Create a tracking issue for remediation
5. Override is logged for monthly security review audit

---

## 5. License Compliance

### License Classification

All third-party dependencies are classified by license compatibility:

| Category | Licenses | Action |
|----------|----------|--------|
| **Allowed** | MIT, Apache-2.0, BSD-2-Clause, BSD-3-Clause, ISC, 0BSD, CC0-1.0, Unlicense | No action needed. These licenses are fully compatible with HH proprietary distribution. |
| **Warning** | LGPL-2.1, LGPL-3.0, MPL-2.0 | Copyleft but permissive for library use (dynamic linking). Allowed for dependencies but flagged for review. Must not be copied/modified into HH source code. |
| **Blocked** | GPL-2.0, GPL-3.0, AGPL-3.0, SSPL-1.0, EUPL-1.2 | Strong copyleft incompatible with proprietary distribution. Dependencies with these licenses must NOT be merged. |
| **Unknown** | Any license not in the above categories | Flagged for manual CTO + CISO review before merge. |

### License Check Process

License compliance is verified through two mechanisms:

1. **SBOM license field analysis (monthly):** The CycloneDX SBOM generated for each repository includes license information for all dependencies. Monthly review identifies any license changes (details in Plan 04-05).

2. **New dependency review (per PR):** When a PR adds a new dependency to `package.json`, the reviewer (CTO) checks the dependency's license. Dependencies with Blocked or Unknown licenses must not be merged.

### Known Warning-License Dependencies

| Dependency | License | Justification for Use |
|------------|---------|----------------------|
| Semgrep CE | LGPL-2.1 | Used as a CLI tool (not linked into HH code). LGPL allows CLI usage without copyleft obligations. |

*This table is updated as warning-license dependencies are identified.*

### License Compliance Evidence

For ISO 27001 audit evidence:

| Evidence | Location | What It Shows |
|----------|----------|---------------|
| CycloneDX SBOM with license data | GitHub Actions artifact per release | Complete dependency license inventory |
| Monthly review records | Monthly security review meeting notes | License review was conducted |
| This specification | `security/dependency-scanning/HH-SENG-DEP-001.md` | License classification policy |

---

## 6. Maintenance

### Review Cadence

| Component | Frequency | Process |
|-----------|-----------|---------|
| Dependabot configuration | Quarterly | Review settings, labels, grouping rules. Update for new repos. |
| Vulnerability SLA | Annually | Review SLA timelines against actual remediation velocity. |
| License whitelist/blocklist | Semi-annually | Review categories against current legal requirements and dependency landscape. |
| Dependabot PR audit log | Monthly | Track all merged Dependabot PRs in monthly security review. |
| `pnpm audit` baseline | Quarterly | Review known-good suppressions in audit CI step. |

### New Repository Onboarding

When a new HH repository is created:

1. Copy `security/reference-configs/dependabot.yml` to `.github/dependabot.yml`
2. Adjust `directory` entries for the repo's `package.json` locations
3. Add CI audit step (`pnpm audit --audit-level=critical`) to the build workflow
4. Run initial `pnpm audit` to establish baseline
5. Review all existing dependencies for license compliance

### Annual Review

This specification (HH-SENG-DEP-001) is reviewed annually by the CTO and CISO. The annual review covers:

1. Tool re-evaluation (is Dependabot still the best option for HH?)
2. SLA effectiveness (are remediation timelines realistic and being met?)
3. License compliance framework (are categories still appropriate?)
4. Blocking criteria (are the right vulnerabilities being caught?)
5. Integration with SBOM and supply chain security workflows
6. Alignment with updated Annex A control requirements

---

## Annex A Control References

This specification provides evidence for the following ISO 27001:2022 Annex A controls:

| Control ID | Control Name | How This Specification Provides Evidence |
|------------|-------------|----------------------------------------|
| A.8.8 | Management of Technical Vulnerabilities | Automated dependency vulnerability detection via Dependabot, SLA-driven remediation, CI audit gate |
| A.5.21 | ICT Supply Chain | License compliance framework governs third-party dependency risk; Dependabot monitors supply chain vulnerability exposure |
| A.8.30 | Outsourced Development | Dependency scanning ensures third-party libraries meet HH security requirements; license compliance prevents incompatible open-source usage |

---

*Document: security/dependency-scanning/HH-SENG-DEP-001.md*
*Document ID: HH-SENG-DEP-001*
*Classification: Internal*
*Author: AppSec Agent*
*Status: Draft*
