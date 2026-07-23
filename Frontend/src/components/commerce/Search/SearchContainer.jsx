export default function SearchContainer({ children, className = "" }) {
  return <div className={`w-full max-w-md ${className}`}>{children}</div>;
}
