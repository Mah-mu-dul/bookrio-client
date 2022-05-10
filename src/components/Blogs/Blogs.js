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
                    blogs.map(blog => <div>
                        <div className='container m-5'>
                            <div className="container border border-1 border-warning w-lg-75  w-sm-90 mx-auto m-5  p-4 rounded-2   ">
                                <img src={blog?.img} alt="" />
                                <header><h3 className='t text-danger'>{blog.name}</h3></header>
                                <h4>Type of book: {blog.type}</h4>
                                
                                <p>{blog.description}</p>
                                <h5 className="text-primary">{blog.bloger}</h5>
                                <p>contact with  bloger: {blog.email}</p>

                            </div>
                        </div>
                    </div>)
                }

         </ul>
            
        </div>
    );
};

export default Blogs;