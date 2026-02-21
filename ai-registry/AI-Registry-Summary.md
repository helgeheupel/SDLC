---
document-id: HH-AIMS-REG-001
title: "AI System Registry Summary"
version: v1.0
date: 2026-02-21
classification: Internal
author: CISO Agent
approver: CEO Helge Heupel
status: Draft
generated-by: ai-registry/scripts/generate-registry-summary.js
---

# AI System Registry Summary

## 1. Introduction

### Purpose

This document provides a consolidated summary of all AI systems registered within the Helge Heupel Group AI Management System (AIMS). It serves as the primary reference for auditors, management reviewers, and stakeholders to understand the organization's AI system landscape.

### Scope

The AI System Registry covers all AI systems within AIMS scope as defined in the AIMS Scope Statements (HH-AIMS-SCOPE-GMBH-001, HH-AIMS-SCOPE-BV-001). This includes development AI systems (Claude Code agents), third-party AI tools, and product AI systems (Verity VE and EAM).

### Methodology

Each AI system is documented using a standardized 24-field YAML schema aligned with ISO 42001 Annex A.4.2 (Resource documentation) requirements. Registry entries are maintained as individual YAML files in the ai-registry/ directory, enabling granular Git history and change tracking. This summary is auto-generated from those source files.

### Normative References

- ISO/IEC 42001:2023 cl. 6.1.2 (AI risk assessment), Annex A.4.2 (Resource documentation)
- EU AI Act (Regulation 2024/1689) Art. 50 (Transparency obligations)
- AI Policy (HH-AIMS-POL-001) Section 1 (AI system categories)
- AIMS Scope Statement GmbH (HH-AIMS-SCOPE-GMBH-001) Section 3 (AI System Inventory)

---

## 2. Summary Statistics

| Metric | Count |
|--------|-------|
| Total AI Systems | 11 |
| Development AI Systems | 7 |
| Product AI Systems | 2 |
| Third-Party AI Systems | 2 |

### By EU AI Act Classification

| Classification | Count |
|---------------|-------|
| limited-risk | 11 |

### By Lifecycle Status

| Status | Count |
|--------|-------|
| development | 6 |
| production | 5 |

### By SDLC Usage Tier

| Tier | Count |
|------|-------|
| tier-1-assistant | 2 |
| tier-2-collaborator | 7 |
| tier-3-decision-support | 2 |

---

## 3. Development AI Systems

| System ID | Name | EU AI Act Class | SDLC Tier | Lifecycle | Owner |
|-----------|------|-----------------|-----------|-----------|-------|
| AI-AGENT-001 | CISO Agent | limited-risk | tier-2-collaborator | production | CISO role |
| AI-AGENT-002 | CTO Agent | limited-risk | tier-2-collaborator | production | CTO role |
| AI-AGENT-003 | SDLC Lead Agent | limited-risk | tier-2-collaborator | development | CEO role |
| AI-AGENT-004 | AI Science Agent | limited-risk | tier-2-collaborator | development | CTO role |
| AI-AGENT-005 | Platform/SRE Agent | limited-risk | tier-2-collaborator | development | CTO role |
| AI-AGENT-006 | Product/Strategy Agent | limited-risk | tier-2-collaborator | development | CEO role |
| AI-AGENT-007 | AppSec Agent | limited-risk | tier-2-collaborator | production | CISO role |

### System Details

#### AI-AGENT-001: CISO Agent

- **Provider:** Anthropic
- **Model:** Claude Code (Claude Opus)
- **Intended Use:** Decision support and artifact generation for information security policy, ISMS/AIMS management, risk assessment, EU compliance (NIS2, GDPR, TISAX), AI governance (ISO 42001), and cross-framework compliance integration.
- **Human Oversight:** Trust Level 2 (Supervised Autonomous).
- **Deployment Entities:** GmbH, B.V.
- **Risk References:** RISK-AI-001, RISK-AI-002, RISK-AI-003
- **Applicable Controls:** 18 ISO 42001 Annex A controls
- **Conformity Status:** in-progress

#### AI-AGENT-002: CTO Agent

- **Provider:** Anthropic
- **Model:** Claude Code (Claude Opus)
- **Intended Use:** Architecture decision support and technical artifact generation.
- **Human Oversight:** Trust Level 2 (Supervised Autonomous).
- **Deployment Entities:** GmbH, B.V.
- **Risk References:** RISK-AI-002, RISK-AI-003, RISK-AI-007
- **Applicable Controls:** 19 ISO 42001 Annex A controls
- **Conformity Status:** in-progress

#### AI-AGENT-003: SDLC Lead Agent

- **Provider:** Anthropic
- **Model:** Claude Code (Claude Opus)
- **Intended Use:** Multi-agent workflow orchestration and SDLC governance coordination.
- **Human Oversight:** Trust Level 2 (Supervised Autonomous).
- **Deployment Entities:** GmbH
- **Risk References:** RISK-AI-003, RISK-AI-007
- **Applicable Controls:** 10 ISO 42001 Annex A controls
- **Conformity Status:** not-assessed

