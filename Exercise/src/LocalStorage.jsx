import React, { useEffect, useState } from 'react'
export default function LocalStorage() {

    const [formdata,setFormdata]=useState({});
    const [record,SetRecord]=useState([])

    const[editindex,setEditindex]=useState(null)

    useEffect(()=>
    {
      let alldata=JSON.parse(localStorage.getItem("students"))  || [];
      SetRecord(alldata);    
    },[]);

    const handleChange = (e) =>
    {
      setFormdata({
          ...formdata,
          [e.target.name]:e.target.value
      });
    };

    const handlesubmit = (e) => {
        e.preventDefault();

      if(editindex==null)
      {
        let obj={id:Date.now(),...formdata};
        SetRecord([...record,obj]);
        localStorage.setItem("students",JSON.stringify([...record,obj]));
      }
      else{
        let singledata=record.find((item)=>item.id == editindex);
        singledata.name=formdata.name;
        singledata.subject=formdata.subject;
        localStorage.setItem("students",JSON.stringify(record));
      }
      setEditindex(null)
      setFormdata
      ({
        name:"",
        subject:""
      });
    };

    const handleDelete = (id) => {
      let newdata=record.filter(item=>item.id!=id)
      SetRecord(newdata);
      localStorage.setItem("students",JSON.stringify(newdata));
      // console.log(name);
    }

    const handleEdit=(id)=>{
      let singledata=record.find(item=>item.id==id)
      setFormdata({
        name:singledata.name,
        subject:singledata.subject
      })
      setEditindex(id);
    }

    // const student = { name: "sumit", subject: "react", age: "19" };

    // localStorage.setItem("student", JSON.stringify(student));

    // let name = localStorage.getItem("student");

    // console.log(name);

  return (
    <div><h1>localStorage</h1>
    <form onSubmit={handlesubmit}>
      <input type='text' placeholder='Enter Name...' name='name' value = {formdata.name} onChange = {handleChange}></input>
      <input type='text' placeholder='Enter Subject...' name='subject' value = {formdata.subject} onChange = {handleChange}></input>
      <button type='submit'>{editindex == null ?"Submit":"Update"}</button>
    </form>
      {
        record ?
          record.map((e,i)=>
            {
              return <ul key={i}>
                <li>{i+1}</li>
                <li>{e.id}</li>
                <li>{e.name}</li>
                <li>{e.subject}</li>
                <button onClick={()=>handleDelete(e.id)}>Delete</button>
                <button onClick={()=>handleEdit(e.id)}>Edit</button>
            </ul>
          })
        :
        <p>No Data</p>
      }
    </div>       
  )
}