import Button from "../../ui/Button";

export default function PlaceOrderButton({ onClick, isLoading = false, isDisabled = false }) {
  return (
    <Button
      variant="primary"
      onClick={onClick}
      isLoading={isLoading}
      isDisabled={isDisabled}
      className="w-full font-bold uppercase py-3.5 mt-4"
    >
      Place Order
    </Button>
  );
}
