import {
  CircleQuestionMarkIcon,
  FileQuestionMarkIcon,
  PackageOpenIcon,
  PencilRulerIcon,
  UserSearchIcon,
} from "lucide-react";

import type { CollapsibleMenuItem } from "@/shared/ui/collapsible-menu";

export const NAVIGATION_MENU: CollapsibleMenuItem[] = [
  { icon: <UserSearchIcon />, name: "Find a master", to: "/" },
  { icon: <FileQuestionMarkIcon />, name: "How it works", to: "/about" },
  { icon: <PencilRulerIcon />, name: "Provide a service", to: "/about" },
  {
    icon: <PackageOpenIcon />,
    name: "Products",
    submenu: [
      { name: "Item 1", to: "/products/1" },
      { name: "Item 2", to: "/products/2", icon: <PencilRulerIcon /> },
    ],
  },
  {
    icon: <CircleQuestionMarkIcon />,
    name: "Help",
    to: "/help",
  },
] as const;
