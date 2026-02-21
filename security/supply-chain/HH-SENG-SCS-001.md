---
document-id: HH-SENG-SCS-001
title: "Supply Chain Security Framework"
version: v1.0
date: 2026-02-22
classification: Internal
author: AppSec Agent
reviewer: CTO, CISO
status: Draft
annex-a-controls:
  - A.5.21
  - A.5.23
  - A.8.25
  - A.8.30
risk-references:
  - RISK-SUP-001
  - RISK-SUP-002
  - RISK-SUP-004
---

# Supply Chain Security Framework

This framework defines the Helge Heupel Group's strategy for securing the software supply chain. It covers SLSA (Supply-chain Levels for Software Artifacts) compliance targeting, artifact signing with Sigstore/Cosign, build provenance generation, dependency governance, and verification procedures.

**Scope:** All production build artifacts from HH Group CI/CD pipelines. Applies to `helgeheupel-cms`, `verity-cms`, `helgeheupel-website`, and `verity-website` repositories.

**Reference target:** `helgeheupel-cms` (Payload CMS, pnpm, TypeScript, Next.js) is the initial proof-of-concept. The pattern transfers to all other HH repos.

**Companion documents:**
- SBOM Generation Pipeline Specification: `security/sbom/HH-SENG-SBOM-001.md`
- SAST Specification: `security/sast/HH-SENG-SAST-001.md`
- Reference configs: `security/reference-configs/provenance.yml`, `security/reference-configs/sbom-cyclonedx.yml`

---

## 1. Supply Chain Security Strategy

The Helge Heupel Group targets **SLSA Level 2** for all production builds. SLSA (Supply-chain Levels for Software Artifacts) is an industry framework that defines increasing levels of build integrity assurance.

### Target Level

**SLSA Build Level 2:** Hosted build platform with signed provenance.

This level requires:
1. **Hosted build platform:** All production builds execute on GitHub Actions (satisfies the requirement for a hosted, managed build service)
2. **Signed provenance:** Build provenance is generated and signed using GitHub's `actions/attest-build-provenance` action with Sigstore signing (satisfies the requirement for authenticated, non-falsifiable provenance)

### Scope

| Build Type | SLSA Level 2 | Rationale |
|-----------|-------------|-----------|
| Production builds from CI/CD (push to `main`) | Mandatory | These are the builds that produce deployment artifacts |
| Release builds (GitHub releases) | Mandatory | Releases are the formal distribution points |
| Local development builds | Excluded | Developer machines are not hosted build platforms; enforcing provenance locally provides no supply chain integrity |
| Preview deployments (Vercel/Cloudflare preview branches) | Aspirational | Provenance for previews is desirable but not mandatory at Startup phase |

### Strategic Roadmap

| Phase | SLSA Target | Key Milestone |
|-------|-------------|---------------|
| Startup (current) | Level 2 | Hosted builds + signed provenance for main/release builds |
| Growth | Level 3 | Hardened builds with isolated build environments, hermetic builds |
| Enterprise | Level 3+ | Full SLSA Build Level 3 with build-as-code and parameterless builds |

---

## 2. SLSA Level Requirements and Evidence

### Level 1: Build Process Defined

**Status: SATISFIED**

| Requirement | Implementation | Evidence |
|-------------|----------------|----------|
| Build process exists and is scripted | GitHub Actions workflow files in `.github/workflows/` | Workflow YAML files in repository |
| Build process is consistent | All builds use the same pnpm + Node.js setup steps | Workflow definition consistency |
| Build outputs are identifiable | Git commit SHA used in artifact naming | Artifact names include `${{ github.sha }}` |

### Level 2: Hosted Build Platform with Signed Provenance

**Status: TARGET (to be implemented)**

| Requirement | Implementation | Evidence |
|-------------|----------------|----------|
| Hosted build platform | GitHub Actions (ubuntu-latest runners) | GitHub Actions run logs |
| Signed provenance generated | `actions/attest-build-provenance@v2` with Sigstore signing | Attestation records in GitHub Attestation API |
| Provenance is non-falsifiable | Sigstore transparency log (Rekor) records all signing events | Rekor log entries searchable by artifact digest |
| Provenance is authenticated | GitHub OIDC identity used for Sigstore signing | Certificate identity matches `github.com/helgeheupel/*` |

### Level 3: Hardened Build Platform

**Status: DEFERRED to Growth**

| Requirement | Not Yet Satisfied | Growth Phase Plan |
|-------------|-------------------|-------------------|
| Isolated build environments | Shared GitHub-hosted runners | Self-hosted runners or GitHub Larger Runners with container isolation |
| Hermetic builds | Builds can access network during execution | Network-restricted build environments |
| Parameterless builds | Workflow inputs could influence build | Locked workflow definitions with no runtime parameters |

