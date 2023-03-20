import { ItemListContainer } from "../ItemListContainer/ItemListContainer";

const Cocteleria = () => {
  return (
    <div>
      <h1 className="mt-100 text-2xl">Coctelería</h1>
      <hr className="border-4 border-solid border-black"></hr>
      <ItemListContainer recom={false} category="Cocteleria" />
    </div>
  );
};
export default Cocteleria;
