/**
 * Core type definitions for the benchmark framework
 * Uses object references instead of strings for type safety
 */

// ============================================================================
// Benchmark Result Types
// ============================================================================

export interface BenchmarkResult {
  name: string;
  opsPerSecond: number;
  meanTime: number; // ms
  variance: number;
  p99: number; // ms
  samples: number;
}

// ============================================================================
// Performance Tier
// ============================================================================

export interface PerformanceTier {
  name: string;
  threshold: number;
  description: string;
}

// ============================================================================
// Configuration Types
// ============================================================================

export interface GroupConfig {
  id: string;
  title: string;
  description: string;
  type: 'universal' | 'feature-specific';
}

export interface TestConfig {
  name: string;
  description?: string;
}

export interface CategoryConfig {
  id: string;
  name: string;
  description: string;
  emoji?: string;
  performanceTiers?: PerformanceTier[];
}

export interface LibraryConfig<TStore = any> {
  id: string;
  displayName: string;
  packageName: string;
  githubUrl: string;
  description?: string;
  setup: LibrarySetup<TStore>;
  features?: string[];
}

// ============================================================================
// Setup Types
// ============================================================================

export interface LibrarySetup<TStore = any> {
  createStore: () => TStore | Promise<TStore>;
  cleanup?: (store: TStore) => void | Promise<void>;
  init?: () => void | Promise<void>;
}

export interface TestContext<TStore = any> {
  library: {
    id: string;
    displayName: string;
    packageName: string;
    githubUrl: string;
  };
  store: TStore;
  cleanup?: () => void | Promise<void>;
}

// ============================================================================
// Test Function Type
// ============================================================================

export type TestFunction<TStore = any> = (
  ctx: TestContext<TStore>
) => void | Promise<void>;

// ============================================================================
// Execution Options
// ============================================================================

export interface BenchmarkOptions {
  warmup?: boolean;
  iterations?: number;
  filter?: {
    groups?: string[];
    tests?: string[];
    libraries?: string[];
  };
}

export interface RunOptions {
  outputPath?: string;
  filter?: {
    groups?: string[];
    tests?: string[];
    libraries?: string[];
  };
}

// ============================================================================
// Results Types
// ============================================================================

export interface LibraryTestResult {
  library: string;
  test: string;
  group: string;
  result: BenchmarkResult;
}

export interface CategoryResults {
  category: string;
  timestamp: string;
  results: LibraryTestResult[];
  rankings?: LibraryRanking[];
}

export interface LibraryRanking {
  library: string;
  score: number;
  tier?: string;
}
