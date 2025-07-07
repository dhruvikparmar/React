import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {

  const [formdata,setFormdata] = useState({})
  const [record,setRecord] = useState([])

  const [editindex,setEditindex] = useState(null);

  useEffect(()=>{
    let alldata= JSON.parse(localStorage.getItem("students")) || [];
    setRecord(alldata);
  },[]);

  const handlechange = (e)=>{
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    });
  };

  const handlesubmit = (e)=>{
    e.preventDefault();

    if(editindex == null) {
      let obj={id:Date.now(),...formdata};
      setRecord([...record,obj]);
      localStorage.setItem("students",JSON.stringify([...record,obj])); 
    }
    else {
      let singledata = record.find((item) => item.id == editindex);
      singledata.name = formdata.name;
      singledata.subject = formdata.subject;
      localStorage.setItem("students",JSON.stringify(record));
    }
    setFormdata({
      name: "",
      subject: ""
    });
  }

  const handledit = (id)=>{
    let singledata=record.find(item=>item.id==id)
      setFormdata({
        name:singledata.name,
        subject:singledata.subject
      })
      setEditindex(id);
  };

  const handledelete = (id)=>{
    let newdata = record.filter(item => item.id != id);
    setRecord(newdata);
    localStorage.setItem("students",JSON.stringify(newdata)); 
  };

  return (
    <>
      <h1>Crud</h1>
      <form onSubmit={handlesubmit}>
        <input type='text' placeholder='Enter name' name='name' value={formdata.name} onChange={handlechange}/> 
        <input type='text' placeholder='Enter subject' name='subject' value={formdata.subject} onChange={handlechange}/> 
        <button type='submit'>Submit</button>
      </form>      
      {
        record ?
          record.map((e,i)=>{
            return <ul key={i}>
              <li>{i+1}</li>
              <li>{e.id}</li>
              <li>{e.name}</li>
              <li>{e.subject}</li>
              <button onClick={()=>handledit(e.id)}>Edit</button>
              <button onClick={()=>handledelete(e.id)}>Delete</button>
            </ul>
          })
          :
        <p>NO Data Found</p>
      }
    </>
  )
}

export default App
