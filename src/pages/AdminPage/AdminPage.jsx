import React from 'react'
import UserPanel from '../../components/AdminTools/UserPanel'
import BookingPanel from '../../components/AdminTools/BookingPanel'
import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Table, Button, Modal, Form } from 'react-bootstrap'
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import clientAxios from '../../utils/clientAxios';
import { alertGeneric } from '../../utils/alertMajor';
import { mensajes } from '../../utils/messages'

const AdminPage = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false)  //estado que abre y cierra el modal
  const [selectedBooking, setSelectedBooking] = useState(null) //estado que guarda la reserva editada
  const [changeFlag, setChangeFlag] = useState(false)


//funcion que devuelve las reservas realizadas
  const getAllBookings = async () => {
    try {
      setIsLoading(true)
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
    <>
    <UserPanel/>
    <Button className='btn-sm' variant="success" onClick={() => getAllBookings()}>
     Reservas
    </Button>
    <BookingPanel/>
    </>
  )
}

export default AdminPage