import { Navbar } from "./components/Navbar/Navbar";
import { Bienvenido } from "./components/Bienvenido/Bienvenido";
import Catalogo from "./components/Catalogo/Catalogo";
import Cocteleria from "./components/Cocteleria/Cocteleria";
import Contacto from "./components/Contacto/Contacto";
import PuntosDeVenta from "./components/Puntos de Venta/PuntosDeVenta";
import Tabaqueria from "./components/Tabaqueria/Tabaqueria";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import LoginScreen from "./components/LoginScreen/LoginScreen";
import { LoginProvider } from "./Context/LoginContext";
import { CartProvider } from "./Context/CartContext";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <LoginProvider>
      <CartProvider>
        <AppRouter></AppRouter>
      </CartProvider>
    </LoginProvider>
  );
}

export default App;
