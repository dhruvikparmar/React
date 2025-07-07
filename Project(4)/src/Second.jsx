import { useState, useRef } from 'react';

export default function Second() {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [img, setImg] = useState(null);
  const [record, setRecord] = useState([]);

  const fileInputRef = useRef(null); // Ref for file input

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImg(imageUrl);
  };

  const handleClick = () => {
    const obj = { name, desc, price, img };
    setRecord([...record, obj]);

    // Reset input fields
    setName('');
    setDesc('');
    setPrice('');
    setImg(null);

    // Clear file input
    fileInputRef.current.value = null;
  };

  return (
    <>
      <center>
        <div style={{ padding: '20px', marginTop: '100px', border: '1px solid black', width: '30%', lineHeight: '4' }}>
          <input
            style={{ padding: '10px 15px 10px 25px', fontSize: '15px' }}
            type="text"
            placeholder="Enter Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          /><br />

          <input
            style={{ padding: '10px 15px 10px 25px', fontSize: '15px' }}
            type="text"
            placeholder="Enter Product Desc.."
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          /><br />

          <input
            style={{ padding: '10px 15px 10px 25px', fontSize: '15px' }}
            type="number"
            placeholder="Enter Product Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          /><br />

          <input
            ref={fileInputRef}
            style={{ padding: '10px 20px 10px 13px', fontSize: '15px', width: '73%' }}
            type="file"
            onChange={handleImageChange}
          /><br />

          <button onClick={handleClick} style={{ padding: '10px' }}><b>Add Product</b></button>
        </div>
      </center>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {
          record.map((item, i) => (
            <li key={i} style={{ border: '1px solid black', width: '30%', margin: '20px auto', padding: '10px' }}>
              <img src={item.img} alt="product" style={{ width: '100%', height: 'auto' }} />
              <h1>{item.name}</h1>
              <p>{item.desc}</p>
              <p><b>${item.price}</b></p>
            </li>
          ))
        }
      </ul>
    </>
  );
}
