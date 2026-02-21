---
phase: 04-cto-and-appsec-agents-with-security-engineering
plan: 05
subsystem: security-engineering
tags: [sbom, supply-chain, cyclonedx, slsa, sigstore, cosign, provenance, pnpm, github-actions, dependency-governance]

# Dependency graph
requires:
  - phase: 04-cto-and-appsec-agents-with-security-engineering
    plan: 02
    provides: "AppSec Agent (producing agent for SBOM and supply chain artifacts)"
provides:
  - "SBOM generation pipeline specification (HH-SENG-SBOM-001) with CycloneDX tool selection and monthly review cycle"
  - "Supply chain security framework (HH-SENG-SCS-001) with SLSA Level 2, Sigstore/Cosign, dependency governance"
  - "Working GitHub Actions reference config for CycloneDX SBOM generation"
  - "Working GitHub Actions reference config for build provenance with Cosign signing"
affects: [phase-07-security-architecture, phase-08-audit-readiness, phase-10-agent-documentation]

# Tech tracking
tech-stack:
  added: [cyclonedx-node-pnpm, sigstore-cosign, actions-attest-build-provenance, softprops-action-gh-release]
  patterns: [sbom-generation-from-lockfile, keyless-signing-via-oidc, slsa-level-2-provenance, dependency-governance-criteria, monthly-sbom-review-cycle]

key-files:
  created:
    - security/sbom/HH-SENG-SBOM-001.md
    - security/supply-chain/HH-SENG-SCS-001.md
    - security/reference-configs/sbom-cyclonedx.yml
    - security/reference-configs/provenance.yml
  modified: []

key-decisions:
  - "CycloneDX pnpm generator selected over cdxgen and npm-sbom for lockfile-based exact version resolution"
  - "Sigstore/Cosign keyless signing selected over GPG for zero key management overhead with OIDC identity"
  - "SLSA Level 2 as Startup target; Level 3 deferred to Growth phase (requires isolated build environments)"
  - "Monthly human SBOM review cycle (first week of month) covering dependencies, licenses, vulnerabilities, supply chain risk"
  - "License whitelist approach: MIT, Apache-2.0, ISC, BSD-2-Clause, BSD-3-Clause, 0BSD, CC0-1.0; copyleft requires CTO+CISO approval"
  - "Provenance verification required before production deployment; verification failures block deployment"

patterns-established:
  - "SBOM-from-lockfile pattern: frozen-lockfile install + CycloneDX generation ensures exact version accuracy"
  - "Build-sign-attest pipeline: build -> generate SBOM -> sign SBOM with Cosign -> attest provenance with GitHub action"
  - "Dependency governance criteria: 5-point review (license, vulnerabilities, maintenance, downloads, supply chain indicators)"

requirements-completed: [SENG-03, SENG-04]

# Metrics
duration: 6min
completed: 2026-02-22
---

# Phase 4 Plan 05: SBOM Generation and Supply Chain Security Summary

**CycloneDX SBOM pipeline with pnpm lockfile generation, monthly review cycle, SLSA Level 2 provenance via GitHub Actions, and Sigstore/Cosign keyless artifact signing**

## Performance

- **Duration:** 6 min
- **Started:** 2026-02-21T21:32:09Z
- **Completed:** 2026-02-21T21:37:51Z
- **Tasks:** 2
- **Files created:** 4

## Accomplishments

- SBOM generation pipeline specification (HH-SENG-SBOM-001) with 6 sections: tool selection, configuration, pipeline integration, monthly review cycle, reporting, maintenance. Selected `@cyclonedx/cyclonedx-node-pnpm` for exact version resolution from `pnpm-lock.yaml`. Defines mandatory `--frozen-lockfile` enforcement.
- Supply chain security framework (HH-SENG-SCS-001) with 8 sections: strategy, SLSA requirements, artifact signing, provenance generation, dependency governance, verification process, Annex A control mapping, maintenance. Targets SLSA Level 2 with explicit evidence mapping for each level.
- Working CycloneDX SBOM generation reference config (`sbom-cyclonedx.yml`) targeting `helgeheupel-cms` with push-to-main and release triggers, frozen lockfile enforcement, artifact upload, and release asset attachment.
- Working build provenance reference config (`provenance.yml`) targeting `helgeheupel-cms` with the full build-sign-attest pipeline: build, SBOM generation, Cosign blob signing, GitHub attest-build-provenance, and signed artifact upload.
- Monthly human review cycle defined with specific criteria: new dependencies, removed dependencies, license changes, vulnerability status, version freshness, supply chain attack indicators.
- Dependency governance framework with 5-point new dependency review criteria and supply chain attack indicator monitoring.
- Step-by-step verification procedures documented for CTO and IT Pentester (cosign verify-blob, gh attestation verify).
- Annex A control traceability: SBOM spec maps to A.8.30, A.5.21, A.8.8; supply chain framework maps to A.5.21, A.5.23, A.8.25, A.8.30.
- Risk register cross-references to RISK-SUP-001, RISK-SUP-002, RISK-SUP-004.

