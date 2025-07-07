import React, { useState } from 'react';

export default function Events() {
    const [subject,setSubject] = useState('');
    const [city,setCity] = useState();
    const [name,setName] = useState('');

    const [dark,setDark]= useState(false);
    
    const [record,setRecord] = useState([]);

    const handleClick = () => {
        // console.log(name, city, subject);
        let obj={name, city, subject};
        setRecord([...record, obj]);
        setName('');      
        setSubject('');
        setCity('');
    }
    // const handleChange = (e) => {
    //     // console.log(e.target.value);
    //     setName(e.target.value);
    // }        
  return (
    <div style={{backgroundColor: dark ? 'black' : 'white'}}>
        <h1>Events</h1>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Name'/>
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder='Enter City'/>
        <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder='Enter Subject'/>
        <button onClick={handleClick}>Click</button> 
        <button onClick={()=>setDark(!dark)}>Light/Dark</button> 
        {
          record.length>0 
          ?
          record.map((e, i) => {
              return <div key={i}>
                <p>{e.name}</p>
                <p>{e.city}</p>
                <p>{e.subject}</p>
                </div>
          })
          :
          <p>No Records</p>           
        }
    </div>
  );
}


