import React, { use, useState } from 'react'

export default function FormValidation() {

    const [name,SetName]=useState('')
    const [number,SetNumber]=useState('')

    const [err,SetErr]=useState({})

    const handlesubmit=(e)=>{
        e.preventDefault();
        let NameRegex=/^(?=.*[A-Z])[A-Za-z]{2,8}$/
        let NumberRegex=/^(?:\+91|91|0)?[6-9]\d{9}$/

        if(!NameRegex.test(name)){
            SetErr({
                one: "Name should be 2 to 8 characters long and start with a capital letter",
                two: ""
            })
        }
        else if(!NumberRegex.test(number)){
            SetErr({
                one: "",
                two: "Number should be a valid Indian mobile number"
            })
        }
        else
        {
            SetErr({
                one: "",
                two: ""
            });        
            alert("Form submitted successfully!")    
            SetName('');
            SetNumber('');
        }
    };
  return (
    <div>
        <h1>Form Validation</h1>
        <form onSubmit={handlesubmit}>
                <input type="text" placeholder="Enter your name" value={name} name='name' onChange={(e) => SetName(e.target.value)} required /><br></br>
                <span>{err.one}</span><br></br>
                <input type="number" placeholder="Enter your number" value={number} name='number' onChange={(e) => SetNumber(e.target.value)} required /><br></br>
                <span>{err.two}</span><br></br>
                <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
