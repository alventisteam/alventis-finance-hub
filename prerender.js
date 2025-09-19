import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// Define routes to prerender based on App.tsx routes
// This should match the routes defined in src/App.tsx
// When adding new pages/blogs, add them here AND in App.tsx
const routesToPrerender = [
  '/',
  '/privacy',
  '/impressum'
  // Add new routes here when creating new pages/blogs
  // Example: '/blog', '/blog/post-1', '/about', '/viktoria-oris', etc.
]

;(async () => {
  for (const url of routesToPrerender) {
    try {
      const appHtml = render(url);
      const html = template.replace(`<!--app-html-->`, appHtml)

      // Handle root and nested paths correctly
      const filePath = `dist${url === '/' ? '/index' : url + '/index'}.html`
      const absoluteFilePath = toAbsolute(filePath)
      
      // Ensure all nested directories exist before writing file
      const dir = path.dirname(absoluteFilePath)
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
        console.log('created directory:', dir)
      }
      
      fs.writeFileSync(absoluteFilePath, html)
      console.log('pre-rendered:', filePath)
    } catch (error) {
      console.error(`Failed to pre-render ${url}:`, error)
      process.exit(1)
    }
  }
  console.log(`Successfully pre-rendered ${routesToPrerender.length} routes`)
})()