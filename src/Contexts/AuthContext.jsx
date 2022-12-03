import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Navigate } from "react-router-dom";

export const AuthContext = createContext({});

const AuthContextProvider = (props) => {
  const StorageUser = JSON.parse(localStorage.getItem("user")) || {};
  const [auth, setAuth] = useState(StorageUser);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(auth));
  }, [auth]);

  const logout = () => {
    setAuth({});
    //Navigate("/login");
  };
  return (
    <AuthContext.Provider value={{ auth, setAuth, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
