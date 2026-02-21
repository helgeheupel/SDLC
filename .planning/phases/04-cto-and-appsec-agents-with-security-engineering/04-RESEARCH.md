# Phase 4: CTO and AppSec Agents with Security Engineering - Research

**Researched:** 2026-02-21
**Domain:** Agent construction (Claude Code CLAUDE.md), threat modeling (STRIDE/LINDDUN), SAST/DAST tooling, SBOM generation, supply chain security (SLSA/Sigstore)
**Confidence:** HIGH

## Summary

Phase 4 delivers two new agents (CTO and AppSec) and five security engineering artifact sets. The agents follow the proven CISO Agent construction pattern from Phase 2 (02-01-PLAN.md): YAML frontmatter + 7-section system prompt + `reference/` directory with `domain-context.md` for progressive disclosure. The security engineering artifacts are the operational arm of the IS Policy and risk register produced in Phases 2-3: threat models provide the risk-informed basis for SAST/DAST tool selection, SBOM generation closes the supply chain visibility gap identified in RISK-SUP-004, and SLSA Level 2 provenance satisfies the artifact integrity controls in Annex A.8.

The research confirms that the TypeScript/Next.js/Qwik stack has mature, open-source security tooling. Semgrep is the recommended SAST tool (open-source CLI, native TypeScript/JavaScript support, fast CI integration, SARIF output for GitHub code scanning). OWASP ZAP is the recommended DAST tool (open-source, GitHub Actions integration, API scanning support). CycloneDX has dedicated pnpm and npm generators for SBOM. GitHub Actions natively supports SLSA Level 2 provenance via `actions/attest-build-provenance`. Sigstore/Cosign provides keyless artifact signing via OIDC. All tools are open-source and free for the HH use case.

Threat models are stored as YAML files in Git, consistent with the risk register pattern from Phase 3. The YAML schema is designed so the SoA consolidation script pattern (Phase 3, 03-04) can consume threat model control references for traceability. Two threat models are produced: the 7-agent Claude Code system (an AI system under AIMS governance) and one HH product (Verity CMS as the most concrete target). STRIDE is primary; LINDDUN is applied only to systems processing personal data.

**Primary recommendation:** Structure Phase 4 as 5-6 plans mirroring the artifact dependency chain: (1) CTO Agent construction, (2) AppSec Agent construction, (3) Threat modeling framework + applied threat models, (4) SAST/DAST specification + reference config, (5) SBOM + supply chain security framework. Plans 1-2 can run in parallel (Wave 1). Plans 3-5 run sequentially or in Wave 2 since the AppSec Agent should exist before producing its deliverables.

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

#### Agent scope boundaries
- CTO Agent has a **security-architecture** dual identity: equal weight on architecture decisions/ADRs AND security engineering. Technical security is core to the CTO role, not secondary.
- AppSec Agent is the **operational arm of the CISO Agent**: CISO defines governance and policy, AppSec executes and produces technical security artifacts. AppSec consumes CISO policies as constraints.
- **AppSec owns all security engineering artifacts**: threat models, SAST/DAST, SBOM, supply chain security. CTO focuses on architecture decisions, ADRs, and AI system design.
- Both agents follow the **same construction pattern as the CISO Agent**: CLAUDE.md system prompt + reference/ directory with domain-context.md for progressive disclosure.

#### Threat modeling approach
- **STRIDE primary, LINDDUN light**: Full STRIDE analysis for all modeled systems. LINDDUN only for systems processing personal data (GDPR scope).
- **YAML-in-Git format**: Threat models stored as YAML files, consistent with the risk register pattern from Phase 3. Machine-readable, version-controlled.
- **Scope**: Model the 7-agent Claude Code system AND one HH product (e.g., Verity or HH website) to validate the framework works for different system types.
- **Auditor-ready depth**: Full data flow diagrams, trust boundaries, per-component threat enumeration, mitigations with Annex A control references. Ready for Stage 1 audit.

#### Security tooling gates
- **Specs + reference config**: Specification documents for tool selection, criteria, and integration points, plus one reference GitHub Actions config as proof-of-concept.
- **Block on Critical/High**: Critical and High severity findings block the pipeline. Medium and Low are advisory only.
- **Tool choice**: Research recommends the best fit for the TypeScript/Next.js/Qwik stack, budget (open source preferred), and GitHub integration.

#### Supply chain ambition
- **SLSA Level 2**: Hosted build platform with signed provenance. Requires CI/CD generating attestations.
- **SBOM review**: Monthly human review cycle tracking new dependencies, license changes, and vulnerability trends. Automated vulnerability scanning between reviews.
- **Working pipeline + spec**: A working CycloneDX SBOM generation config for one existing HH repo (e.g., Verity or HH CMS) plus the specification document.

### Claude's Discretion
- False positive handling approach for SAST findings (inline suppression vs centralized baseline)
- Artifact signing technology choice (Sigstore/Cosign, GPG, or other based on research)
- Specific SAST/DAST tool selection (research-driven recommendation)
- CTO Agent domain-context.md structure and content depth
- AppSec Agent domain-context.md structure and content depth

