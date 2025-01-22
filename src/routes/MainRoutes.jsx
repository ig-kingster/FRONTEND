import React from 'react'
import { Route, Routes } from 'react-router-dom'
import GuestRoutes from './GuestRoutes'

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/*' element={<GuestRoutes/>}/>
      </Routes>
    </div>
  )
}

export default MainRoutes