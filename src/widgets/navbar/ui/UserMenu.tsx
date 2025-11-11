import { authService } from "@/shared/auth";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/shadcn";

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
        <DropdownMenuItem
          className="tw:cursor-pointer"
          onClick={() => alert("Profile clicked")}
        >
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem
          className="tw:cursor-pointer"
          onClick={() => alert("Settings clicked")}
        >
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem
          className="tw:cursor-pointer"
          onClick={() => void authService.logout()}
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
