import React, { useEffect, useState } from "react";

const EfectosPage = () => {
  const [resp, setResp] = useState([]);

  useEffect(() => {
    fetch("https://fakerapi.it/api/v1/persons")
      .then((response) => response.json())
      .then((json) => setResp(json));
  }, []);

  return (
    <>
      <header>
        <h1>Pagina de efectos</h1>

        <ul>
          {resp.data &&
            resp.data.map((item) => (
              <li key={item.id}>
                <h2>
                  {item.firstname} - {item.lastname}
                </h2>
                <p>{item.email}</p>
              </li>
            ))}
        </ul>
      </header>
    </>
  );
};

export default EfectosPage;

// import React, { useEffect, useState } from "react";

// const EfectosPage = () => {
// const [contador, setCounter] = useState(0);

//   const aumentar = () => {
//     setValor(valor + 1);
//   };

//   useEffect(() => {
//     console.log(
//       "Este efecto se ejecuta solo una vez cuando se carga el componente"
//     );
//   }, []);

//   useEffect(() => {
//     console.log("Efecto renderizado siempre que haya un evento");
//   });

//   useEffect(() => {
//     console.log("Se detecto cambio en valor");
//   }, [valor]);

//   return (
//     <>
//       <header>
//         <h1>Pagina de efectos</h1>
//         <button onClick={aumentar}>Saludar</button>
//       </header>
//     </>
//   );
// };

// export default EfectosPage;
