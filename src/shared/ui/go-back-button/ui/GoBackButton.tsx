import { historyBackOrDefault } from "@/shared/lib";
import { Button } from "@/shared/ui";

interface GoBackButtonProps {
  fallbackUrl: string;
  stepsBack?: number;
  text: string;
}

export const GoBackButton: React.FC<GoBackButtonProps> = ({
  fallbackUrl,
  stepsBack = 1,
  text,
}) => {
  return (
    <Button
      className="tw:cursor-pointer"
      onClick={() => historyBackOrDefault(fallbackUrl, stepsBack)}
    >
      {text}
    </Button>
  );
};
