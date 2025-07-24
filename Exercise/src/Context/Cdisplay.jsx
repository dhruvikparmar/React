import React, { useContext } from 'react'
import { mycontext } from './Chome'

export default function Cdisplay() {
    const data = useContext(mycontext)
    console.log(data);
  return (
    <div>Cdisplay</div>
  )
}

