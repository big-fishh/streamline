import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import './styles/variables.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
