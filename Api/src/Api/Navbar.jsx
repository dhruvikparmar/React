import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
    <nav style={{ padding: '10px', background: '#f2f2f2',}}>
      <Link to="/" style={{ marginRight: '15px' ,textDecorationLine:'none'}}>Home</Link>
      <Link to="/add-product" style={{ marginRight: '15px' ,textDecorationLine:'none'}}>Add Product</Link>
      <Link to="/product-list" style={{textDecorationLine:'none'}}>Product List</Link>
    </nav>
    </div>
  )
}
