import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar.js';
import Footer from './Component/Footer/Footer.js';
import Home from './Pages/Home/Home'

const App = () => {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route exact path='/' element={<Home></Home>} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