### Evidence Chain

For each production build, the following evidence artifacts exist:

1. **GitHub Actions workflow run:** Proves the build executed on a hosted platform (SLSA L1+L2)
2. **Build provenance attestation:** Sigstore-signed in-toto attestation proving what was built, from what source, on what platform (SLSA L2)
3. **SBOM:** CycloneDX JSON documenting all dependencies consumed during the build (supply chain visibility)
4. **Signed SBOM:** Cosign-signed SBOM proving the SBOM was generated during the attested build, not modified afterward

---

## 3. Artifact Signing

### Technology: Sigstore/Cosign Keyless Signing via OIDC

**Selected: Sigstore/Cosign with keyless signing.**

Sigstore provides a certificate authority, transparency log, and signing tooling purpose-built for software supply chain security. Cosign is the signing and verification CLI tool within the Sigstore ecosystem.

### Rationale

| Factor | Sigstore/Cosign | GPG (Alternative) |
|--------|----------------|-------------------|
| Key management | None (keyless via OIDC) | Manual key generation, rotation, backup, revocation, distribution |
| CI/CD integration | Native via `sigstore/cosign-installer@v3` and GitHub OIDC | Requires secret storage of GPG private key in GitHub Secrets |
| Transparency | All signing events recorded in Rekor transparency log | No transparency log; verification depends on key distribution |
| Identity | Tied to GitHub Actions workflow identity via OIDC | Tied to a GPG key that could be compromised or shared |
| Industry adoption | npm, Python, Kubernetes, Homebrew all use Sigstore | Legacy standard; declining adoption for CI/CD use cases |
| Startup overhead | Zero (no keys to manage) | Significant (key ceremony, rotation schedule, backup procedures) |

**Decision: Sigstore/Cosign is the clear choice for HH Group.** GPG would only be justified if HH needed to sign artifacts for recipients who cannot verify Sigstore signatures. Given HH's technology-sector positioning and GitHub-based workflow, this scenario is unlikely.

### What Gets Signed

| Artifact | Signing Tool | Identity |
|----------|-------------|----------|
| SBOM files (`sbom.cdx.json`) | Cosign `sign-blob` | GitHub Actions OIDC token |
| Build provenance attestations | `actions/attest-build-provenance` (uses Sigstore internally) | GitHub Actions OIDC token |

### Signing Flow

1. GitHub Actions workflow requests an OIDC token from GitHub's identity provider
2. Cosign uses the OIDC token to obtain a short-lived signing certificate from Sigstore's Fulcio CA
3. The artifact is signed with the ephemeral private key
4. The signing event (certificate, signature, artifact digest) is recorded in Sigstore's Rekor transparency log
5. The private key is discarded (ephemeral; never stored)

### Verification

Verify signed artifacts using `cosign verify-blob`:

```bash
# Verify a signed SBOM
cosign verify-blob sbom.cdx.json \
  --bundle sbom.cdx.json.bundle \
  --certificate-identity-regexp 'https://github.com/helgeheupel/.*' \
  --certificate-oidc-issuer https://token.actions.githubusercontent.com
```

The verification confirms:
- The signature is valid for the artifact content
- The signing certificate was issued to a GitHub Actions workflow in a `helgeheupel/*` repository
- The signing event is recorded in the Rekor transparency log

---

## 4. Provenance Generation

### Tool

**`actions/attest-build-provenance@v2`** (GitHub native action)

This action generates SLSA Build Level 2 provenance attestations using the in-toto attestation framework with Sigstore signing. It is maintained by GitHub and requires no additional infrastructure.

### Attestation Format

- **Framework:** in-toto attestation (SLSA provenance predicate)
- **Signing:** Sigstore (automatically handled by the action)
- **Storage:** GitHub Attestation API (attestations are stored and queryable via `gh attestation verify`)

### Trigger

Provenance is generated on every push to `main` that produces build artifacts. This includes:
- Regular merges to `main` (standard development workflow)
- Release preparation commits

### Artifacts Receiving Provenance

| Repository | Build Output | Subject Path |
|-----------|-------------|--------------|
| `helgeheupel-cms` | Next.js build output | `.next/standalone/**` |
| `verity-cms` | Next.js build output | `.next/standalone/**` |
| `helgeheupel-website` | Static site output | `dist/**` |
| `verity-website` | Static site output | `dist/**` |

