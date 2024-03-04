import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvier } from './components/context/AuthContext.tsx'
import { ModalProvier } from './components/context/ModalContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    // <BrowserRouter>
    //   <AuthProvier>
    //     <App />
    //   </AuthProvier>
    // </BrowserRouter>
// ,
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvier>
        <ModalProvier>
          <App />
        </ModalProvier>
      </AuthProvier>
    </BrowserRouter>
  </React.StrictMode>,
)
