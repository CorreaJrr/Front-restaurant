import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavbarCustom.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

function NavbarCustom() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/adminpage">
          <img
          src="/src/assets/images/Logo-Sabor-Argentino.png"
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="Logo Sabor Argentino"
          />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
          <Link to='/'>
          <Nav.Link className='navButton text-dark fw-bold' href="#home">Home</Nav.Link>
          </Link>
          <Link to='/booking'>
        <Nav.Link className='navButton text-dark fw-bold' href="#features">Reservar</Nav.Link>
          </Link>
          <Link to='/gallery'> 
        <Nav.Link className='navButton text-dark fw-bold' href="#pricing">Galería</Nav.Link>
          </Link> 
            <NavDropdown title="Ingresá" id="basic-nav-dropdown">
              <Link to='/login'> 
              <NavDropdown.Item href="#action/3.1">Iniciar sesión</NavDropdown.Item>
              </Link>
              <Link to='/register'>
              <NavDropdown.Item href="#action/3.2">
                Registrarse
              </NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
              <Link to='/aboutus'>
              <NavDropdown.Item href="#action/3.4">
              Sobre Nosotros
              </NavDropdown.Item>
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCustom;