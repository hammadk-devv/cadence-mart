import Typography from "../../ui/Typography";

export default function AddressCard({ addressData }) {
  const { name = "", phone = "", address = "", city = "", state = "", zipCode = "" } = addressData;

  return (
    <div className="p-4 border border-[var(--color-border)] rounded-[var(--radius-md)] bg-[var(--color-bg-secondary)] flex flex-col gap-1 text-sm select-none">
      <Typography variant="body-sm" className="font-extrabold text-[var(--color-text-primary)]">
        {name}
      </Typography>
      <Typography variant="body-xs" className="text-[var(--color-text-secondary)] font-medium">
        {address}
      </Typography>
      <Typography variant="body-xs" className="text-[var(--color-text-secondary)] font-medium">
        {city}, {state} {zipCode}
      </Typography>
      <Typography variant="body-xs" className="text-[var(--color-text-secondary)] font-medium mt-1">
        Phone: {phone}
      </Typography>
    </div>
  );
}
