import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

const root = document.getElementById("root")!;
const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// Enhanced error handling for hydration
function renderApp() {
  try {
    if (import.meta.env.PROD && root.innerHTML.trim()) {
      // Try hydration if there's SSR content
      hydrateRoot(root, app);
    } else {
      // Fall back to client-side rendering
      createRoot(root).render(app);
    }
  } catch (error) {
    console.warn('Hydration failed, falling back to client-side rendering:', error);
    // Clear any partial SSR content and render fresh
    root.innerHTML = '';
    createRoot(root).render(app);
  }
}

renderApp();
