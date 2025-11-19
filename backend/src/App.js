import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";
import FloatingCartButton from "./components/FloatingCartButton"; // ✅ use this

function App() {
  const location = useLocation();
  const hideNavbar = ["/", "/register", "/checkout"].includes(location.pathname);

  return (
    <>
      {!hideNavbar && (
        <>
          <Navbar />
          <FloatingCartButton /> {/* ✅ shows only when items exist */}
        </>
      )}

      <main style={{ padding: "1rem 0" }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
