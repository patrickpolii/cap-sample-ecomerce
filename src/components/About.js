function About() {
  return (
    <div>
      <section className="about" id="about">
        <div className="image">
          <img src="./images/illus riding.svg" alt="" />
        </div>
        <div className="content">
          <h3>
            <span className="green">Order</span> anytime and anywhere
          </h3>
          <p>
            Lorem ipsum dolor sit amet,adipiscing elit. Eu, montes, metus
            porttitor consectetur pretium. Euismod imperdiet pellentesque cursus
            in netus.
          </p>
          <a href="#home" className="btn">
            Make an Offer
          </a>
        </div>
      </section>
      <section className="about about-2">
        <div className="content">
          <h3>
            <span className="green">Deliver</span> the products with best safety
          </h3>
          <p>
            Lorem ipsum dolor sit amet,adipiscing elit. Eu, montes, metus
            porttitor consectetur pretium. Euismod imperdiet pellentesque cursus
            in netus.
          </p>
          <a href="#home" className="btn">
            Make an Offer
          </a>
        </div>

        <div className="image">
          <img src="./images/illus deliver.svg" alt="" />
        </div>
      </section>
      <section className="about about-3">
        <div className="image">
          <img src="./images/buying online.svg" alt="" />
        </div>

        <div className="content">
          <h3>
            <span className="green">Track</span> your order very easily
          </h3>
          <p>
            Lorem ipsum dolor sit amet,adipiscing elit. Eu, montes, metus
            porttitor consectetur pretium. Euismod imperdiet pellentesque cursus
            in netus.
          </p>
          <a href="#home" className="btn">
            Track Now
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
