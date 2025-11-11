#!/usr/bin/env bun

/**
 * CLI for Benchmark Hub
 *
 * Usage:
 *   bun run src/cli.ts                    # Run all benchmarks
 *   bun run src/cli.ts --category state   # Run specific category
 *   bun run src/cli.ts --list             # List all registered items
 */

import { parseArgs } from 'node:util';
import { registry } from '@core/registry';
import { benchmarkRunner } from '@core/benchmark';

// Import all registrations
import './categories/state-management';
import './libraries/jotai';
import './libraries/zustand';

// ============================================================================
// CLI Arguments
// ============================================================================

const { values } = parseArgs({
  options: {
    category: {
      type: 'string',
      short: 'c',
      description: 'Run benchmarks for specific category',
    },
    group: {
      type: 'string',
      short: 'g',
      description: 'Run benchmarks for specific group',
    },
    library: {
      type: 'string',
      short: 'l',
      description: 'Run benchmarks for specific library',
    },
    list: {
      type: 'boolean',
      description: 'List all registered categories, libraries, and tests',
    },
    validate: {
      type: 'boolean',
      description: 'Validate registry without running benchmarks',
    },
    help: {
      type: 'boolean',
      short: 'h',
      description: 'Show help',
    },
  },
  allowPositionals: true,
});

// ============================================================================
// CLI Commands
// ============================================================================

function showHelp() {
  console.log(`
🎯 Benchmark Hub CLI

Usage:
  bun run src/cli.ts [options]

Options:
  -c, --category <name>   Run benchmarks for specific category
  -g, --group <name>      Run benchmarks for specific group
  -l, --library <name>    Run benchmarks for specific library
  --list                  List all registered items
  --validate              Validate registry
  -h, --help              Show this help

Examples:
  bun run src/cli.ts
  bun run src/cli.ts --category state-management
  bun run src/cli.ts --category state-management --group 01-read
  bun run src/cli.ts --list
  `);
}

function listRegistrations() {
  console.log('\\n📊 Registered Items\\n');

  const categories = registry.getAllCategories();

  for (const category of categories) {
    console.log(`${category.emoji || '📦'} ${category.name} (${category.id})`);

    const libraries = registry.getCategoryLibraries(category.id);
    if (libraries.length > 0) {
      console.log('\\n  Libraries:');
      for (const lib of libraries) {
        console.log(`    - ${lib.displayName} (${lib.id})`);
      }
    }

    console.log('\\n  Groups:');
    for (const group of category.groups) {
      const tests = registry.getGroupTests(category.id, group.id);
      console.log(`    - ${group.title} (${group.id}) - ${tests.length} tests`);

      if (tests.length > 0) {
        for (const test of tests) {
          console.log(`        • ${test.name}`);
        }
      }
    }

    console.log('');
  }
}

async function runBenchmarks() {
  console.log('\\n🎯 Benchmark Hub\\n');

  // Validate first
  const validation = registry.validate();
  if (!validation.valid) {
    console.error('❌ Registry validation failed:\\n');
    validation.errors.forEach((error) => console.error(`  - ${error}`));
    process.exit(1);
  }

  console.log('✅ Registry validated\\n');

  // Determine what to run
  const category = values.category || 'state-management';
  const group = values.group;
  const library = values.library;

  console.log(`Running: ${category}${group ? `/${group}` : ''}${library ? ` (${library})` : ''}\\n`);

  try {
    const results = await benchmarkRunner.runCategory(category, {
      group,
      library,
    });

    console.log('\\n✅ Benchmarks completed\\n');
  } catch (error) {
    console.error('\\n❌ Benchmark failed:', error);
    process.exit(1);
  }
}

// ============================================================================
// Main
// ============================================================================

async function main() {
  if (values.help) {
    showHelp();
    return;
  }

  if (values.list) {
    listRegistrations();
    return;
  }

  if (values.validate) {
    const validation = registry.validate();
    if (validation.valid) {
      console.log('✅ Registry is valid');
      registry.printSummary();
    } else {
      console.error('❌ Registry validation failed:\\n');
      validation.errors.forEach((error) => console.error(`  - ${error}`));
      process.exit(1);
    }
    return;
  }

  await runBenchmarks();
}

main().catch((error) => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
