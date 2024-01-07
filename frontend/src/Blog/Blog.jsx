import React from "react";
import BlogItem from "./BlogItem"; 

const Blogs = () => {
  const blogs = require('../Others/blog.json');

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blogs Page</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {blogs.map((blog, index) => (
          <BlogItem key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
