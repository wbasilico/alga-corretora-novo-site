import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import smoothscroll from 'smoothscroll-polyfill';
import './index.css'
import App from './App.jsx'

// Executa o polyfill para garantir suporte a scroll suave em todos os navegadores (Safari/iOS)
smoothscroll.polyfill();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)