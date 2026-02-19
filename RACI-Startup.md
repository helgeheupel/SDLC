# Helge Heupel Group -- Startup Phase Role Consolidation and RACI Matrix

| Field | Value |
|---|---|
| Document ID | HH-RACI-Startup-v1.0 |
| Version | 1.0 |
| Status | Draft |
| Effective Date | TBD |
| Review Cycle | Quarterly |
| Classification | Internal |

## Purpose

This document maps the 8 SDLC-v2 role archetypes (from [v2 S.7.2]) to the actual Helge Heupel Group startup team of 6 humans + 7 AI agents. It provides a RACI matrix so that any team member -- human or agent -- can identify who is Responsible, Accountable, Consulted, and Informed for any SDLC activity.

**Related documents:**
- [SDLC-v2-Startup.md](SDLC-v2-Startup.md) -- Startup SDLC companion document (activities derived from Startup-applicable items)
- [protocols/interaction-model.md](protocols/interaction-model.md) -- Agent interaction model (agent roles aligned with [interaction-model](protocols/interaction-model.md))
- [protocols/agent-qualifications.md](protocols/agent-qualifications.md) -- Agent qualification assignment (12 archetypes mapped to 7 agents)
- [governance-model.md](governance-model.md) -- 2-meeting governance model with risk-tiered criteria

---

## 1. Role Consolidation Mapping

SDLC-v2 Section 7.2 defines 8 generic role archetypes for a Startup organization. The HH Group maps these to 6 specific humans and 7 Claude Code AI agents. The mapping is informed by the [agent qualification assignment](protocols/agent-qualifications.md), which further maps 12 SDLC-v2 executive archetypes to the 7 agents.

### 1.1 Archetype-to-Team Mapping

| SDLC-v2 Role Archetype | Human(s) | Agent(s) | Notes |
|---|---|---|---|
| CTO | CTO | CTO Agent | CTO human owns architecture and AI engineering decisions; CTO Agent produces architecture artifacts, ADRs, and AI system designs |
| Product Owner | CEO + Strategy Partner | Product/Strategy Agent | CEO drives strategic alignment; Strategy Partner drives product. Agent produces OKR frameworks, WSJF scoring, and portfolio artifacts |
| Engineers | All humans contribute (IT Pentester primarily) | All specialist agents | Agents produce draft artifacts; humans code-review and approve. IT Pentester is Head of Platform (Azure infrastructure, penetration testing) |
| Security/Compliance Advisor | CISO | CISO Agent | Dedicated CISO (6th person per user decision). Agent produces IS/AI policies, risk assessments, compliance mappings, and audit evidence |
| Security Champion | IT Pentester | AppSec Agent | IT Pentester covers hands-on security testing. AppSec Agent produces threat models, SAST/DAST config, SBOM pipeline |
| AI Ethics Champion | CEO + CISO | AI Science Agent | CEO covers AI governance as part of CISO responsibilities at Startup. AI Science Agent produces AI research assessments and ISO 42001 Annex A artifacts |
| SRE Lead | IT Pentester | Platform/SRE Agent | IT Pentester is Head of Platform per user decision. Agent produces SLO frameworks, observability configs, incident management, BCP/DR |
| Compliance Lead | CISO | CISO Agent | CISO covers EU compliance (NIS2, GDPR, EU AI Act) + AI governance (ISO 42001). Agent produces compliance frameworks and unified control mappings |

### 1.2 CEO Special Dual Functional Role

**CEO (Helge Heupel)** holds a unique position in the Startup organization:

- **Orchestrator:** Primary interface for all AI agents via the SDLC Lead Agent; coordinates multi-agent workflows and routes work to specialists
- **CISO Responsibilities:** Covers information security governance, risk acceptance, and AI governance until dedicated CISO is fully ramped. At Startup, CEO is interim sign-off authority for all security policies
- **Product/Strategy:** Co-drives product direction with Strategy Partner; owns strategic vision, OKR definition, and investment thesis
- **Ultimate Sign-Off Authority:** Final approver for ALL policies, risk acceptance decisions, and strategic direction across all 3 entities (GmbH, B.V., Inc.)

The SDLC Lead Agent serves as the CEO's primary AI interface for complex orchestration. For focused single-domain tasks, the CEO engages specialist agents directly (see [interaction-model](protocols/interaction-model.md) Section 4: Entry Point Decision Matrix).

---

## 2. Human Role Profiles

### 2.1 CEO (Helge Heupel)

