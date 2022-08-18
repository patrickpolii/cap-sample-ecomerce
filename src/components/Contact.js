import React from 'react'
function Contact() {
    return (
        <section className="app" id="contact">
        <div className="image">
          <img src="./images/splash with mobile.svg" alt="" />
        </div>
        <div className="content">
          <h3>Place your order through our app</h3>
          <p>
            You can easily place your order using our mobile app. Now you can
            download our app for both IOS and Android mobiles.
          </p>
          <div className="links">
            <img src="./images/app-store.png" alt="" />
            <img src="./images/google-play.png" alt="" />
          </div>
        </div>
      </section>
    );
  }
  
  export default Contact;