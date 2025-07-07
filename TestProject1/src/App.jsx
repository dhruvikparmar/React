import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  const handleClick = () => {
    setCount(count + 1)
  }
  const handleClick1 = () => {
    setCount(count - 1)
  }
  const handleClick2 = () => {
    setCount(0)
  }

  return (
    <>
        <h1>{count}</h1>
        <button onClick={handleClick}>Incre..</button>
        <button onClick={handleClick1}>Decre..</button>
        <button onClick={handleClick2}>Reset</button>
      
    </>
  )
}

export default App
