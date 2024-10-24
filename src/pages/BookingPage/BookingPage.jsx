import React, { useEffect } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import '../../utils/valiDate';
import { useState } from 'react';
import calendar from '../../utils/valiDate';
import axios from 'axios';
import { alertGeneric } from "../../utils/alertMajor";
const URL_BASE = import.meta.env.VITE_URL_BASE
import clientAxios from '../../utils/clientAxios.js';
import '../BookingPage/snowEffect.css';
import { useNavigate } from 'react-router-dom';



const BookingPage = () => {
  const navigate = useNavigate()
  const ExistBooking = localStorage.getItem('UserBooking');
  if (ExistBooking) {
    alertGeneric('Puedes cancelar la reserva y luego hacer otra', 'Ya tienes una reserva', 'error', () => navigate('/'))
  }
  const [BookingData, setBookingData] = useState({
    email: '',
    day: Number,
    hour: Number,
    month: Number,
    year: Number,
    guests: Number,
  });
  const [mensajes, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      //const { data } = await clientAxiosaxios.get(`/bookings`)
      /* Cuando este el deploy del backend, editar la URL y descomentar!
      data.map((booking) => {
        if (BookingData === booking)
        return alertGeneric(mensajes.serverErrorGeneric, 'Ya hay una reserva tomada para ese momento', 'error')
    })
    */
      if (BookingData.day < calendar.getDate() && BookingData.month == calendar.getMonth()) {
        return alertGeneric(mensajes.serverErrorGeneric, 'Nos viste cara de Marty Mcfly?', 'error')
      }
      if (BookingData.month < calendar.getMonth()) {
        return alertGeneric(mensajes.serverErrorGeneric, 'Nos viste cara de Marty Mcfly?', 'error')
      }
      if (BookingData.month == 2 && 28 < BookingData.day) {
        return alertGeneric(mensajes.serverErrorGeneric, 'Como que no existe la fecha', 'error')
      }
      if (BookingData.month == 4 || BookingData.month == 6 || BookingData.month == 9 || BookingData.month == 11) {
        if (30 < BookingData.day) {
          return alertGeneric(mensajes.serverErrorGeneric, 'Como que no existe la fecha', 'error')
        } else {
          // await clientAxios.post(`/bookings/create`, BookingData)
          // /* Cuando este el deploy del backend, editar la URL y descomentar!
          // */
          // return alertGeneric(mensajes.bookingSuccess, 'Reserva realizada con exito', 'success')
        }
      }
      const { data } = await clientAxios.get(`/users/checkEmailExist/?email=${BookingData.email}`);
      if(!data) return alertGeneric(mensajes.bookingErrorEmail, 'Para poder realizar la reserva debes estar registrado', 'error', )
      const emailBooking = await clientAxios.get(`/bookings/checkUserBooking/?email=${BookingData.email}`)
      console.log(emailBooking.data);
      if(emailBooking.data) return alertGeneric(mensajes.checkRegisterBooking, 'Solo se permite una reserva por usuario', 'error')
      await clientAxios.post(`/bookings/create`, BookingData)
      localStorage.setItem('UserBooking', JSON.stringify(BookingData))
      /*  Cuando este el deploy del backend, editar la URL y descomentar!
      */
      return alertGeneric(mensajes.bookingSuccess, 'Reserva realizada con exito', 'success');
    } catch (error) {
      alertGeneric(mensajes.serverErrorGeneric, 'Ocurrio un error al procesar la solicitud', 'error')
    } finally {
      setIsLoading(false);
    }
  } 
  const handleChangeBookingData = (e) => {
    setBookingData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    const userLog = localStorage.getItem('token')
    if (!userLog) {
      navigate('/login')
    }
  }, [])

  return (
<>
  <div class="snowflakes" aria-hidden="true">
    <div class="snowflake">
    ❅
    </div>
    <div class="snowflake">
    ❅
    </div>
    <div class="snowflake">
    ❆
    </div>
    <div class="snowflake">
    ❄
    </div>
    <div class="snowflake">
    ❅
    </div>
    <div class="snowflake">
    ❆
    </div>
    <div class="snowflake">
    ❄
    </div>
    <div class="snowflake">
    ❅
    </div>
    <div class="snowflake">
    ❆
    </div>
    <div class="snowflake">
    ❄
    </div>
  </div>
    <Container>
      <Row className='bodyR pt-5 pb-5'>
        <Col xs={12} md={8} lg={6}>
          <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" >
              <Form.Label><h5 className='texto3'>Correo Electronico</h5></Form.Label>
              <Form.Control type="email" placeholder="Ingresar Correo"  name='Correo' required onChange={handleChangeBookingData}/>
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label><h5 className='texto3'>Dia</h5></Form.Label>
              <Form.Control type="number" placeholder="Ingresar el dia de la reserva" min='1' max='31' name='day' required onChange={handleChangeBookingData}/>
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label><h5 className='texto3'>Hora</h5></Form.Label>
              <Form.Control type="number" placeholder="Ingresar la Hora" name='hour' min='13' max='21' required onChange={handleChangeBookingData}/>
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label><h5 className='texto3'>Mes</h5></Form.Label>
              <Form.Control type="number" placeholder="Ingresar el Mes" name='month' min='1' max='12' required onChange={handleChangeBookingData}/>
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label><h5 className='texto3'>Año</h5></Form.Label>
              <Form.Control type="number" placeholder="Ingresar el Año" name='year' min={calendar.getFullYear()} max={calendar.getFullYear() + 1} required onChange={handleChangeBookingData}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label><h5 className='texto3 '>Comensales</h5></Form.Label>
              <Form.Control type="number" placeholder="Ingresar la cantidad de personas" name='guests' min='1' max='15' required onChange={handleChangeBookingData}/>
            </Form.Group>
            <Col className='text-danger my-3'>
              <strong>{mensajes}</strong>
            </Col>
            <Button className='mt-3' variant="primary" type="submit" disabled={isLoading}>
              {isLoading ? 'Cargando...' : 'Hacer la Reserva'}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
</>  
  )
}



export default BookingPage;
