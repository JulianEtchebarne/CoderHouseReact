import { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Navigate } from "react-router-dom";
import {
  collection,
  addDoc,
  writeBatch,
  query,
  where,
  documentId,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase/config";

const Checkout = () => {
  const { cart, totalCantidadCart, vaciarCarrito } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const [values, setValues] = useState({
    nombre: "",
    direccion: "",
    email: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const batch = writeBatch(db);

    const ordersRef = collection(db, "orders");
    const productosRef = collection(db, "productos");

    //valiaciones
    const orden = {
      cliente: values,
      items: cart,
      total: totalCantidadCart(),
      fecha: new Date(),
    };

    //Agregar orden a FIREBASE

    const itemsRef = query(
      productosRef,
      where(
        documentId(),
        "in",
        cart.map((prod) => prod.id)
      )
    );

    const sinStock = [];

    const response = await getDocs(itemsRef);

    response.docs.forEach((doc) => {
      const item = cart.find((prod) => prod.id === doc.id);

      if (doc.data().stock >= item.cantidad) {
        batch.update(doc.ref, {
          stock: doc.data().stock - item.cantidad,
        });
      } else {
        sinStock.push(item);
      }
    });

    if (sinStock.length === 0) {
      await batch.commit();
      addDoc(ordersRef, orden)
        //Vaciar carrito y referenciar el ID de la compra
        .then((doc) => {
          setOrderId(doc.id);
          vaciarCarrito();
        });
    } else {
      setOrderId(null);
      alert("Hay items sin stock");
    }
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
        <h2 className="mt-5">Tu orden se registró correctamente!</h2>
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
      <h2>Checkout</h2>
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
