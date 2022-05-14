import React, { useEffect, useState } from 'react';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('http://infinite-hamlet-19135.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className='w-100 mx-sm-auto '>
            <div className="d-lg-flex border border-1 rounded p-lg-4 p-sm-2 border-warning d-sm-block  justify-content-around m-lg-5 m-sm-3 ">
                <div className="w-90 mx-sm-auto m-3">
                    <h2>Java script</h2>
                    <ul>
                        <li>Javascript is a programming language that is used for writing scripts of website.</li>
                        <li>It is basically used on the client-side.</li>
                        <li>Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. </li>
                        <li>	Javascript is used in frontend development.</li>

                    </ul>


                </div>
                <div className="w-90 mx-sm-auto m-3">
                    <h2>Node js</h2>
                    <ul>
                        <li>NodeJS is a Javascript runtime environment.</li>
                        <li>It is mostly used on the server-side.</li>
                        <li>V8 is the Javascript engine inside of node.js that parses and runs Javascript. </li>
                        <li>Nodejs is used in server-side development.</li>
                    </ul>
                </div>
            </div>

            <div className="d-lg-flex border border-1 rounded p-lg-4 p-sm-2 border-warning d-sm-block  justify-content-around m-lg-5 m-sm-3 ">
                <div className="w-90 mx-sm-auto m-3">
                    <h2>Node js</h2>
                    <ul>
                        <li>Node js id  an asynchronous event-driven JavaScript runtime.</li>
                        <li>Node.js is designed to build scalable network applications.</li>
                        <li> Node.js takes the event model a bit further.</li>
                        <li>	HTTP is a first-class citizen in Node.js, designed with streaming and low latency in mind.</li>

                    </ul>


                </div>
                <div className="w-90 mx-sm-auto m-3">
                    <h2>Mongodb</h2>
                    <ul>
                        <li>mongodb is a nosql data base</li>
                        <li>MongoDB stores data in flexible, JSON-like documents.</li>
                        <li>MongoDB is a distributed database at its core, so high availability, horizontal scaling, and geographic distribution are built in and easy to use</li>
                        <li>We provide drivers for 10+ languages, and the community has built dozens more.</li>
                    </ul>
                </div>
            </div>
            <div className="d-lg-flex border border-1 rounded p-lg-4 p-sm-2 border-warning d-sm-block  justify-content-around m-lg-5 m-sm-3 ">
                <div className="w-90 mx-sm-auto m-3">
                    <h2>SQL</h2>
                    <ul>
                        <li>SQL databases are relational</li>
                        <li>SQL databases are vertically scalable,</li>
                        <li> SQL databases use structured query language and have a predefined schema.</li>
                        <li>SQL databases are better for multi-row transactions, </li>

                    </ul>


                </div>
                <div className="w-90 mx-sm-auto m-3">
                    <h2>No SQL</h2>
                    <ul>
                        <li>NoSQL databases are non-relational.</li>
                        <li>NoSQL databases are horizontally scalable.</li>
                        <li>NoSQL databases have dynamic schemas for unstructured data.</li>
                        <li>NoSQL is better for unstructured data like documents or JSON.</li>
                    </ul>
                </div>
            </div>

            <div style={{ width: '100%', height: '2px' }} className="bg-danger mb-5"></div>
            <h2 className="text-center text-danger">Blog section</h2>
            <ul className='container'>
                {
                    blogs.map(blog =>
                        <div>
                            <div className=' m-lg-5'>
                                <div className=" d-lg-flex m-1     border border-1 border-warning w-lg-75  w-sm-75 mx-auto m-lg-5  p-4 rounded-2   ">
                                    <div className="w-100">
                                        <img className='w-100' src={blog?.img} alt="" />
                                    </div>
                                    <div className="container mx-lg-4 p-lg-4 ">
                                        <header><h3 className=' text-danger'>{blog.name}</h3></header>
                                        <h4>Type of book: {blog.type}</h4>
                                        <div className="">
                                            <p>{blog.description}</p>
                                            <h5 >Review by : <span className="text-primary">{blog.bloger}</span></h5>
                                            <p>contact with  bloger: {blog.email}</p>

                                        </div>
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