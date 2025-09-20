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

function replaceSEOTags(htmlTemplate, seoData) {
  let html = htmlTemplate;
  
  if (seoData) {
    // Replace title tag
    html = html.replace(
      /<title>[^<]*<\/title>/i,
      `<title>${seoData.title}</title>`
    );
    
    // Replace meta description
    html = html.replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="description" content="${seoData.description}">`
    );
    
    // Add canonical URL (replace existing or add new)
    const canonicalRegex = /<link\s+rel="canonical"[^>]*>/i;
    const canonicalTag = `<link rel="canonical" href="${seoData.canonicalUrl}">`;
    
    if (canonicalRegex.test(html)) {
      html = html.replace(canonicalRegex, canonicalTag);
    } else {
      // Insert before closing head tag
      html = html.replace('</head>', `    ${canonicalTag}\n  </head>`);
    }
    
    // Replace JSON-LD script (replace existing or add new)
    const jsonLDRegex = /<script type="application\/ld\+json">[^<]*<\/script>/i;
    const jsonLDScript = `<script type="application/ld+json">${seoData.jsonLD}</script>`;
    
    if (jsonLDRegex.test(html)) {
      html = html.replace(jsonLDRegex, jsonLDScript);
    } else {
      // Insert before closing head tag
      html = html.replace('</head>', `    ${jsonLDScript}\n  </head>`);
    }
  }
  
  // Remove placeholder comments
  html = html.replace(/<!--\s*Dynamic SEO tags will be inserted here.*?-->/gi, '');
  html = html.replace(/<!--\s*Dynamic JSON-LD will be inserted here.*?-->/gi, '');
  
  return html;
}

;(async () => {
  for (const url of routesToPrerender) {
    try {
      const result = render(url);
      const { html: appHtml, seoData } = result;
      
      // Replace app HTML
      let html = template.replace(`<!--app-html-->`, appHtml);
      
      // Replace SEO tags with server-rendered versions
      html = replaceSEOTags(html, seoData);

      const filePath = `dist${url === '/' ? '/index' : url + '/index'}.html`
      const absoluteFilePath = toAbsolute(filePath)
      
      // Ensure directory exists before writing file
      const dir = path.dirname(absoluteFilePath)
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
      }
      
      fs.writeFileSync(absoluteFilePath, html)
      console.log('pre-rendered with SEO:', filePath)
    } catch (error) {
      console.error(`Error pre-rendering ${url}:`, error)
    }
  }
})()