**Note:** The `subject-path` for `actions/attest-build-provenance` must point to specific files. For Next.js applications using standalone output mode, the standalone directory contains the deployment-ready artifacts. For static sites, the `dist/` directory contains the built assets.

### Attestation Contents

Each provenance attestation records:
- **Builder:** GitHub Actions (workflow URL, runner environment)
- **Source:** Repository, branch, commit SHA, commit timestamp
- **Build:** Workflow name, job name, step sequence
- **Materials:** Input artifacts (source code digest, dependencies)
- **Output:** Subject artifact digests

### Attestation Storage

Attestations are stored in the GitHub Attestation API. They are:
- Automatically associated with the repository
- Queryable via `gh attestation verify` CLI
- Publicly verifiable (for public repositories)

---

## 5. Dependency Governance

### New Dependency Review

Before adding any new production dependency to an HH repository, the following review criteria apply:

| Criterion | Requirement | Action on Failure |
|-----------|-------------|-------------------|
| **License compatibility** | License must be on the HH whitelist (MIT, Apache-2.0, ISC, BSD-2-Clause, BSD-3-Clause, 0BSD, CC0-1.0) | Block: copyleft licenses (GPL, AGPL, LGPL) require CTO + CISO approval |
| **Known vulnerabilities** | No open Critical or High severity CVEs at time of addition | Block: do not add dependency until vulnerabilities are resolved upstream |
| **Maintenance status** | Last commit within 12 months | Warning: unmaintained dependencies require CTO approval with documented justification |
| **Download volume** | Proxy for community trust; compare to alternatives | Informational: low-download packages are not blocked but noted for supply chain risk |
| **Supply chain attack indicators** | Check for: single maintainer, recent ownership transfer, typosquatting similarity to popular packages | Block: any positive indicator requires CTO + CISO review before addition |

### SBOM Cross-Reference

Every dependency listed in the SBOM must be traceable to a `pnpm-lock.yaml` entry. If the SBOM contains components not present in the lockfile (or vice versa), investigate the discrepancy:
- Extra SBOM components may indicate build-time metadata injection (benign)
- Missing SBOM components may indicate the generator is not capturing all dependencies (investigate configuration)

### Supply Chain Attack Indicators

Monitor for the following indicators that a dependency may have been compromised:

| Indicator | Detection Method | Response |
|-----------|-----------------|----------|
| Single-maintainer package with high dependency count | npm registry metadata review during monthly SBOM review | Flag for CTO review; evaluate alternatives |
| Recent ownership transfer | GitHub repository transfer history; npm maintainer change notifications | Immediate review of recent releases; consider pinning to pre-transfer version |
| Typosquatting name similarity | Manual review during dependency addition; automated checks via Dependabot | Remove immediately; report to npm security |
| Unexpected post-install scripts | `pnpm install` output review; SBOM metadata | Block until script is reviewed and understood |
| Anomalous version jump | Dependency diff review during monthly SBOM review | Review changelog; compare code changes; consider version pinning |

---

## 6. Provenance Verification Process

### Pre-Deployment Verification

Before promoting any build artifact to production, verify its provenance attestation.

**Procedure for CTO and IT Pentester/Super Admin:**

```bash
# Step 1: Verify build provenance for a specific artifact
gh attestation verify <artifact-path> \
  --owner helgeheupel \
  --repo helgeheupel-cms

# Expected output: Verification successful
# The output confirms the artifact was built by a GitHub Actions workflow
# in the helgeheupel/helgeheupel-cms repository on a specific commit.
```

```bash
# Step 2: Verify SBOM signature
cosign verify-blob sbom.cdx.json \
  --bundle sbom.cdx.json.bundle \
  --certificate-identity-regexp 'https://github.com/helgeheupel/.*' \
  --certificate-oidc-issuer https://token.actions.githubusercontent.com

# Expected output: Verified OK
# The output confirms the SBOM was signed by a GitHub Actions workflow
# in a helgeheupel/* repository and recorded in the Sigstore transparency log.
```

### SBOM Verification for Compliance Reporting

Before using an SBOM for compliance reporting or audit evidence:

1. Verify the SBOM signature using the Cosign command above
2. Confirm the SBOM was generated from the same commit as the deployed artifact (compare git SHA in SBOM metadata)
3. Validate that the SBOM component count is reasonable for the repository (compare to `pnpm list` output)

### Verification Failure Handling

