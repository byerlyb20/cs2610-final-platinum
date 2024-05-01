import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'vite/modulepreload-polyfill'
import  { createHashRouter, RouterProvider } from "react-router-dom";
import { Dashboard } from './pages/Dashboard.jsx'

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [{
      path: "/",
      element: <Dashboard />
    }]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
