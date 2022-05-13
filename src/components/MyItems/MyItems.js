import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './MyItems.css'
import Loading from '../common/Loading/Loading'
import { AiFillDelete } from "react-icons/ai";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TypeH3, Windows } from 'react-bootstrap-icons';
import axios from 'axios'




const MyItems = () => {
    const [books, setBooks] = useState([])
    const [mybooks, setMyBooks] = useState([])
    const [user, loading] = useAuthState(auth)

    useEffect(() => {
        const getItem = async (user) => {
            const email = user.email
            console.log(email);

            const url = `https://infinite-hamlet-19135.herokuapp.com/ books/${email}`
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            console.log(data);
            setMyBooks(data)
        }
        getItem(user)

    }, [user])
    console.log(mybooks);

    if (loading) { return <Loading></Loading> }


    const handleBookDelete = async (id) => {
        const proceed = window.confirm(`Are you sure to delete ${id} item`)
        if (proceed) {
            const url = `https://infinite-hamlet-19135.herokuapp.com/ books/${id}`
            fetch(url, {
                method: 'DELETE'
                , body: user.email
            })
                .then(res => res.json())
                .then(data => {
                    toast('Item deleted')
                    const remaining = books.filter(book => book._id !== id)

                    // console.log(remaining);

                    setMyBooks(remaining)
                    Windows.location.reload()
                })

        }


    }
    return (
        <div>
            <ul className='p-0 px-lg-5 py-lg-3'>
                {
                    <div className='w-100'>
                        <table>
                            <tr>
                                <th className='text-center'>Image</th>
                                <th>Book name</th>
                                <th>email</th>
                                <th>price</th>
                                <th>Avoilable quantity</th>
                                <th>Delete </th>

                            </tr>

                            {
                                mybooks.map(book =>
                                    <tr key={book._id}>
                                        <td className='d-flex rounded-3 justify-content-center' ><img style={{ width: '50px', height: '50px' }} className=' rounded-circle' src={book.img} alt="Book image" /></td>
                                        <td >{book.name}</td>
                                        <td >{book.email}</td>
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