// SignIn.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import './SignIn.css'; // Import CSS for SignIn

function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate(); // Access the navigate function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would perform the authentication logic
    // For simplicity, let's assume authentication is successful if password matches
    // Replace this with your actual authentication logic
    if (formData.password === localStorage.getItem('password')) {
      // Redirect to Members Area upon successful sign-in
      navigate('/members-area');
    } else {
      // Handle authentication failure
      console.log('Authentication failed');
    }
  };

  return (
    <div className="SignInContainer">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit} className="SignInForm">
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
