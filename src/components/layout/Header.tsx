import { Link } from "react-router-dom";

import { ThemeToggle } from "@/components/elements/ThemeToggle";
import { UserMenu } from "@/components/elements/UserMenu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/shadcn/navigation-menu";

const menu = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  {
    name: "Products",
    submenu: [
      { name: "Item 1", to: "/products/1" },
      { name: "Item 2", to: "/products/2" },
    ],
  },
];

export function Header() {
  return (
    <header className="tw:flex tw:items-stretch tw:justify-between tw:border-b tw:px-6 tw:py-3">
      <div className="tw:flex tw:h-auto tw:items-center tw:gap-4">
        <Link to="/" className="tw:text-lg tw:font-bold tw:text-primary">
          ServiceMap
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="tw:flex tw:gap-3">
            {menu.map((item) =>
              item.submenu ? (
                <NavigationMenuItem
                  key={item.name}
                  className="tw:group/submenu tw:relative"
                >
                  <span className="tw:cursor-pointer">{item.name}</span>

                  <div className="tw:absolute tw:mt-0 tw:hidden tw:min-w-[150px] tw:rounded tw:border tw:bg-popover tw:p-2 tw:group-hover/submenu:block">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.to}
                        to={sub.to}
                        className="tw:block tw:px-3 tw:py-1 tw:text-popover-foreground tw:hover:bg-secondary"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={item.name}>
                  <Link to={item.to} className="tw:hover:text-primary">
                    {item.name}
                  </Link>
                </NavigationMenuItem>
              ),
            )}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="tw:flex tw:items-center tw:gap-3">
        <ThemeToggle />
        <UserMenu />
      </div>
    </header>
  );
}
