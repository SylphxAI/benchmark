/**
 * Library class - represents a library being benchmarked
 */

import type { LibraryConfig, TestFunction, TestContext } from './types';
import type { Category } from './category';
import type { Test } from './test';

interface TestImplementation<TStore = any> {
  test: Test;
  fn: TestFunction<TStore>;
}

export class Library<TStore = any> {
  public readonly id: string;
  public readonly displayName: string;
  public readonly packageName: string;
  public readonly githubUrl: string;
  public readonly description?: string;
  public readonly category: Category;
  public readonly setup: LibraryConfig<TStore>['setup'];
  public readonly features: string[];

  private implementations: Map<string, TestImplementation<TStore>> = new Map();

  constructor(category: Category, config: LibraryConfig<TStore>) {
    this.category = category;
    this.id = config.id;
    this.displayName = config.displayName;
    this.packageName = config.packageName;
    this.githubUrl = config.githubUrl;
    this.description = config.description;
    this.setup = config.setup;
    this.features = config.features || [];
  }

  /**
   * Implement a test for this library
   * Uses object reference instead of strings for type safety
   */
  implement(test: Test, fn: TestFunction<TStore>): void {
    // Validate test belongs to same category
    if (test.group.category.id !== this.category.id) {
      throw new Error(
        `Test '${test.name}' belongs to category '${test.group.category.id}', ` +
        `but library '${this.id}' belongs to '${this.category.id}'`
      );
    }

    if (this.implementations.has(test.id)) {
      console.warn(`  ⚠️  Test '${test.name}' already implemented for '${this.id}', overwriting`);
    }

    this.implementations.set(test.id, { test, fn });
    console.log(`  ✓ Implemented: ${this.id}.${test.name}`);
  }

  /**
   * Get implementation for a specific test
   */
  getImplementation(test: Test): TestFunction<TStore> | undefined {
    return this.implementations.get(test.id)?.fn;
  }

  /**
   * Get all implemented tests
   */
  getImplementedTests(): Test[] {
    return Array.from(this.implementations.values()).map((impl) => impl.test);
  }

  /**
   * Check if a test is implemented
   */
  hasImplementation(test: Test): boolean {
    return this.implementations.has(test.id);
  }

  /**
   * Execute a test with this library
   */
  async execute(test: Test): Promise<void> {
    const fn = this.getImplementation(test);
    if (!fn) {
      throw new Error(`Test '${test.name}' not implemented for library '${this.id}'`);
    }

    // Initialize if needed
    if (this.setup.init) {
      await this.setup.init();
    }

    // Create store
    const store = await this.setup.createStore();

    // Create context
    const ctx: TestContext<TStore> = {
      library: {
        id: this.id,
        displayName: this.displayName,
        packageName: this.packageName,
        githubUrl: this.githubUrl,
      },
      store,
      cleanup: this.setup.cleanup ? () => this.setup.cleanup!(store) : undefined,
    };

    // Execute test
    await fn(ctx);

    // Cleanup
    if (ctx.cleanup) {
      await ctx.cleanup();
    }
  }

  toString(): string {
    return `${this.displayName} (${this.id})`;
  }
}
