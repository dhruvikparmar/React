import React from 'react'
import { createContext } from 'react'
import Cdisplay from './Cdisplay'

export const mycontext = createContext()

export default function Chome() {
  return (
    <div>
        <h1>Home</h1>
        <mycontext.Provider value={"Dhruvik"}>
            <Cdisplay/>
        </mycontext.Provider>
    </div>
  )
}
