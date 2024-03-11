import React from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import '../../utils/valiDate';
import { useState } from 'react';
import calendar from '../../utils/valiDate';
import axios from 'axios';
import { alertGeneric } from "../../utils/alertMajor";
const URL_BASE = import.meta.env.VITE_URL_BASE
import clientAxios from '../../utils/clientAxios.js'
import '../BookingPage/snowEffect.css'


const BookingPage = () => {
  const [BookingData, setBookingData] = useState({
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
      /*if (BookingData.month < calendar.getMonth()) {
        return alertGeneric(mensajes.serverErrorGeneric, 'Nos viste cara de Marty Mcfly?', 'error')
      }*/
      if (BookingData.month == 2 && 28 < BookingData.day) {
        return alertGeneric(mensajes.serverErrorGeneric, 'Como que no existe la fecha', 'error')
      }
      if (BookingData.month == 4 || BookingData.month == 6 || BookingData.month == 9 || BookingData.month == 11) {
        if (30 < BookingData.day) {
          return alertGeneric(mensajes.serverErrorGeneric, 'Como que no existe la fecha', 'error')
        } else {
          await clientAxios.post(`/bookings/create`, BookingData)
          /* Cuando este el deploy del backend, editar la URL y descomentar!
          */
          return alertGeneric(mensajes.bookingSuccess, 'Reserva realizada con exito', 'success')
        }
      }
      await clientAxios.post(`/bookings/create`, BookingData)
      /*  Cuando este el deploy del backend, editar la URL y descomentar!
      */
      return alertGeneric(mensajes.bookingSuccess, 'Reserva realizada con exito', 'success')
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
              <Form.Label>Day</Form.Label>
              <Form.Control type="number" placeholder="Enter the Booking day" min='1' max='31' name='day' required onChange={handleChangeBookingData}/>
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Hour</Form.Label>
              <Form.Control type="number" placeholder="Enter the Hour" name='hour' min='13' max='21' required onChange={handleChangeBookingData}/>
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Month</Form.Label>
              <Form.Control type="number" placeholder="Enter the Month" name='month' min='1' max='12' required onChange={handleChangeBookingData}/>
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Year</Form.Label>
              <Form.Control type="number" placeholder="Enter the Year" name='year' min={calendar.getFullYear()} max={calendar.getFullYear() + 1} required onChange={handleChangeBookingData}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Guests</Form.Label>
              <Form.Control type="number" placeholder="How many Guests?" name='guests' min='1' max='15' required onChange={handleChangeBookingData}/>
            </Form.Group>
            <Col className='text-danger my-3'>
              <strong>{mensajes}</strong>
            </Col>
            <Button variant="primary" type="submit" disabled={isLoading}>
              {isLoading ? 'Cargando...' : 'Make the Booking'}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
</>  
  )
}



export default BookingPage;