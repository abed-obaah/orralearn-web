import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextProvider } from './context/contextProvider';
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from "./components/ScrollToTop.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
    <BrowserRouter>
        <ScrollToTop/>
      <App />
    </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>,
)
