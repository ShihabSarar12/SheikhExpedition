import { Pen, Trash } from 'lucide-react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const BlogDetails = () => {

    const blog = useLoaderData();
    const navigate=useNavigate('');

    const handleEdit = () => {
        const BlogID = blog.BlogID;
        navigate(`/update-blog/${BlogID}`);
    };

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:8080/blogs/${blog.BlogID}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                console.log('blog deleted successfully');
                navigate('/blogs');
            } else {
                console.error('Error deleting project:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting project:', error.message);
        }
    };

    if (!blog) {
        return (
            <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
                <div className="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-16 w-16"></div>
            </div>
        );
    }

    return (
        <div className="p-4 mx-auto my-auto">
              <div className="flex justify-end mb-4">
                <button className="mx-2" onClick={handleEdit}>
                    <Pen size={24} color="#4CAF50" />
                </button>
                <button className="mx-2" onClick={handleDelete}>
                    <Trash size={24} color="#F44336" />
                </button>
            </div>
            <h1 className="text-2xl font-bold mb-4">{blog.BlogTitle}</h1>
            <p className="mb-2">Content: {blog.BlogContent}</p>
            <p className="mb-2">Publish Date: {blog.BlogPublishTime}</p>
            <p>Author: {blog.BlogAuthor}</p>

            {blog.BlogImage && (
                <div className="mt-4">
                    <img src={blog.BlogImage} alt={blog.BlogTitle} style={{ maxWidth: '100%' }} />
                </div>
            )}
        </div>
    );
};

export default BlogDetails;
