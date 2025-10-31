import { useNavigate } from "react-router-dom";
import { t } from "i18next";

import { ROUTES } from "@/constants/routes.ts";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="p-6 text-center">
      <h1>{t("invalid_realm_or_access_denied")}</h1>
      <button
        onClick={() => {
          navigate(ROUTES.HOME);
        }}
      >
        {t("go_back_to_home_btn")}
      </button>
    </div>
  );
};

export default ErrorPage;
