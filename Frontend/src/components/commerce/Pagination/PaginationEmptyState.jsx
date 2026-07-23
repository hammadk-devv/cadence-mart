import Typography from "../../ui/Typography";

export default function PaginationEmptyState() {
  return (
    <div className="py-4 text-center">
      <Typography variant="body-sm">No pagination options configured.</Typography>
    </div>
  );
}
