import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Table, Button, Modal, Form } from 'react-bootstrap'
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import 'bootstrap/dist/css/bootstrap.min.css';


const BookingsPanel = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const  [selectedBooking, setSelectedBooking] = useState(null)
  const URL_BASE = import.meta.env.VITE_URL_BASE;

  const getAllBookings = async () => {
    try {
      setIsLoading(true)
      const { data } = await axios.get(`${URL_BASE}/bookings`);
      setBookings(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit =  (booking) => {
    setSelectedBooking(booking);
    setShowEditModal(true);
  };

  const handleSaveEdit = async () => {
    setShowEditModal(false)
  }

  const handleEditClose = () => {
    setShowEditModal(false);
    setSelectedBooking(null);
  }

  useEffect(() => {
    return () => {
      getAllBookings()
    }
  }, []);
  
  const deleteBooking = async (id) => {
    try {
      setIsLoading(true);
      await axios.delete(`${URL_BASE}/bookings/delete/${id}`);
      console.log(data);
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
                      <th className='text-center'>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings && 
                      bookings.map((booking, index) => (
                        <tr key={index}>
                          <td className='text-center'>{booking.email}</td>
                          <td className='text-center'>
                            <Col>
                              <Button className='btn-sm' onClick={() => deleteBooking(booking._id)}>Eliminar</Button>
                              <Button variant='success' onClick={handleEdit}>Editar</Button>
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
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Label>Day</Form.Label>
                <Form.Control
                  type='number' placeholder='Enter day' 
                  value={selectedBooking ? selectedBooking.day : ''}
                  onChange={(e) => 
                    setSelectedBooking({
                      ...selectedBooking,
                      day: e.target.value,
                    })
                  }
                />
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleEditClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleSaveEdit}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </Container>
    
  )
  }


export default BookingsPanel
  
