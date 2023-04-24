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
      <span className="white absloute ml-100">{totalCantidadCart()}</span>
    </Link>
  );
};
