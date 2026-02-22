---
document-id: HH-AIMS-OBJ-001
title: "AIMS Objectives"
version: v1.0
date: 2026-02-22
classification: Internal
author: CISO Agent
reviewer: [CISO, CTO]
approver: CEO Helge Heupel
review-cycle: Semi-annual
next-review: 2026-08-22
status: Draft
change-summary: Initial release
references:
  - "ISO/IEC 42001:2023 cl. 6.2"
  - "HH-AIMS-POL-001 (AI Policy)"
  - "HH-IMS-CTX-001 (IMS Context, Section 8)"
ims-context: HH-IMS-CTX-001
---

# AIMS Objectives

## 1. Purpose

This document establishes the measurable objectives for the AI Management System (AIMS) of the Helge Heupel Group, satisfying ISO/IEC 42001:2023 cl. 6.2 requirements.

**ISO 42001 cl. 6.2 requires objectives that:**

(a) Are consistent with the AI Policy (HH-AIMS-POL-001)
(b) Are measurable (if practicable)
(c) Take into account applicable requirements (EU AI Act, ISO 42001 Annex A, GDPR)
(d) Are monitored
(e) Are communicated
(f) Are updated as appropriate
(g) Are available as documented information

All 7 objectives in this document satisfy requirements (a) through (g). Each objective traces directly to a specific AI Policy commitment, has a quantitative KPI with a defined target, is monitored at a specified frequency using a defined measurement method, and is reviewed at the Monthly Strategic meeting.

---

## 2. AIMS Objectives

| # | Objective | Derived From (AI Policy) | KPI | Target | Measurement Method | Frequency | Owner |
|---|-----------|--------------------------|-----|--------|--------------------|-----------|-------|
| 1 | Achieve ISO 42001 certification readiness | Management commitment (Section 2) | Annex A control implementation rate | 100% applicable controls at planned or higher status by mid-May 2026 | AIMS SoA consolidated report (aims-soa/AIMS-SoA-Consolidated.md) | Quarterly | CEO |
| 2 | Maintain complete AI System Registry | Principle 2: Transparency (Section 3) | Registry completeness | 100% of deployed AI systems registered | Quarterly registry audit comparing deployed systems against AI System Registry (ai-registry/) | Quarterly | CISO role |
| 3 | Complete AI risk assessments for all registered systems | Principle 3: Accountability (Section 3) | Assessment currency | 100% of registered systems assessed within 12 months | Risk register assessment dates for entries with ai-risk: true (risks/) | Quarterly | CISO role |
| 4 | Complete AI impact assessments for applicable systems | Principle 3: Accountability (Section 3) + ISO 42001 cl. 6.1.4 | AIA completion rate | 100% of Limited-Risk and High-Risk systems assessed before deployment and annually thereafter | AI impact assessment report dates per system (last-impact-assessment field in registry) | Quarterly | CISO role |
| 5 | Ensure EU AI Act Art. 5 prohibited practice compliance | Section 5: Prohibited Practices | Prohibited practice violations | Zero violations of Art. 5 prohibited practices or HH-specific prohibitions | Incident register review for prohibited practice violations | Monthly | CEO |
| 6 | Deliver AI literacy training per EU AI Act Art. 4 | Principle 2: Transparency (Section 3) | Training completion rate | 100% of personnel trained by Aug 2025 AI literacy deadline | Training records per team member and agent configuration records | Semi-annual | CTO role |
| 7 | Maintain human oversight for all AI systems | Principle 1: Human Oversight (Section 3) | HITL compliance rate | 100% of AI outputs reviewed before external use or customer delivery | PR approval records, workflow audit of AI agent outputs reaching production | Quarterly | CEO |

### Objective Details

**Objective 1: ISO 42001 Certification Readiness**
The Helge Heupel Group targets dual certification (ISO 27001 + ISO 42001) as a combined audit engagement. This objective tracks progress toward having all applicable ISO 42001 Annex A controls at planned or higher implementation status by mid-May 2026. The AIMS SoA consolidated report provides the definitive measurement. Current status: 10 fully implemented, 22 partially implemented, 6 planned (38 total applicable controls). Corrective action is triggered if any control remains at not-started status beyond its planned implementation date.

