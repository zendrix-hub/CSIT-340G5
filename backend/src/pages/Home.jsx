import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-text">
          <h2>Elevate Your Performance</h2>
          <p>
            Discover premium-quality sports products designed to boost your speed,
            strength, and style. Be part of the Velozé movement.
          </p>
          <Link to="/products">
            <button className="shop-btn">Shop Now</button>
          </Link>
        </div>
      </section>

      <section className="products">
        <h3>Featured Products</h3>
        <div className="product-grid">
          <Link to="/product/1" className="product-card">
            <img src="/images/sprint-shoes.jpg" alt="Velozé Sprint Shoes" />
            <h4>Velozé Sprint Shoes</h4>
            <p>₱3,499</p>
          </Link>

          <Link to="/product/2" className="product-card">
            <img src="/images/wind-jacket.jpg" alt="Velozé Wind Jacket" />
            <h4>Velozé Wind Jacket</h4>
            <p>₱2,199</p>
          </Link>

          <Link to="/product/3" className="product-card">
            <img src="/images/sport-bag.jpg" alt="Velozé Sport Bag" />
            <h4>Velozé Sport Bag</h4>
            <p>₱1,499</p>
          </Link>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 VELOZÉ. All rights reserved.</p>
      </footer>
    </div>
  );
}
