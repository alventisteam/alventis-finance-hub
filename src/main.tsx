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

// Use hydration for SSR in production with error boundaries
try {
  if (import.meta.env.PROD) {
    hydrateRoot(root, app);
  } else {
    createRoot(root).render(app);
  }
} catch (error) {
  console.error('Failed to render React app:', error);
  // Fallback to createRoot if hydration fails
  createRoot(root).render(app);
}
