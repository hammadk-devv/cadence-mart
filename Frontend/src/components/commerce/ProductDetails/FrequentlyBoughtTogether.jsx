import React, { useState } from "react";
import { Plus } from "lucide-react";
import Price from "../Price";
import Checkbox from "../../ui/Checkbox";
import Button from "../../ui/Button";
import Typography from "../../ui/Typography";

export default function FrequentlyBoughtTogether({
  currentProduct,
  recommendations = [],
  onAddBundle,
}) {
  const [selectedItems, setSelectedItems] = useState([true, true, true]);

  if (!recommendations || recommendations.length === 0) return null;

  const bundle = [currentProduct, ...recommendations.slice(0, 2)];

  const handleToggle = (index) => {
    if (index === 0) return;
    const updated = [...selectedItems];
    updated[index] = !updated[index];
    setSelectedItems(updated);
  };

  let totalPrice = 0;
  let originalTotalPrice = 0;

  bundle.forEach((item, index) => {
    if (selectedItems[index] && item) {
      totalPrice += item.price;
      originalTotalPrice += item.originalPrice || item.price;
    }
  });

  const handleAddClick = () => {
    const selectedIds = bundle.filter((_, idx) => selectedItems[idx]).map((item) => item._id);
    onAddBundle(selectedIds);
  };

  return (
    <div className="py-6 border-t border-[var(--color-border)] my-6 select-none">
      <Typography variant="h3" className="font-extrabold mb-4 text-[var(--color-text-primary)]">
        Frequently Bought Together
      </Typography>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 p-6 border border-[var(--color-border)] rounded-[var(--radius-lg)] bg-[var(--color-bg-secondary)]">
        <div className="flex flex-wrap items-center gap-4">
          {bundle.map((item, index) => {
            if (!item) return null;
            return (
              <React.Fragment key={item._id}>
                {index > 0 && <Plus className="w-5 h-5 text-gray-400" />}
                <div className="flex items-center gap-3">
                  {index > 0 && (
                    <Checkbox
                      id={`bundle-check-${item._id}`}
                      checked={selectedItems[index]}
                      onChange={() => handleToggle(index)}
                      label=""
                      className="w-auto"
                    />
                  )}
                  <div className="w-16 h-16 border border-[var(--color-border)] rounded-[var(--radius-md)] overflow-hidden bg-white">
                    <img
                      src={item.image[0]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col max-w-[120px]">
                    <Typography variant="body-xs" className="font-bold line-clamp-1">
                      {index === 0 ? "This Item" : item.name}
                    </Typography>
                    <Price value={item.price} size="sm" />
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>

        <div className="flex flex-col items-center lg:items-end gap-3 flex-shrink-0 border-t lg:border-t-0 lg:border-l border-[var(--color-border)] pt-4 lg:pt-0 lg:pl-6 w-full lg:w-auto">
          <div className="flex flex-col items-center lg:items-end">
            <Typography
              variant="body-xs"
              className="text-[var(--color-text-secondary)] font-bold uppercase tracking-wider"
            >
              Total Price:
            </Typography>
            <Price value={totalPrice} originalValue={originalTotalPrice} size="lg" />
          </div>
          <Button variant="primary" onClick={handleAddClick} size="sm">
            Add Bundle to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
