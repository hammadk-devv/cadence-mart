import Container from "../../ui/Container";
import CheckoutHeader from "./CheckoutHeader";
import CheckoutStepper from "./CheckoutStepper";
import CheckoutSection from "./CheckoutSection";
import ShippingAddressForm from "./ShippingAddressForm";
import AddressCard from "./AddressCard";
import DeliveryMethod from "./DeliveryMethod";
import PaymentSection from "./PaymentSection";
import BillingSummary from "./BillingSummary";
import PlaceOrderButton from "./PlaceOrderButton";
import CheckoutSuccess from "./CheckoutSuccess";
import CheckoutEmptyState from "./CheckoutEmptyState";
import CheckoutErrorState from "./CheckoutErrorState";
import Typography from "../../ui/Typography";

export default function CheckoutLayout({
  cartItems = [],
  step,
  onStepChange,
  stepsConfig,
  address,
  onAddressSubmit,
  deliveryMethod,
  onDeliveryMethodChange,
  onDeliverySubmit,
  paymentMethod,
  onPaymentMethodChange,
  onPaymentSubmit,
  subtotal,
  shippingFee,
  tax,
  discount,
  total,
  onPlaceOrder,
  isPlacing,
  orderError,
  successOrderId,
}) {
  if (successOrderId) {
    return (
      <Container className="py-8">
        <CheckoutSuccess orderId={successOrderId} />
      </Container>
    );
  }

  if (cartItems.length === 0) {
    return (
      <Container className="py-8">
        <CheckoutEmptyState />
      </Container>
    );
  }

  return (
    <Container className="py-8">
      <CheckoutHeader />

      <CheckoutStepper steps={stepsConfig} currentStep={step} onStepClick={onStepChange} />

      <CheckoutErrorState error={orderError} className="mb-6" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 flex flex-col gap-6">
          <CheckoutSection title="1. Shipping Address" isCompleted={step > 0} isActive={step === 0}>
            <ShippingAddressForm onSubmit={onAddressSubmit} initialData={address} />
          </CheckoutSection>

          <CheckoutSection title="2. Delivery Method" isCompleted={step > 1} isActive={step === 1}>
            <DeliveryMethod
              selectedMethod={deliveryMethod}
              onChange={onDeliveryMethodChange}
              onSubmit={onDeliverySubmit}
            />
          </CheckoutSection>

          <CheckoutSection title="3. Payment Method" isCompleted={step > 2} isActive={step === 2}>
            <PaymentSection
              selectedMethod={paymentMethod}
              onChange={onPaymentMethodChange}
              onSubmit={onPaymentSubmit}
            />
          </CheckoutSection>

          <CheckoutSection title="4. Order Review" isCompleted={step > 3} isActive={step === 3}>
            <div className="flex flex-col gap-4 text-sm select-none">
              <div className="flex flex-col gap-2">
                <Typography
                  variant="body-sm"
                  className="font-bold text-[var(--color-text-secondary)] uppercase text-xs tracking-wider"
                >
                  Shipping Destination:
                </Typography>
                <AddressCard addressData={address} />
              </div>
              <div className="flex flex-col gap-1 border-t border-[var(--color-border)] pt-4">
                <Typography
                  variant="body-sm"
                  className="font-bold text-[var(--color-text-secondary)] uppercase text-xs tracking-wider"
                >
                  Delivery Speed Selection:
                </Typography>
                <span className="font-extrabold text-[var(--color-text-primary)]">
                  {deliveryMethod === "express"
                    ? "Express Delivery (2 days)"
                    : "Standard Delivery (3-5 days)"}
                </span>
              </div>
              <div className="flex flex-col gap-1 border-t border-[var(--color-border)] pt-4">
                <Typography
                  variant="body-sm"
                  className="font-bold text-[var(--color-text-secondary)] uppercase text-xs tracking-wider"
                >
                  Payment selection:
                </Typography>
                <span className="font-extrabold text-[var(--color-text-primary)] capitalize">
                  {paymentMethod === "cod"
                    ? "Cash on Delivery"
                    : paymentMethod === "card"
                      ? "Credit Card"
                      : "PayPal"}
                </span>
              </div>
              <div className="border-t border-[var(--color-border)] pt-4 mt-2">
                <PlaceOrderButton onClick={onPlaceOrder} isLoading={isPlacing} />
              </div>
            </div>
          </CheckoutSection>
        </div>

        <div className="lg:col-span-4 border border-[var(--color-border)] rounded-[var(--radius-lg)] p-6 bg-[var(--color-card-bg)] shadow-[var(--shadow-md)] sticky top-24">
          <Typography
            variant="h4"
            className="font-extrabold text-[var(--color-text-primary)] border-b border-[var(--color-border)] pb-3 mb-4 select-none"
          >
            Billing Summary
          </Typography>
          <BillingSummary
            subtotal={subtotal}
            shippingFee={shippingFee}
            tax={tax}
            discount={discount}
            total={total}
          />
        </div>
      </div>
    </Container>
  );
}
