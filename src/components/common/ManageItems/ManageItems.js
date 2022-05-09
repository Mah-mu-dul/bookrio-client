import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const ManageItems = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])


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
                })

        }

    }
    return (
        <div>
            <ul>
                {
                    <div className='items'>
                        {
                            books.map(book =>

                            <div key={book._id}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={book.img} />
                                    <Card.Body>
                                        <Card.Title>{book.name}</Card.Title>
                                        <h2>${book.price}</h2>
                                        <Card.Text>
                                            {book.description?.slice(0, 55)}....
                                        </Card.Text>
                                        <div className=" d-lg-flex d-sm-block">
                                                <Button variant="dark">details</Button>
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