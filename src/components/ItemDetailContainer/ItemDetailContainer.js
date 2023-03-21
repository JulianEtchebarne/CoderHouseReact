import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pedirProductoPorId } from "../../helpers/pedirDatos";
import ItemDetail from "../ItemDetail/itemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    pedirProductoPorId(Number(itemId))
      .then((resp) => {
        setItem(resp);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="h-screen bg-custom-gris">
      {loading ? <hr></hr> : <ItemDetail item={item} />}
    </div>
  );
};
export default ItemDetailContainer;
