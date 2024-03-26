import React from 'react';
import { Link } from 'react-router-dom';
import './GeneralTips.css'; // Importing the CSS file

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
      <section className="general-tips-section">
        <h2>General Tips</h2>
        <div className="tips-category">
          <h3>Birds</h3>
          <p>Placeholder content for bird care tips.</p>
        </div>
        <div className="tips-category">
          <h3>Snakes</h3>
          <p>Placeholder content for snake care tips.</p>
        </div>
        <div className="tips-category">
          <h3>Dogs</h3>
          <p>Placeholder content for dog care tips.</p>
        </div>
        {/* Add more categories as needed */}
      </section>
    </div>
  );
}

export default Dashboard;
