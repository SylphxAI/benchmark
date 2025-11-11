/**
 * Benchmark Hub - Unified Benchmark Framework
 *
 * Main entry point for the framework
 */

import { registry } from '@core/registry';
import { benchmarkRunner } from '@core/benchmark';

// ============================================================================
// Import Category Registrations
// ============================================================================

import './categories/state-management';
// import './categories/immutability';
// import './categories/router';
// import './categories/css-frameworks';

// ============================================================================
// Import Library Registrations
// ============================================================================

import './libraries/jotai';
import './libraries/zustand';
// More libraries...

// ============================================================================
// Main Entry Point
// ============================================================================

async function main() {
  console.log('\\n🎯 Benchmark Hub - Unified Framework\\n');

  // Print registry summary
  registry.printSummary();

  // Validate registry
  const validation = registry.validate();
  if (!validation.valid) {
    console.error('\\n❌ Registry validation failed:\\n');
    validation.errors.forEach((error) => console.error(`  - ${error}`));
    process.exit(1);
  }

  console.log('✅ Registry validation passed\\n');

  // Example: Run benchmarks for state-management
  console.log('🚀 Running state-management benchmarks...\\n');
  const results = await benchmarkRunner.runCategory('state-management');

  console.log('\\n✅ Benchmarks completed\\n');
  console.log('Results:', JSON.stringify(results, null, 2));
}

// Run if executed directly
if (import.meta.main) {
  main().catch((error) => {
    console.error('\\n❌ Error:', error);
    process.exit(1);
  });
}

// ============================================================================
// Exports
// ============================================================================

export { registry, benchmarkRunner };
export * from '@core/index';
