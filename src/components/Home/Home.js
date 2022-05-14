import React from 'react';
import { Button, Carousel, Form } from 'react-bootstrap';
import Allitems from '../All-items/Allitems';
import './Home.css'


const Home = () => {
    const handleBlog = event => {
        event.preventDefault()
        const name = event.target.name.value
        const type = event.target.type.value
        const img = event.target.imgurl.value
        const bloger = event.target.supplyer.value
        const email = event.target.email.value
        const description = event.target.description.value
        const newBlog = { name, img, type, bloger, email, description }
        console.log(newBlog)

        fetch('http://infinite-hamlet-19135.herokuapp.com/blogs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(newBlog)

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
        <div>
            <div className="baner ">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-sm-"
                            src="https://img.freepik.com/free-photo/creative-composition-world-book-day_23-2148883765.jpg?t=st=1652073244~exp=1652073844~hmac=52a0056c0021d10a697b023175cb16e18bb51e75e349d349422dd1eca8dfd230&w=826"

                            alt="First slide"
                        />
                        <Carousel.Caption className=''>
                            <h3 className=''>Book store</h3>
                            <p className=''>best place for collect book for your library</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://img.freepik.com/free-photo/stack-books-library-desk_23-2147845946.jpg?w=826"
                            alt="Second slide"
                        />

                        <Carousel.Caption className=''>
                            <h3>Read online</h3>
                            <p>you can read online</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://img.freepik.com/free-photo/book-library-with-open-textbook_1150-5923.jpg?t=st=1652075021~exp=1652075621~hmac=9d0bb742040148e57b3174dee92b36c986b66c3c7baa08c62069de886dd9a975&w=996"
                            alt="Third slide"
                        />

                        <Carousel.Caption className=''>
                            <h3>Wanna buy only book?</h3>
                            <p>Send your hart using book</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="items start-0">
                <Allitems></Allitems>

            </div>



            {/* review item */}

            <div style={{ width: '100%', height: '2px' }} className="bg-danger mb-5"></div>

            <div className="blog my-5">
                <h2 className='text-center'>Write a review about a Book</h2>
                <div className="container ">
                    <Form onSubmit={handleBlog}>
                        <Form.Group className="mb-3" controlId="">
                            <Form.Control name='imgurl' type="text" placeholder="Image URL (optional)" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasictext">
                            <Form.Control name='name' type="text" required placeholder="Book name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasictext">
                            <Form.Control name='type' type="text" required placeholder="Book type" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasictext">
                            <Form.Control name='supplyer' type="text" required placeholder="Your name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasictext">
                            <Form.Control name='email' type="email" required placeholder=" your email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasictext">
                            <textarea className='form-control ' type="textarea" required placeholder='write your blog here' name="description" id="" />
                        </Form.Group>





                        <Button className='' variant="dark" type="submit">
                            submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Home;