import React, { useEffect, useState } from "react";

const BooksPage = () => {
  const [resp, setResp] = useState([]);

  useEffect(() => {
    const obtenerLibros = async () => {
      const response = await fetch("https://fakerapi.it/api/v1/books");
      const data = await response.json();
      setResp(data);
    };

    obtenerLibros();
  }, []);

  return (
    <>
      <header>
        <h1>Pagina de efectos</h1>

        <ul>
          {resp.data &&
            resp.data.map((item) => (
              <li key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.author}</p>
                <p>{item.description}</p>
              </li>
            ))}
        </ul>
      </header>
    </>
  );
};

export default BooksPage;
