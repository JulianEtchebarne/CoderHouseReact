import { Navbar } from "./components/Navbar/Navbar";
import { Bienvenido } from "./components/Bienvenido/Bienvenido";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Bienvenido greeting="AOLCC" />} />
        <Route path="/catalogo/:categoryId" element={<ItemListContainer />} />
        <Route path="/detalle/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
