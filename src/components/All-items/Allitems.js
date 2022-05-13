import React, { useEffect, useState } from 'react';
import { Button, Card, Carousel } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Alitems.css'
const Allitems = () => {



    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/books')
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



                            <Carousel variant="dark container w-lg-75 my-5">
                                <Carousel.Item>
                                    <h1>kicu ekta</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro aliquam corporis. Veniam cumque ab dolorem aspernatur fugiat nisi, dolor inventore temporibus vero repudiandae rerum harum quibusdam id itaque error nostrum, eveniet quasi, voluptas quos officiis illum veritatis? Molestiae nihil facilis dolor dolorum provident voluptatem assumenda iusto, obcaecati amet culpa alias voluptas autem porro eveniet quod quibusdam deserunt reprehenderit vel distinctio? Dignissimos modi in non repudiandae expedita eligendi, sapiente accusamus, rem maiores et accusantium earum ad sit praesentium, soluta maxime facilis aliquam reprehenderit? Animi, dolorem inventore hic consequuntur rerum temporibus. Minima sit odit maiores atque, et magnam in quos quas consequatur blanditiis ut? Quia perferendis aliquam omnis officiis? Doloremque, explicabo hic architecto rem ipsa illo aliquid ullam cum consequatur ipsam et, quasi commodi! Possimus laudantium sapiente, incidunt id qui debitis consectetur quasi voluptas, quibusdam illum doloribus pariatur facilis aperiam. Voluptate, perspiciatis? Perferendis ipsum optio inventore possimus omnis velit ut, aspernatur, earum in amet veritatis! Atque nihil, dicta fuga, eveniet non iste dolore impedit molestias at consequatur totam voluptatem odit ipsam enim porro quidem repellat nesciunt aspernatur sunt, obcaecati aperiam et! Voluptas reprehenderit ipsum eligendi, laboriosam earum a sapiente minima perferendis. Numquam corrupti vero temporibus quas, quo voluptatibus molestiae accusantium voluptate?</p>
                                </Carousel.Item>
                            </Carousel>
          
     





        </div>
    );
};

export default Allitems;