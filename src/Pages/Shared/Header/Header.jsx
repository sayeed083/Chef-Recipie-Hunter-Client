/* eslint-disable no-unused-vars */
import React from 'react';
import { useContext } from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Header = () => {
    const{ user, logOut} = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
        .then()
        .catch(error => console.log(error));
    }
    return (
        <div>

            {/* NavSection  */}


            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <img className='rounded-circle me-2' style={{ height: 50 }} src="/public/cooking.png" alt="" />
                    <Navbar.Brand> <Link className='text-decoration-none text-warning me-3' to="/">Chef's Customer</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                                <Link className='text-decoration-none text-warning me-3' to="/">Home</Link>
                            
                                <Link className='text-decoration-none text-warning' to="/blogs">Blog</Link>
                           
                        </Nav>
                        <Nav>
                            
                            { user && <Nav.Link href="#deets">{user.displayName}Sayeed</Nav.Link>}


                            
                                { user ?
                                    <Button onClick={handleLogOut} variant="outline-warning">Log Out</Button> :
                                    <Link to="/login">
                                        <Button variant="outline-warning">Log In</Button>
                                    </Link>
                                    
                                    }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;