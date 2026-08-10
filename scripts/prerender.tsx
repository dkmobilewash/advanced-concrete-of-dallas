// Prerenders every route to static HTML after `vite build` so crawlers and
// validators that don't execute JS (curl, most schema validators, Bing, etc.)
// receive real title/meta/canonical/JSON-LD in the initial response instead
// of an empty shell. The client still mounts via createRoot (not
// hydrateRoot), so this output only needs to be valid HTML — it does not
// need to match the client render exactly.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
// This file isn't part of the tsc project graph (see tsconfig.node.json),
// so tsx transpiles it standalone using the classic JSX runtime, which
// needs `React` in scope explicitly — unlike src/**/*.tsx, which use the
// automatic runtime configured in tsconfig.app.json.
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { MemoryRouter, Navigate, Route, Routes } from 'react-router-dom'

import Layout from '../src/components/Layout'
import Home from '../src/pages/Home'
import ServicesOverview from '../src/pages/ServicesOverview'
import Driveways from '../src/pages/services/Driveways'
import Patios from '../src/pages/services/Patios'
import PoolDecks from '../src/pages/services/PoolDecks'
import RetainingWalls from '../src/pages/services/RetainingWalls'
import FoundationsSlabs from '../src/pages/services/FoundationsSlabs'
import CommercialConcrete from '../src/pages/services/CommercialConcrete'
import About from '../src/pages/About'
import Gallery from '../src/pages/Gallery'
import Contact from '../src/pages/Contact'
import BlogIndex from '../src/pages/BlogIndex'
import BlogPost from '../src/pages/BlogPost'
import ServiceAreasIndex from '../src/pages/ServiceAreasIndex'
import Dallas from '../src/pages/service-areas/Dallas'
import UptownDallas from '../src/pages/service-areas/UptownDallas'
import HighlandPark from '../src/pages/service-areas/HighlandPark'
import UniversityPark from '../src/pages/service-areas/UniversityPark'
import PrestonHollow from '../src/pages/service-areas/PrestonHollow'
import Lakewood from '../src/pages/service-areas/Lakewood'
import OakLawn from '../src/pages/service-areas/OakLawn'
import LakeHighlands from '../src/pages/service-areas/LakeHighlands'
import OakCliff from '../src/pages/service-areas/OakCliff'
import BishopArtsDistrict from '../src/pages/service-areas/BishopArtsDistrict'
import ServiceLocationPage from '../src/pages/ServiceLocationPage'

import { services } from '../src/data/services'
import { serviceAreas } from '../src/data/serviceAreas'
import { blogPosts } from '../src/data/blogPosts'

// Mirrors App.tsx's <Routes> exactly, but with static imports instead of
// React.lazy — lazy/Suspense can't resolve synchronously inside
// renderToStaticMarkup.
function StaticRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />

        <Route path="/concrete-services" element={<ServicesOverview />} />
        <Route path="/driveways" element={<Driveways />} />
        <Route path="/patios" element={<Patios />} />
        <Route path="/pool-decks" element={<PoolDecks />} />
        <Route path="/retaining-walls" element={<RetainingWalls />} />
        <Route path="/foundations-slabs" element={<FoundationsSlabs />} />
        <Route path="/commercial-concrete" element={<CommercialConcrete />} />

        <Route path="/about-advanced-concrete-of-dallas" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/free-estimate-dallas" element={<Contact />} />

        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />

        <Route path="/service-areas" element={<ServiceAreasIndex />} />
        <Route path="/service-areas/dallas" element={<Dallas />} />
        <Route path="/service-areas/uptown-dallas" element={<UptownDallas />} />
        <Route path="/service-areas/highland-park" element={<HighlandPark />} />
        <Route path="/service-areas/university-park" element={<UniversityPark />} />
        <Route path="/service-areas/preston-hollow" element={<PrestonHollow />} />
        <Route path="/service-areas/lakewood" element={<Lakewood />} />
        <Route path="/service-areas/oak-lawn" element={<OakLawn />} />
        <Route path="/service-areas/lake-highlands" element={<LakeHighlands />} />
        <Route path="/service-areas/oak-cliff" element={<OakCliff />} />
        <Route path="/service-areas/bishop-arts-district" element={<BishopArtsDistrict />} />

        <Route path="/:serviceSlug/:locationSlug" element={<ServiceLocationPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

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
// Only stripped when a route supplies its own og:image (service pages) —
// otherwise the template's default (site logo) stays as the fallback.
const DEFAULT_OG_IMAGE_PATTERNS = [
  /<meta\s+property="og:image"[^>]*\/?>/i,
  /<meta\s+property="og:image:type"[^>]*\/?>/i,
  /<meta\s+property="og:image:width"[^>]*\/?>/i,
  /<meta\s+property="og:image:height"[^>]*\/?>/i,
]

let baseHead = template
for (const pattern of DYNAMIC_TAG_PATTERNS) baseHead = baseHead.replace(pattern, '')

let rendered = 0
for (const route of routes) {
  const markup = renderToStaticMarkup(
    <div id="root">
      <MemoryRouter initialEntries={[route]}>
        <StaticRoutes />
      </MemoryRouter>
    </div>
  )

  // <title>/<meta>/<link> are hoisted by React to the very front of the
  // output, ahead of everything else, however deeply they're nested in the
  // tree — verified empirically, since renderToStaticMarkup's hoisting
  // behavior isn't documented as explicitly as renderToString's. The
  // `<div id="root">` marker (matching index.html's mount point) is not
  // hoisted, so it reliably splits "head tags" from "app markup".
  const rootIdx = markup.indexOf('<div id="root">')
  if (rootIdx === -1) {
    throw new Error(`Prerender for ${route} produced no #root div — got: ${markup.slice(0, 200)}`)
  }
  const headTags = markup.slice(0, rootIdx)
  const bodyMarkup = markup.slice(rootIdx)

  let head = baseHead
  if (/property="og:image"/i.test(headTags)) {
    for (const pattern of DEFAULT_OG_IMAGE_PATTERNS) head = head.replace(pattern, '')
  }
  head = head.replace('</head>', `${headTags}</head>`)

  const html = head.replace('<div id="root"></div>', bodyMarkup)

  const outPath = route === '/' ? resolve(distDir, 'index.html') : resolve(distDir, `.${route}`, 'index.html')
  const outDir = resolve(outPath, '..')
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })
  writeFileSync(outPath, html)
  rendered++
}

console.log(`Prerendered ${rendered} routes to static HTML in /dist`)
