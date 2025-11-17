import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import "../styles/cart.css";

export default function Cart() {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty! Please add items before checking out.");
      return;
    }
    navigate("/checkout");
  };

  return (
    <div className="cart-container">
      <h2>🛍️ Your Cart</h2>

      {cart.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is empty 🛒</p>
          <Link to="/products" className="back-btn">Go Shopping</Link>
        </div>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt={item.name} className="cart-img" />

                <div className="cart-details">
                  <h4>{item.name}</h4>
                  <p>₱{item.price.toLocaleString()}</p>

                  <div className="quantity-controls">
                    <button
                      className="qty-btn minus"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      −
                    </button>
                    <span className="qty-count">{item.quantity}</span>
                    <button
                      className="qty-btn plus"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="remove-btn"
                  title="Remove item"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className="cart-footer">
            <h3>Total: ₱{total.toLocaleString()}</h3>
            <div className="cart-actions">
              <button onClick={handleCheckout} className="checkout-btn">
                Proceed to Checkout
              </button>
              <Link to="/products" className="continue-btn">
                Continue Shopping
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
