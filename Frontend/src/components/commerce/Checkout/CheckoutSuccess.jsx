import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import Button from "../../ui/Button";
import Typography from "../../ui/Typography";

export default function CheckoutSuccess({ orderId }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center select-none">
      <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
        <CheckCircle2 className="w-12 h-12 text-[var(--color-success)]" />
      </div>
      <Typography variant="h2" className="font-extrabold text-[var(--color-text-primary)] mb-2">
        Thank You for Your Order!
      </Typography>
      <Typography variant="body" className="text-[var(--color-text-secondary)] max-w-md mb-2">
        Your payment was processed successfully. We&apos;ve sent a confirmation email with order details.
      </Typography>
      <Typography variant="body-sm" className="font-bold text-[var(--color-text-primary)] mb-8">
        Order ID: <span className="text-[var(--color-primary)]">{orderId}</span>
      </Typography>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link to="/shop">
          <Button variant="primary" className="px-8 py-3 font-bold uppercase">
            Continue Shopping
          </Button>
        </Link>
        <Button
          variant="outline"
          onClick={() => alert("Redirecting to order tracking portal (mock)...")}
          className="px-8 py-3 font-bold uppercase border-[var(--color-border)] hover:bg-[var(--color-bg-secondary)] animate-none"
        >
          Track Order
        </Button>
      </div>
    </div>
  );
}
