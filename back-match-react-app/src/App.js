import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn'; // Import SignIn component
import SignUp from './components/SignUp'; // Import SignUp component
import MembersArea from './components/MembersArea'; // Import MembersArea component
import Dashboard from './components/Dashboard';
import ForgotPassword from './forgot-password';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="Navbar">
          <nav>
            <ul>
              <li><a href="/dashboard">Dashboard</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/sign-up">Sign Up</a></li>
              <li><a href="/sign-in">Sign In</a></li>
              <li><a href="/forgot-password">Forgot Password</a></li>
            </ul>
          </nav>
        </header>
        <main className="Content">
          <Routes>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} /> {/* Route to SignIn component */}
            <Route path="/members-area" element={<MembersArea />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

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
