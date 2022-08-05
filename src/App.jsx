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
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<MainPage />}></Route>
        <Route path="/contact/:id" element={<ContactPage />}></Route>
        <Route path="/contact/:id/call/:type" element={<CallPage />}></Route>

      </Routes>
  </BrowserRouter>
  )
}

export default App
