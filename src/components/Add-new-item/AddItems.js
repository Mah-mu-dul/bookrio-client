import React from 'react';
import { Form,Button } from 'react-bootstrap';
import './AddItems.css'

const AddItems = () => {
    const handleAddItem = event =>{
        event.preventDefault()
    }
    return (
        <div className='code-pro'>
            <h2 className='m-4 text-center'>want to add something?</h2>
            <div className="imput-part container w-50 m-5 mx-auto">
                <Form onSubmit={handleAddItem}>
                    <Form.Group className="mb-3" controlId="">
                        <Form.Control type="text" placeholder="Image URL" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasictext">
                        <Form.Control type="text" placeholder="Product name" />
                    </Form.Group>
                
                    <Form.Group className="mb-3" controlId="formBasictext">
                        <Form.Control type="text" placeholder="Product supplyer" />
                    </Form.Group>
                
                    <Form.Group className="mb-3" controlId="formBasictext">
                        <Form.Control type="number" placeholder="Product Quantity" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasictext">
                        <Form.Control type="number" placeholder="Product price" />
                    </Form.Group>
                
                    <Form.Group className="mb-3" controlId="formBasictext">
                        <Form.Control type="email" placeholder="email" />
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