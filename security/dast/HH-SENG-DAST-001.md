---
document-id: HH-SENG-DAST-001
title: "Dynamic Application Security Testing (DAST) Specification"
version: v1.0
date: 2026-02-22
classification: Internal
author: AppSec Agent
reviewer: CTO, CISO
status: Draft
annex-a-controls: [A.8.25, A.8.29]
---

# Dynamic Application Security Testing (DAST) Specification

This document defines the DAST tool selection, configuration, pipeline integration, false positive management, reporting, and maintenance procedures for the Helge Heupel Group (GmbH, B.V., Inc.). All HH web applications deployed to Vercel and Cloudflare Pages are in scope.

---

## 1. Tool Selection

### Selection Criteria

The DAST tool for HH must satisfy:

| Criterion | Requirement | Weight |
|-----------|-------------|--------|
| License | Open-source, free for all use | Must-have |
| Web application support | Scan modern JavaScript SPAs (Next.js, Qwik) and server-rendered pages | Must-have |
| GitHub Actions support | Docker-based CI integration with GitHub Actions | Must-have |
| API scanning | Ability to scan REST API endpoints (Payload CMS admin API) | Should-have |
| Report output | Markdown and/or HTML reports for PR comments and audit evidence | Must-have |
| Authentication support | Cookie-based and token-based authenticated scanning | Should-have |
| Scan speed | Baseline scan under 10 minutes for CI use | Must-have |

### Selected Tool: OWASP ZAP

**Tool:** OWASP ZAP (Zed Attack Proxy)
**License:** Apache 2.0 (open-source, free for all use)
**Website:** https://www.zaproxy.org/

**Rationale:**

1. **Most widely used open-source DAST.** OWASP ZAP is the industry standard for open-source dynamic application security testing with active OWASP community maintenance.
2. **GitHub Actions support.** Official GitHub Actions (`zaproxy/action-baseline@v0.14.0`) enable CI integration with minimal configuration.
3. **Docker-based CI.** ZAP runs in Docker containers (`ghcr.io/zaproxy/zaproxy`), ensuring consistent scan environments across CI runs.
4. **API scanning.** ZAP supports scanning REST APIs via OpenAPI/Swagger definitions, covering Payload CMS admin API endpoints.
5. **Authenticated scanning.** ZAP supports cookie-based authentication, enabling scanning of CMS admin panel routes.
6. **Report formats.** ZAP generates Markdown and HTML reports suitable for PR comments and audit evidence.
7. **Baseline scan mode.** ZAP baseline scan completes in approximately 5 minutes, suitable for PR-triggered CI.

### Alternatives Evaluated

| Tool | Evaluation | Why Not Selected |
|------|-----------|-----------------|
| Nuclei | Template-based vulnerability scanning; faster for known CVEs | Less comprehensive than ZAP for general DAST. Better suited as complementary tool for targeted CVE verification. |
| Burp Suite Community | Industry-leading DAST capabilities | Not CI-friendly (community edition lacks automation API). Professional edition requires paid license. |
| Nikto | Lightweight web server scanner | Limited to server configuration checks. Does not test application logic. Not suitable as primary DAST. |

---

## 2. Configuration

### Scan Modes

HH uses two DAST scan modes depending on the trigger:

| Mode | Trigger | Target | Duration | Coverage |
|------|---------|--------|----------|----------|
| **Baseline scan** | Pull request to `main` | Vercel preview deployment | ~5 minutes | Quick scan: common vulnerabilities, misconfigurations, header checks |
| **Full scan** | Weekly schedule (main branch) | Production URLs | ~30-60 minutes | Comprehensive: spider + active scan + API scan |

### Target URLs

| Application | Preview URL Pattern | Production URL | Scan Modes |
|-------------|-------------------|----------------|------------|
| Verity CMS | `verity-cms-{git-sha}.vercel.app` | `verity-cms.vercel.app` | Baseline (PR), Full (weekly) |
| HH CMS | `helgeheupel-cms-{git-sha}.vercel.app` | `helgeheupel-cms.vercel.app` | Baseline (PR), Full (weekly) |
| Verity Website | Cloudflare Pages preview | `verity-website.pages.dev` | Baseline (PR), Full (weekly) |
| HH Website | Cloudflare Pages preview | `helgeheupel.com` | Baseline (PR), Full (weekly) |

