import React from "react";
import { Check } from "lucide-react";
import Typography from "../ui/Typography";

export default function OrderTimeline({ status = "Placed" }) {
  const steps = ["Placed", "Processing", "Shipped", "Delivered"];
  const currentIdx = steps.indexOf(status);

  return (
    <div className="flex items-center justify-between w-full py-4 select-none">
      {steps.map((step, idx) => {
        const isCompleted = idx < currentIdx;
        const isActive = idx === currentIdx;

        return (
          <React.Fragment key={step}>
            <div className="flex flex-col items-center gap-1.5 flex-shrink-0">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[10px] transition-all border ${
                  isCompleted
                    ? "bg-[var(--color-primary)] border-[var(--color-primary)] text-white"
                    : isActive
                      ? "bg-[var(--color-bg-primary)] border-[var(--color-primary)] text-[var(--color-primary)]"
                      : "bg-[var(--color-bg-secondary)] border-[var(--color-border)] text-[var(--color-text-secondary)]"
                }`}
              >
                {isCompleted ? <Check className="w-3.5 h-3.5" /> : idx + 1}
              </div>
              <Typography
                variant="body-xs"
                className={`text-[10px] font-bold ${
                  isActive ? "text-[var(--color-primary)]" : "text-[var(--color-text-secondary)]"
                }`}
              >
                {step}
              </Typography>
            </div>
            {idx < steps.length - 1 && (
              <div
                className={`flex-grow h-0.5 mx-2 rounded transition-all ${
                  idx < currentIdx ? "bg-[var(--color-primary)]" : "bg-[var(--color-border)]"
                }`}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
