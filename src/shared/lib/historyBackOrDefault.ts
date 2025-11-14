import { navigateToLocation } from "@/shared/lib/navigateToLocation.ts";

export const historyBackOrDefault = (
  defaultUrl: string,
  stepsBack: number = 1,
) => {
  if (window.history.length > 1 + stepsBack) {
    window.history.go(-stepsBack);
    return;
  }

  navigateToLocation(defaultUrl);
};
