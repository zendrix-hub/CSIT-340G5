import React from "react";
import { Link } from "react-router-dom";
import "../styles/navBar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/home" className="logo">VELOZÉ</Link>
      <div className="nav-right">
        <Link to="/products">Products</Link>
        <span className="cart-symbol">🛒</span>
      </div>
    </nav>
  );
};

export default Navbar;
