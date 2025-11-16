import { Menu } from "lucide-react";

import { AuthSwitchButton, RegisterButton } from "@/features/auth";
import { PAGE_ROUTES } from "@/shared/consts";
import {
  Button,
  CollapsibleMenu,
  ScrollArea,
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SiteLogo,
} from "@/shared/ui";
import { NAVIGATION_MENU } from "@/widgets/header";

export const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="tw:md:hidden" variant="ghost" size="icon">
          <Menu size={20} />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="tw:gap-0">
        <SheetHeader>
          <SheetTitle>
            <SiteLogo clickableRoute={PAGE_ROUTES.ROOT}>ServiceMap</SiteLogo>
          </SheetTitle>
        </SheetHeader>

        <ScrollArea
          type="auto"
          className="tw:[&:has(>div[data-state=visible][data-orientation=vertical])]:pr-2"
        >
          <div className={"tw:flex tw:flex-1 tw:flex-col tw:gap-2 tw:px-2"}>
            {NAVIGATION_MENU.map((item) => (
              <CollapsibleMenu key={item.name} item={item} />
            ))}
          </div>
        </ScrollArea>

        <SheetFooter>
          <AuthSwitchButton />
          <RegisterButton />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
