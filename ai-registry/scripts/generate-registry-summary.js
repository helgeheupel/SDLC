#!/usr/bin/env node

/**
 * AI System Registry Consolidation Script
 *
 * Reads all ai-registry/AI-*.yml per-system YAML files and generates a single
 * consolidated Markdown document (AI-Registry-Summary.md) for auditor review.
 *
 * Usage: cd ai-registry/scripts && npm install && node generate-registry-summary.js
 *
 * Document ID: HH-AIMS-REG-001
 */

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const REGISTRY_DIR = path.join(__dirname, '..');
const OUTPUT = path.join(REGISTRY_DIR, 'AI-Registry-Summary.md');

// Category definitions matching AI Policy Section 1
const categories = {
  'development-ai': { title: 'Development AI Systems', entries: [] },
  'third-party-ai': { title: 'Third-Party AI Systems', entries: [] },
  'product-ai': { title: 'Product AI Systems', entries: [] }
};

// Read all YAML files matching AI-*.yml pattern
const files = fs.readdirSync(REGISTRY_DIR)
  .filter(f => f.endsWith('.yml') && f.startsWith('AI-'))
  .sort((a, b) => {
    // Sort by category prefix then number
    const orderA = getCategorySortKey(a);
    const orderB = getCategorySortKey(b);
    return orderA.localeCompare(orderB);
  });

function getCategorySortKey(filename) {
  // AI-AGENT before AI-3PARTY before AI-PROD for consistent ordering
  if (filename.startsWith('AI-AGENT')) return 'A-' + filename;
  if (filename.startsWith('AI-3PARTY')) return 'B-' + filename;
  if (filename.startsWith('AI-PROD')) return 'C-' + filename;
  return 'Z-' + filename;
}

// Statistics counters
const stats = {
  total: 0,
  byCategory: {},
  byEuClassification: {},
  byLifecycle: {},
  byTier: {}
};

// Control applicability tracking
const controlApplicability = {};
const allControls = new Set();

for (const file of files) {
  const raw = fs.readFileSync(path.join(REGISTRY_DIR, file), 'utf8');
  const docs = [];
  yaml.loadAll(raw, (doc) => { if (doc) docs.push(doc); });
  const entry = docs[0];

  if (!entry || !entry['system-id']) {
    console.warn(`WARNING: Skipping ${file} -- missing system-id field`);
    continue;
  }

  const category = entry.category;
  if (!categories[category]) {
    console.warn(`WARNING: Unknown category '${category}' in ${file}`);
    continue;
  }

  categories[category].entries.push(entry);
  stats.total++;

  // Count by category
  stats.byCategory[category] = (stats.byCategory[category] || 0) + 1;

  // Count by EU AI Act classification
  const euClass = entry['eu-ai-act-classification'] || 'unclassified';
  stats.byEuClassification[euClass] = (stats.byEuClassification[euClass] || 0) + 1;

  // Count by lifecycle status
  const lifecycle = entry['lifecycle-status'] || 'unknown';
  stats.byLifecycle[lifecycle] = (stats.byLifecycle[lifecycle] || 0) + 1;

  // Count by SDLC usage tier
  const tier = entry['sdlc-usage-tier'] || 'unclassified';
  stats.byTier[tier] = (stats.byTier[tier] || 0) + 1;

  // Track control applicability
  const controls = entry['applicable-controls'] || [];
  const systemId = entry['system-id'];
  controlApplicability[systemId] = new Set(controls);
  controls.forEach(c => allControls.add(c));
}

// Sort controls for consistent display
const sortedControls = Array.from(allControls).sort((a, b) => {
  // Extract numeric parts for sorting: 42001-A.X.Y.Z
  const partsA = a.replace('42001-A.', '').split('.').map(Number);
  const partsB = b.replace('42001-A.', '').split('.').map(Number);
  for (let i = 0; i < Math.max(partsA.length, partsB.length); i++) {
    const va = partsA[i] || 0;
    const vb = partsB[i] || 0;
    if (va !== vb) return va - vb;
  }
  return 0;
});

// Escape pipe characters for Markdown table cells
function escapeForTable(text) {
  if (!text) return '';
  return text.replace(/\|/g, '\\|').replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
}

// Truncate text to first sentence
function firstSentence(text) {
  if (!text) return '';
  const cleaned = text.replace(/\s+/g, ' ').trim();
  const match = cleaned.match(/^[^.!?]+[.!?]/);
  return match ? match[0].trim() : cleaned.substring(0, 100) + '...';
}

// Generate Markdown output
const generatedDate = new Date().toISOString().split('T')[0];

let md = `---
document-id: HH-AIMS-REG-001
title: "AI System Registry Summary"
version: v1.0
date: ${generatedDate}
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
| Total AI Systems | ${stats.total} |
`;

// By category
for (const [cat, count] of Object.entries(stats.byCategory).sort()) {
  const label = categories[cat] ? categories[cat].title : cat;
  md += `| ${label} | ${count} |\n`;
}

md += `\n### By EU AI Act Classification\n\n`;
md += `| Classification | Count |\n`;
md += `|---------------|-------|\n`;
for (const [cls, count] of Object.entries(stats.byEuClassification).sort()) {
  md += `| ${cls} | ${count} |\n`;
}

md += `\n### By Lifecycle Status\n\n`;
md += `| Status | Count |\n`;
md += `|--------|-------|\n`;
for (const [status, count] of Object.entries(stats.byLifecycle).sort()) {
  md += `| ${status} | ${count} |\n`;
}

