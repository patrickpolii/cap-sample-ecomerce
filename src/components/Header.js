import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
        <a href="/" className="logo">
          Sega<span className="green">roo</span>
        </a>

        <nav className="navbar">
        <Link to="/">Home</Link>
          <Link to="/product">Product</Link>
          <a href="#contact">Contact Us</a>
          <Link to="/signin" className="btn">
          Login 
          </Link>
        </nav>
        <div className="hamburger">
          <img src="./images/grid-outline.svg" alt="" />
        </div>
      </header>
  );
}

export default Header;
