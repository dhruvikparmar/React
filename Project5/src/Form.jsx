import React, { use, useState } from 'react'

export default function Form() {
    const [name,SetName]=useState('')
    const [number,SetNumber]=useState('')
    const [email,SetEmail]=useState('')
    const [password,SetPassword]=useState('')
    const [conpassword,SetConpassword]=useState('')
    const [age,SetAge]=useState('')

    // const [err,SetErr]=useState({})

    const handlesubmit=(e)=>{
        e.preventDefault();
        let NameRegex=/^(?=.*[A-Z])[A-Za-z]{2,8}$/
        let NumberRegex=/^(?:\+91|91|0)?[6-9]\d{9}$/
        let EmailRegex=/^\S+@\S+\.\S+$/
        let PassRegex=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/
        let AgeRegex=/^(1[89]|[2-9]\d)$/


        if(!NameRegex.test(name)){
            alert("Name should be 2 to 8 characters long and start with a capital letter");
            // SetErr({
            //     one: "Name should be 2 to 8 characters long and start with a capital letter",
            //     two: ""
            // })
        }
        else if(!NumberRegex.test(number)){
                alert("Number should be a valid Indian mobile number")
            // SetErr({
            //     // one: "",
            //     // two: "Number should be a valid Indian mobile number"
            // })
        }
        else if(!EmailRegex.test(email)){
                alert("Please enter valid email")
            // SetErr({
            //     one: "",
            //     two: "Number should be a valid Indian mobile number"
            // })
        }
        else if(!PassRegex.test(password)){
                alert("Please enter valid password")
            // SetErr({
            //     one: "",
            //     two: "Number should be a valid Indian mobile number"
            // })
        }
        else if(conpassword !== password){
                alert("Password do not match")
            // SetErr({
            //     one: "",
            //     two: "Number should be a valid Indian mobile number"
            // })
        }
        else if(!AgeRegex.test(age)){
                alert("Please enter valid age")
            // SetErr({
            //     one: "",
            //     two: "Number should be a valid Indian mobile number"
            // })
        }
        else
        {
            // SetErr({
            //     one: "",
            //     two: ""
            // });        
            alert("Form submitted successfully!")    
            SetName('');
            SetNumber('');
            SetEmail('');
            SetPassword('');
            SetConpassword('');
            SetAge('');
        }
    };
  return (
    <div>
        <center>
            <h1 style={{marginTop:'30px'}}>Form Validation</h1>            
            <form onSubmit={handlesubmit}>
                    <input type="text" 
                    placeholder="Enter User-Name" 
                    value={name} name='name' 
                    onChange={(e) => SetName(e.target.value)} required /><br></br>
                    {/* <span>{err.one}</span><br></br> */}
                    
                    <input type="number" 
                    placeholder="Enter Phone Number" 
                    value={number} name='number' 
                    onChange={(e) => SetNumber(e.target.value)} required /><br></br>
                    {/* <span>{err.two}</span><br></br> */}

                    <input type="email" 
                    placeholder="Enter Email" 
                    value={email} name='email' 
                    onChange={(e) => SetEmail(e.target.value)} required /><br></br>
                    {/* <span>{err.two}</span><br></br> */}

                    <input type="name" 
                    placeholder="Enter Password" 
                    value={password} name='password' 
                    onChange={(e) => SetPassword(e.target.value)} required /><br></br>
                    {/* <span>{err.two}</span><br></br> */}
                
                    <input type="name" 
                    placeholder="Confirm Password" 
                    value={conpassword} name='conpassword' 
                    onChange={(e) => SetConpassword(e.target.value)} required /><br></br>
                    {/* <span>{err.two}</span><br></br> */}

                    <input type="number" 
                    placeholder="Enter Age" 
                    value={age} name='age' 
                    onChange={(e) => SetAge(e.target.value)} required /><br></br>
                    {/* <span>{err.two}</span><br></br> */}
                    
                    <button type='submit'>Sign In</button>
            </form>
        </center>
    </div>
  )
}
