import React from "react";
import "./heroBanner.css";
import { Link } from "react-router-dom";
const HeroBanner = () => {
  const id = 5;
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">Apple</p>
        <h3>reloj</h3>
        <h1>Smart</h1>
        <img
          src="https://res.cloudinary.com/dsxrdjiu5/image/upload/v1720122336/71g6TVt3ZvL._AC_SL1500__kjp4po.jpg"
          alt="headphones"
          className="hero-banner-image"
        />

        <div>
          <Link to={`/ItemDetail/${id}`}>
            <button type="button">-20% OFF</button>
          </Link>

          <div className="desc">
            <h5>Apple Watch Serie 6 con GPS y monitor de salud integrado.</h5>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
