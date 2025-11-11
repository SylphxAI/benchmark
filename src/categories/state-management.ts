/**
 * State Management Category Registration
 *
 * This file demonstrates how to register a category with its groups,
 * libraries, and tests using the unified framework.
 */

import { registerCategory } from '@core/registry';

// Register the category
registerCategory({
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
    {
      name: 'Store-based (Tier C)',
      threshold: 50000,
      description: 'Lower raw performance but predictable',
    },
    {
      name: 'Observable-based (Tier D)',
      threshold: 0,
      description: 'High creation cost, moderate runtime performance',
    },
  ],

  groups: [
    {
      id: '01-read',
      title: 'Read Operations',
      description: 'Simple read and high-frequency read patterns',
      type: 'universal',
      benchmarks: [
        {
          name: 'Simple Read',
          pattern: 'Simple Read',
          description: 'Single value access',
        },
        {
          name: 'High-Frequency Read (1000x)',
          pattern: 'High-Frequency Read',
          description: 'Repeated value access',
        },
      ],
    },
    {
      id: '02-write',
      title: 'Write Operations',
      description: 'Simple increments and burst updates',
      type: 'universal',
      benchmarks: [
        {
          name: 'Simple Increment',
          pattern: 'Simple Increment',
          description: 'Single counter increment',
        },
        {
          name: 'Burst Updates (100x)',
          pattern: 'Burst Updates',
          description: 'Multiple rapid updates',
        },
      ],
    },
  ],

  features: {
    'computed-native': {
      id: 'computed-native',
      name: 'Native Computed Values',
      description: 'Automatic dependency tracking for derived values',
      supported: ['jotai', 'mobx', 'solid-js', '@preact/signals', '@sylphx/zen'],
    },
    selectors: {
      id: 'selectors',
      name: 'Selector Pattern',
      description: 'Manual derived state using selector functions',
      supported: ['@reduxjs/toolkit', 'zustand', 'valtio'],
    },
  },
});

// Export for reference
export const STATE_MANAGEMENT_CATEGORY = 'state-management';
