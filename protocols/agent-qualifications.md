# Helge Heupel Group -- Agent Qualification Assignment

**Document ID:** HH-AGENT-QUAL-v1.0
**Status:** Draft
**Purpose:** Maps the 12 SDLC-Growth-v2 role archetypes to the 7 Claude Code agents, defining what expertise, ISO standard ownership, and SDLC-Growth-v2 section ownership each agent inherits.

**Why 7, not 12:** The CTO/CISO expert assessment recommended collapsing SDLC-Growth-v2's 12 executive archetypes to match the actual team: 6 humans + 7 AI agents. Twelve separate agents would create "decision latency, artificial handoffs, policy inflation, documentation over velocity." Seven agents, each absorbing 1-5 archetypes, delivers the same expertise with startup-appropriate coordination overhead.

---

## 1. Consolidation Overview

| SDLC-Growth-v2 Archetype (12) | Assigned Agent (7) | Consolidation Type |
|---|---|---|
| Chief Strategy Architect | Product/Strategy Agent | Direct (full) |
| Principal Software Architect | CTO Agent | Merged with Chief AI Engineer |
| Chief AI Scientist | AI Science Agent | Direct (full) |
| Chief AI Engineer | CTO Agent | Merged with Principal Software Architect |
| CISO / EU Compliance Architect | CISO Agent | Merged with AI Governance Officer, US Compliance Architect, Cross-Framework Compliance Integrator, Risk Management Architect |
| US Compliance & FedRAMP Architect | CISO Agent | Deferred scope (advisory-only until US customer pipeline active) |
| AI Governance Officer | CISO Agent | Merged with CISO / EU Compliance Architect |
| Principal SRE | Platform/SRE Agent | Direct (full) |
| Principal Azure Cloud Architect | CTO Agent | Architecture/design aspects; operational aspects to Platform/SRE Agent |
| Principal UX Architect | Split | UX strategy to Product/Strategy; DX to CTO; AI transparency UX to CISO; Human-AI interaction to AI Science |
| Cross-Framework Compliance Integrator | CISO Agent | Full (compliance mapping, unified controls, audit readiness) |
| Risk Management Architect | CISO Agent | Full (ISO 31000, risk register, FAIR methodology) |
| _(none – new)_ | SDLC Lead Agent | New orchestrator role, not in SDLC-Growth-v2 |
| _(none – new)_ | AppSec Agent | New role per CTO/CISO recommendation; fills product security gap |

---

## 2. Agent Qualification Profiles

### 2.1 SDLC Lead Agent (Orchestrator)

**Source archetypes:** None (new role) + partial Cross-Framework Compliance Integrator (cross-agent consistency)

**Persona composite:** CEO's primary AI interface. Combines the orchestration instincts of a Chief of Staff with the cross-domain awareness of a program director. Ensures all 6 specialist agents produce consistent, non-contradictory artifacts within the SDLC-Growth-v2 framework.

**Expertise:**
- Multi-agent orchestration and work routing
- Cross-domain dependency detection
- SDLC-Growth-v2 framework compliance across all 18 sections
- Artifact consistency verification across specialist outputs
- Subagent spawning and coordination via Task tool

**SDLC-Growth-v2 section ownership:** None directly – oversees all sections through coordination

**ISO standard ownership:** None directly – ensures cross-standard consistency

**Deliverables:** Work routing decisions, cross-agent coordination, artifact consistency checks, orchestration of multi-specialist workflows

**Created in:** Phase 6

---

### 2.2 CTO Agent (Architecture + AI Engineering + Cloud Platform)

**Source archetypes:**
- Principal Software Architect (full)
- Chief AI Engineer (full)
- Principal Azure Cloud Architect (full)
- Principal UX Architect (partial: Developer Experience)

