#!/usr/bin/env node

/**
 * AIMS SoA Consolidation Script
 *
 * Reads all aims-soa/42001-A.*.yml per-control YAML files and generates a single
 * consolidated Markdown document (AIMS-SoA-Consolidated.md) for auditor review.
 *
 * Usage: cd aims-soa/scripts && npm install && node generate-aims-soa.js
 *
 * Document ID: HH-AIMS-SOA-001
 *
 * This script is SEPARATE from soa/scripts/generate-soa.js (ISO 27001 SoA)
 * to avoid any risk to the working ISO 27001 generation.
 */

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const AIMS_SOA_DIR = path.join(__dirname, '..');
const OUTPUT = path.join(AIMS_SOA_DIR, 'AIMS-SoA-Consolidated.md');

// ISO 42001 uses 9 groups (A.2-A.10) instead of ISO 27001's 4 themes
const groups = {
  'A.2': { title: 'Policies related to AI', controls: [] },
  'A.3': { title: 'Internal organization', controls: [] },
  'A.4': { title: 'Resources for AI systems', controls: [] },
  'A.5': { title: 'Assessing impacts of AI systems', controls: [] },
  'A.6': { title: 'AI system life cycle', controls: [] },
  'A.7': { title: 'Data for AI systems', controls: [] },
  'A.8': { title: 'Information for interested parties of AI systems', controls: [] },
  'A.9': { title: 'Use of AI systems', controls: [] },
  'A.10': { title: 'Third-party and customer relationships', controls: [] }
};

/**
 * Sort control IDs numerically, handling multi-level IDs like A.6.1.2 vs A.6.2.3.
 * Splits on '.' and compares each numeric segment.
 */
function compareControlIds(a, b) {
  const partsA = a.replace(/^A\./, '').split('.').map(Number);
  const partsB = b.replace(/^A\./, '').split('.').map(Number);
  const maxLen = Math.max(partsA.length, partsB.length);
  for (let i = 0; i < maxLen; i++) {
    const numA = partsA[i] || 0;
    const numB = partsB[i] || 0;
    if (numA !== numB) return numA - numB;
  }
  return 0;
}

/**
 * Sort files by control ID extracted from filename.
 */
function sortFilesByControlId(files) {
  return files.sort((a, b) => {
    const idA = a.replace('42001-', '').replace('.yml', '');
    const idB = b.replace('42001-', '').replace('.yml', '');
    return compareControlIds(idA, idB);
  });
}

// Read all YAML files matching 42001-A.*.yml pattern
const files = fs.readdirSync(AIMS_SOA_DIR)
  .filter(f => f.endsWith('.yml') && f.startsWith('42001-A.'));

const sortedFiles = sortFilesByControlId(files);

const stats = {
  total: 0,
  applicable: 0,
  notApplicable: 0,
  fullyImplemented: 0,
  partiallyImplemented: 0,
  planned: 0,
  notStarted: 0
};

// Collect ISO 27001 cross-references
const crossReferences = [];

// Collect risk-to-control mappings
const riskToControls = {};

for (const file of sortedFiles) {
  const raw = fs.readFileSync(path.join(AIMS_SOA_DIR, file), 'utf8');
  // YAML files use front-matter style (--- at start and end), so loadAll and take first document
  const docs = [];
  yaml.loadAll(raw, (doc) => { if (doc) docs.push(doc); });
  const content = docs[0];

  if (!content || !content.group) {
    console.warn(`WARNING: Skipping ${file} -- missing group field`);
    continue;
  }

  if (!groups[content.group]) {
    console.warn(`WARNING: Unknown group '${content.group}' in ${file}`);
    continue;
  }

  groups[content.group].controls.push(content);
  stats.total++;

  if (content.applicable) {
    stats.applicable++;
  } else {
    stats.notApplicable++;
  }

  const implStatus = content['implementation-status'];
  if (implStatus === 'fully-implemented') stats.fullyImplemented++;
  else if (implStatus === 'partially-implemented') stats.partiallyImplemented++;
  else if (implStatus === 'planned') stats.planned++;
  else stats.notStarted++;

  // Collect ISO 27001 cross-references
  const mappings = content['iso27001-mapping'] || [];
  for (const mapping of mappings) {
    if (mapping['control-id'] && mapping['control-id'] !== 'none') {
      crossReferences.push({
        iso42001: content['control-id'],
        iso42001Name: content['control-name'],
        iso27001: mapping['control-id'],
        relationship: mapping.relationship
      });
    }
  }

  // Collect risk references
  const riskRefs = content['risk-references'] || [];
  for (const ref of riskRefs) {
    const riskId = typeof ref === 'string' ? ref : ref['risk-id'] || ref;
    if (riskId && typeof riskId === 'string' && riskId.startsWith('RISK-')) {
      if (!riskToControls[riskId]) riskToControls[riskId] = [];
      riskToControls[riskId].push(content['control-id']);
    }
  }
}

