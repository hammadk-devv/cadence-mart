import AuthProvider from "../../context/Auth/AuthProvider";
import ProductState from "../../context/Product/ProductState";
import CartProvider from "../../context/Cart/CartProvider";
import ThemeProvider from "../../context/Theme/ThemeProvider";

export default function AppProviders({ children }) {
  return (
    <AuthProvider>
      <ProductState>
        <CartProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </CartProvider>
      </ProductState>
    </AuthProvider>
  );
}
