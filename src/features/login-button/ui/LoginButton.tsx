import { useTranslation } from "react-i18next";

import { authService } from "@/shared/auth";
import { Button } from "@/shared/ui";

const LoginButton = () => {
  const { t } = useTranslation();

  return (
    <Button variant="outline" onClick={() => void authService.login()}>
      {t("login_btn")}
    </Button>
  );
};

export { LoginButton };
