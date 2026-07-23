import { ShieldCheck, Truck, RotateCcw, CreditCard } from "lucide-react";
import Typography from "../../ui/Typography";

export default function ProductFeatures() {
  const highlights = [
    {
      icon: Truck,
      title: "Free Express Shipping",
      desc: "Delivered in 2-3 business days on orders over $50",
    },
    {
      icon: RotateCcw,
      title: "30-Day Free Returns",
      desc: "Hassle-free return policy with pre-paid labels",
    },
    {
      icon: ShieldCheck,
      title: "2-Year Store Warranty",
      desc: "100% replacement guarantee for hardware defects",
    },
    {
      icon: CreditCard,
      title: "Secure Checkouts",
      desc: "Fully encrypted processing via Stripe and PayPal",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 my-2 select-none">
      {highlights.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <div
            key={index}
            className="flex items-start gap-3 p-3 border border-[var(--color-border)] rounded-[var(--radius-md)] bg-[var(--color-bg-secondary)]"
          >
            <IconComponent className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
            <div className="flex flex-col gap-0.5">
              <Typography variant="body-sm" className="font-bold text-[var(--color-text-primary)]">
                {item.title}
              </Typography>
              <Typography
                variant="body-xs"
                className="text-[var(--color-text-secondary)] font-medium"
              >
                {item.desc}
              </Typography>
            </div>
          </div>
        );
      })}
    </div>
  );
}
