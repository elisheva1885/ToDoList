import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ToDosProvider } from './store/todos-context.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToDosProvider>
      <App />
    </ToDosProvider>

  </StrictMode>,
)
