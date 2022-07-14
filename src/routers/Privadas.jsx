import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import NavBarPrivado from "../components/NavBarPrivado";
import AboutPage from "../pages/AboutPage";
import AlumnoPage from "../pages/AlumnoPage";
import AlumnosPage from "../pages/AlumnosPage";
import BlogPage from "../pages/BlogPage";
import BooksPage from "../pages/BooksPage";
import ContactPage from "../pages/ContactPage";
import EfectosPage from "../pages/EfectosPage";
import EstadosPage from "../pages/EstadosPage";
import HelpPage from "../pages/HelpPage";
import HomePage from "../pages/HomePage";
import PeliculasPages from "../pages/PeliculasPages";
import PostPage from "../pages/PostPage";
import PostsPage from "../pages/PostsPage";
import UcamperPage from "../pages/UcamperPage";

const Privadas = () => {
  return (
    <>
      <NavBarPrivado />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/ucamper/:id/:nombre" element={<UcamperPage />} />

          <Route path="/alumnos" element={<AlumnosPage />} />
          <Route path="/alumno/:id_alumno" element={<AlumnoPage />} />

          <Route
            path="/blog"
            element={
              <BlogPage
                articulos={["Articulo 1", "Articulo 2", "Articulo 3"]}
                nombre="Jesus"
              />
            }
          />

          <Route path="/estados" element={<EstadosPage />} />
          <Route path="/efectos" element={<EfectosPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/post/:idPost" element={<PostPage />} />
          <Route path="/peliculas" element={<PeliculasPages />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
};

export default Privadas;
