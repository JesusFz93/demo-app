import React from "react";
import { AuthProvider } from "./auth/AuthContext";
import AppRouterAuth from "./routers/AppRouterAuth";

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
