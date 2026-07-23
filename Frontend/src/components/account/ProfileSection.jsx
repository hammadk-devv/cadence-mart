import ProfileForm from "./ProfileForm";
import ChangePasswordForm from "./ChangePasswordForm";
import Typography from "../ui/Typography";

export default function ProfileSection({ user, onSubmitProfile, isLoading }) {
  return (
    <div className="flex flex-col gap-8">
      <div className="border border-[var(--color-border)] rounded-[var(--radius-lg)] p-6 bg-[var(--color-card-bg)] shadow-[var(--shadow-sm)]">
        <Typography
          variant="h4"
          className="font-extrabold text-[var(--color-text-primary)] border-b border-[var(--color-border)] pb-3 mb-6 select-none"
        >
          Personal Information
        </Typography>
        <ProfileForm user={user} onSubmit={onSubmitProfile} isLoading={isLoading} />
      </div>

      <div className="border border-[var(--color-border)] rounded-[var(--radius-lg)] p-6 bg-[var(--color-card-bg)] shadow-[var(--shadow-sm)]">
        <Typography
          variant="h4"
          className="font-extrabold text-[var(--color-text-primary)] border-b border-[var(--color-border)] pb-3 mb-6 select-none"
        >
          Update Security Settings
        </Typography>
        <ChangePasswordForm />
      </div>
    </div>
  );
}