**Objective 2: AI System Registry Completeness**
A complete registry is the foundation of operational AI governance. This objective ensures every AI system deployed by the Helge Heupel Group is documented in the AI System Registry with full 24-field schema entries. Current status: 11 systems registered (7 development-ai, 2 third-party-ai, 2 product-ai). Quarterly audit compares the registry against actual systems in use. Corrective action is triggered if any deployed AI system is found unregistered.

**Objective 3: AI Risk Assessment Currency**
AI risks must be assessed regularly to remain relevant and actionable. This objective tracks whether all registered AI systems have been risk-assessed within the past 12 months per the AI Risk Assessment Procedure (HH-AIMS-RMA-001). The assessment uses the Phase 3 risk methodology extended with the 5th impact dimension (Individual/Society). Corrective action is triggered if any system's last assessment exceeds 12 months or a system has never been assessed.

**Objective 4: AI Impact Assessment Completion**
ISO 42001 cl. 6.1.4 requires AI system impact assessment for consequences to individuals and societies. This objective tracks completion of impact assessments for all Limited-Risk and High-Risk systems per the AI Impact Assessment Procedure (HH-AIMS-AIA-001). The assessment covers 6 measurable dimensions with specific thresholds (fairness: disparate impact ratio >= 0.8, safety: HITL gate, privacy: DPIA, transparency: Art. 50, environmental: per-inference documented, individual rights: no profiling without consent). Corrective action is triggered if any applicable system lacks a current impact assessment.

**Objective 5: Prohibited Practice Compliance**
The EU AI Act Art. 5 prohibitions are in force since 2 February 2025. The AI Policy (Section 5) extends these with 6 HH-specific prohibitions for a total of 14 prohibited practices. This objective targets zero violations. Monitoring is monthly (higher frequency than other objectives) due to the severity of violations. Any suspected violation triggers immediate investigation per AI Policy Section 5 violation response procedures.

**Objective 6: AI Literacy Training**
EU AI Act Art. 4 establishes an AI literacy obligation with an August 2025 deadline. This objective tracks training completion for all team members covering: AI Policy awareness, prohibited practices, responsible AI use, and AI system limitations. For the 7 Claude Code agents, "training" is demonstrated through policy constraints configured via CLAUDE.md system prompts and reference directories. Semi-annual measurement aligns with the AI Policy review cycle.

**Objective 7: Human Oversight Compliance**
Human oversight is the foundational principle of AI governance at the Helge Heupel Group (AI Policy Principle 1). All 7 Claude Code agents operate at Trust Level 2 (Supervised Autonomous), meaning no AI output reaches customers or production without human review. This objective is measured through PR approval records (every AI agent output is submitted via PR) and periodic workflow audits verifying compliance. Corrective action is triggered if any AI output bypasses human review.

---

## 3. Monitoring and Review

**Review forum:** AIMS objectives are reviewed at each Monthly Strategic meeting (60 minutes, CEO + CTO + CISO + Strategy Partner). Performance against targets is reported as a standing agenda item (agenda item 2: compliance posture).

**Monitoring responsibility:** CEO Helge Heupel is responsible for ensuring monitoring occurs and that performance data is collected and reported at each Monthly Strategic meeting. The CISO Agent assists by generating objective performance reports from the compliance repository (registry, risk register, SoA, training records).

**Review cadence:** Objectives are formally updated semi-annually, aligned with the AI Policy (HH-AIMS-POL-001) review cycle (next review: August 2026). The semi-annual review evaluates whether objectives remain relevant, targets are appropriate, and measurement methods are effective.

**Extraordinary review triggers:**
- New AI system deployment (may require new objectives or adjusted targets)
- Regulatory change (EU AI Act implementing acts, new ISO 42001 guidance)
- Significant AI incident (may reveal gaps in current objectives)
- ISO 42001 audit findings (auditor feedback on objective appropriateness)
- Change in organizational context (team growth, new product line, market expansion)

