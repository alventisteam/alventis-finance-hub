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
  console.log('[prerender] Routes to render:', routesToPrerender.join(', '));
  
  for (const url of routesToPrerender) {
    try {
      console.log('App component rendering');
      const appHtml = render(url);
      
      // Check if we got valid HTML content
      if (!appHtml || appHtml.trim() === '') {
        console.warn(`[prerender] Warning: Empty HTML for ${url}`);
      }
      
      const html = template.replace(`<!--app-html-->`, appHtml)

      // Create clean URLs: / -> /index.html, /privacy -> /privacy/index.html
      const filePath = url === '/' ? 'dist/index.html' : `dist${url}/index.html`
      const absoluteFilePath = toAbsolute(filePath)
      
      // Ensure directory exists before writing file
      const dir = path.dirname(absoluteFilePath)
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
      }
      
      fs.writeFileSync(absoluteFilePath, html)
      console.log(`[prerender] ✔ pre-rendered: ${filePath}`)
    } catch (error) {
      console.error(`[prerender] ✘ Error rendering ${url}:`, error.message);
      
      // Still create the file with fallback content for better crawler support
      const fallbackHtml = template.replace(`<!--app-html-->`, `
        <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary/80">
          <div class="text-center max-w-2xl px-8 py-16">
            <h1 class="text-4xl font-playfair text-white mb-6">Alventis - BTW Expert & Finance Consultant België</h1>
            <p class="text-lg text-white/80 mb-8">Viktoria Oris - BTW-compliance en finance optimalisatie voor multinationals.</p>
            <a href="/" class="inline-block bg-white text-primary px-6 py-3 rounded-lg font-medium">Naar Startpagina</a>
          </div>
        </div>
      `);
      
      const filePath = url === '/' ? 'dist/index.html' : `dist${url}/index.html`
      const absoluteFilePath = toAbsolute(filePath)
      
      const dir = path.dirname(absoluteFilePath)
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
      }
      
      fs.writeFileSync(absoluteFilePath, fallbackHtml)
      console.log(`[prerender] ⚠ fallback rendered: ${filePath}`)
    }
  }
})()