import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "@/constants/routes.constants.ts";

const ErrorPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <h1>{t("invalid_realm_or_access_denied")}</h1>
      <button
        onClick={() => {
          navigate(ROUTES.HOME);
        }}
      >
        {t("go_back_to_home_btn")}
      </button>
    </>
  );
};

export default ErrorPage;
