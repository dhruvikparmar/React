import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstComponent from './FirstComponent'
import SecondComponent from './SecondComponent'
import ThirdComponent from './ThirdComponent'
import ClassComponent from './ClassComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>  
        <ClassComponent></ClassComponent>
        </div>
      )
}

      export default App
