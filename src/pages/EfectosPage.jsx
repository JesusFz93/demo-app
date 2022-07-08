// import React, { useEffect, useState } from "react";

// const EfectosPage = () => {
//   const [resp, setResp] = useState([]);

//   useEffect(() => {
//     const obtenerLibros = async () => {
//       const response = await fetch("https://fakerapi.it/api/v1/books");
//       const data = await response.json();
//       setResp(data);
//     };

//     obtenerLibros();
//   }, []);

//   return (
//     <>
//       <header>
//         <h1>Pagina de efectos</h1>

//         <ul>
//           {resp.data &&
//             resp.data.map((item) => (
//               <li key={item.id}>
//                 <h2>{item.title}</h2>
//                 <p>{item.author}</p>
//                 <p>{item.description}</p>
//               </li>
//             ))}
//         </ul>
//       </header>
//     </>
//   );
// };

// export default EfectosPage;

import React, { useEffect, useState } from "react";

const EfectosPage = () => {
  const [contador, setContador] = useState(0);

  const aumentar = () => {
    setContador(contador + 1);
  };

  useEffect(() => {
    console.log(
      "Este efecto se ejecuta solo una vez cuando se carga el componente"
    );
  }, []);

  useEffect(() => {
    console.log("Efecto renderizado siempre que haya un evento");
  });

  useEffect(() => {
    console.log("Se detecto cambio en valor");
  }, [contador]);

  return (
    <>
      <header>
        <h1>Pagina de efectos</h1>
        <button onClick={aumentar}>Saludar</button>
      </header>
    </>
  );
};

export default EfectosPage;
