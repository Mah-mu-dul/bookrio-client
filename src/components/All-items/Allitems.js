import React, { useEffect, useState } from 'react';
import { Button, Card, Carousel } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Alitems.css'
const Allitems = () => {



    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('https://infinite-hamlet-19135.herokuapp.com/ books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])



    return (
        <div className=' w-90'>
            <h3 className='text-danger text-center mt-5'>Our collections</h3>
            <ul className='d-flex d-md-wrap mx-auto items  flex-wrap  '>
                {
                    books.slice(0, 6).map(book =>
                        <div key={book._id} className=" ">

                            <Card className='mt-4 car' style={{ width: '20rem' }}>
                                <Card.Img className='Card mx-auto rounded' style={{ width: '16rem', height: '20rem' }} variant="top" src={book.img} />
                                <Card.Body>
                                    <Card.Title><h3>{book.name}</h3></Card.Title>
                                    <Card.Title><h2>${book.price}</h2></Card.Title>
                                    <Card.Text>
                                        {book.description?.slice(0, 55)}....
                                    </Card.Text>
                                    <Card.Title><h3>Available items : {book.quantity}</h3></Card.Title>
                                    <Card.Title><h4>supplyer: {book.supplyer}</h4></Card.Title>
                                    <Link to={`/book/${book._id}`}><Button variant="dark">details</Button></Link>
                                </Card.Body>
                            </Card>
                        </div>)
                }
            </ul>


            <div style={{ width: '100%', height: '2px' }} className="bg-danger mb-5"></div>



            {/* quots item */}



            <section className='container'>
                <h1 className='text-center text-danger'><span>"</span> Quotes <span>"</span> </h1>
                <h3>“A reader lives a thousand lives before he dies . . . The man who never reads lives only one.”</h3>
                <h5 className='text-end'>- George R.R. Martin</h5>
                
            </section>







        </div>
    );
};

export default Allitems;