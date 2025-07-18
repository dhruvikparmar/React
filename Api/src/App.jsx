import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JsonApi from './Api/JsonApi';
import AddProduct from './Api/Addproduct';
import ProductList from './Api/Productlist';
import Navbar from './Api/Navbar';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navbar/>}/>
        <Route path="/jsonapi" element={<JsonApi/>} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/product-list" element={<ProductList/>} />
      </Routes>
    </Router>
  );
}

export default App;
