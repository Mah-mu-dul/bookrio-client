import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const Allitems = () => {

    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div>
            <h3>aveilable books : {books.length}</h3>
            <ul>
                {
                    books.map(book => 
                    <div key={book._id} className="">

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={book.img} />
                            <Card.Body>
                                <Card.Title><h3>{book.name}</h3></Card.Title>
                                <Card.Title><h2>${book.price}</h2></Card.Title>
                                <Card.Text>
                                    {book.description?.slice(0, 55)}....
                                </Card.Text>
                                    <Card.Title><h3>quantity: {book.quantity}</h3></Card.Title>
                                    <Card.Title><h4>supplyer: {book.supplyer}</h4></Card.Title>
                                <Button variant="dark">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>)
                }
            </ul>
        </div>
    );
};

export default Allitems;