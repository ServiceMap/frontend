import { useTranslation } from "react-i18next";

import { PAGES_ROUTES } from "@/shared/consts";
import { historyBackOrDefault } from "@/shared/lib";
import { Button } from "@/shared/ui";

interface GoBackButtonProps {
  fallbackUrl?: string;
  stepsBack?: number;
  i18nTextKey?: string;
}

export const GoBackButton: React.FC<GoBackButtonProps> = ({
  fallbackUrl = PAGES_ROUTES.ROOT,
  stepsBack = 1,
  i18nTextKey = "go_back_btn",
}) => {
  const { t } = useTranslation();

  return (
    <Button
      className="tw:cursor-pointer"
      onClick={() => historyBackOrDefault(fallbackUrl, stepsBack)}
    >
      {t(i18nTextKey)}
    </Button>
  );
};
