import React from 'react'
import LandingPage from './sellerDashboard/pages/LandingPage'
import './App.css'
import {Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/home' element={<LandingPage/>}/>
      </Routes>
    </div>
  )
}

export default App