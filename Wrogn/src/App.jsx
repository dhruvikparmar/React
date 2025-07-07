import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import Sidebar from './Sidebar'
import Footer from './Footer'
import Footer2 from './Footer2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>      
        <Navbar/>
        <Hero/>
        <Sidebar/>
        <Footer/>
        <Footer2/>
    </>
  )
}

export default App
