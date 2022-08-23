import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProduct } from "hooks/useProduct";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";

const ProductDetails = () => {
    const{id} = useParams()
  const navigate = useNavigate();
  let data = useProduct(id);
  let product = data.product;
  const [user] = useAuthState(auth);
  const handleCart = () => {
    if (!user) {
      navigate("/signin");
      alert("You need to login first.");
    } else {
      navigate("/cart");
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="content">
          <div className="product-card">
            <h1>{product.name}</h1>
            <h4>{product.desc}</h4>
            <div className="product-pic">
              <img src={`/${product.thumbnails}`} className="product-thumb" alt="" />
            </div>
            <br />
            <div className="product-info">
              <div className="product-price">${product.price}</div>
              <div
                className="product-button"
                onClick={handleCart}
                style={{ cursor: "pointer" }}
              >
                Add to Cart
              </div>
            </div>
          </div>

          <div className="product-details">
            <h1>{product.name}</h1>
            <p>
            {product.desc}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