| Failure Type | Action |
|-------------|--------|
| Provenance verification fails | **Block deployment.** Escalate to CTO + CISO. Investigate: was the artifact built outside CI/CD? Was the workflow modified? |
| SBOM signature verification fails | **Block use of SBOM for compliance.** Re-generate SBOM from the verified build. Investigate: was the SBOM modified after generation? |
| Provenance exists but source commit does not match deployment | **Block deployment.** The wrong artifact may be deploying. Verify the release/deployment pipeline is pointing to the correct build. |
| Verification tools unavailable (Cosign not installed, network issues) | **Do not skip verification.** Wait until tools are available. Notify CTO of delay. |

### Verification Responsibilities

| Role | Verification Duty |
|------|-------------------|
| CTO (Helge Heupel) | Verify provenance before production promotion for all releases |
| IT Pentester / Super Admin | Verify provenance and SBOM signatures during security assessments |
| CI/CD Pipeline (automated) | Automated provenance generation; automated SBOM signing; manual verification before deployment |

---

## 7. Annex A Control Mapping

Each Annex A control is mapped to specific evidence artifacts produced by this framework.

| Control ID | Control Name | Evidence Artifact | Evidence Type |
|------------|-------------|-------------------|---------------|
| A.5.21 | Managing Information Security in the ICT Supply Chain | This framework document + provenance attestation records + SBOM + monthly review log | Framework specification, attestation records, SBOM JSON, review log entries |
| A.5.23 | Information Security for Use of Cloud Services | Provenance verification for artifacts deployed to Vercel and Cloudflare Pages | Provenance attestation verifying build source before cloud deployment |
| A.8.25 | Secure Development Life Cycle | SLSA Level 2 integration into CI/CD pipeline | GitHub Actions workflow with provenance generation step |
| A.8.30 | Outsourced Development | Dependency governance criteria + SBOM generation + monthly review cycle | Dependency review records, SBOM JSON, review log |

### Evidence Chain

For each control, auditors can trace:

```
Risk Register (risks/RISK-SUP-*.yml)
  --> Supply Chain Framework (this document)
    --> Reference Config (security/reference-configs/provenance.yml)
      --> GitHub Actions Run (attestation in GitHub Attestation API)
        --> Sigstore Transparency Log (Rekor entry)
```

And for dependency governance:

```
Risk Register (RISK-SUP-004)
  --> SBOM Specification (security/sbom/HH-SENG-SBOM-001.md)
    --> SBOM JSON (sbom.cdx.json per release)
      --> Monthly Review Log (security/sbom/review-log.md)
        --> Action Items and Remediation Records
```

---

## 8. Maintenance

### Review and Update Cadences

| Activity | Cadence | Responsible |
|----------|---------|-------------|
| SLSA level assessment against specification updates | Annual | CTO with CISO advisory |
| Sigstore/Cosign version updates | Monthly (check for new releases) | CTO |
| Provenance workflow review | Quarterly | CTO |
| Dependency governance criteria review | Semi-annual | CTO with CISO advisory |
| `actions/attest-build-provenance` version check | Monthly | CTO |

### SLSA Specification Monitoring

The SLSA specification evolves. The CTO reviews SLSA specification updates annually (or when major versions are released) to assess:
- Changes to Level 2 requirements that may require workflow updates
- New requirements introduced at Level 3 that align with Growth phase planning
- Deprecation of current approaches

### Cosign Version Management

Cosign v2+ is the current major version. Monitor for:
- New Cosign releases that change the signing/verification API
- Changes to the `cosign-installer` GitHub Action
- Sigstore infrastructure changes (Fulcio CA, Rekor transparency log)

Update the provenance reference config when Cosign releases new major versions. Test in a non-production branch before updating the reference config.

### Growth Phase Transition

When transitioning from Startup to Growth phase:
- Evaluate SLSA Level 3 feasibility (self-hosted runners, hermetic builds)
- Assess Sigstore private deployment for additional transparency control
- Expand provenance generation to preview deployments
- Integrate with NorthGRC for automated compliance evidence collection

---

## Risk Register Cross-References

| Risk ID | Risk Title | How This Framework Mitigates |
|---------|-----------|------------------------------|
| RISK-SUP-001 | Microsoft Azure service disruption or pricing change | Provenance verification confirms artifacts built correctly before deployment to Azure-hosted services |
| RISK-SUP-002 | Anthropic Claude API availability or policy change | Supply chain framework provides structure for evaluating and governing all vendor dependencies, including AI providers |
| RISK-SUP-004 | Open-source dependency vulnerability in Verity product supply chain | Dependency governance criteria + SBOM generation + monthly review cycle provide detection and management of dependency vulnerabilities |

---

*Document: security/supply-chain/HH-SENG-SCS-001.md*
*Author: AppSec Agent*
*Classification: Internal*
