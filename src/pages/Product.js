import React from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";

import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/product.css";
function Product() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
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
          <div className="product-card">
            <div className="product-image">
              <span className="discount-tag">50% off</span>
              <img
                src="./images/one-fresh-red-tomato-isolated-white.jpg"
                className="product-thumb"
                alt=""
              />
              <div className="card-btn" onClick={handleCart} style={{cursor: 'pointer'}}>Add to Cart </div>
            </div>
            <div className="product-info">
              <h2 className="product-brand">Vegetables</h2>
              <p className="product-short-des">a short line about the Food..</p>
              <span className="price">$20</span>
              <span className="actual-price">$40</span>
            </div>
            <Link to ="/details" className='button'>Details</Link>
          </div>
          <div className="product-card">
            <div className="product-image">
              <span className="discount-tag">50% off</span>
              <img
                src="./images/fresh-lettuce.jpg"
                className="product-thumb"
                alt=""
              />
              <div className="card-btn" onClick={handleCart} style={{cursor: 'pointer'}}>Add to Cart </div>
            </div>
            <div className="product-info">
              <h2 className="product-brand">Vegetables</h2>
              <p className="product-short-des">a short line about the Food..</p>
              <span className="price">$20</span>
              <span className="actual-price">$40</span>
            </div>
            <Link to ="/details" className='button'>Details</Link>
          </div>
          <div className="product-card">
            <div className="product-image">
              <span className="discount-tag">50% off</span>
              <img
                src="./images/three-ripe-persimmon-fruits-placed-wooden-surface.jpg"
                className="product-thumb"
                alt=""
              />
              <div className="card-btn" onClick={handleCart} style={{cursor: 'pointer'}}>Add to Cart </div>
            </div>
            <div className="product-info">
              <h2 className="product-brand">Vegetables</h2>
              <p className="product-short-des">a short line about the Food..</p>
              <span className="price">$20</span>
              <span className="actual-price">$40</span>
            </div>
            <Link to ="/details" className='button'>Details</Link>
          </div>
          <div className="product-card">
            <div className="product-image">
              <span className="discount-tag">50% off</span>
              <img
                src="./images/fresh-raw-avocado.jpg"
                className="product-thumb"
                alt=""
              />
              <div className="card-btn" onClick={handleCart} style={{cursor: 'pointer'}}>Add to Cart </div>
            </div>
            <div className="product-info">
              <h2 className="product-brand">Vegetables</h2>
              <p className="product-short-des">a short line about the Food..</p>
              <span className="price">$20</span>
              <span className="actual-price">$40</span>
            </div>
            <Link to ="/details" className='button'>Details</Link>
          </div>
        </div>

        <div className="product-container">
          <div className="product-card">
            <div className="product-image">
              <span className="discount-tag">50% off</span>
              <img
                src="./images/fresh-broccoli-isolated.jpg"
                className="product-thumb"
                alt=""
              />
              <div className="card-btn" onClick={handleCart} style={{cursor: 'pointer'}}>Add to Cart </div>
            </div>
            <div className="product-info">
              <h2 className="product-brand">Vegetables</h2>
              <p className="product-short-des">a short line about the Food..</p>
              <span className="price">$20</span>
              <span className="actual-price">$40</span>
            </div>
            <Link to ="/details" className='button'>Details</Link>
          </div>
          <div className="product-card">
            <div className="product-image">
              <span className="discount-tag">50% off</span>
              <img
                src="./images/white-vegetable-healthy-fresh-natural.jpg"
                className="product-thumb"
                alt=""
              />
              <div className="card-btn" onClick={handleCart} style={{cursor: 'pointer'}}>Add to Cart </div>
            </div>
            <div className="product-info">
              <h2 className="product-brand">Vegetables</h2>
              <p className="product-short-des">a short line about the Food..</p>
              <span className="price">$20</span>
              <span className="actual-price">$40</span>
            </div>
            <Link to ="/details" className='button'>Details</Link>
          </div>
          <div className="product-card">
            <div className="product-image">
              <span className="discount-tag">50% off</span>
              <img
                src="./images/fruits-berries-platter-vegan-cuisine.jpg"
                className="product-thumb"
                alt=""
              />
              <div className="card-btn" onClick={handleCart} style={{cursor: 'pointer'}}>Add to Cart </div>
            </div>
            <div className="product-info">
              <h2 className="product-brand">Vegetables</h2>
              <p className="product-short-des">a short line about the Food..</p>
              <span className="price">$20</span>
              <span className="actual-price">$40</span>
            </div>
            <Link to ="/details" className='button'>Details</Link>
          </div>
          <div className="product-card">
            <div className="product-image">
              <span className="discount-tag">50% off</span>
              <img
                src="./images/close-up-photo-oranges-whole-sliced-isolated-white-surface.jpg"
                className="product-thumb"
                alt=""
              />
              <div className="card-btn" onClick={handleCart} style={{cursor: 'pointer'}}>Add to Cart </div>
            </div>
            <div className="product-info">
              <h2 className="product-brand">Vegetables</h2>
              <p className="product-short-des">a short line about the Food..</p>
              <span className="price">$20</span>
              <span className="actual-price">$40</span>
            </div>
            <Link to ="/details" className='button'>Details</Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Product;
