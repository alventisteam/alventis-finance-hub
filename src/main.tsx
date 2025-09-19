import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

// Check if we're in a browser environment (not SSR)
if (typeof window !== 'undefined') {
  const root = document.getElementById("root");
  
  if (root) {
    const app = (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    // Use hydration for SSR in production
    if (import.meta.env.PROD) {
      hydrateRoot(root, app);
    } else {
      createRoot(root).render(app);
    }
  } else {
    console.error('Root element not found');
  }
}
