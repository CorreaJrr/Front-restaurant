import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../navbar/NavbarCustom.module.css';
import React from 'react';

function NavbarCustom() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand className='home' href="#home">
      <img
        src="/src/assets/images/Logo-Sabor-Argentino.png"
        width="100"
        height="100"
        className="d-inline-block align-top"
        alt="Logo Sabor Argentino"
      />
      </Navbar.Brand>
      <Nav className="">
        <Nav.Link className='navButton' href="#home">Home</Nav.Link>
        <Nav.Link className='navButton' href="#features">Reservar</Nav.Link>
        <Nav.Link className='navButton' href="#pricing">Galería</Nav.Link>
        <NavDropdown title="Ingresá" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Iniciar sesión</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Registrarte
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Sobre nosotros</NavDropdown.Item>
            </NavDropdown>
      </Nav>
    </Container>
  </Navbar>
  );
}

export default NavbarCustom;