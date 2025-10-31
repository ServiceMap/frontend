import { useNavigate } from "react-router-dom";
import { t } from "i18next";

import { ROUTES } from "@/constants/routes.ts";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="p-6 text-center">
      <h1>{t("not_found_message")}</h1>
      <button onClick={() => void navigate(ROUTES.HOME)}>
        {t("go_back_to_home_btn")}
      </button>
    </div>
  );
};

export default NotFoundPage;
