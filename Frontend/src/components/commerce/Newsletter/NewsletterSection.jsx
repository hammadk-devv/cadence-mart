import { useState, useEffect } from "react";
import NewsletterCard from "./NewsletterCard";
import NewsletterSkeleton from "./NewsletterSkeleton";
import Container from "../../ui/Container";

const newsletterConfig = {
  title: "Join the Cadence Club",
  subtitle: "Newsletter & Community",
  description:
    "Subscribe to receive weekly updates, exclusive collection drops, and early access to promotions.",
  placeholder: "Your email address",
  buttonLabel: "Subscribe",
  benefits: [
    "10% off your first order",
    "Early access to seasonal sales",
    "Exclusive product launches",
  ],
};

export default function NewsletterSection({ className = "" }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`w-full py-6 lg:py-8 bg-[var(--color-bg-primary)] border-b border-gray-200 dark:border-zinc-800 ${className}`}
    >
      <Container size="xl">
        {loading ? <NewsletterSkeleton /> : <NewsletterCard item={newsletterConfig} />}
      </Container>
    </section>
  );
}
