#!/usr/bin/env node
/**
 * Split existing test files into per-library files
 * From: groups/01-read/read-x1.bench.ts (all libraries in one file)
 * To: groups/01-read/tests/{library}.bench.ts (one file per library)
 */

import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs';
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

const CATEGORY_PATH = process.argv[2] || 'benchmarks/state-management';

// Load library metadata
const metadataPath = join(CATEGORY_PATH, 'library-metadata.json');
const metadata: LibraryMetadata = JSON.parse(readFileSync(metadataPath, 'utf-8'));

// Get all library display names
const libraries = Object.values(metadata.libraries).map(lib => lib.displayName);

console.log(`📚 Found ${libraries.length} libraries:`);
libraries.forEach(lib => console.log(`  - ${lib}`));

// Get all group directories
const groupsPath = join(CATEGORY_PATH, 'groups');
const groupDirs = readdirSync(groupsPath, { withFileTypes: true })
  .filter(d => d.isDirectory() && /^\d{2}-/.test(d.name) && d.name !== 'shared')
  .map(d => d.name);

console.log(`\n📁 Found ${groupDirs.length} groups:`);
groupDirs.forEach(group => console.log(`  - ${group}`));

// Process each group
for (const groupName of groupDirs) {
  const groupPath = join(groupsPath, groupName);
  const testsPath = join(groupPath, 'tests');

  console.log(`\n🔨 Processing ${groupName}...`);

  // Find all .bench.ts files in this group (not in tests/ subdirectory)
  const testFiles = readdirSync(groupPath)
    .filter(f => f.endsWith('.bench.ts') && !f.startsWith('.'));

  if (testFiles.length === 0) {
    console.log(`  ⚠️  No test files found in ${groupName}`);
    continue;
  }

  // Read each test file and extract tests for each library
  const libraryTests: Map<string, string[]> = new Map();

  for (const testFile of testFiles) {
    const testFilePath = join(groupPath, testFile);
    const content = readFileSync(testFilePath, 'utf-8');

    // For each library, extract their tests
    for (const library of libraries) {
      // Find all bench() calls that contain this library name
      const benchRegex = new RegExp(`bench\\(['"]([^'"]+) - ${library.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}['"],\\s*\\([^)]*\\)\\s*=>\\s*\\{([^}]+(?:\\{[^}]*\\}[^}]*)*?)\\}\\);`, 'g');

      let match;
      const tests: string[] = [];

      while ((match = benchRegex.exec(content)) !== null) {
        const testName = match[1];
        const testBody = match[2];

        tests.push(`  bench('${testName}', () => {${testBody}});`);
      }

      if (tests.length > 0) {
        if (!libraryTests.has(library)) {
          libraryTests.set(library, []);
        }
        libraryTests.get(library)!.push(...tests);
      }
    }
  }

  // Write per-library test files
  for (const [library, tests] of libraryTests.entries()) {
    // Convert display name to safe filename
    const safeLibName = library.toLowerCase().replace(/\s+/g, '-').replace(/@/g, '').replace(/\//g, '-');
    const outputPath = join(testsPath, `${safeLibName}.bench.ts`);

    // Get library key from metadata
    const libKey = Object.keys(metadata.libraries).find(key =>
      metadata.libraries[key].displayName === library
    );

    if (!libKey) {
      console.log(`  ⚠️  Could not find library key for ${library}`);
      continue;
    }

    const testFileContent = `/**
 * ${groupName} - ${library}
 * Auto-generated per-library test file
 */

import { bench, describe } from 'vitest';
import { LIBRARIES } from '../shared/test-config';

describe('${groupName} - ${library}', () => {
${tests.join('\n\n')}
});
`;

    writeFileSync(outputPath, testFileContent);
    console.log(`  ✓ Created ${safeLibName}.bench.ts (${tests.length} tests)`);
  }
}

console.log('\n✅ Test splitting complete!');
