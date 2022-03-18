import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {cartContextProvider} from './contexts/cartContext';

ReactDOM.render(
  <React.StrictMode>
    <cartContextProvider><App /></cartContextProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
)
