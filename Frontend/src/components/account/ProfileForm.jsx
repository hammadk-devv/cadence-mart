import { useState } from 'react';
import Input from "../ui/Input";
import Button from "../ui/Button";

export default function ProfileForm({ user, onSubmit, isLoading = false }) {
  const [name, setName] = useState(user.name || "");
  const [email, setEmail] = useState(user.email || "");
  const [phone, setPhone] = useState(user.phone || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;
    onSubmit({ name, email, phone });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input
        id="profile-name-input"
        placeholder="e.g. Jane Doe"
        value={name}
        onChange={(e) => setName(e.target.value)}
        label="Full Name"
        required
      />

      <Input
        id="profile-email-input"
        type="email"
        placeholder="yourname@domain.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        label="Email Address"
        required
      />

      <Input
        id="profile-phone-input"
        placeholder="e.g. +1 555-0199"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        label="Phone Number"
      />

      <Button
        variant="primary"
        type="submit"
        isLoading={isLoading}
        className="self-end px-8 py-2.5 font-bold uppercase mt-2"
      >
        Save Changes
      </Button>
    </form>
  );
}
