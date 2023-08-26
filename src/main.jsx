import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { StatusProvider } from './context/StatusContext.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StatusProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StatusProvider>,
)
