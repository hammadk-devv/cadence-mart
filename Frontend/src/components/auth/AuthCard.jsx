import { useState } from "react";
import AuthHeader from "./AuthHeader";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ForgotPasswordForm from "./ForgotPasswordForm";

export default function AuthCard({ onLogin, onRegister, isLoading, error }) {
  const [activeTab, setActiveTab] = useState("login");
  const [viewState, setViewState] = useState("form");

  return (
    <div className="w-full max-w-md mx-auto border border-[var(--color-border)] rounded-[var(--radius-lg)] p-8 bg-[var(--color-card-bg)] shadow-[var(--shadow-lg)]">
      <AuthHeader
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          setViewState("form");
        }}
        isRecovering={viewState === "forgot"}
      />

      {viewState === "forgot" ? (
        <ForgotPasswordForm onBackToLogin={() => setViewState("form")} />
      ) : activeTab === "login" ? (
        <LoginForm
          onLogin={onLogin}
          onForgotPassword={() => setViewState("forgot")}
          isLoading={isLoading}
          error={error}
        />
      ) : (
        <RegisterForm onRegister={onRegister} isLoading={isLoading} error={error} />
      )}
    </div>
  );
}
