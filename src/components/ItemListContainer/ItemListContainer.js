import "./ItemListContainer.scss";
import { useState, useEffect } from "react";
import { pedirDatos } from "../../helpers/pedirDatos";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    pedirDatos()
      .then((response) => {
        if (!categoryId) {
          setProductos(response);
        } else {
          setProductos(response.filter((prod) => prod.category === categoryId));
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

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
