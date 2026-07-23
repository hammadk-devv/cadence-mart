import { useState } from "react";
import Typography from "../../ui/Typography";

export default function ProductTabs({ product, reviewsComponent }) {
  const [activeTab, setActiveTab] = useState("description");

  const tabsConfig = [
    { id: "description", label: "Description" },
    { id: "specifications", label: "Specifications" },
    { id: "reviews", label: "Reviews" },
    { id: "shipping", label: "Shipping & Returns" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "description":
        return (
          <div className="flex flex-col gap-4">
            <Typography
              variant="body"
              className="text-[var(--color-text-secondary)] leading-relaxed"
            >
              {product.description ||
                product.discription ||
                "No detailed description provided for this premium item."}
            </Typography>
            <Typography
              variant="body"
              className="text-[var(--color-text-secondary)] leading-relaxed"
            >
              Crafted from premium components, this item represents the visual and structural
              identity of the Cadence Mart design system. Engineered to provide comfort,
              performance, and long-term durability.
            </Typography>
          </div>
        );
      case "specifications":
        return (
          <div className="border border-[var(--color-border)] rounded-[var(--radius-md)] overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                <tr className="border-b border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
                  <td className="px-4 py-3 font-bold w-1/3">Brand</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">
                    {product.brand || "Cadence Mart"}
                  </td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="px-4 py-3 font-bold">Category</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">
                    {product.category || "General"}
                  </td>
                </tr>
                <tr className="border-b border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
                  <td className="px-4 py-3 font-bold">Dimensions</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">
                    18.5 x 12.0 x 6.4 cm
                  </td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="px-4 py-3 font-bold">Material Composition</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">
                    Premium Recycled Polycarbonate & Aluminum
                  </td>
                </tr>
                <tr className="bg-[var(--color-bg-secondary)]">
                  <td className="px-4 py-3 font-bold">Weight</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">0.34 kg</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      case "reviews":
        return reviewsComponent || <p>Reviews loading...</p>;
      case "shipping":
        return (
          <div className="flex flex-col gap-4 text-[var(--color-text-secondary)] leading-relaxed">
            <Typography variant="body">
              <strong>Free Express Shipping:</strong> Available on all orders above $50. Standard
              deliveries arrive within 3-5 business days. Express shipments reach addresses within 2
              business days.
            </Typography>
            <Typography variant="body">
              <strong>Easy Returns:</strong> We offer a 30-day window for hassle-free returns.
              Simply package your unused items back in their original shipping cartons and print our
              pre-paid returns labels.
            </Typography>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-6 my-6">
      <div className="flex border-b border-[var(--color-border)] overflow-x-auto scrollbar-none">
        {tabsConfig.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-3 text-sm font-bold border-b-2 transition-all flex-shrink-0 focus-ring ${
                isActive
                  ? "border-[var(--color-primary)] text-[var(--color-primary)]"
                  : "border-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="py-2">{renderContent()}</div>
    </div>
  );
}
