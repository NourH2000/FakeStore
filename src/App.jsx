import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Basket from "./components/Basket";
import Login from "./components/Login";
import About from "./components/About";

import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";
import Home from "./components/Home2";
import Home2 from "./components/Home";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
function App() {
  return (
    <>
      <Routes>
        {/* public routes  */}
        <Route path="" element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
        </Route>
        {/* private routes */}
        <Route path="" element={<RequireAuth />}>
          <Route path="/basket" element={<Basket />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
