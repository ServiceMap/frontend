import { useTranslation } from "react-i18next";
import { Frown } from "lucide-react";

import { PAGES_ROUTES } from "@/shared/consts";
import { historyBackOrDefault } from "@/shared/lib";
import { Button } from "@/shared/ui";

export const AccessDeniedPage = () => {
  const { t } = useTranslation();

  return (
    <div
      role="alert"
      className="tw:flex tw:grow tw:flex-col tw:items-center tw:justify-center tw:gap-10 tw:p-4"
    >
      <h1 className="tw:flex tw:flex-wrap tw:items-center tw:justify-center tw:gap-2 tw:text-center tw:text-3xl tw:font-semibold tw:text-red-500">
        {t("access_denied").toUpperCase()}
        <Frown className="tw:shrink-0" size={40} />
      </h1>

      <span className="tw:text-center">
        <p>It appears that you do not have access to this page.</p>
        <p>
          Please contact your administrator or Drone Detection support for
          assistance.
        </p>
      </span>

      <Button
        className="tw:cursor-pointer"
        onClick={() => historyBackOrDefault(PAGES_ROUTES.ROOT, 2)}
      >
        {t("go_back_btn")}
      </Button>
    </div>
  );
};
