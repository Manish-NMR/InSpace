import React from 'react';
import axios from 'axios';
import './App.css';
import {Route, Routes } from 'react-router-dom';
import IndexPage from './Pages/IndexPage';
import RegisterPage from './Pages/RegisterPage';
import Layout from './Layout';
import LoginPage from './Pages/LoginPage';
import { UserContextProvider } from './UserContext';
import AccountPage from './Pages/AccountPage';
import BookingPage from './Pages/BookingPage';
import MyBookingPage from './Pages/MyBookingsPage';

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<IndexPage/>} />
          <Route path='/register' element={<RegisterPage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/account' element={<AccountPage/>} />
          <Route path='/booking' element={<BookingPage/>} />
          <Route path='/MyBookings' element={<MyBookingPage/>} />
        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App
