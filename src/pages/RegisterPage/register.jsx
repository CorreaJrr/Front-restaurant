import './RegisterStyles.css';
import React, { useState } from 'react';
import { Col, Container, Form, Button } from 'react-bootstrap';
import { mensajes } from '../../utils/messages';
import { alertGeneric } from '../../utils/alertMajor';
import { endPoints } from '../../utils/endPoints';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    lastName: '',
    password: '',
    passwordCheck: '',
    termsAndConditions: false,
    date: new Date(),
  });
  const [mensaje, setMensaje] = useState('');

  const handleFormDataChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
      date: new Date(),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const validationPass = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).{8,10}$/;

    if (!validationEmail.test(formData.email)) return alertGeneric(mensajes.failEmailFormat,'Uppss..', 'error');
    if (formData.password !== formData.passwordCheck) return alertGeneric(mensajes.failPasswordCheck,'Uppss..', 'error');
    if (!validationPass.test(formData.password)) return alertGeneric(mensajes.failPasswordFormat,'Uppss..', 'error');

    try {
      setIsLoading(true);
      const { data } = await axios.get(`${endPoints.user}/?email=${formData.email}`);
      
      if (data.length !== 0) return alertGeneric(mensajes.userAlreadyExist, 'Uppss...', 'error');
      
      await axios.post(endPoints.user, formData);
      alertGeneric(mensajes.registerSuccess, 'Exito', 'success', () => navigate('/login'));
    } catch (error) {
      alertGeneric(mensajes.genericErrorPost, 'Uppss...', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container id='container1'>
      <Container id='container2'>
        <Col xs={12} md={8} lg={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="text" placeholder="Enter email" required name='email' onChange={handleFormDataChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" minLength={3} maxLength={10} required name='name' onChange={handleFormDataChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Lastname</Form.Label>
              <Form.Control type="text" placeholder="Enter lastname" minLength={3} maxLength={15} required name='lastName' onChange={handleFormDataChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"placeholder="Password"required minLength={8} maxLength={10} name='password'onChange={handleFormDataChange}/>
              <small id="password-help" style={{ color: 'red', fontSize: '0.7em' }}>
                Debe contener entre 8 y 10 caracteres, incluyendo al menos 1 mayúscula y 1 número
              </small>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Repeat password</Form.Label>
              <Form.Control type="password" placeholder="Repeat password" required minLength={8} maxLength={10} name='passwordCheck' onChange={handleFormDataChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check type="checkbox" label="Accept terms and conditions" required name='termsAndConditions' onChange={handleFormDataChange}/>
            </Form.Group>
            <Col className='text-danger my-3'>
              <strong>{mensaje}</strong>
            </Col>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Container>
    </Container>
  );
};

export default Register;
