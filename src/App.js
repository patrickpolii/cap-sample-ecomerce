import React from 'react'
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "./pages/Main"
import Product from "./pages/Product"
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="product" element={<Product />} />
            <Route path="cart" element={<Cart />} />
            <Route path="product/details/:id" element={<ProductDetails />} />
            <Route path="signin" element={<Login />} />
            <Route path="signup" element={<Register />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
