import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../navbar/NavbarCustom.style.css'

const NavbarCustom = () => {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="Logo Sabor Argentino"
              src="/src/assets/images/Logo-Sabor-Argentino.png"
              width="60"
              height="100"
              className="d-inline-block align-top"
            />{' '}
            Sabor Argentino
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarCustom;