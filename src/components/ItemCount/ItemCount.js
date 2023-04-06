const ItemCount = ({ maximo, cantidad, setCantidad, handleAgregar }) => {
  const handleSumar = () => {
    cantidad < maximo && setCantidad(cantidad + 1);
  };
  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  return (
    <div>
      <button
        onClick={handleRestar}
        className="rounded-lg bg-blue-500 py-2 px-4 font-semibold text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        -
      </button>
      <span>{cantidad}</span>
      <button
        onClick={handleSumar}
        className="rounded-lg bg-blue-500 py-2 px-4 font-semibold text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        +
      </button>
      <button
        onClick={handleAgregar}
        className="btn bg-green-500 py-2 px-4 font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
