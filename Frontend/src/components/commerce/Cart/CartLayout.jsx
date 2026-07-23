import Container from "../../ui/Container";
import CartHeader from "./CartHeader";
import CartItems from "./CartItems";
import OrderSummary from "./OrderSummary";
import CartRecommendations from "./CartRecommendations";
import CartEmptyState from "./CartEmptyState";

export default function CartLayout({
  items = [],
  products = [],
  onUpdateQuantity,
  onRemoveItem,
  subtotal,
  shippingFee,
  tax,
  discount,
  total,
  onCheckout,
  promoCode,
  onApplyPromo,
  onRemovePromo,
  isPromoApplied,
  shippingMethod,
  onShippingMethodChange,
}) {
  if (items.length === 0) {
    return (
      <Container className="py-8">
        <CartEmptyState />
        <CartRecommendations products={products} />
      </Container>
    );
  }

  return (
    <Container className="py-8">
      <CartHeader itemCount={items.length} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8">
          <CartItems
            items={items}
            products={products}
            onUpdateQuantity={onUpdateQuantity}
            onRemoveItem={onRemoveItem}
          />
        </div>

        <div className="lg:col-span-4">
          <OrderSummary
            subtotal={subtotal}
            shippingFee={shippingFee}
            tax={tax}
            discount={discount}
            total={total}
            onCheckout={onCheckout}
            promoCode={promoCode}
            onApplyPromo={onApplyPromo}
            onRemovePromo={onRemovePromo}
            isPromoApplied={isPromoApplied}
            shippingMethod={shippingMethod}
            onShippingMethodChange={onShippingMethodChange}
          />
        </div>
      </div>

      <CartRecommendations products={products} />
    </Container>
  );
}
