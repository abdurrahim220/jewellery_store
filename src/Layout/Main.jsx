import React from 'react'
import Navbar from '../pages/Shared/NavBar/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../pages/Shared/Footer/Footer'

const Main = () => {
  const location = useLocation()
  // console.log(location);
  const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp')
  return (
    <div>
      <Navbar/>
      <Outlet></Outlet>
      <Footer/>
    </div>
  )
}

export default Main