import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

// Check if files exist before attempting to read them
const templatePath = toAbsolute('dist/index.html')
const serverPath = toAbsolute('dist/server/entry-server.js')

if (!fs.existsSync(templatePath)) {
  console.error('Template file not found:', templatePath)
  process.exit(1)
}

if (!fs.existsSync(serverPath)) {
  console.error('Server entry file not found:', serverPath)
  process.exit(1)
}

const template = fs.readFileSync(templatePath, 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

const routesToPrerender = fs
  .readdirSync(toAbsolute('src/pages'))
  .map((file) => {
    const name = file.replace(/\.tsx$/, '').toLowerCase()
    return name === 'index' ? '/' : `/${name}`
  })

;(async () => {
  try {
    for (const url of routesToPrerender) {
      console.log('Pre-rendering:', url)
      const appHtml = render(url);
      const html = template.replace(`<!--app-html-->`, appHtml)

      const filePath = `dist${url === '/' ? '/index' : url}.html`
      fs.writeFileSync(toAbsolute(filePath), html)
      console.log('✓ Pre-rendered:', filePath)
    }
    console.log('✓ All pages pre-rendered successfully')
  } catch (error) {
    console.error('❌ Pre-rendering failed:', error.message)
    console.error('Stack trace:', error.stack)
    process.exit(1)
  }
})()