### Deferred Ideas (OUT OF SCOPE)
None -- discussion stayed within phase scope
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| AGNT-02 | CTO Agent (Architecture + AI Engineering) created with PSA + CAIE domain expertise -- can spawn subagents for architecture analysis, code review, technology evaluation | Agent definition template in `protocols/interaction-model.md` Section 6 provides the mandatory 7-section structure. Agent qualification profile in `protocols/agent-qualifications.md` Section 2.2 defines the CTO persona (4 source archetypes: PSA + CAIE + PACA + partial PUX), 10 primary ISO standards, and 5 SDLC-Growth-v2 section ownerships. CISO Agent (383 lines) provides the construction pattern. |
| AGNT-07 | AppSec Agent (Product Security Engineering) created -- can spawn subagents for threat modeling, SAST/DAST config, SBOM generation, supply chain analysis | Agent qualification profile in `protocols/agent-qualifications.md` Section 2.7 defines the AppSec persona (new role + partial CISO/EU-CA + partial PACA), 0 primary + 1 shared ISO standard ownership, and 2 SDLC section ownerships (security testing in 7.4, implementation in 9). AppSec is the lightest agent by standards load but heaviest by artifact output. |
| SENG-01 | Threat modeling framework produced -- STRIDE/LINDDUN templates, threat-model-as-code approach | STRIDE methodology well-documented in OWASP and Microsoft resources. LINDDUN privacy threat model documented at linddun.org. YAML-in-Git format follows the risk register pattern from Phase 3 (03-02). Threat models must reference Annex A controls for SoA traceability. Two applied threat models validate the framework. |
| SENG-02 | SAST/DAST configuration produced -- tool selection, pipeline integration, pass/fail criteria | Semgrep (SAST) and OWASP ZAP (DAST) are the recommended open-source tools for the TypeScript/Next.js/Qwik stack. Both have GitHub Actions integrations. SARIF output format enables GitHub Security tab integration. Critical/High block; Medium/Low advisory. |
| SENG-03 | SBOM generation pipeline defined -- CycloneDX format, per-release generation, dependency tracking | CycloneDX has dedicated pnpm generator (`@cyclonedx/cyclonedx-node-pnpm`) and npm generator (`@cyclonedx/cyclonedx-npm`). HH repos use pnpm. cdxgen is a universal alternative. Working config targets one existing HH repo (verity-cms or helgeheupel-cms). |
| SENG-04 | Supply chain security framework produced -- SLSA level targeting, artifact signing (Sigstore/Cosign), provenance verification | GitHub Actions `actions/attest-build-provenance` provides SLSA Build Level 2 out of the box. Sigstore/Cosign provides keyless signing via OIDC. npm provenance support is GA. Working reference config for one HH repo. |
| SENG-05 | Dependency scanning setup defined -- automated PR blocking on Critical/High CVEs, license compliance | GitHub Dependabot (free) provides automated dependency vulnerability alerts and PRs. Can be combined with `npm audit` / Semgrep Supply Chain. License compliance via CycloneDX SBOM license field analysis. |
</phase_requirements>

## Standard Stack

This phase covers two domains: (1) agent construction (patterns, not libraries) and (2) security engineering tooling.

### Core: Agent Construction Pattern

| Component | Source | Purpose | Why Standard |
|-----------|--------|---------|--------------|
| 7-section CLAUDE.md template | `protocols/interaction-model.md` Section 6 | Agent system prompt structure | Mandatory template; all agents must follow it |
| YAML frontmatter | `protocols/interaction-model.md` Section 6 | Agent metadata (name, description, tools, model) | Parsed by Claude Code for agent loading |
| `reference/domain-context.md` | CISO Agent pattern (Phase 2) | Progressive disclosure of HH-specific context | Keeps prompt lean; loaded on demand |
| `protocols/agent-qualifications.md` | Phase 1 | Persona composite, ISO ownership, SDLC sections | Authoritative source for agent expertise |

### Core: Security Tooling

| Tool | Version | Purpose | Why This Tool |
|------|---------|---------|---------------|
| Semgrep CE (CLI) | Latest (LGPL-2.1) | SAST for TypeScript/JavaScript | Open-source; native TS/JS support; 2000+ community rules; fast CI scans (~10s median); SARIF output; pattern-based rules readable by developers; supports custom rules. Free for all use. |
| OWASP ZAP | Latest (Apache 2.0) | DAST for web applications | Open-source; most widely used DAST tool; GitHub Actions support; API scanning; proxy + automated scanner; Docker-based CI integration; active OWASP maintenance. Free for all use. |
| CycloneDX pnpm generator | `@cyclonedx/cyclonedx-node-pnpm` | SBOM generation for pnpm projects | Official CycloneDX tool for pnpm; produces CycloneDX 1.5+ JSON/XML; includes license data; approaches OWASP SCVS Level 2. HH repos use pnpm. |
| GitHub `actions/attest-build-provenance` | v2+ | SLSA Level 2 build provenance | GitHub's native SLSA integration; generates Sigstore-signed in-toto attestations; free for public repos, included in GitHub Enterprise. |
| Sigstore Cosign | v2.4+ | Artifact signing and verification | Keyless signing via OIDC (GitHub Actions identity); no key management overhead; industry standard for supply chain security; verifies npm provenance and GitHub attestations. |
| GitHub Dependabot | Built-in | Dependency vulnerability scanning | Free; integrated with GitHub; automated PRs for vulnerable dependencies; supports npm/pnpm; configurable alerting. |

