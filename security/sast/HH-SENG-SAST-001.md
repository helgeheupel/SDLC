---
document-id: HH-SENG-SAST-001
title: "Static Application Security Testing (SAST) Specification"
version: v1.0
date: 2026-02-22
classification: Internal
author: AppSec Agent
reviewer: CTO, CISO
status: Draft
annex-a-controls: [A.8.25, A.8.28, A.8.29]
---

# Static Application Security Testing (SAST) Specification

This document defines the SAST tool selection, configuration, pipeline integration, false positive management, reporting, and maintenance procedures for the Helge Heupel Group (GmbH, B.V., Inc.). All HH TypeScript/JavaScript repositories are in scope.

---

## 1. Tool Selection

### Selection Criteria

The SAST tool for HH must satisfy:

| Criterion | Requirement | Weight |
|-----------|-------------|--------|
| License | Open-source, free for private repos | Must-have |
| Language support | TypeScript, JavaScript, JSX, TSX (Next.js, Qwik, Payload CMS) | Must-have |
| GitHub integration | GitHub Actions support, SARIF output for GitHub Security tab | Must-have |
| CI speed | Median scan time under 60 seconds for typical HH repos | Must-have |
| Custom rules | Ability to write HH-specific detection patterns | Should-have |
| Community rules | Pre-built OWASP Top 10 coverage | Must-have |
| False positive management | Centralized suppression (not inline-only) | Must-have |

### Selected Tool: Semgrep CE

**Tool:** Semgrep Community Edition (CLI)
**License:** LGPL-2.1 (open-source, free for all use)
**Repository:** https://github.com/semgrep/semgrep

**Rationale:**

1. **Free for all repos.** Semgrep CE is fully open-source and free for private repositories. No GitHub Advanced Security subscription required.
2. **Native TypeScript/JavaScript support.** Semgrep parses TypeScript, JavaScript, JSX, and TSX natively. This covers all HH codebases: Next.js (helgeheupel-cms, verity-cms), Qwik (verity-website, helgeheupel-website), and Payload CMS backend code.
3. **2000+ community rules.** Semgrep Registry includes pre-built rule packs for OWASP Top 10 (`p/owasp-top-ten`), JavaScript (`p/javascript`), and TypeScript (`p/typescript`).
4. **Fast CI scans.** Median scan time is approximately 10 seconds for typical TypeScript projects, well within the 60-second CI budget.
5. **SARIF output.** Native SARIF output enables direct upload to GitHub Security tab via `github/codeql-action/upload-sarif@v3`.
6. **Custom rule support.** Semgrep rules are written in YAML with a pattern-based syntax that developers can read and write. Enables HH-specific patterns (e.g., patent data leak detection in Verity repos).
7. **Container-based CI.** Official `semgrep/semgrep` Docker image for consistent CI execution.

### Alternatives Evaluated

| Tool | Evaluation | Why Not Selected |
|------|-----------|-----------------|
| CodeQL (GitHub) | Deep semantic data-flow analysis; supports TypeScript | Requires GitHub Advanced Security for private repos (paid). Slower CI scans. Recommended as secondary analysis for public repos. |
| SonarQube Community | Broad quality analysis beyond security | Requires server infrastructure (self-hosted or SonarCloud). Adds operational overhead. Not purely CLI-based. |
| ESLint security plugins | Lightweight, already part of HH dev toolchain | Less comprehensive security coverage. Not designed as a dedicated SAST tool. Lacks SARIF output. |
| Bearer CLI | Privacy-focused SAST for TypeScript | Complementary tool for GDPR/LINDDUN analysis. Not a primary SAST replacement. May be added as supplementary scanner. |

---

## 2. Configuration

### Base Configuration

Semgrep is configured via a `.semgrepconfig.yml` file in each repository root, combined with command-line flags in the GitHub Actions workflow.

**Rule sets:**