md += `\n### By SDLC Usage Tier\n\n`;
md += `| Tier | Count |\n`;
md += `|------|-------|\n`;
for (const [tier, count] of Object.entries(stats.byTier).sort()) {
  md += `| ${tier} | ${count} |\n`;
}

md += `\n---\n\n`;

// Sections 3-5: System tables by category
let sectionNum = 3;
for (const [catKey, category] of Object.entries(categories)) {
  if (category.entries.length === 0) continue;

  md += `## ${sectionNum}. ${category.title}\n\n`;
  sectionNum++;

  md += `| System ID | Name | EU AI Act Class | SDLC Tier | Lifecycle | Owner |\n`;
  md += `|-----------|------|-----------------|-----------|-----------|-------|\n`;

  for (const entry of category.entries) {
    const sysId = entry['system-id'];
    const name = escapeForTable(entry.name);
    const euClass = entry['eu-ai-act-classification'] || 'N/A';
    const tier = entry['sdlc-usage-tier'] || 'N/A';
    const lifecycle = entry['lifecycle-status'] || 'N/A';
    const owner = escapeForTable(entry['responsible-owner'] || 'N/A');

    md += `| ${sysId} | ${name} | ${euClass} | ${tier} | ${lifecycle} | ${owner} |\n`;
  }

  md += `\n### System Details\n\n`;

  for (const entry of category.entries) {
    const sysId = entry['system-id'];
    const name = entry.name;
    md += `#### ${sysId}: ${name}\n\n`;
    md += `- **Provider:** ${entry.provider || 'N/A'}\n`;
    md += `- **Model:** ${entry.model || 'N/A'}\n`;
    md += `- **Intended Use:** ${escapeForTable(firstSentence(entry['intended-use']))}\n`;
    md += `- **Human Oversight:** ${escapeForTable(firstSentence(entry['human-oversight']))}\n`;
    md += `- **Deployment Entities:** ${(entry['deployment-entities'] || []).join(', ')}\n`;
    md += `- **Risk References:** ${(entry['risk-references'] || []).join(', ')}\n`;
    md += `- **Applicable Controls:** ${(entry['applicable-controls'] || []).length} ISO 42001 Annex A controls\n`;
    md += `- **Conformity Status:** ${entry['conformity-status'] || 'N/A'}\n`;
    md += `\n`;
  }

  md += `---\n\n`;
}

// Section 6: Control Applicability Matrix
md += `## ${sectionNum}. Control Applicability Matrix\n\n`;
sectionNum++;

md += `This matrix shows which ISO 42001 Annex A controls are applicable to each registered AI system.\n\n`;

// Build the matrix header
const systemIds = Object.keys(controlApplicability).sort((a, b) => {
  return getCategorySortKey(a.replace('AI-', 'AI-') + '.yml')
    .localeCompare(getCategorySortKey(b.replace('AI-', 'AI-') + '.yml'));
});

// Use abbreviated system IDs for column headers
const abbreviations = {};
systemIds.forEach(id => {
  const abbr = id.replace('AI-AGENT-', 'AG').replace('AI-3PARTY-', '3P').replace('AI-PROD-', 'PR');
  abbreviations[id] = abbr;
});

md += `**Legend:** ${systemIds.map(id => `${abbreviations[id]}=${id}`).join(', ')}\n\n`;

md += `| Control | ${systemIds.map(id => abbreviations[id]).join(' | ')} |\n`;
md += `|---------|${systemIds.map(() => ':---:').join('|')}|\n`;

for (const control of sortedControls) {
  const row = systemIds.map(sysId => {
    return controlApplicability[sysId].has(control) ? 'X' : '';
  });
  md += `| ${control} | ${row.join(' | ')} |\n`;
}

md += `\n**Coverage summary:**\n\n`;
md += `| System | Applicable Controls |\n`;
md += `|--------|--------------------|\n`;
for (const sysId of systemIds) {
  md += `| ${sysId} | ${controlApplicability[sysId].size} |\n`;
}

md += `\n---\n\n`;

// Section 7: Approval
md += `## ${sectionNum}. Approval\n\n`;

md += `This AI System Registry Summary has been reviewed and approved by:\n\n`;
md += `| Role | Name | Date | Signature |\n`;
md += `|------|------|------|-----------|\n`;
md += `| CEO | Helge Heupel | [CEO-SIGNOFF-REQUIRED] | _________________ |\n`;
md += `| CISO | [CISO name] | [CISO-REVIEW-ON-RETURN] | _________________ |\n`;
md += `\n`;
md += `**Git PR Reference:** [To be populated upon PR approval]\n\n`;
md += `---\n\n`;
md += `*Generated by: ai-registry/scripts/generate-registry-summary.js*\n`;
md += `*Generated on: ${generatedDate}*\n`;
md += `*Source files: ${stats.total} per-system YAML files in ai-registry/*\n`;

fs.writeFileSync(OUTPUT, md);
console.log(`Generated ${OUTPUT}`);
console.log(`  Total AI Systems: ${stats.total}`);
console.log(`  Development AI: ${stats.byCategory['development-ai'] || 0}`);
console.log(`  Third-Party AI: ${stats.byCategory['third-party-ai'] || 0}`);
console.log(`  Product AI: ${stats.byCategory['product-ai'] || 0}`);
console.log(`  EU AI Act classifications: ${JSON.stringify(stats.byEuClassification)}`);
console.log(`  Lifecycle statuses: ${JSON.stringify(stats.byLifecycle)}`);
console.log(`  SDLC tiers: ${JSON.stringify(stats.byTier)}`);
console.log(`  Unique controls referenced: ${allControls.size}`);
