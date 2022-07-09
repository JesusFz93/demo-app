import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NavBarPrivado from "../components/NavBarPublico";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HelpPage from "../pages/HelpPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

const Publicas = () => {
  return (
    <>
      <NavBarPrivado />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default Publicas;
