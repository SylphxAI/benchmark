/**
 * Group class - represents a collection of related tests
 */

import type { GroupConfig, TestConfig } from './types';
import type { Category } from './category';
import { Test } from './test';

export class Group {
  public readonly id: string;
  public readonly title: string;
  public readonly description: string;
  public readonly type: 'universal' | 'feature-specific';
  public readonly category: Category;

  private tests: Map<string, Test> = new Map();

  constructor(category: Category, config: GroupConfig) {
    this.category = category;
    this.id = config.id;
    this.title = config.title;
    this.description = config.description;
    this.type = config.type;
  }

  /**
   * Create a new test in this group
   */
  createTest(config: TestConfig): Test {
    const test = new Test(this, config);

    if (this.tests.has(test.id)) {
      throw new Error(`Test '${test.name}' already exists in group '${this.id}'`);
    }

    this.tests.set(test.id, test);
    console.log(`  ✓ Created test: ${test.name} (${this.id})`);

    return test;
  }

  /**
   * Get all tests in this group
   */
  getTests(): Test[] {
    return Array.from(this.tests.values());
  }

  /**
   * Get a specific test by ID
   */
  getTest(id: string): Test | undefined {
    return this.tests.get(id);
  }

  toString(): string {
    return `${this.category.id}/${this.id}`;
  }
}