### Supporting

| Tool | Version | Purpose | When to Use |
|------|---------|---------|-------------|
| Bearer CLI | Latest (open-source) | Privacy-focused SAST | When scanning for GDPR-sensitive data flows; supports TypeScript; tracks 122 sensitive data types; produces RoPA input. Complements Semgrep for LINDDUN privacy analysis. |
| cdxgen | v12+ | Universal SBOM generator | Alternative to dedicated pnpm generator when multi-language SBOM needed or when pnpm-specific tool has issues. |
| CodeQL | GitHub-provided | Deep semantic SAST | For public repos (free CodeQL via GitHub). More thorough data-flow analysis than Semgrep but slower. Use as secondary analysis, not primary CI gate. |
| Nuclei | Latest | Template-based vulnerability scanning | For targeted known-vulnerability checks. Complements ZAP for specific CVE verification. Lower priority than ZAP for initial setup. |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Semgrep CE | CodeQL | CodeQL has deeper data-flow analysis but is slower for CI and requires GitHub Advanced Security for private repos (paid). Semgrep CE is fully free for all repos. |
| Semgrep CE | SonarQube Community | SonarQube has broader quality analysis but requires server infrastructure. Semgrep is CLI-only, zero infrastructure. |
| OWASP ZAP | Nuclei | Nuclei is faster for known-vulnerability scanning but lacks ZAP's proxy-based interactive testing and comprehensive DAST scanning. |
| CycloneDX pnpm | npm-sbom | npm-sbom supports both CycloneDX and SPDX but is npm-specific. HH uses pnpm; dedicated pnpm generator is the correct choice. |
| Sigstore/Cosign | GPG signing | GPG requires manual key management, rotation, and distribution. Sigstore is keyless via OIDC, zero key management overhead, industry-standard for CI/CD. |

## Architecture Patterns

### Pattern 1: Agent Construction (CISO Agent Pattern)

**What:** Each agent is a `CLAUDE.md` file at `agents/[name]/CLAUDE.md` with a `reference/` directory containing `domain-context.md` and any domain-specific reference files.

**When to use:** For all 7 agents. Proven in Phase 2 with the CISO Agent (383 lines, 8 sections including frontmatter).

**Structure:**
```
agents/
  cto/
    CLAUDE.md              # 7-section system prompt + frontmatter
    reference/
      domain-context.md    # HH-specific technical context
  appsec/
    CLAUDE.md              # 7-section system prompt + frontmatter
    reference/
      domain-context.md    # HH-specific security engineering context
```

**Critical dimensions from CISO Agent analysis:**
- CISO Agent: 383 lines, 5 source archetypes, 13 primary ISO standards, 16 core responsibilities
- CTO Agent: estimated 300-400 lines, 4 source archetypes (PSA + CAIE + PACA + partial PUX), 10 primary ISO standards
- AppSec Agent: estimated 250-350 lines, 0 primary + 1 shared ISO standard, but heavy on deliverable descriptions (5 major artifact sets)

**Key elements per CISO Agent pattern:**
1. YAML frontmatter: `name`, `description`, `tools`, `model`
2. Identity section: persona composite, expertise domains, professional background
3. Core Responsibilities: numbered, HH-specific (naming entities, systems, personnel)
4. SDLC-Growth-v2 Context: owned sections, current operating phase, Growth triggers
5. Output Standards: audit readiness, document format, framework references
6. Collaboration Protocol: HANDOFF.md, sign-off workflow, cross-domain dependencies
7. Boundaries: explicit "Do NOT" list specific to the agent's domain
8. Subagent Spawning: task types, model selection, maxTurns, tools
9. Reference Materials: progressive disclosure file list

### Pattern 2: Threat Model YAML Schema

**What:** Per-system threat model stored as YAML in Git, with STRIDE categories, per-component threat enumeration, and Annex A control references.

**When to use:** For every system modeled. Consistent with risk register YAML pattern from Phase 3.

**Schema (recommended):**
```yaml
---
threat-model-id: TM-[SYSTEM]-001
system-name: "System Name"
version: v1.0
date: 2026-02-21
classification: Confidential
author: AppSec Agent
reviewer: [CTO, CISO]
status: Draft
methodology: STRIDE
linddun-applied: true|false  # true only if personal data processed
---

system-description: >
  2-3 sentence description of the system being modeled.

data-flows:
  - id: DF-001
    name: "Data Flow Name"
    source: "Component A"
    destination: "Component B"
    data-type: "Description of data"
    classification: Internal|Confidential|Secret
    trust-boundary-crossing: true|false

trust-boundaries:
  - id: TB-001
    name: "Trust Boundary Name"
    description: "What separates trusted from untrusted"
    components-inside: [list]
    components-outside: [list]

components:
  - id: COMP-001
    name: "Component Name"
    type: process|datastore|external-entity
    technology: "Specific technology"
    threats:
      - threat-id: T-001
        category: Spoofing|Tampering|Repudiation|Information-Disclosure|Denial-of-Service|Elevation-of-Privilege
        description: "Specific threat description"
        likelihood: 1-5
        impact: 1-5
        risk-score: calculated
        mitigations:
          - control-id: A.X.Y
            description: "How this Annex A control mitigates the threat"
            status: implemented|planned|not-started
        residual-risk: low|medium|high

# LINDDUN section (only when linddun-applied: true)
linddun-threats:
  - threat-id: LT-001
    category: Linkability|Identifiability|Non-repudiation|Detectability|Disclosure|Unawareness|Non-compliance
    component-id: COMP-001
    description: "Privacy-specific threat"
    gdpr-article: "Art. X"
    mitigations:
      - control-id: A.X.Y
        description: "Privacy control"
```

