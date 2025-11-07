/**
 * Merge runtime and build test results into unified format
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';

interface MergedResults {
  files: Array<{
    filepath: string;
    groups: any[];
  }>;
}

try {
  console.log('🔀 Merging results...');

  // Read runtime results
  const runtimePath = 'results/runtime.json';
  if (!existsSync(runtimePath)) {
    throw new Error('Runtime results not found. Run npm run bench:runtime first.');
  }
  const runtime = JSON.parse(readFileSync(runtimePath, 'utf-8'));

  // Read build results
  const buildPath = 'results/build.json';
  if (!existsSync(buildPath)) {
    throw new Error('Build results not found. Run npm run bench:build first.');
  }
  const build = JSON.parse(readFileSync(buildPath, 'utf-8'));

  // Merge results
  const merged: MergedResults = {
    files: [
      // Runtime benchmarks from Vitest
      ...runtime.files,
      // Build benchmarks (custom format)
      {
        filepath: 'Build Performance',
        groups: build.groups,
      },
    ],
  };

  // Write merged results
  writeFileSync('results/latest.json', JSON.stringify(merged, null, 2));

  console.log('✅ Results merged successfully');
  const runtimeGroups = runtime.files.reduce((acc: number, f: any) => acc + f.groups.length, 0);
  console.log(`   - Runtime groups: ${runtimeGroups}`);
  console.log(`   - Build groups: ${build.groups.length}`);
  console.log(`   - Total groups: ${merged.files.reduce((acc, f) => acc + f.groups.length, 0)}`);
} catch (error) {
  console.error('❌ Error merging results:', error);
  process.exit(1);
}