#### AI-AGENT-004: AI Science Agent

- **Provider:** Anthropic
- **Model:** Claude Code (Claude Opus)
- **Intended Use:** AI research assessment and model evaluation support.
- **Human Oversight:** Trust Level 2 (Supervised Autonomous).
- **Deployment Entities:** GmbH
- **Risk References:** RISK-AI-003, RISK-AI-005, RISK-AI-006
- **Applicable Controls:** 13 ISO 42001 Annex A controls
- **Conformity Status:** not-assessed

#### AI-AGENT-005: Platform/SRE Agent

- **Provider:** Anthropic
- **Model:** Claude Code (Claude Opus)
- **Intended Use:** Infrastructure and operational reliability support.
- **Human Oversight:** Trust Level 2 (Supervised Autonomous).
- **Deployment Entities:** GmbH
- **Risk References:** RISK-AI-003, RISK-AI-006, RISK-AI-007
- **Applicable Controls:** 12 ISO 42001 Annex A controls
- **Conformity Status:** not-assessed

#### AI-AGENT-006: Product/Strategy Agent

- **Provider:** Anthropic
- **Model:** Claude Code (Claude Opus)
- **Intended Use:** Strategic alignment and product governance support.
- **Human Oversight:** Trust Level 2 (Supervised Autonomous).
- **Deployment Entities:** GmbH
- **Risk References:** RISK-AI-003, RISK-AI-007
- **Applicable Controls:** 10 ISO 42001 Annex A controls
- **Conformity Status:** not-assessed

#### AI-AGENT-007: AppSec Agent

- **Provider:** Anthropic
- **Model:** Claude Code (Claude Opus)
- **Intended Use:** Security engineering artifact production and pipeline integration.
- **Human Oversight:** Trust Level 2 (Supervised Autonomous).
- **Deployment Entities:** GmbH, B.V.
- **Risk References:** RISK-AI-002, RISK-AI-003, RISK-SEC-005
- **Applicable Controls:** 16 ISO 42001 Annex A controls
- **Conformity Status:** in-progress

---

## 4. Third-Party AI Systems

| System ID | Name | EU AI Act Class | SDLC Tier | Lifecycle | Owner |
|-----------|------|-----------------|-----------|-----------|-------|
| AI-3PARTY-001 | ChatGPT | limited-risk | tier-1-assistant | production | CTO role |
| AI-3PARTY-002 | Codex | limited-risk | tier-1-assistant | production | CTO role |

### System Details

#### AI-3PARTY-001: ChatGPT

- **Provider:** OpenAI
- **Model:** GPT-4o (current default)
- **Intended Use:** Internal research and brainstorming tool for team members.
- **Human Oversight:** Tier 1 (Post-hoc review within 24 hours).
- **Deployment Entities:** GmbH, B.V.
- **Risk References:** RISK-AI-005, RISK-SUP-002
- **Applicable Controls:** 5 ISO 42001 Annex A controls
- **Conformity Status:** in-progress

#### AI-3PARTY-002: Codex

- **Provider:** OpenAI
- **Model:** Codex (OpenAI code generation model)
- **Intended Use:** AI-assisted code development for Verity VE and EAM products and internal tools.
- **Human Oversight:** Tier 1 (Post-hoc review within 24 hours).
- **Deployment Entities:** GmbH, B.V.
- **Risk References:** RISK-AI-002, RISK-SUP-002, RISK-SUP-004
- **Applicable Controls:** 6 ISO 42001 Annex A controls
- **Conformity Status:** in-progress

---

## 5. Product AI Systems

| System ID | Name | EU AI Act Class | SDLC Tier | Lifecycle | Owner |
|-----------|------|-----------------|-----------|-----------|-------|
| AI-PROD-001 | Verity VE AI | limited-risk | tier-3-decision-support | development | CTO role |
| AI-PROD-002 | Verity EAM AI | limited-risk | tier-3-decision-support | development | CTO role |

### System Details

#### AI-PROD-001: Verity VE AI

- **Provider:** Helge Heupel GmbH
- **Model:** Multiple (Azure OpenAI Service backbone)
- **Intended Use:** Decision support for enterprise value engineering.
- **Human Oversight:** Tier 3 (Human-in-the-Loop Mandatory).
- **Deployment Entities:** GmbH, B.V.
- **Risk References:** RISK-AI-003, RISK-AI-004, RISK-AI-006
- **Applicable Controls:** 37 ISO 42001 Annex A controls
- **Conformity Status:** not-assessed

#### AI-PROD-002: Verity EAM AI

- **Provider:** Helge Heupel GmbH
- **Model:** Multiple (Azure OpenAI Service backbone)
- **Intended Use:** Decision support for enterprise architecture management.
- **Human Oversight:** Tier 3 (Human-in-the-Loop Mandatory).
- **Deployment Entities:** GmbH, B.V.
- **Risk References:** RISK-AI-003, RISK-AI-005, RISK-AI-006
- **Applicable Controls:** 37 ISO 42001 Annex A controls
- **Conformity Status:** not-assessed

---

## 6. Control Applicability Matrix

