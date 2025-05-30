import { useState } from 'react'
import ArryObj from './ArryObj'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
   let arr =[
            {name:"John", id:1, city:"New York"},
            {name:"Magnus", id:2, city:"London"},
            {name:"Abd", id:3, city:"America"},
            {name:"Criss", id:4, city:"Dubai"},
            {name:"Sam", id:5, city:"Norvey"},
        ]

  return (
    <div>
      <ArryObj data={arr} student={"sumit"}/>
    </div>
    //<div>
    // {
    //   arr.map((e,i)=>{
    //     return <ArryObj iname=(e.id) iname=(e.name) city=(e.city) />;
    //   })
    // }
    // </div>
  )
}

export default App
