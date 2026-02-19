# Subagent Spawning Protocol

**Version:** 1.0
**Status:** Active
**Created:** 2026-02-19
**Applies to:** All 7 Claude Code agents in the HH SDLC Agent System

This document governs when and how agents spawn subagents via the Task tool, including model selection, tool restrictions, context passing rules, result collection, and error handling.

**Related protocols:**
- [Agent Interaction Model](interaction-model.md) -- operational modes, hierarchy, entry point decisions
- [HANDOFF.md Template](handoff-template.md) -- structured handoff artifact when subagent spawning is not appropriate

---

## 1. Architecture Constraints

### The 2-Level Depth Limitation

Claude Code subagents **cannot spawn other subagents**. This is a hard limitation of the Claude Code subagent architecture. The maximum spawning depth is always **2 levels: parent agent + subagent**.

```
Level 0: CEO (human) starts a Claude Code session
Level 1: Agent runs in the session (standalone or SDLC Lead)
Level 2: Agent spawns subagent via Task tool
         [MAXIMUM -- subagent CANNOT spawn further]
```

### What This Means in Practice

| Scenario | Depth | Valid? |
|----------|-------|--------|
| CEO -> CISO Agent (standalone) | 1 level | Yes |
| CEO -> CISO Agent -> research subagent | 2 levels | Yes |
| CEO -> SDLC Lead -> CTO subagent | 2 levels | Yes |
| CEO -> SDLC Lead -> CTO subagent -> analysis subagent | 3 levels | **NO -- depth violation** |
| CEO -> CISO Agent -> NIS2 subagent -> audit subagent | 3 levels | **NO -- depth violation** |

### Workarounds for Depth Limitation

When a task appears to require 3+ levels of delegation:

1. **Sequential spawning:** The parent agent spawns subagent A, collects results, then spawns subagent B with A's results as input. This stays at 2 levels (parent + one subagent at a time).

2. **HANDOFF.md escalation:** If a specialist subagent discovers it needs sub-delegation, it completes what it can, documents the remaining work in its return message, and the parent agent either handles it or produces a HANDOFF.md for the CEO to start a new session.

3. **Task decomposition:** The parent agent breaks the task into smaller pieces, each of which can be completed by a single subagent without further delegation.

### Subagent Properties

- Subagents inherit the parent's permission context (file system access, tool permissions)
- Subagents can have **restricted** tools (fewer than the parent) but not expanded tools
- Subagents run in their own context window; only the returned result is available to the parent
- Subagents cannot access the parent's conversation history
- Files created/modified by subagents are immediately available on the shared filesystem

---

## 2. When to Spawn

### Spawn Triggers

| Trigger | Example | Action |
|---------|---------|--------|
| Cross-domain task requiring specialist expertise | "Review threat model for AI pipeline" | SDLC Lead spawns CTO or AppSec subagent |
| Focused research within a domain | "What does SDLC-v2 say about NIS2 timelines?" | Any agent spawns haiku research subagent |
| Large artifact requiring parallel analysis | "Assess all 93 Annex A controls" | Agent spawns multiple focused subagents for control groups |
| Decision requiring specialist input | "Should we use Azure Key Vault or HashiCorp Vault?" | Agent spawns CTO subagent for analysis |
| Evidence gathering across multiple files | "Collect all risk register entries related to AI systems" | Agent spawns haiku search subagent |

### When NOT to Spawn

Do NOT spawn a subagent when:

- **Task is within current agent's domain expertise.** If you can do it yourself, do it yourself. Spawning adds latency and loses context.
- **Task is simple enough to complete in the current session.** A quick file read or analysis does not need delegation.
- **Task would require the subagent to spawn its own subagents.** This violates the 2-level depth limitation. Decompose the task instead.
- **Task requires interactive human dialogue.** Subagents cannot interact with the human. Use a HANDOFF.md instead.
- **Task requires the parent's full conversation context.** Subagents only receive what is in the spawn prompt, not the parent's history.
- **Token budget does not justify it.** Spawning a subagent for a 2-minute task wastes more tokens on context setup than the task itself.

### Decision Flowchart

```
Is the task within my domain expertise?
  YES -> Do it myself (no spawn)
  NO  -> Is it a single-domain task?
           YES -> Spawn specialist subagent
           NO  -> Am I the SDLC Lead?
                    YES -> Spawn multiple specialist subagents sequentially
                    NO  -> Produce HANDOFF.md for CEO to route
```

