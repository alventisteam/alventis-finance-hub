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
  '/impressum'
  // Add new routes here when creating new pages/blogs
  // Example: '/blog', '/blog/post-1', '/about', etc.
]

;(async () => {
  for (const url of routesToPrerender) {
    const appHtml = render(url);
    const html = template.replace(`<!--app-html-->`, appHtml)

    const filePath = `dist${url === '/' ? '/index' : url + '/index'}.html`
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