import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

console.log('>> Starting the final, robust pre-rendering script...');

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const distPath = toAbsolute('dist');
const serverDistPath = toAbsolute('dist/server');

// --- 1. Load the HTML template ---
const templatePath = path.join(distPath, 'index.html');
console.log(`>> Loading template from ${templatePath}`);
if (!fs.existsSync(templatePath)) {
  console.error('❌ CRITICAL ERROR: Template file not found.');
  process.exit(1);
}
const template = fs.readFileSync(templatePath, 'utf-8');
console.log('✅ Template loaded.');

// --- 2. Dynamically find and load the server-side renderer ---
let render;
try {
  // CORRECTED PATH: Look inside the 'assets/js' subfolder
  const serverAssetPath = path.join(serverDistPath, 'assets', 'js');
  const serverFiles = fs.readdirSync(serverAssetPath);
  const serverEntryFile = serverFiles.find(file => file.startsWith('entry-server') && file.endsWith('.js'));
  
  if (!serverEntryFile) {
    throw new Error('Could not find the server entry file in dist/server/assets/js/.');
  }

  // Use the dynamically found file path
  const serverEntryPath = `./dist/server/assets/js/${serverEntryFile}`;
  console.log(`>> Dynamically found and importing render function from: ${serverEntryPath}`);
  
  const serverEntry = await import(serverEntryPath);
  render = serverEntry.render;
  console.log('✅ Render function imported successfully.');

} catch (e) {
  console.error('❌ CRITICAL ERROR: Could not import the server entry file.', e);
  process.exit(1);
}

// --- 3. Define routes and render them ---
const routesToPrerender = ['/', '/privacy', '/impressum'];
console.log('>> Rendering routes...');
for (const routeUrl of routesToPrerender) {
  try {
    const { html: appHtml, seoData } = render(routeUrl);
    
    let finalHtml = template.replace(`<!--app-html-->`, appHtml);

    if (seoData) {
      finalHtml = finalHtml.replace(/<title>.*<\/title>/, `<title>${seoData.title}</title>`);
      finalHtml = finalHtml.replace(/<meta name="description" content=".*">/, `<meta name="description" content="${seoData.description}">`);
    }

    const dir = toAbsolute(`dist${routeUrl}`);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    const filePath = path.join(dir, 'index.html');
    fs.writeFileSync(filePath, finalHtml);
    console.log(`   ✅ Rendered: ${routeUrl}`);
  } catch (e) {
    console.error(`   ❌ ERROR rendering route ${routeUrl}:`, e);
  }
}

console.log('>> Pre-rendering script finished successfully!');

