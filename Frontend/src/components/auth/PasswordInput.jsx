import { useState } from 'react';
import Input from "../ui/Input";
import { Eye, EyeOff } from "lucide-react";

export default function PasswordInput({
  id,
  value,
  onChange,
  placeholder = "Password",
  label = "Password",
}) {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShow = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <Input
        id={id}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        label={label}
        className="w-full pr-10"
        required
      />
      <button
        type="button"
        onClick={toggleShow}
        className="absolute right-3 bottom-3 text-gray-400 hover:text-[var(--color-primary)] focus-ring rounded p-1"
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
      </button>
    </div>
  );
}
