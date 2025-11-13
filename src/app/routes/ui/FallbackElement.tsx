import type { FallbackProps } from "react-error-boundary";
import { t } from "i18next";
import { Frown } from "lucide-react";

import { Button } from "@/shared/ui";

export const FallbackElement = ({
  error,
  resetErrorBoundary,
}: FallbackProps) => {
  return (
    <div
      role="alert"
      className="tw:flex tw:min-h-dvh tw:max-w-dvw tw:flex-col tw:items-center tw:justify-center tw:gap-10 tw:p-4"
    >
      <h1 className="tw:flex tw:items-center tw:gap-2 tw:text-3xl tw:font-semibold">
        {t("something_went_wrong")}
        <Frown className="tw:shrink-0 tw:text-primary/90" size={40} />
      </h1>

      <span className="tw:[display:-webkit-box] tw:overflow-hidden tw:text-center tw:text-red-600 tw:[-webkit-box-orient:vertical] tw:[-webkit-line-clamp:10]">
        {(error as { message: string }).message}
      </span>

      <Button className="tw:cursor-pointer" onClick={resetErrorBoundary}>
        {t("go_back_btn")}
      </Button>
    </div>
  );
};