---

## 3. Spawning Governance

### Model Selection and Token Budget

| Trigger Type | Model | maxTurns | Tools | Budget Rationale |
|-------------|-------|----------|-------|------------------|
| Quick lookup / fact-check | haiku | 10 | Read, Grep, Glob | ~3K token prompt, fast, read-only |
| Focused analysis | sonnet | 25 | Read, Grep, Glob, Bash | ~10K token prompt, balanced capability/cost |
| Complex reasoning / drafting | opus | 50 | Read, Write, Edit, Bash, Grep, Glob | ~15K token prompt, maximum capability |
| Exploratory research | haiku | 15 | Read, Grep, Glob, WebFetch | ~3K token prompt, broad search |

### Default Configuration

When in doubt, use: **sonnet, 25 maxTurns, Read/Grep/Glob/Bash tools.**

This provides a reasonable balance of capability and cost for most tasks. Deviate from the default only when the task clearly fits a different profile.

### Tool Restriction Guidelines

| Task Type | Tools to Grant | Tools to Restrict |
|-----------|---------------|-------------------|
| Read-only research/analysis | Read, Grep, Glob | Write, Edit, Bash |
| File creation/modification | Read, Write, Edit, Grep, Glob | Bash (unless needed) |
| Full implementation | Read, Write, Edit, Bash, Grep, Glob | None |
| Search and summarize | Read, Grep, Glob | Write, Edit, Bash |

**Principle:** Grant the minimum tools necessary for the task. Read-only tasks should not have Write/Edit permissions.

---

## 4. Context Passing Protocol

### What the Spawn Prompt MUST Include

Every Task tool invocation for subagent spawning MUST include these elements:

1. **Clear task description:** What the subagent should produce. Be specific and concrete, not vague.
   - Good: "Read protocols/interaction-model.md and list all sections that reference ISO 27001 clauses, with the clause number and section title."
   - Bad: "Look at the interaction model and find ISO stuff."

2. **Relevant file paths to read:** Reference files by path -- let the subagent read them. Do NOT paste large documents into the spawn prompt.
   - Good: "Read agents/shared/SDLC-v2.md Section 12 for security/privacy controls."
   - Bad: [pasting 500 lines of SDLC-v2 into the prompt]

3. **Constraints and boundaries:** What the subagent must NOT do.
   - "Do NOT modify any files. Read-only analysis."
   - "Do NOT make assumptions about risk acceptance. Flag uncertainties."

4. **Expected output format:** What the parent expects back.
   - "Return a markdown table with columns: Control ID, Control Name, Applicability, Justification."
   - "Return a bullet list of findings with file path references."

5. **SDLC-v2 section references:** If the task relates to specific SDLC-v2 sections, name them.
   - "Relevant SDLC-v2 sections: S.5.3 (risk assessment), S.6.1 (UCL)."

### What the Spawn Prompt Must NOT Include

- **The entire parent agent's system prompt.** Include only task-relevant context.
- **Large document content.** Reference file paths instead.
- **The parent's full conversation history.** Include only the relevant decision or context.
- **Ambiguous instructions.** If the subagent might interpret the task differently, it will.

### Example Spawn Prompt

```
Analyze the ISO 27001 Annex A controls in groups A.5 through A.8.

Read the Statement of Applicability at artifacts/soa.md.

For each control in A.5-A.8:
1. Determine if the control is applicable to HH Group (3 entities, 6 people, 7 AI agents)
2. If applicable, suggest implementation approach appropriate for Startup phase
3. If not applicable, provide justification for exclusion

Constraints:
- Do NOT modify any files
- Do NOT accept risk -- flag controls requiring CEO decision
- Reference SDLC-v2 Section 12 (agents/shared/SDLC-v2.md) for security control context

Return format: Markdown table with columns:
| Control ID | Control Name | Applicable | Justification | Startup Implementation |
```

---

## 5. Result Collection Protocol

### How Results Return

When a subagent completes its work:
1. The subagent's final response is returned to the parent via the Task tool's return mechanism
2. Any files created/modified by the subagent are immediately available on the shared filesystem
3. The parent receives only the final response text, not the subagent's internal reasoning

