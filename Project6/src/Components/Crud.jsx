import React, { useEffect, useState } from 'react';

export default function Crud() {

  const [formdata, setFormdata] = useState({});
  const [record, SetRecord] = useState([]);
  const [editindex, setEditindex] = useState(null);

  useEffect(() => {
    let alldata = JSON.parse(localStorage.getItem("tasks")) || [];
    SetRecord(alldata);
  }, []);

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    if (editindex == null) {
      let obj = { id: Date.now(), status: "pending", ...formdata };
      SetRecord([...record, obj]);
      localStorage.setItem("tasks", JSON.stringify([...record, obj]));
    } else {
      let updated = [...record];
      let index = updated.findIndex((item) => item.id === editindex);
      updated[index].name = formdata.name;
      updated[index].desc = formdata.desc;
      localStorage.setItem("tasks", JSON.stringify(updated));
      SetRecord(updated);
    }

    setEditindex(null);
    setFormdata({
      name: "",
      desc: ""
    });
  };

  const handleDelete = (id) => {
    let newdata = record.filter(item => item.id !== id);
    SetRecord(newdata);
    localStorage.setItem("tasks", JSON.stringify(newdata));
  };

  const handleEdit = (id) => {
    let singledata = record.find(item => item.id === id);
    setFormdata({
      name: singledata.name,
      desc: singledata.desc
    });
    setEditindex(id);
  };

  const handleUpload = (id) => {
    const updated = record.map((item) => {
      if (item.id === id) {
        return { ...item, status: "completed" };
      }
      return item;
    });
    SetRecord(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  return (
    <div>
      <center>
        <h1 className='font-bold text-5xl font-serif mt-5'>Task Manager</h1>
        <form onSubmit={handlesubmit} className='mt-10'>
          <input
            type='text'
            placeholder='Enter Name...'
            className='border w-80 h-10 pl-5'
            name='name'
            value={formdata.name || ''}
            onChange={handleChange}
          /><br />
          <input
            type='text'
            placeholder='Enter Description...'
            className='border w-80 h-10 mt-5 pl-5'
            name='desc'
            value={formdata.desc || ''}
            onChange={handleChange}
          /><br />
          <button type='submit' id='btn' className='border w-40 h-10 mt-5 '>
            {editindex == null ? "Submit" : "Update"}
          </button>
        </form>

        <table className='mt-10 w-full'>
          <thead className='border flex gap-30 h-10 place-items-center place-content-center'>
            <th className=''>NO.</th>
            <th className=' w-25'>Name</th>
            <th className=' w-40'>Desciption</th>
            <th className=' w-40'>Action</th>
            <th className=' w-40'>Mark as Completed</th>
            <th className=' w-30'>Status</th>
          </thead>
        </table>

        {
          record.map((e, i)=>{
            const isCompleted=e.status === "completed";
            return ( 
                <ul key={i} id='print' className='border flex font-semibold gap-30 place-content-center mt-5 h-15 place-items-center'>
                <li className='w-7.5 font-bold'>{i + 1}.</li>
                <li className='w-25'>{e.name}</li>
                <li className='w-40'>{e.desc}</li>
                <div className='w-40 flex'>
                  <button
                    onClick={() => handleDelete(e.id)}
                    className='border w-20 '
                  >Delete</button>
                  <button
                    onClick={() => handleEdit(e.id)}
                    className={`border w-20 ${isCompleted ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-red-200'}`}
                    disabled={isCompleted}>Edit</button>
                </div>
                <button
                  onClick={() => handleUpload(e.id)}
                    className={`border w-40 ${isCompleted ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-red-200'}`}
                  disabled={isCompleted}>Upload</button>
                <div className='border w-30'>{e.status}</div>
              </ul>
            );
          })
        }
      </center>
    </div>
  );
}

