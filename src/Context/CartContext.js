import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const initCart = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(initCart);

  console.log(cart);

  const agregarAlCarrito = (item) => {
    setCart([...cart, item]);
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const totalCantidadCart = () => {
    return cart.reduce((acc, prod) => acc + prod.cantidad, 0);
  };
  const totalCompra = () => {
    return cart.reduce((acc, prod) => acc + prod.cantidad * prod.price, 0);
  };

  const vaciarCarrito = () => {
    setCart([]);
  };

  const eliminarProducto = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        agregarAlCarrito,
        isInCart,
        totalCantidadCart,
        totalCompra,
        vaciarCarrito,
        eliminarProducto,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
