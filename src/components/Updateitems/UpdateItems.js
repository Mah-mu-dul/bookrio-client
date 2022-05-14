import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const UpdateItems = () => {
    const { id } = useParams();
    const [book, setBoook] = useState({})
    console.log(book);
    useEffect(() => {
        const url = `https://infinite-hamlet-19135.herokuapp.com/book/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setBoook(data))


    }, [])
    const handleDelivar = event => {
        if (book.quantity > 0) {
            const quantity = book.quantity - 1
            const updateBook = { quantity }
            console.log(updateBook);

            const url = `https://infinite-hamlet-19135.herokuapp.com/book/${id}`
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



    }


    const handleUpdateItem = event => {
        // event.preventDefault()
        const quantity = event.target.quantity.value


        const updateBook = { quantity }
        console.log(updateBook);

        const url = `https://infinite-hamlet-19135.herokuapp.com/book/${id}`
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

        <div className='d-lg-flex d-sm-block m-lg-5 p-lg-5 p-sm-'>
            <div className=" container w-sm-100">
                <div className="d-flex container w-100">

                    <div style={{ width: '50vw' }} className='  w-100'><img style={{ width: '100%' }} className=' ' src={book.img} alt="" /></div>

                    <div className=" container w-75 m-lg-3">
                        <h2>Book Name: <span className='text-primary'>{book.name}</span></h2>
                        <h2>price : ${book.price}</h2>
                        <h2>Available items: {book.quantity}</h2>
                        {book.quantity == 0 && <h2 className='text-danger'> item sold</h2>}
                        <h3>Supplyer: {book.supplyer}</h3>
                        <h6>supplyer email: {book.email}</h6>
                    </div>
                </div>
                <p className='container w-80'><h5>Book details:</h5> {book.description}</p>



            </div>
            <div className="imput-part container w-50 m-5 mx-auto">

                <Form onSubmit={handleUpdateItem}>

                    <Form.Group className="mb-3" controlId="formBasictext">
                        <Form.Control min="0" required name='quantity' type="number" placeholder="Product Quantity" />
                    </Form.Group>
                    <Button variant="dark" type="submit">
                        update
                    </Button>

                </Form>
                <button onClick={handleDelivar} className='btn my-sm-3  btn-primary text-black fw-bold bg-white'>Delivared</button>


            </div>
        </div>

    );
};

export default UpdateItems;