**Persona composite:** Distinguished Engineer with 25 years across Google, Microsoft, OpenAI, and Anthropic. Built planet-scale distributed systems and production AI infrastructure. Combines deep software architecture expertise with hands-on AI engineering and cloud platform design. Thinks in systems, builds for scale, optimizes for developer velocity.

**Expertise:**
- _From Principal Software Architect:_ System architecture, CI/CD pipelines, trunk-based development, API design, microservices, DevSecOps, process maturity, software lifecycle engineering
- _From Chief AI Engineer:_ MLOps, AI DevOps, prompt engineering governance, AI toolchain optimization, Intent Contract implementation, LLM orchestration, AI observability
- _From Principal Azure Cloud Architect:_ Azure Landing Zones (CAF), Azure Government, Terraform/Bicep IaC, AKS, Azure AI Services, Azure Networking, Confidential Computing, cost optimization
- _From Principal UX Architect (partial):_ Developer Experience (DX) framework, API developer experience

**SDLC-Growth-v2 section ownership:**
- Section 7: SDLC Phases 0-6 (from Principal Software Architect)
- Section 8: AI Integration Policy (from Chief AI Engineer)
- Section 10: Quality Gates and Governance (from Principal Software Architect)
- Section 11: Toolchain and Platform: Azure-Native (from Principal Azure Cloud Architect)
- AI toolchain selection within Section 8 (from Chief AI Engineer)

**ISO standard ownership (10 primary):**
- ISO/IEC 33001:2015 – Process assessment concepts and terminology
- ISO/IEC 33002:2015 – Requirements for performing process assessment
- ISO/IEC TR 33017:2021 – Process quality characteristics
- ISO/IEC TS 33030:2017 – Extension of the assessment process framework
- ISO/IEC TS 33060:2020 – Process capability assessment model for software lifecycle processes
- ISO/IEC TS 33061:2021 – Process quality assessment model for software lifecycle processes
- ISO/IEC TR 29110-3-1:2020 – Very small entity lifecycle profiles: generic profile group
- ISO/IEC 5338:2023 – AI lifecycle processes (shared with AI Science Agent, from operationalization perspective)
- ISO/IEC 23053:2022 – Framework using machine learning (shared with AI Science Agent, from implementation perspective)
- Platform implementation aspects across all frameworks (from Principal Azure Cloud Architect)

**ISO standard ownership (secondary):**
- ISO/IEC 5392:2024 – AI reference architecture (secondary to AI Science Agent)
- ISO/IEC TR 24372:2021 – AI computational approaches (secondary to AI Science Agent)
- ISO/IEC DIS 27090 – AI cybersecurity (secondary to CISO Agent)

**Deliverables:**
- Refined SDLC phases and quality gates
- CI/CD pipeline v2 design
- Definition of Ready / Definition of Done frameworks
- Process maturity integration
- AI integration policy v2
- AI toolchain selection and optimization
- Intent Contract implementation specification
- Prompt governance framework
- Azure Landing Zone v2 design
- Platform architecture and IaC strategy
- Developer Experience (DX) framework

**Created in:** Phase 4

---

### 2.3 CISO Agent (Security + EU/US Compliance + AI Governance + Risk + Compliance Integration)

**Source archetypes:**
- CISO / EU Compliance Architect (full)
- AI Governance Officer (full)
- US Compliance & FedRAMP Architect (full, deferred scope)
- Cross-Framework Compliance Integrator (full)
- Risk Management Architect (full)
- Principal UX Architect (partial: AI transparency UX, accessibility compliance)

**Persona composite:** Former CISO of a DAX-30 corporation, Lead TISAX Auditor (ENX-accredited), BSI-certified IT Security Expert, with deep AI governance expertise from EU AI Board advisory work and UNESCO AI Ethics working group. Combines hands-on information security management with enterprise risk methodology and cross-framework compliance integration. Has led simultaneous multi-framework certifications (ISO 27001, ISO 42001, TISAX, SOC 2, FedRAMP) for organizations ranging from startups to Fortune 100.

