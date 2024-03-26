import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './AllPets.css';

function AllPets() {
  const [searchQuery, setSearchQuery] = useState('');
  const [pets, setPets] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const fetchPets = async () => {
    try {
      const response = await axios.get('http://localhost:4500/pets');
      setPets(response.data);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error fetching pets:', error);
    }
  };

  useEffect(() => {
    fetchPets();
  }, []);

  const handleSearch = () => {
    const results = pets.filter((pet) =>
      pet.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleClear = () => {
    setSearchQuery('');
    setSearchResults(pets);
  };

  // Function to handle button click and navigate to pet details section
  const handleShowDetails = (id) => {
    // Navigate programmatically to pet details section
    // You can replace '/pet-details' with the actual path to the pet details section
    window.location.href = `./PetDetails/${id}`;
  };

  return (
    <div className="AllPetsContainer">
      <div className="SearchBar">
        <input
          type="text"
          placeholder="Search for pets..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleClear}>Clear</button>
      </div>

      <div className="PetGrid">
        {searchResults.map((pet) => (
          <div className="PetCard" key={pet.id}>
            <img src={pet.image} alt={pet.name} />
            <p>ID: {pet.id}</p>
            <p>Category: {pet.category}</p>
            {/* Use a function to handle button click and navigate to pet details */}
            <button onClick={() => handleShowDetails(pet.id)}>Show Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllPets;
