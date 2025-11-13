/**
 * Validation Benchmark Category
 *
 * Schema validation library performance benchmarks
 */

import { createCategory } from '../../src/core';

// ============================================================================
// 1. Create Category
// ============================================================================

export const category = createCategory({
  id: 'validation',
  name: 'Validation',
  description: 'Schema validation library performance benchmarks',
  emoji: '✅',
});

// ============================================================================
// 2. Create Groups
// ============================================================================

export const groups = {
  basic: category.createGroup({
    id: '01-basic',
    title: 'Basic Operations',
    description: 'Basic operations and common use cases',
    type: 'universal',
  }),
};

// ============================================================================
// 3. Create Tests
// ============================================================================

export const tests = {
  simpleTest: groups.basic.createTest({
    name: 'Simple Test',
    description: 'A basic test case',
  }),
};

// ============================================================================
// 4. Main Entry Point
// ============================================================================

async function main() {
  console.log('🎯 Running benchmarks for all libraries\n');

  // ⚠️  IMPORTANT: Import libraries using dynamic imports in this async function
  // DO NOT use static imports at the top level (e.g., import './libraries/axios')
  // This would cause a circular dependency error: "Cannot access 'category' before initialization"
  // See CONTRIBUTING.md for details
  await import('./libraries/zod');
  await import('./libraries/yup');
  await import('./libraries/joi');
  await import('./libraries/superstruct');

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

  // Save results
  console.log('\n📝 Saving results...\n');
  await category.saveResults(results);
  console.log('✅ Results saved\n');
}

// Run if executed directly
if (import.meta.main) {
  main().catch((error) => {
    console.error('\n❌ Error:', error);
    process.exit(1);
  });
}
