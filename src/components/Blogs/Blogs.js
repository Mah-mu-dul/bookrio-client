import React, { useEffect, useState } from 'react';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div>
        
         <ul>
                {
                    blogs.map(blog => <li>{blog.name}</li>)
                }

         </ul>
            
        </div>
    );
};

export default Blogs;