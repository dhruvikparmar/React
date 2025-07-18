import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

const JsonApi = () => {
    const [record, setRecord] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fatchApi()
    }, [])

    const fatchApi = async () => {
        await axios.get("http://localhost:1007/posts").then((Res) => {
            setRecord(Res.data)
        })
    }

    return (
        <div>
            
            <h1>JsonApi</h1>
            <button onClick={() => navigate('/add-product')}>Add Product</button>
            {
                record &&
                record.map((e, i) => {
                    return <ul key={i}>
                        <li>{e.id}</li>
                        <li><img src={e.img} alt="" /></li>
                        <li>{e.title}</li>
                        <li>{e.price}</li>
                    </ul>
                })
            }
        </div>
    )
}

export default JsonApi
