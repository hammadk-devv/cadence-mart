import Typography from "../ui/Typography";

export default function AuthHeader({ activeTab, onTabChange, isRecovering }) {
  if (isRecovering) return null;

  return (
    <div className="flex flex-col gap-6 select-none mb-6">
      <div className="text-center">
        <Typography variant="h3" className="font-extrabold text-[var(--color-primary)]">
          Cadence Mart
        </Typography>
        <Typography
          variant="body-xs"
          className="text-[var(--color-text-secondary)] mt-1 font-semibold"
        >
          Flagship Production-Grade E-Commerce Platform
        </Typography>
      </div>

      <div className="flex border-b border-[var(--color-border)]">
        <button
          onClick={() => onTabChange("login")}
          className={`flex-grow py-3 text-sm font-bold text-center border-b-2 transition-all focus-ring ${
            activeTab === "login"
              ? "border-[var(--color-primary)] text-[var(--color-primary)]"
              : "border-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
          }`}
        >
          Sign In
        </button>
        <button
          onClick={() => onTabChange("register")}
          className={`flex-grow py-3 text-sm font-bold text-center border-b-2 transition-all focus-ring ${
            activeTab === "register"
              ? "border-[var(--color-primary)] text-[var(--color-primary)]"
              : "border-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
          }`}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
