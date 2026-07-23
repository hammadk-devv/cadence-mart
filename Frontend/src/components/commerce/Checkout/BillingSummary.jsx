import Price from "../Price";

export default function BillingSummary({ subtotal, shippingFee, tax, discount, total }) {
  return (
    <div className="flex flex-col gap-3 text-sm select-none">
      <div className="flex justify-between">
        <span className="text-[var(--color-text-secondary)] font-medium">Subtotal</span>
        <Price value={subtotal} size="sm" className="font-bold text-[var(--color-text-primary)]" />
      </div>

      {discount > 0 && (
        <div className="flex justify-between text-[var(--color-success)]">
          <span className="font-bold">Promo Discount</span>
          <span className="font-extrabold">
            - <Price value={discount} size="sm" />
          </span>
        </div>
      )}

      <div className="flex justify-between">
        <span className="text-[var(--color-text-secondary)] font-medium">Shipping</span>
        {shippingFee === 0 ? (
          <span className="text-[var(--color-success)] font-extrabold uppercase text-xs">Free</span>
        ) : (
          <Price
            value={shippingFee}
            size="sm"
            className="font-bold text-[var(--color-text-primary)]"
          />
        )}
      </div>

      <div className="flex justify-between">
        <span className="text-[var(--color-text-secondary)] font-medium">Tax (8%)</span>
        <Price value={tax} size="sm" className="font-bold text-[var(--color-text-primary)]" />
      </div>

      <div className="flex justify-between items-baseline border-t border-[var(--color-border)] pt-3 mt-1">
        <span className="font-black text-[var(--color-text-primary)] text-base">Grand Total</span>
        <Price value={total} size="lg" />
      </div>
    </div>
  );
}
