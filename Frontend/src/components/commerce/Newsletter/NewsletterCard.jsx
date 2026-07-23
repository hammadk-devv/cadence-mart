import NewsletterContent from "./NewsletterContent";
import NewsletterBenefits from "./NewsletterBenefits";
import NewsletterForm from "./NewsletterForm";

export default function NewsletterCard({ item, className = "" }) {
  return (
    <div
      className={`w-full max-w-4xl mx-auto bg-[var(--color-card-bg)] border border-[var(--color-card-border)] rounded-[var(--radius-xl)] p-8 md:p-12 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-all flex flex-col gap-8 ${className}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column: Heading text + Reward checkmarks */}
        <div className="flex flex-col gap-6">
          <NewsletterContent
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
          />
          {item.benefits && <NewsletterBenefits items={item.benefits} />}
        </div>

        {/* Right Column: Form fields */}
        <div className="flex flex-col justify-center">
          <NewsletterForm placeholder={item.placeholder} buttonLabel={item.buttonLabel} />
        </div>
      </div>
    </div>
  );
}
