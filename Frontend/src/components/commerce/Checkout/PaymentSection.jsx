import { useState } from "react";
import PaymentMethodCard from "./PaymentMethodCard";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

export default function PaymentSection({ selectedMethod, onChange, onSubmit }) {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedMethod === "card") {
      if (!cardNumber || !expiry || !cvc) return;
    }
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <PaymentMethodCard
          id="cod"
          label="Cash on Delivery"
          isSelected={selectedMethod === "cod"}
          onClick={() => onChange("cod")}
        />

        <PaymentMethodCard
          id="card"
          label="Credit or Debit Card"
          isSelected={selectedMethod === "card"}
          onClick={() => onChange("card")}
        />

        {selectedMethod === "card" && (
          <div className="p-4 border border-[var(--color-border)] rounded-[var(--radius-md)] bg-[var(--color-bg-secondary)] flex flex-col gap-4 mt-2">
            <Input
              id="cc-number"
              placeholder="0000 0000 0000 0000"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              label="Card Number"
              required
            />
            <div className="grid grid-cols-2 gap-4">
              <Input
                id="cc-expiry"
                placeholder="MM/YY"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                label="Expiration Date"
                required
              />
              <Input
                id="cc-cvc"
                placeholder="123"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                label="CVC"
                required
              />
            </div>
          </div>
        )}

        <PaymentMethodCard
          id="paypal"
          label="PayPal Checkout (Redirect)"
          isSelected={selectedMethod === "paypal"}
          onClick={() => onChange("paypal")}
        />
      </div>

      <Button
        variant="primary"
        type="submit"
        className="w-full sm:w-auto sm:self-end px-8 py-2.5 font-bold uppercase mt-2"
      >
        Continue to Review
      </Button>
    </form>
  );
}
