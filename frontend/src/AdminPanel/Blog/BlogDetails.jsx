import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import img from '../assests/zoro.jpeg'

const BlogDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlogDetails = async () => {
            try {
                const response = await fetch(`http://localhost:8080/blogs/${id}`);
                const data = await response.json();
                setBlog(data);
            } catch (error) {
                console.error('Error fetching blog details:', error);
            }
        };

        fetchBlogDetails();
    }, [id]);

    if (!blog) {
        return (
            <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
                <div className="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-16 w-16"></div>
            </div>
        );
    }
    const imagePath = `../assets/${blog.BlogImage}`;
    console.log(imagePath)

    return (
        <div className="p-4 mx-auto my-auto">
            <h1 className="text-2xl font-bold mb-4">{blog.BlogTitle}</h1>
            <p className="mb-2">Content: {blog.BlogContent}</p>
            <p className="mb-2">Publish Date: {blog.BlogPublishTime}</p>
            <p>Author: {blog.BlogAuthor}</p>

            {blog.BlogImage && (
                <div className="mt-4">
                    <img src={imagePath} alt={blog.BlogTitle} style={{ maxWidth: '100%' }} />
                </div>
            )}
        </div>
    );
};

export default BlogDetails;
