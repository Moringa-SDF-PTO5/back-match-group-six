// BlogsAndPosts.js

import React from 'react';
import './BlogsAndPosts.css';

function BlogsAndPosts() {
  return (
    <div className="blogs-and-posts-container">
      <h1>Blogs and Posts</h1>
      <div className="blog-card">
        <h2>Title 1</h2>
      
        <p>Excerpt or Description</p>
        <a href="#">Read More</a>
      </div>
      <div className="blog-card">
        <h2>Title 2</h2>
        <p>Excerpt or Description</p>
        <a href="#">Read More</a>
      </div>
      <div className="blog-card">
        <h2>Title 3</h2>
       
        <p>Excerpt or Description</p>
        <a href="#">Read More</a>
      </div>
      {/* Add more blog cards as needed */}
    </div>
  );
}

export default BlogsAndPosts;
