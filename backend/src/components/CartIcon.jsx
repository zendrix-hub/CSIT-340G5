import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import '../styles/cartIcon.css';

const CartIcon = () => {
  const { cart } = useContext(CartContext);
  const [animate, setAnimate] = useState(false);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Trigger animation every time the cart changes
  useEffect(() => {
    if (totalItems > 0) {
      setAnimate(true);
      const timeout = setTimeout(() => setAnimate(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [totalItems]);

  return (
    <Link to="/cart" className="cart-icon">
      🛒
      {totalItems > 0 && (
        <span className={`cart-count ${animate ? "animate" : ""}`}>
          {totalItems}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;
