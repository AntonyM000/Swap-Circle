import React from 'react'
import Header from '../components/Header'
import Logo from '../components/Logo'
import { Outlet, useLocation } from 'react-router-dom'


const MainLayout = () => {
  const location=useLocation();
  const isHome=location.pathname==='/'
  return (
    <>
    <Header/>
    <Logo isHome={isHome}/>   
    <Outlet/>
    </>
  )
}

export default MainLayout