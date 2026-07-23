import { useState } from "react";
import Input from "../ui/Input";
import PasswordInput from "./PasswordInput";
import PasswordStrength from "./PasswordStrength";
import Button from "../ui/Button";
import AuthErrorState from "./AuthErrorState";
import { toast } from "react-toastify";

export default function RegisterForm({ onRegister, isLoading, error }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) return;
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    onRegister(name, email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <AuthErrorState error={error} />

      <Input
        id="register-name"
        type="text"
        placeholder="e.g. John Doe"
        value={name}
        onChange={(e) => setName(e.target.value)}
        label="Full Name"
        className="w-full"
        required
      />

      <Input
        id="register-email"
        type="email"
        placeholder="yourname@domain.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        label="Email Address"
        className="w-full"
        required
      />

      <div className="flex flex-col">
        <PasswordInput
          id="register-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          placeholder="At least 8 characters"
        />
        <PasswordStrength password={password} />
      </div>

      <PasswordInput
        id="register-confirm-password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        label="Confirm Password"
        placeholder="Confirm your password"
      />

      <Button
        variant="primary"
        type="submit"
        isLoading={isLoading}
        className="w-full font-bold uppercase py-3.5 mt-2"
      >
        Create Account
      </Button>
    </form>
  );
}
