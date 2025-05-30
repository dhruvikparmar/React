import { useState } from 'react'
import Navbar from './Navbar'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Navbar></Navbar>
    <Card></Card>
    </div>
  )
}

export default App
