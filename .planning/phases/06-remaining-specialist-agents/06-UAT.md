---
status: diagnosed
phase: 06-remaining-specialist-agents
source: [06-01-SUMMARY.md, 06-02-SUMMARY.md, 06-03-SUMMARY.md, 06-04-SUMMARY.md]
started: 2026-02-23T10:00:00Z
updated: 2026-02-24T10:00:00Z
---

## Current Test

[testing paused - systemic issue diagnosed, migration planned]

## Tests

### 1. AI Science Agent Identity and Scope
expected: Loading the AI Science Agent produces an agent that self-identifies as "Head of AI Science" focused on model evaluation and AI research. It refuses to own governance artifacts (those belong to CISO) or architecture decisions (those belong to CTO).
result: issue
reported: "Agent loaded via claude --agent agents/ai-science/CLAUDE.md but Claude Code identifies as generic Claude Code, not as Head of AI Science. Does not adopt the persona from the CLAUDE.md instructions."
severity: major

### 2. AI Science Agent Domain Context Accuracy
expected: The domain context at agents/ai-science/reference/domain-context.md lists all 11 registered AI systems from the AI Registry, includes the Verity AI roadmap, and covers model evaluation criteria (Fairlearn for fairness, SHAP/LIME for explainability, KS/PSI for drift detection).
result: skipped
reason: Paused pending migration - content accuracy test deferred until agents load correctly

### 3. Platform/SRE Agent Identity and CTO Boundary
expected: Loading the Platform/SRE Agent produces an agent that self-identifies as "Head of Platform Engineering and Site Reliability" and explicitly defers architecture decisions to the CTO Agent ("CTO designs, you implement"). It covers SLO framework, observability, incident management, and BCP/DR.
result: skipped
reason: Paused pending migration - same systemic issue as Test 1

### 4. Platform/SRE Agent Domain Context Accuracy
expected: The domain context at agents/platform-sre/reference/domain-context.md covers the current tech stack (Qwik, Payload CMS, Azure), AI tooling (Azure OpenAI), ARIS integration, SLO framework with service tiers, and incident management with NIS2 reporting timelines (24h/72h).
result: skipped
reason: Paused pending migration - content accuracy test deferred until agents load correctly

### 5. Product/Strategy Agent Advisory-Only Discipline
expected: Loading the Product/Strategy Agent produces an agent that self-identifies as "Product and Strategy Lead" and uses only advisory verbs (prepare, draft, recommend, analyze, assess). It never decides, approves, or determines. The CEO decides; the agent drafts.
result: skipped
reason: Paused pending migration - same systemic issue as Test 1

### 6. Product/Strategy Agent Business Context Accuracy
expected: The domain context at agents/product-strategy/reference/domain-context.md covers all 3 HH entities (GmbH, B.V., Inc.), all product lines, BearingPoint and EY consulting relationships, TISAX automotive context with March 2026 expiration, and strategic goals.
result: skipped
reason: Paused pending migration - content accuracy test deferred until agents load correctly

### 7. SDLC Lead Agent Dual Role and Routing
expected: Loading the SDLC Lead Agent produces an orchestrator that identifies its dual role (Work Router + Quality Gatekeeper). It documents both routing paths: through Lead for multi-agent work, and direct CEO-to-specialist for focused tasks. It spawns specialists as peer agents (not subagents).
result: skipped
reason: Paused pending migration - SDLC Lead needs Agent Teams update

### 8. SDLC Lead Agent Registry Completeness
expected: The agent registry at agents/sdlc-lead/reference/agent-registry.md documents all 6 specialist agents (CISO, CTO, AppSec, AI Science, Platform/SRE, Product/Strategy) with capabilities, boundaries, and routing hints extracted from their actual CLAUDE.md files.
result: skipped
reason: Paused pending migration - content still valid but loading must work first

### 9. SDLC Lead Agent Conflict Resolution
expected: The routing rules at agents/sdlc-lead/reference/routing-rules.md include a 4-step conflict resolution cascade: (1) SDLC-Growth-v2 rules, (2) established policies (IS Policy, AI Policy), (3) governance model, (4) CEO escalation. Plus a 6-category quality review checklist.
result: skipped
reason: Paused pending migration - content still valid but loading must work first

### 10. Cross-Agent Consistency: Section Ownership
expected: Each agent's SDLC-Growth-v2 section ownership does not overlap with other agents' primary sections. AI Science owns Sections 8 and 9.4. Platform/SRE owns Sections 9.5, 9.6, and 16. Product/Strategy owns Sections 1, 2, 3, 7, 14, and 17. No conflicts with existing CISO/CTO/AppSec ownership.
result: skipped
reason: Paused pending migration - content still valid but loading must work first

## Summary

total: 10
passed: 0
issues: 1
pending: 0
skipped: 9

## Gaps

- truth: "All 7 agents load via Claude Code --agent mechanism with correct identity, scope, and can be coordinated as Agent Teams"
  status: failed
  reason: "Systemic: Agent CLAUDE.md files are in agents/<name>/CLAUDE.md but Claude Code expects .claude/agents/<name>.md. Agent Teams not enabled. SDLC Lead lacks Agent Teams coordination instructions."
  severity: major
  test: 1
  root_cause: "Three issues: (1) Files in wrong location for Claude Code subagent discovery, (2) Agent Teams experimental feature not enabled in settings.json, (3) SDLC Lead prompt describes manual routing but needs Agent Teams coordination pattern (team lead spawns teammates, shared task list, mailbox communication)"
  artifacts:
    - path: "agents/ai-science/CLAUDE.md"
      issue: "Wrong location - should be .claude/agents/ai-science.md"
    - path: "agents/platform-sre/CLAUDE.md"
      issue: "Wrong location - should be .claude/agents/platform-sre.md"
    - path: "agents/product-strategy/CLAUDE.md"
      issue: "Wrong location - should be .claude/agents/product-strategy.md"
    - path: "agents/sdlc-lead/CLAUDE.md"
      issue: "Wrong location + needs Agent Teams coordination update"
    - path: "agents/ciso/CLAUDE.md"
      issue: "Wrong location - should be .claude/agents/ciso.md"
    - path: "agents/cto/CLAUDE.md"
      issue: "Wrong location - should be .claude/agents/cto.md"
    - path: "agents/appsec/CLAUDE.md"
      issue: "Wrong location - should be .claude/agents/appsec.md"
  missing:
    - "Create .claude/agents/ directory with 7 agent .md files using correct YAML frontmatter"
    - "Enable Agent Teams in .claude/settings.json (CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1)"
    - "Update SDLC Lead prompt with Agent Teams coordination: spawn teammates, shared task list, mailbox, when to use teams vs subagents"
    - "Keep agents/*/reference/ as version-controlled reference material (progressive disclosure)"
  debug_session: ""
