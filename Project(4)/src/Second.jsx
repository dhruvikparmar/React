import { useState } from 'react';

export default function Second() {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [img,setImg] = useState('');
  const [record, setRecord] = useState([]);

  const handleClick = () => {
    const obj = { name, desc, price ,img};
    setRecord([...record, obj]);
    setName('');
    setDesc('');
    setPrice('');
    setImg('');
  };

  return (
    <>
    <center>
        <div style={{ padding: '20px' , marginTop:'100px', border: '1px solid black',width: '30%', lineHeight: '4'}}>
          
          <input
            style={{padding: '10px 15px 10px 25px',fontSize: '15px'}}
            type="text"
            placeholder="Enter Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          /><br></br>
          
          <input
            style={{padding: '10px 15px 10px 25px',fontSize: '15px'}}
            type="text"
            placeholder="Enter Product Desc.."
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          /><br></br>

          <input
            style={{padding: '10px 15px 10px 25px',fontSize: '15px'}}
            type="number"
            placeholder="Enter Product Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          /><br></br>

          {/* <input 
          style={{padding: '10px 20px 10px 13px',fontSize: '15px',width: '73%'}}
          type='file'
          placeholder="Enter Product Image"
          value={img}
          onChange={(e) => setImg(e.target.value)}
          /><br></br> */}

          <button onClick={handleClick} style={{padding:'10px 10px 10px 10px',}}><b>Add Product</b></button>
         </div>
         </center>
          <ul>
            {
              record.map((item, i) => (
              <div key={i} style={{border: '1px solid black' ,width: '30%',display: 'flex',flexDirection:'column',}}>
                <div>
                  <h1>{item.name}</h1>
                  <p>{item.desc}</p>
                  <p><b>${item.price}</b></p>
                </div>
              </div>
              ))
            }
          </ul>
      </>
    
  );
}
