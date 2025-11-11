#!/usr/bin/env node
/**
 * Generate optimized per-library test files from group registries
 * - Reads test definitions from each group's test-registry.ts
 * - Ensures all libraries use identical test logic
 * - Store initialized outside bench for accurate measurement
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

interface LibraryMetadata {
  libraries: {
    [key: string]: {
      displayName: string;
      npm: string;
      url: string;
    };
  };
}

const LIBRARY_STORE_MAP: Record<string, string> = {
  '@reduxjs/toolkit': 'reduxActionsV2',
  'zustand': 'zustandActionsV2',
  'jotai': 'jotaiActionsV2',
  'mobx': 'mobxActionsV2',
  'valtio': 'valtioActionsV2',
  '@preact/signals': 'preactActionsV2',
  'solid-js': 'solidActionsV2',
  '@sylphx/zen': 'zenActionsV2',
};

// Map group names to their registry paths (relative to category path)
const GROUP_REGISTRIES = [
  '01-read',
  '02-write',
  '03-creation',
  '06-memory',
];

function generateTestFile(
  groupName: string,
  libraryKey: string,
  displayName: string,
  storeVarName: string,
  tests: Record<string, any>
): string {
  const testCases = Object.entries(tests).map(([testKey, testDef]) => {
    // Extract function body with proper formatting
    const funcStr = testDef.code.toString();

    // Match function body between { and } - handle both arrow and regular functions
    // Handle minified versions like "store=>{...}" and normal "store => {...}"
    let match = funcStr.match(/(?:store\s*=>|function\s*\(\s*store\s*\))\s*\{([\s\S]*)\}$/);

    if (!match) {
      console.error(`Function string: ${funcStr}`);
      throw new Error(`Failed to parse function for ${testKey}`);
    }

    let body = match[1].trim();

    // If body is empty, return empty bench
    if (!body) {
      return `  bench(TESTS.${testKey}.name, () => {});`;
    }

    // Split into lines and filter empty ones
    let lines = body.split('\n').map(l => l.trim()).filter(l => l.length > 0);

    // If it's a single line (minified), format it nicely
    if (lines.length === 1) {
      // Add proper indentation for single line
      return `  bench(TESTS.${testKey}.name, () => {
    ${lines[0]}
  });`;
    }

    // For multi-line, find minimum indentation and preserve structure
    lines = body.split('\n');
    const nonEmptyLines = lines.filter(line => line.trim().length > 0);

    if (nonEmptyLines.length === 0) {
      return `  bench(TESTS.${testKey}.name, () => {});`;
    }

    // Find minimum indentation
    const minIndent = Math.min(
      ...nonEmptyLines.map(line => {
        const match = line.match(/^(\s*)/);
        return match ? match[1].length : 0;
      })
    );

    // Remove minimum indentation and add bench indentation
    const indentedBody = lines
      .filter(line => line.trim().length > 0)
      .map(line => {
        const trimmed = line.substring(minIndent);
        return `    ${trimmed}`;
      })
      .join('\n');

    return `  bench(TESTS.${testKey}.name, () => {
${indentedBody}
  });`;
  }).join('\n\n');

  return `/**
 * ${groupName} - ${displayName}
 * Auto-generated from test registry
 */

import { bench, describe } from 'vitest';
import { ${storeVarName} } from '../../shared/test-config';
import { TESTS } from '../test-registry';

// Store initialized outside bench for accurate performance measurement
const store = ${storeVarName};

describe('${groupName} - ${displayName}', () => {
${testCases}
});
`;
}

async function generateAllTests(categoryPath: string) {
  const metadataPath = join(categoryPath, 'library-metadata.json');

  if (!existsSync(metadataPath)) {
    console.error(`❌ library-metadata.json not found in ${categoryPath}`);
    process.exit(1);
  }

  const metadata: LibraryMetadata = JSON.parse(readFileSync(metadataPath, 'utf-8'));

  console.log(`📝 Generating optimized test files from registries...\n`);

  let totalGenerated = 0;

  for (const groupName of GROUP_REGISTRIES) {
    const groupPath = join(categoryPath, 'groups', groupName);
    const testsPath = join(groupPath, 'tests');
    const registryPath = join(groupPath, 'test-registry.ts');

    if (!existsSync(registryPath)) {
      console.log(`  ⚠️  No registry found for ${groupName}, skipping`);
      continue;
    }

    // Dynamically import the registry
    const { TESTS } = await import(registryPath);

    if (!existsSync(testsPath)) {
      mkdirSync(testsPath, { recursive: true });
    }

    console.log(`📂 ${groupName}:`);

    for (const [libraryKey, libInfo] of Object.entries(metadata.libraries)) {
      const storeVarName = LIBRARY_STORE_MAP[libraryKey];

      if (!storeVarName) {
        console.log(`  ⚠️  No store mapping for ${libraryKey}, skipping`);
        continue;
      }

      // Use same naming convention as benchmark-single-library.ts (based on displayName)
      const safeLibName = libInfo.displayName.toLowerCase().replace(/\s+/g, '-').replace(/@/g, '').replace(/\//g, '-');
      const testFilePath = join(testsPath, `${safeLibName}.bench.ts`);

      const content = generateTestFile(
        groupName,
        libraryKey,
        libInfo.displayName,
        storeVarName,
        TESTS
      );

      writeFileSync(testFilePath, content);
      console.log(`  ✓ ${safeLibName}.bench.ts`);
      totalGenerated++;
    }

    console.log('');
  }

  console.log(`✅ Generated ${totalGenerated} optimized test files from registries`);
}

// Main execution
const categoryPath = process.argv[2] || join(process.cwd(), 'benchmarks/state-management');

generateAllTests(categoryPath).catch((error) => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
