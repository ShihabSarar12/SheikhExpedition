import React, { useState } from 'react';
import BlogModal from './BlogModal';

const BlogItem = ({ blog, onEdit, onDelete }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="bg-white p-6 rounded-md shadow-md relative">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">{blog.BlogTitle}</h2>
            </div>
            <p className="mb-2">Content: {blog.BlogContent}</p>
            <p className="mb-2">Publish Date: {blog.BlogPublishTime}</p>
            <p>Author: {blog.BlogAuthor}</p>

            {modalOpen && (
                <BlogModal isOpen={modalOpen} onClose={closeModal}>
                    <h1 className="text-2xl font-bold mb-4">
                        {blog.BlogTitle}
                    </h1>
                    <p className="mb-2">Content: {blog.BlogContent}</p>
                    <p className="mb-2">Publish Date: {blog.BlogPublishTime}</p>
                    <p>Author: {blog.BlogAuthor}</p>
                </BlogModal>
            )}

            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded"
                onClick={openModal}
            >
                See More
            </button>
        </div>
    );
};

export default BlogItem;
