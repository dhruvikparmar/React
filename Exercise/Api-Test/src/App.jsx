import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Await } from 'react-router-dom'

export default function App() {
  const [name,setName] = useState('') 
  const [subject,setSubject] = useState('') 
  const [record,setRecord]=useState([])
  const[editindex,setEditindex]=useState(null)

  useEffect(()=>{
    fetchapi();
  },[])

  const fetchapi=async()=>{
     await axios.get("http://localhost:1009/posts").then((data)=>
    {
      setRecord(data.data);
    })
  }

  const handledata=async()=>{
    if(editindex == null)
    {
      await axios.post("http://localhost:1009/posts",{name,subject}).then((res)=>{
      setRecord([...record,{name,subject}]);
    })
    }
    else
    {
      await axios.put(`http://localhost:1009/posts/${editindex}`,{name,subject}).then((res)=>{
      let singledata=record.find((item)=>item.id==editindex)
      console.log(singledata);
      
      singledata.name = name
      singledata.subject = subject
        setRecord(record)
      }
    )
    }
    setName("")
    setSubject("")
    setEditindex(null)
  }

const handleDelete = async(id)=>{
    await axios.delete(`http://localhost:1009/posts/${id}`).then((res)=>{
      let newdata = record.filter((item)=>item.id!=id)
      setRecord(newdata);
    }
    )
  }

  const handleEdit = (id)=>{
      let singledata=record.find((item)=>item.id==id)
        setName(singledata.name),
        setSubject(singledata.subject),
      setEditindex(id);
    
    
  }

  
  


  return (
    <div>
      <h1>Crud Using Api</h1>
      <input type='text' placeholder='enter name...' value={name} onChange={(e)=>setName(e.target.value)}/>
      <input type='text' placeholder='enter subject...' value={subject} onChange={(e)=>setSubject(e.target.value)}/>
      <button onClick={handledata}>{editindex == null ?"Submit" : "Update"}</button>
      {
        record && 
        record.map((e,i)=>{
          return <ul key={i}>
            <li>{i+1}</li>
            <li>{e.name}</li>
            <li>{e.subject}</li>
            <button onClick={()=>handleEdit(e.id)}>Edit</button>
            <button onClick={()=>handleDelete(e.id)}>Delete</button>
          </ul>
        })   
      }
    </div>
  )
}