### Parent Validation

After receiving a subagent's result, the parent agent MUST:

1. **Validate completeness:** Does the result address every element of the task description?
2. **Validate format:** Does the result match the expected output format?
3. **Validate accuracy:** Are file references correct? Do conclusions follow from evidence?
4. **Check for flags:** Did the subagent flag any items requiring human decision?

### When Results Are Insufficient

If a subagent's result does not meet the task requirements:

| Situation | Action |
|-----------|--------|
| Minor gaps (missing a few items) | Parent completes the work itself |
| Misunderstood task | Re-spawn with clarified instructions (maximum 2 re-spawns per task) |
| Fundamentally wrong approach | Parent abandons subagent approach, does the work itself |
| Blocking human decision needed | Parent produces HANDOFF.md for CEO |

**Re-spawn limit:** Never re-spawn a subagent for the same task more than **twice**. After 2 failed attempts, the parent must either complete the task itself or escalate via HANDOFF.md.

---

## 6. Error Handling

### Subagent Failure Modes

| Failure Mode | Symptom | Resolution |
|-------------|---------|------------|
| Tool error | Subagent reports file not found, permission denied | Parent re-spawns with corrected file paths or completes task itself |
| Context overflow | Subagent hits context window limit | Parent breaks task into smaller pieces, spawns multiple subagents |
| maxTurns exceeded | Subagent ran out of turns without completing | Task was too large; parent decomposes and re-spawns focused subtasks |
| Incorrect output | Subagent produces wrong/irrelevant results | Parent re-spawns with clarified instructions (max 2 re-spawns) |
| Forbidden action attempt | Subagent tries to use a restricted tool | Log the attempt; parent completes the work manually |
| Hallucination | Subagent references non-existent files or controls | Parent verifies all references before using the result |

### Escalation Path

```
Subagent fails
  -> Parent re-spawns with clarified instructions (attempt 1)
     -> Still fails
        -> Parent re-spawns (attempt 2)
           -> Still fails
              -> Parent completes task itself
                 -> Cannot complete
                    -> HANDOFF.md to CEO for manual resolution
```

---

## 7. Audit Trail

### Traceability Requirements

Every subagent spawning should be traceable for compliance purposes (ISO 27001 cl. 7.5, ISO 42001 cl. 7.5):

1. **In the parent session:** The Task tool invocation and its result are part of the session transcript
2. **In artifacts requiring sign-off:** The PR description should note if subagents were used for any portion of the work
3. **In HANDOFF.md:** The "Subagents Used" section documents all subagent invocations during the work (see [handoff-template.md](handoff-template.md))

### What to Document

For each subagent spawning, the parent agent should be able to answer:
- What task was the subagent given?
- Which model was used (haiku/sonnet/opus)?
- What tools were granted?
- What was the outcome?
- Were any re-spawns needed?

This information flows into HANDOFF.md when the work involves cross-agent handoffs, and into PR descriptions when the work produces sign-off artifacts.

### Audit-Relevant Context

The combination of:
- Git commit history (who changed what, when)
- PR review records (human sign-off)
- HANDOFF.md artifacts (cross-agent context passing)
- Session transcripts (available in Claude Code)

Creates a complete audit trail satisfying ISO 27001 cl. 7.5 documented information requirements.

---

## Appendix: Quick Reference Card

**For quick lookups:**
```
Model: haiku | maxTurns: 10 | Tools: Read, Grep, Glob
```

**For focused analysis:**
```
Model: sonnet | maxTurns: 25 | Tools: Read, Grep, Glob, Bash
```

**For complex drafting:**
```
Model: opus | maxTurns: 50 | Tools: Read, Write, Edit, Bash, Grep, Glob
```

**For exploratory research:**
```
Model: haiku | maxTurns: 15 | Tools: Read, Grep, Glob, WebFetch
```

**Default (when unsure):**
```
Model: sonnet | maxTurns: 25 | Tools: Read, Grep, Glob, Bash
```

**Rules:**
- Maximum depth: 2 levels (parent + subagent)
- Maximum re-spawns per task: 2
- Reference file paths, do not paste content
- Grant minimum tools necessary
- Validate all subagent results before using

---

*Document: protocols/subagent-protocol.md*
*Version: 1.0 -- Created during Phase 1 Plan 02*
