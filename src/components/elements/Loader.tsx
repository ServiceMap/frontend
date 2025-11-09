import { useTranslation } from "react-i18next";

import Spinner from "@/components/ui/Spinner.tsx";
import { cn } from "@/utils/cn.ts";

interface LoadingComponentProps {
  fullscreen?: boolean;
  isLoading?: boolean;
}

const Loader = ({ fullscreen, isLoading = true }: LoadingComponentProps) => {
  const { t } = useTranslation();

  return (
    isLoading && (
      <div
        className={cn("flex justify-center items-center gap-2", {
          "w-dvw h-dvh": fullscreen,
        })}
      >
        <Spinner className="size-8" />
        <span>{t("loading_message")}</span>
      </div>
    )
  );
};

export default Loader;
