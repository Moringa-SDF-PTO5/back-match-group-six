// AllPets.js

import React, { useState, useEffect } from 'react'; // Combine the imports

import axios from 'axios';
import './AllPets.css'; // Import the CSS file

// Your component code here


import './AllPets.css'; // Import CSS for AllPets

function AllPets() {
  const [searchQuery, setSearchQuery] = useState('');
  const [pets, setPets] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  // Fetch all pets from db.json
  const fetchPets = async () => {
    try {
      const response = await axios.get('http://localhost:4500/pets');
      setPets(response.data);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error fetching pets:', error);
    }
  };

  // Fetch pets when component mounts
  useEffect(() => {
    fetchPets();
  }, []);

  // Search pets based on query
  const handleSearch = () => {
    const results = pets.filter((pet) =>
      pet.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  // Clear search query and display all pets
  const handleClear = () => {
    setSearchQuery('');
    setSearchResults(pets);
  };

  return (
    <div className="AllPetsContainer">
      {/* Search Bar */}
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

      {/* Display Pets */}
      <div className="PetGrid">
        {searchResults.map((pet) => (
          <div className="PetCard" key={pet.id}>
            <img src={pet.image} alt={pet.name} />
            <p>ID: {pet.id}</p>
            <p>Category: {pet.category}</p>
            <button>Show Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllPets;
