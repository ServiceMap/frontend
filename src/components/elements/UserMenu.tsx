import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/shadcn/avatar";
import { Button } from "@/components/ui/shadcn/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/shadcn/dropdown-menu";
import authService from "@/services/auth.service.ts";

export function UserMenu() {
  if (!authService.isLoggedIn) {
    return (
      <Button variant="outline" onClick={() => void authService.login()}>
        Login
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="tw:cursor-pointer">
          <AvatarImage src="https://i.pravatar.cc/40" />
          <AvatarFallback>{authService.user?.username}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => alert("Profile clicked")}>
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => alert("Settings clicked")}>
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => void authService.logout()}>
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
