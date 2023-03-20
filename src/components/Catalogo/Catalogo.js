import { ItemListContainer } from "../ItemListContainer/ItemListContainer";

const Catalogo = () => {
  return (
    <div>
      <h1 className="mt-100 text-2xl">Catálogo</h1>
      <hr className="border-4 border-solid border-black"></hr>
      <ItemListContainer recom={false} category="" />
    </div>
  );
};
export default Catalogo;
