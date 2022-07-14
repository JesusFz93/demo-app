import React from "react";
import { AuthProvider } from "./auth/AuthContext";
import AppRouterAuth from "./routers/AppRouterAuth";


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./styles/estilos.css";

const App = () => {
  return (
    <>
      <AuthProvider>
        <AppRouterAuth />
      </AuthProvider>
    </>
  );
};

export default App;
