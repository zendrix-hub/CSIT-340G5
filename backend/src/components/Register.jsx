import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/register.css";

export default function Register() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    day: "",
    month: "",
    year: "",
    gender: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.agree) {
      alert("Please agree to the terms first.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert("Account created successfully!");
    navigate("/home");
  };

  return (
    <div className="register-container">
      <h1 className="logo">VELOZÉ</h1>
      <p className="subtitle">Now let's make you an Account</p>

      <form onSubmit={handleSubmit}>
        <div className="name-row">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
          />
        </div>

        <p className="dob-title">Date of Birth</p>
        <div className="dob-row">
          <input
            type="text"
            name="day"
            placeholder="Day"
            value={form.day}
            onChange={handleChange}
          />
          <input
            type="text"
            name="month"
            placeholder="Month"
            value={form.month}
            onChange={handleChange}
          />
          <input
            type="text"
            name="year"
            placeholder="Year"
            value={form.year}
            onChange={handleChange}
          />
        </div>

        <div className="gender-email-row">
          <select name="gender" value={form.gender} onChange={handleChange}>
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
        />

        <div className="password-row">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
          <label className="agreement">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
            />{" "}
            I agree
          </label>
        </div>

        <div className="confirm-row">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Re-enter Password"
            value={form.confirmPassword}
            onChange={handleChange}
          />
          <button type="submit" className="create-btn">
            Create Account
          </button>
        </div>

        <p className="link">
          Already have an account?{" "}
          <a href="/" className="link">Login</a>
        </p>
      </form>
    </div>
  );
}
