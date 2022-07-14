import React from "react";
import { db } from "../firebase/firebase";
import { addDoc, collection, onSnapshot } from "firebase/firestore";

const PeliculasPages = () => {
  const getData = () => {
    onSnapshot(collection(db, "peliculas"), (snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.data());
      });
    });
  };

  const onSave = async () => {
    const objeto = {
      id: "1",
      nombre: "El señor de los anillos",
      genero: "Fantasia",
    };
    await addDoc(collection(db, "peliculas"), objeto);
  };

  return (
    <>
      <header>
        <h1>Peliculas page</h1>
      </header>
      <main>
        <article>
          <h2>Peliculas</h2>
          <button onClick={getData}>Get peliculas</button>
          <button onClick={onSave}>Guarda pelicula</button>
        </article>
      </main>
    </>
  );
};

export default PeliculasPages;
