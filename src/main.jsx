import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarCustom from '../src/components/navbar/NavbarCustom.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/navbar/NavbarCustom.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage.jsx';
import BookingPage from './pages/BookingPage/BookingPage.jsx';
import './pages/HomePage/homePage.css';
import AdminPage from './pages/AdminPage/AdminPage.jsx';
import Footer from './components/Footer/Footer.jsx';
import Login from './pages/LoginPage/login.jsx';
import Register from './pages/RegisterPage/register.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import Galeria from './components/Image_Gallery/Galeria.jsx';
import Error404Page from './pages/Error404Page/Error404Page.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <NavbarCustom />
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/aboutus' element={<AboutUsPage />}/>
      <Route path='/booking' element={<BookingPage />}/>
      <Route path='/adminpage' element={<AdminPage />}/>
      <Route path='/gallery' element={<Galeria />}/>
      <Route path='?' element={<Error404Page/>}/>
      <Route path='/404' element={<Error404Page/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
)
