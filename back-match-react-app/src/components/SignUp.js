import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css'; // Import SignUp CSS

function SignUp() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store user credentials in localStorage
    localStorage.setItem('email', formData.email);
    localStorage.setItem('password', formData.password);

    // Redirect to sign-in page
    navigate('/sign-in');
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
