import React from 'react'
import { Route, Routes } from 'react-router-dom'
import GuestRoutes from './GuestRoutes'
import UserRoutes from './UserRoutes'

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/*' element={<GuestRoutes/>}/>
        <Route  path='/user/*' element={<UserRoutes/>}/>
      </Routes>
    </div>
  )
}

export default MainRoutes