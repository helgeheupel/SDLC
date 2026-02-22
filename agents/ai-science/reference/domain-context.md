---
document-id: HH-AISC-REF-001
title: "AI Science Agent Domain Context: Helge Heupel Group"
version: v1.0
date: 2026-02-22
classification: Internal
status: Active
author: AI Science Agent (Phase 6 Plan 01)
review-cycle: Quarterly
---

# AI Science Agent Domain Context

This document provides HH-specific AI landscape context for the AI Science Agent. Read this first at the start of every new session to ground your responses in the organization's actual AI systems, evaluation criteria, and constraints.

For full organizational details (entities, personnel, AI agent roster, products, technology stack, compliance status), refer to `agents/ciso/reference/domain-context.md` (HH-CISO-REF-001).

---

## 1. Organization Overview (Abbreviated)

The **Helge Heupel Group** consists of 3 legal entities: Helge Heupel GmbH (Germany), Helge Heupel B.V. (Netherlands), and Helge Heupel Inc. (United States). GmbH is the primary operating entity. All entities operate cloud-only (Azure, Vercel, Cloudflare Pages) with remote workers and share development toolchain, AI agent system, and Git repositories.

For full entity details (registration, addresses, inter-entity relationships), see `agents/ciso/reference/domain-context.md` Section 1.

---

## 2. AI System Landscape

The Helge Heupel Group operates **11 registered AI systems** across 3 categories, documented in the AI System Registry (HH-AIMS-REG-001).

### Summary

| Category | Count | SDLC Tier | EU AI Act Classification |
|----------|-------|-----------|--------------------------|
| Development AI (Claude Code agents) | 7 | tier-2-collaborator | limited-risk |
| Third-party AI tools | 2 | tier-1-assistant | limited-risk |
| Product AI (Verity) | 2 | tier-3-decision-support | limited-risk |

### Development AI Systems

| System ID | Name | Lifecycle | Owner | Applicable Controls |
|-----------|------|-----------|-------|---------------------|
| AI-AGENT-001 | CISO Agent | production | CISO role | 18 |
| AI-AGENT-002 | CTO Agent | production | CTO role | 19 |
| AI-AGENT-003 | SDLC Lead Agent | development | CEO role | 10 |
| AI-AGENT-004 | AI Science Agent | development | CTO role | 13 |
| AI-AGENT-005 | Platform/SRE Agent | development | CTO role | 12 |
| AI-AGENT-006 | Product/Strategy Agent | development | CEO role | 10 |
| AI-AGENT-007 | AppSec Agent | production | CISO role | 16 |

All 7 agents use Anthropic Claude Code (Claude Opus model), operate at Trust Level 2 (Supervised Autonomous), and are classified as tier-2-collaborator under the SDLC usage model. All are classified limited-risk per EU AI Act Art. 50 (transparency obligations apply).

### Third-Party AI Tools

| System ID | Name | Provider | Model | Intended Use |
|-----------|------|----------|-------|-------------|
| AI-3PARTY-001 | ChatGPT | OpenAI | GPT-4o | Internal research and brainstorming |
| AI-3PARTY-002 | Codex | OpenAI | Codex | AI-assisted code development for Verity products |

Both are tier-1-assistant (post-hoc review within 24 hours), classified limited-risk. ChatGPT has 5 applicable ISO 42001 controls; Codex has 6.

### Product AI Systems

| System ID | Name | Provider | Model | Intended Use |
|-----------|------|----------|-------|-------------|
| AI-PROD-001 | Verity VE AI | Helge Heupel GmbH | Azure OpenAI Service | Decision support for enterprise value engineering |
| AI-PROD-002 | Verity EAM AI | Helge Heupel GmbH | Azure OpenAI Service | Decision support for enterprise architecture management |

Both are tier-3-decision-support (Human-in-the-Loop mandatory), classified limited-risk, in development lifecycle. Each has **37 applicable ISO 42001 Annex A controls** (the most of any registered system). Both reference patents: [PATENT-VE-001] and [PATENT-EAM-001] respectively.

### SDLC Tier Distribution

| Tier | Label | Count | Human Oversight |
|------|-------|-------|-----------------|
| tier-1-assistant | AI as Assistant | 2 | Post-hoc review within 24h |
| tier-2-collaborator | AI as Collaborator | 7 | Mandatory pre-execution review |
| tier-3-decision-support | AI as Decision Support | 2 | Human-in-the-Loop mandatory |

---

## 3. Verity Product AI Roadmap

Both Verity product AI systems are in the **development lifecycle** and represent the most significant AI evaluation challenges for the AI Science Agent.

### Verity VE AI (AI-PROD-001)

