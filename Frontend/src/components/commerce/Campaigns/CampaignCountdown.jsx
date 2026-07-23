import { useState, useEffect } from "react";
import Typography from "../../ui/Typography";

export default function CampaignCountdown({ className = "" }) {
  const [time, setTime] = useState({ hours: 2, minutes: 45, seconds: 12 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return prev;
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNum = (num) => String(num).padStart(2, "0");

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex flex-col items-center bg-black/30 border border-white/20 rounded p-1.5 min-w-[36px]">
        <Typography variant="body-sm" className="font-extrabold text-white leading-none">
          {formatNum(time.hours)}
        </Typography>
      </div>
      <span className="text-white font-bold leading-none">:</span>
      <div className="flex flex-col items-center bg-black/30 border border-white/20 rounded p-1.5 min-w-[36px]">
        <Typography variant="body-sm" className="font-extrabold text-white leading-none">
          {formatNum(time.minutes)}
        </Typography>
      </div>
      <span className="text-white font-bold leading-none">:</span>
      <div className="flex flex-col items-center bg-black/30 border border-white/20 rounded p-1.5 min-w-[36px]">
        <Typography variant="body-sm" className="font-extrabold text-white leading-none">
          {formatNum(time.seconds)}
        </Typography>
      </div>
    </div>
  );
}
