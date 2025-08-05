import React, { useEffect, useState } from 'react';
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from '/Fbconfig';

export default function FirebaseCRUD() {
  const [form, setForm] = useState({ name: '', subject: '' });
  const [users, setUsers] = useState([]);
  const [editId, setEditId] = useState(null);

  const userCollection = collection(db, 'users');

  const fetchUsers = async () => {
    const snapshot = await getDocs(userCollection);
    const data = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setUsers(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await updateDoc(doc(db, 'users', editId), form);
      setEditId(null);
    } else {
      await addDoc(userCollection, form);
    }
    setForm({ name: '', subject: '' });
    fetchUsers(); 
  };

  const handleEdit = (user) => {
    setForm({ name: user.name, subject: user.subject });
    setEditId(user.id);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'users', id));
    fetchUsers(); 
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-4 max-w-lg mt-6  mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add Task In Your Account</h1>

      <form onSubmit={handleSubmit} className="space-y-2 mt-8">
        <input
          type="text"
          required
          placeholder="Enter Yout Task Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-96 h-12 rounded-sm border px-4 py-1"
        />
        <input
          type="text"
          required
          placeholder="Enter Task  Subject"
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          className="w-96 mt-2 h-12 rounded-sm border px-4 py-1"

        /><br/>
        <button className="bg-blue-500 text-white cursor-pointer px-4  mt-2 py-2 rounded">
          {editId ? "Update" : "Add"}
        </button>
      </form>

      <div className="mt-6 space-y-4 w-96">
  {users.map((user) => (
    <div
      key={user.id}
      className="flex justify-between items-center bg-white shadow-lg rounded-lg p-4 hover:shadow-lg transition duration-300"
    >
      <div>
        <p className="text-lg font-semibold text-gray-800">{user.name}</p>
        <p className="text-sm text-gray-600">{user.subject}</p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => handleEdit(user)}
          className="text-yellow-600 border border-yellow-500 px-3 py-1 rounded hover:bg-yellow-100 cursor-pointer transition"
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(user.id)}
          className="text-red-600 border border-red-500 px-3 py-1 rounded hover:bg-red-100 cursor-pointer transition "
        >
          Delete
        </button>
      </div>
    </div>
  ))}
</div>

    </div>
  );
}
