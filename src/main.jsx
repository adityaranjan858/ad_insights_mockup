import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import { store } from './app/store.jsx';
import {BrowserRouter} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL} >
    <Provider store={store}>  
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
