import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage.jsx';
import BookingPage from './pages/BookingPage/BookingPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
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
