import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';

import './Header.css'

const Header = () => {
    return (
        <div>
      <Navbar className='quiz-navbar' expand="lg">
      <Container>
        <Navbar.Brand > <Link to={'/'} className='logo'>Quiz Ultra</Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className={({isActive}) =>  isActive ? 'active': undefined} to={'/'} >TOPICS</NavLink>
            <NavLink className={({isActive}) => isActive ? 'active': undefined}  to={'/statistics'} >STATISTICS</NavLink>
            <NavLink className={({isActive}) => isActive ? 'active': undefined} to={'/blog'} >BLOG</NavLink>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;


