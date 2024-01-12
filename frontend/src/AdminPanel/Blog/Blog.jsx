import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogItem from './BlogItem';

const Blogs = () => {
    const blogs = useLoaderData();
    
    if (!blogs) {
        return <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
        <div className="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-16 w-16"></div>
    </div>; 
    }
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-center text-3xl font-bold mb-4">Blogs Page</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {blogs.map((blog) => (
                    <BlogItem key={blog.BlogID} blog={blog} />
                ))}
            </div>
        </div>
    );
};

export default Blogs;
