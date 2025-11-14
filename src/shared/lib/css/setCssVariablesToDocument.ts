import { setCssVariables } from "@/shared/lib/css/setCssVariables.ts";

export const setCssVariablesToDocument = (
  vars: { property: string; value: string | null; priority?: string }[],
) => {
  setCssVariables(document.documentElement, vars);
};
