import React, { useState } from 'react'

export default function Searching() {

    const [data,setData] = useState([
        {name:"John", id:1, city:"New York"},
        {name:"Magnus", id:2, city:"London"},
        {name:"Abd", id:3, city:"America"},
        {name:"Criss", id:4, city:"Dubai"},]);

        const [input, setInput] = useState("");

        const sercheddata = data.filter((item)=>{
            return item.name.toUpperCase().includes(input) 
        }) 
  return (
    <div>
        <h1>Searching</h1>
        <input type="text" placeholder='Search...' onChange={(e)=>setInput(e.target.value)} />
        {
            sercheddata.map((e,i)=>{
                return <ul key={i}>
                    <li>{e.name}</li>
                    {/* <li>{e.id}</li>
                    <li>{e.city}</li> */}
                </ul>
            })
        }
    </div>
  )
}
