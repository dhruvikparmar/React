import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './SignUp'
import Login from './Login'
import Dashboard from './Dashboard'
import Navbar from './Navbar'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<SignUp/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/Dashboard' element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
