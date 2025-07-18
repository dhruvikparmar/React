import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import axios from 'axios'

const AddProduct = () => {
    const [record,setRecord] = useState([])
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [img,setImg] = useState('')
    const navigate = useNavigate()

    const handleSubmit  = async (e)=>{
         e.preventDefault()
        await axios.post("http://localhost:1008/posts",{img,title,price}).then((res)=>
        {
            setRecord([...record,{img,title,price}])
        })
        setImg("")
        setTitle("")
        setPrice("")
        navigate('/product-list')
    }

    return (
        <div>
            <Navbar/>
            <h2>Add New Product</h2>
            <form onSubmit = {handleSubmit}>
                <input type="text" placeholder="Enter image url..." style={{height:'30px',fontSize:'15px',paddingLeft:'10px',marginRight:'10px'}} value={img} onChange={(e)=> setImg(e.target.value)} required/>
                <input type="text" placeholder="Enter title..."  style={{height:'30px',fontSize:'15px',marginRight:'10px',paddingLeft:'10px'}} value={title} onChange={(e) => setTitle(e.target.value)} required />
                <input type="number" placeholder="Enter price..." style={{height:'30px',fontSize:'15px',paddingLeft:'10px'}} value={price} onChange={(e) => setPrice(e.target.value)} required />
                <button type="submit" style={{height:'35px',fontSize:'15px',marginLeft:'20px',paddingLeft:'10px',width:'10%'}}>Submit</button>
            </form>
        </div>
    )
}

export default AddProduct
