import React from 'react'
function Footer() {
    return (
        <footer className="footer">
        <div className="top">
          <div className="content">
            <a href="#home" className="logo">
              Sega<span className="green">roo</span>
            </a>
            <p>
              Lorem ipsum dolor sit amet,adipiscing elit. Eu, montes, metus
              porttitor consectetur pretium. Euismod imperdiet
            </p>
          </div>

          <div className="links">
            <div className="link">
              <h4>Contact Information</h4>
              <div>
                <img src="./images/location-cross.svg" alt="" />
                <span>Cilandak Timur, Jakarta Selatan,Jakarta.</span>
              </div>
              <div>
                <img src="./images/sms-tracking.svg" alt="" />
                <span>segaroo@gmail.com</span>
              </div>
            </div>

            <div className="link">
              <h4>Quick Links</h4>
              <a href="#home">Services</a>
              <a href="#home">About Us</a>
              <a href="#home">Contact Us</a>
              <a href="#home">Download</a>
            </div>

            <div className="link">
              <h4>Legal</h4>
              <a href="#home">Privacy Policy</a>
              <a href="#home">Term of Use</a>
              <a href="#home">Conditions</a>
              <a href="#home">Location</a>
            </div>

            <div className="link">
              <h4>Connect with Us</h4>
              <div>
                <img src="./images/instagram.svg" alt="" />
                <span>Instagram</span>
              </div>
              <div>
                <img src="./images/twitter.svg" alt="" />
                <span>Twitter</span>
              </div>
              <div>
                <img src="./images/facebook.svg" alt="" />
                <span>Facebook</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <p>Copyright © 2010-2022 Segaroo Company S.L. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  