- **Product:** Verity VE (Value Engineering) [PATENT-VE-001]
- **AI backbone:** Azure OpenAI Service
- **Purpose:** Decision support for enterprise value engineering
- **SDLC tier:** tier-3-decision-support (Human-in-the-Loop mandatory)
- **ISO 42001 controls:** 37 applicable (full control set)
- **Risk references:** RISK-AI-003, RISK-AI-004, RISK-AI-006
- **Deployment entities:** GmbH, B.V.
- **Key evaluation concerns:** Decision quality for value engineering recommendations, bias in cost/benefit analysis, explainability of recommendations to enterprise stakeholders

### Verity EAM AI (AI-PROD-002)

- **Product:** Verity EAM (Enterprise Architecture Management) [PATENT-EAM-001]
- **AI backbone:** Azure OpenAI Service
- **Purpose:** Decision support for enterprise architecture management
- **SDLC tier:** tier-3-decision-support (Human-in-the-Loop mandatory)
- **ISO 42001 controls:** 37 applicable (full control set)
- **Risk references:** RISK-AI-003, RISK-AI-005, RISK-AI-006
- **Deployment entities:** GmbH, B.V.
- **Key evaluation concerns:** Architecture recommendation quality, technology bias (favoring familiar technologies), explainability of EA assessments

### Product AI Evaluation Priorities

1. **Fairness:** Both systems make recommendations that affect business decisions. Ensure no systematic bias toward specific vendors, technologies, or approaches.
2. **Explainability:** Enterprise stakeholders require transparent reasoning for AI recommendations. SHAP/LIME scores must meet defined thresholds.
3. **Hallucination rate:** Decision support AI must minimize factual errors. Ground truth verification against known value engineering and EA datasets.
4. **Prompt injection resistance:** Customer-facing AI features must resist prompt injection and jailbreak attempts.

---

## 4. Model Evaluation Criteria

Extracted from SDLC-Growth-v2 Section 10.2 (AI Lifecycle Management) and Section 9.4 (AI-Specific Testing). These criteria apply to all AI model evaluations conducted by the AI Science Agent.

### Performance Metrics

| Metric | Description | Applicable To |
|--------|-------------|---------------|
| Accuracy | Overall prediction correctness | All ML models |
| Precision | True positive rate among positive predictions | Classification models |
| Recall | True positive detection rate | Classification models |
| F1 | Harmonic mean of precision and recall | Classification models |
| Domain-specific | Task-specific metrics per use case | Verity VE/EAM AI (quality of recommendations) |

### Fairness Evaluation

| Component | Tool/Method | Threshold | Standard Reference |
|-----------|-------------|-----------|-------------------|
| Statistical parity | Fairlearn | Difference < configurable tolerance | ISO/IEC TR 24027 cl. 6 |
| Equalized odds | Fairlearn | Difference < configurable tolerance | ISO/IEC TR 24027 cl. 6 |
| Disparate impact ratio | Custom calculation | >= 0.8 (80% rule) | EU AI Act, ISO 42001 A.5 |
| Protected attributes | Per-system definition | N/A (input, not threshold) | GDPR Art. 9 |
| Calibration | Calibration plots per group | Visual + quantitative assessment | ISO/IEC 23894 |

### Robustness Testing

| Test Type | Method | Pass Criteria | Frequency |
|-----------|--------|---------------|-----------|
| Input perturbation | Systematic noise injection | Performance degradation < 5% | Every AI model change |
| Prompt injection resistance | OWASP LLM Top 10 attack patterns | Zero successful critical injections | Every AI model change |
| Jailbreak testing | Known jailbreak pattern library | Zero successful bypasses | Every AI model change |
| Adversarial robustness score | Aggregate across attack categories | Score > defined threshold per system | Every AI model change |

### Explainability

| Method | Tool | Application | Standard Reference |
|--------|------|-------------|-------------------|
| SHAP (SHapley Additive exPlanations) | shap library | Feature importance for all models | ISO/IEC 5339 cl. 7 |
| LIME (Local Interpretable Model-agnostic Explanations) | lime library | Instance-level explanations for decision support | ISO/IEC 5339 cl. 7 |
| Transparency documentation | Per EU AI Act Art. 13 | User-facing explanation of AI system behavior | ISO/IEC 12792:2025 |

### Drift Detection

| Test | Method | Threshold | Monitoring Frequency |
|------|--------|-----------|---------------------|
| Kolmogorov-Smirnov (KS) test | Distribution comparison of input features | p-value < 0.05 triggers alert | Continuous (production) |
| Population Stability Index (PSI) | Binned distribution comparison | PSI > 0.2 triggers investigation | Weekly batch |
| Concept drift | Output distribution monitoring | Statistical deviation > configurable threshold | Continuous (production) |

### Startup Simplification

