import { cn } from "@/shared/lib";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "tw:bg-primary/10 tw:animate-pulse tw:rounded-md",
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
