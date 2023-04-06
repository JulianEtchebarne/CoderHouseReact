import "./Navbar.scss";
import { CartWidget } from "./CartWidget/CartWidget";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header>
      <div className="header_container">
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/catalogo">Catálogo</Link>
          <Link to="/tabaqueria">Tabaquería</Link>
          <div className="logo_container">
            <img src="../logo512.png" alt="Logo" />
          </div>
          <Link to="cocteleria">Coctelería</Link>
          <Link to="puntosdeventa">Puntos de venta</Link>
          <Link to="contacto">Contacto</Link>
          <CartWidget />
        </nav>
      </div>
    </header>
  );
};
