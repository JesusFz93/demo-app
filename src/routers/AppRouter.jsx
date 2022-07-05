import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  NavLink,
} from "react-router-dom";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HelpPage from "../pages/HelpPage";

const AppRouter = () => {
  return (
    <Router>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "activo" : undefined)}
          >
            Home Page
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "activo" : undefined)}
          >
            About Page
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "activo" : undefined)}
          >
            Contact Page
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/help"
            className={({ isActive }) => (isActive ? "activo" : undefined)}
          >
            Help Page
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/help" element={<HelpPage />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
