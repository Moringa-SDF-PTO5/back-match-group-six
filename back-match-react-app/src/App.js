import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn'; // Import SignIn component
import SignUp from './components/SignUp'; // Import SignUp component

function App() {
  return (
    <Router>
      <div className="App">
        <header className="Navbar">
          <nav>
            <ul>
              <li><a href="#">Dashboard</a></li>
              <li><a href="#">About</a></li>
              <li><a href="/sign-up">Sign Up</a></li>
              <li><a href="/sign-in">Sign In</a></li>
              <li><a href="#">Forgot Password</a></li>
            </ul>
          </nav>
        </header>
        <main className="Content">
          <Routes>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} /> {/* Route to SignIn component */}
            {/* Add other routes here */}
          </Routes>
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
    </Router>
  );
}

export default App;
