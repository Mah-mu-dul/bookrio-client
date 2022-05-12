import React from 'react';
import { Nav } from 'react-bootstrap';
import { Facebook, Google, Instagram, Pinterest, Twitter } from 'react-bootstrap-icons';
import './Foooter.css'
import '../../../App.css'
import { FaSwatchbook } from "react-icons/fa";


const Foooter = () => {
    return (
        <div className='text-white w-100 bg-dark py-4 d-lg-flex justify-content-between App '>
            <div className="d-lg-flex d-md-flex justify-content-around container ">
                <div className=" m-4 my-sm-5">
                    <h2><FaSwatchbook className='me-2 text-danger' color="" size={40} />BOOKrio</h2>
                    <small className="cikna"> 1418 River Drive, Suite 35 <br />
                        Cottonhall, CA 9622</small>
                    <div className="icon cikna ">
                        <a className="text-decoration-none" target='_blank' href="https://www.facebook.com/mahmudulhasaniub/"><Facebook className='me-2 ' color="white" size={20} /></a>
                        <a className="text-decoration-none" target='_blank' href="https://twitter.com/?lang=en"><Twitter className='me-2' color="white" size={20} /></a>
                        <a className="text-decoration-none" target='_blank' href="https://www.instagram.com/mah.mu.dul_ha.san/?hl=en"><Instagram className='me-2' color="white" size={20} /></a>
                        <a className="text-decoration-none" target='_blank' href="https://www.pinterest.com/princehasan16216/_saved/">   <Pinterest className='me-2' color="white" size={20} /></a>
                    </div>

                </div>
                <div className="m-4 my-sm-5">
                    <h4 className='cikna fw-bold'>Need holp?</h4>
                    <h2 className='text-danger'>+880    157-1382-855</h2>
                    <p className="cikna">Monday – Friday: 9:00-20:00 <br />
                        Saturday: 11:00 – 15:00</p>
                    <h5 className="cikna">
                        BOOKrio@gmail.com</h5>
                </div>
            </div>
            <div className="d-lg-flex d-md-flex justify-content-around container">
                <div className="cikna  m-4 my-sm-5">
                    <h4 className='fw-bold'>Explore</h4>
                    <Nav.Link href="/Home"><h5 className='text-white '>Home</h5></Nav.Link>
                    <Nav.Link href="/about"><h5 className='text-white '>About</h5></Nav.Link>
                    <Nav.Link href="/contact"><h5 className='text-white '>Contact us</h5></Nav.Link>


                </div>
                <div className="cikna m-4 my-sm-5">
                    <h4 className='fw-bold'>Our Service</h4>
                    <Nav.Link href="/services"><h5 className='text-white '>services</h5></Nav.Link>
                </div>
                <div className="cikna m-4 my-sm-5">
                    <h4 className='fw-bold'>Categories</h4>
                    <h5>Story</h5>
                    <h5>Novel</h5>
                    <h5>Travel</h5>
                    <h5>Religion</h5>
                </div>
            </div>
        </div>
    );
};

export default Foooter;