import React from "react";
import "../Styles/hero.scss";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <h1 className="primary-heading">
        LIVE <br />
        GUTSY
      </h1>
      <h3 className="secondary-heading">Soda Perfected</h3>
      <p className="subtitle">
        3-5g of sugar. 9g of fiber. 5 delicious flavors.
      </p>
      <button className="cta">SHOP NOW</button>

      <div className="container1">
        <h1 className="primary-heading2">
          TRY ALL
          <br />
          FIVE
          <br />
          FLAVORS
        </h1>
        <p className="subtitle2">
          Our soda is made with real fruit juice and a touch of cane
          <br /> sugar. We never use artificial sweeteners or high fructose
          <br /> corn syrup. Try all five flavors and find your favorite!
        </p>
      </div>
    </div>
  );
};

export default Hero;
