---
document-id: HH-ISMS-PROC-002
title: "Business Continuity and Disaster Recovery Plan"
version: v1.0
date: 2026-02-25
classification: Internal
author: CISO Agent
reviewer: [CISO, CTO]
approver: CEO Helge Heupel
review-cycle: Annual
next-review: 2027-02-25
status: Draft
parent-document: HH-ISMS-POL-001
ims-context: HH-IMS-CTX-001
change-summary: Initial release
---

# Business Continuity and Disaster Recovery Plan

## 1. Purpose and Scope

This plan defines the business continuity and disaster recovery (BCP/DR) framework for the **Helge Heupel Group** Integrated Management System (IMS). It operationalizes the business continuity requirements referenced in IS Policy (HH-ISMS-POL-001) Section 7 and establishes measurable recovery targets for all services within the ISMS scope.

### Business Continuity vs. Disaster Recovery

| Concept | Definition | Focus |
|---------|-----------|-------|
| **Business Continuity (BC)** | Maintaining essential business operations during and after a disruption | Keeping services running, even in degraded mode |
| **Disaster Recovery (DR)** | Restoring systems and data to normal operations after a failure or disaster | Getting systems back to full operational state |

### Scope

This plan applies to:

- **All services and systems** identified in the ISMS scope statements across Helge Heupel GmbH, Helge Heupel B.V., and Helge Heupel Inc.
- **All infrastructure components:** Azure cloud resources, Vercel deployments, Cloudflare Pages, Neon PostgreSQL databases, Microsoft 365, Git repositories, and AI agent systems
- **All personnel** with roles in continuity and recovery operations (CTO, IT Pentester, CEO, CISO)

### Relationship to Incident Management

This plan is activated when an incident (classified per HH-ISMS-PROC-001) escalates to the point where:

- A service tier RPO or RTO target is at risk of being breached
- Infrastructure failure requires system restoration from backup or alternative deployment
- A disaster scenario (data center failure, provider outage, supply chain compromise) requires coordinated recovery

The Incident Commander (CTO) makes the decision to activate DR procedures based on incident severity and scope.

---

## 2. Normative References

| Reference | Title | Relevance |
|-----------|-------|-----------|
| ISO 22301:2019 | Business Continuity Management Systems | BCP framework and requirements |
| ISO 27031:2011 | Guidelines for ICT Readiness for Business Continuity | ICT-specific continuity guidance |
| ISO 27001:2022 Annex A | A.5.29, A.5.30 | ICT readiness for business continuity; ICT readiness for business continuity |
| TISAX VDA ISA 6 | Chapter 10 (Business Continuity) | Automotive industry BCP/DR requirements |
| HH-ISMS-POL-001 | Information Security Policy Section 7 | Regulatory compliance framework |
| HH-PLATSRE-REF-001 | Platform/SRE Domain Context Sections 5-7 | SLO framework, ICS-Lite model, operational status |
| HH-RACI-Startup-v1.0 | RACI Matrix | Row 19 (Disaster recovery planning) |

### Related Procedures

| Procedure | Document ID | Cross-Reference Trigger |
|-----------|-------------|------------------------|
| Incident Management Procedure | HH-ISMS-PROC-001 | Incident escalation triggers DR activation. IC declares DR activation. |
| Change Management Procedure | HH-ISMS-PROC-004 | Post-DR corrective changes (infrastructure reconfiguration, credential rotation) follow change management. |
| Supplier Security Procedure | HH-ISMS-PROC-005 | Supply chain compromise triggers supplier assessment. Provider SLA review during post-DR analysis. |
| Management Review Procedure | HH-ISMS-PROC-008 | DR test results and BCP effectiveness are management review inputs. |

---

## 3. Service Tier Classification and RPO/RTO Targets

Service tiers are extracted from the Platform/SRE domain context (HH-PLATSRE-REF-001, Section 5: SLO Framework).

### Service Tier Definitions

| Service Tier | Definition | Availability Target | Services |
|-------------|-----------|-------------------|----------|
| **Tier 1 (Mission-Critical)** | Customer-facing production services where downtime directly impacts revenue and customer trust | 99.95% | Verity CMS production (verity-cms.vercel.app), customer-facing APIs |
| **Tier 1-AI (Critical AI)** | AI-powered services where downtime disables AI-dependent business operations | 99.9% | AI agent endpoints, Azure OpenAI Service integration |
| **Tier 2 (Business-Important)** | Internal business services that support daily operations | 99.9% | HH Admin CMS (helgeheupel-cms.vercel.app), internal tools, Git repositories |
| **Tier 3 (Supporting)** | Development and supporting services where downtime has limited operational impact | 99.5% | Development environments, staging, monitoring dashboards |

