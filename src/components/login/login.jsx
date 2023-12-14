import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { messages } from '../../utils/messages';
import { alertGeneric } from '../../utils/alertCustom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [message, setMessage] = useState('');
  const URL_BASE = import.meta.env.VITE_URL_BASE;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const {data} = await axios.post(`${URL_BASE}/login`, formData);

      if (typeof data === 'string') return alertGeneric(data, 'Uppss...', 'error');

      localStorage.setItem('userLog', JSON.stringify(data));

      alertGeneric(messages.loginSuccess, 'Genial', 'success', () => navigate('/'));

    } catch (error) {
      console.log(error);
      alertGeneric(messages.serverErrorGeneric, 'Uppss...', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangeFormData = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Container>
      <Row className='justify-content-center my-5'>
        <h1>Login</h1>
        <Col xs={12} md={8} lg={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
              <Form.Label>Email address</Form.Label>
              <Form.Control type="text" placeholder="Enter email" name='email' required onChange={handleChangeFormData}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name='password' required onChange={handleChangeFormData}/>
            </Form.Group>
            <Col className='text-danger my-3'>
              <strong>{message}</strong>
            </Col>
            <Button variant="primary" type="submit" disabled={isLoading}>
              {isLoading ? 'Cargando...' : 'Login'}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
};

export default Login;