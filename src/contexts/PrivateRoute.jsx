import React from 'react'
import {  Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PrivateRoute({ children }) {
  const { currentUser } = useAuth();
  const accessToken = localStorage.getItem("accessToken")

  return currentUser || accessToken  ? children : <Navigate to="/login" />;
}
