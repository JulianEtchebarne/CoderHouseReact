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
