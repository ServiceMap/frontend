import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "@/constants/routes.ts";

const NotFoundPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <h1>{t("not_found_message")}</h1>
      <button onClick={() => void navigate(ROUTES.HOME)}>
        {t("go_back_to_home_btn")}
      </button>
    </>
  );
};

export default NotFoundPage;
