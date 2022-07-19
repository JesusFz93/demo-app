import React from "react";

const PeliculasPage = () => {
  return (
    <>
      <header>
        <h1>Pagina de peliculas</h1>
      </header>
      <main>
        <article>
          <form>
            <div className="mb-3">
              <label htmlFor="nombre">Nombre</label>
              <input
                id="nombre"
                type="text"
                placeholder="Nombre"
                autoComplete="off"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="descripcion">Descripcion</label>
              <input
                id="descripcion"
                type="textarea"
                placeholder="Comentarios"
                autoComplete="off"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="precio">Precio</label>
              <input
                id="precio"
                type="text"
                placeholder="Precio"
                autoComplete="off"
                className="form-control"
              />
            </div>
          </form>
        </article>
      </main>
      <section>
        <article>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-info">
              Obtener peliculas
            </button>
            <button type="button" className="btn btn-success">
              Guardar pelicula
            </button>
          </div>
        </article>
      </section>
    </>
  );
};

export default PeliculasPage;
