import { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: null,
    logged: false,
  });
  const login = (values) => {
    setUser({
      email: values.email,
      logged: true,
    });
  };

  return (
    <LoginContext.Provider value={{ user, login }}>
      {children}
    </LoginContext.Provider>
  );
};
