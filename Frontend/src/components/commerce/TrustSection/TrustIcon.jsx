import {
  Truck,
  ShieldCheck,
  RotateCcw,
  Headphones,
  Shield,
  BadgeCheck,
  Award,
  HeartHandshake,
} from "lucide-react";

const iconMap = {
  truck: Truck,
  lock: ShieldCheck,
  "rotate-ccw": RotateCcw,
  headphones: Headphones,
  shield: Shield,
  check: BadgeCheck,
  award: Award,
  handshake: HeartHandshake,
};

export default function TrustIcon({ name, className = "" }) {
  const Icon = iconMap[name] || ShieldCheck;
  return <Icon className={`w-6 h-6 text-[var(--color-primary)] ${className}`} aria-hidden="true" />;
}
