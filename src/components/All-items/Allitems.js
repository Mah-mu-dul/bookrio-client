import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Alitems.css'
const Allitems = () => {



    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('https://infinite-hamlet-19135.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])



    return (
        <div className=' w-100'>
            <h3>aveilable books : {books.length}</h3>
            <ul className='d-flex d-md-wrap mx- items flex-wrap  '>
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
        </div>
    );
};

export default Allitems;