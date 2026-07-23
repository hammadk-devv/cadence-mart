import { Check } from "lucide-react";
import Typography from "../../ui/Typography";

export default function NewsletterBenefits({ items = [], className = "" }) {
  return (
    <ul className={`flex flex-col gap-3 ${className}`}>
      {items.map((benefit, idx) => (
        <li key={idx} className="flex items-center gap-2.5">
          <div className="p-1 rounded-full bg-[var(--color-ring)] text-[var(--color-primary)]">
            <Check className="w-3.5 h-3.5" />
          </div>
          <Typography variant="body-sm" className="font-semibold text-xs leading-none">
            {benefit}
          </Typography>
        </li>
      ))}
    </ul>
  );
}
