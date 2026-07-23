import Input from "../../ui/Input";
import Typography from "../../ui/Typography";

export default function FilterPrice({ value = { min: 0, max: 1000 }, onChange, className = "" }) {
  const handleMinChange = (e) => {
    const minVal = Number(e.target.value);
    onChange({ ...value, min: minVal });
  };

  const handleMaxChange = (e) => {
    const maxVal = Number(e.target.value);
    onChange({ ...value, max: maxVal });
  };

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <div className="flex gap-2 items-center">
        <Input
          id="price-min"
          type="number"
          placeholder="Min"
          value={value.min}
          onChange={handleMinChange}
          className="w-full"
          label=""
        />
        <Typography variant="body-sm" className="text-[var(--color-text-secondary)] select-none">
          to
        </Typography>
        <Input
          id="price-max"
          type="number"
          placeholder="Max"
          value={value.max}
          onChange={handleMaxChange}
          className="w-full"
          label=""
        />
      </div>
    </div>
  );
}
