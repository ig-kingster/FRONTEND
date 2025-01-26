import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../user/pages/home/Home'
import Profile from '../user/pages/profile/Profile'
import Booking from '../user/pages/booking/Booking'
import Cotraveller from '../user/pages/cotraveller/cotraveller'
import Settings from '../user/pages/settings/Settings'

const UserRoutes = () => {
  return (
    <div>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path='/profile' element={<Profile/>}/>
  <Route path='/bookings' element={<Booking/>}/>
  <Route path='/cotraveller'element={<Cotraveller/>}/>
  <Route path='/settings' element={<Settings/>}/>
  </Routes>
    </div>
  )
}

export default UserRoutes