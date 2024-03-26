// Dashboard.js

import React, { useState } from 'react';
import Events from './Events';
import GeneralTips from './GeneralTips';
import BlogsAndPosts from './BlogsAndPosts';

function Dashboard() {
  const [activeSection, setActiveSection] = useState('events');

  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  return (
    <div>
      {/* Navigation Menu */}
      <nav>
        <ul>
          <li onClick={() => handleNavigation('events')}>Events</li>
          <li onClick={() => handleNavigation('general-tips')}>General Tips</li>
          <li onClick={() => handleNavigation('blogs-and-posts')}>Blogs and Posts</li>
          {/* Add more navigation options as needed */}
        </ul>
      </nav>

      {/* Render the active section based on user's navigation */}
      {activeSection === 'events' && <Events />}
      {activeSection === 'general-tips' && <GeneralTips />}
      {activeSection === 'blogs-and-posts' && <BlogsAndPosts />}
      {/* Add more conditional rendering for other sections */}
    </div>
  );
}

export default Dashboard;
