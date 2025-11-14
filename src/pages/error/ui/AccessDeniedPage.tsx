import { useTranslation } from "react-i18next";
import { Frown } from "lucide-react";

import { GoBackButton } from "@/features/go-back-button/ui/GoBackButton.tsx";
import { ErrorLayout } from "@/shared/ui";

export const AccessDeniedPage = () => {
  const { t } = useTranslation();

  return (
    <ErrorLayout>
      <ErrorLayout.TitleContainer className="tw:text-red-500">
        {t("access_denied").toUpperCase()}
        <Frown className="tw:shrink-0" size={40} />
      </ErrorLayout.TitleContainer>
      <ErrorLayout.DescriptionContainer>
        {t("access_denied_message")}
      </ErrorLayout.DescriptionContainer>
      <ErrorLayout.ActionContainer>
        <GoBackButton />
      </ErrorLayout.ActionContainer>
    </ErrorLayout>
  );
};
