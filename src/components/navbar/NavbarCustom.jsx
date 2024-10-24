import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {subItem1} from './NavbarCustom.module.css';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoNav from '../../../public/images/Logo-Sabor-Argentino.png'
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';


function NavbarCustom() {
  const userAvt = localStorage.getItem('userAvatar')
  const userRole = localStorage.getItem('userRole')
  const navigate = useNavigate()

  function logout(){
    Swal.fire({
      titleText: 'Quieres cerrar sesion?',
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
      showCancelButton: true
    }).then(response => {
      if (response.isConfirmed) {
        localStorage.removeItem('token');
        localStorage.removeItem('userID');
        localStorage.removeItem('UserBooking');
        localStorage.removeItem('userAvatar');
        localStorage.removeItem('userRole');
        navigate('/')
      }
    })}

  return (
    <Navbar expand="lg" className="bg-body-tertiary ">
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/">
          <img
          src={logoNav}
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="Logo Sabor Argentino"
          />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {(userRole === 'admin')
           ?
           <Nav className="holaa">
              <Link to='/booking'>
              <Nav.Link className='navButton text-dark fw-bold' href="#features">Reservar</Nav.Link>
              </Link>
              <Link to='/gallery'> 
              <Nav.Link className='navButton text-dark fw-bold' href="#pricing">Galeria</Nav.Link>
              </Link>
              <NavDropdown title="Ingresa" id="basic-nav-dropdown" className={subItem1}>
                <Link to='/login'> 
                <NavDropdown.Item href="#action/3.1">Log in</NavDropdown.Item>
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
              <Nav.Link className='navButton text-dark fw-bold' href="#pricing" onClick={() => logout()}>Cerrar Sesion</Nav.Link>
              <Link to='/edituser'> 
              <Nav.Link className='navButton text-dark fw-bold' href="#pricing"><img
              src={userAvt == null ? "https://i.imgur.com/ThLdImD.png" : `${userAvt}`}
              width="35"
              height="35"
              className="d-inline-block align-top"
              alt="Logo Sabor Argentino"
              /></Nav.Link>
              </Link>
              <Link to='/adminpage'>
              <Button>ADMIN</Button>
              </Link>
            </Nav>
           : (userRole === 'client')
           ?
            <Nav className="holaa">
              <Link to='/booking'>
              <Nav.Link className='navButton text-dark fw-bold' href="#features">Reservar</Nav.Link>
              </Link>
              <Link to='/gallery'> 
              <Nav.Link className='navButton text-dark fw-bold' href="#pricing">Galeria</Nav.Link>
              </Link>
              <NavDropdown title="Ingresa" id="basic-nav-dropdown" className={subItem1}>
                <Link to='/login'> 
                <NavDropdown.Item href="#action/3.1">Log in</NavDropdown.Item>
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
              <Nav.Link className='navButton text-dark fw-bold ' onClick={() => logout()}>Cerrar Sesion</Nav.Link>
              <Link to='/edituser'> 
              <Nav.Link className='navButton text-dark fw-bold'><img
              src={userAvt == null ? "https://i.imgur.com/ThLdImD.png" : `${userAvt}`}
              width="35"
              height="35"
              className="d-inline-block align-top"
              alt="Logo Sabor Argentino"
              /></Nav.Link>
              </Link>
            </Nav>
           : (
              <Nav className="holaa">
                <Link to='/gallery'> 
                <Nav.Link className='navButton text-dark fw-bold' href="#pricing">Galeria</Nav.Link>
                </Link>
                <NavDropdown title="Ingresa" id="basic-nav-dropdown">
                  <Link to='/login'> 
                  <NavDropdown.Item href="#action/3.1">Iniciar Sesion</NavDropdown.Item>
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
           )
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCustom;
