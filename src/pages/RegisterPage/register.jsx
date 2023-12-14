import './RegisterStyles.css'
import React, { useState } from 'react';
import { Col, Row, Container, Form, Button } from 'react-bootstrap';
import { mensajes } from '../../utils/messages';
import { alertGeneric } from '../../utils/alertMajor';
import { endPoints } from '../../utils/endPoints';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    lastName: '',
    password: '',
    passwordCheck: '',
    termsAndConditions: null,
    date: new Date(),
  });
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const validationPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    if(!validationEmail.test(formData.email)) return alertGeneric(mensajes.failEmailFormat,'Uppss..', 'error');
    if (formData.password !== formData.passwordCheck) return alertGeneric(mensajes.failPasswordCheck,'Uppss..', 'error');
    if (!validationPass.test(formData.password)) return alertGeneric(mensajes.failPasswordFormat,'Uppss..', 'error');

    try {
      setIsLoading(true)
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

  const handleFormDataChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.name === 'password' || e.target.name === 'passwordCheck' ? e.target.value : e.target.value.toLowerCase(),
      termsAndConditions: e.target.checked
    }));
  };

  return (
  <Container id='container1'>
    <Container id='container2'>
        <Col xs={12} md={8} lg={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
              <Form.Label>Email address</Form.Label>
              <Form.Control type="text" placeholder="Enter email" required name='email' onChange={handleFormDataChange}/>
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" required name='name' onChange={handleFormDataChange}/>
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Lastname</Form.Label>
              <Form.Control type="text" placeholder="Enter lastname" required name='lastName' onChange={handleFormDataChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required name='password' onChange={handleFormDataChange}/>
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Repeat password</Form.Label>
              <Form.Control type="password" placeholder="Repeat password" required name='passwordCheck' onChange={handleFormDataChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check type="checkbox" label="Acept terms and conditions" required name='termsAndConditions' onChange={handleFormDataChange}/>
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
  )
}

export default Register