### Authentication Configuration

For authenticated scanning of CMS admin panels (Verity CMS, HH CMS):

| Parameter | Value |
|-----------|-------|
| Auth type | Cookie-based (Payload CMS session) |
| Login URL | `/admin/login` |
| Credentials | Stored as GitHub Actions secrets (`ZAP_CMS_USERNAME`, `ZAP_CMS_PASSWORD`) |
| Session validation | Check for admin dashboard element presence |

**Note:** Authenticated scanning runs only during full (scheduled) scans, not on PR baseline scans.

### Scan Policy

| Setting | Baseline Scan | Full Scan |
|---------|--------------|-----------|
| Spider | Disabled | Enabled (max depth: 5) |
| Active scan | Disabled | Enabled (default policy) |
| Passive scan | Enabled | Enabled |
| AJAX spider | Disabled | Enabled (for SPA crawling) |
| Technology context | Next.js, Qwik, Payload CMS, Node.js | Same |
| Alert threshold | Medium | Low |

---

## 3. Pipeline Integration

### GitHub Actions Workflow

DAST scanning is integrated via a GitHub Actions workflow file. The reference configuration for baseline scans is provided at `security/reference-configs/dast-zap.yml` and should be copied to `.github/workflows/dast.yml` in each HH repository.

### Trigger Conditions

| Trigger | Event | Scan Mode |
|---------|-------|-----------|
| Pull request to `main` | `pull_request` targeting `main` branch | Baseline scan against Vercel preview deployment |
| Weekly schedule | `schedule: cron '0 6 * * 1'` (Monday 06:00 UTC) | Full scan against production URLs |

### Gate Criteria

| Gate | Condition | Action |
|------|-----------|--------|
| **Block** (baseline scan) | Any ZAP High or Critical alert | PR merge is blocked. Alert summary posted as PR comment. |
| **Advisory** (baseline scan) | Medium or Low alerts | Reported in PR comment. Not blocking. |
| **Report** (full scan) | All alerts | Full HTML report uploaded as artifact. Critical/High findings reported to security review. |
| **Override** | `@security-override` label on PR | Bypasses baseline scan gate. Requires CTO + CISO approval. Override logged for audit. |

### Workflow Steps (Baseline Scan)

1. **Wait for deployment** to be ready (Vercel preview URL must be accessible)
2. **Run ZAP baseline scan** using `zaproxy/action-baseline` action against preview URL
3. **Post report** as PR comment (Markdown format)
4. **Severity gate check** by parsing ZAP alert JSON: fail the job if any High/Critical alerts exist

### Workflow Steps (Full Scan)

1. **Run ZAP full scan** using `zaproxy/action-full-scan` action against production URL
2. **Upload HTML report** as GitHub Actions artifact
3. **Post summary** to designated security review channel (if configured)
4. **Log results** for monthly security review

---

## 4. False Positive Management

### Technology-Specific False Positives

Modern JavaScript frameworks and hosting platforms produce known false positive patterns in DAST scanning:

| False Positive Pattern | Cause | Resolution |
|----------------------|-------|------------|
| CSP header warnings | Next.js/Vercel default CSP policy differs from ZAP expectations | Configured in ZAP alert filter |
| X-Frame-Options missing | Vercel sets `X-Frame-Options` via `vercel.json`, not detected by ZAP passive scan | Configured in ZAP alert filter |
| Anti-CSRF token missing | Next.js/Qwik use different CSRF protection patterns than traditional form tokens | Configured in ZAP alert filter |
| Cookie SameSite warnings | Vercel sets SameSite at CDN level, not visible to ZAP | Configured in ZAP alert filter |

### ZAP Alert Filter Configuration

Alert filters are maintained in a ZAP context file (`security/dast/zap-context.xml`) that is loaded during scans. The context file contains:

- **Alert filters:** Rules to suppress known false positive alert IDs
- **Technology context:** Framework-specific settings (Next.js, Qwik, Payload CMS)
- **Scan scope:** URL patterns to include/exclude from scanning

### Baseline Document

All suppressed alerts are documented in `security/dast/dast-baseline.md` with:

