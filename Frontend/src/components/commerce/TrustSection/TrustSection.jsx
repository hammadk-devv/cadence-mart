import { useState, useEffect } from "react";
import TrustGrid from "./TrustGrid";
import TrustSkeleton from "./TrustSkeleton";
import Container from "../../ui/Container";

const trustConfig = [
  {
    id: 1,
    title: "Free Delivery",
    description: "On all orders over $50. No hidden charges.",
    icon: "truck",
    highlight: true,
  },
  {
    id: 2,
    title: "Secure Payments",
    description: "Fully encrypted checkout with trusted gateways.",
    icon: "lock",
  },
  {
    id: 3,
    title: "Easy Returns",
    description: "30-day hassle-free returns on catalog items.",
    icon: "rotate-ccw",
  },
  {
    id: 4,
    title: "24/7 Support",
    description: "Our dedicated agents team is always here to help.",
    icon: "headphones",
  },
];

export default function TrustSection({ variant = "standard", className = "" }) {
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
        {loading ? <TrustSkeleton /> : <TrustGrid items={trustConfig} variant={variant} />}
      </Container>
    </section>
  );
}
