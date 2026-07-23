import { useState } from "react";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import Typography from "../../ui/Typography";

export default function PromoCode({ promoCode, onApplyPromo, onRemovePromo, isApplied }) {
  const [code, setCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!code) return;
    onApplyPromo(code);
    setCode("");
  };

  return (
    <div className="border-t border-[var(--color-border)] pt-4 select-none">
      <Typography
        variant="body-sm"
        className="font-bold text-[var(--color-text-secondary)] uppercase text-xs tracking-wider mb-2"
      >
        Have a Promo Code?
      </Typography>

      {isApplied ? (
        <div className="flex items-center justify-between p-3 border border-[var(--color-success)] rounded-[var(--radius-md)] bg-green-50/50">
          <div className="flex flex-col gap-0.5">
            <Typography
              variant="body-xs"
              className="font-extrabold text-[var(--color-success)] uppercase"
            >
              Code Applied: {promoCode}
            </Typography>
            <Typography variant="body-xs" className="text-[var(--color-text-secondary)]">
              10% discount applied to items
            </Typography>
          </div>
          <button
            onClick={onRemovePromo}
            className="text-xs font-bold text-[var(--color-danger)] uppercase hover:underline"
          >
            Remove
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            id="promo-input"
            type="text"
            placeholder="e.g. CADENCE10"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full"
            label=""
          />
          <Button
            variant="outline"
            type="submit"
            size="sm"
            className="font-bold uppercase border-[var(--color-border)] hover:bg-[var(--color-bg-secondary)] px-4"
          >
            Apply
          </Button>
        </form>
      )}
    </div>
  );
}
