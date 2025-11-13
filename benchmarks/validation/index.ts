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
  schemaCreation: category.createGroup({
    id: '01-schema-creation',
    title: 'Schema Creation',
    description: 'Define and compile validation schemas',
    type: 'universal',
  }),

  primitiveValidation: category.createGroup({
    id: '02-primitive-validation',
    title: 'Primitive Type Validation',
    description: 'Validate basic types (string, number, boolean)',
    type: 'universal',
  }),

  objectValidation: category.createGroup({
    id: '03-object-validation',
    title: 'Object Validation',
    description: 'Validate complex nested objects and arrays',
    type: 'universal',
  }),

  errorHandling: category.createGroup({
    id: '04-error-handling',
    title: 'Error Handling',
    description: 'Validation failures and error reporting',
    type: 'universal',
  }),
};

// ============================================================================
// 3. Create Tests
// ============================================================================

export const tests = {
  // Schema Creation Tests
  createSimpleSchema: groups.schemaCreation.createTest({
    name: 'Create Simple Schema',
    description: 'Define a schema with basic fields',
  }),

  createComplexSchema: groups.schemaCreation.createTest({
    name: 'Create Complex Schema',
    description: 'Define a schema with nested objects and arrays',
  }),

  // Primitive Validation Tests
  validateString: groups.primitiveValidation.createTest({
    name: 'Validate String',
    description: 'Validate string type with constraints',
  }),

  validateNumber: groups.primitiveValidation.createTest({
    name: 'Validate Number',
    description: 'Validate number type with min/max',
  }),

  validateEmail: groups.primitiveValidation.createTest({
    name: 'Validate Email',
    description: 'Validate email format',
  }),

  // Object Validation Tests
  validateFlatObject: groups.objectValidation.createTest({
    name: 'Validate Flat Object',
    description: 'Validate object with multiple fields',
  }),

  validateNestedObject: groups.objectValidation.createTest({
    name: 'Validate Nested Object',
    description: 'Validate deeply nested object structure',
  }),

  validateArray: groups.objectValidation.createTest({
    name: 'Validate Array',
    description: 'Validate array of objects',
  }),

  // Error Handling Tests
  catchValidationErrors: groups.errorHandling.createTest({
    name: 'Catch Validation Errors',
    description: 'Handle validation failures',
  }),

  multipleErrors: groups.errorHandling.createTest({
    name: 'Multiple Validation Errors',
    description: 'Collect multiple validation errors',
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
