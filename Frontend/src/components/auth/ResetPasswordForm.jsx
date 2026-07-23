import { useState } from "react";
import PasswordInput from "./PasswordInput";
import Button from "../ui/Button";
import Typography from "../ui/Typography";
import { toast } from "react-toastify";

export default function ResetPasswordForm({ onBackToLogin }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!password || !confirmPassword) return;
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Password reset successfully! Please sign in with your new password.");
      onBackToLogin();
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="text-center select-none mb-2">
        <Typography variant="h3" className="font-extrabold text-[var(--color-text-primary)]">
          Set New Password
        </Typography>
        <Typography variant="body-sm" className="text-[var(--color-text-secondary)] mt-1">
          Create a secure, strong password to protect your account.
        </Typography>
      </div>

      <PasswordInput
        id="reset-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        label="New Password"
        placeholder="At least 8 characters"
      />

      <PasswordInput
        id="confirm-reset-password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        label="Confirm Password"
        placeholder="Confirm new password"
      />

      <div className="flex flex-col gap-2 mt-2">
        <Button
          variant="primary"
          type="submit"
          isLoading={isLoading}
          className="w-full font-bold uppercase py-3"
        >
          Update Password
        </Button>
        <button
          onClick={onBackToLogin}
          type="button"
          className="text-xs font-bold text-[var(--color-primary)] hover:underline mt-2 select-none"
        >
          Back to Sign In
        </button>
      </div>
    </form>
  );
}
