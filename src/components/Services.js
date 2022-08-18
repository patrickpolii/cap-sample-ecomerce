import React from 'react'
import Card from "./Card";
function Services() {
  return (
    <div>
      <section className="services" id="services">
        <div className="top">
          <h2>
            <span className="green">Why</span> We are the Best
          </h2>
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
            Lorem ipsum is placeholder.
          </p>
        </div>
        <div className="bottom">
          <Card
            title="Free Delivery"
            desc="Lorem ipsum dolor sit amet,adipiscing elit. Eu, montes, metus
              porttitor consectetur pretium. Euismod imperdiet pellentesque
              cursus in netus."
          />
          <Card
            title="Healty Food"
            desc="Lorem ipsum dolor sit amet,adipiscing elit. Eu, montes, metus
              porttitor consectetur pretium. Euismod imperdiet pellentesque
              cursus in netus."
          />
          <Card
            title="Online Ordering"
            desc="Lorem ipsum dolor sit amet,adipiscing elit. Eu, montes, metus
              porttitor consectetur pretium. Euismod imperdiet pellentesque
              cursus in netus."
          />
        </div>
      </section>
    </div>
  );
}

export default Services;
