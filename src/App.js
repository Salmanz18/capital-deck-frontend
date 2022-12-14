import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Layout/Navbar/Navbar';
import Footer from './components/Layout/Footer/Footer';
import LandingPage from './pages/LandingPage';
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './App.css';

const App = () => {
  const location = useLocation();
  let appClass = 'app';
  if (location.pathname === '/login' || location.pathname === '/signup') {
    appClass = 'app login-bg';
  } else if (location.pathname === '/') {
    appClass = 'app home-bg';
  } else {
    appClass = 'app login-bg';
  }

  return (
    <div className={appClass}>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
