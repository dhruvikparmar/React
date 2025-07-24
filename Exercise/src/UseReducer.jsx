import React, { useReducer } from 'react'

export default function UseReducer() {
    const initialstat = 0
    const reducer = (state,action)=>{
        switch (action)
        {
            case "inc1":
                return state +=1; 
            case "inc10":
                return state +=10; 
            case "inc100":
                return state +=100; 
            default :
                return  state
        }
    }

    const[count,dispatch] = useReducer(reducer,initialstat)
  return (
    <div>
        <h1>UseReducer</h1>
        {count}<br/>
        <button onClick={()=>dispatch("inc1")}>1</button>
        <button onClick={()=>dispatch("inc10")}>10</button>
        <button onClick={()=>dispatch("inc100")}>100</button>
    </div>
  )
}
