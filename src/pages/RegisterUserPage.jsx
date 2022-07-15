import React, { useState, useRef, useEffect } from "react";

const initialFormState = {
  userName: "",
  password: "",
};

const RegisterUserPage = () => {
  const [form, setForm] = useState(initialFormState);
  // const [user, setUser] = useState([]);
  const userNameRef = useRef();

  const createUser = async () => {
    console.log(form);
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
                type="text"
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
                type="text"
                className="form-control"
                placeholder="*******"
                autoComplete="off"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </div>
          </form>
        </article>
      </main>
      <section>
        <article>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button className="btn btn-success" onClick={createUser}>
              Registrar Usuario
            </button>
          </div>
        </article>
      </section>
    </>
  );
};

export default RegisterUserPage;
