import "./Bienvenido.scss";
import { ItemListContainer } from "../ItemListContainer/ItemListContainer";

export const Bienvenido = ({ greeting }) => {
  return (
    <div>
      <section>
        <img
          src="fondo.png"
          className="imagenPrincipalFondo"
          alt="fondo Web"
        ></img>
        <h1>{greeting}</h1>
        <h2>
          Descubre nuestra amplia selección de bebidas de alta calidad y
          encuentra el perfecto compañero para cada ocasión. Desde el refinado
          sabor del whisky, hasta la versatilidad del gin y el vodka, tenemos
          todo lo que necesitas para satisfacer tus gustos. ¡Salud!
        </h2>
      </section>
      <ItemListContainer recom={true} category="" />
    </div>
  );
};