**Traceability design:** The `control-id` fields in threat model mitigations use the same Annex A control IDs as the SoA YAML files (`soa/A.X.Y.yml`). A consolidation script (following the `soa/scripts/generate-soa.js` pattern) can read threat models and cross-reference control coverage. This satisfies ISO 27001 cl. 6.1.2 (risk assessment informing control selection) and provides auditors with a clear chain: risk register -> threat model -> control -> SoA -> evidence.

### Pattern 3: Security Tooling Specification Document

**What:** A specification document for each security tool that defines selection criteria, configuration, integration points, pass/fail criteria, and maintenance procedures.

**When to use:** For SAST, DAST, SBOM, and supply chain security tooling.

**Structure:**
```markdown
---
document-id: HH-SENG-[TYPE]-001
title: "[Tool Type] Specification"
...
---

# [Tool Type] Specification

## 1. Tool Selection
### Selection Criteria
### Selected Tool and Rationale
### Alternatives Evaluated

## 2. Configuration
### Base Configuration
### Custom Rules/Policies
### Severity Classification

## 3. Pipeline Integration
### GitHub Actions Workflow
### Trigger Conditions
### Gate Criteria (pass/fail)

## 4. False Positive Management
### Suppression Approach
### Review Process
### Baseline Management

## 5. Reporting
### Output Format
### Evidence for Audit
### Metrics and Trends

## 6. Maintenance
### Update Cadence
### Rule/Signature Updates
### Annual Review
```

### Pattern 4: Reference GitHub Actions Config

**What:** A working GitHub Actions workflow file that can be dropped into any HH repo to enable security scanning.

**When to use:** As proof-of-concept for SAST, DAST, SBOM generation, and provenance attestation.

**Example structure (single composite workflow):**
```yaml
name: Security Pipeline
on:
  pull_request:
    branches: [main]
  push:
    branches: [main]

permissions:
  contents: read
  security-events: write
  id-token: write       # For Sigstore OIDC
  attestations: write   # For provenance

jobs:
  sast:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run Semgrep
        uses: semgrep/semgrep-action@v1
        with:
          config: p/javascript p/typescript
      # Upload SARIF to GitHub Security tab

  sbom:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Install pnpm
        uses: pnpm/action-setup@v4
      - name: Install dependencies
        run: pnpm install --frozen-lockfile
      - name: Generate SBOM
        run: npx @cyclonedx/cyclonedx-node-pnpm --output-file sbom.json
      - name: Upload SBOM
        uses: actions/upload-artifact@v4

  provenance:
    needs: [sast, sbom]
    runs-on: ubuntu-latest
    steps:
      - uses: actions/attest-build-provenance@v2
```

### Anti-Patterns to Avoid

- **Prompt bloat in agent CLAUDE.md:** CISO Agent is 383 lines and effective. Research warns that exceeding 2000 lines degrades response quality. CTO and AppSec agents should stay under 400 lines. Use `reference/` directory for detailed content.

- **Generic threat models:** Threat models that list STRIDE categories without system-specific components are useless for auditors. Every threat must reference a specific HH component (e.g., "Claude Code CISO Agent" not "AI system"), specific data flow (e.g., "prompt submission from CEO to Anthropic API"), and specific Annex A control.

- **Security theater configs:** A GitHub Actions workflow that runs but never blocks a PR is security theater. The reference config must enforce Critical/High blocking with documented bypass procedures (e.g., `@security-override` label requiring CTO + CISO approval).

- **SBOM without review process:** Generating an SBOM that sits unread in an artifact store provides no security value. The specification must define the monthly review cycle, who reviews, and what triggers action (new Critical CVE, license change to copyleft, dependency with known supply chain attack history).

