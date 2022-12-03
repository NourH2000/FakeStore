import React from "react";
import { Outlet } from "react-router-dom";
import CardContextProvider from "../Contexts/CardContext";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="h-screen w-full">
      <CardContextProvider>
        <Navbar />
        <Outlet />
      </CardContextProvider>
    </div>
  );
};

export default Layout;
