import Checkbox from "../ui/Checkbox";
import Typography from "../ui/Typography";

export default function NotificationSettings({ settings = {}, onChange }) {
  return (
    <div className="flex flex-col gap-4 select-none">
      <Typography
        variant="body-sm"
        className="font-bold text-[var(--color-text-secondary)] uppercase text-xs tracking-wider"
      >
        Communication Channels
      </Typography>
      <div className="flex flex-col gap-3">
        <Checkbox
          id="notif-order-status"
          label="Order Status Updates"
          checked={settings.orderUpdates || false}
          onChange={(e) => onChange("orderUpdates", e.target.checked)}
        />
        <Checkbox
          id="notif-marketing"
          label="Marketing Promotions & Offers"
          checked={settings.promotions || false}
          onChange={(e) => onChange("promotions", e.target.checked)}
        />
        <Checkbox
          id="notif-newsletter"
          label="Weekly Curated Newsletters"
          checked={settings.newsletter || false}
          onChange={(e) => onChange("newsletter", e.target.checked)}
        />
      </div>
    </div>
  );
}
