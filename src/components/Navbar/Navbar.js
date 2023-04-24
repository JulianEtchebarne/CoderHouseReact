import "./Navbar.scss";
import { CartWidget } from "./CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../Context/LoginContext";

export const Navbar = () => {
  const { logout } = useContext(LoginContext);

  return (
    <header className="mb-170">
      <div>
        <nav>
          <button className="mr-12.5rem bg-red-700" onClick={logout}>
            LOGOUT
          </button>
          <Link className="mr-4.25rem" to="/">
            Inicio
          </Link>
          <Link className="pr-16.5rem" to="/catalogo">
            Catálogo
          </Link>
          <Link to="/tabaqueria">Tabaquería</Link>
          <div className="logo_container">
            <img src="../logo512.png" alt="Logo" />
          </div>
          <Link className="" to="cocteleria">
            Coctelería
          </Link>
          <CartWidget />
        </nav>
      </div>
    </header>
  );
};
