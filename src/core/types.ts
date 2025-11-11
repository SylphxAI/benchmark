/**
 * Core type definitions for the benchmark framework
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

export interface GroupResults {
  [libraryKey: string]: BenchmarkResult;
}

export interface CategoryResults {
  [groupKey: string]: {
    [benchmarkName: string]: GroupResults;
  };
}

// ============================================================================
// Category Configuration
// ============================================================================

export interface PerformanceTier {
  name: string;
  threshold: number;
  description: string;
}

export interface CategoryConfig {
  id: string;
  name: string;
  description: string;
  emoji?: string;
  performanceTiers: PerformanceTier[];
  environment: {
    runtime: string;
    framework: string;
    hardware: string;
    iterations: string;
  };
}

// ============================================================================
// Group Configuration
// ============================================================================

export type GroupType = 'universal' | 'feature-specific';

export interface BenchmarkDefinition {
  name: string;
  pattern: string;
  description: string;
}

export interface GroupConfig {
  id: string;
  title: string;
  description: string;
  type: GroupType;
  benchmarks: BenchmarkDefinition[];
}

// ============================================================================
// Library Configuration
// ============================================================================

export interface LibraryMetadata {
  id: string;
  displayName: string;
  packageName: string;
  githubUrl: string;
  description?: string;
  category: string;
}

export interface LibraryVersion {
  version: string;
  lastChecked: string;
  lastBenchmarked?: string;
}

// ============================================================================
// Feature Support
// ============================================================================

export interface Feature {
  id: string;
  name: string;
  description: string;
  supported: string[]; // Array of library IDs
}

export interface FeatureMatrix {
  [featureId: string]: Feature;
}

// ============================================================================
// Test Registration Types
// ============================================================================

export interface TestContext<TStore = any> {
  library: LibraryMetadata;
  store: TStore;
  cleanup?: () => void | Promise<void>;
}

export type TestFunction<TStore = any> = (
  ctx: TestContext<TStore>
) => void | Promise<void>;

export interface TestRegistration {
  category: string;
  group: string;
  name: string;
  description?: string;
  test: TestFunction;
}

// ============================================================================
// Library Registration Types
// ============================================================================

export interface LibrarySetup<TStore = any> {
  /**
   * Create a new store instance
   */
  createStore: () => TStore | Promise<TStore>;

  /**
   * Optional cleanup function
   */
  cleanup?: (store: TStore) => void | Promise<void>;

  /**
   * Optional initialization
   */
  init?: () => void | Promise<void>;
}

export interface LibraryRegistration<TStore = any> {
  category: string;
  id: string;
  displayName: string;
  packageName: string;
  githubUrl: string;
  description?: string;
  setup: LibrarySetup<TStore>;
  features?: string[]; // Feature IDs this library supports
}

// ============================================================================
// Category Registration Types
// ============================================================================

export interface CategoryRegistration {
  id: string;
  name: string;
  description: string;
  emoji?: string;
  performanceTiers: PerformanceTier[];
  groups: GroupConfig[];
  features?: FeatureMatrix;
}

// ============================================================================
// Registry State
// ============================================================================

export interface RegistryState {
  categories: Map<string, CategoryRegistration>;
  libraries: Map<string, Map<string, LibraryRegistration>>; // category -> library id -> registration
  tests: Map<string, Map<string, Map<string, TestRegistration>>>; // category -> group -> test name -> registration
}

// ============================================================================
// Benchmark Execution Types
// ============================================================================

export interface BenchmarkOptions {
  category?: string;
  group?: string;
  library?: string;
  warmup?: boolean;
  iterations?: number;
}

export interface BenchmarkReport {
  category: string;
  timestamp: string;
  results: CategoryResults;
  rankings: LibraryRanking[];
}

export interface LibraryRanking {
  library: string;
  score: number;
  tier: string;
}
