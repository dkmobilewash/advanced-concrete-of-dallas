// One-off script: prints @font-face fallback CSS computed from real font
// metrics (via @capsizecss/metrics + fontaine's generateFontFace), not
// hand-guessed values. Output is pasted into src/index.css manually.
import { generateFontFace } from 'fontaine'

const oswald = (await import('@capsizecss/metrics/entireMetricsCollection/oswald/regular/index.cjs', { with: { type: 'json' } }).catch(() => null))

async function loadMetric(path) {
  const mod = await import(`../node_modules/@capsizecss/metrics/entireMetricsCollection/${path}/index.cjs`)
  return mod.default ?? mod
}

const oswaldMetrics = await loadMetric('oswald/regular')
const latoMetrics = await loadMetric('lato/regular')
const sourceSerifMetrics = await loadMetric('sourceSerif4/regular')
const arialMetrics = await loadMetric('arial/regular')
const georgiaMetrics = await loadMetric('georgia/regular')

console.log('/* Oswald -> Arial fallback */')
console.log(generateFontFace(oswaldMetrics, { name: 'Oswald Fallback', font: 'Arial', metrics: arialMetrics }))
console.log('\n/* Lato -> Arial fallback */')
console.log(generateFontFace(latoMetrics, { name: 'Lato Fallback', font: 'Arial', metrics: arialMetrics }))
console.log('\n/* Source Serif 4 -> Georgia fallback */')
console.log(generateFontFace(sourceSerifMetrics, { name: 'Source Serif 4 Fallback', font: 'Georgia', metrics: georgiaMetrics }))
