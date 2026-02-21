---
phase: 04-cto-and-appsec-agents-with-security-engineering
plan: 04
subsystem: security-engineering
tags: [sast, dast, dependency-scanning, semgrep, owasp-zap, dependabot, github-actions, pipeline-security, sarif, license-compliance]

# Dependency graph
requires:
  - phase: 04-cto-and-appsec-agents-with-security-engineering
    plan: 02
    provides: "AppSec Agent with security engineering expertise and Annex A.8 control mapping"
provides:
  - "SAST specification with Semgrep CE selection, pipeline integration, and centralized false positive baseline"
  - "DAST specification with OWASP ZAP selection, baseline/full scan modes, and technology-specific false positive management"
  - "Dependency scanning specification with Dependabot, remediation SLAs, and license compliance framework"
  - "Reference GitHub Actions SAST workflow (sast-semgrep.yml) ready for HH repos"
  - "Reference GitHub Actions DAST workflow (dast-zap.yml) with Vercel preview scanning"
  - "Reference Dependabot v2 configuration (dependabot.yml) with daily security checks"
affects: [phase-04-plan-05-sbom-supply-chain, phase-07-security-architecture, phase-08-audit-readiness, phase-10-agent-documentation]

# Tech tracking
tech-stack:
  added: [semgrep-ce, owasp-zap, github-dependabot]
  patterns: [centralized-false-positive-baseline, severity-gated-pipeline, license-compliance-framework, security-override-bypass-procedure]

key-files:
  created:
    - security/sast/HH-SENG-SAST-001.md
    - security/dast/HH-SENG-DAST-001.md
    - security/dependency-scanning/HH-SENG-DEP-001.md
    - security/reference-configs/sast-semgrep.yml
    - security/reference-configs/dast-zap.yml
    - security/reference-configs/dependabot.yml
  modified: []

key-decisions:
  - "Semgrep CE selected as primary SAST tool: free for all repos, native TypeScript/JavaScript support, SARIF output, fast CI scans"
  - "OWASP ZAP selected as primary DAST tool: open-source, Docker-based CI integration, baseline and full scan modes"
  - "Dependabot selected as primary dependency scanner: free, native GitHub integration, automated fix PRs"
  - "Critical/High findings block pipeline; Medium/Low advisory only; @security-override label bypass requires CTO + CISO approval"
  - "Centralized false positive management: .semgrepignore + sast-baseline.md (no inline nosemgrep comments)"
  - "Vulnerability remediation SLAs: Critical 48h, High 7d, Medium 30d, Low next release"
  - "License compliance framework: Allowed (MIT, Apache-2.0, BSD, ISC), Warning (LGPL, MPL-2.0), Blocked (GPL, AGPL, SSPL, EUPL)"

patterns-established:
  - "Severity-gated CI pipeline: separate scan step and gate step for clean SARIF upload regardless of gate outcome"
  - "Centralized false positive baseline: suppressions documented in dedicated files with reviewer, date, justification"
  - "License compliance three-tier model: Allowed/Warning/Blocked categories with clear action per category"
  - "Security override procedure: label + CTO+CISO approval + PR documentation for audit trail"

requirements-completed: [SENG-02, SENG-05]

# Metrics
duration: 7min
completed: 2026-02-22
---

# Phase 4 Plan 04: SAST/DAST/Dependency Scanning Specifications Summary

**3 security tooling specifications (Semgrep SAST, OWASP ZAP DAST, Dependabot dependency scanning) with severity-gated pipeline integration, centralized false positive management, license compliance framework, and 3 reference GitHub Actions configs ready for HH repos**

## Performance

- **Duration:** 7 min
- **Started:** 2026-02-21T21:30:56Z
- **Completed:** 2026-02-21T21:37:49Z
- **Tasks:** 2
- **Files created:** 6

## Accomplishments

- SAST specification (HH-SENG-SAST-001) with Semgrep CE tool selection, 6-section structure covering tool selection through maintenance, centralized false positive baseline approach, and SARIF-based GitHub Security tab integration
- DAST specification (HH-SENG-DAST-001) with OWASP ZAP tool selection, dual scan modes (baseline for PRs, full for weekly scheduled), technology-specific false positive filters for Next.js/Qwik/Vercel, and authenticated scanning for CMS admin panels
- Dependency scanning specification (HH-SENG-DEP-001) with Dependabot as primary tool, vulnerability remediation SLAs (Critical 48h through Low next-release), three-tier license compliance framework, and CI audit gate via `pnpm audit`
- Reference SAST workflow (sast-semgrep.yml): GitHub Actions workflow scanning with p/javascript, p/typescript, p/owasp-top-ten rule sets, SARIF upload, and severity gate with override support
- Reference DAST workflow (dast-zap.yml): GitHub Actions workflow running ZAP baseline scan against Vercel preview deployments with PR comment reporting and severity gate
- Reference Dependabot config (dependabot.yml): v2 configuration with daily security checks, weekly version updates, minor/patch grouping, and 10-PR limit
- All specifications consistently enforce Critical/High blocking with `@security-override` label bypass requiring CTO + CISO approval
- All specifications traceable to Annex A controls: A.8.25, A.8.28, A.8.29 (SAST); A.8.25, A.8.29 (DAST); A.8.8, A.5.21, A.8.30 (dependency scanning)

