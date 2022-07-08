import React, { useState } from "react";

const initPosts = [];

const EstadosPage = () => {
  const [contador, setCounter] = useState(0);
  const [posts, setPosts] = useState(initPosts);

  const aumentarContador = () => {
    setCounter(contador + 1);
  };

  const decrementarContador = () => {
    setCounter(contador - 1);
  };

  const extraerPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    const data = await response.json();
    setPosts(data);
  };

  const limpiarPosts = () => {
    setPosts(initPosts);
  };

  return (
    <>
      <header>
        <h1>Pagina de contador</h1>
      </header>
      <main>
        <article>
          <h2>Contador: {contador}</h2>
          <button onClick={aumentarContador}>Aumentar contador</button>
          <button onClick={decrementarContador}>Decrementar contador</button>
          <button onClick={extraerPosts}>Extraer posts</button>
          <button onClick={limpiarPosts}>Limpiar posts</button>
          <ul>
            {posts &&
              posts.map((item) => (
                <li key={item.id}>
                  <h2>{item.title}</h2>
                  <p>{item.body}</p>
                </li>
              ))}
          </ul>
        </article>
      </main>
    </>
  );
};

export default EstadosPage;
