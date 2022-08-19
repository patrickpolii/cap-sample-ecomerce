import React from 'react'
import Footer from '../components/Footer'
import "../css/cart.css"

const Cart = () => {
    return (
      <>
        <div className="cart-body">
            <div className="cart-container">
                <div className="cart-header">
                    <h3 className="cart-title">Shopping Cart</h3>
                    <h5 className="action">Remove all</h5>
                </div>

                <div className="Cart-Items">
                    <div className="image-box">
                        <img src="./images/one-fresh-red-tomato-isolated-white.jpg" style={{height:"120px"}} alt=''/>
                    </div>
                    <div className="about">
                        <h1 className="title">Lorem ipsum</h1><br />
                        <h3 className="subtitle">2022</h3>
                    </div>
                    <div className="counter">
                        <div className="btn">+</div>
                        <div className="count">1</div>
                        <div className="btn">-</div>
                    </div>
                    <div className="prices">
                        <div className="amount">$20</div>
                        <div className="save"><u>Save for later</u></div>
                        <div className="remove"><u>Remove</u></div>
                    </div>
                </div>

                <div className="Cart-Items">
                    <div className="image-box">
                        <img src="./images/fresh-lettuce.jpg" style={{height:"120px"}} alt=''/>
                    </div>
                    <div className="about">
                        <h1 className="title">Lorem ipsum</h1><br />
                        <h3 className="subtitle">2022</h3>
                    </div>
                    <div className="counter">
                        <div className="btn">+</div>
                        <div className="count">1</div>
                        <div className="btn">-</div>
                    </div>
                    <div className="prices">
                        <div className="amount">$20</div>
                        <div className="save"><u>Save for later</u></div>
                        <div className="remove"><u>Remove</u></div>
                    </div>
                </div>

                <hr /> 
                    <div className="checkout">
                        <div className="total">
                        <div>
                        <div className="Subtotal">Sub-Total</div>
                        <div className="items">2 items</div>
                        </div>
                        <div className="total-amount">$59.98</div>
                        </div>
                        <button className="button">Checkout</button>
                    </div>
            </div>
        </div>
        <Footer />
    </>
    )
  }
  
  export default Cart