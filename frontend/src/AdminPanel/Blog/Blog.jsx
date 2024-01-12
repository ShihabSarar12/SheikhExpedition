import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import BlogItem from './BlogItem';
import { PlusCircle } from 'lucide-react';

const Blogs = () => {
    const blogs = useLoaderData();

    if (!blogs) {
        return (
            <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
                <div className="border-t-transparent border-solid animate-spin rounded-full border-blue-400 border-8 h-16 w-16"></div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 md:p-8 lg:p-12">
                <h1 className="text-5xl font-extrabold mb-8 text-center">Blogs</h1>
                <Link to="/add-blog" className="text-blue-500 text-2xl hover:text-blue-700 flex items-center pb-4">
                    <PlusCircle size={26} className=" text-center" />
                    Add Blog
                </Link>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {blogs.map((blog) => (
                    <BlogItem key={blog.BlogID} blog={blog} />
                ))}
            </div>
        </div>
    );
};

export default Blogs;
