import React, { useState } from 'react'

export default function Form() {
    const [formdata,SetFormData]=useState({})

    const [record,SetRecord]=useState([])

    const handleChange=(e)=>{
        SetFormData(
            {
                ...formdata,
                [e.target.name]:e.target.value
            })
    }
    const handleClick=()=>
    {
        SetRecord([...record,formdata]);    
    }
  return <div>
        <h1>Form</h1>
        <input type="text" placeholder="Enter your name" name='name' onChange={handleChange}/>
        <input type="text" placeholder="Enter your city" name='city'onChange={handleChange}/>
        <input type="text" placeholder="Enter your subject" name='subject' onChange={handleChange}/>
        <button onClick={handleClick}>Submit</button>
        {
            record.map((e,i)=>{
                return <div key={i}>
                        <p>{e.name}</p>
                        <p>{e.city}</p>
                        <p>{e.subject}</p>
                </div>
            })
        }
    </div>  
}