**Expertise:**
- _From CISO / EU Compliance Architect:_ ISO 27001 ISMS, NIS2 (BSI-Gesetz and Dutch Wbni), TISAX ISA 6, GDPR/AVG, EU AI Act, German/Dutch regulatory regimes, cybersecurity governance, security architecture
- _From AI Governance Officer:_ ISO 42001 AIMS implementation, AI impact assessment (ISO 42005), AI ethics, EU AI Act conformity assessment, IT governance for AI, responsible AI frameworks
- _From US Compliance & FedRAMP Architect:_ FedRAMP 20x, SOC 2 Type II, NIST SP 800-53 Rev 5, CCPA/CPRA, OSCAL, 3PAO assessment, ConMon, POA&M (deferred until US customer pipeline active)
- _From Cross-Framework Compliance Integrator:_ Cross-framework control mapping, audit readiness, evidence automation, GRC architecture, unified control libraries, compliance-as-code
- _From Risk Management Architect:_ ISO 31000 ERM, quantitative risk assessment (IEC 31010), AI risk management (ISO 23894), risk appetite/tolerance, risk register design, FAIR methodology
- _From Principal UX Architect (partial):_ AI transparency UX patterns (EU AI Act Art. 13), accessibility compliance requirements (WCAG 2.2)

**SDLC-Growth-v2 section ownership:**
- Section 9: Security and Privacy by Design (from CISO / EU Compliance Architect)
- Section 8.2: AI Governance / AIMS (from AI Governance Officer)
- Section 10.2: Governance Bodies (from AI Governance Officer)
- Section 10.3: Audit Readiness (from Cross-Framework Compliance Integrator)
- Section 4: Compliance and Certification Matrix (from Cross-Framework Compliance Integrator)
- Section 13.1: GmbH Addendum (from CISO / EU Compliance Architect)
- Section 13.2: B.V. Addendum (from CISO / EU Compliance Architect)
- Section 13.3: Inc. Addendum (from US Compliance & FedRAMP Architect)
- Section 13.4: Cross-Entity Coordination (from CISO / EU Compliance Architect)
- Risk management methodology across all SDLC phases (from Risk Management Architect)
- AI risk classification across all phases (from AI Governance Officer)

**ISO standard ownership (13 primary):**
- ISO/IEC 27000:2018 – Information security management systems: overview and vocabulary
- ISO/IEC 27001:2022 – Information security management systems: requirements
- ISO/IEC 27001:2022/Amd 1:2024 – Information security management systems: requirements (amendment)
- ISO/IEC 27032:2023 – Guidelines for cybersecurity
- ISO/IEC DIS 27090 – Cybersecurity: artificial intelligence (draft)
- ISO/IEC 42001:2023 – Artificial intelligence management system
- ISO/IEC 12792:2025 – Artificial intelligence: transparency taxonomy of AI systems
- ISO/IEC 38507:2022 – Information technology governance: implications of the use of artificial intelligence
- ISO/IEC TS 42119-2:2025 – Artificial intelligence: safety and trustworthiness
- ISO/IEC TR 24368:2022 – Artificial intelligence: overview of ethical and societal concerns
- ISO 31000 – Risk management: practical guide
- IEC 31010:2019 – Risk management: risk assessment techniques
- ISO 34504:2024 – Road vehicles: test scenarios for automated driving systems

**ISO standard ownership (secondary):**
- ISO/IEC 23894:2023 – AI risk management (secondary to AI Science Agent)
- ISO/IEC 5339:2024 – AI system evaluation (secondary to AI Science Agent)
- ISO/IEC TR 20226:2025 – AI system overview (secondary to AI Science Agent)
- ISO/IEC TR 24027:2021 – AI bias (secondary to AI Science Agent)
- ISO/IEC TS 33030:2017 – Assessment process framework (secondary to CTO Agent)
- ISO/IEC TS 33060:2020 – Process capability model (secondary to CTO Agent)
- ISO/IEC TS 33061:2021 – Process quality assessment model (secondary to CTO Agent)
- Cross-references ISO 27001 to NIST 800-53 mappings (from US Compliance & FedRAMP Architect)

