import React, { useState } from "react";
import { Navigate } from "react-router-dom";
// import { AuthContext } from "../../auth/AuthContext";

export const PrivateRoute = ({ children }) => {
  // const { auth } = useContext(AuthContext);
  const [auth] = useState({ logged: true });

  return auth.logged ? children : <Navigate to="/login" />;
};
