import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './AddItems.css'

const AddItems = () => {
    const [user] = useAuthState(auth)
    const handleAddItem = event => {
        event.preventDefault()
        const name = event.target.name.value
        const img = event.target.imgurl.value
        let supplyer = event.target.supplyer.value
        const quantity = event.target.quantity.value
        const price = event.target.price.value
        let email = event.target.email.value
        const description = event.target.description.value
        if (!email || !supplyer) {
            email = user.email
            supplyer = user.displayName
        }

        const newBook = { name, img, supplyer, quantity, price, email, description }
        console.log(newBook);

        fetch('http://localhost:5000/books', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(newBook)

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
            <div className="imput-part container w-lg-50  w-sm-90  m-lg-5 mx-auto">
                <Form onSubmit={handleAddItem}>
                    <Form.Group className="mb-3" controlId="">
                        <Form.Control name='imgurl' type="text" required placeholder="Image URL" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasictext">
                        <Form.Control name='name' type="text" required placeholder="Product name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasictext">
                        <Form.Control required name='supplyer' type="text" placeholder="supplyer name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasictext">
                        <Form.Control name='quantity' type="number" required placeholder="Product Quantity" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasictext">
                        <Form.Control name='price' type="number" required placeholder="Product price" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasictext">
                        <Form.Control name='email' type="email" value={user.email} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasictext">
                        <textarea className='form-control' type="textarea" required placeholder='Description' name="description" id="" />
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