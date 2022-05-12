import React, { useEffect, useState } from 'react';
import { Button, Card, Carousel } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Alitems.css'
const Allitems = () => {



    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])



    return (
        <div className=' w-90'>
            <h3 className='text-danger text-center mt-5'>Our collections</h3>
            <ul className='d-flex d-md-wrap mx-auto items  flex-wrap  '>
                {
                    books.slice(0, 6).map(book =>
                        <div key={book._id} className=" ">

                            <Card className='mt-4 car' style={{ width: '20rem' }}>
                                <Card.Img className='Card mx-auto rounded' style={{ width: '16rem', height: '20rem' }} variant="top" src={book.img} />
                                <Card.Body>
                                    <Card.Title><h3>{book.name}</h3></Card.Title>
                                    <Card.Title><h2>${book.price}</h2></Card.Title>
                                    <Card.Text>
                                        {book.description?.slice(0, 55)}....
                                    </Card.Text>
                                    <Card.Title><h3>Available items : {book.quantity}</h3></Card.Title>
                                    <Card.Title><h4>supplyer: {book.supplyer}</h4></Card.Title>
                                    <Link to={`/book/${book._id}`}><Button variant="dark">details</Button></Link>
                                </Card.Body>
                            </Card>
                        </div>)
                }
            </ul>


            <div style={{ width: '100%', height: '2px' }} className="bg-danger mb-5"></div>



            {/* quots item */}



            <Carousel variant="dark container w-lg-75 my-5">
                <ul className='d-flex d-md-wrap mx-auto items  flex-wrap  '>
                    {
                        books.slice(0, 6).map(book =>
                            <div key={book._id} className=" ">

                                <Carousel.Item>
                                    <div className="quotes w-50 ">
                                        <h2>bookta</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat excepturi cum debitis amet, deleniti dolore eius repellendus reprehenderit accusantium doloribus dicta dolor, magni, sequi porro unde. Illum iure doloribus accusantium blanditiis a nobis, cupiditate fugit odio soluta eius nihil impedit vitae esse numquam minima atque recusandae fuga est voluptatibus tempora delectus tempore mollitia voluptatem? Nemo doloribus dolorum eum fuga laborum! Nemo ducimus ea commodi nobis, ex vel voluptas veritatis itaque! Provident tenetur sit tempora at odit possimus itaque labore molestiae quo sequi exercitationem voluptatibus qui explicabo omnis, nobis esse soluta porro dicta dolores vero. Sed a necessitatibus laudantium laborum dolore!</p>

                                    </div>
                                </Carousel.Item>
                            </div>)
                    }
                </ul>

            </Carousel>



        </div>
    );
};

export default Allitems;