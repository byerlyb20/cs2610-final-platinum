import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './colors.css'
import './material.css'
import './App.css'
import { Toolbar } from './components/Toolbar';

function App() {
  const [count, setCount] = useState(0)

  async function logout() {
    const res = await fetch("/registration/logout/", {
      credentials: "same-origin", // include cookies!
    });

    if (res.ok) {
      // navigate away from the single page app!
      window.location = "/registration/sign_in/";
    } else {
      // handle logout failed!
    }
  }

  return (
    <>
      <Toolbar />
      <Outlet />
    </>
  )
}

export default App;
