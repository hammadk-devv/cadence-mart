export default function Divider({
  orientation = "horizontal", // horizontal, vertical
  className = "",
}) {
  const styles = {
    horizontal: "w-full h-px bg-[var(--color-border)] my-4",
    vertical: "h-full w-px bg-[var(--color-border)] mx-4 self-stretch",
  };

  return <div className={`${styles[orientation]} ${className}`} role="separator" />;
}
