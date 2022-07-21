import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

const PeliculaPage = () => {
  const [pelicula, setPelicula] = useState({});
  const { idPelicula } = useParams();

  useEffect(() => {
    const obtenerPelicula = async () => {
      const resp = await getDoc(doc(db, "peliculas", idPelicula));
      setPelicula({
        id: resp.id,
        ...resp.data(),
      });
    };

    obtenerPelicula();
  }, [idPelicula]);

  return (
    <>
      <header>
        <h1>Pagina individual de pelicula</h1>
      </header>
      <main>
        <article>
          <h2>{pelicula.id}</h2>
          <h3>{pelicula.nombre}</h3>
          <p>{pelicula.descripcion}</p>
          <p>{pelicula.precio}</p>
        </article>
      </main>
    </>
  );
};

export default PeliculaPage;
