import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import DashBoard from '../Screens/StdDashBoardScreens/DashBoard'

export default function AppRouter() {
  return (
   <Router>
    <>
        <Routes>
            <Route path='dashboard/*' element={<DashBoard/>} />
        </Routes>
    </>
   </Router>
  )
}
