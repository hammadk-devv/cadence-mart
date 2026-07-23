
export default function PasswordStrength({ password = "" }) {
  if (!password) return null;

  let score = 0;
  if (password.length >= 8) score += 1;
  if (/[0-9]/.test(password)) score += 1;
  if (/[A-Z]/.test(password)) score += 1;
  if (/[^A-Za-z0-9]/.test(password)) score += 1;

  const labels = ["Too Weak", "Weak", "Medium", "Strong"];
  const colors = ["bg-red-500", "bg-orange-500", "bg-yellow-500", "bg-green-500"];

  const currentLabel = score > 0 ? labels[score - 1] : "Too Weak";
  const currentColor = score > 0 ? colors[score - 1] : "bg-red-500";

  return (
    <div className="flex flex-col gap-1 mt-1 select-none">
      <div className="flex justify-between items-center text-[10px] font-bold">
        <span className="text-[var(--color-text-secondary)] uppercase">Password Strength</span>
        <span className="uppercase text-zinc-950 font-black">{currentLabel}</span>
      </div>
      <div className="h-1 w-full bg-[var(--color-border)] rounded-full overflow-hidden flex gap-1">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`h-full flex-grow rounded-full transition-all duration-300 ${
              score >= i ? currentColor : "bg-[var(--color-border)]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