- **Over-scoping LINDDUN:** Applying full LINDDUN analysis to every system wastes effort. LINDDUN is only for systems processing personal data (GDPR scope). The Claude Code agent system processes SDLC artifacts, not personal data; LINDDUN does not apply to it. Verity VE/EAM may process enterprise data that includes personal data; LINDDUN applies there.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| SBOM generation | Custom dependency parser | CycloneDX pnpm/npm generators | Hundreds of edge cases in npm dependency resolution; transitive dependencies, peer dependencies, optional dependencies, workspace protocols. Official generators handle all of these. |
| Vulnerability scanning | Custom CVE database lookup | GitHub Dependabot + npm audit | CVE databases update continuously; false positive management requires maintained toolsets; Dependabot auto-creates fix PRs. |
| Build provenance | Custom attestation format | `actions/attest-build-provenance` | In-toto format with Sigstore signing is the industry standard. GitHub's action handles key management, certificate issuance, and transparency log submission automatically. |
| SAST rule writing | Custom regex scanners | Semgrep community rules + custom rules | Semgrep's 2000+ community rules cover OWASP Top 10 for JavaScript/TypeScript. Write custom rules only for HH-specific patterns (e.g., patent data leak detection). |
| Artifact signing | Custom PKI | Sigstore/Cosign keyless signing | Key management, rotation, revocation, and distribution are complex. Sigstore eliminates all of this with OIDC-based ephemeral certificates. |
| Threat model diagrams | ASCII art in Markdown | Text-based DFD description in YAML | Data flow diagrams in threat models should be described as structured YAML (source, destination, trust boundary), not drawn. Auditors need the content (what crosses what boundary), not the picture. |

**Key insight:** Security tooling is a domain where the gap between "looks like it works" and "actually works" is enormous. Custom solutions miss edge cases that the maintained tools handle. The research strongly recommends using established tools with HH-specific configuration, not building custom alternatives.

## Common Pitfalls

### Pitfall 1: Agent Prompt Conflation
**What goes wrong:** Combining security engineering responsibilities into the CTO agent prompt instead of keeping AppSec separate.
**Why it happens:** CTO has a "security-architecture dual identity" per the locked decision, which creates temptation to give CTO the security tooling artifacts too.
**How to avoid:** Strict boundary: CTO owns architecture decisions, ADRs, and AI system design. AppSec owns all security engineering artifacts (threat models, SAST/DAST, SBOM, supply chain). CTO reviews security architecture; AppSec produces security tooling.
**Warning signs:** CTO CLAUDE.md mentioning "SAST configuration" or "SBOM generation" in its core responsibilities.

### Pitfall 2: Threat Model Without Risk Register Connection
**What goes wrong:** Threat models are produced as standalone documents that do not cross-reference the risk register from Phase 3.
**Why it happens:** Threat modeling and risk registers are often treated as separate exercises.
**How to avoid:** Threat model YAML schema includes `risk-references` field linking to `RISK-*.yml` files. Threat model mitigations reference Annex A controls that also appear in SoA files. The chain is: Risk Register -> Threat Model -> Annex A Control -> SoA -> Evidence.
**Warning signs:** A threat model that does not mention any RISK-ID from the risks/ directory.

### Pitfall 3: SAST Noise Drowning Signal
**What goes wrong:** Initial SAST scan produces hundreds of findings, most false positives, and the team ignores all of them.
**Why it happens:** Running SAST on an existing codebase without a suppression baseline means every legacy pattern triggers alerts.
**How to avoid:** Run initial scan, review findings, establish a baseline of accepted findings (false positives and accepted risks), then enforce "no new Critical/High" going forward. Use centralized baseline file (`.semgrepignore` + Semgrep policy rules) rather than inline `# nosemgrep` comments scattered through code.
**Warning signs:** More than 50 unreviewed findings in the first CI run.

### Pitfall 4: SBOM Without Dependency Lock
**What goes wrong:** SBOM generated from `package.json` (ranges) instead of `pnpm-lock.yaml` (exact versions), producing an inaccurate bill of materials.
**Why it happens:** Some SBOM tools default to reading `package.json` if lockfile is not present or not explicitly specified.
**How to avoid:** Use `@cyclonedx/cyclonedx-node-pnpm` which reads `pnpm-lock.yaml` by default. CI workflow must use `pnpm install --frozen-lockfile` to ensure lockfile integrity.
**Warning signs:** SBOM shows version ranges (e.g., `^3.0.0`) instead of exact versions (e.g., `3.2.1`).

### Pitfall 5: SLSA Level 2 Without Understanding What It Covers
**What goes wrong:** Team claims SLSA Level 2 compliance but only generates provenance for one artifact type, or does not verify provenance on consumption.
**Why it happens:** SLSA Level 2 requires a hosted build platform with signed provenance, but understanding the scope (which artifacts, which builds) is often incomplete.
**How to avoid:** Define explicitly which artifacts get provenance attestation (build outputs from CI, not local dev). Document the verification process. GitHub Actions + `actions/attest-build-provenance` covers the generation side; document how artifacts are verified before deployment.
**Warning signs:** Provenance generated but never consumed/verified by any downstream process.

### Pitfall 6: Agent domain-context.md That Duplicates CLAUDE.md
**What goes wrong:** The domain-context.md repeats information already in the CLAUDE.md system prompt, inflating context window usage without adding value.
**Why it happens:** Unclear boundary between "identity and operating instructions" (CLAUDE.md) and "situational context" (domain-context.md).
**How to avoid:** CLAUDE.md contains: who you are, how you operate, what you produce, boundaries, spawning rules. domain-context.md contains: HH-specific facts the agent needs to reference (entities, systems, tech stack, compliance status, existing artifacts, team structure). No overlap. CISO domain-context.md (150 lines, 8 sections) is the model.
**Warning signs:** The same sentence appearing in both files.

## Code Examples