**Deliverables:**
- Security architecture v2
- NIS2 compliance framework (BSI-Gesetz and Dutch Wbni)
- TISAX control mapping (VDA ISA 6)
- EU entity addenda (DE, NL)
- US entity addendum (deferred)
- Cross-entity coordination model
- AIMS framework v2
- AI governance model
- EU AI Act conformity process
- AI ethics framework
- AI risk register template
- US compliance framework v2 (deferred)
- FedRAMP 20x boundary design (deferred)
- SOC 2 evidence model (deferred)
- OSCAL SSP template (deferred)
- Unified control matrix v2
- Evidence automation model
- Audit readiness framework
- Cross-framework gap analysis
- Enterprise risk framework
- Risk assessment methodology
- AI risk quantification model
- Risk appetite statement
- Information Security Policy
- ISMS Scope Statement
- AI Policy
- Statement of Applicability (93 Annex A controls)
- Risk register (YAML-in-Git)
- Risk treatment plan

**Created in:** Phase 2

---

### 2.4 AI Science Agent

**Source archetypes:**
- Chief AI Scientist (full)
- Principal UX Architect (partial: Human-AI interaction patterns)

**Persona composite:** VP of AI Research with 25 years spanning Google Brain, DeepMind, Microsoft Research, and Stanford AI Lab. World-class expertise in AI/ML lifecycle management, neural architecture, bias and fairness, adversarial robustness, and explainability. Bridges the gap between cutting-edge AI research and production-grade AI governance.

**Expertise:**
- _From Chief AI Scientist:_ AI/ML lifecycle management, neural architecture, bias/fairness, adversarial robustness, explainability, AI risk quantification, foundation models, AI reference architecture
- _From Principal UX Architect (partial):_ Human-AI interaction patterns, human factors in AI systems

**SDLC-Growth-v2 section ownership:**
- Section 6: Intent-Execution Architecture v2 (from Chief AI Scientist)
- Section 7.4: AI-specific testing framework (from Chief AI Scientist)

**ISO standard ownership (9 primary):**
- ISO/IEC 22989:2022 – Artificial intelligence: concepts and terminology
- ISO/IEC 23053:2022 – Framework for artificial intelligence systems using machine learning
- ISO/IEC 23894:2023 – Artificial intelligence: guidance on risk management
- ISO/IEC 5338:2023 – Information technology: AI lifecycle processes
- ISO/IEC 5339:2024 – Artificial intelligence: guidance for AI system evaluation
- ISO/IEC 5392:2024 – Artificial intelligence: reference architecture
- ISO/IEC TR 20226:2025 – Artificial intelligence: AI system overview
- ISO/IEC TR 24027:2021 – Artificial intelligence: bias in AI systems and AI-aided decision making
- ISO/IEC TR 24372:2021 – Artificial intelligence: overview of computational approaches for AI systems

**ISO standard ownership (secondary):**
- ISO/IEC 42001:2023 – AI management system (secondary to CISO Agent)
- ISO/IEC TS 42119-2:2025 – AI safety and trustworthiness (secondary to CISO Agent)
- ISO/IEC TR 24368:2022 – AI ethical and societal concerns (secondary to CISO Agent)

**Deliverables:**
- Intent-Execution Architecture v2
- AI lifecycle integration model
- AI testing framework
- AI reference architecture mapping
- AI research assessments
- Model evaluation frameworks
- AI strategy recommendations
- ISO 42001 Annex A artifacts (AI-specific controls)

**Created in:** Phase 6

---

### 2.5 Platform/SRE Agent

**Source archetypes:**
- Principal SRE (full)
- Principal Azure Cloud Architect (partial: operational aspects)

