import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/cart.css";
import { useSelector } from "react-redux";
import { useCart } from "../handler/useCart";

import { selectCart } from "../redux/cartSlice";

const Cart = () => {
  const { handlerRemoveToCart, handlerAddToCart } = useCart();
  const cart = useSelector(selectCart);
  console.log(cart, "ini cart")

  const handleIncrementQuantity = (id) => {
    const product = cart.filter((c) => c.id === id);
    handlerAddToCart({ ...product[0], quantity: 1 });
  };

  const handleDecrementQuantity = (id) => {
    const product = cart.filter((c) => c.id === id);
    if (product[0].quantity > 1) {
      handlerAddToCart({ ...product[0], quantity: -1 });
    }
  };

  const subTotalPrice = cart.reduce((acc, curr) => acc + Number(curr.price) * curr.quantity,0);

  const serviceDeleteCart = (id) => {
    handlerRemoveToCart(id);
  };
  

  return (
    <>
    <Header />
      <div className="cart-body">
        <div className="cart-container">
          <div className="cart-header">
            <h3 className="cart-title">Shopping Cart</h3>
          </div>
          {cart.length > 0 &&
            cart.map((item, i) => (
              <div key={i} className="Cart-Items">
                <div className="image-box">
                  <img
                    src={item.thumbnails}
                    style={{ height: "120px" }}
                    alt=""
                  />
                </div>
                <div className="about">
                  <h1 className="title">{item.name}</h1>
                  <br />
                  
                </div>
                <div className="counter">
                  <div
                    onClick={() => handleIncrementQuantity(item.id)}
                    className="btn"
                  >
                    +
                  </div>
                  <div className="count">{item.quantity}</div>
                  <div
                    onClick={() => handleDecrementQuantity(item.id)}
                    className="btn"
                  >
                    -
                  </div>
                </div>
                <div className="prices">
                  <div className="amount">Rp {item.price * item.quantity}</div>
                  <div onClick={() => serviceDeleteCart(item.id)}  className="btn">
                    Remove
                  </div>
                </div>
              </div>
            ))}
          <hr />
          <div className="checkout">
            <div className="total">
              <div>
                <div className="Subtotal">Sub-Total</div>
                <div className="items">({cart.length} item)</div>
              </div>
              <div className="total-amount">{subTotalPrice}</div>
            </div>
            <button className="button">Checkout</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