| Field | Detail |
|---|---|
| SDLC-v2 Archetype | Orchestrator + Product Owner (partial) + AI Ethics Champion (partial) |
| Primary Responsibilities | Strategic vision, ultimate policy approval, risk acceptance, AI governance leadership, product direction, multi-agent orchestration |
| Agent Counterpart(s) | SDLC Lead Agent (orchestration), Product/Strategy Agent (strategic artifacts) |
| RACI Role | **A (Accountable)** for all policies, risk acceptance, and strategic decisions. R for orchestration and product direction |

### 2.2 Strategy Partner

| Field | Detail |
|---|---|
| SDLC-v2 Archetype | Product Owner (primary) |
| Primary Responsibilities | Product roadmap, user story validation, market analysis, prioritization, stakeholder engagement |
| Agent Counterpart(s) | Product/Strategy Agent |
| RACI Role | R for product roadmap and requirements. C on strategic decisions |

### 2.3 Finance Industry Senior Manager

| Field | Detail |
|---|---|
| SDLC-v2 Archetype | Advisory (no direct archetype mapping) |
| Primary Responsibilities | Domain expertise in financial industry compliance, market strategy advice, regulatory landscape guidance |
| Agent Counterpart(s) | None (advisory role, not agent-backed) |
| RACI Role | **C (Consulted)** on financial risk, market strategy, and industry-specific compliance. I on most SDLC activities |

### 2.4 IT Pentester / Super Admin (Azure)

| Field | Detail |
|---|---|
| SDLC-v2 Archetype | Engineers + Security Champion + SRE Lead |
| Primary Responsibilities | Azure infrastructure, penetration testing, platform operations, security testing, incident response |
| Agent Counterpart(s) | Platform/SRE Agent (infrastructure, operations), AppSec Agent (security testing) |
| RACI Role | R for infrastructure, security testing, and platform operations. A for deployment execution and platform decisions |

### 2.5 CTO

| Field | Detail |
|---|---|
| SDLC-v2 Archetype | CTO |
| Primary Responsibilities | Architecture decisions, AI system design, technology evaluation, code review authority, ADR ownership |
| Agent Counterpart(s) | CTO Agent |
| RACI Role | **A (Accountable)** for technical architecture decisions. R for AI engineering and technology strategy |

### 2.6 CISO

| Field | Detail |
|---|---|
| SDLC-v2 Archetype | Security/Compliance Advisor + Compliance Lead |
| Primary Responsibilities | IS policy drafting, risk assessment, ISMS management, NIS2 compliance, TISAX maintenance, ISO 42001 AI governance, EU AI Act conformity |
| Agent Counterpart(s) | CISO Agent |
| RACI Role | **A (Accountable)** for security policies (under CEO sign-off). R for compliance frameworks and risk assessment |

---

## 3. RACI Matrix

### 3.1 How to Read This Matrix

- **R (Responsible):** Does the work. Produces the artifact or executes the activity.
- **A (Accountable):** Owns the outcome. Approves and signs off. **Always exactly one A per row, always a human.**
- **C (Consulted):** Provides input before or during the work. Two-way communication.
- **I (Informed):** Notified of outcomes. One-way communication.

**Column abbreviations:**
- Humans: **CEO** = CEO (Helge Heupel), **SP** = Strategy Partner, **FSM** = Finance Industry Senior Manager, **ITP** = IT Pentester / Super Admin, **CTO** = CTO, **CISO** = CISO
- Agents: **SL** = SDLC Lead Agent, **CTOa** = CTO Agent, **CISOa** = CISO Agent, **AIS** = AI Science Agent, **PLT** = Platform/SRE Agent, **PRD** = Product/Strategy Agent, **SEC** = AppSec Agent

**Rules:**
- Every row has exactly one **A** -- always in a human column (columns 1-6)
- An agent that is **R** must have a human that is **A** in the same row
- Agents are never **A** (agents produce; humans own risk)
- Agent activities are initiated by humans -- agents do not self-start

### 3.2 RACI Matrix

**Legend:** R = Responsible, A = Accountable, C = Consulted, I = Informed, -- = Not involved

#### Strategy and Planning

| # | SDLC Activity [v2 Reference] | CEO | SP | FSM | ITP | CTO | CISO | SL | CTOa | CISOa | AIS | PLT | PRD | SEC |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Strategic vision and OKR definition [v2 S.2] | A | R | C | I | C | C | I | -- | -- | -- | -- | R | -- |
| 2 | Product roadmap and prioritization [v2 S.2.3] | A | R | C | I | C | I | I | -- | -- | -- | -- | R | -- |
| 3 | Investment thesis development [v2 S.2] | A | R | C | I | C | I | I | -- | -- | -- | -- | R | -- |

#### Requirements and Design

