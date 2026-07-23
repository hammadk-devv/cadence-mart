import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function Breadcrumbs({ className = "" }) {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  if (pathnames.length === 0) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center gap-2.5 text-sm text-[var(--color-text-secondary)] mb-6 ${className}`}
    >
      <Link to="/" className="hover:text-[var(--color-primary)] font-medium transition-colors">
        Home
      </Link>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        const displayName = value.charAt(0).toUpperCase() + value.slice(1);

        return (
          <React.Fragment key={to}>
            <ChevronRight className="w-4 h-4 text-gray-400 dark:text-zinc-500 flex-shrink-0" />
            {isLast ? (
              <span
                className="font-semibold text-[var(--color-text-primary)] tracking-tight"
                aria-current="page"
              >
                {displayName}
              </span>
            ) : (
              <Link
                to={to}
                className="hover:text-[var(--color-primary)] font-medium transition-colors"
              >
                {displayName}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
