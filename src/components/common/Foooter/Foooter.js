import React from 'react';
import { Nav } from 'react-bootstrap';
import { Facebook, Google, Instagram, Pinterest, Twitter } from 'react-bootstrap-icons';
import './Foooter.css'
import '../../../App.css'
import {  FaSwatchbook } from "react-icons/fa"; 


const Foooter = () => {
    return (
        <div className='text-white bg-dark d-lg-flex justify-content-between App '>
            <div className="d-lg-flex justify-content-around container ">
                <div className=" m-4 my-sm-5">
                    <h3><FaSwatchbook className='me-2 text-danger' color="" size={28} />BOOKory</h3>
                    <small className="cikna"> 1418 River Drive, Suite 35 <br />
                        Cottonhall, CA 9622</small>
                    <div className="icon cikna">
                        <Facebook className='me-2 ' color="white" size={20} />
                        <Twitter className='me-2' color="white" size={20} />
                        <Instagram className='me-2' color="white" size={20} />
                        <Pinterest className='me-2' color="white" size={20} />
                    </div>

                </div>
                <div className="m-4 my-sm-5">
                    <h4 className='cikna'>Need holp?</h4>
                    <h2 className='text-danger'>+880    157-1382-855</h2>
                    <p className="cikna">Monday – Friday: 9:00-20:00 <br />
                        Saturday: 11:00 – 15:00</p>
                    <h5 className="cikna">
                        bookory@gmail.com</h5>
                </div>
            </div>
            <div className="d-lg-flex justify-content-around container">
                <div className="cikna  m-4 my-sm-5">
                    <h4>Explore</h4>
                    <Nav.Link href="/Home"><h5 className='text-white '>Home</h5></Nav.Link>
                    <Nav.Link href="/about"><h5 className='text-white '>About</h5></Nav.Link>
                    <Nav.Link href="/contact"><h5 className='text-white '>Contact us</h5></Nav.Link>

                  
                </div>
                <div className="cikna m-4 my-sm-5">
                    <h4>Our Service</h4>
                    <Nav.Link href="/services"><h5 className='text-white '>services</h5></Nav.Link>

                </div>
                <div className="cikna m-4 my-sm-5">
                    <h4>Categories</h4>
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