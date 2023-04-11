import "./ItemListContainer.scss";
import { useState, useEffect } from "react";
import { pedirDatos } from "../../helpers/pedirDatos";
import ItemList from "../ItemList/ItemList";

export const ItemListContainer = ({ recom, category }) => {
  if (recom) {
  } else {
    recom = false;
  }
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    pedirDatos(recom)
      .then((response) => {
        if (category == "") {
          setProductos(response);
        } else {
          setProductos(response.filter((prod) => prod.category === category));
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="h-max">
      <div className=" h-full bg-custom-gris pt-5 pb-160">
        {loading ? <h1>Cargando...</h1> : <ItemList items={productos} />}
      </div>
    </div>
  );
};
