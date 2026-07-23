import Price from "../Price";

export default function ProductPrice({ value, originalValue, className = "" }) {
  return <Price value={value} originalValue={originalValue} size="sm" className={className} />;
}
