#!/usr/bin/env node
/**
 * Generate SVG performance trend charts
 */

const { readFileSync, writeFileSync, readdirSync, existsSync } = require('fs');
const { join } = require('path');

function generateSVGChart(benchmarkDir, category, libraries) {
  const resultsDir = join(benchmarkDir, 'results');
  if (!existsSync(resultsDir)) return null;

  // Get historical results
  const files = readdirSync(resultsDir)
    .filter(f => f.match(/^\d{4}-\d{2}-\d{2}\.json$/))
    .sort()
    .slice(-10); // Last 10 results

  if (files.length < 2) return null; // Need at least 2 data points

  // Load data
  const data = files.map(file => {
    const date = file.replace('.json', '');
    const content = JSON.parse(readFileSync(join(resultsDir, file), 'utf-8'));
    const benchmarks = content.benchmarks?.[0]?.results || [];

    const categoryData = {};
    benchmarks.forEach(bench => {
      if (bench.name.includes(category)) {
        libraries.forEach(lib => {
          if (bench.name.includes(lib)) {
            categoryData[lib] = bench.hz;
          }
        });
      }
    });

    return { date, ...categoryData };
  });

  // SVG dimensions
  const width = 800;
  const height = 400;
  const padding = 60;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  // Find min/max for scaling
  let maxHz = 0;
  data.forEach(d => {
    libraries.forEach(lib => {
      if (d[lib] && d[lib] > maxHz) maxHz = d[lib];
    });
  });

  const colors = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#06b6d4', '#84cc16'];

  // Generate SVG
  let svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="${width}" height="${height}" fill="white"/>

  <!-- Title -->
  <text x="${width/2}" y="30" text-anchor="middle" font-size="18" font-weight="bold" fill="#1f2937">
    ${category} Performance Trend
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
  <text x="${x}" y="${height - padding + 25}" text-anchor="middle" font-size="10" fill="#6b7280">
    ${d.date.substring(5)} <!-- Show MM-DD -->
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

    if (points) {
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
  const legendY = height - 20;
  libraries.forEach((lib, i) => {
    const legendX = padding + i * 100;
    svg += `
  <rect x="${legendX}" y="${legendY - 8}" width="12" height="12" fill="${colors[i % colors.length]}"/>
  <text x="${legendX + 18}" y="${legendY + 3}" font-size="12" fill="#374151">${lib}</text>`;
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
  console.error('Usage: node generate-performance-chart.cjs <benchmark-dir>');
  process.exit(1);
}

console.log('📈 Generating performance charts...');

// Example: Generate chart for a specific category
// This would need to be customized based on actual benchmark structure
const svg = generateSVGChart(benchmarkDir, 'Simple Object Update', ['Zustand', 'Jotai', 'MobX']);

if (svg) {
  const outputPath = join(benchmarkDir, 'performance-trend.svg');
  writeFileSync(outputPath, svg);
  console.log(`✅ Chart saved: ${outputPath}`);
} else {
  console.log('⚠️  Not enough data to generate chart (need at least 2 historical results)');
}
