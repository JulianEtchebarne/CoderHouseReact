import "./ItemListContainer.scss";
import { useState, useEffect } from "react";
import { pedirDatos } from "../../helpers/pedirDatos";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

export const ItemListContainer = ({ recom, category }) => {
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
    <div>
      <div className="flex bg-custom-gris p-100">
        <ul>
          {loading ? <h1>Cargando...</h1> : <ItemList items={productos} />}
        </ul>
      </div>
    </div>
  );
};
