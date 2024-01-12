import React from 'react';
import { Link } from 'react-router-dom';

const BlogItem = ({ blog }) => {
    return (
        <div className="bg-white p-6 rounded-md shadow-md relative">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">{blog.BlogTitle}</h2>
            </div>
            <p>Author: {blog.BlogAuthor}</p>

            <Link to={`/blogs/${blog.BlogID}`}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded">
                    See More
                </button>
            </Link>
        </div>
    );
};

export default BlogItem;
