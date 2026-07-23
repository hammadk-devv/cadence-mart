import { Laptop, Phone } from "lucide-react";
import Typography from "../ui/Typography";

export default function SessionList() {
  const sessions = [
    {
      device: "Windows Chrome Desktop",
      ip: "192.168.1.101",
      current: true,
      lastActive: "Active Now",
      icon: Laptop,
    },
    {
      device: "iPhone Safari Mobile",
      ip: "10.0.4.88",
      current: false,
      lastActive: "2 hours ago",
      icon: Phone,
    },
  ];

  return (
    <div className="flex flex-col gap-4 select-none">
      <Typography
        variant="body-sm"
        className="font-bold text-[var(--color-text-secondary)] uppercase text-xs tracking-wider"
      >
        Logged-In Devices
      </Typography>
      <div className="flex flex-col gap-3">
        {sessions.map((sess, idx) => {
          const Icon = sess.icon;
          return (
            <div
              key={idx}
              className="flex items-center justify-between p-4 border border-[var(--color-border)] rounded-[var(--radius-md)] bg-[var(--color-bg-secondary)]"
            >
              <div className="flex items-center gap-3">
                <Icon className="w-5 h-5 text-[var(--color-primary)]" />
                <div className="flex flex-col gap-0.5">
                  <span className="font-extrabold text-[var(--color-text-primary)]">
                    {sess.device}
                  </span>
                  <span className="text-[10px] text-[var(--color-text-secondary)] font-semibold">
                    IP Address: {sess.ip} • Last Active: {sess.lastActive}
                  </span>
                </div>
              </div>
              {sess.current && (
                <span className="bg-green-50 text-[var(--color-success)] text-[9px] font-black uppercase px-2 py-0.5 border border-[var(--color-success)] rounded">
                  Current Session
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
