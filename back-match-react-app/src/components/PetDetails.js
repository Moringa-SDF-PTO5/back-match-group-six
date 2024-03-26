// PetDetails.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './PetDetails.css'; // Import CSS for PetDetails

function PetDetails() {
  const { id } = useParams();
  const [petDetails, setPetDetails] = useState(null);

  // Fetch pet details based on ID
  useEffect(() => {
    const fetchPetDetails = async () => {
      try {
        const response = await axios.get(`https://bot-batlr-jackson-njihia.onrender.com/pets/${id}`);
        setPetDetails(response.data);
      } catch (error) {
        console.error('Error fetching pet details:', error);
      }
    };
    fetchPetDetails();
  }, [id]);

  return (
    <div className="PetDetailsContainer">
      {petDetails ? (
        <div className="PetDetailsCard">
          <img src={petDetails.image} alt={petDetails.name} />
          <h2>{petDetails.name}</h2>
          <p><strong>Breed:</strong> {petDetails.breed}</p>
          <p><strong>Shelter:</strong> {petDetails.shelter}</p>
          {/* Add more details as needed */}
        </div>
      ) : (
        <p>Loading pet details...</p>
      )}
    </div>
  );
}

export default PetDetails;
