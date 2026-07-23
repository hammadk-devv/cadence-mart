
export default function Typography({
  children,
  variant = "body", // h1, h2, h3, h4, body, body-sm, caption
  className = "",
  as,
}) {
  const styles = {
    h1: "text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-[var(--color-text-primary)]",
    h2: "text-2xl md:text-3xl font-bold tracking-tight leading-snug text-[var(--color-text-primary)]",
    h3: "text-xl md:text-2xl font-bold leading-snug text-[var(--color-text-primary)]",
    h4: "text-lg md:text-xl font-semibold leading-normal text-[var(--color-text-primary)]",
    body: "text-sm md:text-base text-[var(--color-text-primary)] leading-relaxed",
    "body-sm": "text-xs md:text-sm text-[var(--color-text-secondary)] leading-relaxed",
    caption: "text-xs text-[var(--color-text-secondary)] uppercase tracking-wider font-semibold",
  };

  const Component =
    as ||
    {
      h1: "h1",
      h2: "h2",
      h3: "h3",
      h4: "h4",
      body: "p",
      "body-sm": "p",
      caption: "span",
    }[variant] ||
    "p";

  return <Component className={`${styles[variant]} ${className}`}>{children}</Component>;
}
