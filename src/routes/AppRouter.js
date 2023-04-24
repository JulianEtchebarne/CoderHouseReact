import { useContext } from "react";
import { LoginContext } from "../Context/LoginContext";
import { Navbar } from "../components/Navbar/Navbar";
import { Bienvenido } from "../components/Bienvenido/Bienvenido";
import Catalogo from "../components/Catalogo/Catalogo";
import Cocteleria from "../components/Cocteleria/Cocteleria";
import Tabaqueria from "../components/Tabaqueria/Tabaqueria";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Cart from "../components/Cart/Cart";
import LoginScreen from "../components/LoginScreen/LoginScreen";
import Checkout from "../components/Checkout/Checkout";
import RegisterScreen from "../components/RegisterScreen/RegisterScreen";

const AppRouter = () => {
  const { user } = useContext(LoginContext);

  return (
    <BrowserRouter>
      {user.logged ? (
        //RUTAS PRIVADAS
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Bienvenido greeting="AOLCC" />} />
            <Route path="/catalogo/" element={<Catalogo />} />
            <Route path="/catalogo/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cocteleria" element={<Cocteleria />} />
            <Route path="/tabaqueria" element={<Tabaqueria />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </>
      ) : (
        //RUTAS PUBLICAS
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default AppRouter;
