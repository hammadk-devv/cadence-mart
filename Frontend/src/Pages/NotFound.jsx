import { useContext } from 'react';
import { Link } from "react-router-dom";
import { HelpCircle } from "lucide-react";
import ThemeContext from "../context/Theme/ThemeContext.jsx";
import Button from "../components/ui/Button.jsx";

export default function NotFound() {
  const { dark } = useContext(ThemeContext);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-[70vh] px-4 text-center ${dark ? "text-white" : "text-zinc-900"}`}
    >
      <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mb-6 text-yellow-500">
        <HelpCircle className="w-8 h-8" />
      </div>
      <h1 className="text-3xl font-extrabold tracking-tight mb-3">404 - Page Not Found</h1>
      <p className="text-[var(--color-text-secondary)] mb-8 max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link to="/">
        <Button variant="primary">Go Home</Button>
      </Link>
    </div>
  );
}
