import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [record, setRecord] = useState([]);
  const [editId, setEditId] = useState(null); 

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const res = await axios.get('http://localhost:3000/users');
    setRecord(res.data);
  };

  const handleSubmit = async () => {
    if (editId) {
      const res = await axios.put(`http://localhost:3000/users/${editId}`, { name, subject });
      setRecord(record.map((item) => (item.id === editId ? res.data : item)));
      setEditId(null); 
    } else {
      const res = await axios.post('http://localhost:3000/users', { name, subject });
      setRecord([...record, res.data]);
    }
    setName('');
    setSubject('');
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/users/${id}`);
    setRecord(record.filter((item) => item.id !== id));
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setName(item.name);
    setSubject(item.subject);
  };

  return (
    <>
      <h1>Crud Operation Using Json Server</h1>
      <input
        type='text'
        placeholder='Enter Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='text'
        placeholder='Enter Subject'
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <button onClick={handleSubmit}>
        {editId ? 'Update' : 'Submit'}
      </button>

      {record.map((e, i) => (
        <ul key={e.id}>
          <li>{i + 1}</li>
          <li>{e.name}</li>
          <li>{e.subject}</li>
          <button onClick={() => handleEdit(e)}>Edit</button>
          <button onClick={() => handleDelete(e.id)}>Delete</button>
        </ul>
      ))}
    </>
  );
}

export default App;
