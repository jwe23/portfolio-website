import React from 'react';
import './blogpage.css';

const BlogPage: React.FC = () => {
  return (
    <div className="blog-page">
      <h1>Blog</h1>
      <p>
        Welcome to my blog! Here you'll find insights, project updates, and my thoughts on technology, development, and more.
      </p>
      <div className="blog-posts">
        {/* Example static blog post. Replace with dynamic content as needed. */}
        <article className="blog-post">
          <h2>Sample Blog Post Title</h2>
          <p>
            This is an excerpt from a sample blog post. More content will be added soon as I share my experiences and insights.
          </p>
          <a href="#">Read More</a>
        </article>
        {/* You can add additional blog posts or map over an array of posts here */}
      </div>
    </div>
  );
};

export default BlogPage;