### RPO/RTO Targets

| Service Tier | RPO (Recovery Point Objective) | RTO (Recovery Time Objective) | Rationale |
|-------------|-------------------------------|-------------------------------|-----------|
| **Tier 1 (Mission-Critical)** | 1 hour | 4 hours | Customer-facing services must minimize data loss and restore quickly to preserve trust |
| **Tier 1-AI (Critical AI)** | 1 hour | 4 hours | AI services are stateless at the API level; RPO applies to configuration and registry data |
| **Tier 2 (Business-Important)** | 4 hours | 8 hours | Internal tools can tolerate longer recovery; no immediate customer impact |
| **Tier 3 (Supporting)** | 24 hours | 24 hours | Development environments can be rebuilt from Git; staging can tolerate extended downtime |

> **Note:** These are current Startup targets. Growth targets will include shorter RPO/RTO (Tier 1: RPO 15 min / RTO 1 hour) enabled by automated failover, IaC-based recovery, and multi-region deployments.

---

## 4. Business Impact Analysis Summary

### Impact by Downtime Duration

| Service Tier | 1 Hour Downtime | 4 Hours Downtime | 24 Hours Downtime | 72 Hours Downtime |
|-------------|-----------------|------------------|-------------------|-------------------|
| **Tier 1** | Minor customer inconvenience. Error budget consumption. | Customer-visible outage. Potential SLA violation. Customer complaints. | Significant customer impact. Potential contract penalties. Reputational damage in market. | Major reputational crisis. Customer churn risk. Potential NIS2 reporting trigger (significant incident). |
| **Tier 1-AI** | AI features degraded. Manual fallback activated. | AI-dependent workflows fully manual. Productivity loss. | AI agent system unusable. All agent-assisted SDLC work paused. | Critical gap in compliance artifact production. Certification timeline at risk. |
| **Tier 2** | Minimal impact. Team uses alternative communication. | Productivity reduction. Internal workflows delayed. | Significant internal disruption. Code reviews, deployments delayed. | Development process severely impacted. Sprint commitments at risk. |
| **Tier 3** | Negligible. | Minor inconvenience. Developers switch to local environments. | Development velocity reduced. | Development blocked for features requiring staging validation. |

### Risk Register References

| Risk ID | Title | Related Service Tier | Relevance |
|---------|-------|---------------------|-----------|
| RISK-OPS-001 | Cloud service provider outage | Tier 1, Tier 2 | Azure/Vercel/Cloudflare outage affecting production services |
| RISK-OPS-002 | Database corruption or loss | Tier 1, Tier 2 | Neon PostgreSQL data integrity failure |
| RISK-OPS-003 | Deployment pipeline failure | Tier 2, Tier 3 | GitHub Actions or Vercel build system unavailable |
| RISK-OPS-004 | AI service provider disruption | Tier 1-AI | Anthropic or Azure OpenAI Service outage |
| RISK-OPS-005 | Climate-related infrastructure disruption | All tiers | Data center cooling failure, power grid instability (ISO 27001:2022/Amd 1:2024) |

---

## 5. Current Infrastructure and Recovery Capabilities

This section documents the honest Startup state of recovery capabilities for each infrastructure component. Growth targets are noted as callouts.

### 5.1 Neon PostgreSQL

| Aspect | Current Capability |
|--------|-------------------|
| **Backup mechanism** | Automated point-in-time recovery (PITR) via continuous WAL (Write-Ahead Log) streaming |
| **Backup retention** | 7-day backup retention (Neon Pro plan) |
| **RPO capability** | Approximately minutes (continuous WAL streaming provides near-real-time backup) |
| **Recovery method** | Restore from Neon Console to a specific timestamp. Creates a new database branch from the selected point in time. |
| **Databases** | 2 production databases: HH Admin CMS, Verity CMS |
| **Connection** | Via `DATABASE_URI` environment variable in Vercel |

**Recovery procedure:** See Section 6.1.

**Growth target:** Automated daily backup verification. Cross-region Neon replication (if available). Terraform-managed database configuration.

