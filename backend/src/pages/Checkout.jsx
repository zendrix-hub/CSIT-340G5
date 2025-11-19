import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import "../styles/checkout.css";

export default function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const [form, setForm] = useState({ name: "", email: "", address: "" });
  const [submitted, setSubmitted] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [processing, setProcessing] = useState(false); // 🌀 new state
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.address) {
      alert("Please fill out all fields before proceeding.");
      return;
    }
    setShowConfirm(true);
  };

  const confirmOrder = () => {
    setShowConfirm(false);
    setProcessing(true); // show animation

    setTimeout(() => {
      setProcessing(false);
      setSubmitted(true);
      clearCart();

      setTimeout(() => {
        navigate("/products");
      }, 2000);
    }, 2500);
  };

  // 🛒 Empty Cart Guard
  if (cart.length === 0 && !submitted) {
    return (
      <div className="checkout-empty">
        <h2>Your cart is empty 🛒</h2>
        <Link to="/products" className="back-btn">
          Go Shopping
        </Link>
      </div>
    );
  }

  // 💫 Processing Animation
  if (processing) {
    return (
      <div className="processing-screen">
        <div className="card-loader">
          <div className="credit-card"></div>
          <div className="loader-text">Processing Payment...</div>
        </div>
      </div>
    );
  }

  // ✅ Success Message
  if (submitted) {
    return (
      <div className="checkout-success">
        <h2>✅ Order Confirmed!</h2>
        <p>Thank you, {form.name}! Your items will be shipped soon.</p>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h2>🧾 Checkout</h2>

      <div className="checkout-content">
        {/* 📝 Left - Shipping Form */}
        <form onSubmit={handleSubmit} className="checkout-form">
          <h3>Shipping Information</h3>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="address"
            placeholder="Shipping Address"
            value={form.address}
            onChange={handleChange}
            required
          />

          <div className="checkout-buttons">
            <Link to="/cart" className="back-cart-btn">
              ⬅ Back to Cart
            </Link>
            <button type="submit" className="checkout-btn">
              Confirm Order
            </button>
          </div>
        </form>

        {/* 📦 Right - Order Summary */}
        <div className="order-summary">
          <h3>Order Summary</h3>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <img src={item.img} alt={item.name} />
                <div>
                  <p>{item.name}</p>
                  <small>Qty: {item.quantity}</small>
                </div>
                <span>₱{(item.price * item.quantity).toLocaleString()}</span>
              </li>
            ))}
          </ul>
          <h4>Total: ₱{total.toLocaleString()}</h4>
        </div>
      </div>

      {/* 🪄 Confirmation Modal */}
      {showConfirm && (
        <div className="confirm-overlay">
          <div className="confirm-box">
            <h3>Confirm Your Order</h3>
            <p>
              Please review your information and total. <br />
              Are you sure you want to place this order?
            </p>
            <div className="confirm-actions">
              <button onClick={() => setShowConfirm(false)} className="cancel-btn">
                Cancel
              </button>
              <button onClick={confirmOrder} className="confirm-btn">
                Yes, Place Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
