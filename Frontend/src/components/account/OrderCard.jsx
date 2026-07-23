import Price from "../commerce/Price";
import Button from "../ui/Button";
import Typography from "../ui/Typography";
import OrderTimeline from "./OrderTimeline";

export default function OrderCard({ order, onViewDetails }) {
  const { orderId = "", date = "Just now", status = "Placed", total = 0 } = order;

  return (
    <div className="border border-[var(--color-border)] rounded-[var(--radius-lg)] p-5 bg-[var(--color-card-bg)] shadow-[var(--shadow-sm)] flex flex-col gap-4">
      <div className="flex justify-between items-center select-none border-b border-[var(--color-border)] pb-3 flex-wrap gap-2">
        <div className="flex flex-col gap-0.5">
          <Typography
            variant="body-xs"
            className="font-bold text-[var(--color-text-secondary)] uppercase tracking-wider"
          >
            Order Reference
          </Typography>
          <span className="text-sm font-extrabold text-[var(--color-text-primary)]">{orderId}</span>
        </div>
        <div className="text-right">
          <Typography
            variant="body-xs"
            className="font-bold text-[var(--color-text-secondary)] uppercase tracking-wider"
          >
            Total Value
          </Typography>
          <Price value={total} size="sm" className="font-black text-[var(--color-text-primary)]" />
        </div>
      </div>

      <OrderTimeline status={status} />

      <div className="flex justify-between items-center border-t border-[var(--color-border)] pt-4 mt-2 flex-wrap gap-2">
        <span className="text-xs font-semibold text-[var(--color-text-secondary)]">
          Ordered on: <span className="font-bold text-[var(--color-text-primary)]">{date}</span>
        </span>
        <Button
          variant="outline"
          onClick={onViewDetails}
          size="sm"
          className="font-bold uppercase border-[var(--color-border)] hover:bg-[var(--color-bg-secondary)] px-4"
        >
          View Receipt Details
        </Button>
      </div>
    </div>
  );
}
