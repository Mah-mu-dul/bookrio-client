import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './MyItems.css'
import Loading from '../common/Loading/Loading'
import { AiFillDelete } from "react-icons/ai";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Windows } from 'react-bootstrap-icons';




const MyItems = () => {
    const [books, setBooks] = useState([])


    const [myboooks, setMyBooks] = useState([])
    const [user, loading] = useAuthState(auth)

    useEffect(() => {


        fetch('https://infinite-hamlet-19135.herokuapp.com/books')
            .then(res => res.json())
            .then(data => {
                const remaining = data.filter(book => book.email === user.email)
                setMyBooks(remaining)
                setBooks(data)
            })

    }, [user])


    if (loading) {
        return <Loading></Loading>
    }

    const handleBookDelete = async (id) => {
        const proceed = window.confirm(`Are you sure to delete ${id} item`)
        if (proceed) {
            console.log('deleted', id);
            const url = `https://infinite-hamlet-19135.herokuapp.com/books/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    toast('Item deleted')
                    const remaining = books.filter(book => book._id !== id)
                    setBooks(remaining)
                    Windows.location.reload()
                })

        }

    }
    return (
        <div>
            <ul>
                {
                    <div className='w-100'>
                        <table>
                            <tr>
                                <th className='text-center'>Image</th>
                                <th>Book name</th>
                                <th>price</th>
                                <th>Avoilable quantity</th>
                                <th>Delete </th>

                            </tr>

                            {
                                myboooks.map(book =>
                                    <tr key={book._id}>
                                        <td className='d-flex rounded-3 justify-content-center' ><img style={{ width: '50px', height: '50px' }} className=' rounded-circle' src={book.img} alt="Book image" /></td>
                                        <td >{book.name}</td>
                                        <td >{book.price}</td>
                                        <td >{book.quantity}</td>
                                        <td className='text-center text-danger'><h2>< button className='btn btn-danger' onClick={() => handleBookDelete(book._id)}><AiFillDelete></AiFillDelete></button>
                                        </h2></td>

                                    </tr>


                                )}
                        </table>
                    </div>
                }
                <ToastContainer></ToastContainer>
            </ul>
        </div>
    );
};

export default MyItems;