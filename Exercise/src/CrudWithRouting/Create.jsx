import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Create() {

    const navigate = useNavigate()

    const [task,setTask] = useState("")
    const [priority,setPriority] = useState("")

    const handleTask=()=>{
        let obj={id:Date.now(),task,priority}
        let olddata=JSON.parse(localStorage.getItem("Tasks")) || []
        localStorage.setItem("Tasks",JSON.stringify([...olddata,obj]))

        setTask("")
        setPriority("")
        navigate("/")
    }

  return (
    <div>
        <h1>Create</h1>
        <input type='text' placeholder='Enter Task Name...' value={task} onChange={(e)=>setTask(e.target.value)}/>
        <select onChange={(e)=>setPriority(e.target.value)} value={priority}>
            <option hidden>Select Quality</option>
            <option value={"Low"}>Low</option>
            <option value={"Medium"}>Medium</option>
            <option value={"High"}>High</option>
        </select>
        <button onClick={handleTask}>Add Task</button>
    </div>
  )
}
