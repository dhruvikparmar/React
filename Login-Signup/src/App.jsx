import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import register from './Components/register'
import login from './Components/login'
import home from './Components/home'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={register}></Route>
          <Route path='/login' Component={login}></Route>
          <Route path='/home' Component={home}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
