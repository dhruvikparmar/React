import React, { useState } from 'react';

export default function UseState() 
{
    const [count, setCount] = useState(0);
    const [name, setName] = useState("")
    const updateCount = () => {
        setCount(count + 1);
        // setName("Sumit");
    }
    const updateCountMin = () => {
        setCount(count - 1);
        // setName("Sumit");
    }
    const updateCountReset = () => {
        setCount(0);
        // setName("Sumit");
    }

   
        
  return (
    <div>
        {/* <h1>UseState</h1> */}
        <h1>{count}</h1>
        {/* <h1>{name}</h1> */}
        <button onClick={updateCount} style={{backgroundColor:'white',color:'black',marginRight:'10px'}}>Incre.</button>
        <button onClick={updateCountMin} style={{backgroundColor:'white',color:'black',marginRight:'10px'}}>Decre.</button>
        <button onClick={updateCountReset} style={{backgroundColor:'white',color:'black'}}>Reset</button>
        {/* <button onClick={() => setCount(count+1)}>Update</button>  <-- second Method */}
    </div>
  );
}
