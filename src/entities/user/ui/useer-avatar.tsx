import { authService } from "@/shared/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui";

const UserAvatar = () => {
  return (
    <Avatar className="tw:cursor-pointer">
      <AvatarImage src="https://i.pravatar.cc/40" />
      <AvatarFallback>{authService.user?.username}</AvatarFallback>
    </Avatar>
  );
};

export { UserAvatar };
