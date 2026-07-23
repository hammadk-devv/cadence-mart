import Button from "../../ui/Button";
import Typography from "../../ui/Typography";

export default function DeliveryMethod({ selectedMethod, onChange, onSubmit }) {
  const methods = [
    {
      id: "standard",
      label: "Standard Delivery",
      eta: "Delivered in 3-5 business days",
      cost: 10,
      costLabel: "or FREE on orders over $100",
    },
    {
      id: "express",
      label: "Express Delivery",
      eta: "Delivered in 2 business days",
      cost: 25,
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        {methods.map((method) => {
          const isSelected = selectedMethod === method.id;
          return (
            <button
              type="button"
              key={method.id}
              onClick={() => onChange(method.id)}
              className={`p-4 border rounded-[var(--radius-md)] flex justify-between items-center text-left focus-ring transition-all ${
                isSelected
                  ? "border-[var(--color-primary)] bg-[var(--color-primary)]/5"
                  : "border-[var(--color-border)] hover:bg-[var(--color-bg-secondary)]"
              }`}
            >
              <div className="flex flex-col gap-0.5 select-none">
                <Typography
                  variant="body-sm"
                  className="font-extrabold text-[var(--color-text-primary)]"
                >
                  {method.label}
                </Typography>
                <Typography
                  variant="body-xs"
                  className="text-[var(--color-text-secondary)] font-medium"
                >
                  {method.eta}
                </Typography>
              </div>
              <div className="text-right select-none">
                <Typography
                  variant="body-sm"
                  className="font-black text-[var(--color-text-primary)]"
                >
                  {method.cost === 0 ? "FREE" : `$${method.cost.toFixed(2)}`}
                </Typography>
                {method.costLabel && (
                  <Typography
                    variant="body-xs"
                    className="text-[var(--color-text-secondary)] text-[10px] font-bold"
                  >
                    {method.costLabel}
                  </Typography>
                )}
              </div>
            </button>
          );
        })}
      </div>

      <Button
        variant="primary"
        onClick={onSubmit}
        className="self-end px-8 py-2.5 font-bold uppercase mt-2"
      >
        Continue to Payment
      </Button>
    </div>
  );
}
