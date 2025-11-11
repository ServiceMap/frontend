import { useTranslation } from "react-i18next";

import { Spinner } from "@/shared/ui/shadcn";
import { cn } from "@/shared/utils";

interface LoadingComponentProps {
  fullscreen?: boolean;
  isLoading?: boolean;
}

export const Loader = ({
  fullscreen,
  isLoading = true,
}: LoadingComponentProps) => {
  const { t } = useTranslation();

  return (
    isLoading && (
      <div
        className={cn("tw:flex tw:items-center tw:justify-center tw:gap-2", {
          "tw:h-dvh tw:w-dvw": fullscreen,
        })}
      >
        <Spinner className="tw:size-8" />
        <span>{t("loading_message")}</span>
      </div>
    )
  );
};

export default Loader;
