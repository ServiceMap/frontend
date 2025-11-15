import { useTranslation } from "react-i18next";

import { authService } from "@/shared/api/auth";
import { Button, useAuthContext } from "@/shared/ui";

interface RegisterButtonProps {
  className?: string;
  showIfLoggedIn?: boolean;
}

export const RegisterButton = ({
  className,
  showIfLoggedIn,
}: RegisterButtonProps) => {
  const { t } = useTranslation();
  const { isLoggedIn } = useAuthContext();

  if (isLoggedIn && !showIfLoggedIn) {
    return null;
  }

  return (
    <Button
      className={className}
      variant="outline"
      onClick={() => void authService.register()}
    >
      {t("register_btn")}
    </Button>
  );
};
