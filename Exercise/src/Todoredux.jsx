import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData, deleteData, updateData } from './features/TodoSlice'

export default function Todoredux() {

    const [name,setName] = useState("")
    const [subject,setSubject] = useState("")
    
    const[editindex,setEditindex]=useState(null)

    const dispatch = useDispatch()

    const data = useSelector((state)=>
    {
        return state.todoKey.data   
    })

    const handldelete = (id)=>{
        dispatch(deleteData(id))
    }
    const handleEdit = (id)=>{
        let singledata=data.find((item)=>item.id==id)
        setName(singledata.name)
        setSubject(singledata.subject)
        setEditindex(id)
    }

    const handledata = ()=>{
        if(editindex==null)
        {
            let obj = {id:Date.now(),name,subject};
            dispatch(addData(obj));
        }
        else
        {
            dispatch(updateData({id:editindex,name,subject}))
        }
        setName("")
        setSubject("")
        setEditindex(null)
    }

  return (
    <div>
        <h1>Todoredux</h1>
        <input type='text' placeholder='enetr name' value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type='text' placeholder='enetr subject' value={subject} onChange={(e)=>setSubject(e.target.value)}/>
        <button onClick={handledata}>{(editindex == null ?"submit" : "Update")}</button>
        {
            data &&
            data.map((e,i)=>{
                return <ul key={i}>
                    <li>{e.id+1}</li>
                    <li>{e.name}</li>
                    <li>{e.subject}</li>
                    <button onClick={()=>handleEdit(e.id)}>Update</button>
                    <button onClick={()=>handldelete(e.id)}>Delete</button>
                </ul>
            })
        }
    </div>
  )
}