## Task Commits

Each task was committed atomically:

1. **Task 1: Create SBOM generation pipeline specification with reference config** - `8b1d7c5` (feat)
2. **Task 2: Create supply chain security framework with provenance reference config** - `8d50550` (feat)

## Files Created/Modified

- `security/sbom/HH-SENG-SBOM-001.md` -- SBOM generation pipeline specification (253 lines). YAML frontmatter with document-id, classification, Annex A control refs, risk references. 6 sections: tool selection (CycloneDX pnpm generator with rationale and alternatives), configuration (JSON output, frozen-lockfile requirement, CLI command), pipeline integration (GitHub Actions triggers, artifact storage, naming), monthly review cycle (locked decision with 6 review criteria and process), reporting (evidence chain for audit), maintenance (tool versions, CycloneDX spec alignment, accuracy validation).
- `security/supply-chain/HH-SENG-SCS-001.md` -- Supply chain security framework (390 lines). YAML frontmatter with 4 Annex A controls and 3 risk references. 8 sections: supply chain strategy (SLSA L2 target with scope table and roadmap), SLSA level requirements (L1 satisfied, L2 target, L3 deferred with evidence chain), artifact signing (Sigstore/Cosign vs GPG comparison, signing flow, verification commands), provenance generation (attest-build-provenance@v2 with attestation contents), dependency governance (5-point review criteria, SBOM cross-reference, attack indicator monitoring), verification process (pre-deployment procedure, failure handling, responsibilities), Annex A mapping (4 controls with evidence artifacts and traceability chain), maintenance (review cadences, version management, Growth transition).
- `security/reference-configs/sbom-cyclonedx.yml` -- Working GitHub Actions SBOM workflow (89 lines). Triggers on push to main and release published. Steps: checkout, pnpm setup, Node.js setup with cache, frozen-lockfile install, CycloneDX generation, artifact upload (90-day retention), release asset upload (permanent). Extensive comments explaining each step.
- `security/reference-configs/provenance.yml` -- Working GitHub Actions provenance workflow (144 lines). Permissions: id-token write (OIDC), contents read, attestations write. Steps: checkout, pnpm setup, Node.js setup, frozen-lockfile install, pnpm build, CycloneDX SBOM generation, Cosign install, Cosign sign-blob (keyless signing with bundle output), attest-build-provenance@v2, upload signed SBOM and bundle. Extensive comments explaining OIDC flow, transparency log, and verification.

## Decisions Made

- **CycloneDX pnpm generator:** Selected `@cyclonedx/cyclonedx-node-pnpm` over `cdxgen` (universal but less precise for pnpm) and `npm-sbom` (npm-specific, not pnpm). The dedicated generator reads `pnpm-lock.yaml` directly for exact version resolution.
- **Sigstore/Cosign keyless signing:** Selected over GPG per research recommendation. Zero key management overhead, OIDC-based identity tied to GitHub Actions workflows, transparency log via Rekor, industry standard adopted by npm/Python/Kubernetes/Homebrew.
- **SLSA Level 2 target:** Level 2 (hosted build + signed provenance) is achievable at Startup with GitHub Actions. Level 3 (isolated builds, hermetic builds) deferred to Growth phase due to infrastructure requirements.
- **Monthly review cadence:** First week of each month, CTO reviewer with CISO advisory. Specific criteria documented (dependencies, licenses, vulnerabilities, freshness, supply chain risk).
- **License whitelist:** Permissive licenses (MIT, Apache-2.0, ISC, BSD variants, CC0) approved by default. Copyleft licenses (GPL, AGPL, LGPL) require CTO + CISO approval.
- **Verification-before-deployment:** Provenance and SBOM signature verification required before production promotion. Verification failures block deployment and escalate to CTO + CISO.

## Deviations from Plan

None -- plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None -- reference configs are ready to copy into target repositories. No external service configuration required for SBOM generation. Sigstore/Cosign signing is keyless (no secrets to configure).

## Next Phase Readiness

- SBOM generation pipeline specification and supply chain security framework complete the security engineering artifact set for Phase 4
- Reference configs for CycloneDX SBOM generation and SLSA Level 2 provenance are ready for deployment to `helgeheupel-cms` (copy to `.github/workflows/`)
- Together with the SAST/DAST specification (04-04) and threat modeling framework (04-03), Phase 4 security engineering artifacts provide evidence for Annex A.8 controls
- Monthly SBOM review cycle integrates with the Monthly Strategic meeting from the governance model
- All supply chain security artifacts traceable to risk register entries (RISK-SUP-001, RISK-SUP-002, RISK-SUP-004) and SoA controls

## Self-Check: PASSED

All 4 created files verified on disk. Task commits (8b1d7c5, 8d50550) verified in git log. SUMMARY.md exists.

---
*Phase: 04-cto-and-appsec-agents-with-security-engineering*
*Completed: 2026-02-22*
