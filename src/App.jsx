import { useState } from 'react'
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ContactPage from './Pages/ContactPage';
import MainPage from './Pages/MainPage';
import "./App.css"
import CallPage from './Pages/CallPage';
import LoginPage from './Pages/LoginPage';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './contexts/PrivateRoute';
import Register from './Pages/RegisterPage';
import { io } from 'socket.io-client';
import { useEffect } from 'react';
import { set } from 'firebase/database';

function App() {
  let socket = io.connect('http://localhost:5000')
  function handleId(newId){
    if(newId!==""){
      socket.emit("saveConnectionID", {
        userId: newId,
      })
    }
  }
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={
            <PrivateRoute>
              <MainPage handleId={handleId} />
            </PrivateRoute>
          }></Route>
          <Route path="/contact/:id" element={
            <PrivateRoute>
              <ContactPage />
            </PrivateRoute>
          }></Route>
          <Route path="/contact/:id/call/:type" element={
            <PrivateRoute>
              <CallPage  socket={socket} />
            </PrivateRoute>
          }></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<Register />}></Route>

        </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App
