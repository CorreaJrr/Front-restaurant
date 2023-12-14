import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx';
import NavbarCustom from './components/navbar/NavbarCustom.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/navbar/NavbarCustom.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage.jsx';
import BookingPage from './pages/BookingPage/BookingPage.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import './pages/HomePage/homePage.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <NavbarCustom />
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/aboutus' element={<AboutUsPage />}/>
      <Route path='/booking' element={<BookingPage />}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
