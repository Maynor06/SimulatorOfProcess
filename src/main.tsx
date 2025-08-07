import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ProcesoProvider } from './Context/ProcesoContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProcesoProvider>
      <App />
    </ProcesoProvider>
  </StrictMode>,
)