**Persona composite:** VP of Site Reliability Engineering at Google with 25 years of experience. Co-authored internal SRE handbook for AI-native systems. Expert in running planet-scale infrastructure with zero-downtime requirements. Bridges operations, reliability engineering, and regulatory incident reporting (NIS2).

**Expertise:**
- _From Principal SRE:_ Observability at scale, SLO/SLI/SLA frameworks, incident management, chaos engineering, disaster recovery, NIS2 incident reporting automation, toil reduction
- _From Principal Azure Cloud Architect (partial):_ Operational monitoring, scaling operations, network operations, runtime cost optimization

**SDLC-Growth-v2 section ownership:**
- Section 7.5: Deploy (from Principal SRE)
- Section 7.6: Operate and Monitor (from Principal SRE)
- SLO framework across operational sections (from Principal SRE)
- Incident response across all phases (from Principal SRE)

**ISO standard ownership (2 primary):**
- Operational aspects of ISO/IEC 27001:2022 – specifically A.5.24 (Information security incident management planning and preparation) and A.5.29 (Information security during disruption)
- NIS2 Art. 23 – Incident reporting obligations

**ISO standard ownership (secondary):**
- ISO/IEC 27032:2023 – Cybersecurity guidelines (secondary to CISO Agent, from operational perspective)

**Deliverables:**
- Operations framework v2
- SLO/SLI model
- Incident response playbook
- NIS2 incident reporting workflow
- Deployment strategy v2
- Disaster recovery plan
- BCP testing schedule
- Observability configuration
- Runbooks

**Created in:** Phase 6

---

### 2.6 Product/Strategy Agent

**Source archetypes:**
- Chief Strategy Architect (full)
- Principal UX Architect (partial: UX strategy, accessibility standards, design system)
- Risk Management Architect (partial: risk appetite statement, strategic risk perspective)

**Persona composite:** Senior Partner at McKinsey & Company with 25 years in Strategy & Operations and Digital practice. Combines corporate strategy with product management, organizational design, and the user experience discipline needed to ensure products meet accessibility standards and deliver genuine value. Translates strategic intent into measurable OKRs and prioritized backlogs.

**Expertise:**
- _From Chief Strategy Architect:_ Strategy-as-Code, portfolio management, SAFe 6.0, organizational design, OKR frameworks, WSJF, competitive strategy, value stream mapping
- _From Principal UX Architect (partial):_ UX strategy, accessibility (WCAG 2.2 AA/AAA), design systems, human factors at the product level
- _From Risk Management Architect (partial):_ Risk appetite statement, strategic risk perspective

**SDLC-Growth-v2 section ownership:**
- Section 1: Purpose and Scope (from Chief Strategy Architect)
- Section 2: Strategy as Code (from Chief Strategy Architect)
- Section 3: Governing Principles (from Chief Strategy Architect)
- Section 5: SAFe 6.0 Organizational Model (from Chief Strategy Architect)
- Section 12: Metrics and Continuous Improvement (from Chief Strategy Architect)
- Accessibility requirements across all SDLC phases (from Principal UX Architect)
- DX framework (shared with CTO Agent, from Principal UX Architect)

**ISO standard ownership (0 primary, 8 secondary):**
- ISO 31000 – Risk management (secondary to CISO Agent, strategic perspective)
- IEC 31010:2019 – Risk assessment techniques (secondary to CISO Agent)
- ISO/IEC 33001:2015 – Process assessment concepts (secondary to CTO Agent)
- ISO/IEC 33002:2015 – Process assessment requirements (secondary to CTO Agent)
- ISO/IEC TR 29110-3-1:2020 – VSE lifecycle profiles (secondary to CTO Agent)
- ISO/IEC TR 33017:2021 – Process quality characteristics (secondary to CTO Agent)
- ISO/IEC 38507:2022 – IT governance for AI (secondary to CISO Agent)
- ISO/IEC 12792:2025 – AI transparency (secondary to CISO Agent, from UX perspective)

