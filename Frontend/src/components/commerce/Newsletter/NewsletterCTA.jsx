import Button from "../../ui/Button";

export default function NewsletterCTA({
  label = "Subscribe",
  isLoading,
  isDisabled,
  className = "",
}) {
  return (
    <Button
      type="submit"
      variant="primary"
      size="md"
      isLoading={isLoading}
      isDisabled={isDisabled}
      className={`font-bold px-6 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] ${className}`}
    >
      {label}
    </Button>
  );
}
