import Rating from "../Rating";

export default function ProductRating({ value, reviewCount, className = "" }) {
  return <Rating value={value} reviewCount={reviewCount} size="sm" className={className} />;
}
