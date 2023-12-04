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
  // use this only for production: basename="ad_insights_mockup"
  <React.StrictMode>
    <BrowserRouter> 
    <Provider store={store}>  
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
