import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// hydrateRoot attaches to the prerendered HTML (scripts/prerender.tsx)
// instead of discarding and re-rendering it, so the content that's already
// on the page stays visible through mount instead of flashing empty.
hydrateRoot(
  document.getElementById('root')!,
  <StrictMode>
    <App />
  </StrictMode>
)
