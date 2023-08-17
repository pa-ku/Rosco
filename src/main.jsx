import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { StatusProvider } from './context/StatusContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StatusProvider>
    <App />
  </StatusProvider>,
)
