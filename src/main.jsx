import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './components/Homepage.jsx'
import Criptocurrency from './components/Criptocurrency.jsx'
import Criptodeatails from './components/Criptodeatails.jsx'
import News from './components/News.jsx'
import { Provider } from 'react-redux'
import {store}from'./app/store.js'
const router=createBrowserRouter([
  {path:'/',element:<App/>,children:[{path:'/',element:<Homepage/>},{path:'/cripto',element:<Criptocurrency/>},{path:'cripto-details',element:<Criptodeatails/>},{path:'news',element:<News/>}] }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} >
<App />
    </RouterProvider>
  

  </StrictMode>,
)
