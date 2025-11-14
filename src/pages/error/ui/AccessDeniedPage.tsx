import { useTranslation } from "react-i18next";
import { Frown } from "lucide-react";

import { GoBackButton } from "@/features/go-back-button/ui/GoBackButton.tsx";
import {
  ErrorPageMessageTemplate,
  ErrorPageTemplate,
  ErrorPageTitleTemplate,
} from "@/shared/ui";

export const AccessDeniedPage = () => {
  const { t } = useTranslation();

  return (
    <ErrorPageTemplate>
      <ErrorPageTitleTemplate className="tw:text-red-500">
        {t("access_denied").toUpperCase()}
        <Frown className="tw:shrink-0" size={40} />
      </ErrorPageTitleTemplate>
      <ErrorPageMessageTemplate>
        {t("access_denied_message")}
      </ErrorPageMessageTemplate>
      <GoBackButton />
    </ErrorPageTemplate>
  );
};
