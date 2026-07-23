import Typography from "../../ui/Typography";

export default function ProductVariants({
  selectedColor,
  onColorChange,
  selectedSize,
  onSizeChange,
  selectedMaterial,
  onMaterialChange,
  colors = ["Default Color"],
  sizes = ["S", "M", "L", "XL"],
  materials = ["Premium"],
}) {
  return (
    <div className="flex flex-col gap-5 py-4 border-t border-b border-[var(--color-border)] my-2">
      {colors && colors.length > 0 && (
        <div className="flex flex-col gap-2">
          <Typography
            variant="body-sm"
            className="font-bold text-[var(--color-text-secondary)] uppercase text-xs tracking-wider"
          >
            Color:{" "}
            <span className="text-[var(--color-text-primary)] font-extrabold">
              {selectedColor || colors[0]}
            </span>
          </Typography>
          <div className="flex gap-2 flex-wrap">
            {colors.map((color) => {
              const isSelected = selectedColor === color || (!selectedColor && colors[0] === color);
              return (
                <button
                  key={color}
                  onClick={() => onColorChange(color)}
                  className={`px-4 py-2 text-xs font-bold border rounded-[var(--radius-md)] transition-all focus-ring ${
                    isSelected
                      ? "bg-[var(--color-primary)] border-[var(--color-primary)] text-white"
                      : "bg-[var(--color-bg-primary)] border-[var(--color-border)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)]"
                  }`}
                >
                  {color}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {sizes && sizes.length > 0 && (
        <div className="flex flex-col gap-2">
          <Typography
            variant="body-sm"
            className="font-bold text-[var(--color-text-secondary)] uppercase text-xs tracking-wider"
          >
            Size:{" "}
            <span className="text-[var(--color-text-primary)] font-extrabold">
              {selectedSize || sizes[0]}
            </span>
          </Typography>
          <div className="flex gap-2 flex-wrap">
            {sizes.map((size) => {
              const isSelected = selectedSize === size || (!selectedSize && sizes[0] === size);
              return (
                <button
                  key={size}
                  onClick={() => onSizeChange(size)}
                  className={`px-4 py-2 text-xs font-bold border rounded-[var(--radius-md)] transition-all focus-ring ${
                    isSelected
                      ? "bg-[var(--color-primary)] border-[var(--color-primary)] text-white"
                      : "bg-[var(--color-bg-primary)] border-[var(--color-border)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)]"
                  }`}
                >
                  {size}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {materials && materials.length > 0 && materials[0] !== "Premium" && (
        <div className="flex flex-col gap-2">
          <Typography
            variant="body-sm"
            className="font-bold text-[var(--color-text-secondary)] uppercase text-xs tracking-wider"
          >
            Material:{" "}
            <span className="text-[var(--color-text-primary)] font-extrabold">
              {selectedMaterial || materials[0]}
            </span>
          </Typography>
          <div className="flex gap-2 flex-wrap">
            {materials.map((mat) => {
              const isSelected =
                selectedMaterial === mat || (!selectedMaterial && materials[0] === mat);
              return (
                <button
                  key={mat}
                  onClick={() => onMaterialChange(mat)}
                  className={`px-4 py-2 text-xs font-bold border rounded-[var(--radius-md)] transition-all focus-ring ${
                    isSelected
                      ? "bg-[var(--color-primary)] border-[var(--color-primary)] text-white"
                      : "bg-[var(--color-bg-primary)] border-[var(--color-border)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)]"
                  }`}
                >
                  {mat}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
