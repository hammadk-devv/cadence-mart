import React from "react";
import Typography from "../ui/Typography";
import Button from "../ui/Button";
import Input from "../ui/Input";

const footerConfig = {
  columns: [
    {
      title: "Shop",
      links: [
        { label: "All Products", href: "/" },
        { label: "New Arrivals", href: "/" },
        { label: "Bestsellers", href: "/" },
        { label: "Sales & Deals", href: "/" },
      ],
    },
    {
      title: "Customer Service",
      links: [
        { label: "Help Center", href: "/" },
        { label: "Track Order", href: "/" },
        { label: "Shipping & Delivery", href: "/" },
        { label: "Returns & Exchanges", href: "/" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/" },
        { label: "Careers", href: "/" },
        { label: "Press", href: "/" },
        { label: "Affiliates", href: "/" },
      ],
    },
  ],
  socials: [
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Twitter", href: "https://twitter.com" },
    { label: "Instagram", href: "https://instagram.com" },
  ],
};

export default function Footer({ className = "" }) {
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleSubscribeSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }
    if (!emailRegex.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setIsSuccess(true);
      setEmail("");
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer
      className={`bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)] pt-12 pb-8 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
        {/* Branding Column */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <Typography
            variant="h3"
            as="span"
            className="text-[var(--color-primary)] font-extrabold text-2xl tracking-tight"
          >
            Cadence Mart
          </Typography>
          <Typography variant="body-sm" className="text-[var(--color-text-secondary)]">
            Your premium e-commerce platform offering modern lifestyle products with top quality
            services.
          </Typography>

          {/* Newsletter Form */}
          {isSuccess ? (
            <div className="flex flex-col gap-1 py-2 px-3 bg-green-500/10 border border-green-500/20 rounded-[var(--radius-md)] max-w-sm">
              <Typography variant="body-sm" className="font-bold text-[var(--color-success)]">
                ✓ Subscribed Successfully!
              </Typography>
              <Typography variant="caption" className="text-[var(--color-text-secondary)]">
                Thank you for joining. Check your inbox for updates.
              </Typography>
            </div>
          ) : (
            <form
              onSubmit={handleSubscribeSubmit}
              className="flex flex-col gap-1.5 max-w-sm"
              noValidate
            >
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  id="footer-newsletter-email"
                  type="email"
                  placeholder="Enter email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  label=""
                  className="w-full"
                  isDisabled={isLoading}
                />
                <Button
                  type="submit"
                  variant="primary"
                  isLoading={isLoading}
                  isDisabled={isLoading}
                  className="sm:self-end whitespace-nowrap"
                >
                  Subscribe
                </Button>
              </div>
              {error && (
                <Typography
                  variant="caption"
                  className="text-[var(--color-danger)] font-semibold text-xs mt-0.5"
                >
                  {error}
                </Typography>
              )}
            </form>
          )}
        </div>

        {/* Links Columns */}
        {footerConfig.columns.map((col, index) => (
          <div key={index} className="flex flex-col gap-3">
            <Typography
              variant="h4"
              as="span"
              className="font-bold text-xs uppercase tracking-wider"
            >
              {col.title}
            </Typography>
            <ul className="flex flex-col gap-2">
              {col.links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer Bottom */}
      <div className="max-w-screen-xl mx-auto border-t border-[var(--color-border)] pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <Typography variant="body-sm">
          &copy; {new Date().getFullYear()} Cadence Mart. All rights reserved.
        </Typography>
        <div className="flex gap-4">
          {footerConfig.socials.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
