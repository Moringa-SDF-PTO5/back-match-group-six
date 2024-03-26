import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Importing the CSS file

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Welcome to the Dashboard</h1>
      <nav className="dashboard-nav">
        <ul>
          <li><Link to="/dashboard/events">Events</Link></li>
          <li><Link to="/dashboard/general-tips">General Tips</Link></li>
          <li><Link to="/dashboard/blogs">Blogs and Posts</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Dashboard;
