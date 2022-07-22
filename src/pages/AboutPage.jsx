import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import Title from "../components/Title";

const AboutPage = () => {
  const { auth } = useContext(AuthContext);
  return (
    <>
      <Title titulo="About Page" />
      <main>
        {auth.logged ? (
          <article>
            <p>Seccion privada</p>
          </article>
        ) : (
          <article>
            <p>Logearse para ver la seccion privada</p>
            <Link to="/login">Logearse</Link>
          </article>
        )}
      </main>
    </>
  );
};

export default AboutPage;
