import './index.css'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'

const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined'

if (isBrowser) {
  const root = document.getElementById("root")!
  const app = (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
  
  if (import.meta.env.PROD) {
    hydrateRoot(root, app)
  } else {
    createRoot(root).render(app)
  }
}

export {}