### Example 1: Semgrep GitHub Actions SAST Integration
```yaml
# .github/workflows/sast.yml
# Source: https://semgrep.dev/docs/deployment/oss-deployment
name: SAST - Semgrep
on:
  pull_request:
    branches: [main]
  push:
    branches: [main]

permissions:
  contents: read
  security-events: write

jobs:
  semgrep:
    runs-on: ubuntu-latest
    container:
      image: semgrep/semgrep
    steps:
      - uses: actions/checkout@v4
      - name: Run Semgrep
        run: semgrep scan --config p/javascript --config p/typescript --config p/owasp-top-ten --sarif --output semgrep.sarif .
      - name: Upload SARIF
        if: always()
        uses: github/codeql-action/upload-sarif@v3
        with:
          sarif_file: semgrep.sarif
      - name: Check for Critical/High
        run: |
          semgrep scan --config p/javascript --config p/typescript --config p/owasp-top-ten --severity ERROR --json . > /tmp/results.json
          COUNT=$(cat /tmp/results.json | python3 -c "import sys,json; print(len(json.load(sys.stdin).get('results',[])))")
          if [ "$COUNT" -gt 0 ]; then
            echo "::error::$COUNT Critical/High SAST findings detected. Pipeline blocked."
            exit 1
          fi
```

### Example 2: CycloneDX SBOM Generation for pnpm
```yaml
# .github/workflows/sbom.yml
# Source: https://github.com/CycloneDX/cyclonedx-node-pnpm
name: SBOM Generation
on:
  push:
    branches: [main]
  release:
    types: [published]

jobs:
  sbom:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: pnpm
      - run: pnpm install --frozen-lockfile
      - name: Generate CycloneDX SBOM
        run: npx @cyclonedx/cyclonedx-node-pnpm --output-file sbom.cdx.json --output-format json
      - name: Upload SBOM artifact
        uses: actions/upload-artifact@v4
        with:
          name: sbom-${{ github.sha }}
          path: sbom.cdx.json
```

### Example 3: SLSA Level 2 Build Provenance
```yaml
# .github/workflows/provenance.yml
# Source: https://github.com/actions/attest-build-provenance
name: Build with Provenance
on:
  push:
    branches: [main]

permissions:
  id-token: write
  contents: read
  attestations: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: pnpm
      - run: pnpm install --frozen-lockfile
      - run: pnpm build
      - name: Attest build provenance
        uses: actions/attest-build-provenance@v2
        with:
          subject-path: '.next/**'
```

### Example 4: Cosign Keyless Signing in CI
```yaml
# Source: https://github.com/sigstore/cosign-installer
# https://docs.sigstore.dev/quickstart/quickstart-ci/
- name: Install Cosign
  uses: sigstore/cosign-installer@v3
- name: Sign artifact
  run: cosign sign-blob --yes sbom.cdx.json --bundle sbom.cdx.json.bundle
  env:
    COSIGN_EXPERIMENTAL: 1
- name: Verify signature
  run: cosign verify-blob sbom.cdx.json --bundle sbom.cdx.json.bundle --certificate-identity-regexp '.*' --certificate-oidc-issuer https://token.actions.githubusercontent.com
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| GPG key-based artifact signing | Sigstore keyless signing via OIDC | 2022-2023 | Eliminates key management; ephemeral certificates tied to CI identity |
| Manual SBOM creation | Automated CycloneDX/SPDX generation from lockfiles | 2022-2024 | Machine-readable, version-controlled SBOMs; EO 14028 mandate accelerated adoption |
| SAST as separate build step | SAST integrated into PR workflow with SARIF | 2023-2024 | Findings appear inline in PR diff; developers see issues before merge |
| Self-hosted ZAP proxy | ZAP Docker-based GitHub Actions | 2023-2024 | No infrastructure to maintain; scan-per-PR possible |
| SLSA provenance as aspirational | GitHub-native SLSA L2 via `attest-build-provenance` | 2024-2025 | One-line GitHub Action; no custom provenance generation needed |
| npm/yarn for lockfiles | pnpm with strict lockfile + workspace support | 2023-2025 | Stricter dependency resolution; better monorepo support; pnpm-specific SBOM tooling mature |
| Threat models in Word/Visio | Threat-model-as-code in YAML/JSON | 2022-2025 | Version-controlled, diffable, scriptable; aligns with compliance-as-code trend |

**Deprecated/outdated:**
- `@cyclonedx/bom` (Node.js SBOM generator): Deprecated in favor of `@cyclonedx/cyclonedx-npm` and `@cyclonedx/cyclonedx-node-pnpm`
- Cosign v1 API: Cosign v2 changed the signing/verification API; always use v2+ patterns
- ZAP stable Docker image `owasp/zap2docker-stable`: Community moving to `ghcr.io/zaproxy/zaproxy` as canonical image

## Discretionary Recommendations

### False Positive Handling (Claude's Discretion)

**Recommendation: Centralized baseline approach using `.semgrepignore` + Semgrep policy file.**

Rationale: Inline `# nosemgrep` comments scatter suppression decisions across the codebase, making it hard to audit which findings have been intentionally suppressed. A centralized approach keeps all suppression decisions in one reviewable location.

