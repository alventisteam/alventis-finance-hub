import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

// --- SCRIPT START ---
console.log('>> Starting the pre-rendering script...');

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

// --- STEP 1: LOAD THE HTML TEMPLATE ---
let template;
const templatePath = toAbsolute('dist/index.html');
try {
  console.log(`>> Attempting to read template from: ${templatePath}`);
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Template file not found at path: ${templatePath}`);
  }
  template = fs.readFileSync(templatePath, 'utf-8');
  console.log('✅ SUCCESS: HTML template loaded successfully.');
} catch (e) {
  console.error('❌ CRITICAL ERROR: Could not read the template file.');
  console.error('   This likely means the "build:client" step did not complete before this script ran.');
  console.error('   Error details:', e.message);
  process.exit(1); // Exit with an error code to fail the build
}

// --- STEP 2: LOAD THE SERVER-SIDE RENDERER ---
let render;
const serverEntryPath = './dist/server/entry-server.js';
try {
  console.log(`>> Attempting to import render function from: ${serverEntryPath}`);
  // Use a dynamic import which works better with ES modules
  const serverEntry = await import(serverEntryPath);
  render = serverEntry.render;
  if (typeof render !== 'function') {
    throw new Error('The imported module does not have an export named "render".');
  }
  console.log('✅ SUCCESS: Server render function imported successfully.');
} catch (e) {
  console.error(`❌ CRITICAL ERROR: Could not import the server entry file.`);
  console.error('   This likely means the "build:server" step failed or produced an invalid module.');
  console.error('   Error details:', e.message);
  process.exit(1); // Exit with an error code
}

// Define the pages you want to pre-render
const routesToPrerender = ['/', '/privacy', '/impressum'];

// Ensure clean public directory exists
const publicDir = toAbsolute('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
  console.log('✅ Created clean public directory for SSG output.');
}

// A helper function to replace SEO tags (assumed to be correct)
function replaceSEOTags(html, seoData) {
  if (!seoData) return html;
  let newHtml = html;
  newHtml = newHtml.replace(/<title>.*<\/title>/, `<title>${seoData.title}</title>`);
  newHtml = newHtml.replace(/<meta name="description" content=".*">/, `<meta name="description" content="${seoData.description}">`);
  // Add other SEO tag replacements here if needed
  return newHtml;
}

// --- STEP 3: RENDER EACH ROUTE ---
console.log('>> Starting to render individual routes...');
for (const url of routesToPrerender) {
  console.log(`   - Rendering route: "${url}"`);
  try {
    const { html: appHtml, seoData } = render(url);
    
    let finalHtml = template.replace(`<!--app-html-->`, appHtml);
    finalHtml = replaceSEOTags(finalHtml, seoData);

    const dir = toAbsolute(`public${url}`);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    const filePath = path.join(dir, 'index.html');
    fs.writeFileSync(filePath, finalHtml);
    console.log(`   ✅ SUCCESS: Saved file for "${url}" to ${filePath}`);
  } catch (error) {
    console.error(`   ❌ ERROR: Failed to pre-render URL "${url}". This is likely an error within your React components.`);
    console.error('   Error details:', error);
    // Don't exit here, so we can see if other pages fail too
  }
}

console.log('>> Pre-rendering script finished.');