| # | SDLC Activity [v2 Reference] | CEO | SP | FSM | ITP | CTO | CISO | SL | CTOa | CISOa | AIS | PLT | PRD | SEC |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 4 | Requirements capture and user story creation [v2 S.9.2] | I | A | I | I | C | I | -- | -- | -- | -- | -- | R | -- |
| 5 | Threat modeling (per feature/system) [v2 S.9.2, S.12] | I | I | -- | C | A | C | -- | C | C | -- | -- | -- | R |
| 6 | Architecture decisions and ADRs [v2 S.9.1] | C | I | -- | C | A | C | -- | R | -- | C | C | -- | -- |
| 7 | AI system design [v2 S.10, S.11] | C | I | -- | -- | A | C | -- | R | C | R | -- | -- | -- |

#### Development

| # | SDLC Activity [v2 Reference] | CEO | SP | FSM | ITP | CTO | CISO | SL | CTOa | CISOa | AIS | PLT | PRD | SEC |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 8 | Code development and review [v2 S.9.3] | I | I | -- | R | A | I | -- | R | -- | -- | R | -- | -- |
| 9 | AI prompt engineering [v2 S.10.4] | I | I | -- | -- | A | I | -- | R | -- | C | -- | -- | -- |
| 10 | Security code review [v2 S.9.3, S.12] | I | -- | -- | R | C | A | -- | C | R | -- | -- | -- | R |
| 11 | Infrastructure as Code [v2 S.15.6] | I | -- | -- | A | C | I | -- | C | -- | -- | R | -- | -- |

#### Testing

| # | SDLC Activity [v2 Reference] | CEO | SP | FSM | ITP | CTO | CISO | SL | CTOa | CISOa | AIS | PLT | PRD | SEC |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 12 | Unit/integration/e2e testing [v2 S.9.4] | I | I | -- | R | A | I | -- | R | -- | -- | R | -- | -- |
| 13 | Security testing (SAST/DAST) [v2 S.9.4, S.12] | I | -- | -- | R | C | A | -- | -- | C | -- | -- | -- | R |
| 14 | AI model testing and validation [v2 S.9.4, S.11] | I | I | -- | -- | A | C | -- | C | -- | R | -- | -- | -- |

#### Deployment and Operations

| # | SDLC Activity [v2 Reference] | CEO | SP | FSM | ITP | CTO | CISO | SL | CTOa | CISOa | AIS | PLT | PRD | SEC |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 15 | Deployment approval and execution [v2 S.9.5] | I | I | -- | R | A | C | -- | -- | -- | -- | R | -- | -- |
| 16 | Incident management and response [v2 S.16.2] | C | I | -- | R | C | A | -- | -- | C | -- | R | -- | -- |
| 17 | NIS2 incident reporting [v2 S.12.4, S.16] | A | I | -- | C | I | R | -- | -- | R | -- | R | -- | -- |
| 18 | Monitoring and alerting [v2 S.16.1] | I | I | -- | A | C | I | -- | -- | -- | -- | R | -- | -- |
| 19 | Disaster recovery planning [v2 S.16.4] | C | I | -- | R | C | A | -- | C | C | -- | R | -- | -- |

#### Compliance and Governance

| # | SDLC Activity [v2 Reference] | CEO | SP | FSM | ITP | CTO | CISO | SL | CTOa | CISOa | AIS | PLT | PRD | SEC |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 20 | IS Policy drafting and review [v2 S.12, S.6] | A | I | I | I | C | R | -- | -- | R | -- | -- | -- | -- |
| 21 | AI Policy drafting and review [v2 S.10, S.11] | A | I | I | I | C | R | -- | -- | R | R | -- | -- | -- |
| 22 | Risk assessment and register maintenance [v2 S.5] | A | I | C | C | C | R | -- | -- | R | C | C | -- | -- |
| 23 | Statement of Applicability maintenance [v2 S.6] | A | I | -- | I | C | R | -- | -- | R | -- | -- | -- | -- |
| 24 | Internal audit execution [v2 S.13.5] | A | I | -- | C | C | R | -- | -- | R | -- | -- | -- | -- |
| 25 | Management review preparation [v2 S.13.3] | A | C | C | I | C | R | R | -- | R | -- | -- | C | -- |
| 26 | ISO 42001 Annex A control implementation [v2 S.11] | A | I | -- | I | C | R | -- | C | R | R | -- | -- | -- |
| 27 | TISAX evidence maintenance [v2 S.6, S.13.5] | A | I | -- | C | I | R | -- | -- | R | -- | C | -- | -- |
| 28 | Document control and version management [v2 S.7.5] | A | I | -- | I | I | R | C | -- | R | -- | -- | -- | -- |

#### Agent-Specific

