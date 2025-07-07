import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {

  const navigate = useNavigate()
  const handleBtn=()=>
  {
    navigate("/",{replace : true , state:{name:"parmar"} })
  }
  return (
    <div>
      <h1>About</h1>
      <button onClick={handleBtn}>Go To Home</button>
    </div>
  )
}
