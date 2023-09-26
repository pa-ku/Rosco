import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GameProvider } from './context/GameContext.jsx'
import { TimeProvider } from './context/TimeContext.jsx'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
    <GameProvider>
    <TimeProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </TimeProvider>
    </GameProvider>
)
