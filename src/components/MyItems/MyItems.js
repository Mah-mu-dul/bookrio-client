import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './MyItems.css'



const MyItems = () => {
    const [books, setBooks] = useState([])
    const [myboooks, setMyBooks] = useState([])

    const [user] = useAuthState(auth)
    const email = user.email
    console.log(email)
    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => setBooks(data))
        const remaining = books.filter(book => book.email === email)
        console.log(remaining)
        setMyBooks(remaining)


    }, [])
    return (
        <div>
            <ul>
                {
                    <div className=' container mx-auto items flex-wrap'>
                        <table>
                            <tr>
                                <th className='text-center'>Image</th>
                                <th>Book name</th>
                                <th>email </th>
                                <th>price</th>
                                <th>Avoilable quantity</th>
                            </tr>

                            {
                                myboooks.map(book =>


                                    <tr key={book._id}>
                                        <td className='d-flex rounded-3 justify-content-center' ><img style={{ width: '50px', height: '50px' }} className=' rounded-circle' src={book.img} alt="Book image" /></td>
                                        <td >{book.name}</td>
                                        <td >{book.email}</td>
                                        <td >{book.price}</td>
                                        <td >{book.quantity}</td>
                                    </tr>


                                )}





                        </table>
                    </div>
                }
            </ul>
        </div>
    );
};

export default MyItems;