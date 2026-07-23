import React from "react";
import { Check } from "lucide-react";
import Typography from "../../ui/Typography";

export default function CheckoutStepper({ steps = [], currentStep = 0, onStepClick }) {
  return (
    <div className="flex items-center justify-between w-full py-4 mb-6 select-none overflow-x-auto scrollbar-none">
      {steps.map((step, idx) => {
        const isCompleted = idx < currentStep;
        const isActive = idx === currentStep;

        return (
          <React.Fragment key={idx}>
            <button
              type="button"
              onClick={() => isCompleted && onStepClick(idx)}
              disabled={!isCompleted}
              className="flex flex-col items-center gap-1.5 focus-ring rounded p-1 group flex-shrink-0"
              aria-current={isActive ? "step" : undefined}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all border ${
                  isCompleted
                    ? "bg-[var(--color-primary)] border-[var(--color-primary)] text-white"
                    : isActive
                      ? "bg-[var(--color-bg-primary)] border-[var(--color-primary)] text-[var(--color-primary)] scale-105 shadow-sm"
                      : "bg-[var(--color-bg-secondary)] border-[var(--color-border)] text-[var(--color-text-secondary)]"
                }`}
              >
                {isCompleted ? <Check className="w-4 h-4" /> : idx + 1}
              </div>
              <Typography
                variant="body-xs"
                className={`font-bold transition-colors ${
                  isActive
                    ? "text-[var(--color-primary)]"
                    : isCompleted
                      ? "text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)]"
                      : "text-[var(--color-text-secondary)]"
                }`}
              >
                {step.label}
              </Typography>
            </button>

            {idx < steps.length - 1 && (
              <div
                className={`flex-grow h-0.5 min-w-[30px] mx-2 rounded transition-all ${
                  idx < currentStep ? "bg-[var(--color-primary)]" : "bg-[var(--color-border)]"
                }`}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
