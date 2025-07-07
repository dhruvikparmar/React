import React, { useState } from 'react'
import { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function register() {

    const navigate = useNavigate()

    const [formdata,setFormdata] = useState({})
    const [record,setRecord] = useState([])

    useEffect(()=>{
        let alldata = JSON.parse(localStorage.getItem("userData")) || [];
        setRecord(alldata);
    },[]);

    const handleChange = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    };

    const handleregister = (e) => {

        const obj = { id: Date.now(), ...formdata };
        const updatedRecord = [...record, obj];
        setRecord(updatedRecord);
        localStorage.setItem("userData", JSON.stringify(updatedRecord));
        if(formdata.name || formdata.number || formdata.email || formdata.password == "")
        {
            swal.fire({
                title: 'Registration Successful',
                text: 'You can now login',
                icon: "success"
            });
        }
    };


  return (
    <div style={{marginTop:'50px'}}>
        <center>
            <h1 style={{fontSize:'50px',}}>User Registration</h1>
            <div style={{marginTop:'60px',lineHeight:'2'}}>
                <input type='text'  placeholder='Enter your name' name='name' onChange={handleChange}/><br/><br/>
                <input type='number' placeholder='Enter your age' name='number' onChange={handleChange}/><br/><br/>
                <input type='email' placeholder='Enter email' name='email' onChange={handleChange}/><br/><br/>
                <input type='password' placeholder='Enter password' name='password' onChange={handleChange}/><br/><br/>
            </div>
            <button style={{marginTop:'20px'}} onClick={handleregister}>Register</button>
            <button style={{marginLeft:'20px'}} onClick={()=>navigate("/login")}>Login</button>
        </center>
    </div>
  )
}
