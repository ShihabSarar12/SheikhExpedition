import React from 'react';
import { useLoaderData } from "react-router-dom";
import BlogItem from './BlogItem';

const Blogs = () => {
    const blogs = useLoaderData();
    // const [blogs, setBlogs] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('http://localhost:8080/blogs');
    //             const data = await response.json();
    //             setBlogs(data);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };
    //     //TODO working code but have to implement
    //     // const postData = async () =>{
    //     //   const response = await fetch(`http://localhost:8080/blogs`, {
    //     //     method: "POST",
    //     //     headers: {
    //     //       "Content-type": "application/json; charset=UTF-8"
    //     //     },
    //     //     body: JSON.stringify({
    //     //       BlogTitle: 'How to get into engineering?10156 alvi bc',
    //     //       BlogContent: 'Description goes here',
    //     //       BlogAuthor: 'Shihab Sarar'
    //     //     })
    //     //   });
    //     //   console.log(response);
    //     // }

    //     // postData();
    //     fetchData();
    // }, []);

    return (
        <div className="mx-auto p-4 ml-4">
            <h1 className="text-center text-3xl font-bold mb-4 ">Blogs Page</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {blogs.map(blog => (
                    <BlogItem key={blogs.id} blog={blog} />
                ))}
            </div>
        </div>
    );
};

export default Blogs;
