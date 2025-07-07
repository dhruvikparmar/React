import React from 'react'
import { Link } from 'react-router-dom'

export default function  Contact() {
  return (
    <div>
        <h1>Contact</h1>
        <Link to={"/"}>Go To Home</Link>
        <Link to={"/about"}>Go To About</Link>
    </div>
  )
}