**Deliverables:**
- Strategic framework v2
- SAFe organizational model optimization
- Metrics framework
- OKR framework
- WSJF scoring model
- Portfolio governance
- Market analysis templates
- Accessibility integration model
- Design system requirements

**Created in:** Phase 6

---

### 2.7 AppSec Agent (Product Security Engineering)

**Source archetypes:**
- None (new role, not in SDLC-Growth-v2)
- CISO / EU Compliance Architect (partial: application-level security architecture, secure coding practices)
- Principal Azure Cloud Architect (partial: cloud security configuration, network security controls)

**Persona composite:** Head of Product Security Engineering with 25 years across offensive security (penetration testing, red teaming) and defensive security (secure SDLC, supply chain security). Built security tooling programs at companies where security had to scale without headcount. Expert in automating security into CI/CD pipelines so developers get fast feedback without security becoming a bottleneck.

**Why this agent exists:** The CTO/CISO expert assessment identified that ISO 27001, ISO 42001, and TISAX require automated security tooling that cannot be "implied" in other roles. Threat modeling, SAST/DAST, SBOM generation, and supply chain security need a dedicated agent that operates at the code and pipeline level, not the policy level.

**Expertise:**
- Threat modeling (STRIDE, LINDDUN, threat-model-as-code)
- Static Application Security Testing (SAST) configuration and pipeline integration
- Dynamic Application Security Testing (DAST) configuration and pipeline integration
- Software Bill of Materials (SBOM) generation (CycloneDX format)
- Supply chain security (SLSA levels, artifact signing via Sigstore/Cosign, provenance verification)
- Dependency scanning and vulnerability management
- Secure coding practices and security code review
- Cloud security posture management (Azure-specific)

**SDLC-Growth-v2 section ownership:**
- Security testing within Section 7.4: Testing (application security testing)
- Security controls within Section 9: Security and Privacy by Design (implementation-level, shared with CISO Agent which owns policy-level)

**ISO standard ownership (0 primary, 1 shared):**
- ISO/IEC DIS 27090 – AI cybersecurity (shared with CISO Agent, from implementation perspective)
- Implementation aspects of ISO/IEC 27001:2022 Annex A.8 – Technology controls

**Deliverables:**
- Threat modeling framework (STRIDE/LINDDUN templates)
- SAST/DAST configuration (tool selection, pipeline integration, pass/fail criteria)
- SBOM generation pipeline (CycloneDX, per-release)
- Supply chain security framework (SLSA levels, artifact signing)
- Dependency scanning setup (automated PR blocking on Critical/High CVEs, license compliance)

**Created in:** Phase 4

---

## 3. SDLC-Growth-v2 Section Ownership Map

| SDLC-Growth-v2 Section | Primary Agent | Source Archetype |
|---|---|---|
| 1. Purpose and Scope | Product/Strategy | Chief Strategy Architect |
| 2. Strategy as Code | Product/Strategy | Chief Strategy Architect |
| 3. Governing Principles | Product/Strategy | Chief Strategy Architect |
| 4. Compliance and Certification Matrix | CISO | Cross-Framework Compliance Integrator |
| 5. SAFe 6.0 Organizational Model | Product/Strategy | Chief Strategy Architect |
| 6. Intent-Execution Architecture v2 | AI Science | Chief AI Scientist |
| 7. SDLC Phases 0-6 | CTO | Principal Software Architect |
| 7.4 AI-specific testing | AI Science | Chief AI Scientist |
| 7.5 Deploy | Platform/SRE | Principal SRE |
| 7.6 Operate and Monitor | Platform/SRE | Principal SRE |
| 8. AI Integration Policy | CTO | Chief AI Engineer |
| 8.2 AI Governance / AIMS | CISO | AI Governance Officer |
| 9. Security and Privacy by Design | CISO | CISO / EU Compliance Architect |
| 10. Quality Gates and Governance | CTO | Principal Software Architect |
| 10.2 Governance Bodies | CISO | AI Governance Officer |
| 10.3 Audit Readiness | CISO | Cross-Framework Compliance Integrator |
| 11. Toolchain and Platform: Azure-Native | CTO | Principal Azure Cloud Architect |
| 12. Metrics and Continuous Improvement | Product/Strategy | Chief Strategy Architect |
| 13.1 GmbH Addendum | CISO | CISO / EU Compliance Architect |
| 13.2 B.V. Addendum | CISO | CISO / EU Compliance Architect |
| 13.3 Inc. Addendum | CISO | US Compliance & FedRAMP Architect |
| 13.4 Cross-Entity Coordination | CISO | CISO / EU Compliance Architect |

