#!/usr/bin/env node
/**
 * Generate SVG performance trend charts for all categories
 */

const { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } = require('fs');
const { join } = require('path');

function loadHistoricalResults(benchmarkDir) {
  const resultsDir = join(benchmarkDir, 'results');
  if (!existsSync(resultsDir)) return [];

  const files = readdirSync(resultsDir)
    .filter(f => f.match(/^\d{4}-\d{2}-\d{2}\.json$/))
    .sort()
    .slice(-10); // Last 10 results

  if (files.length < 2) return []; // Need at least 2 data points

  return files.map(file => {
    const date = file.replace('.json', '');
    const content = JSON.parse(readFileSync(join(resultsDir, file), 'utf-8'));
    return { date, content };
  });
}

function loadConfig(benchmarkDir) {
  const metadataPath = join(benchmarkDir, 'library-metadata.json');
  if (existsSync(metadataPath)) {
    const metadata = JSON.parse(readFileSync(metadataPath, 'utf-8'));
    return metadata._config || { excludeFromCharts: [], excludeFromComparison: [] };
  }
  return { excludeFromCharts: [], excludeFromComparison: [] };
}

function extractCategories(historical, excludeList) {
  if (historical.length === 0) return [];

  const categories = new Map();

  historical.forEach(({ content }) => {
    const files = content.files || [];

    files.forEach(file => {
      const groups = file.groups || [];

      groups.forEach(group => {
        const category = group.fullName.replace(/^.*\s>\s/, ''); // Remove file path prefix
        const benchmarks = group.benchmarks || [];

        if (!categories.has(category)) {
          categories.set(category, new Set());
        }

        benchmarks.forEach(bench => {
          // Skip benchmarks in exclude list (configured in library-metadata.json)
          if (!excludeList.includes(bench.name)) {
            categories.get(category).add(bench.name);
          }
        });
      });
    });
  });

  // Convert to array and filter categories with multiple libraries
  return Array.from(categories.entries())
    .filter(([_, libs]) => libs.size > 1)
    .map(([category, libs]) => ({
      category,
      libraries: Array.from(libs)
    }))
    .slice(0, 5); // Top 5 categories
}

function generateSVGChart(historical, category, libraries) {
  // Extract data for this category
  const data = historical.map(({ date, content }) => {
    const categoryData = { date };
    const files = content.files || [];

    files.forEach(file => {
      const groups = file.groups || [];

      groups.forEach(group => {
        const groupCategory = group.fullName.replace(/^.*\s>\s/, '');

        if (groupCategory === category) {
          const benchmarks = group.benchmarks || [];

          benchmarks.forEach(bench => {
            if (libraries.includes(bench.name)) {
              categoryData[bench.name] = bench.hz;
            }
          });
        }
      });
    });

    return categoryData;
  });

  // SVG dimensions
  const width = 800;
  const height = 400;
  const padding = 60;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  // Find min/max for scaling
  let maxHz = 0;
  let minHz = Infinity;
  data.forEach(d => {
    libraries.forEach(lib => {
      if (d[lib]) {
        if (d[lib] > maxHz) maxHz = d[lib];
        if (d[lib] < minHz) minHz = d[lib];
      }
    });
  });

  // Add 10% padding to max
  maxHz = maxHz * 1.1;

  const colors = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#06b6d4', '#84cc16'];

  // Generate SVG
  let svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="${width}" height="${height}" fill="white"/>

  <!-- Title -->
  <text x="${width/2}" y="30" text-anchor="middle" font-size="18" font-weight="bold" fill="#1f2937">
    ${category} - Performance Trend
  </text>

  <!-- Grid lines -->`;

  // Y-axis grid lines
  for (let i = 0; i <= 5; i++) {
    const y = padding + (chartHeight / 5) * i;
    const value = (maxHz * (5 - i) / 5);
    svg += `
  <line x1="${padding}" y1="${y}" x2="${width - padding}" y2="${y}" stroke="#e5e7eb" stroke-width="1"/>
  <text x="${padding - 10}" y="${y + 5}" text-anchor="end" font-size="12" fill="#6b7280">
    ${formatNumber(value)}
  </text>`;
  }

  // X-axis labels
  data.forEach((d, i) => {
    const x = padding + (chartWidth / (data.length - 1)) * i;
    svg += `
  <text x="${x}" y="${height - padding + 25}" text-anchor="middle" font-size="10" fill="#6b7280" transform="rotate(-45, ${x}, ${height - padding + 25})">
    ${d.date.substring(5)}
  </text>`;
  });

  // Draw lines for each library
  libraries.forEach((lib, libIndex) => {
    const points = data
      .map((d, i) => {
        if (!d[lib]) return null;
        const x = padding + (chartWidth / (data.length - 1)) * i;
        const y = padding + chartHeight - (d[lib] / maxHz) * chartHeight;
        return `${x},${y}`;
      })
      .filter(p => p !== null)
      .join(' ');

    if (points.split(' ').length > 1) {
      svg += `
  <polyline points="${points}" fill="none" stroke="${colors[libIndex % colors.length]}" stroke-width="2"/>`;

      // Add dots
      data.forEach((d, i) => {
        if (d[lib]) {
          const x = padding + (chartWidth / (data.length - 1)) * i;
          const y = padding + chartHeight - (d[lib] / maxHz) * chartHeight;
          svg += `
  <circle cx="${x}" cy="${y}" r="4" fill="${colors[libIndex % colors.length]}"/>`;
        }
      });
    }
  });

  // Legend
  const legendStartY = 50;
  libraries.forEach((lib, i) => {
    const legendY = legendStartY + i * 20;
    svg += `
  <rect x="${width - 150}" y="${legendY - 8}" width="12" height="12" fill="${colors[i % colors.length]}"/>
  <text x="${width - 132}" y="${legendY + 3}" font-size="12" fill="#374151">${lib}</text>`;
  });

  svg += `
</svg>`;

  return svg;
}

function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(0) + 'K';
  }
  return num.toFixed(0);
}

// Main
const benchmarkDir = process.argv[2];
if (!benchmarkDir) {
  console.error('Usage: node generate-trend-charts.cjs <benchmark-dir>');
  process.exit(1);
}

console.log('📈 Generating performance trend charts...');

const config = loadConfig(benchmarkDir);
console.log(`   Config: excluding ${config.excludeFromCharts.length} benchmarks from charts`);

const historical = loadHistoricalResults(benchmarkDir);

if (historical.length < 2) {
  console.log('⚠️  Not enough historical data (need at least 2 dated results)');
  console.log('   Run benchmarks a few times to build up history!');
  process.exit(0);
}

console.log(`   Found ${historical.length} historical results`);

const categories = extractCategories(historical, config.excludeFromCharts);

if (categories.length === 0) {
  console.log('⚠️  No categories with multiple libraries found');
  process.exit(0);
}

console.log(`   Generating charts for ${categories.length} categories...`);

// Create charts directory
const chartsDir = join(benchmarkDir, 'charts');
if (!existsSync(chartsDir)) {
  mkdirSync(chartsDir, { recursive: true });
}

categories.forEach(({ category, libraries }) => {
  console.log(`   📊 ${category} (${libraries.length} libraries)`);

  const svg = generateSVGChart(historical, category, libraries);

  // Sanitize filename
  const filename = category.replace(/[^a-z0-9]/gi, '-').toLowerCase() + '.svg';
  const outputPath = join(chartsDir, filename);

  writeFileSync(outputPath, svg);
  console.log(`      ✅ ${filename}`);
});

console.log('\n✅ All charts generated successfully!');
console.log(`   Charts location: ${chartsDir}/`);
