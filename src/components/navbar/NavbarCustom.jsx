import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavbarCustom.module.css';
import React from 'react';

function NavbarCustom() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
        <img
          src="/src/assets/images/Logo-Sabor-Argentino.png"
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="Logo Sabor Argentino"
        />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
          <Nav.Link className='navButton text-dark fw-bold' href="#home">Home</Nav.Link>
        <Nav.Link className='navButton text-dark fw-bold' href="#features">Reservar</Nav.Link>
        <Nav.Link className='navButton text-dark fw-bold' href="#pricing">Galería</Nav.Link>
            <NavDropdown title="Ingresá" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Iniciar sesión</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Registrarse
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              Sobre nosotros
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCustom;