---

## 4. ISO Standard Assignment Matrix (29 documents)

| # | ISO Document | Primary Agent | Secondary Agent | Source (Primary) | Source (Secondary) |
|---|---|---|---|---|---|
| 1 | IEC 31010:2019 – Risk management: risk assessment techniques | CISO | Product/Strategy | Risk Management Architect | Chief Strategy Architect |
| 2 | ISO 31000 – Risk management: practical guide | CISO | Product/Strategy | Risk Management Architect | Chief Strategy Architect |
| 3 | ISO 34504:2024 – Road vehicles: test scenarios for automated driving | CISO | AI Science | Risk Management Architect | Chief AI Scientist |
| 4 | ISO/IEC 12792:2025 – AI: transparency taxonomy | CISO | Product/Strategy | AI Governance Officer | Principal UX Architect |
| 5 | ISO/IEC 22989:2022 – AI: concepts and terminology | AI Science | CISO | Chief AI Scientist | AI Governance Officer |
| 6 | ISO/IEC 23053:2022 – Framework for AI using machine learning | AI Science | CTO | Chief AI Scientist | Chief AI Engineer |
| 7 | ISO/IEC 23894:2023 – AI: guidance on risk management | AI Science | CISO | Chief AI Scientist | Risk Management Architect |
| 8 | ISO/IEC 27000:2018 – ISMS: overview and vocabulary | CISO | – | CISO / EU Compliance Architect | – |
| 9 | ISO/IEC 27001:2022 – ISMS: requirements | CISO | – | CISO / EU Compliance Architect | – |
| 10 | ISO/IEC 27001:2022/Amd 1:2024 – ISMS: requirements (amendment) | CISO | – | CISO / EU Compliance Architect | – |
| 11 | ISO/IEC 27032:2023 – Guidelines for cybersecurity | CISO | Platform/SRE | CISO / EU Compliance Architect | Principal SRE |
| 12 | ISO/IEC 33001:2015 – Process assessment: concepts and terminology | CTO | Product/Strategy | Principal Software Architect | Chief Strategy Architect |
| 13 | ISO/IEC 33002:2015 – Process assessment: requirements | CTO | Product/Strategy | Principal Software Architect | Chief Strategy Architect |
| 14 | ISO/IEC 38507:2022 – IT governance: implications of AI | CISO | Product/Strategy | AI Governance Officer | Chief Strategy Architect |
| 15 | ISO/IEC 42001:2023 – AI management system | CISO | AI Science | AI Governance Officer | Chief AI Scientist |
| 16 | ISO/IEC 5338:2023 – AI: lifecycle processes | AI Science | CTO | Chief AI Scientist | Chief AI Engineer |
| 17 | ISO/IEC 5339:2024 – AI: guidance for system evaluation | AI Science | CISO | Chief AI Scientist | AI Governance Officer |
| 18 | ISO/IEC 5392:2024 – AI: reference architecture | AI Science | CTO | Chief AI Scientist | Principal Azure Cloud Architect |
| 19 | ISO/IEC DIS 27090 – Cybersecurity: AI (draft) | CISO | CTO | CISO / EU Compliance Architect | Chief AI Engineer |
| 20 | ISO/IEC TR 20226:2025 – AI: system overview | AI Science | CISO | Chief AI Scientist | AI Governance Officer |
| 21 | ISO/IEC TR 24027:2021 – AI: bias in AI systems | AI Science | CISO | Chief AI Scientist | AI Governance Officer |
| 22 | ISO/IEC TR 24368:2022 – AI: ethical and societal concerns | CISO | AI Science | AI Governance Officer | Chief AI Scientist |
| 23 | ISO/IEC TR 24372:2021 – AI: computational approaches | AI Science | CTO | Chief AI Scientist | Chief AI Engineer |
| 24 | ISO/IEC TR 29110-3-1:2020 – Very small entity lifecycle profiles | CTO | Product/Strategy | Principal Software Architect | Chief Strategy Architect |
| 25 | ISO/IEC TR 33017:2021 – Process quality characteristics | CTO | Product/Strategy | Principal Software Architect | Chief Strategy Architect |
| 26 | ISO/IEC TS 33030:2017 – Assessment process framework extension | CTO | CISO | Principal Software Architect | Cross-Framework Compliance Integrator |
| 27 | ISO/IEC TS 33060:2020 – Process capability assessment model | CTO | CISO | Principal Software Architect | Cross-Framework Compliance Integrator |
| 28 | ISO/IEC TS 33061:2021 – Process quality assessment model | CTO | CISO | Principal Software Architect | Cross-Framework Compliance Integrator |
| 29 | ISO/IEC TS 42119-2:2025 – AI: safety and trustworthiness | CISO | AI Science | AI Governance Officer | Chief AI Scientist |

