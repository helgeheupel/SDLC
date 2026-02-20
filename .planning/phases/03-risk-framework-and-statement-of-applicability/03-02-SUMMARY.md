---
phase: 03-risk-framework-and-statement-of-applicability
plan: 02
subsystem: risk-register
tags: [risk-assessment, yaml-in-git, ciso-agent, pre-seeding, iso27001, iso42001]
dependency-graph:
  requires: [03-01]
  provides: [risk-register-pre-seeded, workshop-input]
  affects: [03-03, soa-risk-references]
tech-stack:
  added: []
  patterns: [yaml-per-risk, category-prefixed-ids, role-based-ownership]
key-files:
  created:
    - risks/RISK-OPS-001.yml
    - risks/RISK-OPS-002.yml
    - risks/RISK-OPS-003.yml
    - risks/RISK-OPS-004.yml
    - risks/RISK-OPS-005.yml
    - risks/RISK-SEC-001.yml
    - risks/RISK-SEC-002.yml
    - risks/RISK-SEC-003.yml
    - risks/RISK-SEC-004.yml
    - risks/RISK-SEC-005.yml
    - risks/RISK-SEC-006.yml
    - risks/RISK-SEC-007.yml
    - risks/RISK-PPL-001.yml
    - risks/RISK-PPL-002.yml
    - risks/RISK-PPL-003.yml
    - risks/RISK-PPL-004.yml
    - risks/RISK-AI-001.yml
    - risks/RISK-AI-002.yml
    - risks/RISK-AI-003.yml
    - risks/RISK-AI-004.yml
    - risks/RISK-AI-005.yml
    - risks/RISK-AI-006.yml
    - risks/RISK-AI-007.yml
    - risks/RISK-REG-001.yml
    - risks/RISK-REG-002.yml
    - risks/RISK-REG-003.yml
    - risks/RISK-REG-004.yml
    - risks/RISK-REG-005.yml
    - risks/RISK-REG-006.yml
    - risks/RISK-SUP-001.yml
    - risks/RISK-SUP-002.yml
    - risks/RISK-SUP-003.yml
    - risks/RISK-SUP-004.yml
    - risks/RISK-STR-001.yml
    - risks/RISK-STR-002.yml
    - risks/RISK-STR-003.yml
  modified: []
decisions:
  - "36 risks pre-seeded across 7 categories: OPS(5), SEC(7), AI(7), REG(6), PPL(4), SUP(4), STR(3)"
  - "All AI risks include ai-risk: true with individual/society impact in rationale per ISO 42001 cl. 6.1.2(d)(1)"
  - "Treatment strategy 'retain' used for RISK-STR-003 (competitive entry) where controls cannot reduce inherent market risk"
  - "RISK-REG-005 (TISAX scope change) set to monthly review cycle due to March 2026 label expiration urgency"
  - "Climate change risk (RISK-OPS-005) addresses ISO 27001:2022/Amd 1:2024 requirement explicitly"
metrics:
  duration: 11min
  completed: 2026-02-20
---

# Phase 03 Plan 02: CISO Agent Pre-Seed Risks Summary

36 pre-seeded risk YAML files covering all 7 categories with HH-specific context, CISO Agent pre-ratings, treatment strategies, and Annex A control mappings as working input for the human risk assessment workshop.

## What Was Done

### Task 1: Pre-seed OPS, SEC, and PPL risks (16 files)

Created 16 risk YAML files across 3 categories, each following the exact schema defined in the risk assessment methodology (HH-ISMS-RMA-001):

**Operational risks (5):**
- RISK-OPS-001: Azure production outage (L=3, I=4, Score=12 Medium)
- RISK-OPS-002: CI/CD pipeline compromise (L=3, I=4, Score=12 Medium)
- RISK-OPS-003: Data loss from backup failure (L=2, I=5, Score=10 Medium)
- RISK-OPS-004: Development environment compromise (L=3, I=3, Score=9 Medium)
- RISK-OPS-005: Climate-related disruption (L=2, I=3, Score=6 Low) -- ISO 27001:2022/Amd 1:2024

**Security risks (7):**
- RISK-SEC-001: Phishing credential compromise (L=4, I=4, Score=16 High)
- RISK-SEC-002: Azure RBAC/PIM bypass (L=3, I=5, Score=15 High)
- RISK-SEC-003: Data breach from classification failure (L=3, I=5, Score=15 High)
- RISK-SEC-004: Malware on remote endpoint (L=3, I=3, Score=9 Medium)
- RISK-SEC-005: API key/secret exposure in Git (L=4, I=4, Score=16 High)
- RISK-SEC-006: Insufficient logging (L=3, I=4, Score=12 Medium)
- RISK-SEC-007: MFA bypass exploitation (L=3, I=4, Score=12 Medium)

**People risks (4):**
- RISK-PPL-001: Key person dependency on CEO (L=2, I=5, Score=10 Medium)
- RISK-PPL-002: Insufficient security awareness (L=3, I=3, Score=9 Medium)
- RISK-PPL-003: Insider threat (L=2, I=4, Score=8 Medium)
- RISK-PPL-004: Cloud security/AI governance skill gap (L=3, I=3, Score=9 Medium)

**Commit:** 567441a

### Task 2: Pre-seed AI, REG, SUP, and STR risks (20 files)

