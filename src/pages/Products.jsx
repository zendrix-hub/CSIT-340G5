import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/products.css";

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("none");

const products = [
  { 
    id: "1", 
    name: "Velozé Sprint Shoes", 
    price: 3499, 
    category: "Footwear", 
    img: "/images/sprint-shoes.jpg" 
  },
  { 
    id: "2", 
    name: "Velozé Wind Jacket", 
    price: 2199, 
    category: "Apparel", 
    img: "/images/wind-jacket.jpg" 
  },
  { 
    id: "3", 
    name: "Velozé Sport Bag", 
    price: 1499, 
    category: "Accessories", 
    img: "/images/sport-bag.jpg" 
  },
  { 
    id: "4", 
    name: "Velozé Pro Shorts", 
    price: 1299, 
    category: "Apparel", 
    img: "/images/pro-shorts.jpg" 
  },
  { 
    id: "5", 
    name: "Velozé Training Cap", 
    price: 799, 
    category: "Accessories", 
    img: "/images/training-cap.jpg" 
  },
];


  // Filtered products
  let filtered = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === "All" || p.category === category;
    return matchesSearch && matchesCategory;
  });

  // Sorting logic
  if (sortOrder === "low-high") {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortOrder === "high-low") {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }

  return (
    <div>
      <div className="products-container">
        <h2 className="products-title">Our Collection</h2>

        {/* Filters */}
        <div className="filter-row">
          <input
            type="text"
            placeholder="Search products..."
            className="search-bar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            className="category-filter"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Footwear">Footwear</option>
            <option value="Apparel">Apparel</option>
            <option value="Accessories">Accessories</option>
          </select>

          <select
            className="sort-filter"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort by</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="products-grid">
          {filtered.length > 0 ? (
            filtered.map((p) => (
              <Link to={`/product/${p.id}`} key={p.id} className="product-card">
                <img src={p.img} alt={p.name} />
                <h4>{p.name}</h4>
                <p className="price">₱{p.price.toLocaleString()}</p>
                <p className="category">{p.category}</p>
              </Link>
            ))
          ) : (
            <p className="no-results">No matching products found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