At Startup phase, AI-specific testing focuses on:
- **Prompt injection resistance** for all 7 Claude Code agents (primary concern for current agent-based systems)
- **Hallucination rate** measurement for Claude Code agent outputs (factual accuracy of compliance, policy, and technical artifacts)
- Full model evaluation (performance, fairness, explainability, drift) deferred to Growth when Verity product AI systems enter production

---

## 5. AI Toolchain

| Tool | Category | Status | Phase | Notes |
|------|----------|--------|-------|-------|
| **Azure OpenAI Service** | LLM Provider | Active | Current | Backbone for Verity VE and EAM AI systems. GPT model family. |
| **Anthropic Claude Code** | AI Agent Platform | Active | Current | Platform for all 7 SDLC agents. Claude Opus model. |
| **Fairlearn** | Fairness Evaluation | Planned | Growth | Microsoft open-source toolkit for fairness assessment. Required for tier-3 product AI evaluation. |
| **Azure ML** | ML Platform | Planned | Growth | Model registry, experiment tracking, MLOps pipelines. Required for production ML workloads. |
| **Azure AI Studio** | AI Development | Planned | Growth | Integrated AI development environment. Prompt engineering, evaluation, deployment. |
| **Custom Evaluation Harness** | AI Evaluation | Planned | Growth | HH-specific evaluation framework aggregating Fairlearn, SHAP/LIME, custom metrics. |

**Status legend:** Active = currently in use. Planned = specification exists, not yet deployed. Growth items are deferred to Growth operating phase.

---

## 6. ISO Standard Ownership Summary

| Ownership | Standards | Domain |
|-----------|----------|--------|
| **Primary (9)** | ISO/IEC 22989, 23053, 23894, 5338, 5339, 5392, TR 20226, TR 24027, TR 24372 | AI concepts, ML frameworks, AI risk, AI lifecycle, AI evaluation, AI reference architecture, AI bias, AI computational approaches |
| **Secondary (3)** | ISO/IEC 42001, TS 42119-2, TR 24368 | AI management system, AI safety, AI ethics (governance perspective owned by CISO Agent) |

**Ownership qualifier:** AI Science Agent owns the **technical** aspects of all standards (evaluation methodologies, reference architectures, computational approaches, bias measurement techniques). The CISO Agent owns the **management system** aspects (AIMS implementation, risk register integration, conformity assessment, audit evidence packaging).

---

## 7. Operating Phase and Key Dates

**Current phase:** Startup (per SDLC-Growth-v2 framework)

| Date | Event | Relevance to AI Science |
|------|-------|------------------------|
| 2025-02-02 | EU AI Act prohibited practices in force | All 11 AI systems must comply with Art. 5 prohibitions |
| 2026-03-16 | TISAX label expiry | AI system documentation needed for renewal scope |
| Mid-May 2026 | ISO 27001/42001 certification target | ISO 42001 technical evidence (model evaluation, fairness, AI lifecycle) must be audit-ready |
| 2026-08 | EU AI Act full conformity deadline | All AI system classifications and conformity evidence finalized |

**Growth triggers for AI Science:**
- Verity product AI entering production (triggers full model evaluation, fairness auditing, drift monitoring)
- High-Risk AI system classification for any registered system (triggers full ISO 42005 impact assessment)
- Team size exceeding 15 (triggers dedicated AI Governance Board)

---

## 8. Key Constraints

| Constraint | Detail | Impact on AI Science Agent |
|-----------|--------|---------------------------|
| **Technical inputs, not governance artifacts** | All AI assessments are technical inputs to CISO governance decisions, not standalone governance artifacts | Never produce AIMS scope, AI Policy, or AI risk register entries. Produce evaluations, assessments, and recommendations that CISO Agent packages. |
| **Patent-sensitive AI features** | Referenced by ID only: [PATENT-VE-001], [PATENT-EAM-001] | Never inline Verity product AI architecture, algorithms, or model details. Reference by system ID (AI-PROD-001, AI-PROD-002) and patent ID. |
| **No customer data training** | Per AI Policy Section 9: no AI model training on customer data without explicit approval | All model evaluation and training recommendations must respect this constraint. |
| **AI Registry updates** | All AI system changes require AI Registry update per HH-AIMS-REG-001 schema | Model changes, new AI system deployments, or classification changes must be flagged for registry update as `[CISO-DEPENDENCY]`. |
| **CEO risk acceptance** | CEO accepts all residual risk (not CTO/CISO split at Startup) | Flag all AI risk findings requiring risk acceptance with `[CEO-SIGNOFF-REQUIRED]`. Agent recommends; CEO decides. |
| **12-week timeline** | Certification readiness target: mid-May 2026 | Prioritize ISO 42001 technical evidence that supports dual certification. Focus on demonstrating evaluation capability, not full evaluation runs. |

---

*Document: agents/ai-science/reference/domain-context.md*
*Document ID: HH-AISC-REF-001*
*Created: Phase 6 Plan 01*
