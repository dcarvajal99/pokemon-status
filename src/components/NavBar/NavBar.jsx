import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    
    <Navbar bg="danger" arial="wa" expand="lg" >
    <Container>
      <Navbar.Brand  className='mx-3'>
      <Link to="/" >
        <img
          src={process.env.PUBLIC_URL + '/src/img/Navbar-logo.png'}
          width="190"
          height="50"
          className="d-inline-block align-top"
          alt="Logo"
        />
          </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='mx-3'>
        <Nav className="ms-auto">
          <Link to="/" className="text-white ms-3 text-decoration-none">
            Home
          </Link>
          <Link to="/pokemones" className="text-white ms-3 text-decoration-none">
            Pokemones
          </Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}


export default NavigationBar;