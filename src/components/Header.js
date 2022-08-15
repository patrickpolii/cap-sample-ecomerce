function Header() {
  return (
    <header className="header">
        <a href="/" className="logo">
          Sega<span className="green">roo</span>
        </a>

        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="products.html">Products</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact Us</a>
          <a href="Login" className="btn">
            Login
          </a>
        </nav>
        <div className="hamburger">
          <img src="./images/grid-outline.svg" alt="" />
        </div>
      </header>
  );
}

export default Header;
