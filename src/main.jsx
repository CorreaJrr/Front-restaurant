import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarCustom from '../src/components/navbar/NavbarCustom.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/navbar/NavbarCustom.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pages/HomePage/homePage.css';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage.jsx';
import BookingPage from './pages/BookingPage/BookingPage.jsx';
import AdminPage from './pages/AdminPage/AdminPage.jsx';
import Footer from './components/Footer/Footer.jsx';
import Register from './pages/RegisterPage/register.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import LoginPage from './pages/LoginPage/login.jsx';
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <NavbarCustom />
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/register' element={<RegisterPage/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
)
