import Price from "../Price";
import Button from "../../ui/Button";
import Divider from "../../ui/Divider";
import Typography from "../../ui/Typography";
import PromoCode from "./PromoCode";
import ShippingEstimator from "./ShippingEstimator";

export default function OrderSummary({
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
  isCheckoutLoading = false,
}) {
  return (
    <div className="border border-[var(--color-border)] rounded-[var(--radius-lg)] p-6 bg-[var(--color-card-bg)] shadow-[var(--shadow-md)] flex flex-col gap-4 sticky top-24">
      <Typography
        variant="h4"
        className="font-extrabold text-[var(--color-text-primary)] border-b border-[var(--color-border)] pb-3 select-none"
      >
        Order Summary
      </Typography>

      <div className="flex flex-col gap-3 text-sm select-none">
        <div className="flex justify-between">
          <span className="text-[var(--color-text-secondary)] font-medium">Subtotal</span>
          <Price
            value={subtotal}
            size="sm"
            className="font-bold text-[var(--color-text-primary)]"
          />
        </div>

        {discount > 0 && (
          <div className="flex justify-between text-[var(--color-success)]">
            <span className="font-bold">Promo Discount ({promoCode})</span>
            <span className="font-extrabold">
              - <Price value={discount} size="sm" />
            </span>
          </div>
        )}

        <div className="flex justify-between">
          <span className="text-[var(--color-text-secondary)] font-medium">Estimated Shipping</span>
          {shippingFee === 0 ? (
            <span className="text-[var(--color-success)] font-extrabold uppercase text-xs mt-0.5">
              Free
            </span>
          ) : (
            <Price
              value={shippingFee}
              size="sm"
              className="font-bold text-[var(--color-text-primary)]"
            />
          )}
        </div>

        <div className="flex justify-between">
          <span className="text-[var(--color-text-secondary)] font-medium">Estimated Tax</span>
          <Price value={tax} size="sm" className="font-bold text-[var(--color-text-primary)]" />
        </div>

        <Divider className="my-1" />

        <div className="flex justify-between items-baseline" aria-live="polite">
          <span className="font-black text-[var(--color-text-primary)] text-base">Total</span>
          <Price value={total} size="lg" />
        </div>
      </div>

      <ShippingEstimator method={shippingMethod} onChange={onShippingMethodChange} />

      <PromoCode
        promoCode={promoCode}
        onApplyPromo={onApplyPromo}
        onRemovePromo={onRemovePromo}
        isApplied={isPromoApplied}
      />

      <Button
        variant="primary"
        onClick={onCheckout}
        isLoading={isCheckoutLoading}
        className="w-full font-bold uppercase py-3.5 mt-2"
      >
        Proceed to Checkout
      </Button>
    </div>
  );
}
