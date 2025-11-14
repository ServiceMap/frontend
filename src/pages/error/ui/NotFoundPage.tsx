import { useTranslation } from "react-i18next";

import { GoBackButton } from "@/features/go-back-button/ui/GoBackButton.tsx";
import {
  ErrorPageMessageTemplate,
  ErrorPageTemplate,
  ErrorPageTitleTemplate,
} from "@/shared/ui";

export const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <ErrorPageTemplate>
      <ErrorPageTitleTemplate className="tw:mb-2 tw:text-8xl">
        404
      </ErrorPageTitleTemplate>
      <ErrorPageMessageTemplate className="tw:text-3xl tw:font-semibold">
        {t("page_not_found_message").toUpperCase()}
      </ErrorPageMessageTemplate>
      <GoBackButton stepsBack={0} text={t("go_home_btn")} />
    </ErrorPageTemplate>
  );
};
