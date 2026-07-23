import { useContext, useState } from "react";
import { toast } from "react-toastify";
import ThemeContext from "../context/Theme/ThemeContext.jsx";
import CartContext from "../context/Cart/CartContext.jsx";
import ProductContext from "../context/Product/ProductContext.jsx";
import CheckoutLayout from "../components/commerce/Checkout/CheckoutLayout";
import { placeOrder } from "../services/ordersService";

export default function Checkout() {
  const { cartItems, updateCart } = useContext(CartContext);
  const { product } = useContext(ProductContext);
  const { dark } = useContext(ThemeContext);

  const [step, setStep] = useState(0);
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });
  const [deliveryMethod, setDeliveryMethod] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [isPlacing, setIsPlacing] = useState(false);
  const [orderError, setOrderError] = useState("");
  const [successOrderId, setSuccessOrderId] = useState("");

  const stepsConfig = [
    { label: "Address" },
    { label: "Delivery" },
    { label: "Payment" },
    { label: "Review" },
  ];

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

  // Calculate prices
  const subtotal = items.reduce((sum, item) => {
    const productData = product.find((p) => p._id === item._id);
    return sum + (productData ? productData.price * item.quantity : 0);
  }, 0);

  const shippingFee = deliveryMethod === "express" ? 25 : subtotal > 100 || subtotal === 0 ? 0 : 10;
  const discount = 0; // Configured at cart checkout levels
  const tax = subtotal * 0.08;
  const total = subtotal - discount + shippingFee + tax;

  const handleAddressSubmit = (data) => {
    setAddress(data);
    setStep(1);
  };

  const handleDeliverySubmit = () => {
    setStep(2);
  };

  const handlePaymentSubmit = () => {
    setStep(3);
  };

  const handlePlaceOrder = async () => {
    setIsPlacing(true);
    setOrderError("");
    try {
      const orderPayload = {
        items,
        address,
        deliveryMethod,
        paymentMethod,
        billing: {
          subtotal,
          shippingFee,
          tax,
          total,
        },
      };

      const result = await placeOrder(orderPayload);
      if (result.success) {
        setSuccessOrderId(result.orderId);
        toast.success("Order placed successfully!");

        // Clear cart items
        for (const item of items) {
          updateCart("remove", item._id);
        }
      } else {
        setOrderError(result.message || "Failed to place order.");
      }
    } catch (err) {
      setOrderError(err.message || "An unexpected error occurred during order processing.");
    } finally {
      setIsPlacing(false);
    }
  };

  return (
    <div className={`min-h-screen ${dark ? "bg-zinc-950 text-white" : "bg-white text-zinc-900"}`}>
      <CheckoutLayout
        cartItems={items}
        step={step}
        onStepChange={setStep}
        stepsConfig={stepsConfig}
        address={address}
        onAddressSubmit={handleAddressSubmit}
        deliveryMethod={deliveryMethod}
        onDeliveryMethodChange={setDeliveryMethod}
        onDeliverySubmit={handleDeliverySubmit}
        paymentMethod={paymentMethod}
        onPaymentMethodChange={setPaymentMethod}
        onPaymentSubmit={handlePaymentSubmit}
        subtotal={subtotal}
        shippingFee={shippingFee}
        tax={tax}
        discount={discount}
        total={total}
        onPlaceOrder={handlePlaceOrder}
        isPlacing={isPlacing}
        orderError={orderError}
        successOrderId={successOrderId}
      />
    </div>
  );
}
