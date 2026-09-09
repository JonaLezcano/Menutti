import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppTransformacion from './AppTransformacion.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppTransformacion />
  </StrictMode>,
)
