import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'vite/modulepreload-polyfill'
import  { createHashRouter, RouterProvider } from "react-router-dom";
import { Dashboard } from './pages/Dashboard.jsx'
import { Account, loader as accountLoader } from './pages/Account.jsx'
import { TransactionDetail, loader as transactionLoader } from './pages/TransactionDetail.jsx'
import { NewAccount } from './pages/NewAccount.jsx'

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [{
      index: true,
      element: <Dashboard />
    },
    {
      path: "account/:accountId/transaction",
      element: <Account />,
      loader: accountLoader,
      children: [{
        index: true,
        element: (<p>Select a transaction first</p>)
      },
      {
        path: "new",
        element: (<p>Create a new transaction here</p>)
      },
      {
        path: ":transactionId",
        element: <TransactionDetail />,
        loader: transactionLoader
      }]
    },
    {
      path: "account/new",
      element: <NewAccount />
    }]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