### 5.2 Vercel

| Aspect | Current Capability |
|--------|-------------------|
| **Deployment model** | Immutable deployments — every deployment is preserved indefinitely |
| **Rollback capability** | Instant rollback to any previous deployment via dashboard or CLI (`vercel rollback`) |
| **RPO capability** | Zero (deployment artifacts preserved indefinitely; code in Git) |
| **Deployments** | helgeheupel-cms (HH Admin), verity-cms (Verity Admin) |
| **Edge network** | Vercel Edge Network provides global CDN with automatic failover between edge locations |

**Recovery procedure:** See Section 6.2.

**Growth target:** Automated canary deployments with rollback triggers. Azure Static Web Apps as failover target.

### 5.3 Cloudflare Pages

| Aspect | Current Capability |
|--------|-------------------|
| **Deployment model** | Immutable builds — every build is preserved with instant rollback |
| **Rollback capability** | Instant rollback to any previous build via dashboard |
| **RPO capability** | Zero (build artifacts preserved; code in Git) |
| **Deployments** | verity-website (Verity public site) |
| **DNS** | Cloudflare DNS with automatic propagation (minutes for changes) |
| **DDoS protection** | Cloudflare built-in DDoS mitigation |

**Recovery procedure:** See Section 6.2.

### 5.4 Azure OpenAI Service

| Aspect | Current Capability |
|--------|-------------------|
| **SLA** | 99.9% availability (Microsoft-managed) |
| **Recovery method** | Manual failover to different Azure region (reconfigure endpoint URL and API key) |
| **RPO capability** | Not applicable — stateless API; no HH data stored in the service |
| **Primary region** | Azure West Europe |
| **DR region** | Azure Germany West Central (per ISMS scope) |
| **Failover** | Manual reconfiguration of endpoint URL in application environment variables |

**Recovery procedure:** See Section 6.3.

**Growth target:** Automated region failover with health checks. Load balancing across Azure regions.

### 5.5 Git (GitHub)

| Aspect | Current Capability |
|--------|-------------------|
| **Architecture** | Distributed by nature — full repository clone exists on every developer machine and CI environment |
| **Recovery method** | Re-clone from GitHub.com or any developer machine with a current clone |
| **RPO capability** | Zero (every clone is a full backup) |
| **Backup diversity** | GitHub.com (primary), developer machines (multiple), CI environment caches |

**Recovery note:** Git repositories are inherently resilient. The risk is not data loss but GitHub platform unavailability blocking CI/CD and collaboration. If GitHub is unavailable, development continues locally with manual coordination.

### 5.6 Microsoft 365

| Aspect | Current Capability |
|--------|-------------------|
| **SLA** | 99.9% availability (Microsoft-managed) |
| **Data residency** | EU (per MS 365 EU Data Boundary commitment) |
| **Backup** | Microsoft-managed backup with retention policies |
| **Recovery** | Microsoft support for data recovery. OneDrive/SharePoint file versioning and recycle bin. |

**Recovery note:** M365 recovery is Microsoft-managed. HH cannot independently restore M365 data. Ensure critical documents are also stored in Git repositories where possible.

### 5.7 Infrastructure Provisioning

| Aspect | Current State |
|--------|--------------|
| **IaC** | None — all infrastructure provisioning is manual at Startup |
| **Configuration documentation** | Informal; configuration details in internal documentation and environment variables |
| **Recovery approach** | Manual re-provisioning based on documentation |

**Growth target:** Terraform/Bicep for all Azure resources. Infrastructure drift detection. Automated recovery from IaC definitions.

---

## 6. Disaster Recovery Procedures

This section provides step-by-step recovery runbooks for each failure scenario. The Incident Commander (CTO) coordinates overall recovery; the Technical Lead (typically IT Pentester) executes technical steps.

### 6.1 Database Failure (Neon PostgreSQL)

**Trigger:** Neon database unavailable, data corruption detected, or query performance severely degraded.

**Step 1: Confirm the failure**

- Check Neon Console (console.neon.tech) for database status
- Check Neon Status Page (neonstatus.com) for platform-wide issues
- Test database connectivity from a local machine: attempt connection using `DATABASE_URI`
- **Decision point:** Is this a Neon platform issue or an HH-specific issue?

**Step 2: Neon platform issue (Neon-side outage)**

