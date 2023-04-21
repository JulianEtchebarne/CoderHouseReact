import { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Navigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const Checkout = () => {
  const { cart, totalCantidadCart, vaciarCarrito } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

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

    const ordersRef = collection(db, "orders");

    addDoc(ordersRef, orden).then((doc) => {
      setOrderId(doc.id);
      vaciarCarrito();
    });

    console.log("Submit", orden);
  };

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  if (orderId) {
    return (
      <div>
        <h2 className="mt-5">Tu orden se regustró correctamente!</h2>
        <hr />
        <p>Tu número de orden es: {orderId}</p>
      </div>
    );
  }

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
