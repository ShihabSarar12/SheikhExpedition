import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const AddBlog = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [formValues, setFormValues] = useState({
        BlogTitle: '',
        BlogContent: '',
        BlogImage: '',
        BlogPublishTime: '',
        BlogAuthor: '',
    });

    useEffect(() => {
        
        if (id) {
            fetchBlogDetails(id);
        }
    }, [id]);

    const fetchBlogDetails = async (blogId) => {
        try {
            const response = await fetch(`http://localhost:8080/blogs/${blogId}`);
            const blogData = await response.json();

            setFormValues({
                ...blogData,
                BlogPublishTime: blogData.BlogPublishTime.slice(0, 10),
            });
        } catch (error) {
            console.error('Error fetching blog details:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const image = file.name;
            setFormValues({
                ...formValues,
                BlogImage: image,
            });
            console.log(image);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const apiUrl = id ? `http://localhost:8080/blogs/${id}` : 'http://localhost:8080/blogs';
            const method = id ? 'PUT' : 'POST';

            const response = await fetch(apiUrl, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formValues),
            });
            console.log(formValues);

            if (response.ok) {
                const responseData = await response.json();
                console.log(responseData);
                navigate('/blogs');
            } else {
                console.error('Error adding/updating blog:', response.statusText);
            }
        } catch (error) {
            console.error('Error adding/updating blog:', error.message);
        }
    };


    return (
        <div className="container mx-auto p-8 max-w-2xl">
            <h1 className="text-3xl font-bold mb-4">Add Blog</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="BlogTitle" className="block text-sm font-medium text-gray-700">
                        Blog Title
                    </label>
                    <input
                        type="text"
                        id="BlogTitle"
                        name="BlogTitle"
                        value={formValues.BlogTitle}
                        onChange={handleInputChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    />
                </div>

                <div>
                    <label htmlFor="BlogContent" className="block text-sm font-medium text-gray-700">
                        Blog Content
                    </label>
                    <textarea
                        id="BlogContent"
                        name="BlogContent"
                        value={formValues.BlogContent}
                        onChange={handleInputChange}
                        rows="4"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    ></textarea>
                </div>

                <div>
                    <label htmlFor="BlogImage" className="block text-sm font-medium text-gray-700">
                        Blog Image
                    </label>
                    <input
                        type="file"
                        id="BlogImage"
                        name="BlogImage"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    />
                </div>

                <div>
                    <label htmlFor="BlogPublishTime" className="block text-sm font-medium text-gray-700">
                        Blog Publish Time
                    </label>
                    <input
                        type="date"
                        id="BlogPublishTime"
                        name="BlogPublishTime"
                        value={formValues.BlogPublishTime}
                        onChange={handleInputChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    />
                </div>

                <div>
                    <label htmlFor="BlogAuthor" className="block text-sm font-medium text-gray-700">
                        Blog Author
                    </label>
                    <input
                        type="text"
                        id="BlogAuthor"
                        name="BlogAuthor"
                        value={formValues.BlogAuthor}
                        onChange={handleInputChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    />
                </div>

                <div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddBlog;
