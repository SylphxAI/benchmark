/**
 * Test class - represents a single benchmark test
 */

import type { TestConfig } from './types';
import type { Group } from './group';

export class Test {
  public readonly id: string;
  public readonly name: string;
  public readonly description?: string;
  public readonly group: Group;

  constructor(group: Group, config: TestConfig) {
    this.group = group;
    this.name = config.name;
    this.description = config.description;

    // Generate unique ID: groupId.testName
    this.id = `${group.id}.${this.slugify(config.name)}`;
  }

  private slugify(text: string): string {
    return text
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '');
  }

  toString(): string {
    return `${this.group.id}/${this.name}`;
  }
}
