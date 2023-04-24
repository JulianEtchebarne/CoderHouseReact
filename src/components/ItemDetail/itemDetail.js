import { Link, useNavigate } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const ItemDetail = ({ item }) => {
  const { agregarAlCarrito, isInCart } = useContext(CartContext);

  const [cantidad, setCantidad] = useState(1);

  const navigate = useNavigate();

  const handleVolver = () => {
    navigate(-1);
  };
  const handleAgregar = () => {
    const newItem = {
      ...item,
      cantidad,
    };
    agregarAlCarrito(newItem);
  };

  return (
    <div>
      <div className="flex justify-center">
        <img
          className="flex justify-center pt-10"
          src={item.img}
          alt={item.name}
        ></img>
      </div>
      <div className="flex justify-center">
        <h2 className="mb-4 text-4xl">{item.name}</h2>
      </div>
      <div className="flex justify-center">{item.description}</div>
      <div className="flex justify-center">
        <h3 className="mb-4 text-4xl">
          <strong>${item.price}</strong>
        </h3>
      </div>
      <div className="flex justify-center">
        <Link
          to={`/catalogo/${item.id}`}
          className="btn rounded bg-blue-500 px-4 py-2  hover:bg-blue-700"
        >
          Ver más
        </Link>
      </div>
      <div className="mt-5 flex justify-center">
        <button
          onClick={handleVolver}
          className="btn flex justify-center rounded px-4 py-2"
        >
          Volver
        </button>

        {isInCart(item.id) ? (
          <Link to="/cart" className="ml-5 bg-green-500 py-2 px-4">
            Terminar mi compra
          </Link>
        ) : (
          <ItemCount
            maximo={item.stock}
            cantidad={cantidad}
            setCantidad={setCantidad}
            handleAgregar={handleAgregar}
          />
        )}
      </div>
    </div>
  );
};
export default ItemDetail;
