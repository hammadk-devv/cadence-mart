import { ShoppingBag, Heart, MapPin, User, ArrowRight } from "lucide-react";
import Typography from "../ui/Typography";

export default function DashboardOverview({
  user,
  cartCount = 0,
  wishlistCount = 0,
  addressCount = 0,
  onNavigate,
}) {
  const cards = [
    {
      id: "profile",
      title: "Profile Settings",
      desc: "Manage email, phone numbers, and profile avatars",
      icon: User,
      action: "Edit Profile",
    },
    {
      id: "orders",
      title: "Order History",
      desc: "Track ship speeds, print invoice receipts, and review records",
      icon: ShoppingBag,
      action: "Track Orders",
    },
    {
      id: "addresses",
      title: "Saved Addresses",
      desc: "Manage shipping destination inputs and details",
      icon: MapPin,
      action: "Manage Addresses",
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <div className="p-6 border border-[var(--color-border)] rounded-[var(--radius-lg)] bg-[var(--color-bg-secondary)] select-none">
        <Typography variant="h3" className="font-extrabold text-[var(--color-text-primary)]">
          Welcome back, {user.name || "Member"}!
        </Typography>
        <Typography
          variant="body-sm"
          className="text-[var(--color-text-secondary)] mt-1 font-semibold"
        >
          Configure preferences, inspect purchase order tracking lists, and update address inputs.
        </Typography>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 select-none">
        <div className="p-5 border border-[var(--color-border)] rounded-[var(--radius-lg)] bg-[var(--color-card-bg)] shadow-[var(--shadow-sm)] flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <Typography
              variant="body-xs"
              className="font-bold text-[var(--color-text-secondary)] uppercase tracking-wider"
            >
              Items in Cart
            </Typography>
            <Typography variant="h2" className="font-extrabold text-[var(--color-text-primary)]">
              {cartCount}
            </Typography>
          </div>
          <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/5 flex items-center justify-center">
            <ShoppingBag className="w-6 h-6 text-[var(--color-primary)]" />
          </div>
        </div>

        <div className="p-5 border border-[var(--color-border)] rounded-[var(--radius-lg)] bg-[var(--color-card-bg)] shadow-[var(--shadow-sm)] flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <Typography
              variant="body-xs"
              className="font-bold text-[var(--color-text-secondary)] uppercase tracking-wider"
            >
              Saved Favorites
            </Typography>
            <Typography variant="h2" className="font-extrabold text-[var(--color-text-primary)]">
              {wishlistCount}
            </Typography>
          </div>
          <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/5 flex items-center justify-center">
            <Heart className="w-6 h-6 text-[var(--color-primary)]" />
          </div>
        </div>

        <div className="p-5 border border-[var(--color-border)] rounded-[var(--radius-lg)] bg-[var(--color-card-bg)] shadow-[var(--shadow-sm)] flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <Typography
              variant="body-xs"
              className="font-bold text-[var(--color-text-secondary)] uppercase tracking-wider"
            >
              Saved Addresses
            </Typography>
            <Typography variant="h2" className="font-extrabold text-[var(--color-text-primary)]">
              {addressCount}
            </Typography>
          </div>
          <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/5 flex items-center justify-center">
            <MapPin className="w-6 h-6 text-[var(--color-primary)]" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Typography
          variant="h4"
          className="font-extrabold text-[var(--color-text-primary)] select-none"
        >
          Quick Actions Settings
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <button
                type="button"
                key={card.id}
                onClick={() => onNavigate(card.id)}
                className="p-5 border border-[var(--color-border)] rounded-[var(--radius-lg)] bg-[var(--color-card-bg)] hover:border-[var(--color-primary)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] text-left focus-ring transition-all group flex flex-col justify-between min-h-[160px]"
              >
                <div className="flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--color-bg-secondary)] flex items-center justify-center text-[var(--color-primary)]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col gap-0.5 select-none">
                    <Typography
                      variant="body-sm"
                      className="font-extrabold text-[var(--color-text-primary)]"
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      variant="body-xs"
                      className="text-[var(--color-text-secondary)] font-medium leading-relaxed"
                    >
                      {card.desc}
                    </Typography>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs font-bold text-[var(--color-primary)] mt-4">
                  <span>{card.action}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