| # | SDLC Activity [v2 Reference] | CEO | SP | FSM | ITP | CTO | CISO | SL | CTOa | CISOa | AIS | PLT | PRD | SEC |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 29 | Agent creation and configuration [v2 S.7.5] | A | I | -- | I | R | C | C | -- | -- | -- | -- | -- | -- |
| 30 | Agent output review and approval [v2 S.8] | A | C | -- | C | R | R | I | -- | -- | -- | -- | -- | -- |
| 31 | Subagent spawning governance [v2 S.7.5] | A | I | -- | I | C | C | R | -- | -- | -- | -- | -- | -- |
| 32 | HANDOFF.md review and routing [v2 S.7.5] | A | I | -- | I | C | C | R | -- | -- | -- | -- | -- | -- |

---

## 4. Reading the RACI

### 4.1 How to Find Who Owns an Activity

1. **Find the SDLC activity** in the matrix above (Section 3.2), grouped by domain
2. **Look across the row** to find the letters:
   - **A** = The one person who is accountable (always a human). This person approves the final output.
   - **R** = The one(s) doing the work. May include both humans and agents.
   - **C** = People/agents to consult before or during the work.
   - **I** = People/agents to notify after the work is done.
3. If you are **unsure which activity applies**, ask the CEO (ultimate orchestrator) or consult the SDLC Lead Agent for routing

### 4.2 What to Do Based on Your RACI Role

| Your Letter | Your Action |
|---|---|
| **R (Responsible)** | You produce the work. Create the artifact, execute the task, or coordinate its completion. Ensure it meets the Definition of Done. |
| **A (Accountable)** | You own the outcome. Review the work produced by R, approve or request changes. You sign off via PR merge or explicit approval. If the work fails, you are answerable. |
| **C (Consulted)** | You provide input. When contacted by R, respond with your expertise. Your input should be sought BEFORE the work is finalized. Two-way dialogue. |
| **I (Informed)** | You receive notification. After the work is completed and approved by A, you are notified of the outcome. One-way communication. No action required unless you spot an issue. |

### 4.3 Escalation Path

1. **Unclear ownership:** Ask the CEO (ultimate orchestrator for all SDLC activities)
2. **Cross-domain conflict:** The SDLC Lead Agent identifies conflicts; CEO resolves
3. **Agent output dispute:** The human A (Accountable) has final authority over agent-produced artifacts
4. **Risk acceptance:** Only the CEO can accept residual risk for the organization

### 4.4 Agent Initiation Rule

Agents do not self-start. All agent activities are initiated by a human:
- **Standalone mode:** CEO (or delegated human) loads the agent and provides the task
- **Multi-agent mode:** CEO loads the SDLC Lead Agent, which spawns specialists via the Task tool
- **No autonomous agent action:** Agents produce draft artifacts; humans initiate, review, and approve

See [protocols/interaction-model.md](protocols/interaction-model.md) for the complete agent operational model.

---

## 5. Growth Transition

### 5.1 How the RACI Evolves at Growth Phase

As the organization grows beyond the initial 6 humans + 7 agents, the RACI matrix will change:

**Additional Humans Join:**
- Dedicated UX Designer: Takes R for accessibility and UX activities (currently handled informally)
- Additional Engineers: Share R for code development and testing (currently concentrated on IT Pentester)
- Dedicated DPO (Data Protection Officer): Takes R for GDPR/DPIA activities
- Security Champion (full-time): Reduces CISO load for day-to-day security review

**Agents Take on More R Responsibilities:**
- Trust level promotion (Level 2 to Level 3) allows agents more autonomous R assignments
- Promotion criteria: 30+ interactions with demonstrated accuracy, CEO approval (per [v2 S.7.5])
- Example: CTO Agent at Level 3 could auto-approve Low-risk ADRs (still reviewed post-hoc)

**New Activities Emerge:**
- Formal UX governance and design system management
- Chaos engineering and reliability testing
- Formal process assessment (ISO 33000)
- Multi-team coordination ceremonies (PI Planning, ART Sync)
- Separate governance bodies replacing the 2-meeting structure

**Reference:** SDLC-v2 Section 7.3 for Growth organization model; Section 4.5 for transition triggers.

### 5.2 Transition Triggers

The RACI matrix should be updated when any of the following occur:
- Team exceeds 12 people (including AI teammates counted by load)
- New human role is hired that changes responsibility assignments
- Agent trust level is promoted to Level 3 (changes R assignments)
- New SDLC activity domain is added (e.g., formal UX governance)
- Governance model transitions from 2 meetings to formal board structure

---

*Document: RACI-Startup.md*
*Document ID: HH-RACI-Startup-v1.0*
*Created during Phase 1 Plan 04*
*Reference: SDLC-v2 [v2 S.7.2], [interaction-model](protocols/interaction-model.md)*
