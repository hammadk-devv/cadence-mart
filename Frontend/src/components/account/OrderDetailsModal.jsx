import Drawer from "../ui/Drawer";
import Price from "../commerce/Price";
import Typography from "../ui/Typography";

export default function OrderDetailsModal({ order, isOpen, onClose }) {
  if (!order) return null;

  const { orderId = "", total = 0, items = [], address = {} } = order;

  return (
    <Drawer isOpen={isOpen} onClose={onClose} title="Order Details Invoice" position="right">
      <div className="flex flex-col gap-6 text-sm">
        <div className="flex flex-col gap-1 select-none">
          <Typography
            variant="body-xs"
            className="font-bold text-[var(--color-text-secondary)] uppercase tracking-wider"
          >
            Order ID:
          </Typography>
          <span className="font-extrabold text-[var(--color-text-primary)]">{orderId}</span>
        </div>

        <div className="flex flex-col gap-1 select-none border-t border-[var(--color-border)] pt-4">
          <Typography
            variant="body-xs"
            className="font-bold text-[var(--color-text-secondary)] uppercase tracking-wider"
          >
            Shipping Destination:
          </Typography>
          <div className="flex flex-col font-medium text-[var(--color-text-secondary)] mt-1">
            <span className="font-bold text-[var(--color-text-primary)]">{address.name}</span>
            <span>{address.address}</span>
            <span>
              {address.city}, {address.state} {address.zipCode}
            </span>
            <span className="mt-1">Phone: {address.phone}</span>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-[var(--color-border)] pt-4">
          <Typography
            variant="body-xs"
            className="font-bold text-[var(--color-text-secondary)] uppercase tracking-wider select-none"
          >
            Ordered Products:
          </Typography>
          <div className="flex flex-col gap-3">
            {items.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center gap-4">
                <div className="flex flex-col gap-0.5">
                  <span className="font-extrabold text-[var(--color-text-primary)] line-clamp-1">
                    {item.name || `Product SKU: ${item._id}`}
                  </span>
                  <span className="text-xs font-semibold text-[var(--color-text-secondary)]">
                    Quantity:{" "}
                    <span className="font-bold text-[var(--color-text-primary)]">
                      {item.quantity}
                    </span>
                  </span>
                </div>
                <Price value={item.price || 0} size="sm" className="font-bold flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-baseline border-t border-[var(--color-border)] pt-4 mt-2 select-none">
          <span className="font-black text-[var(--color-text-primary)] text-base">
            Grand Total Paid
          </span>
          <Price value={total} size="lg" />
        </div>
      </div>
    </Drawer>
  );
}