Implementation:
1. `.semgrepignore` file for path-level exclusions (test fixtures, generated code, vendor directories)
2. A `semgrep-policy.yml` file defining rule severity overrides and expected false positive patterns
3. All suppression decisions documented in a `security/sast-baseline.md` file with date, reviewer, and justification
4. Quarterly review of baseline suppressions as part of the monthly security review cycle

### Artifact Signing Technology (Claude's Discretion)

**Recommendation: Sigstore/Cosign keyless signing via OIDC.**

Rationale:
- Zero key management overhead (no GPG key generation, rotation, revocation, backup)
- Native GitHub Actions support via OIDC identity (`sigstore/cosign-installer@v3`)
- Transparency log (Rekor) provides auditable record of all signing events
- Industry standard for supply chain security (adopted by npm, Python, Kubernetes, Homebrew)
- Aligns with SLSA Level 2 provenance requirements (Sigstore is the signing backend for `actions/attest-build-provenance`)

GPG is only recommended if HH needs to sign artifacts for recipients who cannot verify Sigstore signatures (unlikely given the technology sector). For all CI/CD and supply chain use cases, Sigstore/Cosign is the clear choice.

### CTO Agent domain-context.md Structure (Claude's Discretion)

**Recommendation:** Mirror the CISO Agent domain-context.md structure (8 sections, ~150 lines) but replace compliance-specific sections with architecture-specific content:

1. Organization Overview (same as CISO -- shared context)
2. Personnel (same as CISO with emphasis on CTO/IT Pentester roles)
3. AI Agent Roster (same as CISO -- all agents need this)
4. Products (same as CISO -- reference by name, patent IDs)
5. **Technology Stack (expanded):** Detailed architecture context: TypeScript/Qwik/Next.js frontend, Payload CMS backend, Neon PostgreSQL, Vercel/Cloudflare Pages deployment, Azure infrastructure, development toolchain (pnpm, Git)
6. **Architecture Decision Records (ADRs):** List of existing ADRs with status (initially empty, populated as CTO Agent produces ADRs)
7. Operating Phase (same as CISO)
8. **Technical Constraints:** Performance requirements, deployment targets, API integration points, AI system architecture (Claude Code agent system design)

### AppSec Agent domain-context.md Structure (Claude's Discretion)

**Recommendation:** Focused on security engineering context, not repeating organizational context available from CISO:

1. Organization Overview (abbreviated -- refer to CISO domain-context.md for full details)
2. **Security Tooling Inventory:** Current and planned security tools with configuration status
3. **Threat Model Registry:** List of completed threat models with system names and file paths
4. **SAST/DAST Status:** Current scan coverage, baseline suppressions, open findings summary
5. **SBOM and Supply Chain Status:** Latest SBOM generation date, dependency counts, known vulnerability status
6. **Annex A.8 Control Mapping:** Which A.8 controls this agent's artifacts provide evidence for, with current implementation status
7. **Upstream Policy Constraints:** Key constraints from IS Policy and AI Policy that the AppSec Agent must enforce
8. Operating Phase and key dates

## Annex A.8 Control Mapping

Phase 4 artifacts directly provide evidence for the following SoA controls (all currently marked "planned" or "partially-implemented" with Phase 4 notes):

| Control ID | Control Name | Phase 4 Artifact | Status Change |
|------------|-------------|-----------------|---------------|
| A.8.8 | Management of Technical Vulnerabilities | SAST/DAST spec + reference config | planned -> partially-implemented |
| A.8.11 | Data Masking | Secure coding standards (threat model identifies data masking needs) | planned -> planned (documented) |
| A.8.25 | Secure Development Life Cycle | SAST/DAST integration + threat modeling framework | partially-implemented -> partially-implemented (enhanced) |
| A.8.26 | Application Security Requirements | Threat modeling framework (defines security requirements per system) | planned -> partially-implemented |
| A.8.27 | Secure System Architecture and Engineering Principles | CTO Agent ADR framework + security architecture patterns | planned -> partially-implemented |
| A.8.28 | Secure Coding | SAST configuration (enforces secure coding in CI) | partially-implemented -> partially-implemented (enhanced) |
| A.8.29 | Security Testing in Development and Acceptance | SAST/DAST reference config (automated security testing in CI) | planned -> partially-implemented |
| A.8.30 | Outsourced Development | SBOM + supply chain framework (governs third-party dependencies) | planned -> partially-implemented |
| A.8.33 | Test Information | Threat models identify test data sensitivity requirements | planned -> planned (documented) |

Additionally, threat models reference controls from other themes:
- A.5.21 (ICT Supply Chain): Supply chain security framework
- A.5.23 (Information Security for Use of Cloud Services): Threat model for cloud-deployed systems

## Open Questions

1. **Which HH repo for the working SBOM/SAST reference config?**
   - What we know: HH has `verity-cms`, `helgeheupel-cms`, `verity-website`, and `helgeheupel-website` repos. All use pnpm and TypeScript. Neither currently has GitHub Actions CI/CD workflows (deployment is via Vercel/Cloudflare Pages directly).
   - What's unclear: Which repo is the best target for the proof-of-concept security pipeline? `helgeheupel-cms` (Payload CMS/Next.js) is likely simplest. `verity-cms` may have more dependencies to exercise SBOM generation.
   - Recommendation: Use `helgeheupel-cms` as the reference target. It is the simpler repo and the pattern transfers to `verity-cms` trivially.