---

## 4. Communication

AIMS objectives are communicated to all team members through the following mechanisms:

1. **Document availability:** This document is maintained in the compliance repository (policies/aims-objectives.md) and accessible to all personnel with repository access
2. **Monthly Strategic meeting:** Objective performance is presented and discussed at each Monthly Strategic meeting, ensuring all governance participants are aware of current status
3. **AI Policy training:** AIMS objectives are referenced in AI Policy training materials, establishing the connection between policy commitments and measurable targets
4. **Agent reference directories:** All 7 Claude Code agents have access to AIMS objectives context through their reference directories, enabling agents to align their artifact production with organizational AI governance goals

---

## 5. Traceability

Each AIMS objective traces to a specific AI Policy (HH-AIMS-POL-001) commitment. The complete traceability chain ensures that AI governance is not aspirational but operationally measurable:

```
AI Policy Commitment (HH-AIMS-POL-001)
    |
    +-- AIMS Objective (this document, HH-AIMS-OBJ-001)
          |
          +-- KPI (quantitative metric)
                |
                +-- Measurement Method (evidence source)
                      |
                      +-- Performance Data (collected per frequency)
                            |
                            +-- Monthly Strategic Meeting Review
                                  |
                                  +-- Corrective Action (if target not met)
```

**Traceability matrix:**

| Objective | AI Policy Source | KPI Source | Evidence Location |
|-----------|-----------------|-----------|-------------------|
| 1. Certification readiness | Section 2 (Management commitment) | AIMS SoA consolidated report | aims-soa/AIMS-SoA-Consolidated.md |
| 2. Registry completeness | Section 3, Principle 2 (Transparency) | Registry entry count vs. deployed systems | ai-registry/ |
| 3. Assessment currency | Section 3, Principle 3 (Accountability) | Risk register assessment dates | risks/ (ai-risk: true entries) |
| 4. AIA completion | Section 3, Principle 3 + cl. 6.1.4 | Registry last-impact-assessment dates | ai-registry/*.yml |
| 5. Prohibited practice | Section 5 (Prohibited Practices) | Incident register | Incident records |
| 6. AI literacy | Section 3, Principle 2 (Transparency) | Training completion records | Training records |
| 7. Human oversight | Section 3, Principle 1 (Human Oversight) | PR approval records | Git PR history |

---

## 6. Document Control

### Version History

| Version | Date | Author | Change Summary | Approved By |
|---------|------|--------|----------------|-------------|
| v1.0 | 2026-02-22 | CISO Agent | Initial release with 7 AIMS objectives | [CEO-SIGNOFF-REQUIRED] |

### Approval

This document is approved via Git Pull Request. The PR merge by CEO Helge Heupel constitutes formal approval per the document control framework (HH-ISMS-DOC-001).

### Related Documents

| Document ID | Title | Relationship |
|-------------|-------|-------------|
| HH-IMS-CTX-001 | IMS Context | Parent document; Section 8 references this document |
| HH-AIMS-POL-001 | AI Policy | Source of commitments from which objectives are derived |
| HH-AIMS-RMA-001 | AI Risk Assessment Procedure | Operationalizes Objective 3 (assessment currency) |
| HH-AIMS-AIA-001 | AI Impact Assessment Procedure | Operationalizes Objective 4 (AIA completion) |
| HH-AIMS-SOA-001 | AIMS SoA Consolidated | Evidence source for Objective 1 (certification readiness) |
| HH-AIMS-REG-001 | AI System Registry Summary | Evidence source for Objective 2 (registry completeness) |
| HH-ISMS-DOC-001 | Document Control Framework | Governs creation, review, and approval of this document |

---

*Document: policies/aims-objectives.md*
*Document ID: HH-AIMS-OBJ-001*
*AIMS Objectives for the Helge Heupel Group*
