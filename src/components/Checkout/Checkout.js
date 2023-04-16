import { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Navigate } from "react-router-dom";

const Checkout = () => {
  const { cart, totalCantidadCart } = useContext(CartContext);

  const [values, setValues] = useState({
    nombre: "",
    direccion: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    //valiaciones
    const orden = {
      cliente: values,
      items: cart,
      total: totalCantidadCart(),
      fecha: new Date(),
    };

    console.log("Submit", orden);
  };

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  if (cart.lenght === 0) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h2 className="mt-6">Checkout</h2>
      <hr />

      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          value={values.nombre}
          type={"text"}
          placeholder="Tu nombre"
          name="nombre"
        ></input>
        <input
          onChange={handleInputChange}
          value={values.direccion}
          type={"text"}
          placeholder="Direccion"
          name="direccion"
        ></input>
        <input
          onChange={handleInputChange}
          value={values.email}
          type={"email"}
          placeholder="Tu Email"
          name="email"
        ></input>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Checkout;