- Monitor Neon Status Page for updates
- No HH-side recovery action possible — Neon is responsible for platform restoration
- If outage exceeds RTO for the affected service tier, activate communication procedures (Section 7)
- **Verification:** "Neon Status Page confirms resolution. Database connectivity restored."

**Step 3: Data corruption (HH-specific — requires PITR restore)**

1. Identify the last known-good timestamp before corruption occurred
2. In Neon Console: navigate to the affected database project
3. Select "Restore" and choose the point-in-time to restore to
4. Neon creates a new branch from the selected timestamp
5. Verify data integrity on the restored branch:
   - Run application health checks against the restored branch
   - Spot-check critical data tables for consistency
   - Compare record counts with expected values
6. If verification passes: update `DATABASE_URI` in Vercel environment variables to point to the restored branch
7. Trigger redeployment of affected Vercel applications
8. **Verification:** "Data integrity verified on restored branch. Application health checks pass. Service operational."

**Step 4: Post-recovery**

- Document the failure and recovery in the incident record
- Update Neon Console: archive the corrupted branch (do not delete — preserve for investigation)
- Monitor restored database for 24 hours for any recurrence

### 6.2 Hosting Platform Failure (Vercel / Cloudflare)

**Trigger:** Vercel or Cloudflare Pages deployment unavailable. Service returns errors or is unreachable.

**Step 1: Confirm the failure**

- Check Vercel Status Page (vercel-status.com) or Cloudflare Status Page (cloudflarestatus.com)
- Test affected URL directly from multiple locations
- **Decision point:** Is this a deployment-specific issue or a platform-wide outage?

**Step 2: Deployment-specific issue**

1. In Vercel Dashboard (or Cloudflare Pages Dashboard): navigate to the affected project
2. Select the previous known-good deployment
3. Promote it to production:
   - Vercel: "Promote to Production" button or CLI `vercel rollback`
   - Cloudflare: "Rollback to this deploy" button
4. **Verification:** "Previous deployment active. Service responding correctly."

**Step 3: Platform-wide outage**

1. Monitor the provider's status page for updates
2. If outage exceeds RTO for the affected service tier:
   - Activate a static HTML holding page on the alternative provider:
     - If Vercel is down: deploy static holding page to Cloudflare Pages
     - If Cloudflare is down: deploy static holding page to Vercel
   - Holding page content: "Service temporarily unavailable. We are working to restore service. Contact [CEO email] for urgent matters."
   - Update DNS if necessary to point to the holding page
3. When the primary platform recovers: verify deployment, remove holding page, restore DNS
4. **Verification:** "Primary platform recovered. Production deployment active. Holding page removed."

**Growth target:** Automatic failover to Azure Static Web Apps. Multi-provider deployment with health-check-based traffic routing.

### 6.3 AI Service Failure (Azure OpenAI)

**Trigger:** Azure OpenAI Service unavailable. AI agent operations or product AI features non-functional.

**Step 1: Confirm the failure**

- Check Azure Status Page (status.azure.com) for Azure OpenAI Service health
- Test Azure OpenAI endpoint directly with a simple API call
- **Decision point:** Is this a regional Azure issue or an endpoint-specific issue?

**Step 2: Regional Azure issue**

1. If Azure West Europe is affected:
   - Reconfigure Azure OpenAI endpoint URL to Azure Germany West Central (DR region per ISMS scope)
   - Update API endpoint environment variables in affected applications
   - Redeploy affected applications with updated configuration
2. **Verification:** "Azure OpenAI responding from DR region. AI features operational."

**Step 3: Full Azure OpenAI Service outage (all regions)**

1. AI agents degrade gracefully — manual fallback activated:
   - SDLC work continues without AI agent assistance
   - Compliance artifact production pauses (acceptable for short duration)
   - Product AI features disabled; users informed via in-app messaging
2. No HH-side remediation possible — Azure OpenAI is Microsoft-managed
3. Monitor Azure Status Page for resolution timeline
4. **Verification:** "Azure OpenAI Service restored. AI features re-enabled. Verify output quality post-restoration."

**Step 4: Prolonged outage (exceeding 24 hours)**

- CEO decides on business impact communication
- AI-dependent workflows operate fully manually
- If Anthropic Claude (Claude Code agents) is also affected: all AI-assisted work pauses
- Document business impact for management review

### 6.4 Full Cloud Region Failure

**Trigger:** Major cloud provider region failure affecting multiple services simultaneously.

