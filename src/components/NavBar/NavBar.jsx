import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { TbPokeball } from 'react-icons/tb';
import './Navbar.css'

function NavigationBar() {
  const setActiveClass = ({ isActive }) => (isActive ? "text-warning ms-3 text-decoration-none pokeball" : "text-white ms-3 text-decoration-none");
  return (
    
    <Navbar bg="danger" arial="wa" expand="lg" >
    <Container>
      <Navbar.Brand  className='mx-3'>
      <NavLink  to="/" >
        <img
          src={process.env.PUBLIC_URL + '/src/img/Navbar-logo.png'}
          width="190"
          height="50"
          className="d-inline-block align-top img-fluid"
          alt="Logo"
        />
          </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='mx-3'>
        <Nav className="ms-auto">
          <NavLink className={setActiveClass} to="/" >
          Home
          </NavLink>
          <NavLink className={setActiveClass} to="/pokemones">
          Pokemones
          </NavLink>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}


export default NavigationBar;