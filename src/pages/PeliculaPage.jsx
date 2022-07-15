import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { getDoc, doc } from "firebase/firestore";

const PeliculaPage = () => {
  const { idPelicula } = useParams();
  const [pelicula, setPelicula] = useState({});

  useEffect(() => {
    const getDocData = async () => {
      const resp = await getDoc(doc(db, "peliculas", idPelicula));
      setPelicula(resp.data());
    };

    getDocData();
  }, [idPelicula]);

  return (
    <>
      <header>
        <h1>Pelicula</h1>
      </header>
      <main>
        <article>
          <h2>{idPelicula}</h2>
          <p>{pelicula.nombre}</p>
          <p>{pelicula.descripcion}</p>
          <p>{pelicula.precio}</p>
        </article>
      </main>
    </>
  );
};

export default PeliculaPage;
