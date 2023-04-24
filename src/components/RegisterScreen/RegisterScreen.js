import { useContext, useState } from "react";
import { LoginContext } from "../../Context/LoginContext";
import { Link } from "react-router-dom";

const RegisterScreen = () => {
  const { register } = useContext(LoginContext);
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
    register(values);
  };

  return (
    <div>
      <div>
        <h2>Registrate!</h2>
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
          <button type="submit">Crear usuario</button>
        </form>
        <Link to="/login">¿Ya tienes una cuenta? Inicia sesión Aquí</Link>
      </div>
    </div>
  );
};
export default RegisterScreen;
