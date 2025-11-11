#!/usr/bin/env node
/**
 * Generate README for specific test group
 */

const { readFileSync, writeFileSync, existsSync, readdirSync } = require('fs');
const { join, dirname } = require('path');

function formatNumber(num) {
  if (!num) return '0';
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${Math.round(num / 1000)}K`;
  return Math.round(num).toString();
}

function getAllBenchmarks(resultsData) {
  if (!resultsData || !resultsData.files) return [];
  const benchmarks = [];
  resultsData.files.forEach(file => {
    file.groups?.forEach(group => {
      group.benchmarks?.forEach(b => benchmarks.push(b));
    });
  });
  return benchmarks;
}

function calculateGroupOverall(resultsData, libraryMetadata) {
  // Get all benchmarks
  const allBenches = getAllBenchmarks(resultsData);
  if (allBenches.length === 0) return [];

  // Get valid library display names
  const validLibraries = new Set(
    Object.values(libraryMetadata.libraries || {}).map(lib => lib.displayName)
  );

  // Group by library (extract from benchmark name)
  const libraryScores = {};

  allBenches.forEach(bench => {
    const nameParts = bench.name.split(' - ');

    // Try last part first (e.g., "Simple Read - Redux Toolkit")
    let libName = nameParts[nameParts.length - 1].trim();

    // If not a valid library, try first part (e.g., "Redux Toolkit - Simple Read")
    if (!validLibraries.has(libName) && nameParts.length > 1) {
      libName = nameParts[0].trim();
    }

    // Skip if still not valid
    if (!validLibraries.has(libName)) return;

    if (!libraryScores[libName]) {
      libraryScores[libName] = [];
    }
    libraryScores[libName].push(bench.hz || 0);
  });

  // Calculate geometric mean for each library
  const scores = Object.entries(libraryScores).map(([library, values]) => {
    // Filter out zeros
    const validValues = values.filter(v => v > 0);
    if (validValues.length === 0) return { library, overall: 0 };

    // Geometric mean
    const product = validValues.reduce((acc, val) => acc * val, 1);
    const overall = Math.pow(product, 1 / validValues.length);

    // Also get max (for fastest in this group)
    const max = Math.max(...validValues);

    return { library, overall, max };
  });

  return scores.sort((a, b) => b.overall - a.overall);
}

function generateGroupReadme(groupPath, groupName, categoryPath) {
  const resultsDir = join(groupPath, 'results');

  if (!existsSync(resultsDir)) {
    console.error(`❌ No results directory found for group: ${groupName}`);
    return;
  }

  // Read and merge all per-library result files
  const resultFiles = readdirSync(resultsDir).filter(f => f.endsWith('.json'));

  if (resultFiles.length === 0) {
    console.error(`❌ No result files found for group: ${groupName}`);
    return;
  }

  // Merge all library results into a single structure
  // Also track which library each result came from (based on filename)
  const mergedResults = {
    files: []
  };

  const libraryFromFile = {}; // Map filepath to library name

  resultFiles.forEach(file => {
    const libraryResult = JSON.parse(readFileSync(join(resultsDir, file), 'utf-8'));
    if (libraryResult.files) {
      // Store library name from the fullName in the result
      libraryResult.files.forEach(fileResult => {
        if (fileResult.groups && fileResult.groups.length > 0) {
          const fullName = fileResult.groups[0].fullName;
          // Extract library name from "01-read - Jotai" format
          const parts = fullName.split(' - ');
          if (parts.length >= 2) {
            const libName = parts.slice(1).join(' - ').trim();
            libraryFromFile[fileResult.filepath] = libName;

            // Also add library name to each benchmark if it doesn't have it
            fileResult.groups[0].benchmarks.forEach(bench => {
              if (!bench.name.includes(' - ')) {
                bench.name = `${bench.name} - ${libName}`;
                bench.id = `${bench.name}`;
              }
            });
          }
        }
      });

      mergedResults.files = mergedResults.files.concat(libraryResult.files);
    }
  });

  const results = mergedResults;

  // Load category configs
  const versionsPath = join(categoryPath, 'versions.json');
  const metadataPath = join(categoryPath, 'library-metadata.json');
  const groupsConfigPath = join(categoryPath, 'groups-config.json');

  let versions = {};
  let libraryMetadata = { libraries: {} };
  let groupsConfig = { groups: {} };

  if (existsSync(versionsPath)) {
    versions = JSON.parse(readFileSync(versionsPath, 'utf-8'));
  }
  if (existsSync(metadataPath)) {
    libraryMetadata = JSON.parse(readFileSync(metadataPath, 'utf-8'));
  }
  if (existsSync(groupsConfigPath)) {
    groupsConfig = JSON.parse(readFileSync(groupsConfigPath, 'utf-8'));
  }

  // Get group config
  const groupKey = Object.keys(groupsConfig.groups || {}).find(key => key.endsWith(groupName));
  const groupConfig = groupKey ? groupsConfig.groups[groupKey] : null;
  const groupTitle = groupConfig ? groupConfig.title : groupName.replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase());
  const groupDescription = groupConfig ? groupConfig.description : `Performance benchmarks for ${groupName} operations`;

  const readmePath = join(groupPath, 'README.md');

  let readme = `# ${groupTitle}\n\n`;
  readme += `${groupDescription}.\n\n`;

  // Generate table of contents
  readme += `## 📑 Table of Contents\n\n`;
  readme += `- [Group Overall Performance](#group-overall-performance)\n`;
  readme += `- [Detailed Results](#detailed-results)\n`;

  // Add links to each benchmark if there are multiple
  if (results.files && results.files.length > 0) {
    results.files.forEach(file => {
      file.groups?.forEach(group => {
        const anchor = group.fullName.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
        readme += `  - [${group.fullName}](#${anchor})\n`;
      });
    });
  }

  readme += `- [Navigation](#-navigation)\n`;
  readme += `- [Running This Group](#-running-this-group)\n\n`;
  readme += `---\n\n`;

  // Generate group overall score
  const scores = calculateGroupOverall(results, libraryMetadata);

  if (scores.length > 0) {
    readme += `## Group Overall Performance\n\n`;
    readme += `**Methodology**:\n`;
    readme += `- Each library's raw performance (ops/sec) is measured for each test in this group\n`;
    readme += `- The group score is calculated using geometric mean of all test results\n`;
    readme += `- Formula: \`Group Score = ⁿ√(Test₁ × Test₂ × ... × Testₙ)\`\n`;
    readme += `- Geometric mean gives balanced weight to all tests regardless of their magnitude\n`;

    if (versions.lastBenchmarkRun) {
      readme += `\n**Last Benchmark Run**: ${new Date(versions.lastBenchmarkRun).toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })}\n`;
    }

    readme += `\n| Rank | Library | Group Score |\n`;
    readme += `|:----:|---------|-------------|\n`;

    const maxOverall = Math.max(...scores.map(s => s.overall));

    scores.forEach((entry, index) => {
      const rank = index + 1;
      const emoji = rank === 1 ? '🥇 ' : rank === 2 ? '🥈 ' : rank === 3 ? '🥉 ' : ' ';

      const libKey = Object.keys(libraryMetadata.libraries).find(key =>
        libraryMetadata.libraries[key].displayName === entry.library
      );

      const githubUrl = libraryMetadata.libraries?.[libKey]?.url || '';
      const overallCrown = entry.overall === maxOverall ? '👑 ' : '';
      const libraryLink = githubUrl ? `[**${entry.library}**](${githubUrl})` : `**${entry.library}**`;

      readme += `| ${emoji}${rank} | ${libraryLink} | ${overallCrown}${formatNumber(entry.overall)} |\n`;
    });

    readme += `\n---\n\n`;
  }

  // Generate detailed performance results
  readme += `## Detailed Results\n\n`;

  if (results.files && results.files.length > 0) {
    // Collect all benchmarks and group by test name (arena format)
    const testArena = {}; // { testName: [{ library, bench }] }
    const validLibraries = new Set(
      Object.values(libraryMetadata.libraries || {}).map(lib => lib.displayName)
    );

    results.files.forEach(file => {
      file.groups?.forEach(group => {
        group.benchmarks?.forEach(bench => {
          const nameParts = bench.name.split(' - ');

          // Extract library name
          let libName = nameParts[nameParts.length - 1].trim();
          if (!validLibraries.has(libName) && nameParts.length > 1) {
            libName = nameParts[0].trim();
          }
          if (!validLibraries.has(libName)) {
            return;
          }

          // Extract test name (everything except library name)
          const testName = nameParts.length > 1
            ? nameParts.slice(0, -1).join(' - ').trim()
            : bench.name.replace(` - ${libName}`, '').trim();

          if (!testArena[testName]) {
            testArena[testName] = [];
          }

          testArena[testName].push({
            library: libName,
            bench: bench
          });
        });
      });
    });

    // Generate arena table for each test
    const testNames = Object.keys(testArena).sort();

    testNames.forEach((testName, testIdx) => {
      const competitors = testArena[testName];

      // Sort by performance (hz) descending
      competitors.sort((a, b) => (b.bench.hz || 0) - (a.bench.hz || 0));

      readme += `### ${testName}\n\n`;

      // ASCII bar chart
      const maxHz = competitors[0]?.bench.hz || 1;
      readme += '```\n';
      competitors.slice(0, 10).forEach((comp, idx) => {
        const emoji = idx === 0 ? '🥇 ' : idx === 1 ? '🥈 ' : idx === 2 ? '🥉 ' : `${idx + 1}. `;
        const percentage = (comp.bench.hz || 0) / maxHz;
        const barLength = Math.round(percentage * 40);
        const bar = '█'.repeat(barLength);
        const opsText = formatNumber(comp.bench.hz) + ' ops/sec';

        readme += `${emoji.padEnd(4)} ${comp.library.padEnd(18)} ${bar.padEnd(42)} ${opsText.padStart(15)}\n`;
      });
      readme += '```\n\n';

      // Detailed ranking table
      readme += '| Rank | Library | Ops/sec | Variance | Mean | p99 | Samples |\n';
      readme += '|:----:|---------|---------|----------|------|-----|---------|' + '\n';

      competitors.forEach((comp, idx) => {
        const emoji = idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : idx + 1;
        const opsPerSec = comp.bench.hz ? comp.bench.hz.toLocaleString('en-US', { maximumFractionDigits: 0 }) : 'N/A';
        const variance = comp.bench.rme ? `±${comp.bench.rme.toFixed(2)}%` : 'N/A';
        const mean = comp.bench.mean ? `${(comp.bench.mean * 1000).toFixed(4)}ms` : 'N/A';
        const p99 = comp.bench.p99 ? `${(comp.bench.p99 * 1000).toFixed(4)}ms` : 'N/A';
        const samples = comp.bench.samples || 'N/A';

        // Add GitHub link to library name
        const libKey = Object.keys(libraryMetadata.libraries).find(key =>
          libraryMetadata.libraries[key].displayName === comp.library
        );
        const githubUrl = libraryMetadata.libraries?.[libKey]?.url || '';
        const libraryLink = githubUrl ? `[**${comp.library}**](${githubUrl})` : `**${comp.library}**`;

        readme += `| ${emoji} | ${libraryLink} | ${opsPerSec} | ${variance} | ${mean} | ${p99} | ${samples} |\n`;
      });

      // Key insight for this test
      if (competitors.length >= 2) {
        const fastest = competitors[0];
        const slowest = competitors[competitors.length - 1];
        const ratio = ((fastest.bench.hz || 0) / (slowest.bench.hz || 1)).toFixed(2);

        readme += `\n**Key Insight:** ${fastest.library} is ${ratio}x faster than ${slowest.library} in this test.\n`;
      }

      readme += '\n';
    });
  }

  // Add link back to category README
  readme += `---\n\n`;
  readme += `## 🔗 Navigation\n\n`;
  readme += `- [← Back to State Management Overview](../../README.md)\n`;
  readme += `- [Overall Performance Score](../../README.md#overall-performance-score)\n\n`;

  // Add how to run section
  readme += `## 🚀 Running This Group\n\n`;
  readme += `\`\`\`bash\n`;
  readme += `# Run this group\n`;
  readme += `npm run benchmark:${groupName.replace(/^\d+-/, '')}\n\n`;
  readme += `# Or run specific test file\n`;
  readme += `npx vitest bench groups/${groupName}/*.bench.ts\n`;
  readme += `\`\`\`\n\n`;

  readme += `---\n`;
  readme += `*Last generated: ${new Date().toISOString()}*\n`;

  writeFileSync(readmePath, readme);
  console.log(`✅ Generated README for ${groupName}: ${readmePath}`);
}

// Main execution
const groupName = process.argv[2];
const categoryPath = process.argv[3] || join(process.cwd(), 'benchmarks/state-management');

if (!groupName) {
  console.error('Usage: node generate-group-readme.cjs <group-name> [category-path]');
  process.exit(1);
}

const groupPath = join(categoryPath, 'groups', groupName);

if (!existsSync(groupPath)) {
  console.error(`❌ Group directory not found: ${groupPath}`);
  process.exit(1);
}

generateGroupReadme(groupPath, groupName, categoryPath);
