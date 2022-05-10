import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const UpdateItems = () => {
    const { id } = useParams();
    const [book, setBoook] = useState({})
    console.log(book);
    useEffect(() => {
        const url = `http://localhost:5000/book/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setBoook(data))


    }, [])
    const handleDelivar =event =>{
        const quantity = book.quantity -1
        const updateBook = { quantity }
        console.log(updateBook);

        const url = `http://localhost:5000/book/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(updateBook)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert('item  dalivared ')
                window.location.reload()

            })

    }
   

    const handleUpdateItem = event => {
        // event.preventDefault()
        const quantity = event.target.quantity.value


        const updateBook = { quantity }
        console.log(updateBook);

        const url = `http://localhost:5000/book/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(updateBook)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert('item  quantity updated ')

                event.target.reset()
            })

    }
    return (

        <div className='d-lg-flex d-sm-block m-5 p-5 '>
            <div className=" container">
                <img className='w' src={book.img} alt="" />
                <h2>Book Name: {book.name}</h2>
                <h2>price : {book.price}</h2>
                <h2>Available items: {book.quantity}</h2>
                <button onClick={handleDelivar} className='btn btn-primary text-black fw-bold bg-white'>Delivared</button>

            </div>
            <div className="imput-part container w-50 m-5 mx-auto">
                <Form onSubmit={handleUpdateItem}>

                    <Form.Group className="mb-3" controlId="formBasictext">
                        <Form.Control required name='quantity' type="number" placeholder="Product Quantity" />
                    </Form.Group>
                    <Button variant="dark" type="submit">
                        update
                    </Button>
                </Form>
            </div>
        </div>

    );
};

export default UpdateItems;