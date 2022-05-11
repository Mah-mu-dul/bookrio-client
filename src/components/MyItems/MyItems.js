import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './MyItems.css'
import Loading from '../common/Loading/Loading'



const MyItems = () => {
    const [books, setBooks] = useState([])
    const [myboooks, setMyBooks] = useState([])

    const [user, loading] = useAuthState(auth)

    // console.log(user.email)

    // console.log(user.email)
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