// Truncate justification to first 2 sentences
function truncateJustification(text) {
  if (!text) return '';
  const cleaned = text.replace(/\s+/g, ' ').trim();
  const sentences = cleaned.match(/[^.!?]+[.!?]+/g);
  if (!sentences || sentences.length <= 2) return cleaned;
  return sentences.slice(0, 2).join('').trim();
}

// Escape pipe characters for Markdown table cells
function escapeForTable(text) {
  if (!text) return '';
  return text.replace(/\|/g, '\\|').replace(/\n/g, ' ');
}

// Generate Markdown output
const generatedDate = new Date().toISOString().split('T')[0];

let md = `---
document-id: HH-AIMS-SOA-001
title: "Statement of Applicability -- ISO 42001:2023"
version: v1.0
date: ${generatedDate}
classification: Confidential
author: CISO Agent
approver: CEO Helge Heupel
status: Draft
generated-by: aims-soa/scripts/generate-aims-soa.js
---

# Statement of Applicability -- ISO 42001:2023

## 1. Introduction

This Statement of Applicability (SoA) documents the applicability determination for all ${stats.total} controls in ISO/IEC 42001:2023 Annex A for the Helge Heupel Group (GmbH, B.V., Inc.). Each control has been assessed for applicability based on the organization's AI risk assessment, regulatory requirements (EU AI Act, ISO 42001, GDPR), and operational context (11 AI systems across 3 categories: Development AI, Third-party AI, Product AI).

**Methodology:** Controls are assessed against the organization's AI risk profile, EU AI Act obligations, and business context. Applicable controls receive an implementation status assessment with an HH-specific implementation approach. The assessment considers all 11 AI systems registered in the AI System Registry, with applicability evaluated per system category.

**Implementation status levels:**
- **Fully Implemented** -- Control is operational with documented evidence
- **Partially Implemented** -- Control mechanisms exist but documentation or full operationalization is pending
- **Planned** -- Control is scheduled for implementation in a future SDLC phase
- **Not Started** -- No implementation work has begun (used for not-applicable controls)

**Relationship to ISO 27001 SoA:** This AIMS SoA (HH-AIMS-SOA-001) is a companion to the ISMS SoA (HH-ISMS-SOA-001). Each ISO 42001 Annex A control includes cross-references to related ISO 27001 Annex A controls, enabling bidirectional traceability for integrated audits.

---

## 2. Summary Statistics

| Metric | Count |
|--------|-------|
| Total Annex A Controls | ${stats.total} |
| Applicable | ${stats.applicable} |
| Not Applicable | ${stats.notApplicable} |
| Fully Implemented | ${stats.fullyImplemented} |
| Partially Implemented | ${stats.partiallyImplemented} |
| Planned | ${stats.planned} |
| Not Started | ${stats.notStarted} |

**Applicability rate:** ${((stats.applicable / stats.total) * 100).toFixed(1)}% of controls are applicable.

**Implementation coverage of applicable controls:**
- Fully Implemented: ${stats.fullyImplemented} (${((stats.fullyImplemented / stats.applicable) * 100).toFixed(1)}%)
- Partially Implemented: ${stats.partiallyImplemented} (${((stats.partiallyImplemented / stats.applicable) * 100).toFixed(1)}%)
- Planned: ${stats.planned} (${((stats.planned / stats.applicable) * 100).toFixed(1)}%)

### By Group

| Group | Name | Controls | Applicable | Fully Implemented | Partially Implemented | Planned |
|-------|------|:--------:|:----------:|:-----------------:|:---------------------:|:-------:|
`;

for (const [groupId, group] of Object.entries(groups)) {
  const gc = group.controls;
  const gApplicable = gc.filter(c => c.applicable).length;
  const gFull = gc.filter(c => c['implementation-status'] === 'fully-implemented').length;
  const gPartial = gc.filter(c => c['implementation-status'] === 'partially-implemented').length;
  const gPlanned = gc.filter(c => c['implementation-status'] === 'planned').length;
  md += `| ${groupId} | ${group.title} | ${gc.length} | ${gApplicable} | ${gFull} | ${gPartial} | ${gPlanned} |\n`;
}

md += `
---

`;

