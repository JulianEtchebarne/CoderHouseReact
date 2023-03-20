import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "../ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";

const Tabaqueria = () => {
  return (
    <div>
      <h1 className="mt-100 text-2xl">Tabaquería</h1>
      <hr className="border-4 border-solid border-black"></hr>
      <ItemListContainer recom={false} category="Tabaqueria" />
    </div>
  );
};
export default Tabaqueria;
