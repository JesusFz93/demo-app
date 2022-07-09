import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import Publicas from "./Publicas";
import Privadas from "./Privadas";

const AppRouter = () => {
  const { auth } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        {auth.logged ? (
          <Route
            path="/*"
            element={<PrivateRoute>{<Privadas />}</PrivateRoute>}
          />
        ) : (
          <Route
            path="/*"
            element={<PublicRoute>{<Publicas />}</PublicRoute>}
          />
        )}
      </Routes>
    </Router>
  );
};

export default AppRouter;
