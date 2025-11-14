import { cn, historyBackOrDefault } from "@/shared/lib";
import { Button } from "@/shared/ui/shadcn";

interface GoBackButtonProps {
  fallbackUrl: string;
  stepsBack?: number;
  text: string;
  className?: string;
}

export const GoBackButton: React.FC<GoBackButtonProps> = ({
  fallbackUrl,
  stepsBack = 1,
  text,
  className,
}) => {
  return (
    <Button
      className={cn("tw:cursor-pointer", className)}
      onClick={() => historyBackOrDefault(fallbackUrl, stepsBack)}
    >
      {text}
    </Button>
  );
};
