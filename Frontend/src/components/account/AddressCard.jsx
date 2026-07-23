import Typography from "../ui/Typography";

export default function AddressCard({ addressData, onEdit, onDelete, isDefault = false }) {
  const { name = "", phone = "", address = "", city = "", state = "", zipCode = "" } = addressData;

  return (
    <div className="p-5 border border-[var(--color-border)] rounded-[var(--radius-lg)] bg-[var(--color-bg-secondary)] flex flex-col gap-3 text-sm select-none relative group">
      {isDefault && (
        <span className="absolute top-4 right-4 bg-[var(--color-primary)] text-white text-[9px] font-black uppercase px-2 py-0.5 rounded">
          Default
        </span>
      )}

      <div className="flex flex-col gap-1 pr-12">
        <Typography variant="body-sm" className="font-extrabold text-[var(--color-text-primary)]">
          {name}
        </Typography>
        <Typography variant="body-xs" className="text-[var(--color-text-secondary)] font-medium">
          {address}
        </Typography>
        <Typography variant="body-xs" className="text-[var(--color-text-secondary)] font-medium">
          {city}, {state} {zipCode}
        </Typography>
        <Typography
          variant="body-xs"
          className="text-[var(--color-text-secondary)] font-medium mt-1"
        >
          Phone: {phone}
        </Typography>
      </div>

      <div className="flex gap-3 border-t border-[var(--color-border)] pt-3 mt-1">
        <button
          type="button"
          onClick={onEdit}
          className="text-xs font-bold text-[var(--color-primary)] hover:underline"
        >
          Edit
        </button>
        <button
          type="button"
          onClick={onDelete}
          className="text-xs font-bold text-[var(--color-danger)] hover:underline"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
