import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { StatusProvider } from './context/StatusContext.jsx'
import { SettingsProvider } from './context/SettingsContext.jsx'
import { TimeProvider } from './context/TimeContext.jsx'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <StatusProvider>
    <SettingsProvider>
    <TimeProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </TimeProvider>
    </SettingsProvider>
  </StatusProvider>,
)
