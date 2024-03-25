// MembersArea.js

import React, { useState } from 'react';
import HonorCode from './HonorCode';
import DonationSection from './DonationSection';
import AllPets from './AllPets';
import PetDetails from './PetDetails';
import InnerCircle from './InnerCircle';

function MembersArea() {
  const [activeSection, setActiveSection] = useState('honor-code');

  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  return (
    <div>
      {/* Navigation Menu */}
      <nav>
        <ul>
          <li onClick={() => handleNavigation('honor-code')}>Honor Code</li>
          <li onClick={() => handleNavigation('donation-section')}>Donation Section</li>
          <li onClick={() => handleNavigation('all-pets')}>All Pets </li>
          <li onClick={() => handleNavigation('pet-details')}>PetDetails </li>
          <li onClick={() => handleNavigation('inner-circle')}>InnerCircle </li>


          {/* Add more navigation options as needed */}
        </ul>
      </nav>

      {/* Render the active section based on user's navigation */}
      {activeSection === 'honor-code' && <HonorCode />}
      {activeSection === 'donation-section' && <DonationSection />}
      {activeSection === 'all-pets' && <AllPets />}
      {activeSection === 'pet-details' && <PetDetails />}
      {activeSection === 'inner-circle' && <InnerCircle />}
      {/* Add more conditional rendering for other sections */}
    </div>
  );
}

export default MembersArea;
