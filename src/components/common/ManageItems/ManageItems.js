import React, { useEffect, useState } from 'react';
import { Button, Card, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './manageitems.css'

const ManageItems = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    const navigate = useNavigate()

    const handleBookDelete = id => {
        const proceed = window.confirm(`Are you sure to delete ${id} item`)
        if (proceed) {
            console.log('deleted', id);
            const url = `http://localhost:5000/books/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = books.filter(book => book._id !== id)
                    setBooks(remaining)
                })

        }

    }
  
    return (
        <div>
            <ul>
                {
                    <div className='d-flex mx-auto items flex-wrap'>
                        {
                            books.map(book =>

                            <div key={book._id} className="">
                                <Card style={{ width: '25rem' }}>
                                        <Card.Img style={{ width: '25rem', height: '30rem' }}  variant="top" src={book.img} />
                                    <Card.Body>
                                        <Card.Title>{book.name}</Card.Title>
                                        <h2>${book.price}</h2>
                                        <h2>Avlilable: {book.quantity}</h2>
                                        <Card.Text>
                                            {book.description?.slice(0, 55)}....
                                        </Card.Text>
                                        <div className=" d-lg-flex d-sm-block">
                                                <Link to={`/book/${book._id}`}><Button variant="dark">details</Button></Link>
                                                < button className='btn btn-danger' onClick={() => handleBookDelete(book._id)}>Delete item</button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>)
                        }
                    </div>
                }
            </ul>


        </div>
    );
};

export default ManageItems;