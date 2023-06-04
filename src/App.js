import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar.js';
import Footer from './Component/Footer/Footer.js';

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route exact path='/' element={<h1>Hello Mushafiya, How are you?</h1>}/>
      </Routes>
    <Footer/>
    </>
  )
}

export default App
