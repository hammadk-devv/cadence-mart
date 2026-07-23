import SessionList from "./SessionList";
import Button from "../ui/Button";
import Typography from "../ui/Typography";

export default function SecuritySection() {
  return (
    <div className="border border-[var(--color-border)] rounded-[var(--radius-lg)] p-6 bg-[var(--color-card-bg)] shadow-[var(--shadow-sm)] flex flex-col gap-6">
      <Typography
        variant="h4"
        className="font-extrabold text-[var(--color-text-primary)] border-b border-[var(--color-border)] pb-3 mb-2 select-none"
      >
        Account Security
      </Typography>

      <div className="flex flex-col gap-2 border-b border-[var(--color-border)] pb-6 select-none">
        <Typography
          variant="body-sm"
          className="font-bold text-[var(--color-text-secondary)] uppercase text-xs tracking-wider"
        >
          Two-Factor Authentication (2FA)
        </Typography>
        <Typography
          variant="body-xs"
          className="text-[var(--color-text-secondary)] font-medium mb-2 leading-relaxed"
        >
          Add an extra layer of security to your account. Once enabled, you&apos;ll need to enter a
          login verification code sent to your phone.
        </Typography>
        <Button
          variant="outline"
          onClick={() => alert("Connecting authentication server (mock)...")}
          size="sm"
          className="self-start font-bold uppercase text-xs border-[var(--color-border)] hover:bg-[var(--color-bg-secondary)] px-5 py-2.5 animate-none"
        >
          Enable 2FA Authentication
        </Button>
      </div>

      <SessionList />
    </div>
  );
}
