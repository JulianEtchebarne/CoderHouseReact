import "./ItemListContainer.scss";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

export const ItemListContainer = ({ recom, category }) => {
  if (recom) {
  } else {
    recom = false;
  }
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const productosRef = collection(db, "productos");
    const q =
      category == ""
        ? productosRef
        : query(productosRef, where("category", "==", category));
    getDocs(q)
      .then((res) => {
        const docs = res.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });

        setProductos(docs);
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
