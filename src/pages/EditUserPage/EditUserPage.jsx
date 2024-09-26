import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Button, Modal, Form } from 'react-bootstrap';
import { alertGeneric } from '../../utils/alertMajor';
import { mensajes } from '../../utils/messages';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import clientAxios from '../../utils/clientAxios.js';
import { useNavigate } from 'react-router-dom';
import './EditUserPage.css'

const EditUserPage = () => {
    const userID = localStorage.getItem('userID')
    const [usuario, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const URL_BASE = import.meta.env.VITE_URL_BASE;
    const navigate = useNavigate()
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [changeFlag, setChangeFlag] = useState(false);
    const getUser = async() => {
        try {
          setIsLoading(true);
          const { data } = await clientAxios.get(`/users/byId/${userID}`);
          setUser(data);
        } catch (error) {
          alertGeneric(mensajes.genericGetError, 'Uppss...', 'error');
        } finally {
          setIsLoading(false);
        }
      };
    
      const handleEdit = (user) => {
        setSelectedUser(user);
        setShowEditModal(true);
      };
    
      const handleSaveEdit = async() => {
        setShowEditModal(false);
        try {
          setIsLoading(true);
          await clientAxios.patch(`/users/edit/${selectedUser._id}`, selectedUser);
          setChangeFlag(!changeFlag);
        } catch (error) {
          alertGeneric(mensajes.genericErrorPost, 'Uppss...', 'error');
        } finally {
          setSelectedUser(null);
          setIsLoading(false);
        }
      }
    
      const handleEditClose = () => {
        setShowEditModal(false);
        setSelectedUser(null);
      }
    
      useEffect(() => {
        getUser();
      }, [changeFlag]);
    
    
      const handleChangeStatus = async(e, user) => {
        setShowEditModal(false);
        try {
          setIsLoading(true);
          await clientAxios.patch(`/users/edit/${user._id}`, {...user, disabled: !e.target.checked});
          setChangeFlag(!changeFlag);
        } catch (error) {
          alertGeneric(mensajes.genericErrorPost, 'Uppss...', 'error');
        } finally {
          setSelectedUser(null);
          setIsLoading(false);
        }
      }

      useEffect(() => {
        const userLog = localStorage.getItem('token')
        if (!userLog) {
          navigate('/login')
        }
      }, [])
      return (
        <Container className='editUserContainer'>
          <Row>
            <Col>
              { isLoading 
                ? <LoadingScreen />
                : (
                  <Table striped bordered hover variant='dark' className='my-4'>
                    <thead>
                      <tr>
                        <th className='text-center'>Avatar</th>
                        <th className='text-center'>Name</th>
                        <th className='text-center'>Last Name</th>
                        <th className='text-center'>Email</th>
                        <th className='text-center'>Status</th>
                        <th className='text-center'>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                          { usuario &&
                              <tr>
                                <td className='text-center'><img src={usuario.avatar} width='50px' height='50px'></img></td>
                                <td className='text-center'>{usuario.name}</td>
                                <td className='text-center'>{usuario.lastName}</td>
                                <td className='text-center'>{usuario.email}</td>
                                <td className='text-center'>
                                  <Form.Check aria-label="option 1" onChange={(e) => handleChangeStatus(e, usuario)} checked={!usuario.disabled}/>
                                </td>
                                <td className='text-center'>
                                  <Col className='d-flex justify-content-center'>
                                    <Button className='btn-sm' variant="success" onClick={() => handleEdit(usuario)}>
                                      Edit
                                    </Button>
                                  </Col>
                                </td>
                              </tr>
                          }
                    </tbody>
                  </Table>
                )
              }
    
            <Modal show={showEditModal} onHide={handleSaveEdit}>
              <Modal.Header closeButton>
                <Modal.Title>Editar usuario</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group controlId="formName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingrese el nombre"
                      value={selectedUser ? selectedUser.name : ''}
                      onChange={(e) =>
                        setSelectedUser({
                          ...selectedUser,
                          name: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                  <Form.Group controlId="formLastName">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingrese el Apellido"
                      value={selectedUser ? selectedUser.lastName : ''}
                      onChange={(e) =>
                        setSelectedUser({
                          ...selectedUser,
                          lastName: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
    
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Ingrese el correo electrónico"
                      value={selectedUser ? selectedUser.email : ''}
                      onChange={(e) =>
                        setSelectedUser({
                          ...selectedUser,
                          email: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                  <Form.Group controlId="formAvatar">
                    <Form.Label>Avatar</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingrese la URL de una imagen"
                      value={selectedUser ? selectedUser.avatar : ''}
                      onChange={(e) =>
                        setSelectedUser({
                          ...selectedUser,
                          avatar: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleEditClose}>
                  Cerrar
                </Button>
                <Button variant="primary" onClick={handleSaveEdit}>
                  Guardar
                </Button>
              </Modal.Footer>
            </Modal>
            </Col>
          </Row>
        </Container>
      )
    }
  
          

export default EditUserPage