| Rule Pack | Purpose | Scope |
|-----------|---------|-------|
| `p/javascript` | JavaScript-specific security patterns | All HH repos |
| `p/typescript` | TypeScript-specific security patterns | All HH repos |
| `p/owasp-top-ten` | OWASP Top 10 vulnerability detection | All HH repos |

**Scan target:** All `.ts`, `.tsx`, `.js`, `.jsx` files in the repository, excluding paths listed in `.semgrepignore`.

### Severity Classification

Semgrep findings are mapped to HH severity levels for pipeline gate enforcement:

| Semgrep Severity | HH Severity | Pipeline Action | SLA |
|-----------------|-------------|-----------------|-----|
| ERROR | Critical/High | **Block pipeline** (merge blocked) | Critical: 48h, High: 7 days |
| WARNING | Medium | Advisory (reported in PR, not blocking) | 30 days |
| INFO | Low | Advisory (reported in PR, not blocking) | Next release |

### Custom Rules

HH-specific Semgrep rules are stored in `security/sast/custom-rules/` and loaded via `--config security/sast/custom-rules/` in the scan command.

**Planned custom rules:**

| Rule ID | Purpose | Priority |
|---------|---------|----------|
| `hh-patent-data-leak` | Detect potential patent-sensitive data exposure in Verity VE/EAM repos | High |
| `hh-env-var-exposure` | Detect hardcoded secrets or environment variable logging | High |
| `hh-api-auth-bypass` | Detect Payload CMS API routes missing authentication middleware | Medium |

Custom rules are developed as needed and reviewed quarterly.

---

## 3. Pipeline Integration

### GitHub Actions Workflow

SAST scanning is integrated via a GitHub Actions workflow file. The reference configuration is provided at `security/reference-configs/sast-semgrep.yml` and should be copied to `.github/workflows/sast.yml` in each HH repository.

### Trigger Conditions

| Trigger | Event | Scope |
|---------|-------|-------|
| Pull request to `main` | `pull_request` targeting `main` branch | Full scan of PR diff + affected files |
| Push to `main` | `push` to `main` branch | Full repository scan |

### Gate Criteria

| Gate | Condition | Action |
|------|-----------|--------|
| **Block** | Any Semgrep ERROR-level finding | PR merge is blocked. Job fails with error annotation. |
| **Advisory** | Semgrep WARNING or INFO findings | Findings uploaded to GitHub Security tab. PR is not blocked. |
| **Override** | `@security-override` label on PR | Bypasses the severity gate. Requires CTO + CISO approval. Override is logged in PR description for audit trail. |

### Workflow Steps

1. **Checkout** repository code
2. **Run Semgrep scan** in `semgrep/semgrep` container with configured rule sets
3. **Upload SARIF** to GitHub Security tab (always, even on failure)
4. **Severity gate check** as a separate step: re-scan for ERROR-level findings; fail the job if any exist

---

## 4. False Positive Management

### Approach: Centralized Baseline

HH uses a centralized false positive management approach. Suppression decisions are never scattered across the codebase via inline comments.

**Rationale:** Inline `# nosemgrep` comments are difficult to audit. A centralized approach keeps all suppression decisions in reviewable, version-controlled locations. Auditors can verify the complete suppression inventory from two files rather than searching the entire codebase.

### Path-Level Exclusions

The `.semgrepignore` file in each repository root excludes paths that should never be scanned:

```
# Test fixtures (not production code)
**/test-fixtures/
**/test/fixtures/
**/__mocks__/

# Generated code (not human-authored)
**/.next/
**/dist/
**/build/
**/node_modules/

# Vendor directories
**/vendor/

# Migration files (auto-generated by Payload CMS)
**/migrations/
```

### Baseline Document

All suppressed findings are documented in `security/sast/sast-baseline.md` with:

| Field | Description |
|-------|-------------|
| Finding ID | Semgrep rule ID and file path |
| Suppression date | Date the suppression was added |
| Reviewer | Person who reviewed and approved the suppression |
| Justification | Why this finding is a false positive or accepted risk |
| Review date | Next scheduled review date |
| Status | Active, Expired, or Removed |

### Suppression Process

