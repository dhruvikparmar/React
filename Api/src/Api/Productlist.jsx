import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { useEffect } from 'react'

const ProductList = () => {
    const [record, setRecord] = useState([])

    useEffect(() => {
        fatchApi()
    }, [])

    const fatchApi = async () => {
        await axios.get("http://localhost:1008/posts").then((res) => {
            setRecord(res.data)
        })
    }

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:1008/posts/${id}`).then((res) => {
            let newdata = record.filter((item) => item.id != id)
            setRecord(newdata)
        })
    }

    return (
        <div>
            <Navbar />
            <div style={{display:'flex'}}>
                {
                    record.map((e, i) => (
                        <ul key={i} style={{ border: '1px solid black', width: '15%', lineHeight: '30px', borderRadius: '10px', padding: '20px 20px 20px 50px', fontSize: '20px' }}>
                            <p>{e.id}</p>
                            <p><img src={e.img} style={{ width: '80%', height: '150px', borderRadius: '5px' }}></img></p>
                            <p>{e.title}</p>
                            <p>{e.price}</p>
                            <button onClick={() => handleDelete(e.id)}>Delete</button>
                        </ul>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductList
