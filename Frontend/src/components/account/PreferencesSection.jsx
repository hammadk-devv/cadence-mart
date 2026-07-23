import { useContext } from 'react';
import NotificationSettings from "./NotificationSettings";
import ThemeContext from "../../context/Theme/ThemeContext";
import Checkbox from "../ui/Checkbox";
import Typography from "../ui/Typography";

export default function PreferencesSection({ settings = {}, onChangeSettings }) {
  const { dark, setDark } = useContext(ThemeContext);

  const toggleTheme = (e) => {
    const nextDark = e.target.checked;
    localStorage.setItem("DarkMode", String(nextDark));
    setDark(nextDark);
  };

  return (
    <div className="border border-[var(--color-border)] rounded-[var(--radius-lg)] p-6 bg-[var(--color-card-bg)] shadow-[var(--shadow-sm)] flex flex-col gap-6">
      <Typography
        variant="h4"
        className="font-extrabold text-[var(--color-text-primary)] border-b border-[var(--color-border)] pb-3 mb-2 select-none"
      >
        User Preferences
      </Typography>

      <div className="flex flex-col gap-2 border-b border-[var(--color-border)] pb-6 select-none">
        <Typography
          variant="body-sm"
          className="font-bold text-[var(--color-text-secondary)] uppercase text-xs tracking-wider"
        >
          Appearance Theme Settings
        </Typography>
        <Checkbox
          id="pref-theme-dark"
          label="Enable Premium Dark Mode Theme"
          checked={dark}
          onChange={toggleTheme}
        />
      </div>

      <NotificationSettings settings={settings} onChange={onChangeSettings} />
    </div>
  );
}
