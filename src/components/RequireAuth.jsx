import React from "react";
import useAuth from "../hooks/useAuth";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import CardContextProvider, { CardContext } from "../Contexts/CardContext";

const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();
  console.log("auth");
  return auth?.user ? (
    <CardContextProvider>
      <Navbar />
      <Outlet />
    </CardContextProvider>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
