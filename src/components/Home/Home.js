import React from 'react';
import { Carousel } from 'react-bootstrap';
import Allitems from '../All-items/Allitems';
import './Home.css'


const Home = () => {
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
            <div className="items">
                <Allitems></Allitems>

            </div>
        </div>
    );
};

export default Home;