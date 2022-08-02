import { useState } from 'react'
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MainPage from './Pages/MainPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<MainPage />}>
        
        </Route>
      </Routes>
  </BrowserRouter>
  )
}

export default App
