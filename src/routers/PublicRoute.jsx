import React, { useState } from "react";
import { Navigate } from "react-router-dom";
// import { AuthContext } from "../../auth/AuthContext";

export const PublicRoute = ({ children }) => {
  // const { auth } = useContext(AuthContext);
  const [auth] = useState({ logged: false });

  return auth.logged ? <Navigate to="/" /> : children;
};
