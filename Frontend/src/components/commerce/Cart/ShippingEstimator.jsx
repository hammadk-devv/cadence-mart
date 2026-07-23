import Select from "../../ui/Select";
import Typography from "../../ui/Typography";

export default function ShippingEstimator({ method, onChange, className = "" }) {
  const options = [
    { value: "standard", label: "Standard Delivery (Free over $100, or $10.00)" },
    { value: "express", label: "Express Delivery ($25.00)" },
  ];

  return (
    <div className={`border-t border-[var(--color-border)] pt-4 select-none ${className}`}>
      <Typography
        variant="body-sm"
        className="font-bold text-[var(--color-text-secondary)] uppercase text-xs tracking-wider mb-2"
      >
        Shipping Method
      </Typography>
      <Select
        id="shipping-method-selector"
        value={method}
        onChange={(e) => onChange(e.target.value)}
        options={options}
        label=""
      />
    </div>
  );
}
