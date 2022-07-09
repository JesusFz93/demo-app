import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

const initialState = {
  uid: null,
  checking: true,
  logged: false,
  name: null,
  user_name: null,
  rol_name: null,
  loading: false,
  image: null,
  first_name: null,
  last_name: null,
  email: null,
  phone: null,
  createdAt: null,
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialState);

  const login = () => {
    setAuth({
      ...auth,
      logged: true,
    });
  };

  const logout = () => {
    setAuth({
      ...auth,
      logged: false,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
