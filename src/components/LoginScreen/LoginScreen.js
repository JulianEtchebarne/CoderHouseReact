import { useContext, useState } from "react";
import { LoginContext } from "../../Context/LoginContext";

const LoginScreen = () => {
  const { login } = useContext(LoginContext);
  const [values, setValues] = useState({
    email: "",
    contrasena: "",
  });

  const handleValues = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(values);
  };

  return (
    <div>
      <div>
        <h2>Login</h2>
        <hr />
        <form onSubmit={handleSubmit}>
          <input
            value={values.email}
            onChange={handleValues}
            type={"text"}
            placeholder="Tu email"
            name="email"
          ></input>
          <input
            value={values.contrasena}
            type={"text"}
            onChange={handleValues}
            placeholder="Contraseña"
            name="contrasena"
          ></input>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};
export default LoginScreen;
