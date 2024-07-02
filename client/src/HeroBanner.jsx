import React from "react";
import "./heroBanner.css";
const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">small text</p>
        <h3>mid text</h3>
        <h1>large text</h1>
        <img
          src="https://res.cloudinary.com/dsxrdjiu5/image/upload/v1718149977/samples/chair.png"
          alt="headphones"
          className="hero-banner-image"
        />

        <div>
          <button type="button">heroBanner.buttonText</button>

          <div className="desc">
            <h5>Description</h5>
            <p>heroBanner.desc</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
