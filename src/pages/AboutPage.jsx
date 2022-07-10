import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

const AboutPage = () => {
  const { auth } = useContext(AuthContext);
  return (
    <>
      <header>
        <title>About</title>
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
      </header>
    </>
  );
};

export default AboutPage;