> **Context:** Extremely unlikely for multi-region providers (Vercel, Cloudflare, Neon all operate across multiple regions inherently). This scenario primarily affects Azure-hosted resources in a single region.

**Step 1: Assess impact scope**

- Identify all services hosted in the affected region
- Azure West Europe: Azure OpenAI Service, Azure Monitor, Entra ID (federated — likely unaffected by single region failure)
- Vercel/Cloudflare/Neon: multi-region by design, likely unaffected by single Azure region failure
- **Decision point:** Which HH services are actually affected?

**Step 2: Azure West Europe region failure**

1. Azure OpenAI Service: failover to Azure Germany West Central (Section 6.3)
2. Azure Monitor: monitoring unavailable until region recovers (Growth target: multi-region monitoring)
3. Entra ID: federated/global service — expect continued operation
4. If Entra ID is affected: authentication for Azure resources may fail; users can continue working with locally cached credentials for M365
5. **Verification:** "Critical services identified. Failover executed where possible. Remaining services on provider timeline."

**Growth target:** Terraform-based infrastructure definition enabling automated re-provisioning in DR region. Multi-region Azure deployment for all critical resources.

### 6.5 Supply Chain Compromise (Dependency Poisoning)

**Trigger:** A dependency in the HH software supply chain has been compromised (malicious package, backdoored update, compromised build tool).

**Step 1: Detection and assessment**

- Detection sources: GitHub Dependabot alert, Semgrep finding, community advisory, manual discovery
- Identify the affected dependency and version
- Cross-reference HH-ISMS-PROC-005 (Supplier Security) for the dependency's risk classification

**Step 2: Immediate containment**

1. Lock dependencies: `pnpm install --frozen-lockfile` (should already be CI default)
2. If the compromised dependency is in production:
   - Identify which applications use the dependency
   - Roll back affected deployments to the last version without the compromised dependency (Vercel/Cloudflare rollback)
3. **Verification:** "Affected deployments rolled back. No production traffic served by compromised code."

**Step 3: Eradication**

1. Audit SBOM: regenerate with `pnpm dlx @cyclonedx/cyclonedx-npm --output-file sbom.json`
2. Remove or replace the compromised dependency
3. Run full security scan: `pnpm audit` + Semgrep
4. Update `pnpm-lock.yaml` with clean dependencies
5. Rebuild and redeploy all affected applications
6. **Verification:** "SBOM clean. Security scan clean. Applications redeployed with clean dependencies."

**Step 4: Post-recovery**

- Document the supply chain compromise in the incident record
- Update threat model (TM-CLAUDE-001 or TM-VERITY-CMS-001) with the new attack vector
- Conduct supplier assessment per HH-ISMS-PROC-005 for the affected dependency ecosystem
- Review and update the license/dependency allowlist if needed

---

## 7. Communication During DR Events

### ICS-Lite Roles During DR

The same ICS-Lite structure from HH-ISMS-PROC-001 applies during DR events:

| Role | Person | DR-Specific Responsibility |
|------|--------|---------------------------|
| **Incident Commander (IC)** | CTO | Coordinates overall recovery. Makes failover decisions. Declares recovery complete. |
| **Communications Lead (CL)** | CEO (Helge Heupel) | Customer and external communication. Business impact decisions. |
| **Technical Lead (TL)** | IT Pentester | Executes recovery procedures. Validates system health post-recovery. |
| **Compliance Support** | CISO Agent (advisory) | Assesses regulatory impact. Prepares NIS2 notification if triggered. |

### Internal Communication

| Action | Responsible | Channel | When |
|--------|-----------|---------|------|
| Declare DR activation | IC (CTO) | Signal group + phone call to CEO | Upon decision to activate DR |
| Status updates during recovery | IC (CTO) | Signal group | Every 30 minutes (Tier 1), every 2 hours (Tier 2/3) |
| Declare recovery complete | IC (CTO) | Signal group + email | Upon verification of full service restoration |
| Post-DR summary | IC (CTO) | Email + incident record | Within 24 hours of recovery |

### Customer Communication Templates

**Service Disruption Notice:**
> Subject: Service Disruption — [Service Name]
>
> We are currently experiencing a disruption to [Service Name]. Our team is actively working to restore full service. We expect resolution by [estimated time]. We apologize for any inconvenience and will provide updates as they become available.
>
> For urgent matters, please contact [CEO email].

