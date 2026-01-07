import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Main from './pages/Main/Main.tsx'
import Stok from './pages/Stok/Stok.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <Main/>
  </StrictMode>,
)
