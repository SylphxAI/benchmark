/**
 * Central registry for categories, libraries, and tests
 */

import type {
  CategoryRegistration,
  LibraryRegistration,
  TestRegistration,
  RegistryState,
} from './types';

class Registry {
  private state: RegistryState = {
    categories: new Map(),
    libraries: new Map(),
    tests: new Map(),
  };

  // ============================================================================
  // Category Registration
  // ============================================================================

  registerCategory(config: CategoryRegistration): void {
    if (this.state.categories.has(config.id)) {
      throw new Error(`Category '${config.id}' is already registered`);
    }

    this.state.categories.set(config.id, config);
    this.state.libraries.set(config.id, new Map());
    this.state.tests.set(config.id, new Map());

    console.log(`✓ Registered category: ${config.name}`);
  }

  getCategory(id: string): CategoryRegistration | undefined {
    return this.state.categories.get(id);
  }

  getAllCategories(): CategoryRegistration[] {
    return Array.from(this.state.categories.values());
  }

  // ============================================================================
  // Library Registration
  // ============================================================================

  registerLibrary<TStore = any>(registration: LibraryRegistration<TStore>): void {
    const { category, id } = registration;

    if (!this.state.categories.has(category)) {
      throw new Error(`Category '${category}' not found. Register category first.`);
    }

    const categoryLibraries = this.state.libraries.get(category)!;

    if (categoryLibraries.has(id)) {
      throw new Error(`Library '${id}' is already registered in category '${category}'`);
    }

    categoryLibraries.set(id, registration as LibraryRegistration);
    console.log(`✓ Registered library: ${registration.displayName} (${category})`);
  }

  getLibrary(category: string, id: string): LibraryRegistration | undefined {
    return this.state.libraries.get(category)?.get(id);
  }

  getCategoryLibraries(category: string): LibraryRegistration[] {
    const libs = this.state.libraries.get(category);
    return libs ? Array.from(libs.values()) : [];
  }

  // ============================================================================
  // Test Registration
  // ============================================================================

  registerTest(registration: TestRegistration): void {
    const { category, group, name } = registration;

    if (!this.state.categories.has(category)) {
      throw new Error(`Category '${category}' not found. Register category first.`);
    }

    // Ensure group map exists
    let categoryTests = this.state.tests.get(category);
    if (!categoryTests) {
      categoryTests = new Map();
      this.state.tests.set(category, categoryTests);
    }

    let groupTests = categoryTests.get(group);
    if (!groupTests) {
      groupTests = new Map();
      categoryTests.set(group, groupTests);
    }

    if (groupTests.has(name)) {
      console.warn(`⚠️  Test '${name}' in group '${group}' already exists, overwriting`);
    }

    groupTests.set(name, registration);
    console.log(`✓ Registered test: ${name} (${category}/${group})`);
  }

  getTest(category: string, group: string, name: string): TestRegistration | undefined {
    return this.state.tests.get(category)?.get(group)?.get(name);
  }

  getGroupTests(category: string, group: string): TestRegistration[] {
    const tests = this.state.tests.get(category)?.get(group);
    return tests ? Array.from(tests.values()) : [];
  }

  getCategoryTests(category: string): Map<string, Map<string, TestRegistration>> {
    return this.state.tests.get(category) || new Map();
  }

  getAllTests(): TestRegistration[] {
    const allTests: TestRegistration[] = [];

    for (const categoryTests of this.state.tests.values()) {
      for (const groupTests of categoryTests.values()) {
        allTests.push(...groupTests.values());
      }
    }

    return allTests;
  }

  // ============================================================================
  // Validation
  // ============================================================================

  validate(): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    // Check each category has at least one library
    for (const [categoryId, category] of this.state.categories) {
      const libs = this.state.libraries.get(categoryId);
      if (!libs || libs.size === 0) {
        errors.push(`Category '${categoryId}' has no registered libraries`);
      }

      // Check each group has at least one test
      for (const group of category.groups) {
        const tests = this.state.tests.get(categoryId)?.get(group.id);
        if (!tests || tests.size === 0) {
          errors.push(`Group '${group.id}' in category '${categoryId}' has no registered tests`);
        }
      }
    }

    return {
      valid: errors.length === 0,
      errors,
    };
  }

  // ============================================================================
  // Debug & Inspection
  // ============================================================================

  printSummary(): void {
    console.log('\\n📊 Registry Summary\\n');

    for (const [categoryId, category] of this.state.categories) {
      const libs = this.state.libraries.get(categoryId)!;
      const tests = this.state.tests.get(categoryId)!;

      console.log(`${category.emoji || '📦'} ${category.name}`);
      console.log(`   Libraries: ${libs.size}`);

      let totalTests = 0;
      for (const groupTests of tests.values()) {
        totalTests += groupTests.size;
      }
      console.log(`   Groups: ${category.groups.length}`);
      console.log(`   Tests: ${totalTests}\\n`);
    }
  }

  // ============================================================================
  // Reset (for testing)
  // ============================================================================

  reset(): void {
    this.state = {
      categories: new Map(),
      libraries: new Map(),
      tests: new Map(),
    };
  }
}

// Singleton instance
export const registry = new Registry();

// ============================================================================
// Convenience functions
// ============================================================================

export function registerCategory(config: CategoryRegistration): void {
  registry.registerCategory(config);
}

export function registerLibrary<TStore = any>(
  registration: LibraryRegistration<TStore>
): void {
  registry.registerLibrary(registration);
}

export function registerTest(registration: TestRegistration): void {
  registry.registerTest(registration);
}

export function getRegistry(): Registry {
  return registry;
}
