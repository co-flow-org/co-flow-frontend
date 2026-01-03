import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Onur from './Onur/Onur.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Onur />
  </StrictMode>,
)
