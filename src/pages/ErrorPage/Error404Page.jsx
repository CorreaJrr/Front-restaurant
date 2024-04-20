import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import {   useNavigate } from 'react-router-dom'
//import {containerError, error, texto, containerTexto} from './error.module.css'
import './error.css'



const Error404Page = () => {
  const navigate = useNavigate()
  return (
      <section className='containerError'>
        <div id='Container01' className='error'>
            <div>
              <h1  className='texto'>Error 404 Not Found, la pagina no se encuentra disponible. Disculpe las molestias.</h1>

            </div>
            <div className='d-grid gap-2' >
                <Button onClick={() => navigate ('/')} variant='light'>Back to homePage</Button>

            </div>
        </div>
      </section>

    // <Container className={containerError}>
    //   <Row className={error}>
    //     <Col className={containerTexto} xs={12}>
    //       <h1 className={texto}>Error 404 Not Found, la pagina no se encuentra disponible. Disculpe las molestias</h1>
    //     </Col>
    //     <Col className={containerTexto} xs={12} lg={12}>
          
    //       <Button onClick={() => navigate ('/')} variant='outline-light'>Back to homePage</Button>
          
    //     </Col>
    //   </Row>
    // </Container>

  )
}
        
        

export default Error404Page
