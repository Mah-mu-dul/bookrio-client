import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import './manageitems.css'

const ManageItems = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('https://infinite-hamlet-19135.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    const navigate = useNavigate()

    const handleBookDelete = async (id) => {
        const proceed = window.confirm(`Are you sure to delete ${id} item`)
        if (proceed) {
            console.log('deleted', id);
            const url = `https://infinite-hamlet-19135.herokuapp.com/books/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    toast('Item deleted')
                    const remaining = books.filter(book => book._id !== id)
                    setBooks(remaining)
                })

        }

    }

    return (
        <div>
            <Link className='d-flex  justify-content-center m-5' to={`/additems`}><Button className='text-decoration-none' variant="dark">Want to add a New book?</Button></Link>

            <ul className='d-flex d-md-wrap mx-auto items  flex-wrap  '>
                {
                    books.map(book =>
                        <div key={book._id} className=" ">

                            <Card className='mt-4 car' style={{ width: '20rem' }}>
                                <Card.Img className='Card mx-auto rounded' style={{ width: '16rem', height: '20rem' }} variant="top" src={book.img} />
                                <Card.Body>
                                    <Card.Title><h3>{book.name}</h3></Card.Title>
                                    <Card.Title><h2>${book.price}</h2></Card.Title>
                                    <Card.Text>
                                        {book.description.slice(0,300)}.......
                                    </Card.Text>
                                    <Card.Title><h3>Available items : {book.quantity}</h3></Card.Title>
                                    <Card.Title><h4>supplyer: {book.supplyer}</h4></Card.Title>
                                    <Link to={`/book/${book._id}`}><Button variant="dark">details</Button></Link>
                                    < button className='btn btn-danger' onClick={() => handleBookDelete(book._id)}>Delete item</button>

                                </Card.Body>
                            </Card>
                        </div>)
                }
            </ul>


        </div>
    );
};

export default ManageItems;