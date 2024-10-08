import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarCustom from '../src/components/navbar/NavbarCustom.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/navbar/NavbarCustom.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage.jsx';
import BookingPage from './pages/BookingPage/BookingPage.jsx';
import './pages/HomePage&Booking/homePage.css'
import './pages/HomePage/homePage.css';
import AdminPage from './pages/AdminPage/AdminPage.jsx';
import Footer from './components/Footer/Footer.jsx';
import Login from './pages/LoginPage/login.jsx';
import Register from './pages/RegisterPage/register.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import Galeria from './components/Image_Gallery/Galeria.jsx';
import Error404Page from './pages/ErrorPage/Error404Page.jsx';
import EditUserPage from './pages/EditUserPage/EditUserPage.jsx';
import ErrorLogPage from './pages/ErrorLogPage/ErrorLogPage.jsx';
import LoadingScreen from './components/LoadingScreen/LoadingScreen.jsx';
import HomePageB from './pages/HomePage&Booking/HomePage&Booking.jsx';
import GalleryPage from './pages/GalleryPage/GalleryPage.jsx';


const userLog = localStorage.getItem('token')
const userBooking = JSON.parse(localStorage.getItem('UserBooking'))



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <NavbarCustom />
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/aboutus' element={<AboutUsPage />}/>
      <Route path='/booking' element={<BookingPage/>}/>
      <Route path='/adminpage' element={<AdminPage/>}/>
      <Route path='/gallery' element={<GalleryPage />}/>
      <Route path='*' element={<Error404Page/>}/>
      <Route path='/edituser' element={<EditUserPage/>}/>
      <Route path='/loadingscreen' element={<LoadingScreen/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>  
  </React.StrictMode>,
)