Created 20 risk YAML files across 4 categories:

**AI risks (7) -- all with ai-risk: true:**
- RISK-AI-001: CISO Agent incorrect compliance advice (L=3, I=4, Score=12 Medium)
- RISK-AI-002: Prompt injection on Claude Code agents (L=3, I=4, Score=12 Medium)
- RISK-AI-003: Rubber-stamp review of agent outputs (L=4, I=3, Score=12 Medium)
- RISK-AI-004: Verity VE hallucination [PATENT-VE-001] (L=3, I=4, Score=12 Medium)
- RISK-AI-005: Verity EAM bias [PATENT-EAM-001] (L=3, I=4, Score=12 Medium)
- RISK-AI-006: AI model drift (L=3, I=3, Score=9 Medium)
- RISK-AI-007: Anthropic/OpenAI API dependency (L=3, I=4, Score=12 Medium)

**Regulatory risks (6):**
- RISK-REG-001: NIS2 non-compliance with Sec. 38 liability (L=3, I=5, Score=15 High)
- RISK-REG-002: GDPR violation in AI data handling (L=3, I=4, Score=12 Medium)
- RISK-REG-003: EU AI Act non-compliance (L=3, I=4, Score=12 Medium)
- RISK-REG-004: ISO 27001/42001 certification failure (L=3, I=4, Score=12 Medium)
- RISK-REG-005: TISAX scope change gaps (L=4, I=4, Score=16 High)
- RISK-REG-006: Multi-jurisdictional regulatory conflict (L=2, I=3, Score=6 Low)

**Supply chain risks (4):**
- RISK-SUP-001: Azure service disruption/pricing change (L=3, I=4, Score=12 Medium)
- RISK-SUP-002: Anthropic Claude API change (L=3, I=4, Score=12 Medium)
- RISK-SUP-003: SaaS vendor discontinuation (L=2, I=3, Score=6 Low)
- RISK-SUP-004: Open-source dependency vulnerability (L=4, I=4, Score=16 High)

**Strategic risks (3):**
- RISK-STR-001: Technology obsolescence (L=3, I=4, Score=12 Medium)
- RISK-STR-002: Product-market fit failure (L=3, I=5, Score=15 High)
- RISK-STR-003: Competitor entry (L=4, I=3, Score=12 Medium)

**Commit:** 4d12a67

## Risk Distribution Summary

| Category | Count | High | Medium | Low |
|----------|-------|------|--------|-----|
| OPS | 5 | 0 | 4 | 1 |
| SEC | 7 | 4 | 3 | 0 |
| AI | 7 | 0 | 7 | 0 |
| REG | 6 | 2 | 3 | 1 |
| PPL | 4 | 0 | 4 | 0 |
| SUP | 4 | 1 | 2 | 1 |
| STR | 3 | 1 | 2 | 0 |
| **Total** | **36** | **8** | **25** | **3** |

## Decisions Made

1. **36 risks across 7 categories** -- within the locked 30-50 range. SEC has the most (7) reflecting cybersecurity threat landscape; AI has 7 covering both internal agents and product risks.

2. **All 7 AI risks include individual/society impact** in their rationale per ISO 42001 cl. 6.1.2(d)(1). Each AI risk rationale explicitly addresses how the risk could affect individuals using Verity products or employees relying on agent outputs.

3. **Treatment strategy "retain" used for RISK-STR-003** (competitive entry) because competitive risk is inherent to market participation and cannot be reduced through Annex A controls.

4. **RISK-REG-005 (TISAX scope change) set to monthly review cycle** instead of quarterly, reflecting the urgency of the March 2026 label expiration and unanswered TUeV SueD inquiry.

5. **Climate change risk (RISK-OPS-005) explicitly addresses ISO 27001:2022/Amd 1:2024** requirement, categorizing it as OPS with environmental risk-source.

6. **Patent-sensitive references are ID-only** -- [PATENT-VE-001] and [PATENT-EAM-001] referenced in AI-004, AI-005, AI-006, STR-001, STR-002, STR-003 without inlining details.

## Deviations from Plan

None -- plan executed exactly as written.

## Verification Results

- 36 YAML risk files exist in risks/ directory (5 OPS + 7 SEC + 7 AI + 6 REG + 4 PPL + 4 SUP + 3 STR)
- All files follow the exact YAML schema from risk-assessment-methodology.md
- Every file has a substantive rationale (3-5 sentences) explaining the pre-rating
- Every file has treatment-controls with valid Annex A control IDs (A.5.x through A.8.x)
- All workshop-notes fields are empty strings (pre-workshop state)
- All 7 AI risks have ai-risk: true and address individual/society impact in rationale
- Climate change risk (OPS-005) exists per ISO 27001:2022/Amd 1:2024
- Risk IDs are sequential within each category

## Self-Check

| Check | Status |
|-------|--------|
| 36 risk YAML files exist | VERIFIED |
| Task 1 commit 567441a exists | VERIFIED |
| Task 2 commit 4d12a67 exists | VERIFIED |
| All AI risks have ai-risk: true | VERIFIED (7/7) |
| Workshop-notes empty in all files | VERIFIED (36/36) |
| Treatment-controls reference A.x.x format | VERIFIED |

## Self-Check: PASSED
