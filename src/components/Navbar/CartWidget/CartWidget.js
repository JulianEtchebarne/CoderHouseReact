import { CartContext } from "../../../Context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./CartWidget.scss";

export const CartWidget = () => {
  const { totalCantidadCart } = useContext(CartContext);

  return (
    <Link to="/cart">
      <img
        src="../cartWidget.png"
        className="cartWidgetClass"
        alt="cartWidget"
      ></img>
      <span style={{ color: "red", position: "absolute", marginLeft: "100px" }}>
        {totalCantidadCart()}
      </span>
    </Link>
  );
};