**Status Update:**
> Subject: Service Update — [Service Name]
>
> Update regarding the [Service Name] disruption reported on [date/time]. Current status: [status]. Expected resolution: [estimated time]. We continue to work on full restoration.

**Resolution Notice:**
> Subject: Service Restored — [Service Name]
>
> The disruption to [Service Name] has been resolved as of [date/time]. Full service has been restored. If you experience any continuing issues, please contact [CEO email].
>
> We will conduct a post-incident review and implement measures to prevent recurrence.

---

## 8. Testing Schedule

Per locked decisions and research, the BCP/DR plan is tested on a regular schedule to validate recovery procedures and identify gaps.

### Testing Cadence

| Test Type | Frequency | Scope | Participants | First Scheduled |
|-----------|-----------|-------|-------------|-----------------|
| **Tabletop Exercise** | Quarterly | Walk through a DR scenario verbally with all key personnel. No actual failover. Validate communication chains, role assignments, and decision points. | CTO, IT Pentester, CEO, CISO | Before Stage 1 audit (within first quarter of ISMS operation) |
| **Neon PITR Restore Test** | Semi-annually | Restore a Neon database backup to a test branch. Verify data integrity. Measure actual restore time against RTO targets. | IT Pentester (executes), CTO (reviews) | Within first 6 months |
| **Vercel/Cloudflare Rollback Test** | Semi-annually | Deploy a test change, rollback to previous deployment, verify service health. Measure rollback time. | IT Pentester (executes), CTO (reviews) | Within first 6 months |
| **Full DR Simulation** | Annually | Simulate a major DR scenario (e.g., Neon database corruption + Vercel deployment failure). Execute full recovery procedures. Measure actual RPO/RTO against targets. | All DR roles | After first year of operation |

### Tabletop Exercise Structure

Each quarterly tabletop exercise follows this format:

1. **Scenario presentation** (5 min): IC describes a DR scenario (e.g., "Neon PostgreSQL serving Verity CMS reports data corruption at 14:00 CET on a Wednesday")
2. **Walk-through** (30 min): Each participant describes their actions step by step, referencing this plan's procedures
3. **Gap identification** (15 min): Group identifies any steps that were unclear, missing, or out of date
4. **Action items** (10 min): Document improvements needed and assign owners

### Test Documentation

Test results are documented in `bcp-dr/test-results/{YYYY-MM-DD}-{test-type}.md` with:

- Test date and type
- Scenario description
- Participants
- Steps executed
- Results (pass/fail for each step)
- Actual RPO/RTO achieved (for restore and simulation tests)
- Gaps identified
- Action items with owners and deadlines

Test results feed into:
- Management review (HH-ISMS-PROC-008) as evidence of BCP/DR testing
- Internal audit (HH-ISMS-PROC-007) as evidence for A.5.29 and A.5.30 control effectiveness
- Risk register updates if test reveals recovery gaps

---

## 9. Roles and Responsibilities

| Role | Person | BCP/DR Responsibilities |
|------|--------|------------------------|
| **DR Coordinator** | CTO | Leads technical recovery. Makes failover decisions. Coordinates recovery steps across systems. Declares recovery complete. Maintains this plan. |
| **Recovery Executor** | IT Pentester | Executes recovery procedures (Neon restore, Vercel rollback, Azure reconfiguration). Validates system security post-restore. Conducts semi-annual restore tests. |
| **Communications Lead** | CEO (Helge Heupel) | Makes business decisions during DR (e.g., customer communication, service degradation acceptance). Sole external communicator. Approves customer notification templates. |
| **Compliance Assessor** | CISO (supported by CISO Agent) | Assesses regulatory impact of the disruption. Determines NIS2 reporting obligations. Prepares authority notifications if triggered. |
| **Platform Support** | Platform/SRE Agent (advisory) | Assists with recovery runbook steps. Identifies infrastructure dependencies. Prepares monitoring queries for post-recovery validation. Trust Level 2: advises only, does not execute. |

### RACI for DR Activities

| Activity | CTO | IT Pentester | CEO | CISO |
|----------|-----|-------------|-----|------|
| Declare DR activation | R | C | A | I |
| Execute recovery procedures | C | R | I | I |
| Customer communication decision | C | I | A | C |
| NIS2 reporting assessment | I | I | A | R |
| Validate system health post-recovery | C | R | I | I |
| Declare recovery complete | R | C | A | I |
| Conduct quarterly tabletop | R | R | A | C |
| Document test results | C | R | I | I |

