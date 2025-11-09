import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/App'
import { HashRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
)
