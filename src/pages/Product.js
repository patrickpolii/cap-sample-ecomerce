import React from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { useProducts } from 'hooks/useProducts';

import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/product.css";
function Product() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  let data = useProducts()
  let products = data.products

  const handleCart = () =>{
    if (!user){
        navigate('/signin')
        alert('You need to login first.')
    } else{
        navigate('/cart')
    }
}

  return (
    <div className="Product">
      <Header />
      <section className="product">
        <h1 className="product-category">products</h1>
        <div className="product-container">
        {
          products.map((product, index) => (
            <div className="product-card" key={index}>
            <div className="product-image">
              <span className="discount-tag">{product.discount} off</span>
              <img
                src={product.thumbnails}
                className="product-thumb"
                alt=""
              />
              <div className="card-btn" onClick={handleCart} style={{cursor: 'pointer'}}>Add to Cart </div>
            </div>
            <div className="product-info">
              <h2 className="product-brand">{product.name}</h2>
              <p className="product-short-des">{product.desc}</p>
              <span className="price">{product.price}</span>
              <span className="actual-price">{product.priceActual}</span>
            </div>
            <Link to ="/details" className='button'>Details</Link>
          </div>

          ))
        }
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Product;
