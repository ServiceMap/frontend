import { useTranslation } from "react-i18next";

import { PAGE_ROUTES } from "@/shared/consts";
import { historyBackOrDefault } from "@/shared/lib";
import { Button } from "@/shared/ui";

interface GoBackButtonProps {
  fallbackUrl?: string;
  stepsBack?: number;
  text?: string;
}

export const GoBackButton: React.FC<GoBackButtonProps> = ({
  fallbackUrl = PAGE_ROUTES.ROOT,
  stepsBack = 1,
  text,
}) => {
  const { t } = useTranslation();

  return (
    <Button
      className="tw:cursor-pointer"
      onClick={() => historyBackOrDefault(fallbackUrl, stepsBack)}
    >
      {text ? text : t("go_back_btn")}
    </Button>
  );
};
