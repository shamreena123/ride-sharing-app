// src/App.jsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import MainPage from './components/MainPage';
import BookRide from './components/Bookride';
import MyOrders from './components/MyOrders';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/book-ride" element={<BookRide />} /> 
          <Route path="/my-orders" element={<MyOrders />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