// Control sections (3-11) -- one per group
let sectionNum = 3;
for (const [groupId, group] of Object.entries(groups)) {
  // Get group objective from first control
  const groupObjective = group.controls.length > 0
    ? escapeForTable(group.controls[0]['group-objective'] || '').replace(/\s+/g, ' ').trim()
    : '';

  md += `## ${sectionNum}. ${group.title} (${groupId})\n\n`;
  if (groupObjective) {
    md += `**Objective:** ${groupObjective}\n\n`;
  }
  sectionNum++;

  // Count group-level stats
  const groupApplicable = group.controls.filter(c => c.applicable).length;
  const groupNA = group.controls.filter(c => !c.applicable).length;
  md += `**Controls:** ${group.controls.length} | **Applicable:** ${groupApplicable} | **Not Applicable:** ${groupNA}\n\n`;

  md += '| Control | Name | Applicable | Status | Justification (summary) |\n';
  md += '|---------|------|:----------:|--------|-------------------------|\n';

  // Sort controls within group
  const sortedControls = group.controls.sort((a, b) =>
    compareControlIds(a['control-id'], b['control-id'])
  );

  for (const c of sortedControls) {
    const status = c.applicable
      ? c['implementation-status'].replace(/-/g, ' ')
      : 'N/A';
    const justShort = escapeForTable(truncateJustification(c.justification));
    const controlId = c['control-id'];
    const controlName = escapeForTable(c['control-name']);

    md += `| ${controlId} | ${controlName} | ${c.applicable ? 'Yes' : 'No'} | ${status} | ${justShort} |\n`;
  }

  md += '\n---\n\n';
}

// ISO 27001 Cross-Reference Matrix
md += `## 12. ISO 27001 Cross-Reference Matrix\n\n`;
md += `This section provides bidirectional traceability between ISO 42001 Annex A controls and ISO 27001 Annex A controls. Each mapping includes a description of the specific relationship.\n\n`;

if (crossReferences.length > 0) {
  md += '| ISO 42001 Control | Control Name | ISO 27001 Control | Relationship |\n';
  md += '|-------------------|-------------|-------------------|-------------|\n';

  // Sort by ISO 42001 control ID
  const sortedRefs = crossReferences.sort((a, b) =>
    compareControlIds(a.iso42001, b.iso42001)
  );

  for (const ref of sortedRefs) {
    const relSummary = escapeForTable(
      ref.relationship.length > 120
        ? ref.relationship.substring(0, 117) + '...'
        : ref.relationship
    );
    md += `| ${ref.iso42001} | ${escapeForTable(ref.iso42001Name)} | ${ref.iso27001} | ${relSummary} |\n`;
  }

  // Note about A.5 controls
  md += '\n**Note:** ISO 42001 Annex A.5 controls (A.5.2-A.5.5, Assessing impacts of AI systems) have no direct ISO 27001 equivalent. AI impact assessment is additive to the ISMS.\n';
} else {
  md += '*No cross-references have been populated yet.*\n';
}

md += '\n---\n\n';

// Risk-to-Control Traceability section
md += `## 13. Risk-to-Control Traceability\n\n`;
md += `This section maps identified AI risks to the ISO 42001 Annex A controls that treat them. Risk references correspond to entries in the risk register (risks/ directory).\n\n`;

const sortedRisks = Object.keys(riskToControls).sort();

if (sortedRisks.length > 0) {
  md += '| Risk ID | Mapped Controls |\n';
  md += '|---------|----------------|\n';

  for (const riskId of sortedRisks) {
    // Deduplicate and sort controls
    const controls = [...new Set(riskToControls[riskId])].sort((a, b) =>
      compareControlIds(a, b)
    );
    md += `| ${riskId} | ${controls.join(', ')} |\n`;
  }
} else {
  md += '*No risk references have been populated yet.*\n';
}

md += `\n---\n\n`;

// Approval section
md += `## 14. Approval\n\n`;
md += `This Statement of Applicability has been reviewed and approved by:\n\n`;
md += `| Role | Name | Date | Signature |\n`;
md += `|------|------|------|-----------|\n`;
md += `| CEO | Helge Heupel | [CEO-SIGNOFF-REQUIRED] | _________________ |\n`;
md += `| CISO | [CISO name] | [CISO-REVIEW-ON-RETURN] | _________________ |\n`;
md += `\n`;
md += `**Git PR Reference:** [To be populated upon PR approval]\n\n`;
md += `---\n\n`;
md += `*Generated by: aims-soa/scripts/generate-aims-soa.js*\n`;
md += `*Generated on: ${generatedDate}*\n`;
md += `*Source files: ${stats.total} per-control YAML files in aims-soa/*\n`;

fs.writeFileSync(OUTPUT, md);
console.log(`Generated ${OUTPUT}`);
console.log(`  Total controls: ${stats.total}`);
console.log(`  Applicable: ${stats.applicable}`);
console.log(`  Not Applicable: ${stats.notApplicable}`);
console.log(`  Fully Implemented: ${stats.fullyImplemented}`);
console.log(`  Partially Implemented: ${stats.partiallyImplemented}`);
console.log(`  Planned: ${stats.planned}`);
console.log(`  Not Started: ${stats.notStarted}`);
console.log(`  ISO 27001 cross-references: ${crossReferences.length}`);
console.log(`  Risk mappings: ${sortedRisks.length} risks across ${Object.values(riskToControls).flat().length} control references`);
