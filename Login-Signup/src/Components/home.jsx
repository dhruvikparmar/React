import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

export default function home() {
  const navigate = useNavigate();
   useEffect(() => {
    const authdata = JSON.parse(localStorage.getItem("auth"));

    if (authdata == false) {
      navigate("/")
    }
  },[]);

  return (
    <div>
        <center>
            <h1>Home</h1>
        </center>
    </div>
  )
}
