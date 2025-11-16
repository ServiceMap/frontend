import { type To } from "react-router-dom";

import { type WithOptional } from "@/shared/types";

export type CollapsibleMenuBaseItem = {
  icon?: React.ReactElement;
  name: string;
  to: To;
};

export type CollapsibleMenuItem = WithOptional<
  CollapsibleMenuBaseItem,
  "to"
> & {
  submenu?: CollapsibleMenuBaseItem[];
};
