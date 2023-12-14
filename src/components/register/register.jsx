import './RegisterStyles.css'
import React, { useState } from 'react';
import { Col, Row, Container, Form, Button } from 'react-bootstrap';
import { messages } from '../../utils/messages';
import { alertGeneric } from '../../utils/alertMajor';
import { endPoints } from '../../utils/endPoints';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Register = () => {
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
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const validationPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    if(!validationEmail.test(formData.email)) return alertGeneric(messages.failEmailFormat,'Uppss..', 'error');
    if (formData.password !== formData.passwordCheck) return alertGeneric(messages.failPasswordCheck,'Uppss..', 'error');
    if (!validationPass.test(formData.password)) return alertGeneric(messages.failPasswordFormat,'Uppss..', 'error');

    try {
      setIsLoading(true)
      const { data } = await axios.get(`${endPoints.user}/?email=${formData.email}`);
      
      if (data.length !== 0) return alertGeneric(messages.userAlreadyExist, 'Uppss...', 'error');
      
      await axios.post(endPoints.user, formData);
      alertGeneric(messages.registerSuccess, 'Exito', 'success', () => navigate('/login'));
    } catch (error) {
      alertGeneric(messages.genericErrorPost, 'Uppss...', 'error');
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
    <Container>

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
              <strong>{message}</strong>
            </Col>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
    </Container>
  )
}

export default Register