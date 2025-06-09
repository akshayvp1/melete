import React from 'react'
import AdminLogin from '../pages/adminLoginPage'
import { Routes,Route } from 'react-router-dom'
function adminRoutes() {
  return (
    <Routes>
    <Route path='/signin' element={<AdminLogin/>} />
    </Routes>
  )
}

export default adminRoutes