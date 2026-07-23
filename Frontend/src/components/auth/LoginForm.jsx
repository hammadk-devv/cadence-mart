import { useState } from 'react';
import Input from "../ui/Input";
import PasswordInput from "./PasswordInput";
import RememberMe from "./RememberMe";
import Button from "../ui/Button";
import AuthDivider from "./AuthDivider";
import SocialLoginSection from "./SocialLoginSection";
import AuthErrorState from "./AuthErrorState";

export default function LoginForm({ onLogin, onForgotPassword, isLoading, error }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    onLogin(email, password, rememberMe);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <AuthErrorState error={error} />

      <Input
        id="login-email"
        type="email"
        placeholder="yourname@domain.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        label="Email Address"
        className="w-full"
        autoFocus
        required
      />

      <div className="flex flex-col">
        <PasswordInput
          id="login-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          placeholder="Enter your password"
        />
        <div className="flex justify-between items-center mt-2">
          <RememberMe checked={rememberMe} onChange={setRememberMe} />
          <button
            onClick={onForgotPassword}
            type="button"
            className="text-xs font-bold text-[var(--color-primary)] hover:underline select-none"
          >
            Forgot Password?
          </button>
        </div>
      </div>

      <Button
        variant="primary"
        type="submit"
        isLoading={isLoading}
        className="w-full font-bold uppercase py-3.5 mt-2"
      >
        Sign In
      </Button>

      <AuthDivider />
      <SocialLoginSection />
    </form>
  );
}
