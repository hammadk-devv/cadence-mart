import { useState } from 'react';
import PasswordInput from "../auth/PasswordInput";
import Button from "../ui/Button";
import { toast } from "react-toastify";

export default function ChangePasswordForm() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!oldPassword || !newPassword || !confirmPassword) return;
    if (newPassword !== confirmPassword) {
      toast.error("New passwords do not match!");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Password changed successfully!");
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <PasswordInput
        id="old-password"
        value={oldPassword}
        onChange={(e) => setOldPassword(e.target.value)}
        label="Current Password"
        placeholder="Enter current password"
      />

      <PasswordInput
        id="change-new-password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        label="New Password"
        placeholder="At least 8 characters"
      />

      <PasswordInput
        id="change-confirm-password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        label="Confirm New Password"
        placeholder="Confirm new password"
      />

      <Button
        variant="primary"
        type="submit"
        isLoading={isLoading}
        className="self-end px-8 py-2.5 font-bold uppercase mt-2"
      >
        Update Password
      </Button>
    </form>
  );
}
