import AddToCartButton from "../AddToCartButton";

export default function ProductActions({ onClick, isLoading, isDisabled, className = "" }) {
  return (
    <AddToCartButton
      onClick={onClick}
      isLoading={isLoading}
      isDisabled={isDisabled}
      className={className}
    />
  );
}
