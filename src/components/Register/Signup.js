import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Signup.css'


import { Link, useHref, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialSignup from './SocialSignup';
const Signup = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});


    const nameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()

    const navigateLogin = () => {

        navigate('/login')

    }
    const navigatehome = () => {

        navigate('/home')

    }

    const handleSubmit = event => {
        event.preventDefault()
        const name = nameRef.current.value
        const email = emailRef.current.value
        const password = passwordRef.current.value
        createUserWithEmailAndPassword(email, password)
        navigatehome()
    }

    return (
        <div className="body m-5">
            <div className=' register   mx-auto mt-5'>
                <div className="text-center"> <h2>Register first</h2></div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Your name</Form.Label>
                        <Form.Control ref={nameRef} type="text" placeholder="your name" required />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
                <div className="orHolder">
                    <div className='or'></div>
                    <p className='mx-2'>or</p>
                    <div className='or'></div>
                </div>
                <SocialSignup></SocialSignup>
                <p className="text-end">Already have an account? <Link to={'/login'} className="text-danger text-decoration-none" onClick={navigateLogin}>Login</Link></p>

            </div>
            
        </div>
    )
};

export default Signup;