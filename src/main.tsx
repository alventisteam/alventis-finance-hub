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
  console.log('[Client] Starting app render...');
  console.log('[Client] Root innerHTML length:', root.innerHTML.length);
  console.log('[Client] Environment:', import.meta.env.PROD ? 'production' : 'development');
  
  try {
    if (import.meta.env.PROD && root.innerHTML.trim()) {
      console.log('[Client] Attempting hydration of existing SSR content...');
      hydrateRoot(root, app);
      console.log('[Client] ✓ Hydration successful');
    } else {
      console.log('[Client] No SSR content found, using client-side rendering...');
      createRoot(root).render(app);
      console.log('[Client] ✓ Client-side rendering successful');
    }
  } catch (error) {
    console.error('[Client] Hydration failed:', error);
    console.error('[Client] Error details:', error.message);
    
    // Clear any partial SSR content and render fresh
    console.log('[Client] Clearing SSR content and falling back to client-side rendering...');
    root.innerHTML = '';
    createRoot(root).render(app);
    console.log('[Client] ✓ Fallback client-side rendering successful');
  }
}

renderApp();
