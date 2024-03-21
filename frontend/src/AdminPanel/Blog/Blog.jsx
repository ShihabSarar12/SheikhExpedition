import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import BlogItem from './BlogItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const Blogs = () => {
    const blogs = useLoaderData();

    if (!blogs) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="border-t-8 border-blue-500 border-solid animate-spin rounded-full h-16 w-16"></div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 md:p-8 lg:p-12">
            <h1 className="text-5xl font-extrabold mb-8 text-center">Blogs</h1>
            <div className="text-blue-500 text-2xl hover:text-blue-700 flex items-center mb-6">
                <FontAwesomeIcon icon={faPlusCircle} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {blogs.map(blog => (
                    <BlogItem
                        key={blog.BlogID}
                        blog={blog}
                        className="bg-white p-6 rounded-md shadow-md transition-transform transform hover:scale-105"
                    />
                ))}
            </div>
        </div>
    );
};

export default Blogs;