1. Developer identifies a false positive in a PR
2. Developer opens a separate PR adding the suppression to `sast-baseline.md`
3. CTO or CISO reviews and approves the suppression PR
4. Suppression is implemented via `.semgrepignore` (path-level) or `semgrep-policy.yml` (rule-level severity override)
5. Original PR re-runs SAST with the suppression active

### Review Cadence

- **Quarterly:** Review all active baseline suppressions. Remove suppressions where the underlying code has changed or the false positive pattern no longer applies.
- **On Semgrep update:** Re-evaluate suppressions when Semgrep version or rule sets are updated.

---

## 5. Reporting

### Output Format

| Report Type | Format | Destination |
|-------------|--------|-------------|
| CI scan results | SARIF | GitHub Security tab (via `upload-sarif` action) |
| PR annotations | GitHub check annotations | PR diff view (inline findings) |
| Severity gate result | Job exit code | GitHub Actions job status (pass/fail) |

### Evidence for Audit

For ISO 27001 audit evidence, the following artifacts demonstrate SAST implementation:

| Evidence | Location | What It Shows |
|----------|----------|---------------|
| SARIF scan reports | GitHub Security tab | Findings detected per scan, severity distribution |
| GitHub Actions workflow logs | GitHub Actions run history | Scan execution, gate pass/fail, override usage |
| `sast-baseline.md` | `security/sast/sast-baseline.md` | Suppression decisions with justifications |
| `.semgrepignore` | Repository root | Path exclusions with documented rationale |
| This specification | `security/sast/HH-SENG-SAST-001.md` | Tool selection criteria, configuration, gate policy |

### Metrics and Trends

The following metrics are tracked as part of the monthly security review:

| Metric | Frequency | Source |
|--------|-----------|--------|
| New Critical/High findings | Per PR/push | GitHub Security tab |
| Total open findings by severity | Weekly | GitHub Security tab |
| False positive rate | Quarterly | `sast-baseline.md` entries vs total findings |
| Mean time to remediate (by severity) | Monthly | PR merge timestamps |
| Override usage | Monthly | PRs with `@security-override` label |

---

## 6. Maintenance

### Update Cadence

| Component | Update Frequency | Process |
|-----------|-----------------|---------|
| Semgrep version | Monthly | Check for new releases. Update container image tag in workflow. Test on one repo before rolling out. |
| Community rule sets | Automatic | `p/javascript`, `p/typescript`, `p/owasp-top-ten` pull latest rules on each scan run. No manual update needed. |
| Custom rules | As needed | New rules added via PR to `security/sast/custom-rules/`. Reviewed by CTO. |
| `.semgrepignore` | As needed | Updated when new exclusion paths are identified. Reviewed quarterly. |
| Baseline suppressions | Quarterly | All suppressions reviewed. Expired or invalid suppressions removed. |

### Annual Review

This specification (HH-SENG-SAST-001) is reviewed annually by the CTO and CISO. The annual review covers:

1. Tool re-evaluation against selection criteria (are better alternatives available?)
2. Rule set effectiveness (are the right vulnerabilities being detected?)
3. False positive rate (is the baseline growing unmanageably?)
4. Pipeline performance impact (is scan time still within budget?)
5. Alignment with updated Annex A.8 control requirements

---

## Annex A Control References

This specification provides evidence for the following ISO 27001:2022 Annex A controls:

| Control ID | Control Name | How This Specification Provides Evidence |
|------------|-------------|----------------------------------------|
| A.8.25 | Secure Development Life Cycle | SAST integrated into CI/CD pipeline enforces security checks at every code change |
| A.8.28 | Secure Coding | Semgrep rules enforce secure coding patterns; violations block pipeline |
| A.8.29 | Security Testing in Development and Acceptance | Automated SAST scanning on every PR and push constitutes continuous security testing |

---

*Document: security/sast/HH-SENG-SAST-001.md*
*Document ID: HH-SENG-SAST-001*
*Classification: Internal*
*Author: AppSec Agent*
*Status: Draft*
