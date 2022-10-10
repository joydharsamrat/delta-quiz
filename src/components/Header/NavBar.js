import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

export default function NavigationBar() {
    return (
        <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Brand className='fs-1 fw-bold text-white' href="/home">Delta Quiz</Navbar.Brand>
                <div className='nav-links'>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to="/home">Home</NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to="/statistics">Statistics</NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to="/blogs">Blogs</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    );
}

