import { mkdirSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { BUSINESS } from '../src/lib/business'
import { services } from '../src/data/services'
import { serviceAreas } from '../src/data/serviceAreas'
import { blogPosts } from '../src/data/blogPosts'

type ChangeFreq = 'daily' | 'weekly' | 'monthly'

interface SitemapUrl {
  path: string
  priority: string
  changefreq: ChangeFreq
}

const urls: SitemapUrl[] = []

function add(path: string, priority: string, changefreq: ChangeFreq) {
  urls.push({ path, priority, changefreq })
}

// Core pages
add('/', '1.0', 'weekly')
add('/concrete-services', '0.9', 'monthly')
add('/about-advanced-concrete-of-dallas', '0.6', 'monthly')
add('/gallery', '0.6', 'monthly')
add('/free-estimate-dallas', '0.8', 'monthly')
add('/blog', '0.6', 'weekly')
add('/service-areas', '0.8', 'monthly')

// Individual service pages
for (const service of services) {
  add(`/${service.slug}`, '0.9', 'monthly')
}

// Individual service-area pages
for (const area of serviceAreas) {
  add(`/service-areas/${area.slug}`, '0.8', 'monthly')
}

// Service x location combo pages
for (const service of services) {
  for (const area of serviceAreas) {
    add(`/${service.slug}/${area.slug}`, '0.7', 'monthly')
  }
}

// Blog posts
for (const post of blogPosts) {
  add(`/blog/${post.slug}`, '0.5', 'monthly')
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${BUSINESS.siteUrl}${u.path}</loc>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`

const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${BUSINESS.siteUrl}/sitemap.xml
`

const publicDir = resolve(import.meta.dirname, '../public')
mkdirSync(publicDir, { recursive: true })
writeFileSync(resolve(publicDir, 'sitemap.xml'), xml)
writeFileSync(resolve(publicDir, 'robots.txt'), robotsTxt)

console.log(`Generated sitemap.xml with ${urls.length} URLs and robots.txt in /public`)
