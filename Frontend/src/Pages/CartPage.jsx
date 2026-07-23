import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ThemeContext from "../context/Theme/ThemeContext.jsx";
import CartContext from "../context/Cart/CartContext.jsx";
import ProductContext from "../context/Product/ProductContext.jsx";
import CartLayout from "../components/commerce/Cart/CartLayout.jsx";

export default function CartPage() {
  const { cartItems, updateCart } = useContext(CartContext);
  const { product } = useContext(ProductContext);
  const { dark } = useContext(ThemeContext);
  const navigate = useNavigate();

  const [shippingMethod, setShippingMethod] = useState("standard");
  const [promoCode, setPromoCode] = useState("");
  const [isPromoApplied, setIsPromoApplied] = useState(false);

  // Parse legacy/current cart items structure safely
  const items = Object.entries(cartItems)
    .map(([itemId, cartVal]) => {
      const quantity = typeof cartVal === "object" ? cartVal.quantity : cartVal;
      return {
        _id: itemId,
        quantity,
      };
    })
    .filter((item) => item.quantity > 0);

  // Calculate pricing components
  const subtotal = items.reduce((sum, item) => {
    const productData = product.find((p) => p._id === item._id);
    return sum + (productData ? productData.price * item.quantity : 0);
  }, 0);

  const shippingFee = shippingMethod === "express" ? 25 : subtotal > 100 || subtotal === 0 ? 0 : 10;
  const discount = isPromoApplied ? subtotal * 0.1 : 0;
  const tax = subtotal * 0.08;
  const total = subtotal - discount + shippingFee + tax;

  const handleApplyPromo = (code) => {
    if (code.toUpperCase() === "CADENCE10") {
      setPromoCode("CADENCE10");
      setIsPromoApplied(true);
      toast.success("Promo code CADENCE10 applied! 10% discount off subtotal.");
    } else {
      toast.error("Invalid promo code! Try using CADENCE10");
    }
  };

  const handleRemovePromo = () => {
    setPromoCode("");
    setIsPromoApplied(false);
    toast.info("Promo code removed.");
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const handleUpdateQuantity = (action, id) => {
    updateCart(action, id);
  };

  const handleRemoveItem = (id) => {
    updateCart("remove", id);
    toast.info("Item removed from cart.");
  };

  return (
    <div className={`min-h-screen ${dark ? "bg-zinc-950 text-white" : "bg-white text-zinc-900"}`}>
      <CartLayout
        items={items}
        products={product}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        subtotal={subtotal}
        shippingFee={shippingFee}
        tax={tax}
        discount={discount}
        total={total}
        onCheckout={handleCheckout}
        promoCode={promoCode}
        onApplyPromo={handleApplyPromo}
        onRemovePromo={handleRemovePromo}
        isPromoApplied={isPromoApplied}
        shippingMethod={shippingMethod}
        onShippingMethodChange={setShippingMethod}
      />
    </div>
  );
}
