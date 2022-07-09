import React, { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  return (
    <>
      <header>
        <h1>Login</h1>
      </header>
      <main>
        <article>
          <button className="btn btn-success" onClick={login}>
            Login
          </button>
        </article>
      </main>
    </>
  );
};

export default LoginPage;
