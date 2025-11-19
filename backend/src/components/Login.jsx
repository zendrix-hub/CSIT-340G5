import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

export default function Login() {
  const [data, setData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.username || !data.password) {
      alert("Please enter your username and password.");
      return;
    }

    alert("Login successful! (frontend only)");
    navigate("/home");
  };

  return (
    <div className="login-container">
      <h1 className="logo">VELOZÉ</h1>
      <h2>Welcome Back</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={data.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={data.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>

      <p>
        Don’t have an account?{" "}
        <a href="/register" className="link">Register</a>
      </p>
    </div>
  );
}
