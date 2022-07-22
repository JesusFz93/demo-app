import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NavBarPrivado from "../components/NavBarPublico";
import AboutPage from "../pages/AboutPage";
import AnimalsPage from "../pages/AnimalsPage";
import AnimalPage from "../pages/AnimalPage";
import ContactPage from "../pages/ContactPage";
import HelpPage from "../pages/HelpPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterUserPage from "../pages/RegisterUserPage";
import TestPage from "../pages/TestPage";

const Publicas = () => {
  return (
    <>
      <NavBarPrivado />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register-user" element={<RegisterUserPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/animals" element={<AnimalsPage />} />
          <Route path="/animal/:idAnimal" element={<AnimalPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
};

export default Publicas;
