
import React from 'react'
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function login() {

    const navigate = useNavigate();
    localStorage.setItem("auth",JSON.stringify(false))
    
    const [formdata, setFormdata] = useState({});

    const handleChange = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    };

    const handlelogin = () => {

        let alldata = JSON.parse(localStorage.getItem("userData")) || [];
        let user = alldata.find((user) => user.email == formdata.email);
        if (!formdata.email || !formdata.password) {
            Swal.fire({
                title: 'Log-in failed',
                text: 'Please fill all fields',
                icon: "error"
            });
        return;
        }
        else
        {
            if(!user) 
            {
                Swal.fire({
                    title: 'Log-in failed',
                    text: 'Invalid email',
                    icon: "error"});
                // alert("Invalid email");
                navigate("/login");
            }
            if(user.password == formdata.password )
            {
                localStorage.setItem("auth",JSON.stringify(true));
                Swal.fire({
                    title: 'Logged-in Successfully',
                    text: 'Welcome to the Home Page',
                    icon: "success"});
                // alert("Login successful");
                navigate("/home");
            }
            else
            {
                Swal.fire({
                    title: 'Log-in failed',
                    text: 'invalid pssword',
                    icon: "error"});
                // alert("Invalid password");
                navigate("/login");
            };
        }
    }

  return (
    <div style={{marginTop:'80px'}}>
        <center>
            <h1 style={{fontSize:'50px'}}> User Login</h1>
            <div style={{marginTop:'60px',lineHeight:'2'}}>
                <input type='email' placeholder='Enter email' name='email' value={formdata.email} onChange={handleChange}/><br/><br/>
                <input type='password' placeholder='Enter password' name='password' value={formdata.password} onChange={handleChange}/><br/><br/>
            </div>
            {/* <button style={{marginLeft:'20px'}} onClick={()=>navigate("/register")}>Register</button> */}
            <button style={{marginTop:'20px'}} onClick={handlelogin}>Login</button>
        </center>
    </div>
  )
}
