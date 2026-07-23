import { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Typography from "../ui/Typography";
import { toast } from "react-toastify";

export default function ForgotPasswordForm({ onBackToLogin }) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Password recovery email sent! Check your inbox.");
      onBackToLogin();
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="text-center select-none mb-2">
        <Typography variant="h3" className="font-extrabold text-[var(--color-text-primary)]">
          Reset Password
        </Typography>
        <Typography variant="body-sm" className="text-[var(--color-text-secondary)] mt-1">
          Enter your email address and we&apos;ll send you a link to reset your password.
        </Typography>
      </div>

      <Input
        id="forgot-email"
        type="email"
        placeholder="yourname@domain.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        label="Email Address"
        className="w-full"
        required
      />

      <div className="flex flex-col gap-2 mt-2">
        <Button
          variant="primary"
          type="submit"
          isLoading={isLoading}
          className="w-full font-bold uppercase py-3"
        >
          Send Recovery Link
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
