// DonationSection.js

import React, { useState } from 'react';
import './DonationSection.css'; // Import CSS for DonationSection

function DonationSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle donation submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="DonationSectionContainer">
      <h2>Support Pet Adoption</h2>
      <div className="DonationOptions">
        <div className="DonationOption">
          <img src="placeholder-image.png" alt="Bank Transfer" />
          <a href="#">Bank Transfer</a>
        </div>
        <div className="DonationOption">
          <img src="placeholder-image.png" alt="PayPal" />
          <a href="#">PayPal</a>
        </div>
        <div className="DonationOption">
          <img src="placeholder-image.png" alt="M-Pesa" />
          <a href="#">M-Pesa</a>
        </div>
        {/* Add more donation options as needed */}
      </div>
      <form onSubmit={handleSubmit} className="DonationForm">
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Your Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Donation Amount"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
        />
        <button type="submit">Donate Now</button>
      </form>
    </div>
  );
}

export default DonationSection;
