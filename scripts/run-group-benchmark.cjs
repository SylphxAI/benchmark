#!/usr/bin/env node
/**
 * Run benchmark for specific group and generate README
 */

const { execSync } = require('child_process');
const { join } = require('path');

function runGroupBenchmark(groupName, categoryPath) {
  const groupPath = join(categoryPath, 'groups', groupName);

  console.log(`🚀 Running ${groupName} benchmark tests...\n`);

  try {
    // Check if group uses unified runner or separate test files
    const fs = require('fs');
    const runnerPath = join(groupPath, 'runner.bench.ts');
    const testsPattern = fs.existsSync(runnerPath)
      ? `${groupPath}/runner.bench.ts`
      : `${join(groupPath, 'tests')}/*.bench.ts`;

    // Run vitest bench for the specific group
    const vitestCmd = `npx vitest bench --run --outputJson=${join(groupPath, 'results.json')} ${testsPattern}`;
    console.log(`Running: ${vitestCmd}`);

    execSync(vitestCmd, {
      stdio: 'inherit',
      cwd: categoryPath
    });

    console.log(`\n✅ ${groupName} benchmark completed successfully!`);

    // Generate README for the group
    const readmeScript = join(__dirname, 'generate-group-readme.cjs');
    const readmeCmd = `node ${readmeScript} ${groupName} ${categoryPath}`;
    console.log(`Generating README: ${readmeCmd}`);

    execSync(readmeCmd, {
      stdio: 'inherit',
      cwd: categoryPath
    });

    console.log(`\n📝 README generated for ${groupName} group!`);

  } catch (error) {
    console.error(`❌ Failed to run ${groupName} benchmark:`, error.message);
    process.exit(1);
  }
}

// Main execution
const groupName = process.argv[2];
const categoryPath = process.argv[3] || join(process.cwd(), 'benchmarks/state-management');

if (!groupName) {
  console.error('Usage: node run-group-benchmark.cjs <group-name> [category-path]');
  console.error('Available groups: read, write, creation, async, complexity, memory');
  process.exit(1);
}

runGroupBenchmark(groupName, categoryPath);