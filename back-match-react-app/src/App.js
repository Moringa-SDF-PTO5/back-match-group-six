import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="Navbar">
        <nav>
          <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Sign Up</a></li>
            <li><a href="#">Sign In</a></li>
            <li><a href="#">Forgot Password</a></li>
          </ul>
        </nav>
      </header>
      <main className="Content">
        Content Section
      </main>
      <footer className="Footer">
        <nav>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms</a></li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default App;
