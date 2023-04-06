import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <div className="grid grid-cols-3 place-content-evenly gap-48">
      {items.map((producto) => (
        <Item key={producto.id} item={producto} />
      ))}
    </div>
  );
};
export default ItemList;
