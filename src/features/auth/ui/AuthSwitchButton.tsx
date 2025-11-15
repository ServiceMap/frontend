import { LoginButton, LogoutButton } from "@/features/auth/ui";
import { useAuthContext } from "@/shared/ui";

interface AuthSwitchButtonProps {
  className?: string;
}

export const AuthSwitchButton = ({ className }: AuthSwitchButtonProps) => {
  const { isLoggedIn } = useAuthContext();

  return isLoggedIn ? (
    <LogoutButton className={className} />
  ) : (
    <LoginButton className={className} />
  );
};
