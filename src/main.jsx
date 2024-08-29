import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import store from './store/store.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <StrictMode>
      <Provider store={store}>
      <ToastContainer autoClose={2000}/>
        <App />
      </Provider>
    </StrictMode>
  </BrowserRouter>,
  // Wrap the entire application in a <StrictMode> tag to enable the new runtime checks in React 18.,
)
