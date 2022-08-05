import { useState } from 'react'
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ContactPage from './Pages/ContactPage';
import MainPage from './Pages/MainPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<MainPage />}></Route>
        <Route path="/contact/:id" element={<ContactPage />}></Route>

      </Routes>
  </BrowserRouter>
  )
}

export default App
