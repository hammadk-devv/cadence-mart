import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShieldAlert } from "lucide-react";
import ThemeContext from "../context/Theme/ThemeContext.jsx";
import Button from "../components/ui/Button.jsx";

export default function Unauthorized() {
  const { dark } = useContext(ThemeContext);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-[70vh] px-4 text-center ${dark ? "text-white" : "text-zinc-900"}`}
    >
      <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-6 text-red-500">
        <ShieldAlert className="w-8 h-8" />
      </div>
      <h1 className="text-3xl font-extrabold tracking-tight mb-3">403 - Unauthorized Access</h1>
      <p className="text-[var(--color-text-secondary)] mb-8 max-w-md">
        You do not have permission to view this resource. Please make sure you are signed in with
        the correct administrative credentials.
      </p>
      <div className="flex gap-4">
        <Link to="/">
          <Button variant="primary">Go Home</Button>
        </Link>
        <Link to="/login">
          <Button variant="outline">Sign In</Button>
        </Link>
      </div>
    </div>
  );
}
