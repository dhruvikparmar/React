import React,{ useState } from 'react';

export default function Add() {
    const [name, SetName] = useState('')
    const [desc, SetDesc] = useState('')
    const [price, SetPrice] = useState('')
    
    const [record,SetRecord] = useState([]);

    const handleClick =()=>{
        let obj = {name, desc, price};
        SetRecord([...record, obj]);
        SetName('');
        SetDesc('');
        SetPrice('');
    };
  
  return (    
        <div>
            <h1>Hello</h1>
            <input type='text' placeholder='Enter Product Name' value={name} onChange={(e)=>SetName(e.target.value)} />
            <input type='text' placeholder='Enter Product Desc..' value={desc} onChange={(e)=>SetDesc(e.target.value)} />
            <input type='text' placeholder='Enter Product Price' value={price} onChange={(e)=>SetPrice(e.target.value)} />
            <button onClick={handleClick}>Add Product</button>
        </div>
    )
}
