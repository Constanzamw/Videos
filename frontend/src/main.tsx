import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./index.css"

import { BrowserRouter } from "react-router-dom"
import "bootswatch/dist/pulse/bootstrap.min.css" 
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter >
      <div className="container p-4" style={{ minHeight: '100vh', height: '100%' }}>
       <App />
       </div>
    </BrowserRouter>
  </React.StrictMode>,
)