---

## 10. Annex A Control Mapping

| Control | Name | How This Plan Addresses It |
|---------|------|-----------------------------|
| **A.5.29** | Information Security During Disruption | Sections 3-6 define service tier classification, RPO/RTO targets, infrastructure recovery capabilities, and step-by-step DR procedures for maintaining information security during disruptions |
| **A.5.30** | ICT Readiness for Business Continuity | Section 5 documents current ICT recovery capabilities per infrastructure component. Section 8 defines the testing schedule (quarterly tabletop, semi-annual restore tests, annual simulation) to verify ICT readiness. |

### Supporting Control References

| Control | Name | Relevance to This Plan |
|---------|------|----------------------|
| **A.5.24** | Incident Management Planning | DR procedures are activated through incident management (HH-ISMS-PROC-001). Incident severity drives DR activation. |
| **A.8.13** | Information Backup | Neon PITR backup (Section 5.1), Git distributed backup (Section 5.5), and Vercel/Cloudflare immutable deployments (Sections 5.2, 5.3) provide backup coverage. |
| **A.8.14** | Redundancy of Information Processing Facilities | Documented in Section 5: Vercel Edge Network, Cloudflare multi-region CDN, Azure DR region (Germany West Central). |

---

## 11. Regulatory Obligations

| Framework | Requirement | How This Plan Satisfies It |
|-----------|------------|---------------------------|
| **ISO 27001:2022** | Annex A.5.29 (Information security during disruption), A.5.30 (ICT readiness for business continuity) | Sections 3-8 provide full BCP/DR framework with service tiers, RPO/RTO targets, recovery procedures, and testing schedule. |
| **ISO 22301:2019** | BCP framework requirements | Business impact analysis (Section 4), recovery strategies (Section 5-6), testing and exercising (Section 8), roles and responsibilities (Section 9). |
| **ISO 27031:2011** | ICT readiness for business continuity | Section 5 documents ICT recovery capabilities. Section 8 testing validates ICT readiness. |
| **TISAX VDA ISA 6** | Chapter 10 (Business Continuity) | Documented BCP/DR plans with recovery targets and tested recovery procedures. Tabletop exercises provide test evidence. |
| **NIS2** | Art. 21(2)(c) — Business continuity and crisis management (informational) | BCP/DR framework documented and tested. NIS2 reporting triggers integrated via Section 4 (24h threshold for significant incidents). Status: informational. |

---

## 12. Document Control

### Version History

| Version | Date | Author | Change Summary | Approved By |
|---------|------|--------|---------------|-------------|
| v1.0 | 2026-02-25 | CISO Agent | Initial release. First formal BCP/DR plan for the Helge Heupel Group. | Pending CEO approval |

### Approval

This document is approved via Git Pull Request. The approval chain is:
1. **Author:** CISO Agent drafts the document
2. **Reviewers:** CISO and CTO review via PR comments
3. **Approver:** CEO Helge Heupel approves via PR merge

`[CEO-SIGNOFF-REQUIRED]`

### Next Review

- **Annual review:** 2027-02-25
- **Extraordinary review triggers:** Any DR activation, DR test revealing significant gaps, major infrastructure change (new cloud provider, new database service), audit finding related to business continuity

### Related Documents

| Document ID | Title | Relationship |
|-------------|-------|-------------|
| HH-ISMS-POL-001 | Information Security Policy | Parent policy; this plan operationalizes BCP/DR requirements |
| HH-ISMS-PROC-001 | Incident Management Procedure | Incident escalation triggers DR activation |
| HH-ISMS-PROC-004 | Change Management Procedure | Post-DR corrective changes follow change management |
| HH-ISMS-PROC-005 | Supplier Security Procedure | Supply chain compromise recovery (Section 6.5) |
| HH-ISMS-PROC-008 | Management Review Procedure | DR test results are management review inputs |
| HH-PLATSRE-REF-001 | Platform/SRE Domain Context | Source for SLO framework and infrastructure details |
| HH-RACI-Startup-v1.0 | RACI Matrix | Role assignments for disaster recovery planning |

---

*Document: procedures/bcp-dr.md*
*Document ID: HH-ISMS-PROC-002*
*Business Continuity and Disaster Recovery Plan for the Helge Heupel Group*
