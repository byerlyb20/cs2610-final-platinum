import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'vite/modulepreload-polyfill'
import  { createHashRouter, RouterProvider } from "react-router-dom";
import { Dashboard } from './pages/Dashboard.jsx'
import { Account, loader as accountLoader } from './pages/Account.jsx'

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [{
      path: "/",
      element: <Dashboard />
    },
    {
      path: "/account/:accountId",
      element: <Account />,
      loader: accountLoader
    }]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
