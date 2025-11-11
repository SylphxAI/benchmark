/**
 * State Management Category
 *
 * Example of the new object-reference based API
 */

import { createCategory } from '../../src/core';

// ============================================================================
// 1. Create Category
// ============================================================================

export const category = createCategory({
  id: 'state-management',
  name: 'State Management',
  description: 'React state management libraries performance benchmarks',
  emoji: '🗃️',
  performanceTiers: [
    {
      name: 'Signal-based (Tier S)',
      threshold: 2000000,
      description: 'Exceptional performance across all operations',
    },
    {
      name: 'Atom-based (Tier A)',
      threshold: 1000000,
      description: 'Very fast but creation overhead impacts overall score',
    },
    {
      name: 'Proxy-based (Tier B)',
      threshold: 200000,
      description: 'Moderate performance with good ergonomics',
    },
  ],
});

// ============================================================================
// 2. Create Groups (returns object references!)
// ============================================================================

export const groups = {
  read: category.createGroup({
    id: '01-read',
    title: 'Read Operations',
    description: 'Simple read and high-frequency read patterns',
    type: 'universal',
  }),

  write: category.createGroup({
    id: '02-write',
    title: 'Write Operations',
    description: 'Simple increments and burst updates',
    type: 'universal',
  }),
};

// ============================================================================
// 3. Create Tests (returns object references!)
// ============================================================================

export const tests = {
  // Read tests
  simpleRead: groups.read.createTest({
    name: 'Simple Read',
    description: 'Read a single counter value',
  }),

  highFrequencyRead: groups.read.createTest({
    name: 'High-Frequency Read (1000x)',
    description: 'Read value 1000 times',
  }),

  // Write tests
  simpleIncrement: groups.write.createTest({
    name: 'Simple Increment',
    description: 'Increment counter once',
  }),

  burstUpdates: groups.write.createTest({
    name: 'Burst Updates (100x)',
    description: 'Increment counter 100 times rapidly',
  }),
};

// ============================================================================
// 4. Main Entry Point
// ============================================================================

async function main() {
  // Import libraries AFTER category/groups/tests are defined
  await import('./libraries/jotai');
  await import('./libraries/zustand');
  await import('./libraries/redux-toolkit');
  await import('./libraries/mobx');
  await import('./libraries/valtio');
  await import('./libraries/preact-signals');
  await import('./libraries/solid-js');
  await import('./libraries/zen');

  // Print summary
  category.printSummary();

  // Validate
  const validation = category.validate();
  if (!validation.valid) {
    console.error('\n❌ Validation failed:\n');
    validation.errors.forEach((error) => console.error(`  - ${error}`));
    process.exit(1);
  }

  console.log('✅ Validation passed\n');

  // Run benchmarks
  const results = await category.run();

  console.log('\n✅ Benchmarks completed\n');
  console.log('Results summary:');
  console.log(`  Total tests run: ${results.results.length}`);
  console.log(`  Timestamp: ${results.timestamp}`);
}

// Run if executed directly
if (import.meta.main) {
  main().catch((error) => {
    console.error('\n❌ Error:', error);
    process.exit(1);
  });
}
