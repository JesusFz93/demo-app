import React, { useState, useRef, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const initialFormState = {
  userName: "",
  password: "",
};

const RegisterUserPage = () => {
  const [form, setForm] = useState(initialFormState);
  const [user, setUser] = useState([]);
  const userNameRef = useRef();

  const createUser = async () => {
    try {
      const auth = getAuth();
      const { userName, password } = form;
      const resp = await createUserWithEmailAndPassword(
        auth,
        userName,
        password
      );

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
        <h1>Register User</h1>
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
                onClick={createUser}
              >
                Registrar Usuario
              </button>
            </div>
          </form>
        </article>
      </main>
      {user.uid ? (
        <section>
          <article className="alert alert-success text-center">
            <p>
              Usuario creado con: <strong>{user.uid}</strong>
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

export default RegisterUserPage;
