import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// Define routes to prerender based on App.tsx routes
// Add new routes here when adding new pages/blogs
const routesToPrerender = [
  '/',
  '/privacy',
  '/legal-notice'
  // Add new routes here when creating new pages/blogs
  // Example: '/blog', '/blog/post-1', '/about', etc.
]

// Sitemap generation function
function generateSitemap() {
  const BASE_URL = process.env.SITE_URL || 'https://alventis.be'
  
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

  const sitemapPath = toAbsolute('dist/sitemap.xml')
  
  // Ensure dist directory exists
  const distDir = path.dirname(sitemapPath)
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true })
  }
  
  fs.writeFileSync(sitemapPath, sitemap)
  console.log('Generated sitemap.xml with', routesToPrerender.length, 'routes')
}

;(async () => {
  // Generate sitemap first
  generateSitemap()
  
  // Then prerender all pages
  for (const url of routesToPrerender) {
    const appHtml = render(url);
    const html = template.replace(`<!--app-html-->`, appHtml)

    const filePath = `dist${url === '/' ? '/index' : url}.html`
    const absoluteFilePath = toAbsolute(filePath)
    
    // Ensure directory exists before writing file
    const dir = path.dirname(absoluteFilePath)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }
    
    fs.writeFileSync(absoluteFilePath, html)
    console.log('pre-rendered:', filePath)
  }
})()