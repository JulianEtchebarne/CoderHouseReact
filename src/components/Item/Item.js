import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <li key={item.id}>
      <img src={item.img} alt={item.name}></img>
      <div className="flex justify-center">
        <h2 className="mb-4 text-4xl">{item.name}</h2>
      </div>
      <div className="flex justify-center">
        <h2 className="mb-4 text-4xl">
          <strong>${item.price}</strong>
        </h2>
      </div>
      <div className="flex justify-center">
        <Link
          to={`/catalogo/${item.id}`}
          className="btn rounded bg-blue-500 px-4 py-2 hover:bg-blue-700"
        >
          Ver más
        </Link>
      </div>
    </li>
  );
};

export default Item;