2. **Verity product threat model scope**
   - What we know: Context says "model one HH product (e.g., Verity or HH website)." Verity VE and EAM are patent-sensitive.
   - What's unclear: Can a threat model for Verity be produced without inlining patent-sensitive details? The threat model needs component names and data flows but not algorithmic details.
   - Recommendation: Model `verity-cms` (the Payload CMS backend for Verity) rather than the Verity VE/EAM product logic. The CMS has well-understood components (Payload CMS, Next.js, Neon PostgreSQL, Vercel deployment) and no patent-sensitive content. Reference Verity VE/EAM only by `[PATENT-VE-001]` if data flows touch product-specific features.

3. **GitHub repository hosting**
   - What we know: SoA references "Git repositories" and risk register mentions GitHub Advanced Security. HH repos appear to be on GitHub.
   - What's unclear: Are the repos on GitHub Free, GitHub Team, or GitHub Enterprise? This affects CodeQL availability (free for public repos only) and GitHub Advanced Security features.
   - Recommendation: Proceed with Semgrep CE (free regardless of GitHub plan) as primary SAST. Note CodeQL as a secondary option if repos are public. Dependabot is free on all GitHub plans.

## Sources

### Primary (HIGH confidence)
- CISO Agent CLAUDE.md (`agents/ciso/CLAUDE.md`) -- 383-line reference pattern for agent construction
- CISO Agent domain-context.md (`agents/ciso/reference/domain-context.md`) -- 150-line reference pattern for domain context
- Agent qualification profiles (`protocols/agent-qualifications.md`) -- CTO Section 2.2, AppSec Section 2.7
- Agent definition template (`protocols/interaction-model.md` Section 6) -- mandatory 7-section structure
- Phase 2 Plan 01 (`.planning/phases/02-ciso-agent-and-is-ai-policy-foundation/02-01-PLAN.md`) -- CISO Agent construction plan
- Phase 3 SoA YAML files (`soa/A.8.*.yml`) -- current SoA status for A.8 controls
- Phase 3 risk register (`risks/RISK-*.yml`) -- risk entries that threat models must reference
- SoA consolidation script (`soa/scripts/generate-soa.js`) -- pattern for YAML-to-Markdown consolidation

### Secondary (MEDIUM confidence -- verified with official sources)
- [Semgrep](https://github.com/semgrep/semgrep) -- open-source SAST, LGPL-2.1, 30+ languages including TypeScript/JavaScript
- [Semgrep JavaScript support](https://semgrep.dev/docs/languages/javascript) -- native TS/JS/JSX/TSX support
- [OWASP ZAP](https://www.zaproxy.org/) -- open-source DAST, Apache 2.0
- [CycloneDX pnpm generator](https://github.com/CycloneDX/cyclonedx-node-pnpm) -- official CycloneDX SBOM for pnpm
- [CycloneDX npm generator](https://github.com/CycloneDX/cyclonedx-node-npm) -- official CycloneDX SBOM for npm
- [GitHub attest-build-provenance](https://github.com/actions/attest-build-provenance) -- SLSA Level 2 via GitHub Actions
- [Sigstore Cosign](https://github.com/sigstore/cosign) -- keyless artifact signing
- [Sigstore Cosign Installer](https://github.com/sigstore/cosign-installer) -- GitHub Actions integration
- [Bearer CLI](https://github.com/Bearer/bearer) -- privacy-focused SAST for TypeScript
- [GitHub CodeQL](https://codeql.github.com/) -- semantic SAST, free for public repos
- [LINDDUN](https://linddun.org/) -- privacy threat modeling methodology
- [SLSA specification](https://slsa.dev/) -- Supply-chain Levels for Software Artifacts
- [Semgrep false positive management](https://semgrep.dev/docs/ignoring-files-folders-code) -- suppression and ignore approaches
- [Semgrep in CI](https://semgrep.dev/docs/deployment/oss-deployment) -- open-source CI deployment guide

### Tertiary (LOW confidence -- needs validation)
- OWASP ZAP exact Docker image naming may have changed; verify `ghcr.io/zaproxy/zaproxy` vs `owasp/zap2docker-stable` at implementation time
- Bearer CLI maintenance status should be verified before adoption (check GitHub activity)

## Metadata

**Confidence breakdown:**
- Agent construction: HIGH -- proven pattern from Phase 2 CISO Agent; all source materials (qualifications, template, existing agent) are in the repository
- Threat modeling: HIGH -- STRIDE is well-established; YAML schema follows existing risk register pattern; scope is locked in CONTEXT.md
- SAST/DAST tooling: HIGH -- Semgrep and ZAP are industry-standard open-source tools with extensive documentation and GitHub Actions support
- SBOM/Supply chain: HIGH -- CycloneDX has dedicated pnpm generator; GitHub provides native SLSA L2; Sigstore/Cosign is the industry standard
- Annex A.8 mapping: HIGH -- all 34 A.8 SoA files exist in the repository and were analyzed for Phase 4 references

**Research date:** 2026-02-21
**Valid until:** 2026-03-21 (30 days -- stable domain; tooling versions may update but patterns remain valid)
