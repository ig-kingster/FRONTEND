import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../user/pages/home/Home'
import Profile from '../user/pages/profile/Profile'

const UserRoutes = () => {
  return (
    <div>
<Routes>
  <Route path="/home" element={<Home/>}/>
  <Route path='/profile' element={<Profile/>}/>
</Routes>
    </div>
  )
}

export default UserRoutes