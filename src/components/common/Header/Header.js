import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaAcquisitionsIncorporated, FaSwatchbook } from "react-icons/fa";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Header.css'
import '../../Add-new-item/AddItems.css'
const Header = () => {
    const [user] = useAuthState(auth)

    const handleSignout = () => {
        signOut(auth)
    }
    return (
        <div className="text-black">
            <Navbar bg=" nav fixed-top" expand="lg code-pro">
                <Container>
                    <Navbar.Brand href="/"><h3 className='mx-auto supermar'><FaSwatchbook className='text-danger me-2' color="black" size={20} />BOOKrio</h3></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav ">
                        <Nav className="mx-auto  me-auto ">
                            <div className="d-lg-flex me-lg-5">
                                <Nav.Link href="/home"><h4>Home</h4></Nav.Link>
                                {
                                    user ? <>
                                        <Nav.Link href="/manageitems"><h4>Manage-Items</h4></Nav.Link>
                                        <Nav.Link href="/additems"><h4>Add-Items</h4></Nav.Link>
                                        <Nav.Link href="/myitems"><h4>My-Items</h4></Nav.Link></>
                                        :
                                        <></>
                                }
                                <Nav.Link href="/about"><h4>About</h4></Nav.Link>
                                <Nav.Link href="/blogs"><h4>Blogs</h4></Nav.Link>

                            </div>
                            <div className="d-lg-flex ms-lg-5 ">
                                {
                                    user ?
                                        <button onClick={handleSignout} className='btn  box-none'><h4>signout</h4></button>

                                        :
                                        <Nav.Link href="/login"><h4>Login</h4></Nav.Link>
                                }
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className='mt'>.</div>

        </div>
    );
};

export default Header;