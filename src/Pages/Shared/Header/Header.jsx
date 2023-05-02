/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>

            {/* NavSection  */}


            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <img className='rounded-circle me-2' style={{ height: 50 }} src="/public/cooking.png" alt="" />
                    <Navbar.Brand href="#home">Chef's Customer</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features">
                                <Link className='text-decoration-none text-warning' to="/">Home</Link>
                            </Nav.Link>
                            <Nav.Link href="#pricing">
                                <Link className='text-decoration-none text-warning' to="/blogs">Blog</Link>
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button variant="outline-warning">Log In</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;