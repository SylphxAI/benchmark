#!/usr/bin/env node
/**
 * Debug script to analyze individual benchmark scores
 */

import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

interface BenchmarkResult {
  name: string;
  hz?: number;
  mean?: number;
  metricType?: 'time' | 'size' | 'throughput';
}

interface LibraryMetadata {
  [packageName: string]: {
    github: string;
    displayName: string;
  };
}

// Extract library display name from benchmark name
function extractLibraryName(fullName: string, metadata: LibraryMetadata): string {
  for (const packageName in metadata) {
    if (packageName.startsWith('_')) continue;
    const displayName = metadata[packageName].displayName;
    if (fullName === displayName || fullName.startsWith(displayName + ' - ')) {
      return displayName;
    }
  }
  const dashIndex = fullName.indexOf(' - ');
  if (dashIndex > 0) {
    return fullName.substring(0, dashIndex);
  }
  return fullName;
}

// Load all benchmarks from per-library files
function loadBenchmarkResults(resultsDir: string): Map<string, Map<string, BenchmarkResult>> {
  const allBenchmarks = new Map<string, Map<string, BenchmarkResult>>();

  const libraryFiles = readdirSync(resultsDir)
    .filter(f => f.endsWith('-benchmark.json'))
    .map(f => join(resultsDir, f));

  for (const filePath of libraryFiles) {
    const data = JSON.parse(readFileSync(filePath, 'utf-8'));
    const libraryName = data.library || data.libraryKey;

    for (const [groupKey, groupData] of Object.entries(data.groups || {})) {
      const groupInfo = groupData as any;

      // Remove number prefix from group name
      const groupDisplayName = groupKey.replace(/^\d+-/, '').split('-').map(
        w => w.charAt(0).toUpperCase() + w.slice(1)
      ).join(' ');

      for (const file of groupInfo.files || []) {
        for (const group of file.groups || []) {
          for (const benchmark of group.benchmarks || []) {
            const benchmarkName = benchmark.name;

            if (!allBenchmarks.has(benchmarkName)) {
              allBenchmarks.set(benchmarkName, new Map());
            }

            allBenchmarks.get(benchmarkName)!.set(libraryName, {
              name: `${libraryName} - ${benchmarkName}`,
              hz: benchmark.hz,
              mean: benchmark.mean,
              metricType: benchmark.metricType || group.metricType || 'throughput'
            });
          }
        }
      }
    }
  }

  return allBenchmarks;
}

// Main analysis
const resultsDir = 'benchmarks/state-management/results';
const metadataPath = 'benchmarks/state-management/library-metadata.json';
const metadata: LibraryMetadata = JSON.parse(readFileSync(metadataPath, 'utf-8'));

console.log('📊 Analyzing individual benchmark scores for Zen...\n');

const allBenchmarks = loadBenchmarkResults(resultsDir);

// Calculate scores for Zen
const zenScores: Array<{ benchmark: string; score: number; zenHz: number; maxHz: number; maxLibrary: string }> = [];

for (const [benchmarkName, libraryResults] of allBenchmarks.entries()) {
  // Only include throughput benchmarks
  const zenResult = libraryResults.get('Zen');
  if (!zenResult || zenResult.metricType !== 'throughput') continue;

  // Find max Hz for this benchmark
  let maxHz = 0;
  let maxLibrary = '';
  for (const [libName, result] of libraryResults.entries()) {
    if (result.metricType === 'throughput' && result.hz && result.hz > maxHz) {
      maxHz = result.hz;
      maxLibrary = libName;
    }
  }

  if (maxHz === 0) continue;

  const zenHz = zenResult.hz || 0;
  const score = (zenHz / maxHz) * 100;

  zenScores.push({
    benchmark: benchmarkName,
    score: Math.round(score * 10) / 10,
    zenHz: Math.round(zenHz),
    maxHz: Math.round(maxHz),
    maxLibrary
  });
}

// Sort by score (ascending) to see worst performers first
zenScores.sort((a, b) => a.score - b.score);

// Display results
console.log('=== Lowest Scoring Benchmarks (Bottom 20) ===\n');
for (const item of zenScores.slice(0, 20)) {
  const perfDiff = ((item.maxHz - item.zenHz) / item.zenHz * 100).toFixed(0);
  console.log(`${item.score.toFixed(1).padStart(5)}% | ${item.benchmark}`);
  console.log(`       Zen: ${item.zenHz.toLocaleString().padStart(12)} ops/sec`);
  console.log(`       Max: ${item.maxHz.toLocaleString().padStart(12)} ops/sec (${item.maxLibrary})`);
  console.log(`       Diff: ${perfDiff}% slower\n`);
}

console.log('\n=== Score Distribution ===\n');
const ranges = [
  { label: '  0-20%', min: 0, max: 20 },
  { label: ' 20-40%', min: 20, max: 40 },
  { label: ' 40-60%', min: 40, max: 60 },
  { label: ' 60-80%', min: 60, max: 80 },
  { label: '80-100%', min: 80, max: 100 }
];

for (const range of ranges) {
  const count = zenScores.filter(s => s.score >= range.min && s.score < range.max).length;
  const bar = '█'.repeat(Math.round(count / 2));
  console.log(`${range.label}: ${count.toString().padStart(2)} benchmarks ${bar}`);
}

console.log(`\n=== Summary ===\n`);
console.log(`Total benchmarks: ${zenScores.length}`);
console.log(`Average score: ${(zenScores.reduce((sum, s) => sum + s.score, 0) / zenScores.length).toFixed(1)}/100`);
console.log(`Geometric mean: ${Math.round(Math.pow(zenScores.reduce((prod, s) => prod * s.score, 1), 1 / zenScores.length) * 10) / 10}/100`);
console.log(`Median score: ${zenScores[Math.floor(zenScores.length / 2)].score.toFixed(1)}/100`);
console.log(`Min score: ${zenScores[0].score.toFixed(1)}/100`);
console.log(`Max score: ${zenScores[zenScores.length - 1].score.toFixed(1)}/100`);
