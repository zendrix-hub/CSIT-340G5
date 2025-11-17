// src/pages/ProductDetails.jsx
import React, { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import ToastMessage from "../components/ToastMessage";
import "../styles/productDetails.css";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [showToast, setShowToast] = useState(false);

  const products = [
    { id: "1", name: "Velozé Sprint Shoes", price: 3499, category: "Footwear", img: "/images/sprint-shoes.jpg", description: "High-performance running shoes designed for speed and comfort." },
    { id: "2", name: "Velozé Wind Jacket", price: 2199, category: "Apparel", img: "/images/wind-jacket.jpg", description: "Lightweight windbreaker perfect for outdoor workouts." },
    { id: "3", name: "Velozé Sport Bag", price: 1499, category: "Accessories", img: "/images/sport-bag.jpg", description: "Durable sport bag with ample space for gym essentials." },
    { id: "4", name: "Velozé Pro Shorts", price: 1299, category: "Apparel", img: "/images/pro-shorts.jpg", description: "Breathable, flexible shorts for training or casual wear." },
    { id: "5", name: "Velozé Training Cap", price: 799, category: "Accessories", img: "/images/training-cap.jpg", description: "Stylish training cap that keeps you cool and focused." },
  ];

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="not-found">
        <h2>Product not found 🧐</h2>
        <Link to="/products" className="back-btn">← Back to Products</Link>
      </div>
    );
  }

  const handleAdd = () => {
    addToCart(product);
    setShowToast(true);
  };

  return (
    <div className="product-details">
      <div className="product-image">
        <img src={product.img} alt={product.name} />
      </div>

      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="category">{product.category}</p>
        <p className="price">₱{product.price.toLocaleString()}</p>
        <p className="description">{product.description}</p>

        <div className="buttons">
          <button onClick={handleAdd} className="add-to-cart-btn">
            Add to Cart 🛒
          </button>

          <Link to="/cart" className="view-cart-btn">
            View Cart →
          </Link>
        </div>
      </div>

      {/* ✅ Toast Notification */}
      <ToastMessage
        message="✅ Added to Cart — Tap 🛒 to view"
        show={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
}
