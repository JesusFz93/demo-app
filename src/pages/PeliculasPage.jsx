import React, { useState, useRef, useEffect } from "react";
import { db } from "../firebase/firebase";
import {
  collection,
  getDocs,
  // getDoc,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { NavLink } from "react-router-dom";

const initialFormState = {
  nombre: "",
  descripcion: "",
  precio: "",
};

const PeliculasPage = () => {
  const [form, setForm] = useState(initialFormState);
  const [peliculas, setPeliculas] = useState([]);
  const nombreRef = useRef();

  // const getDocData = async (id) => {
  //   const resp = await getDoc(doc(db, "peliculas", id));

  //   console.log(resp.data());

  //   // setPeliculas(data);
  //   // setForm(initialFormState);
  //   // nombreRef.current.focus();
  // };

  const getDocsData = async () => {
    const resp = await getDocs(collection(db, "peliculas"));
    const data = resp.docs.map((item) => ({
      id: item.id,
      ...item.data(),
    }));

    setPeliculas(data);
    setForm(initialFormState);
    nombreRef.current.focus();
  };

  const addDocData = async () => {
    const data = collection(db, "peliculas");
    await addDoc(data, form);
    await getDocsData();
  };

  const updateDocData = async (id) => {
    const data = doc(db, "peliculas", id);
    await updateDoc(data, form);
    await getDocsData();
  };

  const deleteDocData = async (id) => {
    const data = doc(db, "peliculas", id);
    await deleteDoc(data);
    await getDocsData();
  };

  useEffect(() => {
    nombreRef.current.focus();
    getDocsData();
  }, []);

  return (
    <>
      <header>
        <h1>Peliculas page</h1>
      </header>
      <main>
        <article>
          <form>
            <div className="mb-3">
              <label htmlFor="nombre">Nombre</label>
              <input
                ref={nombreRef}
                id="nombre"
                type="text"
                className="form-control"
                placeholder="Nombre"
                autoComplete="off"
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="descripcion">Comentarios</label>
              <textarea
                id="descripcion"
                type="textarea"
                className="form-control form__textarea"
                placeholder="Comentarios"
                autoComplete="off"
                value={form.descripcion}
                onChange={(e) =>
                  setForm({ ...form, descripcion: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="precio">Precio</label>
              <input
                id="precio"
                type="text"
                className="form-control"
                placeholder="Precio"
                autoComplete="off"
                value={form.precio}
                onChange={(e) => setForm({ ...form, precio: e.target.value })}
              />
            </div>
          </form>
        </article>
      </main>
      <section>
        <article>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button className="btn btn-info" onClick={getDocsData}>
              Obtener peliculas
            </button>
            <button className="btn btn-success" onClick={addDocData}>
              Guardar pelicula
            </button>
          </div>
        </article>
      </section>
      <section>
        <article>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Precio</th>
                <th scope="col">Actualizar</th>
                <th scope="col">Eliminar</th>
                <th scope="col">Informacion</th>
              </tr>
            </thead>
            <tbody>
              {peliculas.map((pelicula) => {
                return (
                  <tr key={pelicula.id}>
                    <td>{pelicula.id}</td>
                    <td>{pelicula.nombre}</td>
                    <td>{pelicula.descripcion}</td>
                    <td>{pelicula.precio}</td>
                    <td>
                      <NavLink
                        className="btn btn-info"
                        to={`/pelicula/${pelicula.id}`}
                      >
                        Ver mas...
                      </NavLink>
                    </td>
                    <td>
                      <button
                        className="btn btn-warning"
                        onClick={() => updateDocData(pelicula.id)}
                      >
                        Actualizar pelicula
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteDocData(pelicula.id)}
                      >
                        Eliminar pelicula
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </article>
      </section>
    </>
  );
};

export default PeliculasPage;
