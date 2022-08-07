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
function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={
            <PrivateRoute>
              <MainPage />
            </PrivateRoute>
          }></Route>
          <Route path="/contact/:id" element={
            <PrivateRoute>
              <ContactPage />
            </PrivateRoute>
          }></Route>
          <Route path="/contact/:id/call/:type" element={
            <PrivateRoute>
              <CallPage />
            </PrivateRoute>
          }></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<LoginPage />}></Route>

        </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App
