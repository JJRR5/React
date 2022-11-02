import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout' // Layout is used across all the pages
import NewCLient, { action as newClientAction } from './pages/NewCLient'
import Index, { loader as clientsLoader } from './pages/Index'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true, //this variable indicates that the layout is gonna be a page and not only a layout
        element: <Index />,
        loader: clientsLoader, //GET
      },
      {
        path: '/clients/new',
        element: <NewCLient />,
        action: <newClientAction/> //POST
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
)
