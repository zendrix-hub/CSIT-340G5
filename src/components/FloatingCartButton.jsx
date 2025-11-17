import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles/floatingCartButton.css";

export default function FloatingCartButton() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Hide if no items yet
  if (totalItems === 0) return null;

  return (
    <button className="floating-cart" onClick={() => navigate("/cart")}>
      🛒
      <span className="cart-count">{totalItems}</span>
    </button>
  );
}
