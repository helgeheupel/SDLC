#!/usr/bin/env node

/**
 * SoA Consolidation Script
 *
 * Reads all soa/A.*.yml per-control YAML files and generates a single
 * consolidated Markdown document (SoA-Consolidated.md) for auditor review.
 *
 * Usage: cd soa/scripts && npm install && node generate-soa.js
 *
 * Document ID: HH-ISMS-SOA-001
 */

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const SOA_DIR = path.join(__dirname, '..');
const OUTPUT = path.join(SOA_DIR, 'SoA-Consolidated.md');

const themes = {
  organizational: { title: 'Organizational Controls', range: 'A.5.1 -- A.5.37', controls: [] },
  people: { title: 'People Controls', range: 'A.6.1 -- A.6.8', controls: [] },
  physical: { title: 'Physical Controls', range: 'A.7.1 -- A.7.14', controls: [] },
  technological: { title: 'Technological Controls', range: 'A.8.1 -- A.8.34', controls: [] }
};

// Read all YAML files
const files = fs.readdirSync(SOA_DIR)
  .filter(f => f.endsWith('.yml') && f.startsWith('A.'))
  .sort((a, b) => {
    const matchA = a.match(/A\.(\d+)\.(\d+)/);
    const matchB = b.match(/A\.(\d+)\.(\d+)/);
    if (!matchA || !matchB) return 0;
    const [, aMaj, aMin] = matchA;
    const [, bMaj, bMin] = matchB;
    return (parseInt(aMaj) * 100 + parseInt(aMin)) - (parseInt(bMaj) * 100 + parseInt(bMin));
  });

const stats = {
  total: 0,
  applicable: 0,
  notApplicable: 0,
  fullyImplemented: 0,
  partiallyImplemented: 0,
  planned: 0,
  notStarted: 0
};

// Collect risk-to-control mappings
const riskToControls = {};

for (const file of files) {
  const raw = fs.readFileSync(path.join(SOA_DIR, file), 'utf8');
  // YAML files use front-matter style (--- at start and end), so loadAll and take first document
  const docs = [];
  yaml.loadAll(raw, (doc) => { if (doc) docs.push(doc); });
  const content = docs[0];

  if (!content || !content.theme) {
    console.warn(`WARNING: Skipping ${file} -- missing theme field`);
    continue;
  }

  if (!themes[content.theme]) {
    console.warn(`WARNING: Unknown theme '${content.theme}' in ${file}`);
    continue;
  }

  themes[content.theme].controls.push(content);
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
document-id: HH-ISMS-SOA-001
title: "Statement of Applicability -- ISO 27001:2022"
version: v1.0
date: ${generatedDate}
classification: Confidential
author: CISO Agent
approver: CEO Helge Heupel
status: Draft
generated-by: soa/scripts/generate-soa.js
---

# Statement of Applicability -- ISO 27001:2022

## 1. Introduction

This Statement of Applicability (SoA) documents the applicability determination for all 93 controls in ISO/IEC 27001:2022 Annex A for the Helge Heupel Group (GmbH, B.V., Inc.). Each control has been assessed for applicability based on the organization's risk assessment, regulatory requirements (NIS2UmsuCG, Wbni, GDPR, EU AI Act), and operational context (cloud-only, fully remote, AI-powered development).

**Methodology:** Controls are assessed against the organization's risk profile, legal requirements, and business context. Applicable controls receive an implementation status assessment. Not-applicable controls receive a justification explaining why the control does not apply, referencing the Azure shared responsibility model where relevant.

**Implementation status levels:**
- **Fully Implemented** -- Control is operational with documented evidence
- **Partially Implemented** -- Control mechanisms exist but documentation or full operationalization is pending
- **Planned** -- Control is scheduled for implementation in a future SDLC phase
- **Not Started** -- No implementation work has begun (used for not-applicable controls)

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

---

`;

let sectionNum = 3;
for (const [key, theme] of Object.entries(themes)) {
  md += `## ${sectionNum}. ${theme.title} (${theme.range})\n\n`;
  sectionNum++;

  // Count theme-level stats
  const themeApplicable = theme.controls.filter(c => c.applicable).length;
  const themeNA = theme.controls.filter(c => !c.applicable).length;
  md += `**Controls:** ${theme.controls.length} | **Applicable:** ${themeApplicable} | **Not Applicable:** ${themeNA}\n\n`;

  md += '| Control | Name | Applicable | Status | Justification (summary) |\n';
  md += '|---------|------|:----------:|--------|-------------------------|\n';

  for (const c of theme.controls) {
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

// Risk-to-Control Traceability section
md += `## 7. Risk-to-Control Traceability\n\n`;
md += `This section maps identified risks to the Annex A controls that treat them. Risk references are provisional and will be fully populated after the risk assessment workshop.\n\n`;

const sortedRisks = Object.keys(riskToControls).sort();

if (sortedRisks.length > 0) {
  md += '| Risk ID | Mapped Controls |\n';
  md += '|---------|----------------|\n';

  for (const riskId of sortedRisks) {
    const controls = riskToControls[riskId].sort().join(', ');
    md += `| ${riskId} | ${controls} |\n`;
  }
} else {
  md += '*No risk references have been populated yet. This section will be updated after the risk assessment workshop.*\n';
}

md += `\n---\n\n`;

// Approval section
md += `## 8. Approval\n\n`;
md += `This Statement of Applicability has been reviewed and approved by:\n\n`;
md += `| Role | Name | Date | Signature |\n`;
md += `|------|------|------|-----------|\n`;
md += `| CEO | Helge Heupel | [CEO-SIGNOFF-REQUIRED] | _________________ |\n`;
md += `| CISO | [CISO name] | [CISO-REVIEW-ON-RETURN] | _________________ |\n`;
md += `\n`;
md += `**Git PR Reference:** [To be populated upon PR approval]\n\n`;
md += `---\n\n`;
md += `*Generated by: soa/scripts/generate-soa.js*\n`;
md += `*Generated on: ${generatedDate}*\n`;
md += `*Source files: ${stats.total} per-control YAML files in soa/*\n`;

fs.writeFileSync(OUTPUT, md);
console.log(`Generated ${OUTPUT}`);
console.log(`  Total controls: ${stats.total}`);
console.log(`  Applicable: ${stats.applicable}`);
console.log(`  Not Applicable: ${stats.notApplicable}`);
console.log(`  Fully Implemented: ${stats.fullyImplemented}`);
console.log(`  Partially Implemented: ${stats.partiallyImplemented}`);
console.log(`  Planned: ${stats.planned}`);
console.log(`  Not Started: ${stats.notStarted}`);
console.log(`  Risk mappings: ${sortedRisks.length} risks across ${Object.values(riskToControls).flat().length} control references`);