## Task Commits

Each task was committed atomically:

1. **Task 1: Create SAST and DAST specification documents with reference configs** - `26ab5db` (feat)
2. **Task 2: Create dependency scanning specification with Dependabot config** - `b6e11f8` (feat)

## Files Created/Modified

- `security/sast/HH-SENG-SAST-001.md` -- SAST specification (12,136 bytes). 6 sections: Tool Selection (Semgrep CE with rationale and alternatives), Configuration (rule sets, severity mapping, custom rules), Pipeline Integration (GitHub Actions triggers, gate criteria), False Positive Management (centralized baseline, .semgrepignore, quarterly review), Reporting (SARIF, audit evidence, metrics), Maintenance (monthly version checks, annual specification review). Annex A refs: A.8.25, A.8.28, A.8.29.
- `security/dast/HH-SENG-DAST-001.md` -- DAST specification (12,649 bytes). 6 sections: Tool Selection (OWASP ZAP with rationale), Configuration (baseline/full scan modes, target URLs for Verity CMS/HH CMS/websites, authenticated scanning), Pipeline Integration (PR baseline + weekly full), False Positive Management (ZAP alert filters, technology-specific patterns for Next.js/Vercel), Reporting (Markdown PR comments, HTML artifacts), Maintenance (monthly ZAP updates, quarterly policy review). Annex A refs: A.8.25, A.8.29.
- `security/dependency-scanning/HH-SENG-DEP-001.md` -- Dependency scanning specification (11,xxx bytes). 6 sections: Tool Selection (Dependabot + pnpm audit supplementary), Configuration (daily security/weekly version, grouping, PR limit), Pipeline Integration (SLA-driven remediation: Critical 48h, High 7d, Medium 30d, Low next release), PR Blocking Criteria (pnpm audit --audit-level=critical, production vs dev distinction), License Compliance (Allowed/Warning/Blocked tiers with specific licenses), Maintenance (quarterly config review, annual SLA review). Annex A refs: A.8.8, A.5.21, A.8.30.
- `security/reference-configs/sast-semgrep.yml` -- GitHub Actions SAST workflow (5,273 bytes). Runs Semgrep CE in container, uploads SARIF, severity gate with @security-override label bypass. Commented for developer understanding.
- `security/reference-configs/dast-zap.yml` -- GitHub Actions DAST workflow (6,735 bytes). Runs ZAP baseline scan against Vercel preview URL, posts PR comment, severity gate with override support. Includes deployment wait logic.
- `security/reference-configs/dependabot.yml` -- Dependabot v2 configuration. npm ecosystem, daily security checks at 06:00 UTC, weekly version updates, minor/patch grouping, 10-PR limit, CTO as reviewer.

## Decisions Made

- **Semgrep CE over CodeQL:** Selected for free private repo support, faster CI scans, and zero infrastructure requirements. CodeQL noted as secondary option for public repos.
- **OWASP ZAP over Nuclei:** Selected for comprehensive DAST coverage including proxy-based scanning and API testing. Nuclei is faster for known CVEs but less comprehensive.
- **Dependabot over Renovate/Snyk:** Selected for native GitHub integration and zero cost. Renovate offers more configuration flexibility but is unnecessary at Startup phase.
- **Centralized false positive baseline:** `.semgrepignore` for path exclusions + `sast-baseline.md` for finding-level suppressions, keeping all suppression decisions auditable in central locations rather than scattered via inline comments.
- **Vulnerability remediation SLAs:** Critical 48h, High 7d, Medium 30d, Low next-release. Aligned with industry best practices and achievable given HH's operational capacity.
- **Three-tier license compliance:** Allowed/Warning/Blocked classification with specific license lists. LGPL placed in Warning (acceptable for library use) rather than Blocked.
- **Production vs devDependency blocking:** CI audit step distinguishes production from development dependencies. Only Critical production dependencies block the pipeline.

## Deviations from Plan

None -- plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None -- no external service configuration required. Reference configs are documentation artifacts ready to be copied into HH repos when needed.

## Next Phase Readiness

- SAST, DAST, and dependency scanning specifications complete the security tooling layer that Plan 04-05 (SBOM/Supply Chain) builds upon
- Reference configs can be dropped into any HH TypeScript repository to enable automated security scanning
- The `@security-override` label bypass procedure is consistent across all three specifications
- License compliance framework from the dependency scanning specification complements the SBOM license field analysis planned in 04-05
- All Annex A.8 controls referenced in these specifications (A.8.8, A.8.25, A.8.28, A.8.29, A.8.30) plus A.5.21 can now have their SoA implementation status updated from "planned" to "partially-implemented"

---
*Phase: 04-cto-and-appsec-agents-with-security-engineering*
*Completed: 2026-02-22*

## Self-Check: PASSED

All 6 created files verified on disk. Task commits (26ab5db, b6e11f8) verified in git log. SUMMARY.md exists.
