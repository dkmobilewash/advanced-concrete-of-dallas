// Prerenders every route to static HTML after `vite build` so crawlers and
// validators that don't execute JS (curl, most schema validators, Bing, etc.)
// receive real title/meta/canonical/JSON-LD in the initial response instead
// of an empty shell. The client hydrates this output with hydrateRoot (see
// src/main.tsx), so it must match what AppRoutes renders client-side —
// that's why this reuses the exact same route component instead of a
// separate copy.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
// This file isn't part of the tsc project graph (see tsconfig.node.json),
// so tsx transpiles it standalone using the classic JSX runtime, which
// needs `React` in scope explicitly — unlike src/**/*.tsx, which use the
// automatic runtime configured in tsconfig.app.json.
import React from 'react'
import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'

import AppRoutes from '../src/routes'
import { services } from '../src/data/services'
import { serviceAreas } from '../src/data/serviceAreas'
import { blogPosts } from '../src/data/blogPosts'

// Same URL set as scripts/generate-sitemap.ts, built from the same data files.
const routes: string[] = [
  '/',
  '/concrete-services',
  '/about-advanced-concrete-of-dallas',
  '/gallery',
  '/free-estimate-dallas',
  '/blog',
  '/service-areas',
]

for (const service of services) routes.push(`/${service.slug}`)
for (const area of serviceAreas) routes.push(`/service-areas/${area.slug}`)
for (const service of services) {
  for (const area of serviceAreas) routes.push(`/${service.slug}/${area.slug}`)
}
for (const post of blogPosts) routes.push(`/blog/${post.slug}`)

const distDir = resolve(import.meta.dirname, '../dist')
const template = readFileSync(resolve(distDir, 'index.html'), 'utf-8')

// These tags are always re-emitted per-route by PageMeta, so strip the
// static defaults out of the template before splicing each route's own in.
const DYNAMIC_TAG_PATTERNS = [
  /<title>.*?<\/title>/is,
  /<meta\s+name="description"[^>]*\/?>/i,
  /<link\s+rel="canonical"[^>]*\/?>/i,
  /<meta\s+property="og:title"[^>]*\/?>/i,
  /<meta\s+property="og:description"[^>]*\/?>/i,
  /<meta\s+property="og:url"[^>]*\/?>/i,
]
// Only stripped when a route supplies its own og:image/twitter:image
// (service pages) — otherwise the template's defaults (site logo) stay as
// the fallback.
const DEFAULT_IMAGE_META_PATTERNS = [
  /<meta\s+property="og:image"[^>]*\/?>/i,
  /<meta\s+property="og:image:type"[^>]*\/?>/i,
  /<meta\s+property="og:image:width"[^>]*\/?>/i,
  /<meta\s+property="og:image:height"[^>]*\/?>/i,
  /<meta\s+name="twitter:image"[^>]*\/?>/i,
]

let baseHead = template
for (const pattern of DYNAMIC_TAG_PATTERNS) baseHead = baseHead.replace(pattern, '')

function renderRouteHtml(initialPath: string): string {
  // renderToString (not renderToStaticMarkup) because the client hydrates
  // this output with hydrateRoot — renderToString includes the internal
  // markers (e.g. `<!-- -->` between adjacent text expressions) React's
  // hydration matching relies on, which renderToStaticMarkup deliberately
  // omits since it's meant for output that's never mounted. Verified this
  // doesn't insert any marker between the hoisted head tags themselves, so
  // the extraction logic below is unaffected.
  const markup = renderToString(
    <div id="root">
      <MemoryRouter initialEntries={[initialPath]}>
        <AppRoutes />
      </MemoryRouter>
    </div>
  )

  // <title>/<meta>/<link> are hoisted by React to the very front of the
  // output, ahead of everything else, however deeply they're nested in the
  // tree. The `<div id="root">` marker (matching index.html's mount point)
  // is not hoisted, so it reliably splits "head tags" from "app markup".
  const rootIdx = markup.indexOf('<div id="root">')
  if (rootIdx === -1) {
    throw new Error(`Prerender for ${initialPath} produced no #root div — got: ${markup.slice(0, 200)}`)
  }
  const headTags = markup.slice(0, rootIdx)
  const bodyMarkup = markup.slice(rootIdx)

  let head = baseHead
  if (/property="og:image"/i.test(headTags)) {
    for (const pattern of DEFAULT_IMAGE_META_PATTERNS) head = head.replace(pattern, '')
  }
  head = head.replace('</head>', `${headTags}</head>`)

  return head.replace('<div id="root"></div>', bodyMarkup)
}

let rendered = 0
for (const route of routes) {
  const html = renderRouteHtml(route)
  const outPath = route === '/' ? resolve(distDir, 'index.html') : resolve(distDir, `.${route}`, 'index.html')
  const outDir = resolve(outPath, '..')
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })
  writeFileSync(outPath, html)
  rendered++
}

// Vercel's routing (see vercel.json) serves this exact file, with a real
// HTTP 404 status, for any path that doesn't match a static file above —
// i.e. genuinely unknown URLs, instead of a soft-404 fallback to the
// homepage. Rendered via the same catch-all `*` route App.tsx uses.
const notFoundHtml = renderRouteHtml('/__prerender-404__')
writeFileSync(resolve(distDir, '404.html'), notFoundHtml)

console.log(`Prerendered ${rendered} routes + 404.html to static HTML in /dist`)
