import Button from "../ui/Button";
import { toast } from "react-toastify";

export default function SocialLoginSection() {
  const handleSocialClick = (platform) => {
    toast.info(`Connecting secure ${platform} OAuth flow...`);
  };

  return (
    <div className="flex gap-3 select-none">
      <Button
        variant="outline"
        onClick={() => handleSocialClick("Google")}
        className="w-full flex items-center justify-center gap-2 border-[var(--color-border)] hover:bg-[var(--color-bg-secondary)] font-bold text-xs py-2.5"
      >
        <span>Google</span>
      </Button>
      <Button
        variant="outline"
        onClick={() => handleSocialClick("Apple")}
        className="w-full flex items-center justify-center gap-2 border-[var(--color-border)] hover:bg-[var(--color-bg-secondary)] font-bold text-xs py-2.5"
      >
        <span>Apple</span>
      </Button>
    </div>
  );
}