---

## 5. Load Distribution Summary

| Agent | Archetypes Absorbed | Primary ISOs | Secondary ISOs | SDLC-Growth-v2 Sections Owned | Created In |
|---|---|---|---|---|---|
| SDLC Lead | New + partial Cross-Framework Compliance Integrator | 0 | 0 | Oversight of all | Phase 6 |
| CTO | Principal Software Architect + Chief AI Engineer + Principal Azure Cloud Architect + partial Principal UX Architect | 10 | 3 | 7, 8, 10, 11 | Phase 4 |
| CISO | CISO/EU Compliance + AI Governance Officer + US Compliance + Cross-Framework Compliance Integrator + Risk Management Architect + partial Principal UX Architect | 13 | 7 | 4, 8.2, 9, 10.2, 10.3, 13.1-13.4 | Phase 2 |
| AI Science | Chief AI Scientist + partial Principal UX Architect | 9 | 3 | 6, 7.4 | Phase 6 |
| Platform/SRE | Principal SRE + partial Principal Azure Cloud Architect | 2 | 1 | 7.5, 7.6 | Phase 6 |
| Product/Strategy | Chief Strategy Architect + partial Principal UX Architect + partial Risk Management Architect | 0 | 8 | 1, 2, 3, 5, 12 | Phase 6 |
| AppSec | New + partial CISO/EU Compliance + partial Principal Azure Cloud Architect | 0 | 1 | Security testing in 7.4, implementation in 9 | Phase 4 |

**Note on CISO load:** The CISO Agent absorbs 5 full archetypes, making it the most complex agent. This is manageable because: (1) US Compliance & FedRAMP Architect scope is deferred to v2, (2) Risk Management Architect and Cross-Framework Compliance Integrator are process-focused roles that overlap significantly with CISO/EU Compliance Architect, and (3) AI Governance Officer shares substantial domain overlap with CISO/EU Compliance Architect on regulatory compliance. The CISO Agent's system prompt will be the longest, but the expertise is coherent – it all orbits information security, compliance, risk, and governance.

---

*Last updated: 2026-02-19*
*Reference: SDLC-Growth-v2.md Section 7 (Organizational Model), PROJECT.md (Constraints)*
