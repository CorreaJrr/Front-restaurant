import './LoginStyles.css';
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { mensajes } from '../../utils/messages';
import { alertGeneric } from '../../utils/alertMajor';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [mensaje, setMensaje] = useState('');
  const URL_BASE = import.meta.env.VITE_URL_BASE;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje('');
    
    // Validación básica del formato de correo electrónico
    const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValidation.test(formData.email)) {
      setMensaje('El formato del correo electrónico es inválido.');
      return;
    }

    // Validación de longitud de la contraseña
    if (formData.password.length < 8 || formData.password.length > 10) {
      setMensaje('La contraseña debe tener entre 8 y 10 caracteres.');
      return;
    }

    try {
      setIsLoading(true);
      /*const { datauser } = await axios.get(`${URL_BASE}/users/byId/:`)*/
      const { data } = await axios.post(`${URL_BASE}/login`, formData);

      if (typeof data === 'string') return alertGeneric(data, 'Uppss...', 'error');

      localStorage.setItem('userLog', JSON.stringify(data))

      alertGeneric(mensajes.loginSuccess, 'Genial', 'success', () => navigate('/'));

    } catch (error) {
      console.log(error);
      alertGeneric(mensajes.serverErrorGeneric, 'Uppss...', 'error');
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
    <Container className='' id='container1'>
      <Container className='' id='container2'>
        <Row className='justify-content-center my-5'>
          <h1>Login</h1>
          <Col xs={12} md={8} lg={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text" placeholder="Enter email" name='email' required onChange={handleChangeFormData} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name='password' required onChange={handleChangeFormData} />
              </Form.Group>
              <Col className='text-danger my-3'>
                <strong>{mensaje}</strong>
              </Col>
              <Button variant="primary" type="submit" disabled={isLoading}>
                {isLoading ? 'Cargando...' : 'Login'}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  )
};

export default Login;
