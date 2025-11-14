import { cn } from "@/shared/lib";

interface ErrorPageTemplateProps {
  children: React.ReactNode;
  className?: string;
}

export const ErrorPageTitleTemplate: React.FC<ErrorPageTemplateProps> = ({
  children,
  className,
}) => (
  <div
    className={cn(
      "tw:flex tw:flex-wrap tw:items-center tw:justify-center tw:gap-2 tw:text-center tw:text-3xl tw:font-semibold",
      className,
    )}
  >
    {children}
  </div>
);

export const ErrorPageMessageTemplate: React.FC<ErrorPageTemplateProps> = ({
  children,
  className,
}) => <div className={cn("tw:text-center", className)}>{children}</div>;

export const ErrorPageTemplate: React.FC<ErrorPageTemplateProps> = ({
  children,
  className,
}) => {
  return (
    <div
      role="alert"
      className={cn(
        "tw:flex tw:grow tw:flex-col tw:items-center tw:justify-center tw:gap-10 tw:p-4",
        className,
      )}
    >
      {children}
    </div>
  );
};
