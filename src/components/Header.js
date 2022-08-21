import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, logout } from "../config/firebase";

function Header() {
  const handleToggle = (e) => {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("show");
  };
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const signedOut = () => {
    logout();
    navigate("/");
  };
  return (
    <header className="header">
      <a href="/" className="logo">
        Sega<span className="green">roo</span>
      </a>

      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        <a href="#contact">Contact Us</a>
        {user ? (
          <li>
            <a onClick={signedOut} className="btn">
              Logout
            </a>
            <Link to="/cart" className="btn">
              Cart
            </Link>
          </li>
        ) : (
          <Link to="/signin" className="btn">
            Login
          </Link>
        )}
      </nav>
      <div className="hamburger" onClick={handleToggle}>
        <img src="./images/grid-outline.svg" alt=""/>
      </div>
    </header>
  );
}

export default Header;
