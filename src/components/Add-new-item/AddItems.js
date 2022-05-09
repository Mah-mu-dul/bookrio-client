import React from 'react';
import { Form,Button } from 'react-bootstrap';
import './AddItems.css'

const AddItems = () => {
    const handleAddItem = event =>{
        event.preventDefault()
        const name = event.target.name.value
        const img = event.target.imgurl.value
        const supplyer = event.target.supplyer.value
        const quantity = event.target.quantity.value
        const price = event.target.price.value
        const email = event.target.email.value

        const newBook = {name, img, supplyer, quantity, price, email}
        console.log(newBook);

        fetch('http://localhost:5000/books',{
            method:'POST',
            headers: {
                'content-type': 'application/json'

            },
            body : JSON.stringify(newBook)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            alert('item  added sucess fully ')
            event.target.reset()
        }
        )
       

    }
    return (
        <div className='code-pro'>
            <h2 className='m-4 text-center'>want to add something?</h2>
            <div className="imput-part container w-50 m-5 mx-auto">
                <Form onSubmit={handleAddItem}>
                    <Form.Group className="mb-3" controlId="">
                        <Form.Control name='imgurl' type="text" placeholder="Image URL" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasictext">
                        <Form.Control name='name' type="text" placeholder="Product name" />
                    </Form.Group>
                
                    <Form.Group className="mb-3" controlId="formBasictext">
                        <Form.Control name='supplyer' type="text" placeholder="Product supplyer" />
                    </Form.Group>
                
                    <Form.Group className="mb-3" controlId="formBasictext">
                        <Form.Control name='quantity' type="number" placeholder="Product Quantity" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasictext">
                        <Form.Control name='price' type="number" placeholder="Product price" />
                    </Form.Group>
                
                    <Form.Group className="mb-3" controlId="formBasictext">
                        <Form.Control name='email' type="email" placeholder="email" />
                    </Form.Group>
                


                    
                    <Button variant="dark" type="submit">
                        Add item
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default AddItems;