import { useTranslation } from "react-i18next";

import { authService } from "@/shared/api/auth";
import { Button } from "@/shared/ui";

export const LoginButton = () => {
  const { t } = useTranslation();

  return (
    <Button variant="outline" onClick={() => void authService.login()}>
      {t("login_btn")}
    </Button>
  );
};
