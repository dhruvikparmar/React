import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './Cpmponents/Signup'
import Login from './Cpmponents/Login'
import Dashboard from './Cpmponents/Dashboard'
import Navbar from './Cpmponents/Navbar'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={ <Signup/>}/>
          <Route path='/Login' element={ <Login/>}/>
          <Route path='/Dashboard' element={ <Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
