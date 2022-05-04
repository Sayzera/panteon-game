
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../pages/Admin'
import MyProfile from '../pages/Admin/myProfile'
import HomePage from '../pages/HomePage'
import LeaderBoard from '../pages/LeaderBoard'
import Login from '../pages/Login'
import UserDetail from '../pages/UserDetail'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
          <Route element={<Layout />}>
              <Route path="/" element={ <HomePage />} />
              <Route path="/leader-board" element={ <LeaderBoard />} />
              <Route path="/user-detail/:id" element={ <UserDetail />} />
              <Route path="/login" element={<Login/>} />

              <Route path='/admin' element={<Home />} />
              <Route path='/my-profile' element={<MyProfile />} />
         
          <Route path='*' element={ <div>404</div> } />
          </Route>


      </Routes>
    </BrowserRouter>
  )
}

export default Router