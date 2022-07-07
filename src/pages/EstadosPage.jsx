import React, { useState } from "react";

const EstadosPage = () => {
  const [contador, setCounter] = useState(0);

  const aumentarContador = () => {
    setCounter(contador + 1);
  };

  const decrementarContador = () => {
    setCounter(contador - 1);
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
        </article>
      </main>
    </>
  );
};

export default EstadosPage;
