import { LoginProvider } from "./Context/LoginContext";
import { CartProvider } from "./Context/CartContext";
import AppRouter from "./routes/AppRouter";
import Fondo from "./helpers/Fondo.js";

function App() {
  return (
    <Fondo>
      <LoginProvider>
        <CartProvider>
          <AppRouter></AppRouter>
        </CartProvider>
      </LoginProvider>
    </Fondo>
  );
}

export default App;
