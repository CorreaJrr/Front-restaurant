
import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Table, Button, Modal, Form } from 'react-bootstrap'
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import clientAxios from '../../utils/clientAxios';
import { alertGeneric } from '../../utils/alertMajor';
import { mensajes } from '../../utils/messages';

const BookingPanel = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false)  //estado que abre y cierra el modal
  const [selectedBooking, setSelectedBooking] = useState(null) //estado que guarda la reserva editada
  const [changeFlag, setChangeFlag] = useState(false)


//funcion que devuelve las reservas realizadas
  const getAllBookings = async () => {
    try {
      const { data } = await clientAxios.get(`/bookings`,);
      setBookings(data);
    } catch (error) {
      alertGeneric(mensajes.genericGetError, 'Uppss...', 'error');
    } finally {
      setIsLoading(false);
    }
  };

//funcion que abre el modal para editar las reservas
  const handleEdit =  (booking) => {
    setSelectedBooking(booking)
    setShowEditModal(true)
  };

//funcion que edita, guarda la reserva  y cierra el modal
  const handleSaveEdit = async () => {
    setShowEditModal(false)
    console.log(selectedBooking);
    try {
      setIsLoading(true);
      await  clientAxios.patch(`/bookings/edit/${selectedBooking._id}`, selectedBooking);
      setChangeFlag(!changeFlag)
    } catch (error) {
      alertGeneric(mensajes.genericErrorPatch, 'Uppss...', 'error');
    } finally {
      setSelectedBooking(null);
      setIsLoading(false);
    }
  }

//funcion que cierra el modal en caso de no realizar ninguna edicion
  const handleEditClose = () => {
    setShowEditModal(false);
    setSelectedBooking(null);
  }

  useEffect(() => {
    return () => {
      getAllBookings()
    }
  }, [changeFlag]);
  

//funcion que elimina las reservas
  const deleteBooking = async (id) => {
    try {
      if (confirm('Este paso no es reversible. Estas seguro?')) {
        setIsLoading(true);
        await clientAxios.delete(`/bookings/delete/${id}`);
        setChangeFlag(!changeFlag);
      } else {
        return
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      getAllBookings();
    };
  };
        
        

  return (
    <Container>
      <Row>
        <Col>
        {isLoading
            ? <LoadingScreen/>
            : (
                <Table striped bordered hover variant='dark' className='w-75'>
                  <thead>
                    <tr>
                      <th className='text-center'>Reservacion realizada por</th>
                      <th className='text-center'>Hora</th>
                      <th className='text-center'>Dia</th>
                      <th className='text-center'>Mes</th>
                      <th className='text-center'>comensales</th>
                      <th className='text-center'>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings && 
                      bookings.map((booking, index) => (
                        <tr key={index}>
                          <td className='text-center'>{booking.email}</td>
                          <td className='text-center'>{booking.hour}</td>
                          <td className='text-center'>{booking.day}</td>
                          <td className='text-center'>{booking.month}</td>
                          <td className='text-center'>{booking.guests}</td>
                          <td className='text-center'>
                            <Col className='d-flex justify-content-center'>
                              <Button className='btn-sm mx-2' variant='danger' onClick={() => deleteBooking(booking._id)}>Delete</Button>
                              <Button className='btn-sm' variant="success" onClick={() => handleEdit(booking)}>
                                  Edit 
                              </Button>
                            </Col>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </Table>
              )
          }
        <Modal show={showEditModal} onHide={handleSaveEdit}>
          <Modal.Header closeButton>
            <Modal.Title>Editar reserva</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
            <Form.Group controlId="formDay">
                <Form.Label>Day</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter booking day"
                  value={selectedBooking ? selectedBooking.day : ''}
                  onChange={(e) =>
                    setSelectedBooking({
                      ...selectedBooking,
                      day: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formMonth">
                <Form.Label>Month</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter booking month"
                  value={selectedBooking ? selectedBooking.month : ''}
                  onChange={(e) =>
                    setSelectedBooking({
                      ...selectedBooking,
                      month: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formHour">
                <Form.Label>Hour</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter booking hour"
                  value={selectedBooking ? selectedBooking.hour : ''}
                  onChange={(e) =>
                    setSelectedBooking({
                      ...selectedBooking,
                      hour: e.target.value,
                    })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formGuests">
                <Form.Label>Guests</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter booking guests"
                  value={selectedBooking ? selectedBooking.guests: ''}
                  onChange={(e) =>
                    setSelectedBooking({
                      ...selectedBooking,
                      guests: e.target.value,
                    })
                  }
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleEditClose}>
              close
            </Button>
            <Button variant="success" onClick={handleSaveEdit}>
              Save Changes
            </Button>
          </Modal.Footer>
      </Modal>
        </Col>
      </Row>
    </Container>
  )
}


export default BookingPanel
