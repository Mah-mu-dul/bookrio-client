import React, { useEffect, useState } from 'react';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('https://infinite-hamlet-19135.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div>

            <ul>
                {
                    blogs.map(blog => <div>
                        <div className='container m-lg-5'>
                            <div className="container d-lg-flex border border-1 border-warning w-lg-75  w-sm-90 mx-auto m-lg-5  p-4 rounded-2   ">
                                <div className="">
                                    <img className='w-100' src={blog?.img} alt="" />

                                </div>
                                <div className=" mx-lg-4 p-lg-4 ">
                                    <header><h3 className='t text-danger'>{blog.name}</h3></header>
                                    <h4>Type of book: {blog.type}</h4>

                                    <p>{blog.description}</p>
                                    <h5 >Review by : <span className="text-primary">{blog.bloger}</span></h5>
                                    <p>contact with  bloger: {blog.email}</p>

                                </div>
                            </div>
                        </div>
                    </div>)
                }

            </ul>

        </div>
    );
};

export default Blogs;