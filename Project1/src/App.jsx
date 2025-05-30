import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstComponent from './FirstComponent'
import ClassCom from './ClassCom'
import Second from './Second'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
          <FirstComponent/>
          <Second/>
      </div>      
  )
}

export default App
