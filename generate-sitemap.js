import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

// Use environment variable or default to alventis.be
const BASE_URL = process.env.SITE_URL || 'https://alventis.be'

// Import routes from prerender.js to keep them in sync
const routesToPrerender = [
  '/',
  '/privacy',
  '/legal-notice'
  // Add new routes here when creating new pages/blogs
  // Example: '/blog', '/blog/post-1', '/about', etc.
]

function generateSitemap() {
  const urls = routesToPrerender.map(route => {
    const url = `${BASE_URL}${route === '/' ? '' : route}`
    const lastmod = new Date().toISOString().split('T')[0] // Current date in YYYY-MM-DD format
    
    return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`
  }).join('\n')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`

  const sitemapPath = toAbsolute('public/sitemap.xml')
  
  // Ensure public directory exists
  const publicDir = path.dirname(sitemapPath)
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  }
  
  fs.writeFileSync(sitemapPath, sitemap)
  console.log('Generated sitemap.xml with', routesToPrerender.length, 'routes')
}

generateSitemap()
