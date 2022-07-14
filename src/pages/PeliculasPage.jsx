import React from "react";
import { db } from "../firebase/firebase";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const PeliculasPage = () => {
  const getDocsData = async () => {
    const resp = await getDocs(collection(db, "peliculas"));
    const data = resp.docs.map((item) => ({
      id: item.id,
      ...item.data(),
    }));
    console.log(data);
  };

  const addDocData = async () => {
    const obj = {
      name: "dsssdd",
      country: "ddssd",
    };

    const data = collection(db, "peliculas");
    await addDoc(data, obj);
    await getDocsData();
  };

  const updateDocData = async () => {
    const obj = {
      name: "sdddddss",
      country: "sddddd",
    };

    const data = doc(db, "peliculas", "pJkHWhuxhoiZrErWWOqA");
    await updateDoc(data, obj);
    await getDocsData();
  };

  const deleteDocData = async () => {
    const data = doc(db, "peliculas", "pJkHWhuxhoiZrErWWOqA");
    await deleteDoc(data);
    await getDocsData();
  };

  return (
    <>
      <header>
        <h1>Peliculas page</h1>
      </header>
      <main>
        <article>
          <h2>Peliculas</h2>
          <button onClick={getDocsData}>Obtener peliculas</button>
          <button onClick={addDocData}>Guardar pelicula</button>
          <button onClick={deleteDocData}>Eliminar pelicula</button>
          <button onClick={updateDocData}>Actualizar pelicula</button>
        </article>
      </main>
    </>
  );
};

export default PeliculasPage;
