export default function BrandLogo({ name = "", className = "" }) {
  const brandName = (name || "").toLowerCase().trim();
  const commonClasses = `w-auto text-gray-400/60 group-hover:text-[var(--color-primary)] group-hover:scale-105 transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] ${className}`;

  if (brandName === "apple") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={`h-8 ${commonClasses}`}>
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.21.67-2.93 1.49-.62.69-1.16 1.84-1.01 2.96 1.12.09 2.27-.57 2.95-1.39z" />
      </svg>
    );
  }

  if (brandName === "nike") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={`h-6 ${commonClasses}`}>
        <path d="M21 6.5c-3.1 1.7-6.2 3.8-9 6.2-2.3 2-4.2 4.2-5.7 6.4-1.2 1.8-2 3.4-2.3 4.5 0 .1-.1.2-.2.2h-.5c-.1 0-.2-.1-.2-.2v-.5c.2-1.7.9-3.8 2-6.1 1.7-3.4 4-6.6 6.8-9.4 1.8-1.8 3.7-3.3 5.6-4.4.9-.5 1.7-.8 2.4-1 .3-.1.6-.1.8-.1h.3c.2 0 .4.1.4.3v1c-.1.9-.4 1.7-.9 2.5-.3.6-.8 1.1-1.4 1.7-.5.5-1.1 1-1.6 1.5-.2.2-.4.4-.6.6 1.9.4 3.7.8 5.6 1 .3 0 .5.2.5.5v1c0 .2-.1.3-.3.3z" />
      </svg>
    );
  }

  if (brandName === "sony") {
    return (
      <svg viewBox="0 0 24 8" fill="currentColor" className={`h-4 ${commonClasses}`}>
        <path d="M0 0h3.5v1H1v2.5h2v1H1V7h2.5v1H0V0zm4.5 0h3.5v8H4.5V0zm1 1v6h1.5V1H5.5zm3.5-1h3.5v1h-2.5v2.5h2v1h-2V7h2.5v1H9V0zm4.5 0h1.5l1.5 4 1.5-4h1.5v8h-1V1.5l-1.5 4.5h-1L15 1.5V8h-1V0z" />
      </svg>
    );
  }

  if (brandName === "samsung") {
    return (
      <svg viewBox="0 0 32 8" fill="currentColor" className={`h-4 ${commonClasses}`}>
        <path d="M2.5 0h1.5v1.5H2.5V0zm0 3H4v5H2.5V3zm2.5-3h1.5v8H5V0zm2.5 0H9l1.5 4 1.5-4h1.5v8h-1V1.5L10 6h-1L7.5 1.5V8h-1V0zm6 0h2v1.5h-2V0zm0 3h2v5h-2V3zm3-3h1.5v1.5h-1.5V0zm0 3h1.5v5h-1.5V3zm2.5-3h1.5v8h-1.5V0zm2.5 0H23l1.5 4 1.5-4h1.5v8h-1V1.5L24 6h-1L21.5 1.5V8h-1V0zm5 0h2v1.5h-2V0zm0 3h2v5h-2V3z" />
      </svg>
    );
  }

  if (brandName === "adidas") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={`h-7 ${commonClasses}`}>
        <path d="M2.5 21l3-5.5h2.5L5 21H2.5zm4.5 0l4.5-8.5h2.5L9.5 21H7zm5 0l6-11.5h2.5L14.5 21H12z" />
      </svg>
    );
  }

  return (
    <span className="text-gray-400 font-bold uppercase tracking-wider text-sm select-none">
      {name}
    </span>
  );
}
