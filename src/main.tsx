import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import './lib/env' // Initialize environment configuration

const root = document.getElementById("root")!;
const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// Smart hydration: Check if SSR content exists before using hydrateRoot
// This allows SSR in production (Netlify) while supporting CSR in Lovable preview
try {
  const hasSSRContent = root.innerHTML.trim() && !root.innerHTML.includes('<!--app-html-->');
  
  if (hasSSRContent) {
    // SSR content exists (production with prerendering) - use hydration
    hydrateRoot(root, app);
  } else {
    // No SSR content (Lovable preview or initial load) - use client-side rendering
    createRoot(root).render(app);
  }
} catch (error) {
  console.error('Failed to render React app:', error);
  // Fallback to createRoot if hydration fails
  createRoot(root).render(app);
}
