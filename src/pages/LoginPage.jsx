// import React, { useContext } from "react";
// import { AuthContext } from "../auth/AuthContext";

// const LoginPage = () => {
//   const { login } = useContext(AuthContext);
//   return (
//     <>
//       <header>
//         <h1>Login</h1>
//       </header>
//       <main>
//         <article>
//           <button className="btn btn-success" onClick={login}>
//             Login
//           </button>
//         </article>
//       </main>
//     </>
//   );
// };

// export default LoginPage;

import React, { useState, useRef, useEffect, useContext } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../auth/AuthContext";

const initialFormState = {
  userName: "",
  password: "",
};

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState(initialFormState);
  const [user, setUser] = useState([]);
  const userNameRef = useRef();

  const loginUser = async () => {
    try {
      console.log(process.env.REACT_APP_API_KEY)
      const auth = getAuth();
      const { userName, password } = form;
      const resp = await signInWithEmailAndPassword(auth, userName, password);

      setUser({ uid: resp.user.uid, email: resp.user.email });
    } catch (error) {
      const errorMessage = error.message;

      setUser({ errorMessage: errorMessage });
    }
  };

  useEffect(() => {
    userNameRef.current.focus();
  }, []);

  return (
    <>
      <header>
        <h1>Login User</h1>
      </header>
      <main>
        <article>
          <form>
            <div className="mb-3">
              <label htmlFor="userName">Usuario</label>
              <input
                ref={userNameRef}
                id="userName"
                type="email"
                className="form-control"
                placeholder="JESUS"
                autoComplete="off"
                value={form.userName}
                onChange={(e) => setForm({ ...form, userName: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password">Contrasenia</label>
              <input
                id="password"
                type="password"
                className="form-control"
                placeholder="*******"
                autoComplete="off"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <button
                type="button"
                className="btn btn-success"
                onClick={loginUser}
              >
                Iniciar Sesion
              </button>
              <button className="btn btn-success" onClick={login}>
                Login
              </button>
            </div>
          </form>
        </article>
      </main>
      {user.uid ? (
        <section>
          <article className="alert alert-success text-center">
            <p>
              Usuario iniciado con: <strong>{user.uid}</strong>
            </p>
          </article>
        </section>
      ) : (
        <section>
          {user.errorMessage ? (
            <article className="alert alert-danger text-center">
              <p>
                <strong>{user.errorMessage}</strong>
              </p>
            </article>
          ) : (
            <article className="alert alert-dark text-center">
              <p>Esperando escaneo</p>
            </article>
          )}
        </section>
      )}
    </>
  );
};

export default LoginPage;