This matrix shows which ISO 42001 Annex A controls are applicable to each registered AI system.

**Legend:** AG001=AI-AGENT-001, AG002=AI-AGENT-002, AG003=AI-AGENT-003, AG004=AI-AGENT-004, AG005=AI-AGENT-005, AG006=AI-AGENT-006, AG007=AI-AGENT-007, 3P001=AI-3PARTY-001, 3P002=AI-3PARTY-002, PR001=AI-PROD-001, PR002=AI-PROD-002

| Control | AG001 | AG002 | AG003 | AG004 | AG005 | AG006 | AG007 | 3P001 | 3P002 | PR001 | PR002 |
|---------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 42001-A.2.2 | X | X | X | X | X | X | X | X | X | X | X |
| 42001-A.2.3 | X | X |  |  |  |  |  |  |  | X | X |
| 42001-A.3.2 | X | X | X | X | X | X | X |  |  | X | X |
| 42001-A.3.3 | X |  |  |  |  |  | X |  |  | X | X |
| 42001-A.4.2 | X | X | X | X | X | X | X |  |  | X | X |
| 42001-A.4.3 | X |  |  | X |  |  |  |  |  | X | X |
| 42001-A.4.4 |  | X |  |  | X |  | X |  |  | X | X |
| 42001-A.4.5 | X | X |  |  | X |  |  |  |  | X | X |
| 42001-A.4.6 | X | X | X |  |  |  |  |  |  | X | X |
| 42001-A.5.2 |  |  |  | X |  |  |  |  |  | X | X |
| 42001-A.5.3 |  |  |  |  |  |  |  |  |  | X | X |
| 42001-A.5.4 |  |  |  | X |  |  |  |  |  | X | X |
| 42001-A.5.5 |  |  |  |  |  |  |  |  |  | X | X |
| 42001-A.6.1.2 | X | X | X | X |  | X |  |  |  | X | X |
| 42001-A.6.1.3 |  | X |  |  |  |  | X |  |  | X | X |
| 42001-A.6.2.2 |  | X |  |  |  |  |  |  |  | X | X |
| 42001-A.6.2.3 |  | X |  |  |  |  | X |  |  | X | X |
| 42001-A.6.2.4 |  |  |  | X |  |  | X |  | X | X | X |
| 42001-A.6.2.5 |  |  |  |  | X |  |  |  |  | X | X |
| 42001-A.6.2.6 | X | X | X |  | X |  | X |  |  | X | X |
| 42001-A.6.2.7 |  |  |  |  |  |  |  |  |  | X | X |
| 42001-A.6.2.8 | X | X |  |  | X |  | X |  |  | X | X |
| 42001-A.7.2 | X |  |  | X |  |  |  |  |  | X | X |
| 42001-A.7.3 |  |  |  |  |  |  |  |  |  | X | X |
| 42001-A.7.4 |  |  |  | X |  |  |  |  |  | X | X |
| 42001-A.7.5 |  |  |  |  |  |  |  |  |  | X | X |
| 42001-A.7.6 |  |  |  |  |  |  |  |  |  | X | X |
| 42001-A.8.2 | X | X |  |  |  | X | X |  |  | X | X |
| 42001-A.8.3 |  |  |  |  |  |  |  |  |  | X | X |
| 42001-A.8.4 |  |  |  |  | X |  |  |  |  | X | X |
| 42001-A.8.5 |  |  |  |  |  | X |  |  |  | X | X |
| 42001-A.9.2 | X | X | X | X | X | X | X | X | X | X | X |
| 42001-A.9.3 | X | X | X | X | X | X | X |  |  | X | X |
| 42001-A.9.4 | X | X | X |  |  | X | X | X | X | X | X |
| 42001-A.10.2 | X | X | X | X | X | X | X | X | X | X | X |
| 42001-A.10.3 | X | X |  |  |  |  | X | X | X | X | X |
| 42001-A.10.4 |  |  |  |  |  |  |  |  |  | X | X |

**Coverage summary:**

| System | Applicable Controls |
|--------|--------------------|
| AI-AGENT-001 | 18 |
| AI-AGENT-002 | 19 |
| AI-AGENT-003 | 10 |
| AI-AGENT-004 | 13 |
| AI-AGENT-005 | 12 |
| AI-AGENT-006 | 10 |
| AI-AGENT-007 | 16 |
| AI-3PARTY-001 | 5 |
| AI-3PARTY-002 | 6 |
| AI-PROD-001 | 37 |
| AI-PROD-002 | 37 |

---

## 7. Approval

This AI System Registry Summary has been reviewed and approved by:

| Role | Name | Date | Signature |
|------|------|------|-----------|
| CEO | Helge Heupel | [CEO-SIGNOFF-REQUIRED] | _________________ |
| CISO | [CISO name] | [CISO-REVIEW-ON-RETURN] | _________________ |

**Git PR Reference:** [To be populated upon PR approval]

---

*Generated by: ai-registry/scripts/generate-registry-summary.js*
*Generated on: 2026-02-21*
*Source files: 11 per-system YAML files in ai-registry/*
