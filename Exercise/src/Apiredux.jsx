import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddData, DeleteData, PostData, UpdateData } from './features/ApiSlice';

export default function Apiredux() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const [editIndex, setEditIndex] = useState(null);

  const record = useSelector((state) => state.crude.data);

  useEffect(() => {
    dispatch(AddData());
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
  if (!form.name || !form.subject) {
    alert("Please fill all fields");
    return;
    }
    
    if (editIndex !== null) { 
        dispatch(UpdateData({ id: editIndex, name: form.name, subject: form.subject }));
        setEditIndex(null);
    } else {
        dispatch(PostData({ name: form.name, subject: form.subject }));
    }
    
    setEditIndex(null)
    setForm({ name: '', subject: '' });
};


  const handleEdit = (item) => {
    setForm({ name: item.name, subject: item.subject });
    setEditIndex(item.id);
  };

  const handleDelete = (id) => {
    dispatch(DeleteData(id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>CRUD using Redux</h2>

      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="subject"
        placeholder="Enter subject"
        value={form.subject}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>{editIndex ? "Update" : "Add"}</button>

      <hr />

      <h3>User List</h3>
      {record.length === 0 ? (
        <p>No records found</p>
      ) : (
        record.map((item) => (
          <div key={item.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <p><strong>Name:</strong> {item.name}</p>
            <p><strong>Subject:</strong> {item.subject}</p>
            <button onClick={() => handleEdit(item)}>Edit</button>
            <button onClick={() => handleDelete(item.id)} style={{ marginLeft: '10px' }}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}
