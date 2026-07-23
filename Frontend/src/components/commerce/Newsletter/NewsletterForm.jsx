import { useState } from "react";
import NewsletterInput from "./NewsletterInput";
import NewsletterCTA from "./NewsletterCTA";
import Typography from "../../ui/Typography";

export default function NewsletterForm({
  placeholder = "Your email address",
  buttonLabel = "Subscribe",
}) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setError("Please enter your email address.");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSuccess(true);
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-start gap-2 py-4">
        <Typography variant="body" className="font-bold text-[var(--color-success)] text-base">
          ✓ Subscribed Successfully!
        </Typography>
        <Typography variant="body-sm">
          Thank you for joining our community. Check your inbox soon for your exclusive offers.
        </Typography>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full mt-4" noValidate>
      <div className="flex flex-col sm:flex-row gap-3 w-full items-start">
        <NewsletterInput
          id="newsletter-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          error={error}
          isDisabled={isLoading}
        />
        <NewsletterCTA label={buttonLabel} isLoading={isLoading} isDisabled={isLoading} />
      </div>
      {error && (
        <Typography variant="caption" className="text-[var(--color-danger)] font-semibold mt-1">
          {error}
        </Typography>
      )}
    </form>
  );
}
