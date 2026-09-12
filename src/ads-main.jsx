import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AdsApp from './AdsApp.jsx'

document.documentElement.classList.add('is-scroll-page')
document.body.classList.add('is-scroll-page')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AdsApp />
  </StrictMode>,
)
