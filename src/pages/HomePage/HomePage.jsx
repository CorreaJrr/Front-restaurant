import { Navbar, Container, Nav, Row, Col, Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../HomePage/homePage.css';
import { alertGeneric } from '../../utils/alertMajor';
import { mensajes } from '../../utils/messages';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';




const Homepage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [changeFlag, setChangeFlag] = useState(false);
  const navigate = useNavigate();
const reloadPage = async () => {
  try {
    if (changeFlag == false) {
      setChangeFlag(true)
      navigate('/')
    }
  } catch (error) {
    alertGeneric('Error', 'Upss' , 'error')
  }
}
const user = localStorage.getItem('token');
  const Booking = JSON.parse(localStorage.getItem('UserBooking'))
  if (Booking){
    const TBooking = true;
    return TBooking
  }
  const handleReserve = async (e) => {
    try {
      if(user == null) {
        alertGeneric(mensajes.bookingFailure, 'Uppss...', 'error', () => navigate('/login'))
      }
    } catch (error) {
      alertGeneric(mensajes.serverErrorGeneric, 'Uppss...', 'error')
    }
  }


  return (
    <div className='app'>
        <main className=' container-fluid'>
          <section className='absolute'>
            <div>
              <h1 className='text-white fw-bold'></h1>
            </div> 
            <video muted autoPlay loop>
              <source src='./images/momentos.mp4' />
            </video>
          </section>
          <div>
            < div className=' portadA  container-fluid' >
              <div className=' box-content     '>
                <div className='portadaT px-4 '>
                  <h6 className=' text-white mt-3'> SENTITE EN CASA </h6>
                  <h2 className='text-white '>Sabor Argentino</h2>
                  <hr />
                  <p className='saborP text-white px-3  '>Bienvenidos/as a "SABOR ARGENTO", un rincón gastronómico que nació de la pasión por la rica y diversa cocina de Argentina. Fundado en la encantadora ciudad de Buenos Aires hace más de tres décadas por un grupo de amigos apasionados por su cultura culinaria.</p>
                </div>
              </div>
            </div >
            <Container>
              <div className='platoS mb-3'>
                <p className='pt-3 fs-5 text-white fw-bold '><b>PLATOS MAS VENDIDOS</b></p>
              </div>
              <Row className='body mb-2'>
                <Col className=' mt-3 pb-3 ' sm={4}>
                  <Card className=" cards  bg-dark text-white  ">
                    <Card.Img src="./images/empanadasN.png" alt="imagen de empanadas" />
                    <Card.ImgOverlay>
                      <Card.Title className='titulo1 px-3'>Empanadas</Card.Title>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
                <Col className=' mt-3' sm={4}>
                  <Card className="cards  bg-dark text-white  ">
                    <Card.Img src="./images/tamaln.png" alt="imagen de tamales" />
                    <Card.ImgOverlay>
                      <Card.Title className='titulo1 px-2'>Tamales</Card.Title>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
                <Col className=' mt-3 pb-3' sm={4}>
                  <Card className=" cards bg-dark text-white  ">
                    <Card.Img src="./images/locroN.png" alt="imagen de locro" />
                    <Card.ImgOverlay>
                      <Card.Title className='titulo1 px-2'>Locro</Card.Title>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
              </Row>
              <Row className='body'>
                <Col className=' mt-3 pb-3' sm={4}>
                  <Card className=" cards  bg-dark text-white  ">
                    <Card.Img src="./images/pizzaN.png" alt="imagen de pizza" />
                    <Card.ImgOverlay>
                      <Card.Title className='titulo1 px-2'>Pizza</Card.Title>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
                <Col className=' mt-3' sm={4}>
                  <Card className=" cards  bg-dark text-white  ">
                    <Card.Img src="./images/milanesaN.png" alt="imagen de milanesa napolitana" />
                    <Card.ImgOverlay>
                      <Card.Title className='titulo1 px-2'>Napolitana</Card.Title>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
                <Col className=' mt-3 pb-3' sm={4}>
                  <Card className=" cards  bg-dark text-white  ">
                    <Card.Img src="./images/costilla.jpg" alt="imagen de costilla asada" />
                    <Card.ImgOverlay>
                      <Card.Title className='titulo1 px-2'>Costilla</Card.Title>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
              </Row>
              <Row className=' informacion px-3 my-3 pt-2 pb-25 pb-3'>
                <Col className='informacion mt-1' sm={6}>
                  <h2 className='infO text-white mt-5 pt-3 d-flex justify-content-center'>INFORMACION</h2>
                  <p className='text-white px-3 pt-4 mt-3 pb-3'>
                    En SABOR ARGENTINO, no solo ofrecemos comida excepcional, sino que también celebramos la vida al estilo argentino. Únete a nosotros en eventos especiales donde la música, la danza y la alegría se entrelazan para crear experiencias únicas que te transportarán  a las festividades argentinas
                  </p>
                </Col>
                <Col className=' mt-1' sm={6} >
                  <Image className='parrillita w-100' alt='imagen de parrillita con carne'
                    src="./images/parrillita.webp" fluid
                  />
                </Col>
              </Row>
              <Row className='px-3 my-3 pt-2 pb-25 pb-3'>
                <Col className='resevaS mt-1' sm={6}>
                  <h2 className='text-white  pt-3 d-flex justify-content-center'>Reservas</h2>
                  <p className='text-white px-3 pt-4 mt-3 pb-3'>
                    Reserva ahora y asegura tu lugar en una experiencia gastronómica que combina la excelencia culinaria, un servicio excepcional y un ambiente encantador. En Sabor argentino, estamos ansiosos por crear recuerdos inolvidables contigo.
                  </p>
                  {/* cambiar color del boton */}
                  <div className='divB pb-3'>
                    <Button className='botoN  mb-2 text-dark' variant="primary" onClick={handleReserve}> <Link to='/booking'>Reservar Ahora</Link></Button>
                  </div>
                </Col>
                <Col className=' mt-1' sm={6} >
                  <Image className='almanaque' alt='imagen de almanaque'
                    src="./images/reserva.png" fluid
                  />
                </Col>
              </Row>
            </Container>
          </div>

        </main>
    </div>
  )
}

export default Homepage;