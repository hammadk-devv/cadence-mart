import { useState, useEffect } from 'react';
import CampaignGrid from "./CampaignGrid";
import CampaignSkeleton from "./CampaignSkeleton";
import Container from "../../ui/Container";

const campaignsConfig = [
  {
    id: 1,
    slug: "summer-collection",
    title: "Summer Collection 50% Off",
    subtitle: "New Arrivals",
    description:
      "Premium cotton shirts, linen shorts, and accessories curated to keep you comfortable and cool.",
    badge: "Seasonal Offer",
    cta: "Shop Summer",
    link: "/product",
    priority: "high",
  },
  {
    id: 2,
    slug: "flash-sale",
    title: "Weekend Flash Sale",
    subtitle: "Limited Time Only",
    description: "Save up to 70% on premium audio gears. Offer ends soon.",
    badge: "Flash Deal",
    cta: "Shop Sale",
    link: "/product",
    priority: "medium",
    countdown: true,
  },
];

export default function CampaignSection({ className = "" }) {
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
        {loading ? <CampaignSkeleton /> : <CampaignGrid items={campaignsConfig} />}
      </Container>
    </section>
  );
}
