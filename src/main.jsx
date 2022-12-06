import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { DataProvider } from './context/productContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <DataProvider>
        <App /> 
    </DataProvider>
)