| Field | Description |
|-------|-------------|
| Alert ID | ZAP alert ID and name |
| URL pattern | Affected URL(s) or URL pattern |
| Suppression date | Date the suppression was added |
| Reviewer | Person who reviewed and approved the suppression |
| Justification | Why this alert is a false positive or accepted risk |
| Review date | Next scheduled review date |
| Status | Active, Expired, or Removed |

### Review Cadence

- **Quarterly:** Review all active alert filter suppressions. Remove filters where the underlying application has changed.
- **On ZAP update:** Re-evaluate alert filters when ZAP version is updated (new rules may change alert IDs).
- **On deployment change:** Re-evaluate when deployment platform or framework version changes (e.g., Next.js major upgrade, Vercel configuration change).

---

## 5. Reporting

### Output Formats

| Report Type | Format | Destination | When |
|-------------|--------|-------------|------|
| Baseline scan summary | Markdown | PR comment | Every PR to main |
| Full scan report | HTML + Markdown | GitHub Actions artifact | Weekly scheduled scan |
| Alert summary | JSON | Parsed by severity gate step | Every scan |

### Evidence for Audit

For ISO 27001 audit evidence, the following artifacts demonstrate DAST implementation:

| Evidence | Location | What It Shows |
|----------|----------|---------------|
| Baseline scan PR comments | GitHub PR history | DAST scanning on every PR with pass/fail results |
| Full scan HTML reports | GitHub Actions artifacts | Comprehensive vulnerability assessment per application |
| ZAP context file | `security/dast/zap-context.xml` | Scan configuration and alert filters |
| `dast-baseline.md` | `security/dast/dast-baseline.md` | Suppression decisions with justifications |
| GitHub Actions workflow logs | GitHub Actions run history | Scan execution, gate pass/fail, override usage |
| This specification | `security/dast/HH-SENG-DAST-001.md` | Tool selection criteria, configuration, gate policy |

### Metrics and Trends

The following metrics are tracked as part of the monthly security review:

| Metric | Frequency | Source |
|--------|-----------|--------|
| New High/Critical alerts per application | Per scan | ZAP alert JSON |
| Total open alerts by severity | Weekly | Full scan reports |
| False positive rate | Quarterly | `dast-baseline.md` entries vs total alerts |
| Scan coverage (URLs crawled) | Monthly | Full scan reports |
| Override usage | Monthly | PRs with `@security-override` label |

---

## 6. Maintenance

### Update Cadence

| Component | Update Frequency | Process |
|-----------|-----------------|---------|
| ZAP version | Monthly | Check for new releases. Update action version in workflow. Test baseline scan on one repo before rolling out. |
| ZAP context file | As needed | Updated when false positive patterns change. Reviewed quarterly. |
| Target URLs | When deployment URLs change | Update workflow environment variables and context file. |
| Alert filters | Quarterly | Review all filters. Remove expired or invalid filters. |
| Scan policy | Quarterly | Review scan settings for effectiveness and coverage. |

### Annual Review

This specification (HH-SENG-DAST-001) is reviewed annually by the CTO and CISO. The annual review covers:

1. Tool re-evaluation against selection criteria (are better alternatives available?)
2. Scan coverage assessment (are all HH applications being scanned?)
3. False positive rate (are alert filters maintaining signal quality?)
4. Scan performance (are scan times still within CI budget?)
5. Authentication scanning effectiveness (are authenticated routes being tested?)
6. Alignment with updated Annex A.8 control requirements

---

## Annex A Control References

This specification provides evidence for the following ISO 27001:2022 Annex A controls:

| Control ID | Control Name | How This Specification Provides Evidence |
|------------|-------------|----------------------------------------|
| A.8.25 | Secure Development Life Cycle | DAST integrated into CI/CD pipeline ensures security testing at every code change and on a regular schedule |
| A.8.29 | Security Testing in Development and Acceptance | Automated DAST scanning on every PR (baseline) and weekly (full) constitutes continuous security testing of deployed applications |

---

*Document: security/dast/HH-SENG-DAST-001.md*
*Document ID: HH-SENG-DAST-001*
*Classification: Internal*
*Author: AppSec Agent*
*Status: Draft*
