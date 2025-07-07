import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Display() {

    const navigate = useNavigate()

    const [record,setRecord]=useState(null)
    useEffect(()=>
    {
        let alldata = JSON.parse(localStorage.getItem("Tasks")) || []
        setRecord(alldata)
    },[])

  return (
    <div>
        <h1>Display</h1>
        <button onClick={()=>navigate("/Create")}>Create</button>
        {
            record ?
            record.map((e,i)=>{
                return <ul key={i}>
                    <li>{i+1}</li>
                    <li>{e.task}</li>
                    <li>{e.priority}</li>
                </ul>

            }) : <p>No Data</p>
        }
    </div>
  );
}
