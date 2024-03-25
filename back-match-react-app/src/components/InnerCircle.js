// InnerCircle.js

import React from 'react';
import './InnerCircle.css'; // Import CSS for InnerCircle

function InnerCircle() {
  return (
    <div className="InnerCircleContainer">
      <h2>Welcome to the Inner Circle!</h2>
      <p>As a member, you gain access to exclusive benefits and discounts on pet products and services.</p>
      <div className="MembershipBenefits">
        <div className="BenefitItem">
          <img src="placeholder-image.png" alt="Discounted Pet Food" />
          <p>Discounted pet food</p>
        </div>
        <div className="BenefitItem">
          <img src="placeholder-image.png" alt="Free Vet Check-ups" />
          <p>Free vet check-ups</p>
        </div>
        <div className="BenefitItem">
          <img src="placeholder-image.png" alt="Special Offers" />
          <p>Exclusive special offers</p>
        </div>
        {/* Add more membership benefits as needed */}
      </div>
      <p>Join the Inner Circle today and give your pets the treatment they deserve!</p>
      <button className="JoinButton">Join Now</button>
    </div>
  );
}

export default InnerCircle;
