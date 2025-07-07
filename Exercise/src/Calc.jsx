import React, { useState } from 'react'

export default function Calc() {
    // const [record,SetRecord] = useState('')
    const [num1,SetNum1]=useState('')
    const [num2,SetNum2]=useState('')
    const [result,SetResult] = useState('')
    const handleAdd=()=>
    {
      result = Number(num1)+Number(num2);
      // SetResult(result)
    }
    const handleSub=()=>
    {
        result = Number(num1) - Number(num2);
        // SetResult(result)
    }
    const handleMul=()=>
    {
        result = Number(num1) * Number(num2);
        // SetResult(result)
    }
    const handleDiv=()=>
    {
        result = Number(num1) / Number(num2);
        // SetResult(result)
    }
  return (
    <div>
        <h1>Calculator</h1>
        <input type="number" placeholder="Enter first number" name='num1'/><br></br><br></br>
        <input type="number" placeholder="Enter second number" name='num2'/><br></br><br></br>
        <button onClick={handleAdd}>+</button>
        <button onClick={handleSub}>-</button>
        <button onClick={handleMul}>*</button>
        <button onClick={handleDiv}>/</button>
        <p>{result}</p>
    </div>
  )
}
