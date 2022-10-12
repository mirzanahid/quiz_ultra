import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink, useLocation, useParams } from 'react-router-dom';
import logo from '../Images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './Header.css';

const Header = () => {
  let location = useLocation();
  let { topicid } = useParams();

  return (
    <Navbar className='quiz-navbar' expand="lg">
      <Container>
        <Navbar.Brand > <Link to={'/'} className='logo'> <img className='logo-icon' src={logo} alt="" /> Quiz Ultra</Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"><FontAwesomeIcon className='bar-icon' icon={faBars}></FontAwesomeIcon></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className={({ isActive }) => isActive ? 'active' : `${(location.pathname === `/topics/${topicid}`) ? 'active' : ''}`} to={'/'} end>TOPICS</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to={'/statistics'} >STATISTICS</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to={'/blog'} >BLOG</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;


