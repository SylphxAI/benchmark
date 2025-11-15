/**
 * Result validation for fairness guarantee
 * Ensures benchmark results meet quality standards before ranking generation
 */

import type { LibraryTestResult } from './types';

export interface ValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
}

/**
 * Validate results for ranking generation
 * Enforces fairness principles: atomic runs, production mode, completeness
 */
export function validateResultsForRanking(
  results: LibraryTestResult[]
): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (results.length === 0) {
    errors.push('❌ No results found. Cannot generate rankings from empty dataset.');
    return { valid: false, errors, warnings };
  }

  // Check 1: All results must have runMetadata
  const resultsWithoutMetadata = results.filter(r => !r.runMetadata);
  if (resultsWithoutMetadata.length > 0) {
    warnings.push(
      `⚠️  ${resultsWithoutMetadata.length} results missing runMetadata.\n` +
      `   These may be from older benchmark runs before fairness tracking was implemented.\n` +
      `   Consider re-running benchmarks to get complete metadata.`
    );
  }

  // For results with metadata, perform strict validation
  const resultsWithMetadata = results.filter(r => r.runMetadata);

  if (resultsWithMetadata.length > 0) {
    // Check 2: All results must be from the same runId
    const runIds = new Set(resultsWithMetadata.map(r => r.runMetadata!.runId));
    if (runIds.size > 1) {
      errors.push(
        `❌ Results from multiple runs detected (${runIds.size} different runIds):\n` +
        Array.from(runIds).map(id => `   - ${id}`).join('\n') + '\n\n' +
        `   Fairness violation: Rankings require all results from the same atomic run.\n` +
        `   Results from different runs cannot be compared due to machine state variations.\n\n` +
        `   Solution: Run all benchmarks together in a single execution.`
      );
    }

    // Check 3: All results must be production mode
    const modes = new Set(resultsWithMetadata.map(r => r.runMetadata!.mode));
    if (modes.has('development')) {
      errors.push(
        `❌ Development mode results detected.\n\n` +
        `   Development mode allows filtering libraries for testing purposes,\n` +
        `   but these results cannot be used for fair rankings.\n\n` +
        `   Solution: Run benchmarks with --mode=production (or omit --mode flag).`
      );
    }

    // Check 4: Run must be complete (all libraries)
    const sampleMetadata = resultsWithMetadata[0].runMetadata!;
    if (!sampleMetadata.isComplete) {
      errors.push(
        `❌ Incomplete run detected.\n\n` +
        `   Completed: ${sampleMetadata.completedLibraries.length}/${sampleMetadata.totalLibraries} libraries\n` +
        `   Missing: ${sampleMetadata.totalLibraries - sampleMetadata.completedLibraries.length} libraries\n\n` +
        `   Fairness violation: Cannot generate fair rankings from partial results.\n` +
        `   All libraries must be benchmarked together for meaningful comparison.\n\n` +
        `   Solution: Run benchmarks without --libraries filter.`
      );
    }

    // Check 5: Time span check (all results should be within reasonable window)
    const timestamps = resultsWithMetadata.map(r => new Date(r.timestamp).getTime());
    const timeSpan = Math.max(...timestamps) - Math.min(...timestamps);
    const timeSpanMinutes = timeSpan / 1000 / 60;

    if (timeSpanMinutes > 60) {  // 1 hour
      warnings.push(
        `⚠️  Results span ${timeSpanMinutes.toFixed(1)} minutes.\n` +
        `   This is unusually long and may indicate:\n` +
        `   - Mixed results from different runs\n` +
        `   - Very slow benchmark execution\n` +
        `   - System interruptions during benchmarking\n\n` +
        `   Consider: Verify all results are from the same continuous run.`
      );
    }

    // Check 6: Verify each library has results for all tests
    const librariesWithMetadata = new Set(resultsWithMetadata.map(r => r.libraryId));
    const testsWithMetadata = new Set(resultsWithMetadata.map(r => r.test));

    for (const library of librariesWithMetadata) {
      const libraryResults = resultsWithMetadata.filter(r => r.libraryId === library);
      const libraryTests = new Set(libraryResults.map(r => r.test));

      // Allow for not-implemented tests (some libraries don't support all tests)
      // Just check for suspiciously low coverage
      const coverage = libraryTests.size / testsWithMetadata.size;
      if (coverage < 0.3) {  // Less than 30% test coverage
        warnings.push(
          `⚠️  ${library} has very low test coverage (${(coverage * 100).toFixed(0)}%)\n` +
          `   Implemented: ${libraryTests.size}/${testsWithMetadata.size} tests\n` +
          `   This may skew rankings if many tests are missing.`
        );
      }
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}

/**
 * Format validation result for display
 */
export function formatValidationResult(result: ValidationResult): string {
  const lines: string[] = [];

  if (result.valid) {
    lines.push('✅ Result validation passed\n');
  } else {
    lines.push('❌ Result validation failed\n');
  }

  if (result.errors.length > 0) {
    lines.push('ERRORS:');
    result.errors.forEach(err => lines.push(err));
    lines.push('');
  }

  if (result.warnings.length > 0) {
    lines.push('WARNINGS:');
    result.warnings.forEach(warn => lines.push(warn));
    lines.push('');
  }

  if (!result.valid) {
    lines.push('Cannot proceed with ranking generation due to fairness violations.');
  }

  return lines.join('\n');
}
