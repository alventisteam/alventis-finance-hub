import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

const root = document.getElementById("root")!;

// Standard React mounting for consistent behavior
createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
