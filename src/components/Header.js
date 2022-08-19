import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, logout } from "../config/firebase";

function Header() {
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
            <div
              onClick={signedOut}
              className="btn"
            >
              Sign Out
            </div>
          </li>
        ) : (
          <Link to="/signin" className="btn">
            Login
          </Link>
        )}
      </nav>
      <div className="hamburger">
        <img src="./images/grid-outline.svg" alt="" />
      </div>
    </header>
  );
}

export default Header;
