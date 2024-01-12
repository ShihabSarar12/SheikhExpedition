import React from 'react';
import { Link } from 'react-router-dom';

const BlogItem = ({ blog, className }) => {
    return (
        <div className={`bg-white p-6 rounded-md shadow-md flex flex-col justify-between ${className}`}>
            <div>
                <h2 className="text-2xl font-bold mb-2">{blog.BlogTitle}</h2>
                <p className="text-sm text-gray-700">Author: {blog.BlogAuthor}</p>
            </div>
            <div className="mt-auto">
                <Link to={`/blogs/${blog.BlogID}`} className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default BlogItem;
