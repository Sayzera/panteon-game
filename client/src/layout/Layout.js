import React from 'react'
import {Outlet} from 'react-router-dom'
import AppNavBar from '../components/app-navbar'
import Footer from '../components/footer'

function Layout() {
  return (
    <>
      <AppNavBar />
       <div className='customContainer'>
          <Outlet />
          </div>
      <Footer />
    </>
  )
}

export default Layout